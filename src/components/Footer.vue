<template>
  <footer class="flex-wrap justify-center text-center">
      <div>
        <p>
          Back through
          <a
            href="https://www.patreon.com/rsclarke"
            title="rsclarke on Patreon"
            target="_blank"
            class="text-light"
          >
            <font-awesome-icon :icon="['fab', 'patreon']"/>
          </a> to support new content.
        </p>
      </div>
      <div>
        <p class="text-light">
          Made with
          <font-awesome-icon :icon="['fas', 'heart']" class="text-red"/> under
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            class="text-light"
            title="Creative Commons - Attribution 4.0 International (CC BY 4.0)"
          >
            <font-awesome-icon :icon="['fab', 'creative-commons']"/>
            <font-awesome-icon :icon="['fab', 'creative-commons-by']" class="ml-2"/>
          </a>.
        </p>
      </div>
      <div class="tracking-widest">
        <a href="#" title="RSS" class="text-light text-sm">
          <font-awesome-icon :icon="['fas', 'rss']"/>
        </a> &nbsp;
        <a href="#" title="Sitemap" class="text-light text-sm">
          <font-awesome-icon :icon="['fas', 'sitemap']"/>
        </a>
      </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
