<template>
	<NuxtLink :to="`project/${slug}`" prefetch class="card">
		<div class="card-image">
			<figure class="image is-4by3">
				<img
					:src="require(`~/assets/images/projects/${img}`)"
					:alt="img_alt"
					class="object-fit-scale"
				/>
			</figure>
		</div>
		<div class="card-content">
			<div class="media">
				<div class="media-content">
					<p class="title is-4">{{ title }}</p>
					<p class="subtitle is-6">{{ date }}</p>
				</div>
			</div>

			<div class="content">
				{{ description }}
			</div>
		</div>
	</NuxtLink>
</template>

<script>
export default {
	props: ["title", "description", "date", "img", "img_alt", "slug"],
};
</script>

<style scoped>
.card {
	height: 100%;
}
</style>
