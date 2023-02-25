<template>
  <footer class="footer__wrapper">
    <div class="container">
      <div class="footer">
        <div v-if="$i18n.locale === 'en'" class="footer__content">
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

        <div v-else-if="$i18n.locale === 'ru'" class="footer__content">
          <p>
            Сделано с <heart-icon id="heart" /> руками
            <a href="https://github.com/richiedev666" target="_blank"
              ><span>richie</span></a
            >
          </p>

          <p>
            Дизайн вдохновлен от
            <a href="https://www.behance.net/gettywangshibo" target="_blank"
              ><span class="text-chinese">南安镇 阿毅</span></a
            >
          </p>
        </div>
      </div>
    </div>
    <div id="sfcwsj27tatlfw2eyaunsfj4bkfjuwqk1yb" class="footer__counter"></div>
    <script
      type="text/javascript"
      src="https://counter4.optistats.ovh/private/counter.js?c=wsj27tatlfw2eyaunsfj4bkfjuwqk1yb&down=async"
      async
    ></script>
    <noscript
      ><a href="https://www.freecounterstat.com" title="site visitor counter"
        ><img
          src="https://counter4.optistats.ovh/private/freecounterstat.php?c=wsj27tatlfw2eyaunsfj4bkfjuwqk1yb"
          border="0"
          title="site visitor counter"
          alt="site visitor counter" /></a
    ></noscript>
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
