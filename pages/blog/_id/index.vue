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

  head() {
    let { title, description, image } = this.blog

    title += ' - Richie Developer'
    description += ' - Richie Developer'

    return this.$returnMetaHeaders(this, { title, description, image })
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

<style lang="scss" scoped>
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
</style>
