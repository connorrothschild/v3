<template>
  <div class="theme-primary-off">
    <Nav classes="theme-primary" />
    <div class="fullscreen">
      <article class="section container">
        <!-- TITLE -->
        <h1 class="section-title">Blog Posts 📝</h1>
        <!-- CONTAINER FOR PROJECTS -->
        <div class="columns is-multiline">
          <div v-for="(post, index) in posts" :key="index" class="column is-4">
            <BlogCard
              v-bind="post"
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
    const posts = await $content("posts", params)
      .where({ draft: { $ne: true } }) // Exclude where draft != true
      .sortBy("date", "desc")
      .fetch();

    // If missing parameter, run below
    // console.log(posts.filter(posts => !posts.img_alt))

    return {
      posts,
    };
  },
  head() {
    return {
      title: `Posts | Connor Rothschild`,
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://v3.connorrothschild.com/post/`,
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
