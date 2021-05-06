<template>
  <!-- https://marquez.co/docs/nuxt-optimized-images/usage -->
    <v-lazy-image 
    :src="imgSrc()" :alt="alt" :style="imgStyle" :class="{
        'object-fit-cover': type == 'post',
        'object-fit-scale': type == 'project',
      }"/>
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
        return require(`~/assets/images/${this.src}`);
      } catch (error) {
        return null;
      }
    },
  },
};
</script>

<style scoped>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.5s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
