export default {
  css: [{ src: '~/assets/scss/main.scss' }],

  plugins: [
    { src: '~/plugins/v-viewer', mode: 'client' },
    { src: '~/plugins/seo' },
  ],

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
