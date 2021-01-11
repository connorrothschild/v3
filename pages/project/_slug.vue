<template class='no-smooth-scroll'>
	<div>
		<Nav color="is-primary" />
		<article class="section container is-max-desktop mt-6">
			<h1 class="title is-size-2">
				{{ project.title }}
			</h1>
			<h2 class="subtitle is-size-4">{{ project.description }}</h2>

			<div class="columns">
				<div class="column">
					<article class="card">
						<header class="card-header">
							<p
								class="card-header-title has-background-primary has-text-white"
							>
								Tech & Code
							</p>
						</header>
						<div class="card-content">
							<div class="content is-flex is-justify-content-space-evenly">
								<div class="has-text-centered">
									<p class="heading has-text-weight-bold title is-size-6">
										Tools used
									</p>
									<p>{{ project.techstack }}</p>
								</div>
							</div>
						</div>
						<footer class="card-footer">
							<a
								class="card-footer-item"
								v-if="project.github"
								:href="project.github"
								><span class="has-text-weight-bold">GitHub Repository</span></a
							>
							<p v-else class="card-footer-item">
								Code is not publicly available 😢
							</p>
						</footer>
					</article>
				</div>
				<div class="column">
					<article class="card">
						<header class="card-header">
							<p
								class="card-header-title has-background-primary has-text-white"
							>
								Project Details
							</p>
						</header>
						<div class="card-content">
							<div class="content is-flex is-justify-content-space-evenly">
								<div class="has-text-centered">
									<p class="heading has-text-weight-bold title is-size-6">
										Published
									</p>
									<p>{{ project.date }}</p>
								</div>
								<div class="has-text-centered">
									<p class="heading has-text-weight-bold title is-size-6">
										Audience
									</p>
									<p>{{ project.audience }}</p>
								</div>
							</div>
						</div>
						<footer class="card-footer">
							<a
								v-if="project.url"
								class="card-footer-item has-text-weight-bold"
								:href="project.url"
								>Live URL</a
							>
							<p v-else class="card-footer-item">
								Project is not publicly available 😢
							</p>
						</footer>
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

.nuxt-content p:last-child {
	margin-bottom: 0;
}

.my-tiles {
	p:not(:last-child) {
		margin-bottom: 0.35rem !important;
	}

	// a[href] {
	// 	background-color: #f03a5f;
	// 	color: white !important;
	// 	padding: 3px;
	// 	border-radius: 3px;
	// 	text-decoration: none !important;
	// 	transition: 200ms background-color;

	// 	&:hover {
	// 		background-color: #363636;
	// 	}
	// }
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

