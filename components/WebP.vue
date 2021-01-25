<template>
	<picture>
		<!-- If webp is accessible prefer -->
		<source
			:src="imgSrc()"
			:alt="alt"
			type="image/webp"
			:class="{
				'object-fit-cover': type == 'post',
				'object-fit-scale': type == 'project',
			}"
		/>
		<!-- If not, optimized PNG -->
		<source
			:src="imgSrcFallback()"
			:alt="alt"
			type="image/png"
			:class="{
				'object-fit-cover': type == 'post',
				'object-fit-scale': type == 'project',
			}"
		/>
		<!-- If not, regular image -->
		<img
			:src="imgSrcFallback()"
			:alt="alt"
			:class="{
				'object-fit-cover': type == 'post',
				'object-fit-scale': type == 'project',
			}"
		/>
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

