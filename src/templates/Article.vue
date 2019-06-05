<template>
   <Layout>
     <Post :post="$page.article" />
   </Layout>
</template>

<page-query>
query Article ($path: String!) {
  article: article (path: $path) {
    __typename
    title
    description
    content
    path
    timeToRead
    canonical_url
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
    var meta = {
      title: this.$page.article.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.article.canonical_url
        }
      ]
    }

    if (this.$page.article.canonical_url){
      meta.link = [
        { 
          rel: 'canonical', 
          href: this.$page.article.canonical_url 
        }
      ]
    }

    return meta
  }
}
</script>

<style>
h1, h2, h3, h4, h5, h6 {
  @apply text-red;
}
</style>