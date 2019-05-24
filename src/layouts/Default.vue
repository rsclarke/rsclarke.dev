<template>
  <div class="container mx-auto">

   
    <header class="flex flex-wrap items-center">
      
       <!-- logo -->
      <div class="flex-no-shrink">
        <g-link to="/">
          <g-image src="~/assets/me.jpg" immediate="true" class="border-4 border-light border-solid rounded-full h-32 w-32 p-1"/>
        </g-link>
      </div>

      <div class="flex flex-col ml-4">
      <!-- name -->
      <div>
        <g-link to="/" class="text-4xl tracking-wider text-light ">rsclarke</g-link>
      </div>

      <!-- social icons -->
      <div>
        <aside class="text-2xl flex justify-between pl-1 pr-1">
          <a href="https://github.com/rsclarke" title="@rsclarke on GitHub" class="text-red"><font-awesome-icon :icon="['fab', 'github']" /></a>
          <a href="https://dev.to/rsclarke" title="@rsclarke on DEV" class="text-yellow"><font-awesome-icon :icon="['fab', 'dev']" /></a>
          <a href="https://twitter.com/rsclarke" title="@rsclarke on Twitter" class="text-blue"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
          <a href="https://keybase.io/rsclarke" title="rsclarke on Keybase" class="text-green"><font-awesome-icon :icon="['fab', 'keybase']" /></a>
        </aside>
      </div>

      </div>

      <!-- menu -->
      <div class="md:ml-auto">
        <nav class="text-xl">
          <g-link to="/articles" class="text-red">articles</g-link>
          <g-link to="/bugs" class="text-yellow ml-8">bugs</g-link>
          <g-link to="/code" class="text-blue ml-8">code</g-link>
          <g-link to="/about" class="text-green ml-8">about</g-link>
          <a href="#" title="RSS" class="text-light text-sm ml-8"><font-awesome-icon :icon="['fas', 'rss']" /></a>
          <a href="#" title="Sitemap" class="text-light text-sm ml-8"><font-awesome-icon :icon="['fas', 'sitemap']" /></a>
        </nav>
      </div>
    </header>
    <div class="ml-32 pl-4 pt-2 pb-2 pr-24 text-xl">
      <slot/>
    </div>
    <footer>
      <div class="flex pt-4 ml-32 mb-2 pl-4 pr-24 justify-between">
        <div class="">
          <p>
            Subscribe with <a href="#" title="rsclarke on Patreon" class="text-light"><font-awesome-icon :icon="['fab', 'patreon']" /></a> to support projects and new content.
          </p>
        </div>
        <div class="">
          <p class="text-light">
            Made with <font-awesome-icon :icon="['fas', 'heart']" class="text-red"/> under 
            <a href="https://creativecommons.org/licenses/by/4.0/" class="text-light" title="Creative Commons - Attribution 4.0 International (CC BY 4.0)" >
              <font-awesome-icon :icon="['fab', 'creative-commons']"/>
              <font-awesome-icon :icon="['fab', 'creative-commons-by']" class="ml-2"/>
            </a>.
          </p>
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
