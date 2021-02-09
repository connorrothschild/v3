<template>
	<img
		:src="imgSrcFallback()"
		:alt="alt"
		loading="lazy"
		:class="{
			'object-fit-cover': type == 'post',
			'object-fit-scale': type == 'project',
		}"
	/>
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
		type: {
			type: String,
			required: true,
		},
	},
	methods: {
		imgSrc() {
			try {
				return require(`~/assets/images/${this.src}?webp`);
			} catch (error) {
				return null;
			}
		},
		imgSrcFallback() {
			try {
				return require(`~/assets/images/${this.src}`);
			} catch (error) {
				return null;
			}
		},
	},
};
</script>

<style scoped>
</style>

