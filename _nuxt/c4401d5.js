(window.webpackJsonp = window.webpackJsonp || []).push([
  [27, 21],
  {
    499: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          props: {
            prev: {
              type: Object,
              default: function () {
                return null;
              },
            },
            next: {
              type: Object,
              default: function () {
                return null;
              },
            },
            type: {
              type: String,
              default: function () {
                return null;
              },
            },
          },
          mounted: function () {},
        },
        o = n(45),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "columns" }, [
              n(
                "div",
                { staticClass: "column" },
                [
                  t.next
                    ? n(
                        "HoverableCard",
                        { attrs: { to: "/" + t.type + "/" + t.next.slug } },
                        [
                          n(
                            "article",
                            {
                              staticClass:
                                "card card-fullheight has-background-semitransparent",
                            },
                            [
                              t.next.img
                                ? n("div", { staticClass: "card-image" }, [
                                    n(
                                      "figure",
                                      { staticClass: "image is-2by1" },
                                      [
                                        n("BlurImage", {
                                          attrs: {
                                            src: t.type + "/" + t.next.img,
                                            alt: t.next.img_alt,
                                            type: t.type,
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ])
                                : t._e(),
                              t._v(" "),
                              n("div", { staticClass: "card-content" }, [
                                n(
                                  "div",
                                  {
                                    staticClass:
                                      "content is-flex is-justify-content-space-evenly",
                                  },
                                  [
                                    n(
                                      "div",
                                      { staticClass: "has-text-centered" },
                                      [
                                        n(
                                          "p",
                                          {
                                            staticClass:
                                              "heading title is-size-6",
                                          },
                                          [t._v("Next " + t._s(t.type))]
                                        ),
                                        t._v(" "),
                                        n(
                                          "p",
                                          {
                                            staticClass:
                                              "has-text-weight-light title is-size-6",
                                          },
                                          [
                                            t._v(
                                              "\n                " +
                                                t._s(t.next.title) +
                                                "\n              "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]
                      )
                    : t._e(),
                ],
                1
              ),
              t._v(" "),
              n(
                "div",
                { staticClass: "column" },
                [
                  t.prev
                    ? n(
                        "HoverableCard",
                        { attrs: { to: "/" + t.type + "/" + t.prev.slug } },
                        [
                          n(
                            "article",
                            {
                              staticClass:
                                "card card-fullheight has-background-semitransparent",
                            },
                            [
                              t.prev.img
                                ? n("div", { staticClass: "card-image" }, [
                                    n(
                                      "figure",
                                      { staticClass: "image is-2by1" },
                                      [
                                        n("BlurImage", {
                                          attrs: {
                                            src: t.type + "/" + t.prev.img,
                                            alt: t.prev.img_alt,
                                            type: t.type,
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ])
                                : t._e(),
                              t._v(" "),
                              n("div", { staticClass: "card-content" }, [
                                n(
                                  "div",
                                  {
                                    staticClass:
                                      "content is-flex is-justify-content-space-evenly",
                                  },
                                  [
                                    n(
                                      "div",
                                      { staticClass: "has-text-centered" },
                                      [
                                        n(
                                          "p",
                                          {
                                            staticClass:
                                              "heading title is-size-6",
                                          },
                                          [t._v("Previous " + t._s(t.type))]
                                        ),
                                        t._v(" "),
                                        n(
                                          "p",
                                          {
                                            staticClass:
                                              "has-text-weight-light title is-size-6",
                                          },
                                          [
                                            t._v(
                                              "\n                " +
                                                t._s(t.prev.title) +
                                                "\n              "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]
                      )
                    : t._e(),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        BlurImage: n(242).default,
        HoverableCard: n(241).default,
      });
    },
    501: function (t, e, n) {},
    505: function (t, e, n) {
      "use strict";
      n(501);
    },
    512: function (t, e, n) {},
    518: function (t, e, n) {
      "use strict";
      n.r(e);
      n(53), n(126);
      var r = {
          name: "readingTime",
          props: ["content"],
          data: function () {
            return { hovered: !1 };
          },
          computed: {
            readingTime: function () {
              var t = JSON.stringify(this.content).split(" ").length;
              return Math.ceil(t / 200);
            },
          },
        },
        o = (n(505), n(45)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "span",
              {
                on: {
                  mouseover: function (e) {
                    t.hovered = !0;
                  },
                  mouseout: function (e) {
                    t.hovered = !1;
                  },
                },
              },
              [
                t._v(t._s(t.readingTime) + " minute read\n  "),
                t.hovered
                  ? n("span", { staticClass: "wpm" }, [t._v("(at 200 WPM)")])
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    527: function (t, e, n) {
      "use strict";
      n(512);
    },
    548: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(67),
        o = n(20),
        c = n(5),
        l = (n(26), n(37), n(65), n(31), n(503)),
        d = n(507),
        h = n(482),
        m = {
          transition: {
            mode: "out-in",
            css: !1,
            enter: function (t, e) {
              d.a.fromTo(".title", { x: "10%" }, { x: "0%", duration: 0.1 }),
                d.a.fromTo(
                  ".subtitle, .card, .img",
                  { x: "10%", autoAlpha: 0 },
                  {
                    x: "0%",
                    autoAlpha: 1,
                    delay: 0.25,
                    duration: 0.5,
                    ease: h.b.easeOut,
                  }
                );
            },
          },
          asyncData: function (t) {
            return Object(c.a)(
              regeneratorRuntime.mark(function e() {
                var n, r, c, l, d, h, m;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.$content),
                          (r = t.params),
                          (e.next = 3),
                          n("posts", r.slug).fetch()
                        );
                      case 3:
                        return (
                          (c = e.sent),
                          (e.next = 6),
                          n("posts")
                            .where({ draft: { $ne: !0 } })
                            .only(["title", "slug", "img", "img_alt"])
                            .sortBy("date", "asc")
                            .surround(r.slug)
                            .fetch()
                        );
                      case 6:
                        return (
                          (l = e.sent),
                          (d = Object(o.a)(l, 2)),
                          (h = d[0]),
                          (m = d[1]),
                          e.abrupt("return", { post: c, prev: h, next: m })
                        );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          methods: {
            formatDate: function (t) {
              return new Date(t).toLocaleDateString("en", {
                year: "numeric",
                month: "long",
              });
            },
          },
          computed: {
            meta: function () {
              var t = {
                type: "article",
                title: this.post.title,
                description: this.post.description,
                url: "https://v3.connorrothschild.com/post/".concat(
                  this.$route.params.slug
                ),
                mainImage: "https://v3.connorrothschild.com/post/".concat(
                  this.post.img
                ),
              };
              return Object(l.a)(t);
            },
          },
          head: function () {
            return {
              title: "".concat(this.post.title, " | Connor Rothschild"),
              meta: [].concat(Object(r.a)(this.meta), [
                {
                  property: "article:published_time",
                  content: this.post.createdAt,
                },
                {
                  property: "article:modified_time",
                  content: this.post.updatedAt,
                },
                { name: "twitter:label1", content: "Written by" },
                { name: "twitter:data1", content: "Connor Rothschild" },
              ]),
              link: [
                {
                  hid: "canonical",
                  rel: "canonical",
                  href: "https://v3.connorrothschild.com/post/".concat(
                    this.$route.params.slug
                  ),
                },
              ],
            };
          },
        },
        v = (n(527), n(45)),
        component = Object(v.a)(
          m,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              { staticClass: "theme-primary-off" },
              [
                n("Nav", { attrs: { classes: "theme-primary" } }),
                t._v(" "),
                n(
                  "article",
                  { staticClass: "section container is-max-tablet" },
                  [
                    n(
                      "h1",
                      {
                        staticClass:
                          "my-3 has-text-weight-boldest content-title is-size-3-mobile",
                      },
                      [t._v("\n      " + t._s(t.post.title) + "\n    ")]
                    ),
                    t._v(" "),
                    n(
                      "p",
                      {
                        staticClass:
                          "my-3 content-description is-size-5-mobile",
                      },
                      [t._v("\n      " + t._s(t.post.description) + "\n    ")]
                    ),
                    t._v(" "),
                    n(
                      "p",
                      {
                        staticClass: "heading is-size-6 has-text-weight-light",
                      },
                      [
                        t._v(
                          "\n      " +
                            t._s(t.formatDate(t.post.date)) +
                            " •\n      "
                        ),
                        n("ReadingTime", { attrs: { content: t.post } }),
                      ],
                      1
                    ),
                    t._v(" "),
                    n("hr"),
                    t._v(" "),
                    n("nuxt-content", { attrs: { document: t.post } }),
                    t._v(" "),
                    n("hr"),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "my-4" },
                      [
                        n(
                          "NuxtLink",
                          {
                            staticClass:
                              "subtitle has-text-weight-bolder is-size-5 link heading is-inline-block",
                            attrs: { to: "/post" },
                          },
                          [t._v("👈 Back to all posts")]
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    n("prev-next", {
                      attrs: { prev: t.prev, next: t.next, type: "post" },
                    }),
                  ],
                  1
                ),
                t._v(" "),
                n("Footer"),
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
      e.default = component.exports;
      installComponents(component, {
        Nav: n(485).default,
        ReadingTime: n(518).default,
        PrevNext: n(499).default,
        Footer: n(492).default,
      });
    },
  },
]);
