export default function ({ route, app }, inject) {
  inject(
    'returnMetaHeaders',
    (context, { title = '', description = '', image = '' }) => {
      const i18nHead = context.$nuxtI18nHead({ addSeoAttributes: true })

      const fullPath = `${process.env.BASE_URL}${route.fullPath}`

      const meta = [
        {
          hid: 'title',
          name: 'title',
          content: title,
        },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: app.i18n.t('meta.site_name'),
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: fullPath,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: image,
        },
        {
          hid: 'og:image:url',
          name: 'og:image:url',
          content: image,
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: title,
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: title,
        },
      ]

      return {
        htmlAttrs: {
          ...i18nHead.htmlAttrs,
        },
        title,
        meta: [...meta, ...i18nHead.meta],
        link: i18nHead.link,
      }
    }
  )
}
