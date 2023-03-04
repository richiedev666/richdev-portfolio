<template>
  <div class="blog-item__wrapper">
    <div class="home-section__background"></div>

    <div class="home-section__background__effect"></div>

    <div class="container">
      <div class="blog-item">
        <div class="blog-item__header">
          <div class="blog-item__header__content">
            <span>{{ blog.date }}</span>
            <h1>{{ blog.title }}</h1>
            <p>{{ blog.description }}</p>

            <div class="blog-item__header__content__tags">
              <span v-for="(tag, index) in blog.tags" :key="`tag-${index}`">{{
                tag
              }}</span>
            </div>
          </div>

          <div class="blog-item__header__image">
            <img :src="blog.image" alt="" />
          </div>

          <div id="scroll-to-bottom" @click="scrollToBottom">↓</div>
        </div>

        <div class="blog-item__content" v-html="blog.content"></div>
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

  methods: {
    scrollToBottom() {
      window.scrollTo({
        top: document.documentElement.clientHeight,
      })
    },

    updatePost() {
      this.blog = Blogs[this.$i18n.locale].find(
        (item) => parseInt(item.id) === parseInt(this.blog.id)
      )
    },
  },

  watch: {
    '$i18n.locale': {
      handler() {
        this.updatePost()
      },
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/components/sections/home-section.scss';
@import url('https://fonts.googleapis.com/css?family=Special+Elite');

#scroll-to-bottom {
  animation: move 1s ease-in-out infinite alternate;
  position: absolute;
  top: 50vh;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-red-color);
  color: white;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: translateY(2px);
  }
}

@keyframes move {
  from {
    transform: translateY(-5px);
  }
  to {
    transform: translateY(5px);
  }
}

.home-section {
  &__background,
  &__background__effect {
    position: fixed;
  }
}

.blog-item {
  &__wrapper {
    background-color: var(--primary-yellow-color);
  }

  position: relative;
  padding-top: calc(var(--header-height) + 1rem);
  padding-bottom: 40px;
  z-index: 1;

  &__header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 20px;
    height: calc(100vh - var(--header-height) - 6rem);
    position: relative;
    margin-bottom: 6rem;

    &__content {
      display: flex;
      flex-direction: column;
      gap: 10px;

      h1 {
        font-size: clamp(2.625rem, 1.2188rem + 4.5vw, 3.75rem);
        font-weight: 600;
      }

      p {
        font-size: clamp(1.125rem, 0.5rem + 2vw, 1.625rem);
      }

      &__tags {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        text-transform: uppercase;

        span {
          border: 1.5px solid var(--primary-red-color);
          padding: 6px;
          border-radius: 10px;
          font-size: clamp(0.625rem, 0.4688rem + 0.5vw, 0.75rem);
        }
      }
    }

    &__image {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
      }
    }
  }

  &__content {
    .title {
      &-h1 {
        font-size: clamp(1.5rem, 0.875rem + 2vw, 2rem);
        font-weight: 600;
      }
      &-h2 {
        font-size: clamp(1.125rem, 0.8125rem + 1vw, 1.375rem);
        font-weight: 600;
      }
    }

    .text {
      font-size: clamp(0.875rem, 0.5625rem + 1vw, 1.125rem);
    }

    .block {
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 2px;

      li {
        position: relative;
        display: flex;
        align-items: center;
        padding-left: calc(10px + 8px);

        &::before {
          content: '';
          display: inline-block;
          width: 10px;
          height: 10px;
          position: absolute;
          left: 0;
          background-color: var(--primary-red-color);
          border-radius: 50%;
        }
      }

      &-numbered {
        counter-reset: ordered;
        display: flex;
        flex-direction: column;
        gap: 2px;

        li {
          position: relative;
          display: flex;
          align-items: center;
          padding-left: calc(10px + 8px);

          &::before {
            content: counter(ordered);
            counter-increment: ordered;
            position: absolute;
            left: 0;
            color: var(--primary-red-color);
            border-radius: 50%;
            width: 10px;
            text-align: center;
          }
        }
      }
    }

    .image-full-width {
      width: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: left;
      }
    }

    .blockquote {
      padding-left: 5rem;
      font-family: 'Special Elite', cursive;
      margin: 20px 0;

      blockquote {
        font-weight: 100;
        font-size: 2rem;
        max-width: 600px;
        line-height: 1.4;
        position: relative;
        margin: 0;
        padding: 0.5rem;

        &:after,
        &:before {
          position: absolute;
          color: var(--primary-red-color);
          font-size: 8rem;
          width: 4rem;
          height: 4rem;
        }

        &:before {
          content: '“';
          left: -5rem;
          top: -2rem;
        }

        &:after {
          content: '”';
          right: -5rem;
          bottom: 1rem;
        }
      }
      cite {
        line-height: 3;
        text-align: left;
      }
    }
  }
}
</style>
