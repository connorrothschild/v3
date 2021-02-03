<template>
	<section
		id="projects"
		class="hero is-primary is-primary-gradient is-fullheight"
	>
		<div class="hero-body">
			<div class="container">
				<!-- TITLE -->
				<h1
					class="title has-text-weight-boldest is-size-1 is-size-3-mobile mt-6"
				>
					Featured Projects
				</h1>
				<!-- LINK TO ALL PROJECTS -->
				<NuxtLink
					to="/project"
					class="subtitle heading has-text-weight-normal is-size-5 link is-inline-block"
					>See all projects 👉</NuxtLink
				>
				<!-- CONTAINER FOR PROJECTS -->
				<div class="columns">
					<div v-for="(project, index) in projects" :key="index" class="column">
						<ProjectCard v-bind="project" background="has-background-light" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	mounted() {},
	props: {
		projects: {
			type: Array,
		},
	},
	scrollToTop: true,
};
</script>

<style lang='scss'>
</style>
