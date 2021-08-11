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
  background: rgb(var(--primary-off)) !important;
  color: rgb(var(--text)) !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

* {
  font-weight: 300;
}

// Italic text leans into the next character
em::after {
  content: "";
  padding: 1px;
}

a {
  color: rgb(var(--text)) !important;
  transition: all 150ms ease;

  &:hover {
    color: rgb(var(--text)) !important;
  }
}

// Links
p a {
  text-decoration: none;
  border-bottom: 2px solid rgb(var(--secondary));

  &:hover {
    border-bottom: 3px solid rgb(var(--text));
  }
}

// a:not(a > img) {
//   border-bottom: none !important;
// }

hr {
  background-color: rgb(var(--secondary)) !important;
  opacity: 0.3;
  height: 1px !important;
}

.has-text-secondary {
  color: rgb(var(--secondary)) !important;
}

.theme-primary-off {
  background: rgb(var(--primary-off)) !important;
}

.theme-primary {
  background: rgb(var(--primary)) !important;
}

.theme-primary-off,
.theme-primary {
  color: rgb(var(--text)) !important;
  transition: all 1s ease;

  .title,
  .subtitle,
  #text,
  strong {
    color: rgb(var(--text-strong)) !important;
  }
}

.theme-primary-gradient {
  @extend .theme-primary;
  background-image: linear-gradient(
    0deg,
    rgb(var(--base)) 0%,
    rgb(var(--primary)) 100%
  ) !important;
}

.theme-primary-gradient-rev {
  @extend .theme-primary;
  background-image: linear-gradient(
    0deg,
    rgb(var(--primary)) 0%,
    rgb(var(--base)) 100%
  ) !important;
}

.has-underline-secondary {
  border-bottom: 2px solid rgb(var(--secondary));
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
    rgb(var(--secondary)) 50%,
    transparent 50%
  );
  background-size: 100% 200%;
  background-position: top;
  transition-property: background-position, color;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  color: rgb(var(--text)) !important;
  border-radius: 2px;
  padding: 0 2px;

  border-bottom: 2px solid rgb(var(--secondary));

  &:hover {
    background-position: bottom;
    cursor: pointer;
    color: rgb(var(--primary)) !important;
    border-bottom: 2px solid rgb(var(--secondary));
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
  background: rgb(var(--primary), .5) !important;

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgb(var(--text)) !important;
  }
}

// By default, v-img places fullscreen image *behind header*
// Here, push the image down 50px (height of header) and resize accordingly
.content-v-img img {
  top: 50px !important;
  max-height: calc(100% - 50px) !important;
}

// NUXT-CONTENT STYLING
/* STYLING SPECIFIC TO BLOG POSTS, PROJECTS, AND AWARDS GOES HERE */
.nuxt-content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1.25rem 0 0.75rem;
    font-weight: bold;
  }
  // Basic typography
  h1 {
    font-size: 1.8rem;
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
  h2 {
    font-size: 1.6rem;
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
  h3 {
    font-size: 1.4rem;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  h4 {
    font-size: 1.2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  // Paras
  p, li {
    margin-bottom: 1.25rem;
    font-size: 1.1rem;
    font-weight: 300;

    &:last-child {
      margin-bottom: 0;
    }
  }

  // Links
  a {
    text-decoration: none;
    border-bottom: 2px solid rgb(var(--secondary));

    &:hover {
      border-bottom: 3px solid rgb(var(--text));
    }
  }

  // Blocks
  blockquote {
    padding: 1rem;
    border-left: 5px solid rgb(var(--secondary));
    margin: 1rem;
    background: rgb(var(--primary), .5);
  }

  // List styling
  li {
    list-style-position: inside !important;
    margin-bottom: 0.5rem;
  }

  li::marker {
    font-weight: bold;
  }

  ol,
  ul {
    margin-left: 0.5rem;
    margin-bottom: 1rem;
  }

  ul li {
    list-style-type: circle;
  }

  .img + :not(.img) {
    margin-top: 1rem;
  }
  
  iframe {
    position: relative;
    left: calc(-40vw + 50%);
    width: 80vw;
    margin: 1rem 0 1.5rem 0;
  }

  // Margin around code highlighting
  .nuxt-content-highlight {
    margin: 1rem 0;
  }

  // Hover icon link
  h1,
  h2,
  h3,
  h4 {
    > a::before {
      content: "🔗";
      display: block;
      float: left;
      margin-left: -1.8rem;
      color: rgb(var(--text));
      opacity: 0;
      font-weight: 400;
      padding-right: 0.5rem;
      position: absolute;
      transition: 500ms ease opacity;
    }
  }

  .icon.icon-link {
    width: 0;
  }

  // Different hover icons have different sizes
  h1 > a::before {
    font-size: 1.5rem;
    line-height: 2.75rem;
  }

  h2 > a::before {
    font-size: 1.35rem;
    line-height: 2.5rem;
  }

  h3 > a::before,
  h4 > a::before {
    font-size: 1.25rem;
    line-height: 2rem;
  }

  h1:hover > a::before,
  h2:hover > a::before,
  h3:hover > a::before,
  h4:hover > a::before {
    opacity: 1;
  }

  // Markdown tables, by default, apply Bulma table styling https://bulma.io/documentation/elements/table/
  table {
    @extend .table;
    @extend .is-fullwidth;
    @extend .is-hoverable;

    background: rgb(var(--primary));
    color: rgb(var(--text));

    tr:hover {
      background-color: rgb(var(--primary-off)) !important;
    }

    thead th {
      color: rgb(var(--text-strong));
      font-weight: bold;
    }
  }

  // em {
  //   color: rgb(var(--secondary));
  //   background-color: rgb(var(--secondary));
  //   background: linear-gradient(0deg, rgb(var(--secondary)) 0%, rgb(var(--text-strong)) 100%) no-repeat 100% 100%;
  //   background-size: 400% 400%;
  //   background-clip: text;
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  //   font-weight: 700;
  //   font-variant: normal;
  //   transition: 500ms ease-in-out all;
  // }

  // em:hover {
  //   background: linear-gradient(0deg, rgb(var(--text-strong)) 0%, rgb(var(--secondary)) 25%, rgb(var(--text)) 75%) no-repeat 100% 0%;
  //   background-position: 0 0;
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  //   background-size: 400% 400%
  // }

}
.content-title {
  font-size: 3.5rem;
  line-height: 1.25;
  background: rgb(var(--secondary));
  background: -webkit-linear-gradient(to right, rgb(var(--secondary)) 0%, rgb(var(--text)) 70%);
  background: -moz-linear-gradient(to right, rgb(var(--secondary)) 0%, rgb(var(--text)) 70%);
  background: linear-gradient(to right, rgb(var(--secondary)) 0%, rgb(var(--text)) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.content-description {
  font-size: 1.5rem;
  line-height: 1.5;
}
</style>
