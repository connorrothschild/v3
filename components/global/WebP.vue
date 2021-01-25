<template>
	<picture>
		<source :src="imgSrc()" :alt="alt" type="image/webp" />
		<source :src="imgSrcFallback()" :alt="alt" type="image/png" />
		<img :src="imgSrcFallback()" :alt="alt" />
	</picture>
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
	},
	methods: {
		imgSrc() {
			try {
				return require(`${this.src}?webp`);
			} catch (error) {
				return null;
			}
		},
		imgSrcFallback() {
			try {
				return require(`${this.src}`);
			} catch (error) {
				return null;
			}
		},
	},
};
</script>

<style scoped>
</style>

