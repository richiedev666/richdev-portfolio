<template>
  <div class="blog__item">
    <nuxt-link :to="`/blog/${index + 1}`">
      <div class="blog__item__image">
        <img :src="item.image" alt="" />
      </div>
    </nuxt-link>

    <div class="blog__item__content">
      <div class="blog__item__content__panel">
        <span>{{ item.date }}</span>

        <span v-for="(tag, index) in item.tags">{{ tag }}</span>
      </div>

      <h2>{{ item.title }}</h2>

      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',

  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.blog__item {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: #fff;
  padding: 14px;
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
      border-radius: 10px;
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

    &__panel {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
      margin-bottom: 8px;

      span {
        font-size: clamp(0.75rem, 0.5938rem + 0.5vw, 0.875rem);
        color: var(--secondary-text-color);
        position: relative;
        display: inline-flex;
        align-items: center;

        &::after {
          content: '';
          width: 4px;
          height: 4px;
          background-color: var(--secondary-text-color);
          position: absolute;
          display: block;
          right: -13px;
          border-radius: 50%;
        }

        &:last-child {
          &::after {
            display: none;
          }
        }
      }
    }
  }
}
</style>
