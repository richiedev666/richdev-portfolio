<template>
  <div class="blog__wrapper">
    <div class="container">
      <div class="blog">
        <div
          v-for="(item, index) in blogItems"
          :key="`blog-item-${index}`"
          class="blog__item"
        >
          <nuxt-link :to="`/blog/${index + 1}`">
            <div class="blog__item__image">
              <img :src="item.image" alt="" />
            </div>
          </nuxt-link>

          <div class="blog__item__content">
            <h2>{{ item.title }}</h2>

            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blogs from '@/blogs'

export default {
  name: 'BlogPage',

  computed: {
    blogItems() {
      return Blogs[this.$i18n.locale] || []
    },
  },
}
</script>

<style lang="scss" scoped>
.blog {
  &__wrapper {
    padding-top: var(--header-height);
    background-color: var(--primary-yellow-color);
  }

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  &__item {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    &__image {
      width: 100%;
      height: 300px;

      img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 5px;

      h2 {
        font-size: clamp(1.125rem, 0.6563rem + 1.5vw, 1.5rem);
      }

      p {
        font-size: clamp(0.75rem, 0.5938rem + 0.5vw, 0.875rem);
      }
    }
  }
}
</style>
