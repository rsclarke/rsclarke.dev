<template>
  <div class="container mx-auto">

    <Header />

    <div class="md:ml-32 md:pl-4 pt-2 pb-2 text-xl">
      <slot/>
    </div>

    <div class="md:ml-32 mk:pl-4 pt-4">
      <Footer />
    </div>
    
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header, Footer
  }  
}
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style src="../assets/base.css" />
