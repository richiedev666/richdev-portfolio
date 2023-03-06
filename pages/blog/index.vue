<template>
  <div class="blog__wrapper">
    <div class="home-section__background"></div>

    <div class="home-section__background__effect"></div>

    <div class="container">
      <div class="blog">
        <BlogCard
          v-for="(item, index) in blogItems"
          :key="`blog-item-${index}`"
          :item="item"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Blogs from '@/blogs'
import BlogCard from '~/components/Blog/BlogCard'

export default {
  name: 'BlogPage',
  components: { BlogCard },
  computed: {
    blogItems() {
      return Blogs[this.$i18n.locale] || []
    },
  },
  head() {
    const { title, description } = this.$t('meta.blog')
    return this.$returnMetaHeaders(this, { title, description })
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/components/sections/home-section.scss';

.blog {
  &__wrapper {
    background-color: var(--primary-yellow-color);
  }

  padding-top: calc(var(--header-height) + 1rem);
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 992px) {
  .blog {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 578px) {
  .blog {
    grid-template-columns: 1fr;
  }
}
</style>
