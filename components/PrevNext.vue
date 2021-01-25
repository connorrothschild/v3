<template>
	<div class="columns">
		<div class="column" v-if="next">
			<HoverableCard :to="`/${type}/${next.slug}`">
				<article class="card card-fullheight has-background-white">
					<div class="card-content">
						<div class="content is-flex is-justify-content-space-evenly">
							<div class="has-text-centered">
								<p class="heading title is-size-6">Next {{ type }}</p>
								<p class="has-text-weight-light title is-size-6">
									{{ next.title }}
								</p>
							</div>
						</div>
					</div>
				</article>
			</HoverableCard>
		</div>
		<span v-else>&nbsp;</span>
		<div class="column" v-if="prev">
			<HoverableCard :to="`/${type}/${prev.slug}`">
				<article class="card card-fullheight has-background-white">
					<div class="card-content">
						<div class="content is-flex is-justify-content-space-evenly">
							<div class="has-text-centered">
								<p class="heading title is-size-6">Previous {{ type }}</p>
								<p class="has-text-weight-light title is-size-6">
									{{ prev.title }}
								</p>
							</div>
						</div>
					</div>
				</article>
			</HoverableCard>
		</div>
		<span v-else>&nbsp;</span>
	</div>
</template>


<script>
export default {
	props: {
		prev: {
			type: Object,
			default: () => null,
		},
		next: {
			type: Object,
			default: () => null,
		},
		type: {
			type: String,
			default: () => null,
		},
	},
};
</script>
