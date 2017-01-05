/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function() {
	function e() {
		if (!J && document.getElementsByTagName("body")[0]) {
			try {
				var e, t = m("span");
				t.style.display = "none", e = P.getElementsByTagName("body")[0].appendChild(t), e.parentNode.removeChild(e), e = null, t = null
			} catch (n) {
				return
			}
			J = !0;
			for (var i = D.length, a = 0; i > a; a++) D[a]()
		}
	}
	function t(e) {
		J ? e() : D[D.length] = e
	}
	function n(e) {
		if (typeof U.addEventListener !== L) U.addEventListener("load", e, !1);
		else if (typeof P.addEventListener !== L) P.addEventListener("load", e, !1);
		else if (typeof U.attachEvent !== L) w(U, "onload", e);
		else if ("function" == typeof U.onload) {
			var t = U.onload;
			U.onload = function() {
				t(), e()
			}
		} else U.onload = e
	}
	function i() {
		var e = P.getElementsByTagName("body")[0],
			t = m(O);
		t.setAttribute("style", "visibility: hidden;"), t.setAttribute("type", F);
		var n = e.appendChild(t);
		if (n) {
			var i = 0;
			!
				function r() {
					if (typeof n.GetVariable !== L) try {
						var o = n.GetVariable("$version");
						o && (o = o.split(" ")[1].split(","), Q.pv = [g(o[0]), g(o[1]), g(o[2])])
					} catch (s) {
						Q.pv = [8, 0, 0]
					} else if (10 > i) return i++, void setTimeout(r, 10);
					e.removeChild(t), n = null, a()
				}()
		} else a()
	}
	function a() {
		var e = H.length;
		if (e > 0) for (var t = 0; e > t; t++) {
			var n = H[t].id,
				i = H[t].callbackFn,
				a = {
					success: !1,
					id: n
				};
			if (Q.pv[0] > 0) {
				var d = h(n);
				if (d) if (!b(H[t].swfVersion) || Q.wk && Q.wk < 312) if (H[t].expressInstall && o()) {
					var f = {};
					f.data = H[t].expressInstall, f.width = d.getAttribute("width") || "0", f.height = d.getAttribute("height") || "0", d.getAttribute("class") && (f.styleclass = d.getAttribute("class")), d.getAttribute("align") && (f.align = d.getAttribute("align"));
					for (var c = {}, u = d.getElementsByTagName("param"), p = u.length, v = 0; p > v; v++)"movie" !== u[v].getAttribute("name").toLowerCase() && (c[u[v].getAttribute("name")] = u[v].getAttribute("value"));
					s(f, c, n, i)
				} else l(d), i && i(a);
				else C(n, !0), i && (a.success = !0, a.ref = r(n), a.id = n, i(a))
			} else if (C(n, !0), i) {
				var y = r(n);
				y && typeof y.SetVariable !== L && (a.success = !0, a.ref = y, a.id = y.id), i(a)
			}
		}
	}
	function r(e) {
		var t = null,
			n = h(e);
		return n && "OBJECT" === n.nodeName.toUpperCase() && (t = typeof n.SetVariable !== L ? n : n.getElementsByTagName(O)[0] || n), t
	}
	function o() {
		return !X && b("6.0.65") && (Q.win || Q.mac) && !(Q.wk && Q.wk < 312)
	}
	function s(e, t, n, i) {
		var a = h(n);
		if (n = y(n), X = !0, N = i || null, k = {
				success: !1,
				id: n
			}, a) {
			"OBJECT" === a.nodeName.toUpperCase() ? (S = d(a), T = null) : (S = a, T = n), e.id = $, (typeof e.width === L || !/%$/.test(e.width) && g(e.width) < 310) && (e.width = "310"), (typeof e.height === L || !/%$/.test(e.height) && g(e.height) < 137) && (e.height = "137");
			var r = Q.ie ? "ActiveX" : "PlugIn",
				o = "MMredirectURL=" + encodeURIComponent(U.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + r + "&MMdoctitle=" + encodeURIComponent(P.title.slice(0, 47) + " - Flash Player Installation");
			if (typeof t.flashvars !== L ? t.flashvars += "&" + o : t.flashvars = o, Q.ie && 4 != a.readyState) {
				var s = m("div");
				n += "SWFObjectNew", s.setAttribute("id", n), a.parentNode.insertBefore(s, a), a.style.display = "none", p(a)
			}
			c(e, t, n)
		}
	}
	function l(e) {
		if (Q.ie && 4 != e.readyState) {
			e.style.display = "none";
			var t = m("div");
			e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(d(e), t), p(e)
		} else e.parentNode.replaceChild(d(e), e)
	}
	function d(e) {
		var t = m("div");
		if (Q.win && Q.ie) t.innerHTML = e.innerHTML;
		else {
			var n = e.getElementsByTagName(O)[0];
			if (n) {
				var i = n.childNodes;
				if (i) for (var a = i.length, r = 0; a > r; r++) 1 == i[r].nodeType && "PARAM" === i[r].nodeName || 8 == i[r].nodeType || t.appendChild(i[r].cloneNode(!0))
			}
		}
		return t
	}
	function f(e, t) {
		var n = m("div");
		return n.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + e + "'>" + t + "</object>", n.firstChild
	}
	function c(e, t, n) {
		var i, a = h(n);
		if (n = y(n), Q.wk && Q.wk < 312) return i;
		if (a) {
			var r, o, s, l = m(Q.ie ? "div" : O);
			typeof e.id === L && (e.id = n);
			for (s in t) t.hasOwnProperty(s) && "movie" !== s.toLowerCase() && u(l, s, t[s]);
			Q.ie && (l = f(e.data, l.innerHTML));
			for (r in e) e.hasOwnProperty(r) && (o = r.toLowerCase(), "styleclass" === o ? l.setAttribute("class", e[r]) : "classid" !== o && "data" !== o && l.setAttribute(r, e[r]));
			Q.ie ? W[W.length] = e.id : (l.setAttribute("type", F), l.setAttribute("data", e.data)), a.parentNode.replaceChild(l, a), i = l
		}
		return i
	}
	function u(e, t, n) {
		var i = m("param");
		i.setAttribute("name", t), i.setAttribute("value", n), e.appendChild(i)
	}
	function p(e) {
		var t = h(e);
		t && "OBJECT" === t.nodeName.toUpperCase() && (Q.ie ? (t.style.display = "none", function n() {
			if (4 == t.readyState) {
				for (var e in t)"function" == typeof t[e] && (t[e] = null);
				t.parentNode.removeChild(t)
			} else setTimeout(n, 10)
		}()) : t.parentNode.removeChild(t))
	}
	function v(e) {
		return e && e.nodeType && 1 === e.nodeType
	}
	function y(e) {
		return v(e) ? e.id : e
	}
	function h(e) {
		if (v(e)) return e;
		var t = null;
		try {
			t = P.getElementById(e)
		} catch (n) {}
		return t
	}
	function m(e) {
		return P.createElement(e)
	}
	function g(e) {
		return parseInt(e, 10)
	}
	function w(e, t, n) {
		e.attachEvent(t, n), G[G.length] = [e, t, n]
	}
	function b(e) {
		e += "";
		var t = Q.pv,
			n = e.split(".");
		return n[0] = g(n[0]), n[1] = g(n[1]) || 0, n[2] = g(n[2]) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
	}
	function E(e, t, n, i) {
		var a = P.getElementsByTagName("head")[0];
		if (a) {
			var r = "string" == typeof n ? n : "screen";
			if (i && (B = null, I = null), !B || I != r) {
				var o = m("style");
				o.setAttribute("type", "text/css"), o.setAttribute("media", r), B = a.appendChild(o), Q.ie && typeof P.styleSheets !== L && P.styleSheets.length > 0 && (B = P.styleSheets[P.styleSheets.length - 1]), I = r
			}
			B && (typeof B.addRule !== L ? B.addRule(e, t) : typeof P.createTextNode !== L && B.appendChild(P.createTextNode(e + " {" + t + "}")))
		}
	}
	function C(e, t) {
		if (z) {
			var n = t ? "visible" : "hidden",
				i = h(e);
			J && i ? i.style.visibility = n : "string" == typeof e && E("#" + e, "visibility:" + n)
		}
	}
	function A(e) {
		var t = /[\\\"<>\.;]/,
			n = null !== t.exec(e);
		return n && typeof encodeURIComponent !== L ? encodeURIComponent(e) : e
	} {
		var S, T, N, k, B, I, L = "undefined",
			O = "object",
			j = "Shockwave Flash",
			x = "ShockwaveFlash.ShockwaveFlash",
			F = "application/x-shockwave-flash",
			$ = "SWFObjectExprInst",
			M = "onreadystatechange",
			U = window,
			P = document,
			R = navigator,
			V = !1,
			D = [],
			H = [],
			W = [],
			G = [],
			J = !1,
			X = !1,
			z = !0,
			Z = !1,
			Q = function() {
				var e = typeof P.getElementById !== L && typeof P.getElementsByTagName !== L && typeof P.createElement !== L,
					t = R.userAgent.toLowerCase(),
					n = R.platform.toLowerCase(),
					i = /win/.test(n ? n : t),
					a = /mac/.test(n ? n : t),
					r = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
					o = "Microsoft Internet Explorer" === R.appName,
					s = [0, 0, 0],
					l = null;
				if (typeof R.plugins !== L && typeof R.plugins[j] === O) l = R.plugins[j].description, l && typeof R.mimeTypes !== L && R.mimeTypes[F] && R.mimeTypes[F].enabledPlugin && (V = !0, o = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), s[0] = g(l.replace(/^(.*)\..*$/, "$1")), s[1] = g(l.replace(/^.*\.(.*)\s.*$/, "$1")), s[2] = /[a-zA-Z]/.test(l) ? g(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0);
				else if (typeof U.ActiveXObject !== L) try {
					var d = new ActiveXObject(x);
					d && (l = d.GetVariable("$version"), l && (o = !0, l = l.split(" ")[1].split(","), s = [g(l[0]), g(l[1]), g(l[2])]))
				} catch (f) {}
				return {
					w3: e,
					pv: s,
					wk: r,
					ie: o,
					win: i,
					mac: a
				}
			}();
		!
			function() {
				Q.w3 && ((typeof P.readyState !== L && ("complete" === P.readyState || "interactive" === P.readyState) || typeof P.readyState === L && (P.getElementsByTagName("body")[0] || P.body)) && e(), J || (typeof P.addEventListener !== L && P.addEventListener("DOMContentLoaded", e, !1), Q.ie && (P.attachEvent(M, function t() {
					"complete" === P.readyState && (P.detachEvent(M, t), e())
				}), U == top && !
					function n() {
						if (!J) {
							try {
								P.documentElement.doScroll("left")
							} catch (t) {
								return void setTimeout(n, 0)
							}
							e()
						}
					}()), Q.wk && !
					function i() {
						return J ? void 0 : /loaded|complete/.test(P.readyState) ? void e() : void setTimeout(i, 0)
					}()))
			}()
	}
	D[0] = function() {
		V ? i() : a()
	};
	!
		function() {
			Q.ie && window.attachEvent("onunload", function() {
				for (var e = G.length, t = 0; e > t; t++) G[t][0].detachEvent(G[t][1], G[t][2]);
				for (var n = W.length, i = 0; n > i; i++) p(W[i]);
				for (var a in Q) Q[a] = null;
				Q = null;
				for (var r in swfobject) swfobject[r] = null;
				swfobject = null
			})
		}();
	return {
		registerObject: function(e, t, n, i) {
			if (Q.w3 && e && t) {
				var a = {};
				a.id = e, a.swfVersion = t, a.expressInstall = n, a.callbackFn = i, H[H.length] = a, C(e, !1)
			} else i && i({
				success: !1,
				id: e
			})
		},
		getObjectById: function(e) {
			return Q.w3 ? r(e) : void 0
		},
		embedSWF: function(e, n, i, a, r, l, d, f, u, p) {
			var v = y(n),
				h = {
					success: !1,
					id: v
				};
			Q.w3 && !(Q.wk && Q.wk < 312) && e && n && i && a && r ? (C(v, !1), t(function() {
				i += "", a += "";
				var t = {};
				if (u && typeof u === O) for (var y in u) t[y] = u[y];
				t.data = e, t.width = i, t.height = a;
				var m = {};
				if (f && typeof f === O) for (var g in f) m[g] = f[g];
				if (d && typeof d === O) for (var w in d) if (d.hasOwnProperty(w)) {
					var E = Z ? encodeURIComponent(w) : w,
						A = Z ? encodeURIComponent(d[w]) : d[w];
					typeof m.flashvars !== L ? m.flashvars += "&" + E + "=" + A : m.flashvars = E + "=" + A
				}
				if (b(r)) {
					var S = c(t, m, n);
					t.id == v && C(v, !0), h.success = !0, h.ref = S, h.id = S.id
				} else {
					if (l && o()) return t.data = l, void s(t, m, n, p);
					C(v, !0)
				}
				p && p(h)
			})) : p && p(h)
		},
		switchOffAutoHideShow: function() {
			z = !1
		},
		enableUriEncoding: function(e) {
			Z = typeof e === L ? !0 : e
		},
		ua: Q,
		getFlashPlayerVersion: function() {
			return {
				major: Q.pv[0],
				minor: Q.pv[1],
				release: Q.pv[2]
			}
		},
		hasFlashPlayerVersion: b,
		createSWF: function(e, t, n) {
			return Q.w3 ? c(e, t, n) : void 0
		},
		showExpressInstall: function(e, t, n, i) {
			Q.w3 && o() && s(e, t, n, i)
		},
		removeSWF: function(e) {
			Q.w3 && p(e)
		},
		createCSS: function(e, t, n, i) {
			Q.w3 && E(e, t, n, i)
		},
		addDomLoadEvent: t,
		addLoadEvent: n,
		getQueryParamValue: function(e) {
			var t = P.location.search || P.location.hash;
			if (t) {
				if (/\?/.test(t) && (t = t.split("?")[1]), !e) return A(t);
				for (var n = t.split("&"), i = 0; i < n.length; i++) if (n[i].substring(0, n[i].indexOf("=")) == e) return A(n[i].substring(n[i].indexOf("=") + 1))
			}
			return ""
		},
		expressInstallCallback: function() {
			if (X) {
				var e = h($);
				e && S && (e.parentNode.replaceChild(S, e), T && (C(T, !0), Q.ie && (S.style.display = "block")), N && N(k)), X = !1
			}
		},
		version: "2.3"
	}
}()