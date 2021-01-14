<template>
	<div class="has-navbar-fixed-top">
		<Nav color="is-primary" />
		<div class="has-background-light fullscreen">
			<article class="section container">
				<!-- TITLE -->
				<h1 class="title is-size-1 mt-6">Awards</h1>
				<!-- CONTAINER FOR PROJECTS -->
				<div class="columns is-multiline">
					<div
						v-for="(award, index) in awards"
						:key="index"
						class="column is-one-third"
					>
						<AwardCard v-bind="award" />
					</div>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const awards = await $content("awards", params)
			// .only(["title", "description", "img", "slug", "date"])
			// .sortBy("createdAt", "asc")
			.fetch();

		return {
			awards,
		};
	},
};
</script>

<style>
.fullscreen {
	min-height: 100vh;
}
</style>