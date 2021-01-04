<template>
	<section id="projects" class="hero is-white is-fullheight">
		<div class="hero-body">
			<div class="container">
				<h1 class="title is-size-1 is-size-3-mobile">Featured Projects</h1>
				<NuxtLink
					to="/project"
					class="subtitle heading has-text-weight-light is-size-5"
					>See all projects 👉</NuxtLink
				>
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
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		projects: {
			type: Array,
		},
	},
};
</script>


<style>
</style>
