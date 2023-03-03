<template>
  <div class="layout-wrapper layout-wrapper--default">
    <Header />

    <Nuxt class="page-wrapper" />

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

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-wrapper {
  flex: 1;
}
</style>
