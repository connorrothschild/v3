/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  [
    ,
    function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return y;
      }),
        n.d(t, "l", function () {
          return x;
        }),
        n.d(t, "n", function () {
          return w;
        }),
        n.d(t, "m", function () {
          return O;
        }),
        n.d(t, "f", function () {
          return k;
        }),
        n.d(t, "b", function () {
          return j;
        }),
        n.d(t, "s", function () {
          return P;
        }),
        n.d(t, "h", function () {
          return E;
        }),
        n.d(t, "i", function () {
          return C;
        }),
        n.d(t, "e", function () {
          return A;
        }),
        n.d(t, "r", function () {
          return S;
        }),
        n.d(t, "k", function () {
          return $;
        }),
        n.d(t, "t", function () {
          return M;
        }),
        n.d(t, "o", function () {
          return I;
        }),
        n.d(t, "q", function () {
          return R;
        }),
        n.d(t, "g", function () {
          return L;
        }),
        n.d(t, "c", function () {
          return B;
        }),
        n.d(t, "j", function () {
          return U;
        }),
        n.d(t, "p", function () {
          return F;
        }),
        n.d(t, "a", function () {
          return X;
        }),
        n.d(t, "v", function () {
          return Z;
        }),
        n.d(t, "u", function () {
          return Y;
        });
      n(38), n(26), n(37), n(41), n(62), n(32), n(63);
      var r = n(19),
        o = n(5),
        l = n(25),
        c = n(20),
        d =
          (n(31),
          n(42),
          n(206),
          n(8),
          n(16),
          n(65),
          n(44),
          n(43),
          n(14),
          n(21),
          n(39),
          n(53),
          n(66),
          n(115),
          n(159),
          n(187),
          n(88),
          n(89),
          n(210),
          n(46),
          n(55),
          n(0)),
        f = n(10);
      function h(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function _(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(Object(source), !0).forEach(function (t) {
                Object(l.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      function m(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return v(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return v(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          l = !0,
          c = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (c = !0), (o = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          },
        };
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      function y(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return function () {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t;
          return void 0 === e[n] && (e[n] = 0), e[n]++;
        };
      }
      function x(e) {
        d.a.config.errorHandler && d.a.config.errorHandler(e);
      }
      function w(e) {
        return e.then(function (e) {
          return e.default || e;
        });
      }
      function O(e) {
        return (
          e.$options &&
          "function" == typeof e.$options.fetch &&
          !e.$options.fetch.length
        );
      }
      function k(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = e.$children || [],
          o = m(r);
        try {
          for (o.s(); !(t = o.n()).done; ) {
            var l = t.value;
            l.$fetch ? n.push(l) : l.$children && k(l, n);
          }
        } catch (e) {
          o.e(e);
        } finally {
          o.f();
        }
        return n;
      }
      function j(e, t) {
        if (t || !e.options.__hasNuxtData) {
          var n =
            e.options._originDataFn ||
            e.options.data ||
            function () {
              return {};
            };
          (e.options._originDataFn = n),
            (e.options.data = function () {
              var data = n.call(this, this);
              return (
                this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]),
                _(_({}, data), t)
              );
            }),
            (e.options.__hasNuxtData = !0),
            e._Ctor &&
              e._Ctor.options &&
              (e._Ctor.options.data = e.options.data);
        }
      }
      function P(e) {
        return (
          (e.options && e._Ctor === e) ||
            (e.options
              ? ((e._Ctor = e), (e.extendOptions = e.options))
              : ((e = d.a.extend(e))._Ctor = e),
            !e.options.name &&
              e.options.__file &&
              (e.options.name = e.options.__file)),
          e
        );
      }
      function E(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "components";
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function (e, r) {
            return Object.keys(e[n]).map(function (o) {
              return t && t.push(r), e[n][o];
            });
          })
        );
      }
      function C(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return E(e, t, "instances");
      }
      function A(e, t) {
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function (e, n) {
            return Object.keys(e.components).reduce(function (r, o) {
              return (
                e.components[o]
                  ? r.push(t(e.components[o], e.instances[o], e, o, n))
                  : delete e.components[o],
                r
              );
            }, []);
          })
        );
      }
      function S(e, t) {
        return Promise.all(
          A(
            e,
            (function () {
              var e = Object(o.a)(
                regeneratorRuntime.mark(function e(n, r, o, l) {
                  var c, d;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("function" != typeof n || n.options) {
                              e.next = 11;
                              break;
                            }
                            return (e.prev = 1), (e.next = 4), n();
                          case 4:
                            (n = e.sent), (e.next = 11);
                            break;
                          case 7:
                            throw (
                              ((e.prev = 7),
                              (e.t0 = e.catch(1)),
                              e.t0 &&
                                "ChunkLoadError" === e.t0.name &&
                                "undefined" != typeof window &&
                                window.sessionStorage &&
                                ((c = Date.now()),
                                (!(d = parseInt(
                                  window.sessionStorage.getItem("nuxt-reload")
                                )) ||
                                  d + 6e4 < c) &&
                                  (window.sessionStorage.setItem(
                                    "nuxt-reload",
                                    c
                                  ),
                                  window.location.reload(!0))),
                              e.t0)
                            );
                          case 11:
                            return (
                              (o.components[l] = n = P(n)),
                              e.abrupt(
                                "return",
                                "function" == typeof t ? t(n, r, o, l) : n
                              )
                            );
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 7]]
                  );
                })
              );
              return function (t, n, r, o) {
                return e.apply(this, arguments);
              };
            })()
          )
        );
      }
      function $(e) {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = Object(o.a)(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (e.next = 4), S(t);
                  case 4:
                    return e.abrupt(
                      "return",
                      _(
                        _({}, t),
                        {},
                        {
                          meta: E(t).map(function (e, n) {
                            return _(
                              _({}, e.options.meta),
                              (t.matched[n] || {}).meta
                            );
                          }),
                        }
                      )
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function M(e, t) {
        return T.apply(this, arguments);
      }
      function T() {
        return (T = Object(o.a)(
          regeneratorRuntime.mark(function e(t, n) {
            var o, l, d, h;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      t.context ||
                        ((t.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: t,
                          payload: n.payload,
                          error: n.error,
                          base: t.router.options.base,
                          env: {},
                        }),
                        n.ssrContext && (t.context.ssrContext = n.ssrContext),
                        (t.context.redirect = function (e, path, n) {
                          if (e) {
                            t.context._redirected = !0;
                            var o = Object(r.a)(path);
                            if (
                              ("number" == typeof e ||
                                ("undefined" !== o && "object" !== o) ||
                                ((n = path || {}),
                                (path = e),
                                (o = Object(r.a)(path)),
                                (e = 302)),
                              "object" === o &&
                                (path = t.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw (
                                ((path = Object(f.f)(path, n)),
                                window.location.replace(path),
                                new Error("ERR_REDIRECT"))
                              );
                            t.context.next({ path: path, query: n, status: e });
                          }
                        }),
                        (t.context.nuxtState = window.__NUXT__)),
                      (e.next = 3),
                      Promise.all([$(n.route), $(n.from)])
                    );
                  case 3:
                    (o = e.sent),
                      (l = Object(c.a)(o, 2)),
                      (d = l[0]),
                      (h = l[1]),
                      n.route && (t.context.route = d),
                      n.from && (t.context.from = h),
                      (t.context.next = n.next),
                      (t.context._redirected = !1),
                      (t.context._errored = !1),
                      (t.context.isHMR = !1),
                      (t.context.params = t.context.route.params || {}),
                      (t.context.query = t.context.route.query || {});
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function I(e, t) {
        return !e.length || t._redirected || t._errored
          ? Promise.resolve()
          : R(e[0], t).then(function () {
              return I(e.slice(1), t);
            });
      }
      function R(e, t) {
        var n;
        return (n =
          2 === e.length
            ? new Promise(function (n) {
                e(t, function (e, data) {
                  e && t.error(e), n((data = data || {}));
                });
              })
            : e(t)) &&
          n instanceof Promise &&
          "function" == typeof n.then
          ? n
          : Promise.resolve(n);
      }
      function L(base, e) {
        if ("hash" === e) return window.location.hash.replace(/^#\//, "");
        base = decodeURI(base).slice(0, -1);
        var path = decodeURI(window.location.pathname);
        base && path.startsWith(base) && (path = path.slice(base.length));
        var t = (path || "/") + window.location.search + window.location.hash;
        return Object(f.d)(t);
      }
      function B(e, t) {
        return (function (e, t) {
          for (var n = new Array(e.length), i = 0; i < e.length; i++)
            "object" === Object(r.a)(e[i]) &&
              (n[i] = new RegExp("^(?:" + e[i].pattern + ")$", V(t)));
          return function (t, r) {
            for (
              var path = "",
                data = t || {},
                o = (r || {}).pretty ? N : encodeURIComponent,
                l = 0;
              l < e.length;
              l++
            ) {
              var c = e[l];
              if ("string" != typeof c) {
                var d = data[c.name || "pathMatch"],
                  f = void 0;
                if (null == d) {
                  if (c.optional) {
                    c.partial && (path += c.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + c.name + '" to be defined'
                  );
                }
                if (Array.isArray(d)) {
                  if (!c.repeat)
                    throw new TypeError(
                      'Expected "' +
                        c.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(d) +
                        "`"
                    );
                  if (0 === d.length) {
                    if (c.optional) continue;
                    throw new TypeError(
                      'Expected "' + c.name + '" to not be empty'
                    );
                  }
                  for (var h = 0; h < d.length; h++) {
                    if (((f = o(d[h])), !n[l].test(f)))
                      throw new TypeError(
                        'Expected all "' +
                          c.name +
                          '" to match "' +
                          c.pattern +
                          '", but received `' +
                          JSON.stringify(f) +
                          "`"
                      );
                    path += (0 === h ? c.prefix : c.delimiter) + f;
                  }
                } else {
                  if (((f = c.asterisk ? K(d) : o(d)), !n[l].test(f)))
                    throw new TypeError(
                      'Expected "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received "' +
                        f +
                        '"'
                    );
                  path += c.prefix + f;
                }
              } else path += c;
            }
            return path;
          };
        })(
          (function (e, t) {
            var n,
              r = [],
              o = 0,
              l = 0,
              path = "",
              c = (t && t.delimiter) || "/";
            for (; null != (n = z.exec(e)); ) {
              var d = n[0],
                f = n[1],
                h = n.index;
              if (((path += e.slice(l, h)), (l = h + d.length), f))
                path += f[1];
              else {
                var _ = e[l],
                  m = n[2],
                  v = n[3],
                  y = n[4],
                  x = n[5],
                  w = n[6],
                  O = n[7];
                path && (r.push(path), (path = ""));
                var k = null != m && null != _ && _ !== m,
                  j = "+" === w || "*" === w,
                  P = "?" === w || "*" === w,
                  E = n[2] || c,
                  pattern = y || x;
                r.push({
                  name: v || o++,
                  prefix: m || "",
                  delimiter: E,
                  optional: P,
                  repeat: j,
                  partial: k,
                  asterisk: Boolean(O),
                  pattern: pattern
                    ? H(pattern)
                    : O
                    ? ".*"
                    : "[^" + W(E) + "]+?",
                });
              }
            }
            l < e.length && (path += e.substr(l));
            path && r.push(path);
            return r;
          })(e, t),
          t
        );
      }
      function U(e, t) {
        var n = {},
          r = _(_({}, e), t);
        for (var o in r) String(e[o]) !== String(t[o]) && (n[o] = !0);
        return n;
      }
      function F(e) {
        var t;
        if (e.message || "string" == typeof e) t = e.message || e;
        else
          try {
            t = JSON.stringify(e, null, 2);
          } catch (n) {
            t = "[".concat(e.constructor.name, "]");
          }
        return _(
          _({}, e),
          {},
          {
            message: t,
            statusCode:
              e.statusCode ||
              e.status ||
              (e.response && e.response.status) ||
              500,
          }
        );
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function (e) {
          window.onNuxtReadyCbs.push(e);
        });
      var z = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function N(e, t) {
        var n = t ? /[?#]/g : /[/?#]/g;
        return encodeURI(e).replace(n, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function K(e) {
        return N(e, !0);
      }
      function W(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function H(e) {
        return e.replace(/([=!:$/()])/g, "\\$1");
      }
      function V(e) {
        return e && e.sensitive ? "" : "i";
      }
      function X(e, t, n) {
        e.$options[t] || (e.$options[t] = []),
          e.$options[t].includes(n) || e.$options[t].push(n);
      }
      var Z = f.c;
      f.h, f.b;
      function Y(e) {
        try {
          window.history.scrollRestoration = e;
        } catch (e) {}
      }
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
    function (e, t, n) {
      "use strict";
      function r(path) {
        return path.replace(/(https?:\/\/)|(\/)+/g, "$1$2");
      }
      function o(map) {
        return (e) => map[e] || e || map.missingValue;
      }
      function l({
        formatter: e,
        keyMap: t,
        joinWith: n = "/",
        valueMap: r,
      } = {}) {
        return (
          e || (e = (e, t) => `${e}=${t}`),
          t && "function" != typeof t && (t = o(t)),
          (r = r || {}),
          Object.keys(r).forEach((e) => {
            "function" != typeof r[e] && (r[e] = o(r[e]));
          }),
          (o) =>
            Object.entries(o)
              .filter(([e, t]) => void 0 !== t)
              .map(([n, l]) => {
                const c = r[n];
                return (
                  "function" == typeof c && (l = c(o[n])),
                  (n = "function" == typeof t ? t(n) : n),
                  e(n, l)
                );
              })
              .join(n)
        );
      }
      function c(e = {}) {
        return Object.entries(e)
          .map(([e, t]) => (t ? `${e}="${t}"` : ""))
          .filter(Boolean)
          .join(" ");
      }
      function d(e, t, n) {
        const html = `<${e} ${c(t)}>`;
        return n ? html + n + `</${e}>` : html;
      }
      n.r(t),
        n.d(t, "cleanDoubleSlashes", function () {
          return r;
        }),
        n.d(t, "createMapper", function () {
          return o;
        }),
        n.d(t, "createOperationsGenerator", function () {
          return l;
        }),
        n.d(t, "renderAttributesToString", function () {
          return c;
        }),
        n.d(t, "renderTag", function () {
          return d;
        }),
        n.d(t, "isModernFormat", function () {
          return h;
        });
      const f = ["webp", "avif"];
      function h(path) {
        return f.includes(String(path).split(".").pop());
      }
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
    function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return Oe;
      }),
        n.d(t, "a", function () {
          return A.a;
        });
      n(43), n(26), n(42), n(62), n(32), n(63);
      var r = n(5),
        o = n(25),
        l = (n(31), n(16), n(44), n(8), n(0)),
        c = n(176),
        d = n(118),
        f = n.n(d),
        h = n(52),
        _ = n.n(h),
        m = (n(14), n(21), n(119)),
        v = n(10),
        y = n(1);
      "scrollRestoration" in window.history &&
        (Object(y.u)("manual"),
        window.addEventListener("beforeunload", function () {
          Object(y.u)("auto");
        }),
        window.addEventListener("load", function () {
          Object(y.u)("manual");
        }));
      function x(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function w(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? x(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : x(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      var O = function () {};
      l.a.use(m.a);
      var k = {
        mode: "history",
        base: "/",
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function (e, t, n) {
          var r = !1,
            o = e !== t;
          n
            ? (r = n)
            : o &&
              (function (e) {
                var t = Object(y.h)(e);
                if (1 === t.length) {
                  var n = t[0].options;
                  return !1 !== (void 0 === n ? {} : n).scrollToTop;
                }
                return t.some(function (e) {
                  var t = e.options;
                  return t && t.scrollToTop;
                });
              })(e) &&
              (r = { x: 0, y: 0 });
          var l = window.$nuxt;
          return (
            (!o || (e.path === t.path && e.hash !== t.hash)) &&
              l.$nextTick(function () {
                return l.$emit("triggerScroll");
              }),
            new Promise(function (t) {
              l.$once("triggerScroll", function () {
                if (e.hash) {
                  var n = e.hash;
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = "#" + window.CSS.escape(n.substr(1)));
                  try {
                    document.querySelector(n) && (r = { selector: n });
                  } catch (e) {
                    console.warn(
                      "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
                    );
                  }
                }
                t(r);
              });
            })
          );
        },
        routes: [
          {
            path: "/award",
            component: function () {
              return Object(y.n)(n.e(25).then(n.bind(null, 544)));
            },
            name: "award",
          },
          {
            path: "/post",
            component: function () {
              return Object(y.n)(n.e(28).then(n.bind(null, 545)));
            },
            name: "post",
          },
          {
            path: "/project",
            component: function () {
              return Object(y.n)(n.e(30).then(n.bind(null, 546)));
            },
            name: "project",
          },
          {
            path: "/award/:slug",
            component: function () {
              return Object(y.n)(
                Promise.all([n.e(1), n.e(0), n.e(24)]).then(n.bind(null, 547))
              );
            },
            name: "award-slug",
          },
          {
            path: "/post/:slug",
            component: function () {
              return Object(y.n)(
                Promise.all([n.e(1), n.e(0), n.e(27)]).then(n.bind(null, 548))
              );
            },
            name: "post-slug",
          },
          {
            path: "/project/:slug",
            component: function () {
              return Object(y.n)(
                Promise.all([n.e(1), n.e(0), n.e(29)]).then(n.bind(null, 549))
              );
            },
            name: "project-slug",
          },
          {
            path: "/",
            component: function () {
              return Object(y.n)(
                Promise.all([n.e(0), n.e(26)]).then(n.bind(null, 550))
              );
            },
            name: "index",
          },
        ],
        fallback: !1,
      };
      function j(e, t) {
        var base = (t._app && t._app.basePath) || k.base,
          n = new m.a(w(w({}, k), {}, { base: base })),
          r = n.push;
        n.push = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : O,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return r.call(this, e, t, n);
        };
        var o = n.resolve.bind(n);
        return (
          (n.resolve = function (e, t, n) {
            return "string" == typeof e && (e = Object(v.d)(e)), o(e, t, n);
          }),
          n
        );
      }
      var P = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: "" },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
          },
          render: function (e, t) {
            var n = t.parent,
              data = t.data,
              r = t.props,
              o = n.$createElement;
            data.nuxtChild = !0;
            for (
              var l = n,
                c = n.$nuxt.nuxt.transitions,
                d = n.$nuxt.nuxt.defaultTransition,
                f = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && f++, (n = n.$parent);
            data.nuxtChildDepth = f;
            var h = c[f] || d,
              _ = {};
            E.forEach(function (e) {
              void 0 !== h[e] && (_[e] = h[e]);
            });
            var m = {};
            C.forEach(function (e) {
              "function" == typeof h[e] && (m[e] = h[e].bind(l));
            });
            var v = m.beforeEnter;
            if (
              ((m.beforeEnter = function (e) {
                if (
                  (window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit("triggerScroll");
                  }),
                  v)
                )
                  return v.call(l, e);
              }),
              !1 === h.css)
            ) {
              var y = m.leave;
              (!y || y.length < 2) &&
                (m.leave = function (e, t) {
                  y && y.call(l, e), l.$nextTick(t);
                });
            }
            var x = o("routerView", data);
            return (
              r.keepAlive &&
                (x = o("keep-alive", { props: r.keepAliveProps }, [x])),
              o("transition", { props: _, on: m }, [x])
            );
          },
        },
        E = [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass",
        ],
        C = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled",
        ],
        A = n(36),
        S = n(20),
        $ =
          (n(53),
          n(66),
          n(88),
          {
            name: "Nuxt",
            components: { NuxtChild: P, NuxtError: A.a },
            props: {
              nuxtChildKey: { type: String, default: void 0 },
              keepAlive: Boolean,
              keepAliveProps: { type: Object, default: void 0 },
              name: { type: String, default: "default" },
            },
            errorCaptured: function (e) {
              this.displayingNuxtError &&
                ((this.errorFromNuxtError = e), this.$forceUpdate());
            },
            computed: {
              routerViewKey: function () {
                if (
                  void 0 !== this.nuxtChildKey ||
                  this.$route.matched.length > 1
                )
                  return (
                    this.nuxtChildKey ||
                    Object(y.c)(this.$route.matched[0].path)(this.$route.params)
                  );
                var e = Object(S.a)(this.$route.matched, 1)[0];
                if (!e) return this.$route.path;
                var t = e.components.default;
                if (t && t.options) {
                  var n = t.options;
                  if (n.key)
                    return "function" == typeof n.key
                      ? n.key(this.$route)
                      : n.key;
                }
                return /\/$/.test(e.path)
                  ? this.$route.path
                  : this.$route.path.replace(/\/$/, "");
              },
            },
            beforeCreate: function () {
              l.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
            },
            render: function (e) {
              var t = this;
              return this.nuxt.err
                ? this.errorFromNuxtError
                  ? (this.$nextTick(function () {
                      return (t.errorFromNuxtError = !1);
                    }),
                    e("div", {}, [
                      e("h2", "An error occurred while showing the error page"),
                      e(
                        "p",
                        "Unfortunately an error occurred and while showing the error page another error occurred"
                      ),
                      e(
                        "p",
                        "Error details: ".concat(
                          this.errorFromNuxtError.toString()
                        )
                      ),
                      e("nuxt-link", { props: { to: "/" } }, "Go back to home"),
                    ]))
                  : ((this.displayingNuxtError = !0),
                    this.$nextTick(function () {
                      return (t.displayingNuxtError = !1);
                    }),
                    e(A.a, { props: { error: this.nuxt.err } }))
                : e("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props,
                  });
            },
          }),
        D =
          (n(39),
          n(38),
          n(37),
          n(41),
          n(46),
          n(55),
          n(61),
          {
            name: "NuxtLoading",
            data: function () {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1,
              };
            },
            computed: {
              left: function () {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? "0px"
                      : "auto"
                    : this.reversed
                    ? "auto"
                    : "0px")
                );
              },
            },
            beforeDestroy: function () {
              this.clear();
            },
            methods: {
              clear: function () {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null);
              },
              start: function () {
                var e = this;
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function () {
                        return e.startTimer();
                      }, this.throttle))
                    : this.startTimer(),
                  this
                );
              },
              set: function (e) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(e)))),
                  this
                );
              },
              get: function () {
                return this.percent;
              },
              increase: function (e) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + e))),
                  this
                );
              },
              decrease: function (e) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - e))),
                  this
                );
              },
              pause: function () {
                return clearInterval(this._timer), this;
              },
              resume: function () {
                return this.startTimer(), this;
              },
              finish: function () {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                );
              },
              hide: function () {
                var e = this;
                return (
                  this.clear(),
                  setTimeout(function () {
                    (e.show = !1),
                      e.$nextTick(function () {
                        (e.percent = 0), (e.reversed = !1);
                      });
                  }, 500),
                  this
                );
              },
              fail: function (e) {
                return (this.canSucceed = !1), this;
              },
              startTimer: function () {
                var e = this;
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function () {
                    e.skipTimerCount > 0
                      ? e.skipTimerCount--
                      : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut),
                        e.continuous &&
                          (e.percent >= 100 || e.percent <= 0) &&
                          ((e.skipTimerCount = 1), (e.reversed = !e.reversed)));
                  }, 100));
              },
            },
            render: function (e) {
              var t = e(!1);
              return (
                this.show &&
                  (t = e("div", {
                    staticClass: "nuxt-progress",
                    class: {
                      "nuxt-progress-notransition": this.skipTimerCount > 0,
                      "nuxt-progress-failed": !this.canSucceed,
                    },
                    style: { width: this.percent + "%", left: this.left },
                  })),
                t
              );
            },
          }),
        M = (n(223), n(45)),
        T = Object(M.a)(D, undefined, undefined, !1, null, null, null).exports,
        I = (n(224), n(225), n(163), n(178));
      function R(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return L(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return L(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          l = !0,
          c = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (c = !0), (o = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          },
        };
      }
      function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      var B = { _default: Object(y.s)(I.default) },
        U = {
          render: function (e, t) {
            var n = e("NuxtLoading", { ref: "loading" }),
              r = e(this.layout || "nuxt"),
              o = e(
                "div",
                { domProps: { id: "__layout" }, key: this.layoutName },
                [r]
              ),
              l = e(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter: function (e) {
                      window.$nuxt.$nextTick(function () {
                        window.$nuxt.$emit("triggerScroll");
                      });
                    },
                  },
                },
                [o]
              );
            return e("div", { domProps: { id: "__nuxt" } }, [n, l]);
          },
          data: function () {
            return {
              isOnline: !0,
              layout: null,
              layoutName: "",
              nbFetching: 0,
            };
          },
          beforeCreate: function () {
            l.a.util.defineReactive(this, "nuxt", this.$options.nuxt);
          },
          created: function () {
            (this.$root.$options.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function () {
            var e = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((e.$loading = e.$refs.loading), !e.isPreview)) {
                          t.next = 9;
                          break;
                        }
                        if (!e.$store || !e.$store._actions.nuxtServerInit) {
                          t.next = 6;
                          break;
                        }
                        return (
                          e.$loading.start(),
                          (t.next = 6),
                          e.$store.dispatch("nuxtServerInit", e.context)
                        );
                      case 6:
                        return (t.next = 8), e.refresh();
                      case 8:
                        e.$loading.finish();
                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline: function () {
              return !this.isOnline;
            },
            isFetching: function () {
              return this.nbFetching > 0;
            },
            isPreview: function () {
              return Boolean(this.$options.previewData);
            },
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh: function () {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ((n = Object(y.i)(e.$route)).length) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return");
                          case 3:
                            return (
                              e.$loading.start(),
                              (r = n.map(function (t) {
                                var p = [];
                                if (
                                  (t.$options.fetch &&
                                    t.$options.fetch.length &&
                                    p.push(
                                      Object(y.q)(t.$options.fetch, e.context)
                                    ),
                                  t.$fetch)
                                )
                                  p.push(t.$fetch());
                                else {
                                  var n,
                                    r = R(
                                      Object(y.f)(t.$vnode.componentInstance)
                                    );
                                  try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                      var component = n.value;
                                      p.push(component.$fetch());
                                    }
                                  } catch (e) {
                                    r.e(e);
                                  } finally {
                                    r.f();
                                  }
                                }
                                return (
                                  t.$options.asyncData &&
                                    p.push(
                                      Object(y.q)(
                                        t.$options.asyncData,
                                        e.context
                                      ).then(function (e) {
                                        for (var n in e)
                                          l.a.set(t.$data, n, e[n]);
                                      })
                                    ),
                                  Promise.all(p)
                                );
                              })),
                              (t.prev = 5),
                              (t.next = 8),
                              Promise.all(r)
                            );
                          case 8:
                            t.next = 15;
                            break;
                          case 10:
                            (t.prev = 10),
                              (t.t0 = t.catch(5)),
                              e.$loading.fail(t.t0),
                              Object(y.l)(t.t0),
                              e.error(t.t0);
                          case 15:
                            e.$loading.finish();
                          case 16:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[5, 10]]
                  );
                })
              )();
            },
            errorChanged: function () {
              if (this.nuxt.err) {
                this.$loading &&
                  (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                  this.$loading.finish && this.$loading.finish());
                var e = (A.a.options || A.a).layout;
                "function" == typeof e && (e = e(this.context)),
                  this.setLayout(e);
              }
            },
            setLayout: function (e) {
              return (
                (e && B["_" + e]) || (e = "default"),
                (this.layoutName = e),
                (this.layout = B["_" + e]),
                this.layout
              );
            },
            loadLayout: function (e) {
              return (
                (e && B["_" + e]) || (e = "default"),
                Promise.resolve(B["_" + e])
              );
            },
            getRouterBase: function () {
              return Object(v.h)(this.$router.options.base);
            },
            getRoutePath: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "/",
                base = this.getRouterBase();
              return Object(v.h)(Object(v.g)(Object(v.e)(e).pathname, base));
            },
            getStaticAssetsPath: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "/",
                t = window.__NUXT__.staticAssetsBase;
              return Object(y.v)(t, this.getRoutePath(e));
            },
            fetchStaticManifest: function () {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            window.__NUXT_IMPORT__(
                              "manifest.js",
                              Object(v.d)(
                                Object(y.v)(
                                  e.getStaticAssetsPath(),
                                  "manifest.js"
                                )
                              )
                            )
                          );
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            setPagePayload: function (e) {
              (this._pagePayload = e), (this._fetchCounters = {});
            },
            fetchPayload: function (e, t) {
              var n = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function r() {
                  var path, o, l;
                  return regeneratorRuntime.wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (path = Object(v.a)(n.getRoutePath(e))),
                              (r.next = 3),
                              n.fetchStaticManifest()
                            );
                          case 3:
                            if (r.sent.routes.includes(path)) {
                              r.next = 7;
                              break;
                            }
                            throw (
                              (t || n.setPagePayload(!1),
                              new Error(
                                "Route ".concat(path, " is not pre-rendered")
                              ))
                            );
                          case 7:
                            return (
                              (o = Object(y.v)(
                                n.getStaticAssetsPath(e),
                                "payload.js"
                              )),
                              (r.prev = 8),
                              (r.next = 11),
                              window.__NUXT_IMPORT__(path, Object(v.d)(o))
                            );
                          case 11:
                            return (
                              (l = r.sent),
                              t || n.setPagePayload(l),
                              r.abrupt("return", l)
                            );
                          case 16:
                            throw (
                              ((r.prev = 16),
                              (r.t0 = r.catch(8)),
                              t || n.setPagePayload(!1),
                              r.t0)
                            );
                          case 20:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[8, 16]]
                  );
                })
              )();
            },
          },
          components: { NuxtLoading: T },
        };
      function F(e) {
        if (!e || !e.functional) return e;
        var t = Array.isArray(e.props) ? e.props : Object.keys(e.props || {});
        return {
          render: function (n) {
            var r = {},
              o = {};
            for (var l in this.$attrs)
              t.includes(l) ? (o[l] = this.$attrs[l]) : (r[l] = this.$attrs[l]);
            return n(
              e,
              {
                on: this.$listeners,
                attrs: r,
                props: o,
                scopedSlots: this.$scopedSlots,
              },
              this.$slots.default
            );
          },
        };
      }
      var z = {
        InfoBox: function () {
          return n
            .e(14)
            .then(n.bind(null, 555))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        InlineImage: function () {
          return n
            .e(15)
            .then(n.bind(null, 551))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        MoreInfo: function () {
          return n
            .e(16)
            .then(n.bind(null, 552))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        ResponsiveVideo: function () {
          return n
            .e(22)
            .then(n.bind(null, 553))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        TableHandler: function () {
          return n
            .e(23)
            .then(n.bind(null, 554))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        AwardCard: function () {
          return n
            .e(4)
            .then(n.bind(null, 496))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        Awards: function () {
          return n
            .e(5)
            .then(n.bind(null, 521))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        Blog: function () {
          return n
            .e(6)
            .then(n.bind(null, 522))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        BlogCard: function () {
          return n
            .e(7)
            .then(n.bind(null, 497))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        BlurImage: function () {
          return n
            .e(8)
            .then(n.bind(null, 242))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        ColorPicker: function () {
          return n
            .e(9)
            .then(n.bind(null, 488))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        FeaturedItem: function () {
          return n
            .e(10)
            .then(n.bind(null, 495))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        Footer: function () {
          return n
            .e(11)
            .then(n.bind(null, 492))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        Hero: function () {
          return n
            .e(12)
            .then(n.bind(null, 519))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        HoverableCard: function () {
          return n
            .e(13)
            .then(n.bind(null, 241))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        Nav: function () {
          return n
            .e(17)
            .then(n.bind(null, 485))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        PrevNext: function () {
          return n
            .e(18)
            .then(n.bind(null, 499))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        ProjectCard: function () {
          return n
            .e(19)
            .then(n.bind(null, 498))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        Projects: function () {
          return n
            .e(20)
            .then(n.bind(null, 520))
            .then(function (e) {
              return F(e.default || e);
            });
        },
        ReadingTime: function () {
          return n
            .e(21)
            .then(n.bind(null, 518))
            .then(function (e) {
              return F(e.default || e);
            });
        },
      };
      for (var N in z) l.a.component(N, z[N]), l.a.component("Lazy" + N, z[N]);
      var K,
        W = n(13);
      !(function (e) {
        (e.IDLE = "idle"), (e.LOADING = "loading"), (e.LOADED = "loaded");
      })(K || (K = {}));
      var H = {
          props: {
            src: { type: [String, Object], default: "", required: !0 },
            width: { type: [String, Number], default: "" },
            height: { type: [String, Number], default: "" },
            lazy: { type: Boolean, default: !0 },
            sizes: { type: [String, Array], default: "" },
            format: { type: String, default: void 0 },
            fit: { type: String, default: "cover" },
            operations: { type: Object, default: () => ({}) },
            noScript: { type: Boolean, default: !1 },
            alt: { type: String, default: "" },
            referrerpolicy: { type: String, default: void 0 },
            usemap: { type: String, default: void 0 },
            longdesc: { type: String, default: void 0 },
            ismap: { type: Boolean, default: !1 },
            crossorigin: { type: Boolean, default: !1 },
            placeholder: { type: [Boolean, String], default: !1 },
            responsive: { type: Boolean, default: !1 },
          },
          async fetch() {
            await this.fetchMeta(),
              this.$nuxt.context.ssrContext &&
                this.$nuxt.context.ssrContext.isGenerating &&
                this.sources;
          },
          data() {
            return {
              error: "",
              srcset: [],
              meta: { width: void 0, height: void 0, placeholder: void 0 },
              lazyState: this.lazy ? K.IDLE : K.LOADED,
            };
          },
          computed: {
            computedOperations() {
              return { fit: this.fit, ...this.operations };
            },
            imageRatio() {
              return this.height && this.width
                ? (parseInt(this.height, 10) / parseInt(this.width, 10)) * 100
                : this.meta.width && this.meta.height
                ? (this.meta.height / this.meta.width) * 100
                : 0;
            },
            imgAttributes() {
              return {
                alt: this.alt
                  ? this.alt
                  : this.src
                      .split(/[?#]/)
                      .shift()
                      .split("/")
                      .pop()
                      .split(".")
                      .shift(),
                referrerpolicy: this.referrerpolicy,
                usemap: this.usemap,
                longdesc: this.longdesc,
                ismap: this.ismap,
                crossorigin: this.crossorigin,
              };
            },
            sources() {
              return this.$img.sizes(this.src, this.sizes || this.responsive, {
                format: this.format,
                ...this.computedOperations,
              });
            },
          },
          watch: {
            src() {
              this.fetchMeta(),
                this.lazy &&
                  (this.$img.$observer.remove(this.$el),
                  this.$img.$observer.add(this.$el, this.onObserverEvent));
            },
          },
          mounted() {
            this.lazy &&
              this.$img.$observer.add(this.$el, this.onObserverEvent);
          },
          beforeDestroy() {
            this.lazy && this.$img.$observer.remove(this.$el);
          },
          methods: {
            async fetchMeta() {
              if (!0 === this.placeholder || !this.width || !this.height)
                try {
                  const meta = await this.$img.getMeta(
                    this.src,
                    this.computedOperations
                  );
                  Object.assign(this.meta, meta);
                } catch (e) {
                  return this.onError(e), "";
                }
              "string" == typeof this.placeholder &&
                (this.meta.placeholder = this.placeholder);
            },
            generateSizedImage(e, t, n) {
              try {
                const image = this.$img(this.src, {
                  width: e,
                  height: t,
                  format: n,
                  ...this.computedOperations,
                });
                return encodeURI(image.url);
              } catch (e) {
                return this.onError(e), "";
              }
            },
            loadOriginalImage() {
              this.lazyState = K.LOADING;
            },
            renderImgAttributesToString(e = {}) {
              return Object(W.renderAttributesToString)({
                ...this.imgAttributes,
                ...e,
              });
            },
            onError(e) {
              (this.error = e.message), console.error(e.message);
            },
            onImageLoaded() {
              this.lazyState = K.LOADED;
            },
            onObserverEvent(e) {
              "onIntersect" !== e
                ? "onPrint" === e &&
                  (this.$img.$observer.remove(this.$el),
                  (this.lazyState = K.LOADED))
                : this.loadOriginalImage();
            },
          },
        },
        V = {
          name: "NuxtImage",
          mixins: [H],
          computed: {
            generatedSrcset() {
              if (Array.isArray(this.sources) && !(this.sources.length < 2))
                return this.sources
                  .map(({ width: e, url: t }) => (e ? `${t} ${e}w` : t))
                  .join(", ");
            },
            generatedSizes() {
              if (Array.isArray(this.sources) && !(this.sources.length < 2))
                return this.sources
                  .map(({ width: e, media: t }) =>
                    t ? `${t} ${e}px` : `${e}px`
                  )
                  .reverse()
                  .join(", ");
            },
            generatedSrc() {
              return this.sources.length ? this.sources[0].url : this.src;
            },
          },
          render(e) {
            if (this.error)
              return e(
                "div",
                { class: ["__nim_w"].concat(this.$attrs.class || "") },
                [this.error]
              );
            if (!this.lazy && !this.placeholder)
              return e("img", {
                class: "__nim_o",
                attrs: {
                  src: this.generatedSrc,
                  srcset: this.generatedSrcset,
                  sizes: this.generatedSizes,
                  ...this.imgAttributes,
                },
              });
            let t = null;
            this.placeholder &&
              this.meta.placeholder &&
              (t = e("img", {
                class: "__nim_p",
                style: {
                  position: "absolute",
                  left: 0,
                  top: 0,
                  margin: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  filter: "blur(15px)",
                  transform: "scale(1.1)",
                },
                attrs: { src: this.meta.placeholder, "aria-hidden": "true" },
              }));
            const n = e("img", {
              class: "__nim_o",
              style: {
                position: "absolute",
                left: 0,
                top: 0,
                margin: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                transition: "opacity 800ms ease 0ms",
                opacity: 0,
                ...(this.lazyState === K.LOADED ? { opacity: 1 } : {}),
              },
              attrs: {
                src: this.lazyState !== K.IDLE ? this.generatedSrc : void 0,
                srcset:
                  this.lazyState !== K.IDLE ? this.generatedSrcset : void 0,
                sizes: this.lazyState !== K.IDLE ? this.generatedSizes : void 0,
                ...this.imgAttributes,
              },
              on: { load: this.onImageLoaded },
            });
            let r = null;
            this.noScript &&
              (r = e("noscript", {
                domProps: {
                  innerHTML: Object(W.renderTag)("img", {
                    class: "__nim_o",
                    src: this.generatedSrc,
                    srcset: this.generatedSrcset,
                    sizes: this.generatedSizes,
                    ...this.imgAttributes,
                  }),
                },
              }));
            const o = e("div", {
              class: "__nim_r",
              attrs: { "aria-hidden": "true" },
              style: {
                width: "100%",
                paddingBottom: this.imageRatio ? `${this.imageRatio}%` : void 0,
              },
            });
            return e(
              "div",
              {
                class: this.$attrs.class,
                style: { position: "relative", overflow: "hidden" },
                on: { click: (e) => this.$emit("click", e) },
              },
              [t, n, r, o]
            );
          },
        },
        X = {
          name: "NuxtPicture",
          mixins: [H],
          computed: {
            generatedSrc() {
              const [source] = this.sources;
              return source
                ? Object(W.isModernFormat)(source.format) ||
                  Object(W.isModernFormat)(source.url)
                  ? this.generateSizedImage(source.width, source.height, "jpeg")
                  : this.sources[0].url
                : this.src;
            },
          },
          render(e) {
            if (this.error)
              return e(
                "div",
                { class: ["__nim_w"].concat(this.$attrs.class || "") },
                [this.error]
              );
            const t = this.sources
              .map((source) =>
                e("source", {
                  attrs: {
                    srcset: source.url,
                    type: source.format,
                    media: source.media,
                  },
                })
              )
              .reverse();
            if (!this.lazy && !this.placeholder) {
              const n = e("img", {
                class: "__nim_o",
                attrs: { src: this.generatedSrc, ...this.imgAttributes },
              });
              return e("picture", {}, [...t, n]);
            }
            const n = e("img", {
              class: ["__nim_o"],
              style: {
                position: "absolute",
                left: 0,
                top: 0,
                margin: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                transition: "opacity 800ms ease 0ms",
                opacity: 0,
                ...(this.lazyState === K.LOADED ? { opacity: 1 } : {}),
              },
              attrs: {
                src: this.lazyState !== K.IDLE ? this.generatedSrc : void 0,
                ...this.imgAttributes,
              },
              on: { load: this.onImageLoaded },
            });
            let r = null;
            this.placeholder &&
              this.meta.placeholder &&
              (r = e("img", {
                class: "__nim_p",
                style: {
                  position: "absolute",
                  left: 0,
                  top: 0,
                  margin: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  filter: "blur(15px)",
                  transform: "scale(1.1)",
                },
                attrs: { src: this.meta.placeholder, "aria-hidden": "true" },
              }));
            const picture = e("picture", {}, [...t, n]);
            let o = null;
            if (this.noScript) {
              const t = this.sources
                  .map((source) =>
                    Object(W.renderTag)("source", {
                      type: source.type,
                      media: source.media,
                      url: source.url,
                    })
                  )
                  .join(""),
                n = Object(W.renderTag)("img", {
                  class: "__nim_o",
                  src: this.generatedSrc,
                  ...this.imgAttributes,
                });
              o = e("noscript", {
                domProps: {
                  innerHTML: Object(W.renderTag)(
                    "img",
                    { class: "__nim_o" },
                    t + n
                  ),
                },
              });
            }
            const l = e("div", {
              class: "__nim_r",
              attrs: { "aria-hidden": "true" },
              style: {
                paddingBottom: this.imageRatio ? `${this.imageRatio}%` : void 0,
              },
            });
            return e(
              "div",
              {
                class: this.$attrs.class,
                style: { position: "relative", overflow: "hidden" },
              },
              [r, picture, o, l]
            );
          },
        };
      function Z(
        e,
        {
          providers: t,
          defaultProvider: n,
          presets: r,
          intersectOptions: o,
          responsiveSizes: l,
        }
      ) {
        const c = r.reduce((map, e) => ((map[e.name] = e), map), {});
        function d(source, e, r = {}) {
          const { src: o, provider: l, preset: d } = (function (e) {
              if (!e.includes(":") || e.match("^https?://")) return { src: e };
              const [t, ...n] = e.split(":"),
                [r, o] = t.split("+");
              return { src: n.join(":"), provider: r, preset: o };
            })(source),
            f = (function (e) {
              const n = t[e];
              if (!n) throw new Error("Unsupported provider " + e);
              return n;
            })(l || r.provider || n),
            h = (function (e) {
              if (!e) return !1;
              if (!c[e]) throw new Error("Unsupported preset " + e);
              return c[e];
            })(d || r.preset),
            image = f.provider.getImage(o, h ? h.modifiers : e, {
              ...f.defaults,
              ...r,
            });
          return { src: o, provider: f, preset: h, image: image };
        }
        function image(source, t, n = {}) {
          const { src: r, image: image } = d(source, t, n),
            { url: o, isStatic: l } = image;
          if (
            "undefined" != typeof window &&
            void 0 !== window.$nuxt._pagePayload
          ) {
            const e = window.$nuxt._pagePayload.data[0];
            return (
              e.nuxtImageMap[o]
                ? (image.url = e.nuxtImageMap[o])
                : image.isStatic && (image.url = r),
              image
            );
          }
          if (
            !e.isDev &&
            "undefined" != typeof window &&
            e.isStatic &&
            image.isStatic
          )
            return (image.url = r), image;
          const c = e.nuxtState || e.ssrContext.nuxt;
          (c.data && c.data.length) || (c.data = [{}]);
          const data = c.data[0];
          data.nuxtImageMap = data.nuxtImageMap || {};
          const f = o;
          if (data.nuxtImageMap[f]) image.url = data.nuxtImageMap[f];
          else if (e.ssrContext && "function" == typeof e.ssrContext.mapImage) {
            const n = e.ssrContext.mapImage({
              url: f,
              isStatic: l,
              format: t.format,
              src: r,
            });
            n && (image.url = data.nuxtImageMap[o] = n);
          }
          return image;
        }
        return (
          r.forEach((e) => {
            image[e.name] = (t) =>
              image(t, e.modifiers, { provider: e.provider });
          }),
          (image.sizes = (e, t, n = {}) => (
            "string" == typeof t &&
              (t = t
                .split(",")
                .map((e) => e.match(/((\d+):)?(\d+)\s*(\((\w+)\))?/))
                .filter((e) => !!e)
                .map((e, t) => ({
                  width: parseInt(e[3], 10),
                  breakpoint: parseInt(e[2] || (t > 0 && e[3]), 10),
                  format: e[5] || n.format,
                }))),
            Array.isArray(t) ||
              (t =
                !0 === t
                  ? l.map((e) => ({
                      width: e,
                      breakpoint: e,
                      format: n.format,
                    }))
                  : [{}]),
            (t = t.map((t) => {
              t.format || (t.format = n.format),
                t.media ||
                  (t.media = t.breakpoint
                    ? `(min-width: ${t.breakpoint}px)`
                    : "");
              const { url: r } = image(e, {
                ...n,
                width: t.width,
                format: t.format,
              });
              return (t.url = r), t;
            }))
          )),
          (image.getMeta = async (source, t, n = {}) => {
            const { image: image } = d(source, { ...t, width: 30 }, n),
              meta = { placeholder: image.url };
            if ("function" == typeof image.getMeta)
              Object.assign(meta, await image.getMeta());
            else {
              const t = e.ssrContext ? e.ssrContext.internalUrl : "",
                n =
                  "/" === image.url[0]
                    ? Object(W.cleanDoubleSlashes)(t + image.url)
                    : image.url;
              Object.assign(
                meta,
                await (async function (e, t) {
                  const n = "image:meta:" + e;
                  if (t.has(n)) return t.get(n);
                  if ("undefined" == typeof Image)
                    throw new TypeError("Image not supported");
                  return new Promise((r, o) => {
                    const img = new Image();
                    (img.onload = () => {
                      const meta = {
                        width: img.width,
                        height: img.height,
                        placeholder: e,
                      };
                      t.set(n, meta), r(meta);
                    }),
                      (img.onerror = (e) => o(e)),
                      (img.src = e);
                  });
                })(
                  n,
                  (function (e) {
                    if (!e.cache)
                      if (e.ssrContext && e.ssrContext.cache)
                        e.cache = e.ssrContext.cache;
                      else {
                        const t = {};
                        e.cache = {
                          get: (e) => t[e],
                          set: (e, n) => {
                            t[e] = n;
                          },
                          has: (e) => void 0 !== t[e],
                        };
                      }
                    return e.cache;
                  })(e)
                )
              );
            }
            return meta;
          }),
          (image.$observer = (function (e) {
            const t = { intersect: "onIntersect", print: "onPrint" },
              n = {};
            function r(e, r) {
              e.forEach((e) => {
                if (e.isIntersecting) {
                  const o = e.target,
                    l = n[o.__unique];
                  "function" == typeof l && l(t.intersect),
                    delete n[o.__unique],
                    r.unobserve(o);
                }
              });
            }
            !(function (e) {
              if ("undefined" == typeof window || void 0 === window.matchMedia)
                return;
              window.matchMedia("print").addListener((t) => {
                t.matches && e();
              });
            })(() => {
              Object.values(n).forEach((e) => e(t.print));
            });
            const o =
              ((l = r),
              (c = e),
              "undefined" != typeof IntersectionObserver
                ? new IntersectionObserver(l, { rootMargin: "50px", ...c })
                : {});
            var l, c;
            return {
              add(e, component, t) {
                (e.__unique = t || e.id || e.__vue__._uid),
                  (n[e.__unique] = component),
                  o.observe(e);
              },
              remove(e) {
                delete n[e.__unique], o.unobserve(e);
              },
            };
          })(o)),
          image
        );
      }
      var Y = n(179),
        J = n.n(Y),
        G = {},
        Q = [320, 420, 768, 1024, 1200],
        ee = [],
        te = {};
      (te.ipx = {
        provider: J.a,
        defaults: { baseURL: "http://localhost:3000/" },
      }),
        l.a.component(V.name, V),
        l.a.component(X.name, X),
        l.a.component("NuxtImg", V),
        l.a.component("NImg", V),
        l.a.component("NPicture", X);
      var ne = function (e, t) {
          t(
            "img",
            Z(e, {
              defaultProvider: "ipx",
              providers: te,
              presets: ee,
              intersectOptions: G,
              responsiveSizes: Q,
            })
          );
        },
        re = n(67),
        oe = n(120),
        ae = function () {
          return n.e(33).then(n.bind(null, 543));
        };
      l.a.component(oe.a.name, oe.a);
      var ie = function (e, t) {
          var n = null,
            o = (e.$config ? e.$config.content : e.nuxtState.content).dbHash,
            l = function () {
              for (
                var e = arguments.length, t = new Array(e), l = 0;
                l < e;
                l++
              )
                t[l] = arguments[l];
              if (n) return n.apply(void 0, t);
              for (
                var c = [
                    "only",
                    "without",
                    "sortBy",
                    "limit",
                    "skip",
                    "where",
                    "search",
                    "surround",
                  ],
                  d = {},
                  f = [],
                  h = function () {
                    var e = m[_];
                    d[e] = function () {
                      for (
                        var t = arguments.length, n = new Array(t), r = 0;
                        r < t;
                        r++
                      )
                        n[r] = arguments[r];
                      return f.push({ key: e, args: n }), d;
                    };
                  },
                  _ = 0,
                  m = c;
                _ < m.length;
                _++
              )
                h();
              return (
                (d.fetch = Object(r.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, l;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch(
                                "/_nuxt/content/db-".concat(o, ".json")
                              ).then(function (e) {
                                return e.json();
                              })
                            );
                          case 2:
                            return (r = e.sent), (e.next = 5), ae();
                          case 5:
                            return (
                              (n = e.sent.default(r)),
                              (l = n.apply(void 0, t)),
                              f.forEach(function (e) {
                                var t,
                                  n = e.key,
                                  r = e.args;
                                l = (t = l)[n].apply(t, Object(re.a)(r));
                              }),
                              e.abrupt("return", l.fetch())
                            );
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                d
              );
            };
          t("content", l), (e.$content = l);
        },
        se = (n(180), n(121)),
        le = n.n(se),
        ue = n(19);
      n(127);
      function ce(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return de(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return de(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          l = !0,
          c = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (c = !0), (o = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          },
        };
      }
      function de(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      function pe(e, t, n) {
        return e.find(function (e) {
          return n ? e[t] === n : e[t];
        });
      }
      var fe = n(181),
        he = function (e) {
          !(function (e, t) {
            if ("function" != typeof e)
              for (var n in t) {
                var r = t[n];
                if (Array.isArray(r)) {
                  e[n] = e[n] || [];
                  var o,
                    l = ce(r);
                  try {
                    for (l.s(); !(o = l.n()).done; ) {
                      var c = o.value;
                      (c.hid && pe(e[n], "hid", c.hid)) ||
                        (c.name && pe(e[n], "name", c.name)) ||
                        e[n].push(c);
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                } else if ("object" === Object(ue.a)(r))
                  for (var d in ((e[n] = e[n] || {}), r)) e[n][d] = r[d];
                else void 0 === e[n] && (e[n] = r);
              }
            else
              console.warn(
                "Cannot merge meta. Avoid using head as a function!"
              );
          })(e.app.head, fe);
        },
        _e = function (e, t) {
          return ge.apply(this, arguments);
        };
      function ge() {
        return (ge = Object(r.a)(
          regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (r = {
                      "64x64": "/_nuxt/icons/icon_64x64.ecd1ba.png",
                      "120x120": "/_nuxt/icons/icon_120x120.ecd1ba.png",
                      "144x144": "/_nuxt/icons/icon_144x144.ecd1ba.png",
                      "152x152": "/_nuxt/icons/icon_152x152.ecd1ba.png",
                      "192x192": "/_nuxt/icons/icon_192x192.ecd1ba.png",
                      "384x384": "/_nuxt/icons/icon_384x384.ecd1ba.png",
                      "512x512": "/_nuxt/icons/icon_512x512.ecd1ba.png",
                      ipad_1536x2048:
                        "/_nuxt/icons/splash_ipad_1536x2048.ecd1ba.png",
                      ipadpro9_1536x2048:
                        "/_nuxt/icons/splash_ipadpro9_1536x2048.ecd1ba.png",
                      ipadpro10_1668x2224:
                        "/_nuxt/icons/splash_ipadpro10_1668x2224.ecd1ba.png",
                      ipadpro12_2048x2732:
                        "/_nuxt/icons/splash_ipadpro12_2048x2732.ecd1ba.png",
                      iphonese_640x1136:
                        "/_nuxt/icons/splash_iphonese_640x1136.ecd1ba.png",
                      iphone6_50x1334:
                        "/_nuxt/icons/splash_iphone6_50x1334.ecd1ba.png",
                      iphoneplus_1080x1920:
                        "/_nuxt/icons/splash_iphoneplus_1080x1920.ecd1ba.png",
                      iphonex_1125x2436:
                        "/_nuxt/icons/splash_iphonex_1125x2436.ecd1ba.png",
                      iphonexr_828x1792:
                        "/_nuxt/icons/splash_iphonexr_828x1792.ecd1ba.png",
                      iphonexsmax_1242x2688:
                        "/_nuxt/icons/splash_iphonexsmax_1242x2688.ecd1ba.png",
                    }),
                      n("icon", function (e) {
                        return r[e + "x" + e] || "";
                      });
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var me = n(122),
        ve = n(123),
        ye = n(124);
      function be(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function xe(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? be(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : be(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      l.a.component(f.a.name, f.a),
        l.a.component(
          _.a.name,
          xe(
            xe({}, _.a),
            {},
            {
              render: function (e, t) {
                return (
                  _.a._warned ||
                    ((_.a._warned = !0),
                    console.warn(
                      "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                    )),
                  _.a.render(e, t)
                );
              },
            }
          )
        ),
        l.a.component(P.name, P),
        l.a.component("NChild", P),
        l.a.component($.name, $),
        Object.defineProperty(l.a.prototype, "$nuxt", {
          get: function () {
            var e = this.$root.$options.$nuxt;
            return e || "undefined" == typeof window ? e : window.$nuxt;
          },
          configurable: !0,
        }),
        l.a.use(c.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid",
        });
      var we = {
        name: "page",
        mode: "out-in",
        appear: !1,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to",
      };
      function Oe(e) {
        return ke.apply(this, arguments);
      }
      function ke() {
        return (ke = Object(r.a)(
          regeneratorRuntime.mark(function e(t) {
            var n,
              o,
              c,
              d,
              f,
              path,
              h,
              _ = arguments;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (h = function (e, t) {
                        if (!e)
                          throw new Error(
                            "inject(key, value) has no key provided"
                          );
                        if (void 0 === t)
                          throw new Error(
                            "inject('".concat(
                              e,
                              "', value) has no value provided"
                            )
                          );
                        (c[(e = "$" + e)] = t),
                          c.context[e] || (c.context[e] = t);
                        var n = "__nuxt_" + e + "_installed__";
                        l.a[n] ||
                          ((l.a[n] = !0),
                          l.a.use(function () {
                            Object.prototype.hasOwnProperty.call(
                              l.a.prototype,
                              e
                            ) ||
                              Object.defineProperty(l.a.prototype, e, {
                                get: function () {
                                  return this.$root.$options[e];
                                },
                              });
                          }));
                      }),
                      (n = _.length > 1 && void 0 !== _[1] ? _[1] : {}),
                      (e.next = 4),
                      j(0, n)
                    );
                  case 4:
                    return (
                      (o = e.sent),
                      (c = xe(
                        {
                          head: {
                            htmlAttrs: { lang: "en" },
                            title: "Connor Rothschild",
                            meta: [
                              { charset: "utf-8" },
                              {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1",
                              },
                              {
                                hid: "description",
                                name: "description",
                                content:
                                  "Connor Rothschild is a data scientist, web developer, and designer based in Houston Texas.",
                              },
                              {
                                hid: "og:type",
                                property: "og:type",
                                content: "website",
                              },
                              {
                                hid: "og:url",
                                property: "og:url",
                                content: "https://v3.connorrothschild.com",
                              },
                              {
                                hid: "og:title",
                                property: "og:title",
                                content: "Connor Rothschild",
                              },
                              {
                                hid: "og:description",
                                property: "og:description",
                                content:
                                  "Connor Rothschild is a data scientist, web developer, and designer based in Houston Texas.",
                              },
                              {
                                hid: "og:image",
                                property: "og:image",
                                content:
                                  "https://v3.connorrothschild.com/social.png",
                              },
                              {
                                hid: "twitter:url",
                                name: "twitter:url",
                                content: "https://v3.connorrothschild.com",
                              },
                              {
                                hid: "twitter:title",
                                name: "twitter:title",
                                content: "Connor Rothschild",
                              },
                              {
                                hid: "twitter:description",
                                name: "twitter:description",
                                content:
                                  "Connor Rothschild is a data scientist, web developer, and designer based in Houston Texas.",
                              },
                              {
                                hid: "twitter:image",
                                name: "twitter:image",
                                content:
                                  "https://v3.connorrothschild.com/social.png",
                              },
                              {
                                hid: "twitter:site",
                                name: "twitter:site",
                                content: "@CL_Rothschild",
                              },
                              {
                                hid: "twitter:card",
                                name: "twitter:card",
                                content: "summary_large_image",
                              },
                            ],
                            link: [
                              {
                                rel: "icon",
                                type: "image/x-icon",
                                href: "/favicon.png",
                              },
                            ],
                            style: [],
                            script: [],
                          },
                          router: o,
                          nuxt: {
                            defaultTransition: we,
                            transitions: [we],
                            setTransitions: function (e) {
                              return (
                                Array.isArray(e) || (e = [e]),
                                (e = e.map(function (e) {
                                  return (e = e
                                    ? "string" == typeof e
                                      ? Object.assign({}, we, { name: e })
                                      : Object.assign({}, we, e)
                                    : we);
                                })),
                                (this.$options.nuxt.transitions = e),
                                e
                              );
                            },
                            err: null,
                            dateErr: null,
                            error: function (e) {
                              (e = e || null),
                                (c.context._errored = Boolean(e)),
                                (e = e ? Object(y.p)(e) : null);
                              var n = c.nuxt;
                              return (
                                this && (n = this.nuxt || this.$options.nuxt),
                                (n.dateErr = Date.now()),
                                (n.err = e),
                                t && (t.nuxt.error = e),
                                e
                              );
                            },
                          },
                        },
                        U
                      )),
                      (d = t
                        ? t.next
                        : function (e) {
                            return c.router.push(e);
                          }),
                      t
                        ? (f = o.resolve(t.url).route)
                        : ((path = Object(y.g)(o.options.base, o.options.mode)),
                          (f = o.resolve(path).route)),
                      (e.next = 10),
                      Object(y.t)(c, {
                        route: f,
                        next: d,
                        error: c.nuxt.error.bind(c),
                        payload: t ? t.payload : void 0,
                        req: t ? t.req : void 0,
                        res: t ? t.res : void 0,
                        beforeRenderFns: t ? t.beforeRenderFns : void 0,
                        ssrContext: t,
                      })
                    );
                  case 10:
                    h("config", n),
                      (c.context.enablePreview = function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        (c.previewData = Object.assign({}, e)), h("preview", e);
                      }),
                      (e.next = 15);
                    break;
                  case 15:
                    return (e.next = 18), ne(c.context, h);
                  case 18:
                    return (e.next = 21), ie(c.context, h);
                  case 21:
                    e.next = 24;
                    break;
                  case 24:
                    if ("function" != typeof le.a) {
                      e.next = 27;
                      break;
                    }
                    return (e.next = 27), le()(c.context, h);
                  case 27:
                    return (e.next = 30), he(c.context);
                  case 30:
                    return (e.next = 33), _e(c.context, h);
                  case 33:
                    if ("function" != typeof me.default) {
                      e.next = 36;
                      break;
                    }
                    return (e.next = 36), Object(me.default)(c.context, h);
                  case 36:
                    if ("function" != typeof ve.default) {
                      e.next = 39;
                      break;
                    }
                    return (e.next = 39), Object(ve.default)(c.context, h);
                  case 39:
                    if ("function" != typeof ye.default) {
                      e.next = 42;
                      break;
                    }
                    return (e.next = 42), Object(ye.default)(c.context, h);
                  case 42:
                    return (
                      (c.context.enablePreview = function () {
                        console.warn(
                          "You cannot call enablePreview() outside a plugin."
                        );
                      }),
                      (e.next = 45),
                      new Promise(function (e, t) {
                        o.push(c.context.route.fullPath, e, function (n) {
                          if (!n._isRouter) return t(n);
                          if (2 !== n.type) return e();
                          var l = o.afterEach(
                            (function () {
                              var t = Object(r.a)(
                                regeneratorRuntime.mark(function t(n, r) {
                                  return regeneratorRuntime.wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (t.next = 3), Object(y.k)(n);
                                        case 3:
                                          (c.context.route = t.sent),
                                            (c.context.params = n.params || {}),
                                            (c.context.query = n.query || {}),
                                            l(),
                                            e();
                                        case 8:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function (e, n) {
                                return t.apply(this, arguments);
                              };
                            })()
                          );
                        });
                      })
                    );
                  case 45:
                    return e.abrupt("return", { app: c, router: o });
                  case 46:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
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
    function (e, t, n) {
      "use strict";
      var r = n(116),
        o = n(166),
        l = n(168);
      e.exports = function (e) {
        var t,
          n,
          c = e.space,
          d = e.mustUseProperty || [],
          f = e.attributes || {},
          h = e.properties,
          _ = e.transform,
          m = {},
          v = {};
        for (t in h)
          (n = new l(t, _(f, t), h[t], c)),
            -1 !== d.indexOf(t) && (n.mustUseProperty = !0),
            (m[t] = n),
            (v[r(t)] = t),
            (v[r(n.attribute)] = t);
        return new o(m, v, c);
      };
    },
    function (e, t, n) {
      "use strict";
      var r = {
        name: "NoSsr",
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: "div" },
        },
        render: function (e, t) {
          var n = t.parent,
            r = t.slots,
            o = t.props,
            l = r(),
            c = l.default;
          void 0 === c && (c = []);
          var d = l.placeholder;
          return n._isMounted
            ? c
            : (n.$once("hook:mounted", function () {
                n.$forceUpdate();
              }),
              o.placeholderTag && (o.placeholder || d)
                ? e(
                    o.placeholderTag,
                    { class: ["no-ssr-placeholder"] },
                    o.placeholder || d
                  )
                : c.length > 0
                ? c.map(function () {
                    return e(!1);
                  })
                : e(!1));
        },
      };
      e.exports = r;
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
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      var r = 0;
      function o() {
        return Math.pow(2, ++r);
      }
      (t.boolean = o()),
        (t.booleanish = o()),
        (t.overloadedBoolean = o()),
        (t.number = o()),
        (t.spaceSeparated = o()),
        (t.commaSeparated = o()),
        (t.commaOrSpaceSeparated = o());
    },
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n(61),
        n(32),
        n(44),
        n(42),
        n(46),
        n(55),
        n(8),
        n(39),
        n(16),
        n(38),
        n(14),
        n(26),
        n(37),
        n(41),
        n(21);
      var r = n(0);
      function o(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return l(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return l(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          d = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (c = e.done), e;
          },
          e: function (e) {
            (d = !0), (o = e);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (d) throw o;
            }
          },
        };
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      var c =
          window.requestIdleCallback ||
          function (e) {
            var t = Date.now();
            return setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        d =
          window.cancelIdleCallback ||
          function (e) {
            clearTimeout(e);
          },
        f =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function (e) {
            e.forEach(function (e) {
              var t = e.intersectionRatio,
                link = e.target;
              t <= 0 || !link.__prefetch || link.__prefetch();
            });
          });
      t.a = {
        name: "NuxtLink",
        extends: r.a.component("RouterLink"),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 },
        },
        mounted: function () {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = c(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy: function () {
          d(this.handleId),
            this.__observed &&
              (f.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function () {
            f &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              f.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch: function () {
            var e = this.$router.resolve(this.to, this.$route, this.append);
            return e.resolved.matched
              .map(function (e) {
                return e.components.default;
              })
              .filter(function (t) {
                return (
                  e.href ||
                  ("function" == typeof t && !t.options && !t.__prefetched)
                );
              }).length;
          },
          canPrefetch: function () {
            var e = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (e && ((e.effectiveType || "").includes("2g") || e.saveData))
            );
          },
          getPrefetchComponents: function () {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function (e) {
                return e.components.default;
              })
              .filter(function (e) {
                return "function" == typeof e && !e.options && !e.__prefetched;
              });
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              f.unobserve(this.$el);
              var e,
                t = o(this.getPrefetchComponents());
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var n = e.value,
                    r = n();
                  r instanceof Promise && r.catch(function () {}),
                    (n.__prefetched = !0);
                }
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
              if (!this.$root.isPreview) {
                var l = this.$router.resolve(this.to, this.$route, this.append)
                  .href;
                this.$nuxt &&
                  this.$nuxt.fetchPayload(l, !0).catch(function () {});
              }
            }
          },
        },
      };
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
    function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return e.toLowerCase();
      };
    },
    function (e, t, n) {
      "use strict";
      t.a = {};
    },
    function (e, t, n) {
      "use strict";
      var r = {
        name: "ClientOnly",
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: "div" },
        },
        render: function (e, t) {
          var n = t.parent,
            r = t.slots,
            o = t.props,
            l = r(),
            c = l.default;
          void 0 === c && (c = []);
          var d = l.placeholder;
          return n._isMounted
            ? c
            : (n.$once("hook:mounted", function () {
                n.$forceUpdate();
              }),
              o.placeholderTag && (o.placeholder || d)
                ? e(
                    o.placeholderTag,
                    { class: ["client-only-placeholder"] },
                    o.placeholder || d
                  )
                : c.length > 0
                ? c.map(function () {
                    return e(!1);
                  })
                : e(!1));
        },
      };
      e.exports = r;
    },
    ,
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          39
        ),
        core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__
        ),
        core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          8
        ),
        core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__
        ),
        core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          16
        ),
        core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__
        ),
        core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          38
        ),
        core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__
        ),
        core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          14
        ),
        core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__
        ),
        core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          26
        ),
        core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__
        ),
        core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          37
        ),
        core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__
        ),
        core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          41
        ),
        core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__
        ),
        core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          21
        ),
        core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__
        ),
        core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          62
        ),
        core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
          core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__
        ),
        core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          63
        ),
        core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10__
        ),
        _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          25
        ),
        _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          19
        ),
        _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          67
        ),
        core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          43
        ),
        core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(
          core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__
        ),
        core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          53
        ),
        core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(
          core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__
        ),
        core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          66
        ),
        core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(
          core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16__
        ),
        core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          46
        ),
        core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(
          core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17__
        ),
        core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          127
        ),
        core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(
          core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_18__
        ),
        core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          89
        ),
        core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_19___default = __webpack_require__.n(
          core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_19__
        ),
        core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          32
        ),
        core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = __webpack_require__.n(
          core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__
        ),
        core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          44
        ),
        core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_21___default = __webpack_require__.n(
          core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_21__
        ),
        core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          115
        ),
        core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_22___default = __webpack_require__.n(
          core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_22__
        ),
        core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          126
        ),
        core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_23___default = __webpack_require__.n(
          core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_23__
        ),
        core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          42
        ),
        core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_24___default = __webpack_require__.n(
          core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_24__
        ),
        core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          65
        ),
        core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_25___default = __webpack_require__.n(
          core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_25__
        );
      function ownKeys(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function _objectSpread(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (t) {
                Object(
                  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__.a
                )(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      function _createForOfIteratorHelper(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = _unsupportedIterableToArray(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          l = !0,
          c = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (c = !0), (o = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          },
        };
      }
      function _unsupportedIterableToArray(e, t) {
        if (e) {
          if ("string" == typeof e) return _arrayLikeToArray(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(e, t)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      var info = __webpack_require__(227),
        rootKeys = ["class-name", "class", "style"];
      function propsToData(props, doc) {
        return Object.keys(props).reduce(
          function (data, key) {
            var k = key.replace(/.*:/, ""),
              obj = rootKeys.includes(k) ? data : data.attrs,
              value = props[key],
              _info$find = info.find(info.html, key),
              attribute = _info$find.attribute;
            if ("v-bind" === key) {
              var val = doc[value];
              val || (val = eval("(".concat(value, ")"))),
                (obj = Object.assign(obj, val));
            } else
              0 === key.indexOf(":") || 0 === key.indexOf("v-bind:")
                ? ((key = key.replace("v-bind:", "").replace(":", "")),
                  doc[value]
                    ? (obj[key] = doc[value])
                    : (obj[key] = eval("(".concat(value, ")"))))
                : Array.isArray(value)
                ? (obj[attribute] = value.join(" "))
                : (obj[attribute] = value);
            return data;
          },
          { attrs: {} }
        );
      }
      function slotsToData(e, t, n) {
        var data = {};
        return (
          (e.children || []).forEach(function (e) {
            if (isTemplate(e) && !isDefaultTemplate(e)) {
              data.scopedSlots = data.scopedSlots || {};
              var template = e,
                r = getSlotName(template),
                o = template.content.map(function (e) {
                  return processNode(e, t, n);
                });
              data.scopedSlots[r] = function () {
                return o;
              };
            }
          }),
          data
        );
      }
      function processNode(e, t, n) {
        if ("text" === e.type) return e.value;
        var r,
          o = slotsToData(e || {}, t, n),
          l = propsToData(e.props, n),
          data = Object.assign({}, o, l),
          c = [],
          d = _createForOfIteratorHelper(e.children);
        try {
          for (d.s(); !(r = d.n()).done; ) {
            var f = r.value;
            if (!isTemplate(f) || isDefaultTemplate(f)) {
              var h = isDefaultTemplate(f) ? f.content : [f];
              c.push.apply(
                c,
                Object(
                  _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__.a
                )(
                  h.map(function (e) {
                    return processNode(e, t, n);
                  })
                )
              );
            }
          }
        } catch (e) {
          d.e(e);
        } finally {
          d.f();
        }
        return t(e.tag, data, c);
      }
      var DEFAULT_SLOT = "default";
      function isDefaultTemplate(e) {
        return isTemplate(e) && getSlotName(e) === DEFAULT_SLOT;
      }
      function isTemplate(e) {
        return "template" === e.tag;
      }
      function getSlotName(e) {
        for (var t = "", n = 0, r = Object.keys(e.props); n < r.length; n++) {
          var o = r[n];
          if (o.startsWith("#") || o.startsWith("v-slot:")) {
            t = o.split(/[:#]/, 2)[1];
            break;
          }
        }
        return t || DEFAULT_SLOT;
      }
      __webpack_exports__.a = {
        name: "NuxtContent",
        functional: !0,
        props: { document: { required: !0 } },
        render: function (e, t) {
          var data = t.data,
            n = t.props.document,
            body = (n || {}).body;
          if (body && body.children && Array.isArray(body.children)) {
            var r = [];
            if (Array.isArray(data.class)) r = data.class;
            else if (
              "object" ===
              Object(
                _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_12__.a
              )(data.class)
            ) {
              r = Object.keys(data.class).filter(function (e) {
                return data.class[e];
              });
            } else r = [data.class];
            return (
              (data.class = r.concat("nuxt-content")),
              (data.props = Object.assign(
                _objectSpread({}, body.props),
                data.props
              )),
              e(
                "div",
                data,
                body.children.map(function (t) {
                  return processNode(t, e, n);
                })
              )
            );
          }
        },
      };
    },
    function (e, t, n) {
      var r = n(188);
      function o() {
        return (o = r(
          regeneratorRuntime.mark(function e() {
            var t, r, o;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!(!1 in navigator)) {
                      e.next = 2;
                      break;
                    }
                    throw new Error(
                      "serviceWorker is not supported in current browser!"
                    );
                  case 2:
                    return (e.next = 4), n.e(34).then(n.bind(null, 240));
                  case 4:
                    return (
                      (t = e.sent),
                      (r = t.Workbox),
                      (o = new r("/sw.js", { scope: "/" })),
                      (e.next = 9),
                      o.register()
                    );
                  case 9:
                    return e.abrupt("return", o);
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      n(31),
        n(8),
        n(14),
        n(21),
        (window.$workbox = (function () {
          return o.apply(this, arguments);
        })().catch(function (e) {}));
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
    function (e, t, n) {},
    function (e, t, n) {},
    ,
    function (e, t, n) {
      "use strict";
      var r = n(229),
        o = n(166);
      e.exports = function (e) {
        var t,
          n,
          l = e.length,
          c = [],
          d = [],
          f = -1;
        for (; ++f < l; )
          (t = e[f]), c.push(t.property), d.push(t.normal), (n = t.space);
        return new o(r.apply(null, c), r.apply(null, d), n);
      };
    },
    function (e, t, n) {
      "use strict";
      e.exports = o;
      var r = o.prototype;
      function o(e, t, n) {
        (this.property = e), (this.normal = t), n && (this.space = n);
      }
      (r.space = null), (r.normal = {}), (r.property = {});
    },
    function (e, t, n) {
      "use strict";
      var r = n(51);
      e.exports = r({
        space: "xlink",
        transform: function (e, t) {
          return "xlink:" + t.slice(5).toLowerCase();
        },
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });
    },
    function (e, t, n) {
      "use strict";
      var r = n(169),
        o = n(81);
      (e.exports = d), (d.prototype = new r()), (d.prototype.defined = !0);
      var l = [
          "boolean",
          "booleanish",
          "overloadedBoolean",
          "number",
          "commaSeparated",
          "spaceSeparated",
          "commaOrSpaceSeparated",
        ],
        c = l.length;
      function d(e, t, mask, n) {
        var d,
          f = -1;
        for (mark(this, "space", n), r.call(this, e, t); ++f < c; )
          mark(this, (d = l[f]), (mask & o[d]) === o[d]);
      }
      function mark(e, t, n) {
        n && (e[t] = n);
      }
    },
    function (e, t, n) {
      "use strict";
      e.exports = o;
      var r = o.prototype;
      function o(e, t) {
        (this.property = e), (this.attribute = t);
      }
      (r.space = null),
        (r.attribute = null),
        (r.property = null),
        (r.boolean = !1),
        (r.booleanish = !1),
        (r.overloadedBoolean = !1),
        (r.number = !1),
        (r.commaSeparated = !1),
        (r.spaceSeparated = !1),
        (r.commaOrSpaceSeparated = !1),
        (r.mustUseProperty = !1),
        (r.defined = !1);
    },
    function (e, t, n) {
      "use strict";
      var r = n(51);
      e.exports = r({
        space: "xml",
        transform: function (e, t) {
          return "xml:" + t.slice(3).toLowerCase();
        },
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
      });
    },
    function (e, t, n) {
      "use strict";
      var r = n(51),
        o = n(172);
      e.exports = r({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: o,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
    function (e, t, n) {
      "use strict";
      var r = n(173);
      e.exports = function (e, t) {
        return r(e, t.toLowerCase());
      };
    },
    function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        return t in e ? e[t] : t;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(81),
        o = n(51),
        l = r.booleanish,
        c = r.number,
        d = r.spaceSeparated;
      e.exports = o({
        transform: function (e, t) {
          return "role" === t ? t : "aria-" + t.slice(4).toLowerCase();
        },
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: l,
          ariaAutoComplete: null,
          ariaBusy: l,
          ariaChecked: l,
          ariaColCount: c,
          ariaColIndex: c,
          ariaColSpan: c,
          ariaControls: d,
          ariaCurrent: null,
          ariaDescribedBy: d,
          ariaDetails: null,
          ariaDisabled: l,
          ariaDropEffect: d,
          ariaErrorMessage: null,
          ariaExpanded: l,
          ariaFlowTo: d,
          ariaGrabbed: l,
          ariaHasPopup: null,
          ariaHidden: l,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: d,
          ariaLevel: c,
          ariaLive: null,
          ariaModal: l,
          ariaMultiLine: l,
          ariaMultiSelectable: l,
          ariaOrientation: null,
          ariaOwns: d,
          ariaPlaceholder: null,
          ariaPosInSet: c,
          ariaPressed: l,
          ariaReadOnly: l,
          ariaRelevant: null,
          ariaRequired: l,
          ariaRoleDescription: d,
          ariaRowCount: c,
          ariaRowIndex: c,
          ariaRowSpan: c,
          ariaSelected: l,
          ariaSetSize: c,
          ariaSort: null,
          ariaValueMax: c,
          ariaValueMin: c,
          ariaValueNow: c,
          ariaValueText: null,
          role: null,
        },
      });
    },
    function (e, t, n) {
      "use strict";
      t.a = function (e, t) {
        return (
          (t = t || {}),
          new Promise(function (n, r) {
            var s = new XMLHttpRequest(),
              o = [],
              u = [],
              i = {},
              a = function () {
                return {
                  ok: 2 == ((s.status / 100) | 0),
                  statusText: s.statusText,
                  status: s.status,
                  url: s.responseURL,
                  text: function () {
                    return Promise.resolve(s.responseText);
                  },
                  json: function () {
                    return Promise.resolve(s.responseText).then(JSON.parse);
                  },
                  blob: function () {
                    return Promise.resolve(new Blob([s.response]));
                  },
                  clone: a,
                  headers: {
                    keys: function () {
                      return o;
                    },
                    entries: function () {
                      return u;
                    },
                    get: function (e) {
                      return i[e.toLowerCase()];
                    },
                    has: function (e) {
                      return e.toLowerCase() in i;
                    },
                  },
                };
              };
            for (var l in (s.open(t.method || "get", e, !0),
            (s.onload = function () {
              s
                .getAllResponseHeaders()
                .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, t, n) {
                  o.push((t = t.toLowerCase())),
                    u.push([t, n]),
                    (i[t] = i[t] ? i[t] + "," + n : n);
                }),
                n(a());
            }),
            (s.onerror = r),
            (s.withCredentials = "include" == t.credentials),
            t.headers))
              s.setRequestHeader(l, t.headers[l]);
            s.send(t.body || null);
          })
        );
      };
    },
    ,
    function (e, t, n) {
      "use strict";
      var r = function (e) {
        return (
          (function (e) {
            return !!e && "object" == typeof e;
          })(e) &&
          !(function (e) {
            var t = Object.prototype.toString.call(e);
            return (
              "[object RegExp]" === t ||
              "[object Date]" === t ||
              (function (e) {
                return e.$$typeof === o;
              })(e)
            );
          })(e)
        );
      };
      var o =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function l(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? _(((n = e), Array.isArray(n) ? [] : {}), e, t)
          : e;
        var n;
      }
      function c(e, source, t) {
        return e.concat(source).map(function (element) {
          return l(element, t);
        });
      }
      function d(e) {
        return Object.keys(e).concat(
          (function (e) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function (symbol) {
                  return e.propertyIsEnumerable(symbol);
                })
              : [];
          })(e)
        );
      }
      function f(object, e) {
        try {
          return e in object;
        } catch (e) {
          return !1;
        }
      }
      function h(e, source, t) {
        var n = {};
        return (
          t.isMergeableObject(e) &&
            d(e).forEach(function (r) {
              n[r] = l(e[r], t);
            }),
          d(source).forEach(function (r) {
            (function (e, t) {
              return (
                f(e, t) &&
                !(
                  Object.hasOwnProperty.call(e, t) &&
                  Object.propertyIsEnumerable.call(e, t)
                )
              );
            })(e, r) ||
              (f(e, r) && t.isMergeableObject(source[r])
                ? (n[r] = (function (e, t) {
                    if (!t.customMerge) return _;
                    var n = t.customMerge(e);
                    return "function" == typeof n ? n : _;
                  })(r, t)(e[r], source[r], t))
                : (n[r] = l(source[r], t)));
          }),
          n
        );
      }
      function _(e, source, t) {
        ((t = t || {}).arrayMerge = t.arrayMerge || c),
          (t.isMergeableObject = t.isMergeableObject || r),
          (t.cloneUnlessOtherwiseSpecified = l);
        var n = Array.isArray(source);
        return n === Array.isArray(e)
          ? n
            ? t.arrayMerge(e, source, t)
            : h(e, source, t)
          : l(source, t);
      }
      _.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, n) {
          return _(e, n, t);
        }, {});
      };
      var m = _;
      e.exports = m;
    },
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n(13);
      t.default = {
        getImage(e, t, n) {
          const o = [],
            l = t.fit ? `_${t.fit}` : "";
          t.width && t.height
            ? o.push(`s_${t.width}_${t.height}${l}`)
            : t.width
            ? o.push(`w_${t.width}${l}`)
            : t.height && o.push(`h_${t.height}${l}`);
          const c = (function (e) {
              return e.match(/^https?:\/\//) ? "remote" : "local";
            })(e),
            d = o.join(",") || "_";
          return {
            url: r.cleanDoubleSlashes(
              `/_image/ipx/${c}/${t.format || "_"}/${d}/${e}`
            ),
            isStatic: !0,
          };
        },
      };
    },
    function (e, t) {},
    function (e) {
      e.exports = JSON.parse(
        '{"title":"site","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"site"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"site"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"site"}],"link":[{"hid":"shortcut-icon","rel":"shortcut icon","href":"/_nuxt/icons/icon_64x64.ecd1ba.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"/_nuxt/icons/icon_512x512.ecd1ba.png","sizes":"512x512"},{"rel":"manifest","href":"/_nuxt/manifest.d23946e6.json","hid":"manifest"}],"htmlAttrs":{"lang":"en"}}'
      );
    },
    function (e, t, n) {
      "use strict";
      !(function () {
        if ("undefined" != typeof document) {
          var e = document.head || document.getElementsByTagName("head")[0],
            t = document.createElement("style"),
            n =
              " *[data-v-5928e1c7] { -webkit-box-sizing: border-box; box-sizing: border-box; } .fullscreen-v-img[data-v-5928e1c7] { z-index: 9999; height: 100%; width: 100%; position: fixed; top: 0; left: 0; overflow: hidden; background-color: rgba(0, 0, 0, 0.7); -ms-touch-action: none; touch-action: none; } .content-v-img img[data-v-5928e1c7] { width: auto; height: auto; max-width: 100%; max-height: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .header-v-img[data-v-5928e1c7], .footer-v-img[data-v-5928e1c7] { position: absolute; width: 100%; background-color: rgba(0, 0, 0, 0.3); height: 50px; z-index: 9999; display: flex; align-items: center; } .header-v-img[data-v-5928e1c7] { justify-content: space-between; } .footer-v-img[data-v-5928e1c7] { bottom: 0; justify-content: center; height: 70px; /* scrolling thumbnails on mobile */ overflow-x: auto; } .footer-v-img img[data-v-5928e1c7] { width: 60px; height: 60px; cursor: pointer; -webkit-transition: transform 0.2s ease-out; transition: transform 0.2s ease-out; object-fit: cover; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .footer-v-img img.is-selected[data-v-5928e1c7] { transform: scale(1.1); } .footer-v-img img[data-v-5928e1c7]:not(:last-child) { margin-right: 7px; } .title-v-img[data-v-5928e1c7] { font-family: 'Avenir', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; color: white; text-align: center; max-height: 100%; overflow: auto; } .count-v-img[data-v-5928e1c7], .buttons-v-img[data-v-5928e1c7] { width: 80px; font-family: 'Avenir', Helvetica, Arial, sans-serif; } .count-v-img[data-v-5928e1c7] { font-size: 15px; color: white; margin-left: 10px; } .buttons-v-img[data-v-5928e1c7] { margin-right: 10px; text-align: right; } .buttons-v-img span path[data-v-5928e1c7] { fill: #e5e6eb; -webkit-transition: fill 0.4s ease-in-out; transition: fill 0.4s ease-in-out; } .buttons-v-img span[data-v-5928e1c7] { cursor: pointer; color: #e5e6eb; font-size: 30px; -webkit-transition: color 0.4s ease-in-out; transition: color 0.4s ease-in-out; text-decoration: none; text-align: center; } .buttons-v-img span[data-v-5928e1c7]:not(:last-child) { margin-right: 8px; } .buttons-v-img span svg[data-v-5928e1c7] { height: 20px; width: 15px; } .buttons-v-img span:hover svg path[data-v-5928e1c7] { fill: white; } .buttons-v-img span[data-v-5928e1c7]:hover { color: white; } .prev-v-img svg[data-v-5928e1c7], .next-v-img svg[data-v-5928e1c7] { margin: 5px auto; } .prev-v-img[data-v-5928e1c7], .next-v-img[data-v-5928e1c7] { color: white; width: 35px; height: 35px; position: absolute; top: 50%; margin-top: -12.5px; font-size: 15px; font-family: 'Avenir', Helvetica, Arial, sans-serif; text-align: center; background-color: rgba(0, 0, 0, 0.3); z-index: 1000; opacity: 0.3; -webkit-transition: opacity 0.3s ease-in-out; transition: opacity 0.3s ease-in-out; cursor: pointer; } .prev-v-img[data-v-5928e1c7]:hover, .next-v-img[data-v-5928e1c7]:hover { opacity: 1; } .prev-v-img[data-v-5928e1c7] { left: 10px; } .next-v-img[data-v-5928e1c7] { right: 10px; } .v-img-fade-enter[data-v-5928e1c7], .v-img-fade-leave-to[data-v-5928e1c7] { opacity: 0; } .v-img-fade-enter-active[data-v-5928e1c7], .v-img-fade-leave-active[data-v-5928e1c7] { -webkit-transition: opacity 0.3s ease-in-out; transition: opacity 0.3s ease-in-out; } ";
          (t.type = "text/css"),
            t.styleSheet
              ? (t.styleSheet.cssText = n)
              : t.appendChild(document.createTextNode(n)),
            e.appendChild(t);
        }
      })();
      var r = {
          render: function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "transition",
              { attrs: { appear: "", name: "v-img-fade" } },
              [
                e.closed
                  ? e._e()
                  : n(
                      "div",
                      {
                        staticClass: "fullscreen-v-img",
                        on: {
                          click: function (t) {
                            if (t.target !== t.currentTarget) return null;
                            e.close(t);
                          },
                        },
                      },
                      [
                        n("div", { staticClass: "header-v-img" }, [
                          n("span", { staticClass: "count-v-img" }, [
                            e.images.length > 1
                              ? n("span", [
                                  e._v(
                                    e._s(e.currentImageIndex + 1) +
                                      "/" +
                                      e._s(e.images.length) +
                                      " "
                                  ),
                                ])
                              : e._e(),
                          ]),
                          n("span", { staticClass: "title-v-img" }, [
                            e._v(e._s(e.titles[e.currentImageIndex])),
                          ]),
                          n("div", { staticClass: "buttons-v-img" }, [
                            e.sourceButtons[e.currentImageIndex]
                              ? n("span", [
                                  n(
                                    "a",
                                    {
                                      attrs: {
                                        href: e.images[e.currentImageIndex],
                                        target: "_blank",
                                      },
                                    },
                                    [
                                      n(
                                        "svg",
                                        {
                                          staticStyle: {
                                            "enable-background":
                                              "new 0 0 475.078 475.077",
                                          },
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "xmlns:xlink":
                                              "http://www.w3.org/1999/xlink",
                                            version: "1.1",
                                            id: "Capa_1",
                                            x: "0px",
                                            y: "0px",
                                            width: "512px",
                                            height: "512px",
                                            viewBox: "0 0 475.078 475.077",
                                            "xml:space": "preserve",
                                          },
                                        },
                                        [
                                          n("path", {
                                            attrs: {
                                              d:
                                                "M467.083,318.627c-5.324-5.328-11.8-7.994-19.41-7.994H315.195l-38.828,38.827c-11.04,10.657-23.982,15.988-38.828,15.988    c-14.843,0-27.789-5.324-38.828-15.988l-38.543-38.827H27.408c-7.612,0-14.083,2.669-19.414,7.994    C2.664,323.955,0,330.427,0,338.044v91.358c0,7.614,2.664,14.085,7.994,19.414c5.33,5.328,11.801,7.99,19.414,7.99h420.266    c7.61,0,14.086-2.662,19.41-7.99c5.332-5.329,7.994-11.8,7.994-19.414v-91.358C475.078,330.427,472.416,323.955,467.083,318.627z     M360.025,414.841c-3.621,3.617-7.905,5.424-12.854,5.424s-9.227-1.807-12.847-5.424c-3.614-3.617-5.421-7.898-5.421-12.844    c0-4.948,1.807-9.236,5.421-12.847c3.62-3.62,7.898-5.431,12.847-5.431s9.232,1.811,12.854,5.431    c3.613,3.61,5.421,7.898,5.421,12.847C365.446,406.942,363.638,411.224,360.025,414.841z M433.109,414.841    c-3.614,3.617-7.898,5.424-12.848,5.424c-4.948,0-9.229-1.807-12.847-5.424c-3.613-3.617-5.42-7.898-5.42-12.844    c0-4.948,1.807-9.236,5.42-12.847c3.617-3.62,7.898-5.431,12.847-5.431c4.949,0,9.233,1.811,12.848,5.431    c3.617,3.61,5.427,7.898,5.427,12.847C438.536,406.942,436.729,411.224,433.109,414.841z",
                                              fill: "#FFFFFF",
                                            },
                                          }),
                                          n("path", {
                                            attrs: {
                                              d:
                                                "M224.692,323.479c3.428,3.613,7.71,5.421,12.847,5.421c5.141,0,9.418-1.808,12.847-5.421l127.907-127.908    c5.899-5.519,7.234-12.182,3.997-19.986c-3.23-7.421-8.847-11.132-16.844-11.136h-73.091V36.543c0-4.948-1.811-9.231-5.421-12.847    c-3.62-3.617-7.901-5.426-12.847-5.426h-73.096c-4.946,0-9.229,1.809-12.847,5.426c-3.615,3.616-5.424,7.898-5.424,12.847V164.45    h-73.089c-7.998,0-13.61,3.715-16.846,11.136c-3.234,7.801-1.903,14.467,3.999,19.986L224.692,323.479z",
                                              fill: "#FFFFFF",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ])
                              : e._e(),
                            n("span", { on: { click: e.close } }, [e._v("×")]),
                          ]),
                        ]),
                        n(
                          "transition",
                          { attrs: { appear: "", name: "v-img-fade" } },
                          [
                            e.visibleUI && 1 !== e.images.length
                              ? n(
                                  "span",
                                  {
                                    staticClass: "prev-v-img",
                                    on: { click: e.prev },
                                  },
                                  [
                                    n(
                                      "svg",
                                      {
                                        attrs: {
                                          width: "25",
                                          height: "25",
                                          viewBox: "0 0 1792 1915",
                                          xmlns: "http://www.w3.org/2000/svg",
                                        },
                                      },
                                      [
                                        n("path", {
                                          attrs: {
                                            d:
                                              "M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z",
                                            fill: "#fff",
                                          },
                                        }),
                                      ]
                                    ),
                                  ]
                                )
                              : e._e(),
                          ]
                        ),
                        n(
                          "transition",
                          { attrs: { appear: "", name: "v-img-fade" } },
                          [
                            e.visibleUI && 1 !== e.images.length
                              ? n(
                                  "span",
                                  {
                                    staticClass: "next-v-img",
                                    on: { click: e.next },
                                  },
                                  [
                                    n(
                                      "svg",
                                      {
                                        attrs: {
                                          width: "25",
                                          height: "25",
                                          viewBox: "0 0 1792 1915",
                                          xmlns: "http://www.w3.org/2000/svg",
                                        },
                                      },
                                      [
                                        n("path", {
                                          attrs: {
                                            d:
                                              "M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z",
                                            fill: "#fff",
                                          },
                                        }),
                                      ]
                                    ),
                                  ]
                                )
                              : e._e(),
                          ]
                        ),
                        e.thumbnails && e.images.length > 1
                          ? n(
                              "div",
                              { staticClass: "footer-v-img" },
                              e._l(e.images, function (t, i) {
                                return n("img", {
                                  key: i,
                                  class: {
                                    "is-selected": e.currentImageIndex == i,
                                  },
                                  attrs: { src: t },
                                  on: {
                                    click: function (t) {
                                      e.select(i);
                                    },
                                  },
                                });
                              })
                            )
                          : e._e(),
                        n("div", { staticClass: "content-v-img" }, [
                          n("img", {
                            attrs: { src: e.images[e.currentImageIndex] },
                            on: { click: e.next },
                          }),
                        ]),
                      ],
                      1
                    ),
              ]
            );
          },
          staticRenderFns: [],
          _scopeId: "data-v-5928e1c7",
          data: function () {
            return {
              images: [],
              titles: [],
              sourceButtons: [],
              visibleUI: !0,
              currentImageIndex: 0,
              closed: !0,
              uiTimeout: null,
              handlers: {},
              thumbnails: !1,
            };
          },
          watch: {
            closed: function (e) {
              e && this.handlers.closed && this.handlers.closed(),
                !e && this.handlers.opened && this.handlers.opened();
            },
          },
          methods: {
            fireChangeEvent: function () {
              this.handlers.changed &&
                this.handlers.changed(this.currentImageIndex);
            },
            close: function () {
              this.closed ||
                (document
                  .querySelector("body")
                  .classList.remove("body-fs-v-img"),
                (this.images = []),
                (this.currentImageIndex = 0),
                (this.closed = !0));
            },
            next: function () {
              !this.closed &&
                this.images.length > 1 &&
                (this.currentImageIndex + 1 < this.images.length
                  ? this.currentImageIndex++
                  : (this.currentImageIndex = 0),
                this.fireChangeEvent());
            },
            select: function (e) {
              this.currentImageIndex = e;
            },
            prev: function () {
              !this.closed &&
                this.images.length > 1 &&
                (this.currentImageIndex > 0
                  ? this.currentImageIndex--
                  : (this.currentImageIndex = this.images.length - 1),
                this.fireChangeEvent());
            },
            showUI: function () {
              var e = this;
              this.closed ||
                (clearTimeout(this.uiTimeout),
                (this.visibleUI = !0),
                (this.uiTimeout = setTimeout(function () {
                  e.visibleUI = !1;
                }, 3500)));
            },
          },
          created: function () {
            var e = this;
            window.addEventListener("keyup", function (t) {
              (27 !== t.keyCode && 81 !== t.keyCode) || e.close(),
                (39 !== t.keyCode && 76 !== t.keyCode) || e.next(),
                (37 !== t.keyCode && 72 !== t.keyCode) || e.prev();
            }),
              window.addEventListener("scroll", function () {
                e.close();
              }),
              window.addEventListener("mousemove", function () {
                e.showUI();
              });
          },
        },
        o =
          ((function () {
            function e(e) {
              this.value = e;
            }
            function t(t) {
              function n(a, s) {
                try {
                  var r = t[a](s),
                    o = r.value;
                  o instanceof e
                    ? Promise.resolve(o.value).then(
                        function (e) {
                          n("next", e);
                        },
                        function (e) {
                          n("throw", e);
                        }
                      )
                    : i(r.done ? "return" : "normal", r.value);
                } catch (e) {
                  i("throw", e);
                }
              }
              function i(e, t) {
                switch (e) {
                  case "return":
                    a.resolve({ value: t, done: !0 });
                    break;
                  case "throw":
                    a.reject(t);
                    break;
                  default:
                    a.resolve({ value: t, done: !1 });
                }
                (a = a.next) ? n(a.key, a.arg) : (s = null);
              }
              var a, s;
              (this._invoke = function (e, t) {
                return new Promise(function (i, r) {
                  var o = { key: e, arg: t, resolve: i, reject: r, next: null };
                  s ? (s = s.next = o) : ((a = s = o), n(e, t));
                });
              }),
                "function" != typeof t.return && (this.return = void 0);
            }
            "function" == typeof Symbol &&
              Symbol.asyncIterator &&
              (t.prototype[Symbol.asyncIterator] = function () {
                return this;
              }),
              (t.prototype.next = function (e) {
                return this._invoke("next", e);
              }),
              (t.prototype.throw = function (e) {
                return this._invoke("throw", e);
              }),
              (t.prototype.return = function (e) {
                return this._invoke("return", e);
              });
          })(),
          Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
        l = function (e, t, n) {
          var i = "pointer",
            a = t.arg || null,
            s = void 0,
            r = void 0,
            o = e.src,
            l = void 0,
            c = void 0,
            u = {};
          return (
            n.altAsTitle && (l = e.alt),
            (s = n.openOn),
            (r = n.sourceButton),
            (c = n.thumbnails),
            void 0 !== t.value &&
              ((i = t.value.cursor || i),
              (a = t.value.group || a),
              (s = t.value.openOn || s),
              (o = t.value.src || o),
              (l = t.value.title || l),
              (u.opened = t.value.opened),
              (u.closed = t.value.closed),
              (u.changed = t.value.changed),
              void 0 !== t.value.sourceButton && (r = t.value.sourceButton),
              void 0 !== t.value.thumbnails && (c = t.value.thumbnails)),
            e.setAttribute("data-vue-img-src", o),
            a && e.setAttribute("data-vue-img-group", a),
            l && e.setAttribute("data-vue-img-title", l),
            r && e.setAttribute("data-vue-img-source-button", r),
            c && e.setAttribute("data-vue-img-thumbnails", c),
            o || console.error("v-img element missing src parameter."),
            (e.style.cursor = i),
            {
              cursor: i,
              src: o,
              group: a,
              title: l,
              events: u,
              sourceButton: r,
              openOn: s,
              thumbnails: c,
            }
          );
        },
        c = function (e, t) {
          var n = e.extend(r);
          (t = o(
            {
              altAsTitle: !1,
              sourceButton: !1,
              thumbnails: !1,
              openOn: "click",
            },
            t
          )),
            e.directive("img", {
              update: function (e, n, i, a) {
                var s = void 0,
                  r = void 0;
                a.data.attrs &&
                  i.data.attrs &&
                  ((r = a.data.attrs.src !== i.data.attrs.src),
                  t.altAsTitle && (s = a.data.attrs.alt !== i.data.attrs.alt));
                var o = n.oldValue !== n.value;
                (r || s || o) && l(e, n, t);
              },
              bind: function (i, a) {
                var s = l(i, a, t),
                  r = window.vueImg;
                if (!r) {
                  var o = document.createElement("div");
                  o.setAttribute("id", "imageScreen"),
                    document.querySelector("body").appendChild(o),
                    (r = window.vueImg = new n().$mount("#imageScreen"));
                }
                i.addEventListener(s.openOn, function () {
                  var t = void 0;
                  (t = i.dataset.vueImgGroup
                    ? [].concat(
                        (function (e) {
                          if (Array.isArray(e)) {
                            for (
                              var t = 0, n = Array(e.length);
                              t < e.length;
                              t++
                            )
                              n[t] = e[t];
                            return n;
                          }
                          return Array.from(e);
                        })(
                          document.querySelectorAll(
                            'img[data-vue-img-group="' +
                              i.dataset.vueImgGroup +
                              '"]'
                          )
                        )
                      )
                    : [i]),
                    e.set(
                      r,
                      "images",
                      t.map(function (e) {
                        return e.dataset.vueImgSrc;
                      })
                    ),
                    e.set(
                      r,
                      "titles",
                      t.map(function (e) {
                        return e.dataset.vueImgTitle;
                      })
                    ),
                    e.set(
                      r,
                      "sourceButtons",
                      t.map(function (e) {
                        return "true" === e.dataset.vueImgSourceButton;
                      })
                    ),
                    e.set(
                      r,
                      "thumbnails",
                      "true" === i.dataset.vueImgThumbnails
                    ),
                    e.set(r, "currentImageIndex", t.indexOf(i)),
                    e.set(r, "handlers", s.events),
                    e.set(r, "closed", !1);
                });
              },
            });
        };
      "undefined" != typeof window && window.Vue && window.Vue.use(c),
        (t.a = c);
    },
    function (e, t, n) {
      !(function (e) {
        "use strict";
        var t = {
            props: {
              src: { type: String, required: !0 },
              srcPlaceholder: { type: String, default: "//:0" },
              srcset: { type: String },
              intersectionOptions: {
                type: Object,
                default: function () {
                  return {};
                },
              },
              usePicture: { type: Boolean, default: !1 },
            },
            inheritAttrs: !1,
            data: function () {
              return { observer: null, intersected: !1, loaded: !1 };
            },
            computed: {
              srcImage: function () {
                return this.intersected && this.src
                  ? this.src
                  : this.srcPlaceholder;
              },
              srcsetImage: function () {
                return !(!this.intersected || !this.srcset) && this.srcset;
              },
            },
            methods: {
              load: function () {
                this.$el.getAttribute("src") !== this.srcPlaceholder &&
                  ((this.loaded = !0), this.$emit("load"));
              },
            },
            render: function (e) {
              var img = e("img", {
                attrs: { src: this.srcImage, srcset: this.srcsetImage },
                domProps: this.$attrs,
                class: {
                  "v-lazy-image": !0,
                  "v-lazy-image-loaded": this.loaded,
                },
                on: { load: this.load },
              });
              return this.usePicture
                ? e(
                    "picture",
                    { on: { load: this.load } },
                    this.intersected ? [this.$slots.default, img] : [img]
                  )
                : img;
            },
            mounted: function () {
              var e = this;
              "IntersectionObserver" in window &&
                ((this.observer = new IntersectionObserver(function (t) {
                  t[0].isIntersecting &&
                    ((e.intersected = !0),
                    e.observer.disconnect(),
                    e.$emit("intersect"));
                }, this.intersectionOptions)),
                this.observer.observe(this.$el));
            },
            destroyed: function () {
              "IntersectionObserver" in window && this.observer.disconnect();
            },
          },
          n = {
            install: function (e, n) {
              e.component("VLazyImage", t);
            },
          };
        (e.default = t),
          (e.VLazyImagePlugin = n),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t);
    },
    function (e, t, n) {
      (function (t) {
        var n = (function (e) {
          var t = /\blang(?:uage)?-([\w-]+)\b/i,
            n = 0,
            r = {
              manual: e.Prism && e.Prism.manual,
              disableWorkerMessageHandler:
                e.Prism && e.Prism.disableWorkerMessageHandler,
              util: {
                encode: function e(t) {
                  return t instanceof o
                    ? new o(t.type, e(t.content), t.alias)
                    : Array.isArray(t)
                    ? t.map(e)
                    : t
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function (e) {
                  return (
                    e.__id || Object.defineProperty(e, "__id", { value: ++n }),
                    e.__id
                  );
                },
                clone: function e(t, n) {
                  var o, l;
                  switch (((n = n || {}), r.util.type(t))) {
                    case "Object":
                      if (((l = r.util.objId(t)), n[l])) return n[l];
                      for (var c in ((o = {}), (n[l] = o), t))
                        t.hasOwnProperty(c) && (o[c] = e(t[c], n));
                      return o;
                    case "Array":
                      return (
                        (l = r.util.objId(t)),
                        n[l]
                          ? n[l]
                          : ((o = []),
                            (n[l] = o),
                            t.forEach(function (t, i) {
                              o[i] = e(t, n);
                            }),
                            o)
                      );
                    default:
                      return t;
                  }
                },
                getLanguage: function (element) {
                  for (; element && !t.test(element.className); )
                    element = element.parentElement;
                  return element
                    ? (element.className.match(t) || [
                        ,
                        "none",
                      ])[1].toLowerCase()
                    : "none";
                },
                currentScript: function () {
                  if ("undefined" == typeof document) return null;
                  if ("currentScript" in document)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (n) {
                    var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack) ||
                      [])[1];
                    if (e) {
                      var t = document.getElementsByTagName("script");
                      for (var i in t) if (t[i].src == e) return t[i];
                    }
                    return null;
                  }
                },
                isActive: function (element, e, t) {
                  for (var n = "no-" + e; element; ) {
                    var r = element.classList;
                    if (r.contains(e)) return !0;
                    if (r.contains(n)) return !1;
                    element = element.parentElement;
                  }
                  return !!t;
                },
              },
              languages: {
                extend: function (e, t) {
                  var n = r.util.clone(r.languages[e]);
                  for (var o in t) n[o] = t[o];
                  return n;
                },
                insertBefore: function (e, t, n, o) {
                  var l = (o = o || r.languages)[e],
                    c = {};
                  for (var d in l)
                    if (l.hasOwnProperty(d)) {
                      if (d == t)
                        for (var f in n) n.hasOwnProperty(f) && (c[f] = n[f]);
                      n.hasOwnProperty(d) || (c[d] = l[d]);
                    }
                  var h = o[e];
                  return (
                    (o[e] = c),
                    r.languages.DFS(r.languages, function (t, n) {
                      n === h && t != e && (this[t] = c);
                    }),
                    c
                  );
                },
                DFS: function e(t, n, o, l) {
                  l = l || {};
                  var c = r.util.objId;
                  for (var i in t)
                    if (t.hasOwnProperty(i)) {
                      n.call(t, i, t[i], o || i);
                      var d = t[i],
                        f = r.util.type(d);
                      "Object" !== f || l[c(d)]
                        ? "Array" !== f ||
                          l[c(d)] ||
                          ((l[c(d)] = !0), e(d, n, i, l))
                        : ((l[c(d)] = !0), e(d, n, null, l));
                    }
                },
              },
              plugins: {},
              highlightAll: function (e, t) {
                r.highlightAllUnder(document, e, t);
              },
              highlightAllUnder: function (e, t, n) {
                var o = {
                  callback: n,
                  container: e,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                r.hooks.run("before-highlightall", o),
                  (o.elements = Array.prototype.slice.apply(
                    o.container.querySelectorAll(o.selector)
                  )),
                  r.hooks.run("before-all-elements-highlight", o);
                for (var element, i = 0; (element = o.elements[i++]); )
                  r.highlightElement(element, !0 === t, o.callback);
              },
              highlightElement: function (element, n, o) {
                var l = r.util.getLanguage(element),
                  c = r.languages[l];
                element.className =
                  element.className.replace(t, "").replace(/\s+/g, " ") +
                  " language-" +
                  l;
                var d = element.parentElement;
                d &&
                  "pre" === d.nodeName.toLowerCase() &&
                  (d.className =
                    d.className.replace(t, "").replace(/\s+/g, " ") +
                    " language-" +
                    l);
                var f = {
                  element: element,
                  language: l,
                  grammar: c,
                  code: element.textContent,
                };
                function h(e) {
                  (f.highlightedCode = e),
                    r.hooks.run("before-insert", f),
                    (f.element.innerHTML = f.highlightedCode),
                    r.hooks.run("after-highlight", f),
                    r.hooks.run("complete", f),
                    o && o.call(f.element);
                }
                if ((r.hooks.run("before-sanity-check", f), !f.code))
                  return (
                    r.hooks.run("complete", f), void (o && o.call(f.element))
                  );
                if ((r.hooks.run("before-highlight", f), f.grammar))
                  if (n && e.Worker) {
                    var _ = new Worker(r.filename);
                    (_.onmessage = function (e) {
                      h(e.data);
                    }),
                      _.postMessage(
                        JSON.stringify({
                          language: f.language,
                          code: f.code,
                          immediateClose: !0,
                        })
                      );
                  } else h(r.highlight(f.code, f.grammar, f.language));
                else h(r.util.encode(f.code));
              },
              highlight: function (text, e, t) {
                var n = { code: text, grammar: e, language: t };
                return (
                  r.hooks.run("before-tokenize", n),
                  (n.tokens = r.tokenize(n.code, n.grammar)),
                  r.hooks.run("after-tokenize", n),
                  o.stringify(r.util.encode(n.tokens), n.language)
                );
              },
              tokenize: function (text, e) {
                var t = e.rest;
                if (t) {
                  for (var n in t) e[n] = t[n];
                  delete e.rest;
                }
                var r = new d();
                return (
                  f(r, r.head, text),
                  c(text, r, e, r.head, 0),
                  (function (e) {
                    var t = [],
                      n = e.head.next;
                    for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                    return t;
                  })(r)
                );
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  var n = r.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function (e, t) {
                  var n = r.hooks.all[e];
                  if (n && n.length) for (var o, i = 0; (o = n[i++]); ) o(t);
                },
              },
              Token: o,
            };
          function o(e, content, t, n) {
            (this.type = e),
              (this.content = content),
              (this.alias = t),
              (this.length = 0 | (n || "").length);
          }
          function l(pattern, e, text, t) {
            pattern.lastIndex = e;
            var n = pattern.exec(text);
            if (n && t && n[1]) {
              var r = n[1].length;
              (n.index += r), (n[0] = n[0].slice(r));
            }
            return n;
          }
          function c(text, e, t, n, d, _) {
            for (var m in t)
              if (t.hasOwnProperty(m) && t[m]) {
                var v = t[m];
                v = Array.isArray(v) ? v : [v];
                for (var y = 0; y < v.length; ++y) {
                  if (_ && _.cause == m + "," + y) return;
                  var x = v[y],
                    w = x.inside,
                    O = !!x.lookbehind,
                    k = !!x.greedy,
                    j = x.alias;
                  if (k && !x.pattern.global) {
                    var P = x.pattern.toString().match(/[imsuy]*$/)[0];
                    x.pattern = RegExp(x.pattern.source, P + "g");
                  }
                  for (
                    var pattern = x.pattern || x, E = n.next, C = d;
                    E !== e.tail && !(_ && C >= _.reach);
                    C += E.value.length, E = E.next
                  ) {
                    var A = E.value;
                    if (e.length > text.length) return;
                    if (!(A instanceof o)) {
                      var S,
                        $ = 1;
                      if (k) {
                        if (!(S = l(pattern, C, text, O))) break;
                        var D = S.index,
                          M = S.index + S[0].length,
                          p = C;
                        for (p += E.value.length; D >= p; )
                          p += (E = E.next).value.length;
                        if (((C = p -= E.value.length), E.value instanceof o))
                          continue;
                        for (
                          var T = E;
                          T !== e.tail && (p < M || "string" == typeof T.value);
                          T = T.next
                        )
                          $++, (p += T.value.length);
                        $--, (A = text.slice(C, p)), (S.index -= C);
                      } else if (!(S = l(pattern, 0, A, O))) continue;
                      D = S.index;
                      var I = S[0],
                        R = A.slice(0, D),
                        L = A.slice(D + I.length),
                        B = C + A.length;
                      _ && B > _.reach && (_.reach = B);
                      var U = E.prev;
                      R && ((U = f(e, U, R)), (C += R.length)),
                        h(e, U, $),
                        (E = f(e, U, new o(m, w ? r.tokenize(I, w) : I, j, I))),
                        L && f(e, E, L),
                        $ > 1 &&
                          c(text, e, t, E.prev, C, {
                            cause: m + "," + y,
                            reach: B,
                          });
                    }
                  }
                }
              }
          }
          function d() {
            var head = { value: null, prev: null, next: null },
              e = { value: null, prev: head, next: null };
            (head.next = e),
              (this.head = head),
              (this.tail = e),
              (this.length = 0);
          }
          function f(e, t, n) {
            var r = t.next,
              o = { value: n, prev: t, next: r };
            return (t.next = o), (r.prev = o), e.length++, o;
          }
          function h(e, t, n) {
            for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
            (t.next = r), (r.prev = t), (e.length -= i);
          }
          if (
            ((e.Prism = r),
            (o.stringify = function e(t, n) {
              if ("string" == typeof t) return t;
              if (Array.isArray(t)) {
                var s = "";
                return (
                  t.forEach(function (t) {
                    s += e(t, n);
                  }),
                  s
                );
              }
              var o = {
                  type: t.type,
                  content: e(t.content, n),
                  tag: "span",
                  classes: ["token", t.type],
                  attributes: {},
                  language: n,
                },
                l = t.alias;
              l &&
                (Array.isArray(l)
                  ? Array.prototype.push.apply(o.classes, l)
                  : o.classes.push(l)),
                r.hooks.run("wrap", o);
              var c = "";
              for (var d in o.attributes)
                c +=
                  " " +
                  d +
                  '="' +
                  (o.attributes[d] || "").replace(/"/g, "&quot;") +
                  '"';
              return (
                "<" +
                o.tag +
                ' class="' +
                o.classes.join(" ") +
                '"' +
                c +
                ">" +
                o.content +
                "</" +
                o.tag +
                ">"
              );
            }),
            !e.document)
          )
            return e.addEventListener
              ? (r.disableWorkerMessageHandler ||
                  e.addEventListener(
                    "message",
                    function (t) {
                      var n = JSON.parse(t.data),
                        o = n.language,
                        code = n.code,
                        l = n.immediateClose;
                      e.postMessage(r.highlight(code, r.languages[o], o)),
                        l && e.close();
                    },
                    !1
                  ),
                r)
              : r;
          var script = r.util.currentScript();
          function _() {
            r.manual || r.highlightAll();
          }
          if (
            (script &&
              ((r.filename = script.src),
              script.hasAttribute("data-manual") && (r.manual = !0)),
            !r.manual)
          ) {
            var m = document.readyState;
            "loading" === m || ("interactive" === m && script && script.defer)
              ? document.addEventListener("DOMContentLoaded", _)
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(_)
              : window.setTimeout(_, 16);
          }
          return r;
        })(
          "undefined" != typeof window
            ? window
            : "undefined" != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope
            ? self
            : {}
        );
        e.exports && (e.exports = n),
          void 0 !== t && (t.Prism = n),
          (n.languages.markup = {
            comment: /<!--[\s\S]*?-->/,
            prolog: /<\?[\s\S]+?\?>/,
            doctype: {
              pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
              greedy: !0,
              inside: {
                "internal-subset": {
                  pattern: /(\[)[\s\S]+(?=\]>$)/,
                  lookbehind: !0,
                  greedy: !0,
                  inside: null,
                },
                string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
                punctuation: /^<!|>$|[[\]]/,
                "doctype-tag": /^DOCTYPE/,
                name: /[^\s<>'"]+/,
              },
            },
            cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
            tag: {
              pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
              greedy: !0,
              inside: {
                tag: {
                  pattern: /^<\/?[^\s>\/]+/,
                  inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
                },
                "attr-value": {
                  pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                  inside: {
                    punctuation: [
                      { pattern: /^=/, alias: "attr-equals" },
                      /"|'/,
                    ],
                  },
                },
                punctuation: /\/?>/,
                "attr-name": {
                  pattern: /[^\s>\/]+/,
                  inside: { namespace: /^[^\s>\/:]+:/ },
                },
              },
            },
            entity: [
              { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
              /&#x?[\da-f]{1,8};/i,
            ],
          }),
          (n.languages.markup.tag.inside["attr-value"].inside.entity =
            n.languages.markup.entity),
          (n.languages.markup.doctype.inside["internal-subset"].inside =
            n.languages.markup),
          n.hooks.add("wrap", function (e) {
            "entity" === e.type &&
              (e.attributes.title = e.content.replace(/&amp;/, "&"));
          }),
          Object.defineProperty(n.languages.markup.tag, "addInlined", {
            value: function (e, t) {
              var r = {};
              (r["language-" + t] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: n.languages[t],
              }),
                (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var o = {
                "included-cdata": {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: r,
                },
              };
              o["language-" + t] = {
                pattern: /[\s\S]+/,
                inside: n.languages[t],
              };
              var l = {};
              (l[e] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return e;
                    }
                  ),
                  "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: o,
              }),
                n.languages.insertBefore("markup", "cdata", l);
            },
          }),
          (n.languages.html = n.languages.markup),
          (n.languages.mathml = n.languages.markup),
          (n.languages.svg = n.languages.markup),
          (n.languages.xml = n.languages.extend("markup", {})),
          (n.languages.ssml = n.languages.xml),
          (n.languages.atom = n.languages.xml),
          (n.languages.rss = n.languages.xml),
          (function (e) {
            var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
            (e.languages.css = {
              comment: /\/\*[\s\S]*?\*\//,
              atrule: {
                pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                inside: {
                  rule: /^@[\w-]+/,
                  "selector-function-argument": {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector",
                  },
                  keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0,
                  },
                },
              },
              url: {
                pattern: RegExp(
                  "\\burl\\((?:" +
                    t.source +
                    "|" +
                    /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                    ")\\)",
                  "i"
                ),
                greedy: !0,
                inside: {
                  function: /^url/i,
                  punctuation: /^\(|\)$/,
                  string: {
                    pattern: RegExp("^" + t.source + "$"),
                    alias: "url",
                  },
                },
              },
              selector: RegExp(
                "[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                  t.source +
                  ")*(?=\\s*\\{)"
              ),
              string: { pattern: t, greedy: !0 },
              property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              important: /!important\b/i,
              function: /[-a-z0-9]+(?=\()/i,
              punctuation: /[(){};:,]/,
            }),
              (e.languages.css.atrule.inside.rest = e.languages.css);
            var n = e.languages.markup;
            n &&
              (n.tag.addInlined("style", "css"),
              e.languages.insertBefore(
                "inside",
                "attr-value",
                {
                  "style-attr": {
                    pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
                    lookbehind: !0,
                    inside: {
                      "attr-value": {
                        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                        inside: {
                          style: {
                            pattern: /(["'])[\s\S]+(?=["']$)/,
                            lookbehind: !0,
                            alias: "language-css",
                            inside: e.languages.css,
                          },
                          punctuation: [
                            { pattern: /^=/, alias: "attr-equals" },
                            /"|'/,
                          ],
                        },
                      },
                      "attr-name": /^style/i,
                    },
                  },
                },
                n.tag
              ));
          })(n),
          (n.languages.clike = {
            comment: [
              {
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: !0,
                greedy: !0,
              },
              { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
            ],
            string: {
              pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0,
            },
            "class-name": {
              pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
              lookbehind: !0,
              inside: { punctuation: /[.\\]/ },
            },
            keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
            boolean: /\b(?:true|false)\b/,
            function: /\w+(?=\()/,
            number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
            operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
            punctuation: /[{}[\];(),.:]/,
          }),
          (n.languages.javascript = n.languages.extend("clike", {
            "class-name": [
              n.languages.clike["class-name"],
              {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
                lookbehind: !0,
              },
            ],
            keyword: [
              { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
              {
                pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0,
              },
            ],
            function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
            number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
            operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
          })),
          (n.languages.javascript[
            "class-name"
          ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
          n.languages.insertBefore("javascript", "keyword", {
            regex: {
              pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                "regex-source": {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: "language-regex",
                  inside: n.languages.regex,
                },
                "regex-flags": /[a-z]+$/,
                "regex-delimiter": /^\/|\/$/,
              },
            },
            "function-variable": {
              pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: "function",
            },
            parameter: [
              {
                pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                inside: n.languages.javascript,
              },
              {
                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          n.languages.insertBefore("javascript", "string", {
            "template-string": {
              pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
              greedy: !0,
              inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                  pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                  lookbehind: !0,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^\${|}$/,
                      alias: "punctuation",
                    },
                    rest: n.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
          }),
          n.languages.markup &&
            n.languages.markup.tag.addInlined("script", "javascript"),
          (n.languages.js = n.languages.javascript),
          (function () {
            if ("undefined" != typeof self && self.Prism && self.document) {
              Element.prototype.matches ||
                (Element.prototype.matches =
                  Element.prototype.msMatchesSelector ||
                  Element.prototype.webkitMatchesSelector);
              var e = window.Prism,
                t = {
                  js: "javascript",
                  py: "python",
                  rb: "ruby",
                  ps1: "powershell",
                  psm1: "powershell",
                  sh: "bash",
                  bat: "batch",
                  h: "c",
                  tex: "latex",
                },
                n = "data-src-status",
                r = "loading",
                o = "loaded",
                l =
                  'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
                c = /\blang(?:uage)?-([\w-]+)\b/i;
              e.hooks.add("before-highlightall", function (e) {
                e.selector += ", " + l;
              }),
                e.hooks.add("before-sanity-check", function (c) {
                  var pre = c.element;
                  if (pre.matches(l)) {
                    (c.code = ""), pre.setAttribute(n, r);
                    var code = pre.appendChild(document.createElement("CODE"));
                    code.textContent = "Loading…";
                    var d = pre.getAttribute("data-src"),
                      h = c.language;
                    if ("none" === h) {
                      var _ = (/\.(\w+)$/.exec(d) || [, "none"])[1];
                      h = t[_] || _;
                    }
                    f(code, h), f(pre, h);
                    var m = e.plugins.autoloader;
                    m && m.loadLanguages(h);
                    var v = new XMLHttpRequest();
                    v.open("GET", d, !0),
                      (v.onreadystatechange = function () {
                        var t, r;
                        4 == v.readyState &&
                          (v.status < 400 && v.responseText
                            ? (pre.setAttribute(n, o),
                              (code.textContent = v.responseText),
                              e.highlightElement(code))
                            : (pre.setAttribute(n, "failed"),
                              v.status >= 400
                                ? (code.textContent =
                                    ((t = v.status),
                                    (r = v.statusText),
                                    "✖ Error " +
                                      t +
                                      " while fetching file: " +
                                      r))
                                : (code.textContent =
                                    "✖ Error: File does not exist or is empty")));
                      }),
                      v.send(null);
                  }
                }),
                (e.plugins.fileHighlight = {
                  highlight: function (t) {
                    for (
                      var element,
                        n = (t || document).querySelectorAll(l),
                        i = 0;
                      (element = n[i++]);

                    )
                      e.highlightElement(element);
                  },
                });
              var d = !1;
              e.fileHighlight = function () {
                d ||
                  (console.warn(
                    "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."
                  ),
                  (d = !0)),
                  e.plugins.fileHighlight.highlight.apply(this, arguments);
              };
            }
            function f(element, e) {
              var t = element.className;
              (t = t.replace(c, " ") + " language-" + e),
                (element.className = t.replace(/\s+/g, " ").trim());
            }
          })();
      }.call(this, n(28)));
    },
    function (e, t, n) {
      "use strict";
      var r = n(5),
        o = (n(31), n(16), n(8), n(61), n(0)),
        l = n(1),
        c = window.__NUXT__;
      function d() {
        if (!this._hydrated) return this.$fetch();
      }
      function f() {
        if (
          (e = this).$vnode &&
          e.$vnode.elm &&
          e.$vnode.elm.dataset &&
          e.$vnode.elm.dataset.fetchKey
        ) {
          var e;
          (this._hydrated = !0),
            (this._fetchKey = this.$vnode.elm.dataset.fetchKey);
          var data = c.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else for (var t in data) o.a.set(this.$data, t, data[t]);
        } else h.call(this);
      }
      function h() {
        var e = !1 !== this.$options.fetchOnServer;
        if (
          ("function" == typeof this.$options.fetchOnServer &&
            (e = !1 !== this.$options.fetchOnServer.call(this)),
          e && !this.$nuxt.isPreview && this.$nuxt._pagePayload)
        ) {
          this._hydrated = !0;
          var t = this.$options._scopeId || this.$options.name || "",
            n = Object(l.d)(this.$nuxt._fetchCounters, t);
          if ("function" == typeof this.$options.fetchKey)
            this._fetchKey = this.$options.fetchKey.call(this, n);
          else {
            var r =
              "string" == typeof this.$options.fetchKey
                ? this.$options.fetchKey
                : t;
            this._fetchKey = r ? r + ":" + n(r) : String(n(r));
          }
          var data = this.$nuxt._pagePayload.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else if (data) for (var c in data) o.a.set(this.$data, c, data[c]);
          else this.$fetch();
        }
      }
      function _() {
        var e = this;
        return (
          this._fetchPromise ||
            (this._fetchPromise = m.call(this).then(function () {
              delete e._fetchPromise;
            })),
          this._fetchPromise
        );
      }
      function m() {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = Object(r.a)(
          regeneratorRuntime.mark(function e() {
            var t,
              n,
              r,
              o = this;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (t = null),
                        (n = Date.now()),
                        (e.prev = 6),
                        (e.next = 9),
                        this.$options.fetch.call(this)
                      );
                    case 9:
                      e.next = 15;
                      break;
                    case 11:
                      (e.prev = 11),
                        (e.t0 = e.catch(6)),
                        (t = Object(l.p)(e.t0));
                    case 15:
                      if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (e.next = 19),
                        new Promise(function (e) {
                          return setTimeout(e, r);
                        })
                      );
                    case 19:
                      (this.$fetchState.error = t),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function () {
                          return o.$nuxt.nbFetching--;
                        });
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[6, 11]]
            );
          })
        )).apply(this, arguments);
      }
      t.a = {
        beforeCreate: function () {
          Object(l.m)(this) &&
            ((this._fetchDelay =
              "number" == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            o.a.util.defineReactive(this, "$fetchState", {
              pending: !1,
              error: null,
              timestamp: Date.now(),
            }),
            (this.$fetch = _.bind(this)),
            Object(l.a)(this, "created", f),
            Object(l.a)(this, "beforeMount", d));
        },
      };
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      n(8), n(16), n(61);
      var r = {},
        o = {},
        l = {};
      function c(e, t) {
        if (r[e]) return Promise.resolve(r[e]);
        if (l[e]) return Promise.reject(l[e]);
        if (o[e]) return o[e];
        var n,
          c,
          d = (o[e] = new Promise(function (e, t) {
            (n = e), (c = t);
          }));
        delete r[e];
        var f,
          script = document.createElement("script");
        (script.charset = "utf-8"), (script.timeout = 120), (script.src = t);
        var h = new Error(),
          _ = (script.onerror = script.onload = function (t) {
            if (
              (clearTimeout(f),
              delete o[e],
              (script.onerror = script.onload = null),
              r[e])
            )
              return n(r[e]);
            var d = t && ("load" === t.type ? "missing" : t.type),
              _ = t && t.target && t.target.src;
            (h.message =
              "Loading chunk " + e + " failed.\n(" + d + ": " + _ + ")"),
              (h.name = "ChunkLoadError"),
              (h.type = d),
              (h.request = _),
              (l[e] = h),
              c(h);
          });
        return (
          (f = setTimeout(function () {
            _({ type: "timeout", target: script });
          }, 12e4)),
          document.head.appendChild(script),
          d
        );
      }
      function d() {
        (window.__NUXT_JSONP__ = function (e, t) {
          r[e] = t;
        }),
          (window.__NUXT_JSONP_CACHE__ = r),
          (window.__NUXT_IMPORT__ = c);
      }
    },
    ,
    ,
    ,
    function (e, t, n) {
      (function (e) {
        e.installComponents = function (component, e) {
          var n =
            "function" == typeof component.exports
              ? component.exports.extendOptions
              : component.options;
          for (var i in ("function" == typeof component.exports &&
            (n.components = component.exports.options.components),
          (n.components = n.components || {}),
          e))
            n.components[i] = n.components[i] || e[i];
          n.functional &&
            (function (component, e) {
              if (component.exports[t]) return;
              component.exports[t] = !0;
              var n = component.exports.render;
              component.exports.render = function (t, r) {
                return n(
                  t,
                  Object.assign({}, r, {
                    _c: function (t, a, b) {
                      return r._c(e[t] || t, a, b);
                    },
                  })
                );
              };
            })(component, n.components);
        };
        var t = "_functionalComponents";
      }.call(this, n(28)));
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        function (e) {
          n(39), n(38), n(26), n(37), n(41);
          var t = n(19),
            r = n(5),
            o =
              (n(105),
              n(197),
              n(202),
              n(203),
              n(31),
              n(16),
              n(8),
              n(32),
              n(42),
              n(43),
              n(46),
              n(55),
              n(65),
              n(44),
              n(14),
              n(21),
              n(61),
              n(0)),
            l = n(175),
            c = n(117),
            d = n(1),
            f = n(30),
            h = n(185),
            _ = n(85),
            m = n(186);
          function v(e, t) {
            var n =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!n) {
              if (
                Array.isArray(e) ||
                (n = (function (e, t) {
                  if (!e) return;
                  if ("string" == typeof e) return y(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  "Object" === n && e.constructor && (n = e.constructor.name);
                  if ("Map" === n || "Set" === n) return Array.from(e);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return y(e, t);
                })(e)) ||
                (t && e && "number" == typeof e.length)
              ) {
                n && (e = n);
                var i = 0,
                  r = function () {};
                return {
                  s: r,
                  n: function () {
                    return i >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[i++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: r,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              l = !0,
              c = !1;
            return {
              s: function () {
                n = n.call(e);
              },
              n: function () {
                var e = n.next();
                return (l = e.done), e;
              },
              e: function (e) {
                (c = !0), (o = e);
              },
              f: function () {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (c) throw o;
                }
              },
            };
          }
          function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n;
          }
          Object(m.a)(),
            o.a.__nuxt__fetch__mixin__ ||
              (o.a.mixin(h.a), (o.a.__nuxt__fetch__mixin__ = !0)),
            o.a.component(_.a.name, _.a),
            o.a.component("NLink", _.a),
            e.fetch || (e.fetch = l.a);
          var x,
            w,
            O = [],
            k = window.__NUXT__ || {},
            j = k.config || {};
          j._app && (n.p = Object(d.v)(j._app.cdnURL, j._app.assetsPath)),
            Object.assign(o.a.config, { silent: !0, performance: !1 });
          var P = o.a.config.errorHandler || console.error;
          function E(e, t, n) {
            for (
              var r = function (component) {
                  var e =
                    (function (component, e) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[e]
                      )
                        return {};
                      var option = component.options[e];
                      if ("function" == typeof option) {
                        for (
                          var t = arguments.length,
                            n = new Array(t > 2 ? t - 2 : 0),
                            r = 2;
                          r < t;
                          r++
                        )
                          n[r - 2] = arguments[r];
                        return option.apply(void 0, n);
                      }
                      return option;
                    })(component, "transition", t, n) || {};
                  return "string" == typeof e ? { name: e } : e;
                },
                o = n ? Object(d.h)(n) : [],
                l = Math.max(e.length, o.length),
                c = [],
                f = function (i) {
                  var t = Object.assign({}, r(e[i])),
                    n = Object.assign({}, r(o[i]));
                  Object.keys(t)
                    .filter(function (e) {
                      return (
                        void 0 !== t[e] && !e.toLowerCase().includes("leave")
                      );
                    })
                    .forEach(function (e) {
                      n[e] = t[e];
                    }),
                    c.push(n);
                },
                i = 0;
              i < l;
              i++
            )
              f(i);
            return c;
          }
          function C(e, t, n) {
            return A.apply(this, arguments);
          }
          function A() {
            return (A = Object(r.a)(
              regeneratorRuntime.mark(function e(t, n, r) {
                var o,
                  l,
                  c,
                  f,
                  h = this;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(x.nuxt.err) || n.name !== t.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== t.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== t.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(d.j)(t.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (e.prev = 5),
                            !this._queryChanged)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.next = 9),
                            Object(d.r)(t, function (e, t) {
                              return { Component: e, instance: t };
                            })
                          );
                        case 9:
                          (o = e.sent),
                            o.some(function (e) {
                              var r = e.Component,
                                o = e.instance,
                                l = r.options.watchQuery;
                              return (
                                !0 === l ||
                                (Array.isArray(l)
                                  ? l.some(function (e) {
                                      return h._diffQuery[e];
                                    })
                                  : "function" == typeof l &&
                                    l.apply(o, [t.query, n.query]))
                              );
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start();
                        case 12:
                          r(), (e.next = 26);
                          break;
                        case 15:
                          if (
                            ((e.prev = 15),
                            (e.t0 = e.catch(5)),
                            (l = e.t0 || {}),
                            (c =
                              l.statusCode ||
                              l.status ||
                              (l.response && l.response.status) ||
                              500),
                            (f = l.message || ""),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(f))
                          ) {
                            e.next = 23;
                            break;
                          }
                          return window.location.reload(!0), e.abrupt("return");
                        case 23:
                          this.error({ statusCode: c, message: f }),
                            this.$nuxt.$emit("routeChanged", t, n, l),
                            r();
                        case 26:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[5, 15]]
                );
              })
            )).apply(this, arguments);
          }
          function S(e, t) {
            return k.serverRendered && t && Object(d.b)(e, t), (e._Ctor = e), e;
          }
          function $(e) {
            return Object(d.e)(
              e,
              (function () {
                var e = Object(r.a)(
                  regeneratorRuntime.mark(function e(t, n, r, o, l) {
                    var c;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("function" != typeof t || t.options) {
                              e.next = 4;
                              break;
                            }
                            return (e.next = 3), t();
                          case 3:
                            t = e.sent;
                          case 4:
                            return (
                              (c = S(
                                Object(d.s)(t),
                                k.data ? k.data[l] : null
                              )),
                              (r.components[o] = c),
                              e.abrupt("return", c)
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n, r, o, l) {
                  return e.apply(this, arguments);
                };
              })()
            );
          }
          function D(e, t, n) {
            var r = this,
              o = [],
              l = !1;
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(d.s)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                e.forEach(function (e) {
                  e.options.middleware && (o = o.concat(e.options.middleware));
                })),
              (o = o.map(function (e) {
                return "function" == typeof e
                  ? e
                  : ("function" != typeof c.a[e] &&
                      ((l = !0),
                      r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + e,
                      })),
                    c.a[e]);
              })),
              !l)
            )
              return Object(d.o)(o, t);
          }
          function M(e, t, n) {
            return T.apply(this, arguments);
          }
          function T() {
            return (T = Object(r.a)(
              regeneratorRuntime.mark(function e(t, n, o) {
                var l,
                  c,
                  h,
                  _,
                  m,
                  y,
                  w,
                  k,
                  j,
                  P,
                  C,
                  A,
                  S,
                  $,
                  M,
                  T,
                  I = this;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !1 !== this._routeChanged ||
                            !1 !== this._paramChanged ||
                            !1 !== this._queryChanged
                          ) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", o());
                        case 2:
                          return (
                            (l = !1),
                            t === n
                              ? ((O = []), (l = !0))
                              : ((c = []),
                                (O = Object(d.h)(n, c).map(function (e, i) {
                                  return Object(d.c)(n.matched[c[i]].path)(
                                    n.params
                                  );
                                }))),
                            (h = !1),
                            (_ = function (path) {
                              n.path === path.path &&
                                I.$loading.finish &&
                                I.$loading.finish(),
                                n.path !== path.path &&
                                  I.$loading.pause &&
                                  I.$loading.pause(),
                                h || ((h = !0), o(path));
                            }),
                            (e.next = 8),
                            Object(d.t)(x, {
                              route: t,
                              from: n,
                              next: _.bind(this),
                            })
                          );
                        case 8:
                          if (
                            ((this._dateLastError = x.nuxt.dateErr),
                            (this._hadError = Boolean(x.nuxt.err)),
                            (m = []),
                            (y = Object(d.h)(t, m)).length)
                          ) {
                            e.next = 27;
                            break;
                          }
                          return (e.next = 15), D.call(this, y, x.context);
                        case 15:
                          if (!h) {
                            e.next = 17;
                            break;
                          }
                          return e.abrupt("return");
                        case 17:
                          return (
                            (w = (f.a.options || f.a).layout),
                            (e.next = 20),
                            this.loadLayout(
                              "function" == typeof w
                                ? w.call(f.a, x.context)
                                : w
                            )
                          );
                        case 20:
                          return (
                            (k = e.sent),
                            (e.next = 23),
                            D.call(this, y, x.context, k)
                          );
                        case 23:
                          if (!h) {
                            e.next = 25;
                            break;
                          }
                          return e.abrupt("return");
                        case 25:
                          return (
                            x.context.error({
                              statusCode: 404,
                              message: "This page could not be found",
                            }),
                            e.abrupt("return", o())
                          );
                        case 27:
                          return (
                            y.forEach(function (e) {
                              e._Ctor &&
                                e._Ctor.options &&
                                ((e.options.asyncData =
                                  e._Ctor.options.asyncData),
                                (e.options.fetch = e._Ctor.options.fetch));
                            }),
                            this.setTransitions(E(y, t, n)),
                            (e.prev = 29),
                            (e.next = 32),
                            D.call(this, y, x.context)
                          );
                        case 32:
                          if (!h) {
                            e.next = 34;
                            break;
                          }
                          return e.abrupt("return");
                        case 34:
                          if (!x.context._errored) {
                            e.next = 36;
                            break;
                          }
                          return e.abrupt("return", o());
                        case 36:
                          return (
                            "function" == typeof (j = y[0].options.layout) &&
                              (j = j(x.context)),
                            (e.next = 40),
                            this.loadLayout(j)
                          );
                        case 40:
                          return (
                            (j = e.sent),
                            (e.next = 43),
                            D.call(this, y, x.context, j)
                          );
                        case 43:
                          if (!h) {
                            e.next = 45;
                            break;
                          }
                          return e.abrupt("return");
                        case 45:
                          if (!x.context._errored) {
                            e.next = 47;
                            break;
                          }
                          return e.abrupt("return", o());
                        case 47:
                          (P = !0),
                            (e.prev = 48),
                            (C = v(y)),
                            (e.prev = 50),
                            C.s();
                        case 52:
                          if ((A = C.n()).done) {
                            e.next = 63;
                            break;
                          }
                          if (
                            "function" == typeof (S = A.value).options.validate
                          ) {
                            e.next = 56;
                            break;
                          }
                          return e.abrupt("continue", 61);
                        case 56:
                          return (e.next = 58), S.options.validate(x.context);
                        case 58:
                          if ((P = e.sent)) {
                            e.next = 61;
                            break;
                          }
                          return e.abrupt("break", 63);
                        case 61:
                          e.next = 52;
                          break;
                        case 63:
                          e.next = 68;
                          break;
                        case 65:
                          (e.prev = 65), (e.t0 = e.catch(50)), C.e(e.t0);
                        case 68:
                          return (e.prev = 68), C.f(), e.finish(68);
                        case 71:
                          e.next = 77;
                          break;
                        case 73:
                          return (
                            (e.prev = 73),
                            (e.t1 = e.catch(48)),
                            this.error({
                              statusCode: e.t1.statusCode || "500",
                              message: e.t1.message,
                            }),
                            e.abrupt("return", o())
                          );
                        case 77:
                          if (P) {
                            e.next = 80;
                            break;
                          }
                          return (
                            this.error({
                              statusCode: 404,
                              message: "This page could not be found",
                            }),
                            e.abrupt("return", o())
                          );
                        case 80:
                          return (
                            (e.next = 82),
                            Promise.all(
                              y.map(
                                (function () {
                                  var e = Object(r.a)(
                                    regeneratorRuntime.mark(function e(r, i) {
                                      var o, c, f, h, _, v, y, w, p;
                                      return regeneratorRuntime.wrap(function (
                                        e
                                      ) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                ((r._path = Object(d.c)(
                                                  t.matched[m[i]].path
                                                )(t.params)),
                                                (r._dataRefresh = !1),
                                                (o = r._path !== O[i]),
                                                I._routeChanged && o
                                                  ? (r._dataRefresh = !0)
                                                  : I._paramChanged && o
                                                  ? ((c = r.options.watchParam),
                                                    (r._dataRefresh = !1 !== c))
                                                  : I._queryChanged &&
                                                    (!0 ===
                                                    (f = r.options.watchQuery)
                                                      ? (r._dataRefresh = !0)
                                                      : Array.isArray(f)
                                                      ? (r._dataRefresh = f.some(
                                                          function (e) {
                                                            return I._diffQuery[
                                                              e
                                                            ];
                                                          }
                                                        ))
                                                      : "function" ==
                                                          typeof f &&
                                                        ($ ||
                                                          ($ = Object(d.i)(t)),
                                                        (r._dataRefresh = f.apply(
                                                          $[i],
                                                          [t.query, n.query]
                                                        )))),
                                                I._hadError ||
                                                  !I._isMounted ||
                                                  r._dataRefresh)
                                              ) {
                                                e.next = 6;
                                                break;
                                              }
                                              return e.abrupt("return");
                                            case 6:
                                              return (
                                                (h = []),
                                                (_ =
                                                  r.options.asyncData &&
                                                  "function" ==
                                                    typeof r.options.asyncData),
                                                (v =
                                                  Boolean(r.options.fetch) &&
                                                  r.options.fetch.length),
                                                (y = _ && v ? 30 : 45),
                                                _ &&
                                                  ((w =
                                                    I.isPreview || l
                                                      ? Object(d.q)(
                                                          r.options.asyncData,
                                                          x.context
                                                        )
                                                      : I.fetchPayload(t.path)
                                                          .then(function (e) {
                                                            return e.data[i];
                                                          })
                                                          .catch(function (e) {
                                                            return Object(d.q)(
                                                              r.options
                                                                .asyncData,
                                                              x.context
                                                            );
                                                          })).then(function (
                                                    e
                                                  ) {
                                                    Object(d.b)(r, e),
                                                      I.$loading.increase &&
                                                        I.$loading.increase(y);
                                                  }),
                                                  h.push(w)),
                                                (I.$loading.manual =
                                                  !1 === r.options.loading),
                                                I.isPreview ||
                                                  l ||
                                                  h.push(
                                                    I.fetchPayload(
                                                      t.path
                                                    ).catch(function (e) {
                                                      return null;
                                                    })
                                                  ),
                                                v &&
                                                  (((p = r.options.fetch(
                                                    x.context
                                                  )) &&
                                                    (p instanceof Promise ||
                                                      "function" ==
                                                        typeof p.then)) ||
                                                    (p = Promise.resolve(p)),
                                                  p.then(function (e) {
                                                    I.$loading.increase &&
                                                      I.$loading.increase(y);
                                                  }),
                                                  h.push(p)),
                                                e.abrupt(
                                                  "return",
                                                  Promise.all(h)
                                                )
                                              );
                                            case 15:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e);
                                    })
                                  );
                                  return function (t, n) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )
                            )
                          );
                        case 82:
                          h ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            o()),
                            (e.next = 99);
                          break;
                        case 85:
                          if (
                            ((e.prev = 85),
                            (e.t2 = e.catch(29)),
                            "ERR_REDIRECT" !== (M = e.t2 || {}).message)
                          ) {
                            e.next = 90;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            this.$nuxt.$emit("routeChanged", t, n, M)
                          );
                        case 90:
                          return (
                            (O = []),
                            Object(d.l)(M),
                            "function" ==
                              typeof (T = (f.a.options || f.a).layout) &&
                              (T = T(x.context)),
                            (e.next = 96),
                            this.loadLayout(T)
                          );
                        case 96:
                          this.error(M),
                            this.$nuxt.$emit("routeChanged", t, n, M),
                            o();
                        case 99:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [
                    [29, 85],
                    [48, 73],
                    [50, 65, 68, 71],
                  ]
                );
              })
            )).apply(this, arguments);
          }
          function I(e, n) {
            Object(d.e)(e, function (e, n, r, l) {
              return (
                "object" !== Object(t.a)(e) ||
                  e.options ||
                  (((e = o.a.extend(e))._Ctor = e), (r.components[l] = e)),
                e
              );
            });
          }
          function R(e) {
            var t = Boolean(this.$options.nuxt.err);
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              (t = !1);
            var n = t
              ? (f.a.options || f.a).layout
              : e.matched[0].components.default.options.layout;
            "function" == typeof n && (n = n(x.context)), this.setLayout(n);
          }
          function L(e) {
            e._hadError &&
              e._dateLastError === e.$options.nuxt.dateErr &&
              e.error();
          }
          function B(e, t) {
            var n = this;
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var r = Object(d.i)(e),
                l = Object(d.h)(e),
                c = !1;
              o.a.nextTick(function () {
                r.forEach(function (e, i) {
                  if (
                    e &&
                    !e._isDestroyed &&
                    e.constructor._dataRefresh &&
                    l[i] === e.constructor &&
                    !0 !== e.$vnode.data.keepAlive &&
                    "function" == typeof e.constructor.options.data
                  ) {
                    var t = e.constructor.options.data.call(e);
                    for (var n in t) o.a.set(e.$data, n, t[n]);
                    c = !0;
                  }
                }),
                  c &&
                    window.$nuxt.$nextTick(function () {
                      window.$nuxt.$emit("triggerScroll");
                    }),
                  L(n);
              });
            }
          }
          function U(e) {
            window.onNuxtReadyCbs.forEach(function (t) {
              "function" == typeof t && t(e);
            }),
              "function" == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(e),
              w.afterEach(function (t, n) {
                o.a.nextTick(function () {
                  return e.$nuxt.$emit("routeChanged", t, n);
                });
              });
          }
          function F() {
            return (F = Object(r.a)(
              regeneratorRuntime.mark(function e(t) {
                var n, r, l, c, f, h;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((x = t.app),
                            (w = t.router),
                            (n = new o.a(x)),
                            k.data || !k.serverRendered)
                          ) {
                            e.next = 13;
                            break;
                          }
                          return (
                            (e.prev = 4),
                            (e.next = 7),
                            n.fetchPayload(k.routePath || n.context.route.path)
                          );
                        case 7:
                          (r = e.sent), Object.assign(k, r), (e.next = 13);
                          break;
                        case 11:
                          (e.prev = 11), (e.t0 = e.catch(4));
                        case 13:
                          return (
                            (l = k.layout || "default"),
                            (e.next = 16),
                            n.loadLayout(l)
                          );
                        case 16:
                          return (
                            n.setLayout(l),
                            (c = function () {
                              n.$mount("#__nuxt"),
                                w.afterEach(I),
                                w.afterEach(R.bind(n)),
                                w.afterEach(B.bind(n)),
                                o.a.nextTick(function () {
                                  U(n);
                                });
                            }),
                            (e.next = 20),
                            Promise.all($(x.context.route))
                          );
                        case 20:
                          if (
                            ((f = e.sent),
                            (n.setTransitions = n.$options.nuxt.setTransitions.bind(
                              n
                            )),
                            f.length &&
                              (n.setTransitions(E(f, w.currentRoute)),
                              (O = w.currentRoute.matched.map(function (e) {
                                return Object(d.c)(e.path)(
                                  w.currentRoute.params
                                );
                              }))),
                            (n.$loading = {}),
                            k.error && n.error(k.error),
                            w.beforeEach(C.bind(n)),
                            w.beforeEach(M.bind(n)),
                            !k.serverRendered)
                          ) {
                            e.next = 29;
                            break;
                          }
                          return e.abrupt("return", c());
                        case 29:
                          return (
                            (h = function () {
                              I(w.currentRoute, w.currentRoute),
                                R.call(n, w.currentRoute),
                                L(n),
                                c();
                            }),
                            (e.next = 32),
                            new Promise(function (e) {
                              return setTimeout(e, 0);
                            })
                          );
                        case 32:
                          M.call(
                            n,
                            w.currentRoute,
                            w.currentRoute,
                            function (path) {
                              if (path) {
                                var e = w.afterEach(function (t, n) {
                                  e(), h();
                                });
                                w.push(path, void 0, function (e) {
                                  e && P(e);
                                });
                              } else h();
                            }
                          );
                        case 33:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 11]]
                );
              })
            )).apply(this, arguments);
          }
          Object(f.b)(null, k.config)
            .then(function (e) {
              return F.apply(this, arguments);
            })
            .catch(P);
        }.call(this, n(28));
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
    function (e, t, n) {
      "use strict";
      n(162);
    },
    function (e, t, n) {},
    ,
    ,
    function (e, t, n) {
      "use strict";
      (t.html = n(228)),
        (t.svg = n(231)),
        (t.normalize = n(116)),
        (t.find = n(233));
    },
    function (e, t, n) {
      "use strict";
      var r = n(165),
        o = n(167),
        l = n(170),
        c = n(171),
        d = n(174),
        html = n(230);
      e.exports = r([l, o, c, d, html]);
    },
    function (e, t) {
      e.exports = function () {
        for (var e = {}, i = 0; i < arguments.length; i++) {
          var source = arguments[i];
          for (var t in source) n.call(source, t) && (e[t] = source[t]);
        }
        return e;
      };
      var n = Object.prototype.hasOwnProperty;
    },
    function (e, t, n) {
      "use strict";
      var r = n(81),
        o = n(51),
        l = n(172),
        c = r.boolean,
        d = r.overloadedBoolean,
        f = r.booleanish,
        h = r.number,
        _ = r.spaceSeparated,
        m = r.commaSeparated;
      e.exports = o({
        space: "html",
        attributes: {
          acceptcharset: "accept-charset",
          classname: "class",
          htmlfor: "for",
          httpequiv: "http-equiv",
        },
        transform: l,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          abbr: null,
          accept: m,
          acceptCharset: _,
          accessKey: _,
          action: null,
          allow: null,
          allowFullScreen: c,
          allowPaymentRequest: c,
          allowUserMedia: c,
          alt: null,
          as: null,
          async: c,
          autoCapitalize: null,
          autoComplete: _,
          autoFocus: c,
          autoPlay: c,
          capture: c,
          charSet: null,
          checked: c,
          cite: null,
          className: _,
          cols: h,
          colSpan: null,
          content: null,
          contentEditable: f,
          controls: c,
          controlsList: _,
          coords: h | m,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: c,
          defer: c,
          dir: null,
          dirName: null,
          disabled: c,
          download: d,
          draggable: f,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: c,
          formTarget: null,
          headers: _,
          height: h,
          hidden: c,
          high: h,
          href: null,
          hrefLang: null,
          htmlFor: _,
          httpEquiv: _,
          id: null,
          imageSizes: null,
          imageSrcSet: m,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: c,
          itemId: null,
          itemProp: _,
          itemRef: _,
          itemScope: c,
          itemType: _,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: c,
          low: h,
          manifest: null,
          max: null,
          maxLength: h,
          media: null,
          method: null,
          min: null,
          minLength: h,
          multiple: c,
          muted: c,
          name: null,
          nonce: null,
          noModule: c,
          noValidate: c,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: c,
          optimum: h,
          pattern: null,
          ping: _,
          placeholder: null,
          playsInline: c,
          poster: null,
          preload: null,
          readOnly: c,
          referrerPolicy: null,
          rel: _,
          required: c,
          reversed: c,
          rows: h,
          rowSpan: h,
          sandbox: _,
          scope: null,
          scoped: c,
          seamless: c,
          selected: c,
          shape: null,
          size: h,
          sizes: null,
          slot: null,
          span: h,
          spellCheck: f,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: m,
          start: h,
          step: null,
          style: null,
          tabIndex: h,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: c,
          useMap: null,
          value: f,
          width: h,
          wrap: null,
          align: null,
          aLink: null,
          archive: _,
          axis: null,
          background: null,
          bgColor: null,
          border: h,
          borderColor: null,
          bottomMargin: h,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: c,
          declare: c,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: h,
          leftMargin: h,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: h,
          marginWidth: h,
          noResize: c,
          noHref: c,
          noShade: c,
          noWrap: c,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: h,
          rules: null,
          scheme: null,
          scrolling: f,
          standby: null,
          summary: null,
          text: null,
          topMargin: h,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: h,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: c,
          disableRemotePlayback: c,
          prefix: null,
          property: null,
          results: h,
          security: null,
          unselectable: null,
        },
      });
    },
    function (e, t, n) {
      "use strict";
      var r = n(165),
        o = n(167),
        l = n(170),
        c = n(171),
        d = n(174),
        svg = n(232);
      e.exports = r([l, o, c, d, svg]);
    },
    function (e, t, n) {
      "use strict";
      var r = n(81),
        o = n(51),
        l = n(173),
        c = r.boolean,
        d = r.number,
        f = r.spaceSeparated,
        h = r.commaSeparated,
        _ = r.commaOrSpaceSeparated;
      e.exports = o({
        space: "svg",
        attributes: {
          accentHeight: "accent-height",
          alignmentBaseline: "alignment-baseline",
          arabicForm: "arabic-form",
          baselineShift: "baseline-shift",
          capHeight: "cap-height",
          className: "class",
          clipPath: "clip-path",
          clipRule: "clip-rule",
          colorInterpolation: "color-interpolation",
          colorInterpolationFilters: "color-interpolation-filters",
          colorProfile: "color-profile",
          colorRendering: "color-rendering",
          crossOrigin: "crossorigin",
          dataType: "datatype",
          dominantBaseline: "dominant-baseline",
          enableBackground: "enable-background",
          fillOpacity: "fill-opacity",
          fillRule: "fill-rule",
          floodColor: "flood-color",
          floodOpacity: "flood-opacity",
          fontFamily: "font-family",
          fontSize: "font-size",
          fontSizeAdjust: "font-size-adjust",
          fontStretch: "font-stretch",
          fontStyle: "font-style",
          fontVariant: "font-variant",
          fontWeight: "font-weight",
          glyphName: "glyph-name",
          glyphOrientationHorizontal: "glyph-orientation-horizontal",
          glyphOrientationVertical: "glyph-orientation-vertical",
          hrefLang: "hreflang",
          horizAdvX: "horiz-adv-x",
          horizOriginX: "horiz-origin-x",
          horizOriginY: "horiz-origin-y",
          imageRendering: "image-rendering",
          letterSpacing: "letter-spacing",
          lightingColor: "lighting-color",
          markerEnd: "marker-end",
          markerMid: "marker-mid",
          markerStart: "marker-start",
          navDown: "nav-down",
          navDownLeft: "nav-down-left",
          navDownRight: "nav-down-right",
          navLeft: "nav-left",
          navNext: "nav-next",
          navPrev: "nav-prev",
          navRight: "nav-right",
          navUp: "nav-up",
          navUpLeft: "nav-up-left",
          navUpRight: "nav-up-right",
          onAbort: "onabort",
          onActivate: "onactivate",
          onAfterPrint: "onafterprint",
          onBeforePrint: "onbeforeprint",
          onBegin: "onbegin",
          onCancel: "oncancel",
          onCanPlay: "oncanplay",
          onCanPlayThrough: "oncanplaythrough",
          onChange: "onchange",
          onClick: "onclick",
          onClose: "onclose",
          onCopy: "oncopy",
          onCueChange: "oncuechange",
          onCut: "oncut",
          onDblClick: "ondblclick",
          onDrag: "ondrag",
          onDragEnd: "ondragend",
          onDragEnter: "ondragenter",
          onDragExit: "ondragexit",
          onDragLeave: "ondragleave",
          onDragOver: "ondragover",
          onDragStart: "ondragstart",
          onDrop: "ondrop",
          onDurationChange: "ondurationchange",
          onEmptied: "onemptied",
          onEnd: "onend",
          onEnded: "onended",
          onError: "onerror",
          onFocus: "onfocus",
          onFocusIn: "onfocusin",
          onFocusOut: "onfocusout",
          onHashChange: "onhashchange",
          onInput: "oninput",
          onInvalid: "oninvalid",
          onKeyDown: "onkeydown",
          onKeyPress: "onkeypress",
          onKeyUp: "onkeyup",
          onLoad: "onload",
          onLoadedData: "onloadeddata",
          onLoadedMetadata: "onloadedmetadata",
          onLoadStart: "onloadstart",
          onMessage: "onmessage",
          onMouseDown: "onmousedown",
          onMouseEnter: "onmouseenter",
          onMouseLeave: "onmouseleave",
          onMouseMove: "onmousemove",
          onMouseOut: "onmouseout",
          onMouseOver: "onmouseover",
          onMouseUp: "onmouseup",
          onMouseWheel: "onmousewheel",
          onOffline: "onoffline",
          onOnline: "ononline",
          onPageHide: "onpagehide",
          onPageShow: "onpageshow",
          onPaste: "onpaste",
          onPause: "onpause",
          onPlay: "onplay",
          onPlaying: "onplaying",
          onPopState: "onpopstate",
          onProgress: "onprogress",
          onRateChange: "onratechange",
          onRepeat: "onrepeat",
          onReset: "onreset",
          onResize: "onresize",
          onScroll: "onscroll",
          onSeeked: "onseeked",
          onSeeking: "onseeking",
          onSelect: "onselect",
          onShow: "onshow",
          onStalled: "onstalled",
          onStorage: "onstorage",
          onSubmit: "onsubmit",
          onSuspend: "onsuspend",
          onTimeUpdate: "ontimeupdate",
          onToggle: "ontoggle",
          onUnload: "onunload",
          onVolumeChange: "onvolumechange",
          onWaiting: "onwaiting",
          onZoom: "onzoom",
          overlinePosition: "overline-position",
          overlineThickness: "overline-thickness",
          paintOrder: "paint-order",
          panose1: "panose-1",
          pointerEvents: "pointer-events",
          referrerPolicy: "referrerpolicy",
          renderingIntent: "rendering-intent",
          shapeRendering: "shape-rendering",
          stopColor: "stop-color",
          stopOpacity: "stop-opacity",
          strikethroughPosition: "strikethrough-position",
          strikethroughThickness: "strikethrough-thickness",
          strokeDashArray: "stroke-dasharray",
          strokeDashOffset: "stroke-dashoffset",
          strokeLineCap: "stroke-linecap",
          strokeLineJoin: "stroke-linejoin",
          strokeMiterLimit: "stroke-miterlimit",
          strokeOpacity: "stroke-opacity",
          strokeWidth: "stroke-width",
          tabIndex: "tabindex",
          textAnchor: "text-anchor",
          textDecoration: "text-decoration",
          textRendering: "text-rendering",
          typeOf: "typeof",
          underlinePosition: "underline-position",
          underlineThickness: "underline-thickness",
          unicodeBidi: "unicode-bidi",
          unicodeRange: "unicode-range",
          unitsPerEm: "units-per-em",
          vAlphabetic: "v-alphabetic",
          vHanging: "v-hanging",
          vIdeographic: "v-ideographic",
          vMathematical: "v-mathematical",
          vectorEffect: "vector-effect",
          vertAdvY: "vert-adv-y",
          vertOriginX: "vert-origin-x",
          vertOriginY: "vert-origin-y",
          wordSpacing: "word-spacing",
          writingMode: "writing-mode",
          xHeight: "x-height",
          playbackOrder: "playbackorder",
          timelineBegin: "timelinebegin",
        },
        transform: l,
        properties: {
          about: _,
          accentHeight: d,
          accumulate: null,
          additive: null,
          alignmentBaseline: null,
          alphabetic: d,
          amplitude: d,
          arabicForm: null,
          ascent: d,
          attributeName: null,
          attributeType: null,
          azimuth: d,
          bandwidth: null,
          baselineShift: null,
          baseFrequency: null,
          baseProfile: null,
          bbox: null,
          begin: null,
          bias: d,
          by: null,
          calcMode: null,
          capHeight: d,
          className: f,
          clip: null,
          clipPath: null,
          clipPathUnits: null,
          clipRule: null,
          color: null,
          colorInterpolation: null,
          colorInterpolationFilters: null,
          colorProfile: null,
          colorRendering: null,
          content: null,
          contentScriptType: null,
          contentStyleType: null,
          crossOrigin: null,
          cursor: null,
          cx: null,
          cy: null,
          d: null,
          dataType: null,
          defaultAction: null,
          descent: d,
          diffuseConstant: d,
          direction: null,
          display: null,
          dur: null,
          divisor: d,
          dominantBaseline: null,
          download: c,
          dx: null,
          dy: null,
          edgeMode: null,
          editable: null,
          elevation: d,
          enableBackground: null,
          end: null,
          event: null,
          exponent: d,
          externalResourcesRequired: null,
          fill: null,
          fillOpacity: d,
          fillRule: null,
          filter: null,
          filterRes: null,
          filterUnits: null,
          floodColor: null,
          floodOpacity: null,
          focusable: null,
          focusHighlight: null,
          fontFamily: null,
          fontSize: null,
          fontSizeAdjust: null,
          fontStretch: null,
          fontStyle: null,
          fontVariant: null,
          fontWeight: null,
          format: null,
          fr: null,
          from: null,
          fx: null,
          fy: null,
          g1: h,
          g2: h,
          glyphName: h,
          glyphOrientationHorizontal: null,
          glyphOrientationVertical: null,
          glyphRef: null,
          gradientTransform: null,
          gradientUnits: null,
          handler: null,
          hanging: d,
          hatchContentUnits: null,
          hatchUnits: null,
          height: null,
          href: null,
          hrefLang: null,
          horizAdvX: d,
          horizOriginX: d,
          horizOriginY: d,
          id: null,
          ideographic: d,
          imageRendering: null,
          initialVisibility: null,
          in: null,
          in2: null,
          intercept: d,
          k: d,
          k1: d,
          k2: d,
          k3: d,
          k4: d,
          kernelMatrix: _,
          kernelUnitLength: null,
          keyPoints: null,
          keySplines: null,
          keyTimes: null,
          kerning: null,
          lang: null,
          lengthAdjust: null,
          letterSpacing: null,
          lightingColor: null,
          limitingConeAngle: d,
          local: null,
          markerEnd: null,
          markerMid: null,
          markerStart: null,
          markerHeight: null,
          markerUnits: null,
          markerWidth: null,
          mask: null,
          maskContentUnits: null,
          maskUnits: null,
          mathematical: null,
          max: null,
          media: null,
          mediaCharacterEncoding: null,
          mediaContentEncodings: null,
          mediaSize: d,
          mediaTime: null,
          method: null,
          min: null,
          mode: null,
          name: null,
          navDown: null,
          navDownLeft: null,
          navDownRight: null,
          navLeft: null,
          navNext: null,
          navPrev: null,
          navRight: null,
          navUp: null,
          navUpLeft: null,
          navUpRight: null,
          numOctaves: null,
          observer: null,
          offset: null,
          onAbort: null,
          onActivate: null,
          onAfterPrint: null,
          onBeforePrint: null,
          onBegin: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnd: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFocusIn: null,
          onFocusOut: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadStart: null,
          onMessage: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onMouseWheel: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRepeat: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onShow: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onZoom: null,
          opacity: null,
          operator: null,
          order: null,
          orient: null,
          orientation: null,
          origin: null,
          overflow: null,
          overlay: null,
          overlinePosition: d,
          overlineThickness: d,
          paintOrder: null,
          panose1: null,
          path: null,
          pathLength: d,
          patternContentUnits: null,
          patternTransform: null,
          patternUnits: null,
          phase: null,
          ping: f,
          pitch: null,
          playbackOrder: null,
          pointerEvents: null,
          points: null,
          pointsAtX: d,
          pointsAtY: d,
          pointsAtZ: d,
          preserveAlpha: null,
          preserveAspectRatio: null,
          primitiveUnits: null,
          propagate: null,
          property: _,
          r: null,
          radius: null,
          referrerPolicy: null,
          refX: null,
          refY: null,
          rel: _,
          rev: _,
          renderingIntent: null,
          repeatCount: null,
          repeatDur: null,
          requiredExtensions: _,
          requiredFeatures: _,
          requiredFonts: _,
          requiredFormats: _,
          resource: null,
          restart: null,
          result: null,
          rotate: null,
          rx: null,
          ry: null,
          scale: null,
          seed: null,
          shapeRendering: null,
          side: null,
          slope: null,
          snapshotTime: null,
          specularConstant: d,
          specularExponent: d,
          spreadMethod: null,
          spacing: null,
          startOffset: null,
          stdDeviation: null,
          stemh: null,
          stemv: null,
          stitchTiles: null,
          stopColor: null,
          stopOpacity: null,
          strikethroughPosition: d,
          strikethroughThickness: d,
          string: null,
          stroke: null,
          strokeDashArray: _,
          strokeDashOffset: null,
          strokeLineCap: null,
          strokeLineJoin: null,
          strokeMiterLimit: d,
          strokeOpacity: d,
          strokeWidth: null,
          style: null,
          surfaceScale: d,
          syncBehavior: null,
          syncBehaviorDefault: null,
          syncMaster: null,
          syncTolerance: null,
          syncToleranceDefault: null,
          systemLanguage: _,
          tabIndex: d,
          tableValues: null,
          target: null,
          targetX: d,
          targetY: d,
          textAnchor: null,
          textDecoration: null,
          textRendering: null,
          textLength: null,
          timelineBegin: null,
          title: null,
          transformBehavior: null,
          type: null,
          typeOf: _,
          to: null,
          transform: null,
          u1: null,
          u2: null,
          underlinePosition: d,
          underlineThickness: d,
          unicode: null,
          unicodeBidi: null,
          unicodeRange: null,
          unitsPerEm: d,
          values: null,
          vAlphabetic: d,
          vMathematical: d,
          vectorEffect: null,
          vHanging: d,
          vIdeographic: d,
          version: null,
          vertAdvY: d,
          vertOriginX: d,
          vertOriginY: d,
          viewBox: null,
          viewTarget: null,
          visibility: null,
          width: null,
          widths: null,
          wordSpacing: null,
          writingMode: null,
          x: null,
          x1: null,
          x2: null,
          xChannelSelector: null,
          xHeight: d,
          y: null,
          y1: null,
          y2: null,
          yChannelSelector: null,
          z: null,
          zoomAndPan: null,
        },
      });
    },
    function (e, t, n) {
      "use strict";
      var r = n(116),
        o = n(168),
        l = n(169),
        data = "data";
      e.exports = function (e, t) {
        var n = r(t),
          m = t,
          v = l;
        if (n in e.normal) return e.property[e.normal[n]];
        n.length > 4 &&
          n.slice(0, 4) === data &&
          c.test(t) &&
          ("-" === t.charAt(4)
            ? (m = (function (e) {
                var t = e.slice(5).replace(d, _);
                return data + t.charAt(0).toUpperCase() + t.slice(1);
              })(t))
            : (t = (function (e) {
                var t = e.slice(4);
                if (d.test(t)) return e;
                "-" !== (t = t.replace(f, h)).charAt(0) && (t = "-" + t);
                return data + t;
              })(t)),
          (v = o));
        return new v(m, t);
      };
      var c = /^data[-\w.:]+$/i,
        d = /-[a-z]/g,
        f = /[A-Z]/g;
      function h(e) {
        return "-" + e.toLowerCase();
      }
      function _(e) {
        return e.charAt(1).toUpperCase();
      }
    },
    function (e, t) {
      !(function (e) {
        var t = /[*&][^\s[\]{},]+/,
          n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
          r =
            "(?:" +
            n.source +
            "(?:[ \t]+" +
            t.source +
            ")?|" +
            t.source +
            "(?:[ \t]+" +
            n.source +
            ")?)",
          o = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
            /<PLAIN>/g,
            function () {
              return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                .source;
            }
          ),
          l = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
        function c(e, t) {
          t = (t || "").replace(/m/g, "") + "m";
          var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\s*)?#))/.source
            .replace(/<<prop>>/g, function () {
              return r;
            })
            .replace(/<<value>>/g, function () {
              return e;
            });
          return RegExp(pattern, t);
        }
        (e.languages.yaml = {
          scalar: {
            pattern: RegExp(
              /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                /<<prop>>/g,
                function () {
                  return r;
                }
              )
            ),
            lookbehind: !0,
            alias: "string",
          },
          comment: /#.*/,
          key: {
            pattern: RegExp(
              /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                .replace(/<<prop>>/g, function () {
                  return r;
                })
                .replace(/<<key>>/g, function () {
                  return "(?:" + o + "|" + l + ")";
                })
            ),
            lookbehind: !0,
            greedy: !0,
            alias: "atrule",
          },
          directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: "important",
          },
          datetime: {
            pattern: c(
              /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                .source
            ),
            lookbehind: !0,
            alias: "number",
          },
          boolean: {
            pattern: c(/true|false/.source, "i"),
            lookbehind: !0,
            alias: "important",
          },
          null: {
            pattern: c(/null|~/.source, "i"),
            lookbehind: !0,
            alias: "important",
          },
          string: { pattern: c(l), lookbehind: !0, greedy: !0 },
          number: {
            pattern: c(
              /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                .source,
              "i"
            ),
            lookbehind: !0,
          },
          tag: n,
          important: t,
          punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
        }),
          (e.languages.yml = e.languages.yaml);
      })(Prism);
    },
    function (e, t) {
      (Prism.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: {
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: !0,
          inside: {
            "internal-subset": {
              pattern: /(\[)[\s\S]+(?=\]>$)/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/,
            name: /[^\s<>'"]+/,
          },
        },
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: !0,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/,
              inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
              },
            },
            punctuation: /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: { namespace: /^[^\s>\/:]+:/ },
            },
          },
        },
        entity: [
          { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
          /&#x?[\da-f]{1,8};/i,
        ],
      }),
        (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
          Prism.languages.markup.entity),
        (Prism.languages.markup.doctype.inside["internal-subset"].inside =
          Prism.languages.markup),
        Prism.hooks.add("wrap", function (e) {
          "entity" === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, "&"));
        }),
        Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
          value: function (e, t) {
            var n = {};
            (n["language-" + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: Prism.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var r = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            r["language-" + t] = {
              pattern: /[\s\S]+/,
              inside: Prism.languages[t],
            };
            var o = {};
            (o[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e;
                  }
                ),
                "i"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r,
            }),
              Prism.languages.insertBefore("markup", "cdata", o);
          },
        }),
        (Prism.languages.html = Prism.languages.markup),
        (Prism.languages.mathml = Prism.languages.markup),
        (Prism.languages.svg = Prism.languages.markup),
        (Prism.languages.xml = Prism.languages.extend("markup", {})),
        (Prism.languages.ssml = Prism.languages.xml),
        (Prism.languages.atom = Prism.languages.xml),
        (Prism.languages.rss = Prism.languages.xml);
    },
    function (e, t) {
      Prism.languages.r = {
        comment: /#.*/,
        string: { pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
        "percent-operator": { pattern: /%[^%\s]*%/, alias: "operator" },
        boolean: /\b(?:TRUE|FALSE)\b/,
        ellipsis: /\.\.(?:\.|\d+)/,
        number: [
          /\b(?:NaN|Inf)\b/,
          /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/,
        ],
        keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
        operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
        punctuation: /[(){}\[\],;]/,
      };
    },
    function (e, t) {
      !(function (e) {
        var t = e.util.clone(e.languages.javascript);
        (e.languages.jsx = e.languages.extend("markup", t)),
          (e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i),
          (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
          (e.languages.jsx.tag.inside[
            "attr-value"
          ].pattern = /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i),
          (e.languages.jsx.tag.inside.tag.inside[
            "class-name"
          ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
          e.languages.insertBefore(
            "inside",
            "attr-name",
            {
              spread: {
                pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
                inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ },
              },
            },
            e.languages.jsx.tag
          ),
          e.languages.insertBefore(
            "inside",
            "attr-value",
            {
              script: {
                pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
                inside: {
                  "script-punctuation": {
                    pattern: /^=(?={)/,
                    alias: "punctuation",
                  },
                  rest: e.languages.jsx,
                },
                alias: "language-javascript",
              },
            },
            e.languages.jsx.tag
          );
        var n = function (e) {
            return e
              ? "string" == typeof e
                ? e
                : "string" == typeof e.content
                ? e.content
                : e.content.map(n).join("")
              : "";
          },
          r = function (t) {
            for (var o = [], i = 0; i < t.length; i++) {
              var l = t[i],
                c = !1;
              if (
                ("string" != typeof l &&
                  ("tag" === l.type &&
                  l.content[0] &&
                  "tag" === l.content[0].type
                    ? "</" === l.content[0].content[0].content
                      ? o.length > 0 &&
                        o[o.length - 1].tagName ===
                          n(l.content[0].content[1]) &&
                        o.pop()
                      : "/>" === l.content[l.content.length - 1].content ||
                        o.push({
                          tagName: n(l.content[0].content[1]),
                          openedBraces: 0,
                        })
                    : o.length > 0 &&
                      "punctuation" === l.type &&
                      "{" === l.content
                    ? o[o.length - 1].openedBraces++
                    : o.length > 0 &&
                      o[o.length - 1].openedBraces > 0 &&
                      "punctuation" === l.type &&
                      "}" === l.content
                    ? o[o.length - 1].openedBraces--
                    : (c = !0)),
                (c || "string" == typeof l) &&
                  o.length > 0 &&
                  0 === o[o.length - 1].openedBraces)
              ) {
                var d = n(l);
                i < t.length - 1 &&
                  ("string" == typeof t[i + 1] ||
                    "plain-text" === t[i + 1].type) &&
                  ((d += n(t[i + 1])), t.splice(i + 1, 1)),
                  i > 0 &&
                    ("string" == typeof t[i - 1] ||
                      "plain-text" === t[i - 1].type) &&
                    ((d = n(t[i - 1]) + d), t.splice(i - 1, 1), i--),
                  (t[i] = new e.Token("plain-text", d, null, d));
              }
              l.content && "string" != typeof l.content && r(l.content);
            }
          };
        e.hooks.add("after-tokenize", function (e) {
          ("jsx" !== e.language && "tsx" !== e.language) || r(e.tokens);
        });
      })(Prism);
    },
    function (e, t, n) {
      (function (e) {
        ("undefined" != typeof self && !self.Prism) ||
          (void 0 !== e && !e.Prism) ||
          Prism.hooks.add("wrap", function (e) {
            "keyword" === e.type && e.classes.push("keyword-" + e.content);
          });
      }.call(this, n(28)));
    },
    function (e, t, n) {
      !(function () {
        var t =
          Object.assign ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e;
          };
        function n(e) {
          this.defaults = t({}, e);
        }
        function r(e) {
          for (var t = 0, i = 0; i < e.length; ++i)
            e.charCodeAt(i) == "\t".charCodeAt(0) && (t += 3);
          return e.length + t;
        }
        (n.prototype = {
          setDefaults: function (e) {
            this.defaults = t(this.defaults, e);
          },
          normalize: function (input, e) {
            for (var n in (e = t(this.defaults, e))) {
              var r = n.replace(/-(\w)/g, function (e, t) {
                return t.toUpperCase();
              });
              "normalize" !== n &&
                "setDefaults" !== r &&
                e[n] &&
                this[r] &&
                (input = this[r].call(this, input, e[n]));
            }
            return input;
          },
          leftTrim: function (input) {
            return input.replace(/^\s+/, "");
          },
          rightTrim: function (input) {
            return input.replace(/\s+$/, "");
          },
          tabsToSpaces: function (input, e) {
            return (
              (e = 0 | e || 4), input.replace(/\t/g, new Array(++e).join(" "))
            );
          },
          spacesToTabs: function (input, e) {
            return (
              (e = 0 | e || 4), input.replace(RegExp(" {" + e + "}", "g"), "\t")
            );
          },
          removeTrailing: function (input) {
            return input.replace(/\s*?$/gm, "");
          },
          removeInitialLineFeed: function (input) {
            return input.replace(/^(?:\r?\n|\r)/, "");
          },
          removeIndent: function (input) {
            var e = input.match(/^[^\S\n\r]*(?=\S)/gm);
            return e && e[0].length
              ? (e.sort(function (a, b) {
                  return a.length - b.length;
                }),
                e[0].length
                  ? input.replace(RegExp("^" + e[0], "gm"), "")
                  : input)
              : input;
          },
          indent: function (input, e) {
            return input.replace(
              /^[^\S\n\r]*(?=\S)/gm,
              new Array(++e).join("\t") + "$&"
            );
          },
          breakLines: function (input, e) {
            e = !0 === e ? 80 : 0 | e || 80;
            for (var t = input.split("\n"), i = 0; i < t.length; ++i)
              if (!(r(t[i]) <= e)) {
                for (
                  var line = t[i].split(/(\s+)/g), n = 0, o = 0;
                  o < line.length;
                  ++o
                ) {
                  var l = r(line[o]);
                  (n += l) > e && ((line[o] = "\n" + line[o]), (n = l));
                }
                t[i] = line.join("");
              }
            return t.join("\n");
          },
        }),
          e.exports && (e.exports = n),
          "undefined" != typeof Prism &&
            ((Prism.plugins.NormalizeWhitespace = new n({
              "remove-trailing": !0,
              "remove-indent": !0,
              "left-trim": !0,
              "right-trim": !0,
            })),
            Prism.hooks.add("before-sanity-check", function (e) {
              var t = Prism.plugins.NormalizeWhitespace;
              if (
                (!e.settings ||
                  !1 !== e.settings["whitespace-normalization"]) &&
                Prism.util.isActive(e.element, "whitespace-normalization", !0)
              )
                if ((e.element && e.element.parentNode) || !e.code) {
                  var pre = e.element.parentNode;
                  if (e.code && pre && "pre" === pre.nodeName.toLowerCase()) {
                    for (
                      var n = pre.childNodes, r = "", o = "", l = !1, i = 0;
                      i < n.length;
                      ++i
                    ) {
                      var c = n[i];
                      c == e.element
                        ? (l = !0)
                        : "#text" === c.nodeName &&
                          (l ? (o += c.nodeValue) : (r += c.nodeValue),
                          pre.removeChild(c),
                          --i);
                    }
                    if (e.element.children.length && Prism.plugins.KeepMarkup) {
                      var html = r + e.element.innerHTML + o;
                      (e.element.innerHTML = t.normalize(html, e.settings)),
                        (e.code = e.element.textContent);
                    } else
                      (e.code = r + e.code + o),
                        (e.code = t.normalize(e.code, e.settings));
                  }
                } else e.code = t.normalize(e.code, e.settings);
            }));
      })();
    },
  ],
]);
