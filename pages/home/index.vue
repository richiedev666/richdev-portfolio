<template>
  <div class="home__wrapper">
    <HomeSection />

    <BetweenSectionSlider
      :image="require('~/assets/images/richdev-logo.png')"
    />

    <AboutSection />
  </div>
</template>

<script>
import HomeSection from '@/components/Sections/HomeSection'
import AboutSection from '@/components/Sections/AboutSection'
import BetweenSectionSlider from '@/components/BetweenSectionSlider'

export default {
  name: 'HomePage',

  components: {
    BetweenSectionSlider,
    AboutSection,
    HomeSection,
  },
}
</script>
