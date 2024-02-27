<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from './views/layouts/Header.vue'
import Footer from './views/layouts/Footer.vue'
import Main from './views/layouts/Main.vue'

export default {
  components: {
    Header,
    Footer,
    Main,
  }
}
</script>
