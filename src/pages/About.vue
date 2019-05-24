<template>
  <Layout>
    
    <h1 class="text-4xl tracking-wider text-green font-normal mb-4">about</h1>

    <p class="tracking-wide text-justify leading-relaxed mb-4">
      <font-awesome-icon :icon="['fas', 'paper-plane']" class="text-light"/>
      <a href="mailto:rsclrk@pm.me" class="text-blue ml-4">rsclrk@pm.me</a>
      <font-awesome-icon :icon="['fas', 'fingerprint']" class="text-light ml-8"/>
      <a href="https://keybase.io/rsclarke/pgp_keys.asc" class="text-blue ml-4">2E2A 99AD BD79 B107</a>
    </p>

    <p class="tracking-wide text-justify leading-relaxed mb-4">
      Hi, I'm Richard Clarke (@rsclarke), a security researcher interested in fuzzing at scale, developing tools to identify vulnerabilities and helping share my knowledge on exploitation, programming and various tech stacks.
    </p>

    <p class="tracking-wide text-justify leading-relaxed mb-4">
      Previously I spent over 6 years in the telecoms industry, working with large scale embedded real time systems discovering and reporting vulnerabilities to help keep national infrastructure secure. The work focused primarily on source code review, reverse engineering and fuzzing in order to discover vulnerabilities.
    </p>

    <p class="tracking-wide text-justify leading-relaxed mb-4">
      I'm currently looking for work!  Feel free to reach out at <a href="mailto:rsclrk@pm.me" class="text-blue">rsclrk@pm.me</a> or <a href="https://linkedin.com/rsclrk" class="text-blue">LinkedIn</a>.
    </p>

    <h2 class="text-2xl tracking-wider text-green font-normal mb-4 mt-8">Patreon</h2>

    <p class="tracking-wide text-justify leading-relaxed mb-4">
      All projects that I publish on <a href="https://github.com/rsclarke" class="text-blue">GitHub</a> fall under open source licensing and are free to use.
    </p>

    <p class="tracking-wide text-justify leading-relaxed mb-4">
      The technical content, and this site, are published under the <a href="#" class="text-blue">Creative Commons - Attribution 4.0 International (CC-BY 4.0)</a> license.  You may reuse this content in your own works (with attribution), which helps further the knowledge in the community.
    </p>

    <p class="tracking-wide text-justify leading-relaxed mb-4">
      If you would like to help support the creation of new content, tutorials and exercises, buy a coffee, enjoy reading my works, or just to say thanks, please consider becoming a backer on <a href="#" class="text-blue">Patreon</a>.
    </p>

    <p class="tracking-wide text-justify leading-relaxed mb-4">
      Thank you, <font-awesome-icon :icon="['fas', 'heart']" class="text-red"/> rsclarke.
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

</style>
