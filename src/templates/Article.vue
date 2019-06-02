<template>
   <Layout>
       <h1 class="text-4xl tracking-wider text-red font-normal mb-4">$page.article.title</h1>
       <article v-html="$page.article.content" />
   </Layout>
</template>

<page-query>
query Article ($path: String!) {
  article: article (path: $path) {
    title
    content
    timeToRead
    date
    excerpt
    tags {
      id
      title
      path
    }
  }
}
</page-query>


<script>
export default {
  metaInfo () {
    return {
      title: this.$page.article.title
    }
  }
}
</script>

<style>

</style>