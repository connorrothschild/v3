<template>
	<div class="has-navbar-fixed-top">
		<Nav color="is-primary" />
		<div class="fullscreen has-background-light">
			<article class="section container">
				<!-- TITLE -->
				<h1
					class="title has-text-weight-boldest is-size-1 my-6 pb-4 has-border-bottom-grey"
				>
					Blog Posts
				</h1>
				<!-- CONTAINER FOR PROJECTS -->
				<div class="columns is-multiline">
					<div
						v-for="(article, index) in articles"
						:key="index"
						class="column is-3"
					>
						<BlogCard v-bind="article" background="has-background-white" />
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
			.only(["title", "description", "img", "date", "slug"])
			.sortBy("date", "desc")
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
