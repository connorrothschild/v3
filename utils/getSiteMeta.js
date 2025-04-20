const type = 'website';
const url = 'https://www.connorrothschild.github.io/v3';
const title = 'Connor Rothschild';
const description = 'Connor Rothschild is a data scientist, web developer, and designer based in Houston Texas.';
const mainImage = 'https://v3.connorrothschild.com/social.png';
const twitterSite = '@CL_Rothschild';
const twitterCard = 'summary_large_image';

export default (meta) => {
	return [
		{
			hid     : 'description',
			name    : 'description',
			content : (meta && meta.description) || description
		},
		{
			hid      : 'og:type',
			property : 'og:type',
			content  : (meta && meta.type) || type
		},
		{
			hid      : 'og:url',
			property : 'og:url',
			content  : (meta && meta.url) || url
		},
		{
			hid      : 'og:title',
			property : 'og:title',
			content  : (meta && meta.title) || title
		},
		{
			hid      : 'og:description',
			property : 'og:description',
			content  : (meta && meta.description) || description
		},
		{
			hid      : 'og:image',
			property : 'og:image',
			content  : (meta && meta.mainImage) || mainImage
		},
		{
			hid     : 'twitter:url',
			name    : 'twitter:url',
			content : (meta && meta.url) || url
		},
		{
			hid     : 'twitter:title',
			name    : 'twitter:title',
			content : (meta && meta.title) || title
		},
		{
			hid     : 'twitter:description',
			name    : 'twitter:description',
			content : (meta && meta.description) || description
		},
		{
			hid     : 'twitter:image',
			name    : 'twitter:image',
			content : (meta && meta.mainImage) || mainImage
		},
		{
			hid     : 'twitter:site',
			name    : 'twitter:site',
			content : (meta && meta.twitterSite) || twitterSite
		},
		{
			hid     : 'twitter:card',
			name    : 'twitter:card',
			content : (meta && meta.twitterCard) || twitterCard
		}
	];
};
