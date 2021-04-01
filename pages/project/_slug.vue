<template>
  <div>
    <Nav color="is-primary" />
    <article class="section container is-max-desktop mt-6">
      <h1 class="title has-text-weight-boldest is-size-2 is-size-4-mobile">
        {{ project.title }}
      </h1>
      <h2 class="subtitle is-size-4 is-size-6-mobile">
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
                class="card-footer-item"
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                ><span class="has-text-weight-bold">GitHub Repository</span></a
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

export default {
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
        mainImage: `https://connorrothschild.com/project/${this.project.img}`,
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

<style lang="scss">
/* STYLING SPECIFIC TO PROJECTS GOES HERE */
.nuxt-content {
  h1 {
    font-weight: bold;
    font-size: 1.8rem;
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
  h2 {
    font-weight: bold;
    font-size: 1.6rem;
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
  h3 {
    font-weight: bold;
    font-size: 1.4rem;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  h4 {
    font-weight: bold;
    font-size: 1.2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p,
  figure {
    margin-bottom: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5rem;
  }
}

.nuxt-content p:last-child {
  margin-bottom: 0;
}

.my-tiles {
  p:not(:last-child) {
    margin-bottom: 0.35rem !important;
  }

  // a[href] {
  // 	background-color: #f03a5f;
  // 	color: white !important;
  // 	padding: 3px;
  // 	border-radius: 3px;
  // 	text-decoration: none !important;
  // 	transition: 200ms background-color;

  // 	&:hover {
  // 		background-color: #363636;
  // 	}
  // }
}
// HOVER ICON LINK
.icon.icon-link {
  width: 0;
}

.card-footer-item {
  color: $text !important;

  &:hover {
    color: $secondary !important;
    text-decoration: underline;
  }
}
</style>
