(window.webpackJsonp = window.webpackJsonp || []).push([
  [25, 4, 9, 13, 17],
  {
    241: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          mounted: function () {},
          props: ["to", "href"],
          data: function () {
            return { x: 0, y: 0 };
          },
        },
        o = n(45),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
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
                  mouseout: function (e) {
                    (t.x = 0), (t.y = 0);
                  },
                  mouseover: function (e) {
                    (t.x = 0), (t.y = 10);
                  },
                },
              },
              [
                t.to
                  ? n(
                      "NuxtLink",
                      { attrs: { to: t.to, prefetch: "" } },
                      [t._t("default")],
                      2
                    )
                  : t._e(),
                t._v(" "),
                t.href
                  ? n(
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
      e.default = component.exports;
    },
    484: function (t, e, n) {},
    485: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          props: { classes: String },
          data: function () {
            return { isVisible: !1 };
          },
        },
        o = (n(491), n(45)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "nav",
              {
                staticClass: "navbar",
                class: t.classes,
                attrs: { role: "navigation", "aria-label": "main navigation" },
              },
              [
                n(
                  "div",
                  { staticClass: "navbar-brand" },
                  [
                    n(
                      "NuxtLink",
                      {
                        staticClass: "navbar-item has-text-weight-boldest",
                        attrs: { to: "/" },
                      },
                      [t._v("Connor Rothschild\n    ")]
                    ),
                    t._v(" "),
                    n(
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
                          click: function (e) {
                            t.isVisible = !t.isVisible;
                          },
                        },
                      },
                      [
                        n("span", { attrs: { "aria-hidden": "true" } }),
                        t._v(" "),
                        n("span", { attrs: { "aria-hidden": "true" } }),
                        t._v(" "),
                        n("span", { attrs: { "aria-hidden": "true" } }),
                      ]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "navbar-menu",
                    class: { "is-active": t.isVisible },
                    attrs: { id: "navbarID" },
                  },
                  [
                    n(
                      "div",
                      { staticClass: "navbar-end" },
                      [
                        n(
                          "div",
                          { staticClass: "navbar-item" },
                          [n("ColorPicker")],
                          1
                        ),
                        t._v(" "),
                        n(
                          "NuxtLink",
                          {
                            staticClass: "navbar-item",
                            attrs: { to: { path: "/", hash: "#projects" } },
                          },
                          [t._v("\n        Projects\n      ")]
                        ),
                        t._v(" "),
                        n(
                          "NuxtLink",
                          {
                            staticClass: "navbar-item",
                            attrs: { to: { path: "/", hash: "#awards" } },
                          },
                          [t._v("\n        Awards\n      ")]
                        ),
                        t._v(" "),
                        n(
                          "NuxtLink",
                          {
                            staticClass: "navbar-item",
                            attrs: { to: { path: "/", hash: "#blog" } },
                          },
                          [t._v("\n        Blog\n      ")]
                        ),
                        t._v(" "),
                        n(
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
                        n(
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
      e.default = component.exports;
      installComponents(component, {
        ColorPicker: n(488).default,
        Nav: n(485).default,
      });
    },
    486: function (t, e, n) {},
    487: function (t, e, n) {
      "use strict";
      n(484);
    },
    488: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
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
        o = (n(487), n(45)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement;
            return (t._self._c || e)(
              "div",
              {
                staticClass: "themepicker__btn",
                on: {
                  click: function (e) {
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
                e = t.$createElement,
                n = t._self._c || e;
              return n("span", { staticClass: "themepicker__palette" }, [
                n("span", {
                  staticClass:
                    "themepicker__swatch themepicker__swatch--primary",
                }),
                t._v(" "),
                n("span", {
                  staticClass:
                    "themepicker__swatch themepicker__swatch--secondary",
                }),
                t._v(" "),
                n("span", {
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
      e.default = component.exports;
    },
    489: function (t, e, n) {},
    491: function (t, e, n) {
      "use strict";
      n(486);
    },
    493: function (t, e, n) {
      "use strict";
      n(489);
    },
    496: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          components: { HoverableCard: n(241).default },
          props: [
            "title",
            "organization",
            "date",
            "description",
            "url",
            "slug",
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
        o = (n(493), n(45)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("HoverableCard", {
              attrs: { to: { path: "/award/" + t.slug } },
              scopedSlots: t._u([
                {
                  key: "default",
                  fn: function () {
                    return [
                      n(
                        "div",
                        {
                          staticClass: "card card-fullheight",
                          class: t.background,
                        },
                        [
                          n(
                            "div",
                            { staticClass: "card-content flex-bounds" },
                            [
                              n("p", { staticClass: "title is-size-4" }, [
                                t._v(t._s(t.title)),
                              ]),
                              t._v(" "),
                              n(
                                "p",
                                {
                                  staticClass:
                                    "subtitle heading is-size-6 has-text-weight-light",
                                },
                                [
                                  t._v(
                                    "\n          " +
                                      t._s(t.organization) +
                                      " | " +
                                      t._s(t.formatDate(t.date)) +
                                      "\n        "
                                  ),
                                ]
                              ),
                            ]
                          ),
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
          "6f9f9928",
          null
        );
      e.default = component.exports;
      installComponents(component, { HoverableCard: n(241).default });
    },
    508: function (t, e, n) {},
    523: function (t, e, n) {
      "use strict";
      n(508);
    },
    544: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(5),
        o =
          (n(31),
          {
            asyncData: function (t) {
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r, o;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.$content),
                            (r = t.params),
                            (e.next = 3),
                            n("awards", r).sortBy("date", "desc").fetch()
                          );
                        case 3:
                          return (
                            (o = e.sent), e.abrupt("return", { awards: o })
                          );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            head: function () {
              return {
                title: "Awards | Connor Rothschild",
                link: [
                  {
                    hid: "canonical",
                    rel: "canonical",
                    href: "https://v3.connorrothschild.com/award/",
                  },
                ],
              };
            },
          }),
        c = (n(523), n(45)),
        component = Object(c.a)(
          o,
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
                n("div", { staticClass: "fullscreen" }, [
                  n("article", { staticClass: "section container" }, [
                    n("h1", { staticClass: "section-title" }, [
                      t._v("Awards 🏆"),
                    ]),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "columns is-multiline" },
                      t._l(t.awards, function (e, r) {
                        return n(
                          "div",
                          { key: r, staticClass: "column is-one-third" },
                          [
                            n(
                              "AwardCard",
                              t._b(
                                {
                                  attrs: {
                                    background:
                                      "has-background-semitransparent",
                                  },
                                },
                                "AwardCard",
                                e,
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
      e.default = component.exports;
      installComponents(component, {
        Nav: n(485).default,
        AwardCard: n(496).default,
      });
    },
  },
]);
