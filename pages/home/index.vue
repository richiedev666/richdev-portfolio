<template>
  <div class="home__wrapper">
    <HomeSection />

    <BetweenSectionSlider
      :image="require('~/assets/images/richdev-logo.png')"
    />

    <AboutSection />

    <SkillsSection />

    <BetweenSectionSlider
      :image="require('~/assets/images/richdev-little-red.png')"
    />

    <WorksSection />

    <ContactSection />
  </div>
</template>

<script>
import HomeSection from '@/components/Sections/HomeSection'
import AboutSection from '@/components/Sections/AboutSection'
import BetweenSectionSlider from '@/components/BetweenSectionSlider'
import SkillsSection from '@/components/Sections/SkillsSection'
import WorksSection from '@/components/Sections/WorksSection'
import ContactSection from '@/components/Sections/ContactSection'

export default {
  name: 'HomePage',

  components: {
    ContactSection,
    WorksSection,
    SkillsSection,
    BetweenSectionSlider,
    AboutSection,
    HomeSection,
  },
}
</script>
