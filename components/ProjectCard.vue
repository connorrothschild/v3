<template>
	<HoverableCard :to="{ path: `/project/${slug}` }">
		<template v-slot:default>
			<div class="card card-fullheight" :class="background">
				<div class="card-image">
					<figure class="image is-2by1">
						<WebP :src="`project/${img}`" :alt="img_alt" type="project" />
					</figure>
				</div>
				<div class="card-content has-text-black">
					<div class="media"></div>
					<div class="media-content">
						<p class="title is-size-4">{{ title }}</p>
						<p class="subtitle is-size-6 has-text-weight-light">
							{{ formatDate(date) }}
						</p>
						<p>
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
import WebP from "./WebP.vue";

export default {
	components: { HoverableCard, WebP },
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
