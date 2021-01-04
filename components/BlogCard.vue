<template>
	<div class="card">
		{{ title }}
		{{ description }}
		{{ date }}
		<a target="_blank" rel="noopener noreferrer" :href="slug"
			>More information</a
		>
	</div>
</template>

<script>
export default {
	props: ["title", "description", "date", "image", "image_alt", "slug"],
};
</script>

<style>
</style>
