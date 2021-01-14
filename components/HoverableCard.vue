<template>
	<div
		v-on:mouseout="
			x = 0;
			y = 0;
		"
		v-on:mouseover="
			x = 0;
			y = 10;
		"
		v-bind:style="`transition: 1s transform ease; transform: translateX(${x}px) translateY(-${y}px);`"
		style="height: 100%"
	>
		<NuxtLink :to="to" prefetch>
			<slot></slot>
		</NuxtLink>
	</div>
</template>

<script>
export default {
	mounted() {},
	props: ["to"],
	data() {
		return {
			x: 0,
			y: 0,
		};
	},
};
</script>

<style lang='scss'>
</style>
