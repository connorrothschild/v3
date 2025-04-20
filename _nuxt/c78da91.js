(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
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
        l = n(45),
        component = Object(l.a)(
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
    511: function (t, e, n) {},
    526: function (t, e, n) {
      "use strict";
      n(511);
    },
    547: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(67),
        l = n(20),
        c = n(5),
        o = (n(65), n(31), n(503)),
        d = n(507),
        h = n(482),
        v = {
          transition: {
            mode: "out-in",
            css: !1,
            enter: function () {
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
                var n, r, c, o, d, h, v;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.$content),
                          (r = t.params),
                          (e.next = 3),
                          n("awards", r.slug).fetch()
                        );
                      case 3:
                        return (
                          (c = e.sent),
                          (e.next = 6),
                          n("awards")
                            .only(["title", "slug"])
                            .sortBy("date", "asc")
                            .surround(r.slug)
                            .fetch()
                        );
                      case 6:
                        return (
                          (o = e.sent),
                          (d = Object(l.a)(o, 2)),
                          (h = d[0]),
                          (v = d[1]),
                          e.abrupt("return", { award: c, prev: h, next: v })
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
                url: "https://v3.connorrothschild.com/award/".concat(
                  this.$route.params.slug
                ),
              };
              return Object(o.a)(t);
            },
          },
          head: function () {
            return {
              title: "".concat(this.award.title, " | Connor Rothschild"),
              meta: [].concat(Object(r.a)(this.meta), [
                {
                  property: "article:published_time",
                  content: this.award.createdAt,
                },
                {
                  property: "article:modified_time",
                  content: this.award.updatedAt,
                },
                { name: "twitter:label1", content: "Written by" },
                { name: "twitter:data1", content: "Connor Rothschild" },
              ]),
              link: [
                {
                  hid: "canonical",
                  rel: "canonical",
                  href: "https://v3.connorrothschild.com/award/".concat(
                    this.$route.params.slug
                  ),
                },
              ],
            };
          },
        },
        m = (n(526), n(45)),
        component = Object(m.a)(
          v,
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
                  {
                    staticClass: "section container is-max-desktop",
                    staticStyle: { "min-height": "82.5vh" },
                  },
                  [
                    n(
                      "h1",
                      {
                        staticClass:
                          "title has-text-weight-boldest is-size-2 is-size-4-mobile",
                      },
                      [t._v("\n      " + t._s(t.award.title) + "\n    ")]
                    ),
                    t._v(" "),
                    n(
                      "p",
                      {
                        staticClass:
                          "subtitle heading is-size-6 has-text-weight-light",
                      },
                      [
                        t._v(
                          "\n      " +
                            t._s(t.award.organization) +
                            " • " +
                            t._s(t.formatDate(t.award.date)) +
                            "\n    "
                        ),
                      ]
                    ),
                    t._v(" "),
                    n("hr"),
                    t._v(" "),
                    n("nuxt-content", { attrs: { document: t.award } }),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "mt-3 is-size-5 has-text-centered" },
                      [
                        n(
                          "a",
                          {
                            staticClass: "has-text-weight-light award-link",
                            attrs: {
                              target: "_blank",
                              rel: "noopener",
                              href: t.award.project_url,
                            },
                          },
                          [t._v("\n        Project Link\n      ")]
                        ),
                        t._v(" "),
                        n(
                          "a",
                          {
                            staticClass: "has-text-weight-light award-link",
                            attrs: {
                              target: "_blank",
                              rel: "noopener",
                              href: t.award.media_url,
                            },
                          },
                          [t._v("\n        Media\n      ")]
                        ),
                      ]
                    ),
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
                            attrs: { to: "/award" },
                          },
                          [t._v("👈 Back to all awards")]
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    n("prev-next", {
                      attrs: { prev: t.prev, next: t.next, type: "award" },
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
          "7d918109",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        Nav: n(485).default,
        PrevNext: n(499).default,
        Footer: n(492).default,
      });
    },
  },
]);
