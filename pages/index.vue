<template>
	<div>
		<Nav color="is-primary" />
		<Hero />
		<Projects :projects="projects" />
		<Awards :awards="awards" />
		<Blog :articles="articles" />
		<Footer />
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const projects = await $content("projects", params.slug)
			.only(["title", "description", "img", "img_alt", "slug", "date"])
			.where({ featured: true })
			.fetch();

		const awards = await $content("awards", params.slug)
			.where({ featured: true })
			.fetch();

		const articles = await $content("articles", params.slug)
			.only(["title", "description", "img", "img_alt", "slug"])
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

<style lang='scss' scoped>
body {
	color: $text;
}

h1 {
	&::selection {
		background: whitesmoke;
		color: $primary;
	}
}
</style>