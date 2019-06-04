<template>
  <Layout>
    
    <template v-if="$page.rsclarke.belongsTo.totalCount > 0">
      <div v-for="edge in $page.rsclarke.belongsTo.edges" :key="edge.node.id">
        <Post :post="edge.node" />
      </div>

      <Pageit :pageInfo="$page.rsclarke.belongsTo.pageInfo" />
    </template>

    <template v-else>
      <p>Oops, not written anything!</p>
    </template>
    
  </Layout>
</template>

<page-query>
query Entries($page: Int) {
  rsclarke:author(id: "rsclarke") {
    belongsTo(page: $page, perPage: 3) @paginate {
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
            content
            path
            timeToRead
            date (format: "YYYY/MM/DD")
            tags {
                id
                title
                path
            }
          }
          ... on Vuln {
              id
              title
              content
              path
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
  }
}
</page-query>

<script>
import Pageit from '~/components/Pageit'
import Post from '~/components/Post'

export default {
  components: {
    Post,
    Pageit
  },
  metaInfo() {
    return {
      title: 'Security Researcher'
    }
    
  }
}
</script>

<style>

</style>
