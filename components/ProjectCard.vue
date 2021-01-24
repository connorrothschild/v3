<template>
	<HoverableCard :to="`project/${slug}`">
		<template v-slot:default>
			<div class="card card-fullheight" :class="background">
				<div class="card-image">
					<figure class="image is-2by1">
						<img
							:src="require(`~/assets/images/project/${img}`)"
							:alt="img_alt"
							class="object-fit-scale"
						/>
					</figure>
				</div>
				<div class="card-content has-text-black">
					<div class="media"></div>
					<div class="media-content">
						<p class="title is-size-4">{{ title }}</p>
						<p class="subtitle is-size-6 has-text-weight-light">
							{{ formatDate(date) }}
						</p>
						<p class="">
							{{ description }}
						</p>
					</div>
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

<style scoped lang='scss'></style>
