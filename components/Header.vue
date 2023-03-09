<template>
  <header class="header__wrapper">
    <div class="container">
      <div class="header">
        <nuxt-link to="/">
          <div class="header__logo">
            <img src="~/assets/images/richdev-logo.png" alt="" />
          </div>
        </nuxt-link>

        <nav class="header__nav__wrapper" :class="{ 'is-active': headerNav }">
          <ul class="header__nav" v-on-clickaway="closeHeaderNav">
            <li
              v-for="(item, index) in nav"
              :key="`header-nav-item-${index}`"
              class="header__nav__item"
            >
              <a v-if="item.linkType === 'a'" :href="item.link">{{
                item.title
              }}</a>

              <nuxt-link
                v-else-if="item.linkType === 'nuxt-link'"
                :to="item.link"
              >
                {{ item.title }}
              </nuxt-link>
            </li>

            <li
              class="header__nav__item header__nav__item--language"
              :class="{ 'is-active': languageDropdown }"
            >
              <div
                class="header__nav__item--language__placeholder"
                v-on-clickaway="closeLanguageDropdown"
              >
                <div
                  class="header__nav__item--language__placeholder__content"
                  @click="toggleLanguageDropdown"
                >
                  <p>{{ $t('currentLanguage') }}</p>

                  <img
                    :src="require(`~/assets/icons/${$i18n.locale}.png`)"
                    alt=""
                    class="language-icon"
                  />
                </div>

                <transition name="fade">
                  <div
                    v-if="languageDropdown"
                    class="header__nav__item--language__dropdown"
                  >
                    <div
                      v-for="(language, index) in languages"
                      :key="`header-lang-item-${language.code}`"
                      class="header__nav__item--language__dropdown__item"
                      @click="switchLanguageTo(language)"
                    >
                      <span>
                        {{ language.title }}
                      </span>

                      <img
                        :src="require(`~/assets/icons/${language.code}.png`)"
                        alt=""
                        class="language-icon"
                      />
                    </div>
                  </div>
                </transition>
              </div>
            </li>
          </ul>
        </nav>

        <div
          class="header__nav__hamburger"
          @click="toggleHeaderNav"
          :class="{ 'is-active': headerNav }"
        >
          <div class="icon"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'HeaderComponent',

  mixins: [clickaway],

  mounted() {
    const header = document.querySelector('.header__wrapper')

    let lastPageYOffset = window.pageYOffset
    window.addEventListener('scroll', (e) => {
      const scrollingBottom = window.pageYOffset > lastPageYOffset
      const scrollingTop = window.pageYOffset < lastPageYOffset

      if (scrollingBottom) {
        header.classList.add('header__wrapper--hidden')
        this.handleBodyClass(false)
        this.headerNav = false
      }

      if (scrollingTop) {
        header.classList.remove('header__wrapper--hidden')
      }

      lastPageYOffset = window.pageYOffset

      if (window.pageYOffset > 0) {
        header.classList.add('header__wrapper--scrolling')
      } else {
        header.classList.remove('header__wrapper--scrolling')
      }
    })
  },

  data: () => ({
    languageDropdown: false,
    headerNav: false,
  }),

  computed: {
    nav() {
      return [
        {
          title: this.$t('home'),
          link: '/home#home-section',
          linkType: 'a',
        },
        {
          title: this.$t('aboutMe'),
          link: '/home#about-section',
          linkType: 'a',
        },
        {
          title: this.$t('skills'),
          link: '/home#skills-section',
          linkType: 'a',
        },
        {
          title: this.$t('works'),
          link: '/home#works-section',
          linkType: 'a',
        },
        {
          title: this.$t('blog'),
          link: '/blog',
          linkType: 'nuxt-link',
        },
        {
          title: this.$t('contacts'),
          link: '/home#contacts-section',
          linkType: 'a',
        },
      ]
    },

    languages() {
      return [
        {
          title: 'English',
          code: 'en',
        },
        {
          title: 'Русский',
          code: 'ru',
        },
      ]
    },
  },

  methods: {
    async switchLanguageTo({ code }) {
      await this.$i18n.setLocale(code)

      this.closeLanguageDropdown()
    },

    toggleLanguageDropdown() {
      this.languageDropdown = !this.languageDropdown
    },

    closeLanguageDropdown() {
      this.languageDropdown = false
    },

    toggleHeaderNav() {
      this.headerNav = !this.headerNav

      this.handleBodyClass(this.headerNav)
    },

    closeHeaderNav(event) {
      const element = event.target

      const ignoreClassNames = ['icon', 'header__nav__hamburger']

      if (ignoreClassNames.includes(element.classList[0])) return

      this.headerNav = false

      this.handleBodyClass(this.headerNav)
    },

    handleBodyClass(headerNav) {
      headerNav
        ? document.body.classList.add('disabled')
        : document.body.classList.remove('disabled')
    },
  },

  watch: {
    headerNav(val) {
      this.handleBodyClass(val)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/header';
</style>
