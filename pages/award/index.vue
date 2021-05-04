<template>
  <div>
    <Nav color="theme-primary" />
    <div class="fullscreen">
      <article class="section container">
        <!-- TITLE -->
        <h1 class="section-title">Awards 🏆</h1>
        <!-- CONTAINER FOR PROJECTS -->
        <div class="columns is-multiline">
          <div
            v-for="(award, index) in awards"
            :key="index"
            class="column is-one-third"
          >
            <AwardCard
              v-bind="award"
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
    const awards = await $content("awards", params)
      .sortBy("date", "desc")
      .fetch();

    return {
      awards,
    };
  },
  head() {
    return {
      title: `Awards | Connor Rothschild`,
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://connorrothschild.com/award/`,
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
