<template>
	<section id="awards" class="hero is-dark is-fullheight">
		<div class="hero-body">
			<div class="container">
				<h1 class="title is-size-1 is-size-3-mobile">Featured Awards</h1>
				<NuxtLink
					to="/award"
					class="subtitle heading has-text-weight-light is-size-5"
					>See all awards 👉</NuxtLink
				>
				<!-- CONTAINER FOR AWARDS -->
				<div class="columns">
					<div v-for="(award, index) in awards" :key="index" class="column">
						<AwardCard
							:name="award.name"
							:organization="award.organization"
							:date="award.date"
							:url="award.url"
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
		awards: {
			type: Array,
		},
	},
};
</script>

<style>
</style>
