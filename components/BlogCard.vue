<template>
	<HoverableCard :to="`post/${slug}`">
		<template v-slot:default>
			<div class="card card-fullheight" :class="background">
				<div class="card-image">
					<figure class="image is-2by1">
						<WebP
							:src="`~/assets/images/post/${img}`"
							:alt="img_alt"
							class="object-fit-cover"
						/>
					</figure>
				</div>
				<div class="card-content has-text-black">
					<p class="title is-size-4">{{ title }}</p>
					<p
						class="subtitle heading is-size-6 has-text-dark has-text-weight-light"
					>
						{{ formatDate(date) }}
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
		"title",
		"description",
		"date",
		"img",
		"img_alt",
		"slug",
		"path",
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

<style scoped>
</style>
