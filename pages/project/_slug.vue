<template>
  <div class="theme-primary-off">
    <Nav classes="theme-primary" />
    <article class="section container is-max-desktop">
      <h1 class="has-text-weight-boldest content-title is-size-4-mobile">
        {{ project.title }}
      </h1>
      <h2 class="my-3 content-description is-size-6-mobile">
        {{ project.description }}
      </h2>

      <div class="columns mt-3">
        <div class="column">
          <article class="card has-background-semitransparent">
            <div class="card-content">
              <div class="content is-flex is-justify-content-space-evenly">
                <div class="has-text-centered">
                  <p class="heading has-text-weight-bold title is-size-6">
                    Tools used
                  </p>
                  <p>{{ project.techstack }}</p>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a
                class="card-footer-item has-text-weight-bold"
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub Repository</a
              >
              <p v-else class="card-footer-item">
                Code is not publicly available 😢
              </p>
            </footer>
          </article>
        </div>
        <div class="column">
          <article class="card has-background-semitransparent">
            <div class="card-content">
              <div class="content is-flex is-justify-content-space-evenly">
                <div class="has-text-centered">
                  <p class="heading has-text-weight-bold title is-size-6">
                    Published
                  </p>
                  <p>{{ formatDate(project.date) }}</p>
                </div>
                <div class="has-text-centered">
                  <p class="heading has-text-weight-bold title is-size-6">
                    Audience
                  </p>
                  <p>{{ project.audience }}</p>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a
                v-if="project.url"
                class="card-footer-item has-text-weight-bold"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                >Live URL</a
              >
              <p v-else class="card-footer-item">
                Project is not publicly available 😢
              </p>
            </footer>
          </article>
        </div>
      </div>

      <nuxt-content :document="project" />
      <hr />
      <div class="my-4">
        <NuxtLink
          to="/project"
          class="subtitle has-text-weight-bolder is-size-5 link heading is-inline-block"
          >👈 Back to all projects</NuxtLink
        >
      </div>
      <prev-next :prev="prev" :next="next" type="project" />
    </article>
    <Footer />
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
import { TweenMax, Power3 } from "gsap";

export default {
  transition: {
    mode: "out-in",
    css: false,
    enter(el, done) {
      TweenMax.fromTo(".title", { x: "10%" }, { x: "0%", duration: 0.1 });
      TweenMax.fromTo(
        ".subtitle, .card, .img",
        { x: "10%", autoAlpha: 0 },
        {
          x: "0%",
          autoAlpha: 1,
          delay: 0.25,
          duration: 0.5,
          ease: Power3.easeOut,
        }
      );
    },
  },
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();

    const [prev, next] = await $content("projects")
      .only(["title", "slug", "img", "img_alt"])
      .sortBy("date", "asc")
      .surround(params.slug)
      .fetch();

    return { project, prev, next };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.project.title,
        description: this.project.description,
        url: `https://connorrothschild.com/project/${this.$route.params.slug}`,
        mainImage: `https://connorrothschild.com/project/${this.$route.params.slug}/social.png`,
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: `${this.project.title} | Connor Rothschild`,
      meta: [
        ...this.meta,
        {
          property: "article:published_time",
          content: this.project.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.project.updatedAt,
        },
        { name: "twitter:label1", content: "Written by" },
        { name: "twitter:data1", content: "Connor Rothschild" },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://connorrothschild.com/project/${this.$route.params.slug}`,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
/* STYLING SPECIFIC TO PROJECTS GOES HERE */
.card-footer {
  border-top: 1px solid rgb(var(--text));

  .card-footer-item {
    &:hover {
      color: rgb(var(--secondary)) !important;
    }
  }
}
</style>
