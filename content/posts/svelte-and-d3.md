---
title: Making Visualizations Literally
description: Why Svelte has replaced (and complemented) D3 as my go-to tool for powerful visualizations
img: adding-a-chart-to-your-d3-tooltip/header.png
img_alt: "Blog post header image"
date: "2021-05-12"
featured: false
draft: true
---

<style>
svg {
  width: 100%;
  margin: 0.5rem 0 1.5rem 0;
  box-shadow: 2px 2px 5px 1px var(--primary-off);
  border-radius: 6px;
}

rect {
  width: 100%; 
  height: 100%;
  fill: var(--semitransparent);
}
</style>

When I started making data visualizations<!-- my visualization "career" (it feels weird calling it that) -->, I considered [D3](https://d3js.org/)—Data Driven Documents—to be the **gold standard** programming language required to create beautiful graphics on the web.

As I progress in my career <!-- (it still feels weird calling it that) -->, I'm realizing that D3 has a more particular, and smaller, role in the visualization lifecycle than I initially envisioned. As I design more visualizations, I find that one rule makes my development experience more productive, and the process of creating visualizations more intuitive. That rule? **To program literally, not declaratively.** <!-- **Less D3, more SVG**. --> 

Increasingly, I've been writing SVG *literally*, rather than telling a tool like D3 *how to* create SVG. I've stopped using D3 method chaining, and started using Svelte's `{#each}` blocks for each of my elements. By writing my markup directly, and appending the data inline, my code makes more sense and causes fewer headaches.

## 3️⃣ What D3 does

D3 allows for intuitive transformations of the DOM by leveraging easy-to-understand selection syntax. Sound confusing? Let's learn through an example (adapted from the [D3 homepage](https://d3js.org/#selections)). Imagine we had 5 circles and wanted to change the fill of each. 

<svg>
  <rect width="100%" height="100%"></rect>
  <circle cx="10%" cy="50%" r="10" fill="steelblue"><title>Hello from the circle!</title></circle>
  <circle cx="30%" cy="50%" r="10" fill="steelblue"><title>Hello from the circle!</title></circle>
  <circle cx="50%" cy="50%" r="10" fill="steelblue"><title>Hello from the circle!</title></circle>
  <circle cx="70%" cy="50%" r="10" fill="steelblue"><title>Hello from the circle!</title></circle>
  <circle cx="90%" cy="50%" r="10" fill="steelblue"><title>Hello from the circle!</title></circle>
</svg>

In the traditional [HTML DOM model](https://www.w3schools.com/js/js_htmldom.asp), we would 1) select all circles, 2) loop through each one, and 3) redefine its fill. In code, that would look like this:

```js
var circles = document.getElementsByTagName("circle");
for (var i = 0; i < circles.length; i++) {
  var circle = circles.item(i);
  circle.setAttribute("fill", "white", null);
}
```

By contrast, D3 reduces the length of our code by a factor of 5, and allows us to write in a way that *just makes sense*. Here, we literally select every circle and change its fill.

```js
d3.selectAll("circle").style("fill", "white")
```

<svg>
  <rect width="100%" height="100%"/>
  <circle cx="10%" cy="50%" r="10" fill="white"/>
  <circle cx="30%" cy="50%" r="10" fill="white"/>
  <circle cx="50%" cy="50%" r="10" fill="white"/>
  <circle cx="70%" cy="50%" r="10" fill="white"/>
  <circle cx="90%" cy="50%" r="10" fill="white"/>
</svg>

Imagine if you also wanted to bind data to those circles. That is, you wanted to fill the circle according to some attribute, or size its radius according to some datapoint. In traditional JavaScript, that might look something like this:

```js
let data = [5, 10, 15, 20, 25];

var circles = document.getElementsByTagName("circle");
for (var i = 0; i < circles.length; i++) {
  var circle = circles.item(i);
  circle.style.setProperty("r", data[i], null);
}
```

Not too hard—but also, not too easy. D3 simplifies this logic by removing the need for a loop and iterating on your selection for you:

```js
let data = [5, 10, 15, 20, 25];

d3.selectAll("circle").data(data).attr("r", d => d)
```

<svg>
  <rect width="100%" height="100%" />
  <circle cx="10%" cy="50%" r="5"  fill="white"/>
  <circle cx="30%" cy="50%" r="10" fill="white"/>
  <circle cx="50%" cy="50%" r="15" fill="white"/>
  <circle cx="70%" cy="50%" r="20" fill="white"/>
  <circle cx="90%" cy="50%" r="25" fill="white"/>
</svg>

Again, we reduce the length of our code nearly 5x, and the code just **makes sense**.

All that to say, D3 is great. It works, and it works wonderfully. By removing the need to write highly imperative code that is unintuitive in nature, D3 saves developers time and allows for more powerful visualizations.

But I'm hardly using it at all recently. Increasingly, I've been the JavaScript ~~framework~~ compiler [Svelte](https://svelte.dev/) to *write SVG directly* rather than *tell the DOM to write SVG*.

## 🗣 "Literal" programming with Svelte

Going back to our circles example from earlier, imagine if we could simply bind our data to our app's markup **directly**, without any intermediate code serving as instructions.

**We can!** Svelte (and Vue, React and other frameworks) allow for easy interactions between our logic, data, and markup, so that we can embed data directly into our SVG elements. In this new paradigm, we could replace the set of D3 instructions from earlier with the following Svelte code:

```jsx
<script>
  let data = [{x: 15, r: 5}, 
              {x: 30, r: 10}, 
              {x: 45, r: 15}, 
              {x: 60, r: 20}, 
              {x: 75, r: 25}]
</script>

<svg>
  {#each data as d}
    <circle cx={d.x + "%"} cy="50%" r={d.r} fill="white" />
  {/each}
</svg>
```

<svg>
  <rect width="100%" height="100%"/>
  <circle cx="10%" cy="50%" r="5"  fill="white"><title>Hello from the circle!</title></circle>
  <circle cx="30%" cy="50%" r="10" fill="white"><title>Hello from the circle!</title></circle>
  <circle cx="50%" cy="50%" r="15" fill="white"><title>Hello from the circle!</title></circle>
  <circle cx="70%" cy="50%" r="20" fill="white"><title>Hello from the circle!</title></circle>
  <circle cx="90%" cy="50%" r="25" fill="white"><title>Hello from the circle!</title></circle>
</svg>

In my view, there are three benefits to writing our code this way:

1. **More intuitive authoring.** It feels much more natural to write our SVG elements *directly* rather than provide D3 instructions on how to do so.
2. **Less friction in translating D3 to the DOM.** By writing SVG directly, we can copy an SVG element from the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle), paste in our values, and see immediate results. There's no handoff which might result in errors.
3. **Reusability.** Creating a robust and flexible `<Circle />`, `<Bar />`, or `<Axis />` component allows for consistent reuse within and across projects. D3 code is usually written as a series of blocks, which lacks a natural structure and becomes difficult to reuse effectively.

## 🍔 Bringing it home with burgers <!-- (or, imperative < declarative < literal) -->

Imagine we want to make a burger. We have an array of objects, each with an ingredient and ingredient-specfic instructions.

```js
let ingredients = [
  {item: "Top Bun", instruction: "Place at top of burger."},
  {item: "Pickles", instruction: "Three pickles, please."},
  {item: "Cheese", instruction: "Cheese is optional, but it makes the burger better."},
  {item: "Patty", instruction: "Cook to your satisfaction. Optionally, add two patties."},
  {item: "Tomato", instruction: "Should be the same width as bun, and thinly sliced."},
  {item: "Lettuce", instruction: "Should be the same width as bun."},
  {item: "Bottom Bun", instruction: "Place at bottom of burger."},
]
```

There are three ways to make this burger (at least, in our fantasy world where we make burgers via code).

<info-box>
  <template #info-box>

Although I use the Svelte REPL to showcase these three examples, only the last one requires Svelte.

  </template>
</info-box>

**The first option** is to tell your app to loop through each ingredient, add it to the others, and stack the ingredients accordingly. For each ingredient in the loop, execute the burger-making according to our ingredient-specific instruction. This is *imperative*. This is how burgers would have been made, painfully, before D3.

<iframe src="https://svelte.dev/repl/4b4eee03981b4450aa08e402aa0ceeb6?version=3.38.3" width="100%" height='600' title="Imperative burger building"></iframe>

**The second option** is to tell your app to read in each ingredient and instruction, *declaratively*. D3 allows for declarative burger-making:

<iframe src="https://svelte.dev/repl/8198de15de314aee860932629370ed09?version=3.38.3" width="100%" height='600' title="Declarative burger building"></iframe>

**Finally**, we can simply append the instructions directly to the ingredient, *literally*. Only Svelte enables such burgers:

<iframe src="https://svelte.dev/repl/f64bd9dcface42a1a2d544b35638631e?version=3" width="100%" height='600' title="Literal burger building"></iframe>

<!-- <hr/> -->

Which do you prefer? It's much easier to make a burger by *just making it*, rather than giving instructions, no matter what form they come in. Frameworks allow for the construction of burgers—and visualizations—**literally**. We write our ingredients (or DOM elements) directly, and include our instructions (or data) in our markup. Now that's a tasty burger.

## In sum

1. Svelte allows visualization developers to **write SVG directly** (and avoid telling D3 what to do), while using Svelte syntax (`{#each}`, etc.) to avoid annoying and inefficient for loops. 
2. Including logic directly in your markup (`{#if}`, etc.) removes the need for complex JavaScript/DOM interactions. 
3. Svelte works to *complement* D3, not replace it, by continuing to leverage the most powerful parts of its API: `d3-scale`, `d3-array`, `d3-shape`, etc.

<hr/>

## Bonus perks 🏆

Using Svelte (or whatever framework you prefer) has a few other perks:

### Responsiveness

By using Svelte's [reactive declarations](https://svelte.dev/tutorial/reactive-declarations), we can make certain variables  'watch' for state changes and update automatically. One huge benefit of this is that we can bind our scales to updating values such as the window width, and write minimal code to make our charts update on resize.

```jsx
import { windowWidth } from "../stores/store.js";
import { scaleLinear } from 'd3-scale';

$: xScale = scaleLinear
            .domain(data.map(d => d.value))
            .range([0, $windowWidth])
```

With some other component watching and responding to resize events (such as [Window.svelte](https://github.com/the-pudding/svelte-starter/blob/master/src/components/helpers/Window.svelte)), any SVG property depending on `xScale` will automatically update when your window resizes. You can also set the chart width itself to equal `$windowWidth` for a fully resizable, responsive chart.

<info-box>
  <template #info-box>

Another way to achieve easy responsiveness is to [bind the SVG's parent container's div width](https://svelte.dev/tutorial/dimensions) to some variable (`width`) and set the SVG's width to match. 

  </template>
</info-box>

### If/else blocks

In regular D3, we can use the [ternary operator](https://en.wikipedia.org/wiki/%3F:) to define condition-specific attributes, like this:

```js
// Circles are filled green if positive, red if negative
d3.selectAll('circle')
  .style('fill', d => d.value < 0 ? 'red' : 'green')
```

This is great, but what if we want to make more significant changes based on app-wide state? For example, imagine we want to show three different types of the same visualization on different screen sizes: 

1. Desktop (> 1024px)
2. Tablet (520px to 1024px)
3. Mobile (< 520px)

In D3, we would achieve this by adding a resize event listener, provide the custom breakpoints, and render different visuals if the updated window width is within a certain range. The complicated part would be having to render a different visual at each breakpoint. Honestly, I can't explain exactly how I would do it because I haven't done it (😅). What I do know is that Svelte makes this easy as pie.

One key difference between relying on D3 and leveraging the power of Svelte is that Svelte allows for [conditional rendering](https://svelte.dev/tutorial/if-blocks) *directly in our markup*, not just in our JavaScript logic. In other words, while vanilla JavaScript would be able to do the following:

```js
window.addEventListener('resize', function(event) {
    let newWidth = window.innerWidth;

    if (newWidth < 520) { 
      // Hide tablet and desktop
      document.getElementById("tablet").style.display = "none";
      document.getElementById("desktop").style.display = "none";

      // Show mobile
      document.getElementById("mobile").style.display = "block";
    } else if (newWidth < 1024) {
      // Hide mobile and desktop
      document.getElementById("mobile").style.display = "none";
      document.getElementById("desktop").style.display = "none";

      // Show tablet
      document.getElementById("tablet").style.display = "block";
    } else {
      // Hide mobile and tablet
      document.getElementById("mobile").style.display = "none";
      document.getElementById("tablet").style.display = "none";

      // Show desktop
      document.getElementById("desktop").style.display = "block";
    }
});
```

Svelte simplifies our logic to:

```jsx
{#if $windowWidth < 520}
  <Mobile />
{:else if $windowWidth < 1024}
  <Tablet />
{:else}
  <Desktop />
{/if}
```