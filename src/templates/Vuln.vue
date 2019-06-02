<template>
   <Layout>
     <article>
       <PostHeader :post="$page.vuln" />
       <div v-html="$page.vuln.content" />
     </article>
   </Layout>
</template>

<page-query>
query Vuln ($path: String!) {
  vuln: vuln (path: $path) {
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
import PostHeader from '~/components/PostHeader'

export default {
  components: {
    PostHeader,
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