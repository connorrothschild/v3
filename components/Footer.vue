<template>
  <footer class="site-footer">
    <div class="content has-text-centered site-footer-content">
      <p>
        Built with 💚 and Nuxt.js by
        <a
          href="https://twitter.com/CL_Rothschild"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          >Connor Rothschild</a
        >. The source code is available on
        <a
          href="https://github.com/connorrothschild/v3"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          >GitHub</a
        >.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    color: String,
  },
};
</script>

<style lang="scss" scoped>
.site-footer {
  background: rgb(var(--primary));
  color: rgb(var(--text));
  padding: 2rem 1.5rem;
}

a {
  color: rgb(var(--text));
  &:hover {
    color: rgb(var(--secondary));
  }
}
</style>
