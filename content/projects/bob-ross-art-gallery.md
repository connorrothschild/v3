---
title: The Bob Ross Virtual Art Gallery
description: A visual, virtual tour of every piece in The Joy of Painting.
date: "2021-03-22"
audience: 'The world!'
featured: true
megaFeatured: false
img: bob-ross-art-gallery/header.png
img_alt: 'A header image that says "The Bob Ross (virtual) Art Gallery"'
techstack: 'D3.js, Svelte, R, Scrollama'
github: 'https://github.com/connorrothschild/bob-ross-art-gallery/'
url: 'https://connorrothschild.github.io/bob-ross-art-gallery/'
---

[<InlineImage :clickable=false src="projects/bob-ross-art-gallery/header.png" alt="Header"></InlineImage>](https://connorrothschild.github.io/bob-ross-art-gallery/)

# What it is

[**The Bob Ross Virtual Art Gallery**](https://connorrothschild.github.io/bob-ross-art-gallery/) is a visual storytelling piece analyzing Bob Ross' series *The Joy of Painting*. It allows the user to explore each painting from the series in an interactive, digital art gallery.

# Tools used

I used [Svelte](https://svelte.dev/) and [D3.js](https://d3js.org/) for all things visual and front-end. I used The Pudding's [Svelte Starter template](https://github.com/the-pudding/svelte-starter) which made configuration much easier, and made a lot of the visual aspects of the project less difficult to create (e.g. their `Window` component simplified resize events a ton).

For the scroll-based interactions, I used Russell Goldenberg's [Scrollama](https://github.com/russellgoldenberg/scrollama). As of the creation of this project, there is no formal or official Svelte-based scrollytelling library. I therefore used Scrollama in its vanilla form, and plugged it into the Svelte component as if I were writing normal JavaScript.

# Project images

<InlineImage src="projects/bob-ross-art-gallery/mac-1.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="74%"></InlineImage>
<InlineImage src="projects/bob-ross-art-gallery/iphone-1.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="22%"></InlineImage>


<InlineImage src="projects/bob-ross-art-gallery/iphone-2.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="22%"></InlineImage>
<InlineImage src="projects/bob-ross-art-gallery/mac-2.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="74%"></InlineImage>

<InlineImage src="projects/bob-ross-art-gallery/iphone-3.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="18%"></InlineImage>
<InlineImage src="projects/bob-ross-art-gallery/mac-3.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="58%"></InlineImage>
<InlineImage src="projects/bob-ross-art-gallery/iphone-4.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="18%"></InlineImage>

<InlineImage src="projects/bob-ross-art-gallery/mac-4.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="48%"></InlineImage>
<InlineImage src="projects/bob-ross-art-gallery/mac-5.png" alt="Project image for 'The Bob Ross Virtual Art Gallery'" width="48%"></InlineImage>


<!-- # Overview (in my own words!)

<responsive-video url="https://www.youtube.com/embed/sNCMiWoXGaQ"></responsive-video>

To do: add code styling
https://nuxtjs.org/blog/creating-blog-with-nuxt-content/#adding-a-code-block-to-your-post -->