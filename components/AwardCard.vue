<template>
	<div class="card">
		<div class="card-content">
					<p class="title is-4">{{ name }}</p>
					<p class="subtitle heading is-6">{{ organization }} | {{ date }}</p>
					<p>{{ description }}</p>
			</div>
			<!-- <footer class="card-footer">
				<a
					class="card-footer-item"
					target="_blank"
					rel="noopener noreferrer"
					:href="url"
					>More information</a
				>
			</footer> -->
		</div>
	</div>
</template>

<script>
export default {
	props: ["name", "organization", "date", "description", "url"],
};
</script>

<style scoped lang='scss'>
p {
	color: black !important;
}

.card {
	height: 100%;
}
</style>
