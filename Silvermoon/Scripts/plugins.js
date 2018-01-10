//jquery.easing.1.3.js
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = .70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */


//placeholders.min.js
/* Placeholders.js v3.0.2 */
(function (t) {
    "use strict";

    function e(t, e, r) {
        return t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent ? t.attachEvent("on" + e, r) : void 0
    }

    function r(t, e) {
        var r, n;
        for (r = 0, n = t.length; n > r; r++)
            if (t[r] === e) return !0;
        return !1
    }

    function n(t, e) {
        var r;
        t.createTextRange ? (r = t.createTextRange(), r.move("character", e), r.select()) : t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
    }

    function a(t, e) {
        try {
            return t.type = e, !0
        } catch (r) {
            return !1
        }
    }
    t.Placeholders = {
        Utils: {
            addEventListener: e,
            inArray: r,
            moveCaret: n,
            changeType: a
        }
    }
})(this),
function (t) {
    "use strict";

    function e() {}

    function r() {
        try {
            return document.activeElement
        } catch (t) {}
    }

    function n(t, e) {
        var r, n, a = !!e && t.value !== e,
            u = t.value === t.getAttribute(V);
        return (a || u) && "true" === t.getAttribute(D) ? (t.removeAttribute(D), t.value = t.value.replace(t.getAttribute(V), ""), t.className = t.className.replace(R, ""), n = t.getAttribute(F), parseInt(n, 10) >= 0 && (t.setAttribute("maxLength", n), t.removeAttribute(F)), r = t.getAttribute(P), r && (t.type = r), !0) : !1
    }

    function a(t) {
        var e, r, n = t.getAttribute(V);
        return "" === t.value && n ? (t.setAttribute(D, "true"), t.value = n, t.className += " " + I, r = t.getAttribute(F), r || (t.setAttribute(F, t.maxLength), t.removeAttribute("maxLength")), e = t.getAttribute(P), e ? t.type = "text" : "password" === t.type && M.changeType(t, "text") && t.setAttribute(P, "password"), !0) : !1
    }

    function u(t, e) {
        var r, n, a, u, i, l, o;
        if (t && t.getAttribute(V)) e(t);
        else
            for (a = t ? t.getElementsByTagName("input") : b, u = t ? t.getElementsByTagName("textarea") : f, r = a ? a.length : 0, n = u ? u.length : 0, o = 0, l = r + n; l > o; o++) i = r > o ? a[o] : u[o - r], e(i)
    }

    function i(t) {
        u(t, n)
    }

    function l(t) {
        u(t, a)
    }

    function o(t) {
        return function () {
            m && t.value === t.getAttribute(V) && "true" === t.getAttribute(D) ? M.moveCaret(t, 0) : n(t)
        }
    }

    function c(t) {
        return function () {
            a(t)
        }
    }

    function s(t) {
        return function (e) {
            return A = t.value, "true" === t.getAttribute(D) && A === t.getAttribute(V) && M.inArray(C, e.keyCode) ? (e.preventDefault && e.preventDefault(), !1) : void 0
        }
    }

    function d(t) {
        return function () {
            n(t, A), "" === t.value && (t.blur(), M.moveCaret(t, 0))
        }
    }

    function g(t) {
        return function () {
            t === r() && t.value === t.getAttribute(V) && "true" === t.getAttribute(D) && M.moveCaret(t, 0)
        }
    }

    function v(t) {
        return function () {
            i(t)
        }
    }

    function p(t) {
        t.form && (T = t.form, "string" == typeof T && (T = document.getElementById(T)), T.getAttribute(U) || (M.addEventListener(T, "submit", v(T)), T.setAttribute(U, "true"))), M.addEventListener(t, "focus", o(t)), M.addEventListener(t, "blur", c(t)), m && (M.addEventListener(t, "keydown", s(t)), M.addEventListener(t, "keyup", d(t)), M.addEventListener(t, "click", g(t))), t.setAttribute(j, "true"), t.setAttribute(V, x), (m || t !== r()) && a(t)
    }
    var b, f, m, h, A, y, E, x, L, T, N, S, w, B = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
        C = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
        k = "#ccc",
        I = "placeholdersjs",
        R = RegExp("(?:^|\\s)" + I + "(?!\\S)"),
        V = "data-placeholder-value",
        D = "data-placeholder-active",
        P = "data-placeholder-type",
        U = "data-placeholder-submit",
        j = "data-placeholder-bound",
        q = "data-placeholder-focus",
        z = "data-placeholder-live",
        F = "data-placeholder-maxlength",
        G = document.createElement("input"),
        H = document.getElementsByTagName("head")[0],
        J = document.documentElement,
        K = t.Placeholders,
        M = K.Utils;
    if (K.nativeSupport = void 0 !== G.placeholder, !K.nativeSupport) {
        for (b = document.getElementsByTagName("input"), f = document.getElementsByTagName("textarea"), m = "false" === J.getAttribute(q), h = "false" !== J.getAttribute(z), y = document.createElement("style"), y.type = "text/css", E = document.createTextNode("." + I + " { color:" + k + "; }"), y.styleSheet ? y.styleSheet.cssText = E.nodeValue : y.appendChild(E), H.insertBefore(y, H.firstChild), w = 0, S = b.length + f.length; S > w; w++) N = b.length > w ? b[w] : f[w - b.length], x = N.attributes.placeholder, x && (x = x.nodeValue, x && M.inArray(B, N.type) && p(N));
        L = setInterval(function () {
            for (w = 0, S = b.length + f.length; S > w; w++) N = b.length > w ? b[w] : f[w - b.length], x = N.attributes.placeholder, x ? (x = x.nodeValue, x && M.inArray(B, N.type) && (N.getAttribute(j) || p(N), (x !== N.getAttribute(V) || "password" === N.type && !N.getAttribute(P)) && ("password" === N.type && !N.getAttribute(P) && M.changeType(N, "text") && N.setAttribute(P, "password"), N.value === N.getAttribute(V) && (N.value = x), N.setAttribute(V, x)))) : N.getAttribute(D) && (n(N), N.removeAttribute(V));
            h || clearInterval(L)
        }, 100)
    }
    M.addEventListener(t, "beforeunload", function () {
        K.disable()
    }), K.disable = K.nativeSupport ? e : i, K.enable = K.nativeSupport ? e : l
}(this);


//jquery.cycle2.min.js
/*!
 * jQuery Cycle2; version: 2.1.3 build: 20140314
 * http://jquery.malsup.com/cycle2/
 * Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
 */
