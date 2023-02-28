export default {
  css: [{ src: '~/assets/scss/main.scss' }],

  ssr: false,

  target: 'static',

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'title',
        hid: 'title',
        content: 'Richie Web Developer - richie dev',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'I’m Richie, talented full-stack web developer with over 5+ years of experiences in wide range of websites.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

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
