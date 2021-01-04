<template>
	<div>
		<Nav color="is-dark" />
		<article class="section container is-max-desktop">
			<h1 class="title mt-6 is-size-2">{{ project.title }}</h1>
			<h2 class="subtitle is-size-4">{{ project.description }}</h2>

			<div class="tile is-ancestor my-tiles">
				<div class="tile is-parent">
					<article
						class="tile is-child notification is-light box is-flex is-flex-direction-column is-justify-content-space-evenly"
					>
						<p class="heading title is-size-4">Tech & Code</p>
						<div>
							<p>
								<span class="has-text-weight-bold">Tools used</span>:
								{{ project.techstack }}
							</p>
							<a v-if="project.github" :href="project.github"
								><span class="has-text-weight-bold">GitHub Repository</span></a
							>
						</div>
					</article>
				</div>
				<div class="tile is-parent">
					<article
						class="tile is-child notification is-light box is-flex is-flex-direction-column is-justify-content-space-evenly"
					>
						<p class="heading title is-size-4">Project Details</p>
						<div>
							<p>
								<span class="has-text-weight-bold">Published</span>:
								{{ project.date }}
							</p>
							<p>
								<span class="has-text-weight-bold">Built for</span>:
								{{ project.audience }}
							</p>
							<a v-if="project.url" :href="project.url"
								><span class="has-text-weight-bold">Live URL</span></a
							>
						</div>
					</article>
				</div>
			</div>

			<nuxt-content :document="project" />
		</article>
	</div>
</template>


<script>
export default {
	async asyncData({ $content, params }) {
		const project = await $content("projects", params.slug).fetch();

		return { project };
	},
	scrollToTop: true,
};
</script>

<style lang='scss'>
/* STYLING SPECIFIC TO PROJECTS GOES HERE */
.nuxt-content-container {
	h1 {
		font-weight: bold;
		font-size: 28px;
	}
	h2 {
		font-weight: bold;
		font-size: 22px;
	}
	.h3 {
		font-weight: bold;
		font-size: 18px;
	}

	p,
	figure {
		margin-bottom: 1rem;
		// font-size: 1rem;

		.nuxt-content p:last-child {
			margin-bottom: 0;
		}
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-bottom: 0.5rem;
	}
}

.my-tiles {
	p:not(:last-child) {
		margin-bottom: 0.5rem !important;
	}

	a[href] {
		background-color: #f03a5f; // $danger;
		color: white !important;
		padding: 5px;
		border-radius: 3px;
		text-decoration: none !important;
		transition: 200ms background-color;

		&:hover {
			background-color: #363636;
		}
	}
}
// HOVER ICON LINK
.icon.icon-link {
	width: 0;
}

// .nuxt-content h2 > a::before,
// .nuxt-content h3 > a::before {
// 	content: "#";
// 	display: block;
// 	float: left;
// 	margin-left: -1.25rem;
// 	color: black;
// 	opacity: 0;
// 	font-weight: 400;
// 	font-size: 1.25rem;
// 	line-height: 1.75rem;
// 	line-height: 2rem;
// 	padding-right: 0.5rem;
// 	position: absolute;
// }

// .nuxt-content h2:hover > a::before,
// .nuxt-content h3:hover > a::before {
// 	opacity: 1;
// }
</style>