(function (e) {
    "use strict";

    function t(e) {
        return (e || "").toLowerCase()
    }
    var i = "2.1.2";
    e.fn.cycle = function (i) {
        var n;
        return 0 !== this.length || e.isReady ? this.each(function () {
            var n, s, o, c, l = e(this),
                r = e.fn.cycle.log;
            if (!l.data("cycle.opts")) {
                (l.data("cycle-log") === !1 || i && i.log === !1 || s && s.log === !1) && (r = e.noop), r("--c2 init--"), n = l.data();
                for (var a in n) n.hasOwnProperty(a) && /^cycle[A-Z]+/.test(a) && (c = n[a], o = a.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, t), r(o + ":", c, "(" + typeof c + ")"), n[o] = c);
                s = e.extend({}, e.fn.cycle.defaults, n, i || {}), s.timeoutId = 0, s.paused = s.paused || !1, s.container = l, s._maxZ = s.maxZ, s.API = e.extend({
                    _container: l
                }, e.fn.cycle.API), s.API.log = r, s.API.trigger = function (e, t) {
                    return s.container.trigger(e, t), s.API
                }, l.data("cycle.opts", s), l.data("cycle.API", s.API), s.API.trigger("cycle-bootstrap", [s, s.API]), s.API.addInitialSlides(), s.API.preInitSlideshow(), s.slides.length && s.API.initSlideshow()
            }
        }) : (n = {
            s: this.selector,
            c: this.context
        }, e.fn.cycle.log("requeuing slideshow (dom not ready)"), e(function () {
            e(n.s, n.c).cycle(i)
        }), this)
    }, e.fn.cycle.API = {
        opts: function () {
            return this._container.data("cycle.opts")
        },
        addInitialSlides: function () {
            var t = this.opts(),
                i = t.slides;
            t.slideCount = 0, t.slides = e(), i = i.jquery ? i : t.container.find(i), t.random && i.sort(function () {
                return Math.random() - .5
            }), t.API.add(i)
        },
        preInitSlideshow: function () {
            var t = this.opts();
            t.API.trigger("cycle-pre-initialize", [t]);
            var i = e.fn.cycle.transitions[t.fx];
            i && e.isFunction(i.preInit) && i.preInit(t), t._preInitialized = !0
        },
        postInitSlideshow: function () {
            var t = this.opts();
            t.API.trigger("cycle-post-initialize", [t]);
            var i = e.fn.cycle.transitions[t.fx];
            i && e.isFunction(i.postInit) && i.postInit(t)
        },
        initSlideshow: function () {
            var t, i = this.opts(),
                n = i.container;
            i.API.calcFirstSlide(), "static" == i.container.css("position") && i.container.css("position", "relative"), e(i.slides[i.currSlide]).css({
                opacity: 1,
                display: "block",
                visibility: "visible"
            }), i.API.stackSlides(i.slides[i.currSlide], i.slides[i.nextSlide], !i.reverse), i.pauseOnHover && (i.pauseOnHover !== !0 && (n = e(i.pauseOnHover)), n.hover(function () {
                i.API.pause(!0)
            }, function () {
                i.API.resume(!0)
            })), i.timeout && (t = i.API.getSlideOpts(i.currSlide), i.API.queueTransition(t, t.timeout + i.delay)), i._initialized = !0, i.API.updateView(!0), i.API.trigger("cycle-initialized", [i]), i.API.postInitSlideshow()
        },
        pause: function (t) {
            var i = this.opts(),
                n = i.API.getSlideOpts(),
                s = i.hoverPaused || i.paused;
            t ? i.hoverPaused = !0 : i.paused = !0, s || (i.container.addClass("cycle-paused"), i.API.trigger("cycle-paused", [i]).log("cycle-paused"), n.timeout && (clearTimeout(i.timeoutId), i.timeoutId = 0, i._remainingTimeout -= e.now() - i._lastQueue, (0 > i._remainingTimeout || isNaN(i._remainingTimeout)) && (i._remainingTimeout = void 0)))
        },
        resume: function (e) {
            var t = this.opts(),
                i = !t.hoverPaused && !t.paused;
            e ? t.hoverPaused = !1 : t.paused = !1, i || (t.container.removeClass("cycle-paused"), 0 === t.slides.filter(":animated").length && t.API.queueTransition(t.API.getSlideOpts(), t._remainingTimeout), t.API.trigger("cycle-resumed", [t, t._remainingTimeout]).log("cycle-resumed"))
        },
        add: function (t, i) {
            var n, s = this.opts(),
                o = s.slideCount,
                c = !1;
            "string" == e.type(t) && (t = e.trim(t)), e(t).each(function () {
                var t, n = e(this);
                i ? s.container.prepend(n) : s.container.append(n), s.slideCount++, t = s.API.buildSlideOpts(n), s.slides = i ? e(n).add(s.slides) : s.slides.add(n), s.API.initSlide(t, n, --s._maxZ), n.data("cycle.opts", t), s.API.trigger("cycle-slide-added", [s, t, n])
            }), s.API.updateView(!0), c = s._preInitialized && 2 > o && s.slideCount >= 1, c && (s._initialized ? s.timeout && (n = s.slides.length, s.nextSlide = s.reverse ? n - 1 : 1, s.timeoutId || s.API.queueTransition(s)) : s.API.initSlideshow())
        },
        calcFirstSlide: function () {
            var e, t = this.opts();
            e = parseInt(t.startingSlide || 0, 10), (e >= t.slides.length || 0 > e) && (e = 0), t.currSlide = e, t.reverse ? (t.nextSlide = e - 1, 0 > t.nextSlide && (t.nextSlide = t.slides.length - 1)) : (t.nextSlide = e + 1, t.nextSlide == t.slides.length && (t.nextSlide = 0))
        },
        calcNextSlide: function () {
            var e, t = this.opts();
            t.reverse ? (e = 0 > t.nextSlide - 1, t.nextSlide = e ? t.slideCount - 1 : t.nextSlide - 1, t.currSlide = e ? 0 : t.nextSlide + 1) : (e = t.nextSlide + 1 == t.slides.length, t.nextSlide = e ? 0 : t.nextSlide + 1, t.currSlide = e ? t.slides.length - 1 : t.nextSlide - 1)
        },
        calcTx: function (t, i) {
            var n, s = t;
            return i && s.manualFx && (n = e.fn.cycle.transitions[s.manualFx]), n || (n = e.fn.cycle.transitions[s.fx]), n || (n = e.fn.cycle.transitions.fade, s.API.log('Transition "' + s.fx + '" not found.  Using fade.')), n
        },
        prepareTx: function (e, t) {
            var i, n, s, o, c, l = this.opts();
            return 2 > l.slideCount ? (l.timeoutId = 0, void 0) : (!e || l.busy && !l.manualTrump || (l.API.stopTransition(), l.busy = !1, clearTimeout(l.timeoutId), l.timeoutId = 0), l.busy || (0 !== l.timeoutId || e) && (n = l.slides[l.currSlide], s = l.slides[l.nextSlide], o = l.API.getSlideOpts(l.nextSlide), c = l.API.calcTx(o, e), l._tx = c, e && void 0 !== o.manualSpeed && (o.speed = o.manualSpeed), l.nextSlide != l.currSlide && (e || !l.paused && !l.hoverPaused && l.timeout) ? (l.API.trigger("cycle-before", [o, n, s, t]), c.before && c.before(o, n, s, t), i = function () {
                l.busy = !1, l.container.data("cycle.opts") && (c.after && c.after(o, n, s, t), l.API.trigger("cycle-after", [o, n, s, t]), l.API.queueTransition(o), l.API.updateView(!0))
            }, l.busy = !0, c.transition ? c.transition(o, n, s, t, i) : l.API.doTransition(o, n, s, t, i), l.API.calcNextSlide(), l.API.updateView()) : l.API.queueTransition(o)), void 0)
        },
        doTransition: function (t, i, n, s, o) {
            var c = t,
                l = e(i),
                r = e(n),
                a = function () {
                    r.animate(c.animIn || {
                        opacity: 1
                    }, c.speed, c.easeIn || c.easing, o)
                };
            r.css(c.cssBefore || {}), l.animate(c.animOut || {}, c.speed, c.easeOut || c.easing, function () {
                l.css(c.cssAfter || {}), c.sync || a()
            }), c.sync && a()
        },
        queueTransition: function (t, i) {
            var n = this.opts(),
                s = void 0 !== i ? i : t.timeout;
            return 0 === n.nextSlide && 0 === --n.loop ? (n.API.log("terminating; loop=0"), n.timeout = 0, s ? setTimeout(function () {
                n.API.trigger("cycle-finished", [n])
            }, s) : n.API.trigger("cycle-finished", [n]), n.nextSlide = n.currSlide, void 0) : void 0 !== n.continueAuto && (n.continueAuto === !1 || e.isFunction(n.continueAuto) && n.continueAuto() === !1) ? (n.API.log("terminating automatic transitions"), n.timeout = 0, n.timeoutId && clearTimeout(n.timeoutId), void 0) : (s && (n._lastQueue = e.now(), void 0 === i && (n._remainingTimeout = t.timeout), n.paused || n.hoverPaused || (n.timeoutId = setTimeout(function () {
                n.API.prepareTx(!1, !n.reverse)
            }, s))), void 0)
        },
        stopTransition: function () {
            var e = this.opts();
            e.slides.filter(":animated").length && (e.slides.stop(!1, !0), e.API.trigger("cycle-transition-stopped", [e])), e._tx && e._tx.stopTransition && e._tx.stopTransition(e)
        },
        advanceSlide: function (e) {
            var t = this.opts();
            return clearTimeout(t.timeoutId), t.timeoutId = 0, t.nextSlide = t.currSlide + e, 0 > t.nextSlide ? t.nextSlide = t.slides.length - 1 : t.nextSlide >= t.slides.length && (t.nextSlide = 0), t.API.prepareTx(!0, e >= 0), !1
        },
        buildSlideOpts: function (i) {
            var n, s, o = this.opts(),
                c = i.data() || {};
            for (var l in c) c.hasOwnProperty(l) && /^cycle[A-Z]+/.test(l) && (n = c[l], s = l.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, t), o.API.log("[" + (o.slideCount - 1) + "]", s + ":", n, "(" + typeof n + ")"), c[s] = n);
            c = e.extend({}, e.fn.cycle.defaults, o, c), c.slideNum = o.slideCount;
            try {
                delete c.API, delete c.slideCount, delete c.currSlide, delete c.nextSlide, delete c.slides
            } catch (r) {}
            return c
        },
        getSlideOpts: function (t) {
            var i = this.opts();
            void 0 === t && (t = i.currSlide);
            var n = i.slides[t],
                s = e(n).data("cycle.opts");
            return e.extend({}, i, s)
        },
        initSlide: function (t, i, n) {
            var s = this.opts();
            i.css(t.slideCss || {}), n > 0 && i.css("zIndex", n), isNaN(t.speed) && (t.speed = e.fx.speeds[t.speed] || e.fx.speeds._default), t.sync || (t.speed = t.speed / 2), i.addClass(s.slideClass)
        },
        updateView: function (e, t) {
            var i = this.opts();
            if (i._initialized) {
                var n = i.API.getSlideOpts(),
                    s = i.slides[i.currSlide];
                !e && t !== !0 && (i.API.trigger("cycle-update-view-before", [i, n, s]), 0 > i.updateView) || (i.slideActiveClass && i.slides.removeClass(i.slideActiveClass).eq(i.currSlide).addClass(i.slideActiveClass), e && i.hideNonActive && i.slides.filter(":not(." + i.slideActiveClass + ")").css("visibility", "hidden"), 0 === i.updateView && setTimeout(function () {
                    i.API.trigger("cycle-update-view", [i, n, s, e])
                }, n.speed / (i.sync ? 2 : 1)), 0 !== i.updateView && i.API.trigger("cycle-update-view", [i, n, s, e]), e && i.API.trigger("cycle-update-view-after", [i, n, s]))
            }
        },
        getComponent: function (t) {
            var i = this.opts(),
                n = i[t];
            return "string" == typeof n ? /^\s*[\>|\+|~]/.test(n) ? i.container.find(n) : e(n) : n.jquery ? n : e(n)
        },
        stackSlides: function (t, i, n) {
            var s = this.opts();
            t || (t = s.slides[s.currSlide], i = s.slides[s.nextSlide], n = !s.reverse), e(t).css("zIndex", s.maxZ);
            var o, c = s.maxZ - 2,
                l = s.slideCount;
            if (n) {
                for (o = s.currSlide + 1; l > o; o++) e(s.slides[o]).css("zIndex", c--);
                for (o = 0; s.currSlide > o; o++) e(s.slides[o]).css("zIndex", c--)
            } else {
                for (o = s.currSlide - 1; o >= 0; o--) e(s.slides[o]).css("zIndex", c--);
                for (o = l - 1; o > s.currSlide; o--) e(s.slides[o]).css("zIndex", c--)
            }
            e(i).css("zIndex", s.maxZ - 1)
        },
        getSlideIndex: function (e) {
            return this.opts().slides.index(e)
        }
    }, e.fn.cycle.log = function () {
        window.console && console.log && console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
    }, e.fn.cycle.version = function () {
        return "Cycle2: " + i
    }, e.fn.cycle.transitions = {
        custom: {},
        none: {
            before: function (e, t, i, n) {
                e.API.stackSlides(i, t, n), e.cssBefore = {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }
            }
        },
        fade: {
            before: function (t, i, n, s) {
                var o = t.API.getSlideOpts(t.nextSlide).slideCss || {};
                t.API.stackSlides(i, n, s), t.cssBefore = e.extend(o, {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                }), t.animIn = {
                    opacity: 1
                }, t.animOut = {
                    opacity: 0
                }
            }
        },
        fadeout: {
            before: function (t, i, n, s) {
                var o = t.API.getSlideOpts(t.nextSlide).slideCss || {};
                t.API.stackSlides(i, n, s), t.cssBefore = e.extend(o, {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }), t.animOut = {
                    opacity: 0
                }
            }
        },
        scrollHorz: {
            before: function (e, t, i, n) {
                e.API.stackSlides(t, i, n);
                var s = e.container.css("overflow", "hidden").width();
                e.cssBefore = {
                    left: n ? s : -s,
                    top: 0,
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }, e.cssAfter = {
                    zIndex: e._maxZ - 2,
                    left: 0
                }, e.animIn = {
                    left: 0
                }, e.animOut = {
                    left: n ? -s : s
                }
            }
        }
    }, e.fn.cycle.defaults = {
        allowWrap: !0,
        autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
        delay: 0,
        easing: null,
        fx: "fade",
        hideNonActive: !0,
        loop: 0,
        manualFx: void 0,
        manualSpeed: void 0,
        manualTrump: !0,
        maxZ: 100,
        pauseOnHover: !1,
        reverse: !1,
        slideActiveClass: "cycle-slide-active",
        slideClass: "cycle-slide",
        slideCss: {
            position: "absolute",
            top: 0,
            left: 0
        },
        slides: "> img",
        speed: 500,
        startingSlide: 0,
        sync: !0,
        timeout: 4e3,
        updateView: 0
    }, e(document).ready(function () {
        e(e.fn.cycle.defaults.autoSelector).cycle()
    })
})(jQuery), /*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
function (e) {
    "use strict";

    function t(t, n) {
        var s, o, c, l = n.autoHeight;
        if ("container" == l) o = e(n.slides[n.currSlide]).outerHeight(), n.container.height(o);
        else if (n._autoHeightRatio) n.container.height(n.container.width() / n._autoHeightRatio);
        else if ("calc" === l || "number" == e.type(l) && l >= 0) {
            if (c = "calc" === l ? i(t, n) : l >= n.slides.length ? 0 : l, c == n._sentinelIndex) return;
            n._sentinelIndex = c, n._sentinel && n._sentinel.remove(), s = e(n.slides[c].cloneNode(!0)), s.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), s.css({
                position: "static",
                visibility: "hidden",
                display: "block"
            }).prependTo(n.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), s.find("*").css("visibility", "hidden"), n._sentinel = s
        }
    }

    function i(t, i) {
        var n = 0,
            s = -1;
        return i.slides.each(function (t) {
            var i = e(this).height();
            i > s && (s = i, n = t)
        }), n
    }

    function n(t, i, n, s) {
        var o = e(s).outerHeight();
        i.container.animate({
            height: o
        }, i.autoHeightSpeed, i.autoHeightEasing)
    }

    function s(i, o) {
        o._autoHeightOnResize && (e(window).off("resize orientationchange", o._autoHeightOnResize), o._autoHeightOnResize = null), o.container.off("cycle-slide-added cycle-slide-removed", t), o.container.off("cycle-destroyed", s), o.container.off("cycle-before", n), o._sentinel && (o._sentinel.remove(), o._sentinel = null)
    }
    e.extend(e.fn.cycle.defaults, {
        autoHeight: 0,
        autoHeightSpeed: 250,
        autoHeightEasing: null
    }), e(document).on("cycle-initialized", function (i, o) {
        function c() {
            t(i, o)
        }
        var l, r = o.autoHeight,
            a = e.type(r),
            d = null;
        ("string" === a || "number" === a) && (o.container.on("cycle-slide-added cycle-slide-removed", t), o.container.on("cycle-destroyed", s), "container" == r ? o.container.on("cycle-before", n) : "string" === a && /\d+\:\d+/.test(r) && (l = r.match(/(\d+)\:(\d+)/), l = l[1] / l[2], o._autoHeightRatio = l), "number" !== a && (o._autoHeightOnResize = function () {
            clearTimeout(d), d = setTimeout(c, 50)
        }, e(window).on("resize orientationchange", o._autoHeightOnResize)), setTimeout(c, 30))
    })
}(jQuery), /*! caption plugin for Cycle2;  version: 20130306 */
function (e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        caption: "> .cycle-caption",
        captionTemplate: "{{slideNum}} / {{slideCount}}",
        overlay: "> .cycle-overlay",
        overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
        captionModule: "caption"
    }), e(document).on("cycle-update-view", function (t, i, n, s) {
        "caption" === i.captionModule && e.each(["caption", "overlay"], function () {
            var e = this,
                t = n[e + "Template"],
                o = i.API.getComponent(e);
            o.length && t ? (o.html(i.API.tmpl(t, n, i, s)), o.show()) : o.hide()
        })
    }), e(document).on("cycle-destroyed", function (t, i) {
        var n;
        e.each(["caption", "overlay"], function () {
            var e = this,
                t = i[e + "Template"];
            i[e] && t && (n = i.API.getComponent("caption"), n.empty())
        })
    })
}(jQuery), /*! command plugin for Cycle2;  version: 20130707 */
function (e) {
    "use strict";
    var t = e.fn.cycle;
    e.fn.cycle = function (i) {
        var n, s, o, c = e.makeArray(arguments);
        return "number" == e.type(i) ? this.cycle("goto", i) : "string" == e.type(i) ? this.each(function () {
            var l;
            return n = i, o = e(this).data("cycle.opts"), void 0 === o ? (t.log('slideshow must be initialized before sending commands; "' + n + '" ignored'), void 0) : (n = "goto" == n ? "jump" : n, s = o.API[n], e.isFunction(s) ? (l = e.makeArray(c), l.shift(), s.apply(o.API, l)) : (t.log("unknown command: ", n), void 0))
        }) : t.apply(this, arguments)
    }, e.extend(e.fn.cycle, t), e.extend(t.API, {
        next: function () {
            var e = this.opts();
            if (!e.busy || e.manualTrump) {
                var t = e.reverse ? -1 : 1;
                e.allowWrap === !1 && e.currSlide + t >= e.slideCount || (e.API.advanceSlide(t), e.API.trigger("cycle-next", [e]).log("cycle-next"))
            }
        },
        prev: function () {
            var e = this.opts();
            if (!e.busy || e.manualTrump) {
                var t = e.reverse ? 1 : -1;
                e.allowWrap === !1 && 0 > e.currSlide + t || (e.API.advanceSlide(t), e.API.trigger("cycle-prev", [e]).log("cycle-prev"))
            }
        },
        destroy: function () {
            this.stop();
            var t = this.opts(),
                i = e.isFunction(e._data) ? e._data : e.noop;
            clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stop(), t.API.trigger("cycle-destroyed", [t]).log("cycle-destroyed"), t.container.removeData(), i(t.container[0], "parsedAttrs", !1), t.retainStylesOnDestroy || (t.container.removeAttr("style"), t.slides.removeAttr("style"), t.slides.removeClass(t.slideActiveClass)), t.slides.each(function () {
                e(this).removeData(), i(this, "parsedAttrs", !1)
            })
        },
        jump: function (e) {
            var t, i = this.opts();
            if (!i.busy || i.manualTrump) {
                var n = parseInt(e, 10);
                if (isNaN(n) || 0 > n || n >= i.slides.length) return i.API.log("goto: invalid slide index: " + n), void 0;
                if (n == i.currSlide) return i.API.log("goto: skipping, already on slide", n), void 0;
                i.nextSlide = n, clearTimeout(i.timeoutId), i.timeoutId = 0, i.API.log("goto: ", n, " (zero-index)"), t = i.currSlide < i.nextSlide, i.API.prepareTx(!0, t)
            }
        },
        stop: function () {
            var t = this.opts(),
                i = t.container;
            clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.stopTransition(), t.pauseOnHover && (t.pauseOnHover !== !0 && (i = e(t.pauseOnHover)), i.off("mouseenter mouseleave")), t.API.trigger("cycle-stopped", [t]).log("cycle-stopped")
        },
        reinit: function () {
            var e = this.opts();
            e.API.destroy(), e.container.cycle()
        },
        remove: function (t) {
            for (var i, n, s = this.opts(), o = [], c = 1, l = 0; s.slides.length > l; l++) i = s.slides[l], l == t ? n = i : (o.push(i), e(i).data("cycle.opts").slideNum = c, c++);
            n && (s.slides = e(o), s.slideCount--, e(n).remove(), t == s.currSlide ? s.API.advanceSlide(1) : s.currSlide > t ? s.currSlide-- : s.currSlide++, s.API.trigger("cycle-slide-removed", [s, t, n]).log("cycle-slide-removed"), s.API.updateView())
        }
    }), e(document).on("click.cycle", "[data-cycle-cmd]", function (t) {
        t.preventDefault();
        var i = e(this),
            n = i.data("cycle-cmd"),
            s = i.data("cycle-context") || ".cycle-slideshow";
        e(s).cycle(n, i.data("cycle-arg"))
    })
}(jQuery), /*! hash plugin for Cycle2;  version: 20130905 */
function (e) {
    "use strict";

    function t(t, i) {
        var n;
        return t._hashFence ? (t._hashFence = !1, void 0) : (n = window.location.hash.substring(1), t.slides.each(function (s) {
            if (e(this).data("cycle-hash") == n) {
                if (i === !0) t.startingSlide = s;
                else {
                    var o = s > t.currSlide;
                    t.nextSlide = s, t.API.prepareTx(!0, o)
                }
                return !1
            }
        }), void 0)
    }
    e(document).on("cycle-pre-initialize", function (i, n) {
        t(n, !0), n._onHashChange = function () {
            t(n, !1)
        }, e(window).on("hashchange", n._onHashChange)
    }), e(document).on("cycle-update-view", function (e, t, i) {
        i.hash && "#" + i.hash != window.location.hash && (t._hashFence = !0, window.location.hash = i.hash)
    }), e(document).on("cycle-destroyed", function (t, i) {
        i._onHashChange && e(window).off("hashchange", i._onHashChange)
    })
}(jQuery), /*! loader plugin for Cycle2;  version: 20131121 */
function (e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        loader: !1
    }), e(document).on("cycle-bootstrap", function (t, i) {
        function n(t, n) {
            function o(t) {
                var o;
                "wait" == i.loader ? (l.push(t), 0 === a && (l.sort(c), s.apply(i.API, [l, n]), i.container.removeClass("cycle-loading"))) : (o = e(i.slides[i.currSlide]), s.apply(i.API, [t, n]), o.show(), i.container.removeClass("cycle-loading"))
            }

            function c(e, t) {
                return e.data("index") - t.data("index")
            }
            var l = [];
            if ("string" == e.type(t)) t = e.trim(t);
            else if ("array" === e.type(t))
                for (var r = 0; t.length > r; r++) t[r] = e(t[r])[0];
            t = e(t);
            var a = t.length;
            a && (t.css("visibility", "hidden").appendTo("body").each(function (t) {
                function c() {
                    0 === --r && (--a, o(d))
                }
                var r = 0,
                    d = e(this),
                    u = d.is("img") ? d : d.find("img");
                return d.data("index", t), u = u.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'), u.length ? (r = u.length, u.each(function () {
                    this.complete ? c() : e(this).load(function () {
                        c()
                    }).on("error", function () {
                        0 === --r && (i.API.log("slide skipped; img not loaded:", this.src), 0 === --a && "wait" == i.loader && s.apply(i.API, [l, n]))
                    })
                }), void 0) : (--a, l.push(d), void 0)
            }), a && i.container.addClass("cycle-loading"))
        }
        var s;
        i.loader && (s = i.API.add, i.API.add = n)
    })
}(jQuery), /*! pager plugin for Cycle2;  version: 20140324 */
function (e) {
    "use strict";

    function t(t, i, n) {
        var s, o = t.API.getComponent("pager");
        o.each(function () {
            var o = e(this);
            if (i.pagerTemplate) {
                var c = t.API.tmpl(i.pagerTemplate, i, t, n[0]);
                s = e(c).appendTo(o)
            } else s = o.children().eq(t.slideCount - 1);
            s.on(t.pagerEvent, function (e) {
                t.pagerEventBubble || e.preventDefault(), t.API.page(o, e.currentTarget)
            })
        })
    }

    function i(e, t) {
        var i = this.opts();
        if (!i.busy || i.manualTrump) {
            var n = e.children().index(t),
                s = n,
                o = s > i.currSlide;
            i.currSlide != s && (i.nextSlide = s, i.API.prepareTx(!0, o), i.API.trigger("cycle-pager-activated", [i, e, t]))
        }
    }
    e.extend(e.fn.cycle.defaults, {
        pager: "> .cycle-pager",
        pagerActiveClass: "cycle-pager-active",
        pagerEvent: "click.cycle",
        pagerEventBubble: void 0,
        pagerTemplate: "<span>&bull;</span>"
    }), e(document).on("cycle-bootstrap", function (e, i, n) {
        n.buildPagerLink = t
    }), e(document).on("cycle-slide-added", function (e, t, n, s) {
        t.pager && (t.API.buildPagerLink(t, n, s), t.API.page = i)
    }), e(document).on("cycle-slide-removed", function (t, i, n) {
        if (i.pager) {
            var s = i.API.getComponent("pager");
            s.each(function () {
                var t = e(this);
                e(t.children()[n]).remove()
            })
        }
    }), e(document).on("cycle-update-view", function (t, i) {
        var n;
        i.pager && (n = i.API.getComponent("pager"), n.each(function () {
            e(this).children().removeClass(i.pagerActiveClass).eq(i.currSlide).addClass(i.pagerActiveClass)
        }))
    }), e(document).on("cycle-destroyed", function (e, t) {
        var i = t.API.getComponent("pager");
        i && (i.children().off(t.pagerEvent), t.pagerTemplate && i.empty())
    })
}(jQuery), /*! prevnext plugin for Cycle2;  version: 20130709 */
function (e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        next: "> .cycle-next",
        nextEvent: "click.cycle",
        disabledClass: "disabled",
        prev: "> .cycle-prev",
        prevEvent: "click.cycle",
        swipe: !1
    }), e(document).on("cycle-initialized", function (e, t) {
        if (t.API.getComponent("next").on(t.nextEvent, function (e) {
                e.preventDefault(), t.API.next()
            }), t.API.getComponent("prev").on(t.prevEvent, function (e) {
                e.preventDefault(), t.API.prev()
            }), t.swipe) {
            var i = t.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle",
                n = t.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
            t.container.on(i, function () {
                t.API.next()
            }), t.container.on(n, function () {
                t.API.prev()
            })
        }
    }), e(document).on("cycle-update-view", function (e, t) {
        if (!t.allowWrap) {
            var i = t.disabledClass,
                n = t.API.getComponent("next"),
                s = t.API.getComponent("prev"),
                o = t._prevBoundry || 0,
                c = void 0 !== t._nextBoundry ? t._nextBoundry : t.slideCount - 1;
            t.currSlide == c ? n.addClass(i).prop("disabled", !0) : n.removeClass(i).prop("disabled", !1), t.currSlide === o ? s.addClass(i).prop("disabled", !0) : s.removeClass(i).prop("disabled", !1)
        }
    }), e(document).on("cycle-destroyed", function (e, t) {
        t.API.getComponent("prev").off(t.nextEvent), t.API.getComponent("next").off(t.prevEvent), t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
    })
}(jQuery), /*! progressive loader plugin for Cycle2;  version: 20130315 */
function (e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        progressive: !1
    }), e(document).on("cycle-pre-initialize", function (t, i) {
        if (i.progressive) {
            var n, s, o = i.API,
                c = o.next,
                l = o.prev,
                r = o.prepareTx,
                a = e.type(i.progressive);
            if ("array" == a) n = i.progressive;
            else if (e.isFunction(i.progressive)) n = i.progressive(i);
            else if ("string" == a) {
                if (s = e(i.progressive), n = e.trim(s.html()), !n) return;
                if (/^(\[)/.test(n)) try {
                    n = e.parseJSON(n)
                } catch (d) {
                    return o.log("error parsing progressive slides", d), void 0
                } else n = n.split(RegExp(s.data("cycle-split") || "\n")), n[n.length - 1] || n.pop()
            }
            r && (o.prepareTx = function (e, t) {
                var s, o;
                return e || 0 === n.length ? (r.apply(i.API, [e, t]), void 0) : (t && i.currSlide == i.slideCount - 1 ? (o = n[0], n = n.slice(1), i.container.one("cycle-slide-added", function (e, t) {
                    setTimeout(function () {
                        t.API.advanceSlide(1)
                    }, 50)
                }), i.API.add(o)) : t || 0 !== i.currSlide ? r.apply(i.API, [e, t]) : (s = n.length - 1, o = n[s], n = n.slice(0, s), i.container.one("cycle-slide-added", function (e, t) {
                    setTimeout(function () {
                        t.currSlide = 1, t.API.advanceSlide(-1)
                    }, 50)
                }), i.API.add(o, !0)), void 0)
            }), c && (o.next = function () {
                var e = this.opts();
                if (n.length && e.currSlide == e.slideCount - 1) {
                    var t = n[0];
                    n = n.slice(1), e.container.one("cycle-slide-added", function (e, t) {
                        c.apply(t.API), t.container.removeClass("cycle-loading")
                    }), e.container.addClass("cycle-loading"), e.API.add(t)
                } else c.apply(e.API)
            }), l && (o.prev = function () {
                var e = this.opts();
                if (n.length && 0 === e.currSlide) {
                    var t = n.length - 1,
                        i = n[t];
                    n = n.slice(0, t), e.container.one("cycle-slide-added", function (e, t) {
                        t.currSlide = 1, t.API.advanceSlide(-1), t.container.removeClass("cycle-loading")
                    }), e.container.addClass("cycle-loading"), e.API.add(i, !0)
                } else l.apply(e.API)
            })
        }
    })
}(jQuery), /*! tmpl plugin for Cycle2;  version: 20121227 */
function (e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        tmplRegex: "{{((.)?.*?)}}"
    }), e.extend(e.fn.cycle.API, {
        tmpl: function (t, i) {
            var n = RegExp(i.tmplRegex || e.fn.cycle.defaults.tmplRegex, "g"),
                s = e.makeArray(arguments);
            return s.shift(), t.replace(n, function (t, i) {
                var n, o, c, l, r = i.split(".");
                for (n = 0; s.length > n; n++)
                    if (c = s[n]) {
                        if (r.length > 1)
                            for (l = c, o = 0; r.length > o; o++) c = l, l = l[r[o]] || i;
                        else l = c[i];
                        if (e.isFunction(l)) return l.apply(c, s);
                        if (void 0 !== l && null !== l && l != i) return l
                    }
                return i
            })
        }
    })
}(jQuery);
//@ sourceMappingURL=jquery.cycle2.js.map


