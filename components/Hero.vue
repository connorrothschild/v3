<template>
  <section class="hero theme-primary is-fullheight">
    <div class="hero-body">
      <div class="is-flex responsive-flex prevent-shifting">
        <div class="half-flex responsive-margin">
          <div>
            <h2 class="subtitle heading is-size-5">
              Data, design, and digital
            </h2>
            <h1 class="title is-size-1 has-text-weight-boldest">
              Hi, I'm
              <span class="link" @click="showAbout = !showAbout"
                >Connor Rothschild</span
              >!
            </h1>
            <div class="buttons">
              <NuxtLink
                :to="{ path: '/', hash: '#projects' }"
                class="button is-semitransparent"
              >
                Projects
              </NuxtLink>
              <NuxtLink
                :to="{ path: '/', hash: '#awards' }"
                class="button is-semitransparent"
              >
                Awards
              </NuxtLink>
              <NuxtLink
                :to="{ path: '/', hash: '#blog' }"
                class="button is-semitransparent"
              >
                Blog
              </NuxtLink>
              <div class="color-container">
                <ColorPicker />
              </div>
            </div>
          </div>
        </div>
        <div class="half-flex prevent-jitter">
          <!-- https://vuejs.org/v2/guide/transitions.html#Transition-Modes -->
          <transition name="fade" mode="out-in">
            <div v-if="showAbout" key="text">
              <p class="is-size-5 content">
                I'm a data scientist, designer, and developer based in
                <span id="yeehaw">Houston, Texas</span>.
              </p>
              <p class="content">
                I currently make data visualizations at 
                <a
                  href="https://www.axios.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                  >Axios</a
                >!
              </p>
              <!-- <p class="content">
                I currently work at
                <a
                  href="https://www.mokshadata.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                  >Moksha Data</a
                >, and have worked for clients such as the City of Houston, the
                US Special Operations Command, and the Houston Food Bank. I'm
                passionate about data visualization, presentation, and
                storytelling.
              </p> -->
              <p class="content">
                My latest updates are on
                <a
                  href="https://twitter.com/CL_Rothschild"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                  >Twitter</a
                >.
              </p>
            </div>
            <div v-else class="has-text-centered" key="image">
              <img
                src="~assets/images/me.jpg"
                alt="An image of Connor Rothschild"
                class="me"
                @click="showAbout = !showAbout"
              />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showAbout: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.33s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.me {
  height: 300px;
  width: 300px;
  border-radius: 0.5rem;
  transition: transform 1s ease;
  &:hover {
    transform: translateY(6px) translateX(2px);
    cursor: pointer;
  }
}

.responsive-margin {
  @media screen and (min-width: 860px) {
    margin-right: 1rem;
    margin-left: 1rem;
  }

  @media screen and (max-width: 860px) {
    margin-bottom: 3rem;
  }
}

@media screen and (max-width: 860px) {
  .prevent-jitter {
    min-height: 200px;
  }
}

.half-flex {
  flex: 1 1 0px;
  width: 100%;
}

.responsive-flex {
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.prevent-shifting {
  width: 100%;
}

#yeehaw {
  cursor: url("data:image/svg+xml;charset=utf-8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🤠</text></svg>"),
    auto;
}

h1,
h2,
p,
span,
a {
  &::selection {
    background: var(--text);
    color: var(--primary);
  }
}

.is-semitransparent {
  background: var(--semitransparent);
  color: var(--text) !important;
  border: none;
}

.hero {
  background: var(--primary);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  align-content: center;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
}

.hero-body {
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
  align-items: center;
  display: flex;
}

.color-container {
  margin-left: 6px;
  animation: wiggle 2.5s infinite;

  &:hover {
    animation: none;
  }

  @media screen and (max-width: 386px) {
    margin-top: 6px;
  }
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(0deg);
  }
  85% {
    transform: rotate(5deg);
  }
  95% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
