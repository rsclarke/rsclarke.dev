<template>
  <div>
  <g-link :to="post.path">
    <h1 v-if="post.__typename === 'Article'" class="text-red mb-2">{{post.title }}</h1>
    <h1 v-else-if="post.__typename === 'Vuln'" class="text-yellow mb-2">{{post.title}}</h1>
  </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>
