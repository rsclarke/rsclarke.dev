<template>
  <div class="container mx-auto">

   
    <header class="flex flex-wrap items-center justify-center md:justify-start">
      
       <!-- logo -->
      <div class="flex-no-shrink">
        <g-link to="/">
          <g-image src="~/assets/me.jpg" immediate="true" class="border-4 border-light border-solid rounded-full h-32 w-32 p-1"/>
        </g-link>
      </div>

      <div class="flex flex-col ml-4 sm:justify-center">
      <!-- name -->
      <div>
        <g-link to="/" class="text-4xl tracking-wider text-light ">rsclarke</g-link>
      </div>

      <!-- social icons -->
      <div>
        <aside class="text-2xl flex justify-between pl-1 pr-1">
          <a href="https://github.com/rsclarke" title="@rsclarke on GitHub" target="_blank" class="text-red"><font-awesome-icon :icon="['fab', 'github']" /></a>
          <a href="https://dev.to/rsclarke" title="@rsclarke on DEV" target="_blank" class="text-yellow"><font-awesome-icon :icon="['fab', 'dev']" /></a>
          <a href="https://twitter.com/rsclarke" title="@rsclarke on Twitter" target="_blank" class="text-blue"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
          <a href="https://keybase.io/rsclarke" title="rsclarke on Keybase" target="_blank" class="text-green"><font-awesome-icon :icon="['fab', 'keybase']" /></a>
        </aside>
      </div>

      </div>

      <!-- menu -->
      <div class="md:ml-auto md:mr-24 pt-4 md:pt-0">
        <nav class="text-xl">
          <g-link to="/articles" class="text-red">articles</g-link>
          <g-link to="/bugs" class="text-yellow ml-8">bugs</g-link>
          <g-link to="/code" class="text-blue ml-8">code</g-link>
          <g-link to="/about" class="text-green ml-8">about</g-link>
        </nav>
      </div>
    </header>

    <div class="md:ml-32 pl-4 pt-2 pb-2 pr-4 md:pr-24 text-xl">
      <slot/>
    </div>


    <footer>
      <div class="flex-wrap pt-4 md:ml-32 mb-2 pl-4 pr-4 md:pr-24 justify-center text-center">
        <div class="">
          <p>
            Back through <a href="https://www.patreon.com/rsclarke" title="rsclarke on Patreon" target="_blank" class="text-light"><font-awesome-icon :icon="['fab', 'patreon']" /></a> to support new content.
          </p>
        </div>
        <div class="">
          <p class="text-light">
            Made with <font-awesome-icon :icon="['fas', 'heart']" class="text-red"/> under 
            <a href="https://creativecommons.org/licenses/by/4.0/"  target="_blank" class="text-light" title="Creative Commons - Attribution 4.0 International (CC BY 4.0)" >
              <font-awesome-icon :icon="['fab', 'creative-commons']"/>
              <font-awesome-icon :icon="['fab', 'creative-commons-by']" class="ml-2"/>
            </a>.
          </p>
        </div>
        <div class="tracking-widest">
          <a href="#" title="RSS" class="text-light text-sm"><font-awesome-icon :icon="['fas', 'rss']" /></a> &nbsp;
          <a href="#" title="Sitemap" class="text-light text-sm"><font-awesome-icon :icon="['fas', 'sitemap']" /></a> 
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>


</style>
