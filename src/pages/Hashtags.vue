<template>
  <Layout>
    <h1>Hashtags</h1>

    <p>
      <template v-if="$page.hashtags.edges">
        <div class="text-lg mb-2">
          <p>
            <g-link
              class="inline-block text-dark mr-1 bg-light rounded p-1"
              v-for="edge in $page.hashtags.edges"
              :key="edge.node.id"
              :to="edge.node.path"
            ><font-awesome-icon class="text-dark ml-1 mr-1" :icon="['fas', 'hashtag']"/>{{ edge.node.title }}</g-link>
          </p>
        </div>
      </template>
    </p>
  </Layout>
</template>

<page-query>
query Hashtags {
    hashtags: allHashtag {
        edges {
            node {
                id
                title
                path
            }
        }
    }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "hashtags"
  }
};
</script>

<style>
h1 {
  @apply text-light;
}
</style>
