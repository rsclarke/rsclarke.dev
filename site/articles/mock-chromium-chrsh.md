---
title: Using Mock for chroot Chromium Builds
slug: using-mock-for-chroot-chromium-builds
layout: layouts/article.njk
author: rsclarke
date: 2018-07-03
tags: [mock, chroot, chromium]
canonical_url: "https://dev.to/rsclarke/using-mock-for-chroot-chromium-builds-2ok9"
description: "How to compile Chromium from source on Fedora using Mock for a chroot environment.  This allows for an isolated build and test environment to the host system.  The chrsh wrapper simplifies running commands within the chroot."
---

## Introduction

The [setup guide](https://chromium.googlesource.com/chromium/src/+/master/docs/linux_build_instructions.md) to checking out and building Chromium on Linux provides some guidance for distributions other than Ubuntu. However, the provided scripts for isolating the build environment and installing dependencies are dependant on a Ubuntu or Debian distribution.

This article utilises [Mock](https://github.com/rpm-software-management/mock/wiki) to create a chroot environment on [Fedora](https://getfedora.org/) in which build dependencies and tools will be installed. Building, running and testing Chromium can take place inside the chroot environment to avoid package conflict.

Effectively the chroot environment and all dependencies are defined by a single Mock configuration file. Also provided is a simple bash function to execute commands inside the chroot environment and can be often prefixed to the commands listed in the said setup guide. Alternatively, you can type `chrsh` which will drop you into a bash shell inside the chroot and follow the original guide. Though you won't have to install the additional build dependencies as these are taken care of using Mock.

The files for this are available in the [chrsh](https://github.com/rsclarke/chrsh) repo if you'd like to jump right in.

The remainder of this article will walk through the setup of Mock, chrsh and have the Chromium source code checked out and built!

## Setup

### Mock

As per the mock [wiki](https://github.com/rpm-software-management/mock/wiki#download), setup is fairly straightforward. Though you may wish to take note of the security implication raised when adding the user to the `mock` group.

```bash
sudo dnf install mock
sudo usermod -a -G mock [User name]
newgrp -
```

### chrsh

Grab the files, `chromium.cfg` and `.bashrc`, or clone the repository.

```bash
git clone https://github.com/rsclarke/chrsh.git
cd chrsh
```

Copy `chromium.cfg` to `/etc/mock` and add the contents of `.bashrc` to yours.

```bash
sudo cp chromium.cfg /etc/mock/
cat .bashrc >> ~/.bashrc
source ~/.bashrc
```

The configuration file out of the box makes the assumption that the Chromium source code will be accessible outside of the chroot environment. Otherwise, all development tools and utilities you wish to use would also have to be installed in the chroot environment. chrsh follows the guide and will place the Chromium source code in `~/chromium` and will bind mount this to the home directory of your user inside the chroot.

```bash
mkdir ~/chromium
```

Finally, you can create the chroot environment, which will install all necessary build tools and dependencies.

```bash
mock -r chromium init
```

## Checking out and Building Chromium

The remainder is an adaptation of the [guide](https://chromium.googlesource.com/chromium/src/+/master/docs/linux_build_instructions.md) but using `chrsh`.

### Install `depot_tools`

```bash
chrsh git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
chrsh "echo export PATH=\$PATH:\${HOME}/depot_tools >> ~/.bashrc"
```

### Get the code

```bash
chrsh cd chromium \&\& fetch --nohooks --no-history chromium
chrsh cd chromium/src \&\& gclient runhooks
```

---

#### Side Note

From this point on, commands in the guide expect to be executed from the `chromium/src` directory. Naturally running `chrsh cd chromium/src \&\& <cmd>` isn't exactly elegant. Therefore you can start the shell in this directory by uncommenting the relevant `--chdir` argument in `/etc/mock/chromium.cfg`. This guide assumes you will do this.

Additionally, you can execute `chrsh` standalone to provide a bash shell, instead of executing each command in the guide prefixed.

---

### Building Chromium

As the `chromium` directory is mounted inside the chroot at the same location (inside your home directory), it is best to also `cd ~/chromium/src`. At least you might get tab completion on filenames!

```bash
cd ~/chromium/src

# Generate build targets
chrsh gn gen out/Default

# Compile Chromium
chrsh ninja -C out/Default chrome

# Run Chromium
chrsh out/Default/chrome

```

### Test Targets

Unit tests can be compiled and executed within the chroot also. The following example builds and runs the `pdf_uinttests`. The argument `--gtest_filter` can be used to select test cases.

```bash
chrsh ninja -C out/Default pdf_unittests
chrsh out/Default/pdf_unittests --gtest_filter="RangeSetTest.*"
```

### Updating Chromium Source Checkout

In theory, the `git rebase-update` can be executed outside the chroot.

```bash
chrsh git rebase-update
chrsh gclient sync
```

## Next Steps and Ideas

Hopefully the Mock configuration file is of use to you whilst developing Chromium and chrsh eases the interaction with this. Feel free to comment, the following are a few ideas you might wish to consider further setting up your environment or working on Chromium.

### Further Development

The [Chromium Linux Development](https://chromium.googlesource.com/chromium/src/+/master/docs/linux_development.md) page provides more information on where to start for open issues and contributing.

### Create a Compilation Database

Many IDEs make use of a compilation database to provide rich editing of the project you are working on. The `generate_compdb.py` script in the repository can help create this for you.

```bash
chrsh ./tools/clang/scripts/generate_compdb.py -p out/Default > compile_commands.json
```
