export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target          : 'static',
	// router: {
   	//  	base: '/v3/'
  	// },

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head            : {
		htmlAttrs : {
			lang : 'en'
		},
		title     : 'Connor Rothschild',
		meta      : [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid     : 'description',
				name    : 'description',
				content : 'Connor Rothschild is a data scientist, web developer, and designer based in Houston Texas.'
			},
			{
				hid      : 'og:type',
				property : 'og:type',
				content  : 'website'
			},
			{
				hid      : 'og:url',
				property : 'og:url',
				content  : 'https://www.connorrothschild.github.io/v3'
			},
			{
				hid      : 'og:title',
				property : 'og:title',
				content  : 'Connor Rothschild'
			},
			{
				hid      : 'og:description',
				property : 'og:description',
				content  : 'Connor Rothschild is a data scientist, web developer, and designer based in Houston Texas.'
			},
			{
				hid      : 'og:image',
				property : 'og:image',
				content  :
					'https://v3.connorrothschild.com/social.png'
			},
			{
				hid     : 'twitter:url',
				name    : 'twitter:url',
				content : 'https://www.connorrothschild.github.io/v3'
			},
			{
				hid     : 'twitter:title',
				name    : 'twitter:title',
				content : 'Connor Rothschild'
			},
			{
				hid     : 'twitter:description',
				name    : 'twitter:description',
				content : 'Connor Rothschild is a data scientist, web developer, and designer based in Houston Texas.'
			},
			{
				hid     : 'twitter:image',
				name    : 'twitter:image',
				content :
					'https://v3.connorrothschild.com/social.png'
			},
			{
				hid     : 'twitter:site',
				name    : 'twitter:site',
				content : '@CL_Rothschild'
			},
			{
				hid     : 'twitter:card',
				name    : 'twitter:card',
				content : 'summary_large_image'
			}
		],
		link      : [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' } ]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css             : [ '~assets/scss/colors.scss' ],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: ['~/plugins/v-img.js', '~/plugins/v-lazy-image.js', { src: '~/plugins/prism.js', mode: 'client' }],
	// Auto import components (https://go.nuxtjs.dev/config-components)
	components      : true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules    : [ '@aceforth/nuxt-optimized-images', '@nuxtjs/pwa', ],
	  
	purgeCSS: {
		enabled: true, // True means it's always on in dev/build/generate mode
		// The two below options achieve the happy medium between Prism.js and PurgeCSS
		// If you're having trouble with code highlighting, try adding the pertinent clases to the whitelist
		whitelistPatternsChildren: [/token$/],
		whitelist: [
		'pre', 'code', 'prism', 'line-numbers', 'tag', 'toolbar-item', 'toolbar',
		'code-toolbar', 'span', 'button', 'line-numbers-rows', 'url-link', 'attr-name', 'attr-value', 'punctuation',
		'keyword', 'keyword-let', 'operator', 'string'
   		 ]
	},
	  
	optimizedImages : {
		optimizeImages : true,
		// optimizeImagesInDev: true,
	},

	generate        : {
		fallback : true
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
	build: {
		extractCSS: true,
		postcss : {
			preset : {
				features : {
					customProperties : false
				}
			}
		}
	}
};
