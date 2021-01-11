<template>
	<section
		id="projects"
		class="hero is-primary is-primary-gradient is-fullheight"
	>
		<div class="hero-body">
			<div class="container">
				<h1 class="title is-size-1 is-size-3-mobile mt-6">Featured Projects</h1>
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
	scrollToTop: true,
};
</script>

<style lang='scss'>
.is-primary-gradient {
	background-image: linear-gradient(
		to bottom,
		#03071e,
		#0a0b1c,
		#100f1a,
		#131318,
		#161616
	);
}

.is-primary-gradient-rev {
	background-image: linear-gradient(
		to top,
		#03071e,
		#0a0b1c,
		#100f1a,
		#131318,
		#161616
	);
}
</style>
