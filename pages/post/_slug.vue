<template>
	<div>
		<Nav color="is-primary" />
		<article class="section container is-max-tablet mt-6">
			<h1 class="title has-text-weight-boldest is-size-3 is-size-4-mobile">
				{{ post.title }}
			</h1>
			<h2 class="subtitle heading is-size-5 is-size-6-mobile">
				{{ formatDate(post.date) }}
			</h2>
			<p class="subtitle is-size-5 is-size-6-mobile">
				{{ post.description }}
			</p>
			<hr />

			<nuxt-content :document="post" />
			<hr />
			<prev-next :prev="prev" :next="next" type="post" />
			<NuxtLink to="/post" class="subtitle has-text-weight-bolder is-size-5"
				>👈 Back to all posts</NuxtLink
			>
		</article>
		<Footer />
	</div>
</template>


<script>
export default {
	async asyncData({ $content, params }) {
		const post = await $content("posts", params.slug).fetch();

		const [prev, next] = await $content("posts")
			.only(["title", "slug"])
			.sortBy("date", "asc")
			.surround(params.slug)
			.fetch();

		return { post, prev, next };
	},
	methods: {
		formatDate(date) {
			const options = { year: "numeric", month: "long" };
			return new Date(date).toLocaleDateString("en", options);
		},
	},
};
</script>

<style lang='scss'>
/* STYLING SPECIFIC TO BLOG POSTS GOES HERE */
.nuxt-content {
	h1 {
		font-weight: bold;
		font-size: 1.8rem;
		margin: 0.5rem 0;
		@media screen and (max-width: 768px) {
			font-size: 1.4rem;
		}
	}
	h2 {
		font-weight: bold;
		font-size: 1.6rem;
		margin: 0.5rem 0;
		@media screen and (max-width: 768px) {
			font-size: 1.3rem;
		}
	}
	h3 {
		font-weight: bold;
		font-size: 1.4rem;
		margin: 0.5rem 0;
		@media screen and (max-width: 768px) {
			font-size: 1.2rem;
		}
	}
	h4 {
		font-weight: bold;
		font-size: 1.2rem;
		margin: 0.5rem 0;
		@media screen and (max-width: 768px) {
			font-size: 1.1rem;
		}
	}

	p {
		margin-bottom: 0.5rem;
		font-size: 1rem;

		.nuxt-content p:last-child {
			margin-bottom: 0;
		}
	}

	li {
		list-style: inside !important;
	}
}
// Hover icon link
.icon.icon-link {
	width: 0;
}

.nuxt-content h2 > a::before,
.nuxt-content h3 > a::before {
	content: "#";
	display: block;
	float: left;
	margin-left: -1.25rem;
	color: black;
	opacity: 0;
	font-weight: 400;
	font-size: 1.25rem;
	line-height: 1.75rem;
	line-height: 2rem;
	padding-right: 0.5rem;
	position: absolute;
}

.nuxt-content h2:hover > a::before,
.nuxt-content h3:hover > a::before {
	opacity: 1;
}

// Margin around code highlighting
.nuxt-content-highlight {
	margin: 1rem 0;
}

// Markdown tables, by default, apply Bulma table styling https://bulma.io/documentation/elements/table/
table {
	@extend .table;
	@extend .is-fullwidth;
	@extend .is-hoverable;
}
</style>

