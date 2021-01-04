<template>
	<div class="has-background-light p-4 mb-4 info-box">
		<img src="~/assets/icons/exclamation.png" alt="Note" />
		<div><slot name="info-box"></slot></div>
	</div>
</template>

<style scoped>
img {
	max-width: 30px;
	max-height: 30px;
	margin-right: 1em;
}
.info-box {
	display: flex;
	place-items: center;
	border-radius: 10px;
	font-weight: bold;
	box-shadow: 3px 3px 6px 5px #ccc;
}
</style>