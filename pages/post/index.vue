<template>
	<div class="has-navbar-fixed-top">
		<Nav color="is-primary" />
		<div class="fullscreen has-background-light">
			<article class="section container">
				<!-- TITLE -->
				<h1 class="title is-size-1 mt-6">Blog Posts</h1>
				<!-- CONTAINER FOR PROJECTS -->
				<div class="columns is-multiline">
					<div
						v-for="(article, index) in articles"
						:key="index"
						class="column is-3"
					>
						<BlogCard v-bind="article" />
					</div>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const articles = await $content("articles", params.slug)
			.only(["title", "description", "img", "slug"])
			.sortBy("createdAt", "asc")
			.fetch();

		return {
			articles,
		};
	},
};
</script>

<style>
.fullscreen {
	min-height: 100vh;
}
</style>
