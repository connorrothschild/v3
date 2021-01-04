<template>
	<div>
		<Nav color="is-dark" />
		<article class="section container">
			<h1 class="title is-size-1 is-size-3-mobile">Projects</h1>
			<!-- CONTAINER FOR PROJECTS -->
			<div class="columns">
				<div v-for="(project, index) in projects" :key="index" class="column">
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
