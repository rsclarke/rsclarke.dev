<template>
  <Layout>
    <g-link :to="$page.hashtag.path"><h1 class="text-light"><font-awesome-icon :icon="['fas', 'hashtag']" class="mr-2 text-light"/>{{ $page.hashtag.title }}</h1></g-link>
    
      <div v-for="edge in $page.hashtag.belongsTo.edges" :key="edge.node.id">
          <PostHeader :post="edge.node" />
          <p>{{edge.node.description}}<g-link :to="edge.node.path"> …read more >></g-link></p>
      </div>

      <Pageit :pageInfo="$page.hashtag.belongsTo.pageInfo" />
     
  </Layout>
</template>

<page-query>
query Tag($id: ID!, $page: Int) {
  hashtag(id: $id) {
    title
    path
    belongsTo(page: $page, perPage: 10) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          __typename
          ... on Article {
            id
            title
            description
            path
            timeToRead
            date (format: "YYYY/MM/DD")
            tags {
                id
                title
                path
            }
          }
#          ... on Vuln {
#              id
#              title
#              description
#              path
#              timeToRead
#              date (format: "YYYY/MM/DD")
#              tags {
#                id
#                title
#                path
#              }
#          }
        }
      }
    }
  }
}
</page-query>

<script>
import Pageit from '~/components/Pageit'
import PostHeader from '~/components/PostHeader'
export default {
    components:{
        PostHeader,
        Pageit
    },
    metaInfo() {
      return {
        title: '#' + this.$page.hashtag.title
      }
      
  }
}
</script>

<style>

</style>
