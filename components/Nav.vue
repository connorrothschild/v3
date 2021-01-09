<template>
	<nav
		class="navbar is-fixed-top"
		:class="color"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<!-- <a class="navbar-item" href="#">
				<img
					src="https://bulma.io/images/bulma-logo.png"
					width="112"
					height="28"
				/>
			</a> -->

			<a
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<NuxtLink class="navbar-item" to="/">
					<span class="has-text-weight-bold">Home</span>
				</NuxtLink>

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

			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<a class="button is-primary">
							<strong>Get in touch</strong>
						</a>
					</div>
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
};
</script>


<style>
/* .navbar {
	width: 100%;
	position: fixed;
	top: 0;
} */
</style>
