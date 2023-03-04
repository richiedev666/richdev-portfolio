import Blogs from './blogs/index'

export default {
  css: [{ src: '~/assets/scss/main.scss' }],

  ssr: false,

  target: 'static',

  env: {
    BASE_URL: 'https://richdev.netlify.app',
  },

  generate: {
    routes() {
      const routesToGenerate = ['/', '/blogs']

      for (let i = 0; i < Blogs['en'].length; i++) {
        routesToGenerate.push(`/blogs/${i + 1}`)
      }

      return routesToGenerate
    },
  },

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
    '@nuxtjs/sitemap',
  ],

  sitemap() {
    const routes = [{ url: '/' }, { url: '/blogs' }]

    const defaultLocale =
      this.requiredModules['@nuxtjs/i18n'].options.defaultLocale

    for (let i = 0; i < Blogs[defaultLocale].length; i++) {
      routes.push({ url: `/blogs/${i + 1}`, changeFreq: 'daily' })
    }

    return {
      hostname: process.env.BASE_URL || 'https://richdev.netlify.app',
      gzip: true,
      defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
      routes,
    }
  },

  axios: {
    baseURL: '/',
  },

  build: {},
}
