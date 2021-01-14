<template>
	<div>
		<Nav color="is-primary" />
		<article class="section container is-max-desktop mt-6">
			<h1 class="title has-text-weight-boldest is-size-2">
				{{ article.title }}
			</h1>
			<h2 class="subtitle heading is-size-5">{{ article.date }}</h2>
			<!-- <img :src="article.img" :alt="article.alt" /> -->
			<p>{{ article.description }}</p>
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
	p {
		margin-bottom: 0.5rem;
		font-size: 1rem;

		.nuxt-content p:last-child {
			margin-bottom: 0;
		}
	}
}
// HOVER ICON LINK
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
</style>

