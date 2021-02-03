<template>
	<section
		id="awards"
		class="hero is-primary is-primary-gradient-rev is-fullheight"
	>
		<div class="hero-body">
			<div class="container">
				<!-- TITLE -->
				<h1
					class="title has-text-weight-boldest is-size-1 is-size-3-mobile mt-6"
				>
					Featured Awards
				</h1>
				<!-- LINK TO ALL AWARDS -->
				<NuxtLink
					to="/award"
					class="subtitle heading has-text-weight-normal is-size-5 link is-inline-block"
					>See all awards 👉</NuxtLink
				>
				<!-- CONTAINER FOR AWARDS -->
				<div class="columns is-multiline">
					<div
						v-for="(award, index) in awards"
						:key="index"
						class="column is-half"
					>
						<AwardCard v-bind="award" background="has-background-light" />
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
		awards: {
			type: Array,
		},
	},
};
</script>

<style>
</style>
