<template>
   <Layout>
     <Post :post="$page.vuln" />
   </Layout>
</template>

<page-query>
query Vuln ($path: String!) {
  vuln: vuln (path: $path) {
    __typename
    title
    description
    content
    timeToRead
    date (format: "YYYY/MM/DD")
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<script>
import Post from '~/components/Post'

export default {
  components: {
    Post,
  },
  metaInfo () {
    return {
      title: this.$page.vuln.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.vuln.description
        }
      ]
    }
  }
}
</script>

<style>
h1, h2, h3, h4, h5, h6 {
  @apply text-yellow;
}
</style>