<template>
  <section class="home-section__wrapper section__wrapper">
    <div class="home-section__background"></div>

    <div class="home-section__background__effect"></div>

    <div class="container">
      <div class="home-section section">
        <div class="home-section__text home-section__item">
          <h1
            class="home-section__title"
            v-html="$t('sections.landing.title')"
          ></h1>

          <p
            class="home-section__description"
            v-html="$t('sections.landing.description')"
          ></p>

          <a href="#works-section">
            <button class="section__button">
              <span>
                {{ $t('viewPortfolio') }}
              </span>
            </button>
          </a>
        </div>

        <div class="home-section__item">
          <div class="home-section__image">
            <img src="~/assets/images/landing-image.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
}
</script>
