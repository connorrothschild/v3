<template>
	<div style="position: relative">
		<section class="hero is-primary is-fullheight">
			<div class="hero-body">
				<!-- <div class="container"> -->
				<div class="is-flex responsive-flex">
					<div class="half-flex mb-mobile">
						<h2 class="subtitle heading is-size-5">
							Data, design, and digital
						</h2>
						<h1 class="title is-size-1 has-text-weight-boldest">
							Hi, I'm Connor Rothschild
						</h1>
						<div class="buttons">
							<button
								@click="showAbout = !showAbout"
								class="button"
								:class="[showAbout ? 'is-primary' : 'is-white']"
							>
								About Me
							</button>
							<NuxtLink
								:to="{ path: '/', hash: '#projects' }"
								class="button is-primary"
							>
								Projects
							</NuxtLink>
							<NuxtLink
								:to="{ path: '/', hash: '#awards' }"
								class="button is-primary"
							>
								Awards
							</NuxtLink>
							<NuxtLink
								:to="{ path: '/', hash: '#blog' }"
								class="button is-primary"
							>
								Blog
							</NuxtLink>
						</div>
					</div>
					<div class="half-flex prevent-jitter">
						<!-- https://vuejs.org/v2/guide/transitions.html#Transition-Modes -->
						<transition name="fade" mode="out-in">
							<div v-if="showAbout" key="text">
								<p class="is-size-5 content">
									I'm a data scientist, designer, and developer based in
									Houston, Texas.
								</p>
								<p class="content">
									I currently work at
									<a
										href="https://www.mokshadata.com/"
										target="_blank"
										rel="noopener noreferrer"
										class="link"
										>Moksha Data</a
									>, and have worked for clients such as the City of Houston,
									the US Special Operations Command, and the Houston Food Bank.
									I'm passionate about data visualization, presentation, and
									storytelling.
								</p>
							</div>
							<div v-else class="centered" key="image">
								<img
									src="~/assets/images/me.jpg"
									alt="An image of Connor Rothschild"
									class="me"
									@click="showAbout = !showAbout"
								/>
							</div>
						</transition>
					</div>
				</div>
				<!-- </div> -->
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showAbout: false,
		};
	},
	computed: {},
	methods: {},
};
</script>

<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.button {
	// Transition background color
	transition: 1s all ease;

	// Different sizes for buttons on mobile
	@media screen and (max-width: 420px) {
		font-size: 0.75rem;
		border-radius: 2px;
	}
}

.me {
	border-radius: 0.5rem;
	transition: transform 1s ease;
	&:hover {
		transform: translateY(6px) translateX(2px);
		cursor: pointer;
	}
}

.link[href] {
	// text-decoration: underline;
	background: #cecece;
	color: $primary !important;
	padding: 3px;
	border-radius: 3px;
	transition: all 300ms ease;

	&:hover {
		background: $primary;
		color: white !important;
	}
}

.centered {
	width: 50%;
	margin: 0 auto;

	// @media screen and (max-width: 480px) {
	// 	width: 75%;
	// }
}

@media screen and (max-width: 800px) {
	.mb-mobile {
		margin-bottom: 3rem;
	}

	.prevent-jitter {
		min-height: 200px;
	}
}

.half-flex {
	flex: 1 1 0px;
}

.responsive-flex {
	flex-direction: row;
	align-items: center;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: flex-start;
	}
}
</style>
