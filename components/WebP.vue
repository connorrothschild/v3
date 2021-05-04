<template>
  <!-- https://marquez.co/docs/nuxt-optimized-images/usage -->
  <picture>
    <!-- If webp is accessible prefer -->
    <source
      :srcSet="imgSrc()"
      :alt="alt"
      type="image/webp"
      :class="{
        'object-fit-cover': type == 'post',
        'object-fit-scale': type == 'project',
      }"
      v-bind:style="imgStyle"
    />
    <!-- If not, optimized PNG -->
    <source
      :srcSet="imgSrcFallback()"
      :alt="alt"
      type="image/png"
      :class="{
        'object-fit-cover': type == 'post',
        'object-fit-scale': type == 'project',
      }"
      v-bind:style="imgStyle"
    />
    <!-- If not, regular image -->
    <img
      :src="imgSrcFallback()"
      :alt="alt"
      :class="{
        'object-fit-cover': type == 'post',
        'object-fit-scale': type == 'project',
      }"
      v-bind:style="imgStyle"
      loading="lazy"
    />
  </picture>
</template>

<script>
export default {
  mounted() {},
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    imgStyle: {
      type: String,
      required: false,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.src}?webp`);
      } catch (error) {
        return null;
      }
    },
    imgSrcFallback() {
      try {
        return require(`~/assets/images/${this.src}`);
      } catch (error) {
        return null;
      }
    },
  },
};
</script>

<style scoped></style>
