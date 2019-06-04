<template>
    <article :class="post.__typename">
       <PostHeader :post="post" />
       <div v-html="post.content" />
    </article>
</template>

<script>
import PostHeader from '~/components/PostHeader'

export default {
    components: {
        PostHeader
  },
    props: ['post']
}
</script>

<style>

</style>
