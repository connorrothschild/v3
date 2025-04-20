<template>
  <div class="theme-primary-off">
    <Nav classes="theme-primary" />
    <article class="section container is-max-tablet">
      <h1 class="my-3 has-text-weight-boldest content-title is-size-3-mobile">
        {{ post.title }}
      </h1>
      <p class="my-3 content-description is-size-5-mobile">
        {{ post.description }}
      </p>
      <p class="heading is-size-6 has-text-weight-light">
        {{ formatDate(post.date) }} •
        <ReadingTime :content="post"></ReadingTime>
      </p>
      <hr />

      <nuxt-content :document="post" />
      <hr />
      <div class="my-4">
        <NuxtLink
          to="/post"
          class="subtitle has-text-weight-bolder is-size-5 link heading is-inline-block"
          >👈 Back to all posts</NuxtLink
        >
      </div>
      <prev-next :prev="prev" :next="next" type="post" />
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
    const post = await $content("posts", params.slug).fetch();

    const [prev, next] = await $content("posts")
      .where({ draft: { $ne: true } }) // Exclude where draft != true
      .only(["title", "slug", "img", "img_alt"])
      .sortBy("date", "asc")
      .surround(params.slug)
      .fetch();

    return { post, prev, next };
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
        title: this.post.title,
        description: this.post.description,
        url: `https://v3.connorrothschild.com/post/${this.$route.params.slug}`,
        mainImage: `https://v3.connorrothschild.com/post/${this.post.img}`,
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: `${this.post.title} | Connor Rothschild`,
      meta: [
        ...this.meta,
        {
          property: "article:published_time",
          content: this.post.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.post.updatedAt,
        },
        { name: "twitter:label1", content: "Written by" },
        { name: "twitter:data1", content: "Connor Rothschild" },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://v3.connorrothschild.com/post/${this.$route.params.slug}`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
// STYLING SPECIFIC TO BLOG POSTS GO HERE
</style>
