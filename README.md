# My Personal Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/c43db3b2-6523-4b5a-ac2a-b743e42b93a7/deploy-status)](https://app.netlify.com/sites/competent-mestorf-2d94ff/deploys)

My personal website, built from scratch using Vue/Nuxt.js. This site intends to be highly minimal, content-driven, and was built with special attention paid to accessibility. In contrast to my prior website, this site is server-side rendered, uses animation sparingly, and is focused on speed & performance. (My former website utilized flashy animations, images, and other perks at the expense of user loading times.) 

### Performance

The site receives a 100/100 on [Lighthouse tests](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.connorrothschild.com%2F&tab=desktop) (desktop view). It also hovers around 90/100 on [mobile tests](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.connorrothschild.com%2F&tab=mobile). Here are some high-level stats (these numbers vary from test to test):

[![Metrics](https://metrics.lecoq.io/connorrothschild?template=classic&base.header=0&base.activity=0&base.community=0&base.repositories=0&base.metadata=0&pagespeed=1&pagespeed.url=https%3A%2F%2Fwww.connorrothschild.com&pagespeed.detailed=true&pagespeed.screenshot=false&config.timezone=America%2FChicago)](https://web.dev/measure/)

### Accessibility

The site was also designed with accessibility in mind. It **passes all [pa11y](https://github.com/pa11y/pa11y) checks**, which you can verify with the command line:

```bash
npm install -g pa11y
pa11y https://www.connorrothschild.com/
```

It passes all [Lighthouse](https://developers.google.com/web/tools/lighthouse/) accessibility tests as well and receives a **100/100** on accessibility marks there.

```bash
npm install -g lighthouse
lighthouse https://www.connorrothschild.com/
```

The [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) reveals **0 errors, 0 contrast errors, and 14 features** on my homepage ([see the audit](https://wave.webaim.org/report#/https://www.connorrothschild.com/)).

## Interact With My Site

To interact with this site, clone this repository and run the following code on the command line.

```bash
npm install
npm run dev
```

Interested in making your own site, based on this one? Cloning this site might cause some headaches because there's a lot going on. Instead, check out my [Nuxt Blog Starter template](https://github.com/connorrothschild/nuxt-blog-starter)!
