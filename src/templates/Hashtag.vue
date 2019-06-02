<template>
  <Layout>
    <h1 class="text-light"><font-awesome-icon :icon="['fas', 'hashtag']" class="mr-2 text-light"/>{{ $page.hashtag.title }}</h1>
    
      <div v-for="edge in $page.hashtag.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          <h2 v-if="edge.node.__typename === 'Article'" class="text-red mb-2">{{edge.node.title }}</h2>
          <h2 v-else-if="edge.node.__typename === 'Vuln'" class="text-yellow mb-2">{{edge.node.title}}</h2>
           </g-link>
            <PostMeta :post="edge.node" />
          <p>{{edge.node.description}} <g-link :to="edge.node.path">…continue</g-link></p>
      </div>
  </Layout>
</template>

<page-query>
query Tag($id: String!) {
  hashtag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          __typename
          ... on Article {
            id
            title
            description
            path
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
              description
              path
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
import PostMeta from '~/components/PostMeta'
export default {
    components:{
        PostMeta
    }
}
</script>

<style>

</style>
