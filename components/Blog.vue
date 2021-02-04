<template>
	<section id="blog" class="hero is-primary is-primary-gradient is-fullheight">
		<div class="hero-body">
			<div class="container">
				<!-- TITLE -->
				<h1
					class="title has-text-weight-boldest is-size-title is-size-3-mobile mt-6"
				>
					Featured Blog Posts
				</h1>
				<!-- LINK FOR ALL POSTS -->
				<NuxtLink
					to="/post"
					class="subtitle heading has-text-weight-normal is-size-5 link is-inline-block"
					>See all posts 👉</NuxtLink
				>
				<!-- CONTAINER FOR POSTS -->
				<div class="columns">
					<div v-for="(post, index) in posts" :key="index" class="column">
						<BlogCard v-bind="post" background="has-background-light" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	mounted() {},
	props: {
		posts: {
			type: Array,
		},
	},
};
</script>


<style>
</style>
