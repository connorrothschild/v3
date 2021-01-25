<template>
	<div v-if="clickable" class="img" :style="{ width: width }">
		<img v-img :src="imgSrc()" :alt="alt" />
	</div>
	<div v-else class="img" :style="{ width: width }">
		<img :src="imgSrc()" :alt="alt" />
	</div>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
		width: {
			type: String,
			required: false,
			default: "100%",
		},
		clickable: {
			type: Boolean,
			required: false,
			default: true,
		},
	},
	methods: {
		imgSrc() {
			try {
				return require(`~/static/${this.src}`);
			} catch (error) {
				return null;
			}
		},
	},
};
</script>

<style scoped>
img {
	padding: 1rem 0;
}
</style>

