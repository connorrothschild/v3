<template>
	<HoverableCard :to="{ path: `/award/${slug}` }">
		<template v-slot:default>
			<div class="card card-fullheight" :class="background">
				<div class="card-content flex-bounds">
					<p class="title is-size-4">{{ title }}</p>
					<p class="subtitle heading is-size-6has-text-weight-light">
						{{ organization }} | {{ formatDate(date) }}
					</p>
				</div>
			</div>
		</template>
	</HoverableCard>
</template>

<script>
import HoverableCard from "./HoverableCard.vue";

export default {
	components: { HoverableCard },
	props: [
		"title",
		"organization",
		"date",
		"description",
		"url",
		"slug",
		"background",
	],
	methods: {
		formatDate(date) {
			const options = { year: "numeric", month: "long" };
			return new Date(date).toLocaleDateString("en", options);
		},
	},
};
</script>

<style scoped lang='scss'>
.flex-bounds {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
</style>
