<template>
	<div>
		<Nav color="is-primary" />
		<Hero />
		<Projects :projects="projects" />
		<Awards :awards="awards" />
		<Blog :posts="posts" />
		<Footer />
	</div>
</template>

<script>
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
			.only(["title", "description", "img", "img_alt", "date", "slug"])
			.where({ featured: true })
			.sortBy("date", "desc")
			.limit(3)
			.fetch();

		return {
			projects,
			posts,
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