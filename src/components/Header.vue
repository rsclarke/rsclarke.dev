<template>
  <header class="flex flex-wrap items-center justify-center md:justify-start">
   
   
    <!-- logo -->
    <div class="flex-no-shrink">
      <g-link to="/">
        <g-image
          src="~/assets/me.jpg"
          immediate="true"
          class="border-4 border-light border-solid rounded-full h-32 w-32 p-1"
        />
      </g-link>
    </div>


    <!-- flex-col so social icons space out to width of name -->
    <div class="flex-col ml-4 sm:justify-center">

      <!-- name -->
      <div>
        <g-link to="/" class="text-4xl tracking-wider text-light">rsclarke</g-link>
      </div>

      <!-- social icons -->
      <div>
        <aside class="text-2xl flex justify-between pl-1 pr-1">
          <a
            href="https://github.com/rsclarke"
            title="@rsclarke on GitHub"
            rel="noopener noreferrer"
            class="text-red"
          >
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
          <a
            href="https://dev.to/rsclarke"
            title="@rsclarke on DEV"
            rel="noopener noreferrer"
            class="text-yellow"
          >
            <font-awesome-icon :icon="['fab', 'dev']"/>
          </a>
          <a
            href="https://twitter.com/rsclarke"
            title="@rsclarke on Twitter"
            rel="noopener noreferrer"
            class="text-blue"
          >
            <font-awesome-icon :icon="['fab', 'twitter']"/>
          </a>
          <a
            href="https://keybase.io/rsclarke"
            title="rsclarke on Keybase"
            rel="noopener noreferrer"
            class="text-green"
          >
            <font-awesome-icon :icon="['fab', 'keybase']"/>
          </a>
        </aside>
      </div>
    </div>

    <!-- menu -->
    <div class="md:ml-auto pt-4 md:pt-0 sm:justify-center">
      <nav class="text-xl text-center">
        <g-link to="/articles" class="text-red inline-block">articles</g-link>
        <g-link to="/vulns" class="text-yellow ml-8 inline-block">vulns</g-link>
        <g-link to="/code" class="text-blue ml-8 inline-block">code</g-link>
        <g-link to="/about" class="text-green ml-8 inline-block">about</g-link>
        <a href="https://kb.rsclarke.dev" target="_blank" title="Knowledge Base" class="inline-block ml-8 text-light">kb<sup><font-awesome-icon class="text-blue" size="xs" :icon="['fas', 'external-link-alt']"/></sup></a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
