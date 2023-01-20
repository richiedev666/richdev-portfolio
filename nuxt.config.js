export default {
  head: {
    title: 'richdev-portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [{ src: '~/assets/scss/main.scss' }],

  plugins: [{ src: '~/plugins/v-viewer', mode: 'client' }],

  buildModules: [],

  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        baseUrl: process.env.BASE_URL || 'http://localhost:1111',
        locales: [
          { code: 'ru', file: 'ru_RU.js', iso: 'ru_RU' },
          { code: 'en', file: 'en_EN.js', iso: 'en_EN' },
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'lang/',
        strategy: 'no_prefix',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
        },
      },
    ],
  ],

  axios: {
    baseURL: '/',
  },

  build: {},
}
