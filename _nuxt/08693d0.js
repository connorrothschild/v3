(window.webpackJsonp = window.webpackJsonp || []).push([
  [28, 7, 8, 9, 13, 17],
  Array(241).concat([
    function (t, n, e) {
      "use strict";
      e.r(n);
      var o = {
          mounted: function () {},
          props: ["to", "href"],
          data: function () {
            return { x: 0, y: 0 };
          },
        },
        r = e(45),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e(
              "div",
              {
                staticStyle: { height: "100%" },
                style:
                  "transition: 1s transform ease; transform: translateX(" +
                  t.x +
                  "px) translateY(-" +
                  t.y +
                  "px);",
                on: {
                  mouseout: function (n) {
                    (t.x = 0), (t.y = 0);
                  },
                  mouseover: function (n) {
                    (t.x = 0), (t.y = 10);
                  },
                },
              },
              [
                t.to
                  ? e(
                      "NuxtLink",
                      { attrs: { to: t.to, prefetch: "" } },
                      [t._t("default")],
                      2
                    )
                  : t._e(),
                t._v(" "),
                t.href
                  ? e(
                      "a",
                      {
                        attrs: {
                          href: t.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._t("default")],
                      2
                    )
                  : t._e(),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = component.exports;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var o = {
          mounted: function () {},
          props: {
            src: { type: String, required: !0 },
            alt: { type: String, required: !0 },
            type: { type: String, required: !0 },
            imgStyle: { type: String, required: !1 },
          },
          methods: {
            imgSrc: function () {
              try {
                return e(245)("./".concat(this.src));
              } catch (t) {
                return null;
              }
            },
          },
        },
        r = (e(483), e(45)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              n = t.$createElement;
            return (t._self._c || n)("v-lazy-image", {
              class: {
                "object-fit-cover": "post" == t.type,
                "object-fit-scale": "project" == t.type,
              },
              style: t.imgStyle,
              attrs: { src: t.imgSrc(), alt: t.alt },
            });
          },
          [],
          !1,
          null,
          "14ae8593",
          null
        );
      n.default = component.exports;
    },
    function (t, n, e) {},
    function (t, n, e) {
      t.exports = e.p + "img/f092b88.jpg";
    },
    function (t, n, e) {
      var map = {
        "./me.jpg": 244,
        "./post/adding-a-chart-to-your-d3-tooltip/header.png": 246,
        "./post/adding-a-chart-to-your-d3-tooltip/new-tooltip.gif": 247,
        "./post/adding-a-chart-to-your-d3-tooltip/old-tooltip.gif": 248,
        "./post/adding-a-chart-to-your-d3-tooltip/west-virginia.jpg": 249,
        "./post/animate-hugo-academic/about.png": 250,
        "./post/animate-hugo-academic/after-demo-hero-remove.png": 251,
        "./post/animate-hugo-academic/before-demo-hero-remove.png": 252,
        "./post/animate-hugo-academic/bg-red.png": 253,
        "./post/animate-hugo-academic/double-slide.gif": 254,
        "./post/animate-hugo-academic/final.gif": 255,
        "./post/animate-hugo-academic/font-red.png": 256,
        "./post/animate-hugo-academic/header.jpg": 257,
        "./post/animate-hugo-academic/header.png": 258,
        "./post/animate-hugo-academic/left-and-right.gif": 259,
        "./post/animate-hugo-academic/red.gif": 260,
        "./post/animate-hugo-academic/slide-from-right.gif": 261,
        "./post/automation-scrollytell/header.png": 262,
        "./post/bible-babies/boys.gif": 263,
        "./post/bible-babies/combined.gif": 264,
        "./post/bible-babies/girls.gif": 265,
        "./post/bible-babies/header.png": 266,
        "./post/bible-babies/line.png": 267,
        "./post/bible-babies/male-female-line.png": 268,
        "./post/color-in-data-vis/all-color.jpg": 269,
        "./post/color-in-data-vis/all-grey.jpg": 270,
        "./post/color-in-data-vis/bad-and-better.jpg": 271,
        "./post/color-in-data-vis/bad-chart.jpg": 272,
        "./post/color-in-data-vis/bad-color-use-1.jpg": 273,
        "./post/color-in-data-vis/bad-color-use-2.jpg": 274,
        "./post/color-in-data-vis/better-chart1.png": 275,
        "./post/color-in-data-vis/betterchart-1.jpg": 276,
        "./post/color-in-data-vis/choropleth-ex.jpg": 277,
        "./post/color-in-data-vis/color-emotion-guide-lol.jpg": 278,
        "./post/color-in-data-vis/color-emphasized.png": 279,
        "./post/color-in-data-vis/flipping-points-color-annotate1.jpg": 280,
        "./post/color-in-data-vis/flipping-points-color-annotate2.jpg": 281,
        "./post/color-in-data-vis/flipping-points-color.jpg": 282,
        "./post/color-in-data-vis/header.png": 283,
        "./post/color-in-data-vis/map-Texas-rainbow-1.jpg": 284,
        "./post/color-in-data-vis/popgrowth-vs-popsize-bw-1.png": 285,
        "./post/covid-gun-spikes/featured.png": 286,
        "./post/covid-gun-spikes/header.png": 287,
        "./post/covid-gun-spikes/table-replacement.png": 288,
        "./post/covid-gun-spikes/unnamed-chunk-4-1.png": 289,
        "./post/covid-gun-spikes/unnamed-chunk-5-1.png": 290,
        "./post/covid-gun-spikes/unnamed-chunk-6-1.png": 291,
        "./post/covid-on-campus/featured.png": 292,
        "./post/covid-on-campus/geofacet_processed.png": 293,
        "./post/covid-on-campus/header.png": 294,
        "./post/covid-on-campus/table1.png": 295,
        "./post/covid-on-campus/table2.png": 296,
        "./post/covid-on-campus/table3.png": 297,
        "./post/covid-posts/authorVer2-1.png": 298,
        "./post/covid-posts/dataTable-1.png": 299,
        "./post/covid-posts/featured.png": 300,
        "./post/covid-posts/header.png": 301,
        "./post/covid-posts/prolificVer2-1.png": 302,
        "./post/covid-posts/topicsVer2-1.png": 303,
        "./post/covid-posts/weekly-1.png": 304,
        "./post/do-something-else/startup-faang-satisfaction.png": 305,
        "./post/dumbbell-plots/age-disrupt.jpg": 306,
        "./post/dumbbell-plots/age-worry.jpg": 307,
        "./post/dumbbell-plots/axios.jpg": 308,
        "./post/dumbbell-plots/featured.jpg": 309,
        "./post/dumbbell-plots/header.png": 310,
        "./post/dumbbell-plots/partisan-disrupt.jpg": 311,
        "./post/dumbbell-plots/partisan-worry.jpg": 312,
        "./post/dumbbell-plots/pew.jpg": 313,
        "./post/dumbbell-plots/process-0.jpg": 314,
        "./post/dumbbell-plots/process-1.jpg": 315,
        "./post/dumbbell-plots/process-2.jpg": 316,
        "./post/dumbbell-plots/process-3.jpg": 317,
        "./post/dumbbell-plots/process-4.jpg": 318,
        "./post/dumbbell-plots/process-5.jpg": 319,
        "./post/dumbbell-plots/process-6.jpg": 320,
        "./post/dumbbell-plots/process-gif.gif": 321,
        "./post/dumbbell-plots/table.jpg": 322,
        "./post/economist-table-replication-using-reactable/featured.png": 323,
        "./post/economist-table-replication-using-reactable/header.png": 324,
        "./post/flat-data-r/flat-diagram.png": 325,
        "./post/flat-data-r/header.png": 326,
        "./post/introducing-tpltheme/featured.png": 327,
        "./post/introducing-tpltheme/header.png": 328,
        "./post/introducing-tpltheme/unnamed-chunk-10-1.png": 329,
        "./post/introducing-tpltheme/unnamed-chunk-11-1.png": 330,
        "./post/introducing-tpltheme/unnamed-chunk-12-1.png": 331,
        "./post/introducing-tpltheme/unnamed-chunk-13-1.png": 332,
        "./post/introducing-tpltheme/unnamed-chunk-14-1.png": 333,
        "./post/introducing-tpltheme/unnamed-chunk-15-1.png": 334,
        "./post/introducing-tpltheme/unnamed-chunk-16-1.png": 335,
        "./post/introducing-tpltheme/unnamed-chunk-17-1.png": 336,
        "./post/introducing-tpltheme/unnamed-chunk-18-1.png": 337,
        "./post/introducing-tpltheme/unnamed-chunk-3-1.png": 338,
        "./post/introducing-tpltheme/unnamed-chunk-5-1.png": 339,
        "./post/introducing-tpltheme/unnamed-chunk-6-1.png": 340,
        "./post/introducing-tpltheme/unnamed-chunk-7-1.png": 341,
        "./post/introducing-tpltheme/unnamed-chunk-8-1.png": 342,
        "./post/introducing-tpltheme/unnamed-chunk-9-1.png": 343,
        "./post/map-springfield/bw_map_springfield.png": 344,
        "./post/map-springfield/gold_map_springfield.png": 345,
        "./post/map-springfield/header.png": 346,
        "./post/media-mentions/header.png": 347,
        "./post/media-mentions/unnamed-chunk-2-1.png": 348,
        "./post/media-mentions/unnamed-chunk-3-1.png": 349,
        "./post/media-mentions/unnamed-chunk-4-1.png": 350,
        "./post/media-mentions/unnamed-chunk-5-1.png": 351,
        "./post/media-mentions/unnamed-chunk-6-1.png": 352,
        "./post/media-mentions/unnamed-chunk-7-1.png": 353,
        "./post/nuxt-blog-starter/blog-card.png": 354,
        "./post/nuxt-blog-starter/dark.png": 355,
        "./post/nuxt-blog-starter/header.png": 356,
        "./post/nuxt-blog-starter/home-card.png": 357,
        "./post/nuxt-blog-starter/light.png": 358,
        "./post/nuxt-blog-starter/new-site-perf.png": 359,
        "./post/nuxt-blog-starter/old-site-perf.png": 360,
        "./post/nuxt-blog-starter/transitions.gif": 361,
        "./post/refugee-trends/featured.png": 362,
        "./post/refugee-trends/final.svg": 363,
        "./post/refugee-trends/firsttry.jpg": 364,
        "./post/refugee-trends/header.png": 365,
        "./post/refugee-trends/macro.jpg": 366,
        "./post/refugee-trends/policyviz.jpg": 367,
        "./post/refugee-trends/ref.png": 368,
        "./post/refugee-trends/secondtry.jpg": 369,
        "./post/refugee-trends/wapo.png": 370,
        "./post/svelte-and-d3/header.png": 371,
        "./post/tidy-tuesday-powerlifting/featured.png": 372,
        "./post/tidy-tuesday-powerlifting/header.png": 373,
        "./post/tidy-tuesday-powerlifting/table.png": 374,
        "./post/tidy-tuesday-powerlifting/unnamed-chunk-10-1.gif": 375,
        "./post/tidy-tuesday-powerlifting/unnamed-chunk-11-1.gif": 376,
        "./post/tidy-tuesday-powerlifting/unnamed-chunk-8-1.png": 377,
        "./post/tidy-tuesday-powerlifting/unnamed-chunk-9-1.gif": 378,
        "./post/tidy-tuesday-replication/bloomberg.png": 379,
        "./post/tidy-tuesday-replication/featured.png": 380,
        "./post/tidy-tuesday-replication/header.png": 381,
        "./post/tidy-tuesday-replication/replication.png": 382,
        "./project/atus/header.png": 383,
        "./project/atus/mac-1.png": 384,
        "./project/atus/mac-2.png": 385,
        "./project/atus/phone-1.png": 386,
        "./project/atus/phone-2.png": 387,
        "./project/atus/thumbnail.png": 388,
        "./project/bob-ross-art-gallery/header.png": 389,
        "./project/bob-ross-art-gallery/iphone-1.png": 390,
        "./project/bob-ross-art-gallery/iphone-2.png": 391,
        "./project/bob-ross-art-gallery/iphone-3.png": 392,
        "./project/bob-ross-art-gallery/iphone-4.png": 393,
        "./project/bob-ross-art-gallery/mac-1.png": 394,
        "./project/bob-ross-art-gallery/mac-2.png": 395,
        "./project/bob-ross-art-gallery/mac-3.png": 396,
        "./project/bob-ross-art-gallery/mac-4.png": 397,
        "./project/bob-ross-art-gallery/mac-5.png": 398,
        "./project/bob-ross-art-gallery/thumbnail.png": 399,
        "./project/compas/header.png": 400,
        "./project/compas/mac-1.png": 401,
        "./project/compas/mac-2.png": 402,
        "./project/compas/phone-1.png": 403,
        "./project/compas/phone-2.png": 404,
        "./project/compas/thumbnail.png": 405,
        "./project/covid-masking/header.png": 406,
        "./project/covid-masking/mac-1.png": 407,
        "./project/covid-masking/mac-2.png": 408,
        "./project/covid-masking/mac-3.png": 409,
        "./project/covid-masking/mac-4.png": 410,
        "./project/covid-masking/mac-5.png": 411,
        "./project/covid-masking/phone-1.png": 412,
        "./project/covid-masking/phone-2.png": 413,
        "./project/covid-masking/phone-3.png": 414,
        "./project/covid-masking/thumbnail.png": 415,
        "./project/cudi-hums/albums-mac.png": 416,
        "./project/cudi-hums/albums-phone.png": 417,
        "./project/cudi-hums/header.png": 418,
        "./project/cudi-hums/intro-phone.png": 419,
        "./project/cudi-hums/lyrics-mac.png": 420,
        "./project/cudi-hums/lyrics-phone.png": 421,
        "./project/cudi-hums/outro-phone.png": 422,
        "./project/cudi-hums/thumbnail.png": 423,
        "./project/cudi-hums/tracks-mac.png": 424,
        "./project/cudi-hums/tracks-phone.png": 425,
        "./project/how-many-people/header.png": 426,
        "./project/how-many-people/mac-1.png": 427,
        "./project/how-many-people/mac-2.png": 428,
        "./project/how-many-people/phone-1.png": 429,
        "./project/how-many-people/phone-2.png": 430,
        "./project/how-many-people/thumbnail.png": 431,
        "./project/map-houston-homicides/header.png": 432,
        "./project/map-houston-homicides/mac-1.png": 433,
        "./project/map-houston-homicides/mac-2.png": 434,
        "./project/map-houston-homicides/mac-3.png": 435,
        "./project/map-houston-homicides/mac-4.png": 436,
        "./project/map-houston-homicides/phone-1.png": 437,
        "./project/map-houston-homicides/phone-2.png": 438,
        "./project/map-houston-homicides/phone-3.png": 439,
        "./project/map-houston-homicides/thumbnail.png": 440,
        "./project/map-missing-migrants/header.png": 441,
        "./project/map-missing-migrants/mac-1.png": 442,
        "./project/map-missing-migrants/mac-2.png": 443,
        "./project/map-missing-migrants/mac-3.png": 444,
        "./project/map-missing-migrants/mac-4.png": 445,
        "./project/map-missing-migrants/mac-5.png": 446,
        "./project/map-missing-migrants/phone-1.png": 447,
        "./project/map-missing-migrants/phone-2.png": 448,
        "./project/map-missing-migrants/phone-3.png": 449,
        "./project/map-missing-migrants/thumbnail.png": 450,
        "./project/media-mentions/header.png": 451,
        "./project/media-mentions/mac.png": 452,
        "./project/media-mentions/phone.png": 453,
        "./project/media-mentions/thumbnail.png": 454,
        "./project/one-line-hacks/header.png": 455,
        "./project/one-line-hacks/mac-1.png": 456,
        "./project/one-line-hacks/phone-1.png": 457,
        "./project/one-line-hacks/thumbnail.png": 458,
        "./project/police-killings/header.png": 459,
        "./project/police-killings/mac-1.png": 460,
        "./project/police-killings/mac-2.png": 461,
        "./project/police-killings/phone-1.png": 462,
        "./project/police-killings/phone-2.png": 463,
        "./project/police-killings/thumbnail.png": 464,
        "./project/quarantunes/header.png": 465,
        "./project/quarantunes/macbook.png": 466,
        "./project/quarantunes/phone.png": 467,
        "./project/quarantunes/side-by-side.png": 468,
        "./project/quarantunes/tablet.png": 469,
        "./project/quarantunes/thumbnail.png": 470,
        "./project/state-police-spending/header.png": 471,
        "./project/state-police-spending/mac.png": 472,
        "./project/state-police-spending/phone.png": 473,
        "./project/state-police-spending/thumbnail.png": 474,
        "./project/tpl-schools-db/header.png": 475,
        "./project/tpl-schools-db/iphone-1.png": 476,
        "./project/tpl-schools-db/iphone-2.png": 477,
        "./project/tpl-schools-db/iphone-3.png": 478,
        "./project/tpl-schools-db/mac-1.png": 479,
        "./project/tpl-schools-db/mac-2.png": 480,
        "./project/tpl-schools-db/thumbnail.png": 481,
      };
      function o(t) {
        var n = r(t);
        return e(n);
      }
      function r(t) {
        if (!e.o(map, t)) {
          var n = new Error("Cannot find module '" + t + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        return map[t];
      }
      (o.keys = function () {
        return Object.keys(map);
      }),
        (o.resolve = r),
        (t.exports = o),
        (o.id = 245);
    },
    function (t, n, e) {
      t.exports = e.p + "img/acadedf.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/43e587c.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/b1ffbe0.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/cc80f87.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/aa99e3a.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/b1676f1.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/5bb6734.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/0276104.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/31686c3.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/3c85da8.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/9dbdecc.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/3d9111a.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/b19508d.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/92140ad.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/7c00916.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/5b49de6.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c76bbf4.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/cf3b67f.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/3f6c262.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/6aede39.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/aca2d53.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/5a7b027.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/b0d64b2.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/436a9fb.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c73b8f2.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/cd6589c.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/fdee87b.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/cbd24f5.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/998c3e1.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/57e2d87.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/57e2d87.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/e05844c.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/f50fb3a.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/523f0da.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/1912209.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/5682b86.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/877a81a.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/cfdc8dd.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/7fe0962.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/57e2d87.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c4d2f88.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c4d2f88.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/3cdaaab.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/25cfd83.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/96b06e4.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/3c49d29.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/6dacaab.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/b980b26.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/5acc677.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/b7926dc.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/02bd801.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/79f8bd4.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/534d90a.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/b4b988d.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/bd77471.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/bd77471.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/b5217cb.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/bd77471.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/204d540.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/94da0cc.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/17d5503.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c9f5f31.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/d080613.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a9b46d2.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a73fe16.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/4e3f576.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a9b46d2.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/ca44e45.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/043a2b7.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a0a47a6.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c3a3d28.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c7cd1a8.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/f6a1317.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/d112395.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a9b46d2.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/8aad7e3.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/74fc280.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/e853dcc.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/81d02a0.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a288f05.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/08b2db4.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a5352ab.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/b511cef.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/ac9b0d5.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/f3da8f7.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/f859270.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/901c817.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/3bf8ca3.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a175c7e.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/99d6cc8.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/73ce145.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/189a388.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c14eaae.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/1196256.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/d9620d6.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a7274d9.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/fb584cc.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/9e7f628.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/3590889.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/af4320d.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/ce914f3.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/90a055b.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/4a628e3.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/10fea82.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/186bcf4.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/e8e21fd.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/f8ffdd7.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/48106f5.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/156cd8a.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/d13b0cb.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c5147c7.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a56d952.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/4e2681b.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/3879c5c.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/1045c9d.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/afad42b.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/97d02a2.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/9c70f33.svg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/bd5260a.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/6ec8852.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/1f56341.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/1aeba32.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a13f9e9.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/8825cdb.jpg";
    },
    function (t, n, e) {
      t.exports = e.p + "img/68306f9.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c3009cd.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/dbe617f.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/4b04319.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/f6dbe4e.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/e5d89db.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c159b4d.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/ccb6fc1.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/36e092b.gif";
    },
    function (t, n, e) {
      t.exports = e.p + "img/8900ad1.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/cc1ef8e.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/b75f59a.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/cc1ef8e.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/2cbfbd6.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/0cd8ba6.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/ab0a42b.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/f32345a.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/468186a.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/0cd8ba6.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/878faac.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/24d0909.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/d61dd32.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/7b83c08.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/2683e60.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/8802bee.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/bbcb0b7.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/cc56268.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/db27aee.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/5d15020.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/5d15020.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a7ebf48.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a5befc7.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c8be9ae.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/15dd93b.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/008ce41.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c8be9ae.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a44829a.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/2273f8d.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/2520221.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/1b7f2d8.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/1913ec3.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/f841236.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/742bf3d.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/43bcf4b.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c8f9220.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/f841236.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/bf36c7f.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/fcecfd8.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/c6d01c6.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/7055da1.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/e000c09.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/0bc1c44.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/0676351.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/bf36c7f.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/ee43009.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/e4afd8e.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/1d0c37d.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/ade430c.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/5524363.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/023365b.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/8786ec0.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/5524363.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/74da1ef.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/9ace69c.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/b383ee4.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/582aaee.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/50ac54b.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a68763c.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/db3af92.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a14f127.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/9ace69c.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/10c0960.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/cef19d6.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/a65dc3e.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/5214efd.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/379a679.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/22efa30.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/faece93.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/1d3a44d.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/79a8cd1.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/cef19d6.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/7c994d0.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/6b4e2e6.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/462a02a.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/6b4e2e6.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/5e0ec10.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/3f97031.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/8569767.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/3f97031.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/504335a.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/3d3eaae.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/94e6bc7.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/76cf6b6.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/e231958.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/94e6bc7.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/5e1df07.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/939378f.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/2cb5e5b.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/22afa41.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/cf514ee.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/939378f.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/fe1b8fe.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/23ee073.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/6959e74.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/23ee073.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/e737531.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/1a80aae.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/cb3c6a0.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/64ae8b9.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/ac144c8.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/8192aa0.png";
    },
    function (t, n, e) {
      t.exports = e.p + "img/ac144c8.png";
    },
    ,
    function (t, n, e) {
      "use strict";
      e(243);
    },
    function (t, n, e) {},
    function (t, n, e) {
      "use strict";
      e.r(n);
      var o = {
          props: { classes: String },
          data: function () {
            return { isVisible: !1 };
          },
        },
        r = (e(491), e(45)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e(
              "nav",
              {
                staticClass: "navbar",
                class: t.classes,
                attrs: { role: "navigation", "aria-label": "main navigation" },
              },
              [
                e(
                  "div",
                  { staticClass: "navbar-brand" },
                  [
                    e(
                      "NuxtLink",
                      {
                        staticClass: "navbar-item has-text-weight-boldest",
                        attrs: { to: "/" },
                      },
                      [t._v("Connor Rothschild\n    ")]
                    ),
                    t._v(" "),
                    e(
                      "a",
                      {
                        staticClass: "navbar-burger",
                        class: { "is-active": t.isVisible },
                        attrs: {
                          role: "button",
                          "aria-label": "menu",
                          "aria-expanded": "false",
                          "data-target": "navbarID",
                        },
                        on: {
                          click: function (n) {
                            t.isVisible = !t.isVisible;
                          },
                        },
                      },
                      [
                        e("span", { attrs: { "aria-hidden": "true" } }),
                        t._v(" "),
                        e("span", { attrs: { "aria-hidden": "true" } }),
                        t._v(" "),
                        e("span", { attrs: { "aria-hidden": "true" } }),
                      ]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "navbar-menu",
                    class: { "is-active": t.isVisible },
                    attrs: { id: "navbarID" },
                  },
                  [
                    e(
                      "div",
                      { staticClass: "navbar-end" },
                      [
                        e(
                          "div",
                          { staticClass: "navbar-item" },
                          [e("ColorPicker")],
                          1
                        ),
                        t._v(" "),
                        e(
                          "NuxtLink",
                          {
                            staticClass: "navbar-item",
                            attrs: { to: { path: "/", hash: "#projects" } },
                          },
                          [t._v("\n        Projects\n      ")]
                        ),
                        t._v(" "),
                        e(
                          "NuxtLink",
                          {
                            staticClass: "navbar-item",
                            attrs: { to: { path: "/", hash: "#awards" } },
                          },
                          [t._v("\n        Awards\n      ")]
                        ),
                        t._v(" "),
                        e(
                          "NuxtLink",
                          {
                            staticClass: "navbar-item",
                            attrs: { to: { path: "/", hash: "#blog" } },
                          },
                          [t._v("\n        Blog\n      ")]
                        ),
                        t._v(" "),
                        e(
                          "a",
                          {
                            staticClass: "navbar-item",
                            attrs: {
                              href: "mailto:connor@connorrothschild.com",
                            },
                          },
                          [t._v("\n        Email\n      ")]
                        ),
                        t._v(" "),
                        e(
                          "a",
                          {
                            staticClass: "navbar-item",
                            attrs: {
                              href:
                                "https://docs.google.com/document/d/1qBH-wNMe2nv9Xa4uzHZ5wBevohwKuB3h2i9M2yk4POk/edit?usp=sharing",
                              target: "_blank",
                              rel: "noopener",
                            },
                          },
                          [t._v("\n        Resume\n      ")]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "577d5465",
          null
        );
      n.default = component.exports;
      installComponents(component, {
        ColorPicker: e(488).default,
        Nav: e(485).default,
      });
    },
    function (t, n, e) {},
    function (t, n, e) {
      "use strict";
      e(484);
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var o = {
          data: function () {
            return {
              colorSchemes: [
                "blue",
                "red",
                "brown",
                "dark-blue",
                "grey",
                "black",
              ],
              currentScheme: "black",
            };
          },
          methods: {
            randomTheme: function () {
              return this.colorSchemes[
                Math.floor(Math.random() * this.colorSchemes.length)
              ];
            },
            changeColors: function () {
              for (var t = this.randomTheme(); t == this.currentScheme; )
                t = this.randomTheme();
              "blue" == t
                ? (document.documentElement.style.setProperty(
                    "--base",
                    "0, 0, 0"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary",
                    "27,39,51"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary-off",
                    "22,29,36"
                  ),
                  document.documentElement.style.setProperty(
                    "--secondary",
                    "255,140,0"
                  ),
                  document.documentElement.style.setProperty(
                    "--text",
                    "255,255,255"
                  ),
                  document.documentElement.style.setProperty(
                    "--text-strong",
                    "245,245,245"
                  ),
                  (this.currentScheme = t))
                : "red" == t
                ? (document.documentElement.style.setProperty(
                    "--base",
                    "0, 0, 0"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary",
                    "84,0,0"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary-off",
                    "48,0,0"
                  ),
                  document.documentElement.style.setProperty(
                    "--secondary",
                    "217,159,0"
                  ),
                  document.documentElement.style.setProperty(
                    "--text",
                    "255,255,255"
                  ),
                  document.documentElement.style.setProperty(
                    "--text-strong",
                    "245,245,245"
                  ))
                : "brown" == t
                ? (document.documentElement.style.setProperty(
                    "--base",
                    "0, 0, 0"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary",
                    "69,69,69"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary-off",
                    "85,85,85"
                  ),
                  document.documentElement.style.setProperty(
                    "--secondary",
                    "255,94,94"
                  ),
                  document.documentElement.style.setProperty(
                    "--text",
                    "255,255,255"
                  ),
                  document.documentElement.style.setProperty(
                    "--text-strong",
                    "245,245,245"
                  ))
                : "dark-blue" == t
                ? (document.documentElement.style.setProperty(
                    "--base",
                    "0, 0, 0"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary",
                    "43,47,61"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary-off",
                    "30,40,61"
                  ),
                  document.documentElement.style.setProperty(
                    "--secondary",
                    "46,201,151"
                  ),
                  document.documentElement.style.setProperty(
                    "--text",
                    "255,255,255"
                  ),
                  document.documentElement.style.setProperty(
                    "--text-strong",
                    "245,245,245"
                  ))
                : "grey" == t
                ? (document.documentElement.style.setProperty(
                    "--base",
                    "0, 0, 0"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary",
                    "36,38,41"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary-off",
                    "49,51,53"
                  ),
                  document.documentElement.style.setProperty(
                    "--secondary",
                    "41,98,255"
                  ),
                  document.documentElement.style.setProperty(
                    "--text",
                    "250,250,250"
                  ),
                  document.documentElement.style.setProperty(
                    "--text-strong",
                    "255,255,255"
                  ))
                : "white" == t
                ? (document.documentElement.style.setProperty(
                    "--base",
                    "235,235,235"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary",
                    "225,228,232"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary-off",
                    "235,235,235"
                  ),
                  document.documentElement.style.setProperty(
                    "--secondary",
                    "101,2,2"
                  ),
                  document.documentElement.style.setProperty(
                    "--text",
                    "28,28,28"
                  ),
                  document.documentElement.style.setProperty(
                    "--text-strong",
                    "0,0,0"
                  ))
                : "black" == t &&
                  (document.documentElement.style.setProperty(
                    "--base",
                    "0,0,0"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary",
                    "15,15,15"
                  ),
                  document.documentElement.style.setProperty(
                    "--primary-off",
                    "31,30,30"
                  ),
                  document.documentElement.style.setProperty(
                    "--secondary",
                    "0,192,199"
                  ),
                  document.documentElement.style.setProperty(
                    "--text",
                    "255,255,255"
                  ),
                  document.documentElement.style.setProperty(
                    "--text-strong",
                    "245,245,245"
                  )),
                (this.currentScheme = t);
            },
          },
        },
        r = (e(487), e(45)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              n = t.$createElement;
            return (t._self._c || n)(
              "div",
              {
                staticClass: "themepicker__btn",
                on: {
                  click: function (n) {
                    return t.changeColors();
                  },
                },
              },
              [t._m(0)]
            );
          },
          [
            function () {
              var t = this,
                n = t.$createElement,
                e = t._self._c || n;
              return e("span", { staticClass: "themepicker__palette" }, [
                e("span", {
                  staticClass:
                    "themepicker__swatch themepicker__swatch--primary",
                }),
                t._v(" "),
                e("span", {
                  staticClass:
                    "themepicker__swatch themepicker__swatch--secondary",
                }),
                t._v(" "),
                e("span", {
                  staticClass: "themepicker__swatch themepicker__swatch--text",
                }),
              ]);
            },
          ],
          !1,
          null,
          "15133967",
          null
        );
      n.default = component.exports;
    },
    ,
    ,
    function (t, n, e) {
      "use strict";
      e(486);
    },
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      e.r(n);
      var o = e(241),
        r = e(242),
        c = {
          components: { HoverableCard: o.default, BlurImage: r.default },
          props: [
            "title",
            "description",
            "date",
            "img",
            "img_alt",
            "slug",
            "path",
            "background",
          ],
          methods: {
            formatDate: function (t) {
              return new Date(t).toLocaleDateString("en", {
                year: "numeric",
                month: "long",
              });
            },
          },
        },
        m = e(45),
        component = Object(m.a)(
          c,
          function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("HoverableCard", {
              attrs: { to: { path: "/post/" + t.slug } },
              scopedSlots: t._u([
                {
                  key: "default",
                  fn: function () {
                    return [
                      e(
                        "div",
                        {
                          staticClass: "card card-fullheight",
                          class: t.background,
                        },
                        [
                          e("div", { staticClass: "card-image" }, [
                            e(
                              "figure",
                              { staticClass: "image is-2by1" },
                              [
                                e("BlurImage", {
                                  attrs: {
                                    src: "post/" + t.img,
                                    alt: t.img_alt,
                                    type: "post",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "card-content" }, [
                            e("p", { staticClass: "title is-size-4" }, [
                              t._v(t._s(t.title)),
                            ]),
                            t._v(" "),
                            e(
                              "p",
                              {
                                staticClass:
                                  "subtitle heading is-size-6 has-text-weight-light",
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.formatDate(t.date)) +
                                    "\n        "
                                ),
                              ]
                            ),
                            t._v(" "),
                            e("p", [t._v(t._s(t.description))]),
                          ]),
                        ]
                      ),
                    ];
                  },
                  proxy: !0,
                },
              ]),
            });
          },
          [],
          !1,
          null,
          "29b22777",
          null
        );
      n.default = component.exports;
      installComponents(component, {
        BlurImage: e(242).default,
        HoverableCard: e(241).default,
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      e(509);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      e.r(n);
      var o = e(5),
        r =
          (e(31),
          {
            asyncData: function (t) {
              return Object(o.a)(
                regeneratorRuntime.mark(function n() {
                  var e, o, r;
                  return regeneratorRuntime.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (e = t.$content),
                            (o = t.params),
                            (n.next = 3),
                            e("posts", o)
                              .where({ draft: { $ne: !0 } })
                              .sortBy("date", "desc")
                              .fetch()
                          );
                        case 3:
                          return (r = n.sent), n.abrupt("return", { posts: r });
                        case 5:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            head: function () {
              return {
                title: "Posts | Connor Rothschild",
                link: [
                  {
                    hid: "canonical",
                    rel: "canonical",
                    href: "https://v3.connorrothschild.com/post/",
                  },
                ],
              };
            },
          }),
        c = (e(524), e(45)),
        component = Object(c.a)(
          r,
          function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e(
              "div",
              { staticClass: "theme-primary-off" },
              [
                e("Nav", { attrs: { classes: "theme-primary" } }),
                t._v(" "),
                e("div", { staticClass: "fullscreen" }, [
                  e("article", { staticClass: "section container" }, [
                    e("h1", { staticClass: "section-title" }, [
                      t._v("Blog Posts 📝"),
                    ]),
                    t._v(" "),
                    e(
                      "div",
                      { staticClass: "columns is-multiline" },
                      t._l(t.posts, function (n, o) {
                        return e(
                          "div",
                          { key: o, staticClass: "column is-4" },
                          [
                            e(
                              "BlogCard",
                              t._b(
                                {
                                  attrs: {
                                    background:
                                      "has-background-semitransparent",
                                  },
                                },
                                "BlogCard",
                                n,
                                !1
                              )
                            ),
                          ],
                          1
                        );
                      }),
                      0
                    ),
                  ]),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = component.exports;
      installComponents(component, {
        Nav: e(485).default,
        BlogCard: e(497).default,
      });
    },
  ]),
]);
