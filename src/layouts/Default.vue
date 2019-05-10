<template>
  <div class="bg-red">
    <header>
      <strong>
        <g-link to="/"><span class="font-mono">{{ $static.metaData.siteName }}</span></g-link>
      </strong>
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
