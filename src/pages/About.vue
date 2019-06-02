<template>
  <Layout>
    
    <h1 class="text-4xl tracking-wider text-green font-normal mb-4">about</h1>

    <div class="sm:flex-wrap md:flex ">
    <div>
      <p>
        <font-awesome-icon :icon="['fas', 'paper-plane']" class="text-light"/>
        <a href="mailto:rsclrk@pm.me" class="ml-4">rsclrk@pm.me</a>
      </p>
    </div>

    <div>
      <p class="md:ml-8">
        <font-awesome-icon :icon="['fas', 'fingerprint']" class="text-light"/>
        <a href="https://keybase.io/rsclarke/pgp_keys.asc" rel="noopener noreferrer" class="ml-4">2E2A 99AD BD79 B107</a>
      </p>
    </div>
    </div>

    <p>
      Hi, I'm Richard Clarke (@rsclarke), a security researcher interested in fuzzing at scale, developing tools to identify vulnerabilities and helping share my knowledge on exploitation, programming and various tech stacks.
    </p>

    <p>
      Previously I spent over 6 years in the telecoms industry, working with large scale embedded real time systems discovering and reporting vulnerabilities to help keep national infrastructure secure. The work focused primarily on source code review, reverse engineering and fuzzing in order to discover vulnerabilities.
    </p>

    <h2>Patreon</h2>

    <p>
      All projects that I publish on <a href="https://github.com/rsclarke" rel="noopener noreferrer">GitHub</a> fall under open source licensing and are free to use.
    </p>

    <p>
      The technical content, and this site, are published under the <a href="https://creativecommons.org/licenses/by/4.0/" rel="noopener noreferrer">Creative Commons - Attribution 4.0 International (CC-BY 4.0)</a> license.  You may reuse this content in your own works (with attribution), which helps further the knowledge in the community.
    </p>

    <p>
      If you would like to help support the creation of new content, tutorials and exercises, buy a coffee, enjoy reading my works, or just to say thanks, please consider becoming a backer on <a href="https://www.patreon.com/rsclarke" rel="noopener noreferrer">Patreon</a>.
    </p>

    <p>
      Thank you, <font-awesome-icon title="love" :icon="['fas', 'heart']" class="text-red"/> rsclarke.
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'about'
  }
}
</script>

<style>
h1, h2, h3, h4, h5, h6 {
  @apply text-green;
}

</style>
