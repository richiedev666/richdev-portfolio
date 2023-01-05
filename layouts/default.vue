<template>
  <div class="layout-wrapper layout-wrapper--default">
    <Header />

    <div class="page-wrapper page-wrapper--default">
      <Nuxt />
    </div>

    <div class="cursor">
      <svg viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <path
            id="circle"
            d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text font-size="17">
          <textPath xlink:href="#circle"></textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  components: { Header },

  mounted() {
    const cursor = document.querySelector('.cursor')

    document.addEventListener('mousemove', (e) => {
      let leftPosition = e.pageX + 4
      let topPosition = e.pageY + 4

      cursor.style.left = leftPosition + 'px'
      cursor.style.top = topPosition + 'px'

      const element = e.target
      const isHovering = element.dataset.hasOwnProperty('cursorHover')
      const hoverText = element.dataset.cursorHoverText
      if (isHovering) {
        cursor.classList.add('cursor--hovering')
        cursor.querySelector('svg').style.opacity = '1'
        cursor.querySelector('svg text textPath').textContent = hoverText
      } else {
        if (cursor.classList.contains('cursor--hovering')) {
          cursor.classList.remove('cursor--hovering')
          cursor.querySelector('svg').style.opacity = '0'
        }
      }
    })
  },
}
</script>
