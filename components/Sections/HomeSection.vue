<template>
  <section class="home-section__wrapper section__wrapper">
    <div class="home-section__background"></div>

    <div class="home-section__background__effect"></div>

    <div class="container">
      <div class="home-section section">
        <div class="home-section__text home-section__item">
          <h1 class="home-section__title">
            Hello, <br />
            my name is <br />
            <span>Richie</span>
          </h1>

          <p class="home-section__description">
            Hi, I'm Richie. I'm talented full-stack web developer with over 2+
            years of experiences in wide range of websites.
          </p>

          <button class="section__button">
            <span>
              {{ $t('viewPortfolio') }}
            </span>
          </button>
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
