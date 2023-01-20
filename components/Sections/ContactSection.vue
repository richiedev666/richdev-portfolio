<template>
  <section class="contact-section__wrapper section__wrapper">
    <div id="contact-section-image">
      <img src="~/assets/images/contact-us-image.png" alt="" />
    </div>

    <div id="contact-section-bg">
      <img src="~/assets/images/contact-us-bg-texture.png" alt="" />
    </div>

    <div class="container">
      <div class="contact-section section">
        <h1
          class="contact-section__title"
          v-html="$t('sections.contact.title')"
        ></h1>

        <div class="contact-section__items">
          <div
            v-for="(item, index) in contacts"
            :key="`contact-${index}`"
            class="contact-section__item"
          >
            <div class="contact-section__item__icon">
              <component :is="item.icon" :size="80"></component>
            </div>

            <div
              class="contact-section__item__content"
              v-html="item.content"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EmailIcon from 'vue-material-design-icons/Email.vue'
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue'
import GithubIcon from 'vue-material-design-icons/Github.vue'

export default {
  name: 'ContactSection',

  computed: {
    contacts() {
      return [
        {
          content:
            '<a href="mailto:richiedeveloper2019@gmail.com">richiedeveloper2019@gmail.com</a>',
          icon: EmailIcon,
        },
        {
          content: this.$t('turkmenistanAshgabat'),
          icon: MapMarkerIcon,
        },
        {
          content: `<a href="https://github.com/limmie">
${this.$t('githubProfile')}
</a>`,
          icon: GithubIcon,
        },
      ]
    },
  },
}
</script>
