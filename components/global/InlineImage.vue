<template>
	<div class="img">
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

