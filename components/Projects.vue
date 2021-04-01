<template>
  <section
    id="projects"
    class="hero is-primary is-primary-gradient is-fullheight"
  >
    <div class="hero-body">
      <div class="container">
        <!-- TITLE -->
        <h1 class="section-title">Featured Projects</h1>
        <!-- BIG ITEM AT TOP -->
        <FeaturedItem v-bind="featured" type="project" />
        <!-- CONTAINER FOR PROJECTS -->
        <div class="columns">
          <div v-for="(project, index) in projects" :key="index" class="column">
            <ProjectCard
              v-bind="project"
              background="has-background-semitransparent"
            />
          </div>
        </div>
        <!-- LINK TO ALL PROJECTS -->
        <NuxtLink
          to="/project"
          class="subtitle heading has-text-weight-normal is-size-5 link is-inline-block is-pulled-right"
          >See all projects 👉</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {},
  props: {
    projects: {
      type: Array,
    },
    featured: {
      type: Object,
    },
  },
};
</script>

<style lang="scss"></style>
