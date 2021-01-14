<template>
	<div>
		<Nuxt />
	</div>
</template>

<style lang='scss'>
html {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.object-fit-scale {
	object-fit: scale-down;
}

.object-fit-cover {
	object-fit: cover;
}

.fullscreen {
	min-height: 100vh;
}

.card-content.has-text-black {
	p {
		color: black !important;
	}
}

.card.card-fullheight {
	height: 100%;
}

*:focus {
	outline: none;
}

*:focus-visible {
	outline: 1px dashed #cecece;
}
</style>
