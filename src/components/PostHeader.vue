<template>
    <div>
        <PostTitle :post="post" />
        <PostMeta :post="post" />
    </div>
</template>

<script>
import PostTitle from '~/components/PostTitle'
import PostMeta from '~/components/PostMeta'

export default {
    components: {
        PostTitle,
        PostMeta
  },
    props: ['post']
}
</script>
