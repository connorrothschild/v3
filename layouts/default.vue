<template>
  <div>
    <Nuxt />
  </div>
</template>

<script></script>

<style lang="scss">
// GLOBAL STYLES!
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  // scroll-padding-top: 3.3rem;
  background: var(--primary-off) !important;
  color: var(--text) !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: var(--text) !important;
  transition: all 150ms ease;

  &:hover {
    color: var(--text) !important;
  }
}

// Links
p a {
  text-decoration: none;
  border-bottom: 2px solid var(--secondary);

  &:hover {
    border-bottom: 3px solid var(--text);
  }
}

// a:not(a > img) {
//   border-bottom: none !important;
// }

hr {
  background-color: var(--secondary) !important;
  opacity: 0.3;
  height: 1px !important;
}

.has-text-secondary {
  color: var(--secondary) !important;
}

.theme-primary-off {
  background: var(--primary-off) !important;
}

.theme-primary {
  background: var(--primary) !important;
}

.theme-primary-off,
.theme-primary {
  color: var(--text) !important;
  transition: all 1s ease;

  .title,
  .subtitle,
  #text,
  strong {
    color: var(--text-strong) !important;
  }
}

.theme-primary-gradient {
  @extend .theme-primary;
  background-image: linear-gradient(
    0deg,
    var(--base) 0%,
    var(--primary) 100%
  ) !important;
}

.theme-primary-gradient-rev {
  @extend .theme-primary;
  background-image: linear-gradient(
    0deg,
    var(--primary) 0%,
    var(--base) 100%
  ) !important;
}

.has-underline-secondary {
  border-bottom: 2px solid var(--secondary);
}

.object-fit-scale {
  object-fit: scale-down;
}

.object-fit-cover {
  object-fit: cover;
}

.fullscreen {
  min-height: 100vh;
}

.card-content.has-text-black {
  p {
    color: black !important;
  }
}

.card.card-fullheight {
  height: 100%;
}

*:focus {
  outline: none;
}

*:focus-visible {
  outline: 1px dashed #cecece;
}

.has-text-weight-boldest {
  font-weight: 800 !important;
}

.has-border-bottom-grey {
  border-bottom: 1px solid #cecece;
}

.container.is-max-tablet {
  max-width: 768px !important;
}

.link {
  background-image: linear-gradient(
    to top,
    var(--secondary) 50%,
    transparent 50%
  );
  background-size: 100% 200%;
  background-position: top;
  transition-property: background-position, color;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  color: var(--text) !important;
  border-radius: 2px;
  padding: 0 2px;

  border-bottom: 2px solid var(--secondary);

  &:hover {
    background-position: bottom;
    cursor: pointer;
    color: var(--primary) !important;
  }
}

.section-title {
  font-size: 3.5rem !important;
  font-weight: 800 !important;
  margin: 3rem 0;
  border-bottom: 2px solid #dadada80;
  padding-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem !important;
  }
}

.has-background-semitransparent {
  background: var(--semitransparent) !important;

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--text) !important;
  }
}

// By default, v-img places fullscreen image *behind header*
// Here, push the image down 50px (height of header) and resize accordingly
.content-v-img img {
  top: 50px !important;
  max-height: calc(100% - 50px) !important;
}
</style>
