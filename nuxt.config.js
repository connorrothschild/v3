export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target          : 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head            : {
		title : 'Connor Rothschild',
		meta  : [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link  : [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' } ]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css             : [ '~assets/scss/colors.scss' ],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins         : [ '~/plugins/v-img.js' ],
	// Auto import components (https://go.nuxtjs.dev/config-components)
	components      : true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules    : [ '@aceforth/nuxt-optimized-images' ],

	optimizedImages : {
		optimizeImages : true
	},

	image           : {
		// Options
	},

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules         : [ '@nuxtjs/bulma', '@nuxt/content', '@nuxt/image', '@nuxtjs/style-resources' ],

	content         : {
		markdown : {
			prism : {
				// https://github.com/PrismJS/prism-themes
				theme : 'prism-themes/themes/prism-atom-dark.css'
			}
		}
	},

	styleResources  : {
		scss : [ './assets/scss/*.scss' ]
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build           : {
		postcss : {
			preset : {
				features : {
					customProperties : false
				}
			}
		}
	}
};
