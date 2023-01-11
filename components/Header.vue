<template>
  <header class="header__wrapper">
    <div class="container">
      <div class="header">
        <div class="header__logo">
          <img src="~/assets/images/richdev-logo.png" alt="" />
        </div>

        <nav class="header__nav__wrapper">
          <ul class="header__nav">
            <li
              v-for="(item, index) in nav"
              :key="`header-nav-item-${index}`"
              class="header__nav__item"
            >
              <a :href="item.link">{{ item.title }}</a>
            </li>

            <li class="header__nav__item header__nav__item--language">
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
  }),

  computed: {
    nav() {
      return [
        {
          title: this.$t('home'),
          link: '/home#home-section',
        },
        {
          title: this.$t('aboutMe'),
          link: '/home#about-section',
        },
        {
          title: this.$t('skills'),
          link: '/home#skills-section',
        },
        {
          title: this.$t('works'),
          link: '/home#works-section',
        },
        {
          title: this.$t('experience'),
          link: '/home#experience-section',
        },
        {
          title: this.$t('contacts'),
          link: '/home#contacts-section',
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
        {
          title: 'Türkmen',
          code: 'tk',
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
  },
}
</script>
