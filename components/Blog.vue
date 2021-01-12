<template>
	<section id="blog" class="hero is-primary is-primary-gradient is-fullheight">
		<div class="hero-body">
			<div class="container">
				<!-- TITLE -->
				<h1 class="title is-size-1 is-size-3-mobile mt-6">
					Featured Blog Posts
				</h1>
				<!-- LINK FOR ALL POSTS -->
				<NuxtLink
					to="/blog"
					class="subtitle heading has-text-weight-light is-size-5"
					>See all posts 👉</NuxtLink
				>
				<!-- CONTAINER FOR POSTS -->
				<div class="columns">
					<div v-for="(article, index) in articles" :key="index" class="column">
						<BlogCard v-bind="article" />
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
