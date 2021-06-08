<template>
  <span @mouseover="hovered = true" @mouseout="hovered = false">{{ readingTime }} minute read 
    <span class='wpm' v-if="hovered">(at 200 WPM)</span>
    </span>
</template>

<script>
export default {
  name: "readingTime",
  props: ["content"],
  data: function () {
      return {
        hovered: false
      }
  },
  computed: {
    readingTime() {
      let minutes = 0;
      const contentString = JSON.stringify(this.content);
      const words = contentString.split(" ").length;
      const wordsPerMinute = 200;
      minutes = Math.ceil(words / wordsPerMinute);
      return minutes;
    },
  },
};
</script>

<style>
.wpm {
  text-transform: none;
  font-size: .8rem;
  font-weight: 200;
}
</style>