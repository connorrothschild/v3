<template>
  <div class="is-flex responsive-flex mb-6">
    <div class="half-flex responsive-margin">
      <h1 class="title is-size-3">
        {{ title }}
      </h1>
      <h2 class="subtitle">{{ description }}</h2>
      <NuxtLink
        :to="{ path: `/${type}/${slug}` }"
        class="heading link is-size-6 is-inline"
        >See the {{ type }}</NuxtLink
      >
    </div>
    <div class="half-flex">
      <HoverableCard :to="{ path: `/${type}/${slug}` }">
        <WebP
          :src="`${type}/${img}`"
          :alt="img_alt"
          :type="type"
          imgStyle="border-radius: 5px;"
        />
      </HoverableCard>
    </div>
  </div>
</template>

<script>
import WebP from "./WebP.vue";

export default {
  components: { WebP },
  props: [
    "title",
    "description",
    "date",
    "img",
    "img_alt",
    "slug",
    "background",
    "type",
  ],
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style scoped lang="scss">
.half-flex {
  flex: 1 1 0px;
  width: 100%;
}

.responsive-flex {
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 860px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
}

.responsive-margin {
  @media screen and (min-width: 860px) {
    margin-right: 1rem;
    margin-left: 1rem;
  }

  @media screen and (max-width: 860px) {
    margin: 1.5rem 0;
  }
}
</style>
