<template>
  <nav
    class="navbar"
    :class="classes"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <NuxtLink class="navbar-item has-text-weight-boldest" to="/"
        >Connor Rothschild
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
    classes: String,
  },
  data() {
    return {
      isVisible: false,
    };
  },
};
</script>

<style scoped lang="scss">
.theme-primary {
  background-color: var(--primary);
  .navbar-item {
    &:hover,
    &:focus,
    .is-active {
      background-color: var(--primary);
    }
  }
}

.theme-primary-off {
  background-color: var(--primary-off);
  .navbar-item {
    &:hover,
    &:focus,
    .is-active {
      background-color: var(--primary-off);
    }
  }
}

.navbar {
  box-shadow: 1px 1px 3px 1px var(--primary-off);
}

.navbar-menu {
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

.navbar a {
  color: var(--text) !important;
  transition: color 250ms ease-in-out;

  &:hover {
    color: var(--secondary) !important;
  }
}
</style>
