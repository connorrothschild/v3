<template>
  <div class="theme-primary-off">
    <Nav classes="theme-primary" />
    <article
      class="section container is-max-desktop"
      style="min-height: 82.5vh"
    >
      <h1 class="title has-text-weight-boldest is-size-2 is-size-4-mobile">
        {{ award.title }}
      </h1>
      <p class="subtitle heading is-size-6 has-text-weight-light">
        {{ award.organization }} • {{ formatDate(award.date) }}
      </p>
      <hr />
      <nuxt-content :document="award" />
      <div class="mt-3 is-size-5 has-text-centered">
        <a
          class="has-text-weight-light award-link"
          target="_blank"
          rel="noopener"
          :href="award.project_url"
        >
          Project Link
        </a>
        <a
          class="has-text-weight-light award-link"
          target="_blank"
          rel="noopener"
          :href="award.media_url"
        >
          Media
        </a>
      </div>
      <hr />
      <div class="my-4">
        <NuxtLink
          to="/award"
          class="subtitle has-text-weight-bolder is-size-5 link heading is-inline-block"
          >👈 Back to all awards</NuxtLink
        >
      </div>
      <prev-next :prev="prev" :next="next" type="award" />
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
    enter() {
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
    const award = await $content("awards", params.slug).fetch();

    const [prev, next] = await $content("awards")
      .only(["title", "slug"])
      .sortBy("date", "asc")
      .surround(params.slug)
      .fetch();

    return { award, prev, next };
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
        // For award pages, only redefine URL for og:url and twitter:url (because they don't have images)
        type: "article",
        url: `https://connorrothschild.com/award/${this.$route.params.slug}`,
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: `${this.award.title} | Connor Rothschild`,
      meta: [
        ...this.meta,
        {
          property: "article:published_time",
          content: this.award.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.award.updatedAt,
        },
        { name: "twitter:label1", content: "Written by" },
        { name: "twitter:data1", content: "Connor Rothschild" },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://connorrothschild.com/award/${this.$route.params.slug}`,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
/* STYLING SPECIFIC TO AWARDS GOES HERE */
.award-link {
  border-bottom: 1px solid rgb(var(--text));
  display: inline-block;
  margin: 3px 5px;
  text-align: center;

  &:hover {
    border-bottom: 1px solid rgb(var(--secondary));
  }
}
</style>
