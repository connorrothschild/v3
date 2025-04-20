(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
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
        c = n(45),
        component = Object(c.a)(
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
    513: function (t, e, n) {},
    528: function (t, e, n) {
      "use strict";
      n(513);
    },
    549: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(67),
        c = n(20),
        o = n(5),
        l = (n(26), n(37), n(65), n(31), n(503)),
        d = n(507),
        v = n(482),
        h = {
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
                    ease: v.b.easeOut,
                  }
                );
            },
          },
          asyncData: function (t) {
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                var n, r, o, l, d, v, h;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.$content),
                          (r = t.params),
                          (e.next = 3),
                          n("projects", r.slug).fetch()
                        );
                      case 3:
                        return (
                          (o = e.sent),
                          (e.next = 6),
                          n("projects")
                            .only(["title", "slug", "img", "img_alt"])
                            .sortBy("date", "asc")
                            .surround(r.slug)
                            .fetch()
                        );
                      case 6:
                        return (
                          (l = e.sent),
                          (d = Object(c.a)(l, 2)),
                          (v = d[0]),
                          (h = d[1]),
                          e.abrupt("return", { project: o, prev: v, next: h })
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
                title: this.project.title,
                description: this.project.description,
                url: "https://v3.connorrothschild.com/project/".concat(
                  this.$route.params.slug
                ),
                mainImage: "https://v3.connorrothschild.com/project/".concat(
                  this.$route.params.slug,
                  "/social.png"
                ),
              };
              return Object(l.a)(t);
            },
          },
          head: function () {
            return {
              title: "".concat(this.project.title, " | Connor Rothschild"),
              meta: [].concat(Object(r.a)(this.meta), [
                {
                  property: "article:published_time",
                  content: this.project.createdAt,
                },
                {
                  property: "article:modified_time",
                  content: this.project.updatedAt,
                },
                { name: "twitter:label1", content: "Written by" },
                { name: "twitter:data1", content: "Connor Rothschild" },
              ]),
              link: [
                {
                  hid: "canonical",
                  rel: "canonical",
                  href: "https://v3.connorrothschild.com/project/".concat(
                    this.$route.params.slug
                  ),
                },
              ],
            };
          },
        },
        m = (n(528), n(45)),
        component = Object(m.a)(
          h,
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
                  { staticClass: "section container is-max-desktop" },
                  [
                    n(
                      "h1",
                      {
                        staticClass:
                          "has-text-weight-boldest content-title is-size-4-mobile",
                      },
                      [t._v("\n      " + t._s(t.project.title) + "\n    ")]
                    ),
                    t._v(" "),
                    n(
                      "h2",
                      {
                        staticClass:
                          "my-3 content-description is-size-6-mobile",
                      },
                      [
                        t._v(
                          "\n      " + t._s(t.project.description) + "\n    "
                        ),
                      ]
                    ),
                    t._v(" "),
                    n("div", { staticClass: "columns mt-3" }, [
                      n("div", { staticClass: "column" }, [
                        n(
                          "article",
                          {
                            staticClass: "card has-background-semitransparent",
                          },
                          [
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
                                            "heading has-text-weight-bold title is-size-6",
                                        },
                                        [
                                          t._v(
                                            "\n                  Tools used\n                "
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      n("p", [t._v(t._s(t.project.techstack))]),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                            t._v(" "),
                            n("footer", { staticClass: "card-footer" }, [
                              t.project.github
                                ? n(
                                    "a",
                                    {
                                      staticClass:
                                        "card-footer-item has-text-weight-bold",
                                      attrs: {
                                        href: t.project.github,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      },
                                    },
                                    [t._v("GitHub Repository")]
                                  )
                                : n("p", { staticClass: "card-footer-item" }, [
                                    t._v(
                                      "\n              Code is not publicly available 😢\n            "
                                    ),
                                  ]),
                            ]),
                          ]
                        ),
                      ]),
                      t._v(" "),
                      n("div", { staticClass: "column" }, [
                        n(
                          "article",
                          {
                            staticClass: "card has-background-semitransparent",
                          },
                          [
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
                                            "heading has-text-weight-bold title is-size-6",
                                        },
                                        [
                                          t._v(
                                            "\n                  Published\n                "
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      n("p", [
                                        t._v(
                                          t._s(t.formatDate(t.project.date))
                                        ),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    { staticClass: "has-text-centered" },
                                    [
                                      n(
                                        "p",
                                        {
                                          staticClass:
                                            "heading has-text-weight-bold title is-size-6",
                                        },
                                        [
                                          t._v(
                                            "\n                  Audience\n                "
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      n("p", [t._v(t._s(t.project.audience))]),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                            t._v(" "),
                            n("footer", { staticClass: "card-footer" }, [
                              t.project.url
                                ? n(
                                    "a",
                                    {
                                      staticClass:
                                        "card-footer-item has-text-weight-bold",
                                      attrs: {
                                        href: t.project.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      },
                                    },
                                    [t._v("Live URL")]
                                  )
                                : n("p", { staticClass: "card-footer-item" }, [
                                    t._v(
                                      "\n              Project is not publicly available 😢\n            "
                                    ),
                                  ]),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    n("nuxt-content", { attrs: { document: t.project } }),
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
                            attrs: { to: "/project" },
                          },
                          [t._v("👈 Back to all projects")]
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    n("prev-next", {
                      attrs: { prev: t.prev, next: t.next, type: "project" },
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
          "7da5b9cb",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        Nav: n(485).default,
        Footer: n(492).default,
        PrevNext: n(499).default,
        Footer: n(492).default,
      });
    },
  },
]);
