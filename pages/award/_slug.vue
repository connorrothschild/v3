<template>
	<div>
		<Nav color="is-primary" />
		<div style="min-height: 100vh">
			<article class="section container is-max-desktop mt-6">
				<h1 class="title is-size-2">
					{{ award.name }}
				</h1>
				<p class="subtitle heading is-size-5">
					{{ award.organization }} | {{ award.date }}
				</p>
				<p>{{ award.description }}</p>
				<hr />
				<nuxt-content :document="award" />
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
</style>

