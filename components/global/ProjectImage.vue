<template>
	<div style="display: inline-block" :style="{ width: width }">
		<img v-img :src="imgSrc()" :alt="alt" />
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
			required: false,
		},
		width: {
			type: String,
			required: false,
			default: "100%",
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
</style>

