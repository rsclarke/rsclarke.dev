<template>
  <div>
  <div class="text-base mb-2" v-if="post.tags">
    <g-link
      class="inline-block text-dark mr-1 bg-light rounded p-1"
      v-for="tag in post.tags"
      :key="tag.id"
      :to="tag.path"
    ><font-awesome-icon class="text-dark text-sm ml-1 mr-1" :icon="['fas', 'hashtag']"/>{{ tag.title }}</g-link>
  </div>
  <div class="mb-4">
    <p class="text-base text-grey">Published: {{post.date}}<template v-if="post.timeToRead">, {{post.timeToRead}} min read.</template></p>
  </div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>
