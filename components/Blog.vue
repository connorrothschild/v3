<template>
	<section id="blog" class="hero is-white is-fullheight">
		<div class="hero-body">
			<div class="container">
				<h1 class="title is-size-1 is-size-3-mobile">Featured Blog Posts</h1>
				<NuxtLink
					to="/project"
					class="subtitle heading has-text-weight-light is-size-5"
					>See all posts 👉</NuxtLink
				>
				<!-- CONTAINER FOR PROJECTS -->
				<div class="columns">
					<div v-for="(article, index) in articles" :key="index" class="column">
						<BlogCard
							:title="article.title"
							:description="article.description"
							:date="article.date"
							:image="article.image"
							:image_alt="article.image_alt"
							:slug="article.slug"
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
		articles: {
			type: Array,
		},
	},
};
</script>


<style>
</style>
