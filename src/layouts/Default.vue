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
        <nav class="text-2xl flex justify-between">
          <a href="#" class="text-red"><font-awesome-icon :icon="['fab', 'github']" /></a>
          <a href="#" class="text-yellow"><font-awesome-icon :icon="['fab', 'dev']" /></a>
          <a href="#" class="text-blue"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
          <a href="#" class="text-green"><font-awesome-icon :icon="['fab', 'keybase']" /></a>
        </nav>
      </div>

      </div>

      <!-- menu -->
      <div class="md:ml-auto">
        <nav class="text-xl">
          <g-link to="/articles" class="text-red">articles</g-link>
          <g-link to="/bugs" class="text-yellow ml-8">bugs</g-link>
          <g-link to="/code" class="text-blue ml-8">code</g-link>
          <g-link to="/whois" class="text-green ml-8">whois</g-link>
        </nav>
      </div>
    </header>
    <slot/>
    <footer>

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
