<template>
  <section
    id="blog"
    class="hero theme-primary theme-primary-gradient is-fullheight"
  >
    <div class="hero-body">
      <div class="container">
        <!-- TITLE -->
        <h1 class="section-title">Featured Blog Posts</h1>
        <!-- BIG ITEM AT TOP -->
        <FeaturedItem v-bind="featured" type="post" />
        <!-- CONTAINER FOR POSTS -->
        <div class="columns">
          <div v-for="(post, index) in posts" :key="index" class="column">
            <BlogCard
              v-bind="post"
              background="has-background-semitransparent"
            />
          </div>
        </div>
        <!-- LINK FOR ALL POSTS -->
        <NuxtLink
          to="/post"
          class="subtitle heading has-text-weight-normal is-size-5 link is-inline-block is-pulled-right"
          >See all posts 👉</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // console.log(this.featured);
  },
  props: {
    posts: {
      type: Array,
    },
    featured: {
      type: Object,
    },
  },
};
</script>

<style></style>
