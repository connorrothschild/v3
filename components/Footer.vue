<template>
	<footer class="site-footer">
		<div class="content has-text-centered has-text-white site-footer-content">
			<p>
				Built by
				<a
					href="https://twitter.com/CL_Rothschild"
					target="_blank"
					rel="noopener noreferrer"
					class="link"
					>Connor Rothschild</a
				>. The source code is available on
				<a
					href="https://github.com/connorrothschild/connorrothschild.com"
					target="_blank"
					rel="noopener noreferrer"
					class="link"
					>GitHub</a
				>
				and licensed
				<a
					href="http://opensource.org/licenses/mit-license.php"
					target="_blank"
					rel="noopener noreferrer"
					class="link"
					>MIT</a
				>.
			</p>
		</div>
	</footer>
</template>

<script>
export default {
	props: {
		color: String,
	},
};
</script>


<style lang='scss' scoped>
.site-footer {
	background: $primary;
	padding: 2rem 1.5rem 3rem;
}
</style>
