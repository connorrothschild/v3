<template>
	<div>
		<!-- <NuxtLink to="/#" class="heading fixed-bottom-right"
			>Back to top 👆</NuxtLink
		> -->
		<Nav />
		<Hero />
		<Projects :projects="projects" />
		<Awards :awards="awards" />
		<Blog :articles="articles" />
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const projects = await $content("projects", params.slug)
			.only(["title", "description", "img", "slug", "date"])
			// .sortBy("createdAt", "asc")
			.where({ featured: true })
			.fetch();

		const awards = await $content("awards", params.slug).fetch();

		const articles = await $content("articles", params.slug)
			.only(["title", "description", "img", "slug", "author"])
			.sortBy("createdAt", "asc")
			.limit(3)
			.fetch();

		return {
			projects,
			articles,
			awards,
		};
	},
};
</script>

<style>
.fixed-bottom-right {
	position: fixed;
	bottom: 0;
	right: 0;
}
</style>