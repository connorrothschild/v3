<template>
	<div style="position: relative">
		<section class="hero is-primary is-fullheight">
			<div class="hero-body">
				<div class="container">
					<div
						class="is-flex is-justify-content-space-between is-align-items-center responsive-flex"
					>
						<div class="half-flex mb-mobile">
							<h1 class="title is-size-1 has-text-weight-boldest">
								Hi, I'm Connor Rothschild
							</h1>
							<h2 class="subtitle heading is-size-5">
								Data, design, and digital
							</h2>
							<div class="buttons">
								<button
									@click="showAbout = !showAbout"
									class="button"
									:class="[showAbout ? 'is-primary' : 'is-white']"
								>
									About Me
								</button>
								<NuxtLink to="/#projects" class="button is-primary">
									Projects
								</NuxtLink>
								<NuxtLink to="/#awards" class="button is-primary">
									Awards
								</NuxtLink>
								<NuxtLink to="/#blog" class="button is-primary">
									Blog
								</NuxtLink>
							</div>
						</div>
						<div class="half-flex">
							<transition name="fade">
								<div v-if="showAbout" class="half-flex">
									<p class="is-size-5 content">
										I'm a data scientist, designer, and developer based in
										Houston, Texas.
									</p>
									<p class="content">
										I currently work at Moksha Data, and have worked for clients
										such as the City of Houston, the US Special Operations
										Command, and the Houston Food Bank. I'm passionate about
										data visualization, presentation, and storytelling.
									</p>
									<div
										v-if="!isMobile"
										v-on:mousemove="updateCoords"
										@mouseover="showImg = true"
										@mouseout="showImg = false"
										style="
											display: inline-block;
											cursor: none;
											padding: 0 10px 10px 0;
										"
									>
										<p style="pointer-events: none">
											(I look like
											<span class="has-text-weight-bold">this</span>.)
										</p>
										<div
											style="
												position: fixed;
												pointer-events: none;
												z-index: 1000;
											"
											v-bind:style="{
												top: yPos + 'px',
												left: xPos + 'px',
											}"
										>
											<transition name="fade">
												<img
													class="me"
													v-if="showImg"
													src="~/assets/images/me.jpg"
												/>
											</transition>
										</div>
									</div>
								</div>
							</transition>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showAbout: false,
			showImg: false,
			xPos: null,
			yPos: null,
			isMobile: false,
		};
	},
	computed: {},
	methods: {
		updateCoords: function (event) {
			this.xPos = event.clientX;
			this.yPos = event.clientY + 20;
		},
		checkMobile() {
			this.isMobile = window.innerWidth < 768;
		},
	},
	mounted() {
		this.checkMobile();
		window.addEventListener("resize", this.checkMobile);
	},
	destroyed() {
		window.removeEventListener("resize", this.checkMobile);
	},
};
</script>

<style lang='scss' scoped>
.half-flex {
	flex: 1 1 0px;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

@media screen and (max-width: 968px) {
	.responsive-flex {
		flex-direction: column;
	}
	.mb-mobile {
		margin-bottom: 3rem;
	}
}

.hoverable {
	cursor: none;
}

.me {
	pointer-events: none;
	max-width: 200px;
	max-height: 200px;
	border-radius: 50%;
	box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
		0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09),
		0 32px 16px rgba(0, 0, 0, 0.09);
}

// Different sizes for buttons on mobile
.button {
	@media screen and (max-width: 420px) {
		font-size: 0.75rem;
		border-radius: 2px;
	}
}
</style>
