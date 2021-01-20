<template>
	<div>
		<Nav color="is-primary" />
		<article class="section container is-max-tablet mt-6">
			<h1 class="title has-text-weight-boldest is-size-2 is-size-4-mobile">
				{{ article.title }}
			</h1>
			<h2 class="subtitle heading is-size-5 is-size-6-mobile">
				{{ article.date }}
			</h2>
			<p class="subtitle is-size-5 is-size-6-mobile">
				{{ article.description }}
			</p>
			<hr />

			<!-- IF YOU WANT A TOC UNCOMMENT -->
			<!-- <nav>
				<ul>
					<li v-for="link of article.toc" :key="link.id">
						<NuxtLink
							:class="{
								'py-2': link.depth === 2,
								'ml-2 pb-2': link.depth === 3,
							}"
							:to="`#${link.id}`"
							>{{ link.text }}</NuxtLink
						>
					</li>
				</ul>
			</nav> -->

			<nuxt-content :document="article" />
		</article>
	</div>
</template>


<script>
export default {
	async asyncData({ $content, params }) {
		const article = await $content("articles", params.slug).fetch();

		return { article };
	},
	methods: {
		formatDate(date) {
			const options = { year: "numeric", month: "long", day: "numeric" };
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
</style>

