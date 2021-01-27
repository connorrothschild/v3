<template>
	<div>
		<Nav color="is-primary" />
		<div style="min-height: 100vh">
			<article class="section container is-max-desktop mt-6">
				<h1 class="title has-text-weight-boldest is-size-2 is-size-4-mobile">
					{{ award.title }}
				</h1>
				<p class="subtitle heading is-size-5 is-size-6-mobile">
					{{ award.organization }} | {{ formatDate(award.date) }}
				</p>
				<hr />
				<nuxt-content :document="award" />
				<div class="mt-3 is-size-5 has-text-centered">
					<a
						class="has-text-weight-light"
						target="_blank"
						rel="noopener"
						:href="award.project_url"
					>
						Project Link
					</a>
					|
					<a
						class="has-text-weight-light has-text-weight-primary"
						target="_blank"
						rel="noopener"
						:href="award.media_url"
					>
						Media
					</a>
				</div>
				<hr />
				<prev-next :prev="prev" :next="next" type="award" />
				<NuxtLink to="/award" class="subtitle has-text-weight-bolder is-size-5"
					>👈 Back to all awards</NuxtLink
				>
			</article>
		</div>
		<Footer />
	</div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";

export default {
	async asyncData({ $content, params }) {
		const award = await $content("awards", params.slug).fetch();

		const [prev, next] = await $content("awards")
			.only(["title", "slug"])
			.sortBy("date", "asc")
			.surround(params.slug)
			.fetch();

		return { award, prev, next };
	},
	methods: {
		formatDate(date) {
			const options = { year: "numeric", month: "long" };
			return new Date(date).toLocaleDateString("en", options);
		},
	},
	computed: {
		meta() {
			const metaData = {
				// For award pages, only redefine URL for og:url and twitter:url (because they don't have images)
				type: "article",
				url: `https://connorrothschild.com/award/${this.$route.params.slug}`,
			};
			return getSiteMeta(metaData);
		},
	},
	head() {
		return {
			title: this.award.title,
			meta: [
				...this.meta,
				{
					property: "article:published_time",
					content: this.award.createdAt,
				},
				{
					property: "article:modified_time",
					content: this.award.updatedAt,
				},
				{ name: "twitter:label1", content: "Written by" },
				{ name: "twitter:data1", content: "Connor Rothschild" },
			],
			link: [
				{
					hid: "canonical",
					rel: "canonical",
					href: `https://connorrothschild.com/award/${this.$route.params.slug}`,
				},
			],
		};
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

