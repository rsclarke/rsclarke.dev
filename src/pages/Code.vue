<template>
  <Layout>
    <article class="Code">
      <h1>Code</h1>
      <p>The following is a list of projects I'm working on.</p>
      <h2 class="mb-0">rehype-shiki</h2>
      <p>
        <font-awesome-icon :icon="['fab', 'github']" class="text-lg"/>&nbsp;<a href="https://github.com/rsclarke/rehype-shiki" rel="noopener noreferrer">rsclarke/rehype-shiki</a>
      </p>
      <p>
        rehype plugin to add syntax highlighting to HTML <code>&lt;pre&gt;&lt;code&gt;...&lt;/pre&gt;&lt;/code&gt;</code> blocks.  Code blocks on this site are rendered using this.
      </p>

      <h2 class="mb-0">chrsh</h2>
      <p>
        <font-awesome-icon :icon="['fab', 'github']" class="text-lg"/>&nbsp;<a href="https://github.com/rsclarke/chrsh" rel="noopener noreferrer">rsclarke/chrsh</a>
      </p>
      <p>
        Mock configuration for Chromium to build, test and run in a chroot environment.
      </p>
      <p>
        This repo provides a <a href="https://github.com/rpm-software-management/mock" rel="noopener noreferrer">Mock</a> configuration file and bash function to isolate the Chromium build environment and ease the interaction with.
        You can find a guide on how use it <a href="/articles/using-mock-for-chroot-chromium-builds">here</a>.
      </p>

      
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Code'
  }
}
</script>

<style>

</style>
