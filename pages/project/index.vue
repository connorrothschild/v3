<template>
	<div>
		<Nav color="is-primary" />
		<div class="fullscreen has-background-light">
			<article class="section container">
				<!-- TITLE -->
				<h1
					class="title has-text-weight-boldest is-size-1 my-6 pb-4 has-border-bottom-grey"
				>
					Projects 💻
				</h1>
				<!-- CONTAINER FOR PROJECTS -->
				<div class="columns is-multiline">
					<div
						v-for="(project, index) in projects"
						:key="index"
						class="column is-3"
					>
						<ProjectCard v-bind="project" background="has-background-white" />
					</div>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const projects = await $content("projects", params.slug)
			.only(["title", "description", "img", "img_alt", "slug", "date"])
			.sortBy("date", "desc")
			.fetch();

		return {
			projects,
		};
	},
};
</script>

<style>
.fullscreen {
	min-height: 100vh;
}
</style>