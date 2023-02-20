<template>
  <section class="about-section__wrapper section__wrapper">
    <div class="container">
      <div class="about-section section">
        <div class="about-section__image">
          <img
            src="~/assets/images/about-section-image@1.png"
            srcset="
              ~/assets/images/about-section-image@1.png 1x,
              ~/assets/images/about-section-image@2.png 2x
            "
            alt=""
          />
        </div>

        <div class="about-section__content">
          <h1
            class="about-section__content__title"
            v-html="$t('sections.about.title')"
          ></h1>

          <div v-html="$t('sections.about.description')"></div>

          <div class="about-section__content__image">
            <img
              src="~/assets/images/about-section-richie@1.jpg"
              srcset="
                ~/assets/images/about-section-richie@1.jpg 1x,
                ~/assets/images/about-section-richie@2.jpg 2x
              "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>