//jquery.cycle2.center.min.js
/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20140128 */
(function (e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        centerHorz: !1,
        centerVert: !1
    }), e(document).on("cycle-pre-initialize", function (i, t) {
        function n() {
            clearTimeout(c), c = setTimeout(l, 50)
        }

        function s() {
            clearTimeout(c), clearTimeout(a), e(window).off("resize orientationchange", n)
        }

        function o() {
            t.slides.each(r)
        }

        function l() {
            r.apply(t.container.find("." + t.slideActiveClass)), clearTimeout(a), a = setTimeout(o, 50)
        }

        function r() {
            var i = e(this),
                n = t.container.width(),
                s = t.container.height(),
                o = i.outerWidth(),
                l = i.outerHeight();
            o && (t.centerHorz && n >= o && i.css("marginLeft", (n - o) / 2), t.centerVert && s >= l && i.css("marginTop", (s - l) / 2))
        }
        if (t.centerHorz || t.centerVert) {
            var c, a;
            e(window).on("resize orientationchange load", n), t.container.on("cycle-destroyed", s), t.container.on("cycle-initialized cycle-slide-added cycle-slide-removed", function () {
                n()
            }), l()
        }
    })
})(jQuery);



//jquery.cycle2.swipe.min.js
/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20140128 */
(function (e) {
    "use strict";
    e.event.special.swipe = e.event.special.swipe || {
        scrollSupressionThreshold: 10,
        durationThreshold: 1e3,
        horizontalDistanceThreshold: 30,
        verticalDistanceThreshold: 75,
        setup: function () {
            var i = e(this);
            i.bind("touchstart", function (t) {
                function n(i) {
                    if (r) {
                        var t = i.originalEvent.touches ? i.originalEvent.touches[0] : i;
                        s = {
                            time: (new Date).getTime(),
                            coords: [t.pageX, t.pageY]
                        }, Math.abs(r.coords[0] - s.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && i.preventDefault()
                    }
                }
                var s, o = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                    r = {
                        time: (new Date).getTime(),
                        coords: [o.pageX, o.pageY],
                        origin: e(t.target)
                    };
                i.bind("touchmove", n).one("touchend", function () {
                    i.unbind("touchmove", n), r && s && s.time - r.time < e.event.special.swipe.durationThreshold && Math.abs(r.coords[0] - s.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(r.coords[1] - s.coords[1]) < e.event.special.swipe.verticalDistanceThreshold && r.origin.trigger("swipe").trigger(r.coords[0] > s.coords[0] ? "swipeleft" : "swiperight"), r = s = void 0
                })
            })
        }
    }, e.event.special.swipeleft = e.event.special.swipeleft || {
        setup: function () {
            e(this).bind("swipe", e.noop)
        }
    }, e.event.special.swiperight = e.event.special.swiperight || e.event.special.swipeleft
})(jQuery);


//instafeed.min.js
// Generated by CoffeeScript 1.3.3
(function () {
    var e, t;
    e = function () {
        function e(e) {
            var t, n;
            this.options = {
                target: "instafeed",
                get: "popular",
                resolution: "thumbnail",
                sortBy: "most-recent",
                links: !0,
                limit: 15,
                mock: !1
            };
            if (typeof e == "object")
                for (t in e) n = e[t], this.options[t] = n;
            this.unique = this._genKey()
        }
        return e.prototype.run = function () {
            var t, n, r;
            if (typeof this.options.clientId != "string" && typeof this.options.accessToken != "string") throw new Error("Missing clientId or accessToken.");
            if (typeof this.options.accessToken != "string" && typeof this.options.clientId != "string") throw new Error("Missing clientId or accessToken.");
            return this.options.before != null && typeof this.options.before == "function" && this.options.before.call(this), typeof document != "undefined" && document !== null && (r = document.createElement("script"), r.id = "instafeed-fetcher", r.src = this._buildUrl(), t = document.getElementsByTagName("head"), t[0].appendChild(r), n = "instafeedCache" + this.unique, window[n] = new e(this.options), window[n].unique = this.unique), !0
        }, e.prototype.parse = function (e) {
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v;
            if (typeof e != "object") {
                if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "Invalid JSON data"), !1;
                throw new Error("Invalid JSON response")
            }
            if (e.meta.code !== 200) {
                if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, e.meta.error_message), !1;
                throw new Error("Error from Instagram: " + e.meta.error_message)
            }
            if (e.data.length === 0) {
                if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "No images were returned from Instagram"), !1;
                throw new Error("No images were returned from Instagram")
            }
            this.options.success != null && typeof this.options.success == "function" && this.options.success.call(this, e);
            if (this.options.sortBy !== "most-recent") {
                this.options.sortBy === "random" ? c = ["", "random"] : c = this.options.sortBy.split("-"), l = c[0] === "least" ? !0 : !1;
                switch (c[1]) {
                    case "random":
                        e.data.sort(function () {
                            return .5 - Math.random()
                        });
                        break;
                    case "recent":
                        e.data = this._sortBy(e.data, "created_time", l);
                        break;
                    case "liked":
                        e.data = this._sortBy(e.data, "likes.count", l);
                        break;
                    case "commented":
                        e.data = this._sortBy(e.data, "comments.count", l);
                        break;
                    default:
                        throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                }
            }
            if (typeof document != "undefined" && document !== null && this.options.mock === !1) {
                document.getElementById(this.options.target).innerHTML = "", u = e.data, u.length > this.options.limit && (u = u.slice(0, this.options.limit + 1 || 9e9));
                if (this.options.template != null && typeof this.options.template == "string") {
                    i = "", o = "";
                    for (h = 0, d = u.length; h < d; h++) s = u[h], o = this._makeTemplate(this.options.template, {
                        model: s,
                        id: s.id,
                        link: s.link,
                        image: s.images[this.options.resolution].url,
                        caption: this._getObjectProperty(s, "caption.text"),
                        likes: s.likes.count,
                        comments: s.comments.count,
                        location: this._getObjectProperty(s, "location.name")
                    }), i += o;
                    document.getElementById(this.options.target).innerHTML = i
                } else {
                    n = document.createDocumentFragment();
                    for (p = 0, v = u.length; p < v; p++) s = u[p], a = document.createElement("img"), a.src = s.images[this.options.resolution].url, this.options.links === !0 ? (t = document.createElement("a"), t.href = s.link, t.appendChild(a), n.appendChild(t)) : n.appendChild(a);
                    document.getElementById(this.options.target).appendChild(n)
                }
                r = document.getElementsByTagName("head")[0], r.removeChild(document.getElementById("instafeed-fetcher")), f = "instafeedCache" + this.unique, window[f] = void 0;
                try {
                    delete window[f]
                } catch (m) {}
            }
            return this.options.after != null && typeof this.options.after == "function" && this.options.after.call(this), !0
        }, e.prototype._buildUrl = function () {
            var e, t, n;
            e = "https://api.instagram.com/v1";
            switch (this.options.get) {
                case "popular":
                    t = "media/popular";
                    break;
                case "tagged":
                    if (typeof this.options.tagName != "string") throw new Error("No tag name specified. Use the 'tagName' option.");
                    t = "tags/" + this.options.tagName + "/media/recent";
                    break;
                case "location":
                    if (typeof this.options.locationId != "number") throw new Error("No location specified. Use the 'locationId' option.");
                    t = "locations/" + this.options.locationId + "/media/recent";
                    break;
                case "user":
                    if (typeof this.options.userId != "number") throw new Error("No user specified. Use the 'userId' option.");
                    if (typeof this.options.accessToken != "string") throw new Error("No access token. Use the 'accessToken' option.");
                    t = "users/" + this.options.userId + "/media/recent";
                    break;
                default:
                    throw new Error("Invalid option for get: '" + this.options.get + "'.")
            }
            return n = "" + e + "/" + t, this.options.accessToken != null ? n += "?access_token=" + this.options.accessToken : n += "?client_id=" + this.options.clientId, n += "&count=" + this.options.limit, n += "&callback=instafeedCache" + this.unique + ".parse", n
        }, e.prototype._genKey = function () {
            var e;
            return e = function () {
                return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
            }, "" + e() + e() + e() + e()
        }, e.prototype._makeTemplate = function (e, t) {
            var n, r, i, s, o;
            r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, n = e;
            while (r.test(n)) i = n.match(r)[1], s = (o = this._getObjectProperty(t, i)) != null ? o : "", n = n.replace(r, "" + s);
            return n
        }, e.prototype._getObjectProperty = function (e, t) {
            var n, r;
            t = t.replace(/\[(\w+)\]/g, ".$1"), r = t.split(".");
            while (r.length) {
                n = r.shift();
                if (!(e != null && n in e)) return null;
                e = e[n]
            }
            return e
        }, e.prototype._sortBy = function (e, t, n) {
            var r;
            return r = function (e, r) {
                var i, s;
                return i = this._getObjectProperty(e, t), s = this._getObjectProperty(r, t), n ? i > s ? 1 : -1 : i < s ? 1 : -1
            }, e.sort(r.bind(this)), e
        }, e
    }(), t = typeof exports != "undefined" && exports !== null ? exports : window, t.Instafeed = e
}).call(this);



//srcset-polyfill.min.js
(function (e, t) {
    function s(e) {
        if (!e.attributes["srcset"]) return false;
        var t = e.attributes["srcset"].nodeValue.split(",");
        for (var s = 0; s < t.length; s++) {
            var o = t[s].match(/^\s*([^\s]+)\s*(\s(\d+)w)?\s*(\s(\d+)h)?\s*(\s(\d+)x)?\s*$/),
                u = o[1],
                a = o[3] || false,
                f = o[5] || false,
                l = o[7] || 1;
            if (a && a > n) {
                continue
            }
            if (f && f > r) {
                continue
            }
            if (l && l > i) {
                continue
            }
            e.src = u
        }
    }
    if ("srcset" in t.createElement("img")) return true;
    var n = e.innerWidth > 0 ? e.innerWidth : screen.width,
        r = e.innerHeight > 0 ? e.innerHeight : screen.height,
        i = e.devicePixelRatio || 1;
    var o = t.getElementsByTagName("img");
    for (var u = 0; u < o.length; u++) {
        s(o[u])
    }
})(window, document)



