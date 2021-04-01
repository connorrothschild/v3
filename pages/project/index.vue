<template>
  <div>
    <Nav color="is-primary" />
    <div class="fullscreen">
      <article class="section container">
        <!-- TITLE -->
        <h1 class="section-title">Projects 💻</h1>
        <!-- CONTAINER FOR PROJECTS -->
        <div class="columns is-multiline">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="column is-3"
          >
            <ProjectCard
              v-bind="project"
              background="has-background-semitransparent"
            />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug)
      .only(["title", "description", "img", "img_alt", "slug", "date"])
      .sortBy("date", "desc")
      .fetch();

    return {
      projects,
    };
  },
  head() {
    return {
      title: `Projects | Connor Rothschild`,
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://connorrothschild.com/project/`,
        },
      ],
    };
  },
};
</script>

<style>
.fullscreen {
  min-height: 100vh;
}
</style>
