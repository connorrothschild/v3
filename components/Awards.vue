<template>
	<section
		id="awards"
		class="hero is-primary is-primary-gradient-rev is-fullheight"
	>
		<div class="hero-body">
			<div class="container">
				<!-- TITLE -->
				<h1 class="section-title">Featured Awards</h1>
				<!-- CONTAINER FOR AWARDS -->
				<div class="columns is-multiline">
					<div
						v-for="(award, index) in awards"
						:key="index"
						class="column is-half"
					>
						<AwardCard
							v-bind="award"
							background="has-background-semitransparent"
						/>
					</div>
				</div>
				<!-- LINK TO ALL AWARDS -->
				<NuxtLink
					to="/award"
					class="subtitle heading has-text-weight-normal is-size-5 link is-inline-block is-pulled-right"
					>See all awards 👉</NuxtLink
				>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	mounted() {},
	props: {
		awards: {
			type: Array,
		},
	},
};
</script>

<style>
</style>