// Snap.svg 0.2.1
//
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2014-04-18
! function (a) {
    var b, c, d = "0.4.2",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = "*",
        h = function () {},
        i = function (a, b) {
            return a - b
        },
        j = {
            n: {}
        },
        k = function (a, d) {
            a = String(a);
            var e, f = c,
                g = Array.prototype.slice.call(arguments, 2),
                h = k.listeners(a),
                j = 0,
                l = [],
                m = {},
                n = [],
                o = b;
            b = a, c = 0;
            for (var p = 0, q = h.length; q > p; p++) "zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
            for (l.sort(i); l[j] < 0;)
                if (e = m[l[j++]], n.push(e.apply(d, g)), c) return c = f, n;
            for (p = 0; q > p; p++)
                if (e = h[p], "zIndex" in e)
                    if (e.zIndex == l[j]) {
                        if (n.push(e.apply(d, g)), c) break;
                        do
                            if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c) break; while (e)
                    } else m[e.zIndex] = e;
            else if (n.push(e.apply(d, g)), c) break;
            return c = f, b = o, n.length ? n : null
        };
    k._events = j, k.listeners = function (a) {
        var b, c, d, e, h, i, k, l, m = a.split(f),
            n = j,
            o = [n],
            p = [];
        for (e = 0, h = m.length; h > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++)
                for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, k.on = function (a, b) {
        if (a = String(a), "function" != typeof b) return function () {};
        for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++) d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {
            n: {}
        });
        for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++)
            if (d.f[e] == b) return h;
        return d.f.push(b),
            function (a) {
                +a == +a && (b.zIndex = +a)
            }
    }, k.f = function (a) {
        var b = [].slice.call(arguments, 1);
        return function () {
            k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, k.stop = function () {
        c = 1
    }, k.nt = function (a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }, k.nts = function () {
        return b.split(f)
    }, k.off = k.unbind = function (a, b) {
        if (!a) return k._events = j = {
            n: {}
        }, void 0;
        var c, d, h, i, l, m, n, o = a.split(f),
            p = [j];
        for (i = 0, l = o.length; l > i; i++)
            for (m = 0; m < p.length; m += h.length - 2) {
                if (h = [m, 1], c = p[m].n, o[i] != g) c[o[i]] && h.push(c[o[i]]);
                else
                    for (d in c) c[e](d) && h.push(c[d]);
                p.splice.apply(p, h)
            }
        for (i = 0, l = p.length; l > i; i++)
            for (c = p[i]; c.n;) {
                if (b) {
                    if (c.f) {
                        for (m = 0, n = c.f.length; n > m; m++)
                            if (c.f[m] == b) {
                                c.f.splice(m, 1);
                                break
                            }!c.f.length && delete c.f
                    }
                    for (d in c.n)
                        if (c.n[e](d) && c.n[d].f) {
                            var q = c.n[d].f;
                            for (m = 0, n = q.length; n > m; m++)
                                if (q[m] == b) {
                                    q.splice(m, 1);
                                    break
                                }!q.length && delete c.n[d].f
                        }
                } else {
                    delete c.f;
                    for (d in c.n) c.n[e](d) && c.n[d].f && delete c.n[d].f
                }
                c = c.n
            }
    }, k.once = function (a, b) {
        var c = function () {
            return k.unbind(a, c), b.apply(this, arguments)
        };
        return k.on(a, c)
    }, k.version = d, k.toString = function () {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function () {
        return k
    }) : a.eve = k
}(this),
function (a, b) {
    "function" == typeof define && define.amd ? define(["eve"], function (c) {
        return b(a, c)
    }) : b(a, a.eve)
}(this, function (a, b) {
    var c = function (b) {
            var c = {},
                d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (a) {
                    setTimeout(a, 16)
                },
                e = Array.isArray || function (a) {
                    return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
                },
                f = 0,
                g = "M" + (+new Date).toString(36),
                h = function () {
                    return g + (f++).toString(36)
                },
                i = Date.now || function () {
                    return +new Date
                },
                j = function (a) {
                    var b = this;
                    if (null == a) return b.s;
                    var c = b.s - a;
                    b.b += b.dur * c, b.B += b.dur * c, b.s = a
                },
                k = function (a) {
                    var b = this;
                    return null == a ? b.spd : (b.spd = a, void 0)
                },
                l = function (a) {
                    var b = this;
                    return null == a ? b.dur : (b.s = b.s * a / b.dur, b.dur = a, void 0)
                },
                m = function () {
                    var a = this;
                    delete c[a.id], a.update(), b("mina.stop." + a.id, a)
                },
                n = function () {
                    var a = this;
                    a.pdif || (delete c[a.id], a.update(), a.pdif = a.get() - a.b)
                },
                o = function () {
                    var a = this;
                    a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
                },
                p = function () {
                    var a, b = this;
                    if (e(b.start)) {
                        a = [];
                        for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
                    } else a = +b.start + (b.end - b.start) * b.easing(b.s);
                    b.set(a)
                },
                q = function () {
                    var a = 0;
                    for (var e in c)
                        if (c.hasOwnProperty(e)) {
                            var f = c[e],
                                g = f.get();
                            a++, f.s = (g - f.b) / (f.dur / f.spd), f.s >= 1 && (delete c[e], f.s = 1, a--, function (a) {
                                setTimeout(function () {
                                    b("mina.finish." + a.id, a)
                                })
                            }(f)), f.update()
                        }
                    a && d(q)
                },
                r = function (a, b, e, f, g, i, s) {
                    var t = {
                        id: h(),
                        start: a,
                        end: b,
                        b: e,
                        s: 0,
                        dur: f - e,
                        spd: 1,
                        get: g,
                        set: i,
                        easing: s || r.linear,
                        status: j,
                        speed: k,
                        duration: l,
                        stop: m,
                        pause: n,
                        resume: o,
                        update: p
                    };
                    c[t.id] = t;
                    var u, v = 0;
                    for (u in c)
                        if (c.hasOwnProperty(u) && (v++, 2 == v)) break;
                    return 1 == v && d(q), t
                };
            return r.time = i, r.getById = function (a) {
                return c[a] || null
            }, r.linear = function (a) {
                return a
            }, r.easeout = function (a) {
                return Math.pow(a, 1.7)
            }, r.easein = function (a) {
                return Math.pow(a, .48)
            }, r.easeinout = function (a) {
                if (1 == a) return 1;
                if (0 == a) return 0;
                var b = .48 - a / 1.04,
                    c = Math.sqrt(.1734 + b * b),
                    d = c - b,
                    e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
                    f = -c - b,
                    g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
                    h = e + g + .5;
                return 3 * (1 - h) * h * h + h * h * h
            }, r.backin = function (a) {
                if (1 == a) return 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            }, r.backout = function (a) {
                if (0 == a) return 0;
                a -= 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a + b) + 1
            }, r.elastic = function (a) {
                return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin((a - .075) * 2 * Math.PI / .3) + 1
            }, r.bounce = function (a) {
                var b, c = 7.5625,
                    d = 2.75;
                return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
            }, a.mina = r, r
        }("undefined" == typeof b ? function () {} : b),
        d = function () {
            function d(a, b) {
                if (a) {
                    if (a.tagName) return z(a);
                    if (a instanceof u) return a;
                    if (null == b) return a = J.doc.querySelector(a), z(a)
                }
                return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new y(a, b)
            }

            function e(a, b) {
                if (b) {
                    if ("#text" == a && (a = J.doc.createTextNode(b.text || "")), "string" == typeof a && (a = e(a)), "string" == typeof b) return "xlink:" == b.substring(0, 6) ? a.getAttributeNS(gb, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(hb, b.substring(4)) : a.getAttribute(b);
                    for (var c in b)
                        if (b[K](c)) {
                            var d = L(b[c]);
                            d ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(gb, c.substring(6), d) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(hb, c.substring(4), d) : a.setAttribute(c, d) : a.removeAttribute(c)
                        }
                } else a = J.doc.createElementNS(hb, a);
                return a
            }

            function f(a, b) {
                return b = L.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || V.call(a).slice(8, -1).toLowerCase() == b
            }

            function h(a) {
                if ("function" == typeof a || Object(a) !== a) return a;
                var b = new a.constructor;
                for (var c in a) a[K](c) && (b[c] = h(a[c]));
                return b
            }

            function i(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return a.push(a.splice(c, 1)[0])
            }

            function j(a, b, c) {
                function d() {
                    var e = Array.prototype.slice.call(arguments, 0),
                        f = e.join("␀"),
                        g = d.cache = d.cache || {},
                        h = d.count = d.count || [];
                    return g[K](f) ? (i(h, f), c ? c(g[f]) : g[f]) : (h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
                }
                return d
            }

            function k(a, b, c, d, e, f) {
                if (null == e) {
                    var g = a - c,
                        h = b - d;
                    return g || h ? (180 + 180 * O.atan2(-h, -g) / S + 360) % 360 : 0
                }
                return k(a, b, e, f) - k(c, d, e, f)
            }

            function l(a) {
                return a % 360 * S / 180
            }

            function m(a) {
                return 180 * a / S % 360
            }

            function n(a, b, c, d, e, f) {
                return null == b && "[object SVGMatrix]" == V.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, this.f = a.f, void 0) : (null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0), void 0)
            }

            function o(a) {
                var b = [];
                return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (a, c, d) {
                    return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0), d.length > 2 && (d = d.slice(0, 2))), "skewX" == c ? b.push(["m", 1, 0, O.tan(l(d[0])), 1, 0, 0]) : "skewY" == c ? b.push(["m", 1, O.tan(l(d[0])), 0, 1, 0, 0]) : b.push([c.charAt(0)].concat(d)), a
                }), b
            }

            function p(a, b) {
                var c = rb(a),
                    d = new n;
                if (c)
                    for (var e = 0, f = c.length; f > e; e++) {
                        var g, h, i, j, k, l = c[e],
                            m = l.length,
                            o = L(l[0]).toLowerCase(),
                            p = l[0] != o,
                            q = p ? d.invert() : 0;
                        "t" == o && 2 == m ? d.translate(l[1], 0) : "t" == o && 3 == m ? p ? (g = q.x(0, 0), h = q.y(0, 0), i = q.x(l[1], l[2]), j = q.y(l[1], l[2]), d.translate(i - g, j - h)) : d.translate(l[1], l[2]) : "r" == o ? 2 == m ? (k = k || b, d.rotate(l[1], k.x + k.width / 2, k.y + k.height / 2)) : 4 == m && (p ? (i = q.x(l[2], l[3]), j = q.y(l[2], l[3]), d.rotate(l[1], i, j)) : d.rotate(l[1], l[2], l[3])) : "s" == o ? 2 == m || 3 == m ? (k = k || b, d.scale(l[1], l[m - 1], k.x + k.width / 2, k.y + k.height / 2)) : 4 == m ? p ? (i = q.x(l[2], l[3]), j = q.y(l[2], l[3]), d.scale(l[1], l[1], i, j)) : d.scale(l[1], l[1], l[2], l[3]) : 5 == m && (p ? (i = q.x(l[3], l[4]), j = q.y(l[3], l[4]), d.scale(l[1], l[2], i, j)) : d.scale(l[1], l[2], l[3], l[4])) : "m" == o && 7 == m && d.add(l[1], l[2], l[3], l[4], l[5], l[6])
                    }
                return d
            }

            function q(a, b) {
                if (null == b) {
                    var c = !0;
                    if (b = "linearGradient" == a.type || "radialGradient" == a.type ? a.node.getAttribute("gradientTransform") : "pattern" == a.type ? a.node.getAttribute("patternTransform") : a.node.getAttribute("transform"), !b) return new n;
                    b = o(b)
                } else b = d._.rgTransform.test(b) ? L(b).replace(/\.{3}|\u2026/g, a._.transform || T) : o(b), f(b, "array") && (b = d.path ? d.path.toString.call(b) : L(b)), a._.transform = b;
                var e = p(b, a.getBBox(1));
                return c ? e : (a.matrix = e, void 0)
            }

            function r(a) {
                var b = a.node.ownerSVGElement && z(a.node.ownerSVGElement) || a.node.parentNode && z(a.node.parentNode) || d.select("svg") || d(0, 0),
                    c = b.select("defs"),
                    e = null == c ? !1 : c.node;
                return e || (e = x("defs", b.node).node), e
            }

            function s(a, b, c) {
                function d(a) {
                    return null == a ? T : a == +a ? a : (e(j, {
                        width: a
                    }), j.getBBox().width)
                }

                function f(a) {
                    return null == a ? T : a == +a ? a : (e(j, {
                        height: a
                    }), j.getBBox().height)
                }

                function g(d, e) {
                    null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
                }
                var h = r(a),
                    i = {},
                    j = h.querySelector(".svg---mgr");
                switch (j || (j = e("rect"), e(j, {
                    width: 10,
                    height: 10,
                    "class": "svg---mgr"
                }), h.appendChild(j)), a.type) {
                    case "rect":
                        g("rx", d), g("ry", f);
                    case "image":
                        g("width", d), g("height", f);
                    case "text":
                        g("x", d), g("y", f);
                        break;
                    case "circle":
                        g("cx", d), g("cy", f), g("r", d);
                        break;
                    case "ellipse":
                        g("cx", d), g("cy", f), g("rx", d), g("ry", f);
                        break;
                    case "line":
                        g("x1", d), g("x2", d), g("y1", f), g("y2", f);
                        break;
                    case "marker":
                        g("refX", d), g("markerWidth", d), g("refY", f), g("markerHeight", f);
                        break;
                    case "radialGradient":
                        g("fx", d), g("fy", f);
                        break;
                    case "tspan":
                        g("dx", d), g("dy", f);
                        break;
                    default:
                        g(b, d)
                }
                return i
            }

            function t(a) {
                f(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
                for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
                for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function (a) {
                    d.appendChild(a.node)
                }) : d.appendChild(a[b].node);
                var e = d.childNodes;
                for (b = 0; b < e.length; b++) this[c++] = z(e[b]);
                return this
            }

            function u(a) {
                if (a.snap in ib) return ib[a.snap];
                var b, c = this.id = fb();
                try {
                    b = a.ownerSVGElement
                } catch (d) {}
                if (this.node = a, b && (this.paper = new y(b)), this.type = a.tagName, this.anims = {}, this._ = {
                        transform: []
                    }, a.snap = c, ib[c] = this, "g" == this.type) {
                    this.add = t;
                    for (var e in y.prototype) y.prototype[K](e) && (this[e] = y.prototype[e])
                }
            }

            function v(a) {
                for (var b, c = 0, d = a.length; d > c; c++)
                    if (b = b || a[c]) return b
            }

            function w(a) {
                this.node = a
            }

            function x(a, b) {
                var c = e(a);
                b.appendChild(c);
                var d = z(c);
                return d
            }

            function y(a, b) {
                var c, d, f, g = y.prototype;
                if (a && "svg" == a.tagName) {
                    if (a.snap in ib) return ib[a.snap];
                    c = new u(a), d = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], d || (d = e("desc"), d.appendChild(J.doc.createTextNode("Created with Snap")), c.node.appendChild(d)), f || (f = e("defs"), c.node.appendChild(f)), c.defs = f;
                    for (var h in g) g[K](h) && (c[h] = g[h]);
                    c.paper = c.root = c
                } else c = x("svg", J.doc.body), e(c.node, {
                    height: b,
                    version: 1.1,
                    width: a,
                    xmlns: hb
                });
                return c
            }

            function z(a) {
                return a ? a instanceof u || a instanceof w ? a : "svg" == a.tagName ? new y(a) : new u(a) : a
            }

            function A() {
                return this.selectAll("stop")
            }

            function B(a, b) {
                var c = e("stop"),
                    f = {
                        offset: +b + "%"
                    };
                return a = d.color(a), f["stop-color"] = a.hex, a.opacity < 1 && (f["stop-opacity"] = a.opacity), e(c, f), this.node.appendChild(c), this
            }

            function C() {
                if ("linearGradient" == this.type) {
                    var a = e(this.node, "x1") || 0,
                        b = e(this.node, "x2") || 1,
                        c = e(this.node, "y1") || 0,
                        f = e(this.node, "y2") || 0;
                    return d._.box(a, c, O.abs(b - a), O.abs(f - c))
                }
                var g = this.node.cx || .5,
                    h = this.node.cy || .5,
                    i = this.node.r || 0;
                return d._.box(g - i, h - i, 2 * i, 2 * i)
            }

            function D(a, c) {
                function d(a, b) {
                    for (var c = (b - j) / (a - k), d = k; a > d; d++) h[d].offset = +(+j + c * (d - k)).toFixed(2);
                    k = a, j = b
                }
                var f, g = v(b("snap.util.grad.parse", null, c));
                if (!g) return null;
                g.params.unshift(a), f = "l" == g.type.toLowerCase() ? E.apply(0, g.params) : F.apply(0, g.params), g.type != g.type.toLowerCase() && e(f.node, {
                    gradientUnits: "userSpaceOnUse"
                });
                var h = g.stops,
                    i = h.length,
                    j = 0,
                    k = 0;
                i--;
                for (var l = 0; i > l; l++) "offset" in h[l] && d(l, h[l].offset);
                for (h[i].offset = h[i].offset || 100, d(i, h[i].offset), l = 0; i >= l; l++) {
                    var m = h[l];
                    f.addStop(m.color, m.offset)
                }
                return f
            }

            function E(a, b, c, d, f) {
                var g = x("linearGradient", a);
                return g.stops = A, g.addStop = B, g.getBBox = C, null != b && e(g.node, {
                    x1: b,
                    y1: c,
                    x2: d,
                    y2: f
                }), g
            }

            function F(a, b, c, d, f, g) {
                var h = x("radialGradient", a);
                return h.stops = A, h.addStop = B, h.getBBox = C, null != b && e(h.node, {
                    cx: b,
                    cy: c,
                    r: d
                }), null != f && null != g && e(h.node, {
                    fx: f,
                    fy: g
                }), h
            }

            function G(a) {
                return function (c) {
                    if (b.stop(), c instanceof w && 1 == c.node.childNodes.length && ("radialGradient" == c.node.firstChild.tagName || "linearGradient" == c.node.firstChild.tagName || "pattern" == c.node.firstChild.tagName) && (c = c.node.firstChild, r(this).appendChild(c), c = z(c)), c instanceof u)
                        if ("radialGradient" == c.type || "linearGradient" == c.type || "pattern" == c.type) {
                            c.node.id || e(c.node, {
                                id: c.id
                            });
                            var f = jb(c.node.id)
                        } else f = c.attr(a);
                    else if (f = d.color(c), f.error) {
                        var g = D(r(this), c);
                        g ? (g.node.id || e(g.node, {
                            id: g.id
                        }), f = jb(g.node.id)) : f = c
                    } else f = L(f);
                    var h = {};
                    h[a] = f, e(this.node, h), this.node.style[a] = T
                }
            }

            function H(a) {
                for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
                    var f = c[d];
                    3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && (1 == f.childNodes.length && 3 == f.firstChild.nodeType ? b.push(f.firstChild.nodeValue) : b.push(H(f)))
                }
                return b
            }

            function I() {
                return b.stop(), this.node.style.fontSize
            }
            d.version = "0.2.1", d.toString = function () {
                return "Snap v" + this.version
            }, d._ = {};
            var J = {
                win: a,
                doc: a.document
            };
            d._.glob = J;
            var K = "hasOwnProperty",
                L = String,
                M = parseFloat,
                N = parseInt,
                O = Math,
                P = O.max,
                Q = O.min,
                R = O.abs,
                S = (O.pow, O.PI),
                T = (O.round, ""),
                U = " ",
                V = Object.prototype.toString,
                W = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                X = /^url\(#?([^)]+)\)$/,
                Y = "	\n\f\r   ᠎             　\u2028\u2029",
                Z = new RegExp("[," + Y + "]+"),
                $ = (new RegExp("[" + Y + "]", "g"), new RegExp("[" + Y + "]*,[" + Y + "]*")),
                _ = {
                    hs: 1,
                    rg: 1
                },
                ab = new RegExp("([a-z])[" + Y + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + Y + "]*,?[" + Y + "]*)+)", "ig"),
                bb = new RegExp("([rstm])[" + Y + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + Y + "]*,?[" + Y + "]*)+)", "ig"),
                cb = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + Y + "]*,?[" + Y + "]*", "ig"),
                db = 0,
                eb = "S" + (+new Date).toString(36),
                fb = function () {
                    return eb + (db++).toString(36)
                },
                gb = "http://www.w3.org/1999/xlink",
                hb = "http://www.w3.org/2000/svg",
                ib = {},
                jb = d.url = function (a) {
                    return "url('#" + a + "')"
                };
            d._.$ = e, d._.id = fb, d.format = function () {
                var a = /\{([^\}]+)\}/g,
                    b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    c = function (a, c, d) {
                        var e = d;
                        return c.replace(b, function (a, b, c, d, f) {
                            b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                        }), e = (null == e || e == d ? a : e) + ""
                    };
                return function (b, d) {
                    return L(b).replace(a, function (a, b) {
                        return c(a, b, d)
                    })
                }
            }();
            var kb = function () {
                function a() {
                    this.parentNode.removeChild(this)
                }
                return function (b, c) {
                    var d = J.doc.createElement("img"),
                        e = J.doc.body;
                    d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function () {
                        c.call(d), d.onload = d.onerror = null, e.removeChild(d)
                    }, d.onerror = a, e.appendChild(d), d.src = b
                }
            }();
            d._.clone = h, d._.cacher = j, d.rad = l, d.deg = m, d.angle = k, d.is = f, d.snapTo = function (a, b, c) {
                    if (c = f(c, "finite") ? c : 10, f(a, "array")) {
                        for (var d = a.length; d--;)
                            if (R(a[d] - b) <= c) return a[d]
                    } else {
                        a = +a;
                        var e = b % a;
                        if (c > e) return b - e;
                        if (e > a - c) return b - e + a
                    }
                    return b
                },
                function (a) {
                    function b(a) {
                        return a[0] * a[0] + a[1] * a[1]
                    }

                    function c(a) {
                        var c = O.sqrt(b(a));
                        a[0] && (a[0] /= c), a[1] && (a[1] /= c)
                    }
                    a.add = function (a, b, c, d, e, f) {
                        var g, h, i, j, k = [
                                [],
                                [],
                                []
                            ],
                            l = [
                                [this.a, this.c, this.e],
                                [this.b, this.d, this.f],
                                [0, 0, 1]
                            ],
                            m = [
                                [a, c, e],
                                [b, d, f],
                                [0, 0, 1]
                            ];
                        for (a && a instanceof n && (m = [
                                [a.a, a.c, a.e],
                                [a.b, a.d, a.f],
                                [0, 0, 1]
                            ]), g = 0; 3 > g; g++)
                            for (h = 0; 3 > h; h++) {
                                for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];
                                k[g][h] = j
                            }
                        return this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2], this
                    }, a.invert = function () {
                        var a = this,
                            b = a.a * a.d - a.b * a.c;
                        return new n(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
                    }, a.clone = function () {
                        return new n(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, a.translate = function (a, b) {
                        return this.add(1, 0, 0, 1, a, b)
                    }, a.scale = function (a, b, c, d) {
                        return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
                    }, a.rotate = function (a, b, c) {
                        a = l(a), b = b || 0, c = c || 0;
                        var d = +O.cos(a).toFixed(9),
                            e = +O.sin(a).toFixed(9);
                        return this.add(d, e, -e, d, b, c), this.add(1, 0, 0, 1, -b, -c)
                    }, a.x = function (a, b) {
                        return a * this.a + b * this.c + this.e
                    }, a.y = function (a, b) {
                        return a * this.b + b * this.d + this.f
                    }, a.get = function (a) {
                        return +this[L.fromCharCode(97 + a)].toFixed(4)
                    }, a.toString = function () {
                        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                    }, a.offset = function () {
                        return [this.e.toFixed(4), this.f.toFixed(4)]
                    }, a.determinant = function () {
                        return this.a * this.d - this.b * this.c
                    }, a.split = function () {
                        var a = {};
                        a.dx = this.e, a.dy = this.f;
                        var d = [
                            [this.a, this.c],
                            [this.b, this.d]
                        ];
                        a.scalex = O.sqrt(b(d[0])), c(d[0]), a.shear = d[0][0] * d[1][0] + d[0][1] * d[1][1], d[1] = [d[1][0] - d[0][0] * a.shear, d[1][1] - d[0][1] * a.shear], a.scaley = O.sqrt(b(d[1])), c(d[1]), a.shear /= a.scaley, this.determinant() < 0 && (a.scalex = -a.scalex);
                        var e = -d[0][1],
                            f = d[1][1];
                        return 0 > f ? (a.rotate = m(O.acos(f)), 0 > e && (a.rotate = 360 - a.rotate)) : a.rotate = m(O.asin(e)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
                    }, a.toTransformString = function (a) {
                        var b = a || this.split();
                        return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : T) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : T) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : T))
                    }
                }(n.prototype), d.Matrix = n, d.getRGB = j(function (a) {
                    if (!a || (a = L(a)).indexOf("-") + 1) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: ob
                    };
                    if ("none" == a) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        toString: ob
                    };
                    if (!(_[K](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = lb(a)), !a) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: ob
                    };
                    var b, c, e, g, h, i, j = a.match(W);
                    return j ? (j[2] && (e = N(j[2].substring(5), 16), c = N(j[2].substring(3, 5), 16), b = N(j[2].substring(1, 3), 16)), j[3] && (e = N((h = j[3].charAt(3)) + h, 16), c = N((h = j[3].charAt(2)) + h, 16), b = N((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split($), b = M(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), c = M(i[1]), "%" == i[1].slice(-1) && (c *= 2.55), e = M(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = M(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split($), b = M(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = M(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = M(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = M(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsb2rgb(b, c, e, g)) : j[6] ? (i = j[6].split($), b = M(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = M(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = M(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = M(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsl2rgb(b, c, e, g)) : (b = Q(O.round(b), 255), c = Q(O.round(c), 255), e = Q(O.round(e), 255), g = Q(P(g, 0), 1), j = {
                        r: b,
                        g: c,
                        b: e,
                        toString: ob
                    }, j.hex = "#" + (16777216 | e | c << 8 | b << 16).toString(16).slice(1), j.opacity = f(g, "finite") ? g : 1, j)) : {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: ob
                    }
                }, d), d.hsb = j(function (a, b, c) {
                    return d.hsb2rgb(a, b, c).hex
                }), d.hsl = j(function (a, b, c) {
                    return d.hsl2rgb(a, b, c).hex
                }), d.rgb = j(function (a, b, c, d) {
                    if (f(d, "finite")) {
                        var e = O.round;
                        return "rgba(" + [e(a), e(b), e(c), +d.toFixed(2)] + ")"
                    }
                    return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
                });
            var lb = function (a) {
                    var b = J.doc.getElementsByTagName("head")[0],
                        c = "rgb(255, 0, 0)";
                    return lb = j(function (a) {
                        if ("red" == a.toLowerCase()) return c;
                        b.style.color = c, b.style.color = a;
                        var d = J.doc.defaultView.getComputedStyle(b, T).getPropertyValue("color");
                        return d == c ? null : d
                    }), lb(a)
                },
                mb = function () {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                nb = function () {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                ob = function () {
                    return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                },
                pb = function (a, b, c) {
                    if (null == b && f(a, "object") && "r" in a && "g" in a && "b" in a && (c = a.b, b = a.g, a = a.r), null == b && f(a, string)) {
                        var e = d.getRGB(a);
                        a = e.r, b = e.g, c = e.b
                    }
                    return (a > 1 || b > 1 || c > 1) && (a /= 255, b /= 255, c /= 255), [a, b, c]
                },
                qb = function (a, b, c, e) {
                    a = O.round(255 * a), b = O.round(255 * b), c = O.round(255 * c);
                    var g = {
                        r: a,
                        g: b,
                        b: c,
                        opacity: f(e, "finite") ? e : 1,
                        hex: d.rgb(a, b, c),
                        toString: ob
                    };
                    return f(e, "finite") && (g.opacity = e), g
                };
            d.color = function (a) {
                var b;
                return f(a, "object") && "h" in a && "s" in a && "b" in a ? (b = d.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : f(a, "object") && "h" in a && "s" in a && "l" in a ? (b = d.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (f(a, "string") && (a = d.getRGB(a)), f(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = d.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = d.rgb2hsb(a), a.v = b.b) : (a = {
                    hex: "none"
                }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = ob, a
            }, d.hsb2rgb = function (a, b, c, d) {
                f(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
                var e, g, h, i, j;
                return a = a % 360 / 60, j = c * b, i = j * (1 - R(a % 2 - 1)), e = g = h = c - j, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], qb(e, g, h, d)
            }, d.hsl2rgb = function (a, b, c, d) {
                f(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
                var e, g, h, i, j;
                return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - R(a % 2 - 1)), e = g = h = c - j / 2, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], qb(e, g, h, d)
            }, d.rgb2hsb = function (a, b, c) {
                c = pb(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g;
                return f = P(a, b, c), g = f - Q(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = 60 * ((d + 360) % 6) / 360, e = 0 == g ? 0 : g / f, {
                    h: d,
                    s: e,
                    b: f,
                    toString: mb
                }
            }, d.rgb2hsl = function (a, b, c) {
                c = pb(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g, h, i;
                return g = P(a, b, c), h = Q(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = 60 * ((d + 360) % 6) / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
                    h: d,
                    s: e,
                    l: f,
                    toString: nb
                }
            }, d.parsePathString = function (a) {
                if (!a) return null;
                var b = d.path(a);
                if (b.arr) return d.path.clone(b.arr);
                var c = {
                        a: 7,
                        c: 6,
                        o: 2,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        u: 3,
                        z: 0
                    },
                    e = [];
                return f(a, "array") && f(a[0], "array") && (e = d.path.clone(a)), e.length || L(a).replace(ab, function (a, b, d) {
                    var f = [],
                        g = b.toLowerCase();
                    if (d.replace(cb, function (a, b) {
                            b && f.push(+b)
                        }), "m" == g && f.length > 2 && (e.push([b].concat(f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == f.length && e.push([b, f[0]]), "r" == g) e.push([b].concat(f));
                    else
                        for (; f.length >= c[g] && (e.push([b].concat(f.splice(0, c[g]))), c[g]););
                }), e.toString = d.path.toString, b.arr = d.path.clone(e), e
            };
            var rb = d.parseTransformString = function (a) {
                if (!a) return null;
                var b = [];
                return f(a, "array") && f(a[0], "array") && (b = d.path.clone(a)), b.length || L(a).replace(bb, function (a, c, d) {
                    var e = [];
                    c.toLowerCase(), d.replace(cb, function (a, b) {
                        b && e.push(+b)
                    }), b.push([c].concat(e))
                }), b.toString = d.path.toString, b
            };
            d._.svgTransform2string = o, d._.rgTransform = new RegExp("^[a-z][" + Y + "]*-?\\.?\\d", "i"), d._.transform2matrix = p, d._unit2px = s, J.doc.contains || J.doc.compareDocumentPosition ? function (a, b) {
                    var c = 9 == a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function (a, b) {
                    if (b)
                        for (; b;)
                            if (b = b.parentNode, b == a) return !0;
                    return !1
                }, d._.getSomeDefs = r, d.select = function (a) {
                    return z(J.doc.querySelector(a))
                }, d.selectAll = function (a) {
                    for (var b = J.doc.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(z(b[e]));
                    return c
                },
                function (a) {
                    function g(a) {
                        function b(a, b) {
                            var c = e(a.node, b);
                            c = c && c.match(g), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (i[c] = (i[c] || []).concat(function (c) {
                                var d = {};
                                d[b] = jb(c), e(a.node, d)
                            })))
                        }

                        function c(a) {
                            var b = e(a.node, "xlink:href");
                            b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function (b) {
                                a.attr("xlink:href", "#" + b)
                            })))
                        }
                        for (var d, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
                            d = f[j], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
                            var l = e(d.node, "id");
                            l && (e(d.node, {
                                id: d.id
                            }), h.push({
                                old: l,
                                id: d.id
                            }))
                        }
                        for (j = 0, k = h.length; k > j; j++) {
                            var m = i[h[j].old];
                            if (m)
                                for (var n = 0, o = m.length; o > n; n++) m[n](h[j].id)
                        }
                    }

                    function h(a, b, c) {
                        return function (d) {
                            var e = d.slice(a, b);
                            return 1 == e.length && (e = e[0]), c ? c(e) : e
                        }
                    }

                    function i(a) {
                        return function () {
                            var b = a ? "<" + this.type : "",
                                c = this.node.attributes,
                                d = this.node.childNodes;
                            if (a)
                                for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
                            if (d.length) {
                                for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += z(d[e]).toString());
                                a && (b += "</" + this.type + ">")
                            } else a && (b += "/>");
                            return b
                        }
                    }
                    a.attr = function (a, c) {
                        var d = this;
                        if (d.node, !a) return d;
                        if (f(a, "string")) {
                            if (!(arguments.length > 1)) return v(b("snap.util.getattr." + a, d));
                            var e = {};
                            e[a] = c, a = e
                        }
                        for (var g in a) a[K](g) && b("snap.util.attr." + g, d, a[g]);
                        return d
                    }, a.getBBox = function (a) {
                        var b = this;
                        if ("use" == b.type)
                            if (b.original) b = b.original;
                            else {
                                var c = b.attr("xlink:href");
                                b = J.doc.getElementById(c.substring(c.indexOf("#") + 1))
                            }
                        if (b.removed) return {};
                        var e = b._;
                        return a ? (e.bboxwt = d.path.get[b.type] ? d.path.getBBox(b.realPath = d.path.get[b.type](b)) : d._.box(b.node.getBBox()), d._.box(e.bboxwt)) : (b.realPath = (d.path.get[b.type] || d.path.get.deflt)(b), e.bbox = d.path.getBBox(d.path.map(b.realPath, b.matrix)), d._.box(e.bbox))
                    };
                    var j = function () {
                        return this.string
                    };
                    a.transform = function (a) {
                        var b = this._;
                        if (null == a) {
                            var c = new n(this.node.getCTM()),
                                d = q(this),
                                f = d.toTransformString(),
                                g = L(d) == L(this.matrix) ? b.transform : f;
                            return {
                                string: g,
                                globalMatrix: c,
                                localMatrix: d,
                                diffMatrix: c.clone().add(d.invert()),
                                global: c.toTransformString(),
                                local: f,
                                toString: j
                            }
                        }
                        return a instanceof n ? this.matrix = a : q(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? e(this.node, {
                            gradientTransform: this.matrix
                        }) : "pattern" == this.type ? e(this.node, {
                            patternTransform: this.matrix
                        }) : e(this.node, {
                            transform: this.matrix
                        })), this
                    }, a.parent = function () {
                        return z(this.node.parentNode)
                    }, a.append = a.add = function (a) {
                        if (a) {
                            if ("set" == a.type) {
                                var b = this;
                                return a.forEach(function (a) {
                                    b.add(a)
                                }), this
                            }
                            a = z(a), this.node.appendChild(a.node), a.paper = this.paper
                        }
                        return this
                    }, a.appendTo = function (a) {
                        return a && (a = z(a), a.append(this)), this
                    }, a.prepend = function (a) {
                        if (a) {
                            a = z(a);
                            var b = a.parent();
                            this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), b && b.add()
                        }
                        return this
                    }, a.prependTo = function (a) {
                        return a = z(a), a.prepend(this), this
                    }, a.before = function (a) {
                        if ("set" == a.type) {
                            var b = this;
                            return a.forEach(function (a) {
                                var c = a.parent();
                                b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
                            }), this.parent().add(), this
                        }
                        a = z(a);
                        var c = a.parent();
                        return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
                    }, a.after = function (a) {
                        a = z(a);
                        var b = a.parent();
                        return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
                    }, a.insertBefore = function (a) {
                        a = z(a);
                        var b = this.parent();
                        return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
                    }, a.insertAfter = function (a) {
                        a = z(a);
                        var b = this.parent();
                        return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
                    }, a.remove = function () {
                        var a = this.parent();
                        return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
                    }, a.select = function (a) {
                        return z(this.node.querySelector(a))
                    }, a.selectAll = function (a) {
                        for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(z(b[e]));
                        return c
                    }, a.asPX = function (a, b) {
                        return null == b && (b = this.attr(a)), +s(this, a, b)
                    }, a.use = function () {
                        var a, b = this.node.id;
                        return b || (b = this.id, e(this.node, {
                            id: b
                        })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? x(this.type, this.node.parentNode) : x("use", this.node.parentNode), e(a.node, {
                            "xlink:href": "#" + b
                        }), a.original = this, a
                    };
                    var k = /\S+/g,
                        l = /[\t\r\n\f]/g;
                    a.addClass = function (a) {
                        var b, c, d, e = (a || "").match(k) || [],
                            f = this.node,
                            g = f.className ? (" " + f.className + " ").replace(l, " ") : " ";
                        if (g) {
                            for (b = 0; c = e[b++];) g.indexOf(" " + c + " ") < 0 && (g += c + " ");
                            d = g.replace(/(^\s+|\s+$)/g, ""), f.className != d && (f.className = d)
                        }
                    }, a.clone = function () {
                        var a = z(this.node.cloneNode(!0));
                        return e(a.node, "id") && e(a.node, {
                            id: a.id
                        }), g(a), a.insertAfter(this), a
                    }, a.toDefs = function () {
                        var a = r(this);
                        return a.appendChild(this.node), this
                    }, a.pattern = function (a, b, c, d) {
                        var g = x("pattern", r(this));
                        return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), e(g.node, {
                            x: a,
                            y: b,
                            width: c,
                            height: d,
                            patternUnits: "userSpaceOnUse",
                            id: g.id,
                            viewBox: [a, b, c, d].join(" ")
                        }), g.node.appendChild(this.node), g
                    }, a.marker = function (a, b, c, d, g, h) {
                        var i = x("marker", r(this));
                        return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, g = a.refX || a.cx, h = a.refY || a.cy, a = a.x), e(i.node, {
                            viewBox: [a, b, c, d].join(U),
                            markerWidth: c,
                            markerHeight: d,
                            orient: "auto",
                            refX: g || 0,
                            refY: h || 0,
                            id: i.id
                        }), i.node.appendChild(this.node), i
                    };
                    var m = function (a, b, d, e) {
                        "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
                    };
                    d.animation = function (a, b, c, d) {
                        return new m(a, b, c, d)
                    }, a.inAnim = function () {
                        var a = this,
                            b = [];
                        for (var c in a.anims) a.anims[K](c) && ! function (a) {
                            b.push({
                                anim: new m(a._attrs, a.dur, a.easing, a._callback),
                                curStatus: a.status(),
                                status: function (b) {
                                    return a.status(b)
                                },
                                stop: function () {
                                    a.stop()
                                }
                            })
                        }(a.anims[c]);
                        return b
                    }, d.animate = function (a, d, e, f, g, h) {
                        "function" != typeof g || g.length || (h = g, g = c.linear);
                        var i = c.time(),
                            j = c(a, d, i, i + f, c.time, e, g);
                        return h && b.once("mina.finish." + j.id, h), j
                    }, a.stop = function () {
                        for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
                        return this
                    }, a.animate = function (a, d, e, g) {
                        "function" != typeof e || e.length || (g = e, e = c.linear), a instanceof m && (g = a.callback, e = a.easing, d = e.dur, a = a.attr);
                        var i, j, k, l, n = [],
                            o = [],
                            p = {},
                            q = this;
                        for (var r in a)
                            if (a[K](r)) {
                                q.equal ? (l = q.equal(r, L(a[r])), i = l.from, j = l.to, k = l.f) : (i = +q.attr(r), j = +a[r]);
                                var s = f(i, "array") ? i.length : 1;
                                p[r] = h(n.length, n.length + s, k), n = n.concat(i), o = o.concat(j)
                            }
                        var t = c.time(),
                            u = c(n, o, t, t + d, c.time, function (a) {
                                var b = {};
                                for (var c in p) p[K](c) && (b[c] = p[c](a));
                                q.attr(b)
                            }, e);
                        return q.anims[u.id] = u, u._attrs = a, u._callback = g, b.once("mina.finish." + u.id, function () {
                            delete q.anims[u.id], g && g.call(q)
                        }), b.once("mina.stop." + u.id, function () {
                            delete q.anims[u.id]
                        }), q
                    };
                    var o = {};
                    a.data = function (a, c) {
                        var e = o[this.id] = o[this.id] || {};
                        if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
                        if (1 == arguments.length) {
                            if (d.is(a, "object")) {
                                for (var f in a) a[K](f) && this.data(f, a[f]);
                                return this
                            }
                            return b("snap.data.get." + this.id, this, e[a], a), e[a]
                        }
                        return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
                    }, a.removeData = function (a) {
                        return null == a ? o[this.id] = {} : o[this.id] && delete o[this.id][a], this
                    }, a.outerSVG = a.toString = i(1), a.innerSVG = i()
                }(u.prototype), d.parse = function (a) {
                    var b = J.doc.createDocumentFragment(),
                        c = !0,
                        d = J.doc.createElement("div");
                    if (a = L(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
                        if (c) b = a;
                        else
                            for (; a.firstChild;) b.appendChild(a.firstChild);
                    return d.innerHTML = T, new w(b)
                }, w.prototype.select = u.prototype.select, w.prototype.selectAll = u.prototype.selectAll, d.fragment = function () {
                    for (var a = Array.prototype.slice.call(arguments, 0), b = J.doc.createDocumentFragment(), c = 0, e = a.length; e > c; c++) {
                        var f = a[c];
                        f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(d.parse(f).node)
                    }
                    return new w(b)
                },
                function (a) {
                    a.el = function (a, b) {
                            return x(a, this.node).attr(b)
                        }, a.rect = function (a, b, c, d, e, g) {
                            var h;
                            return null == g && (g = e), f(a, "object") && "[object Object]" == a ? h = a : null != a && (h = {
                                x: a,
                                y: b,
                                width: c,
                                height: d
                            }, null != e && (h.rx = e, h.ry = g)), this.el("rect", h)
                        }, a.circle = function (a, b, c) {
                            var d;
                            return f(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
                                cx: a,
                                cy: b,
                                r: c
                            }), this.el("circle", d)
                        }, a.image = function (a, b, c, d, g) {
                            var h = x("image", this.node);
                            if (f(a, "object") && "src" in a) h.attr(a);
                            else if (null != a) {
                                var i = {
                                    "xlink:href": a,
                                    preserveAspectRatio: "none"
                                };
                                null != b && null != c && (i.x = b, i.y = c), null != d && null != g ? (i.width = d, i.height = g) : kb(a, function () {
                                    e(h.node, {
                                        width: this.offsetWidth,
                                        height: this.offsetHeight
                                    })
                                }), e(h.node, i)
                            }
                            return h
                        }, a.ellipse = function (a, b, c, d) {
                            var e = x("ellipse", this.node);
                            return f(a, "object") && "[object Object]" == a ? e.attr(a) : null != a && e.attr({
                                cx: a,
                                cy: b,
                                rx: c,
                                ry: d
                            }), e
                        }, a.path = function (a) {
                            var b = x("path", this.node);
                            return f(a, "object") && !f(a, "array") ? b.attr(a) : a && b.attr({
                                d: a
                            }), b
                        }, a.group = a.g = function (a) {
                            var b = x("g", this.node);
                            return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
                        }, a.text = function (a, b, c) {
                            var d = x("text", this.node);
                            return f(a, "object") ? d.attr(a) : null != a && d.attr({
                                x: a,
                                y: b,
                                text: c || ""
                            }), d
                        }, a.line = function (a, b, c, d) {
                            var e = x("line", this.node);
                            return f(a, "object") ? e.attr(a) : null != a && e.attr({
                                x1: a,
                                x2: c,
                                y1: b,
                                y2: d
                            }), e
                        }, a.polyline = function (a) {
                            arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                            var b = x("polyline", this.node);
                            return f(a, "object") && !f(a, "array") ? b.attr(a) : null != a && b.attr({
                                points: a
                            }), b
                        }, a.polygon = function (a) {
                            arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                            var b = x("polygon", this.node);
                            return f(a, "object") && !f(a, "array") ? b.attr(a) : null != a && b.attr({
                                points: a
                            }), b
                        },
                        function () {
                            a.gradient = function (a) {
                                return D(this.defs, a)
                            }, a.gradientLinear = function (a, b, c, d) {
                                return E(this.defs, a, b, c, d)
                            }, a.gradientRadial = function (a, b, c, d, e) {
                                return F(this.defs, a, b, c, d, e)
                            }, a.toString = function () {
                                var a, b = J.doc.createDocumentFragment(),
                                    c = J.doc.createElement("div"),
                                    d = this.node.cloneNode(!0);
                                return b.appendChild(c), c.appendChild(d), e(d, {
                                    xmlns: hb
                                }), a = c.innerHTML, b.removeChild(b.firstChild), a
                            }, a.clear = function () {
                                for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName && b.parentNode.removeChild(b), b = a
                            }
                        }()
                }(y.prototype), d.ajax = function (a, c, d, e) {
                    var g = new XMLHttpRequest,
                        h = fb();
                    if (g) {
                        if (f(c, "function")) e = d, d = c, c = null;
                        else if (f(c, "object")) {
                            var i = [];
                            for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                            c = i.join("&")
                        }
                        return g.open(c ? "POST" : "GET", a, !0), g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), c && g.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function () {
                            4 == g.readyState && b("snap.ajax." + h + "." + g.status, e, g)
                        }, 4 == g.readyState ? g : (g.send(c), g)
                    }
                }, d.load = function (a, b, c) {
                    d.ajax(a, function (a) {
                        var e = d.parse(a.responseText);
                        c ? b.call(c, e) : b(e)
                    })
                }, b.on("snap.util.attr.mask", function (a) {
                    if (a instanceof u || a instanceof w) {
                        if (b.stop(), a instanceof w && 1 == a.node.childNodes.length && (a = a.node.firstChild, r(this).appendChild(a), a = z(a)), "mask" == a.type) var c = a;
                        else c = x("mask", r(this)), c.node.appendChild(a.node), !c.node.id && e(c.node, {
                            id: c.id
                        });
                        e(this.node, {
                            mask: jb(c.id)
                        })
                    }
                }),
                function (a) {
                    b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
                }(function (a) {
                    if (a instanceof u || a instanceof w) {
                        if (b.stop(), "clipPath" == a.type) var c = a;
                        else c = x("clipPath", r(this)), c.node.appendChild(a.node), !c.node.id && e(c.node, {
                            id: c.id
                        });
                        e(this.node, {
                            "clip-path": jb(c.id)
                        })
                    }
                }), b.on("snap.util.attr.fill", G("fill")), b.on("snap.util.attr.stroke", G("stroke"));
            var sb = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
            b.on("snap.util.grad.parse", function (a) {
                a = L(a);
                var b = a.match(sb);
                if (!b) return null;
                var c = b[1],
                    d = b[2],
                    e = b[3];
                return d = d.split(/\s*,\s*/).map(function (a) {
                    return +a == a ? +a : a
                }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function (a) {
                    a = a.split(":");
                    var b = {
                        color: a[0]
                    };
                    return a[1] && (b.offset = parseFloat(a[1])), b
                }), {
                    type: c,
                    params: d,
                    stops: e
                }
            }), b.on("snap.util.attr.d", function (a) {
                b.stop(), f(a, "array") && f(a[0], "array") && (a = d.path.toString.call(a)), a = L(a), a.match(/[ruo]/i) && (a = d.path.toAbsolute(a)), e(this.node, {
                    d: a
                })
            })(-1), b.on("snap.util.attr.#text", function (a) {
                b.stop(), a = L(a);
                for (var c = J.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                this.node.appendChild(c)
            })(-1), b.on("snap.util.attr.path", function (a) {
                b.stop(), this.attr({
                    d: a
                })
            })(-1), b.on("snap.util.attr.viewBox", function (a) {
                var c;
                c = f(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : f(a, "array") ? a.join(" ") : a, e(this.node, {
                    viewBox: c
                }), b.stop()
            })(-1), b.on("snap.util.attr.transform", function (a) {
                this.transform(a), b.stop()
            })(-1), b.on("snap.util.attr.r", function (a) {
                "rect" == this.type && (b.stop(), e(this.node, {
                    rx: a,
                    ry: a
                }))
            })(-1), b.on("snap.util.attr.textpath", function (a) {
                if (b.stop(), "text" == this.type) {
                    var c, d, g;
                    if (!a && this.textPath) {
                        for (d = this.textPath; d.node.firstChild;) this.node.appendChild(d.node.firstChild);
                        return d.remove(), delete this.textPath, void 0
                    }
                    if (f(a, "string")) {
                        var h = r(this),
                            i = z(h.parentNode).path(a);
                        h.appendChild(i.node), c = i.id, i.attr({
                            id: c
                        })
                    } else a = z(a), a instanceof u && (c = a.attr("id"), c || (c = a.id, a.attr({
                        id: c
                    })));
                    if (c)
                        if (d = this.textPath, g = this.node, d) d.attr({
                            "xlink:href": "#" + c
                        });
                        else {
                            for (d = e("textPath", {
                                    "xlink:href": "#" + c
                                }); g.firstChild;) d.appendChild(g.firstChild);
                            g.appendChild(d), this.textPath = z(d)
                        }
                }
            })(-1), b.on("snap.util.attr.text", function (a) {
                if ("text" == this.type) {
                    for (var c = this.node, d = function (a) {
                            var b = e("tspan");
                            if (f(a, "array"))
                                for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
                            else b.appendChild(J.doc.createTextNode(a));
                            return b.normalize && b.normalize(), b
                        }; c.firstChild;) c.removeChild(c.firstChild);
                    for (var g = d(a); g.firstChild;) c.appendChild(g.firstChild)
                }
                b.stop()
            })(-1);
            var tb = {
                "alignment-baseline": 0,
                "baseline-shift": 0,
                clip: 0,
                "clip-path": 0,
                "clip-rule": 0,
                color: 0,
                "color-interpolation": 0,
                "color-interpolation-filters": 0,
                "color-profile": 0,
                "color-rendering": 0,
                cursor: 0,
                direction: 0,
                display: 0,
                "dominant-baseline": 0,
                "enable-background": 0,
                fill: 0,
                "fill-opacity": 0,
                "fill-rule": 0,
                filter: 0,
                "flood-color": 0,
                "flood-opacity": 0,
                font: 0,
                "font-family": 0,
                "font-size": 0,
                "font-size-adjust": 0,
                "font-stretch": 0,
                "font-style": 0,
                "font-variant": 0,
                "font-weight": 0,
                "glyph-orientation-horizontal": 0,
                "glyph-orientation-vertical": 0,
                "image-rendering": 0,
                kerning: 0,
                "letter-spacing": 0,
                "lighting-color": 0,
                marker: 0,
                "marker-end": 0,
                "marker-mid": 0,
                "marker-start": 0,
                mask: 0,
                opacity: 0,
                overflow: 0,
                "pointer-events": 0,
                "shape-rendering": 0,
                "stop-color": 0,
                "stop-opacity": 0,
                stroke: 0,
                "stroke-dasharray": 0,
                "stroke-dashoffset": 0,
                "stroke-linecap": 0,
                "stroke-linejoin": 0,
                "stroke-miterlimit": 0,
                "stroke-opacity": 0,
                "stroke-width": 0,
                "text-anchor": 0,
                "text-decoration": 0,
                "text-rendering": 0,
                "unicode-bidi": 0,
                visibility: 0,
                "word-spacing": 0,
                "writing-mode": 0
            };
            b.on("snap.util.attr", function (a) {
                    var c = b.nt(),
                        d = {};
                    c = c.substring(c.lastIndexOf(".") + 1), d[c] = a;
                    var f = c.replace(/-(\w)/gi, function (a, b) {
                            return b.toUpperCase()
                        }),
                        g = c.replace(/[A-Z]/g, function (a) {
                            return "-" + a.toLowerCase()
                        });
                    tb[K](g) ? this.node.style[f] = null == a ? T : a : e(this.node, d)
                }), b.on("snap.util.getattr.transform", function () {
                    return b.stop(), this.transform()
                })(-1), b.on("snap.util.getattr.textpath", function () {
                    return b.stop(), this.textPath
                })(-1),
                function () {
                    function a(a) {
                        return function () {
                            b.stop();
                            var c = J.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + a);
                            return "none" == c ? c : d(J.doc.getElementById(c.match(X)[1]))
                        }
                    }

                    function c(a) {
                        return function (c) {
                            b.stop();
                            var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
                            if ("" == c || !c) return this.node.style[d] = "none", void 0;
                            if ("marker" == c.type) {
                                var f = c.node.id;
                                return f || e(c.node, {
                                    id: c.id
                                }), this.node.style[d] = jb(f), void 0
                            }
                        }
                    }
                    b.on("snap.util.getattr.marker-end", a("end"))(-1), b.on("snap.util.getattr.markerEnd", a("end"))(-1), b.on("snap.util.getattr.marker-start", a("start"))(-1), b.on("snap.util.getattr.markerStart", a("start"))(-1), b.on("snap.util.getattr.marker-mid", a("mid"))(-1), b.on("snap.util.getattr.markerMid", a("mid"))(-1), b.on("snap.util.attr.marker-end", c("end"))(-1), b.on("snap.util.attr.markerEnd", c("end"))(-1), b.on("snap.util.attr.marker-start", c("start"))(-1), b.on("snap.util.attr.markerStart", c("start"))(-1), b.on("snap.util.attr.marker-mid", c("mid"))(-1), b.on("snap.util.attr.markerMid", c("mid"))(-1)
                }(), b.on("snap.util.getattr.r", function () {
                    return "rect" == this.type && e(this.node, "rx") == e(this.node, "ry") ? (b.stop(), e(this.node, "rx")) : void 0
                })(-1), b.on("snap.util.getattr.text", function () {
                    if ("text" == this.type || "tspan" == this.type) {
                        b.stop();
                        var a = H(this.node);
                        return 1 == a.length ? a[0] : a
                    }
                })(-1), b.on("snap.util.getattr.#text", function () {
                    return this.node.textContent
                })(-1), b.on("snap.util.getattr.viewBox", function () {
                    b.stop();
                    var a = e(this.node, "viewBox");
                    return a ? (a = a.split(Z), d._.box(+a[0], +a[1], +a[2], +a[3])) : void 0
                })(-1), b.on("snap.util.getattr.points", function () {
                    var a = e(this.node, "points");
                    return b.stop(), a.split(Z)
                }), b.on("snap.util.getattr.path", function () {
                    var a = e(this.node, "d");
                    return b.stop(), a
                }), b.on("snap.util.getattr.fontSize", I)(-1), b.on("snap.util.getattr.font-size", I)(-1), b.on("snap.util.getattr", function () {
                    var a = b.nt();
                    a = a.substring(a.lastIndexOf(".") + 1);
                    var c = a.replace(/[A-Z]/g, function (a) {
                        return "-" + a.toLowerCase()
                    });
                    return tb[K](c) ? J.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : e(this.node, a)
                });
            var ub = function (a) {
                var b = a.getBoundingClientRect(),
                    c = a.ownerDocument,
                    d = c.body,
                    e = c.documentElement,
                    f = e.clientTop || d.clientTop || 0,
                    h = e.clientLeft || d.clientLeft || 0,
                    i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
                    j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
                return {
                    y: i,
                    x: j
                }
            };
            return d.getElementByPoint = function (a, b) {
                var c = this,
                    d = (c.canvas, J.doc.elementFromPoint(a, b));
                if (J.win.opera && "svg" == d.tagName) {
                    var e = ub(d),
                        f = d.createSVGRect();
                    f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
                    var g = d.getIntersectionList(f, null);
                    g.length && (d = g[g.length - 1])
                }
                return d ? z(d) : null
            }, d.plugin = function (a) {
                a(d, u, y, J)
            }, J.win.Snap = d, d
        }();
    return d.plugin(function (a, b) {
        function c(a) {
            var b = c.ps = c.ps || {};
            return b[a] ? b[a].sleep = 100 : b[a] = {
                sleep: 100
            }, setTimeout(function () {
                for (var c in b) b[K](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
            }), b[a]
        }

        function d(a, b, c, d) {
            return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
                x: a,
                y: b,
                width: c,
                w: c,
                height: d,
                h: d,
                x2: a + c,
                y2: b + d,
                cx: a + c / 2,
                cy: b + d / 2,
                r1: N.min(c, d) / 2,
                r2: N.max(c, d) / 2,
                r0: N.sqrt(c * c + d * d) / 2,
                path: w(a, b, c, d),
                vb: [a, b, c, d].join(" ")
            }
        }

        function e() {
            return this.join(",").replace(L, "$1")
        }

        function f(a) {
            var b = J(a);
            return b.toString = e, b
        }

        function g(a, b, c, d, e, f, g, h, j) {
            return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
        }

        function h(c, d) {
            function e(a) {
                return +(+a).toFixed(3)
            }
            return a._.cacher(function (a, f, h) {
                a instanceof b && (a = a.attr("d")), a = E(a);
                for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
                    if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2];
                    else {
                        if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
                            if (d && !p.start) {
                                if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;
                                p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
                                continue
                            }
                            if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
                        }
                        q += m, j = +l[5], k = +l[6]
                    }
                    o += l.shift() + l
                }
                return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
            }, null, a._.clone)
        }

        function i(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i,
                k = R(j, 3),
                l = R(j, 2),
                m = i * i,
                n = m * i,
                o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
                q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
                r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
                s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
                t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
                u = j * a + i * c,
                v = j * b + i * d,
                w = j * e + i * g,
                x = j * f + i * h,
                y = 90 - 180 * N.atan2(q - s, r - t) / O;
            return {
                x: o,
                y: p,
                m: {
                    x: q,
                    y: r
                },
                n: {
                    x: s,
                    y: t
                },
                start: {
                    x: u,
                    y: v
                },
                end: {
                    x: w,
                    y: x
                },
                alpha: y
            }
        }

        function j(b, c, e, f, g, h, i, j) {
            a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
            var k = D.apply(null, b);
            return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
        }

        function k(a, b, c) {
            return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
        }

        function l(a, b) {
            return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
        }

        function m(a, b, c, d, e) {
            var f = -3 * b + 9 * c - 9 * d + 3 * e,
                g = a * f + 6 * b - 12 * c + 6 * d;
            return a * g - 3 * b + 3 * c
        }

        function n(a, b, c, d, e, f, g, h, i) {
            null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
            for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
                var q = j * l[p] + j,
                    r = m(q, a, c, e, g),
                    s = m(q, b, d, f, h),
                    t = r * r + s * s;
                o += n[p] * N.sqrt(t)
            }
            return j * o
        }

        function o(a, b, c, d, e, f, g, h, i) {
            if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
                var j, k = 1,
                    l = k / 2,
                    m = k - l,
                    o = .01;
                for (j = n(a, b, c, d, e, f, g, h, m); S(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
                return m
            }
        }

        function p(a, b, c, d, e, f, g, h) {
            if (!(Q(a, c) < P(e, g) || P(a, c) > Q(e, g) || Q(b, d) < P(f, h) || P(b, d) > Q(f, h))) {
                var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                    j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                    k = (a - c) * (f - h) - (b - d) * (e - g);
                if (k) {
                    var l = i / k,
                        m = j / k,
                        n = +l.toFixed(2),
                        o = +m.toFixed(2);
                    if (!(n < +P(a, c).toFixed(2) || n > +Q(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +Q(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +Q(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +Q(f, h).toFixed(2))) return {
                        x: l,
                        y: m
                    }
                }
            }
        }

        function q(a, b, c) {
            var d = j(a),
                e = j(b);
            if (!l(d, e)) return c ? 0 : [];
            for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 5), k = ~~(g / 5), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
                var t = i.apply(0, a.concat(s / h));
                m.push({
                    x: t.x,
                    y: t.y,
                    t: s / h
                })
            }
            for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({
                x: t.x,
                y: t.y,
                t: s / k
            });
            for (s = 0; h > s; s++)
                for (var u = 0; k > u; u++) {
                    var v = m[s],
                        w = m[s + 1],
                        x = o[u],
                        y = o[u + 1],
                        z = S(w.x - v.x) < .001 ? "y" : "x",
                        A = S(y.x - x.x) < .001 ? "y" : "x",
                        B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
                    if (B) {
                        if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
                        q[B.x.toFixed(4)] = B.y.toFixed(4);
                        var C = v.t + S((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
                            D = x.t + S((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                        C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({
                            x: B.x,
                            y: B.y,
                            t1: C,
                            t2: D
                        }))
                    }
                }
            return r
        }

        function r(a, b) {
            return t(a, b)
        }

        function s(a, b) {
            return t(a, b, 1)
        }

        function t(a, b, c) {
            a = E(a), b = E(b);
            for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
                var r = a[o];
                if ("M" == r[0]) d = h = r[1], e = i = r[2];
                else {
                    "C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
                    for (var s = 0, t = b.length; t > s; s++) {
                        var u = b[s];
                        if ("M" == u[0]) f = j = u[1], g = k = u[2];
                        else {
                            "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
                            var v = q(l, m, c);
                            if (c) n += v;
                            else {
                                for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
                                n = n.concat(v)
                            }
                        }
                    }
                }
            }
            return n
        }

        function u(a, b, c) {
            var d = v(a);
            return k(d, b, c) && 1 == t(a, [
                ["M", b, c],
                ["H", d.x2 + 10]
            ], 1) % 2
        }

        function v(a) {
            var b = c(a);
            if (b.bbox) return J(b.bbox);
            if (!a) return d();
            a = E(a);
            for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
                if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g);
                else {
                    var l = D(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
                    h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
                }
            var m = P.apply(0, h),
                n = P.apply(0, i),
                o = Q.apply(0, h),
                p = Q.apply(0, i),
                q = d(m, n, o - m, p - n);
            return b.bbox = J(q), q
        }

        function w(a, b, c, d, f) {
            if (f) return [
                ["M", +a + +f, b],
                ["l", c - 2 * f, 0],
                ["a", f, f, 0, 0, 1, f, f],
                ["l", 0, d - 2 * f],
                ["a", f, f, 0, 0, 1, -f, f],
                ["l", 2 * f - c, 0],
                ["a", f, f, 0, 0, 1, -f, -f],
                ["l", 0, 2 * f - d],
                ["a", f, f, 0, 0, 1, f, -f],
                ["z"]
            ];
            var g = [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", -c, 0],
                ["z"]
            ];
            return g.toString = e, g
        }

        function x(a, b, c, d, f) {
            if (null == f && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != f) var g = Math.PI / 180,
                h = a + c * Math.cos(-d * g),
                i = a + c * Math.cos(-f * g),
                j = b + c * Math.sin(-d * g),
                k = b + c * Math.sin(-f * g),
                l = [
                    ["M", h, j],
                    ["A", c, c, 0, +(f - d > 180), 0, i, k]
                ];
            else l = [
                ["M", a, b],
                ["m", 0, -d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, -2 * d],
                ["z"]
            ];
            return l.toString = e, l
        }

        function y(b) {
            var d = c(b),
                g = String.prototype.toLowerCase;
            if (d.rel) return f(d.rel);
            a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
            var h = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
            for (var n = m, o = b.length; o > n; n++) {
                var p = h[n] = [],
                    q = b[n];
                if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
                    case "a":
                        p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
                        break;
                    case "v":
                        p[1] = +(q[1] - j).toFixed(3);
                        break;
                    case "m":
                        k = q[1], l = q[2];
                    default:
                        for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
                } else {
                    p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
                    for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t]
                }
                var v = h[n].length;
                switch (h[n][0]) {
                    case "z":
                        i = k, j = l;
                        break;
                    case "h":
                        i += +h[n][v - 1];
                        break;
                    case "v":
                        j += +h[n][v - 1];
                        break;
                    default:
                        i += +h[n][v - 2], j += +h[n][v - 1]
                }
            }
            return h.toString = e, d.rel = f(h), h
        }

        function z(b) {
            var d = c(b);
            if (d.abs) return f(d.abs);
            if (I(b, "array") && I(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [
                ["M", 0, 0]
            ];
            var g, h = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
            for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
                if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {
                        case "A":
                            n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
                            break;
                        case "V":
                            n[1] = +o[1] + j;
                            break;
                        case "H":
                            n[1] = +o[1] + i;
                            break;
                        case "R":
                            for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
                            h.pop(), h = h.concat(G(s, p));
                            break;
                        case "O":
                            h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                            break;
                        case "U":
                            h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                            break;
                        case "M":
                            k = +o[1] + i, l = +o[2] + j;
                        default:
                            for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
                    } else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(G(s, p)), n = ["R"].concat(o.slice(-2));
                    else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                else
                    for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
                if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
                    case "Z":
                        i = +k, j = +l;
                        break;
                    case "H":
                        i = n[1];
                        break;
                    case "V":
                        j = n[1];
                        break;
                    case "M":
                        k = n[n.length - 2], l = n[n.length - 1];
                    default:
                        i = n[n.length - 2], j = n[n.length - 1]
                }
            }
            return h.toString = e, d.abs = f(h), h
        }

        function A(a, b, c, d) {
            return [a, b, c, d, c, d]
        }

        function B(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        }

        function C(b, c, d, e, f, g, h, i, j, k) {
            var l, m = 120 * O / 180,
                n = O / 180 * (+f || 0),
                o = [],
                p = a._.cacher(function (a, b, c) {
                    var d = a * N.cos(c) - b * N.sin(c),
                        e = a * N.sin(c) + b * N.cos(c);
                    return {
                        x: d,
                        y: e
                    }
                });
            if (k) y = k[0], z = k[1], w = k[2], x = k[3];
            else {
                l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                var q = (N.cos(O / 180 * f), N.sin(O / 180 * f), (b - i) / 2),
                    r = (c - j) / 2,
                    s = q * q / (d * d) + r * r / (e * e);
                s > 1 && (s = N.sqrt(s), d = s * d, e = s * e);
                var t = d * d,
                    u = e * e,
                    v = (g == h ? -1 : 1) * N.sqrt(S((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                    w = v * d * r / e + (b + i) / 2,
                    x = v * -e * q / d + (c + j) / 2,
                    y = N.asin(((c - x) / e).toFixed(9)),
                    z = N.asin(((j - x) / e).toFixed(9));
                y = w > b ? O - y : y, z = w > i ? O - z : z, 0 > y && (y = 2 * O + y), 0 > z && (z = 2 * O + z), h && y > z && (y -= 2 * O), !h && z > y && (z -= 2 * O)
            }
            var A = z - y;
            if (S(A) > m) {
                var B = z,
                    D = i,
                    E = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + d * N.cos(z), j = x + e * N.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
            }
            A = z - y;
            var F = N.cos(y),
                G = N.sin(y),
                H = N.cos(z),
                I = N.sin(z),
                J = N.tan(A / 4),
                K = 4 / 3 * d * J,
                L = 4 / 3 * e * J,
                M = [b, c],
                P = [b + K * G, c - L * F],
                Q = [i + K * I, j - L * H],
                R = [i, j];
            if (P[0] = 2 * M[0] - P[0], P[1] = 2 * M[1] - P[1], k) return [P, Q, R].concat(o);
            o = [P, Q, R].concat(o).join().split(",");
            for (var T = [], U = 0, V = o.length; V > U; U++) T[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
            return T
        }

        function D(a, b, c, d, e, f, g, h) {
            for (var i, j, k, l, m, n, o, p, q = [], r = [
                    [],
                    []
                ], s = 0; 2 > s; ++s)
                if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), S(i) < 1e-12) {
                    if (S(j) < 1e-12) continue;
                    l = -k / j, l > 0 && 1 > l && q.push(l)
                } else o = j * j - 4 * k * i, p = N.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
            for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
            return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
                min: {
                    x: P.apply(0, r[0]),
                    y: P.apply(0, r[1])
                },
                max: {
                    x: Q.apply(0, r[0]),
                    y: Q.apply(0, r[1])
                }
            }
        }

        function E(a, b) {
            var d = !b && c(a);
            if (!b && d.curve) return f(d.curve);
            for (var e = z(a), g = b && z(b), h = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, i = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, j = (function (a, b, c) {
                    var d, e;
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (!(a[0] in {
                        T: 1,
                        Q: 1
                    }) && (b.qx = b.qy = null), a[0]) {
                        case "M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case "A":
                            a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
                            break;
                        case "S":
                            "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
                            break;
                        case "T":
                            "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case "Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case "L":
                            a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
                            break;
                        case "H":
                            a = ["C"].concat(A(b.x, b.y, a[1], b.y));
                            break;
                        case "V":
                            a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
                            break;
                        case "Z":
                            a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), k = function (a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var c = a[b]; c.length;) m[b] = "A", g && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
                        a.splice(b, 1), r = Q(e.length, g && g.length || 0)
                    }
                }, l = function (a, b, c, d, f) {
                    a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], r = Q(e.length, g && g.length || 0))
                }, m = [], n = [], o = "", p = "", q = 0, r = Q(e.length, g && g.length || 0); r > q; q++) {
                e[q] && (o = e[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), e[q] = j(e[q], h, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(e, q), g && (g[q] && (o = g[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), g[q] = j(g[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(g, q)), l(e, g, h, i, q), l(g, e, i, h, q);
                var s = e[q],
                    t = g && g[q],
                    u = s.length,
                    v = g && t.length;
                h.x = s[u - 2], h.y = s[u - 1], h.bx = M(s[u - 4]) || h.x, h.by = M(s[u - 3]) || h.y, i.bx = g && (M(t[v - 4]) || i.x), i.by = g && (M(t[v - 3]) || i.y), i.x = g && t[v - 2], i.y = g && t[v - 1]
            }
            return g || (d.curve = f(e)), g ? [e, g] : e
        }

        function F(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = E(a), e = 0, g = a.length; g > e; e++)
                for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        }

        function G(a, b) {
            for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                var f = [{
                    x: +a[d - 2],
                    y: +a[d - 1]
                }, {
                    x: +a[d],
                    y: +a[d + 1]
                }, {
                    x: +a[d + 2],
                    y: +a[d + 3]
                }, {
                    x: +a[d + 4],
                    y: +a[d + 5]
                }];
                b ? d ? e - 4 == d ? f[3] = {
                    x: +a[0],
                    y: +a[1]
                } : e - 2 == d && (f[2] = {
                    x: +a[0],
                    y: +a[1]
                }, f[3] = {
                    x: +a[2],
                    y: +a[3]
                }) : f[0] = {
                    x: +a[e - 2],
                    y: +a[e - 1]
                } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                    x: +a[d],
                    y: +a[d + 1]
                }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
            }
            return c
        }
        var H = b.prototype,
            I = a.is,
            J = a._.clone,
            K = "hasOwnProperty",
            L = /,?([a-z]),?/gi,
            M = parseFloat,
            N = Math,
            O = N.PI,
            P = N.min,
            Q = N.max,
            R = N.pow,
            S = N.abs,
            T = h(1),
            U = h(),
            V = h(0, 1),
            W = a._unit2px,
            X = {
                path: function (a) {
                    return a.attr("path")
                },
                circle: function (a) {
                    var b = W(a);
                    return x(b.cx, b.cy, b.r)
                },
                ellipse: function (a) {
                    var b = W(a);
                    return x(b.cx || 0, b.cy || 0, b.rx, b.ry)
                },
                rect: function (a) {
                    var b = W(a);
                    return w(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
                },
                image: function (a) {
                    var b = W(a);
                    return w(b.x || 0, b.y || 0, b.width, b.height)
                },
                text: function (a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                },
                g: function (a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                },
                symbol: function (a) {
                    var b = a.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                },
                line: function (a) {
                    return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
                },
                polyline: function (a) {
                    return "M" + a.attr("points")
                },
                polygon: function (a) {
                    return "M" + a.attr("points") + "z"
                },
                svg: function (a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                },
                deflt: function (a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                }
            };
        a.path = c, a.path.getTotalLength = T, a.path.getPointAtLength = U, a.path.getSubpath = function (a, b, c) {
            if (this.getTotalLength(a) - c < 1e-6) return V(a, b).end;
            var d = V(a, c, 1);
            return b ? V(d, b).end : d
        }, H.getTotalLength = function () {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, H.getPointAtLength = function (a) {
            return U(this.attr("d"), a)
        }, H.getSubpath = function (b, c) {
            return a.path.getSubpath(this.attr("d"), b, c)
        }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = X, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = E, a.path.map = F, a.path.toString = e, a.path.clone = f
    }), d.plugin(function (a) {
        var b = Math.max,
            c = Math.min,
            d = function (a) {
                if (this.items = [], this.length = 0, this.type = "set", a)
                    for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
            },
            e = d.prototype;
        e.push = function () {
            for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
            return this
        }, e.pop = function () {
            return this.length && delete this[this.length--], this.items.pop()
        }, e.forEach = function (a, b) {
            for (var c = 0, d = this.items.length; d > c; c++)
                if (a.call(b, this.items[c], c) === !1) return this;
            return this
        }, e.remove = function () {
            for (; this.length;) this.pop().remove();
            return this
        }, e.attr = function (a) {
            for (var b = 0, c = this.items.length; c > b; b++) this.items[b].attr(a);
            return this
        }, e.clear = function () {
            for (; this.length;) this.pop()
        }, e.splice = function (a, e) {
            a = 0 > a ? b(this.length + a, 0) : a, e = b(0, c(this.length - a, e));
            var f, g = [],
                h = [],
                i = [];
            for (f = 2; f < arguments.length; f++) i.push(arguments[f]);
            for (f = 0; e > f; f++) h.push(this[a + f]);
            for (; f < this.length - a; f++) g.push(this[a + f]);
            var j = i.length;
            for (f = 0; f < j + g.length; f++) this.items[a + f] = this[a + f] = j > f ? i[f] : g[f - j];
            for (f = this.items.length = this.length -= e - j; this[f];) delete this[f++];
            return new d(h)
        }, e.exclude = function (a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] == a) return this.splice(b, 1), !0;
            return !1
        }, e.insertAfter = function (a) {
            for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
            return this
        }, e.getBBox = function () {
            for (var a = [], d = [], e = [], f = [], g = this.items.length; g--;)
                if (!this.items[g].removed) {
                    var h = this.items[g].getBBox();
                    a.push(h.x), d.push(h.y), e.push(h.x + h.width), f.push(h.y + h.height)
                }
            return a = c.apply(0, a), d = c.apply(0, d), e = b.apply(0, e), f = b.apply(0, f), {
                x: a,
                y: d,
                x2: e,
                y2: f,
                width: e - a,
                height: f - d,
                cx: a + (e - a) / 2,
                cy: d + (f - d) / 2
            }
        }, e.clone = function (a) {
            a = new d;
            for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
            return a
        }, e.toString = function () {
            return "Snap‘s set"
        }, e.type = "set", a.set = function () {
            var a = new d;
            return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
        }
    }), d.plugin(function (a, b) {
        function c(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        }

        function d(b, d, e) {
            d = l(d).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], d = a.parseTransformString(d) || [];
            for (var f, g, j, k, m = Math.max(b.length, d.length), n = [], o = [], p = 0; m > p; p++) {
                if (j = b[p] || c(d[p]), k = d[p] || c(j), j[0] != k[0] || "r" == j[0].toLowerCase() && (j[2] != k[2] || j[3] != k[3]) || "s" == j[0].toLowerCase() && (j[3] != k[3] || j[4] != k[4])) {
                    b = a._.transform2matrix(b, e()), d = a._.transform2matrix(d, e()), n = [
                        ["m", b.a, b.b, b.c, b.d, b.e, b.f]
                    ], o = [
                        ["m", d.a, d.b, d.c, d.d, d.e, d.f]
                    ];
                    break
                }
                for (n[p] = [], o[p] = [], f = 0, g = Math.max(j.length, k.length); g > f; f++) f in j && (n[p][f] = j[f]), f in k && (o[p][f] = k[f])
            }
            return {
                from: i(n),
                to: i(o),
                f: h(n)
            }
        }

        function e(a) {
            return a
        }

        function f(a) {
            return function (b) {
                return +b.toFixed(3) + a
            }
        }

        function g(b) {
            return a.rgb(b[0], b[1], b[2])
        }

        function h(a) {
            var b, c, d, e, f, g, h = 0,
                i = [];
            for (b = 0, c = a.length; c > b; b++) {
                for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
                f += g + "]", i[b] = f
            }
            return Function("val", "return Snap.path.toString.call([" + i + "])")
        }

        function i(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++)
                for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
            return b
        }
        var j = {},
            k = /[a-z]+$/i,
            l = String;
        j.stroke = j.fill = "colour", b.prototype.equal = function (b, c) {
            var m, n, o = l(this.attr(b) || ""),
                p = this;
            if (o == +o && c == +c) return {
                from: +o,
                to: +c,
                f: e
            };
            if ("colour" == j[b]) return m = a.color(o), n = a.color(c), {
                from: [m.r, m.g, m.b, m.opacity],
                to: [n.r, n.g, n.b, n.opacity],
                f: g
            };
            if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), d(o, c, function () {
                return p.getBBox(1)
            });
            if ("d" == b || "path" == b) return m = a.path.toCubic(o, c), {
                from: i(m[0]),
                to: i(m[1]),
                f: h(m[0])
            };
            if ("points" == b) return m = l(o).split(","), n = l(c).split(","), {
                from: m,
                to: n,
                f: function (a) {
                    return a
                }
            };
            var q = o.match(k),
                r = l(c).match(k);
            return q && q == r ? {
                from: parseFloat(o),
                to: parseFloat(c),
                f: f(q)
            } : {
                from: this.asPX(b),
                to: this.asPX(b, c),
                f: e
            }
        }
    }), d.plugin(function (a, c, d, e) {
        for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, k = function (a) {
                var b = "y" == a ? "scrollTop" : "scrollLeft";
                return e.doc.documentElement[b] || e.doc.body[b]
            }, l = function () {
                this.returnValue = !1
            }, m = function () {
                return this.originalEvent.preventDefault()
            }, n = function () {
                this.cancelBubble = !0
            }, o = function () {
                return this.originalEvent.stopPropagation()
            }, p = function () {
                return e.doc.addEventListener ? function (a, b, c, d) {
                    var e = h && j[b] ? j[b] : b,
                        f = function (e) {
                            var f = k("y"),
                                i = k("x");
                            if (h && j[g](b))
                                for (var l = 0, n = e.targetTouches && e.targetTouches.length; n > l; l++)
                                    if (e.targetTouches[l].target == a || a.contains(e.targetTouches[l].target)) {
                                        var p = e;
                                        e = e.targetTouches[l], e.originalEvent = p, e.preventDefault = m, e.stopPropagation = o;
                                        break
                                    }
                            var q = e.clientX + i,
                                r = e.clientY + f;
                            return c.call(d, e, q, r)
                        };
                    return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
                        function () {
                            return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
                        }
                } : e.doc.attachEvent ? function (a, b, c, d) {
                    var f = function (a) {
                        a = a || e.win.event;
                        var b = k("y"),
                            f = k("x"),
                            g = a.clientX + f,
                            h = a.clientY + b;
                        return a.preventDefault = a.preventDefault || l, a.stopPropagation = a.stopPropagation || n, c.call(d, a, g, h)
                    };
                    a.attachEvent("on" + b, f);
                    var g = function () {
                        return a.detachEvent("on" + b, f), !0
                    };
                    return g
                } : void 0
            }(), q = [], r = function (c) {
                for (var d, e = c.clientX, f = c.clientY, g = k("y"), i = k("x"), j = q.length; j--;) {
                    if (d = q[j], h) {
                        for (var l, m = c.touches && c.touches.length; m--;)
                            if (l = c.touches[m], l.identifier == d.el._drag.id || d.el.node.contains(l.target)) {
                                e = l.clientX, f = l.clientY, (c.originalEvent ? c.originalEvent : c).preventDefault();
                                break
                            }
                    } else c.preventDefault();
                    var n = d.el.node;
                    a._.glob, n.nextSibling, n.parentNode, n.style.display, e += i, f += g, b("snap.drag.move." + d.el.id, d.move_scope || d.el, e - d.el._drag.x, f - d.el._drag.y, e, f, c)
                }
            }, s = function (c) {
                a.unmousemove(r).unmouseup(s);
                for (var d, e = q.length; e--;) d = q[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);
                q = []
            }, t = i.length; t--;) ! function (b) {
            a[b] = f[b] = function (c, d) {
                return a.is(c, "function") && (this.events = this.events || [], this.events.push({
                    name: b,
                    f: c,
                    unbind: p(this.shape || this.node || e.doc, b, c, d || this)
                })), this
            }, a["un" + b] = f["un" + b] = function (a) {
                for (var c = this.events || [], d = c.length; d--;)
                    if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
                return this
            }
        }(i[t]);
        f.hover = function (a, b, c, d) {
            return this.mouseover(a, c).mouseout(b, d || c)
        }, f.unhover = function (a, b) {
            return this.unmouseover(a).unmouseout(b)
        };
        var u = [];
        f.drag = function (c, d, e, f, g, h) {
            function i(i, j, k) {
                (i.originalEvent || i).preventDefault(), this._drag.x = j, this._drag.y = k, this._drag.id = i.identifier, !q.length && a.mousemove(r).mouseup(s), q.push({
                    el: this,
                    move_scope: f,
                    start_scope: g,
                    end_scope: h
                }), d && b.on("snap.drag.start." + this.id, d), c && b.on("snap.drag.move." + this.id, c), e && b.on("snap.drag.end." + this.id, e), b("snap.drag.start." + this.id, g || f || this, j, k, i)
            }
            if (!arguments.length) {
                var j;
                return this.drag(function (a, b) {
                    this.attr({
                        transform: j + (j ? "T" : "t") + [a, b]
                    })
                }, function () {
                    j = this.transform().local
                })
            }
            return this._drag = {}, u.push({
                el: this,
                start: i
            }), this.mousedown(i), this
        }, f.undrag = function () {
            for (var c = u.length; c--;) u[c].el == this && (this.unmousedown(u[c].start), u.splice(c, 1), b.unbind("snap.drag.*." + this.id));
            return !u.length && a.unmousemove(r).unmouseup(s), this
        }
    }), d.plugin(function (a, c, d) {
        var e = (c.prototype, d.prototype),
            f = /^\s*url\((.+)\)/,
            g = String,
            h = a._.$;
        a.filter = {}, e.filter = function (b) {
            var d = this;
            "svg" != d.type && (d = d.paper);
            var e = a.parse(g(b)),
                f = a._.id(),
                i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
            return h(i, {
                id: f,
                filterUnits: "userSpaceOnUse"
            }), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
        }, b.on("snap.util.getattr.filter", function () {
            b.stop();
            var c = h(this.node, "filter");
            if (c) {
                var d = g(c).match(f);
                return d && a.select(d[1])
            }
        }), b.on("snap.util.attr.filter", function (d) {
            if (d instanceof c && "filter" == d.type) {
                b.stop();
                var e = d.node.id;
                e || (h(d.node, {
                    id: d.id
                }), e = d.id), h(this.node, {
                    filter: a.url(e)
                })
            }
            d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
        }), a.filter.blur = function (b, c) {
            null == b && (b = 2);
            var d = null == c ? b : [b, c];
            return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: d
            })
        }, a.filter.blur.toString = function () {
            return this()
        }, a.filter.shadow = function (b, c, d, e, f) {
            return "string" == typeof d && (e = d, f = e, d = 4), "string" != typeof e && (f = e, e = "#000"), e = e || "#000", null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: e,
                dx: b,
                dy: c,
                blur: d,
                opacity: f
            })
        }, a.filter.shadow.toString = function () {
            return this()
        }, a.filter.grayscale = function (b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - b),
                b: .7152 - .7152 * (1 - b),
                c: .0722 - .0722 * (1 - b),
                d: .2126 - .2126 * (1 - b),
                e: .7152 + .2848 * (1 - b),
                f: .0722 - .0722 * (1 - b),
                g: .2126 - .2126 * (1 - b),
                h: .0722 + .9278 * (1 - b)
            })
        }, a.filter.grayscale.toString = function () {
            return this()
        }, a.filter.sepia = function (b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - b),
                b: .769 - .769 * (1 - b),
                c: .189 - .189 * (1 - b),
                d: .349 - .349 * (1 - b),
                e: .686 + .314 * (1 - b),
                f: .168 - .168 * (1 - b),
                g: .272 - .272 * (1 - b),
                h: .534 - .534 * (1 - b),
                i: .131 + .869 * (1 - b)
            })
        }, a.filter.sepia.toString = function () {
            return this()
        }, a.filter.saturate = function (b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - b
            })
        }, a.filter.saturate.toString = function () {
            return this()
        }, a.filter.hueRotate = function (b) {
            return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: b
            })
        }, a.filter.hueRotate.toString = function () {
            return this()
        }, a.filter.invert = function (b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: 1 - b
            })
        }, a.filter.invert.toString = function () {
            return this()
        }, a.filter.brightness = function (b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: b
            })
        }, a.filter.brightness.toString = function () {
            return this()
        }, a.filter.contrast = function (b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: .5 - b / 2
            })
        }, a.filter.contrast.toString = function () {
            return this()
        }
    }), d
});


