<template>
  <section class="works-section__wrapper section__wrapper">
    <div
      v-for="i in 4"
      :id="`works-section-image-${i}`"
      class="works-section__image"
    >
      <img
        :src="require(`~/assets/images/works-section-image-${i}@1.png`)"
        :srcset="`${require(`~/assets/images/works-section-image-${i}@1.png`)} 1x, ${require(`~/assets/images/works-section-image-${i}@2.png`)} 2x`"
        alt=""
      />
    </div>

    <div class="container">
      <div class="works-section section">
        <h1 class="works-section__title text-title">{{ $t('myWorks') }}</h1>

        <div class="works-section__items">
          <div class="works-section__items__cell-bg">
            <img src="~/assets/images/works-section-cell-bg.webp" alt="" />
          </div>

          <div
            v-for="(item, index) in projects"
            :key="`project-${index}`"
            class="works-section__item"
          >
            <div
              class="works-section__item__image"
              @click="showImages(item.images)"
            >
              <img :src="item.previewImage" alt="" />
            </div>

            <div class="works-section__item__content">
              <h2>{{ $t(`projects[${index}].title`) }}</h2>

              <p>{{ $t(`projects[${index}].description`) }}</p>

              <div class="works-section__item__footer">
                <div class="works-section__item__footer__item">
                  <div class="works-section__item__footer__item__icon">
                    <calendar-icon />
                  </div>

                  <span>{{ item.date }}</span>
                </div>

                <div class="works-section__item__footer__item">
                  <div class="works-section__item__footer__item__icon">
                    <category-icon />
                  </div>

                  <span
                    v-for="(tag, index) in item.tags"
                    :key="`tag-${index}-${item.date}`"
                  >
                    {{ tag.title }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--        <div class="works-section__button">-->
        <!--          <button class="section__button">-->
        <!--            <span>{{ $t('viewAllWorks') }}</span>-->
        <!--          </button>-->
        <!--        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
import CalendarIcon from 'vue-material-design-icons/Calendar.vue'
import CategoryIcon from 'vue-material-design-icons/Shape.vue'

export default {
  name: 'WorksSection',

  components: { CalendarIcon, CategoryIcon },

  computed: {
    projects() {
      return [
        {
          tags: [{ title: this.$t('frontend') }],
          previewImage: require('~/assets/images/works/personal/preview.png'),
          images: [require('~/assets/images/works/personal/full.png')],
          date: '12.12.2022',
        },
        {
          tags: [{ title: this.$t('frontend') }],
          previewImage: require('assets/images/works/ravel/preview.png'),
          images: [require('~/assets/images/works/ravel/full.png')],
          date: '12.12.2022',
        },
        {
          tags: [{ title: this.$t('frontend') }],
          previewImage: require('~/assets/images/works/sublime/preview.png'),
          images: [require('~/assets/images/works/sublime/full.png')],

          date: '12.12.2022',
        },

        {
          tags: [{ title: this.$t('frontend') }],
          previewImage: require('~/assets/images/works/duhoot/preview.png'),
          images: [require('~/assets/images/works/duhoot/full.png')],
          date: '12.12.2022',
        },
        {
          tags: [{ title: this.$t('frontend') }],
          previewImage: require('~/assets/images/works/golden/preview.png'),
          images: [require('~/assets/images/works/golden/full.png')],
          date: '12.12.2022',
        },
        {
          tags: [{ title: this.$t('frontend') }],
          previewImage: require('~/assets/images/works/personal-2/preview.png'),
          images: [require('~/assets/images/works/personal-2/full.png')],
          date: '12.12.2022',
        },
      ]
    },
  },

  methods: {
    showImages(images) {
      this.$viewerApi({
        images,
      })
    },
  },
}
</script>
