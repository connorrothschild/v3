<template>
	<div>
		<Nuxt />
	</div>
</template>

<script>
</script>

<style lang='scss'>
// GLOBAL STYLES!
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

.has-text-weight-boldest {
	font-weight: 800 !important;
}

.has-border-bottom-grey {
	border-bottom: 1px solid #cecece;
}

.container.is-max-tablet {
	max-width: 768px !important;
}

// // ! For page transitions, uncomment
// .page-enter-active,
// .page-leave-active {
// 	transition-property: opacity;
// 	transition-timing-function: ease-in-out;
// 	transition-duration: 250ms;
// }

// .page-enter,
// .page-leave-to {
// 	opacity: 0;
// }

// // ! FIXME - HTML makes global and that is bad...
// html:focus-within {
// 	scroll-behavior: smooth;
// }
</style>