//logo.min.js
//Interactive Humaan Logo
function Logo(e, t, n) {
    var r = this;
    r.supports_svg = r.browserSupport();
    if (typeof n == "undefined") {
        n = false
    }
    r.static_logo = n;
    r.mobile_browser = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    if (!r.supports_svg) {
        return
    }
    r.wrapper = null;
    r.paper = null;
    r.fgcolor = "#3a4046";
    r.bgcolor = "#ffffff";
    r.parts = {
        head: null,
        ring: null,
        cover: null,
        tent: null,
        circle_mask: null,
        logo_group: null
    };
    r.letters = {
        lh: null,
        lu: null,
        lm: null,
        la1: null,
        la2: null,
        ln: null,
        lo: null,
        le: null,
        lal: null,
        lar: null,
        les: null,
        let: null,
        lem: null,
        leb: null,
        group: null
    };
    r.letters_animation_duration = 200;
    r.paths = {
        head: "M10.204,17.703c0,3.872,3.093,4.925,3.093,8.899c0,2.227-0.546,3.488-0.546,3.488s0.465,1.414,3.028,2.569c2.634,1.187,4.247,0.931,4.247,0.931c0.745-1.504,1.33-4.265,3.58-4.896c2.25-0.631,2.646-0.465,4.405-0.541c0.803-0.034,0.916-0.459,0.992-0.833c0.076-0.373,0.862-4.221,0.862-4.221s1.044-0.291,1.295-0.368c0.251-0.077,0.333-0.273,0.334-0.525c0.001-0.252-0.063-0.454-0.472-0.772c-1.092-0.849-1.711-2.328-1.711-3.735c0-1.032,0.553-2.282-0.473-4.376c-1.589-3.242-5.006-5.452-8.804-5.452C14.582,7.872,10.204,12.303,10.204,17.703z",
        ring: "M20.5,3.254c9.51,0,17.246,7.737,17.246,17.246S30.01,37.746,20.5,37.746c-9.509,0-17.246-7.737-17.246-17.246 S10.991,3.254,20.5,3.254 M20.5,0C9.178,0,0,9.178,0,20.5C0,31.822,9.178,41,20.5,41S41,31.822,41,20.5C41,9.178,31.822,0,20.5,0 L20.5,0z",
        blob: "M3.063,14.305C1.375,19.25,1.439,23.866,2.5,26.375s4,5.75,4,5.75s3.125,4,5.625,5.5s7,2,7,2l4.75-0.75l2.375-0.5l3.75-1.25 l2.375-1.625l2.875-3.625l2.837-4.949c0,0,1.163-2.242,1.788-4.492s0.421-3.527-0.323-6.434s-2.666-5.851-4.802-8.125 S24.298,1,20.5,1C15.047,1,4.75,9.36,3.063,14.305z",
        tent: "M 17.3,26.7 23.7,26.7 20.5,21.2 z" + "M0,0v41h41V0H0z M29.5,28.2h-18v-1.5h1.2l7.2-12.5l-1.5-2.6l0.9-0.5l1.2,2.1l1.2-2.1l0.9,0.5l-1.5,2.6 l7.2,12.5h1.2L29.5,28.2L29.5,28.2z",
        small_tent: "M 20.1,21.3 20.9,21.3 20.5,20.7 z" + "M0,0v41h41V0H0z M21.5,21.4h-2v-0.2h0.1l0.8-1.4l-0.2-0.3l0.1-0.1l0.1,0.2l0.1-0.2l0.1,0.1l-0.2,0.3l0.8,1.4h0.1V21.4z",
        letter_h: "M55.6,13.8c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9v6.1h8.9v-6.1c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9v13.9c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9v-6.2h-8.9v6.2c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9V13.8z",
        letter_u: "M76.5,22v-8.2c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9v8.1c0,3.3,1.8,5.2,4.7,5.2c2.8,0,4.7-1.7,4.7-5.1v-8.2c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9v8.1c0,4.5-2.6,6.8-6.4,6.8C79.1,28.7,76.5,26.3,76.5,22z",
        letter_lowu: "M76.5,22v-1.2c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9v1.1c0,3.3,1.8,5.2,4.7,5.2c2.8,0,4.7-1.7,4.7-5.1v-1.2c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9v1.1c0,4.5-2.6,6.8-6.4,6.8C79.1,28.7,76.5,26.3,76.5,22z",
        letter_m: "M98,13.8c0-0.5,0.4-0.9,0.9-0.9H99c0.4,0,0.6,0.2,0.8,0.5l5.5,8.3l5.5-8.3c0.2-0.3,0.5-0.5,0.8-0.5h0.2c0.5,0,0.9,0.4,0.9,0.9v13.9c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9V16.1l-4.9,7.3c-0.2,0.3-0.4,0.4-0.7,0.4s-0.6-0.2-0.8-0.4l-4.9-7.2v11.5c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.8-0.4-0.8-0.9V13.8z",
        letter_a1: "M127.9,14.9l-5.8,13.1c-0.2,0.4-0.4,0.6-0.8,0.6c-0.4,0-0.8-0.4-0.8-0.8c0-0.1,0-0.3,0.1-0.5l6.3-13.7c0.2-0.5,0.6-0.8,1.1-0.8h0.1c0.5,0,0.9,0.3,1.1,0.8l6.3,13.7c0.1,0.2,0.1,0.3,0.1,0.4c0,0.5-0.4,0.8-0.8,0.8c-0.4,0-0.7-0.3-0.9-0.6L127.9,14.9z",
        letter_a2: "M149.6,14.9l-5.8,13.1c-0.2,0.4-0.4,0.6-0.8,0.6c-0.4,0-0.8-0.4-0.8-0.8c0-0.1,0-0.3,0.1-0.5l6.3-13.7c0.2-0.5,0.6-0.8,1.1-0.8h0.1c0.5,0,0.9,0.3,1.1,0.8l6.3,13.7c0.1,0.2,0.1,0.3,0.1,0.4c0,0.5-0.4,0.8-0.8,0.8c-0.4,0-0.7-0.3-0.9-0.6L149.6,14.9z",
        letter_n: "M164.9,13.8c0-0.5,0.4-0.9,0.9-0.9h0.2c0.4,0,0.6,0.2,0.9,0.5l9.4,12V13.7c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.8,0.4,0.8,0.9v13.9c0,0.5-0.3,0.8-0.8,0.8h-0.1c-0.4,0-0.6-0.2-0.9-0.5l-9.6-12.2v12c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.8-0.4-0.8-0.9V13.8z",
        letter_o: "M83.4,13.5c0,0.5-0.3,0.8-0.3,0.8c-3.6,0-6.1,2.9-6.1,6.4l0,0c0,3.5,2.5,6.3,6,6.3s6.1-2.9,6.1-6.4l0,0c0-3.5-2.6-6.3-6-6.3c0,0-0.5-0.2-0.5-0.8s0.4-0.8,0.4-0.8c4.7,0,7.9,3.8,7.9,8l0,0c0,4.2-3.2,7.9-7.9,7.9c-4.7,0-7.9-3.7-7.9-8l0,0c0-4.2,3.2-7.9,7.9-7.9C83,12.7,83.4,12.9,83.4,13.5z",
        letter_e: "M121.3,27.6V13.9c0-0.5,0.4-0.9,0.9-0.9h9.6c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8H123v5.3h7.7c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8H123v5.4h8.8c0.4,0,0.8,0.4,0.8,0.8s-0.4,0.8-0.8,0.8h-9.7C121.7,28.4,121.3,28,121.3,27.6z",
        letter_a_left: "M127.9,14.9l-5.8,13.1c-0.2,0.4-0.4,0.6-0.8,0.6c-0.4,0-0.8-0.4-0.8-0.8c0-0.1,0-0.3,0.1-0.5l6.3-13.7c0.2-0.5,0.6-0.8,1.1-0.8h0.1c0.5,0,0.9,0.3,1.1,0.8L127.9,14.9z",
        letter_a_right: "M129.1,13.6l6.3,13.7c0.1,0.2,0.1,0.3,0.1,0.4c0,0.5-0.4,0.8-0.8,0.8c-0.4,0-0.7-0.3-0.9-0.6l-5.8-13L129.1,13.6z",
        letter_e_spine: "M122.2,13v15.5h-0.9c-0.5,0-0.9-0.4-0.9-0.9V13.9c0-0.5,0.4-0.9,0.9-0.9H122.2z",
        letter_e_top: "M122.2,13h8.7c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8h-8.7V13z",
        letter_e_mid: "M122.2,19.9h7.7c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8h-7.7V19.9z",
        letter_e_bottom: "M122.2,26.9h8.8c0.4,0,0.8,0.4,0.8,0.8s-0.4,0.8-0.8,0.8h-8.8V26.9z"
    };
    if (typeof t != "undefined") {
        r.fgcolor = t
    }
    if (typeof bgcolor != "undefined") {
        r.bgcolor = bgcolor
    }
    r.wrapper = e;
    r.wrapper.addClass("svg");
    var i = $('<svg xmlns="http://www.w3.org/2000/svg" >').css({
        width: "178px",
        height: "41px"
    });
    r.wrapper.html("");
    i.appendTo(r.wrapper);
    r.paper = Snap(i.get(0));
    r.assemble();
    if (!(r.mobile_browser || r.static_logo)) {
        r.wrapper.unbind("mouseenter mouseleave").hover(function () {
            r.parts.cover.animate({
                opacity: 0
            }, 100);
            r.parts.tent.animate({
                path: r.paths.tent
            }, 800, mina.elastic);
            r.parts.head.animate({
                path: r.paths.blob
            }, 800, mina.elastic);
            r.letters.lu.animate({
                path: r.paths.letter_lowu,
                opacity: 0,
                transform: "r270 83 21"
            }, r.letters_animation_duration);
            r.letters.lo.animate({
                opacity: 1
            }, r.letters_animation_duration, mina.easein);
            r.letters.lal.animate({
                opacity: 0,
                transform: "s1 0.8 121 27 r-25 121 27"
            }, r.letters_animation_duration);
            r.letters.lar.animate({
                opacity: 0,
                transform: "s0.7 1 t-10.5 0 r-65 127 16"
            }, r.letters_animation_duration);
            r.letters.les.animate({
                opacity: 1,
                transform: "r0 121 27"
            }, r.letters_animation_duration);
            r.letters.let.animate({
                opacity: 1,
                transform: "t0 0 r0 123 14"
            }, r.letters_animation_duration);
            r.letters.lem.animate({
                opacity: 1,
                transform: "t0 0 s1 1 120 20"
            }, r.letters_animation_duration);
            r.letters.leb.animate({
                opacity: 1,
                transform: "t0 0 s1 1 120 20"
            }, r.letters_animation_duration);
            r.letters.la2.animate({
                opacity: 0
            }, r.letters_animation_duration);
            r.letters.ln.animate({
                opacity: 0
            }, r.letters_animation_duration)
        }, function () {
            r.parts.cover.animate({
                opacity: 1
            }, 100);
            r.parts.tent.animate({
                path: r.paths.small_tent
            }, 800, mina.elastic);
            r.parts.head.animate({
                path: r.paths.head
            }, 800, mina.elastic);
            r.letters.lu.animate({
                path: r.paths.letter_u,
                opacity: 1,
                transform: "r0 83 21"
            }, r.letters_animation_duration);
            r.letters.lo.animate({
                opacity: 0
            }, r.letters_animation_duration, mina.easeout);
            r.letters.lal.animate({
                opacity: 1,
                transform: "s1 1 121 27 r0 121 27"
            }, r.letters_animation_duration);
            r.letters.lar.animate({
                opacity: 1,
                transform: "s1 1 t0 0 r0 128 14"
            }, r.letters_animation_duration);
            r.letters.lem.animate({
                opacity: 0,
                transform: "t3 0 s0.2 1 120 20"
            }, r.letters_animation_duration);
            r.letters.les.animate({
                opacity: 0,
                transform: "r26 121 27"
            }, r.letters_animation_duration);
            r.letters.let.animate({
                opacity: 0,
                transform: "t5 0 r65 123 14"
            }, r.letters_animation_duration);
            r.letters.leb.animate({
                opacity: 0,
                transform: "t1 0 s0.2 1 120 20"
            }, r.letters_animation_duration);
            r.letters.la2.animate({
                opacity: 1
            }, r.letters_animation_duration);
            r.letters.ln.animate({
                opacity: 1
            }, r.letters_animation_duration)
        })
    }
}
Logo.prototype.assemble = function () {
    var e = this;
    if (!e.supports_svg) {
        return
    }
    e.parts.head = e.paper.path(e.paths.head).attr({
        "class": "head"
    });
    e.parts.ring = e.paper.path(e.paths.ring).attr({
        "class": "ring"
    });
    e.parts.logo_group = e.paper.group(e.parts.head, e.parts.ring).attr({
        fill: e.fgcolor
    });
    if (!(e.mobile_browser || e.static_logo)) {
        e.parts.tent = e.paper.path(e.paths.small_tent).attr({
            fill: "#fff",
            "class": "tent-mask"
        });
        e.parts.circle_mask = e.paper.circle(20.5, 20.5, 20.5).attr({
            fill: "#fff",
            "class": "circle-mask"
        });
        e.parts.head.attr({
            mask: e.parts.circle_mask
        });
        e.parts.logo_group.attr({
            mask: e.parts.tent
        });
        e.parts.cover = e.paper.circle(20.5, 20.5, 3).attr({
            fill: e.fgcolor,
            opacity: 1
        })
    }
    e.assembleLetters()
};
Logo.prototype.browserSupport = function () {
    return !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
};
Logo.prototype.assembleLetters = function () {
    var e = this;
    if (!e.supports_svg) {
        return
    }
    e.letters.lh = e.paper.path(e.paths.letter_h);
    e.letters.lu = e.paper.path(e.paths.letter_u);
    e.letters.lm = e.paper.path(e.paths.letter_m);
    e.letters.lal = e.paper.path(e.paths.letter_a_left).attr({
        opacity: 1
    });
    e.letters.lar = e.paper.path(e.paths.letter_a_right).attr({
        opacity: 1
    });
    e.letters.les = e.paper.path(e.paths.letter_e_spine).attr({
        opacity: 0,
        transform: "r26 121 27"
    });
    e.letters.let = e.paper.path(e.paths.letter_e_top).attr({
        opacity: 0,
        transform: "t5 0 r65 123 14"
    });
    e.letters.lem = e.paper.path(e.paths.letter_e_mid).attr({
        opacity: 0,
        transform: "t3 0 s0.2 1 120 20"
    });
    e.letters.leb = e.paper.path(e.paths.letter_e_bottom).attr({
        opacity: 0,
        transform: "t1 0 s0.2 1 120 20"
    });
    e.letters.la2 = e.paper.path(e.paths.letter_a2);
    e.letters.ln = e.paper.path(e.paths.letter_n);
    e.letters.lo = e.paper.path(e.paths.letter_o).attr({
        opacity: 0
    });
    e.letters.group = e.paper.group(e.letters.lh, e.letters.lu, e.letters.lo, e.letters.lm, e.letters.lal, e.letters.lar, e.letters.les, e.letters.let, e.letters.lem, e.letters.leb, e.letters.la2, e.letters.ln).attr({
        fill: e.fgcolor
    })
};
Logo.prototype.animateColor = function (e) {
    var t = this;
    if (!t.supports_svg) {
        return
    }
    if (e == t.fgcolor) {
        return
    }
    t.fgcolor = e;
    t.parts.logo_group.animate({
        fill: e
    }, 500);
    t.letters.group.animate({
        fill: e
    }, 500);
    t.parts.cover.animate({
        fill: e
    }, 500)
};
var header_logo;
var secondary_logo;
$(function () {
    if ($("body").attr("id") == "blog") {
        header_logo = new Logo($(".header-logo"), "#fff");
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                header_logo.animateColor("#3a3f46")
            } else {
                header_logo.animateColor("#ffffff")
            }
        })
    } else {
        header_logo = new Logo($(".header-logo"))
    }
})



