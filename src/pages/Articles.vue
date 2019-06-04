<template>
  <Layout>

    <h1 class="text-red">Articles</h1>
    
    <template v-if="$page.articles.totalCount > 0">
      <div v-for="edge in $page.articles.edges" :key="edge.node.id">
          <PostHeader :post="edge.node" />
          <p>{{edge.node.description}} <g-link :to="edge.node.path">…continue</g-link></p>
      </div>

      <Pageit :pageInfo="$page.articles.pageInfo" />
    </template>
    <template v-else>
      <p>No articles found!</p>
    </template>

  </Layout>
</template>

<page-query>
query Articles($page: Int) {
  articles: allArticle(page: $page, perPage: 10) @paginate {
    totalCount
    pageInfo {
        totalPages
        currentPage
    }
    edges {
      node {
        __typename
        title
        path
        description
        timeToRead
        date (format: "YYYY/MM/DD")
        tags {
          id
          title
          path
        }
      }
    }    
  }
}
</page-query>

<script>
import PostHeader from '~/components/PostHeader'

export default {
  components:{
    PostHeader
  },
  metaInfo() {
    return {
      title: 'Latest Articles'
    }
  }
}
</script>

<style>

</style>
