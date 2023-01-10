<template>
  <div class="home__wrapper">
    <HomeSection />

    <BetweenSectionSlider
      :image="require('~/assets/images/richdev-logo.png')"
    />

    <AboutSection />

    <SkillsSection />
  </div>
</template>

<script>
import HomeSection from '@/components/Sections/HomeSection'
import AboutSection from '@/components/Sections/AboutSection'
import BetweenSectionSlider from '@/components/BetweenSectionSlider'
import SkillsSection from '@/components/Sections/SkillsSection'

export default {
  name: 'HomePage',

  components: {
    SkillsSection,
    BetweenSectionSlider,
    AboutSection,
    HomeSection,
  },
}
</script>
