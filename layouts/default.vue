<template>
  <div class="layout-wrapper layout-wrapper--default">
    <Header />

    <div class="page-wrapper page-wrapper--default">
      <Nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '@/components/Footer'
export default {
  components: { Footer, Header },
}
</script>
