<template>
  <div class="between-section-slider__wrapper">
    <div
      class="between-section-slider"
      :style="`background-image: url(${image})`"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false,
    },
  },
}
</script>
