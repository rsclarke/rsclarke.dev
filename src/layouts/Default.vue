<template>
  <div class="bg-red font-mono">
    <header>
      <strong>
        <g-link to="/">rsclarke</g-link>
      </strong>
      <nav>
        <a href="#"><font-awesome-icon :icon="['fab', 'github']" /></a>
        <a href="#"><font-awesome-icon :icon="['fab', 'dev']" /></a>
        <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        <a href="#"><font-awesome-icon :icon="['fab', 'keybase']" /></a>
      </nav>
      <nav class="nav">
        <g-link to="/articles">articles</g-link>
        <g-link to="/bugs">bugs</g-link>
        <g-link to="/code">code</g-link>
        <g-link to="/whois">whois</g-link>
      </nav>
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
