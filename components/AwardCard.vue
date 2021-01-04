<template>
	<div class="card">
		{{ name }}
		{{ organization }}
		{{ date }}
		<a target="_blank" rel="noopener noreferrer" :href="url"
			>More information</a
		>
	</div>
</template>

<script>
export default {
	props: ["name", "organization", "date", "url"],
};
</script>

<style>
</style>
