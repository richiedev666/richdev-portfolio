<template>
  <div class="blog-item__wrapper">
    <div class="container">
      <div class="blog-item">
        <h1>DO NOT ENTER HERE 🤷‍♂️</h1>

        {{ blog.title }}

        <img :src="blog.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Blogs from '@/blogs'

export default {
  name: 'BlogIdPage',

  asyncData({ route, app }) {
    const { id } = route.params

    const blog = Blogs[app.i18n.locale].find(
      (item) => parseInt(item.id) === parseInt(id)
    )

    return { blog }
  },
}
</script>

<style lang="scss" scoped>
.blog-item {
  &__wrapper {
    padding-top: var(--header-height);
    background-color: var(--primary-yellow-color);
  }
}
</style>
