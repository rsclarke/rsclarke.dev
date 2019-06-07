<template>
  <footer class="flex-wrap justify-center text-center text-light">
      <div>
          Support through
          <a
            href="https://www.patreon.com/rsclarke"
            title="rsclarke on Patreon"
            rel="noopener noreferrer"
            class="text-light"
          >
            <font-awesome-icon :icon="['fab', 'patreon']"/>
          </a> for new content.
      </div>
      <div>
          Made with
          <font-awesome-icon :icon="['fas', 'heart']" class="text-red"/> under
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            rel="noopener noreferrer"
            class="text-light"
            title="Creative Commons - Attribution 4.0 International (CC BY 4.0)"
          >
            <font-awesome-icon :icon="['fab', 'creative-commons']"/>
            <font-awesome-icon :icon="['fab', 'creative-commons-by']" class="ml-2"/>
          </a>.
      </div>
      <div class="tracking-widest">
        <g-link to="/hashtags" class="text-light text-sm">
           <font-awesome-icon :icon="['fas', 'hashtag']"/>
        </g-link> &nbsp;
        <a href="/feed.atom" title="rsclarke.dev atom feed" class="text-light text-sm">
          <font-awesome-icon :icon="['fas', 'rss']"/>
        </a> &nbsp;
        <a href="/sitemap.xml" title="Sitemap" class="text-light text-sm">
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
