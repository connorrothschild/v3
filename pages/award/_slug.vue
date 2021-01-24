<template>
	<div>
		<Nav color="is-primary" />
		<div style="min-height: 100vh">
			<article class="section container is-max-desktop mt-6">
				<h1 class="title has-text-weight-boldest is-size-2 is-size-4-mobile">
					{{ award.name }}
				</h1>
				<p class="subtitle heading is-size-5 is-size-6-mobile">
					{{ award.organization }} | {{ formatDate(award.date) }}
				</p>
				<!-- <p class="subtitle is-size-5 is-size-6-mobile">
					{{ award.description }}
				</p> -->
				<hr />
				<nuxt-content :document="award" />
				<hr />
				<div class="columns mt-3">
					<div class="column" v-if="award.project_url">
						<HoverableCard :href="award.project_url">
							<article class="card has-background-white">
								<div class="card-content">
									<div class="content is-flex is-justify-content-space-evenly">
										<div class="has-text-centered">
											<p class="has-text-weight-light title is-size-6">
												Project Link
											</p>
										</div>
									</div>
								</div>
							</article>
						</HoverableCard>
					</div>

					<div class="column" v-if="award.media_url">
						<HoverableCard :href="award.media_url">
							<article class="card has-background-white">
								<div class="card-content">
									<div class="content is-flex is-justify-content-space-evenly">
										<div class="has-text-centered">
											<p class="has-text-weight-light title is-size-6">Media</p>
										</div>
									</div>
								</div>
							</article>
						</HoverableCard>
					</div>
				</div>
			</article>
		</div>
		<Footer />
	</div>
</template>


<script>
export default {
	async asyncData({ $content, params }) {
		const award = await $content("awards", params.slug).fetch();

		return { award };
	},
	methods: {
		formatDate(date) {
			console.log(date);
			const options = { year: "numeric", month: "long" };
			return new Date(date).toLocaleDateString("en", options);
		},
	},
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
	h3 {
		font-weight: bold;
		font-size: 18px;
	}
	h4 {
		font-weight: bold;
		font-size: 16px;
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
</style>

