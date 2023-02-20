<template>
  <div class="home__wrapper">
    <HomeSection id="home-section" />

    <BetweenSectionSlider
      :image="require('~/assets/images/richdev-logo.png')"
    />

    <AboutSection id="about-section" />

    <SkillsSection id="skills-section" />

    <BetweenSectionSlider
      :image="require('~/assets/images/richdev-little-red.png')"
    />

    <WorksSection id="works-section" />

    <ContactSection id="contacts-section" />
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

  head() {
    const { title, description } = this.$t('meta.home')
    return this.$returnMetaHeaders(this, { title, description })
  },
}
</script>
