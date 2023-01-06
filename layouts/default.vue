<template>
  <div class="layout-wrapper layout-wrapper--default">
    <Header />

    <div class="page-wrapper page-wrapper--default">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  components: { Header },
}
</script>