//Preloader.min.js
function Preloader(e) {
    var t = {
        assets: [],
        cb: function () {}
    };
    _opts = $.extend({}, t, e);
    this.assets = _opts.assets;
    this.cb = _opts.cb;
    this.pending_assets = [];
    this.running = false;
    this.completed = false
}
Preloader.prototype.isRetina = function () {
    if (window.matchMedia) {
        var e = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.9), only screen and (-o-min-device-pixel-ratio: 3.8/2), only screen and (-webkit-min-device-pixel-ratio: 1.9), only screen  and (min-device-pixel-ratio: 1.9), only screen and (min-resolution: 1.9dppx)");
        if (e && e.matches || window.devicePixelRatio > 1) {
            return true
        } else {
            return false
        }
    }
};
Preloader.prototype.preload = function () {
    var e = this;
    var t = e.isRetina();
    e.pending_assets = [];
    for (var n = 0; n < e.assets.length; n++) {
        var r = e.assets[n];
        var i = {
            asset: null,
            loaded: false
        };
        if (t) {
            i.asset = r.x2 != null ? r.x2 : r.x1
        } else {
            i.asset = r.x1
        }
        e.pending_assets.push(i)
    }
    if (e.pending_assets.length > 0) {
        e.running = true;
        for (var n = 0; n < e.pending_assets.length; n++) {
            e.loadOne(e.pending_assets[n])
        }
    } else {
        e.completed()
    }
};
Preloader.prototype.loadOne = function (e) {
    var t = this;
    if (e.loaded == false) {
        var n = e.asset;
        var r = $("<img />");
        r.bind("load", function () {
            e.loaded = true;
            t.done()
        });
        r.attr("src", n)
    }
};
Preloader.prototype.done = function () {
    var e = this;
    var t = true;
    if (e.completed) {
        return
    }
    for (var n = 0; n < e.pending_assets.length; n++) {
        var r = e.pending_assets[n];
        if (r.loaded == false) {
            t = false;
            break
        }
    }
    if (t) {
        e.running = false;
        e.completed = true;
        e.cb()
    }
}