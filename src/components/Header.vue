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
            target="_blank"
            class="text-red"
          >
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
          <a
            href="https://dev.to/rsclarke"
            title="@rsclarke on DEV"
            target="_blank"
            class="text-yellow"
          >
            <font-awesome-icon :icon="['fab', 'dev']"/>
          </a>
          <a
            href="https://twitter.com/rsclarke"
            title="@rsclarke on Twitter"
            target="_blank"
            class="text-blue"
          >
            <font-awesome-icon :icon="['fab', 'twitter']"/>
          </a>
          <a
            href="https://keybase.io/rsclarke"
            title="rsclarke on Keybase"
            target="_blank"
            class="text-green"
          >
            <font-awesome-icon :icon="['fab', 'keybase']"/>
          </a>
        </aside>
      </div>
    </div>

    <!-- menu -->
    <div class="md:ml-auto pt-4 md:pt-0">
      <nav class="text-xl">
        <g-link to="/articles" class="text-red">articles</g-link>
        <g-link to="/bugs" class="text-yellow ml-8">bugs</g-link>
        <g-link to="/code" class="text-blue ml-8">code</g-link>
        <g-link to="/about" class="text-green ml-8">about</g-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
