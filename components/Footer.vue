<template>
  <footer class="footer__wrapper">
    <div class="container">
      <div class="footer">
        <div class="footer__content">
          <p>
            Made with <heart-icon id="heart" /> by
            <a href="https://github.com/richiedev666" target="_blank"
              ><span>richie</span></a
            >
          </p>

          <p>
            Design inspired from
            <a href="https://www.behance.net/gettywangshibo" target="_blank"
              ><span class="text-chinese">南安镇 阿毅</span></a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import HeartIcon from 'vue-material-design-icons/Heart.vue'

export default {
  name: 'FooterComponent',

  components: {
    HeartIcon,
  },
}
</script>
