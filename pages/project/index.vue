<template>
	<div class="has-navbar-fixed-top">
		<Nav color="is-primary" />
		<article class="section container">
			<h1 class="title is-size-1 mt-6">Projects</h1>
			<!-- CONTAINER FOR PROJECTS -->
			<div class="columns is-multiline">
				<div
					v-for="(project, index) in projects"
					:key="index"
					class="column is-3"
				>
					<ProjectCard
						:name="project.title"
						:description="project.description"
						:date="project.date"
						:img="project.img"
						:img_alt="project.image_alt"
						:slug="project.slug"
					/>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const projects = await $content("projects", params.slug)
			.only(["title", "description", "img", "slug"])
			.sortBy("createdAt", "asc")
			.fetch();

		return {
			projects,
		};
	},
};
</script>
