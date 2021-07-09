<template>
  <!-- If clickable == true, use v-img (below) for gallery view -->
  <div
    v-if="clickable"
    class="img"
    style="display: inline-block"
    :style="{ width: width }"
  >
    <!-- https://www.joshwcomeau.com/performance/embracing-modern-image-formats/ -->
    <!-- <picture>
      <source
        v-img
        :srcSet="require(`~/assets/images/${this.src}?webp`)"
        :alt="alt"
        type="image/webp"
      />
      <source
        v-img
        :srcSet="require(`~/assets/images/${this.src}`)"
        :alt="alt"
        type="image/png"
      /> -->
      <img v-img :src="require(`~/assets/images/${this.src}`)" :alt="alt" />
    <!-- </picture> -->
  </div>
  <!-- If clickable == false, (for images surrounded by <a> tag for example, regular image) -->
  <div
    v-else
    class="img"
    style="display: inline-block"
    :style="{ width: width }"
  >
    <!-- <picture>
      <source :srcSet="require(`~/assets/images/${this.src}?webp`)" :alt="alt" type="image/webp" />
      <source :srcSet="require(`~/assets/images/${this.src}`)" :alt="alt" type="image/png" /> -->
      <BlurImage :src="src" :alt="alt" :type="'project'" />
    <!-- </picture> -->
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: false,
      default: "100%",
    },
    clickable: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>

<style scoped></style>
