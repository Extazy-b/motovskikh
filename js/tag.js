﻿(function () {
  function Qb(aa) {
    var Ea = 0;
    return function () {
      return Ea < aa.length ? { done: !1, value: aa[Ea++] } : { done: !0 };
    };
  }
  var ec =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (aa, Ea, nb) {
          aa != Array.prototype &&
            aa != Object.prototype &&
            (aa[Ea] = nb.value);
        };
  function be(aa) {
    aa = [
      "object" == typeof globalThis && globalThis,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
      aa,
    ];
    for (var Ea = 0; Ea < aa.length; ++Ea) {
      var nb = aa[Ea];
      if (nb && nb.Math == Math) return nb;
    }
    throw Error("Cannot find global object");
  }
  var Tf = be(this);
  function Uf() {
    Uf = function () {};
    Tf.Symbol || (Tf.Symbol = oj);
  }
  function pj(aa, Ea) {
    this.Sh = aa;
    ec(this, "description", { configurable: !0, writable: !0, value: Ea });
  }
  pj.prototype.toString = function () {
    return this.Sh;
  };
  var oj = (function () {
    function aa(nb) {
      if (this instanceof aa)
        throw new TypeError("Symbol is not a constructor");
      return new pj("jscomp_symbol_" + (nb || "") + "_" + Ea++, nb);
    }
    var Ea = 0;
    return aa;
  })();
  function qj() {
    Uf();
    var aa = Tf.Symbol.iterator;
    aa || (aa = Tf.Symbol.iterator = Tf.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[aa] &&
      ec(Array.prototype, aa, {
        configurable: !0,
        writable: !0,
        value: function () {
          return rj(Qb(this));
        },
      });
    qj = function () {};
  }
  function rj(aa) {
    qj();
    aa = { next: aa };
    aa[Tf.Symbol.iterator] = function () {
      return this;
    };
    return aa;
  }
  try {
    (function (aa) {
      function Ea(a, c) {
        if (!c) return !1;
        var b = Q(a).pathname;
        return new RegExp(c).test(b);
      }
      function nb(a, c) {
        return Fa(a, c, function (b) {
          b = w(b, "settings.dr");
          return sj(a, b);
        });
      }
      function tj(a, c, b, d, e) {
        b = b && Bb(a, a.document.body, b);
        d = d && Bb(a, a.document.body, d);
        L(e.target, [b, d]) && ce(a, c);
      }
      function Vf(a, c, b, d) {
        (b = uj(a, d, b)) && ce(a, c, b);
      }
      function Wf(a, c) {
        var b = Xf(a, c);
        return vj(a, b);
      }
      function Xf(a, c) {
        var b = c && Bb(a, a.document.body, c);
        return b ? wj(a, b) : "";
      }
      function ce(a, c, b) {
        (c = La(a, c)) && c.params(de(["__ym", "dr", b || x(Yf, Zf)(a)]));
      }
      function $f(a, c, b) {
        try {
          var d = ka(a.atob(c));
          return B(function (e) {
            e = e.charCodeAt(0).toString(2);
            return ag("0", 8 - e.length) + e;
          }, d).join(b);
        } catch (e) {
          return "";
        }
      }
      function Yf(a) {
        return db(a, 10, 99);
      }
      function wj(a, c) {
        if (!c) return "";
        var b = [],
          d = w(a, "document");
        ee(a, c, function (e) {
          e.nodeType === d.TEXT_NODE && e.textContent
            ? b.push(e.textContent.trim())
            : e instanceof HTMLImageElement && e.alt && b.push(e.alt.trim());
        });
        return 0 === b.length ? "" : b.join(" ");
      }
      function xj(a, c, b, d) {
        d = w(d, "target");
        (d = Cb("button,input", a, d)) &&
          "submit" === d.type &&
          (d = bg(a, d)) &&
          (b.push(d), V(a, R([!1, a, c, b, d], cg), 300));
      }
      function cg(a, c, b, d, e) {
        var f = ob(c)(e, d),
          g = -1 !== f;
        if (a || g)
          g && d.splice(f, 1),
            (a = dg(c, e)),
            (a = "?" + yc(a)),
            (d = R(
              [c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."],
              eg
            )),
            fe(c, b, "form", d)(a);
      }
      function eg(a, c, b) {
        return yj(a, c).then(function (d) {
          d && Db(a, c, b)();
        });
      }
      function zj(a) {
        a = eb(a);
        if (!a) return "";
        a = a("video");
        try {
          var c = oa("canPlayType", a),
            b = F("x", B(c, fg)),
            d = F(
              "x",
              Eb(function (e) {
                return B(x(S, oa("concat", e + "; codecs="), c), Aj);
              }, fg)
            );
          return b + "x" + d;
        } catch (e) {
          return "canPlayType";
        }
      }
      function Bj(a) {
        var c = w(a, "speechSynthesis.getVoices");
        if (!c) return "";
        a = D(c, a.speechSynthesis);
        return F(
          "x",
          Eb(function (b) {
            return B(A(b, w), Cj);
          }, a())
        );
      }
      function Dj(a) {
        var c = ge("navigator.", Ej, a);
        try {
          var b = w(a, "navigator.getGamepads");
          var d = (Va(b, "getGamepads") && a.navigator.getGamepads()) || [];
        } catch (e) {
          d = [];
        }
        return c + "x" + Rb(d);
      }
      function Fj(a) {
        a = eb(a)("canvas");
        var c = w(a, "getContext");
        if (!c) return "";
        try {
          var b = D(c, a)("2d");
          b.font = "72px mmmmmmmmmmlli";
          a = [];
          var d = b.measureText("mmmmmmmmmmlli").width;
          c = void 0;
          for (var e = 0; e < gg.length; e += 1)
            (b.font = "72px " + gg[e]),
              (c = b.measureText("mmmmmmmmmmlli").width),
              a.push("" + (d === c));
          return F("x", a);
        } catch (f) {
          return "";
        }
      }
      function Gj(a) {
        var c = w(a, "matchMedia");
        if (!c || !ea("matchMedia", c)) return "";
        var b = oa("matchMedia", a);
        return F(
          "x",
          B(function (d) {
            return ge("", ["matches", "media"], b("(" + d + ")"));
          }, Hj)
        );
      }
      function Ij() {
        return { $i: Jj, hj: Kj };
      }
      function Kj(a, c) {
        var b = c.Pi;
        if (!Lj(a, b)) return "";
        var d = [],
          e = b.createBuffer();
        if (!e || !b.getParameter || !ea("getParameter", b.getParameter))
          return "";
        b.bindBuffer(b.ARRAY_BUFFER, e);
        var f = new a.Float32Array(Mj);
        b.bufferData(b.ARRAY_BUFFER, f, b.STATIC_DRAW);
        e.Pj = 3;
        e.$j = 3;
        f = b.createProgram();
        var g = b.createShader(b.VERTEX_SHADER);
        b.shaderSource(
          g,
          "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
        );
        b.compileShader(g);
        b.attachShader(f, g);
        g = b.createShader(b.FRAGMENT_SHADER);
        b.shaderSource(
          g,
          "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
        );
        b.compileShader(g);
        b.attachShader(f, g);
        b.linkProgram(f);
        b.useProgram(f);
        f.Uk = b.getAttribLocation(f, "attrVertex");
        f.bk = b.getUniformLocation(f, "uniformOffset");
        b.enableVertexAttribArray(f.hm);
        b.vertexAttribPointer(f.Uk, e.Pj, b.FLOAT, !1, 0, 0);
        b.uniform2f(f.bk, 1, 1);
        b.drawArrays(b.TRIANGLE_STRIP, 0, e.$j);
        e = b.canvas;
        null != e && d.push(Nj(e));
        e = {
          zl: F(";", Oj(b)),
          "webgl aliased line width range": he(
            b.getParameter(b.ALIASED_LINE_WIDTH_RANGE),
            b
          ),
          "webgl aliased point size range": he(
            b.getParameter(b.ALIASED_POINT_SIZE_RANGE),
            b
          ),
          "webgl alpha bits": b.getParameter(b.ALPHA_BITS),
          "webgl antialiasing": b.getContextAttributes().antialias
            ? "yes"
            : "no",
          "webgl blue bits": b.getParameter(b.BLUE_BITS),
          "webgl depth bits": b.getParameter(b.DEPTH_BITS),
          "webgl green bits": b.getParameter(b.GREEN_BITS),
          "webgl max anisotropy": Pj(b),
          "webgl max combined texture image units": b.getParameter(
            b.MAX_COMBINED_TEXTURE_IMAGE_UNITS
          ),
          "webgl max cube map texture size": b.getParameter(
            b.MAX_CUBE_MAP_TEXTURE_SIZE
          ),
          "webgl max fragment uniform vectors": b.getParameter(
            b.MAX_FRAGMENT_UNIFORM_VECTORS
          ),
          "webgl max render buffer size": b.getParameter(
            b.MAX_RENDERBUFFER_SIZE
          ),
          "webgl max texture image units": b.getParameter(
            b.MAX_TEXTURE_IMAGE_UNITS
          ),
          "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
          "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
          "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
          "webgl max vertex texture image units": b.getParameter(
            b.MAX_VERTEX_TEXTURE_IMAGE_UNITS
          ),
          "webgl max vertex uniform vectors": b.getParameter(
            b.MAX_VERTEX_UNIFORM_VECTORS
          ),
          "webgl max viewport dims": he(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
          "webgl red bits": b.getParameter(b.RED_BITS),
          "webgl renderer": b.getParameter(b.RENDERER),
          "webgl shading language version": b.getParameter(
            b.SHADING_LANGUAGE_VERSION
          ),
          "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
          "webgl vendor": b.getParameter(b.VENDOR),
          "webgl version": b.getParameter(b.VERSION),
        };
        ie(d, e, ": ");
        try {
          var k = b.getExtension("WEBGL_debug_renderer_info");
          k &&
            ie(d, {
              "webgl unmasked vendor": b.getParameter(k.UNMASKED_VENDOR_WEBGL),
              "webgl unmasked renderer": b.getParameter(
                k.UNMASKED_RENDERER_WEBGL
              ),
            });
        } catch (m) {}
        if (!b.getShaderPrecisionFormat) return F("~", d);
        b = M(
          function (m, n) {
            var r = n[0],
              t = n[1];
            m[r + " precision"] = w(t, "precision") || "n";
            m[r + " precision rangeMin"] = w(t, "rangeMin") || "n";
            m[r + " precision rangeMax"] = w(t, "rangeMax") || "n";
            return m;
          },
          {},
          [
            [
              "webgl vertex shader high float",
              b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.HIGH_FLOAT),
            ],
            [
              "webgl vertex shader medium",
              b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.MEDIUM_FLOAT),
            ],
            [
              "webgl vertex shader low float",
              b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.LOW_FLOAT),
            ],
            [
              "webgl fragment shader high float",
              b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.HIGH_FLOAT),
            ],
            [
              "webgl fragment shader medium float",
              b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_FLOAT),
            ],
            [
              "webgl fragment shader low float",
              b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_FLOAT),
            ],
            [
              "webgl vertex shader high int",
              b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.HIGH_INT),
            ],
            [
              "webgl vertex shader medium int",
              b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.MEDIUM_INT),
            ],
            [
              "webgl vertex shader low int",
              b.getShaderPrecisionFormat(b.VERTEX_SHADER, b.LOW_INT),
            ],
            [
              "webgl fragment shader high int",
              b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.HIGH_INT),
            ],
            [
              "webgl fragment shader medium int",
              b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_INT),
            ],
            [
              "webgl fragment shader low int precision",
              b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_INT),
            ],
          ]
        );
        ie(d, b);
        return F("~", d);
      }
      function Lj(a, c) {
        if (!ca(a.Float32Array)) return !1;
        var b = w(c, "canvas");
        if (!b || !ea("toDataUrl", b.toDataURL)) return !1;
        try {
          c.createBuffer();
        } catch (d) {
          return !1;
        }
        return !0;
      }
      function Oj(a) {
        try {
          return Va(a.getSupportedExtensions, "getSupportedExtensions")
            ? a.getSupportedExtensions() || []
            : [];
        } catch (c) {
          return [];
        }
      }
      function ie(a, c, b) {
        void 0 === b && (b = ":");
        return E(function (d) {
          return a.push("" + d[0] + b + d[1]);
        }, Ga(c));
      }
      function Pj(a) {
        var c =
          a.getExtension("EXT_texture_filter_anisotropic") ||
          a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
          a.getExtension("MOZ_EXT_texture_filter_anisotropic");
        if (c) {
          var b = a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          0 === b && (b = 2);
        }
        return c ? b : null;
      }
      function he(a, c) {
        c.clearColor(0, 0, 0, 1);
        c.enable(c.DEPTH_TEST);
        c.depthFunc(c.LEQUAL);
        c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
        return "[" + w(a, "0") + ", " + w(a, "1") + "]";
      }
      function Qj(a) {
        return function (c) {
          var b = eb(c);
          if (!b) return "";
          b = b("canvas");
          var d = [],
            e = a(),
            f = e.hj;
          e = e.$i;
          try {
            var g = oa("getContext", b);
            d = B(x(S, g), e);
          } catch (k) {
            return "";
          }
          return (g = Ma(S, d)) ? f(c, { canvas: b, Pi: g }) : "";
        };
      }
      function Rj(a) {
        function c(b) {
          return F(",", [b.description, b.suffixes, b.type]);
        }
        a = w(a, "navigator.plugins") || [];
        return Rb(a)
          ? x(
              ka,
              fc(Boolean),
              hg(function (b, d) {
                return b.name > d.name ? 1 : 2;
              }),
              Wa(function (b) {
                var d = Rb(b) ? b : [];
                return F(",", [
                  b.name,
                  b.description,
                  x(ka, fc(Boolean), Wa(c), gc(","))(d),
                ]);
              }),
              gc(",")
            )(a)
          : "";
      }
      function Sj(a) {
        var c = w(a, "ApplePaySession"),
          b = Q(a).protocol;
        return !c || "https:" !== b || sb(a)
          ? ""
          : M(
              function (d, e, f) {
                e = "" + (f + 1);
                var g = c.supportsVersion;
                return ca(g) ? (g.call(c, f + 1) ? d + e : d + "0") : d;
              },
              "",
              Tj(9)
            ) + c.canMakePayments();
      }
      function Uj(a) {
        a = w(a, "navigator") || {};
        return a.doNotTrack || a.msDoNotTrack || "unknown";
      }
      function Vj(a, c) {
        var b = Na(a),
          d = "wv2rf:" + Z(c),
          e = c.ec,
          f = je(a),
          g = b.o(d),
          k = c.Lk;
        return T(f) || Za(g)
          ? Ja(function (m, n) {
              Fa(a, c, function (r) {
                var t = w(r, "settings.webvisor.forms");
                f = je(a) || w(r, "settings.eu");
                b.C(d, Wj(t));
                n({ ec: e, Lg: !!f, eh: !!t, Eh: k });
              });
            })
          : fd({ ec: e, Lg: f, eh: !!parseInt(g, 10), Eh: k });
      }
      function Xj() {
        var a = X(
            function (b) {
              return !!b[1];
            },
            [
              ["blur", 0],
              ["change", 0],
              ["input", 0.0116],
              ["click", 0.00975],
              ["deviceRotation", 0],
              ["focus", 0],
              ["mousemove", 0.68],
              ["scroll", 0.31],
              ["selection", 0],
              ["touchcancel", 0],
              ["touchend", 0],
              ["touchforcechange", 0],
              ["touchmove", 0],
              ["touchstart", 0],
              ["zoom", 0],
            ]
          ),
          c = M(
            function (b, d) {
              b[d[0]] = { Xd: 0, Mi: 1 / d[1] };
              return b;
            },
            {},
            a
          );
        return {
          Ii: function (b) {
            if (b.length)
              return {
                type: "activity",
                data: M(
                  function (d, e) {
                    var f = c[e];
                    return Math.round(d + f.Xd * f.Mi);
                  },
                  0,
                  Aa(c)
                ),
              };
          },
          ck: function (b) {
            if ((b = c[b.data.type])) b.Xd += 1;
          },
        };
      }
      function Yj(a, c, b) {
        function d() {
          m ||
            ((m = !0),
            Zj(
              a,
              n,
              function (t) {
                e(t[0], t[1]);
              },
              20,
              200,
              "s.w2.sf.ms"
            ),
            (n = []));
        }
        function e(t, v) {
          g(t, c, v)["catch"](C(a, "s.w2.p"));
        }
        function f() {
          var t = !1;
          return (
            M(
              function (v, q, l) {
                r = ke(function (h, p) {
                  return h[2].partNum - p[2].partNum;
                }, r);
                q = q[2];
                t = t || q.end;
                return v && l + 1 === q.partNum;
              },
              !0,
              r
            ) && t
          );
        }
        var g = pa(a, "W", c),
          k = !1,
          m = !1,
          n = [],
          r = [];
        V(a, d, 5e3);
        return function (t, v, q, l) {
          v = { J: {}, V: ta(), oa: v, Kg: b };
          if ("m" === t)
            if ((v.V.C("bt", 1), k)) e(v, l);
            else {
              var h = M(
                function (u, N) {
                  var y = "page" === N.type && !N.ba,
                    K = "eof" === N.data.type,
                    U = y && !!N.partNum;
                  return { ce: u.ce || U, ae: u.ae || y, $d: u.$d || K };
                },
                { ae: !1, $d: !1, ce: !1 },
                q
              );
              t = h.ae;
              var p = h.$d;
              h = h.ce;
              t &&
                (h
                  ? (r.push([v, l, q[0]]),
                    f() &&
                      (E(function (u) {
                        return e(u[0], u[1]);
                      }, r),
                      (k = !0),
                      (r = [])))
                  : ((k = !0), e(v, l)));
              m ? t || e(v, l) : (t || n.push([v, l]), (k || p) && d());
            }
          else e(v, l);
        };
      }
      function ak(a) {
        if (a.type && a.event)
          switch (a.type) {
            case "page":
              var c = a.data,
                b = c.Da,
                d = c.Wb,
                e = c.content;
              delete c.Da;
              delete c.Wb;
              delete c.content;
              c = {
                type: "page",
                data: { ba: a.ba || 0, content: e, Da: b, Wb: d, fa: c },
              };
              a.da && (c.da = a.da);
              return c;
            case "event":
              a: {
                c = {
                  type: "event",
                  da: a.da,
                  data: { ba: a.ba, type: a.event, fa: {} },
                };
                b = G({}, a.data);
                switch (a.event) {
                  case "zoom":
                    c.data.fa = {
                      Od: { x: 0, y: 0, level: 0 },
                      Pd: b,
                      duration: 1,
                    };
                    break;
                  case "keystroke":
                    c.data.fa = b.Ua;
                    break;
                  case "deviceRotation":
                  case "resize":
                    c.data.fa = b;
                    break;
                  case "windowfocus":
                  case "windowblur":
                  case "focus":
                    c.data.target = b.target;
                    c.data.fa = null;
                    break;
                  case "touchmove":
                  case "touchstart":
                  case "touchend":
                  case "touchcancel":
                  case "touchforcechange":
                  case "scroll":
                  case "change":
                  case "click":
                  case "mousemove":
                  case "mousedown":
                  case "mouseup":
                  case "selection":
                    c.data.target = b.target;
                    delete b.target;
                    c.data.fa = b;
                    break;
                  case "srcset":
                    a = {
                      type: "mutation",
                      da: a.da,
                      data: {
                        ba: a.ba,
                        fa: {
                          Za: [
                            {
                              Oa: [
                                {
                                  id: b.target,
                                  wa: { src: { gb: "", n: b.value, r: !1 } },
                                  ra: 0,
                                },
                              ],
                            },
                          ],
                          index: 0,
                        },
                      },
                    };
                    break a;
                }
                a = c;
              }
              break;
            case "mutation":
              return bk(a);
          }
        return a;
      }
      function bk(a) {
        var c = G({}, a.data),
          b = [];
        switch (a.event) {
          case "tc":
            b = [
              {
                d: [{ id: c.target, $a: { gb: "", n: c.value }, ra: c.index }],
              },
            ];
            break;
          case "ac":
            b = [
              {
                Oa: [
                  {
                    id: c.target,
                    wa: M(
                      function (d, e) {
                        var f = e[1];
                        d[e[0]] = { gb: "", n: f, r: ya(f) };
                        return d;
                      },
                      {},
                      Ga(c.attributes)
                    ),
                    ra: c.index,
                  },
                ],
              },
            ];
            break;
          case "re":
            b = [
              {
                pb: B(function (d) {
                  return { id: d, ra: c.index };
                }, c.fb),
              },
            ];
            break;
          case "ad":
            b = [
              {
                rb: B(function (d) {
                  return {
                    id: d.id,
                    nd: d.name,
                    qd: d.Sg,
                    wb: d.parent,
                    xb: d.uc,
                    vb: d.next,
                    wa: d.attributes,
                    ra: c.index,
                    $a: d.content,
                    Ra: d.hidden,
                  };
                }, c.fb),
              },
            ];
        }
        return {
          type: "mutation",
          da: a.da,
          data: { ba: a.ba, fa: { Za: b, index: c.index } },
        };
      }
      function ck(a) {
        return {
          qj: function () {
            var c = a.document.querySelector("base[href]");
            return c ? c.getAttribute("href") : null;
          },
          sj: function () {
            if (a.document.doctype) {
              var c = G(
                  { name: "html", publicId: "", systemId: "" },
                  a.document.doctype
                ),
                b = c.publicId,
                d = c.systemId;
              return (
                "<!DOCTYPE " +
                F("", [
                  c.name,
                  b ? ' PUBLIC "' + b + '"' : "",
                  !b && d ? " SYSTEM" : "",
                  d ? ' "' + d + '"' : "",
                ]) +
                ">"
              );
            }
            return null;
          },
          Cj: function () {
            try {
              if (!a.sessionStorage) return null;
              var c = a.sessionStorage.getItem("__vw_tab_guid"),
                b = !1;
              try {
                var d = a.opener ? a.opener.sessionStorage : null;
                b = !!d && c === d.getItem("__vw_tab_guid");
              } catch (e) {
                b = !0;
              }
              if (!c || b)
                (c = ig()), a.sessionStorage.setItem("__vw_tab_guid", c);
              return c;
            } catch (e) {
              return null;
            }
          },
        };
      }
      function dk(a, c, b) {
        var d = zc(a),
          e = qa(a),
          f = sb(a),
          g = c.ye(),
          k = !w(a, "postMessage") || (f && !w(a, "parent.postMessage")),
          m = A(d, S);
        if (k) {
          if (!g)
            return (
              V(a, D(d.ia, d, "i", { Ha: !1 }), 10), { Ob: m, ph: J, stop: J }
            );
          tb(fb());
        }
        d.D("sr", function (q) {
          var l,
            h = jg(a, q.source);
          h &&
            le(
              a,
              q.source,
              ((l = {}), (l.type = "\u043d"), (l.frameId = c.bb().ja(h)), l)
            );
        });
        d.D("sd", function (q) {
          var l = q.data;
          q = q.source;
          (a === q || jg(a, q)) && d.ia("sdr", { data: l.data, ba: l.frameId });
        });
        if (f && !g) {
          var n = !1,
            r = 0,
            t = function () {
              var q;
              le(a, a.parent, ((q = {}), (q.type = "sr"), q));
              r = V(a, t, 100, "if.i");
            };
          t();
          var v = function (q) {
            d.ya("\u043d", v);
            ua(a, r);
            var l = Fb(a, q.origin).host;
            n ||
              q.source !== a.parent ||
              !q.data.frameId ||
              ("about:blank" !== Q(a).host && !L(l, b)) ||
              ((n = !0), d.ia("i", { ba: q.data.frameId, Ha: !0 }));
          };
          d.D("\u043d", v);
          V(
            a,
            function () {
              d.ya("\u043d", v);
              ua(a, r);
              n || ((n = !0), d.ia("i", { Ha: !1 }));
            },
            2e3,
            "if.r"
          );
        }
        e = e.D(a, "message", function (q) {
          var l = pb(a, q.data);
          l &&
            l.type &&
            L(l.type, ek) &&
            d.ia(l.type, { data: l, source: q.source, origin: q.origin });
        });
        return {
          Ob: m,
          ph: function (q) {
            var l;
            return le(
              a,
              a.parent,
              ((l = {}), (l.frameId = c.ye()), (l.data = q), (l.type = "sd"), l)
            );
          },
          stop: e,
        };
      }
      function jg(a, c) {
        try {
          return Ma(
            x(W("contentWindow"), la(c)),
            ka(a.document.querySelectorAll("iframe"))
          );
        } catch (b) {
          return null;
        }
      }
      function le(a, c, b) {
        a = $a(a, b);
        c.postMessage(a, "*");
      }
      function ig() {
        return (
          Gb() +
          Gb() +
          "-" +
          Gb() +
          "-" +
          Gb() +
          "-" +
          Gb() +
          "-" +
          Gb() +
          Gb() +
          Gb()
        );
      }
      function Gb() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      function fk(a, c, b, d) {
        void 0 === d && (d = {});
        var e = ra(c),
          f = G(
            M(
              function (g, k) {
                g[k.name] = k.value;
                return g;
              },
              {},
              ka(c.attributes)
            ),
            d
          );
        E(function (g) {
          var k = g[0];
          g = me(a, c, k, g[1], b);
          ya(g) ? delete f[k] : (f[k] = g);
        }, Ga(f));
        if ((d = ("IMG" === e || gd(c)) && hc(a, c) && Ac(c)))
          (f.width = d.width), (f.height = d.height);
        return f;
      }
      function me(a, c, b, d, e) {
        var f = ra(c);
        if (gd(c))
          if ("value" === b) {
            if (
              ((b = e.Lg),
              (e = e.eh),
              (f = hc(a, c)),
              ((e ? ic(a, c, b) : !hd(c)) || f) && !ya(d))
            )
              return F("", B(A("\u2022", S), ("" + d).split("")));
          } else {
            if ("checked" === b && ne.test(c.getAttribute("type")))
              return c.checked ? "checked" : null;
          }
        else {
          if ("IMG" === f && "src" === b)
            return hc(a, c) ? gk : c.currentSrc || c.src;
          if ("A" === f && "href" === b) return d ? "#" : "";
          if (
            L(b, ["srcset", "integrity", "crossorigin"]) ||
            hk.test(b) ||
            ("IFRAME" === f && "src" === b) ||
            ("SCRIPT" === f && L(b, ["src", "type"]))
          )
            return null;
        }
        return d;
      }
      function oe(a, c, b, d) {
        void 0 === d && (d = "wv2");
        return {
          Y: function (e, f) {
            return C(a, d + "." + b + "." + f, e, void 0, c);
          },
        };
      }
      function ik(a, c) {
        var b = jk(a),
          d = pa(a, "r", c),
          e = C(a, "rts.p");
        return Fa(
          a,
          c,
          D(
            M,
            null,
            function (f, g) {
              var k = { id: g.Vi, qa: g.qa };
              k = d({ oa: g.hk, V: ta(g.Li), J: g.ha, xc: g.xc }, k, g.qk)[
                "catch"
              ](e);
              return f.then(A(k, S));
            },
            P.resolve(""),
            b
          )
        )["catch"](e);
      }
      function kk(a, c) {
        return id(a).then(function () {
          var b = a.document.body;
          ea("MutationObserver", a.MutationObserver) &&
            new MutationObserver(c.ia).observe(b, {
              attributes: !0,
              childList: !0,
              subtree: !0,
            });
        });
      }
      function lk(a, c) {
        return qa(a).D(a, "load", c.ia);
      }
      function pe(a, c, b, d) {
        void 0 === b && (b = !1);
        c = jc(a, void 0, c);
        c = kg(a, c.o("phc_settings") || "");
        var e = w(c, "clientId"),
          f = w(c, "orderId"),
          g = w(c, "phones") || [];
        return e && f && g
          ? lg(a)
              .zd(g, b)
              .then(function (k) {
                return mk(d, { hc: e, sc: f }, k.Ca, g, k.Va);
              })
              ["catch"](function () {})
          : P.resolve();
      }
      function mk(a, c, b, d, e) {
        var f;
        c.hc &&
          c.sc &&
          ((c.hc === a.hc && c.sc === a.sc) || G(a, c, { Ca: {}, Mb: !0 }),
          0 < e && Qa(a.Va, [e]),
          E(function (g) {
            var k,
              m,
              n = g[0];
            g = g[1];
            var r = +(a.Ca[n] && a.Ca[n][g] ? a.Ca[n][g] : 0);
            G(a.Ca, ((k = {}), (k[n] = ((m = {}), (m[g] = r), m)), k));
          }, d),
          E(function (g) {
            var k,
              m,
              n = g[0];
            g = g[1];
            var r = 1 + (a.Ca[n] ? a.Ca[n][g] : 0);
            G(a.Ca, ((k = {}), (k[n] = ((m = {}), (m[g] = r), m)), k));
          }, b),
          a.Mg &&
            (a.Mb || b.length) &&
            ((c = La(a.b, a.Xi)) &&
              c.params(
                "__ym",
                "phc",
                ((f = {}),
                (f.clientId = a.hc),
                (f.orderId = a.sc),
                (f.phones = a.Ca),
                (f.performance = a.Va),
                f)
              ),
            (a.Mb = !1)));
      }
      function nk(a, c) {
        var b = a.document.body;
        if (!b) return [];
        var d = mg(c);
        return M(
          function (e, f) {
            var g = decodeURI(w(f, "href") || "");
            if ("tel:" === g.slice(0, 4) && (g = (d.exec(g) || [])[0])) {
              var k = qe(g);
              T(c[k]) ||
                e.push({
                  type: "href",
                  node: f,
                  from: k,
                  Cb: ng(g, c[k].Cb),
                  Cf: f.href,
                });
            }
            return e;
          },
          [],
          ka(b.querySelectorAll("a"))
        );
      }
      function ok(a, c) {
        var b = a.document.body;
        if (!b) return [];
        var d = [],
          e = mg(c);
        ee(
          a,
          b,
          function (f) {
            var g;
            f === b ||
              ((null === (g = f.parentNode) || void 0 === g ? 0 : g.nodeName) &&
                "script" === f.parentNode.nodeName.toLowerCase()) ||
              ((g = e.exec(f.textContent || "")),
              E(function (k) {
                var m = qe(k);
                T(c[m]) ||
                  d.push({
                    type: "text",
                    node: f,
                    from: m,
                    Cb: ng(k, c[m].Cb),
                    Cf: f.textContent || "",
                  });
              }, g || []));
          },
          function (f) {
            return e.test(f.textContent || "") ? 1 : 0;
          },
          a.NodeFilter.SHOW_TEXT
        );
        return d;
      }
      function ng(a, c) {
        for (
          var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0;
          g < a.length && !(f >= e.length);
          g += 1
        ) {
          var k = d[g];
          "0" <= k && "9" >= k ? (b.push(e[f]), (f += 1)) : b.push(d[g]);
        }
        return F("", b) + c.slice(f + 1);
      }
      function og(a) {
        return 11 === a.length && "7" === a[0] ? "8" + a.slice(1) : a;
      }
      function pg(a) {
        return F("[^\\d<>]*", a.split(""));
      }
      function qg(a, c, b, d) {
        if (c) {
          var e = [];
          c &&
            (a.document.documentElement.contains(c)
              ? ee(a, c, oa("push", e), d)
              : Qa(e, rg(a, c, d)));
          E(b, e);
        }
      }
      function ee(a, c, b, d, e) {
        function f(g) {
          return ca(d)
            ? d(g)
              ? a.NodeFilter.FILTER_ACCEPT
              : a.NodeFilter.FILTER_REJECT
            : a.NodeFilter.FILTER_ACCEPT;
        }
        void 0 === e && (e = -1);
        if (ca(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !re(c)))
          for (
            c = a.document.createTreeWalker(
              c,
              e,
              d ? { acceptNode: f } : null,
              !1
            );
            c.nextNode() && !1 !== b(c.currentNode);

          );
      }
      function rg(a, c, b) {
        var d = [],
          e = x(S, oa("push", d));
        ca(b)
          ? ((b = b(c)), (ya(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c))
          : e(c);
        if (c.childNodes && 0 < c.childNodes.length) {
          c = c.childNodes;
          b = 0;
          for (var f = c.length; b < f; b += 1) {
            var g = rg(a, c[b]);
            E(e, g);
          }
        }
        return d;
      }
      function id(a, c) {
        function b(e) {
          w(c, d) ? e() : V(a, A(e, b), 100);
        }
        void 0 === c && (c = a);
        var d = (c.nodeType ? "contentWindow." : "") + "document.body";
        return new P(b);
      }
      function pk(a, c) {
        function b(e) {
          w(c, d) ? e() : V(a, A(e, b), 100);
        }
        void 0 === c && (c = a);
        var d = (c.nodeType ? "contentWindow." : "") + "document.body";
        return Ja(function (e, f) {
          b(f);
        });
      }
      function qk(a, c) {
        return qa(a).D(a, "load", D(se, null, a, c, !0));
      }
      function se(a, c, b) {
        void 0 === b && (b = !1);
        c = jc(a, void 0, c);
        c = pb(a, decodeURIComponent(c.o("mp2_substs") || ""));
        a = sg(a);
        return c && 0 < c.length && a.zd(c, b);
      }
      function rk(a, c, b) {
        if ("adv" === b.type) return sk(a, b, c);
        var d = a.document.referrer;
        return Fb(a, d || "").host === Q(a).host
          ? !1
          : Ba(function (e) {
              return (
                (e = d.match(new RegExp(e, "i"))) && tk(b.params || [], e[1])
              );
            }, b.patterns || []);
      }
      function tk(a, c) {
        if (!a.length) return !0;
        var b = x(function (d) {
          return (d || "").replace(/\+/g, "%20");
        }, jd)(c);
        b = la(b);
        return Ba(x(jd, b), a);
      }
      function sk(a, c, b) {
        function d(r) {
          return Ra(new RegExp(r, "i"));
        }
        var e = Fb(a, Q(a).href),
          f = e.query,
          g = e.hash;
        a = a.document.referrer;
        e = te(f || "");
        f = uk(f || "", g || "");
        g = vk(e);
        var k = (b = b.bj) ? c.direct_orders : c.direct_camp,
          m = c.ServiceNamePattern,
          n = c.RefererPattern;
        m = Ba(
          x(d, A((b && "direct.yandex.ru") || f.service || g.source), ma),
          m || []
        );
        c.yandex_direct || (m = m || Ba(d(a), n || []));
        return (m = m || (c.google_adwords && e.gclid)) && k && k.length
          ? Ba(x(Zf, la("" + (b || f.campaign || g.campaign))), k)
          : m;
      }
      function uk(a, c) {
        var b = ["service", "campaign", "ad", "source"],
          d = te(a)._openstat;
        d ||
          (d =
            Ma(x(te, W("_openstat")), c.replace("#", "").split("?") || []) ||
            "");
        var e = "";
        return (e =
          -1 === d.indexOf(";")
            ? x(ue, tg, function (f) {
                if (f) {
                  for (var g = "", k = 0; k < f.length; ) {
                    var m = f.charCodeAt(k);
                    if (128 > m) (g += String.fromCharCode(m)), k++;
                    else if (191 < m && 224 > m) {
                      var n = f.charCodeAt(k + 1);
                      g += String.fromCharCode(((m & 31) << 6) | (n & 63));
                      k += 2;
                    } else {
                      n = f.charCodeAt(k + 1);
                      var r = f.charCodeAt(k + 2);
                      g += String.fromCharCode(
                        ((m & 15) << 12) | ((n & 63) << 6) | (r & 63)
                      );
                      k += 3;
                    }
                  }
                  f = g;
                }
                return f;
              })(d || "")
            : jd(d))
          ? M(
              function (f, g, k) {
                f[b[k]] = g;
                return f;
              },
              {},
              e.split(";")
            )
          : {};
      }
      function vk(a) {
        return M(
          function (c, b) {
            a["utm_" + b] && (c[b] = a["utm_" + b]);
            return c;
          },
          {},
          ["source", "medium", "campaign", "term", "content"]
        );
      }
      function wk(a, c) {
        var b = c.substr(1),
          d = c[0],
          e = [];
        "#" === d
          ? (b = a.document.getElementById(b)) && e.push(b)
          : "." === d && (e = ka(a.document.getElementsByClassName(b)));
        return e;
      }
      function xk(a, c) {
        try {
          var b = c.origin;
        } catch (d) {}
        b &&
          Ba(x(Ra, A(b), ma), [
            /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
            /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/,
          ]) &&
          ((b = pb(a, c.data)),
          "appendremote" === w(b, "action") &&
            yk(w(b, "resource") || "") &&
            zk(a, c, b));
      }
      function Ak(a, c) {
        var b = eb(a);
        if (b) {
          b = b("div");
          var d = Hb(a);
          if (d) {
            b.innerHTML =
              '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
            var e = b.firstChild;
            e.onload = function () {
              Bc(e.contentWindow, { src: c });
            };
            a._ym__remoteIframeEl = e;
            d.appendChild(b);
            b.removeChild(e);
            var f = null;
            b.attachShadow
              ? (f = b.attachShadow({ mode: "open" }))
              : b.createShadowRoot
              ? (f = b.createShadowRoot())
              : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot());
            f
              ? f.appendChild(e)
              : (d.appendChild(e), (a._ym__remoteIframeContainer = e));
          }
        }
      }
      function dg(a, c, b) {
        return ug(a, c, ["i", "n", "p"], void 0, b);
      }
      function Bk(a) {
        var c = w(a, "ecommerce") || {};
        a = X(ub(Ck), Aa(c));
        a = M(
          function (b, d) {
            b[d] = c[d];
            return b;
          },
          {},
          a
        );
        return Aa(a).length ? a : void 0;
      }
      function Dk(a, c, b) {
        var d = !1,
          e = "";
        if (!kc(c)) return vb(b, "Ecommerce data should be an object"), d;
        var f = c.goods;
        switch (a) {
          case "detail":
          case "add":
          case "remove":
            ha(f) && f.length
              ? (d = kd(function (g) {
                  return kc(g) && (gb(g.id) || ve(b, g.id) || gb(g.name));
                }, f)) ||
                (e =
                  "All items in 'goods' should be objects and contain 'id' or 'name' field")
              : (e = "Ecommerce data should contain 'goods' non-empty array");
            break;
          case "purchase":
            ve(b, c.id) || gb(c.id)
              ? (d = !0)
              : (e =
                  "Purchase object should contain string or number 'id' field");
        }
        vb(b, e);
        return d;
      }
      function we(a, c, b) {
        var d,
          e,
          f = c.purchase || c;
        c = Aa(f);
        var g = f[b];
        if (g) {
          var k =
            ((d = {}), (d[a] = ((e = {}), (e.products = B(Ek, g)), e)), d);
          1 < c.length &&
            (k[a].actionField = M(
              function (m, n) {
                if (n === b) return m;
                if ("currency" === n) return (k.currencyCode = f.currency), m;
                m[xe[n] || n] = f[n];
                return m;
              },
              {},
              c
            ));
          return k;
        }
      }
      function Ek(a) {
        var c = {};
        E(function (b) {
          var d = xe[b] || b;
          -1 !== b.indexOf("item_category")
            ? ((d = xe.item_category),
              (c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]))
            : (c[d] = a[b]);
        }, Aa(a));
        return c;
      }
      function Fk(a, c) {
        var b = vg(a),
          d = Z(c),
          e = b[d];
        e || ((e = {}), (b[d] = e));
        e.Jj = !0;
        if ((b = e.uh)) (d = wg(a)), E(d, b);
      }
      function Gk(a, c, b, d) {
        var e;
        if ((a = La(a, b))) {
          var f = d.data;
          b = "" + b.id;
          var g = d.sended || [];
          d.sended || (d.sended = g);
          L(b, g) ||
            !a.params ||
            (d.counter && "" + d.counter !== b) ||
            (a.params(f),
            g.push(b),
            d.parent && c.sh(((e = {}), (e.type = "params"), (e.data = f), e)));
        }
      }
      function Hk(a, c, b) {
        if (b && ((b = xg(a, b)), (b = yg(a, b)))) {
          b = "?" + yc(b);
          var d = Db(
            a,
            c,
            "Button goal. Counter " + c.id + ". Button: " + b + "."
          );
          fe(a, c, "btn", d)(b);
        }
      }
      function Ik(a, c) {
        var b = Na(a);
        if ("" !== b.o("cc")) return 0;
        var d = A("cc", b.C);
        d(0);
        var e = fa(a),
          f = Y(a);
        f = x(
          W(Ha({ Bd: 1 }) + ".c"),
          Cc(function (g) {
            d(g + "&" + e(hb));
          }),
          A("cc", f.C)
        );
        pa(
          a,
          "6",
          c
        )({})
          .then(f)
          ["catch"](
            x(
              Cc(function () {
                var g = e(hb);
                b.C("cc", "&" + g);
              }),
              C(a, "cc")
            )
          );
      }
      function Jk(a, c) {
        var b;
        a(((b = {}), (b.clickmap = T(c) ? !0 : c), b));
      }
      function Kk(a, c, b, d, e) {
        function f() {
          m && m.stop();
        }
        if (!c.Db) return P.resolve(J);
        var g = pa(a, "4", c),
          k = { J: { "wv-type": "0" }, V: ta() };
        b = new Lk(a, b, function (n, r, t) {
          g &&
            ((r = "wv-data=" + zg(n, !0)),
            g(
              G({}, k, { oa: r, J: { "wv-check": ld(n), "wv-type": "0" } }),
              c,
              t
            )["catch"](C(a, "m.n.m.s")));
        });
        var m = Mk(a, b, d, e);
        return Fa(a, c, function (n) {
          n && Y(a).C("isEU", w(n, "settings.eu"));
          !ye(a) && m && Ag(a, n) && m.start();
          return f;
        });
      }
      function Ag(a, c) {
        var b = Sb(a),
          d = b.o("visorc");
        L(d, ["w", "b"]) || (d = "");
        (Bg(a) && Cg(a, Dc, "visorc") && !Nk.test(wb(a) || "")) || (d = "b");
        var e = w(c, "settings.webvisor.recp");
        if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
        d || (d = (Y(a).o("hitId") % 1e4) / 1e4 < e ? "w" : "b");
        b.C("visorc", d, 30);
        return "w" === d;
      }
      function Mk(a, c, b, d) {
        var e = a.document,
          f = [],
          g = qa(a),
          k = ":submit" + Math.random(),
          m = [],
          n = D(c.flush, c),
          r = I(function (q, l) {
            C(a, "hfv." + q, function () {
              try {
                var h = l.type;
              } catch (p) {
                return;
              }
              h = -1 !== ob(a)(h, d);
              c.push(l, { type: q });
              h && n();
            })();
          }),
          t = C(a, "sfv", function () {
            if (!ze(a)) {
              var q = b(a),
                l = Ok(a);
              E(function (h) {
                f.push(g.D(h.target, h.event, r(h.type)));
              }, q);
              E(function (h) {
                f.push(
                  g.D(
                    h.target,
                    h.event,
                    C(a, "hff." + h.type + "." + h.event, function (p) {
                      E(x(A({ b: a, Ba: p, flush: n }), ma), h.ga);
                    })
                  )
                );
              }, l);
              m = Dg(a, "form", e);
              e.attachEvent &&
                ((q = Dg(a, "form *", e)),
                E(function (h) {
                  f.push(g.D(h, "submit", r("form")));
                }, m),
                E(function (h) {
                  Ae(h) && f.push(g.D(h, "change", r("formInput")));
                }, q));
              E(function (h) {
                var p = h.submit;
                if (ca(p) || ("object" === typeof p && Pk.test("" + p)))
                  (h[k] = p),
                    (h.submit = C(a, "fv", function () {
                      r("document", { target: h, type: "submit" });
                      return h[k]();
                    }));
              }, m);
            }
          }),
          v = C(a, "ufv", function () {
            E(ma, f);
            E(function (q) {
              q && (q.submit = q[k]);
            }, m);
            c.flush();
          });
        return { start: t, stop: v };
      }
      function Qk(a, c) {
        var b = X(function (e) {
            return 0 < e.ga.length;
          }, c),
          d = Eg({ target: a.document, type: "document" });
        return B(x(S, d, Rk(a)), b);
      }
      function Fg(a, c) {
        var b = a.b,
          d = [],
          e = c.form;
        if (!c[Ka] && e) {
          var f = e.elements;
          e = e.length;
          for (var g = 0; g < e; g += 1) {
            var k = f[g];
            md(k) && !k[Ka] && Qa(d, Tb(b, k));
          }
        } else Qa(d, Tb(b, c));
        return d;
      }
      function Be(a) {
        if (Ec) {
          Ec = !1;
          var c = ib(a.b),
            b = [];
          Xa(a.b, b, 15) ? (a = []) : (O(b, c), (a = b));
          return a;
        }
      }
      function Gg(a) {
        if (!Ec) {
          Ec = !0;
          a = ib(a.b);
          var c = [];
          xb(c, 14);
          O(c, a);
          return c;
        }
      }
      function Sk(a, c, b) {
        var d = c[Ka];
        if (d) {
          a: {
            var e = ib(a),
              f = c[Ka];
            if (0 < f) {
              var g = [];
              c = Ce(a, c);
              var k = Ub[f],
                m = c[0] + "x" + c[1],
                n = c[2] + "x" + c[3];
              if (m !== k.G) {
                k.G = m;
                if (Xa(a, g, 9)) {
                  a = [];
                  break a;
                }
                O(g, e);
                O(g, f);
                O(g, c[0]);
                O(g, c[1]);
              }
              if (n !== k.size) {
                k.size = n;
                if (Xa(a, g, 10)) {
                  a = [];
                  break a;
                }
                O(g, e);
                O(g, f);
                O(g, c[2]);
                O(g, c[3]);
              }
              if (g.length) {
                a = g;
                break a;
              }
            }
            a = [];
          }
          Qa(b, a);
        }
        return d;
      }
      function ic(a, c, b) {
        void 0 === b && (b = !1);
        if ("button" === c.getAttribute("type")) return !1;
        var d = hd(c),
          e = nd(c);
        a = Hg(a, c) || (b && e);
        return !d && a;
      }
      function Hg(a, c) {
        return Ig(a, c) || Fc(a, c) ? !0 : hc(a, c);
      }
      function nd(a) {
        if (!a) return !1;
        var c = a.placeholder;
        a = [a.className, a.id, a.name];
        return Ba(Ra(Tk), a) || Uk.test(c);
      }
      function gd(a) {
        try {
          var c = a.type;
          return Gc(a) ? !c || Vk.test(c) : Wk(a);
        } catch (b) {
          return !1;
        }
      }
      function Jg(a, c) {
        return c && Ib("(ym-disable-submit|-metrika-noform)", c);
      }
      function hd(a) {
        return a && Ib("ym-record-keys", a);
      }
      function Xk(a, c) {
        return F(
          "",
          B(function (b) {
            return a.isNaN(b)
              ? Yk.test(b)
                ? ((b = b.toUpperCase() === b ? Zk : $k),
                  String.fromCharCode(db(a, b[0], b[1])))
                : b
              : "" + db(a, 0, 9);
          }, c.split(""))
        );
      }
      function hc(a, c) {
        if (ya(c)) return !1;
        if (re(c)) {
          var b = c.parentNode;
          return (ya(b) ? 0 : 11 === b.nodeType) ? !1 : hc(a, c.parentNode);
        }
        if (al.test(c.className)) return !0;
        b = Kg(a);
        if (!b) return !1;
        var d = b.call(c, ".ym-hide-content *");
        return d &&
          (bl.test(c.className) ||
            b.call(c, ".ym-hide-content .ym-show-content *"))
          ? !1
          : d;
      }
      function cl(a, c, b, d, e) {
        var f;
        c = {
          V: ta(),
          J: ((f = {}), (f["page-url"] = c), (f["pointer-click"] = b), f),
        };
        d(c, e)["catch"](C(a, "c.s.c"));
      }
      function dl(a, c, b, d, e) {
        if (Hc(a, "ymDisabledClickmap") || ze(a) || !c || !c.element) return !1;
        a = ra(c.element);
        if (
          (e && !e(c.element, a)) ||
          (L(c.button, [2, 3]) && "A" !== a) ||
          Ba(la(a), d)
        )
          return !1;
        d = c.element;
        if (c && b) {
          if (50 > c.time - b.time) return !1;
          e = Math.abs(b.position.x - c.position.x);
          a = Math.abs(b.position.y - c.position.y);
          c = c.time - b.time;
          if (b.element === d && 2 > e && 2 > a && 1e3 > c) return !1;
        }
        for (; d; ) {
          if (el(d)) return !1;
          d = d.parentElement;
        }
        return !0;
      }
      function fl(a, c) {
        var b = null;
        try {
          if ((b = c.target || c.srcElement))
            !b.ownerDocument && b.documentElement
              ? (b = b.documentElement)
              : b.ownerDocument !== a.document && (b = null);
        } catch (d) {}
        return b;
      }
      function gl(a) {
        var c = a.which;
        a = a.button;
        return c || void 0 === a
          ? c
          : 1 === a || 3 === a
          ? 1
          : 2 === a
          ? 3
          : 4 === a
          ? 2
          : 0;
      }
      function Lg(a, c) {
        var b = Hb(a),
          d = De(a);
        return {
          x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
          y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0,
        };
      }
      function hl(a) {
        var c = C(a, "i.clch", il);
        qa(a).D(a.document, "click", D(c, null, a), { passive: !1 });
        return function (b) {
          var d = za.Hb,
            e = a.Ya[za.Nc],
            f = !!e._informer;
          e._informer = G({ domain: "informer.yandex.ru" }, b);
          f || Bc(a, { src: d + "//informer.yandex.ru/metrika/informer.js" });
        };
      }
      function jl(a, c, b, d, e) {
        var f = e(ba);
        return kl(a, b, c)
          .then(function (g) {
            if (!g) return tb(fb("ds.h"));
            var k = g.Bd,
              m = g.host;
            if (w(k, "settings")) return tb(fb("ds.e"));
            d.C("ds", e(hb));
            g = e(ba) - f;
            m = m.port;
            var n, r;
            k = ta(((n = {}), (n.di = k), (n.dit = g), (n.dip = m), n));
            n = ((r = {}), (r["page-url"] = Q(a).href), r);
            return pa(a, "S", Mg)({ V: k, J: n }, Mg);
          })
          ["catch"](function (g) {
            d.C("ds", e(hb) - 60 + 15);
            od(a, "d.s", g);
          });
      }
      function ll(a, c, b, d, e) {
        return new P(function (f, g) {
          var k = Y(a);
          if (k.o("dSync", !1)) return g();
          k.C("dSync", !0);
          k = d.o("ds", 0);
          k = parseInt("" + k, 10);
          return 60 >= c(hb) - k || !la(b.qa, "0")
            ? g()
            : ml(a)
            ? f(void 0)
            : Ng(e)
            ? g()
            : f(Og(a, b));
        });
      }
      function kl(a, c, b) {
        var d = pa(a, "s", c);
        return P.all(
          B(function (e) {
            return d(
              nl,
              B(function (f) {
                return f.host + ":" + f.port + "/p";
              }, e),
              { Nh: !1, vk: !0 }
            ).then(function (f) {
              return G({}, f, { host: e[f.Qk] });
            }, A(!1, S));
          }, b)
        ).then(A(Boolean, Ma));
      }
      function ol(a, c, b) {
        var d = c || {},
          e = pa(a, "u", b),
          f = Na(a);
        return {
          o: function (g, k) {
            return T(d[g]) ? f.o(g, k) : d[g];
          },
          C: function (g, k) {
            var m,
              n = "" + k;
            d[g] = n;
            f.C(g, n);
            return e(
              { J: ((m = {}), (m.key = g), (m.value = n), m) },
              [za.Hb + "//mc.yandex.ru/user_storage_set"],
              {}
            )["catch"](C(a, "u.d.s.s"));
          },
        };
      }
      function pl(a, c) {
        if (a.Jk()) {
          var b = null;
          try {
            b = c.target || c.srcElement;
          } catch (l) {}
          if (b) {
            3 === b.nodeType && (b = b.parentNode);
            for (
              var d = b && b.nodeName && ("" + b.nodeName).toLowerCase();
              w(b, "parentNode.nodeName") &&
              (("a" !== d && "area" !== d) ||
                (!b.href && !b.getAttribute("xlink:href")));

            )
              d =
                (b = b.parentNode) &&
                b.nodeName &&
                ("" + b.nodeName).toLowerCase();
            var e = b.href ? b : null;
          } else e = null;
          if (e && !Ib("ym-disable-tracklink", e)) {
            var f = a.b,
              g = a.globalStorage;
            b = a.Wi;
            var k = a.Yi,
              m = a.Hj,
              n = a.sender,
              r = a.ij,
              t = k.Zc,
              v = e.href;
            d = Vb(e && e.innerHTML && e.innerHTML.replace(/<\/?[^>]+>/gi, ""));
            d = v === d ? "" : d;
            if (Ib("ym-external-link", e))
              pd(f, k, { url: v, Le: !0, title: d, sender: n });
            else {
              t = t ? Fb(f, t).hostname : Q(f).hostname;
              r = RegExp("\\.(" + F("|", B(ql, r)) + ")$", "i");
              var q = e.protocol + "//" + e.hostname + e.pathname;
              r = Pg.test(q) || Pg.test(v) || r.test(v) || r.test(q);
              e = e.hostname;
              Qg(t) === Qg(e)
                ? r
                  ? pd(f, k, { url: v, Ke: !0, title: d, sender: n })
                  : ((m = (f = g.o("pai", J)()) && f + "-" + m) &&
                      b.C("pai", m),
                    d && b.C("il", Vb(d).slice(0, 100)))
                : (v && rl.test(v)) ||
                  pd(f, k, {
                    url: v,
                    od: !0,
                    Le: !0,
                    Ke: r,
                    title: d,
                    sender: n,
                  });
            }
          }
        }
      }
      function pd(a, c, b, d) {
        var e,
          f = ta();
        b.Ke && f.C("dl", "1");
        b.Le && f.C("ln", "1");
        f = {
          V: f,
          title: b.title,
          od: !!b.od,
          ha: b.ha,
          J:
            ((e = {}),
            (e["page-url"] = b.url),
            (e["page-ref"] = c.Zc || Q(a).href),
            e),
        };
        b.sender(f, c)
          .then(d || J)
          ["catch"](C(a, "cl.p.s"))
          .then(R([a, D(b.Ib || J, b.b)], Jb));
      }
      function sl(a, c) {
        var b,
          d,
          e =
            ((b = {}), (b.string = !0), (b.object = !0), (b["boolean"] = c), b)[
              typeof c
            ] || !1;
        a(((d = {}), (d.trackLinks = e), d));
      }
      function qd(a, c) {
        return x(Rg(c), Ee(a));
      }
      function Ic(a, c) {
        return x(tl(c), Ee(a));
      }
      function Ee(a) {
        a = Y(a);
        var c = a.o("dsjf") || Ja({});
        a.Bb("dsjf", c);
        return c;
      }
      function Sg(a) {
        var c = Tg(a).isEnabled,
          b = !1;
        try {
          b =
            (b = 2 === new a.Blob(["\u00e4"]).size) &&
            2 === new a.Blob([new a.Uint8Array([1, 2])]).size;
        } catch (d) {}
        return kd(Boolean, [
          !c,
          b,
          a.Uint8Array,
          w(a, "Uint8Array.prototype.slice"),
        ]);
      }
      function rd(a) {
        return ha(a)
          ? B(rd, a)
          : ya(a) || "object" !== typeof a
          ? a
          : M(
              function (c, b) {
                var d = b[0],
                  e = b[1],
                  f = ul[d];
                T(f) && (f = d);
                e = L(f, vl) ? e : rd(e);
                f ? (c[f] = e) : (c[d] = e);
                return c;
              },
              {},
              Ga(a)
            );
      }
      function Db(a, c, b, d) {
        return Ug(c)
          ? J
          : A(R(ia([a], d ? [b + ". Params:", d] : [b]), vb), ma);
      }
      function vb() {
        var a = va(arguments),
          c = a.slice(1);
        Fe(a[0]).log.apply(vb, c);
      }
      function Tg(a) {
        var c = Sb(a),
          b = Q(a);
        c = "1" === c.o("debug");
        b = -1 < b.href.indexOf("_ym_debug=1");
        a = a._ym_debug;
        return { Fj: c, Mj: a || b, isEnabled: Ba(Boolean, [c, a, b]) };
      }
      function wl(a, c, b) {
        var d;
        (d = wa[c]) || (d = Ia);
        d = d.slice();
        d.unshift(xl);
        d.unshift(yl);
        return B(x(R([a, c, b]), ma), d);
      }
      function Vg(a, c) {
        var b = Q(a),
          d = b.href,
          e = b.host,
          f = -1;
        if (!gb(c) || T(c)) return d;
        b = c.replace(Wg, "");
        if (-1 !== b.search(zl)) return b;
        var g = b.charAt(0);
        if (
          ("?" === g && ((f = d.search(/\?/)), -1 === f)) ||
          ("#" === g && ((f = d.search(/#/)), -1 === f))
        )
          return d + b;
        if (-1 !== f) return d.substr(0, f) + b;
        if ("/" === g) {
          if (((f = d.indexOf(e)), -1 !== f))
            return d.substr(0, f + e.length) + b;
        } else return (d = d.split("/")), (d[d.length - 1] = b), F("/", d);
        return "";
      }
      function yl(a) {
        return {
          ua: function (c, b) {
            ye(a) || b();
          },
        };
      }
      function ye(a) {
        var c;
        return (c = (c = !!Y(a).o("oo")) || ze(a));
      }
      function Al(a) {
        a = Bl(a);
        return Cl[a] || a;
      }
      function Dl(a) {
        a = Xg(a);
        return El[a] || "ru";
      }
      function La(a, c) {
        var b = Y(a).o("counters", {}),
          d = Z(c);
        return b[d];
      }
      function xl(a, c, b) {
        return {
          ua: function (d, e) {
            Fl(a, d, b, e);
          },
        };
      }
      function Fl(a, c, b, d) {
        if (b.Zk) d();
        else {
          var e = Ge(a),
            f = c.V,
            g = jc(a, "");
          c = f
            ? x(function () {
                var v = Yg(e);
                f.C("gdpr", "" + v + Gl(v, g));
              }, d)
            : d;
          if (3 === b.id) c();
          else {
            var k = Y(a);
            if ((d = k.o("f1"))) d(c);
            else if (
              ((d = (d = Yg(e)) ? B(A(sd, w), d.split(",")) : []), Zg(d))
            )
              c();
            else {
              var m = $g(a),
                n = Q(a),
                r =
                  m &&
                  (-1 !== n.href.indexOf("yagdprcheck=1") ||
                    g.o("yaGdprCheck"));
              n = g.o("gdpr");
              g.o("yandex_login")
                ? (d.push("13"), g.C("gdpr", lc, 525600))
                : m
                ? L(n, Kb)
                  ? n === He
                    ? d.push("12")
                    : d.push("3")
                  : ah(a) || Ie(a)
                  ? d.push("17")
                  : Hl(a) && d.push("28")
                : d.push("14");
              var t = A(e, Il);
              Zg(d)
                ? (E(t, d), c())
                : (td.push(c),
                  k.C("f1", function (v, q) {
                    var l = 0;
                    if (q) {
                      var h = $a(a, q) || "";
                      l += h.length;
                    }
                    td.push(v);
                    1e6 >= l && td.push(v);
                  }),
                  (0, Je[0])(a)
                    .then(W("params.eu"))
                    .then(function (v) {
                      if (v || r) {
                        g.C("gdpr_popup", He);
                        Jl(a, b);
                        if (sb(a)) return Kl(a, t, b);
                        var q = bh(a, e);
                        if (q) return Ll(a, t, q, b);
                      }
                      v || t("8");
                      return P.resolve({ value: lc, Me: !0 });
                    })
                    .then(function (v) {
                      g.Kb("gdpr_popup");
                      if (v) {
                        var q = v.value;
                        v = v.Me;
                        L(q, Kb) && g.C("gdpr", q, v ? void 0 : 525600);
                      }
                      q = Jc(td, ma);
                      Ke(a, q, 20)(mc(C(a, "gdr"), J));
                      k.C("f1", ma);
                    })
                    ["catch"](C(a, "gdp.a")));
            }
          }
        }
      }
      function Kl(a, c, b) {
        var d = ud(a, b);
        return new P(function (e) {
          var f;
          if (d) {
            var g = d.na,
              k = x(A("4", c), A(null, e)),
              m = V(a, k, 2e3, "gdp.f.t");
            d.sh(((f = {}), (f.type = "isYandex"), f))
              .then(function (n) {
                n.isYandex
                  ? (c("5"),
                    g.D(
                      F(
                        ",",
                        ia(
                          ["GDPR-ok-view-default", "GDPR-ok-view-detailed"],
                          Le
                        )
                      ),
                      function (r) {
                        e({ value: ch(r[1].type) });
                      }
                    ))
                  : (c("6"), e(null));
              })
              ["catch"](k)
              .then(R([a, m], ua));
          } else e({ value: He, Me: !0 });
        });
      }
      function Jl(a, c) {
        var b = ud(a, c);
        b &&
          b.na.D("isYandex", function () {
            var d;
            return (d = { type: "isYandex" }), (d.isYandex = $g(a)), d;
          });
        return b;
      }
      function Ll(a, c, b, d) {
        var e = Ml(a, d.$k),
          f = ud(a, d);
        if (!f) return P.resolve({ value: lc, Me: !0 });
        var g = Bc(a, {
          src: "https://yastatic.net/s3/gdpr/popup/v2/" + e + ".js",
        });
        return new P(function (k, m) {
          g
            ? (c("7"),
              (g.onerror = function () {
                var n;
                c("9");
                f.rh(((n = {}), (n.type = "GDPR-ok-view-default"), n));
                k(null);
              }),
              (g.onload = function () {
                c("10");
                b.D(
                  F(
                    ",",
                    ia(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Le)
                  ),
                  function (n) {
                    var r;
                    n = n.type;
                    f.rh(((r = {}), (r.type = n), r));
                    k({ value: ch(n) });
                  }
                );
              }))
            : (c("9"), m(fb("gdp.e")));
        });
      }
      function Ml(a, c) {
        var b = c || Xg(a);
        return L(b, Nl) ? b : "en";
      }
      function dh(a, c) {
        var b = eh(a, c),
          d = [],
          e = [];
        if (!b) return null;
        var f = Ol(a, b.uf),
          g = Pl(f);
        b.na
          .D("initToParent", function (k) {
            g(d, b.fc[k[1].counterId]);
          })
          .D("parentConnect", function (k) {
            g(e, b.tc[k[1].counterId]);
          });
        return {
          na: b.na,
          dm: function (k, m) {
            return new P(function (n, r) {
              b.uf(k, m, function (t, v) {
                n([t, v]);
              });
              V(a, A(fb(), r), 5100, "is.o");
            });
          },
          rh: function (k) {
            var m = { th: [], Kf: [], data: k };
            d.push(m);
            return f(b.fc, m, k);
          },
          sh: function (k) {
            var m = { th: [], Kf: [], data: k };
            e.push(m);
            return f(b.tc, m, k);
          },
        };
      }
      function vd() {
        return function (a, c, b) {
          return {
            ua: function (d, e) {
              var f,
                g = d.V,
                k = d.J;
              if (g && k) {
                var m = L(k["wv-type"], Ql);
                if (!k["wv-type"] || m) {
                  var n = fa(a);
                  g.zf("rqnl", 1);
                  g = g.b();
                  for (var r = Kc(a), t = 1; r[t]; ) t += 1;
                  d.xc = t;
                  r[t] =
                    ((f = {}),
                    (f.protocol = za.Hb),
                    (f.host = "mc.yandex.ru"),
                    (f.resource = m ? "webvisor" : "watch"),
                    (f.postParams = d.oa),
                    (f.time = n(ba)),
                    (f.counterType = b.qa),
                    (f.params = k),
                    (f.browserInfo = g),
                    (f.counterId = b.id),
                    (f.ghid = nc(a)),
                    f);
                  Me(a);
                }
              }
              e();
            },
            qb: function (d, e) {
              fh(a, d);
              e();
            },
          };
        };
      }
      function fh(a, c) {
        var b = Kc(a);
        c.V && !Za(b) && (delete b[c.xc], Me(a));
      }
      function Me(a) {
        var c = Kc(a);
        Na(a).C("retryReqs", c);
      }
      function wd(a, c, b) {
        var d = xd(a, c, b);
        return function (e, f, g) {
          var k = G({ V: ta() }, e);
          k.J || (k.J = {});
          var m = k.J;
          m.wmode = "0";
          m["wv-part"] = "" + g;
          m["wv-hit"] = m["wv-hit"] || "" + nc(a);
          m["page-url"] = m["page-url"] || a.location.href;
          e = m["wv-type"] ? P.resolve(m["wv-type"]) : Rl(a, f, k);
          m.rn = m.rn || "" + db(a);
          return e.then(function (n) {
            var r;
            m["wv-type"] = n;
            n = "webvisor/" + f.id;
            return d(G(k, { J: m }), n, {
              vc: ((r = {}), (r["Content-Type"] = "text/plain"), r),
              Mh: "POST",
            });
          });
        };
      }
      function Rl(a, c, b) {
        return Fa(a, c, function (d) {
          var e = b.Kg;
          d = !!w(d, "settings.publisher.schema");
          var f = "4",
            g = "2";
          e && ((f = "5"), (g = "3"));
          e = !!b.V.o("bt");
          return d && !e ? f : g;
        });
      }
      function Sl(a, c, b, d) {
        c = d.o("cc");
        d = R(["cc", ""], d.C);
        if (c) {
          var e = c.split("&");
          c = e[0];
          if ((e = (e = e[1]) && parseInt(e, 10)) && 1440 < fa(a)(hb) - e)
            return d();
          b.C("cc", c);
        } else la(0, c) || d();
      }
      function Tl(a, c, b, d) {
        return Fa(a, c, function (e) {
          if ("0" === w(e, "settings.pcs") && !Wb(a))
            if (((e = d.o("zzlc")), T(e) || Za(e) || "na" === e)) {
              e = "ru";
              var f = gh(a, 68),
                g = hh(a, 79);
              if (f || g) e = "md";
              if ((f = eb(a))) {
                var k = f("iframe");
                G(k.style, {
                  display: "none",
                  width: "1px",
                  height: "1px",
                  visibility: "hidden",
                });
                k.src =
                  "https://mc.yandex." + e + tg("L21ldHJpa2EvenpsYy5odG1s");
                if ((e = Hb(a))) {
                  e.appendChild(k);
                  var m = 0,
                    n = qa(a).D(
                      a,
                      "message",
                      C(a, "zz.m", function (r) {
                        (r = w(r, "data")) &&
                          r.substr &&
                          "__ym__zz" === r.substr(0, 8) &&
                          (oc(k),
                          (r = r.substr(8)),
                          d.C("zzlc", r),
                          b.C("zzlc", r),
                          n(),
                          ua(a, m));
                      })
                    );
                  m = V(a, x(n, A(k, oc)), 3e3, "zz.i");
                }
              }
            } else b.C("zzlc", e);
        });
      }
      function Ul(a, c, b, d, e, f, g, k) {
        var m = b.o(f);
        ya(m) && (b.C(f, g), e(a, c, b, d), (m = b.o(f, g)));
        T(k) || k.zf(f, "" + m);
        return m;
      }
      function gh(a, c) {
        if (yd(a) && c) {
          var b = wb(a).match(Vl);
          if (b && b.length) return +b[1] >= c;
        }
        return !1;
      }
      function hh(a, c) {
        var b = wb(a);
        return b && (b = b.match(Wl)) && 1 < b.length
          ? parseInt(b[1], 10) >= c
          : !1;
      }
      function Fa(a, c, b) {
        a = Z(c);
        return ih()(Xl(a)).then(b);
      }
      function Yl(a, c, b) {
        var d,
          e = eh(a, c);
        if (e) {
          e.na.D("gpu-get", function () {
            var k;
            return (k = {}), (k.type = "gpu-get"), (k.pu = b.o("pu")), k;
          });
          var f = w(a, "opener");
          if (f) {
            var g = V(a, R([a, c, b], jh), 200, "pu.m");
            e.uf(f, ((d = {}), (d.type = "gpu-get"), d), function (k, m) {
              var n = w(m, "pu");
              n && (ua(a, g), b.C("pu", n));
            });
          } else jh(a, c, b);
        }
      }
      function jh(a, c, b) {
        var d = w(a, "location.host");
        a = Ne(a, c);
        b.C("pu", "" + Lc(d) + a);
      }
      function Zl(a, c) {
        var b = zd(a);
        c.D("initToParent", function (d) {
          var e = d[1];
          b.fc[e.counterId] = { info: e, window: d[0].source };
        })
          .D("initToChild", function (d) {
            var e = d[0];
            d = d[1];
            e.source === a.parent && c.ia("parentConnect", [e, d]);
          })
          .D("parentConnect", function (d) {
            var e = d[1];
            e.counterId &&
              (b.tc[e.counterId] = { info: e, window: d[0].source });
          });
      }
      function Oe(a, c, b) {
        return {
          ua: function (d, e) {
            var f = d.V;
            if (f && (!b || b.qh)) {
              var g = a.document.title;
              d.title && (g = d.title);
              var k = Lb("getElementsByTagName", a.document);
              "string" !== typeof g &&
                k &&
                ((g = k("title")), (g = (g = w(g, "0.innerHtml")) ? g : ""));
              g = g.slice(0, za.oi);
              f.C("t", g);
            }
            e();
          },
        };
      }
      function Xb(a) {
        void 0 === a && (a = $l);
        return function (c, b, d) {
          return {
            ua: function (e, f) {
              var g = e.V,
                k = e.J;
              g &&
                k &&
                E(function (m) {
                  C(c, "bi:" + m, x(R([c, d, e], jb[m]), D(g.zf, g, m)))();
                }, a);
              f();
            },
          };
        };
      }
      function nc(a) {
        var c = Y(a),
          b = c.o("hitId");
        b || ((b = db(a)), c.C("hitId", b));
        return b;
      }
      function zg(a, c) {
        void 0 === c && (c = !1);
        for (var b = a.length, d = b - (b % 3), e = [], f = 0; f < d; f += 3) {
          var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
          e.push.apply(e, [
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 18) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 12) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 6) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              g & 63
            ],
          ]);
        }
        switch (b - d) {
          case 1:
            b = a[d] << 4;
            e.push.apply(e, [
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                (b >> 6) & 63
              ],
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                b & 63
              ],
              "=",
              "=",
            ]);
            break;
          case 2:
            (b = (a[d] << 10) + (a[d + 1] << 2)),
              e.push.apply(e, [
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (b >> 12) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (b >> 6) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  b & 63
                ],
                "=",
              ]);
        }
        e = e.join("");
        return c ? ue(e, !0) : e;
      }
      function tg(a, c) {
        void 0 === c && (c = !1);
        var b = a,
          d = "",
          e = 0;
        if (!b) return "";
        for (c && (b = ue(b)); b.length % 4; ) b += "=";
        do {
          var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
              b.charAt(e++)
            ),
            g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
              b.charAt(e++)
            ),
            k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
              b.charAt(e++)
            ),
            m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
              b.charAt(e++)
            );
          if (0 > f || 0 > g || 0 > k || 0 > m) return null;
          var n = (f << 18) | (g << 12) | (k << 6) | m;
          f = (n >> 16) & 255;
          g = (n >> 8) & 255;
          n &= 255;
          d =
            64 === k
              ? d + String.fromCharCode(f)
              : 64 === m
              ? d + String.fromCharCode(f, g)
              : d + String.fromCharCode(f, g, n);
        } while (e < b.length);
        return d;
      }
      function ue(a, c) {
        void 0 === c && (c = !1);
        return a
          ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) {
              return am[b] || b;
            })
          : "";
      }
      function kh(a, c) {
        var b = a.length
          ? B(function (d, e) {
              var f = c[e];
              return f === d ? null : f;
            }, a)
          : c;
        a.length = 0;
        E(x(S, oa("push", a)), c);
        return X(la(null), b).length === a.length ? null : b;
      }
      function lh(a, c, b) {
        return B(function (d) {
          var e = d[0],
            f = d[1];
          if (ca(e)) return e(a, c) || null;
          if (ca(f)) return null;
          var g = !(!c[e] || !c[f]);
          !g &&
            2 === d.length &&
            (g = 0 === c[e] && 0 === c[f]) &&
            ((g = d[1]), (g = !(mh[d[0]] || mh[g])));
          return g
            ? ((d = Math.round(c[e]) - Math.round(c[f])),
              0 > d || 36e5 < d ? null : d)
            : 1 === d.length && c[e]
            ? Math.round(c[e])
            : null;
        }, b);
      }
      function Mc(a, c, b) {
        return {
          ua: function (d, e) {
            var f = nh(b),
              g = d.V;
            g
              ? g.o("pv") && !g.o("ar")
                ? ((f.Cg = g), e())
                : ((f = f.pe), !0 === f ? e() : f.push(e))
              : e();
          },
          qb: function (d, e) {
            var f = d.V,
              g = d.rk,
              k = nh(b);
            if (f) {
              var m = k.pe;
              k.Cg === f &&
                !0 !== m &&
                (g && Y(a).C("isEU", w(g, "settings.eu")),
                E(ma, m),
                (k.pe = !0));
            }
            e();
          },
        };
      }
      function Pe(a) {
        return {
          ua: function (c, b) {
            var d = a.document,
              e = c.V;
            if (e && Qe(a)) {
              var f = qa(a);
              f.D(d, "webkitvisibilitychange,visibilitychange", oh(a, f, b));
              e.C("pr", "1");
            } else b();
          },
        };
      }
      function Oa(a, c, b) {
        var d = xd(a, c, b);
        return function (e, f) {
          var g,
            k = G({ V: ta() }, e),
            m = k.J,
            n = k.V;
          m =
            ((g = {}),
            (g["page-url"] = (m && m["page-url"]) || ""),
            (g.charset = "utf-8"),
            g);
          "0" !== f.qa && (m["cnt-class"] = f.qa);
          g = G(k, { J: G(k.J || {}, m) });
          k = "";
          m = Z(f);
          ph(f)[m] && ((k = Lc(Ne(a, f)) + "."), g.V && g.V.C("rt", 1));
          G(g, { Dg: k });
          return d(g, "watch/" + f.id, {
            Tf: !(!n.o("pv") || n.o("ar") || n.o("wh")),
          });
        };
      }
      function xd(a, c, b) {
        var d = pc(a, c);
        return function (e, f, g) {
          void 0 === g && (g = {});
          var k = bm(a);
          e.Dg && (k = "" + e.Dg + k);
          f = [za.Hb + "//" + (k || "mc.yandex.ru") + "/" + f];
          return Re(a, b, e, !0)
            .then(R([e, f, g], d))
            .then(function (m) {
              e.rk = m.Bd;
              return Re(a, b, e).then(A(m.Bd, S));
            });
        };
      }
      function bm(a) {
        var c = "mc.yandex.ru",
          b = w(a, "document.referrer");
        if (!b) return c;
        (a = Fb(a, b).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/))
          ? ((a = a[0].split("yandex").reverse()[0].substring(1)),
            (a = L(a, qh) ? a : !1))
          : (a = !1);
        return "mc.yandex." + (a || "ru");
      }
      function cm(a, c) {
        return a && c ? rh(a) === rh(c) : a || c ? !1 : !0;
      }
      function rh(a) {
        return (a.split(":")[1] || "")
          .replace(/^\/*/, "")
          .replace(/^www\./, "")
          .split("/")[0];
      }
      function Re(a, c, b, d) {
        void 0 === d && (d = !1);
        return new P(function (e, f) {
          var g = x(qb, ma, e),
            k = Jc(c.slice().concat([{ ua: g, qb: g }]), function (m, n) {
              var r = d ? m.ua : m.qb;
              if (r)
                try {
                  r(b, n);
                } catch (t) {
                  k(dm), f(t);
                }
              else n();
            });
          k(Se(a));
        });
      }
      function Zj(a, c, b, d, e, f) {
        void 0 === d && (d = 1);
        void 0 === e && (e = 200);
        void 0 === f && (f = "itc");
        c = Jc(c, b);
        Ke(a, c, d, e)(mc(C(a, f), J));
      }
      function em(a) {
        a.flush = !0;
      }
      function Ke(a, c, b, d) {
        function e(f, g) {
          function k() {
            try {
              var n = c(Te(a, b));
              m = m.concat(n);
            } catch (r) {
              f(r);
            }
            c(sh);
            if (c(Nc)) return g(m);
            e.flush ? (c(Te(a, 1e4)), g(m)) : V(a, k, d);
          }
          var m = [];
          k();
        }
        void 0 === b && (b = 1);
        void 0 === d && (d = 200);
        return Ja(e);
      }
      function fd(a) {
        return Ja(function (c, b) {
          b(a);
        });
      }
      function fm(a) {
        var c = [],
          b = 0;
        return Ja(function (d, e) {
          E(function (f, g) {
            f(
              mc(d, function (k) {
                c[g] = k;
                b += 1;
                b === a.length && e(c);
              })
            );
          }, a);
        });
      }
      function Jc(a, c) {
        void 0 === c && (c = S);
        return Ja({ md: a, Pg: c, Bc: !1, cb: 0 });
      }
      function gm(a) {
        Nc(a) && tb(Ad("i"));
        var c = a.Pg(a.md[a.cb]);
        a.cb += 1;
        return c;
      }
      function sh(a) {
        a.Bc = !1;
      }
      function hm(a) {
        a.Bc = !0;
      }
      function dm(a) {
        a.cb = a.md.length;
      }
      function Nc(a) {
        return a.Bc || a.md.length <= a.cb;
      }
      function pc(a, c) {
        return function (b, d, e) {
          void 0 === e && (e = {});
          return th(a, c, d, b, G(e, { ab: b.ab || [], oa: e.oa || b.oa }));
        };
      }
      function th(a, c, b, d, e, f, g) {
        var k;
        void 0 === f && (f = 0);
        void 0 === g && (g = 0);
        var m = G({}, e),
          n = c[g],
          r = n[0];
        n = n[1];
        var t = G({}, d.J),
          v = fa(a);
        d.V && (t["browser-info"] = ta(d.V.b()).C("ti", r).C("st", v(Bd)).Ab());
        v = b[f];
        (m.vc && m.vc["Content-Type"]) ||
          !m.oa ||
          ((m.vc = G(
            {},
            m.vc,
            ((k = {}),
            (k["Content-Type"] = "application/x-www-form-urlencoded"),
            k)
          )),
          (m.oa = "site-info=" + Ue(m.oa)));
        m.Mh = m.oa ? "POST" : "GET";
        m.wc = t;
        m.ab.push(r);
        return n("" + v + (d.Xj ? "/1" : ""), m)
          .then(function (q) {
            return { Bd: q, Qk: f };
          })
          ["catch"](function (q) {
            var l = g + 1 >= c.length,
              h = f + 1 >= b.length;
            l && h && tb(q);
            return th(a, c, b, d, e, !h && l ? f + 1 : f, l ? 0 : g + 1);
          });
      }
      function uh(a, c) {
        var b = c.Re,
          d = b || "uid";
        b = b ? a.location.hostname : void 0;
        var e = Sb(a),
          f = Na(a),
          g = fa(a),
          k = g(Bd),
          m = vh(a, c),
          n = m[0];
        m = m[1];
        var r = e.o("d");
        wh(a, c);
        var t = !1;
        !m && n && ((m = n), (t = !0));
        if (!m) (m = F("", [g(Bd), db(a)])), (t = !0);
        else if (!r || 15768e3 < k - parseInt(r, 10)) t = !0;
        t && !c.Sb && (e.C(d, m, 525600, b), e.C("d", "" + k, 525600, b));
        f.C(d, m);
        return m;
      }
      function vh(a, c) {
        var b = Na(a),
          d = Sb(a),
          e = c.Re || "uid";
        return [b.o(e), d.o(e)];
      }
      function ib(a) {
        a = fa(a);
        return Math.round(a(Ve) / 50);
      }
      function Ve(a) {
        var c = a.Va,
          b = c[1];
        a = c[0] && b ? b() : ba(a) - a.Ij;
        return Math.round(a);
      }
      function Bd(a) {
        return Math.round(ba(a) / 1e3);
      }
      function hb(a) {
        return Math.floor(ba(a) / 1e3 / 60);
      }
      function ba(a) {
        var c = a.Nf;
        return 0 !== c ? c : We(a.b, a.Va);
      }
      function xh(a) {
        var c = qa(a),
          b = yh(a),
          d = { b: a, Nf: 0, Va: b, Ij: We(a, b) },
          e = b[1];
        (b[0] && e) ||
          c.D(a, "beforeunload,unload", function () {
            0 === d.Nf && (d.Nf = We(a, d.Va));
          });
        return Ja(d);
      }
      function im(a) {
        return (10 >= a ? "0" : "") + a;
      }
      function We(a, c) {
        var b = c || yh(a),
          d = b[0];
        b = b[1];
        return !isNaN(d) && ca(b)
          ? Math.round(b() + d)
          : a.Date.now
          ? a.Date.now()
          : new a.Date().getTime();
      }
      function yh(a) {
        a = Xe(a);
        var c = w(a, "timing.navigationStart"),
          b = w(a, "now");
        b && (b = D(b, a));
        return [c, b];
      }
      function Xe(a) {
        return w(a, "performance") || w(a, "webkitPerformance");
      }
      function zh(a, c, b) {
        void 0 === c && (c = "");
        void 0 === b && (b = "_ym");
        var d = "" + b + c + "_";
        return {
          Je: jm(a),
          o: function (e, f) {
            var g = Ah(a, "" + d + e);
            return Za(g) && !T(f) ? f : g;
          },
          C: function (e, f) {
            Bh(a, "" + d + e, f);
            return this;
          },
          Kb: function (e) {
            Ch(a, "" + d + e);
            return this;
          },
        };
      }
      function Bh(a, c, b) {
        var d = Ye(a);
        a = $a(a, b);
        if (!Za(a))
          try {
            d.setItem(c, a);
          } catch (e) {}
      }
      function Ah(a, c) {
        var b = Ye(a);
        try {
          return pb(a, b.getItem(c));
        } catch (d) {}
        return null;
      }
      function Ch(a, c) {
        var b = Ye(a);
        try {
          b.removeItem(c);
        } catch (d) {}
      }
      function Ye(a) {
        try {
          return a.localStorage;
        } catch (c) {}
        return null;
      }
      function Bg(a, c, b) {
        Cd(a, "metrika_enabled", "1", 0, c, b);
        (b = Dc(a, "metrika_enabled")) &&
          Cd(a, "metrika_enabled", "", -100, c, void 0);
        return !!b;
      }
      function Dc(a, c) {
        var b = null;
        try {
          b = a.document.cookie;
        } catch (d) {
          return null;
        }
        return (b = new RegExp("(?:^|;\\s*)" + c + "=([^;]*)").exec(b)) &&
          2 <= b.length
          ? decodeURIComponent(b[1])
          : null;
      }
      function Cg(a, c, b) {
        L(b, ["gdpr", "gdpr_popup", "metrika_enabled"])
          ? (a = !0)
          : ((b = Ge(a)),
            (b = Dh(b)),
            (a = c(a, "gdpr")),
            (a = X(ub(km), b).length ? !0 : L(a, [lc, lm])));
        return a;
      }
      function ch(a) {
        if (L(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return lc;
        a = a.replace("GDPR-ok-view-detailed-", "");
        return L(a, Kb) ? a : lc;
      }
      function bh(a, c, b) {
        void 0 === b && (b = S);
        var d = zc(a);
        b(d);
        var e = I(mm)(d);
        Ze(a, c, function (f) {
          f.D(e);
        });
        return d;
      }
      function mm(a, c) {
        var b = w(c, "ymetrikaEvent");
        b && a.ia(w(b, "type"), b);
      }
      function Ze(a, c, b) {
        void 0 === b && (b = J);
        var d = Dd(a);
        if (c && ca(c.push)) {
          var e = c.push;
          c.push = function () {
            var f = va(arguments),
              g = e.apply(c, f);
            d.ia(f[0]);
            return g;
          };
          b(d);
          E(d.ia, c);
          return d;
        }
      }
      function Ge(a) {
        a = Y(a);
        var c = a.o("dataLayer", []);
        a.C("dataLayer", c);
        return c;
      }
      function Il(a, c) {
        var b, d;
        a.push(((b = {}), (b.ymetrikaEvent = ((d = {}), (d.type = c), d)), b));
      }
      function nm(a, c, b) {
        function d() {
          f = 0;
          g && ((g = !1), (f = V(a, d, b)), e.ia(k));
        }
        var e = Dd(a),
          f,
          g = !1,
          k;
        c.D(function (m) {
          g = !0;
          k = m;
          f || d();
          return J;
        });
        return e;
      }
      function zc(a) {
        var c = {};
        return {
          D: function (b, d) {
            E(function (e) {
              w(c, e) || (c[e] = Dd(a));
              c[e].D(d);
            }, b.split(","));
            return this;
          },
          ya: function (b, d) {
            E(function (e) {
              w(c, e) && c[e].ya(d);
            }, b.split(","));
            return this;
          },
          ia: function (b, d) {
            return M(
              function (e, f) {
                return w(c, f) ? e.concat(C(a, "e." + f, c[f].ia)(d)) : e;
              },
              [],
              b.split(",")
            );
          },
        };
      }
      function Dd(a) {
        var c = [],
          b = {};
        b.Rl = c;
        b.D = x(oa("push", c), A(b, S));
        b.ya = x(Yb(ob(a))(c), Yb(oa("splice", c))(1), A(b, S));
        b.ia = x(S, Yb(ma), om(c));
        return b;
      }
      function pm(a, c) {
        var b = a.document;
        if (L(b.readyState, ["interactive", "complete"])) V(a, c, 0);
        else {
          var d = qa(a),
            e = d.D,
            f = d.Cc,
            g = function () {
              f(b, "DOMContentLoaded", g);
              f(a, "load", g);
              c();
            };
          e(b, "DOMContentLoaded", g);
          e(a, "load", g);
        }
      }
      function Eh(a, c, b, d, e) {
        var f = Fh(a, Gh),
          g = Fh(a, Hh);
        if (f || g) {
          var k = f ? Gh : Hh;
          g = k[0];
          k = k[1];
          D.apply(
            void 0,
            ia([a[e ? k : g], a], f ? [c, b, d] : ["on" + c, b])
          )();
        }
      }
      function Fh(a, c) {
        return M(
          function (b, d) {
            return b && a[d];
          },
          !0,
          c
        );
      }
      function qm(a, c) {
        return a.clearInterval(c);
      }
      function rm(a, c, b, d) {
        return a.setInterval(C(a, "i.err." + (d || "def"), c), b);
      }
      function V(a, c, b, d) {
        return Ed(a, C(a, "d.err." + (d || "def"), c), b);
      }
      function H(a, c, b) {
        return function () {
          return C(arguments[0], a, c, b).apply(this, arguments);
        };
      }
      function C(a, c, b, d, e) {
        var f = b || tb;
        return function () {
          var g = d;
          try {
            g = f.apply(e || null, arguments);
          } catch (k) {
            od(a, c, k);
          }
          return g;
        };
      }
      function od(a, c, b) {
        var d, e, f, g, k;
        if (!(0.01 >= a.Math.random())) {
          var m = "u.a.e",
            n = "";
          b &&
            ("object" === typeof b
              ? ((m = b.message),
                (n =
                  ("string" === typeof b.stack &&
                    b.stack.replace(/\n/g, "\\n")) ||
                  "n.s.e.s"))
              : (m = "" + b));
          if (!sm(m) && !Ba(x(oa("indexOf", m), la(-1), Zb), tm)) {
            c =
              ((d = {}),
              (d.jserrs =
                ((e = {}),
                (e[za.Kc] =
                  ((f = {}),
                  (f[m] =
                    ((g = {}),
                    (g[c] = ((k = {}), (k[a.location.href] = n), k)),
                    g)),
                  f)),
                e)),
              d);
            a: {
              var r;
              d = za.Hb + "//mc.yandex.ru/watch/" + za.hi;
              try {
                var t = $e(a, "er")[0];
                var v = void 0 === t ? [] : t;
                var q = v[1];
                var l = void 0 === q ? null : q;
              } catch (h) {
                break a;
              }
              t =
                ((r = {}),
                (r["browser-info"] =
                  "ar:1:pv:1:v:" + za.Kc + ":vf:" + Oc.version),
                (r["page-url"] = a.location && "" + a.location.href),
                r);
              a = $a(a, c);
              if (l && a)
                l(d, { wc: t, ab: [], oa: "site-info=" + Ue(a) })["catch"](J);
            }
          }
        }
      }
      function yb(a) {
        return B(function (c) {
          return !c || L(c, a) ? c : 0;
        }, $b);
      }
      function Ih(a) {
        var c = w(a, "navigator.sendBeacon");
        return c && ea("sendBeacon", c) && !Ie(a)
          ? um(a, D(c, w(a, "navigator")))
          : !1;
      }
      function af(a) {
        return eb(a) ? vm(a) : !1;
      }
      function ta(a) {
        var c = a || {};
        return {
          b: A(c, S),
          o: function (b, d) {
            var e = c[b];
            return T(e) && !T(d) ? d : e;
          },
          C: function (b, d) {
            c[b] = d;
            return this;
          },
          zf: function (b, d) {
            return "" === d || ya(d) ? this : this.C(b, d);
          },
          Ab: A(
            c,
            x(
              Ga,
              hg(function (b, d) {
                return "t" === b[0] ? 1 : "t" === d[0] ? -1 : 0;
              }),
              ac(function (b, d) {
                b.push(F(":", d));
                return b;
              }, []),
              gc(":")
            )
          ),
        };
      }
      function wm(a, c) {
        try {
          delete a[c];
        } catch (b) {
          a[c] = void 0;
        }
      }
      function db(a, c, b) {
        var d = T(b);
        T(c) && d
          ? ((d = 1), (c = 1073741824))
          : d
          ? (d = 1)
          : ((d = c), (c = b));
        return a.Math.floor(a.Math.random() * (c - d)) + d;
      }
      function ve(a, c) {
        return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Fd(c);
      }
      function Pc(a) {
        var c = eb(a);
        return c ? xm(a, c) : !1;
      }
      function yg(a, c, b) {
        var d = ra(c);
        return d && ug(a, c, X(Boolean, ["p", zm[d], "c"]), Jh(a), b);
      }
      function xg(a, c) {
        var b = Cb(bf, a, c);
        if (!b) {
          var d = Cb("div", a, c);
          d && (zb(bf + ",div", a, d).length || (b = d));
        }
        return b;
      }
      function ug(a, c, b, d, e) {
        return M(
          function (f, g) {
            var k = null;
            g in Kh
              ? (k = c.getAttribute && c.getAttribute(Kh[g]))
              : g in qc &&
                (k =
                  "p" === g
                    ? qc[g](a, c, e)
                    : "c" === g
                    ? qc[g](a, c, d)
                    : qc[g](a, c));
            k &&
              ((k = k.slice(0, Lh[g] || 100)), (f[g] = cf[g] ? "" + Lc(k) : k));
            return f;
          },
          {},
          b
        );
      }
      function Dg(a, c, b) {
        if (
          a.document.querySelectorAll &&
          ea("querySelectorAll", w(a, "Element.prototype.querySelectorAll"))
        )
          return ka(b.querySelectorAll(c));
        var d = Mh(c.split(" "), b);
        return X(function (e, f) {
          return ob(a)(e, d) === f;
        }, d);
      }
      function Mh(a, c) {
        var b = ia(a),
          d = b.shift();
        if (!d) return [];
        d = c.getElementsByTagName(d);
        return b.length ? Eb(A(b, Mh), ka(d)) : ka(d);
      }
      function Bb(a, c, b) {
        return (a = zb(b, a, c)) && a.length ? a[0] : null;
      }
      function zb(a, c, b) {
        return b ? ((a = b.querySelectorAll(a)) ? ka(a) : []) : [];
      }
      function Bc(a, c) {
        var b = a.document,
          d = G({ type: "text/javascript", charset: "utf-8", async: !0 }, c),
          e = eb(a);
        if (e) {
          var f = e("script");
          df(
            Ga,
            Wa(function (n) {
              var r = n[0];
              n = n[1];
              "async" === r && n ? (f.async = !0) : (f[r] = n);
            })
          )(d);
          try {
            var g = Lb("getElementsByTagName", b),
              k = g("head")[0];
            if (!k) {
              var m = g("html")[0];
              k = e("head");
              m && m.appendChild(k);
            }
            k.insertBefore(f, k.firstChild);
            return f;
          } catch (n) {}
        }
      }
      function Nh(a, c) {
        var b = "",
          d = "width height align title alt name".split(" "),
          e = ra(c);
        "IMG" === e && (b += c.src.toLowerCase());
        "A" === e && (b += c.href.toLowerCase());
        b += ("" + (c.className || "")).toLowerCase();
        for (e = 0; e < d.length; e += 1)
          c.getAttribute &&
            (b += ("" + (c.getAttribute(d[e]) || "")).toLowerCase());
        return ld(b.replace(/[\u0000-\u0020]+/g, ""));
      }
      function Oh(a, c) {
        for (var b = "", d = c.childNodes, e = d.length, f = 0; f < e; f += 1)
          d[f] && 3 === d[f].nodeType && (b += d[f].nodeValue);
        return ld(b.replace(/[\u0000-\u0020]+/g, ""));
      }
      function Am(a, c) {
        var b = ha(a) ? a : [a];
        c = c || document;
        if (c.querySelectorAll) {
          var d = F(
            ", ",
            B(function (e) {
              return "." + e;
            }, b)
          );
          return ka(c.querySelectorAll(d));
        }
        if (c.getElementsByClassName)
          return Eb(x(oa("getElementsByClassName", c), ka), b);
        d = c.getElementsByTagName("*");
        b = "(" + F("|", b) + ")";
        return X(A(b, Ib), ka(d));
      }
      function Ph(a, c, b) {
        for (
          var d = "", e = Qh(), f = ra(c) || "*";
          c && c.parentNode && !L(f, ["BODY", "HTML"]);

        )
          (d += e[f] || "*"),
            (d += Rh(a, c, b) || ""),
            (c = c.parentElement),
            (f = ra(c) || "*");
        return Vb(d, 128);
      }
      function Rh(a, c, b) {
        if ((a = Qc(a, c))) {
          a = a.childNodes;
          for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
            if (d === (a[f] && a[f].nodeName)) {
              if (c === a[f]) return e;
              (b && a[f] === b) || (e += 1);
            }
        }
        return 0;
      }
      function Qc(a, c) {
        var b = w(a, "document");
        if (!c || c === b.documentElement) return null;
        if (c === bc(a)) return b.documentElement;
        b = null;
        try {
          b = c.parentNode;
        } catch (d) {}
        return b;
      }
      function Ce(a, c) {
        var b = ef(a, c),
          d = b.left;
        b = b.top;
        var e = Gd(a, c);
        return [d, b, e[0], e[1]];
      }
      function Gd(a, c) {
        var b = w(a, "document");
        if (c === bc(a) || c === b.documentElement) {
          b = Hb(a);
          var d = Rc(a);
          return [
            Math.max(b.scrollWidth, d[0]),
            Math.max(b.scrollHeight, d[1]),
          ];
        }
        return (b = Ac(c))
          ? [b.width, b.height]
          : [c.offsetWidth, c.offsetHeight];
      }
      function ef(a, c) {
        var b = c,
          d = w(a, "document"),
          e = ra(b);
        if (
          !b ||
          !b.ownerDocument ||
          "PARAM" === e ||
          b === bc(a) ||
          b === d.documentElement
        )
          return { left: 0, top: 0 };
        if ((d = b.getBoundingClientRect && Ac(b)))
          return (
            (b = De(a)),
            { left: Math.round(d.left + b.x), top: Math.round(d.top + b.y) }
          );
        for (e = d = 0; b; )
          (d += b.offsetLeft), (e += b.offsetTop), (b = b.offsetParent);
        return { left: d, top: e };
      }
      function Cb(a, c, b) {
        if (!(c && c.Element && c.Element.prototype && c.document)) return null;
        if (
          c.Element.prototype.closest &&
          ea("closest", c.Element.prototype.closest) &&
          b.closest
        )
          return b.closest(a);
        var d = Kg(c);
        if (d) {
          for (; b && 1 === b.nodeType && !d.call(b, a); )
            b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        if (
          c.document.querySelectorAll &&
          ea("querySelectorAll", w(c, "Element.prototype.querySelectorAll"))
        ) {
          for (
            a = ka((c.document || c.ownerDocument).querySelectorAll(a));
            b && 1 === b.nodeType && -1 === ob(c)(b, a);

          )
            b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        return null;
      }
      function Sh(a) {
        return Gc(a) && !Ba(la(a.type), Bm)
          ? Th(a)
            ? !a.checked
            : !a.value
          : Cm(a)
          ? !a.value
          : Dm(a)
          ? 0 > a.selectedIndex
          : !0;
      }
      function ra(a) {
        if (a)
          try {
            var c = gb(a.nodeName) ? a.nodeName : null,
              b = gb(a.tagName) ? a.tagName : null;
            return c || b || void 0;
          } catch (d) {}
      }
      function Uh(a, c) {
        var b = a.document.getElementsByTagName("form");
        return ob(a)(c, ka(b));
      }
      function Em(a, c, b) {
        b = Lb("dispatchEvent", b || a.document);
        var d = null,
          e = w(a, "Event.prototype.constructor");
        if (
          e &&
          (ea("(Event|Object|constructor)", e) ||
            (Hd(a) && "[object Event]" === "" + e))
        )
          try {
            d = new a.Event(c);
          } catch (f) {
            if ((a = Lb("createEvent", w(a, "document"))) && ca(a)) {
              try {
                d = a(c);
              } catch (g) {}
              d && d.initEvent && d.initEvent(c, !1, !1);
            }
          }
        d && b(d);
      }
      function Ac(a) {
        try {
          return a.getBoundingClientRect && a.getBoundingClientRect();
        } catch (c) {
          return "object" === typeof c &&
            null !== c &&
            16389 === (c.Tg && c.Tg & 65535)
            ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 }
            : null;
        }
      }
      function De(a) {
        var c = bc(a),
          b = w(a, "document");
        return {
          x:
            a.pageXOffset ||
            (b.documentElement && b.documentElement.scrollLeft) ||
            (c && c.scrollLeft) ||
            0,
          y:
            a.pageYOffset ||
            (b.documentElement && b.documentElement.scrollTop) ||
            (c && c.scrollTop) ||
            0,
        };
      }
      function Rc(a) {
        var c = ff(a);
        if (c) {
          var b = c[2];
          return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)];
        }
        c = Hb(a);
        return [
          w(c, "clientWidth") || a.innerWidth,
          w(c, "clientHeight") || a.innerHeight,
        ];
      }
      function ff(a) {
        var c = w(a, "visualViewport.width"),
          b = w(a, "visualViewport.height");
        a = w(a, "visualViewport.scale");
        return ya(c) || ya(b) ? null : [Math.floor(c), Math.floor(b), a];
      }
      function Hb(a) {
        var c = w(a, "document") || {},
          b = c.documentElement;
        return "CSS1Compat" === c.compatMode ? b : bc(a) || b;
      }
      function bc(a) {
        a = w(a, "document");
        try {
          return a.getElementsByTagName("body")[0];
        } catch (c) {
          return null;
        }
      }
      function Ib(a, c) {
        try {
          return new RegExp("(?:^|\\s)" + a + "(?:\\s|$)").test(c.className);
        } catch (b) {
          return !1;
        }
      }
      function cc(a) {
        var c;
        try {
          if ((c = a.target || a.srcElement))
            !c.ownerDocument && c.documentElement
              ? (c = c.documentElement)
              : c.ownerDocument !== document && (c = null);
        } catch (b) {}
        return c;
      }
      function oc(a) {
        var c = a && a.parentNode;
        c && c.removeChild(a);
      }
      function re(a) {
        if (ya(a)) return !1;
        a = a.nodeType;
        return 3 === a || 8 === a;
      }
      function Mb(a) {
        var c;
        if ((c = w(a, "XMLHttpRequest")))
          if ((c = "withCredentials" in new a.XMLHttpRequest())) {
            a: {
              if (
                Fm.test(a.location.host) &&
                a.opera &&
                ca(a.opera.version) &&
                ((c = a.opera.version()),
                "string" === typeof c && "12" === c.split(".")[0])
              ) {
                c = !0;
                break a;
              }
              c = !1;
            }
            c = !c;
          }
        return c ? Gm(a) : !1;
      }
      function Hm(a, c, b, d, e, f, g, k) {
        if (4 === c.readyState)
          if ((200 === c.status || e || g(b), e))
            200 === c.status
              ? f(c.responseText)
              : g(
                  "s." +
                    c.status +
                    ".st." +
                    c.statusText +
                    ".rt." +
                    c.responseText
                );
          else {
            e = null;
            if (d)
              try {
                (e = pb(a, c.responseText)) || g(b);
              } catch (m) {
                g(b);
              }
            f(e);
          }
        return k;
      }
      function Vh(a, c, b) {
        (b = yc(b)) && (a += "?" + b);
        c.oa && (a += (b ? "&" : "?") + c.oa);
        return a;
      }
      function $a() {
        var a,
          c = va(arguments),
          b = c[0];
        c = c.slice(1);
        try {
          return (a = b.JSON).stringify.apply(a, c);
        } catch (d) {
          return null;
        }
      }
      function yc(a) {
        return a
          ? x(
              Ga,
              ac(function (c, b) {
                var d = b[0],
                  e = b[1];
                T(e) || ya(e) || c.push(d + "=" + Ue(e));
                return c;
              }, []),
              gc("&")
            )(a)
          : "";
      }
      function te(a) {
        return a
          ? x(
              Wa(function (c) {
                c = c.split("=");
                var b = c[1];
                return [c[0], ya(b) ? void 0 : jd(b)];
              }),
              ac(function (c, b) {
                c[b[0]] = b[1];
                return c;
              }, {})
            )(a.split("&"))
          : {};
      }
      function jd(a) {
        var c = "";
        try {
          c = decodeURIComponent(a);
        } catch (b) {}
        return c;
      }
      function Ue(a) {
        try {
          return encodeURIComponent(a);
        } catch (c) {}
        a = F(
          "",
          X(function (c) {
            return 55296 >= c.charCodeAt(0);
          }, a.split(""))
        );
        return encodeURIComponent(a);
      }
      function gf() {
        var a = va(arguments);
        return tb(fb(a));
      }
      function fb(a) {
        var c = "";
        ha(a) ? (c = F(".", a)) : gb(a) && (c = a);
        return Ad("err.kn(" + za.Kc + ")" + c);
      }
      function Im(a) {
        this.message = a;
      }
      function Q(a) {
        return M(
          function (c, b) {
            var d = w(a, "location." + b);
            c[b] = d ? "" + d : "";
            return c;
          },
          {},
          Jm
        );
      }
      function Km(a, c, b, d, e) {
        var f = "object" === typeof a ? a : { id: a, qa: d, Oc: e, ha: b };
        a = M(
          function (g, k) {
            var m = k[1],
              n = m.Yj;
            m = f[m.Xg];
            g[k[0]] = n ? n(m) : m;
            return g;
          },
          {},
          Ga(c)
        );
        Wh(a, a.ha || {});
        return a;
      }
      function Lm(a, c) {
        return M(
          function (b, d) {
            b[c[d[0]].Xg] = d[1];
            return b;
          },
          {},
          Ga(a)
        );
      }
      function Xh(a) {
        a = Z(a);
        return !(!Ab[a] || !Ab[a].Hk);
      }
      function Wh(a, c) {
        var b = Z(a),
          d = w(c, "__ym.turbo_page"),
          e = w(c, "__ym.turbo_page_id");
        Ab[b] || (Ab[b] = {});
        if (d || e) (Ab[b].Hk = d), (Ab[b].Ch = e);
      }
      function Qe(a) {
        return L(
          "prerender",
          B(A(w(a, "document"), w), [
            "webkitVisibilityState",
            "visibilityState",
          ])
        );
      }
      function ke(a, c) {
        return Array.prototype.sort.call(c, a);
      }
      function ka(a) {
        if (a) {
          if (!ha(a)) {
            Uf();
            if ("undefined" === typeof Symbol) var c = !1;
            else
              try {
                Uf(), qj(), (c = ca(a[Symbol.iterator]));
              } catch (b) {
                c = !1;
              }
            a =
              c && Yh
                ? Yh(a)
                : "number" === typeof a.length && 0 <= a.length
                ? va(a)
                : [];
          }
        } else a = [];
        return a;
      }
      function Tj(a) {
        if (0 > a) return [];
        for (var c = [], b = 0; b <= a; b += 1) c.push(b);
        return c;
      }
      function Id(a, c, b) {
        return b ? a : c;
      }
      function Jd() {
        return [];
      }
      function rc() {
        return {};
      }
      function Kd(a, c) {
        return function () {
          var b = va(arguments),
            d = b[0];
          b = b.slice(1);
          var e = Y(d),
            f = e.o("m504", {}),
            g = w(f, a);
          g || ((g = z(c)), (f[a] = g), e.C("m504", f));
          return g.apply(void 0, ia([d], b));
        };
      }
      function J() {}
      function Jb(a, c) {
        try {
          if (ca(c)) {
            var b = va(arguments).slice(2);
            c.apply(void 0, b);
          }
        } catch (d) {
          Ed(a, A(d, tb), 0);
        }
      }
      function ma(a, c) {
        return c ? a(c) : a();
      }
      function tb(a) {
        throw a;
      }
      function Ed(a, c, b) {
        return Lb("setTimeout", a)(c, b);
      }
      function ua(a, c) {
        return Lb("clearTimeout", a)(c);
      }
      function Lb(a, c) {
        var b = w(c, a),
          d = w(c, "constructor.prototype." + a) || b;
        try {
          if (d && d.apply)
            return function () {
              return d.apply(c, arguments);
            };
        } catch (e) {
          return b;
        }
        return d;
      }
      function Mm(a, c) {
        if (!yd(a)) return !0;
        try {
          c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () {
            throw 1;
          });
        } catch (b) {
          return !1;
        }
        return !0;
      }
      function z(a, c) {
        var b = [],
          d = [];
        var e = c ? c : S;
        return function () {
          var f = va(arguments),
            g = e.apply(void 0, f),
            k = Zh(g, d);
          if (-1 !== k) return b[k];
          f = a.apply(void 0, f);
          b.push(f);
          d.push(g);
          return f;
        };
      }
      function Zb(a) {
        return !a;
      }
      function qb(a, c) {
        return c;
      }
      function S(a) {
        return a;
      }
      function ob(a) {
        if (hf) return hf;
        var c = !1;
        try {
          c = [].indexOf && 0 === [void 0].indexOf(void 0);
        } catch (d) {}
        var b =
          a.Array &&
          a.Array.prototype &&
          Va(a.Array.prototype.indexOf, "indexOf");
        return (hf = a =
          c && b
            ? function (d, e) {
                return b.call(e, d);
              }
            : Nm);
      }
      function Nm(a, c) {
        for (var b = 0; b < c.length; b += 1) if (c[b] === a) return b;
        return -1;
      }
      function Om(a, c) {
        for (var b = "", d = 0; d < c; d += 1) b += a;
        return b;
      }
      function Pm(a) {
        return T(a)
          ? []
          : Sc(
              function (c, b) {
                c.push([b, a[b]]);
                return c;
              },
              [],
              $h(a)
            );
      }
      function Qm(a, c) {
        return Sc(
          function (b, d, e) {
            d = a(d, e);
            return b.concat(ha(d) ? d : [d]);
          },
          [],
          c
        );
      }
      function Rm(a, c) {
        return Sc(
          function (b, d, e) {
            b.push(a(d, e));
            return b;
          },
          [],
          c
        );
      }
      function Sm() {
        var a = va(arguments),
          c = a[0],
          b = a[1],
          d = a.slice(2);
        return function () {
          var e = ia(d, va(arguments));
          if (Function.prototype.call)
            return Function.prototype.call.apply(c, ia([b], e));
          if (b) {
            for (var f = "_b"; b[f]; ) f += "_" + f.length;
            b[f] = c;
            e = b[f] && ai(f, e, b);
            delete b[f];
            return e;
          }
          return ai(c, e);
        };
      }
      function ai(a, c, b) {
        void 0 === c && (c = []);
        b = b || {};
        var d = c.length,
          e = a;
        ca(e) && ((e = "d"), (b[e] = a));
        var f;
        d
          ? 1 === d
            ? (f = b[e](c[0]))
            : 2 === d
            ? (f = b[e](c[0], c[1]))
            : 3 === d
            ? (f = b[e](c[0], c[1], c[2]))
            : 4 === d && (f = b[e](c[0], c[1], c[2], c[3]))
          : (f = b[e]());
        return f;
      }
      function Tm() {
        var a = va(arguments),
          c = a[0];
        for (a = a.slice(1); a.length; ) {
          var b = a.shift(),
            d;
          for (d in b) Hc(b, d) && (c[d] = b[d]);
          Hc(b, "toString") && (c.toString = b.toString);
        }
        return c;
      }
      function $h(a) {
        var c = [],
          b;
        for (b in a) Hc(a, b) && c.push(b);
        return c;
      }
      function Um(a, c) {
        return 1 <= bi(la(a), c).length;
      }
      function bi(a, c) {
        return Sc(
          function (b, d, e) {
            a(d, e) && b.push(d);
            return b;
          },
          [],
          c
        );
      }
      function Hc(a, c) {
        return ya(a) ? !1 : jf.call(a, c);
      }
      function ha(a) {
        if (Tc) return Tc(a);
        (Tc = Va(Array.isArray, "isArray")) || (Tc = Vm);
        return Tc(a);
      }
      function x() {
        var a = va(arguments);
        return function () {
          var c = va(arguments);
          return M(
            function (b, d, e) {
              b = d.apply(void 0, b);
              return e + 1 === a.length ? b : [b];
            },
            c,
            a
          );
        };
      }
      function de(a, c) {
        void 0 === c && (c = {});
        if (!a || 1 > a.length) return c;
        M(
          function (b, d, e) {
            if (e === a.length - 1) return b;
            b[d] = e === a.length - 2 ? a[e + 1] : b[d] || {};
            return b[d];
          },
          c,
          a
        );
        return c;
      }
      function w(a, c) {
        return a
          ? M(
              function (b, d) {
                if (ya(b)) return b;
                var e = null;
                try {
                  e = b[d];
                } catch (f) {}
                return e;
              },
              a,
              c.split(".")
            )
          : null;
      }
      function Sc(a, c, b) {
        var d = 0,
          e = b.length;
        T(c) && ((c = b[0]), (d += 1));
        for (; d < e; ) (c = a(c, b[d], d)), (d += 1);
        return c;
      }
      function kc(a) {
        return !Za(a) && !T(a) && "[object Object]" === Fd(a);
      }
      function ya(a) {
        return T(a) || Za(a);
      }
      function ca(a) {
        return "function" === typeof a;
      }
      function Yb(a) {
        return I(function (c, b) {
          return a(b, c);
        });
      }
      function I() {
        var a = va(arguments),
          c = a[0],
          b = a.slice(1);
        return function () {
          var d = va(arguments);
          return c.length > d.length + b.length
            ? I.apply(void 0, ia([c], b, d))
            : c.apply(void 0, ia(b, d));
        };
      }
      function Wm(a, c) {
        for (var b = "", d = 0; d < c.length; d += 1)
          b += "" + (d ? a : "") + c[d];
        return b;
      }
      function Va(a, c) {
        return ea(c, a) && a;
      }
      function ea(a, c) {
        if (!c || "function" !== typeof c) return !1;
        var b = new RegExp(
          "function\\s*(" +
            a +
            ")?\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}",
          "i"
        );
        try {
          return b.test("" + c);
        } catch (d) {
          return !1;
        }
      }
      function va(a) {
        for (var c = a.length, b = [], d = 0; d < c; d += 1) b[d] = a[d];
        return b;
      }
      function kf(a, c) {
        kf =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (b, d) {
              b.__proto__ = d;
            }) ||
          function (b, d) {
            for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]);
          };
        return kf(a, c);
      }
      function ql(a) {
        return a
          .replace(/\^/g, "\\^")
          .replace(/\$/g, "\\$")
          .replace(/\./g, "\\.")
          .replace(/\[/g, "\\[")
          .replace(/\]/g, "\\]")
          .replace(/\|/g, "\\|")
          .replace(/\(/g, "\\(")
          .replace(/\)/g, "\\)")
          .replace(/\?/g, "\\?")
          .replace(/\*/g, "\\*")
          .replace(/\+/g, "\\+")
          .replace(/\{/g, "\\{")
          .replace(/\}/g, "\\}");
      }
      function Vb(a, c) {
        if (a) {
          var b = ("" + a).replace(Wg, "");
          return c && b.length > c ? b.substr(0, c) : b;
        }
        return "";
      }
      function Zf(a) {
        return "" + a;
      }
      function gb(a) {
        return "[object String]" === Fd(a);
      }
      function Fd(a) {
        return Object.prototype.toString.call(a);
      }
      function Ca(a, c) {
        function b() {
          this.constructor = a;
        }
        kf(a, c);
        a.prototype =
          null === c
            ? Object.create(c)
            : ((b.prototype = c.prototype), new b());
      }
      function ia() {
        for (var a = 0, c = 0, b = arguments.length; c < b; c++)
          a += arguments[c].length;
        a = Array(a);
        var d = 0;
        for (c = 0; c < b; c++)
          for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)
            a[d] = e[f];
        return a;
      }
      function Xm() {}
      function Ym(a, c) {
        return function () {
          a.apply(c, arguments);
        };
      }
      function xa(a) {
        if (!(this instanceof xa))
          throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a) throw new TypeError("not a function");
        this.Xa = 0;
        this.dg = !1;
        this.ob = void 0;
        this.ac = [];
        ci(a, this);
      }
      function di(a, c) {
        for (; 3 === a.Xa; ) a = a.ob;
        0 === a.Xa
          ? a.ac.push(c)
          : ((a.dg = !0),
            xa.eg(function () {
              var b = 1 === a.Xa ? c.dk : c.ek;
              if (null === b) (1 === a.Xa ? lf : Uc)(c.zb, a.ob);
              else {
                try {
                  var d = b(a.ob);
                } catch (e) {
                  Uc(c.zb, e);
                  return;
                }
                lf(c.zb, d);
              }
            }));
      }
      function lf(a, c) {
        try {
          if (c === a)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (c && ("object" === typeof c || "function" === typeof c)) {
            var b = c.then;
            if (c instanceof xa) {
              a.Xa = 3;
              a.ob = c;
              mf(a);
              return;
            }
            if ("function" === typeof b) {
              ci(Ym(b, c), a);
              return;
            }
          }
          a.Xa = 1;
          a.ob = c;
          mf(a);
        } catch (d) {
          Uc(a, d);
        }
      }
      function Uc(a, c) {
        a.Xa = 2;
        a.ob = c;
        mf(a);
      }
      function mf(a) {
        2 === a.Xa &&
          0 === a.ac.length &&
          xa.eg(function () {
            a.dg || xa.Gi(a.ob);
          });
        for (var c = 0, b = a.ac.length; c < b; c++) di(a, a.ac[c]);
        a.ac = null;
      }
      function Zm(a, c, b) {
        this.dk = "function" === typeof a ? a : null;
        this.ek = "function" === typeof c ? c : null;
        this.zb = b;
      }
      function ci(a, c) {
        var b = !1;
        try {
          a(
            function (d) {
              b || ((b = !0), lf(c, d));
            },
            function (d) {
              b || ((b = !0), Uc(c, d));
            }
          );
        } catch (d) {
          b || ((b = !0), Uc(c, d));
        }
      }
      function ld(a) {
        for (var c = a.length, b = 0, d = 255, e = 255, f, g, k; c; ) {
          f = 21 < c ? 21 : c;
          c -= f;
          do
            (g = "string" === typeof a ? a.charCodeAt(b) : a[b]),
              (b += 1),
              255 < g && ((k = g >> 8), (g &= 255), (g ^= k)),
              (d += g),
              (e += d);
          while (--f);
          d = (d & 255) + (d >> 8);
          e = (e & 255) + (e >> 8);
        }
        a = (((d & 255) + (d >> 8)) << 8) | ((e & 255) + (e >> 8));
        return 65535 === a ? 0 : a;
      }
      function pb(a, c) {
        if (!c) return null;
        try {
          return a.JSON.parse(c);
        } catch (b) {
          return null;
        }
      }
      function Lc(a) {
        a = "" + a;
        for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
          (c ^= a.charCodeAt(d)),
            (c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24));
        return c >>> 0;
      }
      function Cd(a, c, b, d, e, f) {
        if (Cg(a, Dc, c)) {
          c = [c + "=" + encodeURIComponent(b)];
          c = c.concat($m(a));
          d &&
            ((b = new Date()),
            b.setTime(b.getTime() + 6e4 * d),
            c.push("expires=" + b.toUTCString()));
          e && ((d = e.replace(an, "")), c.push("domain=" + d));
          c.push("path=" + (f || "/"));
          f = F(";", c);
          try {
            a.document.cookie = f;
          } catch (g) {}
        }
      }
      function jc(a, c, b) {
        void 0 === c && (c = "_ym_");
        void 0 === b && (b = "");
        var d = bn(a),
          e = 1 === (d || "").split(".").length ? d : "." + d,
          f = b ? "_" + b : "";
        return {
          Kb: function (g, k, m) {
            Cd(a, "" + c + g + f, "", -100, k || e, m);
            return this;
          },
          o: function (g) {
            return Dc(a, "" + c + g + f);
          },
          C: function (g, k, m, n, r) {
            Cd(a, "" + c + g + f, k, m, n || e, r);
            return this;
          },
        };
      }
      function Fb(a, c) {
        var b = cn(a);
        return b
          ? ((b.href = c),
            {
              protocol: b.protocol,
              host: b.host,
              port: b.port,
              hostname: b.hostname,
              hash: b.hash,
              search: b.search,
              query: b.search.replace(/^\?/, ""),
              pathname: b.pathname || "/",
              path: (b.pathname || "/") + b.search,
              href: b.href,
            })
          : {};
      }
      function ab(a, c) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
        var b = [0, 0, 0, 0];
        b[3] += a[3] * c[3];
        b[2] += b[3] >>> 16;
        b[3] &= 65535;
        b[2] += a[2] * c[3];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[2] += a[3] * c[2];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[1] += a[1] * c[3];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[1] += a[2] * c[2];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[1] += a[3] * c[1];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
        b[0] &= 65535;
        return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]];
      }
      function Nb(a, c) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
        var b = [0, 0, 0, 0];
        b[3] += a[3] + c[3];
        b[2] += b[3] >>> 16;
        b[3] &= 65535;
        b[2] += a[2] + c[2];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[1] += a[1] + c[1];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[0] += a[0] + c[0];
        b[0] &= 65535;
        return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]];
      }
      function sc(a, c) {
        c %= 64;
        if (32 === c) return [a[1], a[0]];
        if (32 > c)
          return [
            (a[0] << c) | (a[1] >>> (32 - c)),
            (a[1] << c) | (a[0] >>> (32 - c)),
          ];
        c -= 32;
        return [
          (a[1] << c) | (a[0] >>> (32 - c)),
          (a[0] << c) | (a[1] >>> (32 - c)),
        ];
      }
      function Ya(a, c) {
        c %= 64;
        return 0 === c
          ? a
          : 32 > c
          ? [(a[0] << c) | (a[1] >>> (32 - c)), a[1] << c]
          : [a[1] << (c - 32), 0];
      }
      function ja(a, c) {
        return [a[0] ^ c[0], a[1] ^ c[1]];
      }
      function ei(a) {
        a = ja(a, [0, a[0] >>> 1]);
        a = ab(a, [4283543511, 3981806797]);
        a = ja(a, [0, a[0] >>> 1]);
        a = ab(a, [3301882366, 444984403]);
        return (a = ja(a, [0, a[0] >>> 1]));
      }
      function dn(a, c) {
        var b = c || "",
          d = a || 0,
          e = b.length % 16,
          f = b.length - e,
          g = [0, d];
        d = [0, d];
        var k = [2277735313, 289559509],
          m = [1291169091, 658871167],
          n;
        for (n = 0; n < f; n += 16) {
          var r = [
            (b.charCodeAt(n + 4) & 255) |
              ((b.charCodeAt(n + 5) & 255) << 8) |
              ((b.charCodeAt(n + 6) & 255) << 16) |
              ((b.charCodeAt(n + 7) & 255) << 24),
            (b.charCodeAt(n) & 255) |
              ((b.charCodeAt(n + 1) & 255) << 8) |
              ((b.charCodeAt(n + 2) & 255) << 16) |
              ((b.charCodeAt(n + 3) & 255) << 24),
          ];
          var t = [
            (b.charCodeAt(n + 12) & 255) |
              ((b.charCodeAt(n + 13) & 255) << 8) |
              ((b.charCodeAt(n + 14) & 255) << 16) |
              ((b.charCodeAt(n + 15) & 255) << 24),
            (b.charCodeAt(n + 8) & 255) |
              ((b.charCodeAt(n + 9) & 255) << 8) |
              ((b.charCodeAt(n + 10) & 255) << 16) |
              ((b.charCodeAt(n + 11) & 255) << 24),
          ];
          r = ab(r, k);
          r = sc(r, 31);
          r = ab(r, m);
          g = ja(g, r);
          g = sc(g, 27);
          g = Nb(g, d);
          g = Nb(ab(g, [0, 5]), [0, 1390208809]);
          t = ab(t, m);
          t = sc(t, 33);
          t = ab(t, k);
          d = ja(d, t);
          d = sc(d, 31);
          d = Nb(d, g);
          d = Nb(ab(d, [0, 5]), [0, 944331445]);
        }
        r = [0, 0];
        t = [0, 0];
        switch (e) {
          case 15:
            t = ja(t, Ya([0, b.charCodeAt(n + 14)], 48));
          case 14:
            t = ja(t, Ya([0, b.charCodeAt(n + 13)], 40));
          case 13:
            t = ja(t, Ya([0, b.charCodeAt(n + 12)], 32));
          case 12:
            t = ja(t, Ya([0, b.charCodeAt(n + 11)], 24));
          case 11:
            t = ja(t, Ya([0, b.charCodeAt(n + 10)], 16));
          case 10:
            t = ja(t, Ya([0, b.charCodeAt(n + 9)], 8));
          case 9:
            (t = ja(t, [0, b.charCodeAt(n + 8)])),
              (t = ab(t, m)),
              (t = sc(t, 33)),
              (t = ab(t, k)),
              (d = ja(d, t));
          case 8:
            r = ja(r, Ya([0, b.charCodeAt(n + 7)], 56));
          case 7:
            r = ja(r, Ya([0, b.charCodeAt(n + 6)], 48));
          case 6:
            r = ja(r, Ya([0, b.charCodeAt(n + 5)], 40));
          case 5:
            r = ja(r, Ya([0, b.charCodeAt(n + 4)], 32));
          case 4:
            r = ja(r, Ya([0, b.charCodeAt(n + 3)], 24));
          case 3:
            r = ja(r, Ya([0, b.charCodeAt(n + 2)], 16));
          case 2:
            r = ja(r, Ya([0, b.charCodeAt(n + 1)], 8));
          case 1:
            (r = ja(r, [0, b.charCodeAt(n)])),
              (r = ab(r, k)),
              (r = sc(r, 31)),
              (r = ab(r, m)),
              (g = ja(g, r));
        }
        g = ja(g, [0, b.length]);
        d = ja(d, [0, b.length]);
        g = Nb(g, d);
        d = Nb(d, g);
        g = ei(g);
        d = ei(d);
        g = Nb(g, d);
        d = Nb(d, g);
        return (
          ("00000000" + (g[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (g[1] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
        );
      }
      function Vc(a, c, b) {
        var d = c.getAttribute("itemtype");
        b = zb('[itemprop~="' + b + '"]', a, c);
        return d
          ? X(function (e) {
              return e.parentNode && Cb("[itemtype]", a, e.parentNode) === c;
            }, b)
          : b;
      }
      function Sa(a, c, b) {
        return (a = Vc(a, c, b)) && a.length ? a[0] : null;
      }
      function Pa(a) {
        if (!a) return "";
        a = ha(a) ? a : [a];
        return a.length
          ? a[0].getAttribute("content") || a[0].innerText || ""
          : "";
      }
      function fi(a) {
        return a
          ? a.attributes && a.getAttribute("datetime")
            ? a.getAttribute("datetime")
            : Pa(a)
          : "";
      }
      function gi(a) {
        return (a = Q(a).hash.split("#")[1]) ? a.split("?")[0] : "";
      }
      function en(a, c) {
        var b = gi(a);
        hi = rm(
          a,
          function () {
            var d = gi(a);
            d !== b && (c(), (b = d));
          },
          200,
          "t.h"
        );
        return D(qm, null, a, hi);
      }
      function fn(a, c, b) {
        var d,
          e,
          f = c.qa,
          g = c.Pf,
          k = c.Zc,
          m = Y(a),
          n = ta(((d = {}), (d.wh = "1"), (d.pv = "1"), d));
        "1" === f && a.Fi && a.Fi.el && n.C("ad", "1");
        g && n.C("ut", "1");
        f = m.o("lastReferrer");
        d = Q(a).href;
        k = {
          J: ((e = {}), (e["page-url"] = k || d), (e["page-ref"] = f), e),
          V: n,
        };
        b(k, c)["catch"](C(a, "g.s"));
        m.C("lastReferrer", d);
      }
      function gn(a, c) {
        if (Hd(a)) return ua(a, c);
        nf[c] = !0;
        return ua(a, Ld[c] || 0);
      }
      function hn(a, c, b) {
        function d() {
          r || ((n = !0), (t = !1), (r = !0), f());
        }
        function e() {
          nf[h] = !0;
          g(!1);
          c();
        }
        function f() {
          ua(a, Ld[h]);
          if (nf[h]) g(!1);
          else {
            var u = Math.max(0, b - (t ? v : v + m(ba) - q));
            u ? (Ld[h] = V(a, e, u, "u.t.d.c")) : e();
          }
        }
        function g(u) {
          E(function (N) {
            var y = N[0],
              K = N[1];
            N = N[2];
            u ? l.D(y, K, N) : l.Cc(y, K, N);
          }, p);
        }
        var k = A(!1, g);
        if (Hd(a)) return { id: V(a, c, b, "u.t.d"), kg: k };
        var m = fa(a),
          n = !1,
          r = !1,
          t = !0,
          v = 0,
          q = m(ba),
          l = qa(a),
          h = ii;
        ii += 1;
        Ld[h] = 0;
        var p = [
          [
            a,
            "blur",
            function () {
              t = n = r = !0;
              v += m(ba) - q;
              q = m(ba);
              f();
            },
          ],
          [
            a,
            "focus",
            function () {
              n || r || (v = 0);
              q = m(ba);
              n = r = !0;
              t = !1;
              f();
            },
          ],
          [a.document, "click", d],
          [a.document, "mousemove", d],
          [a.document, "keydown", d],
          [a.document, "scroll", d],
        ];
        g(!0);
        f();
        return { id: h, kg: k };
      }
      function il(a, c) {
        var b,
          d = cc(c),
          e = za.Nc;
        if (d && Ib("ym-advanced-informer", d)) {
          var f = d.getAttribute("data-lang"),
            g = parseInt(d.getAttribute("data-cid") || "", 10);
          if (g || 0 === g)
            w(
              a,
              "Ya." + e + ".informer"
            )(((b = {}), (b.i = d), (b.id = g), (b.lang = f), b)),
              (b = c || window.event),
              b.preventDefault ? b.preventDefault() : (b.returnValue = !1);
        }
      }
      function Fc(a, c, b) {
        a = c && Ib(jn, c);
        return b && c ? a || !!Am(ji, c).length : a;
      }
      function Ig(a, c) {
        return Gc(c)
          ? "password" === c.type ||
              (c.name && ki.test(c.name)) ||
              (c.id && ki.test(c.id))
          : !1;
      }
      function Wc(a, c) {
        var b = Math.max(0, Math.min(c, 65535));
        Qa(a, [b >> 8, b & 255]);
      }
      function xb(a, c) {
        Qa(a, [c & 255]);
      }
      function Xa(a, c, b) {
        return -1 !== ob(a)(b, kn) ? (xb(c, b), !1) : !0;
      }
      function O(a, c) {
        for (var b = Math.max(0, c | 0); 127 < b; )
          Qa(a, [(b & 127) | 128]), (b >>= 7);
        Qa(a, [b]);
      }
      function of(a, c) {
        O(a, c.length);
        for (var b = 0; b < c.length; b += 1) O(a, c.charCodeAt(b));
      }
      function pf(a, c) {
        var b = c;
        255 < b.length && (b = b.substr(0, 255));
        a.push(b.length);
        for (var d = 0; d < b.length; d += 1) Wc(a, b.charCodeAt(d));
      }
      function ln(a, c) {
        var b = [];
        if (Xa(a, b, 27)) return [];
        O(b, c);
        return b;
      }
      function mn(a, c) {
        var b = ra(c);
        if (!b) return (c[Ka] = -1), null;
        var d = +c[Ka];
        if (!isFinite(d) || 0 >= d) return null;
        if (c.attributes)
          for (var e = c; e; ) {
            if (e.attributes.ol) return null;
            e = e.parentElement;
          }
        e = 64;
        var f = 0,
          g = Qc(a, c),
          k = g && g[Ka] ? g[Ka] : 0;
        0 > k && (k = 0);
        b = (b || "").toUpperCase();
        var m = nn()[b];
        m || (e |= 2);
        var n = Rh(a, c);
        n || (e |= 4);
        var r = Ce(a, c);
        (g = g ? Ce(a, g) : null) &&
          r[0] === g[0] &&
          r[1] === g[1] &&
          r[2] === g[2] &&
          r[3] === g[3] &&
          (e |= 8);
        Ub[d].G = r[0] + "x" + r[1];
        Ub[d].size = r[2] + "x" + r[3];
        c.id && "string" === typeof c.id && (e |= 32);
        (g = Oh(a, c)) && (e |= 16);
        var t = Nh(a, c);
        t && (f |= 2);
        var v = 0;
        a: {
          var q = Qc(a, c),
            l = ra(c);
          var h = [];
          if (q && (q = q.childNodes) && q.length)
            for (var p = 0; p < q.length; p += 1) {
              var u = q[p];
              u &&
                (("INPUT" === u.nodeName &&
                  u.type &&
                  "hidden" === u.type.toLocaleLowerCase()) ||
                  (l && u.nodeName !== l) ||
                  h.push(u));
            }
          for (l = 0; l < h.length; l += 1)
            if (
              (!h[l].id || "string" !== typeof h[l].id) &&
              Nh(a, h[l]) === t &&
              Oh(a, h[l]) === g
            ) {
              h = !0;
              break a;
            }
          h = !1;
        }
        if (h) {
          e |= 1;
          v = "";
          try {
            v = c.innerHTML || "";
          } catch (N) {}
          v = ld(v.replace(/(<[^>]*>|[\u0000-\u0020])/g, ""));
        }
        h = [];
        if (Xa(a, h, 1)) return null;
        O(h, d);
        xb(h, e);
        O(h, k);
        m ? xb(h, m) : pf(h, b);
        n && O(h, n);
        e & 8 || (O(h, r[0]), O(h, r[1]), O(h, r[2]), O(h, r[3]));
        e & 32 && pf(h, c.id);
        g && Wc(h, g);
        e & 1 && Wc(h, v);
        xb(h, f);
        t && Wc(h, t);
        return h;
      }
      function on(a, c) {
        var b = c[Ka];
        if (!b || 0 > b || !Ae(c) || !c.form || Jg(a, c.form)) return [];
        var d = Uh(a, c.form);
        if (0 > d) return [];
        if (Gc(c)) {
          var e = {
            text: 0,
            color: 0,
            Tc: 0,
            xl: 0,
            "datetime-local": 0,
            email: 0,
            Tg: 0,
            $l: 0,
            search: 0,
            fm: 0,
            time: 0,
            url: 0,
            month: 0,
            im: 0,
            password: 2,
            Zl: 3,
            ul: 4,
            file: 6,
            image: 7,
          };
          e = e[c.type];
        } else {
          e = { kl: 1, ml: 5 };
          var f = ra(c);
          e = T(f) ? "" : e[f];
        }
        if ("number" !== typeof e) return [];
        f = -1;
        for (var g = c.form.elements, k = g.length, m = 0, n = 0; m < k; m += 1)
          if (g[m].name === c.name) {
            if (g[m] === c) {
              f = n;
              break;
            }
            n += 1;
          }
        if (0 > f) return [];
        g = [];
        if (Xa(a, g, 7)) return [];
        O(g, b);
        O(g, d);
        O(g, e);
        of(g, c.name || "");
        O(g, f);
        return g;
      }
      function pn(a, c, b) {
        var d = Uh(a, b);
        if (0 > d) return [];
        var e = b.elements,
          f = e.length;
        b = [];
        for (var g = 0; g < f; g += 1)
          if (!Sh(e[g])) {
            var k = e[g][Ka];
            k && 0 < k && b.push(k);
          }
        e = [];
        if (Xa(a, e, 11)) return [];
        O(e, c);
        O(e, d);
        O(e, b.length);
        for (a = 0; a < b.length; a += 1) O(e, b[a]);
        return e;
      }
      function Tb(a, c, b) {
        void 0 === b && (b = []);
        for (var d = []; c && !Sk(a, c, b); c = Qc(a, c)) d.push(c);
        E(function (e) {
          Ub.de += 1;
          var f = Ub.de;
          e[Ka] = f;
          Ub[f] = {};
          f = mn(a, e);
          e = on(a, e);
          f && e && (Qa(b, f), Qa(b, e));
        }, d.reverse());
        return b;
      }
      function qn(a) {
        var c = a.Ba;
        if (!Ec || (c && !c.fromElement)) return Gg(a);
      }
      function rn(a) {
        var c = a.Ba;
        if (c && !c.toElement) return Be(a);
      }
      function li(a) {
        var c = cc(a.Ba);
        if (c && md(c)) {
          var b = Fg(a, c);
          var d = ib(a.b),
            e = [];
          Xa(a.b, e, 17) ? (a = []) : (O(e, d), O(e, c[Ka]), (a = e));
          return ia(b, a);
        }
      }
      function mi(a) {
        var c = a.b,
          b = a.Ba.target;
        if (b && md(b)) {
          c = Tb(c, b);
          var d = ib(a.b),
            e = [];
          Xa(a.b, e, 18) ? (a = []) : (O(e, d), O(e, b[Ka]), (a = e));
          return ia(c, a);
        }
      }
      function ni(a) {
        var c = a.b,
          b = cc(a.Ba);
        if (!b || Ig(c, b) || Fc(c, b)) return [];
        if (Ae(b)) {
          var d = Y(c).o("isEU"),
            e = ic(c, b, d);
          d = ic(c, b);
          if (Th(b)) var f = b.checked;
          else (f = b.value), (f = e ? F("", oi(f.split(""))) : f);
          c = Tb(c, b);
          e = ib(a.b);
          var g = [];
          Xa(a.b, g, 39)
            ? (a = [])
            : (O(g, e),
              O(g, b[Ka]),
              pf(g, String(f)),
              xb(g, d ? 1 : 0),
              (a = g));
          return ia(c, a);
        }
      }
      function Md(a) {
        var c = a.b,
          b = a.Ba,
          d = cc(b);
        if (!d || "SCROLLBAR" === d.nodeName) return [];
        var e = [],
          f = Qa(e);
        d && md(d) ? f(Fg(a, d)) : f(Tb(c, d));
        var g = Lg(c, b);
        a = ib(a.b);
        f = b.type;
        var k = [g.x, g.y];
        g = b.which;
        b = b.button;
        var m;
        var n = Gd(c, d);
        var r = n[0];
        for (n = n[1]; d && (!r || !n); )
          if ((d = Qc(c, d))) (n = Gd(c, d)), (r = n[0]), (n = n[1]);
        d
          ? ((r = d[Ka]),
            !r || 0 > r
              ? (c = [])
              : (n = ((m = {}),
                (m.mousemove = 2),
                (m.click = 32),
                (m.dblclick = 33),
                (m.mousedown = 4),
                (m.mouseup = 30),
                (m.touch = 12),
                m)[f])
              ? ((m = []),
                (d = ef(c, d)),
                Xa(c, m, n)
                  ? (c = [])
                  : (O(m, a),
                    O(m, r),
                    O(m, Math.max(0, k[0] - d.left)),
                    O(m, Math.max(0, k[1] - d.top)),
                    /^mouse(up|down)|click$/.test(f) &&
                      ((c = g || b),
                      xb(m, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)),
                    (c = m)))
              : (c = []))
          : (c = []);
        return ia(e, c);
      }
      function sn(a) {
        var c = null,
          b = a.b,
          d = b.document;
        if (b.getSelection) {
          d = void 0;
          try {
            d = b.getSelection();
          } catch (g) {
            return [];
          }
          if (Za(d)) return [];
          var e = "" + d;
          c = d.anchorNode;
        } else
          d.selection &&
            d.selection.createRange &&
            ((d = d.selection.createRange()),
            (e = d.text),
            (c = d.parentElement()));
        if ("string" !== typeof e) return [];
        try {
          for (; c && 1 !== c.nodeType; ) c = c.parentNode;
        } catch (g) {
          return [];
        }
        if (!c) return [];
        d = ic(b, c) || Fc(b, c, !0);
        c = c.getElementsByTagName("*");
        for (var f = 0; f < c.length && !d; )
          (d = c[f]), (d = ic(b, d) || Fc(b, d, !0)), (f += 1);
        if (e !== qf)
          return (
            (qf = e),
            (d = d ? F("", oi(e.split(""))) : e),
            (e = ib(a.b)),
            0 === d.length
              ? (d = b = "")
              : 100 >= d.length
              ? ((b = d), (d = ""))
              : 200 >= d.length
              ? ((b = d.substr(0, 100)), (d = d.substr(100)))
              : ((b = d.substr(0, 97)), (d = d.substr(d.length - 97))),
            (c = []),
            Xa(a.b, c, 29) ? (a = []) : (O(c, e), of(c, b), of(c, d), (a = c)),
            a
          );
      }
      function tn(a) {
        return ia(Md(a), sn(a) || []);
      }
      function pi(a) {
        return (
          (a.shiftKey ? 2 : 0) |
          (a.ctrlKey ? 4 : 0) |
          (a.altKey ? 1 : 0) |
          (a.metaKey ? 8 : 0) |
          (a.ctrlKey || a.altKey ? 16 : 0)
        );
      }
      function qi(a) {
        var c = [];
        rf ||
          ((rf = !0),
          qf && c.push.apply(c, ln(a.b, ib(a.b))),
          V(
            a.b,
            function () {
              rf = !1;
            },
            1,
            "fv.c"
          ));
        return c;
      }
      function ri(a, c, b, d) {
        var e = cc(c);
        if (!e || Hg(a, e)) return [];
        var f = hd(e),
          g = nd(e);
        c = ic(a, e);
        var k = Y(a);
        if (!f && ((g && k.o("isEU")) || Fc(a, e))) a = [];
        else {
          f = Tb(a, e);
          k = ib(a);
          g = [];
          if (Xa(a, g, 38)) a = [];
          else {
            O(g, k);
            Wc(g, b);
            xb(g, d);
            a = e[Ka];
            if (!a || 0 > a) a = 0;
            O(g, a);
            xb(g, c ? 1 : 0);
            a = g;
          }
          a = ia(f, a);
        }
        return a;
      }
      function un(a) {
        var c = a.b,
          b = a.Ba,
          d = b.keyCode,
          e = pi(b),
          f = [],
          g = Qa(f);
        if (
          {
            3: 1,
            8: 1,
            9: 1,
            13: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            27: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            45: 1,
            46: 1,
            91: 1,
            92: 1,
            93: 1,
            106: 1,
            110: 1,
            111: 1,
            144: 1,
            145: 1,
          }[d] ||
          (112 <= d && 123 >= d) ||
          (96 <= d && 105 >= d) ||
          e & 16
        )
          19 === d && 4 === (e & -17) && (d = 144),
            g(ri(c, b, d, e | 16)),
            (sf = !1),
            V(
              c,
              function () {
                sf = !0;
              },
              1,
              "fv.kd"
            ),
            !(67 === d && e & 4) || e & 1 || e & 2 || g(qi(a));
        return f;
      }
      function vn(a) {
        var c = a.b;
        a = a.Ba;
        var b = [];
        sf &&
          !tf &&
          0 !== a.which &&
          (b.push.apply(b, ri(c, a, a.charCode || a.keyCode, pi(a))),
          (tf = !0),
          V(
            c,
            function () {
              tf = !1;
            },
            1,
            "fv.kp"
          ));
        return b;
      }
      function si(a) {
        var c = a.b,
          b = cc(a.Ba);
        if (!b || Jg(c, b)) return [];
        var d = [];
        if ("FORM" === b.nodeName) {
          for (var e = b.elements, f = 0; f < e.length; f += 1)
            Sh(e[f]) || d.push.apply(d, Tb(c, e[f]));
          d.push.apply(d, pn(c, ib(a.b), b));
        }
        return d;
      }
      function wn(a) {
        var c = a.flush;
        a = cc(a.Ba);
        "BODY" === ra(a) && c();
      }
      function Nd(a, c, b) {
        return function () {
          var d = La(a, c),
            e = va(arguments);
          if (d) return b.apply(void 0, e);
        };
      }
      function xn(a, c, b) {
        return function () {
          var d = La(a, c),
            e = va(arguments);
          b.apply(void 0, e);
          return d;
        };
      }
      function yn(a, c, b, d) {
        return function () {
          for (var e = [], f = 0; f < arguments.length; f++)
            e[f] = arguments[f];
          f = kd(function (g) {
            return !1 === g;
          }, e);
          return (0 < e.length && f) || !b.length || !d
            ? d
            : x.apply(
                void 0,
                M(
                  function (g, k, m) {
                    return !1 === e[m]
                      ? g
                      : g.concat(function () {
                          for (var n = [], r = 0; r < arguments.length; r++)
                            n[r] = arguments[r];
                          return k.apply(void 0, ia([a, c], n));
                        });
                  },
                  [],
                  b
                )
              )(d);
        };
      }
      function Nj(a) {
        try {
          return a.toDataURL();
        } catch (c) {
          return "";
        }
      }
      var Wg = /^\s+|\s+$/g,
        ti = Va(Array.prototype.join, "join"),
        F = ti
          ? function (a, c) {
              return ti.call(c, a);
            }
          : Wm,
        la = I(function (a, c) {
          return a === c;
        }),
        Cc = I(function (a, c) {
          a(c);
          return c;
        }),
        gc = I(F),
        Ja = I(function (a, c) {
          return c(a);
        }),
        Za = la(null),
        T = la(void 0),
        ui = Va(Array.prototype.reduce, "reduce"),
        M = ui
          ? function (a, c, b) {
              return ui.call(b, a, c);
            }
          : Sc,
        ac = I(M),
        W = Yb(w),
        Rb = W("length"),
        df = x,
        Tc,
        Vm = x(Fd, la("[object Array]")),
        jf = Object.prototype.hasOwnProperty,
        hf,
        Zh = ob(window),
        zn = Yb(Zh),
        vi = Va(Function.prototype.bind, "bind"),
        D = vi
          ? function () {
              var a = va(arguments);
              return vi.apply(a[0], ia([a[1]], a.slice(2)));
            }
          : Sm,
        R = I(function (a, c) {
          return D.apply(void 0, ia([c, null], a));
        }),
        A = I(function (a, c) {
          return R([a], c);
        }),
        oa = I(function (a, c) {
          return D(c[a], c);
        }),
        Ra = oa("test"),
        wi = z(function (a) {
          a = w(a, "navigator") || {};
          var c = w(a, "userAgent") || "";
          return { Jg: -1 < (w(a, "vendor") || "").indexOf("Apple"), Ih: c };
        }),
        yd = z(function (a) {
          var c = w(a, "document.documentElement.style");
          a = w(a, "InstallTrigger");
          return !(!(c && "MozAppearance" in c) || ya(a));
        }),
        xi = Va(Array.prototype.map, "map"),
        B =
          xi && Mm(window, Array.prototype.map)
            ? function (a, c) {
                return c && 0 < c.length ? xi.call(c, a) : [];
              }
            : Rm,
        E = B,
        Eb = Array.prototype.flatMap
          ? function (a, c) {
              return Array.prototype.flatMap.call(c, a);
            }
          : Qm,
        Wa = I(B),
        om = Yb(B),
        Ga = Object.entries
          ? function (a) {
              return a ? Object.entries(a) : [];
            }
          : Pm,
        Aa = Object.keys ? Object.keys : $h,
        G = Object.assign || Tm,
        Eg = I(function (a, c) {
          return G({}, a, c);
        }),
        Y = z(function (a) {
          a = a.Ya = a.Ya || {};
          var c = (a._metrika = a._metrika || {});
          return {
            Bb: function (b, d) {
              jf.call(c, b) || (c[b] = d);
              return this;
            },
            C: function (b, d) {
              c[b] = d;
              return this;
            },
            o: function (b, d) {
              var e = c[b];
              return jf.call(c, b) || T(d) ? e : d;
            },
          };
        }),
        kd = Array.prototype.every
          ? function (a, c) {
              return Array.prototype.every.call(c, a);
            }
          : function (a, c) {
              return M(
                function (b, d) {
                  return b ? a(d) : !1;
                },
                !0,
                c
              );
            },
        yi = Va(Array.prototype.filter, "filter"),
        X = yi
          ? function (a, c) {
              return yi.call(c, a);
            }
          : bi,
        fc = I(X),
        Ma = Id(
          function (a, c) {
            return Array.prototype.find.call(c, a);
          },
          function (a, c) {
            for (var b = 0; b < c.length; b += 1)
              if (a.call(c, c[b], b)) return c[b];
          },
          ea("find", Array.prototype.find)
        ),
        L = Array.prototype.includes
          ? function (a, c) {
              return Array.prototype.includes.call(c, a);
            }
          : Um,
        ub = Yb(L),
        Ba = Id(
          function (a, c) {
            return Array.prototype.some.call(c, a);
          },
          function (a, c) {
            for (var b = 0; b < c.length; b += 1)
              if (b in c && a.call(c, c[b], b)) return !0;
            return !1;
          },
          ea("some", Array.prototype.some)
        ),
        Yh = Va(Array.from, "from"),
        Od = z(ob),
        hg = I(ke),
        Qa = I(function (a, c) {
          E(x(S, oa("push", a)), c);
          return a;
        }),
        Wb = z(x(W("String.fromCharCode"), A("fromCharCode", ea), Zb)),
        wb = z(W("navigator.userAgent")),
        zi = z(x(wb, Ra(/ipad|iphone|ipod/i))),
        uf = z(function (a) {
          return w(a, "navigator.platform") || "";
        }),
        ah = z(function (a) {
          a = wi(a);
          var c = a.Ih;
          return (
            a.Jg &&
            ((!c.match(/Safari/) && c.match(/Mobile/)) ||
              c.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) ||
              -1 !== c.indexOf("FB_IAB") ||
              -1 !== c.indexOf("FBAV") ||
              -1 !== c.indexOf("OKApp") ||
              -1 !== c.indexOf("GSA/"))
          );
        }),
        vf = z(function (a) {
          a = wi(a);
          var c = a.Ih;
          return a.Jg && !c.match("CriOS");
        }),
        Ie = z(
          x(
            wb,
            oa(
              "test",
              /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/
            )
          )
        ),
        An = /Chrome\/(\d+)\./,
        Bn = z(function (a) {
          return (a = (w(a, "navigator.userAgent") || "").match(An)) && a.length
            ? 76 <= parseInt(a[1], 10)
            : !1;
        }),
        wf = z(function (a) {
          var c = (wb(a) || "").toLowerCase();
          a = uf(a);
          return !(
            -1 === c.indexOf("android") ||
            -1 === c.indexOf(c, "mobile") ||
            !/^android|linux armv/i.test(a)
          );
        }),
        Cn = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(
          " "
        ),
        Dn = z(function (a) {
          var c = w(a, "navigator.connection.type");
          if (T(c)) return null;
          a = Od(a)(c, Cn);
          return -1 === a ? c : "" + a;
        }),
        Hd = z(x(W("document.addEventListener"), Zb)),
        Ai = z(function (a) {
          var c = w(a, "navigator") || {};
          return M(
            function (b, d) {
              return b || w(c, d);
            },
            "",
            ["language", "userLanguage", "browserLanguage", "systemLanguage"]
          );
        }),
        Xg = z(function (a) {
          var c = w(a, "navigator") || {};
          a = Ai(a);
          gb(a) || ((a = ""), (c = w(c, "languages.0")), gb(c) && (a = c));
          return a.toLowerCase().split("-")[0];
        }),
        sb = z(function (a) {
          var c = !1;
          try {
            c = a.top !== a;
          } catch (b) {}
          return c;
        }),
        En = z(function (a) {
          var c = !1;
          try {
            c = a.top.contentWindow || !0;
          } catch (b) {}
          return c;
        }),
        Fn = z(function (a) {
          var c = !1;
          try {
            c = a.navigator.javaEnabled();
          } catch (b) {}
          return c;
        }),
        Gn = z(function (a) {
          var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(
              " "
            ),
            b = w(a, "external");
          b =
            -1 !==
            (w(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
          var d = w(a, "document.documentElement"),
            e = ["selenium", "webdriver", "driver"];
          return !!(
            Ba(A(a, w), [
              "_selenium",
              "callSelenium",
              "_Selenium_IDE_Recorder",
            ]) ||
            Ba(A(w(a, "document"), w), c) ||
            b ||
            (d && Ba(D(d.getAttribute, d), e))
          );
        }),
        Hn = z(function (a) {
          return !!(
            Ba(A(a, w), ["_phantom", "__nightmare", "callPhantom"]) ||
            /(PhantomJS)|(HeadlessChrome)/.test(wb(a)) ||
            w(a, "navigator.webdriver") ||
            (w(a, "isChrome") && !w(a, "chrome"))
          );
        }),
        In = z(function (a) {
          return kd(A(a, w), ["ia_document.shareURL", "ia_document.referrer"]);
        }),
        Jn = z(function (a) {
          a = w(a, "navigator.plugins");
          return !!(a && Rb(a) && Ba(x(W("name"), Ra(/Chrome PDF Viewer/)), a));
        }),
        Kn = new RegExp(
          F(
            "|",
            "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(
              ";"
            )
          ).replace(/[./]/g, "\\$&")
        ),
        Hl = z(x(W("navigator.userAgent"), Ra(Kn))),
        xf = z(function (a) {
          var c = wb(a) || "",
            b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
          b = b ? [+b[1], +b[2]] : [0, 0];
          c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
          return 14 <= (c ? +c[1] : 0)
            ? !0
            : (zi(a) || 10 < b[0] || (10 === b[0] && 13 <= b[1])) && vf(a);
        }),
        Oc = {
          construct: "Metrika2",
          callbackPostfix: "2",
          version: "5gv0p5rfuji4o8ou",
        },
        Ln = Oc.construct,
        yf = Hd(window),
        za = {
          ri: 24226447,
          hi: 26302566,
          wi: 51533966,
          fl: 65446441,
          Hb: "https:",
          Kc: "504",
          Nc: Ln,
          pi: yf ? 512 : 2048,
          ni: yf ? 512 : 2048,
          oi: yf ? 100 : 400,
          gl: 100,
          hl: "noindex",
        },
        Ab = {},
        Z = z(function (a) {
          return a.id + ":" + a.qa;
        }),
        Da = {
          id: "id",
          Pf: "ut",
          qa: "type",
          Re: "ldc",
          Sb: "nck",
          Zc: "url",
          mj: "referrer",
        },
        Mn = /^\d+$/,
        Ob = {
          id: function (a) {
            a = "" + (a || "0");
            Mn.test(a) || (a = "0");
            try {
              var c = parseInt(a, 10);
            } catch (b) {
              c = 0;
            }
            return c;
          },
          qa: function (a) {
            return "" + (a || 0 === a ? a : "0");
          },
          Sb: Boolean,
          Pf: Boolean,
        };
      Da.Oc = "defer";
      Ob.Oc = Boolean;
      Da.Zk = "yaDisableGDPR";
      Da.$k = "yaGDPRLang";
      Da.exp = "experiments";
      Da.me = "ecommerce";
      Ob.me = function (a) {
        if (a) return !0 === a ? "dataLayer" : "" + a;
      };
      Da.ha = "params";
      Da.Nd = "userParams";
      Da.Hc = "accurateTrackBounce";
      Da.Dh = "triggerEvent";
      Ob.Dh = Boolean;
      Da.qh = "sendTitle";
      Ob.qh = function (a) {
        return !!a || T(a);
      };
      Da.Jf = "trackHash";
      Ob.Jf = Boolean;
      Da.bj = "directCampaign";
      Da.Si = "clickmap";
      Da.Db = "webvisor";
      Ob.Db = Boolean;
      Da.Lk = "trustedDomains";
      Da.ec = "childIframe";
      Ob.ec = Boolean;
      Da.Ld = "trackLinks";
      Da.dj = "enableAll";
      var Bi = M(
          function (a, c) {
            var b = c[0];
            a[b] = { Xg: c[1], Yj: Ob[b] };
            return a;
          },
          {},
          Ga(Da)
        ),
        Jm = "hash host hostname href pathname port protocol search".split(" "),
        qh = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(
          " "
        ),
        Bl = z(function (a) {
          a = Q(a).hostname.split(".");
          return a[a.length - 1];
        }),
        Ci = z(function (a) {
          return (
            -1 !==
            Q(a).hostname.search(
              /(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/
            )
          );
        }),
        Qg = z(function (a) {
          return (a ? a.replace(/^www\./, "") : "").toLowerCase();
        }),
        Nn = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site)$/,
        $g = z(function (a) {
          a = Q(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(Nn));
          return c;
        }),
        On = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
        ml = z(function (a) {
          a = Q(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(On));
          return c;
        }),
        Pn = /(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/,
        Qn = z(function (a) {
          a = Q(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(Pn));
          return c;
        }),
        $m = z(function (a) {
          var c = [];
          Bn(a) &&
            "https:" === Q(a).protocol &&
            (c.push("SameSite=None"), c.push("Secure"));
          return c;
        }),
        Rn = setTimeout;
      xa.prototype["catch"] = function (a) {
        return this.then(null, a);
      };
      xa.prototype.then = function (a, c) {
        var b = new this.constructor(Xm);
        di(this, new Zm(a, c, b));
        return b;
      };
      xa.prototype["finally"] = function (a) {
        var c = this.constructor;
        return this.then(
          function (b) {
            return c.resolve(a()).then(function () {
              return b;
            });
          },
          function (b) {
            return c.resolve(a()).then(function () {
              return c.reject(b);
            });
          }
        );
      };
      xa.all = function (a) {
        return new xa(function (c, b) {
          function d(k, m) {
            try {
              if (m && ("object" === typeof m || "function" === typeof m)) {
                var n = m.then;
                if ("function" === typeof n) {
                  n.call(
                    m,
                    function (r) {
                      d(k, r);
                    },
                    b
                  );
                  return;
                }
              }
              e[k] = m;
              0 === --f && c(e);
            } catch (r) {
              b(r);
            }
          }
          if (!a || "undefined" === typeof a.length)
            return b(new TypeError("Promise.all accepts an array"));
          var e = Array.prototype.slice.call(a);
          if (0 === e.length) return c([]);
          for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g]);
        });
      };
      xa.resolve = function (a) {
        return a && "object" === typeof a && a.constructor === xa
          ? a
          : new xa(function (c) {
              c(a);
            });
      };
      xa.reject = function (a) {
        return new xa(function (c, b) {
          b(a);
        });
      };
      xa.race = function (a) {
        return new xa(function (c, b) {
          if (!a || "undefined" === typeof a.length)
            return b(new TypeError("Promise.race accepts an array"));
          for (var d = 0, e = a.length; d < e; d++) xa.resolve(a[d]).then(c, b);
        });
      };
      xa.eg =
        ("function" === typeof setImmediate &&
          function (a) {
            setImmediate(a);
          }) ||
        function (a) {
          Rn(a, 0);
        };
      xa.Gi = function (a) {
        "undefined" !== typeof console &&
          console &&
          console.warn("Possible Unhandled Promise Rejection:", a);
      };
      var P = window.Promise;
      P =
        ea("Promise", P) &&
        !L(!1, [
          ea("resolve", P.resolve),
          ea("reject", P.reject),
          ea("all", P.all),
        ])
          ? P
          : xa;
      var tm = [
          "network error occurred",
          "send beacon",
          "Content Security Policy",
          "DOM Exception 18",
        ],
        Xc,
        Ad = (function (a) {
          return function (c) {
            if (Xc) return new Xc(c);
            if (ea("Error", a.Error)) return (Xc = a.Error), new a.Error(c);
            Xc = Im;
            return new Xc(c);
          };
        })(window),
        sm = Ra(/^err.kn/),
        Fm = /[^a-z0-9.:-]/,
        Gm = I(function (a, c, b) {
          var d,
            e = new a.XMLHttpRequest(),
            f = b.oa,
            g = G(b.Tf ? ((d = {}), (d.wmode = "7"), d) : {}, b.wc);
          return new P(function (k, m) {
            e.open(b.Mh || "GET", c + "?" + yc(g), !0);
            e.withCredentials = !1 !== b.Nh;
            b.Df && (e.timeout = b.Df);
            df(
              Ga,
              Wa(function (r) {
                e.setRequestHeader(r[0], r[1]);
              })
            )(b.vc);
            var n = I(Hm)(a, e, fb(b.ab), b.Tf, b.vk, k, m);
            e.onreadystatechange = n;
            try {
              e.send(f);
            } catch (r) {}
          });
        }),
        Sn = z(function (a) {
          a = w(a, "document") || {};
          return ("" + (a.characterSet || a.charset || "")).toLowerCase();
        }),
        eb = z(x(W("document"), A("createElement", Lb))),
        Kg = z(function (a) {
          var c = w(a, "Element.prototype");
          return c
            ? (a = Ma(
                function (b) {
                  return ea(b, c[b]);
                },
                [
                  "matches",
                  "webkitMatchesSelector",
                  "mozMatchesSelector",
                  "msMatchesSelector",
                  "oMatchesSelector",
                ]
              ))
              ? c[a]
              : null
            : null;
        }),
        Tn = la("INPUT"),
        Gc = x(ra, Tn),
        Un = la("TEXTAREA"),
        Cm = x(ra, Un),
        Vn = la("SELECT"),
        Dm = x(ra, Vn),
        Th = x(W("type"), Ra(/^(checkbox|radio)$/)),
        Ae = x(ra, Ra(/^INPUT|SELECT|TEXTAREA$/)),
        md = x(ra, Ra(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
        zf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
        Wn = new RegExp("^(" + F("|", zf) + ")$", "i"),
        Wk = x(ra, Ra(Wn)),
        Bm = ["submit", "image", "hidden"],
        Xn = I(Cb),
        Di = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(
          " "
        ),
        Qh = z(function () {
          for (var a = 59, c = {}, b = 0; b < Di.length; b += 1)
            (c[Di[b]] = String.fromCharCode(a)), (a += 1);
          return c;
        }),
        Ei = I(zb),
        Lh = {},
        cf = {};
      Lh.p = 500;
      var Kh = { i: "id", n: "name", h: "href", ty: "type" };
      cf.h = !0;
      cf.c = !0;
      var qc = {};
      qc.p = Ph;
      qc.c = function (a, c, b) {
        (a = Vb(w(c, "textContent"))) &&
          b &&
          ((b = b(c)),
          b.length && Ba(x(W("textContent"), Vb, la(a)), b) && (a = ""));
        Gc(c) && (a = Vb((c.getAttribute && c.getAttribute("value")) || a));
        return a;
      };
      var tc,
        bf =
          "button," +
          B(
            function (a) {
              return 'input[type="' + a + '"]';
            },
            ["button", "submit", "reset", "file"]
          ).join(",") +
          ",a",
        Jh = Ei(bf),
        zm =
          ((tc = {}),
          (tc.A = "h"),
          (tc.BUTTON = "i"),
          (tc.DIV = "i"),
          (tc.INPUT = "ty"),
          tc),
        xm = I(function (a, c, b, d) {
          return new P(function (e, f) {
            var g = Hb(a),
              k = c("img"),
              m = x(A(k, oc), A(fb(d.ab), f)),
              n = Ed(a, m, d.Df || 3e3);
            k.onerror = m;
            k.onload = x(A(k, oc), A(null, e), R([a, n], ua));
            m = G({}, d.wc);
            delete m.wmode;
            k.src = Vh(b, d, m);
            vf(a) &&
              (G(k.style, {
                position: "absolute",
                visibility: "hidden",
                width: "0px",
                height: "0px",
              }),
              g.appendChild(k));
          });
        }),
        vm = I(function (a, c, b) {
          return new P(function (d, e) {
            var f,
              g,
              k = "_ymjsp" + db(a),
              m = G(((f = {}), (f.callback = k), f), b.wc),
              n = R([a, k], wm);
            a[k] = function (t) {
              try {
                n(), oc(r), d(t);
              } catch (v) {
                e(v);
              }
            };
            m.wmode = "5";
            var r = Bc(a, ((g = {}), (g.src = Vh(c, b, m)), g));
            if (!r) return n(), e(Ad("jp.s"));
            f = A(r, oc);
            f = x(f, A(fb(b.ab), e));
            g = Ed(a, f, b.Df || 1e4);
            g = R([a, g], ua);
            r.onload = g;
            r.onerror = x(n, g, f);
          });
        }),
        um = I(function (a, c, b, d) {
          return new P(function (e, f) {
            if (!w(a, "navigator.onLine")) return f();
            var g = G(d.wc, { "force-urlencoded": 1 });
            return c(b + "?" + yc(g), d.oa) ? e("") : f();
          });
        }),
        Yc;
      var $b = [Ih, 0, Mb, af, Pc];
      var Fi = [Mb];
      Fi.push(af);
      var Gi = yb(Fi),
        Zc = yb([Pc]),
        Yn = yb([Ih, Pc]),
        Pd = yb([0, Mb, af, Pc]);
      var sa = ((Yc = {}), (Yc.h = Gi), (Yc.f = Gi), (Yc.er = Zc), Yc);
      sa.d = Zc;
      sa.s = yb([Mb]);
      sa.S = sa.s;
      sa.u = Zc;
      sa.m = Yn;
      sa["2"] = $b;
      sa["6"] = yb([0, Mb]);
      sa.t = $b;
      sa.a = Pd;
      sa.n = $b;
      sa.p = yb([0, Mb]);
      sa["4"] = yb([0, Mb, Pc]);
      sa.r = Pd;
      sa["1"] = Pd;
      sa.g = Pd;
      sa.c = Zc;
      sa.e = $b;
      sa.adb = Zc;
      sa.W = yb([0, Mb]);
      sa["5"] = $b;
      var $e = z(function (a, c) {
          var b;
          (b = c ? sa[c] : $b) || (b = []);
          b = M(
            function (d, e, f) {
              (e = e && e(a)) && d.push([f, e]);
              return d;
            },
            [],
            b
          );
          b.length || gf();
          return b;
        }, qb),
        Gh = ["addEventListener", "removeEventListener"],
        Hh = ["attachEvent", "detachEvent"],
        Zn = z(function (a) {
          var c = !1;
          if (!a.addEventListener) return c;
          try {
            var b = Object.defineProperty({}, "passive", {
              get: function () {
                c = !0;
                return 1;
              },
            });
            a.addEventListener("test", J, b);
          } catch (d) {}
          return c;
        }),
        $n = I(function (a, c) {
          return a ? G({ capture: !0, passive: !0 }, c || {}) : !!c;
        }),
        qa = z(function (a) {
          function c(f, g, k) {
            k = d(k);
            f = I(f)(k);
            E(f, g.split(","));
          }
          var b = [];
          a = Zn(a);
          var d = $n(a),
            e = {};
          return G(e, {
            D: function (f, g, k, m) {
              c(
                function (n, r) {
                  var t = [f, r, k, n];
                  b.push(t);
                  Eh.apply(void 0, t.concat(!1));
                },
                g,
                m
              );
              return D(e.Cc, e, f, g, k, m);
            },
            Cc: function (f, g, k, m) {
              c(
                function (n, r) {
                  var t = [f, r, k],
                    v = M(
                      function (q, l, h) {
                        X(ub(l), t).length === t.length && (q = h);
                        return q;
                      },
                      -1,
                      b
                    );
                  -1 !== v &&
                    (Eh.apply(void 0, b[v].concat(!0)), b.splice(v, 1));
                },
                g,
                m
              );
            },
          });
        }),
        Kb = ["0", "1", "2", "3"],
        lc = Kb[0],
        He = Kb[1],
        lm = Kb[2],
        Le = B(x(S, oa("concat", "GDPR-ok-view-detailed-")), Kb),
        sd = ia(
          "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(
            " "
          ),
          Le,
          ["28"]
        ),
        km = "3 13 14 15 16 17 28".split(" "),
        Dh = x(Wa(W("ymetrikaEvent.type")), fc(ub(sd))),
        an = /:\d+$/,
        bn = z(function (a) {
          var c = (Q(a).host || "").split(".");
          return 1 === c.length
            ? c[0]
            : M(
                function (b, d, e) {
                  e += 1;
                  2 <= e &&
                    !b &&
                    ((e = F(".", c.slice(-e))), Bg(a, e) && (b = e));
                  return b;
                },
                null,
                c
              );
        }),
        Sb = z(jc),
        jm = z(function (a) {
          Bh(a, "_ymBRC", "1");
          var c = "1" !== Ah(a, "_ymBRC");
          c || Ch(a, "_ymBRC");
          return c;
        }),
        Na = z(zh),
        $c = z(zh, function (a, c, b) {
          return "" + c + b;
        }),
        fa = z(xh),
        wh = Kd("r", function (a, c) {
          var b = vh(a, c),
            d = b[0];
          return !b[1] && d;
        }),
        Ne = z(uh, function (a, c) {
          return "{" + c.Re + c.Sb;
        }),
        ph = z(rc, Z),
        Hi = I(function (a, c) {
          for (var b = []; !Nc(c); ) {
            var d = gm(c);
            a(d, function (e) {
              return e(c);
            });
            b.push(d);
          }
          return b;
        }),
        Te = I(function (a, c, b) {
          var d = fa(a),
            e = d(ba);
          return Hi(function (f, g) {
            d(ba) - e >= c && g(hm);
          }, b);
        }),
        Se = I(function (a, c) {
          if (c.Bc) V(a, R([a, c], Se), 0);
          else
            for (; !Nc(c); )
              if (
                ((c.Bc = !0), c.Pg(c.md[c.cb], A(c, sh)), (c.cb += 1), Nc(c))
              ) {
                Se(a, c);
                break;
              }
        }),
        mc = I(function (a, c, b) {
          return b(a, c);
        }),
        Ii = I(function (a, c) {
          return Ja(function (b, d) {
            return c(b, function (e) {
              d(a(e));
            });
          });
        }),
        ao = I(function (a, c) {
          return Ja(function (b, d) {
            return c(b, function (e) {
              return a(e)(mc(b, d));
            });
          });
        }),
        cn = z(function (a) {
          if ((a = eb(a))) return a("a");
        }),
        oh = I(function (a, c, b, d) {
          var e = a.document;
          Qe(a) ||
            (c.Cc(e, "webkitvisibilitychange,visibilitychange", oh), b());
          return d;
        }),
        rb = R([1, null], Id),
        Wj = R([1, 0], Id),
        nh = z(function () {
          return { Cg: null, pe: [] };
        }, Z),
        bb,
        bo = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart"],
          ["redirectEnd", "redirectStart"],
          ["redirectCount"],
          ["domInteractive", "responseEnd"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete"],
          ["loadEventStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart"],
        ],
        mh =
          ((bb = {}),
          (bb.responseEnd = 1),
          (bb.domInteractive = 1),
          (bb.domContentLoadedEventStart = 1),
          (bb.domContentLoadedEventEnd = 1),
          (bb.domComplete = 1),
          (bb.loadEventStart = 1),
          (bb.loadEventEnd = 1),
          (bb.unloadEventStart = 1),
          (bb.unloadEventEnd = 1),
          (bb.secureConnectionStart = 1),
          bb),
        co = z(Jd),
        eo = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart", "navigationStart"],
          ["redirectEnd", "redirectStart"],
          [
            function (a, c) {
              return w(c, "redirectCount") || w(a, "navigation.redirectCount");
            },
          ],
          ["domInteractive", "domLoading"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete", "navigationStart"],
          ["loadEventStart", "navigationStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart", "navigationStart"],
        ],
        fo = z(Jd),
        am = { "*": "+", "-": "/", nl: "=", "+": "*", "/": "-", "=": "_" },
        Ji = x(
          Kd("i", function (a) {
            a = (w(a, "document.interestCohort") || J)();
            if (!a) return null;
            var c = [];
            w(a, "then") && a.then(oa("push", c), J);
            return c;
          }),
          W("0")
        ),
        Ki = /\/$/,
        go = z(
          x(
            fa,
            Ja(function (a) {
              return -new a.b.Date().getTimezoneOffset();
            })
          )
        ),
        ho = x(
          fa,
          Ja(function (a) {
            a = new a.b.Date();
            return F(
              "",
              B(im, [
                a.getFullYear(),
                a.getMonth() + 1,
                a.getDate(),
                a.getHours(),
                a.getMinutes(),
                a.getSeconds(),
              ])
            );
          })
        ),
        io = x(fa, Ja(Bd)),
        Li = z(
          x(
            fa,
            Ja(function (a) {
              return a.Va[0];
            })
          )
        ),
        jo = z(rc),
        ko = z(rc),
        lo = z(function (a) {
          var c = w(a, "webkitRequestFileSystem");
          if (ca(c) && !wf(a))
            return new P(D(c, a, 0, 0))
              .then(function () {
                var d = w(a, "navigator.storage") || {};
                return d.estimate ? d.estimate() : {};
              })
              .then(function (d) {
                return (d = d.quota) && 12e7 > d ? !0 : !1;
              })
              ["catch"](A(!0, S));
          if (yd(a))
            return (c = w(a, "navigator.serviceWorker")), P.resolve(T(c));
          c = w(a, "openDatabase");
          if (vf(a) && ca(c)) {
            var b = !1;
            try {
              c(null, null, null, null);
            } catch (d) {
              b = !0;
            }
            return P.resolve(b);
          }
          return P.resolve(
            !w(a, "indexedDB") &&
              (w(a, "PointerEvent") || w(a, "MSPointerEvent"))
          );
        }),
        mo = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
        no = z(function (a, c) {
          var b = Sb(a),
            d = Q(a).search.match(mo);
          return d && 2 <= d.length
            ? ((d = d[2]), c.Sb || b.C("turbo_uid", d), d)
            : (b = b.o("turbo_uid"))
            ? b
            : "";
        }),
        oo = z(function (a) {
          return ca(w(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null;
        }),
        da,
        kb,
        po = z(function (a) {
          a = Y(a);
          var c = a.o("counterNum", 0) + 1;
          a.C("counterNum", c);
          return c;
        }, x(qb, Z)),
        jb =
          ((da = {}),
          (da.vf = A(Oc.version, S)),
          (da.nt = Dn),
          (da.fp = function (a, c, b) {
            if (b.J && b.J.nohit) return null;
            c = Z(c);
            b = jo(a);
            if (b[c]) return null;
            a: {
              var d = Li(a),
                e = w(a, "performance.getEntriesByType");
              if (ca(e)) {
                if (
                  ((a = X(
                    x(S, W("name"), la("first-contentful-paint")),
                    e.call(a.performance, "paint")
                  )),
                  a.length)
                ) {
                  a = a[0].startTime;
                  break a;
                }
              } else {
                e = w(a, "chrome.loadTimes");
                if (
                  ca(e) &&
                  ((e = e.call(a.chrome)), (e = w(e, "firstPaintTime")), d && e)
                ) {
                  a = 1e3 * e - d;
                  break a;
                }
                if ((a = w(a, "performance.timing.msFirstPaint"))) {
                  a -= d;
                  break a;
                }
              }
              a = void 0;
            }
            return a ? ((b[c] = a), Math.round(a)) : null;
          }),
          (da.fu = function (a, c, b) {
            var d = b.J;
            if (!d) return null;
            c = (w(a, "document.referrer") || "").replace(Ki, "");
            b = (d["page-ref"] || "").replace(Ki, "");
            d = d["page-url"];
            a = Q(a).href !== d;
            c = c !== b;
            b = 0;
            a && c ? (b = 3) : c ? (b = 1) : a && (b = 2);
            return b;
          }),
          (da.en = Sn),
          (da.la = Ai),
          (da.ut = function (a, c, b) {
            var d = b.od;
            (b = b.J) && (Qn(a) || c.Pf || d) && (b.ut = "noindex");
            return null;
          }),
          (da.v = A(za.Kc, S)),
          (da.cn = po),
          (da.dp = function (a) {
            var c = Y(a),
              b = c.o("bt", {});
            if (T(c.o("bt"))) {
              var d = w(a, "navigator.getBattery");
              try {
                b.p = d ? d.call(a.navigator) : null;
              } catch (e) {}
              c.C("bt", b);
              b.p &&
                b.p.then &&
                b.p.then(function (e) {
                  b.Sk = e.charging && 0 === e.chargingTime;
                });
            }
            return b.Sk ? "1" : "0";
          }),
          (da.ls = z(function (a, c) {
            var b = $c(a, c.id),
              d = fa(a),
              e = b.o("lsid");
            return +e ? e : ((d = db(a, 0, d(ba))), b.C("lsid", d), d);
          }, qb)),
          (da.hid = nc),
          (da.z = go),
          (da.i = ho),
          (da.et = io),
          (da.c = x(W("navigator.cookieEnabled"), rb)),
          (da.rn = x(S, db)),
          (da.rqn = function (a, c, b) {
            b = b.J;
            if (!b || b.nohit) return null;
            a = $c(a, c.id);
            c = (a.o("reqNum", 0) || 0) + 1;
            a.C("reqNum", c);
            if (a.o("reqNum") === c) return c;
            a.Kb("reqNum");
            return null;
          }),
          (da.u = Ne),
          (da.tp = x(qb, Xh, rb)),
          (da.tpid = x(qb, function (a) {
            a = Z(a);
            return Ab[a] && Ab[a].Ch ? Ab[a].Ch : void 0;
          })),
          (da.w = function (a) {
            a = Rc(a);
            return a[0] + "x" + a[1];
          }),
          (da.s = function (a) {
            var c = w(a, "screen");
            if (c) {
              a = w(c, "width");
              var b = w(c, "height");
              c = w(c, "colorDepth") || w(c, "pixelDepth");
              return F("x", [a, b, c]);
            }
            return null;
          }),
          (da.sk = W("devicePixelRatio")),
          (da.ifr = x(sb, rb)),
          (da.j = x(Fn, rb)),
          (da.sti = function (a) {
            return sb(a) ? (En(a) ? "1" : null) : null;
          }),
          da);
      jb.pri = function (a) {
        if (Ie(a)) return null;
        var c = ko(a),
          b = c.Zg;
        T(b) &&
          ((c.Zg = null),
          lo(a).then(function (d) {
            c.Zg = d;
          }));
        return b ? 1 : null;
      };
      G(
        jb,
        ((kb = {}),
        (kb.iss = x(Gn, rb)),
        (kb.hdl = x(Hn, rb)),
        (kb.iia = x(In, rb)),
        (kb.cpf = x(Jn, rb)),
        (kb.ntf = z(function (a) {
          a: switch (w(a, "Notification.permission")) {
            case "denied":
              a = !1;
              break a;
            case "granted":
              a = !0;
              break a;
            default:
              a = null;
          }
          return Za(a) ? null : a ? 2 : 1;
        })),
        (kb.eu = function (a) {
          return Y(a).o("isEU");
        }),
        (kb.ns = Li),
        (kb.np = function (a) {
          if (db(a, 0, 100)) a = null;
          else {
            a = Vb(uf(a), 100);
            for (var c = [], b = 0; b < a.length; b++) {
              var d = a.charCodeAt(b);
              128 > d
                ? c.push(d)
                : (127 < d && 2048 > d
                    ? c.push((d >> 6) | 192)
                    : (c.push((d >> 12) | 224), c.push(((d >> 6) & 63) | 128)),
                  c.push((d & 63) | 128));
            }
            a = zg(c);
          }
          return a;
        }),
        (kb.re = x(function (a, c) {
          return !c.Sb && wh(a, c);
        }, rb)),
        kb)
      );
      jb.ds = function (a, c, b) {
        b = b.J;
        if ((void 0 === b ? {} : b).nohit) return null;
        a = Xe(a);
        c = Z(c);
        if (!a) return null;
        b = w(a, "timing");
        if (!b) return null;
        a = lh(a, b, eo);
        c = fo(c);
        return (c = kh(c, a)) && F(",", c);
      };
      jb.dsn = function (a, c, b) {
        b = b.J;
        if ((void 0 === b ? {} : b).nohit) return null;
        a = Xe(a);
        c = Z(c);
        if (!a) return null;
        b = null;
        if (ca(a.getEntriesByType)) {
          var d = w(a.getEntriesByType("navigation"), "0");
          d && (b = d);
        }
        if (!b) return null;
        a = lh(a, b, bo);
        c = co(c);
        return (c = kh(c, a)) && F(",", c);
      };
      jb.flo = Ji;
      jb.bu = oo;
      jb.td = no;
      jb.wv = A(2, S);
      var $l = Aa(jb);
      jb.we = function (a, c) {
        return rb(c.Db);
      };
      var zd = z(function () {
          return { tc: {}, pending: {}, fc: {} };
        }),
        Af = W("postMessage"),
        qo = I(function (a, c, b, d) {
          var e,
            f = { Tc: fa(a)(ba), key: a.Math.random(), dir: 0 };
          b.length &&
            ((f.Tc = parseInt(b[0], 10)),
            (f.key = parseFloat(b[1])),
            (f.dir = parseInt(b[2], 10)));
          G(d, c);
          c =
            ((e = { data: d }),
            (e.__yminfo = F(":", ["__yminfo", f.Tc, f.key, f.dir])),
            e);
          return { fa: f, M: $a(a, c) || "" };
        }),
        ro = I(function (a, c, b, d, e) {
          c = c(d);
          var f = zd(a),
            g = F(":", [c.fa.Tc, c.fa.key]);
          if (Af(b)) {
            f.pending[g] = e;
            try {
              b.postMessage(c.M, "*");
            } catch (k) {
              delete f.pending[g];
              return;
            }
            V(
              a,
              function () {
                delete f.pending[g];
              },
              5e3,
              "if.s"
            );
          }
        }),
        so = H("s.f", ro),
        to = I(function (a, c, b, d, e, f) {
          var g = null,
            k = null,
            m = zd(a),
            n = null;
          try {
            (g = pb(a, f.data)), (k = g.__yminfo), (n = g.data);
          } catch (r) {
            return;
          }
          if (
            !ya(k) &&
            k.substring &&
            "__yminfo" === k.substring(0, 8) &&
            !ya(n) &&
            ((g = k.split(":")), 4 === g.length)
          )
            if (
              ((k = c.id),
              (c = g[1]),
              (a = g[2]),
              (g = g[3]),
              !ha(n) && n.type && "0" === g && n.counterId)
            ) {
              if (!n.toCounter || n.toCounter == k) {
                m = null;
                try {
                  m = f.source;
                } catch (r) {}
                !Za(m) &&
                  Af(m) &&
                  ((f = d.ia(n.type, [f, n])),
                  (e = B(x(S, Eg(e)), f.concat([{}]))),
                  (n = b([c, a, n.counterId], e)),
                  m.postMessage(n.M, "*"));
              }
            } else
              g === "" + k &&
                ha(n) &&
                X(function (r) {
                  return !(!r.hid || !r.counterId);
                }, n).length === n.length &&
                (b = m.pending[F(":", [c, a])]) &&
                b.apply(null, [f].concat(n));
        }),
        uo = H("s.fh", to),
        eh = z(function (a, c) {
          var b,
            d = Lb("getElementsByTagName", w(a, "document")),
            e = zd(a),
            f = Af(a),
            g = zc(a),
            k = qa(a);
          if (!d || !f) return null;
          d = d.call(a.document, "iframe");
          f = ((b = {}), (b.counterId = c.id), (b.hid = "" + nc(a)), b);
          Zl(a, g);
          b = qo(a, f);
          var m = so(a, b([]));
          E(function (n) {
            var r = null;
            try {
              r = n.contentWindow;
            } catch (t) {}
            r &&
              m(r, { type: "initToChild" }, function (t, v) {
                g.ia("initToParent", [t, v]);
              });
          }, d);
          sb(a) &&
            m(a.parent, { type: "initToParent" }, function (n, r) {
              g.ia("parentConnect", [n, r]);
            });
          k.D(a, "message", uo(a, c, b, g, f));
          return { na: g, tc: e.tc, fc: e.fc, uf: m };
        }, x(qb, Z)),
        vo = I(function (a, c, b) {
          var d = b[a];
          d
            ? ((d.jk = c), (d.ih = !0), d.hh ? d.hh(c) : (d.zb = P.resolve(c)))
            : (b[a] = { zb: P.resolve(c), jk: c, ih: !0 });
        }),
        Xl = I(function (a, c) {
          if (!c[a]) {
            var b,
              d = new P(function (e) {
                b = e;
              });
            c[a] = { hh: b, zb: d, ih: !1 };
          }
          return c[a].zb;
        }),
        ih = z(x(rc, Ja)),
        Vl = /Firefox\/([0-9]+)/,
        wo = /\sYptp\/\d\.(\d+)\s/,
        Wl = /Edg\/(\d+)\./,
        Mi = z(function (a) {
          var c;
          a: {
            if ((c = wb(a)) && (c = wo.exec(c)) && 1 < c.length) {
              c = parseInt(c[1], 10);
              break a;
            }
            c = 0;
          }
          return (50 <= c && 99 >= c) || hh(a, 79) ? !1 : !xf(a) || ah(a);
        }),
        Bf = z(
          function (a, c, b) {
            var d = Y(a);
            c = Na(a);
            var e = [];
            b = R([a, b, d, c], Ul);
            var f = Mi(a) && !gh(a, 68);
            f || e.push(R([Yl, "pu", ""], b));
            f ||
              c.Je ||
              xf(a) ||
              (e.push(R([Tl, "zzlc", "na"], b)), e.push(R([Sl, "cc", ""], b)));
            return e.length
              ? {
                  qb: function (g, k) {
                    if (0 === d.o("isEU"))
                      try {
                        E(x(S, ma), e);
                      } catch (m) {}
                    k();
                  },
                  ua: function (g, k) {
                    var m = g.V;
                    if (m && 0 === d.o("isEU"))
                      try {
                        E(x(A(m), ma), e);
                      } catch (n) {}
                    k();
                  },
                }
              : {};
          },
          function (a, c, b) {
            return Z(b);
          }
        ),
        Ql = ["0"],
        Kc = z(function (a) {
          return Na(a).o("retryReqs", {});
        }),
        jk = H("g.r", function (a) {
          var c = fa(a),
            b = Kc(a);
          return (
            x(
              Ga,
              fc(function (d) {
                return (
                  (d = d[1]) &&
                  d.ghid &&
                  d.ghid !== nc(a) &&
                  d.time &&
                  d.time + 864e5 > c(ba) &&
                  2 >= d.browserInfo.rqnl
                );
              }),
              Wa(function (d) {
                var e = d[1];
                return {
                  protocol: e.protocol,
                  host: e.host,
                  qk: e.resource,
                  hk: e.postParams,
                  ha: e.params,
                  Li: e.browserInfo,
                  El: e.ghid,
                  time: e.time,
                  xc: parseInt(d[0], 10),
                  Vi: e.counterId,
                  qa: e.counterType,
                };
              })
            )(b) || []
          );
        }),
        Je = [],
        Ol = I(function (a, c, b, d, e) {
          return new P(function (f, g) {
            var k = Aa(b),
              m = x(d.resolve ? d.resolve : S, Cc(f)),
              n = x(d.reject ? d.reject : S, Cc(g));
            d.resolve = m;
            d.reject = n;
            E(function (r) {
              var t;
              d.Kf.push(r);
              var v = b[r],
                q = V(a, A(fb(), n), 5100, "is.m");
              c(
                v.window,
                G(e, ((t = {}), (t.toCounter = parseInt(r, 10)), t)),
                function (l, h) {
                  ua(a, q);
                  d.th.push(r);
                  d.resolve && d.resolve(h);
                }
              );
            }, k);
          })["catch"](C(a, "if.b"));
        }),
        Pl = I(function (a, c, b) {
          c = X(function (d) {
            return !L(b.info.counterId, d.Kf);
          }, c);
          E(function (d) {
            var e;
            b.info.counterId &&
              a(((e = {}), (e[b.info.counterId] = b), e), d, d.data);
          }, c);
        }),
        ud = z(dh, x(qb, Z)),
        Nl = "ru en et fi lt lv pl".split(" "),
        td = [],
        Yg = x(Dh, Wa(zn(sd)), gc(",")),
        Zg = x(fc(ub(sd)), Rb, Boolean),
        Gl = z(function (a, c) {
          var b = c.o("gdpr");
          return L(b, Kb) ? "-" + b : "";
        }),
        Ni = z(Jd),
        Ta,
        cb,
        Oi = {
          "mc.edadeal.ru": { xd: /^([^/]+\.)?edadeal\.ru$/, Ff: "ru" },
          "mc.yandexsport.ru": { xd: /^([^/]+\.)?yandexsport\.ru$/, Ff: "ru" },
          "mc.beru.ru": { xd: /^([^/]+\.)?beru\.ru$/, Ff: "ru" },
          "mc.kinopoisk.ru": { xd: /^([^/]+\.)?kinopoisk\.ru$/, Ff: "ru" },
        },
        El =
          ((Ta = {}),
          (Ta.ka = "ge"),
          (Ta.ro = "md"),
          (Ta.tg = "tj"),
          (Ta.tk = "tm"),
          (Ta.et = "ee"),
          (Ta.hy = "com.am"),
          (Ta.he = "co.li"),
          (Ta.ky = "kg"),
          (Ta.uk = "ua"),
          (Ta.be = "by"),
          (Ta.tr = "com.tr"),
          (Ta.kk = "kz"),
          Ta),
        Pi = z(Jd),
        Cl =
          ((cb = {}),
          (cb.am = "com.am"),
          (cb.tr = "com.tr"),
          (cb.ge = "com.ge"),
          (cb.il = "co.il"),
          (cb["\u0440\u0444"] = "ru"),
          (cb["xn--p1ai"] = "ru"),
          (cb["\u0443\u043a\u0440"] = "ua"),
          (cb["xn--j1amh"] = "ua"),
          (cb["\u0431\u0435\u043b"] = "by"),
          (cb["xn--90ais"] = "by"),
          cb),
        xo = z(function () {
          var a = x(
            fc(x(S, la("ru"), Zb)),
            ac(function (c, b) {
              c[b] = ["mc.yandex." + b];
              return c;
            }, {})
          )(qh);
          df(
            Ga,
            Wa(function (c) {
              c = c[0];
              a[c] = [c];
            })
          )(Oi);
          return a;
        }),
        yo = z(function (a) {
          var c = Q(a).hostname;
          return (a = Ma(function (b) {
            return b[1].xd.test(c);
          }, Ga(Oi)))
            ? a[0]
            : "";
        }),
        zo = I(function (a, c) {
          var b = Ci(c),
            d = Dl(c),
            e = yo(c) || Al(c),
            f = fa(c),
            g = Na(c),
            k = g.o("synced", {});
          b = b ? [e, d] : [];
          k &&
            (b = X(function (m) {
              var n = (k[m] || 1) + 1440 < f(hb);
              n && delete k[m];
              return n;
            }, b));
          g.C("synced", k);
          return M(
            function (m, n) {
              E(function (r) {
                m.push({ domain: r, Tj: n });
              }, a[n] || []);
              return m;
            },
            [],
            b
          );
        }),
        Ao = (function (a, c) {
          return function (b) {
            var d = xo(),
              e = zo(d);
            return xf(b)
              ? {}
              : {
                  ua: function (f, g) {
                    var k = f.V,
                      m = Y(b);
                    if (!Ci(b) || sb(b) || !k || !k.o("pv")) return g();
                    k = e(b);
                    if (!k.length) return g();
                    if (m.o("startSync")) Pi(b).push(g);
                    else {
                      m.C("startSync", !0);
                      m = Je[0];
                      if (!m) return g();
                      m(b)
                        .then(R([b, k], a))
                        .then(g, x(Cc(g), C(b, c)))
                        ["catch"](J);
                    }
                  },
                };
          };
        })(function (a, c) {
          var b = fa(a),
            d = Y(a),
            e = Na(a),
            f = $e(a, "c"),
            g = pc(a, f);
          return M(
            function (k, m) {
              function n() {
                var v = e.o("synced");
                d.C("startSync", !1);
                v && ((v[m.Tj] = t), e.C("synced", v));
                E(ma, Pi(a));
              }
              var r = g({ ab: ["sync.cook"] }, [
                  za.Hb + "//" + m.domain + "/sync_cookie_image_check",
                ]),
                t;
              r.then(function () {
                t = b(hb);
                n();
              })["catch"](function () {
                t = b(hb) - 1435;
                n();
              });
              r = A(r, S);
              return k.then(r);
            },
            P.resolve(""),
            c
          )["catch"](C(a, "ctl"));
        }, "sy.c"),
        Bo = Ra(/^.+\.mtproxy\.yandex\.net$/),
        ze = z(function (a) {
          if ("MetrikaPlayer" === a.name) return !0;
          a = Q(a).hostname;
          return Bo(a);
        }),
        zl = /^[a-z][\w.+-]+:/i,
        Qi = {},
        ge = I(function (a, c, b) {
          return F("x", B(x(S, oa("concat", "" + a), A(b, w)), c));
        }),
        Co = H("fip", function (a, c) {
          if (!Mi(a) || yd(a)) {
            var b = Na(a);
            if (!b.o("fip")) {
              var d = x(
                Wa(
                  x(function (e, f) {
                    return H("fip." + f, e)(a);
                  }, D(dn, null, 210))
                ),
                gc("-")
              )(c);
              b.C("fip", d);
            }
          }
        }),
        Ha = x(Aa, W("0"));
      Ha({ Gl: 1 });
      Ha({ Al: 1 });
      var Qd,
        Ia = [Pe, Mc, Xb(), Oe],
        Ri = "et w v z i u vf".split(" ");
      Ri.push("we");
      var Cf = Xb(Ri);
      Ia.push(Ao);
      Ia.unshift(function (a, c, b) {
        return {
          qb: function (d, e) {
            var f = La(a, b);
            (f = f && f.userParams) && d.Nd && f(d.Nd);
            e();
          },
        };
      });
      Ia.unshift(function (a, c, b) {
        return {
          ua: function (d, e) {
            if (d.ha && (Wh(b, d.ha), !d.oa && d.V && d.J)) {
              var f = $a(a, d.ha),
                g = Ni(a),
                k = d.V.o("pv");
              f &&
                !d.J.nohit &&
                (k
                  ? encodeURIComponent(f).length > za.ni
                    ? g.push([d.V, d.ha])
                    : (d.J["site-info"] = f)
                  : ((d.oa = f), (d.Xj = !0)));
            }
            e();
          },
          qb: function (d, e) {
            var f = Ni(a),
              g = La(a, b),
              k = g && g.params;
            k &&
              ((g = X(x(W("0"), la(d.V)), f)),
              E(function (m) {
                k(m[1]);
                m = Od(a)(m, f);
                f.splice(m, 1);
              }, g));
            e();
          },
        };
      });
      Ia.push(vd());
      Ia.push(function (a) {
        return {
          ua: function (c, b) {
            var d = c.V;
            if (d) {
              var e = Y(a).o("adBlockEnabled");
              e && d.C("adb", e);
            }
            b();
          },
        };
      });
      Ia.push(Bf);
      Ia.push(function (a) {
        return {
          ua: function (c, b) {
            var d = c.V,
              e = Na(a).o("fip");
            e && d && d.C("fip", e);
            b();
          },
        };
      });
      var wa = ((Qd = {}), (Qd.h = Ia), (Qd.er = []), Qd);
      wa.adb = [];
      var Si = [Xb(), Oe];
      Si.push(Bf);
      wa.f = Si;
      wa["2"] = Ia;
      wa["1"] = (function (a, c) {
        return X(x(ub(c), Zb), a);
      })(Ia, [Oe]);
      wa.a = Ia;
      wa.g = Ia;
      wa.e = Ia;
      var Ti = [Mc];
      Ti.push(
        (function () {
          return function (a) {
            return {
              ua: function (c, b) {
                var d = c.V,
                  e = void 0 === d ? ta() : d,
                  f = c.xc,
                  g = Kc(a);
                d = e.o("rqnl", 0) + 1;
                e.C("rqnl", d);
                if ((e = w(g, F(".", [f, "browserInfo"])))) (e.rqnl = d), Me(a);
                b();
              },
              qb: function (c, b) {
                fh(a, c);
                b();
              },
            };
          };
        })()
      );
      wa.r = Ti;
      var Df = [];
      Df.push(Cf);
      Df.push(vd());
      wa.p = Df;
      wa["6"] = [Mc];
      wa.t = Ia;
      wa["4"] = [Cf];
      wa.W = [Cf];
      var Ef = [Pe, Mc, Xb()];
      Ef.push(vd());
      Ef.push(Bf);
      wa.n = Ef;
      wa.d = [Xb(["v", "vf"])];
      wa.m = [Xb(["u", "v", "vf"]), vd()];
      wa.s = [];
      wa.u = [];
      wa.S = [Xb(["v", "hid", "u", "vf", "rn"])];
      Ia.unshift(function (a, c, b) {
        return {
          ua: function (d, e) {
            var f = d.V,
              g = d.J;
            if (!f || !g) return e();
            !Qi[b.id] &&
              f.o("pv") &&
              b.exp &&
              !g.nohit &&
              ((g.exp = b.exp), (Qi[b.id] = !0));
            f = g["page-ref"];
            var k = g["page-url"];
            f && k !== f ? (g["page-ref"] = Vg(a, f)) : delete g["page-ref"];
            g["page-url"] = Vg(a, k).slice(0, za.pi);
            return e();
          },
        };
      });
      wa["5"] = X(x(ub([Pe, Mc]), Zb), Ia);
      var Rd,
        Ui = D(P.reject, P, fb()),
        na = ((Rd = {}), (Rd.h = Oa), (Rd.er = A(Ui, S)), Rd);
      na.a = Oa;
      na.p = wd;
      na["4"] = wd;
      na.f = Oa;
      na.n = Oa;
      na["6"] = function (a, c, b) {
        var d = pc(a, c);
        return function (e) {
          return Re(a, b, e, !0).then(
            R([e, ["https://mc.yandex.md/cc"], { Tf: !0, Nh: !1 }], d)
          );
        };
      };
      na["1"] = Oa;
      na.n = Oa;
      na.c = pc;
      na.g = Oa;
      na.e = Oa;
      na["2"] = Oa;
      na.r = function (a, c, b) {
        var d = wd(a, c, b),
          e = Oa(a, c, b);
        return function (f, g, k) {
          return "webvisor" === k ? d(f, g, f.J["wv-part"]) : e(f, g);
        };
      };
      na.adb = xd;
      na.s = pc;
      na.S = Oa;
      na.u = pc;
      na.m = function (a, c, b) {
        return function (d, e) {
          var f,
            g = d.J;
          g = ((f = {}), (f["page-url"] = (g && g["page-url"]) || ""), f);
          f = G(d, { J: G(d.J || {}, g) });
          return xd(a, c, b)(f, "clmap/" + e.id)["catch"](C(a, "c.m"));
        };
      };
      na.d = Oa;
      na.t = Oa;
      na.W = wd;
      na["5"] = Oa;
      var pa = H(
          "g.sen",
          function (a, c, b) {
            var d = $e(a, c);
            b = wl(a, c, b);
            var e = na[c],
              f = e ? e(a, d, b) : Oa(a, d, b);
            return function () {
              var g = va(arguments),
                k = g.slice(1);
              g = G(g[0], { ab: [c] });
              return f.apply(void 0, ia([g], k));
            };
          },
          Ui
        ),
        Sd = z(function (a) {
          a = w(a, "console");
          var c = w(a, "log");
          c = Va(c, "log") || J;
          var b = w(a, "warn"),
            d = w(a, "error");
          c = D(c, a);
          return {
            log: c,
            error: ea("error", d) ? D(d, a) : c,
            warn: ea("warn", b) ? D(b, a) : c,
          };
        }),
        Ug = z(x(W("id"), ub([26812653])), Z),
        Do = { log: J, warn: J, error: J },
        Eo = H("dc.init", function (a) {
          var c = Q(a),
            b = Sd(a),
            d = Sb(a),
            e = Tg(a),
            f = e.Mj;
          e = e.Fj;
          f && !e && d.C("debug", "1", void 0, c.host);
          return ye(a) || (!f && !e) ? Do : b;
        }),
        Fe = z(Eo),
        Fo = C(window, "h.p", function (a, c) {
          var b,
            d,
            e = pa(a, "h", c),
            f = c.Zc || "" + Q(a).href,
            g = c.mj || a.document.referrer,
            k = {
              V: ta(((b = {}), (b.pv = 1), b)),
              J: ((d = {}), (d["page-url"] = f), (d["page-ref"] = g), d),
            };
          k.ha = c.ha;
          k.Nd = c.Nd;
          c.Oc && k.J && (k.J.nohit = "1");
          return e(k, c)
            .then(function (m) {
              if (m) {
                c.Oc ||
                  Db(
                    a,
                    c,
                    "PageView. Counter " +
                      c.id +
                      ". URL: " +
                      f +
                      ". Referrer: " +
                      g,
                    c.ha
                  )();
                var n = Z(c);
                ih()(vo(n, m));
              }
            })
            ["catch"](C(a, "h.g.s"));
        }),
        ad = z(rc, Z),
        Go = H("p.ar", function (a, c) {
          var b = pa(a, "a", c);
          return function (d, e, f, g, k, m) {
            var n,
              r,
              t = { J: {}, V: ta(((n = {}), (n.pv = 1), (n.ar = 1), n)) };
            d &&
              ((e = kc(e)
                ? {
                    title: e.title,
                    fh: e.referer,
                    ha: e.params,
                    Ib: e.callback,
                    b: e.ctx,
                  }
                : { title: e, fh: f, ha: g, Ib: k, b: m }),
              (f = ad(c)),
              f.url !== d && ((f.pk = f.url), (f.url = d)),
              (d = d || Q(a).href),
              (f = e.fh || f.pk || a.document.referrer),
              (g = Db(
                a,
                c,
                "PageView. Counter " +
                  c.id +
                  ". URL: " +
                  d +
                  ". Referrer: " +
                  f,
                e.ha
              )),
              b(
                G(t, {
                  ha: e.ha,
                  title: e.title,
                  J: G(
                    t.J,
                    ((r = {}), (r["page-url"] = d), (r["page-ref"] = f), r)
                  ),
                }),
                c
              )
                .then(g)
                ["catch"](C(a, "p.ar.s"))
                .then(R([a, D(e.Ib || J, e.b)], Jb)));
          };
        }),
        ul = {
          da: "stamp",
          ba: "frameId",
          fa: "meta",
          Jc: "base",
          gd: "hasBase",
          Ic: "address",
          Md: "ua",
          uc: "prev",
          Sg: "namespace",
          Ua: "keystrokes",
          jd: "isMeta",
          Rb: "modifier",
          ib: "pageWidth",
          hb: "pageHeight",
          Jd: "startNode",
          Vc: "endNode",
          Od: "zoomFrom",
          Pd: "zoomTo",
          level: "level",
          duration: "duration",
          ra: "i",
          gb: "o",
          n: "n",
          r: "r",
          $a: "ct",
          wa: "at",
          nd: "nm",
          qd: "ns",
          wb: "pa",
          xb: "pr",
          vb: "nx",
          Ra: "h",
          Za: "changes",
          pb: "a",
          rb: "b",
          Oa: "c",
        },
        vl = ["attributes", "attrs"],
        Td = (function () {
          function a(c) {
            this.b = c;
          }
          a.prototype.Ab = function (c) {
            var b = rd(c);
            c = B(D(this.jb, this), b);
            return fd(
              $a(
                this.b,
                B(function (d, e) {
                  var f;
                  return G({}, b[e], ((f = {}), (f.data = d), f));
                }, c)
              )
            );
          };
          a.prototype.jb = function (c) {
            var b = c.data;
            "string" !== typeof b && (b = $a(this.b, rd(c.data)));
            return b;
          };
          a.prototype.ub = function (c) {
            return encodeURIComponent(c).length;
          };
          a.prototype.Id = function (c, b) {
            for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
              e.push(c.slice(f * d, d * (f + 1)));
            return e;
          };
          a.prototype.isEnabled = function () {
            return !!this.b.JSON;
          };
          return a;
        })(),
        Vi =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof global
            ? global
            : "undefined" !== typeof self
            ? self
            : {},
        Ff = (function (a) {
          return a && a.cg && Object.prototype.hasOwnProperty.call(a, "default")
            ? a["default"]
            : a;
        })(
          (function (a, c) {
            return (c = { exports: {} }), a(c, c.exports), c.exports;
          })(function (a) {
            try {
              a.exports = (function (c) {
                function b(e) {
                  if (d[e]) return d[e].exports;
                  var f = (d[e] = { ra: e, Rj: !1, exports: {} });
                  c[e].call(f.exports, f, f.exports, b);
                  f.Rj = !0;
                  return f.exports;
                }
                var d = {};
                b.Vl = c;
                b.Oa = d;
                b.d = function (e, f, g) {
                  b.gb(e, f) ||
                    Object.defineProperty(e, f, { enumerable: !0, get: g });
                };
                b.r = function (e) {
                  Uf();
                  Uf();
                  Uf();
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                      value: "Module",
                    });
                  Object.defineProperty(e, "__esModule", { value: !0 });
                };
                b.t = function (e, f) {
                  1 & f && (e = b(e));
                  if (8 & f || (4 & f && "object" == typeof e && e && e.cg))
                    return e;
                  var g = Object.create(null);
                  b.r(g);
                  Object.defineProperty(g, "default", {
                    enumerable: !0,
                    value: e,
                  });
                  if (2 & f && "string" != typeof e)
                    for (var k in e)
                      b.d(
                        g,
                        k,
                        function (m) {
                          return e[m];
                        }.bind(null, k)
                      );
                  return g;
                };
                b.n = function (e) {
                  var f =
                    e && e.cg
                      ? function () {
                          return e["default"];
                        }
                      : function () {
                          return e;
                        };
                  b.d(f, "a", f);
                  return f;
                };
                b.gb = function (e, f) {
                  return Object.prototype.hasOwnProperty.call(e, f);
                };
                b.p = "";
                return b((b.cm = 4));
              })([
                function (c, b, d) {
                  function e(g, k, m) {
                    for (var n = Object.keys(k), r = 0; r < n.length; ++r)
                      (void 0 !== g[n[r]] && m) || (g[n[r]] = k[n[r]]);
                    return g;
                  }
                  function f(g) {
                    function k(m, n) {
                      if (!(this instanceof k)) return new k(m, n);
                      Object.defineProperty(this, "message", {
                        get: function () {
                          return m;
                        },
                      });
                      Error.captureStackTrace
                        ? Error.captureStackTrace(this, k)
                        : Object.defineProperty(this, "stack", {
                            value: Error().stack || "",
                          });
                      n && e(this, n);
                    }
                    (k.prototype = Object.create(
                      Error.prototype
                    )).constructor = k;
                    Object.defineProperty(k.prototype, "name", {
                      get: function () {
                        return g;
                      },
                    });
                    k.prototype.toString = function () {
                      return this.name + ": " + this.message;
                    };
                    return k;
                  }
                  b.rl = d(6);
                  b.Ji = d(7);
                  b.Yf = d(8);
                  b.Pa = d(9);
                  b.Gg = d(10);
                  b.Qf = d(11);
                  b.gk = d(12);
                  b.$b = d(13);
                  b.global =
                    ("undefined" != typeof window && window) ||
                    ("undefined" != typeof Vi && Vi) ||
                    ("undefined" != typeof self && self) ||
                    this;
                  b.ta = Object.freeze ? Object.freeze([]) : [];
                  b.ne = Object.freeze ? Object.freeze({}) : {};
                  b.Jl = !!(
                    b.global.$g &&
                    b.global.$g.Tk &&
                    b.global.$g.Tk.node
                  );
                  b.isInteger =
                    Number.isInteger ||
                    function (g) {
                      return (
                        "number" == typeof g &&
                        isFinite(g) &&
                        Math.floor(g) === g
                      );
                    };
                  b.Ne = function (g) {
                    return "string" == typeof g || g instanceof String;
                  };
                  b.Kl = function (g) {
                    return g && "object" == typeof g;
                  };
                  b.Ml = b.Ll = function (g, k) {
                    var m = g[k];
                    return (
                      !(null == m || !g.hasOwnProperty(k)) &&
                      ("object" != typeof m ||
                        0 <
                          (Array.isArray(m) ? m.length : Object.keys(m).length))
                    );
                  };
                  b.sa = (function () {
                    try {
                      var g = b.Gg("buffer").sa;
                      return g.prototype.Jh ? g : null;
                    } catch (k) {
                      return null;
                    }
                  })();
                  b.Gc = null;
                  b.Fc = null;
                  b.Wj = function () {
                    var g = [];
                    return "number" == typeof g
                      ? b.sa
                        ? b.Fc(g)
                        : new b.Array(g)
                      : b.sa
                      ? b.Gc(g)
                      : "undefined" == typeof Uint8Array
                      ? g
                      : new Uint8Array(g);
                  };
                  b.Array =
                    "undefined" != typeof Uint8Array ? Uint8Array : Array;
                  b.La =
                    (b.global.aj && b.global.aj.La) ||
                    b.global.La ||
                    b.Gg("long");
                  b.Nl = /^true|false|0|1$/;
                  b.Ol = /^-?(?:0|[1-9][0-9]*)$/;
                  b.Pl = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
                  b.Tl = function (g) {
                    return g ? b.$b.from(g).Gk() : b.$b.al;
                  };
                  b.Sl = function (g, k) {
                    var m = b.$b.oj(g);
                    return b.La ? b.La.nj(m.aa, m.ea, k) : m.Bh(!!k);
                  };
                  b.Uj = e;
                  b.Ql = function (g) {
                    return g.charAt(0).toLowerCase() + g.substring(1);
                  };
                  b.Wl = f;
                  b.jl = f("ProtocolError");
                  b.Ug = function (g) {
                    for (var k = {}, m = 0; m < g.length; ++m) k[g[m]] = 1;
                    return function () {
                      for (
                        var n = Object.keys(this), r = n.length - 1;
                        -1 < r;
                        --r
                      )
                        if (
                          1 === k[n[r]] &&
                          void 0 !== this[n[r]] &&
                          null !== this[n[r]]
                        )
                          return n[r];
                    };
                  };
                  b.Vg = function (g) {
                    return function (k) {
                      for (var m = 0; m < g.length; ++m)
                        g[m] !== k && delete this[g[m]];
                    };
                  };
                  b.gm = { Ul: String, yl: String, dc: String, json: !0 };
                  b.Aa = function () {
                    var g = b.sa;
                    g
                      ? ((b.Gc =
                          (g.from !== Uint8Array.from && g.from) ||
                          function (k, m) {
                            return new g(k, m);
                          }),
                        (b.Fc =
                          g.pl ||
                          function (k) {
                            return new g(k);
                          }))
                      : (b.Gc = b.Fc = null);
                  };
                },
                function (c, b, d) {
                  c.exports = d(5);
                },
                function (c, b, d) {
                  function e() {
                    return l.sa
                      ? function () {
                          return (m.create = function () {
                            return new q();
                          })();
                        }
                      : function () {
                          return new m();
                        };
                  }
                  function f(y, K, U) {
                    this.sb = y;
                    this.ca = K;
                    this.next = void 0;
                    this.Lh = U;
                  }
                  function g() {}
                  function k(y) {
                    this.head = y.head;
                    this.za = y.za;
                    this.ca = y.ca;
                    this.next = y.kb;
                  }
                  function m() {
                    this.ca = 0;
                    this.za = this.head = new f(g, 0, 0);
                    this.kb = null;
                  }
                  function n(y, K, U) {
                    K[U] = 255 & y;
                  }
                  function r(y, K) {
                    this.ca = y;
                    this.next = void 0;
                    this.Lh = K;
                  }
                  function t(y, K, U) {
                    for (; y.ea; )
                      (K[U++] = (127 & y.aa) | 128),
                        (y.aa = ((y.aa >>> 7) | (y.ea << 25)) >>> 0),
                        (y.ea >>>= 7);
                    for (; 127 < y.aa; )
                      (K[U++] = (127 & y.aa) | 128), (y.aa >>>= 7);
                    K[U++] = y.aa;
                  }
                  function v(y, K, U) {
                    K[U] = 255 & y;
                    K[U + 1] = (y >>> 8) & 255;
                    K[U + 2] = (y >>> 16) & 255;
                    K[U + 3] = y >>> 24;
                  }
                  c.exports = m;
                  var q,
                    l = d(0),
                    h = l.$b,
                    p = l.Ji,
                    u = l.Qf;
                  m.create = e();
                  m.cc = function (y) {
                    return new l.Array(y);
                  };
                  l.Array !== Array &&
                    (m.cc = l.gk(m.cc, l.Array.prototype.subarray));
                  m.prototype.va = function (y, K, U) {
                    this.za = this.za.next = new f(y, K, U);
                    this.ca += K;
                    return this;
                  };
                  r.prototype = Object.create(f.prototype);
                  r.prototype.sb = function (y, K, U) {
                    for (; 127 < y; ) (K[U++] = (127 & y) | 128), (y >>>= 7);
                    K[U] = y;
                  };
                  m.prototype.l = function (y) {
                    this.ca += (this.za = this.za.next = new r(
                      128 > (y >>>= 0)
                        ? 1
                        : 16384 > y
                        ? 2
                        : 2097152 > y
                        ? 3
                        : 268435456 > y
                        ? 4
                        : 5,
                      y
                    )).ca;
                    return this;
                  };
                  m.prototype.F = function (y) {
                    0 > y ? this.va(t, 10, h.ue(y)) : this.l(y);
                  };
                  m.prototype.zc = function (y) {
                    this.l(((y << 1) ^ (y >> 31)) >>> 0);
                  };
                  m.prototype.Fh = function (y) {
                    y = h.from(y);
                    return this.va(t, y.length(), y);
                  };
                  m.prototype.Hg = m.prototype.Fh;
                  m.prototype.Bk = function (y) {
                    y = h.from(y).Rh();
                    return this.va(t, y.length(), y);
                  };
                  m.prototype.Fa = function (y) {
                    this.va(n, 1, y ? 1 : 0);
                  };
                  m.prototype.pg = function (y) {
                    y = h.from(y);
                    return this.va(v, 4, y.aa).va(v, 4, y.ea);
                  };
                  m.prototype.Ak = m.prototype.pg;
                  m.prototype.Pa = function (y) {
                    return this.va(l.Pa.Oh, 4, y);
                  };
                  var N = l.Array.prototype.set
                    ? function (y, K, U) {
                        K.set(y, U);
                      }
                    : function (y, K, U) {
                        for (var uc = 0; uc < y.length; ++uc) K[U + uc] = y[uc];
                      };
                  m.prototype.dc = function (y) {
                    var K = y.length >>> 0;
                    if (!K) return this.va(n, 1, 0);
                    if (l.Ne(y)) {
                      var U = m.cc((K = p.length(y)));
                      p.decode(y, U, 0);
                      y = U;
                    }
                    return this.l(K).va(N, K, y);
                  };
                  m.prototype.M = function (y) {
                    var K = u.length(y);
                    return K ? this.l(K).va(u.write, K, y) : this.va(n, 1, 0);
                  };
                  m.prototype.K = function () {
                    this.kb = new k(this);
                    this.head = this.za = new f(g, 0, 0);
                    this.ca = 0;
                    return this;
                  };
                  m.prototype.reset = function () {
                    this.kb
                      ? ((this.head = this.kb.head),
                        (this.za = this.kb.za),
                        (this.ca = this.kb.ca),
                        (this.kb = this.kb.next))
                      : ((this.head = this.za = new f(g, 0, 0)), (this.ca = 0));
                    return this;
                  };
                  m.prototype.L = function () {
                    var y = this.head,
                      K = this.za,
                      U = this.ca;
                    this.reset().l(U);
                    U &&
                      ((this.za.next = y.next), (this.za = K), (this.ca += U));
                    return this;
                  };
                  m.prototype.finish = function () {
                    for (
                      var y = this.head.next,
                        K = this.constructor.cc(this.ca),
                        U = 0;
                      y;

                    )
                      y.sb(y.Lh, K, U), (U += y.ca), (y = y.next);
                    return K;
                  };
                  m.Aa = function (y) {
                    q = y;
                    m.create = e();
                    q.Aa();
                  };
                },
                function (c, b, d) {
                  function e() {
                    return t.sa
                      ? function (p) {
                          return (g.create = function (u) {
                            return t.sa.isBuffer(u) ? new r(u) : h(u);
                          })(p);
                        }
                      : h;
                  }
                  function f(p, u) {
                    return RangeError(
                      "index out of range: " +
                        p.G +
                        " + " +
                        (u || 1) +
                        " > " +
                        p.ca
                    );
                  }
                  function g(p) {
                    this.$ = p;
                    this.G = 0;
                    this.ca = p.length;
                  }
                  function k() {
                    var p = new v(0, 0),
                      u = 0;
                    if (!(4 < this.ca - this.G)) {
                      for (; 3 > u; ++u) {
                        if (this.G >= this.ca) throw f(this);
                        p.aa =
                          (p.aa | ((127 & this.$[this.G]) << (7 * u))) >>> 0;
                        if (128 > this.$[this.G++]) return p;
                      }
                      p.aa =
                        (p.aa | ((127 & this.$[this.G++]) << (7 * u))) >>> 0;
                      return p;
                    }
                    for (; 4 > u; ++u)
                      if (
                        ((p.aa =
                          (p.aa | ((127 & this.$[this.G]) << (7 * u))) >>> 0),
                        128 > this.$[this.G++])
                      )
                        return p;
                    p.aa = (p.aa | ((127 & this.$[this.G]) << 28)) >>> 0;
                    p.ea = (p.ea | ((127 & this.$[this.G]) >> 4)) >>> 0;
                    if (128 > this.$[this.G++]) return p;
                    u = 0;
                    if (4 < this.ca - this.G)
                      for (; 5 > u; ++u) {
                        if (
                          ((p.ea =
                            (p.ea | ((127 & this.$[this.G]) << (7 * u + 3))) >>>
                            0),
                          128 > this.$[this.G++])
                        )
                          return p;
                      }
                    else
                      for (; 5 > u; ++u) {
                        if (this.G >= this.ca) throw f(this);
                        p.ea =
                          (p.ea | ((127 & this.$[this.G]) << (7 * u + 3))) >>>
                          0;
                        if (128 > this.$[this.G++]) return p;
                      }
                    throw Error("invalid varint encoding");
                  }
                  function m(p, u) {
                    return (
                      (p[u - 4] |
                        (p[u - 3] << 8) |
                        (p[u - 2] << 16) |
                        (p[u - 1] << 24)) >>>
                      0
                    );
                  }
                  function n() {
                    if (this.G + 8 > this.ca) throw f(this, 8);
                    return new v(
                      m(this.$, (this.G += 4)),
                      m(this.$, (this.G += 4))
                    );
                  }
                  c.exports = g;
                  var r,
                    t = d(0),
                    v = t.$b,
                    q = t.Qf,
                    l,
                    h =
                      "undefined" != typeof Uint8Array
                        ? function (p) {
                            if (p instanceof Uint8Array || Array.isArray(p))
                              return new g(p);
                            throw Error("illegal buffer");
                          }
                        : function (p) {
                            if (Array.isArray(p)) return new g(p);
                            throw Error("illegal buffer");
                          };
                  g.create = e();
                  g.prototype.fg =
                    t.Array.prototype.subarray || t.Array.prototype.slice;
                  g.prototype.l =
                    ((l = 4294967295),
                    function () {
                      l = (127 & this.$[this.G]) >>> 0;
                      if (128 > this.$[this.G++]) return l;
                      l = (l | ((127 & this.$[this.G]) << 7)) >>> 0;
                      if (128 > this.$[this.G++]) return l;
                      l = (l | ((127 & this.$[this.G]) << 14)) >>> 0;
                      if (128 > this.$[this.G++]) return l;
                      l = (l | ((127 & this.$[this.G]) << 21)) >>> 0;
                      if (128 > this.$[this.G++]) return l;
                      l = (l | ((15 & this.$[this.G]) << 28)) >>> 0;
                      if (128 > this.$[this.G++]) return l;
                      if ((this.G += 5) > this.ca)
                        throw ((this.G = this.ca), f(this, 10));
                      return l;
                    });
                  g.prototype.F = function () {
                    this.l();
                  };
                  g.prototype.zc = function () {
                    this.l();
                  };
                  g.prototype.Fa = function () {
                    this.l();
                  };
                  g.prototype.Pa = function () {
                    if (this.G + 4 > this.ca) throw f(this, 4);
                    var p = t.Pa.dh(this.$, this.G);
                    this.G += 4;
                    return p;
                  };
                  g.prototype.dc = function () {
                    var p = this.l(),
                      u = this.G,
                      N = this.G + p;
                    if (N > this.ca) throw f(this, p);
                    this.G += p;
                    return Array.isArray(this.$)
                      ? this.$.slice(u, N)
                      : u === N
                      ? new this.$.constructor(0)
                      : this.fg.call(this.$, u, N);
                  };
                  g.prototype.M = function () {
                    var p = this.dc();
                    return q.read(p, 0, p.length);
                  };
                  g.Aa = function (p) {
                    r = p;
                    g.create = e();
                    r.Aa();
                    var u = t.La ? "toLong" : "toNumber";
                    t.Uj(g.prototype, {
                      Hg: function () {
                        return k.call(this)[u](!1);
                      },
                      Fh: function () {
                        return k.call(this)[u](!0);
                      },
                      Bk: function () {
                        return k.call(this).Qh()[u](!1);
                      },
                      pg: function () {
                        return n.call(this)[u](!0);
                      },
                      Ak: function () {
                        return n.call(this)[u](!1);
                      },
                    });
                  };
                },
                function (c, b, d) {
                  d.r(b);
                  d.d(b, "ru", function () {
                    return k;
                  });
                  d.d(b, "default", function () {
                    return g;
                  });
                  c = d(1);
                  var e = c.ag,
                    f = c.Kh,
                    g = c.jh["default"] || (c.jh["default"] = {}),
                    k = (g.X = (function () {
                      var m = {};
                      m.T = (function () {
                        var n = {};
                        n.N = (function () {
                          var r = {};
                          r.R = (function () {
                            var t = {};
                            t.O = (function () {
                              var v = {};
                              v.Xf = (function () {
                                function q(l) {
                                  this.buffer = [];
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.buffer = f.ta;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  if (null != l.buffer && l.buffer.length)
                                    for (var p = 0; p < l.buffer.length; ++p)
                                      g.X.T.N.R.O.sa
                                        .encode(l.buffer[p], h.l(10).K())
                                        .L();
                                  return h;
                                };
                                return q;
                              })();
                              v.sa = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.da = 0;
                                q.prototype.data = null;
                                q.prototype.page = 0;
                                q.prototype.Zd = f.Wj();
                                q.prototype.end = !1;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.da && h.l(8).F(l.da);
                                  null != l.data &&
                                    g.X.T.N.R.O.$f
                                      .encode(l.data, h.l(18).K())
                                      .L();
                                  null != l.page && h.l(24).F(l.page);
                                  null != l.Zd && h.l(34).dc(l.Zd);
                                  null != l.end && h.l(40).Fa(l.end);
                                  return h;
                                };
                                return q;
                              })();
                              v.$f = (function () {
                                function q(h) {
                                  if (h)
                                    for (
                                      var p = Object.keys(h), u = 0;
                                      u < p.length;
                                      ++u
                                    )
                                      null != h[p[u]] && (this[p[u]] = h[p[u]]);
                                }
                                q.prototype.page = null;
                                q.prototype.Ve = null;
                                q.prototype.event = null;
                                q.prototype.Vd = null;
                                q.prototype.mf = null;
                                q.prototype.Td = 0;
                                var l;
                                Object.defineProperty(q.prototype, "data", {
                                  get: f.Ug(
                                    (l = "page mutation event articleInfo publishersHeader activity".split(
                                      " "
                                    ))
                                  ),
                                  set: f.Vg(l),
                                });
                                q.create = function (h) {
                                  return new q(h);
                                };
                                q.encode = function (h, p) {
                                  p || (p = e.create());
                                  null != h.page &&
                                    g.X.T.N.R.O.mb
                                      .encode(h.page, p.l(10).K())
                                      .L();
                                  null != h.Ve &&
                                    g.X.T.N.R.O.Ma.encode(
                                      h.Ve,
                                      p.l(18).K()
                                    ).L();
                                  null != h.event &&
                                    g.X.T.N.R.O.Event.encode(
                                      h.event,
                                      p.l(26).K()
                                    ).L();
                                  null != h.Vd &&
                                    g.X.T.N.R.O.Vh.encode(
                                      h.Vd,
                                      p.l(34).K()
                                    ).L();
                                  null != h.mf &&
                                    g.X.T.N.R.O.vi
                                      .encode(h.mf, p.l(42).K())
                                      .L();
                                  null != h.Td && p.l(48).l(h.Td);
                                  return p;
                                };
                                return q;
                              })();
                              v.mb = (function () {
                                function q(l) {
                                  this.content = [];
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.fa = null;
                                q.prototype.content = f.ta;
                                q.prototype.ba = 0;
                                q.prototype.Wb = "";
                                q.prototype.Da = f.La ? f.La.nj(0, 0, !1) : 0;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.fa &&
                                    g.X.T.N.R.O.mb.Rd.encode(
                                      l.fa,
                                      h.l(10).K()
                                    ).L();
                                  if (null != l.content && l.content.length)
                                    for (var p = 0; p < l.content.length; ++p)
                                      g.X.T.N.R.O.mb.ei
                                        .encode(l.content[p], h.l(18).K())
                                        .L();
                                  null != l.ba && h.l(24).zc(l.ba);
                                  null != l.Wb && h.l(34).M(l.Wb);
                                  null != l.Da && h.l(40).Hg(l.Da);
                                  return h;
                                };
                                q.Wf = (function () {
                                  function l(h) {
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.width = 0;
                                  l.prototype.height = 0;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.width && p.l(8).F(h.width);
                                    null != h.height && p.l(16).F(h.height);
                                    return p;
                                  };
                                  return l;
                                })();
                                q.Location = (function () {
                                  function l(h) {
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.host = "";
                                  l.prototype.protocol = "";
                                  l.prototype.path = "";
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.host && p.l(10).M(h.host);
                                    null != h.protocol && p.l(18).M(h.protocol);
                                    null != h.path && p.l(26).M(h.path);
                                    return p;
                                  };
                                  return l;
                                })();
                                q.zi = (function () {
                                  function l(h) {
                                    this.scroll = [];
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.target = 0;
                                  l.prototype.scroll = f.ta;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.target && p.l(8).F(h.target);
                                    if (null != h.scroll && h.scroll.length) {
                                      p.l(18).K();
                                      for (var u = 0; u < h.scroll.length; ++u)
                                        p.F(h.scroll[u]);
                                      p.L();
                                    }
                                    return p;
                                  };
                                  return l;
                                })();
                                q.Rd = (function () {
                                  function l(h) {
                                    this.oc = [];
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.doctype = "";
                                  l.prototype.title = "";
                                  l.prototype.Ic = "";
                                  l.prototype.Md = "";
                                  l.prototype.referrer = "";
                                  l.prototype.Jc = "";
                                  l.prototype.gd = !1;
                                  l.prototype.screen = null;
                                  l.prototype.viewport = null;
                                  l.prototype.location = null;
                                  l.prototype.oc = f.ta;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.doctype && p.l(10).M(h.doctype);
                                    null != h.title && p.l(18).M(h.title);
                                    null != h.Ic && p.l(26).M(h.Ic);
                                    null != h.Md && p.l(34).M(h.Md);
                                    null != h.referrer && p.l(42).M(h.referrer);
                                    null != h.Jc && p.l(50).M(h.Jc);
                                    null != h.gd && p.l(56).Fa(h.gd);
                                    null != h.screen &&
                                      g.X.T.N.R.O.mb.Wf.encode(
                                        h.screen,
                                        p.l(66).K()
                                      ).L();
                                    null != h.viewport &&
                                      g.X.T.N.R.O.mb.Wf.encode(
                                        h.viewport,
                                        p.l(74).K()
                                      ).L();
                                    null != h.location &&
                                      g.X.T.N.R.O.mb.Location.encode(
                                        h.location,
                                        p.l(82).K()
                                      ).L();
                                    if (null != h.oc && h.oc.length)
                                      for (var u = 0; u < h.oc.length; ++u)
                                        g.X.T.N.R.O.mb.zi
                                          .encode(h.oc[u], p.l(90).K())
                                          .L();
                                    return p;
                                  };
                                  return l;
                                })();
                                q.ei = (function () {
                                  function l(h) {
                                    this.attributes = {};
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.id = 0;
                                  l.prototype.name = "";
                                  l.prototype.attributes = f.ne;
                                  l.prototype.parent = 0;
                                  l.prototype.content = "";
                                  l.prototype.next = 0;
                                  l.prototype.uc = 0;
                                  l.prototype.hidden = !1;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.id && p.l(8).F(h.id);
                                    null != h.name && p.l(18).M(h.name);
                                    if (null != h.attributes)
                                      for (
                                        var u = Object.keys(h.attributes),
                                          N = 0;
                                        N < u.length;
                                        ++N
                                      )
                                        p.l(26)
                                          .K()
                                          .l(10)
                                          .M(u[N])
                                          .l(18)
                                          .M(h.attributes[u[N]])
                                          .L();
                                    null != h.parent && p.l(32).F(h.parent);
                                    null != h.content && p.l(42).M(h.content);
                                    null != h.next && p.l(48).F(h.next);
                                    null != h.uc && p.l(56).F(h.uc);
                                    null != h.hidden && p.l(64).Fa(h.hidden);
                                    return p;
                                  };
                                  return l;
                                })();
                                return q;
                              })();
                              v.Ma = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.target = 0;
                                q.prototype.da = 0;
                                q.prototype.fa = null;
                                q.prototype.ba = 0;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.target && h.l(8).F(l.target);
                                  null != l.da && h.l(16).F(l.da);
                                  null != l.fa &&
                                    g.X.T.N.R.O.Ma.Rd.encode(
                                      l.fa,
                                      h.l(26).K()
                                    ).L();
                                  null != l.ba && h.l(32).zc(l.ba);
                                  return h;
                                };
                                q.fi = (function () {
                                  function l(h) {
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.id = 0;
                                  l.prototype.xb = 0;
                                  l.prototype.vb = 0;
                                  l.prototype.wb = 0;
                                  l.prototype.ra = 0;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.id && p.l(8).F(h.id);
                                    null != h.xb && p.l(16).F(h.xb);
                                    null != h.vb && p.l(24).F(h.vb);
                                    null != h.wb && p.l(32).F(h.wb);
                                    null != h.ra && p.l(40).F(h.ra);
                                    return p;
                                  };
                                  return l;
                                })();
                                q.Th = (function () {
                                  function l(h) {
                                    this.wa = {};
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.id = 0;
                                  l.prototype.nd = "";
                                  l.prototype.wb = 0;
                                  l.prototype.qd = "";
                                  l.prototype.xb = 0;
                                  l.prototype.wa = f.ne;
                                  l.prototype.$a = "";
                                  l.prototype.vb = 0;
                                  l.prototype.ra = 0;
                                  l.prototype.Ra = !1;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.id && p.l(8).F(h.id);
                                    null != h.nd && p.l(18).M(h.nd);
                                    null != h.wb && p.l(24).F(h.wb);
                                    null != h.qd && p.l(34).M(h.qd);
                                    null != h.xb && p.l(40).F(h.xb);
                                    if (null != h.wa)
                                      for (
                                        var u = Object.keys(h.wa), N = 0;
                                        N < u.length;
                                        ++N
                                      )
                                        p.l(50)
                                          .K()
                                          .l(10)
                                          .M(u[N])
                                          .l(18)
                                          .M(h.wa[u[N]])
                                          .L();
                                    null != h.$a && p.l(58).M(h.$a);
                                    null != h.vb && p.l(64).F(h.vb);
                                    null != h.ra && p.l(72).F(h.ra);
                                    null != h.Ra && p.l(80).Fa(h.Ra);
                                    return p;
                                  };
                                  return l;
                                })();
                                q.Vf = (function () {
                                  function l(h) {
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.gb = "";
                                  l.prototype.n = "";
                                  l.prototype.r = !1;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.gb && p.l(10).M(h.gb);
                                    null != h.n && p.l(18).M(h.n);
                                    null != h.r && p.l(24).Fa(h.r);
                                    return p;
                                  };
                                  return l;
                                })();
                                q.Zh = (function () {
                                  function l(h) {
                                    this.wa = {};
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.id = 0;
                                  l.prototype.wa = f.ne;
                                  l.prototype.ra = 0;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.id && p.l(8).F(h.id);
                                    if (null != h.wa)
                                      for (
                                        var u = Object.keys(h.wa), N = 0;
                                        N < u.length;
                                        ++N
                                      )
                                        p.l(18).K().l(10).M(u[N]),
                                          g.X.T.N.R.O.Ma.Vf.encode(
                                            h.wa[u[N]],
                                            p.l(18).K()
                                          )
                                            .L()
                                            .L();
                                    null != h.ra && p.l(24).F(h.ra);
                                    return p;
                                  };
                                  return l;
                                })();
                                q.Di = (function () {
                                  function l(h) {
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.id = 0;
                                  l.prototype.$a = null;
                                  l.prototype.ra = 0;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.id && p.l(8).F(h.id);
                                    null != h.$a &&
                                      g.X.T.N.R.O.Ma.Vf.encode(
                                        h.$a,
                                        p.l(18).K()
                                      ).L();
                                    null != h.ra && p.l(24).F(h.ra);
                                    return p;
                                  };
                                  return l;
                                })();
                                q.ci = (function () {
                                  function l(h) {
                                    this.pb = [];
                                    this.rb = [];
                                    this.Oa = [];
                                    this.d = [];
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.pb = f.ta;
                                  l.prototype.rb = f.ta;
                                  l.prototype.Oa = f.ta;
                                  l.prototype.d = f.ta;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    if (null != h.pb && h.pb.length)
                                      for (var u = 0; u < h.pb.length; ++u)
                                        g.X.T.N.R.O.Ma.fi
                                          .encode(h.pb[u], p.l(10).K())
                                          .L();
                                    if (null != h.rb && h.rb.length)
                                      for (u = 0; u < h.rb.length; ++u)
                                        g.X.T.N.R.O.Ma.Th.encode(
                                          h.rb[u],
                                          p.l(18).K()
                                        ).L();
                                    if (null != h.Oa && h.Oa.length)
                                      for (u = 0; u < h.Oa.length; ++u)
                                        g.X.T.N.R.O.Ma.Zh.encode(
                                          h.Oa[u],
                                          p.l(26).K()
                                        ).L();
                                    if (null != h.d && h.d.length)
                                      for (u = 0; u < h.d.length; ++u)
                                        g.X.T.N.R.O.Ma.Di.encode(
                                          h.d[u],
                                          p.l(34).K()
                                        ).L();
                                    return p;
                                  };
                                  return l;
                                })();
                                q.Rd = (function () {
                                  function l(h) {
                                    this.Za = [];
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.index = 0;
                                  l.prototype.Za = f.ta;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.index && p.l(8).F(h.index);
                                    if (null != h.Za && h.Za.length)
                                      for (var u = 0; u < h.Za.length; ++u)
                                        g.X.T.N.R.O.Ma.ci
                                          .encode(h.Za[u], p.l(18).K())
                                          .L();
                                    return p;
                                  };
                                  return l;
                                })();
                                return q;
                              })();
                              v.Event = (function () {
                                function q(h) {
                                  if (h)
                                    for (
                                      var p = Object.keys(h), u = 0;
                                      u < p.length;
                                      ++u
                                    )
                                      null != h[p[u]] && (this[p[u]] = h[p[u]]);
                                }
                                q.prototype.type = 0;
                                q.prototype.target = 0;
                                q.prototype.ba = 0;
                                q.prototype.Ue = null;
                                q.prototype.rf = null;
                                q.prototype.Sf = null;
                                q.prototype.sf = null;
                                q.prototype.Yd = null;
                                q.prototype.If = null;
                                q.prototype.Rg = null;
                                q.prototype.bh = null;
                                q.prototype.Uf = null;
                                q.prototype.pf = null;
                                q.prototype.Pe = null;
                                q.prototype.le = null;
                                q.prototype.qe = null;
                                q.prototype.Ge = null;
                                var l;
                                Object.defineProperty(q.prototype, "meta", {
                                  get: f.Ug(
                                    (l = "mouseEvent scrollEvent windowEvent selectionEvent changeEvent touchEvent methodEvent propertyEvent zoomEvent resizeEvent keystrokesEvent deviceRotationEvent fatalErrorEvent hashchangeEvent".split(
                                      " "
                                    ))
                                  ),
                                  set: f.Vg(l),
                                });
                                q.create = function (h) {
                                  return new q(h);
                                };
                                q.encode = function (h, p) {
                                  p || (p = e.create());
                                  null != h.type && p.l(8).F(h.type);
                                  null != h.target && p.l(16).zc(h.target);
                                  null != h.ba && p.l(24).zc(h.ba);
                                  null != h.Ue &&
                                    g.X.T.N.R.O.MouseEvent.encode(
                                      h.Ue,
                                      p.l(34).K()
                                    ).L();
                                  null != h.rf &&
                                    g.X.T.N.R.O.Ai.encode(
                                      h.rf,
                                      p.l(42).K()
                                    ).L();
                                  null != h.Sf &&
                                    g.X.T.N.R.O.Ei.encode(
                                      h.Sf,
                                      p.l(50).K()
                                    ).L();
                                  null != h.sf &&
                                    g.X.T.N.R.O.Bi.encode(
                                      h.sf,
                                      p.l(58).K()
                                    ).L();
                                  null != h.Yd &&
                                    g.X.T.N.R.O.bi
                                      .encode(h.Yd, p.l(66).K())
                                      .L();
                                  null != h.If &&
                                    g.X.T.N.R.O.TouchEvent.encode(
                                      h.If,
                                      p.l(74).K()
                                    ).L();
                                  null != h.Rg &&
                                    g.X.T.N.R.O.si
                                      .encode(h.Rg, p.l(82).K())
                                      .L();
                                  null != h.bh &&
                                    g.X.T.N.R.O.ui
                                      .encode(h.bh, p.l(90).K())
                                      .L();
                                  null != h.Uf &&
                                    g.X.T.N.R.O.Sd.encode(
                                      h.Uf,
                                      p.l(98).K()
                                    ).L();
                                  null != h.pf &&
                                    g.X.T.N.R.O.yi
                                      .encode(h.pf, p.l(106).K())
                                      .L();
                                  null != h.Pe &&
                                    g.X.T.N.R.O.Zf.encode(
                                      h.Pe,
                                      p.l(114).K()
                                    ).L();
                                  null != h.le &&
                                    g.X.T.N.R.O.gi
                                      .encode(h.le, p.l(122).K())
                                      .L();
                                  null != h.qe &&
                                    g.X.T.N.R.O.ji
                                      .encode(h.qe, p.l(130).K())
                                      .L();
                                  null != h.Ge &&
                                    g.X.T.N.R.O.ki
                                      .encode(h.Ge, p.l(138).K())
                                      .L();
                                  return p;
                                };
                                return q;
                              })();
                              v.MouseEvent = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.x = 0;
                                q.prototype.y = 0;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.x && h.l(8).F(l.x);
                                  null != l.y && h.l(16).F(l.y);
                                  return h;
                                };
                                return q;
                              })();
                              v.Ai = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.x = 0;
                                q.prototype.y = 0;
                                q.prototype.page = !1;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.x && h.l(8).F(l.x);
                                  null != l.y && h.l(16).F(l.y);
                                  null != l.page && h.l(24).Fa(l.page);
                                  return h;
                                };
                                return q;
                              })();
                              v.Ei = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  return h;
                                };
                                return q;
                              })();
                              v.Bi = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.start = 0;
                                q.prototype.end = 0;
                                q.prototype.Jd = 0;
                                q.prototype.Vc = 0;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.start && h.l(8).F(l.start);
                                  null != l.end && h.l(16).F(l.end);
                                  null != l.Jd && h.l(24).F(l.Jd);
                                  null != l.Vc && h.l(32).F(l.Vc);
                                  return h;
                                };
                                return q;
                              })();
                              v.bi = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.value = "";
                                q.prototype.checked = !1;
                                q.prototype.hidden = !1;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.value && h.l(10).M(l.value);
                                  null != l.checked && h.l(16).Fa(l.checked);
                                  null != l.hidden && h.l(24).Fa(l.hidden);
                                  return h;
                                };
                                return q;
                              })();
                              v.TouchEvent = (function () {
                                function q(l) {
                                  this.touches = [];
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.touches = f.ta;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  if (null != l.touches && l.touches.length)
                                    for (var p = 0; p < l.touches.length; ++p)
                                      g.X.T.N.R.O.TouchEvent.Ci.encode(
                                        l.touches[p],
                                        h.l(10).K()
                                      ).L();
                                  return h;
                                };
                                q.Ci = (function () {
                                  function l(h) {
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.id = "";
                                  l.prototype.x = 0;
                                  l.prototype.y = 0;
                                  l.prototype.force = 0;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.id && p.l(10).M(h.id);
                                    null != h.x && p.l(21).Pa(h.x);
                                    null != h.y && p.l(29).Pa(h.y);
                                    null != h.force && p.l(37).Pa(h.force);
                                    return p;
                                  };
                                  return l;
                                })();
                                return q;
                              })();
                              v.Sd = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.Od = null;
                                q.prototype.Pd = null;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.Od &&
                                    g.X.T.N.R.O.Sd.bg
                                      .encode(l.Od, h.l(10).K())
                                      .L();
                                  null != l.Pd &&
                                    g.X.T.N.R.O.Sd.bg
                                      .encode(l.Pd, h.l(18).K())
                                      .L();
                                  return h;
                                };
                                q.bg = (function () {
                                  function l(h) {
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.level = 0;
                                  l.prototype.x = 0;
                                  l.prototype.y = 0;
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.level && p.l(13).Pa(h.level);
                                    null != h.x && p.l(16).F(h.x);
                                    null != h.y && p.l(24).F(h.y);
                                    return p;
                                  };
                                  return l;
                                })();
                                return q;
                              })();
                              v.yi = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.width = 0;
                                q.prototype.height = 0;
                                q.prototype.ib = 0;
                                q.prototype.hb = 0;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.width && h.l(8).F(l.width);
                                  null != l.height && h.l(16).F(l.height);
                                  null != l.ib && h.l(24).F(l.ib);
                                  null != l.hb && h.l(32).F(l.hb);
                                  return h;
                                };
                                return q;
                              })();
                              v.si = (function () {
                                function q(l) {
                                  this.Na = [];
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.method = "";
                                q.prototype.Na = f.ta;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.method && h.l(10).M(l.method);
                                  if (null != l.Na && l.Na.length)
                                    for (var p = 0; p < l.Na.length; ++p)
                                      h.l(18).M(l.Na[p]);
                                  return h;
                                };
                                return q;
                              })();
                              v.ui = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.ah = "";
                                q.prototype.value = "";
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.ah && h.l(10).M(l.ah);
                                  null != l.value && h.l(18).M(l.value);
                                  return h;
                                };
                                return q;
                              })();
                              v.Zf = (function () {
                                function q(l) {
                                  this.Ua = [];
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.Ua = f.ta;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  if (null != l.Ua && l.Ua.length)
                                    for (var p = 0; p < l.Ua.length; ++p)
                                      g.X.T.N.R.O.Zf.li
                                        .encode(l.Ua[p], h.l(10).K())
                                        .L();
                                  return h;
                                };
                                q.li = (function () {
                                  function l(h) {
                                    if (h)
                                      for (
                                        var p = Object.keys(h), u = 0;
                                        u < p.length;
                                        ++u
                                      )
                                        null != h[p[u]] &&
                                          (this[p[u]] = h[p[u]]);
                                  }
                                  l.prototype.id = 0;
                                  l.prototype.key = "";
                                  l.prototype.jd = !1;
                                  l.prototype.Rb = "";
                                  l.create = function (h) {
                                    return new l(h);
                                  };
                                  l.encode = function (h, p) {
                                    p || (p = e.create());
                                    null != h.id && p.l(8).F(h.id);
                                    null != h.key && p.l(18).M(h.key);
                                    null != h.jd && p.l(24).Fa(h.jd);
                                    null != h.Rb && p.l(34).M(h.Rb);
                                    return p;
                                  };
                                  return l;
                                })();
                                return q;
                              })();
                              v.gi = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.width = 0;
                                q.prototype.height = 0;
                                q.prototype.orientation = 0;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.width && h.l(8).F(l.width);
                                  null != l.height && h.l(16).F(l.height);
                                  null != l.orientation &&
                                    h.l(24).F(l.orientation);
                                  return h;
                                };
                                return q;
                              })();
                              v.ji = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.code = "";
                                q.prototype.ng = "";
                                q.prototype.stack = "";
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.code && h.l(10).M(l.code);
                                  null != l.ng && h.l(18).M(l.ng);
                                  null != l.stack && h.l(26).M(l.stack);
                                  return h;
                                };
                                return q;
                              })();
                              v.ki = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.hash = "";
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.hash && h.l(10).M(l.hash);
                                  return h;
                                };
                                return q;
                              })();
                              v.ii = (function () {
                                var q = {},
                                  l = Object.create(q);
                                l[(q[0] = "mousemove")] = 0;
                                l[(q[1] = "mouseup")] = 1;
                                l[(q[2] = "mousedown")] = 2;
                                l[(q[3] = "click")] = 3;
                                l[(q[4] = "scroll")] = 4;
                                l[(q[5] = "windowblur")] = 5;
                                l[(q[6] = "windowfocus")] = 6;
                                l[(q[7] = "focus")] = 7;
                                l[(q[8] = "blur")] = 8;
                                l[(q[9] = "eof")] = 9;
                                l[(q[10] = "selection")] = 10;
                                l[(q[11] = "change")] = 11;
                                l[(q[12] = "input")] = 12;
                                l[(q[13] = "touchmove")] = 13;
                                l[(q[14] = "touchstart")] = 14;
                                l[(q[15] = "touchend")] = 15;
                                l[(q[16] = "touchcancel")] = 16;
                                l[(q[17] = "touchforcechange")] = 17;
                                l[(q[18] = "canvasMethod")] = 18;
                                l[(q[19] = "canvasProperty")] = 19;
                                l[(q[20] = "zoom")] = 20;
                                l[(q[21] = "resize")] = 21;
                                l[(q[22] = "mediaMethod")] = 22;
                                l[(q[23] = "mediaProperty")] = 23;
                                l[(q[24] = "keystroke")] = 24;
                                l[(q[25] = "deviceRotation")] = 25;
                                l[(q[26] = "fatalError")] = 26;
                                l[(q[27] = "hashchange")] = 27;
                                return l;
                              })();
                              v.vi = (function () {
                                function q(l) {
                                  this.Fb = [];
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.Fb = f.ta;
                                q.prototype.Ga = 0;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  if (null != l.Fb && l.Fb.length)
                                    for (var p = 0; p < l.Fb.length; ++p)
                                      g.X.T.N.R.O.Wh.encode(
                                        l.Fb[p],
                                        h.l(10).K()
                                      ).L();
                                  null != l.Ga && h.l(16).F(l.Ga);
                                  return h;
                                };
                                return q;
                              })();
                              v.Wh = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.id = 0;
                                q.prototype.x = 0;
                                q.prototype.y = 0;
                                q.prototype.width = 0;
                                q.prototype.height = 0;
                                q.prototype.Ga = 0;
                                q.prototype.Te = 0;
                                q.prototype.Jb = 0;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.id && h.l(8).l(l.id);
                                  null != l.x && h.l(16).F(l.x);
                                  null != l.y && h.l(24).F(l.y);
                                  null != l.width && h.l(32).F(l.width);
                                  null != l.height && h.l(40).F(l.height);
                                  null != l.Ga && h.l(48).F(l.Ga);
                                  null != l.Te && h.l(61).Pa(l.Te);
                                  null != l.Jb && h.l(64).F(l.Jb);
                                  return h;
                                };
                                return q;
                              })();
                              v.Vh = (function () {
                                function q(l) {
                                  this.Gb = [];
                                  this.Yb = [];
                                  this.Ub = [];
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.id = 0;
                                q.prototype.cf = "";
                                q.prototype.bf = "";
                                q.prototype.Gb = f.ta;
                                q.prototype.Yb = f.ta;
                                q.prototype.lf = "";
                                q.prototype.Jb = 0;
                                q.prototype.Ub = f.ta;
                                q.prototype.Of = "";
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.id && h.l(8).l(l.id);
                                  null != l.cf && h.l(18).M(l.cf);
                                  null != l.bf && h.l(26).M(l.bf);
                                  if (null != l.Gb && l.Gb.length)
                                    for (var p = 0; p < l.Gb.length; ++p)
                                      g.X.T.N.R.O.Uh.encode(
                                        l.Gb[p],
                                        h.l(34).K()
                                      ).L();
                                  if (null != l.Yb && l.Yb.length)
                                    for (p = 0; p < l.Yb.length; ++p)
                                      g.X.T.N.R.O.Yh.encode(
                                        l.Yb[p],
                                        h.l(42).K()
                                      ).L();
                                  null != l.lf && h.l(50).M(l.lf);
                                  null != l.Jb && h.l(56).F(l.Jb);
                                  if (null != l.Ub && l.Ub.length)
                                    for (p = 0; p < l.Ub.length; ++p)
                                      g.X.T.N.R.O.Xh.encode(
                                        l.Ub[p],
                                        h.l(66).K()
                                      ).L();
                                  null != l.Of && h.l(74).M(l.Of);
                                  return h;
                                };
                                return q;
                              })();
                              v.Uh = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.name = "";
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.name && h.l(10).M(l.name);
                                  return h;
                                };
                                return q;
                              })();
                              v.Yh = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.name = "";
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.name && h.l(10).M(l.name);
                                  return h;
                                };
                                return q;
                              })();
                              v.Xh = (function () {
                                function q(l) {
                                  if (l)
                                    for (
                                      var h = Object.keys(l), p = 0;
                                      p < h.length;
                                      ++p
                                    )
                                      null != l[h[p]] && (this[h[p]] = l[h[p]]);
                                }
                                q.prototype.name = "";
                                q.prototype.position = 0;
                                q.create = function (l) {
                                  return new q(l);
                                };
                                q.encode = function (l, h) {
                                  h || (h = e.create());
                                  null != l.name && h.l(10).M(l.name);
                                  null != l.position && h.l(16).F(l.position);
                                  return h;
                                };
                                return q;
                              })();
                              return v;
                            })();
                            return t;
                          })();
                          return r;
                        })();
                        return n;
                      })();
                      return m;
                    })());
                },
                function (c, b, d) {
                  function e() {
                    f.Kh.Aa();
                    f.ag.Aa(f.ai);
                    f.xi.Aa(f.$h);
                  }
                  var f = b;
                  f.tl = "minimal";
                  f.ag = d(2);
                  f.ai = d(14);
                  f.xi = d(3);
                  f.$h = d(15);
                  f.Kh = d(0);
                  f.bm = d(16);
                  f.jh = d(18);
                  f.vl = e;
                  e();
                },
                function (c) {
                  c.exports = function (b, d) {
                    for (
                      var e = Array(arguments.length - 1), f = 0, g = 2, k = !0;
                      g < arguments.length;

                    )
                      e[f++] = arguments[g++];
                    return new Promise(function (m, n) {
                      e[f] = function (r) {
                        if (k)
                          if (((k = !1), r)) n(r);
                          else {
                            for (
                              var t = Array(arguments.length - 1), v = 0;
                              v < t.length;

                            )
                              t[v++] = arguments[v];
                            m.apply(null, t);
                          }
                      };
                      try {
                        b.apply(d || null, e);
                      } catch (r) {
                        k && ((k = !1), n(r));
                      }
                    });
                  };
                },
                function (c, b) {
                  b.length = function (g) {
                    var k = g.length;
                    if (!k) return 0;
                    for (var m = 0; 1 < --k % 4 && "=" === g.charAt(k); ) ++m;
                    return Math.ceil(3 * g.length) / 4 - m;
                  };
                  for (var d = Array(64), e = Array(123), f = 0; 64 > f; )
                    e[
                      (d[f] =
                        26 > f
                          ? f + 65
                          : 52 > f
                          ? f + 71
                          : 62 > f
                          ? f - 4
                          : (f - 59) | 43)
                    ] = f++;
                  b.encode = function (g, k, m) {
                    for (var n, r = null, t = [], v = 0, q = 0; k < m; ) {
                      var l = g[k++];
                      switch (q) {
                        case 0:
                          t[v++] = d[l >> 2];
                          n = (3 & l) << 4;
                          q = 1;
                          break;
                        case 1:
                          t[v++] = d[n | (l >> 4)];
                          n = (15 & l) << 2;
                          q = 2;
                          break;
                        case 2:
                          (t[v++] = d[n | (l >> 6)]),
                            (t[v++] = d[63 & l]),
                            (q = 0);
                      }
                      8191 < v &&
                        ((r || (r = [])).push(
                          String.fromCharCode.apply(String, t)
                        ),
                        (v = 0));
                    }
                    q &&
                      ((t[v++] = d[n]),
                      (t[v++] = 61),
                      1 === q && (t[v++] = 61));
                    return r
                      ? (v &&
                          r.push(
                            String.fromCharCode.apply(String, t.slice(0, v))
                          ),
                        r.join(""))
                      : String.fromCharCode.apply(String, t.slice(0, v));
                  };
                  b.decode = function (g, k, m) {
                    for (var n, r = m, t = 0, v = 0; v < g.length; ) {
                      var q = g.charCodeAt(v++);
                      if (61 === q && 1 < t) break;
                      if (void 0 === (q = e[q]))
                        throw Error("invalid encoding");
                      switch (t) {
                        case 0:
                          n = q;
                          t = 1;
                          break;
                        case 1:
                          k[m++] = (n << 2) | ((48 & q) >> 4);
                          n = q;
                          t = 2;
                          break;
                        case 2:
                          k[m++] = ((15 & n) << 4) | ((60 & q) >> 2);
                          n = q;
                          t = 3;
                          break;
                        case 3:
                          (k[m++] = ((3 & n) << 6) | q), (t = 0);
                      }
                    }
                    if (1 === t) throw Error("invalid encoding");
                    return m - r;
                  };
                  b.test = function (g) {
                    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
                      g
                    );
                  };
                },
                function (c) {
                  function b() {
                    this.Eb = {};
                  }
                  c.exports = b;
                  b.prototype.D = function (d, e, f) {
                    (this.Eb[d] || (this.Eb[d] = [])).push({
                      sb: e,
                      b: f || this,
                    });
                    return this;
                  };
                  b.prototype.ya = function (d, e) {
                    if (void 0 === d) this.Eb = {};
                    else if (void 0 === e) this.Eb[d] = [];
                    else
                      for (var f = this.Eb[d], g = 0; g < f.length; )
                        f[g].sb === e ? f.splice(g, 1) : ++g;
                    return this;
                  };
                  b.prototype.cj = function (d) {
                    var e = this.Eb[d];
                    if (e) {
                      for (var f = [], g = 1; g < arguments.length; )
                        f.push(arguments[g++]);
                      for (g = 0; g < e.length; ) e[g].sb.apply(e[g++].b, f);
                    }
                    return this;
                  };
                },
                function (c) {
                  function b(k) {
                    "undefined" != typeof Float32Array
                      ? (function () {
                          function m(h, p, u) {
                            v[0] = h;
                            p[u] = q[0];
                            p[u + 1] = q[1];
                            p[u + 2] = q[2];
                            p[u + 3] = q[3];
                          }
                          function n(h, p, u) {
                            v[0] = h;
                            p[u] = q[3];
                            p[u + 1] = q[2];
                            p[u + 2] = q[1];
                            p[u + 3] = q[0];
                          }
                          function r(h, p) {
                            q[0] = h[p];
                            q[1] = h[p + 1];
                            q[2] = h[p + 2];
                            q[3] = h[p + 3];
                            return v[0];
                          }
                          function t(h, p) {
                            q[3] = h[p];
                            q[2] = h[p + 1];
                            q[1] = h[p + 2];
                            q[0] = h[p + 3];
                            return v[0];
                          }
                          var v = new Float32Array([-0]),
                            q = new Uint8Array(v.buffer),
                            l = 128 === q[3];
                          k.Oh = l ? m : n;
                          k.Yk = l ? n : m;
                          k.dh = l ? r : t;
                          k.nk = l ? t : r;
                        })()
                      : (function () {
                          function m(r, t, v, q) {
                            var l = 0 > t ? 1 : 0;
                            l && (t = -t);
                            if (0 === t) r(0 < 1 / t ? 0 : 2147483648, v, q);
                            else if (isNaN(t)) r(2143289344, v, q);
                            else if (3.4028234663852886e38 < t)
                              r(((l << 31) | 2139095040) >>> 0, v, q);
                            else if (1.1754943508222875e-38 > t)
                              r(
                                ((l << 31) |
                                  Math.round(t / 1.401298464324817e-45)) >>>
                                  0,
                                v,
                                q
                              );
                            else {
                              var h = Math.floor(Math.log(t) / Math.LN2);
                              r(
                                ((l << 31) |
                                  ((h + 127) << 23) |
                                  (8388607 &
                                    Math.round(
                                      t * Math.pow(2, -h) * 8388608
                                    ))) >>>
                                  0,
                                v,
                                q
                              );
                            }
                          }
                          function n(r, t, v) {
                            v = r(t, v);
                            r = 2 * (v >> 31) + 1;
                            t = (v >>> 23) & 255;
                            v &= 8388607;
                            return 255 === t
                              ? v
                                ? NaN
                                : (1 / 0) * r
                              : 0 === t
                              ? 1.401298464324817e-45 * r * v
                              : r * Math.pow(2, t - 150) * (v + 8388608);
                          }
                          k.Oh = m.bind(null, d);
                          k.Yk = m.bind(null, e);
                          k.dh = n.bind(null, f);
                          k.nk = n.bind(null, g);
                        })();
                    "undefined" != typeof Float64Array
                      ? (function () {
                          function m(h, p, u) {
                            v[0] = h;
                            p[u] = q[0];
                            p[u + 1] = q[1];
                            p[u + 2] = q[2];
                            p[u + 3] = q[3];
                            p[u + 4] = q[4];
                            p[u + 5] = q[5];
                            p[u + 6] = q[6];
                            p[u + 7] = q[7];
                          }
                          function n(h, p, u) {
                            v[0] = h;
                            p[u] = q[7];
                            p[u + 1] = q[6];
                            p[u + 2] = q[5];
                            p[u + 3] = q[4];
                            p[u + 4] = q[3];
                            p[u + 5] = q[2];
                            p[u + 6] = q[1];
                            p[u + 7] = q[0];
                          }
                          function r(h, p) {
                            q[0] = h[p];
                            q[1] = h[p + 1];
                            q[2] = h[p + 2];
                            q[3] = h[p + 3];
                            q[4] = h[p + 4];
                            q[5] = h[p + 5];
                            q[6] = h[p + 6];
                            q[7] = h[p + 7];
                            return v[0];
                          }
                          function t(h, p) {
                            q[7] = h[p];
                            q[6] = h[p + 1];
                            q[5] = h[p + 2];
                            q[4] = h[p + 3];
                            q[3] = h[p + 4];
                            q[2] = h[p + 5];
                            q[1] = h[p + 6];
                            q[0] = h[p + 7];
                            return v[0];
                          }
                          var v = new Float64Array([-0]),
                            q = new Uint8Array(v.buffer),
                            l = 128 === q[7];
                          k.Xk = l ? m : n;
                          k.Wk = l ? n : m;
                          k.mk = l ? r : t;
                          k.lk = l ? t : r;
                        })()
                      : (function () {
                          function m(r, t, v, q, l, h) {
                            var p = 0 > q ? 1 : 0;
                            p && (q = -q);
                            if (0 === q)
                              r(0, l, h + t),
                                r(0 < 1 / q ? 0 : 2147483648, l, h + v);
                            else if (isNaN(q))
                              r(0, l, h + t), r(2146959360, l, h + v);
                            else if (1.7976931348623157e308 < q)
                              r(0, l, h + t),
                                r(((p << 31) | 2146435072) >>> 0, l, h + v);
                            else if (2.2250738585072014e-308 > q)
                              (q /= 4.9e-324),
                                r(q >>> 0, l, h + t),
                                r(
                                  ((p << 31) | (q / 4294967296)) >>> 0,
                                  l,
                                  h + v
                                );
                            else {
                              var u = Math.floor(Math.log(q) / Math.LN2);
                              1024 === u && (u = 1023);
                              q *= Math.pow(2, -u);
                              r((4503599627370496 * q) >>> 0, l, h + t);
                              r(
                                ((p << 31) |
                                  ((u + 1023) << 20) |
                                  ((1048576 * q) & 1048575)) >>>
                                  0,
                                l,
                                h + v
                              );
                            }
                          }
                          function n(r, t, v, q, l) {
                            t = r(q, l + t);
                            q = r(q, l + v);
                            r = 2 * (q >> 31) + 1;
                            v = (q >>> 20) & 2047;
                            t = 4294967296 * (1048575 & q) + t;
                            return 2047 === v
                              ? t
                                ? NaN
                                : (1 / 0) * r
                              : 0 === v
                              ? 4.9e-324 * r * t
                              : r *
                                Math.pow(2, v - 1075) *
                                (t + 4503599627370496);
                          }
                          k.Xk = m.bind(null, d, 0, 4);
                          k.Wk = m.bind(null, e, 4, 0);
                          k.mk = n.bind(null, f, 0, 4);
                          k.lk = n.bind(null, g, 4, 0);
                        })();
                    return k;
                  }
                  function d(k, m, n) {
                    m[n] = 255 & k;
                    m[n + 1] = (k >>> 8) & 255;
                    m[n + 2] = (k >>> 16) & 255;
                    m[n + 3] = k >>> 24;
                  }
                  function e(k, m, n) {
                    m[n] = k >>> 24;
                    m[n + 1] = (k >>> 16) & 255;
                    m[n + 2] = (k >>> 8) & 255;
                    m[n + 3] = 255 & k;
                  }
                  function f(k, m) {
                    return (
                      (k[m] |
                        (k[m + 1] << 8) |
                        (k[m + 2] << 16) |
                        (k[m + 3] << 24)) >>>
                      0
                    );
                  }
                  function g(k, m) {
                    return (
                      ((k[m] << 24) |
                        (k[m + 1] << 16) |
                        (k[m + 2] << 8) |
                        k[m + 3]) >>>
                      0
                    );
                  }
                  c.exports = b(b);
                },
                function (c) {
                  c.exports = function () {
                    return null;
                  };
                },
                function (c, b) {
                  b.length = function (d) {
                    for (var e = 0, f, g = 0; g < d.length; ++g)
                      (f = d.charCodeAt(g)),
                        128 > f
                          ? (e += 1)
                          : 2048 > f
                          ? (e += 2)
                          : 55296 == (64512 & f) &&
                            56320 == (64512 & d.charCodeAt(g + 1))
                          ? (++g, (e += 4))
                          : (e += 3);
                    return e;
                  };
                  b.read = function (d, e, f) {
                    if (1 > f - e) return "";
                    for (var g, k = null, m = [], n = 0; e < f; )
                      (g = d[e++]),
                        128 > g
                          ? (m[n++] = g)
                          : 191 < g && 224 > g
                          ? (m[n++] = ((31 & g) << 6) | (63 & d[e++]))
                          : 239 < g && 365 > g
                          ? ((g =
                              (((7 & g) << 18) |
                                ((63 & d[e++]) << 12) |
                                ((63 & d[e++]) << 6) |
                                (63 & d[e++])) -
                              65536),
                            (m[n++] = 55296 + (g >> 10)),
                            (m[n++] = 56320 + (1023 & g)))
                          : (m[n++] =
                              ((15 & g) << 12) |
                              ((63 & d[e++]) << 6) |
                              (63 & d[e++])),
                        8191 < n &&
                          ((k || (k = [])).push(
                            String.fromCharCode.apply(String, m)
                          ),
                          (n = 0));
                    return k
                      ? (n &&
                          k.push(
                            String.fromCharCode.apply(String, m.slice(0, n))
                          ),
                        k.join(""))
                      : String.fromCharCode.apply(String, m.slice(0, n));
                  };
                  b.write = function (d, e, f) {
                    for (var g, k, m = f, n = 0; n < d.length; ++n)
                      (g = d.charCodeAt(n)),
                        128 > g
                          ? (e[f++] = g)
                          : (2048 > g
                              ? (e[f++] = (g >> 6) | 192)
                              : (55296 == (64512 & g) &&
                                56320 == (64512 & (k = d.charCodeAt(n + 1)))
                                  ? ((g =
                                      65536 + ((1023 & g) << 10) + (1023 & k)),
                                    ++n,
                                    (e[f++] = (g >> 18) | 240),
                                    (e[f++] = ((g >> 12) & 63) | 128))
                                  : (e[f++] = (g >> 12) | 224),
                                (e[f++] = ((g >> 6) & 63) | 128)),
                            (e[f++] = (63 & g) | 128));
                    return f - m;
                  };
                },
                function (c) {
                  c.exports = function (b, d, e) {
                    var f = e || 8192,
                      g = f >>> 1,
                      k = null,
                      m = f;
                    return function (n) {
                      if (1 > n || n > g) return b(n);
                      m + n > f && ((k = b(f)), (m = 0));
                      n = d.call(k, m, (m += n));
                      7 & m && (m = 1 + (7 | m));
                      return n;
                    };
                  };
                },
                function (c, b, d) {
                  function e(n, r) {
                    this.aa = n >>> 0;
                    this.ea = r >>> 0;
                  }
                  c.exports = e;
                  var f = d(0),
                    g = (e.jm = new e(0, 0));
                  g.Bh = function () {
                    return 0;
                  };
                  g.Rh = g.Qh = function () {
                    return this;
                  };
                  g.length = function () {
                    return 1;
                  };
                  var k = (e.al = "\x00\x00\x00\x00\x00\x00\x00\x00");
                  e.ue = function (n) {
                    if (0 === n) return g;
                    var r = 0 > n;
                    r && (n = -n);
                    var t = n >>> 0;
                    n = ((n - t) / 4294967296) >>> 0;
                    r &&
                      ((n = ~n >>> 0),
                      (t = ~t >>> 0),
                      4294967295 < ++t &&
                        ((t = 0), 4294967295 < ++n && (n = 0)));
                    return new e(t, n);
                  };
                  e.from = function (n) {
                    if ("number" == typeof n) return e.ue(n);
                    if (f.Ne(n)) {
                      if (!f.La) return e.ue(parseInt(n, 10));
                      n = f.La.Cl(n);
                    }
                    return n.low || n.high
                      ? new e(n.low >>> 0, n.high >>> 0)
                      : g;
                  };
                  e.prototype.Bh = function (n) {
                    if (!n && this.ea >>> 31) {
                      n = (1 + ~this.aa) >>> 0;
                      var r = ~this.ea >>> 0;
                      n || (r = (r + 1) >>> 0);
                      return -(n + 4294967296 * r);
                    }
                    return this.aa + 4294967296 * this.ea;
                  };
                  var m = String.prototype.charCodeAt;
                  e.oj = function (n) {
                    return n === k
                      ? g
                      : new e(
                          (m.call(n, 0) |
                            (m.call(n, 1) << 8) |
                            (m.call(n, 2) << 16) |
                            (m.call(n, 3) << 24)) >>>
                            0,
                          (m.call(n, 4) |
                            (m.call(n, 5) << 8) |
                            (m.call(n, 6) << 16) |
                            (m.call(n, 7) << 24)) >>>
                            0
                        );
                  };
                  e.prototype.Gk = function () {
                    return String.fromCharCode(
                      255 & this.aa,
                      (this.aa >>> 8) & 255,
                      (this.aa >>> 16) & 255,
                      this.aa >>> 24,
                      255 & this.ea,
                      (this.ea >>> 8) & 255,
                      (this.ea >>> 16) & 255,
                      this.ea >>> 24
                    );
                  };
                  e.prototype.Rh = function () {
                    var n = this.ea >> 31;
                    this.ea = (((this.ea << 1) | (this.aa >>> 31)) ^ n) >>> 0;
                    this.aa = ((this.aa << 1) ^ n) >>> 0;
                    return this;
                  };
                  e.prototype.Qh = function () {
                    var n = -(1 & this.aa);
                    this.aa = (((this.aa >>> 1) | (this.ea << 31)) ^ n) >>> 0;
                    this.ea = ((this.ea >>> 1) ^ n) >>> 0;
                    return this;
                  };
                  e.prototype.length = function () {
                    var n = this.aa,
                      r = ((this.aa >>> 28) | (this.ea << 4)) >>> 0,
                      t = this.ea >>> 24;
                    return 0 === t
                      ? 0 === r
                        ? 16384 > n
                          ? 128 > n
                            ? 1
                            : 2
                          : 2097152 > n
                          ? 3
                          : 4
                        : 16384 > r
                        ? 128 > r
                          ? 5
                          : 6
                        : 2097152 > r
                        ? 7
                        : 8
                      : 128 > t
                      ? 9
                      : 10;
                  };
                },
                function (c, b, d) {
                  function e() {
                    g.call(this);
                  }
                  function f(m, n, r) {
                    40 > m.length
                      ? k.Qf.write(m, n, r)
                      : n.Jh
                      ? n.Jh(m, r)
                      : n.write(m, r);
                  }
                  c.exports = e;
                  var g = d(2);
                  (e.prototype = Object.create(g.prototype)).constructor = e;
                  var k = d(0);
                  e.Aa = function () {
                    e.cc = k.Fc;
                    e.Vk =
                      k.sa &&
                      k.sa.prototype instanceof Uint8Array &&
                      "set" === k.sa.prototype.set.name
                        ? function (m, n, r) {
                            n.set(m, r);
                          }
                        : function (m, n, r) {
                            if (m.Ui) m.Ui(n, r, 0, m.length);
                            else
                              for (var t = 0; t < m.length; ) n[r++] = m[t++];
                          };
                  };
                  e.prototype.dc = function (m) {
                    k.Ne(m) && (m = k.Gc(m, "base64"));
                    var n = m.length >>> 0;
                    this.l(n);
                    n && this.va(e.Vk, n, m);
                    return this;
                  };
                  e.prototype.M = function (m) {
                    var n = k.sa.byteLength(m);
                    this.l(n);
                    n && this.va(f, n, m);
                    return this;
                  };
                  e.Aa();
                },
                function (c, b, d) {
                  function e(k) {
                    f.call(this, k);
                  }
                  c.exports = e;
                  var f = d(3);
                  (e.prototype = Object.create(f.prototype)).constructor = e;
                  var g = d(0);
                  e.Aa = function () {
                    g.sa && (e.prototype.fg = g.sa.prototype.slice);
                  };
                  e.prototype.M = function () {
                    var k = this.l();
                    return this.$.Rk
                      ? this.$.Rk(
                          this.G,
                          (this.G = Math.min(this.G + k, this.ca))
                        )
                      : this.$.toString(
                          "utf-8",
                          this.G,
                          (this.G = Math.min(this.G + k, this.ca))
                        );
                  };
                  e.Aa();
                },
                function (c, b, d) {
                  b.ll = d(17);
                },
                function (c, b, d) {
                  function e(g) {
                    if ("function" != typeof g)
                      throw TypeError("rpcImpl must be a function");
                    f.Yf.call(this);
                    this.qf = g;
                  }
                  c.exports = e;
                  var f = d(0);
                  (e.prototype = Object.create(f.Yf.prototype)).constructor = e;
                  e.prototype.end = function (g) {
                    this.qf &&
                      (g || this.qf(null, null, null),
                      (this.qf = null),
                      this.cj("end").ya());
                    return this;
                  };
                },
                function (c) {
                  c.exports = {};
                },
              ]);
            } catch (c) {}
          })
        ),
        Ho = {
          Yb: "topics",
          lf: "publicationDate",
          cf: "pageUrlCanonical",
          Of: "updateDate",
          Gb: "authors",
          Vd: "articleInfo",
          Ub: "rubric",
          mf: "publishersHeader",
          Ga: "involvedTime",
          bf: "pageTitle",
          Te: "maxScrolled",
          Jb: "chars",
          Fb: "articleMeta",
        },
        Io = (function () {
          function a(c) {
            this.b = c;
            this.pc = x(
              Ga,
              ac(function (b, d) {
                b[d[1]] = d[0];
                return b;
              }, {})
            )(Ho);
            if ("undefined" === typeof Ff) return this;
            try {
              this.Wa = w(Ff, "ru").T.N.R.O;
            } catch (b) {}
          }
          a.prototype.yh = function (c) {
            var b,
              d = this.ff(c.data);
            return {
              da: fa(this.b)(Ve),
              data: ((b = {}), (b[this.pc[c.type]] = d), b),
            };
          };
          a.prototype.ff = function (c) {
            var b = this;
            return ha(c)
              ? B(D(this.ff, this), c)
              : kc(c)
              ? x(
                  Ga,
                  ac(function (d, e) {
                    var f = e[0];
                    d[b.pc[f] || f] = b.ff(e[1]);
                    return d;
                  }, {})
                )(c)
              : ya(c)
              ? ""
              : c;
          };
          a.prototype.jb = function (c) {
            return this.Wa.sa.encode(this.yh(c)).finish();
          };
          a.prototype.ub = function (c) {
            return new this.b.Blob([c]).size;
          };
          a.prototype.Id = function (c) {
            return [c];
          };
          a.prototype.Ab = function (c) {
            c = this.Wa.Xf.encode({ buffer: B(D(this.yh, this), c) });
            return fd(c.finish());
          };
          a.prototype.isEnabled = function () {
            return this.Wa && Sg(this.b);
          };
          return a;
        })(),
        Wi = (function () {
          function a(c, b, d) {
            this.jg = 0;
            this.ef = 1;
            this.Qd = 5e3;
            this.b = c;
            this.Ja = b;
            this.xf = d;
          }
          a.prototype.Hd = function () {
            this.jg = V(
              this.b,
              x(D(this.flush, this), D(this.Hd, this)),
              this.Qd,
              "b.f"
            );
          };
          a.prototype.send = function (c, b) {
            this.xf(c, b || [], this.ef);
            this.ef += 1;
          };
          a.prototype.push = function () {};
          a.prototype.flush = function () {};
          return a;
        })(),
        Gf,
        Hf =
          ((Gf = (function (a) {
            function c(b, d, e, f) {
              void 0 === f && (f = 0);
              d = a.call(this, b, d, e) || this;
              d.Hf = 0;
              d.bc = 0;
              d.Gf = 0;
              d.buffer = [];
              d.Qd = 2e3;
              d.na = zc(b);
              d.Hd();
              d.Gf = f;
              return d;
            }
            Ca(c, a);
            c.prototype.ug = function (b) {
              return X(Boolean, this.na.ia("ag", b));
            };
            c.prototype.sg = function (b, d) {
              var e = this;
              b(
                mc(C(this.b, "wv2.b.st"), function (f) {
                  e.send(f, d);
                })
              );
            };
            c.prototype.Ck = function (b, d) {
              var e = this;
              ua(this.b, this.jg);
              var f = Math.ceil(this.Ja.ub(d) / 63e4),
                g = this.Ja.Id(d, f);
              E(function (k, m) {
                var n,
                  r = G(
                    {},
                    b,
                    ((n = {}),
                    (n.data = k),
                    (n.partNum = m + 1),
                    (n.end = m + 1 === f),
                    n)
                  );
                n = e.Ja.Ab([r], !1);
                e.sg(n, [r]);
              }, g);
              this.Hd();
            };
            c.prototype.send = function (b, d) {
              this.na.ia("se", d);
              a.prototype.send.call(this, b, d);
            };
            c.xe = function (b, d, e, f, g) {
              c.Wd["" + b + d] ||
                (this.Wd[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
              return this.Wd[d];
            };
            c.prototype.Oj = function () {
              return this.Gf && this.Hf >= this.Gf;
            };
            c.prototype.push = function (b) {
              var d = this;
              if (!this.Oj()) {
                this.na.ia("p", b);
                var e = this.Ja.jb(b),
                  f = this.Ja.ub(e);
                7e5 < f
                  ? this.Ck(b, e)
                  : ((e = this.ug(this.buffer.concat([b]))),
                    (e = M(
                      function (g, k) {
                        return g + d.Ja.ub(d.Ja.jb(k));
                      },
                      0,
                      e
                    )),
                    this.bc + e + f >= 7e5 * 0.7 && this.flush(),
                    this.buffer.push(b),
                    (this.bc += f));
              }
            };
            c.prototype.D = function (b, d) {
              this.na.D(b, d);
            };
            c.prototype.ya = function (b, d) {
              this.na.ya(b, d);
            };
            c.prototype.flush = function () {
              var b = this.buffer.concat(this.ug(this.buffer));
              if (b.length) {
                this.buffer = [];
                this.Hf += this.bc;
                this.bc = 0;
                var d = this.Ja.Ab(b);
                this.sg(d, b);
              }
            };
            return c;
          })(Wi)),
          (Gf.Wd = {}),
          Gf),
        bd,
        If = ((bd = {}), (bd[1] = 500), (bd[2] = 500), (bd[3] = 0), bd),
        Jf = (function () {
          function a(c) {
            var b,
              d = this;
            this.id = "a";
            this.Ie = !1;
            this.jc = {};
            this.Vb = {
              "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(
                " "
              ),
              Wg: ["article"],
            };
            this.Mf = ((b = {}), (b.Answer = 3), (b.Review = 2), b);
            this.Ti = z(function (e, f) {
              vb(
                d.b,
                "Warning: content has only " +
                  f.chars +
                  " chars. Required " +
                  If[f.type],
                f
              );
            });
            this.b = c;
            this.root = Hb(c);
          }
          a.prototype.tb = function (c) {
            return c.element;
          };
          a.prototype.vg = function (c, b) {
            var d = this,
              e;
            C(this.b, "P.s." + b, function () {
              e = d.jc[b].call(d, c);
            })();
            return e;
          };
          a.prototype.ik = function (c) {
            var b = G({}, c);
            this.Ie &&
              !b.id &&
              L(c.type, [3, 2]) &&
              ((c = F(", ", B(W("name"), b.authors || []))),
              (b.pageTitle = c + ": " + b.pageTitle));
            b.pageTitle || (b.pageTitle = this.Dj(b.ic));
            b.pageUrlCanonical ||
              ((c = b.id),
              (b.pageUrlCanonical = (
                "string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)
              )
                ? b.id
                : this.Aj()));
            b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
            return b;
          };
          a.prototype.Qa = function (c) {
            var b = this,
              d = {},
              e = this.tb(c);
            if (!e) return null;
            d.type = c.type;
            E(function (g) {
              d[g] = b.vg(c, g);
            }, Aa(this.jc));
            var f = fa(this.b);
            d.stamp = f(Ve);
            d.element = c.element;
            d.ic = e;
            d = this.ik(d);
            d.id = d.id ? Lc(d.id) : 1;
            d.update = D(this.vg, this, c);
            return d;
          };
          a.prototype.Dj = function (c) {
            for (var b = 1; 5 >= b; b += 1) {
              var d = Pa(Bb(this.b, c, "h" + b));
              if (d) return d;
            }
          };
          a.prototype.Aj = function () {
            var c = Bb(this.b, this.root, '[rel="canonical"]');
            if (c) return c.href;
          };
          a.prototype.Ag = function () {
            return 1;
          };
          a.prototype.Yc = function () {
            return [];
          };
          a.prototype.jj = function () {
            var c = this,
              b = this.Yc(),
              d = 1;
            return M(
              function (e, f) {
                var g = c.Qa({ element: f, type: c.Ag(f) }) || [];
                ha(g) || (g = [g]);
                g = M(
                  function (k, m) {
                    var n = k.values,
                      r = k.Eg;
                    m && m.chars > If[m.type] && !L(m.id, r)
                      ? (n.push(m), r.push(m.id))
                      : m && m.chars <= If[m.type] && c.Ti(m.id, m);
                    return { values: n, Eg: r };
                  },
                  { values: [], Eg: B(W("id"), e) },
                  g
                ).values;
                return e.concat(
                  B(function (k) {
                    var m;
                    k = G(
                      ((m = { index: d, wf: !1 }), (m.involvedTime = 0), m),
                      k
                    );
                    d += 1;
                    return k;
                  }, g)
                );
              },
              [],
              b
            );
          };
          return a;
        })(),
        Xi = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "j";
            d.Ie = !0;
            d.ig = F(",", [
              'script[type="application/ld+json"]',
              'script[type="application/json+ld"]',
              'script[type="ld+json"]',
              'script[type="json+ld"]',
            ]);
            d.jc =
              ((b = {}),
              (b.id = function (e) {
                var f = e.data["@id"];
                e = e.data.mainEntity || e.data.mainEntityOfPage;
                !f && e && (f = e["@id"]);
                return f;
              }),
              (b.chars = function (e) {
                return "string" === typeof e.data.text
                  ? e.data.text.length
                  : this.tb(e).innerText.length;
              }),
              (b.authors = function (e) {
                var f = [];
                f = f.concat(this.Xc(e.data, "author"));
                f = f.concat(this.Xc(e.data.mainEntity, "author"));
                return f.concat(this.Xc(e.data.mainEntityOfPage, "author"));
              }),
              (b.pageTitle = function (e) {
                var f = e.data.headline || "";
                e.data.ql && (f += " " + e.data.alternativeHeadline);
                "" === f &&
                  (e.data.name
                    ? (f = e.data.name)
                    : e.data.itemReviewed && (f = e.data.itemReviewed));
                3 === e.type &&
                  e.data.parentItem &&
                  (f = e.data.parentItem.text);
                return f;
              }),
              (b.updateDate = function (e) {
                return e.data.dateModified || "";
              }),
              (b.publicationDate = function (e) {
                return e.data.datePublished || "";
              }),
              (b.pageUrlCanonical = function (e) {
                return e.data.url;
              }),
              (b.topics = function (e) {
                return this.Xc(e.data, "about", ["name", "alternateName"]);
              }),
              (b.rubric = function (e) {
                var f = this,
                  g = this.tb(e);
                e = X(
                  Boolean,
                  B(function (k) {
                    if ((k = pb(f.b, k.innerText))) {
                      var m = f.wg(k);
                      if (m)
                        return M(
                          function (n, r) {
                            return n
                              ? n
                              : "BreadcrumbList" === r["@type"]
                              ? r
                              : n;
                          },
                          null,
                          m
                        );
                      if ("BreadcrumbList" === k["@type"]) return k;
                    }
                    return null;
                  }, [e.element].concat(
                    ka(
                      zb(
                        this.ig,
                        this.b,
                        document.body === g ? document.documentElement : g
                      )
                    )
                  ))
                );
                return e.length && ((e = e[0].itemListElement), ha(e))
                  ? X(
                      Boolean,
                      B(function (k) {
                        return k.item && !f.b.isNaN(k.position)
                          ? {
                              name: k.item.name || k.name,
                              position: k.position,
                            }
                          : null;
                      }, e)
                    )
                  : [];
              }),
              b);
            return d;
          }
          Ca(c, a);
          c.prototype.Xc = function (b, d, e) {
            void 0 === e && (e = ["name"]);
            if (!b || !b[d]) return [];
            b = ha(b[d]) ? b[d] : [b[d]];
            b = X(
              Boolean,
              B(function (f) {
                return f
                  ? "string" === typeof f
                    ? f
                    : M(
                        function (g, k) {
                          return g || f[k];
                        },
                        null,
                        e
                      )
                  : null;
              }, b)
            );
            return B(function (f) {
              var g;
              return (g = {}), (g.name = f), g;
            }, b);
          };
          c.prototype.tb = function (b) {
            var d = b.element,
              e = b.data["@id"],
              f = b.data.url;
            b = null;
            f && "string" === typeof f && (b = this.og(f));
            !b && e && "string" === typeof e && (b = this.og(e));
            b ||
              ((b = e = d.parentNode),
              !Cb("head", this.b, d) && e && 0 !== e.innerText.length) ||
              (b = this.b.document.body);
            return b;
          };
          c.prototype.og = function (b) {
            try {
              var d = Fb(this.b, b).hash;
              if (d) {
                var e = Bb(this.b, this.b.document.body, d);
                if (e) return e;
              }
            } catch (f) {}
            return null;
          };
          c.prototype.df = function (b) {
            return this.Mf[b["@type"]] || 1;
          };
          c.prototype.Qa = function (b) {
            var d = this,
              e = b.element;
            if (
              !b.data &&
              ((b.data = pb(this.b, e.innerText)),
              !b.data ||
                (!/schema\.org/.test(b.data["@context"]) && !ha(b.data)))
            )
              return null;
            var f = this.wg(b.data);
            if (f)
              return B(function (k) {
                if (!L(k["@type"], d.Vb["schema.org"])) return null;
                k = { element: e, data: k, type: d.df(k) };
                return a.prototype.Qa.call(d, k);
              }, f);
            if ("QAPage" === b.data["@type"]) {
              var g = b.data.mainEntity || b.data.mainEntityOfPage;
              if (!g) return null;
            }
            "Question" === b.data["@type"] && (g = b.data);
            return g
              ? ((b = Eb(A(g, w), ["acceptedAnswer", "suggestedAnswer"])),
                B(function (k) {
                  var m;
                  if (!k || !L(k["@type"], d.Vb["schema.org"])) return null;
                  k = {
                    element: e,
                    type: d.df(k),
                    data: G(((m = {}), (m.parentItem = g), m), k),
                  };
                  return a.prototype.Qa.call(d, k);
                }, b))
              : L(b.data["@type"], this.Vb["schema.org"])
              ? a.prototype.Qa.call(this, G(b, { type: this.df(b.data) }))
              : null;
          };
          c.prototype.Yc = function () {
            return zb(this.ig, this.b, this.root);
          };
          c.prototype.wg = function (b) {
            return (ha(b) && b) || (b && ha(b["@graph"]) && b["@graph"]);
          };
          return c;
        })(Jf),
        Kf = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "s";
            d.Ie = !0;
            d.Mk = oa(
              "exec",
              new RegExp("schema.org\\/(" + F("|", Aa(d.Mf)) + ")$")
            );
            d.jc =
              ((b = {}),
              (b.id = function (e) {
                e = e.element;
                var f = Sa(this.b, e, "identifier");
                return f
                  ? Pa(f)
                  : (f = Sa(this.b, e, "mainEntityOfPage")) &&
                    f.getAttribute("itemid")
                  ? f.getAttribute("itemid")
                  : null;
              }),
              (b.chars = function (e) {
                var f = 0;
                e = e.element;
                for (
                  var g = [
                      "articleBody",
                      "reviewBody",
                      "recipeInstructions",
                      "description",
                      "text",
                    ],
                    k = 0;
                  k < g.length;
                  k += 1
                ) {
                  var m = Sa(this.b, e, g[k]);
                  if (m) {
                    f = Pa(m).length;
                    break;
                  }
                }
                0 === f && e.innerText && (f += e.innerText.length);
                return f;
              }),
              (b.topics = function (e) {
                var f = this,
                  g = Vc(this.b, e.element, "about");
                return B(function (k) {
                  var m = { name: Pa(k) };
                  if ((g = Sa(f.b, k, "name"))) m.name = Pa(g);
                  return m;
                }, g);
              }),
              (b.rubric = function (e) {
                var f = this;
                (e = Bb(
                  this.b,
                  e.element,
                  '[itemtype$="schema.org/BreadcrumbList"]'
                )) ||
                  (e = Bb(
                    this.b,
                    this.root,
                    '[itemtype$="schema.org/BreadcrumbList"]'
                  ));
                return e
                  ? B(function (g) {
                      return {
                        name: Pa(Sa(f.b, g, "name")),
                        position: Pa(Sa(f.b, g, "position")),
                      };
                    }, Vc(this.b, e, "itemListElement"))
                  : [];
              }),
              (b.updateDate = function (e) {
                return (e = Sa(this.b, e.element, "dateModified")) ? fi(e) : "";
              }),
              (b.publicationDate = function (e) {
                return (e = Sa(this.b, e.element, "datePublished"))
                  ? fi(e)
                  : "";
              }),
              (b.pageUrlCanonical = function (e) {
                e = Vc(this.b, e.element, "url");
                return e.length ? (e[0].href ? e[0].href : Pa(e)) : null;
              }),
              (b.pageTitle = function (e) {
                var f = "",
                  g = e.element,
                  k = Sa(this.b, g, "headline");
                k && (f += Pa(k));
                (k = Sa(this.b, g, "alternativeHeadline")) &&
                  (f += " " + Pa(k));
                "" === f &&
                  ((k = Sa(this.b, g, "name")) ||
                    (k = Sa(this.b, g, "itemReviewed")),
                  k && (f += Pa(k)));
                3 === e.type &&
                  (e = Cb('[itemtype$="schema.org/Question"]', this.b, g)) &&
                  (e = Sa(this.b, e, "text")) &&
                  (f += Pa(e));
                return f;
              }),
              (b.authors = function (e) {
                var f = this;
                e = Vc(this.b, e.element, "author");
                return B(function (g) {
                  var k,
                    m = ((k = {}), (k.name = ""), k);
                  /.+schema.org\/(Person|Organization)/.test(
                    g.getAttribute("itemtype") || ""
                  ) &&
                    (k = Sa(f.b, g, "name")) &&
                    (m.name = Pa(k));
                  m.name ||
                    (m.name =
                      g.getAttribute("content") ||
                      g.innerText ||
                      g.getAttribute("href"));
                  return m;
                }, e);
              }),
              b);
            return d;
          }
          Ca(c, a);
          c.prototype.Ag = function (b) {
            b = b.getAttribute("itemtype") || "";
            return (b = this.Mk(b)) ? this.Mf[b[1]] : 1;
          };
          c.prototype.Qa = function (b) {
            return b.element &&
              b.element.innerText &&
              b.element.innerText.length
              ? a.prototype.Qa.call(this, b)
              : null;
          };
          c.prototype.Yc = function () {
            var b = F(
              ",",
              B(function (d) {
                return '[itemtype$="schema.org/' + d + '"]';
              }, this.Vb["schema.org"])
            );
            return zb(b, this.b, this.root);
          };
          return c;
        })(Jf),
        Yi = (function (a) {
          function c(b) {
            var d;
            b = a.call(this, b) || this;
            b.id = "o";
            b.jc =
              ((d = {}),
              (d.chars = function (e) {
                e = this.tb(e);
                return e.innerText ? e.innerText.length : 0;
              }),
              (d.authors = function (e) {
                return this.ve(e.data.author);
              }),
              (d.pageTitle = function (e) {
                return this.cd(e.data.title) || "";
              }),
              (d.updateDate = function (e) {
                return this.cd(e.data.modified_time);
              }),
              (d.publicationDate = function (e) {
                return this.cd(e.data.published_time);
              }),
              (d.pageUrlCanonical = function (e) {
                return this.cd(e.data.url);
              }),
              (d.rubric = function (e) {
                return this.ve(e.data.section);
              }),
              (d.topics = function (e) {
                return this.ve(e.data.tag);
              }),
              d);
            b.ej = new RegExp("^(og:)?((" + F("|", b.Vb.Wg) + "):)?");
            return b;
          }
          Ca(c, a);
          c.prototype.ve = function (b) {
            var d;
            return b
              ? ha(b)
                ? B(function (e) {
                    var f;
                    return (f = {}), (f.name = e), f;
                  }, b)
                : [((d = {}), (d.name = b), d)]
              : [];
          };
          c.prototype.cd = function (b) {
            return ha(b) ? (b.length ? b[0] : null) : b;
          };
          c.prototype.Yc = function () {
            var b = zb(
              'meta[property="og:type"]',
              this.b,
              this.b.document.body
            );
            return [this.b.document.head].concat(b);
          };
          c.prototype.tj = function (b) {
            var d = this,
              e = b.element,
              f = {},
              g = this.tb(b);
            e = zb(
              "meta[property]",
              this.b,
              e === this.b.document.head ? e : g
            );
            if (e.length)
              E(function (k) {
                try {
                  if (
                    k.parentNode === g ||
                    k.parentNode === d.b.document.head
                  ) {
                    var m = k.getAttribute("property").replace(d.ej, ""),
                      n = Pa(k);
                    f[m]
                      ? ha(f[m])
                        ? f[m].push(n)
                        : (f[m] = [f[m], n])
                      : (f[m] = n);
                  }
                } catch (r) {
                  od(d.b, "og.ed", r);
                }
              }, e);
            else return null;
            return L(f.type, this.Vb.Wg) ? G(b, { data: f }) : null;
          };
          c.prototype.tb = function (b) {
            b = b.element;
            var d = this.b.document;
            return b === d.head ? d.body : b.parentNode;
          };
          c.prototype.Qa = function (b) {
            return (b = this.tj(b)) ? a.prototype.Qa.call(this, b) : null;
          };
          return c;
        })(Jf),
        Zi = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(
          " "
        ),
        Jo = (function () {
          function a(c, b, d) {
            this.kd = !1;
            this.fa = {};
            this.scroll = { x: 0, y: 0 };
            this.Ga = this.Qg = 0;
            this.We = this.Yg = "";
            this.xa = [];
            this.lb = 0;
            this.Zb = { Ra: 0, Rf: 0 };
            this.buffer = d;
            this.Ec = D(this.Ec, this);
            this.$c = D(this.$c, this);
            this.sd = D(this.sd, this);
            this.b = c;
            this.Dd = b;
            this.Oe = "pai" + b.id;
            this.kc();
            this.lg = qa(this.b);
            this.time = fa(this.b);
            this.Hh();
            this.dd = Y(this.b);
          }
          a.prototype.start = function () {
            var c = this;
            if (!this.kd) {
              this.buffer.D("ag", this.$c);
              this.buffer.D("se", this.sd);
              this.Dk();
              var b = this.dd.o(this.Oe, []),
                d = !b.length;
              b.push(D(this.Qj, this));
              this.dd.Bb(this.Oe, b);
              d && this.kh();
              this.dd.Bb("pai", function () {
                return c.xa.length
                  ? M(
                      function (e, f) {
                        return (e.Ed || 0) <= (f.Ed || 0) ? f : e;
                      },
                      c.xa[0],
                      c.xa.slice(1)
                    ).id
                  : 0;
              });
              this.Ec({ type: "page", target: this.b });
            }
          };
          a.prototype.stop = function () {
            this.buffer.ya("se", this.sd);
            this.buffer.ya("ag", this.$c);
            this.Nk();
            this.kd = !0;
          };
          a.prototype.Ng = function (c) {
            return Cb("html", this.b, c) !== this.b.document.documentElement;
          };
          a.prototype.kh = function () {
            var c = this;
            C(this.b, "p.ic" + this.Dd.id, function () {
              if (!c.kd) {
                var b = c.dd.o(c.Oe),
                  d = c.Dd.jj();
                E(function (e) {
                  var f = B(function (g) {
                    return G({}, g);
                  }, d);
                  ca(e) && e(f);
                }, b);
                c.lb = V(c.b, D(c.kh, c), 1e3, "p");
              }
            })();
          };
          a.prototype.Qj = function (c) {
            this.kd || (this.Ok(c), this.Pk(), this.wk());
          };
          a.prototype.Ec = function (c) {
            var b = this;
            C(this.b, "p.ec." + this.Dd.id, function () {
              try {
                var d = c.type;
                var e = c.target;
              } catch (n) {
                return;
              }
              var f = "page" === d;
              if ("scroll" === d || f) {
                var g = [
                  b.b,
                  b.b.document,
                  b.b.document.documentElement,
                  bc(b.b),
                ];
                L(e, g) && b.kc();
              }
              ("resize" === d || f) && b.Hh();
              d = b.time(ba);
              var k = Math.min(d - b.Qg, 5e3);
              b.Ga += Math.round(k);
              b.Qg = d;
              if (b.fa && b.scroll && b.Zb) {
                var m = b.Zb.Ra * b.Zb.Rf;
                b.xa = B(function (n) {
                  var r = G({}, n),
                    t = b.fa[r.id],
                    v = Ac(n.ic);
                  if (!t || b.Ng(r.element) || !v) return r;
                  n = b.b.Math;
                  t = n.max((b.scroll.y + b.Zb.Ra - t.y) / t.height, 0);
                  var q = v.height * v.width;
                  v = b.Ni(v);
                  r.Ed = v / m;
                  r.visibility = v / q;
                  if (0.9 <= r.visibility || 0.1 <= r.Ed) r.involvedTime += k;
                  r.maxScrolled = n.round(1e4 * t) / 1e4;
                  return r;
                }, b.xa);
              }
            })();
          };
          a.prototype.Ni = function (c) {
            var b = c.top,
              d = c.bottom,
              e = c.left,
              f = this.Zb,
              g = f.Rf;
            f = f.Ra;
            var k = this.b.Math;
            c = k.min(k.max(c.right, 0), g) - k.min(k.max(e, 0), g);
            return (k.min(k.max(d, 0), f) - k.min(k.max(b, 0), f)) * c;
          };
          a.prototype.Ok = function (c) {
            var b = B(function (d) {
              return d.id;
            }, this.xa);
            this.xa = this.xa.concat(
              X(function (d) {
                return !L(d.id, b);
              }, c)
            );
          };
          a.prototype.Hh = function () {
            var c = ff(this.b) || Rc(this.b);
            this.Zb = { Rf: c[0], Ra: c[1] };
          };
          a.prototype.Pk = function () {
            var c = this;
            C(this.b, "p.um." + this.Dd.id, function () {
              var b = [];
              c.kc();
              c.fa = M(
                function (d, e) {
                  var f;
                  if (c.Ng(e.element)) b.push(e), delete d[e.id];
                  else {
                    var g =
                      ((f = {}),
                      (f.id = e.id),
                      (f.involvedTime = Math.max(e.involvedTime, 0)),
                      (f.maxScrolled = e.maxScrolled || 0),
                      (f.chars = e.update ? e.update("chars") : 0),
                      f);
                    e.ic &&
                      (f = Ac(e.ic)) &&
                      ((g.x = Math.max(Math.round(f.left) + c.scroll.x, 0)),
                      (g.y = Math.max(Math.round(f.top) + c.scroll.y, 0)),
                      (g.width = Math.round(f.width)),
                      (g.height = Math.round(f.height)));
                    d[e.id] = g;
                  }
                  return d;
                },
                {},
                c.xa
              );
              E(function (d) {
                d = Od(c.b)(d, c.xa);
                c.xa.splice(d, 1);
              }, b);
            })();
          };
          a.prototype.sd = function () {
            this.Yg = this.We;
          };
          a.prototype.$c = function () {
            var c,
              b,
              d = B(A(this.fa, w), Aa(this.fa));
            return d.length && ((this.We = $a(this.b, d)), this.Yg !== this.We)
              ? ((c = {}),
                (c.type = "publishersHeader"),
                (c.data =
                  ((b = {}),
                  (b.articleMeta = d || []),
                  (b.involvedTime = this.Ga),
                  b)),
                c)
              : null;
          };
          a.prototype.wk = function () {
            var c = this;
            if (this.xa.length) {
              var b = X(function (d) {
                return !d.wf;
              }, this.xa);
              E(function (d) {
                var e,
                  f = G({}, d);
                delete f.ic;
                delete f.wf;
                delete f.index;
                delete f.involvedTime;
                delete f.visibility;
                delete f.Ed;
                delete f.maxScrolled;
                delete f.update;
                delete f.element;
                delete f.type;
                c.buffer.push(
                  ((e = {}),
                  (e.type = "articleInfo"),
                  (e.stamp = f.stamp),
                  (e.data = f),
                  e)
                );
                d.wf = !0;
              }, b);
              b.length && vb(this.b, "Publisher content info found: ", b);
            }
          };
          a.prototype.Dk = function () {
            this.lg.D(this.b, F(",", Zi), this.Ec);
          };
          a.prototype.Nk = function () {
            this.lg.Cc(this.b, F(",", Zi), this.Ec);
          };
          a.prototype.kc = function () {
            this.scroll = {
              x:
                this.b.pageXOffset ||
                this.b.document.documentElement.scrollLeft,
              y:
                this.b.pageYOffset || this.b.document.documentElement.scrollTop,
            };
          };
          return a;
        })(),
        cd = {};
      Xi && (cd.json_ld = Xi);
      Kf && ((cd.schema = Kf), (cd.microdata = Kf));
      Yi && (cd.opengraph = Yi);
      var Ko = H("p.p", function (a, c) {
          function b(n, r, t) {
            e(G({}, m, { oa: n }), c, t)["catch"](C(a, "s.ww.p"));
          }
          if (!ea("querySelectorAll", a.document.querySelectorAll))
            return P.resolve();
          var d = [new Td(a)];
          d.unshift(new Io(a));
          var e = pa(a, "p", c),
            f = Ma(function (n) {
              return n.isEnabled();
            }, d);
          d = ta();
          var g = $c(a, c.id),
            k = g.o("pai");
          k && (g.Kb("pai"), d.C("pai", k));
          var m = { J: {}, V: d, Kg: !(f instanceof Td) };
          return Fa(
            a,
            c,
            C(a, "ps.s", function (n) {
              if ((n = w(n, "settings.publisher.schema"))) {
                n = Xh(c) ? "microdata" : n;
                var r = cd[n];
                if (r && f) {
                  var t = Hf.xe(Z(c), "e", b, f, a);
                  r = new r(a);
                  new Jo(a, r, t).start();
                  vb(a, 'Publishers analytics schema "' + n + '"');
                }
              }
            })
          );
        }),
        Rg = I(function (a, c) {
          return c[a] || {};
        }),
        tl = I(function (a, c, b) {
          var d = Rg(a, b);
          b[a] = G(d, c);
        }),
        Lo = I(function (a, c) {
          delete c[a];
        }),
        Mo = H("c.c.cc", function (a) {
          var c = Y(a),
            b = x(A(a, qd), ma, function (d) {
              var e;
              return G(
                {},
                d,
                ((e = {}),
                (e.oldCode = !!a.ya_cid),
                (e.clickmap = d.clickmap && !!d.clickmap),
                e)
              );
            });
          return C(a, "g.c.cc", x(D(c.o, c, "counters", {}), Aa, A(b, B)));
        }),
        No = H("gt.c.rs", function (a, c) {
          var b,
            d = Z(c),
            e = Ic(a, d),
            f = c.id,
            g = c.qa,
            k = c.Si,
            m = c.Db,
            n = c.Jf;
          d = x(A(d, Lo), Ee(a));
          e(
            ((b = {}),
            (b.id = f),
            (b.type = +g),
            (b.clickmap = k),
            (b.webvisor = !!m),
            (b.trackHash = !!n),
            b)
          );
          return d;
        }),
        hi,
        Oo = H("th.e", function (a, c) {
          function b() {
            f ||
              (k = Hc(a, "onhashchange")
                ? qa(a).D(a, "hashchange", g)
                : en(a, g));
          }
          var d = pa(a, "t", c),
            e = Ic(a, Z(c)),
            f = !1,
            g = C(a, "h.h.ch", D(fn, null, a, c, d)),
            k = J;
          c.Jf && (b(), (f = !0));
          return {
            Ik: C(a, "tr.hs.h", function (m) {
              var n;
              m ? b() : k();
              f = !!m;
              e(((n = {}), (n.trackHash = f), n));
            }),
            unsubscribe: k,
          };
        }),
        Po = {
          1882689622: 1,
          2318205080: 1,
          3115871109: 1,
          3604875100: 1,
          339366994: 1,
          2890452365: 1,
          849340123: 1,
          173872646: 1,
          2343947156: 1,
          655012937: 1,
          3724710748: 1,
          3364370932: 1,
          1996539654: 1,
          2065498185: 1,
          823651274: 1,
          12282461: 1,
          1555719328: 1,
          1417229093: 1,
          138396985: 1,
        },
        ii = 1,
        nf = {},
        Ld = {},
        Ro = H("nb.p", function (a, c) {
          function b(p) {
            m() ||
              ((p = "number" === typeof p ? p : 15e3),
              (p = hn(a, d(!1), p)),
              (q = p.id),
              (h = p.kg),
              n());
          }
          function d(p) {
            return function (u) {
              var N, y, K;
              void 0 === u &&
                (u = ((N = {}), (N.ctx = {}), (N.callback = J), N));
              if (p || (!v && !k.Je)) {
                v = !0;
                n();
                q && gn(a, q);
                var U = r(ba);
                N = (parseInt(k.o("lastHit"), 10) || 0) < U - 18e5;
                var uc = 0.1 > Math.random();
                k.C("lastHit", U);
                U = ta(((y = {}), (y.nb = "1"), (y.cl = l), (y.ar = "1"), y));
                y = ad(c);
                y = {
                  J: ((K = {}), (K["page-url"] = y.url || Q(a).href), K),
                  V: U,
                };
                K = Sd(a).warn;
                !u.callback && u.ctx && K('"callback" argument missing');
                (p || N || uc || !cm(a.location.href, a.document.referrer)) &&
                  f(y, c)
                    .then(function () {
                      if (!p) {
                        var vc = 0.002,
                          wc = c.id === za.ri ? 1 : 0.002,
                          xc,
                          Ud,
                          Lf,
                          Vd,
                          Mf;
                        void 0 === vc && (vc = 1);
                        void 0 === wc && (wc = 1);
                        var dd = a.performance;
                        if (
                          dd &&
                          ca(dd.getEntriesByType) &&
                          ((vc = Math.random() > vc),
                          (wc = Math.random() > wc),
                          !vc || !wc)
                        ) {
                          dd = a.performance.getEntriesByType("resource");
                          for (
                            var Wd = {}, Nf = {}, Xd = {}, Of = 0;
                            Of < dd.length;
                            Of += 1
                          ) {
                            var lb = dd[Of],
                              Yd = lb.name
                                .replace(/^https?:\/\//, "")
                                .split("?")[0],
                              Qo = Lc(Yd),
                              $i =
                                ((xc = {}),
                                (xc.dns = Math.round(
                                  lb.domainLookupEnd - lb.domainLookupStart
                                )),
                                (xc.tcp = Math.round(
                                  lb.connectEnd - lb.connectStart
                                )),
                                (xc.duration = Math.round(lb.duration)),
                                (xc.response = Math.round(
                                  lb.responseEnd - lb.requestStart
                                )),
                                xc);
                            "script" !== lb.initiatorType ||
                              vc ||
                              (Nf[Yd] = G(
                                $i,
                                ((Ud = {}),
                                (Ud.name = lb.name),
                                (Ud.decodedBodySize = lb.decodedBodySize),
                                Ud)
                              ));
                            !Po[Qo] ||
                              Wd[Yd] ||
                              wc ||
                              (Wd[Yd] = G(
                                $i,
                                ((Lf = {}), (Lf.pages = a.location.href), Lf)
                              ));
                          }
                          Aa(Wd).length && (Xd.timings8 = Wd);
                          Aa(Nf).length && (Xd.scripts = Nf);
                          if (Aa(Xd).length)
                            pa(
                              a,
                              "d",
                              c
                            )(
                              {
                                V: ta(
                                  ((Vd = {}), (Vd.ar = "1"), (Vd.pv = "1"), Vd)
                                ),
                                oa: $a(a, Xd) || void 0,
                                J:
                                  ((Mf = {}),
                                  (Mf["page-url"] =
                                    a.location && "" + a.location.href),
                                  Mf),
                              },
                              { id: za.wi, qa: "0" }
                            )["catch"](C(a, "r.tim.ng2"));
                        }
                      }
                    })
                    .then(R([a, D(u.callback || J, u.ctx)], Jb), C(a, "l.o.l"));
              }
            };
          }
          var e,
            f = pa(a, "n", c),
            g = Z(c),
            k = $c(a, c.id),
            m = A(qd(a, g), x(ma, W("accurateTrackBounce"))),
            n = A(((e = {}), (e.accurateTrackBounce = !0), e), Ic(a, g)),
            r = fa(a),
            t = r(ba),
            v = !1,
            q = 0,
            l = 0,
            h;
          Fa(a, c, function () {
            l = r(ba) - t;
          });
          c.Hc && b(c.Hc);
          return { Zj: d(!0), Hc: b, ke: h };
        }),
        Pf = [
          "yandex_metrika_callback" + Oc.callbackPostfix,
          "yandex_metrika_callbacks" + Oc.callbackPostfix,
        ],
        So = H("cb.i", function (a) {
          var c = Pf[0],
            b = Pf[1];
          if (ca(a[c])) a[c]();
          "object" === typeof a[b] &&
            E(function (d, e) {
              a[b][e] = null;
              Jb(a, d);
            }, a[b]);
          E(function (d) {
            try {
              delete a[d];
            } catch (e) {
              a[d] = void 0;
            }
          }, Pf);
        }),
        aj = { Fl: Ra(/[/&=?#]/) },
        fe = H("go.in", function (a, c, b, d) {
          void 0 === b && (b = "goal");
          return function (e, f, g, k) {
            var m, n;
            if (!(!e || (aj[b] && aj[b](e)))) {
              var r = f,
                t = g || J;
              ca(f) && ((t = f), (r = void 0), (k = g));
              f = Db(
                a,
                c,
                "Reach goal. Counter: " + c.id + ". Goal id: " + e,
                r
              );
              g = "goal" === b;
              var v = pa(a, "g", c);
              var q = b;
              var l = Q(a);
              var h = l.hostname;
              l = l.href;
              var p = ad(c).url;
              p && ((l = Fb(a, p)), (h = l.hostname), (l = l.href));
              q = [q + "://" + h + "/" + e, l || ""];
              e = q[0];
              q = q[1];
              v(
                {
                  ha: r,
                  V: ta(((m = {}), (m.ar = 1), m)),
                  J: ((n = {}), (n["page-url"] = e), (n["page-ref"] = q), n),
                },
                c
              )
                .then(x(g ? f || J : J, d || J))
                ["catch"](C(a, "g.s"))
                .then(D(Jb, null, a, D(t, k)));
            }
          };
        }),
        rl = /^ *(data|javascript):/i,
        Pg = new RegExp(
          F("", [
            "\\.(" +
              F(
                "|",
                "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(
                  " "
                )
              ) +
              ")$",
          ]),
          "i"
        ),
        To = I(function (a, c) {
          gb(c) ? a.push(c) : E(x(S, oa("push", a)), c);
        }),
        Uo = H("cl.p", function (a, c) {
          function b(r, t, v, q) {
            void 0 === q && (q = {});
            v
              ? pd(
                  a,
                  c,
                  {
                    url: v,
                    Le: !0,
                    Ke: r,
                    od: t,
                    sender: d,
                    b: q.ctx,
                    Ib: q.callback,
                    title: q.title,
                    ha: q.params,
                  },
                  Db(
                    a,
                    c,
                    (r ? "File" : "Ext link") +
                      ". Counter " +
                      c.id +
                      ". Url: " +
                      v,
                    q
                  )
                )
              : f.warn("Empty link");
          }
          var d = pa(a, "2", c),
            e = [],
            f = Sd(a),
            g = Z(c),
            k = C(a, "s.s.tr", A(Ic(a, g), sl));
          g = {
            b: a,
            Yi: c,
            ij: e,
            sender: d,
            globalStorage: Y(a),
            Wi: $c(a, c.id),
            Hj: nc(a),
            Jk: A(qd(a, g), x(ma, W("trackLinks"))),
          };
          g = C(a, "cl.p.c", A(g, pl));
          g = qa(a).D(a, "click", g);
          c.Ld && k(c.Ld);
          var m = C(a, "file.clc", R([!0, !1], b)),
            n = C(a, "e.l.l.clc", R([!1, !0], b));
          e = C(a, "add.f.e.clc", To(e));
          return { file: m, gj: n, Hi: e, Ld: k, ke: g };
        }),
        Vo = [
          [
            { host: "http://127.0.0.1", port: 30102 },
            { host: "http://127.0.0.1", port: 29009 },
          ],
          [
            { host: "https://yandexmetrica.com", port: 30103 },
            { host: "https://yandexmetrica.com", port: 29010 },
          ],
        ],
        Wo = [
          [{ host: "https://yandexmetrica.com", port: 30103 }],
          [{ host: "https://yandexmetrica.com", port: 29010 }],
        ],
        nl = { J: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
        Mg = { id: 42822899, qa: "0" },
        Og = Kd("csp", function (a, c) {
          return pa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]);
        }),
        Ng = x(W("settings.pcs"), la("1")),
        Xo = H("s", function (a, c) {
          return Fa(a, c, function (b) {
            var d = fa(a),
              e = ol(a, b.userData, c),
              f = wf(a),
              g = x(uf, ub(["iPhone", "iPad"]))(a);
            return (
              (f || g) &&
              ll(a, d, c, e, b).then(function () {
                if (f) var k = Vo;
                else if (g) k = Wo;
                else return;
                return jl(a, k, c, e, d);
              }, J)
            );
          });
        }),
        el = I(Ib)("(ym-disable-clickmap|ym-clickmap-ignore)"),
        Yo = H("clm.p", function (a, c) {
          if (Wb(a)) return J;
          var b = pa(a, "m", c),
            d = Z(c),
            e = fa(a),
            f = e(ba),
            g = A(qd(a, d), x(ma, W("clickmap"))),
            k,
            m = null;
          d = C(a, "clm.p.c", function (n) {
            var r = g();
            if (r) {
              var t = "object" === typeof r ? r : {},
                v = t.filter;
              r = t.isTrackHash || !1;
              var q = B(function (h) {
                return ("" + h).toUpperCase();
              }, t.ignoreTags || []);
              T(k) && (k = t.quota || null);
              var l = !!t.quota;
              n = {
                element: fl(a, n),
                position: Lg(a, n),
                button: gl(n),
                time: e(ba),
              };
              t = Q(a).href;
              if (dl(a, n, m, q, v)) {
                if (l) {
                  if (!k) return;
                  --k;
                }
                q = Gd(a, n.element);
                v = q[0];
                q = q[1];
                l = ef(a, n.element);
                v = [
                  "rn",
                  db(a),
                  "x",
                  Math.floor((65535 * (n.position.x - l.left)) / (v || 1)),
                  "y",
                  Math.floor((65535 * (n.position.y - l.top)) / (q || 1)),
                  "t",
                  Math.floor((n.time - f) / 100),
                  "p",
                  Ph(a, n.element),
                  "X",
                  n.position.x,
                  "Y",
                  n.position.y,
                ];
                v = F(":", v);
                r && (v += ":wh:1");
                cl(a, t, v, b, c);
                m = n;
              }
            }
          });
          return qa(a).D(w(a, "document"), "click", d);
        }),
        Zo = z(
          function (a) {
            var c = Y(a),
              b = c.o("isEU");
            if (T(b)) {
              var d = parseInt(Dc(a, "is_gdpr") || "", 10);
              if (L(d, [0, 1])) c.C("isEU", d), (b = !!d);
              else if (((a = Na(a).o("wasSynced")), (a = w(a, "params.eu"))))
                c.C("isEU", a), (b = !!a);
            }
            return b;
          },
          function (a) {
            return Y(a).o("isEU");
          }
        ),
        je = H("i.e", Zo),
        $o = (function () {
          function a(c, b) {
            this.b = c;
            this.rj = b;
          }
          a.prototype.Ab = function (c) {
            return fd(Eb(D(this.jb, this), c));
          };
          a.prototype.jb = function (c, b) {
            var d = this,
              e = [],
              f = this.rj(this.b, b && b.type, c.type);
            f &&
              (e = Eb(function (g) {
                return g({ b: d.b, Ba: c }) || [];
              }, f));
            return e;
          };
          a.prototype.ub = function (c) {
            return c.length;
          };
          a.prototype.Id = function (c) {
            return [c];
          };
          a.prototype.isEnabled = function () {
            return !0;
          };
          return a;
        })(),
        Lk = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.buffer = [];
            b.mi = 7500;
            b.Qd = 3e4;
            b.Hd();
            return b;
          }
          Ca(c, a);
          c.prototype.push = function (b, d) {
            var e = this.Ja.jb(b, d);
            Qa(this.buffer, e);
            this.Ja.ub(this.buffer) > this.mi && this.flush();
          };
          c.prototype.flush = function () {
            var b = this.buffer;
            b.length && (this.send(b), (this.buffer = []));
          };
          return c;
        })(Wi),
        Ka = "metrikaId_" + Math.random(),
        Ub = { de: 0 },
        bj = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(
          " "
        ),
        al = /ym-hide-content/,
        bl = /ym-show-content/,
        Yk = /^[\w\u0410-\u042f\u0430-\u044f]$/,
        Zk = [65, 90],
        $k = [97, 122],
        Vk = new RegExp(
          "^" +
            F(
              "|",
              "color radio checkbox date datetime-local email month number password range search tel text time url week".split(
                " "
              )
            ) +
            "$",
          "i"
        ),
        Tk = new RegExp("(" + F("|", bj) + ")", "i"),
        ki = /^(password|passwd|pswd)$/,
        ji = ["ym-disable-keys", "-metrika-nokeys"],
        jn = "(" + F("|", ji) + ")",
        Uk = new RegExp(
          "(" +
            F(
              "|",
              bj.concat(
                "\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                  " "
                )
              )
            ) +
            ")",
          "i"
        ),
        nn = z(function () {
          var a;
          return (
            (a = {}),
            (a.A = 1),
            (a.ABBR = 2),
            (a.ACRONYM = 3),
            (a.ADDRESS = 4),
            (a.APPLET = 5),
            (a.AREA = 6),
            (a.B = 7),
            (a.BASE = 8),
            (a.BASEFONT = 9),
            (a.BDO = 10),
            (a.BIG = 11),
            (a.BLOCKQUOTE = 12),
            (a.BODY = 13),
            (a.BR = 14),
            (a.BUTTON = 15),
            (a.CAPTION = 16),
            (a.CENTER = 17),
            (a.CITE = 18),
            (a.CODE = 19),
            (a.COL = 20),
            (a.COLGROUP = 21),
            (a.DD = 22),
            (a.DEL = 23),
            (a.DFN = 24),
            (a.DIR = 25),
            (a.DIV = 26),
            (a.DL = 27),
            (a.DT = 28),
            (a.EM = 29),
            (a.FIELDSET = 30),
            (a.FONT = 31),
            (a.FORM = 32),
            (a.FRAME = 33),
            (a.FRAMESET = 34),
            (a.H1 = 35),
            (a.H2 = 36),
            (a.H3 = 37),
            (a.H4 = 38),
            (a.H5 = 39),
            (a.H6 = 40),
            (a.HEAD = 41),
            (a.HR = 42),
            (a.HTML = 43),
            (a.I = 44),
            (a.IFRAME = 45),
            (a.IMG = 46),
            (a.INPUT = 47),
            (a.INS = 48),
            (a.ISINDEX = 49),
            (a.KBD = 50),
            (a.LABEL = 51),
            (a.LEGEND = 52),
            (a.LI = 53),
            (a.LINK = 54),
            (a.MAP = 55),
            (a.MENU = 56),
            (a.META = 57),
            (a.NOFRAMES = 58),
            (a.NOSCRIPT = 59),
            (a.OBJECT = 60),
            (a.OL = 61),
            (a.OPTGROUP = 62),
            (a.OPTION = 63),
            (a.P = 64),
            (a.PARAM = 65),
            (a.PRE = 66),
            (a.Q = 67),
            (a.S = 68),
            (a.SAMP = 69),
            (a.SCRIPT = 70),
            (a.SELECT = 71),
            (a.SMALL = 72),
            (a.SPAN = 73),
            (a.STRIKE = 74),
            (a.STRONG = 75),
            (a.STYLE = 76),
            (a.SUB = 77),
            (a.SUP = 78),
            (a.TABLE = 79),
            (a.TBODY = 80),
            (a.TD = 81),
            (a.TEXTAREA = 82),
            (a.TFOOT = 83),
            (a.TH = 84),
            (a.THEAD = 85),
            (a.TITLE = 86),
            (a.TR = 87),
            (a.TT = 88),
            (a.U = 89),
            (a.UL = 90),
            (a.VAR = 91),
            (a.NOINDEX = 100),
            a
          );
        }),
        kn = [17, 18, 38, 32, 39, 15, 11, 7, 1],
        ap = (function () {
          var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(
            " "
          );
          return {
            Dl: new RegExp("(" + F("|", a) + ")", "i"),
            Yl: new RegExp(
              "(" +
                F(
                  "|",
                  a.concat(
                    "\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                      ";"
                    )
                  )
                ) +
                ")",
              "i"
            ),
            Bl: /ym-record-keys/i,
            ak: "\u2022",
            Xl: 88,
          };
        })(),
        oi = Wa(A(ap.ak, S)),
        Ec = !0,
        qf = "",
        rf = !1,
        sf = !0,
        tf = !1,
        Rk = I(function (a, c) {
          var b = R([a, "efv." + c.event], C);
          c.ga = B(x(S, b), c.ga);
          return c;
        }),
        cj = z(function (a) {
          var c = [],
            b = [],
            d = [];
          a.document.attachEvent &&
            !a.opera &&
            (c.push(Be), b.push(qn), b.push(rn));
          a.document.addEventListener ? c.push(mi) : (b.push(li), d.push(mi));
          c = ia(
            [
              { target: a, type: "window", event: "beforeunload", ga: [J] },
              { target: a, type: "window", event: "unload", ga: [J] },
              { event: "click", ga: [Md] },
              { event: "dblclick", ga: [Md] },
              { event: "mousedown", ga: [Md] },
              { event: "mouseup", ga: [tn] },
              { event: "keydown", ga: [un] },
              { event: "keypress", ga: [vn] },
              { event: "copy", ga: [qi] },
              { event: "blur", ga: c },
              { event: "focusin", ga: b },
              { event: "focusout", ga: d },
            ],
            !a.document.attachEvent || a.opera
              ? [
                  { target: a, type: "window", event: "focus", ga: [Gg] },
                  { target: a, type: "window", event: "blur", ga: [Be] },
                ]
              : [],
            a.document.addEventListener
              ? [
                  { event: "focus", ga: [li] },
                  { event: "change", ga: [ni] },
                  { event: "submit", ga: [si] },
                ]
              : [
                  { type: "formInput", event: "change", ga: [ni] },
                  { type: "form", event: "submit", ga: [si] },
                ]
          );
          return Qk(a, c);
        }),
        Ok = z(function (a) {
          return ia(
            bc(a)
              ? [{ target: a, type: "document", event: "mouseleave", ga: [wn] }]
              : []
          );
        }),
        bp = ["submit", "beforeunload", "unload"],
        cp = z(function (a, c) {
          var b = c(a);
          return M(
            function (d, e) {
              d[e.type + ":" + e.event] = e.ga;
              return d;
            },
            {},
            b
          );
        }),
        dp = A(cj, function (a, c, b, d) {
          return cp(c, a)[b + ":" + d] || [];
        }),
        Pk = /^\s*function submit\(\)/,
        Nk = /opera mini/i,
        ep = H("fw.p", function (a, c) {
          if (!c.Db) return P.resolve(J);
          var b = new $o(a, dp);
          return Kk(a, c, b, cj, bp);
        }),
        fp = H("pr.p", function (a, c) {
          var b, d;
          if (Qe(a)) {
            var e = pa(a, "5", c),
              f = ta(((b = {}), (b.pq = 1), (b.ar = 1), b));
            e(
              {
                V: f,
                J:
                  ((d = {}),
                  (d["page-url"] = Q(a).href),
                  (d["page-ref"] = w(a, "document.referrer") || ""),
                  d),
              },
              c
            )["catch"](C(a, "pr.p.s"));
          }
        }),
        gp = H("c.m.p", function (a, c) {
          var b = Z(c);
          return A(Ic(a, b), Jk);
        }),
        hp = H("e.a.p", function (a, c) {
          var b = La(a, c);
          b = R(
            [
              x(S, A(!0), ma),
              X(
                Boolean,
                B(A(b, w), ["clickmap", "trackLinks", "accurateTrackBounce"])
              ),
            ],
            B
          );
          c.dj && b();
          return b;
        }),
        ip = H("cc.i", function (a, c) {
          var b = R([a, c], Ik);
          b = R([a, b, 300], V);
          Fa(a, c, b);
        }),
        jp = H("s.f.i", function (a, c) {
          return Fa(a, c, function (b) {
            if (
              w(b, "settings.button_goals") ||
              -1 !== Q(a).href.indexOf("yagoalsbuttons=1")
            )
              qa(a).D(
                a,
                "click",
                C(a, "c.t.c", x(W("target"), R([a, c], Nd(a, c, Hk))))
              ),
                Db(a, c, "Button goal. Counter " + c.id + ". Init.")();
          });
        }),
        kp = H("p.fh", function (a, c) {
          var b, d;
          void 0 === c && (c = !0);
          var e = Na(a),
            f = fa(a),
            g = e.o("wasSynced"),
            k = { id: 3, qa: "0" };
          return c && g && g.time + 864e5 > f(ba)
            ? P.resolve(g)
            : pa(
                a,
                "f",
                k
              )(
                {
                  V: ta(((b = {}), (b.pv = 1), b)),
                  J:
                    ((d = {}),
                    (d["page-url"] = Q(a).href),
                    (d["page-ref"] = a.document.referrer),
                    d),
                },
                k
              )
                .then(function (m) {
                  var n;
                  m =
                    ((n = {}),
                    (n.time = f(ba)),
                    (n.params = w(m, "settings")),
                    (n.bkParams = w(m, "userData")),
                    n);
                  e.C("wasSynced", m);
                  return m;
                })
                ["catch"](C(a, "f.h"));
        }),
        lp = H("pa.int", function (a, c) {
          return C(a, "pa.c", function () {
            var b, d;
            var e = va(arguments),
              f = J;
            var g = null;
            var k = e.length;
            if (0 !== e.length && e[0]) {
              var m = e.slice(-1)[0];
              ca(m) && ((f = m), (k = e.length + -1));
              var n = e.slice(-2)[0];
              ca(n) && ((f = n), (g = m), (k = e.length + -2));
              k = e.slice(0, k);
              g = { Zi: g, Ib: f, ha: 1 === k.length ? e[0] : de(k) };
            } else g = void 0;
            if (g && ((e = g.Zi), (f = g.ha), (g = g.Ib), kc(f) || ha(f))) {
              k = pa(a, "1", c);
              m = ad(c).url;
              n = w(f, "__ym.user_id");
              var r = Aa(f),
                t = L("__ymu", r),
                v = L("__ym", r) && n;
              r = !Ug(c);
              n = Db(
                a,
                c,
                v
                  ? "Set user id " + n
                  : (t ? "User p" : "P") + "arams. Counter " + c.id,
                v ? void 0 : JSON.stringify(f)
              );
              k(
                {
                  ha: f,
                  V: ta(((b = {}), (b.pa = 1), (b.ar = 1), b)),
                  J: ((d = {}), (d["page-url"] = m || Q(a).href), d),
                },
                c
              )
                .then(r ? n : J)
                ["catch"](C(a, "p.s"))
                .then(D(Jb, null, a, D(g, e)));
            }
          });
        }),
        mp = H("exps.int", function (a, c) {
          return C(a, "e.m", function (b, d, e) {
            var f, g;
            void 0 === d && (d = J);
            if (b && 0 < b.length) {
              var k = pa(a, "e", c),
                m = ad(c).url;
              return k(
                {
                  V: ta(((f = {}), (f.ex = 1), (f.ar = 1), f)),
                  J:
                    ((g = {}),
                    (g["page-url"] = m || Q(a).href),
                    (g.exp = b),
                    g),
                },
                c
              ).then(D(Jb, null, a, D(d, e)), C(a, "exps.s"));
            }
          });
        }),
        np = H("y.p", function (a, c) {
          var b = dh(a, c);
          if (b) {
            var d = Ge(a),
              e = I(Gk)(a, b, c);
            bh(a, d, function (f) {
              f.D("params", e);
            });
            b.na.D("params", x(W("1"), e));
          }
        }),
        vg = z(rc),
        wg = I(function (a, c) {
          var b = vg(a),
            d = ka(c),
            e = d[0],
            f = d[1];
          d = d.slice(2);
          if (f) {
            var g = "" + e;
            var k = { id: 1, qa: "0" };
            if (-1 === g.indexOf(":")) k.id = parseInt(g, 10);
            else {
              g = g.split(":");
              var m = g[1];
              k.id = parseInt(g[0], 10);
              k.qa = m;
            }
            g = [La(a, k), k];
            k = g[0];
            g = g[1];
            m = Z(g);
            b[m] || (b[m] = {});
            b = b[m];
            "init" === f
              ? ((e = "yaCounter" + g.id),
                a[e] || (a[e] = new a.Ya[za.Nc](G({}, d[0], g))))
              : k && k[f] && b.Jj
              ? k[f].apply(k, d)
              : ((k = b.uh),
                k || ((k = []), (b.uh = k)),
                k.push(ia([e, f], d)));
          }
        }),
        mb,
        dc,
        xe =
          ((mb = {}),
          (mb.transaction_id = "id"),
          (mb.item_id = "id"),
          (mb.item_name = "name"),
          (mb.item_brand = "brand"),
          (mb.promotion_name = "coupon"),
          (mb.index = "position"),
          (mb.item_variant = "variant"),
          (mb.value = "revenue"),
          (mb.item_category = "category"),
          mb),
        dj =
          ((dc = {}),
          (dc.view_item = "detail"),
          (dc.add_to_cart = "add"),
          (dc.remove_from_cart = "remove"),
          (dc.begin_checkout = "checkout"),
          (dc.purchase = "purchase"),
          dc),
        Ck = "currencyCode add delete remove purchase checkout detail".split(
          " "
        ),
        ej = H("dl.w", function (a, c, b) {
          var d;
          Ze(a, a[c], function (e) {
            b(e);
          }) ||
            (d = V(
              a,
              function () {
                ej(a, c, b);
              },
              1e3,
              "ec.dl"
            ));
          return D(ua, null, a, d);
        }),
        op = I(function (a, c, b) {
          var d, e;
          a = w(b, "ecommerce") || {};
          var f = w(b, "event") || "";
          a = (f = dj[f]) ? we(f, a, "items") : void 0;
          if (!a)
            a: {
              if (ha(b) && ((a = dj[b[1]]), "event" === b[0] && a)) {
                a = we(a, b[2], "items");
                break a;
              }
              a = void 0;
            }
          (b = a || Bk(b)) &&
            c &&
            c(((d = {}), (d.__ym = ((e = {}), (e.ecommerce = [b]), e)), d));
        }),
        pp = H("p.e", function (a, c) {
          var b = La(a, c);
          if (b && c.me) {
            b = D(b.params, b);
            var d = op(a, b);
            return ej(a, c.me, function (e) {
              e.D(d);
            });
          }
        }),
        Zd = I(function (a, c, b, d) {
          var e, f;
          (b = La(c, b)) &&
            Dk(a, d, c) &&
            ((c = D(b.params, b)),
            (a = we(a, d, "goods")) &&
              c &&
              c(((e = {}), (e.__ym = ((f = {}), (f.ecommerce = [a]), f)), e)));
        }),
        qp = H("ecm.a", Zd("add")),
        rp = H("ecm.r", Zd("remove")),
        sp = H("ecm.d", Zd("detail")),
        tp = H("ecm.p", Zd("purchase")),
        bg = Xn("form"),
        up = Ei("form"),
        yk = Ra(
          /^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/
        ),
        zk = z(
          function (a, c, b) {
            var d,
              e,
              f = b.resource;
            b.inline
              ? ((c = Y(a)),
                (b = {}),
                (b.getCachedTags = Qh),
                (b.form =
                  ((d = {}),
                  (d.closest = A(a, bg)),
                  (d.select = A(a, up)),
                  (d.getData = A(a, dg)),
                  d)),
                (b.button =
                  ((e = {}),
                  (e.closest = A(a, xg)),
                  (e.select = A(a, Jh)),
                  (e.getData = A(a, yg)),
                  e)),
                c.C("_u", b),
                Bc(a, { src: f }))
              : ((a._ym__postMessageEvent = c),
                (a._ym__inpageMode = b.inpageMode),
                (a._ym__initMessage = b.initMessage),
                Ak(a, b.resource));
          },
          function (a, c, b) {
            return b.id;
          }
        ),
        sg = z(function (a) {
          function c(d, e, f) {
            f && (e && b.push([f, f.innerHTML]), (f.innerHTML = d));
          }
          var b = [];
          return {
            zd: function (d, e) {
              void 0 === e && (e = !1);
              return M(
                function (f, g) {
                  var k = g.text;
                  return (
                    !!x(D(wk, null, a), Wa(D(c, null, k, e)), Rb)(g.selector) ||
                    f
                  );
                },
                !1,
                d || []
              );
            },
            Cd: function () {
              E(function (d) {
                d[0].innerHTML = d[1];
              }, b);
            },
          };
        }),
        vp = H("ph.p", function (a, c) {
          if (Wb(a)) return J;
          var b = sg(a),
            d = c.id,
            e = jc(a, void 0, d);
          qk(a, d);
          se(a, d, !0);
          Fa(a, c, function (f) {
            var g = w(f, "settings.mp2.conditions");
            f = w(f, "settings.mp2.substs");
            var k =
              (g = (g = Ma(D(rk, null, a, c), g || [])) && g.track_id) &&
              f &&
              f[g];
            (g && k) || (k = (g = e.o("mp2_track") || "") && f && f[g]);
            g && k
              ? (e
                  .C("mp2_substs", $a(a, k) || "")
                  .C("mp2_track", "" + g, 43200),
                (f = b.zd(k)),
                La(a, c).params("__ym", f ? "mp_trackid" : "mp_trackid_bad", g))
              : (b.Cd(), e.Kb("mp2_substs").Kb("mp2_track"));
          });
          return D(H("ph.fc", se), null, a, c.id, !1);
        }),
        wp = z(function (a) {
          return new RegExp(pg(a), "g");
        }),
        mg = z(function (a) {
          return new RegExp("(?:" + F("|", B(pg, Aa(a))) + ")");
        }),
        qe = x(oa("replace"), R([/\D/g, ""]), ma),
        lg = z(function (a) {
          function c(f, g) {
            var k;
            f && b.push(g);
            var m = wp(g.from);
            if ("href" === g.type) {
              var n = g.node;
              var r = n.href.replace(m, g.Cb);
              if (n.href !== r)
                return (
                  (n.href = r),
                  null === (k = d[g.from]) || void 0 === k ? void 0 : k.Lf
                );
            } else if ((k = null === (n = g.node.textContent) || void 0 === n ? void 0 : n.replace(m, g.Cb)) && k !== g.node.textContent) return (g.node.textContent = k), null === (r = d[g.from]) || void 0 === r ? void 0 : r.Lf;
            return null;
          }
          var b = [],
            d,
            e = z(
              ac(function (f, g) {
                var k = B(qe, g),
                  m = k[0];
                k = k[1];
                f[m] = { Cb: k, Lf: g };
                var n = og(m);
                n !== m && (f[n] = { Cb: og(k), Lf: g });
                return f;
              }, {})
            );
          return {
            zd: function (f, g) {
              void 0 === g && (g = !1);
              if (!f || !f.length) return P.reject();
              d = e(f);
              return id(a).then(function () {
                var k = fa(a),
                  m = k(ba),
                  n = nk(a, d),
                  r = ok(a, d);
                return { Ca: X(ha, B(A(g, c), n.concat(r))), Va: k(ba) - m };
              });
            },
            Cd: function () {
              E(function (f) {
                "href" === f.type
                  ? (f.node.href = f.Cf)
                  : (f.node.textContent = f.Cf);
              }, b);
            },
          };
        }),
        kg = z(pb, qb),
        xp = H("phc.p", function (a, c) {
          var b = c.id;
          if (Wb(a) || !ea("querySelectorAll", a.document.querySelectorAll))
            return J;
          var d = lg(a),
            e = jc(a, void 0, b),
            f = { hc: "", sc: "", Ca: {}, Va: [], Mg: !1, Mb: !0, b: a, Xi: c },
            g = Dd(a),
            k = nm(a, g, 1e3),
            m = D(pe, null, a, b, !0, f);
          k.D(m);
          pe(a, b, !0, f);
          lk(a, g);
          return Fa(a, c, function (n) {
            var r = e.o("phc_settings") || "";
            if ((n = w(n, "settings.phchange"))) {
              var t = $a(a, n) || "";
              t !== r && (e.C("phc_settings", t), d.Cd());
            } else r && (n = kg(a, r));
            r = w(n, "clientId");
            t = w(n, "orderId");
            n = w(n, "phones") || [];
            r && t && n.length
              ? (G(f, { Mg: !0 }), pe(a, b, !1, f), kk(a, g))
              : (d.Cd(), k.ya(m));
          });
        }),
        yp = H("up.int", function (a, c) {
          return C(a, "up.c", function (b, d, e) {
            var f,
              g = La(a, c),
              k = Fe(a).warn;
            g
              ? kc(b)
                ? ((b = ((f = {}), (f.__ymu = b), f)),
                  (f = g.params) && f(b, d || J, e))
                : k("Wrong user params")
              : k("No counter instance found");
          });
        }),
        zp = H("trigger.in", function (a, c) {
          c.Dh && V(a, R([a, "yacounter" + c.id + "inited"], Em), 0, "t.i");
        }),
        Ap = H("destruct.e", function (a, c, b) {
          return function () {
            var d = Y(a),
              e = c.id;
            E(function (f, g) {
              return ca(f) && C(a, "dest.fr." + g, f)();
            }, b);
            delete d.o("counters")[Z(c)];
            delete a["yaCounter" + e];
          };
        }),
        Bp = [97, 100, 118, 101, 114, 116, 46, 103, 105, 102],
        Cp = H("ad", function (a, c) {
          if (!Wb(a) && !c.Sb) {
            var b = Y(a);
            if (!b.o("adBlockEnabled")) {
              var d = function (r) {
                  L(r, ["2", "1"]) && b.C("adBlockEnabled", r);
                },
                e = Sb(a),
                f = e.o("isad");
              if (f) d(f);
              else {
                var g = A("adStatus", b.C),
                  k = function (r) {
                    r = r ? "1" : "2";
                    d(r);
                    g("complete");
                    e.C("isad", r, 1200);
                    return r;
                  },
                  m = pa(a, "adb", c);
                if (!b.o("adStatus")) {
                  g("process");
                  var n = "metrika/" + String.fromCharCode.apply(String, Bp);
                  pm(a, function () {
                    return m({}, n).then(A(!1, k))["catch"](A(!0, k));
                  });
                }
              }
            }
          }
        }),
        Dp = H("pa.plgn", function (a, c) {
          var b = ud(a, c);
          b &&
            b.na.D(
              "pluginInfo",
              C(a, "c.plgn", function () {
                return Lm(c, Bi);
              })
            );
        }),
        Ep = H("suid.int", function (a, c) {
          return C(a, "suid.c", function (b, d, e) {
            var f = La(a, c),
              g = Sd(a);
            gb(b) || ve(a, b)
              ? ((b = de(["__ym", "user_id", b])), f.params(b, d || J, e))
              : g.error("Incorrect user ID");
          });
        }),
        Fp = H("guid.int", function (a, c) {
          return C(a, "guid.c", function (b) {
            var d = uh(a, c);
            b && Jb(a, b, d);
            return d;
          });
        }),
        Qf = I(function (a, c) {
          var b;
          return (b = {}), (b[Ha(a)] = c), b;
        }),
        Gp = (function () {
          function a(c) {
            var b;
            this.isSync = !1;
            this.Rc = [];
            this.mg = [];
            this.ub = Rb;
            this.b = c;
            this.pc =
              ((b = {}),
              (b.event = D(this.fj, this)),
              (b.page = Qf({ page: 1 })),
              (b.mutation = Qf({ Ve: 1 })),
              (b.activity = Qf({ Td: 1 })),
              b);
            try {
              this.Wa = w(Ff, "ru").T.N.R.O;
            } catch (d) {}
            this.Wa &&
              (this.mg = [
                [["scroll"], { rf: 1 }],
                [["selection"], { sf: 1 }],
                [["change", "input"], { Yd: 1 }],
                [["keystroke"], { Pe: 1 }, { Ua: 1 }],
                [["zoom"], { Uf: 1 }],
                [["resize"], { pf: 1 }],
                [
                  ["windowfocus", "windowblur", "focus", "blur", "eof"],
                  { Sf: 1 },
                ],
                [["mousemove", "mouseup", "mousedown", "click"], { Ue: 1 }],
                [["deviceRotation"], { le: 1 }],
                [["fatalError"], { qe: 1 }],
                [
                  [
                    "touchmove",
                    "touchstart",
                    "touchend",
                    "touchcancel",
                    "touchforcechange",
                  ],
                  { If: 1 },
                  { touches: 1 },
                  { touches: 1 },
                ],
                [["hashchange"], { Ge: 1 }],
              ]);
          }
          a.prototype.fj = function (c) {
            var b,
              d,
              e = c.type,
              f = Ma(x(W("0"), A(e, L)), this.mg);
            f || tb(Ad("vem." + e));
            "eof" === e && ((this.isSync = !0), E(x(A(em), ma), this.Rc));
            var g = f[1],
              k = f[2];
            f = f[3];
            var m = c.fa;
            return {
              event:
                ((b = { type: this.Wa.ii[e], target: c.target, ba: c.ba }),
                (b[Ha(g)] = k
                  ? ((d = {}), (d[Ha(k)] = f ? m[Ha(f)] : m), d)
                  : m),
                b),
            };
          };
          a.prototype.Ab = function (c, b) {
            var d = this;
            void 0 === b && (b = !1);
            var e = Jc(c, function (g) {
                var k = !T(g.partNum);
                return {
                  data: k ? null : d.pc[g.type](g.data),
                  Zd: k ? g.data : null,
                  page: g.partNum,
                  end: g.end,
                  da: g.da,
                };
              }),
              f = Ke(this.b, e, this.isSync || b ? Infinity : 20);
            this.Rc.push(f);
            return f(
              Ii(function (g) {
                g = d.Wa.Xf.encode({ buffer: g });
                var k = Od(d.b)(f, d.Rc);
                d.Rc.splice(k, 1);
                return g.finish();
              })
            );
          };
          a.prototype.jb = function (c) {
            return this.Wa.$f.encode(this.pc[c.type](c.data)).finish();
          };
          a.prototype.Id = function (c, b) {
            for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
              e.push(c.slice(f * d, d * (f + 1)));
            return e;
          };
          a.prototype.isEnabled = function () {
            return this.Wa && Sg(this.b);
          };
          return a;
        })(),
        Ua = (function () {
          function a(c, b, d) {
            this.Sj = "wv2.c";
            this.rc = [];
            this.Sa = {};
            this.b = c;
            this.Z = oe(c, this, d, this.Sj);
            this.H = b;
            this.Lb = this.H.vj();
            this.start = this.Z.Y(this.start, "st");
            this.stop = this.Z.Y(this.stop, "sp");
          }
          a.prototype.start = function () {
            var c = this;
            this.rc = B(function (b) {
              var d = b[0],
                e = b[1];
              b = ca(e) ? e : e.Ee;
              e = ca(e) ? c.b : e.target;
              b = D(c.Z.Y(b, d), c);
              return c.Lb.D(e, d, b);
            }, Ga(this.Sa));
          };
          a.prototype.stop = function () {
            E(ma, this.rc);
          };
          a.prototype.ja = function (c) {
            return this.H.bb().ja(c);
          };
          return a;
        })(),
        gk = F("", [
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQA",
          "AAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
        ]),
        Hp = /svg/,
        ne = /^checkbox|radio$/i,
        hk = /^on.+/,
        Rf = W("location.href"),
        Ip = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Ea = { elements: [], attributes: [] };
            d.index = 0;
            d.Ye = d.Z.Y(d.Ye, "o");
            d.fe = d.Z.Y(d.fe, "io");
            d.Ud = d.Z.Y(d.Ud, "ao");
            d.jf = d.Z.Y(d.jf, "a");
            d.gf = d.Z.Y(d.gf, "at");
            d.kf = d.Z.Y(d.kf, "r");
            d.hf = d.Z.Y(d.hf, "c");
            d.rd = new b.MutationObserver(d.Ye);
            return d;
          }
          Ca(c, a);
          c.prototype.start = function () {
            this.rd.observe(this.b.document.documentElement, {
              attributes: !0,
              characterData: !0,
              childList: !0,
              subtree: !0,
              attributeOldValue: !0,
              characterDataOldValue: !0,
            });
          };
          c.prototype.stop = function () {
            this.rd.disconnect();
          };
          c.prototype.Ud = function (b) {
            var d = b.target;
            b = b.attributeName;
            var e = this.Ea.elements.indexOf(d);
            -1 === e &&
              ((e = this.Ea.elements.push(d) - 1),
              (this.Ea.attributes[e] = {}));
            this.Ea.attributes[e] || (this.Ea.attributes[e] = {});
            this.Ea.attributes[e][b] = d.getAttribute(b);
          };
          c.prototype.fe = function (b) {
            function d(m) {
              var n = ob(e.b)(m, f);
              return -1 === n
                ? (f.push(m), (m = { se: {} }), g.push(m), m)
                : g[n];
            }
            var e = this,
              f = [],
              g = [];
            E(function (m) {
              var n = m.attributeName,
                r = m.removedNodes,
                t = m.oldValue,
                v = m.target,
                q = m.nextSibling,
                l = m.previousSibling;
              switch (m.type) {
                case "attributes":
                  e.Ud(m);
                  var h = d(v);
                  h.se[n] || (h.se[n] = me(e.b, v, n, t, e.H.Ae()));
                  break;
                case "childList":
                  r &&
                    E(function (p) {
                      h = d(p);
                      h.qg ||
                        G(h, { qg: v, kj: q ? q : void 0, lj: l ? l : void 0 });
                    }, ka(r));
                  break;
                case "characterData":
                  (h = d(v)), h.rg || (h.rg = t);
              }
            }, b);
            var k = this.H.bb();
            E(function (m, n) {
              k.yf(m, g[n]);
            }, f);
          };
          c.prototype.Ye = function (b) {
            var d = this;
            if (Rf(this.b)) {
              var e = this.H.da();
              this.fe(b);
              E(function (f) {
                var g = f.addedNodes,
                  k = f.removedNodes,
                  m = f.target;
                switch (f.type) {
                  case "childList":
                    k && k.length && d.kf(ka(k), e);
                    g && g.length && d.jf(ka(g), e);
                    break;
                  case "characterData":
                    d.hf(m, e);
                }
              }, b);
              this.gf(e);
            } else this.stop();
          };
          c.prototype.gf = function (b) {
            var d = this;
            E(function (e, f) {
              var g = d.ad();
              d.H.ma(
                "mutation",
                { index: g, attributes: d.Ea.attributes[f], target: d.ja(e) },
                "ac",
                b
              );
            }, this.Ea.elements);
            this.Ea.elements = [];
            this.Ea.attributes = [];
          };
          c.prototype.jf = function (b, d) {
            var e = this,
              f = this.ad();
            this.H.bb().fd({
              fb: b,
              Gd: function (g) {
                g = B(function (k) {
                  k = G({}, k);
                  delete k.node;
                  return k;
                }, g);
                e.H.ma("mutation", { index: f, fb: g }, "ad", d);
              },
            });
          };
          c.prototype.kf = function (b, d) {
            var e = this,
              f = this.ad(),
              g = this.H.bb(),
              k = B(function (m) {
                var n = g.removeNode(m);
                qg(e.b, m, function (r) {
                  g.removeNode(r);
                });
                return n;
              }, b);
            this.H.ma("mutation", { index: f, fb: k }, "re", d);
          };
          c.prototype.hf = function (b, d) {
            var e = this.ad();
            this.H.ma(
              "mutation",
              { value: b.textContent, target: this.ja(b), index: e },
              "tc",
              d
            );
          };
          c.prototype.ad = function () {
            var b = this.index;
            this.index += 1;
            return b;
          };
          return c;
        })(Ua),
        Jp = (function () {
          function a(c, b) {
            var d = this;
            this.Wc = [];
            this.Xe = 1;
            this.lb = 0;
            this.Tb = {};
            this.nc = [];
            this.removeNode = function (f) {
              var g = d.ja(f),
                k = ra(f);
              if (!T(k))
                return (
                  d.na.ia("NR:" + k.toLowerCase(), {
                    data: { node: f, id: g },
                  }),
                  g
                );
            };
            this.zk = function (f) {
              var g = [];
              qg(d.b, f, function (k) {
                var m = d.Pb(k);
                Za(m) || g.push(k);
              });
              return g;
            };
            this.Pb = function (f) {
              if (f) {
                var g = ra(f);
                if (g)
                  return (
                    f.__ym_indexer ||
                      ((f.__ym_indexer = { id: d.Xe }),
                      (d.Xe += 1),
                      d.na.ia("NA:" + g.toLowerCase(), {
                        data: { node: f, id: f.__ym_indexer.id },
                      })),
                    f.__ym_indexer.id
                  );
              }
              return null;
            };
            this.b = c;
            var e = oe(c, this, "i");
            this.na = zc(c);
            this.options = b;
            this.start = e.Y(this.start, "st");
            this.stop = e.Y(this.stop, "sp");
            this.ja = e.Y(this.ja, "i");
            this.yf = e.Y(this.yf, "o");
            this.fd = e.Y(this.fd, "a");
            this.removeNode = e.Y(this.removeNode, "r");
            this.Ia = e.Y(this.Ia, "s");
          }
          a.prototype.yf = function (c, b) {
            Ma(function (d) {
              return d.element === c;
            }, this.nc) && this.ja(c);
            this.nc.push({ element: c, options: b });
          };
          a.prototype.Ob = function () {
            return this.na;
          };
          a.prototype.start = function () {
            this.lb = V(this.b, x(D(this.Ia, this, !1), this.start), 50, "i.s");
          };
          a.prototype.stop = function () {
            this.flush();
            ua(this.b, this.lb);
            this.Wc = [];
          };
          a.prototype.fd = function (c) {
            var b = this,
              d = Eb(this.zk, c.fb),
              e = { Gd: c.Gd, result: [], hd: 0, fb: d };
            this.Wc.push(e);
            E(function (f, g) {
              var k = b.Pb(f);
              Za(k) ||
                (b.Tb[k] && b.ja(f), (b.Tb[k] = { node: f, event: e, Kk: g }));
            }, d);
          };
          a.prototype.ja = function (c) {
            if (c === this.b) return 0;
            var b = this.Pb(c),
              d = this.Tb[b],
              e = this.pj(c),
              f = e.qg,
              g = e.se,
              k = e.rg,
              m = e.kj,
              n = e.lj;
            if (d) {
              e = d.event;
              d = d.Kk;
              var r = this.b.document.documentElement === c;
              m = m || c.nextSibling;
              var t = n || c.previousSibling;
              n = !r && m ? this.Pb(m) : null;
              t = !r && t ? this.Pb(t) : null;
              r = this.b;
              m = this.options;
              f = this.Pb(f || c.parentNode || c.parentElement) || 0;
              void 0 === t && (t = null);
              void 0 === n && (n = null);
              void 0 === g && (g = {});
              var v = ra(c);
              if (T(v)) c = void 0;
              else {
                f = {
                  id: b,
                  uc: t !== f ? t : null,
                  next: n !== f ? n : null,
                  parent: f,
                  name: v.toLowerCase(),
                  node: c,
                };
                if (re(c)) {
                  if (
                    ((g = k || c.textContent || c.data || c.nodeValue || ""),
                    (k = { attributes: {}, content: g }),
                    g && (c = hc(r, c)))
                  )
                    (k.content = "" !== g.trim() ? Xk(r, g) : g),
                      (k.hidden = c);
                } else {
                  k = { attributes: fk(r, c, m, g) };
                  if ((g = gd(c) && nd(c))) k.hidden = g;
                  c.namespaceURI &&
                    Hp.test(c.namespaceURI) &&
                    (k.Sg = c.namespaceURI);
                }
                c = G(f, k);
              }
              if (T(c)) return;
              delete this.Tb[b];
              e.result[d] = c;
              e.hd += 1;
              this.na.ia("NI:" + c.name, { data: c });
              e.fb.length === e.hd && e.Gd(e.result);
            }
            return b;
          };
          a.prototype.flush = function () {
            this.Ia(!0);
          };
          a.prototype.Ia = function (c) {
            var b = this;
            if (Rf(this.b)) {
              var d = Aa(this.Tb);
              d = B(function (e) {
                return b.Tb[e].node;
              }, d);
              d = Jc(d, this.ja);
              c = c ? Hi(J) : Te(this.b, 20);
              d(c);
              this.Wc = X(function (e) {
                return e.hd !== e.result.length;
              }, this.Wc);
            }
          };
          a.prototype.pj = function (c) {
            var b = Ma(function (e) {
              return e.element === c;
            }, this.nc);
            if (b) {
              var d = b.options;
              this.nc = X(function (e) {
                return e !== b;
              }, this.nc);
              return d;
            }
            return {};
          };
          return a;
        })(),
        Kp = ["input", "change", "keyup", "paste", "cut"],
        Lp = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.inputs = [];
            d.je = !1;
            d.root = Hb(b);
            d.ud = d.Z.Y(d.ud, "ii");
            d.vd = d.Z.Y(d.vd, "ir");
            d.yd = d.Z.Y(d.yd, "ri");
            d.De = d.Z.Y(d.De, "ce");
            d.ed = d.Z.Y(d.ed, "vc");
            return d;
          }
          Ca(c, a);
          c.prototype.start = function () {
            var b = this,
              d = this.H.bb().Ob();
            this.je = this.Qi();
            E(function (e) {
              e = e.toLowerCase();
              d.D("NA:" + e, D(b.ud, b)).D("NR:" + e, D(b.vd, b));
            }, zf);
            this.rc = [
              this.Lb.D(this.b.document, F(",", Kp), D(this.De, this)),
              function () {
                E(function (e) {
                  e = e.toLowerCase();
                  d.ya("NA:" + e, b.ud).ya("NR:" + e, b.vd);
                }, zf);
                E(function (e) {
                  return b.Gh(e.element);
                }, b.inputs);
              },
            ];
          };
          c.prototype.Gh = function (b) {
            var d = this;
            this.inputs = X(function (e) {
              var f = e.fk;
              return e.element === b
                ? (d.je && f && d.b.Object.defineProperty(b, d.bd(b), f), !1)
                : !0;
            }, this.inputs);
          };
          c.prototype.vd = function (b) {
            this.Gh(b.data.node);
          };
          c.prototype.ud = function (b) {
            this.yd(b.data.node);
          };
          c.prototype.bd = function (b) {
            return ne.test(b.getAttribute("type")) ? "checked" : "value";
          };
          c.prototype.yg = function (b) {
            return (
              X(function (d) {
                return b === d.element;
              }, this.inputs).shift() || null
            );
          };
          c.prototype.De = function (b) {
            if ((b = b.target)) {
              var d = this.bd(b);
              this.ed(b[d], b);
            }
          };
          c.prototype.ed = function (b, d) {
            var e = this.yg(d);
            if (!e && ((e = this.yd(e)), !e)) return;
            var f = e.Ri,
              g = e.value,
              k = this.bd(d);
            (b && !L(typeof b, ["string", "boolean", "number"])) ||
              b === g ||
              ((g = me(this.b, d, k, b, this.H.Ae())),
              f
                ? this.H.ma(
                    "event",
                    { target: this.ja(d), checked: !!b },
                    "change"
                  )
                : ((f = hd(d)),
                  (k = nd(d)),
                  this.H.ma(
                    "event",
                    { value: g, hidden: k && !f, target: this.ja(d) },
                    "change"
                  )),
              (e.value = b));
          };
          c.prototype.yd = function (b) {
            if (
              !gd(b) ||
              "__ym_input_override_test" === b.getAttribute("class") ||
              this.yg(b)
            )
              return null;
            var d = ne.test(b.getAttribute("type")),
              e = this.bd(b),
              f =
                this.b.Object.getOwnPropertyDescriptor(
                  Object.getPrototypeOf(b),
                  e
                ) || {},
              g = this.b.Object.getOwnPropertyDescriptor(b, e) || {},
              k = G({}, f, g);
            d = { element: b, Ri: d, value: b[e] };
            if (this.je && ea("((set)?(\\s?" + e + ")?)?", k.set)) {
              var m = this;
              try {
                this.b.Object.defineProperty(
                  b,
                  e,
                  G({}, k, {
                    configurable: !0,
                    set: function (n) {
                      m.ed(n, this);
                      return k.set.call(this, n);
                    },
                  })
                );
              } catch (n) {}
              d.fk = k;
            }
            this.inputs.push(d);
            return d;
          };
          c.prototype.Qi = function () {
            var b = !0,
              d = eb(this.b)("input");
            try {
              d = eb(this.b)("input");
              d.value = "INPUT_VALUE";
              d.style.setProperty("display", "none", "important");
              d.setAttribute("type", "text");
              d.setAttribute("class", "__ym_input_override_test");
              this.root.appendChild(d);
              var e =
                  this.b.Object.getOwnPropertyDescriptor(
                    Object.getPrototypeOf(d),
                    "value"
                  ) || {},
                f = this.b.Object.getOwnPropertyDescriptor(d, "value") || {},
                g = G({}, e, f);
              this.b.Object.defineProperty(
                d,
                "value",
                G({}, g, {
                  configurable: !0,
                  set: function (k) {
                    return g.set.call(d, k);
                  },
                })
              );
              "INPUT_VALUE" !== d.value && (b = !1);
              d.value = "INPUT_TEST";
              "INPUT_TEST" !== d.value && (b = !1);
            } catch (k) {
              b = !1;
            }
            d && this.root && this.root.removeChild(d);
            return b;
          };
          return c;
        })(Ua),
        Mp = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.yb = { width: 0, height: 0, hb: 0, ib: 0, orientation: 0 };
            d.Sa =
              ((b = {}),
              (b.resize = function () {
                var e = this.Ce();
                this.Gj(e) && ((this.yb = e), this.oh(e));
              }),
              (b.orientationchange = function () {
                var e = this.Ce();
                this.yb.orientation !== e.orientation &&
                  ((this.yb = e), this.xk(e));
              }),
              b);
            return d;
          }
          Ca(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.nh();
          };
          c.prototype.Og = function (b) {
            return !b.height || !b.width || !b.ib || !b.hb;
          };
          c.prototype.Gj = function (b) {
            return b.height !== this.yb.height || b.width !== this.yb.width;
          };
          c.prototype.Ce = function () {
            var b = this.H.Nb(),
              d = Rc(this.b),
              e = d[0];
            d = d[1];
            b = b.Be();
            return {
              width: e,
              height: d,
              ib: b ? b.scrollWidth : 0,
              hb: b ? b.scrollHeight : 0,
              orientation: this.H.Nb().xj(),
            };
          };
          c.prototype.xk = function (b) {
            var d;
            void 0 === d && (d = this.H.da());
            this.H.ma(
              "event",
              { width: b.width, height: b.height, orientation: b.orientation },
              "deviceRotation",
              d
            );
          };
          c.prototype.oh = function (b, d) {
            void 0 === d && (d = this.H.da());
            this.H.ma(
              "event",
              { width: b.width, height: b.height, ib: b.ib, hb: b.hb },
              "resize",
              d
            );
          };
          c.prototype.nh = function () {
            var b = this.Ce();
            this.Og(b)
              ? V(this.b, D(this.nh, this), 300)
              : (this.Og(this.yb) && (this.yb = b), this.oh(b, 0));
          };
          return c;
        })(Ua),
        $d = (function () {
          function a(c) {
            this.index = 0;
            this.Xb = {};
            this.b = c;
          }
          a.prototype.Qc = function (c, b, d) {
            void 0 === d && (d = {});
            var e = fa(this.b),
              f = this.index;
            this.index += 1;
            this.Xb[f] = { lb: 0, yc: !1, sb: c, Na: [], Qe: e(ba) };
            var g = this;
            return function () {
              var k = va(arguments),
                m = d.Mb && !g.Xb[f].yc,
                n = g.Xb[f];
              ua(g.b, n.lb);
              n.Na = k;
              n.yc = !0;
              var r = e(ba);
              if (m || r - n.Qe >= b) c.apply(void 0, k), (n.Qe = r);
              n.lb = V(
                g.b,
                function () {
                  m || (c.apply(void 0, k), (n.Qe = e(ba)));
                  n.yc = !1;
                  n.Na = [];
                },
                b,
                "th"
              );
            };
          };
          a.prototype.flush = function () {
            var c = this;
            E(function (b) {
              var d = c.Xb[b],
                e = d.lb,
                f = d.sb,
                g = d.Na;
              d.yc && ((c.Xb[b].yc = !1), f.apply(void 0, g), ua(c.b, e));
            }, Aa(this.Xb));
          };
          return a;
        })(),
        Np = (function (a) {
          function c(b, d, e) {
            var f;
            d = a.call(this, b, d, e) || this;
            d.zh = [];
            d.Sa =
              ((f = {}),
              (f.scroll = function (g) {
                if (this.H.Nb().Ig()) this.wd(g);
                else {
                  var k = g.target,
                    m = X(function (n) {
                      return n[0] === k;
                    }, this.zh).pop();
                  m
                    ? (m = m[1])
                    : ((m = this.Ka.Qc(D(this.wd, this), 100, { Mb: !0 })),
                      this.zh.push([k, m]));
                  m(g);
                }
              }),
              f);
            d.Ka = new $d(b);
            d.wd = d.Z.Y(d.wd, "o");
            return d;
          }
          Ca(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.H.ma(
              "event",
              {
                x: Math.max(this.b.scrollX, 0),
                y: Math.max(this.b.scrollY, 0),
                page: !0,
                target: -1,
              },
              "scroll",
              0
            );
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.Ka.flush();
          };
          c.prototype.wd = function (b) {
            var d = this.H.Nb().Be();
            b = b.target;
            var e = this.kc(b);
            d = Ba(la(b), [d, this.b, this.b.document, this.b.document.body]);
            this.H.ma(
              "event",
              {
                x: Math.max(e.left, 0),
                y: Math.max(e.top, 0),
                page: d,
                target: d ? -1 : this.ja(b),
              },
              "scroll"
            );
          };
          c.prototype.kc = function (b) {
            var d = { left: 0, top: 0 };
            if (!b) return d;
            if (b.window === b)
              return { top: b.scrollY || 0, left: b.scrollX || 0 };
            var e = b.ownerDocument || b,
              f = b.documentElement,
              g = e.defaultView || e.parentWindow,
              k = e.body;
            return b !== e || ((b = this.H.Nb().Be()), b)
              ? L(b, [f, k])
                ? {
                    top: b.scrollTop || g.scrollY,
                    left: b.scrollLeft || g.scrollX,
                  }
                : { top: b.scrollTop || 0, left: b.scrollLeft || 0 }
              : d;
          };
          return c;
        })(Ua),
        Op = ["mousemove", "mousedown", "mouseup", "click"],
        Pp = (function (a) {
          function c(b, d, e) {
            var f;
            d = a.call(this, b, d, e) || this;
            d.Sa =
              ((f = {}),
              (f[F(",", Op)] = function (g) {
                "mousemove" === g.type ? this.Ek(g) : this.pd(g);
              }),
              f);
            d.Ka = new $d(b);
            d.pd = d.Z.Y(d.pd, "n");
            d.Ek = d.Z.Y(d.Ka.Qc(D(d.pd, d), 100), "t");
            return d;
          }
          Ca(c, a);
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.Ka.flush();
          };
          c.prototype.pd = function (b) {
            var d = b.type,
              e = b.clientX;
            e = void 0 === e ? null : e;
            var f = b.clientY;
            f = void 0 === f ? null : f;
            b = b.target || this.b.document.elementFromPoint(e, f);
            this.H.ma("event", { x: e || 0, y: f || 0, target: this.ja(b) }, d);
          };
          return c;
        })(Ua),
        Qp = ["focus", "blur"],
        Rp = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.Sa =
              ((b = {}),
              (b[F(",", Qp)] = function (e) {
                var f = e.target;
                e = e.type;
                this.H.ma(
                  "event",
                  {
                    target: this.ja(
                      f === this.b ? this.b.document.documentElement : f
                    ),
                  },
                  e
                );
              }),
              b);
            return d;
          }
          Ca(c, a);
          return c;
        })(Ua),
        Sp = z(function (a) {
          var c = Va(a.getSelection, "getSelection");
          return c ? D(c, a) : J;
        }),
        Tp = x(Sp, ma),
        Up = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
        Vp = /text|search|password|tel|url/,
        Wp = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.Fe = !1;
            d.Sa =
              ((b = {}),
              (b[F(",", Up)] = function (e) {
                var f = this.H,
                  g = e.type,
                  k = e.which;
                e = e.target;
                if ("mousemove" !== g || 1 === k)
                  (g = "select" === g ? this.Bj(e) : this.zj()) &&
                  g.start !== g.end
                    ? ((this.Fe = !0), f.ma("event", g, "selection"))
                    : this.Fe &&
                      ((this.Fe = !1),
                      f.ma("event", { start: 0, end: 0 }, "selection"));
              }),
              b);
            return d;
          }
          Ca(c, a);
          c.prototype.zj = function () {
            var b = Tp(this.b);
            if (b && 0 < b.rangeCount) {
              b = b.getRangeAt(0) || this.b.document.createRange();
              var d = this.ja(b.startContainer),
                e = this.ja(b.endContainer);
              if (!T(d) && !T(e))
                return { start: b.startOffset, end: b.endOffset, Jd: d, Vc: e };
            }
          };
          c.prototype.Bj = function (b) {
            if (Vp.test(b.type || "")) {
              var d = this.ja(b);
              if (!T(d))
                return {
                  start: b.selectionStart,
                  end: b.selectionEnd,
                  target: d,
                };
            }
          };
          return c;
        })(Ua),
        Xp = { focus: "windowfocus", blur: "windowblur" },
        Yp = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.visibility = null;
            T(b.b.document.hidden)
              ? T(b.b.document.msHidden)
                ? T(b.b.document.webkitHidden) ||
                  (b.visibility = {
                    hidden: "webkitHidden",
                    event: "webkitvisibilitychange",
                  })
                : (b.visibility = {
                    hidden: "msHidden",
                    event: "msvisibilitychange",
                  })
              : (b.visibility = {
                  hidden: "hidden",
                  event: "visibilitychange",
                });
            b.handleEvent = b.Z.Y(b.handleEvent, "e");
            return b;
          }
          Ca(c, a);
          c.prototype.start = function () {
            this.rc = [
              this.Lb.D(
                this.b,
                F(
                  ",",
                  this.visibility ? [this.visibility.event] : ["focus", "blur"]
                ),
                D(this.handleEvent, this)
              ),
            ];
          };
          c.prototype.handleEvent = function (b) {
            this.H.ma(
              "event",
              {},
              Xp[
                this.visibility
                  ? this.b.document[this.visibility.hidden]
                    ? "blur"
                    : "focus"
                  : b.type
              ]
            );
          };
          return c;
        })(Ua),
        Zp = [
          "touchmove",
          "touchstart",
          "touchend",
          "touchcancel",
          "touchforcechange",
        ],
        $p = (function (a) {
          function c(b, d, e) {
            var f;
            d = a.call(this, b, d, e) || this;
            d.Kd = {};
            d.scrolling = !1;
            d.lh = 0;
            d.Sa =
              ((f = {}),
              (f.scroll = {
                Ee: function () {
                  var g = this;
                  this.scrolling = !0;
                  ua(this.b, this.lh);
                  this.lh = V(
                    this.b,
                    function () {
                      g.scrolling = !1;
                    },
                    150
                  );
                },
                target: d.b.document,
              }),
              (f[F(",", Zp)] = {
                Ee: function (g) {
                  var k = this,
                    m = "touchcancel" === g.type || "touchend" === g.type;
                  g.changedTouches &&
                    0 < g.changedTouches.length &&
                    E(function (n) {
                      var r = k.Ej(n);
                      n.__ym_touch_id = r;
                      m && delete k.Kd[n.identifier];
                    }, ka(g.changedTouches));
                  "touchmove" === g.type
                    ? this.scrolling
                      ? this.qc(g)
                      : this.Fk(g, this.H.da())
                    : this.qc(g);
                },
                target: d.b.document,
              }),
              f);
            d.Ka = new $d(b);
            d.qc = d.Z.Y(d.qc, "nh");
            d.Fk = d.Z.Y(
              d.Ka.Qc(d.qc, d.H.Nb().Ig() ? 0 : 50, { Mb: !0 }),
              "th"
            );
            return d;
          }
          Ca(c, a);
          c.prototype.Ej = function (b) {
            this.Kd[b.identifier] || (this.Kd[b.identifier] = ig());
            return this.Kd[b.identifier];
          };
          c.prototype.qc = function (b, d) {
            void 0 === d && (d = this.H.da());
            var e = b.type,
              f = B(function (g) {
                return {
                  id: g.__ym_touch_id,
                  x: Math.round(g.clientX),
                  y: Math.round(g.clientY),
                  force: g.force,
                };
              }, ka(b.changedTouches));
            0 < f.length &&
              this.H.ma(
                "event",
                { touches: f, target: this.ja(b.target) },
                e,
                d
              );
          };
          return c;
        })(Ua),
        aq = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.Sa =
              ((b = {}),
              (b.load = {
                Ee: function (e) {
                  e = e.target;
                  "IMG" === ra(e) &&
                    e.getAttribute("srcset") &&
                    this.H.ma(
                      "event",
                      { target: this.ja(e), value: e.currentSrc },
                      "srcset"
                    );
                },
                target: d.b.document,
              }),
              b);
            return d;
          }
          Ca(c, a);
          return c;
        })(Ua),
        bq = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Ph = 1;
            d.Ka = new $d(b);
            d.Mc = d.Z.Y(d.Mc, "z");
            return d;
          }
          Ca(c, a);
          c.prototype.start = function () {
            if (this.Bg()) {
              a.prototype.start.call(this);
              this.Mc();
              var b = this.Lb.D(
                w(this.b, "visualViewport"),
                "resize",
                this.Ka.Qc(this.Mc, 10)
              );
              this.rc.push(b);
            }
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.Ka.flush();
          };
          c.prototype.Mc = function () {
            var b = this.Bg();
            b && b !== this.Ph && ((this.Ph = b), this.yk(b));
          };
          c.prototype.Bg = function () {
            var b = ff(this.b);
            return b ? b[2] : null;
          };
          c.prototype.yk = function (b) {
            var d = De(this.b);
            this.H.ma("event", { x: d.x, y: d.y, level: b }, "zoom");
          };
          return c;
        })(Ua),
        ed,
        ae = {
          91: "super",
          93: "super",
          224: "super",
          18: "alt",
          17: "ctrl",
          16: "shift",
          9: "tab",
          8: "backspace",
          46: "delete",
        },
        fj = { super: 1, wl: 2, alt: 3, shift: 4, em: 5, delete: 6, sl: 6 },
        cq = [4, 9, 8, 32, 37, 38, 39, 40, 46],
        gj =
          ((ed = {}),
          (ed["1"] = {
            91: "&#8984;",
            93: "&#8984;",
            224: "&#8984;",
            18: "&#8997;",
            17: "&#8963;",
            16: "&#8679;",
            9: "&#8677;",
            8: "&#9003;",
            46: "&#9003;",
          }),
          (ed["2"] = {
            91: "&#xff;",
            93: "&#xff;",
            224: "&#xff;",
            18: "Alt",
            17: "Ctrl",
            16: "Shift",
            9: "Tab",
            8: "Backspace",
            46: "Delete",
          }),
          (ed.Vj = {
            32: "SPACEBAR",
            37: "&larr;",
            38: "&uarr;",
            39: "&rarr;",
            40: "&darr;",
            13: "Enter",
          }),
          ed),
        dq = /flash/,
        eq = /ym-disable-keys/,
        fq = /^&#/,
        gq = (function (a) {
          function c(b, d, e) {
            var f;
            d = a.call(this, b, d, e) || this;
            d.Qb = {};
            d.eb = 0;
            d.Ta = [];
            d.xh = [];
            d.Uc = 0;
            d.gh = 0;
            d.Sa =
              ((f = {}),
              (f.keydown = function (g) {
                if (this.ld(g) && !1 === this.Nj(g)) {
                  var k = g.keyCode;
                  g.repeat ||
                    this.Qb[k] ||
                    ((this.Qb[g.keyCode] = !0),
                    ae[g.keyCode] && !this.eb
                      ? ((this.eb += 1), this.Af(g), this.reset(300))
                      : this.eb
                      ? (this.Oi(), this.nf(g), this.oe())
                      : (this.reset(), this.nf(g)));
                }
              }),
              (f.keyup = function (g) {
                if (this.ld(g)) {
                  var k = g.keyCode,
                    m = ae[g.keyCode];
                  this.Qb[g.keyCode] && (this.Qb[k] = !1);
                  m && this.eb && ((this.eb = 0), (this.Qb = {}));
                  1 === this.Ta.length &&
                    ((g = this.Ta[0]),
                    L(g.keyCode, cq) && (this.Fd([g], !0), this.reset()));
                  this.Ta = X(x(la(k), Zb), this.Ta);
                  ua(this.b, this.Uc);
                }
              }),
              f);
            d.ti =
              -1 !== (w(b, "navigator.appVersion") || "").indexOf("Mac")
                ? "1"
                : "2";
            d.ld = d.Z.Y(d.ld, "v");
            d.oe = d.Z.Y(d.oe, "ec");
            d.Fd = d.Z.Y(d.Fd, "sk");
            d.ze = d.Z.Y(d.ze, "gk");
            d.Af = d.Z.Y(d.Af, "sc");
            d.Lc = d.Z.Y(d.Lc, "cc");
            d.reset = d.Z.Y(d.reset, "r");
            d.Ad = d.Z.Y(d.Ad, "rs");
            return d;
          }
          Ca(c, a);
          c.prototype.ld = function (b) {
            var d = this.b.document.activeElement;
            b = b.target;
            return !Ba(Boolean, [
              d &&
                "OBJECT" === d.nodeName &&
                dq.test(d.getAttribute("type") || ""),
              "INPUT" === b.nodeName &&
                "password" === b.getAttribute("type") &&
                eq.test(b.className),
            ]);
          };
          c.prototype.oe = function () {
            this.xh = this.Ta.slice(0);
            ua(this.b, this.Uc);
            this.Uc = V(this.b, A(this.xh, D(this.Fd, this)), 0, "e.c");
          };
          c.prototype.Fd = function (b, d) {
            void 0 === d && (d = !1);
            if (1 < b.length || d) {
              var e = this.ze(b);
              this.H.ma("event", { Ua: e }, "keystroke");
            }
          };
          c.prototype.ze = function (b) {
            var d = this;
            b = B(function (e) {
              e = e.keyCode;
              var f = ae[e],
                g = d.wj(e);
              return { id: e, key: g, jd: !!f && fq.test(g), Rb: f };
            }, b);
            return ke(function (e, f) {
              return (fj[e.Rb] || 100) - (fj[f.Rb] || 100);
            }, b);
          };
          c.prototype.wj = function (b) {
            return gj[this.ti][b] || gj.Vj[b] || String.fromCharCode(b);
          };
          c.prototype.nf = function (b) {
            L(b, this.Ta) || this.Ta.push(b);
          };
          c.prototype.Af = function (b) {
            this.nf(b);
            this.Lc();
          };
          c.prototype.Lc = function () {
            this.eb ? V(this.b, this.Lc, 100) : (this.Ta = []);
          };
          c.prototype.Oi = function () {
            ua(this.b, this.gh);
          };
          c.prototype.reset = function (b) {
            b ? (this.gh = V(this.b, D(this.Ad, this), b)) : this.Ad();
          };
          c.prototype.Ad = function () {
            this.eb = 0;
            this.Ta = [];
            this.Qb = {};
            ua(this.b, this.Uc);
          };
          c.prototype.Nj = function (b) {
            return b.target && "INPUT" === b.target.nodeName
              ? b.shiftKey || 32 === b.keyCode || "shift" === ae[b.keyCode]
              : !1;
          };
          return c;
        })(Ua),
        ek = ["sr", "sd", "\u043d"],
        hq = /allow-same-origin/,
        iq = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.Ac = [];
            b.te = {};
            b.Ze = b.Z.Y(b.Ze, "fi");
            b.$e = b.Z.Y(b.$e, "sd");
            b.af = b.Z.Y(b.af, "src");
            b.rd = new MutationObserver(b.af);
            return b;
          }
          Ca(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.H.Ae().ec && this.H.bb().Ob().D("NA:iframe", D(this.Ze, this));
            this.H.xg().Ob().D("sdr", D(this.$e, this));
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            E(function (b) {
              b.H.stop();
            }, this.Ac);
          };
          c.prototype.af = function (b) {
            var d = b.pop().target;
            if (
              (b = Ma(function (f) {
                return f.Fg === d;
              }, this.Ac))
            ) {
              this.Ac = X(function (f) {
                return f.Fg !== d;
              }, this.Ac);
              var e = b.H.ye();
              try {
                b.H.stop();
              } catch (f) {}
              this.Pc(d, e);
            }
          };
          c.prototype.Ze = function (b) {
            var d = b.data.node;
            this.rd.observe(d, { attributes: !0, attributeFilter: ["src"] });
            this.Pc(d, b.data.id);
          };
          c.prototype.Pc = function (b, d) {
            var e = this;
            if (this.Lj(b))
              id(this.b, b)
                .then(function () {
                  var f = e.H.Pc(b.contentWindow, d);
                  e.Ac.push({ H: f, Fg: b });
                })
                ["catch"](J);
          };
          c.prototype.$e = function (b) {
            var d = this,
              e = b.ba;
            b = b.data;
            this.te[e] || (this.te[e] = { data: [] });
            var f = this.te[e];
            f.data = f.data.concat(b);
            this.b.isNaN(f.ie) &&
              E(function (g) {
                "page" === g.type && (f.ie = g.data.Da - d.H.zg());
              }, f.data);
            this.b.isNaN(f.ie) ||
              (this.H.Ia(
                B(function (g) {
                  g.da += f.ie;
                  g.da = d.b.Math.max(0, g.da);
                  return g;
                }, f.data)
              ),
              (f.data = []));
          };
          c.prototype.Lj = function (b) {
            var d = b.getAttribute("src"),
              e = b.getAttribute("sandbox");
            return (e && !e.match(hq)) ||
              (d &&
                "about:blank" !== d &&
                (d = Fb(this.b, d).host) &&
                Q(this.b).host !== d)
              ? !1
              : w(b, "contentWindow.location.href");
          };
          return c;
        })(Ua),
        jq = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.tf = b.Z.Y(b.tf, "ps");
            return b;
          }
          Ca(c, a);
          c.prototype.start = function () {
            this.H.bb().fd({
              fb: [this.b.document.documentElement],
              Gd: this.tf,
            });
          };
          c.prototype.tf = function (b) {
            var d = this.H.yj(),
              e = d.qj(),
              f = Q(this.b),
              g = f.host,
              k = f.protocol;
            f = f.pathname;
            var m = Rc(this.b),
              n = m[0];
            m = m[1];
            this.H.ma(
              "page",
              {
                content: B(function (r) {
                  r = G({}, r);
                  delete r.node;
                  return r;
                }, b),
                Jc: e || "",
                gd: !!e,
                viewport: { width: n, height: m },
                title: this.b.document.title,
                doctype: d.sj() || "",
                Ic: this.b.location.href,
                Md: this.b.navigator.userAgent,
                referrer: this.b.document.referrer,
                screen: {
                  width: this.b.screen.width,
                  height: this.b.screen.height,
                },
                location: { host: g, protocol: k, path: f },
                Da: this.H.zg(),
                Wb: d.Cj(),
              },
              "page",
              0
            );
          };
          return c;
        })(Ua),
        Sf = [
          [Ip, "mu"],
          [Lp, "in"],
          [Mp, "r"],
          [Np, "sc"],
          [Pp, "mo"],
          [Rp, "f"],
          [Wp, "se"],
          [Yp, "wf"],
          [$p, "t"],
          [aq, "src"],
          [bq, "z"],
          [gq, "ks"],
        ];
      Sf.push([iq, "if"]);
      Sf.push([jq, "pa"]);
      var kq = z(function (a) {
          var c = a.document;
          return {
            Be: function () {
              if (c.scrollingElement) return c.scrollingElement;
              var b =
                0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body;
              return c.documentElement.scrollHeight >= w(c, "body.scrollHeight")
                ? b
                : null;
            },
            xj: function () {
              var b = a.screen;
              if (!b) return 0;
              var d = Ma(A(b, w), [
                "orientation",
                "mozOrientation",
                "msOrientation",
              ]);
              return w(b, d + ".angle") || 0;
            },
            Il: A(a, sb),
            Ig: A(a, wf),
            Hl: A(a, zi),
          };
        }),
        lq = (function () {
          function a(c, b) {
            var d = this;
            this.mc = 0;
            this.Sc = [];
            this.lc = null;
            this.Ha = this.Dc = this.vh = !1;
            this.Da = 0;
            this.yj = function () {
              return d.page;
            };
            this.ye = function () {
              return d.mc;
            };
            this.zg = function () {
              return d.Da;
            };
            this.vj = function () {
              return d.Lb;
            };
            this.xg = function () {
              return d.lc;
            };
            this.bb = function () {
              return d.He;
            };
            this.da = function () {
              return d.Ef ? d.b.Math.max(d.Ef(ba) - d.Da, 0) : 0;
            };
            this.Ae = function () {
              return d.options;
            };
            this.Nb = function () {
              return d.Ki;
            };
            this.ma = function (g, k, m, n) {
              void 0 === n && (n = d.da());
              g = d.uj(g, k, m, n);
              d.Ia(g);
            };
            this.uj = function (g, k, m, n) {
              void 0 === n && (n = d.da());
              return { type: g, data: k, da: n, ba: d.mc, event: m };
            };
            this.Ia = function (g) {
              g = ha(g) ? g : [g];
              d.vh && !d.Dc
                ? d.Ha
                  ? ((g = B(function (k) {
                      return k.ba ? k : G(k, { ba: d.mc });
                    }, g)),
                    d.xg().ph(g))
                  : ((g = B(ak, g)), d.xf(g))
                : (d.Sc = d.Sc.concat(g));
            };
            this.b = c;
            var e = oe(c, this, "R");
            this.Bf = e.Y(this.Bf, "s");
            this.Ia = e.Y(this.Ia, "sd");
            try {
              var f = Y(c);
              f.o("wv2e") && gf();
              f.C("wv2e", !0);
              this.options = b;
              this.Lb = qa(c);
              this.He = new Jp(this.b, b);
              this.Ki = kq(c);
              this.gg = B(function (g) {
                return new g[0](c, d, g[1]);
              }, Sf);
              this.Kj();
              this.page = ck(this.b);
              this.Bf();
            } catch (g) {
              throw (od(this.b, "ww2.R.c", g), g);
            }
          }
          a.prototype.start = function (c) {
            this.vh = !0;
            this.xf = c;
            this.mh();
          };
          a.prototype.stop = function () {
            Rf(this.b) &&
              (E(function (c) {
                return c.stop();
              }, this.gg),
              this.He.stop(),
              this.lc && this.lc.stop(),
              this.Ha || this.ma("event", {}, "eof"));
          };
          a.prototype.Pc = function (c, b) {
            var d = new a(c, G({}, this.options, { ba: b }));
            d.start(J);
            return d;
          };
          a.prototype.Kj = function () {
            var c = this;
            this.Ha = !!this.options.ba;
            this.mc = this.options.ba || 0;
            this.Dc = !this.Ha;
            var b = this.options.Eh || [];
            b.push(Q(this.b).host);
            this.lc = dk(this.b, this, b);
            b = this.lc.Ob();
            sb(this.b)
              ? this.Dc &&
                b.D("i", function (d) {
                  c.Ha = d.Ha;
                  c.Dc = !1;
                  d.ba && (c.mc = d.ba);
                  c.mh();
                })
              : (this.Dc = this.Ha = !1);
          };
          a.prototype.mh = function () {
            var c = this.Sc.splice(0, this.Sc.length);
            this.Ia(c);
          };
          a.prototype.Bf = function () {
            this.Ef = xh(this.b);
            this.Da = this.Ef(ba);
            E(function (c) {
              c.start();
            }, this.gg);
            this.He.start();
          };
          return a;
        })(),
        mq = H("w2", function (a, c) {
          var b = Y(a),
            d = Z(c);
          if (c.Db && !Wb(a) && a.MutationObserver) {
            ea("MutationObserver", a.MutationObserver) ||
              Fe(a).warn(
                "MutationObserver is overriden, webvisor is not guaranteed to work in this environment"
              );
            var e = Ja(function (g, k) {
                Fa(a, c, k)["catch"](g);
              }),
              f = pk(a)(ao(R([a, c], Vj)))(
                Ii(function (g) {
                  return new lq(a, g);
                })
              );
            fm([f, e])(
              mc(C(a, "rdr.sett"), function (g) {
                function k() {
                  n || ((n = !0), m.stop());
                }
                var m = g[0];
                g = g[1];
                var n = !1,
                  r = b.o("wv2Counter");
                if (!Ag(a, g) || r) k();
                else if (
                  (qa(a).D(a, "beforeunload,unload", k),
                  b.C("wv2Counter", d),
                  b.C("stopRecorder", k),
                  (g = [new Td(a)]),
                  g.unshift(new Gp(a)),
                  (g = Ma(function (q) {
                    return q.isEnabled();
                  }, g)))
                ) {
                  r = Yj(a, c, !(g instanceof Td));
                  var t = Hf.xe(d, "m", A("m", r), g, a),
                    v = Hf.xe(d, "e", A("e", r), g, a);
                  g = Xj();
                  r = g.ck;
                  v.D("ag", g.Ii);
                  v.D("p", r);
                  g = Wa(function (q) {
                    "eof" === w(q, "data.type")
                      ? (v.push(q), t.push(q), v.flush(), t.flush())
                      : ("event" === q.type ? v : t).push(q);
                  });
                  V(a, k, 864e5);
                  m.start(g);
                }
              })
            );
          }
        }),
        nq = I(function (a, c) {
          0 === parseFloat(w(c, "settings.c_recp")) &&
            (a.Se.C("ymoo" + a.hg, a.Ah(hb)),
            a.ee && a.ee.destruct && a.ee.destruct());
        }),
        oq = H("wsa", function (a, c) {
          var b = { hg: Z(c), ee: La(a, c), Ah: fa(a), Se: Na(a) },
            d = b.Ah(hb);
          if (b.Se.Je) return !1;
          var e = b.Se.o("ymoo" + b.hg);
          if (e && 30 > d - e) return !0;
          Fa(a, c, nq(b))["catch"](C(a, "d.f"));
          return !1;
        }),
        Mj = [-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0],
        Jj = ["webgl", "experimental-webgl"],
        Hj = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(
          ";"
        ),
        gg = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(
          ";"
        ),
        Ej = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(
          " "
        ),
        pq = x(W("performance.memory.jsHeapSizeLimit"), oa("concat", "")),
        qq = ge("screen.", ["availWidth", "availHeight", "availTop"]),
        Cj = ["name", "lang", "localService", "voiceURI", "default"],
        fg = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(
          " "
        ),
        Aj = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
        yj = z(function (a, c) {
          return Fa(a, c, W("settings.form_goals"));
        }, qb),
        rq = A(!0, cg),
        sq = H("s.f.i", function (a, c) {
          var b = [];
          qa(a).D(a, "click", C(a, "s.f.c", R([a, c, b], xj)));
          qa(a).D(a, "submit", C(a, "s.f.e", x(W("target"), R([a, c, b], rq))));
          eg(a, c, "Form goal. Counter " + c.id + ". Init.");
        }),
        tq = Kd("rtg", function (a, c) {
          var b = Z(c);
          Fa(a, c, function (d) {
            var e = w(d, "settings.rt");
            d = Ng(d);
            if (e && !d)
              return Og(a, c).then(function () {
                ph(c)[b] = 1;
              });
          })["catch"](C(a, "l.rtg"));
        }),
        hj = Va(String.prototype.repeat, "repeat"),
        ag = hj
          ? function (a, c) {
              return hj.call(a, c);
            }
          : Om,
        ij = /[^\d]/g,
        uq = /[^\d.,]/g,
        vq = /[.,]$/,
        vj = H("ep.pp", function (a, c) {
          if (!c) return 0;
          a: {
            var b = c.replace(uq, "").replace(vq, "");
            var d = "0" === b[b.length - 1];
            for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
              var f = b[e - 1];
              if (L(f, [",", "."])) {
                d = f;
                break a;
              }
            }
            d = "";
          }
          b = d ? c.split(d) : [c];
          d = d ? b[1] : "00";
          b = parseFloat(b[0].replace(ij, "") + "." + d.replace(ij, ""));
          d = Math.pow(10, 8) - 0.01;
          a.isNaN(b) ? (b = 0) : ((b = Math.min(b, d)), (b = Math.max(b, 0)));
          return b;
        }),
        wq = [
          [["EUR", "\u20ac"], "978"],
          [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"],
          [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"],
          [
            "\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(
              " "
            ),
            "398",
          ],
          [["GBP", "\u00a3", "UKL"], "826"],
          [
            "RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(
              " "
            ),
            "643",
          ],
        ],
        xq = /\s/g,
        yq = z(function (a) {
          return new RegExp(a.join("|"), "i");
        }),
        zq = H("ep.cp", function (a) {
          if (!a) return "000";
          var c = a.replace(xq, "");
          return (a = Ma(function (b) {
            return yq(b[0]).test(c);
          }, wq))
            ? a[1]
            : "000";
        }),
        uj = H("ep.en", function (a, c, b) {
          a = Yf(a);
          c = "" + 100 * c + b + a;
          b = 16 - c.length;
          if (0 > b) return "";
          c = ag("0", b) + c;
          b = c.slice(0, 8);
          c = c.slice(-8);
          b = (+b ^ 92844).toString(35);
          c = (+c ^ 92844).toString(35);
          return "" + b + "z" + c;
        }),
        jj = x(Xf, zq),
        kj = H("ep.ctp", function (a, c, b, d) {
          var e = jj(a, b),
            f = Wf(a, d);
          Vf(a, c, e, f);
          ea("MutationObserver", a.MutationObserver) &&
            new MutationObserver(function () {
              var g = jj(a, b),
                k = Wf(a, d);
              if (e !== g || f !== k) (e = g), (f = k), Vf(a, c, e, f);
            }).observe(a.document.body, {
              attributes: !0,
              childList: !0,
              subtree: !0,
              characterData: !0,
            });
        }),
        Aq = H("ep.chp", function (a, c, b, d) {
          ce(a, c);
          return b || d
            ? qa(a).D(
                a.document,
                "click",
                C(a, "ep.chp.cl", R([a, c, b, d], tj))
              )
            : J;
        }),
        Bq = z(function (a) {
          function c() {
            var n = m + "0",
              r = m + "1";
            g[n]
              ? g[r]
                ? ((m = m.slice(0, -1)), --k)
                : ((f[r] = d(8)), (g[r] = 1))
              : ((f[n] = d(8)), (g[n] = 1));
          }
          function b() {
            var n = m + "1";
            g[m + "0"]
              ? g[n]
                ? ((m = m.slice(0, -1)), --k)
                : ((m += "1"), (g[m] = 1))
              : ((m += "0"), (g[m] = 1));
          }
          function d(n) {
            void 0 === n && (n = 1);
            var r = e.slice(k, k + n);
            k += n;
            return r;
          }
          for (
            var e = $f(
                a,
                "AT5T6ku06kEsXK3iyBRgo6lk8rCtX4Kjf0qpRe74vtAplOkkpSi8E9FDTBJlIV6szGuWawyILrLlztwl4KEqs1pNFvNdtIrYtROBN1gSGS1adp+myrzmZKoqErtCv20WyWiRlEqZQUzvV3sRa1nScmlxptwLLY7o",
                ""
              ),
              f = {},
              g = {},
              k = 1,
              m = "";
            k < e.length - 1;

          )
            ("0" === d() ? b : c)();
          return f;
        }),
        sj = H("ep.dec", function (a, c) {
          if (!c || Wb(a)) return [];
          var b = $f(a, c, " ").split(" "),
            d = b[1],
            e = b[2],
            f = b.slice(3);
          if (1 !== parseInt(b[0], 2)) return [];
          b = Bq(a);
          f = f.join("");
          d = parseInt(d + e, 2);
          for (var g = (e = ""), k = 0; g.length < d && f[k]; )
            (e += f[k]),
              b[e] && ((g += String.fromCharCode(parseInt(b[e], 2))), (e = "")),
              (k += 1);
          b = pb(a, g);
          return ha(b) ? b : [];
        }),
        Cq = H("ep.i", function (a, c) {
          return ea("querySelectorAll", a.document.querySelectorAll)
            ? nb(a, c).then(function (b) {
                var d = b[0],
                  e = b[1],
                  f = b[2],
                  g = b[3],
                  k = b[4],
                  m = b[5],
                  n = b[6],
                  r = b[7],
                  t = b[8],
                  v = b[9],
                  q = Ea(a, d),
                  l = Ea(a, g),
                  h = Ea(a, n),
                  p = Ea(a, t),
                  u = "" + d + e + f === "" + g + k + m;
                return id(a).then(function () {
                  q && kj(a, c, e, f);
                  l && !u && kj(a, c, k, m);
                  return h || p ? Aq(a, c, r, v) : J;
                });
              })
            : P.resolve(J);
        }),
        Pb = Y(window);
      Pb.Bb("hitParam", {});
      Pb.Bb("lastReferrer", window.location.href);
      Pb.Bb("getCounters", Mo(window));
      Je.push(kp);
      var lj = (function () {
        return function (a, c, b, d) {
          var e = this;
          return C(window, "c.i", function () {
            function f(h) {
              return Nd(k, m, h)(k, m);
            }
            function g(h) {
              return yn(k, m, v, h);
            }
            (!window || (isNaN(a) && !a)) && gf();
            var k = window,
              m = Km(a, Bi, c, b, d);
            m.id || vb(k, "Invalid Metrika id: " + m.id);
            var n = Z(m),
              r = Pb.o("counters", {}),
              t = [],
              v = [Nd, xn];
            if (r[n])
              return vb(k, "Duplicate counter " + n + " initialization"), r[n];
            var q = !1,
              l = Pb.o("hitParam", {});
            l[n] && (q = !("1" !== m.qa || r[n]));
            l[n] = 1;
            e._webvisor = m.Db || !1;
            r[n] = e;
            Pb.C("counters", r);
            Pb.Bb("counter", e);
            l = No(window, m);
            t.push(l);
            je(window);
            oq(window, m) && delete r[n];
            f(Cp);
            Co(k, [Qj(Ij), Rj, Sj, Uj, Fj, Dj, pq, qq, Bj, zj, Gj]);
            f(Fo);
            f(ik);
            e.replacePhones = f(vp) || J;
            f(xp);
            e.hit = g(Go(k, m))();
            e.params = g(lp(k, m))();
            n = f(Oo);
            t.push(w(n, Ha({ unsubscribe: 1 })));
            e.trackHash = Nd(k, m, w(n, Ha({ Ik: 1 })));
            e.reachGoal = g(fe(k, m))();
            e.experiments = g(mp(k, m))();
            f(zp);
            f(Ko);
            q || f(ep);
            f(Ji);
            q = f(Ro);
            t.push(w(q, Ha({ ke: 1 })));
            e.notBounce = g(w(q, Ha({ Zj: 1 })))();
            e.accurateTrackBounce = g(w(q, Ha({ Hc: 1 })))();
            f(np);
            q = f(Uo);
            t.push(w(q, Ha({ ke: 1 })));
            e.extLink = g(w(q, Ha({ gj: 1 })))();
            e.addFileExtension = g(w(q, Ha({ Hi: 1 })))();
            e.file = g(w(q, Ha({ file: 1 })))();
            e.trackLinks = g(w(q, Ha({ Ld: 1 })))();
            t.push(pp(k, m));
            e.ecommerceAdd = g(qp(k, m))();
            e.ecommerceRemove = g(rp(k, m))();
            e.ecommerceDetail = g(sp(k, m))();
            e.ecommercePurchase = g(tp(k, m))();
            q = f(yp);
            e.userParams = g(q || J)();
            e.destruct = g(Ap(k, m, t))(!0, !1);
            f(Dp);
            f(Xo);
            q = f(Ep);
            e.setUserID = g(q || J)();
            e.getClientID = f(Fp) || J;
            t.push(f(Yo));
            e.clickmap = g(gp(k, m))();
            f(mq);
            (q = f(Cq)) && q.then(oa("push", t));
            f(fp);
            e.enableAll = g(hp(k, m))();
            f(sq);
            f(tq);
            f(ip);
            f(jp);
            f(Fk);
          })();
        };
      })();
      (function (a) {
        var c = Y(a);
        c.o("i") || (c.C("i", !0), qa(a).D(a, "message", A(a, xk)));
      })(window);
      if (window.Ya && lj) {
        var mj = za.Nc;
        window.Ya[mj] = lj;
        So(window);
        var nj = window.Ya[mj];
        nj.informer = hl(window);
        nj.counters = Pb.o("getCounters");
      }
      (function (a) {
        var c = w(a, "ym");
        if (c) {
          var b = w(c, "a");
          b || ((c.a = []), (b = c.a));
          var d = wg(a);
          Ze(a, b, function (e) {
            e.D(d);
          });
        }
      })(window);
      aa.bl = 1;
      aa.dl = 10;
      return aa;
    })({});
  } catch (aa) {}
}.call(this));
