<template>
  <nav
    class="navbar is-fixed-top"
    :class="color"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        <span class="has-text-weight-boldest">Connor Rothschild</span>
      </NuxtLink>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarID"
        @click="isVisible = !isVisible"
        :class="{ 'is-active': isVisible }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarID" class="navbar-menu" :class="{ 'is-active': isVisible }">
      <div class="navbar-end">
        <div class="navbar-item">
          <ColorPicker />
        </div>
        <NuxtLink class="navbar-item" :to="{ path: '/', hash: '#projects' }">
          Projects
        </NuxtLink>
        <NuxtLink class="navbar-item" :to="{ path: '/', hash: '#awards' }">
          Awards
        </NuxtLink>
        <NuxtLink class="navbar-item" :to="{ path: '/', hash: '#blog' }">
          Blog
        </NuxtLink>
        <a
          class="navbar-item"
          href="https://docs.google.com/document/d/1qBH-wNMe2nv9Xa4uzHZ5wBevohwKuB3h2i9M2yk4POk/edit?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          Resume
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    color: String,
  },
  data() {
    return {
      isVisible: false,
    };
  },
};
</script>

<style scoped lang="scss">
.navbar {
  // border-bottom: 3px solid var(--primary-off);
  box-shadow: 1px 1px 3px 1px var(--primary-off);
}

.navbar-menu {
  padding: 1rem 0;
  background: transparent;
}

.navbar-end {
  overflow-x: hidden;

  .navbar-item {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;
    text-align: center;
  }
}

.navbar-start {
  .navbar-item {
    font-size: 1.2rem;
  }
}

.navbar.theme-primary * {
  color: var(--text) !important;
}

.theme-primary {
  background-color: var(--primary);
  .navbar-item {
    &:hover,
    &:focus,
    .is-active {
      background-color: var(--primary-off);
    }
  }
}

.theme-primary-off {
  background-color: var(--primary-off);
  .navbar-item {
    &:hover,
    &:focus,
    .is-active {
      background-color: var(--primary);
    }
  }
}
</style>
