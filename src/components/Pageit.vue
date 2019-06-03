<template>
    <div class="justify-center text-center" id="pager">
      <Pager :info="pageInfo" :linkClass="'ml-4 mr-4'" :prevLabel="'<'" :nextLabel="'>'" :firstLabel="'<<'" :lastLabel="'>>'" />
    </div>
</template>

<script>
import {Pager} from 'gridsome'

export default {
    components: {
        Pager,
    },
    props: ['pageInfo']
}
</script>

<style>
#pager .active {
  @apply text-light
}
</style>
