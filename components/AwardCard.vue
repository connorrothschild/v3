<template>
	<HoverableCard :to="`award/${slug}`">
		<template v-slot:default>
			<div class="card card-fullheight" :class="background">
				<div class="card-content has-text-black">
					<p class="title is-size-4">{{ name }}</p>
					<p class="subtitle heading is-size-6 has-text-dark">
						{{ organization }} | {{ date }}
					</p>
					<p>{{ description }}</p>
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
		"name",
		"organization",
		"date",
		"description",
		"url",
		"slug",
		"background",
	],
};
</script>

<style scoped lang='scss'>
</style>
