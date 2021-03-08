<template>
	<div class="main-body">
		<Nav color="is-primary" />
		<Hero />
		<Projects :projects="projects" :featured="featuredProject[0]" />
		<Awards :awards="awards" />
		<Blog :posts="posts" :featured="featuredPost[0]" />
		<Footer />
	</div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";

export default {
	async asyncData({ $content, params }) {
		const projects = await $content("projects", params.slug)
			.only(["title", "description", "img", "img_alt", "slug", "date"])
			.where({ featured: true })
			.sortBy("date", "desc")
			.fetch();

		const awards = await $content("awards", params.slug)
			.where({ featured: true })
			.sortBy("date", "desc")
			.fetch();

		const posts = await $content("posts", params.slug)
			.only(["title", "description", "img", "img_alt", "slug", "date"])
			.where({ featured: true })
			.sortBy("date", "desc")
			.limit(3)
			.fetch();

		const featuredProject = await $content("projects", params.slug)
			.only(["title", "description", "img", "img_alt", "slug", "date"])
			.where({ megaFeatured: true })
			.fetch();

		const featuredPost = await $content("posts", params.slug)
			.only(["title", "description", "img", "img_alt", "slug", "date"])
			.where({ megaFeatured: true })
			.fetch();

		return {
			projects,
			featuredProject,
			posts,
			featuredPost,
			awards,
		};
	},
	computed: {
		// * Default meta tags for homepage
		// https://nuxtjs.org/docs/2.x/features/meta-tags-seo/
		head() {
			return {
				title: "Connor Rothschild",
				meta: getSiteMeta(),
			};
		},
	},
};
</script>

<style lang='scss' scoped>
body {
	color: $text;
}

section {
	content-visibility: auto;
	content-intrinsic-size: 0 100vh;
}
</style>