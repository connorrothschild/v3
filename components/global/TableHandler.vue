<template>
	<div class="table-handler-container">
		<div>
			<img :src="imgSrc()" :alt="alt" />
		</div>
		<p class="is-size-7">
			<strong>Note:</strong>
			<slot></slot>
		</p>
		<hr />
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
				console.log(error);
				return null;
			}
		},
	},
};
</script>

<style scoped>
.table-handler-container {
	padding: 1rem 0;
}

img {
	max-width: 80%;
	margin: 0 auto;
}
</style>

