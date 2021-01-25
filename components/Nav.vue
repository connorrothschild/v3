<template>
	<nav
		class="navbar is-fixed-top"
		:class="color"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="container">
			<div class="navbar-brand">
				<NuxtLink class="navbar-item" to="/">
					<span class="has-text-weight-boldest">Connor Rothschild</span>
				</NuxtLink>

				<a
					role="button"
					class="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
					@click="isVisible = !isVisible"
					:class="{ 'is-active': isVisible }"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div
				id="navbarBasicExample"
				class="navbar-menu"
				:class="{ 'is-active': isVisible }"
			>
				<!-- <div class="navbar-start">
					<NuxtLink class="navbar-item" to="/">
						<span class="has-text-weight-boldest">Connor Rothschild</span>
					</NuxtLink>
				</div> -->

				<div class="navbar-end">
					<NuxtLink class="navbar-item" to="/#projects"> Projects </NuxtLink>
					<NuxtLink class="navbar-item" to="/#awards"> Awards </NuxtLink>
					<NuxtLink class="navbar-item" to="/#blog"> Blog </NuxtLink>
					<a
						class="navbar-item"
						href="https://docs.google.com/document/d/1qBH-wNMe2nv9Xa4uzHZ5wBevohwKuB3h2i9M2yk4POk/edit?usp=sharing"
						target="_blank"
						rel="noopener"
					>
						Resume
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	props: {
		color: String,
	},
	data() {
		return {
			isVisible: false,
		};
	},
};
</script>


<style scoped lang='scss'>
.navbar-end {
	.navbar-item {
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 0.8rem;
	}
}

.navbar-start {
	.navbar-item {
		font-size: 1.2rem;
	}
}
</style>
