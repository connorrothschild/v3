<template>
	<HoverableCard :to="`award/${slug}`">
		<template v-slot:default>
			<div class="card card card-fullheight">
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
	props: ["name", "organization", "date", "description", "url", "slug"],
};
</script>

<style scoped lang='scss'>
</style>
