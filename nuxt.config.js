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

  plugins: [],

  buildModules: [],

  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        baseUrl: process.env.BASE_URL || 'http://localhost:1111',
        locales: [
          { code: 'tk', file: 'tk_TK.js', iso: 'tk_TK' },
          { code: 'ru', file: 'ru_RU.js', iso: 'ru_RU' },
          { code: 'en', file: 'en_EN.js', iso: 'en_EN' },
        ],
        defaultLocale: 'tk',
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