<template>
    <div>
        <div>
            <template v-if="post.title">
                <div class="">
                    <h1 class="mb-2">{{ post.title }}</h1>
                </div>
            </template>
        </div>
        <PostMeta :post="post" />
    </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'

export default {
    components: {
    PostMeta,
  },
    props: ['post']
}
</script>
