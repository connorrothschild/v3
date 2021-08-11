<template>
  <a class="tip" :href="href" target="_blank">?<span class="text">
      {{content}}
    </span>
  </a> 
</template>

<script>
// FIXME
export default {
  props: {
    content: String,
    href: String
  },
  data() {
    return {
      hovered: false
    }
  }
}
</script>

<style scoped lang="scss">
.tip {
  position: relative;
  display: inline;
  cursor: help;
  border-bottom: none !important;
  background: rgb(var(--secondary), 0.3);
  padding: 1px 3px;
  border-radius: 3px;
}

.tip .text {
  // text-align: center;
  visibility: hidden;
  width: 200px;
  height: auto;
  background-color: rgb(var(--primary));
  color: rgb(var(--text));
  padding: 10px;
  border-radius: 6px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  opacity: 0;
  transition: opacity 500ms ease;
  font-size: 0.8em;
  line-height: 1.25;
}

.tip:hover .text {
  opacity: 1;
  visibility: visible;
}

.tip .text::after {
  content: " ";
  position: absolute;
  top: 100%; 
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgb(var(--primary)) transparent transparent transparent;
}
</style>