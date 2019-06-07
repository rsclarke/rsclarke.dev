<template>
  <Layout>

    <h1 class="text-yellow">Vulns</h1>
    
    <template v-if="displayVulns">
      <div v-for="edge in $page.vulns.edges" :key="edge.node.id">
          <PostHeader :post="edge.node" />
          <p>{{edge.node.description}} <g-link :to="edge.node.path">…continue</g-link></p>
      </div>

      <Pageit :pageInfo="$page.vulns.pageInfo" />
    </template>
    <template v-else>
      <p>No public vulnerabilities disclosed yet.</p>
    </template>

  </Layout>
</template>

<!--<page-query>
query Vulns($page: Int) {
  vulns: allVuln(page: $page, perPage: 10) @paginate {
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
</page-query>-->

<script>
import PostHeader from '~/components/PostHeader'

export default {
  components:{
    PostHeader
  },
  metaInfo() {
    return {
      title: 'Latest Vulnerabilities'
    }
  },
  data() {
    return {
      displayVulns: false
    }
  }
}
</script>

<style>

</style>
