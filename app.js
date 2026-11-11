//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), l = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var S = x.prototype = new b();
	S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
	var C = Array.isArray;
	function w() {}
	var T = {
		H: null,
		A: null,
		T: null,
		S: null
	}, ee = Object.prototype.hasOwnProperty;
	function E(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function te(e, t) {
		return E(e.type, t, e.props);
	}
	function ne(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function re(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var D = /\/+/g;
	function O(e, t) {
		return typeof e == "object" && e && e.key != null ? re("" + e.key) : t.toString(36);
	}
	function k(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function ie(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, ie(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + O(e, 0) : a, C(o) ? (i = "", c != null && (i = c.replace(D, "$&/") + "/"), ie(o, r, i, "", function(e) {
			return e;
		})) : o != null && (ne(o) && (o = te(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(D, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (C(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + O(a, u), c += ie(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + O(a, u++), c += ie(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return ie(k(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function A(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return ie(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function j(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var ae = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	};
	function oe(e) {
		var t = T.T, n = {};
		n.types = t === null ? null : t.types, T.T = n;
		try {
			var r = e(), i = T.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(w, ae);
		} catch (e) {
			ae(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}
	function se(e) {
		var t = T.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else oe(se.bind(null, e));
	}
	var ce = {
		map: A,
		forEach: function(e, t, n) {
			A(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return A(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return A(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!ne(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = ce, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.addTransitionType = se, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = _({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !ee.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return E(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) ee.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return E(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = ne, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: j
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = oe, e.unstable_useCacheRefresh = function() {
		return T.H.useCacheRefresh();
	}, e.use = function(e) {
		return T.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return T.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return T.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return T.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return T.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return T.H.useEffectEvent(e);
	}, e.useId = function() {
		return T.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return T.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.H.useRef(e);
	}, e.useState = function(e) {
		return T.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.H.useTransition();
	}, e.version = "19.3.0";
})), u = /* @__PURE__ */ o(((e, t) => {
	t.exports = l();
})), d = /* @__PURE__ */ o(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, S || (S = !0, te());
			else {
				var t = n(l);
				t !== null && D(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function ee() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function E() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ee());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && D(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? te() : S = !1;
			}
		}
	}
	var te;
	if (typeof y == "function") te = function() {
		y(E);
	};
	else if (typeof MessageChannel < "u") {
		var ne = new MessageChannel(), re = ne.port2;
		ne.port1.onmessage = E, te = function() {
			re.postMessage(null);
		};
	} else te = function() {
		_(E, 0);
	};
	function D(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, D(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, te()))), r;
	}, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), f = /* @__PURE__ */ o(((e, t) => {
	t.exports = d();
})), p = /* @__PURE__ */ o(((e) => {
	var t = u();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal"), o = Symbol.for("react.recoverable"), s = Symbol.for("react.optimistic_key");
	function c(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : r === s ? s : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function d(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
		return {
			$$typeof: o,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return c(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = l.T, n = i.p;
		try {
			if (l.T = null, i.p = 2, e) return e();
		} finally {
			l.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = d(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = d(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return l.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return l.H.useHostTransitionStatus();
	}, e.version = "19.3.0";
})), m = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = p();
})), h = /* @__PURE__ */ o(((e) => {
	var t = f(), n = u(), r = m();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function d(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = p(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function h(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && h(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function g(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function _(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function v(e) {
		var t = [null, null], n = g(e);
		return n === null || y(t, e, n.child, { foundSelf: !1 }), t;
	}
	function y(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function b(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(i(559));
		}
	}
	var x = null, S = null;
	function C(e, t, n) {
		return e === n || e === t && (x = e, !0);
	}
	function w(e, t, n) {
		return e === n ? (S = e, !1) : e === t && (S !== null && (x = e), !0);
	}
	function T(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function ee(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var E = Object.assign, te = Symbol.for("react.element"), ne = Symbol.for("react.transitional.element"), re = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), ie = Symbol.for("react.consumer"), A = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), se = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), ue = Symbol.for("react.legacy_hidden"), de = Symbol.for("react.memo_cache_sentinel"), fe = Symbol.for("react.view_transition"), pe = Symbol.for("react.recoverable"), me = Symbol.iterator;
	function he(e) {
		return typeof e != "object" || !e ? null : (e = me && e[me] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var ge = Symbol.for("react.client.reference");
	function _e(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === ge ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case D: return "Fragment";
			case k: return "Profiler";
			case O: return "StrictMode";
			case ae: return "Suspense";
			case oe: return "SuspenseList";
			case le: return "Activity";
			case fe: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case re: return "Portal";
			case A: return e.displayName || "Context";
			case ie: return (e._context.displayName || "Context") + ".Consumer";
			case j:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case se: return t = e.displayName || null, t === null ? _e(e.type) || "Memo" : t;
			case ce:
				t = e._payload, e = e._init;
				try {
					return _e(e(t));
				} catch {}
		}
		return null;
	}
	var ve = Array.isArray, M = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ye = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, be = [], xe = -1;
	function Se(e) {
		return { current: e };
	}
	function Ce(e) {
		0 > xe || (e.current = be[xe], be[xe] = null, xe--);
	}
	function P(e, t) {
		xe++, be[xe] = e.current, e.current = t;
	}
	var we = Se(null), Te = Se(null), Ee = Se(null), De = Se(null);
	function Oe(e, t) {
		switch (P(Ee, t), P(Te, e), P(we, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = up(t), e = dp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		Ce(we), P(we, e);
	}
	function ke() {
		Ce(we), Ce(Te), Ce(Ee);
	}
	function Ae(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, P(De, e)), t = we.current;
		var n = dp(t, e.type);
		t !== n && (P(Te, e), P(we, n));
	}
	function je(e) {
		Te.current === e && (Ce(we), Ce(Te)), De.current === e && (Ce(De), sh._currentValue = ye);
	}
	var Me, Ne;
	function Pe(e) {
		if (Me === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Me = t && t[1] || "", Ne = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Me + e + Ne;
	}
	var Fe = !1;
	function Ie(e, t) {
		if (!e || Fe) return "";
		Fe = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			Fe = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Pe(n) : "";
	}
	function Le(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Pe(e.type);
			case 16: return Pe("Lazy");
			case 13: return e.child !== t && t !== null ? Pe("Suspense Fallback") : Pe("Suspense");
			case 19: return Pe("SuspenseList");
			case 0:
			case 15: return Ie(e.type, !1);
			case 11: return Ie(e.type.render, !1);
			case 1: return Ie(e.type, !0);
			case 31: return Pe("Activity");
			case 30: return Pe("ViewTransition");
			default: return "";
		}
	}
	function Re(e) {
		try {
			var t = "", n = null;
			do
				t += Le(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var ze = Object.prototype.hasOwnProperty, Be = t.unstable_scheduleCallback, Ve = t.unstable_cancelCallback, He = t.unstable_shouldYield, Ue = t.unstable_requestPaint, We = t.unstable_now, Ge = t.unstable_getCurrentPriorityLevel, Ke = t.unstable_ImmediatePriority, qe = t.unstable_UserBlockingPriority, Je = t.unstable_NormalPriority, Ye = t.unstable_LowPriority, Xe = t.unstable_IdlePriority, Ze = t.log, Qe = t.unstable_setDisableYieldValue, $e = null, et = null;
	function tt(e) {
		if (typeof Ze == "function" && Qe(e), et && typeof et.setStrictMode == "function") try {
			et.setStrictMode($e, e);
		} catch {}
	}
	var nt = Math.clz32 ? Math.clz32 : at, rt = Math.log, it = Math.LN2;
	function at(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (rt(e) / it | 0) | 0;
	}
	var ot = 256, st = 262144, ct = 4194304;
	function lt(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function ut(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = lt(n))) : i = lt(o) : i = lt(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = lt(n))) : i = lt(o)) : i = lt(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function dt(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function ft(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - nt(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function pt(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function mt() {
		var e = ct;
		return ct <<= 1, !(ct & 62914560) && (ct = 4194304), e;
	}
	function ht(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function gt(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function _t(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - nt(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && vt(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function vt(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - nt(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function yt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - nt(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function bt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : xt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function xt(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function St(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function Ct() {
		var e = N.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function wt(e, t) {
		var n = N.p;
		try {
			return N.p = e, t();
		} finally {
			N.p = n;
		}
	}
	var Tt = Math.random().toString(36).slice(2), Et = "__reactFiber$" + Tt, Dt = "__reactProps$" + Tt, Ot = "__reactContainer$" + Tt, kt = "__reactEvents$" + Tt, At = "__reactListeners$" + Tt, jt = "__reactHandles$" + Tt, F = "__reactResources$" + Tt, Mt = "__reactMarker$" + Tt, Nt = "__reactLoad$" + Tt;
	function Pt(e) {
		delete e[Et], delete e[Dt], delete e[At], delete e[jt];
	}
	function Ft(e) {
		var t;
		if (t = e[Et]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Ot] || n[Et]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
					if (n = e[Et]) return n;
					e = fm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function It(e) {
		if (e = e[Et] || e[Ot]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function Lt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Rt(e) {
		var t = e[F];
		return t ||= e[F] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function zt(e) {
		e[Mt] = !0;
	}
	function Bt(e) {
		e[Nt] = void 0;
	}
	var Vt = /* @__PURE__ */ new Set(), Ht = {};
	function I(e, t) {
		Ut(e, t), Ut(e + "Capture", t);
	}
	function Ut(e, t) {
		for (Ht[e] = t, e = 0; e < t.length; e++) Vt.add(t[e]);
	}
	var Wt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Gt = {}, Kt = {};
	function qt(e) {
		return ze.call(Kt, e) ? !0 : ze.call(Gt, e) ? !1 : Wt.test(e) ? Kt[e] = !0 : (Gt[e] = !0, !1);
	}
	var L = !1;
	function Jt() {
		var e = L;
		return L = !1, e;
	}
	function R(e, t, n) {
		if (qt(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function Yt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function Xt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function Zt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function Qt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function $t(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function en(e) {
		if (!e._valueTracker) {
			var t = Qt(e) ? "checked" : "value";
			e._valueTracker = $t(e, t, "" + e[t]);
		}
	}
	function tn(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Qt(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var nn = /[\n"\\]/g;
	function rn(e) {
		return e.replace(nn, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function an(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Zt(t)) : e.value !== "" + Zt(t) && (e.value = "" + Zt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : sn(e, Zt(n)) : o === "number" && e.value == t ? sn(e, Zt(e.value)) : sn(e, Zt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Zt(s) : e.removeAttribute("name");
	}
	function on(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				en(e);
				return;
			}
			n = n == null ? "" : "" + Zt(n), t = t == null ? n : "" + Zt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), en(e);
	}
	function sn(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function cn(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Zt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function ln(e, t, n) {
		if (t != null && (t = "" + Zt(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + Zt(n);
	}
	function un(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (ve(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Zt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), en(e);
	}
	function dn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var fn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function pn(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || fn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function mn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", L = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (pn(e, a, r), L = !0);
		} else for (var o in t) t.hasOwnProperty(o) && pn(e, o, t[o]);
	}
	function hn(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var z = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), gn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function _n(e) {
		return gn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function vn() {}
	var yn = null;
	function bn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var xn = null, Sn = null;
	function Cn(e) {
		var t = It(e);
		if (t && (e = t.stateNode)) {
			var n = e[Dt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (an(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + rn("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[Dt] || null;
								if (!a) throw Error(i(90));
								an(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && tn(r);
					}
					break a;
				case "textarea":
					ln(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && cn(e, !!n.multiple, t, !1);
			}
		}
	}
	var wn = !1;
	function Tn(e, t, n) {
		if (wn) return e(t, n);
		wn = !0;
		try {
			return e(t);
		} finally {
			if (wn = !1, (xn !== null || Sn !== null) && (zd(), xn && (t = xn, e = Sn, Sn = xn = null, Cn(t), e))) for (t = 0; t < e.length; t++) Cn(e[t]);
		}
	}
	function En(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[Dt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var Dn = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), On = !1;
	if (Dn) try {
		var kn = {};
		Object.defineProperty(kn, "passive", { get: function() {
			On = !0;
		} }), window.addEventListener("test", kn, kn), window.removeEventListener("test", kn, kn);
	} catch {
		On = !1;
	}
	var An = null, jn = null, Mn = null;
	function Nn() {
		if (Mn) return Mn;
		var e, t = jn, n = t.length, r, i = "value" in An ? An.value : An.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Mn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function Pn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Fn() {
		return !0;
	}
	function In() {
		return !1;
	}
	function Ln(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Fn : In, this.isPropagationStopped = In, this;
		}
		return E(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Fn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Fn);
			},
			persist: function() {},
			isPersistent: Fn
		}), t;
	}
	var Rn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, zn = Ln(Rn), Bn = E({}, Rn, {
		view: 0,
		detail: 0
	}), Vn = Ln(Bn), Hn, Un, Wn, Gn = E({}, Bn, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: nr,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Wn && (Wn && e.type === "mousemove" ? (Hn = e.screenX - Wn.screenX, Un = e.screenY - Wn.screenY) : Un = Hn = 0, Wn = e), Hn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Un;
		}
	}), Kn = Ln(Gn), qn = Ln(E({}, Gn, { dataTransfer: 0 })), Jn = Ln(E({}, Bn, { relatedTarget: 0 })), Yn = Ln(E({}, Rn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Xn = Ln(E({}, Rn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Zn = Ln(E({}, Rn, { data: 0 })), Qn = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, $n = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, er = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function tr(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = er[e]) ? !!t[e] : !1;
	}
	function nr() {
		return tr;
	}
	var rr = Ln(E({}, Bn, {
		key: function(e) {
			if (e.key) {
				var t = Qn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Pn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $n[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: nr,
		charCode: function(e) {
			return e.type === "keypress" ? Pn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Pn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), ir = Ln(E({}, Gn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), ar = Ln(E({}, Rn, { submitter: 0 })), or = Ln(E({}, Bn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: nr
	})), sr = Ln(E({}, Rn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), cr = Ln(E({}, Gn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), lr = Ln(E({}, Rn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), ur = [
		9,
		13,
		27,
		32
	], dr = Dn && "CompositionEvent" in window, fr = null;
	Dn && "documentMode" in document && (fr = document.documentMode);
	var pr = Dn && "TextEvent" in window && !fr, mr = Dn && (!dr || fr && 8 < fr && 11 >= fr), hr = " ", gr = !1;
	function _r(e, t) {
		switch (e) {
			case "keyup": return ur.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function vr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var yr = !1;
	function br(e, t) {
		switch (e) {
			case "compositionend": return vr(t);
			case "keypress": return t.which === 32 ? (gr = !0, hr) : null;
			case "textInput": return e = t.data, e === hr && gr ? null : e;
			default: return null;
		}
	}
	function xr(e, t) {
		if (yr) return e === "compositionend" || !dr && _r(e, t) ? (e = Nn(), Mn = jn = An = null, yr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return mr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Sr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function Cr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Sr[e.type] : t === "textarea";
	}
	function wr(e, t, n, r) {
		xn ? Sn ? Sn.push(r) : Sn = [r] : xn = r, t = Jf(t, "onChange"), 0 < t.length && (n = new zn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Tr = null, Er = null;
	function Dr(e) {
		Vf(e, 0);
	}
	function Or(e) {
		if (tn(Lt(e))) return e;
	}
	function kr(e, t) {
		if (e === "change") return t;
	}
	var Ar = !1;
	if (Dn) {
		var jr;
		if (Dn) {
			var Mr = "oninput" in document;
			if (!Mr) {
				var Nr = document.createElement("div");
				Nr.setAttribute("oninput", "return;"), Mr = typeof Nr.oninput == "function";
			}
			jr = Mr;
		} else jr = !1;
		Ar = jr && (!document.documentMode || 9 < document.documentMode);
	}
	function Pr() {
		Tr && (Tr.detachEvent("onpropertychange", Fr), Er = Tr = null);
	}
	function Fr(e) {
		if (e.propertyName === "value" && Or(Er)) {
			var t = [];
			wr(t, Er, e, bn(e)), Tn(Dr, t);
		}
	}
	function Ir(e, t, n) {
		e === "focusin" ? (Pr(), Tr = t, Er = n, Tr.attachEvent("onpropertychange", Fr)) : e === "focusout" && Pr();
	}
	function Lr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return Or(Er);
	}
	function Rr(e, t) {
		if (e === "click") return Or(t);
	}
	function zr(e, t) {
		if (e === "input" || e === "change") return Or(t);
	}
	function Br(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Vr = typeof Object.is == "function" ? Object.is : Br;
	function Hr(e, t) {
		if (Vr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!ze.call(t, i) || !Vr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Ur(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Wr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Gr(e, t) {
		var n = Wr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Wr(n);
		}
	}
	function Kr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function qr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Ur(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Ur(e.document);
		}
		return t;
	}
	function Jr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Yr = Dn && "documentMode" in document && 11 >= document.documentMode, Xr = null, Zr = null, Qr = null, $r = !1;
	function ei(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		$r || Xr == null || Xr !== Ur(r) || (r = Xr, "selectionStart" in r && Jr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Qr && Hr(Qr, r) || (Qr = r, r = Jf(Zr, "onSelect"), 0 < r.length && (t = new zn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Xr)));
	}
	function ti(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var ni = {
		animationend: ti("Animation", "AnimationEnd"),
		animationiteration: ti("Animation", "AnimationIteration"),
		animationstart: ti("Animation", "AnimationStart"),
		transitionrun: ti("Transition", "TransitionRun"),
		transitionstart: ti("Transition", "TransitionStart"),
		transitioncancel: ti("Transition", "TransitionCancel"),
		transitionend: ti("Transition", "TransitionEnd")
	}, ri = {}, ii = {};
	Dn && (ii = document.createElement("div").style, "AnimationEvent" in window || (delete ni.animationend.animation, delete ni.animationiteration.animation, delete ni.animationstart.animation), "TransitionEvent" in window || delete ni.transitionend.transition);
	function ai(e) {
		if (ri[e]) return ri[e];
		if (!ni[e]) return e;
		var t = ni[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in ii) return ri[e] = t[n];
		return e;
	}
	var oi = ai("animationend"), si = ai("animationiteration"), ci = ai("animationstart"), li = ai("transitionrun"), ui = ai("transitionstart"), di = ai("transitioncancel"), fi = ai("transitionend"), pi = /* @__PURE__ */ new Map(), mi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	mi.push("scrollEnd");
	function hi(e, t) {
		pi.set(e, t), I(t, [e]);
	}
	var gi = 0;
	function _i(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = bd.identifierPrefix;
		var n = gi++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function vi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Od;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function yi(e, t) {
		return e = vi(e), t = vi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var bi = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, xi = [], Si = 0, Ci = 0;
	function wi() {
		for (var e = Si, t = Ci = Si = 0; t < e;) {
			var n = xi[t];
			xi[t++] = null;
			var r = xi[t];
			xi[t++] = null;
			var i = xi[t];
			xi[t++] = null;
			var a = xi[t];
			if (xi[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && Oi(n, i, a);
		}
	}
	function Ti(e, t, n, r) {
		xi[Si++] = e, xi[Si++] = t, xi[Si++] = n, xi[Si++] = r, Ci |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Ei(e, t, n, r) {
		return Ti(e, t, n, r), ki(e);
	}
	function Di(e, t) {
		return Ti(e, null, null, t), ki(e);
	}
	function Oi(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - nt(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function ki(e) {
		if (50 < kd) throw kd = 0, Ad = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Ai = {};
	function ji(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Mi(e, t, n, r) {
		return new ji(e, t, n, r);
	}
	function Ni(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Pi(e, t) {
		var n = e.alternate;
		return n === null ? (n = Mi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Fi(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function Ii(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Ni(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, we.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case le: return e = Mi(31, n, t, a), e.elementType = le, e.lanes = o, e;
			case D: return Li(n.children, a, o, t);
			case O:
				s = 8, a |= 24;
				break;
			case k: return e = Mi(12, n, t, a | 2), e.elementType = k, e.lanes = o, e;
			case ae: return e = Mi(13, n, t, a), e.elementType = ae, e.lanes = o, e;
			case oe: return e = Mi(19, n, t, a), e.elementType = oe, e.lanes = o, e;
			case ue:
			case fe: return e = a | 32, e = Mi(30, n, t, e), e.elementType = fe, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case A:
						s = 10;
						break a;
					case ie:
						s = 9;
						break a;
					case j:
						s = 11;
						break a;
					case se:
						s = 14;
						break a;
					case ce:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Mi(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Li(e, t, n, r) {
		return e = Mi(7, e, r, t), e.lanes = n, e;
	}
	function Ri(e, t, n) {
		return e = Mi(6, e, null, t), e.lanes = n, e;
	}
	function zi(e) {
		var t = Mi(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Bi(e, t, n) {
		return t = Mi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Vi = /* @__PURE__ */ new WeakMap();
	function Hi(e, t) {
		if (typeof e == "object" && e) {
			var n = Vi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Re(t)
			}, Vi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Re(t)
		};
	}
	var Ui = [], Wi = 0, Gi = null, Ki = 0, qi = [], Ji = 0, Yi = null, Xi = 1, Zi = "";
	function Qi(e, t) {
		Ui[Wi++] = Ki, Ui[Wi++] = Gi, Gi = e, Ki = t;
	}
	function $i(e, t, n) {
		qi[Ji++] = Xi, qi[Ji++] = Zi, qi[Ji++] = Yi, Yi = e;
		var r = Xi;
		e = Zi;
		var i = 32 - nt(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - nt(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Xi = 1 << 32 - nt(t) + i | n << i | r, Zi = a + e;
		} else Xi = 1 << a | n << i | r, Zi = e;
	}
	function ea(e) {
		e.return !== null && (Qi(e, 1), $i(e, 1, 0));
	}
	function ta(e) {
		for (; e === Gi;) Gi = Ui[--Wi], Ui[Wi] = null, Ki = Ui[--Wi], Ui[Wi] = null;
		for (; e === Yi;) Yi = qi[--Ji], qi[Ji] = null, Zi = qi[--Ji], qi[Ji] = null, Xi = qi[--Ji], qi[Ji] = null;
	}
	function na(e, t) {
		qi[Ji++] = Xi, qi[Ji++] = Zi, qi[Ji++] = Yi, Xi = t.id, Zi = t.overflow, Yi = e;
	}
	var B = null, V = null, H = !1, ra = null, ia = !1, aa = Error(i(519));
	function oa(e) {
		throw fa(Hi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), aa;
	}
	function sa(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[Et] = e, t[Dt] = r, n) {
			case "dialog":
				Q("cancel", t), Q("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Q("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < zf.length; n++) Q(zf[n], t);
				break;
			case "source":
				Q("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Q("error", t), Q("load", t);
				break;
			case "details":
				Q("toggle", t);
				break;
			case "input":
				Q("invalid", t), on(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Q("invalid", t);
				break;
			case "textarea": Q("invalid", t), un(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || ep(t.textContent, n) ? (r.popover != null && (Q("beforetoggle", t), Q("toggle", t)), r.onScroll != null && Q("scroll", t), r.onScrollEnd != null && Q("scrollend", t), r.onClick != null && (t.onclick = vn), t = !0) : t = !1, t || oa(e, !0);
	}
	function ca(e) {
		for (B = e.return; B;) switch (B.tag) {
			case 5:
			case 31:
			case 13:
				ia = !1;
				return;
			case 27:
			case 3:
				ia = !0;
				return;
			default: B = B.return;
		}
	}
	function la(e) {
		if (e !== B) return !1;
		if (!H) return ca(e), H = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || pp(e.type, e.memoizedProps)), n = !n), n && V && oa(e), ca(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			V = dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			V = dm(e);
		} else t === 27 ? (t = V, Sp(e.type) ? (e = um, um = null, V = e) : V = t) : V = B ? lm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function ua() {
		V = B = null, H = !1;
	}
	function da() {
		var e = ra;
		return e !== null && (fd === null ? fd = e : fd.push.apply(fd, e), ra = null), e;
	}
	function fa(e) {
		ra === null ? ra = [e] : ra.push(e);
	}
	var pa = Se(null), ma = null, ha = null;
	function ga(e, t, n) {
		P(pa, t._currentValue), t._currentValue = n;
	}
	function _a(e) {
		e._currentValue = pa.current, Ce(pa);
	}
	function va(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function ya(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), va(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), va(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), va(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function ba(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Vr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === De.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			a = a.return;
		}
		return e !== null && ya(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function xa(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Vr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function Sa(e) {
		ma = e, ha = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Ca(e) {
		return Ta(ma, e);
	}
	function wa(e, t) {
		return ma === null && Sa(e), Ta(e, t);
	}
	function Ta(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, ha === null) {
			if (e === null) throw Error(i(308));
			ha = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else ha = ha.next = t;
		return n;
	}
	var Ea = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Da = t.unstable_scheduleCallback, Oa = t.unstable_NormalPriority, ka = {
		$$typeof: A,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Aa() {
		return {
			controller: new Ea(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function ja(e) {
		e.refCount--, e.refCount === 0 && Da(Oa, function() {
			e.controller.abort();
		});
	}
	function Ma(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var Na = null;
	function Pa(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var Fa = null, Ia = 0, La = 0, Ra = null;
	function za(e, t) {
		if (Fa === null) {
			var n = Fa = [];
			Ia = 0, La = Pf(), Ra = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return Ia++, t.then(Ba, Ba), t;
	}
	function Ba() {
		if (--Ia === 0 && (Na = null, Fa !== null)) {
			Ra !== null && (Ra.status = "fulfilled");
			var e = Fa;
			Fa = null, La = 0, Ra = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Va(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var Ha = M.S;
	M.S = function(e, t) {
		if (hd = We(), typeof t == "object" && t && typeof t.then == "function" && za(e, t), Na !== null) for (var n = bf; n !== null;) Ma(n, Na), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = bf; r !== null;) Ma(r, n), r = r.next;
			if (La !== 0) {
				r = Na, r === null && (r = Na = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		Ha !== null && Ha(e, t);
	};
	var Ua = Se(null);
	function Wa() {
		var e = Ua.current;
		return e === null ? ed.pooledCache : e;
	}
	function Ga(e, t) {
		t === null ? P(Ua, Ua.current) : P(Ua, t.pool);
	}
	function Ka() {
		var e = Wa();
		return e === null ? null : {
			parent: ka._currentValue,
			pool: e
		};
	}
	var qa = Error(i(460)), Ja = Error(i(474)), Ya = Error(i(542)), Xa = { then: function() {} };
	function Za(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Qa(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(vn, vn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, no(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(vn, vn);
				else {
					if (e = ed, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, no(e), e;
				}
				throw eo = t, qa;
		}
	}
	function $a(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (eo = e, qa) : e;
		}
	}
	var eo = null;
	function to() {
		if (eo === null) throw Error(i(459));
		var e = eo;
		return eo = null, e;
	}
	function no(e) {
		if (e === qa || e === Ya) throw Error(i(483));
	}
	var ro = null, io = 0;
	function ao(e) {
		var t = io;
		return io += 1, ro === null && (ro = []), Qa(ro, e, t);
	}
	function oo(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function so(e, t) {
		throw t.$$typeof === te ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function co(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = Pi(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Ri(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === D ? (e = d(e, t, n.props.children, r, n.key), oo(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === ce && $a(i) === t.type) ? (t = a(t, n.props), oo(t, n), t.return = e, t) : (t = Ii(n.type, n.key, n.props, null, e.mode, r), oo(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Bi(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Li(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Ri("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case ne: return n = Ii(t.type, t.key, t.props, null, e.mode, n), oo(n, t), n.return = e, n;
					case re: return t = Bi(t, e.mode, n), t.return = e, t;
					case ce: return t = $a(t), f(e, t, n);
				}
				if (ve(t) || he(t)) return t = Li(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, ao(t), n);
				if (t.$$typeof === A) return f(e, wa(e, t), n);
				so(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case ne: return n.key === i ? l(e, t, n, r) : null;
					case re: return n.key === i ? u(e, t, n, r) : null;
					case ce: return n = $a(n), p(e, t, n, r);
				}
				if (ve(n) || he(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, ao(n), r);
				if (n.$$typeof === A) return p(e, t, wa(e, n), r);
				so(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case ne: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case re: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case ce: return r = $a(r), m(e, t, n, r, i);
				}
				if (ve(r) || he(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, ao(r), i);
				if (r.$$typeof === A) return m(e, t, n, wa(t, r), i);
				so(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), H && Qi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return H && Qi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), H && Qi(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), H && Qi(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return H && Qi(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), H && Qi(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === D && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case ne:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === D) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), oo(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === ce && $a(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), oo(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === D ? (c = Li(o.props.children, e.mode, c, o.key), oo(c, o), c.return = e, e = c) : (c = Ii(o.type, o.key, o.props, null, e.mode, c), oo(c, o), c.return = e, e = c);
						}
						return s(e);
					case re:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = Bi(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case ce: return o = $a(o), _(e, r, o, c);
				}
				if (ve(o)) return h(e, r, o, c);
				if (he(o)) {
					if (l = he(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, ao(o), c);
				if (o.$$typeof === A) return _(e, r, wa(e, o), c);
				so(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Ri(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				io = 0;
				var i = _(e, t, n, r);
				return ro = null, i;
			} catch (t) {
				if (t === qa || t === Ya) throw t;
				var a = Mi(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var lo = co(!0), uo = co(!1), fo = !1;
	function po(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function mo(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function ho(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function go(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, K & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = ki(e), Oi(e, null, n), t;
		}
		return Ti(e, r, t, n), ki(e);
	}
	function _o(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, yt(e, n);
		}
	}
	function vo(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var yo = !1;
	function bo() {
		if (yo) {
			var e = Ra;
			if (e !== null) throw e;
		}
	}
	function xo(e, t, n, r) {
		yo = !1;
		var i = e.updateQueue;
		fo = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (J & f) === f : (r & f) === f) {
					f !== 0 && f === La && (yo = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = E({}, d, f);
								break a;
							case 2: fo = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), sd |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function So(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function Co(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) So(n[e], t);
	}
	var wo = Se(null), To = Se(0);
	function Eo(e, t) {
		e = ad, P(To, e), P(wo, t), ad = e | t.baseLanes;
	}
	function Do() {
		P(To, ad), P(wo, wo.current);
	}
	function Oo() {
		ad = To.current, Ce(wo), Ce(To);
	}
	var ko = Se(null), Ao = null;
	function jo(e) {
		var t = e.alternate;
		P(Io, Io.current & 1), P(ko, e), Ao === null && (t === null || wo.current !== null || t.memoizedState !== null) && (Ao = e);
	}
	function Mo(e) {
		P(Io, Io.current), P(ko, e), Ao === null && (Ao = e);
	}
	function No(e) {
		e.tag === 22 ? (P(Io, Io.current), P(ko, e), Ao === null && (Ao = e)) : Po();
	}
	function Po() {
		P(Io, Io.current), P(ko, ko.current);
	}
	function Fo(e) {
		Ce(ko), Ao === e && (Ao = null), Ce(Io);
	}
	var Io = Se(0);
	function Lo(e, t) {
		P(ko, ko.current), P(Io, t);
	}
	function Ro(e) {
		Ce(Io), Ce(ko), Ao === e && (Ao = null);
	}
	function zo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var Bo = 0, U = null, W = null, Vo = null, Ho = !1, Uo = !1, Wo = !1, Go = 0, Ko = 0, qo = null, Jo = 0;
	function Yo() {
		throw Error(i(321));
	}
	function Xo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Vr(e[n], t[n])) return !1;
		return !0;
	}
	function Zo(e, t, n, r, i, a) {
		return Bo = a, U = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? mc : hc, Wo = !1, a = n(r, i), Wo = !1, Uo && (a = $o(t, n, r, i)), Qo(e), a;
	}
	function Qo(e) {
		M.H = pc;
		var t = W !== null && W.next !== null;
		if (Bo = 0, Vo = W = U = null, Ho = !1, Ko = 0, qo = null, t) throw Error(i(300));
		e === null || Mc || (e = e.dependencies, e !== null && xa(e) && (Mc = !0));
	}
	function $o(e, t, n, r) {
		U = e;
		var a = 0;
		do {
			if (Uo && (qo = null), Ko = 0, Uo = !1, 25 <= a) throw Error(i(301));
			if (a += 1, Vo = W = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			M.H = gc, o = t(n, r);
		} while (Uo);
		return o;
	}
	function es() {
		var e = M.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? ss(t) : t, e = e.useState()[0], (W === null ? null : W.memoizedState) !== e && (U.flags |= 1024), t;
	}
	function ts() {
		var e = Go !== 0;
		return Go = 0, e;
	}
	function ns(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function rs(e) {
		if (Ho) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Ho = !1;
		}
		Bo = 0, Vo = W = U = null, Uo = !1, Ko = Go = 0, qo = null;
	}
	function is() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Vo === null ? U.memoizedState = Vo = e : Vo = Vo.next = e, Vo;
	}
	function as() {
		if (W === null) {
			var e = U.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = W.next;
		var t = Vo === null ? U.memoizedState : Vo.next;
		if (t !== null) Vo = t, W = e;
		else {
			if (e === null) throw U.alternate === null ? Error(i(467)) : Error(i(310));
			W = e, e = {
				memoizedState: W.memoizedState,
				baseState: W.baseState,
				baseQueue: W.baseQueue,
				queue: W.queue,
				next: null
			}, Vo === null ? U.memoizedState = Vo = e : Vo = Vo.next = e;
		}
		return Vo;
	}
	function os() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function ss(e) {
		var t = Ko;
		return Ko += 1, qo === null && (qo = []), e = Qa(qo, e, t), t = U, (Vo === null ? t.memoizedState : Vo.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? mc : hc), e;
	}
	function cs(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return ss(e);
			if (e.$$typeof === pe) return;
			if (e.$$typeof === A) return Ca(e);
		}
		throw Error(i(438, String(e)));
	}
	function ls(e) {
		var t = null, n = U.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = U.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = os(), U.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = de;
		return t.index++, n;
	}
	function us(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function ds(e) {
		return fs(as(), W, e);
	}
	function fs(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (Bo & f) === f : (J & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === La && (d = !0);
					else if ((Bo & p) === p) {
						u = u.next, p === La && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, U.lanes |= p, sd |= p;
					f = u.action, Wo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, U.lanes |= f, sd |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Vr(o, e.memoizedState) && (Mc = !0, d && (n = Ra, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function ps(e) {
		var t = as(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Vr(o, t.memoizedState) || (Mc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function ms(e, t, n) {
		var r = U, a = as(), o = H;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Vr((W || a).memoizedState, n);
		if (s && (a.memoizedState = n, Mc = !0), a = a.queue, zs(_s.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Vo !== null && !!(Vo.memoizedState.tag & 1), Ps(e ? 9 : 8, { destroy: void 0 }, gs.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, ed === null) throw Error(i(349));
			o || Bo & 127 || hs(r, t, n);
		}
		return n;
	}
	function hs(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = U.updateQueue, t === null ? (t = os(), U.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function gs(e, t, n, r) {
		t.value = n, t.getSnapshot = r, vs(t) && ys(e);
	}
	function _s(e, t, n) {
		return n(function() {
			vs(t) && ys(e);
		});
	}
	function vs(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Vr(e, n);
		} catch {
			return !0;
		}
	}
	function ys(e) {
		var t = Di(e, 2);
		t !== null && Pd(t, e, 2);
	}
	function bs(e) {
		var t = is();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Wo) {
				tt(!0);
				try {
					n();
				} finally {
					tt(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: us,
			lastRenderedState: e
		}, t;
	}
	function xs(e, t, n, r) {
		return e.baseState = n, fs(e, W, typeof r == "function" ? r : us);
	}
	function Ss(e, t, n, r, a) {
		if (uc(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			M.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Cs(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Cs(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = M.T, o = {};
			o.types = a === null ? null : a.types, M.T = o;
			try {
				var s = n(i, r), c = M.S;
				c !== null && c(o, s), ws(e, t, s);
			} catch (n) {
				Es(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), M.T = a;
			}
		} else try {
			a = n(i, r), ws(e, t, a);
		} catch (n) {
			Es(e, t, n);
		}
	}
	function ws(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			Ts(e, t, n);
		}, function(n) {
			return Es(e, t, n);
		}) : Ts(e, t, n);
	}
	function Ts(e, t, n) {
		t.status = "fulfilled", t.value = n, Ds(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Cs(e, n)));
	}
	function Es(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Ds(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Ds(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function Os(e, t) {
		return t;
	}
	function ks(e, t) {
		if (H) {
			var n = ed.formState;
			if (n !== null) {
				a: {
					var r = U;
					if (H) {
						if (V) {
							b: {
								for (var i = V, a = ia; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = lm(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								V = lm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						oa(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = is(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Os,
			lastRenderedState: t
		}, n.queue = r, n = sc.bind(null, U, r), r.dispatch = n, r = bs(!1), a = lc.bind(null, U, !1, r.queue), r = is(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = Ss.bind(null, U, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function As(e) {
		return js(as(), W, e);
	}
	function js(e, t, n) {
		if (t = fs(e, t, Os)[0], e = ds(us)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = ss(t);
		} catch (e) {
			throw e === qa ? Ya : e;
		}
		else r = t;
		t = as();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (U.flags |= 2048, Ps(9, { destroy: void 0 }, Ms.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function Ms(e, t) {
		e.action = t;
	}
	function Ns(e) {
		var t = as(), n = W;
		if (n !== null) return js(t, n, e);
		as(), t = t.memoizedState, n = as();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function Ps(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = U.updateQueue, t === null && (t = os(), U.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function Fs() {
		return as().memoizedState;
	}
	function Is(e, t, n, r) {
		var i = is();
		U.flags |= e, i.memoizedState = Ps(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function Ls(e, t, n, r) {
		var i = as();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		W !== null && r !== null && Xo(r, W.memoizedState.deps) ? i.memoizedState = Ps(t, a, n, r) : (U.flags |= e, i.memoizedState = Ps(1 | t, a, n, r));
	}
	function Rs(e, t) {
		Is(8390656, 8, e, t);
	}
	function zs(e, t) {
		Ls(2048, 8, e, t);
	}
	function Bs(e) {
		U.flags |= 4;
		var t = U.updateQueue;
		if (t === null) t = os(), U.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Vs(e) {
		var t = as().memoizedState;
		return Bs({
			ref: t,
			nextImpl: e
		}), function() {
			if (K & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Hs(e, t) {
		return Ls(4, 2, e, t);
	}
	function Us(e, t) {
		return Ls(4, 4, e, t);
	}
	function Ws(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Gs(e, t, n) {
		n = n == null ? null : n.concat([e]), Ls(4, 4, Ws.bind(null, t, e), n);
	}
	function Ks() {}
	function qs(e, t) {
		var n = as();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Js(e, t) {
		var n = as();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Xo(t, r[1])) return r[0];
		if (r = e(), Wo) {
			tt(!0);
			try {
				e();
			} finally {
				tt(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Ys(e, t, n) {
		return n === void 0 || Bo & 1073741824 && !(J & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Md(), U.lanes |= e, sd |= e, n);
	}
	function Xs(e, t, n, r) {
		return Vr(n, t) ? n : wo.current === null ? !(Bo & 106) || Bo & 1073741824 && !(J & 261930) ? (Mc = !0, e.memoizedState = n) : (e = Md(), U.lanes |= e, sd |= e, t) : (e = Ys(e, n, r), Vr(e, t) || (Mc = !0), e);
	}
	function Zs(e, t, n, r, i) {
		var a = N.p;
		N.p = a !== 0 && 8 > a ? a : 8;
		var o = M.T, s = {};
		s.types = o === null ? null : o.types, M.T = s, lc(e, !1, t, n);
		try {
			var c = i(), l = M.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? cc(e, t, Va(c, r), jd(e)) : cc(e, t, r, jd(e));
		} catch (n) {
			cc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, jd());
		} finally {
			N.p = a, o !== null && s.types !== null && (o.types = s.types), M.T = o;
		}
	}
	function Qs() {}
	function $s(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = ec(e).queue;
		Zs(e, a, t, ye, n === null ? Qs : function() {
			return tc(e), n(r);
		});
	}
	function ec(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: ye,
			baseState: ye,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: us,
				lastRenderedState: ye
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: us,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function tc(e) {
		var t = ec(e);
		t.next === null && (t = e.alternate.memoizedState), cc(e, t.next.queue, {}, jd());
	}
	function nc() {
		return Ca(sh);
	}
	function rc() {
		return as().memoizedState;
	}
	function ic() {
		return as().memoizedState;
	}
	function ac(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = jd();
					e = ho(n);
					var r = go(t, e, n);
					r !== null && (Pd(r, t, n), _o(r, t, n)), t = { cache: Aa() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function oc(e, t, n) {
		var r = jd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, uc(e) ? dc(t, n) : (n = Ei(e, t, n, r), n !== null && (Pd(n, e, r), fc(n, t, r)));
	}
	function sc(e, t, n) {
		cc(e, t, n, jd());
	}
	function cc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (uc(e)) dc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Vr(s, o)) return Ti(e, t, i, 0), ed === null && wi(), !1;
			} catch {}
			if (n = Ei(e, t, i, r), n !== null) return Pd(n, e, r), fc(n, t, r), !0;
		}
		return !1;
	}
	function lc(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Pf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, uc(e)) {
			if (t) throw Error(i(479));
		} else t = Ei(e, n, r, 2), t !== null && Pd(t, e, 2);
	}
	function uc(e) {
		var t = e.alternate;
		return e === U || t !== null && t === U;
	}
	function dc(e, t) {
		Uo = Ho = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function fc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, yt(e, n);
		}
	}
	var pc = {
		readContext: Ca,
		use: cs,
		useCallback: Yo,
		useContext: Yo,
		useEffect: Yo,
		useImperativeHandle: Yo,
		useLayoutEffect: Yo,
		useInsertionEffect: Yo,
		useMemo: Yo,
		useReducer: Yo,
		useRef: Yo,
		useState: Yo,
		useDebugValue: Yo,
		useDeferredValue: Yo,
		useTransition: Yo,
		useSyncExternalStore: Yo,
		useId: Yo,
		useHostTransitionStatus: Yo,
		useFormState: Yo,
		useActionState: Yo,
		useOptimistic: Yo,
		useMemoCache: Yo,
		useCacheRefresh: Yo,
		useEffectEvent: Yo
	}, mc = {
		readContext: Ca,
		use: cs,
		useCallback: function(e, t) {
			return is().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Ca,
		useEffect: Rs,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), Is(4194308, 4, Ws.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Is(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			Is(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = is();
			t = t === void 0 ? null : t;
			var r = e();
			if (Wo) {
				tt(!0);
				try {
					e();
				} finally {
					tt(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = is();
			if (n !== void 0) {
				var i = n(t);
				if (Wo) {
					tt(!0);
					try {
						n(t);
					} finally {
						tt(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = oc.bind(null, U, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = is();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = bs(e);
			var t = e.queue, n = sc.bind(null, U, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Ks,
		useDeferredValue: function(e, t) {
			return Ys(is(), e, t);
		},
		useTransition: function() {
			var e = bs(!1);
			return e = Zs.bind(null, U, e.queue, !0, !1), is().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = U, a = is();
			if (H) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), ed === null) throw Error(i(349));
				J & 127 || hs(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Rs(_s.bind(null, r, o, e), [e]), r.flags |= 2048, Ps(9, { destroy: void 0 }, gs.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = is(), t = ed.identifierPrefix;
			if (H) {
				var n = Zi, r = Xi;
				n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Go++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Jo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: nc,
		useFormState: ks,
		useActionState: ks,
		useOptimistic: function(e) {
			var t = is();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = lc.bind(null, U, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: ls,
		useCacheRefresh: function() {
			return is().memoizedState = ac.bind(null, U);
		},
		useEffectEvent: function(e) {
			var t = is(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (K & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, hc = {
		readContext: Ca,
		use: cs,
		useCallback: qs,
		useContext: Ca,
		useEffect: zs,
		useImperativeHandle: Gs,
		useInsertionEffect: Hs,
		useLayoutEffect: Us,
		useMemo: Js,
		useReducer: ds,
		useRef: Fs,
		useState: function() {
			return ds(us);
		},
		useDebugValue: Ks,
		useDeferredValue: function(e, t) {
			return Xs(as(), W.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ds(us)[0], t = as().memoizedState;
			return [typeof e == "boolean" ? e : ss(e), t];
		},
		useSyncExternalStore: ms,
		useId: rc,
		useHostTransitionStatus: nc,
		useFormState: As,
		useActionState: As,
		useOptimistic: function(e, t) {
			return xs(as(), W, e, t);
		},
		useMemoCache: ls,
		useCacheRefresh: ic,
		useEffectEvent: Vs
	}, gc = {
		readContext: Ca,
		use: cs,
		useCallback: qs,
		useContext: Ca,
		useEffect: zs,
		useImperativeHandle: Gs,
		useInsertionEffect: Hs,
		useLayoutEffect: Us,
		useMemo: Js,
		useReducer: ps,
		useRef: Fs,
		useState: function() {
			return ps(us);
		},
		useDebugValue: Ks,
		useDeferredValue: function(e, t) {
			var n = as();
			return W === null ? Ys(n, e, t) : Xs(n, W.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ps(us)[0], t = as().memoizedState;
			return [typeof e == "boolean" ? e : ss(e), t];
		},
		useSyncExternalStore: ms,
		useId: rc,
		useHostTransitionStatus: nc,
		useFormState: Ns,
		useActionState: Ns,
		useOptimistic: function(e, t) {
			var n = as();
			return W === null ? (n.baseState = e, [e, n.queue.dispatch]) : xs(n, W, e, t);
		},
		useMemoCache: ls,
		useCacheRefresh: ic,
		useEffectEvent: Vs
	};
	function _c(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : E({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var vc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = ho(r);
			i.payload = t, n != null && (i.callback = n), t = go(e, i, r), t !== null && (Pd(t, e, r), _o(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = ho(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = go(e, i, r), t !== null && (Pd(t, e, r), _o(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = jd(), r = ho(n);
			r.tag = 2, t != null && (r.callback = t), t = go(e, r, n), t !== null && (Pd(t, e, n), _o(t, e, n));
		}
	};
	function yc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Hr(n, r) || !Hr(i, a) : !0;
	}
	function bc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vc.enqueueReplaceState(t, t.state, null);
	}
	function xc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = E({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function Sc(e) {
		bi(e);
	}
	function Cc(e) {
		console.error(e);
	}
	function wc(e) {
		bi(e);
	}
	function Tc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Ec(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Dc(e, t, n) {
		return n = ho(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Tc(e, t);
		}, n;
	}
	function Oc(e) {
		return e = ho(e), e.tag = 3, e;
	}
	function kc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Ec(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Ec(t, n, r), typeof i != "function" && (vd === null ? vd = /* @__PURE__ */ new Set([this]) : vd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Ac(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && ba(t, n, a, !0), n = ko.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return Ao === null ? Kd() : n.alternate === null && od === 0 && (od = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Xa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), mf(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Xa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), mf(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return mf(e, r, a), Kd(), !1;
		}
		if (H) return t = ko.current, t === null ? (r !== aa && (t = Error(i(423), { cause: r }), fa(Hi(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Hi(r, n), a = Dc(e.stateNode, r, a), vo(e, a), od !== 4 && (od = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== aa && (e = Error(i(422), { cause: r }), fa(Hi(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Hi(o, n), dd === null ? dd = [o] : dd.push(o), od !== 4 && (od = 2), t === null) return !0;
		r = Hi(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Dc(n.stateNode, r, e), vo(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (vd === null || !vd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = Oc(a), kc(a, e, n, r), vo(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var jc = Error(i(461)), Mc = !1;
	function Nc(e, t, n, r) {
		t.child = e === null ? uo(t, null, n, r) : lo(t, e.child, n, r);
	}
	function Pc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return Sa(t), r = Zo(e, t, n, o, a, i), s = ts(), e !== null && !Mc ? (ns(e, t, i), cl(e, t, i)) : (H && s && ea(t), t.flags |= 1, Nc(e, t, r, i), t.child);
	}
	function Fc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Ni(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Ic(e, t, a, r, i)) : (e = Ii(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !ll(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Hr : n, n(o, r) && e.ref === t.ref) return cl(e, t, i);
		}
		return t.flags |= 1, e = Pi(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Ic(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Hr(a, r) && e.ref === t.ref) {
				if (Mc = !1, t.pendingProps = r = a, ll(e, i)) e.flags & 131072 && (Mc = !0);
				else return t.lanes = e.lanes, cl(e, t, i);
			}
		}
		return Wc(e, t, n, r, i);
	}
	function Lc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return zc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ga(t, a === null ? null : a.cachePool), a === null ? Do() : Eo(t, a), No(t);
			else return r = t.lanes = 536870912, zc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ga(t, null), Do(), Po()) : (Ga(t, a.cachePool), Eo(t, a), Po(), t.memoizedState = null);
		return Nc(e, t, i, n), t.child;
	}
	function Rc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function zc(e, t, n, r, i) {
		var a = Wa();
		return a = a === null ? null : {
			parent: ka._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ga(t, null), Do(), No(t), e !== null && ba(e, t, r, !0), t.childLanes = i, null;
	}
	function Bc(e, t) {
		return t = $c({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Vc(e, t, n) {
		return lo(t, e.child, null, n), e = Bc(t, t.pendingProps), e.flags |= 2, Fo(t), t.memoizedState = null, e;
	}
	function Hc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (H) {
				if (r.mode === "hidden") return e = Bc(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, Rc(null, e);
				if (Mo(t), (e = V) ? (e = am(e, ia), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Yi === null ? null : {
						id: Xi,
						overflow: Zi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = zi(e), n.return = t, t.child = n, B = t, V = null)) : e = null, e === null) throw oa(t);
				return t.lanes = 536870912, null;
			}
			return Bc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (Mo(t), a) {
				if (t.flags & 256) t.flags &= -257, t = Vc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (Mc || ba(e, t, n, !1), a = (n & e.childLanes) !== 0, Mc || a) {
				if (wo.current === null) {
					if (r = ed, r !== null && (s = bt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Di(e, s), Pd(r, e, s), jc;
					Kd();
				}
				t = Vc(e, t, n);
			} else e = o.treeContext, V = lm(s.nextSibling), B = t, H = !0, ra = null, ia = !1, e !== null && na(t, e), t = Bc(t, r), t.flags |= 134221824;
			return t;
		}
		return e = Pi(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Uc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Wc(e, t, n, r, i) {
		return Sa(t), n = Zo(e, t, n, r, void 0, i), r = ts(), e !== null && !Mc ? (ns(e, t, i), cl(e, t, i)) : (H && r && ea(t), t.flags |= 1, Nc(e, t, n, i), t.child);
	}
	function Gc(e, t, n, r, i, a) {
		return Sa(t), t.updateQueue = null, n = $o(t, r, n, i), Qo(e), r = ts(), e !== null && !Mc ? (ns(e, t, a), cl(e, t, a)) : (H && r && ea(t), t.flags |= 1, Nc(e, t, n, a), t.child);
	}
	function Kc(e, t, n, r, i) {
		if (Sa(t), t.stateNode === null) {
			var a = Ai, o = n.contextType;
			typeof o == "object" && o && (a = Ca(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = vc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, po(t), o = n.contextType, a.context = typeof o == "object" && o ? Ca(o) : Ai, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (_c(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && vc.enqueueReplaceState(a, a.state, null), xo(t, r, a, i), bo(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = xc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Ai, typeof u == "object" && u && (o = Ca(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && bc(t, a, r, o), fo = !1;
			var f = t.memoizedState;
			a.state = f, xo(t, r, a, i), bo(), l = t.memoizedState, s || f !== l || fo ? (typeof d == "function" && (_c(t, n, d, r), l = t.memoizedState), (c = fo || yc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, mo(e, t), o = t.memoizedProps, u = xc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Ai, typeof l == "object" && l && (c = Ca(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && bc(t, a, r, c), fo = !1, f = t.memoizedState, a.state = f, xo(t, r, a, i), bo();
			var p = t.memoizedState;
			o !== d || f !== p || fo || e !== null && e.dependencies !== null && xa(e.dependencies) ? (typeof s == "function" && (_c(t, n, s, r), p = t.memoizedState), (u = fo || yc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && xa(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Uc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = lo(t, e.child, null, i), t.child = lo(t, null, n, i)) : Nc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = cl(e, t, i), e;
	}
	function qc(e, t, n, r) {
		return ua(), t.flags |= 256, Nc(e, t, n, r), t.child;
	}
	var Jc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Yc(e) {
		return {
			baseLanes: e,
			cachePool: Ka()
		};
	}
	function Xc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= ld), e;
	}
	function Zc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(Io.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (H) {
				if (i ? jo(t) : Po(), (e = V) ? (e = am(e, ia), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Yi === null ? null : {
						id: Xi,
						overflow: Zi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = zi(e), n.return = t, t.child = n, B = t, V = null)) : e = null, e === null) throw oa(t);
				return t.lanes = sm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (Po(), i = t.mode, a = $c({
				mode: "hidden",
				children: a
			}, i), r = Li(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Yc(n), r.childLanes = Xc(e, o, n), t.memoizedState = Jc, Rc(null, r)) : (jo(t), Qc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return tl(e, t, a, o, r, c, s, n);
		}
		return i ? (Po(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Pi(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Li(i, a, n, null), i.flags |= 2) : i = Pi(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Rc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Yc(n) : (a = i.cachePool, a === null ? a = Ka() : (s = ka._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Xc(e, o, n), t.memoizedState = Jc, Rc(e.child, r)) : (jo(t), n = e.child, e = n.sibling, n = Pi(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Qc(e, t) {
		return t = $c({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function $c(e, t) {
		return e = Mi(22, e, null, t), e.lanes = 0, e;
	}
	function el(e, t, n) {
		return lo(t, e.child, null, n), e = Qc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function tl(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (jo(t), t.flags &= -257, el(e, t, c)) : t.memoizedState === null ? (Po(), o = a.fallback, s = t.mode, a = $c({
			mode: "visible",
			children: a.children
		}, s), o = Li(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, lo(t, e.child, null, c), a = t.child, a.memoizedState = Yc(c), a.childLanes = Xc(e, r, c), t.memoizedState = Jc, Rc(null, a)) : (Po(), t.child = e.child, t.flags |= 128, null);
		if (jo(t), sm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, fa({
				value: a,
				source: null,
				stack: null
			})), el(e, t, c);
		}
		if (Mc || ba(e, t, c, !1), r = (c & e.childLanes) !== 0, Mc || r) {
			if (wo.current !== null) return el(e, t, c);
			if (r = ed, r !== null && (a = bt(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Di(e, a), Pd(r, e, a), jc;
			return om(o) || Kd(), el(e, t, c);
		}
		return om(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, V = lm(o.nextSibling), B = t, H = !0, ra = null, ia = !1, e !== null && na(t, e), t = Qc(t, a.children), t.flags |= 134221824, t);
	}
	function nl(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), va(e.return, t, n);
	}
	function rl(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && zo(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function il(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function al(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function ol(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = Io.current;
		if (t.flags & 128) return Lo(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Lo(t, o), i === "backwards" && e !== null ? (al(e), Nc(e, t, r, n), al(e)) : Nc(e, t, r, n), r = H ? Ki : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && nl(e, n, t);
			else if (e.tag === 19) nl(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = rl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, al(t)), il(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && zo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				il(t, !0, n, null, a, r);
				break;
			case "together":
				il(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = rl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), il(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function sl(e, t, n) {
		var r = t.pendingProps;
		return ga(t, t.type, r.value), Nc(e, t, r.children, n), t.child;
	}
	function cl(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), sd |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (ba(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = Pi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Pi(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function ll(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && xa(e)));
	}
	function ul(e, t, n) {
		switch (t.tag) {
			case 3:
				Oe(t, t.stateNode.containerInfo), ga(t, ka, e.memoizedState.cache), ua();
				break;
			case 27:
			case 5:
				Ae(t);
				break;
			case 4:
				Oe(t, t.stateNode.containerInfo);
				break;
			case 10:
				ga(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, Mo(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return jo(t), t.flags |= 128, null;
					r = ba(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? Zc(e, t, n) : (jo(t), e = cl(e, t, n), e === null ? null : e.sibling);
				}
				jo(t);
				break;
			case 19:
				if (t.flags & 128) return ol(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (ba(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return ol(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Lo(t, Io.current), r) break;
				return null;
			case 22: return t.lanes = 0, Lc(e, t, n, t.pendingProps);
			case 24: ga(t, ka, e.memoizedState.cache);
		}
		return cl(e, t, n);
	}
	function dl(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Mc = !0;
			else {
				if (!ll(e, n) && !(t.flags & 128)) return Mc = !1, ul(e, t, n);
				Mc = !!(e.flags & 131072);
			}
		} else Mc = !1, H && t.flags & 1048576 && $i(t, Ki, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = $a(t.elementType), t.type = e, typeof e == "function") Ni(e) ? (r = xc(e, r), t.tag = 1, t = Kc(null, t, e, r, n)) : (t.tag = 0, t = Wc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === j) {
								t.tag = 11, t = Pc(null, t, e, r, n);
								break a;
							}
							if (a === se) {
								t.tag = 14, t = Fc(null, t, e, r, n);
								break a;
							}
							if (a === A) {
								t.tag = 10, t.type = e, t = sl(null, t, n);
								break a;
							}
						}
						throw t = _e(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Wc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = xc(r, t.pendingProps), Kc(e, t, r, a, n);
			case 3:
				a: {
					if (Oe(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, mo(e, t), xo(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, ga(t, ka, r), r !== o.cache && ya(t, [ka], n, !0), bo(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = qc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = Hi(Error(i(424)), t), fa(a), t = qc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (V = lm(e.firstChild), B = t, H = !0, ra = null, ia = !0, n = uo(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (ua(), r === a) {
							t = cl(e, t, n);
							break a;
						}
						Nc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Uc(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : H || (t.stateNode = fp(t.type, t.pendingProps, Ee.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return Ae(t), e === null && H && (r = t.stateNode = hm(t.type, t.pendingProps, Ee.current), B = t, ia = !0, a = V, Sp(t.type) ? (um = a, V = lm(r.firstChild)) : V = a), Nc(e, t, t.pendingProps.children, n), Uc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && H && ((a = r = V) && (r = rm(r, t.type, t.pendingProps, ia), r === null ? a = !1 : (t.stateNode = r, B = t, V = lm(r.firstChild), ia = !1, a = !0)), a || oa(t)), Ae(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, pp(a, o) ? r = null : s !== null && pp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Zo(e, t, es, null, null, n), sh._currentValue = a), Uc(e, t), Nc(e, t, r, n), t.child;
			case 6: return e === null && H && ((e = n = V) && (n = im(n, t.pendingProps, ia), n === null ? e = !1 : (t.stateNode = n, B = t, V = null, e = !0)), e || oa(t)), null;
			case 13: return Zc(e, t, n);
			case 4: return Oe(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = lo(t, null, r, n) : Nc(e, t, r, n), t.child;
			case 11: return Pc(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, Uc(e, t), Nc(e, t, r, n), t.child;
			case 8: return Nc(e, t, t.pendingProps.children, n), t.child;
			case 12: return Nc(e, t, t.pendingProps.children, n), t.child;
			case 10: return sl(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, Sa(t), a = Ca(a), r = r(a), t.flags |= 1, Nc(e, t, r, n), t.child;
			case 14: return Fc(e, t, t.type, t.pendingProps, n);
			case 15: return Ic(e, t, t.type, t.pendingProps, n);
			case 19: return ol(e, t, n);
			case 31: return Hc(e, t, n);
			case 22: return Lc(e, t, n, t.pendingProps);
			case 24: return Sa(t), r = Ca(ka), e === null ? (a = Wa(), a === null && (a = ed, o = Aa(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, po(t), ga(t, ka, a)) : ((e.lanes & n) !== 0 && (mo(e, t), xo(t, null, null, n), bo()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, ga(t, ka, r), r !== a.cache && ya(t, [ka], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ga(t, ka, r))), Nc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : H && ea(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Uc(e, t), Nc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function fl(e) {
		e.flags |= 4;
	}
	function pl(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Ud()) e.flags |= 8192;
				else throw eo = Xa, Ja;
			}
		} else e.flags &= -16777217;
	}
	function ml(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Ud()) e.flags |= 8192;
			else throw eo = Xa, Ja;
		}
	}
	function hl(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : mt(), e.lanes |= t, ud |= t);
	}
	function gl(e, t) {
		if (!H) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function _l(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function vl(e, t, n) {
		var r = t.pendingProps;
		switch (ta(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return _l(t), null;
			case 1: return _l(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), _a(ka), ke(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (la(t) ? fl(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, da())), _l(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (fl(t), o === null ? (_l(t), pl(t, a, null, r, n)) : (_l(t), ml(t, o))) : o ? o === e.memoizedState ? (_l(t), t.flags &= -16777217) : (fl(t), _l(t), ml(t, o)) : (e = e.memoizedProps, e !== r && fl(t), _l(t), pl(t, a, e, r, n)), null;
			case 27:
				if (je(t), n = Ee.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && fl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return _l(t), t.subtreeFlags &= -33554433, null;
					}
					e = we.current, la(t) ? sa(t, e) : (e = hm(a, r, n), t.stateNode = e, fl(t));
				}
				return _l(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (je(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && fl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return _l(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = we.current, la(t)) sa(t, o);
					else {
						var s = lp(Ee.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[Et] = t, o[Dt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (np(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && fl(t);
					}
				}
				return _l(t), t.subtreeFlags &= -33554433, pl(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && fl(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = Ee.current, la(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = B, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[Et] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || ep(e.nodeValue, n)), e || oa(t, !0);
					} else e = lp(e).createTextNode(r), e[Et] = t, t.stateNode = e;
				}
				return _l(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = la(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[Et] = t;
						} else ua(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						_l(t), e = !1;
					} else n = da(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Fo(t), t) : (Fo(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return _l(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = la(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[Et] = t;
						} else ua(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						_l(t), a = !1;
					} else a = da(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Fo(t), t) : (Fo(t), null);
				}
				return Fo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), hl(t, t.updateQueue), _l(t), null);
			case 4: return ke(), e === null && Wf(t.stateNode.containerInfo), t.flags |= 67108864, _l(t), null;
			case 10: return _a(t.type), _l(t), null;
			case 19:
				if (Ro(t), r = t.memoizedState, r === null) return _l(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) gl(r, !1);
					else {
						if (od !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = zo(e), o !== null) {
								for (t.flags |= 128, gl(r, !1), e = o.updateQueue, t.updateQueue = e, hl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Fi(n, e), n = n.sibling;
								return Lo(t, Io.current & 1 | 2), H && Qi(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && We() > gd && (t.flags |= 128, a = !0, gl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = zo(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, hl(t, e), gl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !H) return _l(t), null;
						} else 2 * We() - r.renderingStartTime > gd && n !== 536870912 && (t.flags |= 128, a = !0, gl(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = We(), e.sibling = null, o = Io.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || H ? Lo(t, o) : (n = o, P(ko, t), P(Io, n), Ao === null && (Ao = t)), H && Qi(t, r.treeForkCount), e;
				}
				return _l(t), null;
			case 22:
			case 23: return Fo(t), Oo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (_l(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _l(t), n = t.updateQueue, n !== null && hl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && Ce(Ua), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), _a(ka), _l(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, _l(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function yl(e, t) {
		switch (ta(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return _a(ka), ke(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return je(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Fo(t), t.alternate === null) throw Error(i(340));
					ua();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Fo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					ua();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Ro(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return ke(), null;
			case 10: return _a(t.type), null;
			case 22:
			case 23: return Fo(t), Oo(), e !== null && Ce(Ua), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return _a(ka), null;
			case 25: return null;
			default: return null;
		}
	}
	function bl(e, t) {
		switch (ta(t), t.tag) {
			case 3:
				_a(ka), ke();
				break;
			case 26:
			case 27:
			case 5:
				je(t);
				break;
			case 4:
				ke();
				break;
			case 31:
				t.memoizedState !== null && Fo(t);
				break;
			case 13:
				Fo(t);
				break;
			case 19:
				Ro(t);
				break;
			case 10:
				_a(t.type);
				break;
			case 22:
			case 23:
				Fo(t), Oo(), e !== null && Ce(Ua);
				break;
			case 24: _a(ka);
		}
	}
	function xl(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Sl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Z(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Cl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				Co(t, n);
			} catch (t) {
				Z(e, e.return, t);
			}
		}
	}
	function wl(e, t, n) {
		n.props = xc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Z(e, t, n);
		}
	}
	function Tl(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = _i(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Fp(e);
							h(e.child, !1, Qp, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Z(e, t, n);
		}
	}
	function El(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				Z(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				Z(e, t, n);
			}
			else n.current = null;
		}
	}
	function Dl(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
	}
	function Ol(e) {
		for (var t = e.return; t !== null && (jl(t) && em(e.stateNode, t.stateNode), !Al(t));) t = t.return;
	}
	function kl(e) {
		for (var t = e.return; t !== null && (jl(t) && tm(e.stateNode, t.stateNode), !Al(t));) t = t.return;
	}
	function Al(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function jl(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function Ml(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Nl(e, t, n) {
		try {
			var r = e.stateNode;
			ip(r, e.type, n, t), r[Dt] = t;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Pl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
	}
	function Fl(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Pl(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Il(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = vn)), Dl(e, r), L = !0;
		else if (i !== 4 && (i === 27 && (Dl(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Il(e, t, n, r), e = e.sibling; e !== null;) Il(e, t, n, r), e = e.sibling;
	}
	function Ll(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Dl(e, r), L = !0;
		else if (i !== 4 && (i === 27 && (Dl(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Ll(e, t, n, r), e = e.sibling; e !== null;) Ll(e, t, n, r), e = e.sibling;
	}
	function Rl(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			np(t, r, n), t[Et] = e, t[Dt] = n;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	var zl = !1, Bl = null;
	function Vl(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (zl = !0);
	}
	var Hl = null;
	function Ul() {
		var e = Hl;
		return Hl = null, e;
	}
	var Wl = 0;
	function Gl(e, t, n, r, i) {
		return Wl = 0, Kl(e.child, t, n, r, i);
	}
	function Kl(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Op(o);
					r.push(s), s.view && (a = !0);
				} else a || Op(o).view && (a = !0);
				zl = !0, Tp(o, Wl === 0 ? t : t + "_" + Wl, n), Wl++;
			} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Kl(e.child, t, n, r, i) && (a = !0));
			e = e.sibling;
		}
		return a;
	}
	function ql(e, t) {
		for (; e !== null;) e.tag === 5 ? Ep(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || ql(e.child, t)), e = e.sibling;
	}
	function Jl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (Jl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = yi(t.default, t.share), t !== "none" && (Gl(e, n, t, null, !1) || ql(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Yl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = _i(r, n), a = yi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Jl(e) : Gl(e, i, a, null, !1) ? (Jl(e), n.paired || t || Nd(e, r.onEnter)) : ql(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Yl(e, t), e = e.sibling;
		else Jl(e);
	}
	function Xl(e) {
		if (Bl !== null && Bl.size !== 0) {
			var t = Bl;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = yi(n.default, n.share);
								if (a !== "none" && (Gl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Nd(e, n.onShare)) : ql(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Xl(e);
				}
				e = e.sibling;
			}
		}
	}
	function Zl(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = _i(t, e.stateNode), r = Bl === null ? void 0 : Bl.get(n), i = yi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Gl(e, n, i, null, !1) ? r === void 0 ? Nd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Bl.delete(n), Nd(e, t.onShare)) : ql(e.child, !1)), Bl !== null && Xl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Zl(e), e = e.sibling;
		else Bl !== null && Xl(e);
	}
	function Ql(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = _i(t, e.stateNode);
				t = yi(t.default, t.update), e.flags &= -5, t !== "none" && Gl(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && Ql(e);
			e = e.sibling;
		}
	}
	function $l(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, ql(e.child, !1));
				}
				$l(e);
			}
			e = e.sibling;
		}
	}
	function eu(e) {
		if (e.tag === 30) e.stateNode.paired = null, ql(e.child, !1), $l(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) eu(e), e = e.sibling;
		else $l(e);
	}
	function tu(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? ql(e.child, !1) : e.subtreeFlags & 33554432 && tu(e), e = e.sibling;
	}
	function nu(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Wl < a.length) {
					var l = a[Wl], u = Op(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Tp(c, Wl === 0 ? n : n + "_" + Wl, i), s && e.flags & 4 || (Hl === null && (Hl = []), Hl.push(c, Wl === 0 ? r : r + "_" + Wl, t.memoizedProps)), Wl++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : nu(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function ru(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = _i(n, r), a = yi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(kp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Wl = 0, i = nu(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Nd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && ru(e, t);
			e = e.sibling;
		}
	}
	var iu = !1, G = !1, au = !1, ou = !1, su = typeof WeakSet == "function" ? WeakSet : Set, cu = null, lu = !1, uu = !1, du = !1, fu = !1;
	function pu(e, t, n) {
		if (e = e.containerInfo, sp = gh, e = qr(e), Jr(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (cp = {
			focusedElem: e,
			selectionRange: r
		}, gh = !1, n = (n & 335544064) === n, cu = t, t = n ? 9270 : 1024; cu !== null;) {
			if (e = cu, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && Zl(r[a]);
			if (e.alternate === null && e.flags & 2) n && Vl(e), mu(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && Zl(r), mu(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Vl(e), mu(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, cu = r) : (n && Ql(e), mu(n));
			}
		}
		Bl = null;
	}
	function mu(e) {
		for (; cu !== null;) {
			var t = cu, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = xc(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							Z(t, t.return, e);
						}
					}
					break;
				case 3:
					if (a & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) nm(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								nm(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = _i(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = yi(a.default, a.update), a !== "none" && Gl(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, cu = r;
				break;
			}
			cu = t.return;
		}
	}
	function hu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Fu(e, n), r & 4 && xl(5, n);
				break;
			case 1:
				if (Fu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						Z(n, n.return, e);
					}
					else {
						var i = xc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							Z(n, n.return, e);
						}
					}
				}
				r & 64 && Cl(n), r & 512 && Tl(n, n.return);
				break;
			case 3:
				if (Fu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						Co(e, t);
					} catch (e) {
						Z(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Rl(n);
			case 26:
			case 5:
				Fu(e, n), t === null && r & 4 && Ml(n), r & 512 && Tl(n, n.return);
				break;
			case 12:
				Fu(e, n);
				break;
			case 31:
				Fu(e, n), r & 4 && wu(e, n);
				break;
			case 13:
				Fu(e, n), r & 4 && Tu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = _f.bind(null, n), cm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || iu, !r) {
					var a = t !== null && t.memoizedState !== null || G;
					t = iu, i = G, iu = r, (G = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Lu(e, n, r)) : Fu(e, n), iu = t, G = i;
				}
				break;
			case 30:
				Fu(e, n), r & 512 && Tl(n, n.return);
				break;
			case 7: r & 512 && Tl(n, n.return);
			default: Fu(e, n);
		}
	}
	function gu(e, t) {
		for (e = e.child; e !== null;) _u(e, t), e = e.sibling;
	}
	function _u(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					Z(e, e.return, t);
				}
				vu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, L = !0;
				} catch (t) {
					Z(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? wp(s, !0) : wp(e.stateNode, !1);
				} catch (t) {
					Z(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && gu(e, t);
				break;
			default: gu(e, t);
		}
	}
	function vu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						_u(n, r);
						break a;
					case 22:
						n.memoizedState === null && vu(n, r);
						break a;
					default: vu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function yu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, yu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Pt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var bu = null, xu = !1;
	function Su(e, t, n) {
		for (n = n.child; n !== null;) Cu(e, t, n), n = n.sibling;
	}
	function Cu(e, t, n) {
		if (et && typeof et.onCommitFiberUnmount == "function") try {
			et.onCommitFiberUnmount($e, n);
		} catch {}
		switch (n.tag) {
			case 26:
				G || El(n, t), Su(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !G && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				G || El(n, t), kl(n);
				var r = bu, i = xu;
				Sp(n.type) && (bu = n.stateNode, xu = !1), Su(e, t, n), gm(n.stateNode, n.type, n.memoizedProps), bu = r, xu = i;
				break;
			case 5: G || El(n, t), kl(n);
			case 6:
				if (n.tag === 6 && kl(n), r = bu, i = xu, bu = null, Su(e, t, n), bu = r, xu = i, bu !== null) {
					if (xu) try {
						(bu.nodeType === 9 ? bu.body : bu.nodeName === "HTML" ? bu.ownerDocument.body : bu).removeChild(n.stateNode), L = !0;
					} catch (e) {
						Z(n, t, e);
					}
					else try {
						bu.removeChild(n.stateNode), L = !0;
					} catch (e) {
						Z(n, t, e);
					}
				}
				break;
			case 18:
				bu !== null && (xu ? (e = bu, Cp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : Cp(bu, n.stateNode));
				break;
			case 4:
				r = bu, i = xu, bu = n.stateNode.containerInfo, xu = !0, Su(e, t, n), bu = r, xu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Sl(2, n, t), G || Sl(4, n, t), Su(e, t, n);
				break;
			case 1:
				G || (El(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && wl(n, t, r)), Su(e, t, n);
				break;
			case 21:
				Su(e, t, n);
				break;
			case 22:
				G = (r = G) || n.memoizedState !== null, Su(e, t, n), G = r;
				break;
			case 30:
				El(n, t), Su(e, t, n);
				break;
			case 7:
				G || El(n, t), Su(e, t, n);
				break;
			default: Su(e, t, n);
		}
	}
	function wu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				Z(t, t.return, e);
			}
		}
	}
	function Tu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Eu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new su()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new su()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function Du(e, t) {
		var n = Eu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = vf.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Ou(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (Sp(l.type)) {
							bu = l.stateNode, xu = !1;
							break a;
						}
						break;
					case 5:
						bu = l.stateNode, xu = !1;
						break a;
					case 3:
					case 4:
						bu = l.stateNode.containerInfo, xu = !0;
						break a;
				}
				l = l.return;
			}
			if (bu === null) throw Error(i(160));
			Cu(s, c, o), bu = null, xu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Au(t, e, n), t = t.sibling;
	}
	var ku = null;
	function Au(e, t, n) {
		var r = e.alternate, a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
					var s = r[o];
					s.ref.impl = s.nextImpl;
				}
				Ou(t, e, n), ju(e), a & 4 && (Sl(3, e, e.return), xl(3, e), Sl(5, e, e.return));
				break;
			case 1:
				Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), a & 64 && iu && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = ku, Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (iu) e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[Mt] || r[Et] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), np(r, t, n), r[Et] = e, zt(r), t = r;
												break a;
											case "link":
												if (o = Gm("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Gm("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[Et] = e, zt(r), t = r;
									}
									e.stateNode = t;
								}
							} else iu || Km(o, e.type, e.stateNode);
						} else e.stateNode = Bm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && Nl(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || G || t.parentNode.removeChild(t)) : a.count--, n === null ? iu || Km(o, e.type, e.stateNode) : Bm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), r !== null && a & 4 && Nl(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = au, au = !1, Ou(t, e, n), au = o, ju(e), a & 512 && (G || r === null || El(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						dn(t, ""), L = !0;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, Nl(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (ou = !0);
				break;
			case 6:
				if (Ou(t, e, n), ju(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, L = !0;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				break;
			case 3:
				if (L = !1, Wm = null, o = ku, ku = bm(t.containerInfo), Ou(t, e, n), ku = o, ju(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					Z(e, e.return, t);
				}
				ou && (ou = !1, Mu(e)), L = !1;
				break;
			case 4:
				a = au, au = iu, r = Jt(), o = ku, ku = bm(e.stateNode.containerInfo), Ou(t, e, n), ju(e), ku = o, L && uu && (du = !0), L = r, au = a;
				break;
			case 12:
				Ou(t, e, n), ju(e);
				break;
			case 31:
				Ou(t, e, n), ju(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 13:
				Ou(t, e, n), ju(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (md = We()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = iu, l = G, u = au;
				iu = c || o, au = u || o, G = l || s, Ou(t, e, n), G = l, au = u, iu = c, ju(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || iu || G || (t = s || G, n = iu, r = G, iu = o || iu, G = t, Iu(e, 2), iu = n, G = r), !o && au || gu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Du(e, n))));
				break;
			case 19:
				Ou(t, e, n), ju(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 30:
				a & 512 && (G || r === null || El(r, r.return)), a = Jt(), o = uu, s = (n & 335544064) === n, c = e.memoizedProps, uu = s && yi(c.default, c.update) !== "none", Ou(t, e, n), ju(e), s && r !== null && L && (e.flags |= 4), uu = o, L = a;
				break;
			case 21: break;
			case 7: a & 512 && (G || r === null || El(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Ou(t, e, n), ju(e);
		}
	}
	function ju(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Pl(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (jl(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (Al(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Ll(e, Fl(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (dn(l, ""), n.flags &= -33), Ll(e, Fl(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Il(e, Fl(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				Z(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Mu(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			Mu(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = !0, t.reset(), gh = !1), e = e.sibling;
		}
	}
	function Nu(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Pu(t, e), t = t.sibling;
		else ru(t, !1);
	}
	function Pu(e, t) {
		var n = e.alternate;
		if (n === null) Yl(e, !1);
		else switch (e.tag) {
			case 3:
				if (fu = lu = !1, Ul(), Nu(t, e), !lu && !du) {
					if (e = Hl, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Ep(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), fu = !0;
				}
				Hl = null;
				break;
			case 5:
				Nu(t, e);
				break;
			case 4:
				r = lu, lu = !1, Nu(t, e), lu && (du = !0), lu = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Nu(t, e) : Yl(e, !1));
				break;
			case 30:
				r = lu, i = Ul(), lu = !1, Nu(t, e), lu && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = _i(a, o), o = _i(n.memoizedProps, o);
				var s = yi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Wl = 0, t = nu(e, n, t, o, s, a, !0), Wl !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Nd(e, e.memoizedProps.onUpdate), Hl = i) : i !== null && (i.push.apply(i, Hl), Hl = i), lu = e.flags & 32 ? !0 : r;
				break;
			default: Nu(t, e);
		}
	}
	function Fu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) hu(e, t.alternate, t), t = t.sibling;
	}
	function Iu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Sl(4, n, n.return), Iu(n, r);
					break;
				case 1:
					El(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && wl(n, n.return, i), Iu(n, r);
					break;
				case 27: r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					El(n, n.return), n.tag !== 5 && n.tag !== 27 || kl(n), Iu(n, r);
					break;
				case 6:
					kl(n);
					break;
				case 26:
					El(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || G || i.parentNode.removeChild(i), Iu(n, r);
					break;
				case 22:
					n.memoizedState === null && Iu(n, r);
					break;
				case 30:
					El(n, n.return), Iu(n, r);
					break;
				case 7: El(n, n.return);
				default: Iu(n, r);
			}
			e = e.sibling;
		}
	}
	function Lu(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Lu(i, a, n), xl(4, a);
					break;
				case 1:
					if (Lu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Z(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) So(l[i], c);
						} catch (e) {
							Z(r, r.return, e);
						}
					}
					s && o & 64 && Cl(a), Tl(a, a.return);
					break;
				case 27: n & 2 && Rl(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || Ol(a), Lu(i, a, n), s && r === null && o & 4 && Ml(a), Tl(a, a.return);
					break;
				case 6:
					Ol(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || iu || Km(bm(c.ownerDocument), a.type, c), Lu(i, a, n), s && r === null && o & 4 && Ml(a), Tl(a, a.return);
					break;
				case 12:
					Lu(i, a, n);
					break;
				case 31:
					Lu(i, a, n), s && o & 4 && wu(i, a);
					break;
				case 13:
					Lu(i, a, n), s && o & 4 && Tu(i, a);
					break;
				case 22:
					a.memoizedState === null && Lu(i, a, n), Tl(a, a.return);
					break;
				case 30:
					Lu(i, a, n), Tl(a, a.return);
					break;
				case 7: Tl(a, a.return);
				default: Lu(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Ru(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && ja(n));
	}
	function zu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ja(e));
	}
	function Bu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Vu(e, t, n, r), t = t.sibling;
		else i && tu(t);
	}
	function Vu(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && eu(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Bu(e, t, n, r), a & 2048 && xl(9, t);
				break;
			case 1:
				Bu(e, t, n, r);
				break;
			case 3:
				Bu(e, t, n, r), i && fu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && ja(a)));
				break;
			case 12:
				if (a & 2048) {
					Bu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						Z(t, t.return, e);
					}
				} else Bu(e, t, n, r);
				break;
			case 31:
				Bu(e, t, n, r);
				break;
			case 13:
				Bu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && eu(t), o._visibility & 2 ? Bu(e, t, n, r) : (o._visibility |= 2, Hu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && eu(s), o._visibility & 2 ? Bu(e, t, n, r) : Uu(e, t)), a & 2048 && Ru(s, t);
				break;
			case 24:
				Bu(e, t, n, r), a & 2048 && zu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (ql(a.child, !0), ql(t.child, !0))), Bu(e, t, n, r);
				break;
			default: Bu(e, t, n, r);
		}
	}
	function Hu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Hu(a, o, s, c, i), xl(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Hu(a, o, s, c, i)) : u._visibility & 2 ? Hu(a, o, s, c, i) : Uu(a, o), i && l & 2048 && Ru(o.alternate, o);
					break;
				case 24:
					Hu(a, o, s, c, i), i && l & 2048 && zu(o.alternate, o);
					break;
				default: Hu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Uu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Uu(n, r), i & 2048 && Ru(r.alternate, r);
					break;
				case 24:
					Uu(n, r), i & 2048 && zu(r.alternate, r);
					break;
				default: Uu(n, r);
			}
			t = t.sibling;
		}
	}
	var Wu = 8192;
	function Gu(e, t, n) {
		if (e.subtreeFlags & Wu) for (e = e.child; e !== null;) Ku(e, t, n), e = e.sibling;
	}
	function Ku(e, t, n) {
		switch (e.tag) {
			case 26:
				Gu(e, t, n), e.flags & Wu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, ku, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Gu(e, t, n), e.flags & Wu && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
				break;
			case 3:
			case 4:
				var r = ku;
				ku = bm(e.stateNode.containerInfo), Gu(e, t, n), ku = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Wu, Wu = 16777216, Gu(e, t, n), Wu = r) : Gu(e, t, n));
				break;
			case 30:
				if ((e.flags & Wu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, Bl === null && (Bl = /* @__PURE__ */ new Map()), Bl.set(r, i);
				}
				Gu(e, t, n);
				break;
			default: Gu(e, t, n);
		}
	}
	function qu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Ju(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				cu = r, Zu(r, e);
			}
			qu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Yu(e), e = e.sibling;
	}
	function Yu(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Ju(e), e.flags & 2048 && Sl(9, e, e.return);
				break;
			case 3:
				Ju(e);
				break;
			case 12:
				Ju(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Xu(e)) : Ju(e);
				break;
			default: Ju(e);
		}
	}
	function Xu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				cu = r, Zu(r, e);
			}
			qu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					Sl(8, t, t.return), Xu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Xu(t));
					break;
				default: Xu(t);
			}
			e = e.sibling;
		}
	}
	function Zu(e, t) {
		for (; cu !== null;) {
			var n = cu;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Sl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: ja(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, cu = r;
			else a: for (n = e; cu !== null;) {
				r = cu;
				var i = r.sibling, a = r.return;
				if (yu(r), r === n) {
					cu = null;
					break a;
				}
				if (i !== null) {
					i.return = a, cu = i;
					break a;
				}
				cu = a;
			}
		}
	}
	var Qu = {
		getCacheForType: function(e) {
			var t = Ca(ka), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Ca(ka).controller.signal;
		}
	}, $u = typeof WeakMap == "function" ? WeakMap : Map, K = 0, ed = null, q = null, J = 0, Y = 0, td = null, nd = !1, rd = !1, id = !1, ad = 0, od = 0, sd = 0, X = 0, cd = 0, ld = 0, ud = 0, dd = null, fd = null, pd = !1, md = 0, hd = 0, gd = Infinity, _d = null, vd = null, yd = 0, bd = null, xd = null, Sd = 0, Cd = 0, wd = null, Td = null, Ed = null, Dd = null, Od = null, kd = 0, Ad = null;
	function jd() {
		return K & 2 && J !== 0 ? J & -J : M.T === null ? Ct() : Pf();
	}
	function Md() {
		if (ld === 0) {
			if (!(J & 536870912) || H) {
				var e = st;
				st <<= 1, !(st & 3932160) && (st = 262144), ld = e;
			} else ld = 536870912;
		}
		return e = ko.current, e !== null && (e.flags |= 32), ld;
	}
	function Nd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Pp(_i(e.memoizedProps, n))), Dd === null && (Dd = []), Dd.push(t.bind(null, r));
		}
	}
	function Pd(e, t, n) {
		(e === ed && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) && (Vd(e, 0), Rd(e, J, ld, !1)), gt(e, n), (!(K & 2) || e !== ed) && (e === ed && (!(K & 2) && (X |= n), od === 4 && Rd(e, J, ld, !1)), Ef(e));
	}
	function Fd(e, t, n) {
		if (K & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || dt(e, t), a = r ? Yd(e, t) : qd(e, t, !0), o = r;
		do {
			if (a === 0) {
				rd && !r && Rd(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Ld(n)) {
				a = qd(e, t, !1), o = !1;
				continue;
			}
			if (a === 2) {
				if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
				else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
				if (s !== 0) {
					t = s;
					a: {
						var c = e;
						a = dd;
						var l = c.current.memoizedState.isDehydrated;
						if (l && (Vd(c, s).flags |= 256), s = qd(c, s, !1), s !== 2 && s !== 6) {
							if (id && !l) {
								c.errorRecoveryDisabledLanes |= o, X |= o, a = 4;
								break a;
							}
							o = fd, fd = a, o !== null && (fd === null ? fd = o : fd.push.apply(fd, o));
						}
						a = s;
					}
					if (o = !1, a !== 2) continue;
				}
			}
			if (a === 1) {
				Vd(e, 0), Rd(e, t, 0, !0);
				break;
			}
			a: {
				switch (r = e, o = a, o) {
					case 0:
					case 1: throw Error(i(345));
					case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
					case 6:
						Rd(r, t, ld, !nd);
						break a;
					case 2:
						fd = null;
						break;
					case 3:
					case 5: break;
					default: throw Error(i(329));
				}
				if ((t & 62914560) === t && (a = md + 300 - We(), 10 < a)) {
					if (Rd(r, t, ld, !nd), ut(r, 0, !0) !== 0) break a;
					Sd = t, r.timeoutHandle = gp(Id.bind(null, r, n, fd, _d, pd, t, ld, X, ud, nd, o, "Throttled", -0, 0), a);
					break a;
				}
				Id(r, n, fd, _d, pd, t, ld, X, ud, nd, o, null, -0, 0);
			}
			break;
		} while (1);
		Ef(e);
	}
	function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		if (d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: vn
		}, Bl = null, Ku(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? md - We() : (a & 4194048) === a ? hd - We() : 0, m = eh(d, m), m !== null)) {
			Sd = a, e.cancelPendingCommit = m(nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Rd(e, a, o, !l);
			return;
		}
		nf(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Ld(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Vr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Rd(e, t, n, r) {
		t = ft(e, t), t &= ~cd, t &= ~X, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - nt(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && vt(e, n, t);
	}
	function zd() {
		return K & 6 ? !0 : (Df(0, !1), !1);
	}
	function Bd() {
		if (q !== null) {
			if (Y === 0) var e = q.return;
			else e = q, ha = ma = null, rs(e), ro = null, io = 0, e = q;
			for (; e !== null;) bl(e.alternate, e), e = e.return;
			q = null;
		}
	}
	function Vd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, _p(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Sd = 0, Bd(), ed = e, q = n = Pi(e.current, null), J = t, Y = 0, td = null, nd = !1, rd = dt(e, t), id = !1, ud = ld = cd = X = sd = od = 0, fd = dd = null, pd = !1, ad = ft(e, t), wi(), n;
	}
	function Hd(e, t) {
		U = null, M.H = pc, t === qa || t === Ya ? (t = to(), Y = 3) : t === Ja ? (t = to(), Y = 4) : Y = t === jc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, td = t, q === null && (od = 1, Tc(e, Hi(t, e.current)));
	}
	function Ud() {
		var e = ko.current;
		return e === null ? !0 : (J & 4194048) === J ? Ao === null : (J & 62914560) === J || J & 536870912 ? e === Ao : !1;
	}
	function Wd() {
		var e = M.H;
		return M.H = pc, e === null ? pc : e;
	}
	function Gd() {
		var e = M.A;
		return M.A = Qu, e;
	}
	function Kd() {
		od = 4, nd || (J & 4194048) !== J && ko.current !== null || (rd = !0), !(sd & 134217727) && !(X & 134217727) || ed === null || Rd(ed, J, ld, !1);
	}
	function qd(e, t, n) {
		var r = K;
		K |= 2;
		var i = Wd(), a = Gd();
		(ed !== e || J !== t) && (_d = null, Vd(e, t)), t = !1;
		var o = od;
		a: do
			try {
				if (Y !== 0 && q !== null) {
					var s = q, c = td;
					switch (Y) {
						case 8:
							Bd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							ko.current === null && (t = !0);
							var l = Y;
							if (Y = 0, td = null, $d(e, s, c, l), n && rd) {
								o = 0;
								break a;
							}
							break;
						default: l = Y, Y = 0, td = null, $d(e, s, c, l);
					}
				}
				Jd(), o = od;
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, ha = ma = null, K = r, M.H = i, M.A = a, q === null && (ed = null, J = 0, wi()), o;
	}
	function Jd() {
		for (; q !== null;) Zd(q);
	}
	function Yd(e, t) {
		var n = K;
		K |= 2;
		var r = Wd(), a = Gd();
		ed !== e || J !== t ? (_d = null, gd = We() + 500, Vd(e, t)) : rd = dt(e, t);
		a: do
			try {
				if (Y !== 0 && q !== null) {
					t = q;
					var o = td;
					b: switch (Y) {
						case 1:
							Y = 0, td = null, $d(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (Za(o)) {
								Y = 0, td = null, Qd(t);
								break;
							}
							t = function() {
								Y !== 2 && Y !== 9 || ed !== e || (Y = 7), Ef(e);
							}, o.then(t, t);
							break a;
						case 3:
							Y = 7;
							break a;
						case 4:
							Y = 5;
							break a;
						case 7:
							Za(o) ? (Y = 0, td = null, Qd(t)) : (Y = 0, td = null, $d(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (q.tag) {
								case 26: s = q.memoizedState;
								case 5:
								case 27:
									var c = q;
									if (s ? Ym(s) : c.stateNode.complete) {
										Y = 0, td = null;
										var l = c.sibling;
										if (l !== null) q = l;
										else {
											var u = c.return;
											u === null ? q = null : (q = u, ef(u));
										}
										break b;
									}
							}
							Y = 0, td = null, $d(e, t, o, 5);
							break;
						case 6:
							Y = 0, td = null, $d(e, t, o, 6);
							break;
						case 8:
							Bd(), od = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Xd();
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return ha = ma = null, M.H = r, M.A = a, K = n, q === null ? (ed = null, J = 0, wi(), od) : 0;
	}
	function Xd() {
		for (; q !== null && !He();) Zd(q);
	}
	function Zd(e) {
		var t = dl(e.alternate, e, ad);
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : q = t;
	}
	function Qd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Gc(n, t, t.pendingProps, t.type, void 0, J);
				break;
			case 11:
				t = Gc(n, t, t.pendingProps, t.type.render, t.ref, J);
				break;
			case 5:
				rs(t);
				var r = t;
				r === B && (H ? (ca(r), r.tag === 5 && r.stateNode != null && (V = r.stateNode)) : (ca(r), H = !0));
			default: bl(n, t), t = q = Fi(t, ad), t = dl(n, t, ad);
		}
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : q = t;
	}
	function $d(e, t, n, r) {
		ha = ma = null, rs(t), ro = null, io = 0;
		var i = t.return;
		try {
			if (Ac(e, i, t, n, J)) {
				od = 1, Tc(e, Hi(n, e.current)), q = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw q = i, t;
			od = 1, Tc(e, Hi(n, e.current)), q = null;
			return;
		}
		t.flags & 32768 ? (H || r === 1 ? e = !0 : rd || J & 536870912 ? e = !1 : (nd = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = ko.current, r !== null && r.tag === 13 && (r.flags |= 16384))), tf(t, e)) : ef(t);
	}
	function ef(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				tf(t, nd);
				return;
			}
			e = t.return;
			var n = vl(t.alternate, t, ad);
			if (n !== null) {
				q = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				q = t;
				return;
			}
			q = t = e;
		} while (t !== null);
		od === 0 && (od = 5);
	}
	function tf(e, t) {
		do {
			var n = yl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, q = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				q = e;
				return;
			}
			q = e = n;
		} while (e !== null);
		od = 6, q = null;
	}
	function nf(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			df();
		while (yd !== 0);
		if (K & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === ed && (q = ed = null, J = 0), xd = t, bd = e, Sd = n, wd = a, Td = r, rf(e, t, n, s, c, l, f);
		}
	}
	function rf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (Cd = s, s |= Ci, _t(e, n, s, r, i, a), Dd = null, (n & 335544064) === n ? (Od = Pa(e), r = 10262) : (Od = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, yf(Je, function() {
			return ff(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), zl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = M.T, M.T = null, i = N.p, N.p = 2, a = K, K |= 4;
			try {
				pu(e, t, n);
			} finally {
				K = a, N.p = i, M.T = r;
			}
		}
		yd = 1, zl ? Ed = Mp(o, e.containerInfo, Od, sf, cf, of, lf, ff, af, null, null) : (sf(), cf(), lf());
	}
	function af(e) {
		if (yd !== 0) {
			var t = bd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function of() {
		yd === 3 && (yd = 0, Pu(xd, bd), yd = 4);
	}
	function sf() {
		if (yd === 1) {
			yd = 0;
			var e = bd, t = xd, n = Sd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = M.T, M.T = null;
				var i = N.p;
				N.p = 2;
				var a = K;
				K |= 4;
				try {
					uu = du = !1, Au(t, e, n), n = cp;
					var o = qr(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && Kr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Jr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Gr(s, h), v = Gr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					gh = !!sp, cp = sp = null;
				} finally {
					K = a, N.p = i, M.T = r;
				}
			}
			e.current = t, yd = 2;
		}
	}
	function cf() {
		if (yd === 2) {
			yd = 0;
			var e = bd, t = xd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = M.T, M.T = null;
				var r = N.p;
				N.p = 2;
				var i = K;
				K |= 4;
				try {
					hu(e, t.alternate, t);
				} finally {
					K = i, N.p = r, M.T = n;
				}
			}
			yd = 3;
		}
	}
	function lf() {
		if (yd === 4 || yd === 3) {
			yd = 0;
			var e = Ed;
			Ed = null, Ue();
			var t = bd, n = xd, r = Sd, i = Td, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? yd = 5 : (yd = 0, xd = bd = null, uf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (vd = null), St(r), n = n.stateNode, et && typeof et.onCommitFiberRoot == "function") try {
				et.onCommitFiberRoot($e, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = M.T, a = N.p, N.p = 2, M.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					M.T = n, N.p = a;
				}
			}
			if (i = Dd, o = Od, Od = null, i !== null && (Dd = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			Sd & 3 && df(), Ef(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Ad ? kd++ : (kd = 0, Ad = t) : (kd = 0, Ad = null), Df(0, !1);
		}
	}
	function uf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ja(t)));
	}
	function df() {
		return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
	}
	function ff() {
		if (yd !== 5) return !1;
		var e = bd, t = Cd;
		Cd = 0;
		var n = St(Sd), r = M.T, a = N.p;
		try {
			N.p = 32 > n ? 32 : n, M.T = null, n = wd, wd = null;
			var o = bd, s = Sd;
			if (yd = 0, xd = bd = null, Sd = 0, K & 6) throw Error(i(331));
			var c = K;
			if (K |= 4, Yu(o.current), Vu(o, o.current, s, n), K = c, Df(0, !1), et && typeof et.onPostCommitFiberRoot == "function") try {
				et.onPostCommitFiberRoot($e, o);
			} catch {}
			return !0;
		} finally {
			N.p = a, M.T = r, uf(e, t);
		}
	}
	function pf(e, t, n) {
		t = Hi(n, t), t = Dc(e.stateNode, t, 2), e = go(e, t, 2), e !== null && (gt(e, 2), Ef(e));
	}
	function Z(e, t, n) {
		if (e.tag === 3) pf(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				pf(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vd === null || !vd.has(r))) {
					e = Hi(n, e), n = Oc(2), r = go(t, n, 2), r !== null && (kc(n, r, t, e), gt(r, 2), Ef(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function mf(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new $u();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (id = !0, i.add(n), e = hf.bind(null, e, t, n), t.then(e, e));
	}
	function hf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ed === e && (J & n) === n && (od === 4 || od === 3 && (J & 62914560) === J && 300 > We() - md ? K & 2 ? cd |= n : Vd(e, 0) : cd |= n, ud === J && (ud = 0)), Ef(e);
	}
	function gf(e, t) {
		t === 0 && (t = mt()), e = Di(e, t), e !== null && (gt(e, t), Ef(e));
	}
	function _f(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), gf(e, n);
	}
	function vf(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), gf(e, n);
	}
	function yf(e, t) {
		return Be(e, t);
	}
	var bf = null, xf = null, Sf = !1, Cf = !1, wf = !1, Tf = 0;
	function Ef(e) {
		e !== xf && e.next === null && (xf === null ? bf = xf = e : xf = xf.next = e), Cf = !0, Sf || (Sf = !0, Nf());
	}
	function Df(e, t) {
		if (!wf && Cf) {
			wf = !0;
			do
				for (var n = !1, r = bf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - nt(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Mf(r, a));
						} else a = J, a = ut(r, r === ed ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || dt(r, a) || (n = !0, Mf(r, a));
					}
					r = r.next;
				}
			while (n);
			wf = !1;
		}
	}
	function Of() {
		kf();
	}
	function kf() {
		Cf = Sf = !1;
		var e = 0;
		Tf !== 0 && hp() && (e = Tf);
		for (var t = We(), n = null, r = bf; r !== null;) {
			var i = r.next, a = Af(r, t);
			a === 0 ? (r.next = null, n === null ? bf = i : n.next = i, i === null && (xf = n)) : (n = r, (e !== 0 || a & 3) && (Cf = !0)), r = i;
		}
		yd !== 0 && yd !== 5 || Df(e, !1), Tf !== 0 && (Tf = 0);
	}
	function Af(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - nt(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = pt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = ed, n = J, n = ut(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ve(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || dt(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Ve(r), St(n)) {
				case 2:
				case 8:
					n = qe;
					break;
				case 32:
					n = Je;
					break;
				case 268435456:
					n = Xe;
					break;
				default: n = Je;
			}
			return r = jf.bind(null, e), n = Be(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Ve(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function jf(e, t) {
		if (yd !== 0 && yd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (df() && e.callbackNode !== n) return null;
		var r = J;
		return r = ut(e, e === ed ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Fd(e, r, t), Af(e, We()), e.callbackNode != null && e.callbackNode === n ? jf.bind(null, e) : null);
	}
	function Mf(e, t) {
		if (df()) return null;
		Fd(e, t, !0);
	}
	function Nf() {
		bp(function() {
			K & 6 ? Be(Ke, Of) : kf();
		});
	}
	function Pf() {
		if (Tf === 0) {
			var e = La;
			e === 0 && (e = ot, ot <<= 1, !(ot & 261888) && (ot = 256)), Tf = e;
		}
		return Tf;
	}
	function Ff(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _n(e);
	}
	function If(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Ff((i[Dt] || null).action), o = r.submitter;
			o && (t = (t = o[Dt] || null) ? Ff(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new zn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Tf !== 0) {
								var e = new FormData(i, o);
								$s(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), $s(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var Lf = 0; Lf < mi.length; Lf++) {
		var Rf = mi[Lf];
		hi(Rf.toLowerCase(), "on" + (Rf[0].toUpperCase() + Rf.slice(1)));
	}
	hi(oi, "onAnimationEnd"), hi(si, "onAnimationIteration"), hi(ci, "onAnimationStart"), hi("dblclick", "onDoubleClick"), hi("focusin", "onFocus"), hi("focusout", "onBlur"), hi(li, "onTransitionRun"), hi(ui, "onTransitionStart"), hi(di, "onTransitionCancel"), hi(fi, "onTransitionEnd"), Ut("onMouseEnter", ["mouseout", "mouseover"]), Ut("onMouseLeave", ["mouseout", "mouseover"]), Ut("onPointerEnter", ["pointerout", "pointerover"]), Ut("onPointerLeave", ["pointerout", "pointerover"]), I("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), I("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), I("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), I("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), I("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), I("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var zf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zf));
	function Vf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						bi(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						bi(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Q(e, t) {
		var n = t[kt];
		n === void 0 && (n = t[kt] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Gf(t, e, 2, !1), n.add(r));
	}
	function Hf(e, t, n) {
		var r = 0;
		t && (r |= 4), Gf(n, e, r, t);
	}
	var Uf = "_reactListening" + Math.random().toString(36).slice(2);
	function Wf(e) {
		if (!e[Uf]) {
			e[Uf] = !0, Vt.forEach(function(t) {
				t !== "selectionchange" && (Bf.has(t) || Hf(t, !1, e), Hf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Uf] || (t[Uf] = !0, Hf("selectionchange", !1, t));
		}
	}
	function Gf(e, t, n, r) {
		switch (Ch(t)) {
			case 2:
				var i = _h;
				break;
			case 8:
				i = vh;
				break;
			default: i = yh;
		}
		n = i.bind(null, t, n, e), i = void 0, !On || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Kf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = Ft(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		Tn(function() {
			var r = a, i = bn(n), s = [];
			a: {
				var c = pi.get(e);
				if (c !== void 0) {
					var l = zn, u = e;
					switch (e) {
						case "keypress": if (Pn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = rr;
							break;
						case "focusin":
							u = "focus", l = Jn;
							break;
						case "focusout":
							u = "blur", l = Jn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Jn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = Kn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = qn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = or;
							break;
						case oi:
						case si:
						case ci:
							l = Yn;
							break;
						case fi:
							l = sr;
							break;
						case "scroll":
						case "scrollend":
							l = Vn;
							break;
						case "wheel":
							l = cr;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Xn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = ir;
							break;
						case "submit":
							l = ar;
							break;
						case "toggle":
						case "beforetoggle": l = lr;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = En(m, p), g != null && d.push(qf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== yn && (u = n.relatedTarget || n.fromElement) && (Ft(u) || u[Ot])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Ft(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Kn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = ir, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : Lt(c), h = l == null ? u : Lt(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, Ft(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? ee(c, l, Yf) : null, c !== null && Xf(s, u, c, d, !1), l !== null && f !== null && Xf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? Lt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = kr;
					else if (Cr(c)) {
						if (Ar) _ = zr;
						else {
							_ = Lr;
							var v = Ir;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && hn(r.elementType) && (_ = kr) : _ = Rr;
					if (_ &&= _(e, r)) {
						wr(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? Lt(r) : window, e) {
					case "focusin":
						(Cr(v) || v.contentEditable === "true") && (Xr = v, Zr = r, Qr = null);
						break;
					case "focusout":
						Qr = Zr = Xr = null;
						break;
					case "mousedown":
						$r = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						$r = !1, ei(s, n, i);
						break;
					case "selectionchange": if (Yr) break;
					case "keydown":
					case "keyup": ei(s, n, i);
				}
				var y;
				if (dr) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else yr ? _r(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (mr && n.locale !== "ko" && (yr || b !== "onCompositionStart" ? b === "onCompositionEnd" && yr && (y = Nn()) : (An = i, jn = "value" in An ? An.value : An.textContent, yr = !0)), v = Jf(r, b), 0 < v.length && (b = new Zn(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = vr(n), y !== null && (b.data = y)))), (y = pr ? br(e, n) : xr(e, n)) && (b = Jf(r, "onBeforeInput"), 0 < b.length && (v = new Zn("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), If(s, e, r, n, i);
			}
			Vf(s, t);
		});
	}
	function qf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Jf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = En(e, n), i != null && r.unshift(qf(e, i, a)), i = En(e, t), i != null && r.push(qf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Yf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Xf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = En(n, a), l != null && o.unshift(qf(n, l, c))) : i || (l = En(n, a), l != null && o.push(qf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Zf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
	function $f(e) {
		return (typeof e == "string" ? e : "" + e).replace(Zf, "\n").replace(Qf, "");
	}
	function ep(e, t) {
		return t = $f(t), $f(e) === t;
	}
	function $(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || dn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && dn(e, "" + r);
				else return;
				break;
			case "className":
				Yt(e, "class", r);
				break;
			case "tabIndex":
				Yt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Yt(e, n, r);
				break;
			case "style":
				mn(e, r, o);
				return;
			case "data": if (t !== "object") {
				Yt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = _n(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && $(e, t, "name", a.name, a, null), $(e, t, "formEncType", a.formEncType, a, null), $(e, t, "formMethod", a.formMethod, a, null), $(e, t, "formTarget", a.formTarget, a, null)) : ($(e, t, "encType", a.encType, a, null), $(e, t, "method", a.method, a, null), $(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = _n(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = vn);
				return;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = _n(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Q("beforetoggle", e), Q("toggle", e), R(e, "popover", r);
				break;
			case "xlinkActuate":
				Xt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Xt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Xt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Xt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Xt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Xt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Xt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Xt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Xt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				R(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = z.get(n) || n, R(e, n, r);
			else return;
		}
		L = !0;
	}
	function tp(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				mn(e, r, o);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") dn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") dn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = vn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Ht.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[Dt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					L = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : R(e, n, r);
				}
				return;
		}
		L = !0;
	}
	function np(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Q("error", e), Q("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: $(e, t, o, s, n, null);
					}
				}
				a && $(e, t, "srcSet", n.srcSet, n, null), r && $(e, t, "src", n.src, n, null);
				return;
			case "input":
				Q("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: $(e, t, r, d, n, null);
					}
				}
				on(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in Q("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: $(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && cn(e, !!r, n, !0) : cn(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Q("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: $(e, t, s, c, n, null);
				}
				un(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: $(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Q("beforetoggle", e), Q("toggle", e), Q("cancel", e), Q("close", e);
				break;
			case "iframe":
			case "object":
				Q("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < zf.length; r++) Q(zf[r], e);
				break;
			case "image":
				Q("error", e), Q("load", e);
				break;
			case "details":
				Q("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Q("error", e), Q("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: $(e, t, u, r, n, null);
				}
				return;
			default: if (hn(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && tp(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && $(e, t, c, r, n, null));
	}
	var rp = {};
	function ip(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || $(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (L = !0), o = m;
							break;
						case "name":
							m !== f && (L = !0), a = m;
							break;
						case "checked":
							m !== f && (L = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (L = !0), d = m;
							break;
						case "value":
							m !== f && (L = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (L = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && $(e, t, p, m, r, f);
					}
				}
				an(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || $(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (L = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (L = !0), c = o;
						break;
					case "multiple": o !== l && (L = !0), s = o;
					default: o !== l && $(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? cn(e, !!n, n ? [] : "", !1) : cn(e, !!n, t, !0)) : cn(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: $(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (L = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (L = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && $(e, t, s, a, r, o);
				}
				ln(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: $(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (L = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: $(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: $(e, t, u, p, r, m);
				}
				return;
			default: if (hn(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && tp(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || tp(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m);
	}
	function ap(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function op() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && ap(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && ap(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var sp = null, cp = null;
	function lp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function up(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function dp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function fp(e, t, n, r) {
		return n = lp(n).createElement(e), n[Et] = r, n[Dt] = t, np(n, e, t), zt(n), n;
	}
	function pp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var mp = null;
	function hp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== mp && (mp = e, !0) : (mp = null, !1);
	}
	var gp = typeof setTimeout == "function" ? setTimeout : void 0, _p = typeof clearTimeout == "function" ? clearTimeout : void 0, vp = typeof Promise == "function" ? Promise : void 0, yp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : gp, bp = typeof queueMicrotask == "function" ? queueMicrotask : vp === void 0 ? gp : function(e) {
		return vp.resolve(null).then(e).catch(xp);
	};
	function xp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Sp(e) {
		return e === "head";
	}
	function Cp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Hh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") _m(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, _m(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[Mt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && _m(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function wp(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Tp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Ep(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Dp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Op(e) {
		return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function kp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Dp(t, n, e);
	}
	function Ap(e) {
		return e.documentElement.clientHeight;
	}
	function jp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Mp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Ap(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Xm(f), u > $m) {
									s.length = o;
									break;
								}
								f = new Promise(jp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Np(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Np.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : E({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Np.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Np.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Pp(e) {
		return {
			name: e,
			group: new Np("group", e),
			imagePair: new Np("image-pair", e),
			old: new Np("old", e),
			new: new Np("new", e)
		};
	}
	function Fp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Fp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Bp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Rp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), h(this._fragmentFiber.child, !1, Ip, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Ip(e, t, n, r) {
		return b(e).addEventListener(t, n, r), !1;
	}
	Fp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Rp(i.optionsOrUseCapture), h(this._fragmentFiber.child, !1, Lp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Lp(e, t, n, r) {
		return b(e).removeEventListener(t, n, r), !1;
	}
	function Rp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function zp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Bp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = zp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Fp.prototype.dispatchEvent = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return !0;
		t = b(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Fp.prototype.focus = function(e) {
		h(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
	};
	function Vp(e, t) {
		return e.tag !== 6 && (e = b(e), pm(e, t));
	}
	Fp.prototype.focusLast = function(e) {
		var t = [];
		h(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
	};
	function Hp(e, t) {
		return t.push(e), !1;
	}
	Fp.prototype.blur = function() {
		var e = g(this._fragmentFiber);
		e !== null && (e = b(e), e = lp(e).activeElement, e !== null && h(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
	};
	function Up(e, t) {
		return e.tag !== 6 && (e = b(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Fp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), h(this._fragmentFiber.child, !1, Wp, e, void 0, void 0);
	};
	function Wp(e, t) {
		return e.tag !== 6 && (e = b(e), t.observe(e), !1);
	}
	Fp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), h(this._fragmentFiber.child, !1, Gp, e, void 0, void 0);
			for (var n = t = 0; n < Kp.length; n++) {
				var r = Kp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Kp[t++] = r;
			}
			Kp.length = t;
		}
	};
	function Gp(e, t) {
		return e.tag !== 6 && (e = b(e), t.unobserve(e), !1);
	}
	var Kp = [], qp = !1;
	function Jp(e, t, n) {
		Kp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), qp || (qp = !0, mm(function() {
			qp = !1;
			var e = Kp;
			Kp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Fp.prototype.getClientRects = function() {
		var e = [];
		return h(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e;
	};
	function Yp(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = b(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Fp.prototype.getRootNode = function(e) {
		var t = g(this._fragmentFiber);
		return t === null ? this : b(t).getRootNode(e);
	}, Fp.prototype.compareDocumentPosition = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		h(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
		var r = b(t);
		if (n.length === 0) {
			if (n = r, _(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = v(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = b(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = b(n[0]), i = b(n[n.length - 1]);
		var a = _(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function Xp(e, t, n, r, i) {
		var a = Ft(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = g(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = ee(n, a, T), t === null ? t = !1 : (h(t, !0, C, a, n), a = x, x = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = ee(r, a, T), t === null ? t = !1 : (h(t, !0, w, a, r), a = x, S = x = null, t = a !== null)), t) : !1;
	}
	function Zp(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Fp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(i(566));
		var t = [];
		h(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = v(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = b(r), Zp(e, n);
				return;
			}
			if (r = b(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var a = t[r];
			a.tag === 6 ? (a = b(a), Zp(a, n)) : b(a).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function Qp(e, t) {
		return e = b(e), $p(e, t), !1;
	}
	function $p(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function em(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < Kp.length; i++) {
				var a = Kp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Kp[r++] = a);
			}
			Kp.length = r, n.observe(e);
		}), $p(e, t));
	}
	function tm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Jp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function nm(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					nm(n), Pt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function rm(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[Mt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lm(e.nextSibling), e === null) break;
		}
		return null;
	}
	function im(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function am(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function om(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lm(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var um = null;
	function dm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lm(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function fm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pm(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function mm(e) {
		yp(function() {
			yp(function(t) {
				return e(t);
			});
		});
	}
	function hm(e, t, n) {
		switch (t = lp(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function gm(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && $(e, t, r, null, rp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === vn && (e.onclick = null), Pt(e);
	}
	function _m(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Pt(e);
	}
	var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
	function bm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var xm = N.d;
	N.d = {
		f: Sm,
		r: Cm,
		D: Em,
		C: Dm,
		L: Om,
		m: km,
		X: jm,
		S: Am,
		M: Mm
	};
	function Sm() {
		var e = xm.f(), t = zd();
		return e || t;
	}
	function Cm(e) {
		var t = It(e);
		t !== null && t.tag === 5 && t.type === "form" ? tc(t) : xm.r(e);
	}
	var wm = typeof document > "u" ? null : document;
	function Tm(e, t, n) {
		var r = wm;
		if (r && typeof t == "string" && t) {
			var i = rn(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), ym.has(i) || (ym.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), np(t, "link", e), zt(t), r.head.appendChild(t)));
		}
	}
	function Em(e) {
		xm.D(e), Tm("dns-prefetch", e, null);
	}
	function Dm(e, t) {
		xm.C(e, t), Tm("preconnect", e, t);
	}
	function Om(e, t, n) {
		xm.L(e, t, n);
		var r = wm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + rn(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + rn(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + rn(n.imageSizes) + "\"]")) : i += "[href=\"" + rn(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Pm(e);
					break;
				case "script": a = Rm(e);
			}
			if (!(vm.has(a) || (e = E({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), vm.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Fm(a)) || t === "script" && r.querySelector(zm(a))))) {
				var o = r.createElement("link");
				np(o, "link", e), t === "style" && (o[Nt] = !0, o.onload = o.onerror = function() {
					Bt(o);
				}), zt(o), r.head.appendChild(o);
			}
		}
	}
	function km(e, t) {
		xm.m(e, t);
		var n = wm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + rn(r) + "\"][href=\"" + rn(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Rm(e);
			}
			if (!vm.has(a) && (e = E({
				rel: "modulepreload",
				href: e
			}, t), vm.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(zm(a))) return;
				}
				r = n.createElement("link"), np(r, "link", e), zt(r), n.head.appendChild(r);
			}
		}
	}
	function Am(e, t, n) {
		xm.S(e, t, n);
		var r = wm;
		if (r && e) {
			var i = Rt(r).hoistableStyles, a = Pm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Fm(a))) s.loading = 5;
				else {
					e = E({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = vm.get(a)) && Hm(e, n);
					var c = o = r.createElement("link");
					zt(c), np(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Vm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function jm(e, t) {
		xm.X(e, t);
		var n = wm;
		if (n && e) {
			var r = Rt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = E({
				src: e,
				async: !0
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), zt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Mm(e, t) {
		xm.M(e, t);
		var n = wm;
		if (n && e) {
			var r = Rt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = E({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), zt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t, n, r) {
		var a = (a = Ee.current) ? bm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pm(n.href), t = Rt(a).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Pm(n.href);
					var o = Rt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Fm(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = vm.get(e), o || (o = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, vm.set(e, o)), Lm(a, e, o, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Rm(n), t = Rt(a).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Pm(e) {
		return "href=\"" + rn(e) + "\"";
	}
	function Fm(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Im(e) {
		return E({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Lm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Nt]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Nt] = !0, t.onload = t.onerror = Bt.bind(null, t), np(t, "link", n), zt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Rm(e) {
		return "[src=\"" + rn(e) + "\"]";
	}
	function zm(e) {
		return "script[async]" + e;
	}
	function Bm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + rn(n.href) + "\"]");
				if (r) return t.instance = r, zt(r), r;
				var a = E({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), zt(r), np(r, "style", a), Vm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Pm(n.href);
				var o = e.querySelector(Fm(a));
				if (o) return t.state.loading |= 4, t.instance = o, zt(o), o;
				r = Im(n), (a = vm.get(a)) && Hm(r, a), o = (e.ownerDocument || e).createElement("link"), zt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), np(o, "link", r), t.state.loading |= 4, Vm(o, n.precedence, e), t.instance = o;
			case "script": return o = Rm(n.src), (a = e.querySelector(zm(o))) ? (t.instance = a, zt(a), a) : (r = n, (a = vm.get(o)) && (r = E({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), zt(a), np(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Vm(r, n.precedence, e));
		return t.instance;
	}
	function Vm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Hm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Wm = null;
	function Gm(e, t, n) {
		if (Wm === null) {
			var r = /* @__PURE__ */ new Map(), i = Wm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Wm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[Mt] || a[Et] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Km(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function qm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Jm(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function Ym(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Xm(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function Zm(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Xm(t), e.suspenseyImages.push(t)), e = rh.bind(e), t.decode().then(e, e));
	}
	function Qm(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Pm(r.href), a = t.querySelector(Fm(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, zt(a);
					return;
				}
				a = t.ownerDocument || t, r = Im(r), (i = vm.get(i)) && Hm(r, i), a = a.createElement("link"), zt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), np(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = nh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var $m = 0;
	function eh(e, t) {
		return e.stylesheets && e.count === 0 && ah(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && ah(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > $m ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function th(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) ah(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function nh() {
		this.count--, th(this);
	}
	function rh() {
		this.imgCount--, th(this);
	}
	var ih = null;
	function ah(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ih = /* @__PURE__ */ new Map(), t.forEach(oh, e), ih = null, nh.call(e));
	}
	function oh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ih.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ih.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = nh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var sh = {
		$$typeof: A,
		Provider: null,
		Consumer: null,
		_currentValue: ye,
		_currentValue2: ye,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ht(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ht(0), this.hiddenUpdates = ht(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Mi(3, null, null, t), e.current = a, a.stateNode = e, t = Aa(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, po(a), e;
	}
	function uh(e) {
		return e ? (e = Ai, e) : Ai;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = ho(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = go(e, r, t), n !== null && (Pd(n, e, t), _o(n, e, t));
	}
	function fh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ph(e, t) {
		fh(e, t), (e = e.alternate) && fh(e, t);
	}
	function mh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Di(e, 67108864);
			t !== null && Pd(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = jd();
			t = xt(t);
			var n = Di(e, t);
			n !== null && Pd(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = M.T;
		M.T = null;
		var a = N.p;
		try {
			N.p = 2, yh(e, t, n, r);
		} finally {
			N.p = a, M.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = M.T;
		M.T = null;
		var a = N.p;
		try {
			N.p = 8, yh(e, t, n, r);
		} finally {
			N.p = a, M.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Kf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = It(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = lt(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - nt(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Ef(a), !(K & 6) && (gd = We() + 500, Df(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Di(a, 2), s !== null && Pd(s, a, 2), zd(), ph(a, 2);
					}
					if (a = bh(r), a === null && Kf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Kf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = bn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = Ft(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return xh = e, null;
	}
	function Ch(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Ge()) {
				case Ke: return 2;
				case qe: return 8;
				case Je:
				case Ye: return 32;
				case Xe: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var wh = !1, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Mh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Th = null;
				break;
			case "dragenter":
			case "dragleave":
				Eh = null;
				break;
			case "mouseover":
			case "mouseout":
				Dh = null;
				break;
			case "pointerover":
			case "pointerout":
				Oh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": kh.delete(t.pointerId);
		}
	}
	function Nh(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = It(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ph(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Th = Nh(Th, e, t, n, r, i), !0;
			case "dragenter": return Eh = Nh(Eh, e, t, n, r, i), !0;
			case "mouseover": return Dh = Nh(Dh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Fh(e) {
		var t = Ft(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, wt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, wt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Ih(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = bh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				yn = r, n.target.dispatchEvent(r), yn = null;
			} else return t = It(n), t !== null && mh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Lh(e, t, n) {
		Ih(e) && n.delete(t);
	}
	function Rh() {
		wh = !1, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
	}
	function zh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, wh || (wh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
	}
	var Bh = null;
	function Vh(e) {
		Bh !== e && (Bh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Bh === e && (Bh = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Sh(r || n) === null) continue;
					break;
				}
				var a = It(n);
				a !== null && (e.splice(t, 3), t -= 3, $s(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Hh(e) {
		function t(t) {
			return zh(t, e);
		}
		Th !== null && zh(Th, e), Eh !== null && zh(Eh, e), Dh !== null && zh(Dh, e), Oh.forEach(t), kh.forEach(t);
		for (var n = 0; n < Ah.length; n++) {
			var r = Ah[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Ah.length && (n = Ah[0], n.blockedOn === null);) Fh(n), n.blockedOn === null && Ah.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[Dt] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[Dt] || null) s = o.formAction;
					else if (Sh(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vh(n);
			}
		}
	}
	function Uh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Wh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.render = Wh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		dh(n, jd(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), zd(), t[Ot] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = Ct();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
			Ah.splice(n, 0, e), n === 0 && Fh(e);
		}
	};
	var Kh = n.version;
	if (Kh !== "19.3.0") throw Error(i(527, Kh, "19.3.0"));
	N.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = d(t), e = e === null ? null : p(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: M,
		reconcilerVersion: "19.3.0"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			$e = Jh.inject(qh), et = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = Sc, s = Cc, c = wc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[Ot] = t.current, Wf(e), new Wh(t);
	};
})), g = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = h();
})), _ = (e) => e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function v(e, t, n = []) {
	if (t == null) throw Error("[lucide]: iconNode is required when icon name is used");
	return {
		name: _(e),
		size: 24,
		node: t,
		...n.length > 0 ? { aliases: n } : {}
	};
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var y = (e) => {
	let t = "", n = !1;
	for (let r of e) {
		if (r === "-" || r === "_" || r <= " ") {
			n = t.length > 0;
			continue;
		}
		t.length === 0 ? t += r.toLowerCase() : t += n ? r.toUpperCase() : r, n = !1;
	}
	return t;
}, b = (e) => {
	let t = y(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, x = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), S = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
function C(e) {
	return e != null;
}
function w(e, t = {}) {
	let n = t.attributeNames ?? {}, r = (e) => n[e] ?? e, i = e.size ?? e.width ?? S.width, a = e.size ?? e.height ?? S.height, o = e.aliases?.filter((e) => typeof e == "string" && e.trim() !== "").map((e) => `lucide-${e}`) ?? [], s = [...e.name ? [`lucide-${e.name}`] : [], ...o], c = t.className?.split(" ").filter(Boolean) ?? [], l = t.includeDefaultClasses === !1 ? x(...c) : x("lucide", ...s, ...c), u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? S["stroke-width"]) * Number(e.size ?? e.width ?? S.width) / Number(t.size ?? t.width ?? S.width) : t.strokeWidth ?? S["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(S).reduce((e, [t, n]) => (e[r(t)] = n, e), {}),
			..."color" in t && t.color && { [r("stroke")]: t.color },
			..."size" in t && C(t.size) && {
				[r("width")]: t.size,
				[r("height")]: t.size
			},
			..."width" in t && C(t.width) && { [r("width")]: t.width },
			..."height" in t && C(t.height) && { [r("height")]: t.height },
			[r("stroke-width")]: u,
			...l && { [r("class")]: l },
			[r("viewBox")]: `0 0 ${i} ${a}`,
			...t.hasA11yProp === !1 ? { [r("aria-hidden")]: "true" } : {},
			..."attributes" in t && t.attributes
		},
		e.node.map((e) => {
			let [n, i, a] = e, o = t.nonScalingStroke ? {
				[r("vector-effect")]: "non-scaling-stroke",
				...i
			} : i;
			return a ? [
				n,
				o,
				a
			] : [n, o];
		})
	];
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
function T(e, t = {}) {
	return w(e, {
		...t,
		attributeNames: {
			...t.attributeNames,
			class: "className",
			"stroke-width": "strokeWidth",
			"stroke-linecap": "strokeLinecap",
			"stroke-linejoin": "strokeLinejoin",
			"vector-effect": "vectorEffect"
		}
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
var ee = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, E = /* @__PURE__ */ c(u(), 1), te = (0, E.createContext)({}), ne = () => (0, E.useContext)(te), re = (0, E.forwardRef)(({ color: e, size: t, width: n, height: r, strokeWidth: i, absoluteStrokeWidth: a, nonScalingStroke: o, className: s = "", children: c, iconNode: l = [], icon: u = {
	node: l,
	aliases: [],
	size: 24
}, ...d }, f) => {
	let { size: p = 24, strokeWidth: m = 2, absoluteStrokeWidth: h = !1, nonScalingStroke: g = !1, color: _ = "currentColor", className: v = "" } = ne() ?? {}, y = !!c || ee(d), [b, S, C = []] = T(u, {
		color: e ?? _,
		width: n ?? t ?? p,
		height: r ?? t ?? p,
		strokeWidth: i ?? m,
		absoluteStrokeWidth: a ?? h,
		nonScalingStroke: o ?? g,
		className: x(v, s),
		hasA11yProp: y,
		attributes: d
	});
	return (0, E.createElement)(b, {
		ref: f,
		...S
	}, [...C.map(([e, t]) => (0, E.createElement)(e, t)), ...Array.isArray(c) ? c : [c]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function D(e, t = [], n = []) {
	let r = typeof e == "string" ? v(e, t, n) : e, i = (0, E.forwardRef)(({ className: e, ...t }, n) => (0, E.createElement)(re, {
		ref: n,
		icon: r,
		className: e,
		...t
	}));
	return r.name && (i.displayName = b(r.name)), i;
}
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/arrow-down.mjs
var O = {
	name: "arrow-down",
	size: 24,
	node: [["path", {
		d: "M12 5v14",
		key: "s699le"
	}], ["path", {
		d: "m19 12-7 7-7-7",
		key: "1idqje"
	}]]
};
O.node;
var k = D(O), ie = {
	name: "arrow-left",
	size: 24,
	node: [["path", {
		d: "m12 19-7-7 7-7",
		key: "1l729n"
	}], ["path", {
		d: "M19 12H5",
		key: "x3x0zl"
	}]]
};
ie.node;
var A = D(ie), j = {
	name: "arrow-right",
	size: 24,
	node: [["path", {
		d: "M5 12h14",
		key: "1ays0h"
	}], ["path", {
		d: "m12 5 7 7-7 7",
		key: "xquz4c"
	}]]
};
j.node;
var ae = D(j), oe = {
	name: "arrow-up-right",
	size: 24,
	node: [["path", {
		d: "M7 7h10v10",
		key: "1tivn9"
	}], ["path", {
		d: "M7 17 17 7",
		key: "1vkiza"
	}]]
};
oe.node;
var se = D(oe), ce = {
	name: "arrow-up",
	size: 24,
	node: [["path", {
		d: "m5 12 7-7 7 7",
		key: "hav0vg"
	}], ["path", {
		d: "M12 19V5",
		key: "x0mq9r"
	}]]
};
ce.node;
var le = D(ce), ue = {
	name: "building-2",
	size: 24,
	node: [
		["path", {
			d: "M10 12h4",
			key: "a56b0p"
		}],
		["path", {
			d: "M10 8h4",
			key: "1sr2af"
		}],
		["path", {
			d: "M14 21v-3a2 2 0 0 0-4 0v3",
			key: "1rgiei"
		}],
		["path", {
			d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
			key: "secmi2"
		}],
		["path", {
			d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
			key: "16ra0t"
		}]
	]
};
ue.node;
var de = D(ue), fe = {
	name: "check",
	size: 24,
	node: [["path", {
		d: "M20 6 9 17l-5-5",
		key: "1gmf2c"
	}]]
};
fe.node;
var pe = D(fe), me = {
	name: "chevron-down",
	size: 24,
	node: [["path", {
		d: "m6 9 6 6 6-6",
		key: "qrunsl"
	}]]
};
me.node;
var he = D(me), ge = {
	name: "copy",
	size: 24,
	node: [["rect", {
		width: "14",
		height: "14",
		x: "8",
		y: "8",
		rx: "2",
		ry: "2",
		key: "17jyea"
	}], ["path", {
		d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
		key: "zix9uf"
	}]]
};
ge.node;
var _e = D(ge), ve = {
	name: "grid-2x2",
	size: 24,
	node: [
		["path", {
			d: "M12 3v18",
			key: "108xh3"
		}],
		["path", {
			d: "M3 12h18",
			key: "1i2n21"
		}],
		["rect", {
			x: "3",
			y: "3",
			width: "18",
			height: "18",
			rx: "2",
			key: "h1oib"
		}]
	],
	aliases: ["grid-2-x-2"]
};
ve.node;
var M = D(ve), N = {
	name: "list",
	size: 24,
	node: [
		["path", {
			d: "M3 5h.01",
			key: "18ugdj"
		}],
		["path", {
			d: "M3 12h.01",
			key: "nlz23k"
		}],
		["path", {
			d: "M3 19h.01",
			key: "noohij"
		}],
		["path", {
			d: "M8 5h13",
			key: "1pao27"
		}],
		["path", {
			d: "M8 12h13",
			key: "1za7za"
		}],
		["path", {
			d: "M8 19h13",
			key: "m83p4d"
		}]
	]
};
N.node;
var ye = D(N), be = {
	name: "map-pin",
	size: 24,
	node: [["path", {
		d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
		key: "1r0f0z"
	}], ["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}]]
};
be.node;
var xe = D(be), Se = {
	name: "moon",
	size: 24,
	node: [["path", {
		d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
		key: "kfwtm"
	}]]
};
Se.node;
var Ce = D(Se), P = {
	name: "pause",
	size: 24,
	node: [["rect", {
		x: "14",
		y: "3",
		width: "5",
		height: "18",
		rx: "1",
		key: "kaeet6"
	}], ["rect", {
		x: "5",
		y: "3",
		width: "5",
		height: "18",
		rx: "1",
		key: "1wsw3u"
	}]]
};
P.node;
var we = D(P), Te = {
	name: "phone",
	size: 24,
	node: [["path", {
		d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
		key: "9njp5v"
	}]]
};
Te.node;
var Ee = D(Te), De = {
	name: "play",
	size: 24,
	node: [["path", {
		d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
		key: "10ikf1"
	}]]
};
De.node;
var Oe = D(De), ke = {
	name: "rotate-ccw",
	size: 24,
	node: [["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "1357e3"
	}], ["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}]]
};
ke.node;
var Ae = D(ke), je = {
	name: "search",
	size: 24,
	node: [["path", {
		d: "m21 21-4.34-4.34",
		key: "14j7rj"
	}], ["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}]]
};
je.node;
var Me = D(je), Ne = {
	name: "sun",
	size: 24,
	node: [
		["circle", {
			cx: "12",
			cy: "12",
			r: "4",
			key: "4exip2"
		}],
		["path", {
			d: "M12 2v2",
			key: "tus03m"
		}],
		["path", {
			d: "M12 20v2",
			key: "1lh1kg"
		}],
		["path", {
			d: "m4.93 4.93 1.41 1.41",
			key: "149t6j"
		}],
		["path", {
			d: "m17.66 17.66 1.41 1.41",
			key: "ptbguv"
		}],
		["path", {
			d: "M2 12h2",
			key: "1t8f8n"
		}],
		["path", {
			d: "M20 12h2",
			key: "1q8mjw"
		}],
		["path", {
			d: "m6.34 17.66-1.41 1.41",
			key: "1m8zz5"
		}],
		["path", {
			d: "m19.07 4.93-1.41 1.41",
			key: "1shlcs"
		}]
	]
};
Ne.node;
var Pe = D(Ne), Fe = {
	name: "users",
	size: 24,
	node: [
		["path", {
			d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
			key: "1yyitq"
		}],
		["path", {
			d: "M16 3.128a4 4 0 0 1 0 7.744",
			key: "16gr8j"
		}],
		["path", {
			d: "M22 21v-2a4 4 0 0 0-3-3.87",
			key: "kshegd"
		}],
		["circle", {
			cx: "9",
			cy: "7",
			r: "4",
			key: "nufk8"
		}]
	]
};
Fe.node;
var Ie = D(Fe), Le = {
	name: "x",
	size: 24,
	node: [["path", {
		d: "M18 6 6 18",
		key: "1bl5f8"
	}], ["path", {
		d: "m6 6 12 12",
		key: "d8bk6v"
	}]]
};
Le.node;
var Re = D(Le), ze = /* @__PURE__ */ c(m(), 1), Be = g();
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function Ve(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = Ve(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function He() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Ve(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var Ue = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, We = (e, t) => ({
	classGroupId: e,
	validator: t
}), Ge = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), Ke = "-", qe = [], Je = "arbitrary..", Ye = (e) => {
	let t = Qe(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Ze(e);
			let n = e.split(Ke);
			return Xe(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Ue(i, t) : t : i || qe;
			}
			return n[e] || qe;
		}
	};
}, Xe = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Xe(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(Ke) : e.slice(t).join(Ke), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Ze = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Je + r : void 0;
})(), Qe = (e) => {
	let { theme: t, classGroups: n } = e;
	return $e(n, t);
}, $e = (e, t) => {
	let n = Ge();
	for (let r in e) {
		let i = e[r];
		et(i, n, r, t);
	}
	return n;
}, et = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		tt(i, t, n, r);
	}
}, tt = (e, t, n, r) => {
	if (typeof e == "string") {
		nt(e, t, n);
		return;
	}
	if (typeof e == "function") {
		rt(e, t, n, r);
		return;
	}
	it(e, t, n, r);
}, nt = (e, t, n) => {
	let r = e === "" ? t : at(t, e);
	r.classGroupId = n;
}, rt = (e, t, n, r) => {
	if (ot(e)) {
		et(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(We(n, e));
}, it = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		et(o, at(t, a), n, r);
	}
}, at = (e, t) => {
	let n = e, r = t.split(Ke), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Ge(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, ot = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, st = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, ct = "!", lt = ":", ut = [], dt = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), ft = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === lt) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(ct) ? (c = s.slice(0, -1), l = !0) : s.startsWith(ct) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return dt(t, l, c, u);
	};
	if (t) {
		let e = t + lt, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : dt(ut, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, pt = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, mt = (e) => ({
	cache: st(e.cacheSize),
	parseClassName: ft(e),
	sortModifiers: pt(e),
	postfixLookupClassGroupIds: ht(e),
	...Ye(e)
}), ht = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, gt = /\s+/, _t = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(gt), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = r(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + ct : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, vt = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = yt(n)) && (i && (i += " "), i += r);
	return i;
}, yt = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = yt(e[r])) && (n && (n += " "), n += t);
	return n;
}, bt = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = mt(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = _t(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(vt(...e));
}, xt = [], St = (e) => {
	let t = (t) => t[e] || xt;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, Ct = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, wt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Tt = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Et = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Dt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ot = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, kt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, At = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, jt = (e) => Tt.test(e), F = (e) => !!e && !Number.isNaN(Number(e)), Mt = (e) => !!e && Number.isInteger(Number(e)), Nt = (e) => e.endsWith("%") && F(e.slice(0, -1)), Pt = (e) => Et.test(e), Ft = () => !0, It = (e) => Dt.test(e) && !Ot.test(e), Lt = () => !1, Rt = (e) => kt.test(e), zt = (e) => At.test(e), Bt = (e) => !I(e) && !R(e), Vt = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Ht = (e) => nn(e, sn, Lt), I = (e) => Ct.test(e), Ut = (e) => nn(e, cn, It), Wt = (e) => nn(e, ln, F), Gt = (e) => nn(e, dn, Ft), Kt = (e) => nn(e, un, Lt), qt = (e) => nn(e, an, Lt), L = (e) => nn(e, on, zt), Jt = (e) => nn(e, fn, Rt), R = (e) => wt.test(e), Yt = (e) => rn(e, cn), Xt = (e) => rn(e, un), Zt = (e) => rn(e, an), Qt = (e) => rn(e, sn), $t = (e) => rn(e, on), en = (e) => rn(e, fn, !0), tn = (e) => rn(e, dn, !0), nn = (e, t, n) => {
	let r = Ct.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, rn = (e, t, n = !1) => {
	let r = wt.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, an = (e) => e === "position" || e === "percentage", on = (e) => e === "image" || e === "url", sn = (e) => e === "length" || e === "size" || e === "bg-size", cn = (e) => e === "length", ln = (e) => e === "number", un = (e) => e === "family-name", dn = (e) => e === "number" || e === "weight", fn = (e) => e === "shadow", pn = /*#__PURE__*/ bt(() => {
	let e = St("color"), t = St("font"), n = St("text"), r = St("font-weight"), i = St("tracking"), a = St("leading"), o = St("breakpoint"), s = St("container"), c = St("spacing"), l = St("radius"), u = St("shadow"), d = St("inset-shadow"), f = St("text-shadow"), p = St("drop-shadow"), m = St("blur"), h = St("perspective"), g = St("aspect"), _ = St("ease"), v = St("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		R,
		I
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		R,
		I,
		c
	], T = () => [
		jt,
		"full",
		"auto",
		...w()
	], ee = () => [
		Mt,
		"none",
		"subgrid",
		R,
		I
	], E = () => [
		"auto",
		{ span: [
			"full",
			Mt,
			R,
			I
		] },
		Mt,
		R,
		I
	], te = () => [
		Mt,
		"auto",
		R,
		I
	], ne = () => [
		"auto",
		"min",
		"max",
		"fr",
		R,
		I
	], re = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], D = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], O = () => ["auto", ...w()], k = () => [
		jt,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], ie = () => [
		s,
		jt,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], A = () => [
		jt,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], j = () => [
		e,
		R,
		I
	], ae = () => [
		...b(),
		Zt,
		qt,
		{ position: [R, I] }
	], oe = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], se = () => [
		"auto",
		"cover",
		"contain",
		Qt,
		Ht,
		{ size: [R, I] }
	], ce = () => [
		Nt,
		Yt,
		Ut
	], le = () => [
		"",
		"none",
		"full",
		l,
		R,
		I
	], ue = () => [
		"",
		F,
		Yt,
		Ut
	], de = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], fe = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], pe = () => [
		F,
		Nt,
		Zt,
		qt
	], me = () => [
		"",
		"none",
		m,
		R,
		I
	], he = () => [
		"none",
		F,
		R,
		I
	], ge = () => [
		"none",
		F,
		R,
		I
	], _e = () => [
		F,
		R,
		I
	], ve = () => [
		jt,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [Pt],
			breakpoint: [Pt],
			color: [Ft],
			container: [Pt],
			"drop-shadow": [Pt],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Bt],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [Pt],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [Pt],
			shadow: [Pt],
			spacing: ["px", F],
			text: [Pt],
			"text-shadow": [Pt],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				jt,
				I,
				R,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				R,
				I
			] }],
			"container-named": [Vt],
			columns: [{ columns: [
				F,
				"auto",
				I,
				R,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				Mt,
				"auto",
				R,
				I
			] }],
			basis: [{ basis: [
				jt,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				F,
				jt,
				"auto",
				"initial",
				"none",
				I
			] }],
			grow: [{ grow: [
				"",
				F,
				R,
				I
			] }],
			shrink: [{ shrink: [
				"",
				F,
				R,
				I
			] }],
			order: [{ order: [
				Mt,
				"first",
				"last",
				"none",
				R,
				I
			] }],
			"grid-cols": [{ "grid-cols": ee() }],
			"col-start-end": [{ col: E() }],
			"col-start": [{ "col-start": te() }],
			"col-end": [{ "col-end": te() }],
			"grid-rows": [{ "grid-rows": ee() }],
			"row-start-end": [{ row: E() }],
			"row-start": [{ "row-start": te() }],
			"row-end": [{ "row-end": te() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ne() }],
			"auto-rows": [{ "auto-rows": ne() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...re(), "normal"] }],
			"justify-items": [{ "justify-items": [...D(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...D()] }],
			"align-content": [{ content: ["normal", ...re()] }],
			"align-items": [{ items: [...D(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...D(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": re() }],
			"place-items": [{ "place-items": [...D(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...D()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: O() }],
			mx: [{ mx: O() }],
			my: [{ my: O() }],
			ms: [{ ms: O() }],
			me: [{ me: O() }],
			mbs: [{ mbs: O() }],
			mbe: [{ mbe: O() }],
			mt: [{ mt: O() }],
			mr: [{ mr: O() }],
			mb: [{ mb: O() }],
			ml: [{ ml: O() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: k() }],
			"inline-size": [{ inline: ["auto", ...ie()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...ie()] }],
			"max-inline-size": [{ "max-inline": ["none", ...ie()] }],
			"block-size": [{ block: ["auto", ...A()] }],
			"min-block-size": [{ "min-block": ["auto", ...A()] }],
			"max-block-size": [{ "max-block": ["none", ...A()] }],
			w: [{ w: [
				s,
				"screen",
				...k()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...k()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...k()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...k()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...k()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				"none",
				...k()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Yt,
				Ut
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				tn,
				Gt
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				Nt,
				I
			] }],
			"font-family": [{ font: [
				Xt,
				Kt,
				t
			] }],
			"font-features": [{ "font-features": [I] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				R,
				I
			] }],
			"line-clamp": [{ "line-clamp": [
				F,
				"none",
				R,
				Wt
			] }],
			leading: [{ leading: [
				"none",
				a,
				...w()
			] }],
			"list-image": [{ "list-image": [
				"none",
				R,
				I
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				R,
				I
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: j() }],
			"text-color": [{ text: j() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...de(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				F,
				"from-font",
				"auto",
				R,
				Ut
			] }],
			"text-decoration-color": [{ decoration: j() }],
			"underline-offset": [{ "underline-offset": [
				F,
				"auto",
				R,
				I
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				Mt,
				R,
				I
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				R,
				I
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				R,
				I
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: ae() }],
			"bg-repeat": [{ bg: oe() }],
			"bg-size": [{ bg: se() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						Mt,
						R,
						I
					],
					radial: [
						"",
						R,
						I
					],
					conic: [
						"",
						Mt,
						R,
						I
					]
				},
				$t,
				L
			] }],
			"bg-color": [{ bg: j() }],
			"gradient-from-pos": [{ from: ce() }],
			"gradient-via-pos": [{ via: ce() }],
			"gradient-to-pos": [{ to: ce() }],
			"gradient-from": [{ from: j() }],
			"gradient-via": [{ via: j() }],
			"gradient-to": [{ to: j() }],
			rounded: [{ rounded: le() }],
			"rounded-s": [{ "rounded-s": le() }],
			"rounded-e": [{ "rounded-e": le() }],
			"rounded-t": [{ "rounded-t": le() }],
			"rounded-r": [{ "rounded-r": le() }],
			"rounded-b": [{ "rounded-b": le() }],
			"rounded-l": [{ "rounded-l": le() }],
			"rounded-ss": [{ "rounded-ss": le() }],
			"rounded-se": [{ "rounded-se": le() }],
			"rounded-ee": [{ "rounded-ee": le() }],
			"rounded-es": [{ "rounded-es": le() }],
			"rounded-tl": [{ "rounded-tl": le() }],
			"rounded-tr": [{ "rounded-tr": le() }],
			"rounded-br": [{ "rounded-br": le() }],
			"rounded-bl": [{ "rounded-bl": le() }],
			"border-w": [{ border: ue() }],
			"border-w-x": [{ "border-x": ue() }],
			"border-w-y": [{ "border-y": ue() }],
			"border-w-s": [{ "border-s": ue() }],
			"border-w-e": [{ "border-e": ue() }],
			"border-w-bs": [{ "border-bs": ue() }],
			"border-w-be": [{ "border-be": ue() }],
			"border-w-t": [{ "border-t": ue() }],
			"border-w-r": [{ "border-r": ue() }],
			"border-w-b": [{ "border-b": ue() }],
			"border-w-l": [{ "border-l": ue() }],
			"divide-x": [{ "divide-x": ue() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": ue() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...de(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...de(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: j() }],
			"border-color-x": [{ "border-x": j() }],
			"border-color-y": [{ "border-y": j() }],
			"border-color-s": [{ "border-s": j() }],
			"border-color-e": [{ "border-e": j() }],
			"border-color-bs": [{ "border-bs": j() }],
			"border-color-be": [{ "border-be": j() }],
			"border-color-t": [{ "border-t": j() }],
			"border-color-r": [{ "border-r": j() }],
			"border-color-b": [{ "border-b": j() }],
			"border-color-l": [{ "border-l": j() }],
			"divide-color": [{ divide: j() }],
			"outline-style": [{ outline: [
				...de(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				F,
				R,
				I
			] }],
			"outline-w": [{ outline: [
				"",
				F,
				Yt,
				Ut
			] }],
			"outline-color": [{ outline: j() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				en,
				Jt
			] }],
			"shadow-color": [{ shadow: j() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				en,
				Jt
			] }],
			"inset-shadow-color": [{ "inset-shadow": j() }],
			"ring-w": [{ ring: ue() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: j() }],
			"ring-offset-w": [{ "ring-offset": [F, Ut] }],
			"ring-offset-color": [{ "ring-offset": j() }],
			"inset-ring-w": [{ "inset-ring": ue() }],
			"inset-ring-color": [{ "inset-ring": j() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				en,
				Jt
			] }],
			"text-shadow-color": [{ "text-shadow": j() }],
			opacity: [{ opacity: [
				F,
				R,
				I
			] }],
			"mix-blend": [{ "mix-blend": [
				...fe(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": fe() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [F] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": pe() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": pe() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": j() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": j() }],
			"mask-image-t-from-pos": [{ "mask-t-from": pe() }],
			"mask-image-t-to-pos": [{ "mask-t-to": pe() }],
			"mask-image-t-from-color": [{ "mask-t-from": j() }],
			"mask-image-t-to-color": [{ "mask-t-to": j() }],
			"mask-image-r-from-pos": [{ "mask-r-from": pe() }],
			"mask-image-r-to-pos": [{ "mask-r-to": pe() }],
			"mask-image-r-from-color": [{ "mask-r-from": j() }],
			"mask-image-r-to-color": [{ "mask-r-to": j() }],
			"mask-image-b-from-pos": [{ "mask-b-from": pe() }],
			"mask-image-b-to-pos": [{ "mask-b-to": pe() }],
			"mask-image-b-from-color": [{ "mask-b-from": j() }],
			"mask-image-b-to-color": [{ "mask-b-to": j() }],
			"mask-image-l-from-pos": [{ "mask-l-from": pe() }],
			"mask-image-l-to-pos": [{ "mask-l-to": pe() }],
			"mask-image-l-from-color": [{ "mask-l-from": j() }],
			"mask-image-l-to-color": [{ "mask-l-to": j() }],
			"mask-image-x-from-pos": [{ "mask-x-from": pe() }],
			"mask-image-x-to-pos": [{ "mask-x-to": pe() }],
			"mask-image-x-from-color": [{ "mask-x-from": j() }],
			"mask-image-x-to-color": [{ "mask-x-to": j() }],
			"mask-image-y-from-pos": [{ "mask-y-from": pe() }],
			"mask-image-y-to-pos": [{ "mask-y-to": pe() }],
			"mask-image-y-from-color": [{ "mask-y-from": j() }],
			"mask-image-y-to-color": [{ "mask-y-to": j() }],
			"mask-image-radial": [{ "mask-radial": [R, I] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": pe() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": pe() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": j() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": j() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [F] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": pe() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": pe() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": j() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": j() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: ae() }],
			"mask-repeat": [{ mask: oe() }],
			"mask-size": [{ mask: se() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				R,
				I
			] }],
			filter: [{ filter: [
				"",
				"none",
				R,
				I
			] }],
			blur: [{ blur: me() }],
			brightness: [{ brightness: [
				F,
				R,
				I
			] }],
			contrast: [{ contrast: [
				F,
				R,
				I
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				en,
				Jt
			] }],
			"drop-shadow-color": [{ "drop-shadow": j() }],
			grayscale: [{ grayscale: [
				"",
				F,
				R,
				I
			] }],
			"hue-rotate": [{ "hue-rotate": [
				F,
				R,
				I
			] }],
			invert: [{ invert: [
				"",
				F,
				R,
				I
			] }],
			saturate: [{ saturate: [
				F,
				R,
				I
			] }],
			sepia: [{ sepia: [
				"",
				F,
				R,
				I
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				R,
				I
			] }],
			"backdrop-blur": [{ "backdrop-blur": me() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				F,
				R,
				I
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				F,
				R,
				I
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				F,
				R,
				I
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				F,
				R,
				I
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				F,
				R,
				I
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				F,
				R,
				I
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				F,
				R,
				I
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				F,
				R,
				I
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				R,
				I
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				F,
				"initial",
				R,
				I
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				R,
				I
			] }],
			delay: [{ delay: [
				F,
				R,
				I
			] }],
			animate: [{ animate: [
				"none",
				v,
				R,
				I
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				R,
				I
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: he() }],
			"rotate-x": [{ "rotate-x": he() }],
			"rotate-y": [{ "rotate-y": he() }],
			"rotate-z": [{ "rotate-z": he() }],
			scale: [{ scale: ge() }],
			"scale-x": [{ "scale-x": ge() }],
			"scale-y": [{ "scale-y": ge() }],
			"scale-z": [{ "scale-z": ge() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: _e() }],
			"skew-x": [{ "skew-x": _e() }],
			"skew-y": [{ "skew-y": _e() }],
			transform: [{ transform: [
				R,
				I,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: ve() }],
			"translate-x": [{ "translate-x": ve() }],
			"translate-y": [{ "translate-y": ve() }],
			"translate-z": [{ "translate-z": ve() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				Mt,
				R,
				I
			] }],
			accent: [{ accent: j() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: j() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				R,
				I
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": j() }],
			"scrollbar-track-color": [{ "scrollbar-track": j() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				R,
				I
			] }],
			fill: [{ fill: ["none", ...j()] }],
			"stroke-w": [{ stroke: [
				F,
				Yt,
				Ut,
				Wt
			] }],
			stroke: [{ stroke: ["none", ...j()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": [
				"start",
				"end",
				"right",
				"left"
			],
			"inset-y": [
				"inset-bs",
				"inset-be",
				"top",
				"bottom"
			],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: [
				"ps",
				"pe",
				"pr",
				"pl"
			],
			py: [
				"pbs",
				"pbe",
				"pt",
				"pb"
			],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: [
				"ms",
				"me",
				"mr",
				"ml"
			],
			my: [
				"mbs",
				"mbe",
				"mt",
				"mb"
			],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": [
				"border-w-s",
				"border-w-e",
				"border-w-r",
				"border-w-l"
			],
			"border-w-y": [
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-b"
			],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": [
				"border-color-s",
				"border-color-e",
				"border-color-r",
				"border-color-l"
			],
			"border-color-y": [
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-b"
			],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": [
				"scroll-ms",
				"scroll-me",
				"scroll-mr",
				"scroll-ml"
			],
			"scroll-my": [
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mb"
			],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": [
				"scroll-ps",
				"scroll-pe",
				"scroll-pr",
				"scroll-pl"
			],
			"scroll-py": [
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pb"
			],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/lib/utils.ts
function mn(...e) {
	return pn(He(e));
}
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
var hn = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), z = (/* @__PURE__ */ o(((e, t) => {
	t.exports = hn();
})))(), gn = .38, _n = .34, vn = 1.45, yn = 40, bn = 2.22, xn = 2.7, Sn = 1.14, Cn = 1.82, wn = 1.6, Tn = 360, En = 360, Dn = 130, On = (e, t, n) => Math.min(n, Math.max(t, e)), kn = (e) => e * Math.PI / 180, An = (e) => String(e).padStart(2, "0");
function jn(e, t, n, r, i, a) {
	return `translateX(${-a * i * (1 - Math.cos(kn(t)))}px) rotateZ(${(1 - a) * e}deg) translateY(${-(1 - a) * n}px) rotateX(${a * t}deg) translateZ(${a * r}px)`;
}
function Mn({ items: e, label: t = "Selected projects.", logo: n, companyName: r, action: i = "查看案例", initialIndex: a, onOpen: o, onActiveChange: s, onRotationChange: c, onIdleChange: l, refreshing: u = !1, wheelIdleReturnMs: d, overview: f, className: p, ...m }) {
	let h = e.length, g = Math.max(0, h - 1), _ = !!f, v = a === void 0 ? 0 : On(a, 0, g) + 1, y = E.useRef(null), b = E.useRef(null), x = E.useRef([]), S = E.useRef(null), C = E.useRef(null), w = E.useRef(v), T = E.useRef(v), ee = E.useRef(0), te = E.useRef(0), ne = E.useRef("snap"), re = E.useRef(!1), D = E.useRef(!1), O = E.useRef(null), ie = E.useRef(null), j = E.useRef(null), oe = E.useRef(!1), ce = E.useRef({
		time: 0,
		delta: 0,
		start: v
	}), ue = E.useRef(() => {}), de = E.useRef(Math.max(0, v - 1)), fe = E.useRef(v > 0), pe = E.useRef(void 0), me = E.useRef(void 0), he = E.useRef(0), ge = E.useRef(0), _e = E.useRef(null), ve = E.useId(), [M, N] = E.useState(de.current), [ye, be] = E.useState(fe.current), [xe, Se] = E.useState({
		w: 0,
		h: 0
	}), [Ce, P] = E.useState(!1), [Te, Ee] = E.useState(!1), [De, ke] = E.useState(!1);
	E.useEffect(() => {
		let e = 0, t = !1, n = () => {
			window.clearTimeout(e), t && (t = !1, ke(!1));
		}, r = (r) => {
			r.pointerType === "mouse" && (t || (t = !0, ke(!0)), window.clearTimeout(e), e = window.setTimeout(n, 1200));
		}, i = () => {
			document.hidden && n();
		};
		return window.addEventListener("pointermove", r, { passive: !0 }), window.addEventListener("blur", n), document.addEventListener("visibilitychange", i), () => {
			window.clearTimeout(e), window.removeEventListener("pointermove", r), window.removeEventListener("blur", n), document.removeEventListener("visibilitychange", i);
		};
	}, []), E.useEffect(() => {
		let e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = () => P(e.matches);
		return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []), E.useEffect(() => {
		let e = y.current;
		if (!e) return;
		let t = () => Se((t) => t.w === e.clientWidth && t.h === e.clientHeight ? t : {
			w: e.clientWidth,
			h: e.clientHeight
		});
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, []);
	let je = E.useMemo(() => {
		let { w: e, h: t } = xe, n = e < 761 ? Math.min(e * .8, t * .48 * vn) : Math.min(t * gn * vn, e * _n), r = n / vn, i = r * bn, a = r * Sn, o = h ? On(2 * Math.PI * a / h * .82 / (n || 1), .16, 1) : 1, s = Math.min(1, t * .46 / (a + r * o / 2 || 1), e * .46 / (a + n * o / 2 || 1));
		return {
			cardW: n,
			cardH: r,
			slidePitch: n + On(n * .07, 16, 36),
			ringR: a * s,
			ringScale: o * s,
			drumR: i,
			bow: r * Cn,
			depth: r * xn
		};
	}, [xe, h]), Me = E.useCallback((e, t = "snap") => {
		if (u) return;
		t !== "wheel" && window.clearTimeout(he.current), ne.current = t;
		let n = ie.current !== null && e > 0 ? ie.current + 1 : e;
		T.current = On(n, 0, h), _ && (T.current > 0 ? j.current = null : !j.current && w.current > 0 && (j.current = {
			turn: w.current,
			position: ie.current ?? Math.max(0, w.current - 1)
		})), T.current === 0 ? oe.current = !1 : t === "wheel" && (oe.current = !0), t === "drag" && (w.current = T.current, ee.current = 0), ue.current();
	}, [
		h,
		u,
		_
	]);
	E.useEffect(() => {
		if (!ye || !d) return;
		let e = 0, t = () => {
			window.clearTimeout(e), e = window.setTimeout(() => {
				if (oe.current) {
					if (_e.current) {
						t();
						return;
					}
					Me(0);
				}
			}, d);
		}, n = [
			"pointermove",
			"pointerdown",
			"pointerup",
			"wheel",
			"keydown",
			"click"
		];
		for (let e of n) window.addEventListener(e, t, {
			capture: !0,
			passive: !0
		});
		return t(), () => {
			window.clearTimeout(e);
			for (let e of n) window.removeEventListener(e, t, !0);
		};
	}, [
		ye,
		Me,
		d
	]), E.useEffect(() => {
		if (!xe.h || !h) return;
		let e = 0, t = 0, { ringR: n, ringScale: r, drumR: i, bow: a, slidePitch: o } = je, s = xe.w > 760 ? xe.w * .16 : 0;
		T.current = On(T.current, 0, h), w.current = On(w.current, 0, h);
		let d = () => {
			!e && !document.hidden && (e = requestAnimationFrame(f));
		}, f = (f) => {
			e = 0;
			let p = t ? Math.min((f - t) / 1e3, .05) : 1 / 60;
			t = f;
			let m = T.current - w.current;
			if (Ce || Math.abs(m) < 5e-4 && Math.abs(ee.current) < .008) w.current = T.current, ee.current = 0;
			else {
				let e = ne.current === "wheel" ? 25 : 19, t = w.current - T.current, n = (ee.current + e * t) * p, r = Math.exp(-e * p);
				w.current = T.current + (t + n) * r, ee.current = (ee.current - e * n) * r;
			}
			let v = w.current;
			ie.current !== null && (v >= ie.current + 1 || v === 0 && T.current === 0) && (ie.current = null);
			let E = ie.current, O = j.current;
			v === 0 && (j.current = null);
			let k = On(v / (O?.turn ?? (E === null ? 1 : E + 1)), 0, 1), A = O?.position ?? E ?? Math.max(0, v - 1), ae = !Ce && !Te && !re.current && !D.current && !_e.current && T.current === 0 && k < .001, oe = !Te && !re.current && !D.current && !_e.current && T.current === 0 && k < .001 && !u;
			me.current !== oe && (me.current = oe, l?.(oe)), pe.current !== ae && (pe.current = ae, c?.(ae)), ae && !_ && (te.current = (te.current + p * 3) % 360), y.current && (y.current.dataset.turn = v.toFixed(4)), y.current && (y.current.dataset.rotation = te.current.toFixed(3)), b.current && (_ ? b.current.style.opacity = String(On((k - .15) / .85, 0, 1)) : b.current.style.transform = `translateZ(${-k * i}px)`);
			let se = s + (1 - k) * o * (O ? -.68 : .68);
			for (let e = 0; (!_ || v > 0) && e < h; e++) {
				let t = e - A, s = x.current[e];
				if (s) {
					if (_) {
						let e = On(Math.abs(t), 0, 1), n = On(t, -1, 1) * -15;
						s.style.transform = `translate3d(${t * o + se}px, 0, 0) perspective(850px) rotateY(${n}deg) scale(${1 - .15 * e})`, s.style.filter = `blur(${e * 4}px)`, s.style.opacity = String(On(1.55 - Math.abs(t) * .65, 0, 1));
					} else {
						let o = E === null ? t * 360 / h + te.current : (e * 360 / h + te.current + 180) % 360 - 180;
						s.style.transform = jn(o, t * yn, n, i, a, k), s.style.opacity = k > .5 && Math.abs(t) > wn ? "0" : "1";
						let c = s.firstElementChild;
						c && (c.style.transform = `scale(${r + (1 - r) * k})`);
					}
					s.style.zIndex = String(Math.round(100 - Math.abs(t) * 2));
				}
			}
			S.current && (S.current.style.opacity = String(1 - k)), C.current && (C.current.style.opacity = String(k));
			let ce = On(Math.round(A), 0, g), le = k > .5;
			de.current !== ce && (de.current = ce, N(ce)), fe.current !== le && (fe.current = le, be(le)), w.current !== T.current || ae && !_ ? d() : t = 0;
		};
		ue.current = d;
		let p = () => {
			t = 0, document.hidden ? (cancelAnimationFrame(e), e = 0) : d();
		};
		return document.addEventListener("visibilitychange", p), d(), () => {
			cancelAnimationFrame(e), ue.current = () => {}, document.removeEventListener("visibilitychange", p);
		};
	}, [
		je,
		xe.h,
		xe.w,
		h,
		g,
		Ce,
		Te,
		c,
		l,
		u,
		_
	]), E.useEffect(() => {
		s?.(M, ye);
	}, [
		M,
		ye,
		s
	]), E.useLayoutEffect(() => {
		_ && ue.current();
	}, [M, _]), E.useEffect(() => {
		let e = y.current;
		if (!e || !h) return;
		let t = (t) => {
			if (t.ctrlKey || t.target instanceof Element && t.target.closest("button")) return;
			if (u) {
				t.preventDefault();
				return;
			}
			let n = (Math.abs(t.deltaY) >= Math.abs(t.deltaX) ? t.deltaY : t.deltaX) * (t.deltaMode === 1 ? 16 : t.deltaMode === 2 ? xe.h : 1);
			if (!n || (t.preventDefault(), window.clearTimeout(he.current), ie.current !== null)) return;
			if (T.current === 0 && w.current < 5e-4) {
				let n = t.target instanceof Element ? t.target.closest("[data-wheel-card], [data-overview-card]") : null, r = n && e.contains(n) ? Number(n.dataset.overviewCard ?? n.dataset.wheelCard) : O.current;
				if (r !== null && r >= 0 && r < h) {
					ie.current = r, ce.current = {
						time: performance.now(),
						delta: 0,
						start: r + 1
					}, Me(r + 1, "wheel");
					return;
				}
			}
			let r = performance.now(), i = Math.sign(n), a = ce.current;
			(r - a.time > 180 || Math.sign(a.delta) !== i) && (a.start = T.current, a.delta = 0), a.time = r, a.delta += n;
			let o = Math.abs(n);
			t.deltaMode !== 0 || t.deltaX === 0 && Number.isInteger(o) && o >= 80 && (o % 100 == 0 || o % 120 == 0 || o % 80 == 0) ? Me(Math.round(T.current) + i, "wheel") : (Me(T.current === 0 && n > 0 ? 1 : T.current + n / Tn, "wheel"), he.current = window.setTimeout(() => {
				let e = T.current - a.start, t = Math.abs(e) > .16 ? Math.sign(e) * .12 : 0;
				Me(Math.round(T.current + t));
			}, Dn));
		}, n = e.parentElement;
		return n?.addEventListener("wheel", t, { passive: !1 }), () => {
			n?.removeEventListener("wheel", t), window.clearTimeout(he.current);
		};
	}, [
		Me,
		h,
		xe.h,
		u
	]);
	let Ne = (e, t = !1) => {
		let n = _e.current;
		if (n && n.id === e.pointerId) {
			if (n.moved) {
				ge.current = performance.now() + 350;
				let e = T.current - n.origin;
				Me(t ? Math.round(T.current) : e > .15 ? Math.ceil(T.current) : e < -.15 ? Math.floor(T.current) : Math.round(T.current));
			}
			_e.current = null, ue.current(), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId);
		}
	}, Pe = (e) => {
		O.current !== e && (re.current = e !== null, O.current = e, ue.current());
	};
	return h ? /* @__PURE__ */ (0, z.jsxs)("section", {
		className: mn("works-wheel relative h-full w-full overflow-hidden select-none", p),
		"aria-label": "精选产品设计案例",
		"aria-busy": u || void 0,
		"data-case-refreshing": u ? "true" : void 0,
		"data-wheel-mode": ye ? "drum" : "ring",
		"data-custom-overview": _ || void 0,
		"data-wheel-active": M,
		"data-rotation-paused": Te ? "true" : "false",
		...m,
		children: [
			/* @__PURE__ */ (0, z.jsxs)("div", {
				ref: y,
				className: "works-wheel-stage absolute inset-0",
				tabIndex: 0,
				role: "region",
				"aria-roledescription": _ ? ye ? "横向案例轮播" : "弧形案例展带" : "三维案例轮播",
				"aria-label": _ ? "滚轮或左右拖动切换案例，按 Home 返回总览" : "滚动或拖动切换案例；方向键切换，Home 返回总览",
				style: {
					perspective: `${je.depth}px`,
					"--wheel-card-height": `${je.cardH}px`
				},
				onFocusCapture: () => {
					D.current = !0, ue.current();
				},
				onBlurCapture: (e) => {
					e.currentTarget.contains(e.relatedTarget) || (D.current = !1, ue.current());
				},
				onDragStart: (e) => e.preventDefault(),
				onPointerDown: (e) => {
					u || e.isPrimary && e.button === 0 && !e.target.closest("button") && (window.clearTimeout(he.current), _e.current = {
						id: e.pointerId,
						x: e.clientX,
						y: e.clientY,
						origin: T.current,
						moved: !1
					}, ue.current());
				},
				onPointerMove: (e) => {
					let t = _e.current;
					if (!t || t.id !== e.pointerId) return;
					let n = t.x - e.clientX, r = t.y - e.clientY, i = _ ? n : Math.abs(r) >= Math.abs(n) ? r : n;
					if (!t.moved && Math.abs(i) < 6) return;
					t.moved || (t.moved = !0, e.currentTarget.setPointerCapture(e.pointerId));
					let a = _ ? je.slidePitch : xe.w < 761 ? 230 : En;
					Me(t.origin + i / a, "drag");
				},
				onPointerUp: (e) => Ne(e),
				onPointerCancel: (e) => Ne(e, !0),
				onLostPointerCapture: (e) => {
					e.target === e.currentTarget && Ne(e, !0);
				},
				onKeyDown: (e) => {
					if (!u && !(e.target.closest("button") || e.altKey || e.ctrlKey || e.metaKey)) {
						if ([
							"ArrowDown",
							"ArrowRight",
							"PageDown"
						].includes(e.key)) Me(Math.round(T.current) + 1);
						else if ([
							"ArrowUp",
							"ArrowLeft",
							"PageUp"
						].includes(e.key)) Me(Math.round(T.current) - 1);
						else if (e.key === "Home" || e.key === "Escape") Me(0);
						else if (e.key === "End") Me(h);
						else if (/^[1-9]$/.test(e.key) && Number(e.key) <= h) Me(Number(e.key));
						else return;
						e.preventDefault();
					}
				},
				children: [
					/* @__PURE__ */ (0, z.jsx)("div", {
						className: "works-wheel-rail-window",
						children: /* @__PURE__ */ (0, z.jsx)("div", {
							ref: b,
							inert: _ && !ye,
							className: "works-wheel-rotor absolute left-1/2 top-1/2 [transform-style:preserve-3d]",
							children: e.map((e, t) => _ && Math.abs(t - M) > 3 ? null : /* @__PURE__ */ (0, z.jsx)("a", {
								href: e.href,
								id: ve + "-" + t,
								ref: (e) => {
									x.current[t] = e;
								},
								className: "works-wheel-card group absolute [backface-visibility:hidden]",
								"data-wheel-card": t,
								"data-wheel-front": ye && t === M ? "true" : void 0,
								tabIndex: !e.href || ye && t !== M ? -1 : 0,
								"aria-hidden": ye && t !== M,
								"aria-label": e.title + (e.category ? "，" + e.category : "") + "，查看案例",
								style: {
									width: je.cardW,
									height: je.cardH,
									marginLeft: -je.cardW / 2,
									marginTop: -je.cardH / 2
								},
								onClick: (n) => {
									if (u) {
										n.preventDefault();
										return;
									}
									if (performance.now() < ge.current) {
										n.preventDefault();
										return;
									}
									if (!(n.button !== 0 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey)) {
										if (ye && t !== M) {
											n.preventDefault(), Me(t + 1);
											return;
										}
										e.href && o && (n.preventDefault(), o(e, n));
									}
								},
								children: /* @__PURE__ */ (0, z.jsxs)("span", {
									className: "works-wheel-face relative block size-full overflow-hidden rounded-lg",
									"data-visual": !0,
									onPointerEnter: (e) => {
										e.pointerType === "mouse" && Pe(t);
									},
									onPointerLeave: () => {
										O.current === t && Pe(null);
									},
									children: [/* @__PURE__ */ (0, z.jsx)("img", {
										src: e.image,
										alt: e.title,
										draggable: !1,
										decoding: "async",
										fetchPriority: t === M ? "high" : "auto",
										className: "size-full object-cover"
									}), i && e.href && /* @__PURE__ */ (0, z.jsxs)("span", {
										className: "works-wheel-action",
										children: [/* @__PURE__ */ (0, z.jsx)(se, {
											size: 13,
											strokeWidth: 1.5
										}), i]
									})]
								})
							}, t))
						})
					}),
					_ ? /* @__PURE__ */ (0, z.jsx)("div", {
						className: "works-wheel-overview",
						inert: ye,
						onPointerOver: (e) => {
							if (e.pointerType !== "mouse" || !(e.target instanceof Element)) return;
							let t = e.target.closest("[data-overview-card]");
							t && Pe(Number(t.dataset.overviewCard));
						},
						onPointerOut: (e) => {
							if (!(e.target instanceof Element)) return;
							let t = e.target.closest("[data-overview-card]");
							t && O.current === Number(t.dataset.overviewCard) && !(e.relatedTarget instanceof Node && t.contains(e.relatedTarget)) && Pe(null);
						},
						onClickCapture: (e) => {
							(u || performance.now() < ge.current) && (e.preventDefault(), e.stopPropagation());
						},
						children: f
					}) : /* @__PURE__ */ (0, z.jsx)("div", {
						ref: S,
						className: "works-wheel-label pointer-events-none absolute inset-0 grid place-content-center",
						children: n ? /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)("img", {
							src: n,
							alt: "",
							className: "works-wheel-brand-logo",
							draggable: !1
						}), /* @__PURE__ */ (0, z.jsx)("h1", {
							className: "works-wheel-company-name",
							children: r || t
						})] }) : /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)("h1", { children: t }), /* @__PURE__ */ (0, z.jsx)("p", { children: "精选设计案例" })] })
					}),
					/* @__PURE__ */ (0, z.jsxs)("div", {
						ref: C,
						className: "works-wheel-title pointer-events-none absolute opacity-0",
						children: [
							/* @__PURE__ */ (0, z.jsx)("p", {
								className: "works-wheel-category",
								children: e[M]?.category
							}),
							/* @__PURE__ */ (0, z.jsx)("h2", { children: e[M]?.title }),
							e[M]?.href && /* @__PURE__ */ (0, z.jsxs)("a", {
								href: e[M].href,
								tabIndex: ye ? 0 : -1,
								className: "works-wheel-title-link",
								onPointerDown: (e) => e.stopPropagation(),
								onClick: (t) => {
									!o || t.button !== 0 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || (t.preventDefault(), o(e[M], t));
								},
								children: ["查看案例", /* @__PURE__ */ (0, z.jsx)(se, { size: 15 })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, z.jsxs)("div", {
				className: "works-wheel-controls",
				"data-visible": De ? "true" : "false",
				children: [
					/* @__PURE__ */ (0, z.jsx)("button", {
						type: "button",
						"aria-label": "上一个案例",
						disabled: u || !ye,
						onClick: () => Me(Math.round(T.current) - 1),
						children: _ ? /* @__PURE__ */ (0, z.jsx)(A, { size: 16 }) : /* @__PURE__ */ (0, z.jsx)(le, { size: 16 })
					}),
					/* @__PURE__ */ (0, z.jsx)("span", {
						className: "works-wheel-count",
						children: ye ? An(M + 1) + " / " + An(h) : _ ? "设计案例" : An(h) + " 个精选案例"
					}),
					/* @__PURE__ */ (0, z.jsx)("button", {
						type: "button",
						"aria-label": ye ? "下一个案例" : "展开精选案例",
						disabled: u || ye && M === g,
						onClick: () => Me(Math.round(T.current) + 1),
						children: _ ? /* @__PURE__ */ (0, z.jsx)(ae, { size: 16 }) : /* @__PURE__ */ (0, z.jsx)(k, { size: 16 })
					}),
					ye && /* @__PURE__ */ (0, z.jsxs)("button", {
						type: "button",
						className: "works-wheel-reset",
						onClick: () => Me(0),
						"aria-label": "返回案例总览",
						children: [/* @__PURE__ */ (0, z.jsx)(Ae, { size: 13 }), /* @__PURE__ */ (0, z.jsx)("span", { children: "总览" })]
					}),
					!ye && !Ce && /* @__PURE__ */ (0, z.jsx)("button", {
						type: "button",
						className: "works-wheel-pause",
						disabled: u,
						onClick: () => Ee((e) => !e),
						"aria-label": (Te ? "继续" : "暂停") + (_ ? "展带" : "旋转"),
						"aria-pressed": Te,
						children: Te ? /* @__PURE__ */ (0, z.jsx)(Oe, { size: 13 }) : /* @__PURE__ */ (0, z.jsx)(we, { size: 13 })
					})
				]
			}),
			/* @__PURE__ */ (0, z.jsx)("p", {
				className: "sr-only",
				"aria-live": "polite",
				"aria-atomic": "true",
				children: ye ? "第 " + (M + 1) + " 个案例，共 " + h + " 个：" + e[M]?.title : "案例总览，共 " + h + " 个案例"
			})
		]
	}) : /* @__PURE__ */ (0, z.jsx)("section", {
		className: mn("works-wheel", p),
		...m,
		children: /* @__PURE__ */ (0, z.jsx)("p", { children: "暂无设计案例" })
	});
}
//#endregion
//#region src/components/ui/tilted-grid-hero.tsx
var Nn = 16, Pn = 1.52, Fn = 84 * Math.PI / 180, In = 16 / 9, Ln = 4, Rn = 56, zn = (.52 + Math.cos(Fn)) / (2 * Pn * Math.sin(Fn)), Bn = (e) => e * 180 / Math.PI;
function Vn(e, t, n) {
	let r = Math.min(t * .26, e * .55 / In), i = e * zn, a = Bn(r / i), o = 1.8377777777777777 * a, s = Bn(Fn) + In * a / 2, c = s + 5, l = Math.min(48, n, Math.ceil(2 * c / o));
	return {
		tileHeight: r,
		radius: i,
		unit: a,
		columns: l,
		sweep: Math.max(l * o / 2, c),
		limit: s
	};
}
function Hn(e, t, n, r) {
	let i = new Set(e.filter((e, n) => n !== t));
	for (; i.has(n % r);) n++;
	return e[t] = n % r, n + 1;
}
function Un({ items: e, logo: t, companyName: n, paused: r, onOpen: i }) {
	let a = E.useRef(null), o = "case-orbit-" + E.useId().replace(/[^a-zA-Z0-9]/g, ""), [s, c] = E.useState(null), [l, u] = E.useState({
		slots: [],
		next: 0
	});
	E.useEffect(() => {
		let t = a.current;
		if (!t) return;
		let n = new ResizeObserver(([t]) => {
			let { width: n, height: r } = t.contentRect;
			n > 0 && r > 0 && c(Vn(n, r, e.length));
		});
		return n.observe(t), () => n.disconnect();
	}, [e.length]);
	let d = s?.columns ?? 0;
	E.useLayoutEffect(() => {
		u((t) => {
			if (t.slots.length === d) return t;
			let n = t.slots.slice(0, d), r = t.next;
			for (let i = d - 1; i >= t.slots.length; i--) r = Hn(n, i, r, e.length);
			return {
				slots: n,
				next: r
			};
		});
	}, [d, e.length]), E.useEffect(() => {
		for (let t = 0; t < Math.min(2, e.length); t++) {
			let n = new Image();
			n.src = e[(l.next + t) % e.length].image;
		}
	}, [e, l.next]);
	let { tileHeight: f, radius: p, unit: m, sweep: h, limit: g } = s ?? Vn(1200, 700, e.length), _ = f * In, v = _ / Nn, y = d * Ln, b = (e) => `translateZ(${p}px) rotateY(${e}deg) translateZ(${-p}px)`, x = Math.max(0, (h - g) / (2 * h) * 100), S = `@keyframes ${o}{
    from{transform:${b(-h)}}to{transform:${b(h)}}
    0%,${x}%,${100 - x}%,100%{visibility:hidden}
    ${x + .001}%,${100 - x - .001}%{visibility:visible}
  }`;
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		ref: a,
		className: "tilted-grid-hero",
		"data-paused": r,
		children: [
			/* @__PURE__ */ (0, z.jsx)("style", { children: S }),
			/* @__PURE__ */ (0, z.jsxs)("div", {
				className: "tilted-grid-heading",
				children: [/* @__PURE__ */ (0, z.jsx)("img", {
					src: t,
					alt: "",
					draggable: !1
				}), /* @__PURE__ */ (0, z.jsx)("h1", { children: n })]
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "tilted-grid-band",
				role: "group",
				"aria-label": "精选设计案例",
				style: {
					opacity: +!!s,
					perspective: p * Pn,
					perspectiveOrigin: `50% ${Rn}%`
				},
				children: l.slots.map((t, n) => {
					let r = e[t];
					return /* @__PURE__ */ (0, z.jsx)("a", {
						className: "tilted-grid-tile",
						href: r.href,
						"aria-label": r.title + "，查看案例",
						"data-overview-card": t,
						style: {
							left: `calc(50% - ${_ / 2}px)`,
							top: `calc(${Rn}% - ${f / 2}px)`,
							width: _,
							height: f,
							animationName: o,
							animationDuration: `${y}s`,
							animationDelay: `${-n * Ln}s`
						},
						onClick: (e) => {
							e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), i(r, e));
						},
						onAnimationIteration: (t) => {
							t.target === t.currentTarget && u((t) => {
								if (n >= t.slots.length) return t;
								let r = [...t.slots];
								return {
									slots: r,
									next: Hn(r, n, t.next, e.length)
								};
							});
						},
						children: /* @__PURE__ */ (0, z.jsx)("span", {
							className: "tilted-grid-face",
							"aria-hidden": "true",
							children: Array.from({ length: Nn }, (e, t) => /* @__PURE__ */ (0, z.jsx)("span", {
								className: mn("tilted-grid-slice", t === 0 && "is-first", t === 15 && "is-last"),
								style: {
									left: (_ - v) / 2,
									width: v + (t === 15 ? 0 : 2),
									transformOrigin: `${v / 2}px 50%`,
									transform: b((In / 2 - (t + .5) * In / Nn) * m)
								},
								children: /* @__PURE__ */ (0, z.jsx)("img", {
									src: r.image,
									alt: "",
									draggable: !1,
									decoding: "async",
									style: {
										left: -t * v,
										width: _
									}
								})
							}, t))
						})
					}, n);
				})
			})
		]
	});
}
//#endregion
//#region src/components/ui/background-snippets.tsx
function Wn() {
	return /* @__PURE__ */ (0, z.jsx)("div", { className: "absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(222,105,110,0.3),transparent)]" });
}
//#endregion
//#region src/hooks/use-pointer-idle.ts
var Gn = "(hover: hover) and (pointer: fine)";
function Kn(e, t = 1200) {
	let [n, r] = (0, E.useState)(!0), [i, a] = (0, E.useState)(() => typeof window < "u" && window.matchMedia(Gn).matches);
	return (0, E.useEffect)(() => {
		let n = window.matchMedia(Gn);
		if (a(n.matches), r(!0), !e) return;
		let i = 0, o = !1, s = () => {
			window.clearTimeout(i), o && (o = !1, r(!0));
		}, c = () => {
			n.matches && (o || (o = !0, r(!1)), window.clearTimeout(i), i = window.setTimeout(s, t));
		}, l = (e) => {
			(e.pointerType === "mouse" || e.pointerType === "pen") && c();
		}, u = (e) => {
			e.key === "Tab" && c();
		}, d = () => {
			document.hidden && s();
		}, f = () => {
			a(n.matches), s();
		};
		return window.addEventListener("pointermove", l, { passive: !0 }), window.addEventListener("keydown", u), window.addEventListener("blur", s), document.addEventListener("visibilitychange", d), n.addEventListener("change", f), () => {
			window.clearTimeout(i), window.removeEventListener("pointermove", l), window.removeEventListener("keydown", u), window.removeEventListener("blur", s), document.removeEventListener("visibilitychange", d), n.removeEventListener("change", f);
		};
	}, [e, t]), e && i && n;
}
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var qn = Object.defineProperty, Jn = (e, t) => qn(e, "name", {
	value: t,
	configurable: !0
});
function Yn(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Jn(Yn, "setRef");
function Xn(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Yn(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Yn(e[t], null);
			}
		};
	};
}
Jn(Xn, "composeRefs");
function Zn(...e) {
	return E.useCallback(Xn(...e), e);
}
Jn(Zn, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
var Qn = Object.defineProperty, $n = (e, t) => Qn(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function er(e) {
	let t = E.forwardRef((t, n) => {
		let { children: r, ...i } = t, a = null, o = !1, s = [];
		r = dr(r), E.Children.forEach(r, (e) => {
			if (sr(e)) {
				o = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				for (; lr(n) && typeof hr == "function";) n = hr(n._payload);
				a = ir(t, n), s.push(a?.props?.children);
			} else s.push(e);
		}), a ? a = E.cloneElement(a, void 0, s) : !o && E.Children.count(r) === 1 && E.isValidElement(r) && (a = r);
		let c = a ? or(a) : void 0, l = Zn(n, c);
		if (!a) {
			if (r || r === 0) throw Error(o ? mr(e) : pr(e));
			return r;
		}
		let u = ar(i, a.props ?? {});
		return a.type !== E.Fragment && (u.ref = n ? l : c), E.cloneElement(a, u);
	});
	return t.displayName = `${e}.Slot`, t;
}
$n(er, "createSlot");
var tr = /* @__PURE__ */ er("Slot"), nr = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function rr(e) {
	let t = /* @__PURE__ */ $n((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = nr, t;
}
$n(rr, "createSlottable");
var ir = /* @__PURE__ */ $n((e, t) => "child" in e.props ? E.isValidElement(t) ? E.cloneElement(t, void 0, e.props.children(t.props.children)) : null : E.isValidElement(t) ? t : null, "getSlottableElementFromSlottable");
function ar(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = fr(a, i));
	}
	return {
		...e,
		...n
	};
}
$n(ar, "mergeProps");
function or(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
$n(or, "getElementRef");
function sr(e) {
	return E.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === nr;
}
$n(sr, "isSlottable");
var cr = Symbol.for("react.lazy");
function lr(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === cr && "_payload" in e && ur(e._payload);
}
$n(lr, "isLazyComponent");
function ur(e) {
	return typeof e == "object" && !!e && "then" in e;
}
$n(ur, "isPromiseLike");
function dr(e) {
	let t = e;
	for (; lr(t) && typeof hr == "function";) t = hr(t._payload);
	return t;
}
$n(dr, "useUnwrappedLazy");
function fr(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
$n(fr, "concatAriaDescribedby");
var pr = /* @__PURE__ */ $n((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), mr = /* @__PURE__ */ $n((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), hr = E.use, gr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, _r = He, vr = (e, t) => (n) => {
	if (t?.variants == null) return _r(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = gr(t) || gr(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return _r(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, yr = vr("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			outline: "border border-border bg-background hover:bg-accent",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 px-3",
			lg: "h-11 px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), br = E.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) => /* @__PURE__ */ (0, z.jsx)(r ? tr : "button", {
	className: mn(yr({
		variant: t,
		size: n,
		className: e
	})),
	ref: a,
	...i
}));
br.displayName = "Button";
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
var xr = Object.defineProperty, Sr = (e, t) => xr(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Cr(e, t) {
	let n = E.createContext(t);
	n.displayName = e + "Context";
	let r = /* @__PURE__ */ Sr((e) => {
		let { children: t, ...r } = e, i = E.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ (0, z.jsx)(n.Provider, {
			value: i,
			children: t
		});
	}, "Provider");
	r.displayName = e + "Provider";
	function i(r, i = {}) {
		let { optional: a = !1 } = i, o = E.useContext(n);
		if (o) return o;
		if (t !== void 0) return t;
		if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return Sr(i, "useContext"), [r, i];
}
Sr(Cr, "createContext");
// @__NO_SIDE_EFFECTS__
function wr(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = E.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = /* @__PURE__ */ Sr((t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = E.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ (0, z.jsx)(s.Provider, {
				value: c,
				children: r
			});
		}, "Provider");
		o.displayName = t + "Provider";
		function s(n, o, s = {}) {
			let { optional: c = !1 } = s, l = o?.[e]?.[a] || i, u = E.useContext(l);
			if (u) return u;
			if (r !== void 0) return r;
			if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return Sr(s, "useContext"), [o, s];
	}
	Sr(r, "createContext");
	let i = /* @__PURE__ */ Sr(() => {
		let t = n.map((e) => E.createContext(e));
		return /* @__PURE__ */ Sr(function(n) {
			let r = n?.[e] || t;
			return E.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		}, "useScope");
	}, "createScope");
	return i.scopeName = e, [r, Tr(i, ...t)];
}
Sr(wr, "createContextScope");
function Tr(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = /* @__PURE__ */ Sr(() => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ Sr(function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return E.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		}, "useComposedScopes");
	}, "createScope");
	return n.scopeName = t.scopeName, n;
}
Sr(Tr, "composeContextScopes");
//#endregion
//#region node_modules/@radix-ui/primitive/dist/index.mjs
var Er = Object.defineProperty, Dr = (e, t) => Er(e, "name", {
	value: t,
	configurable: !0
}), Or = !!(typeof window < "u" && window.document && window.document.createElement);
function kr(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ Dr(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
Dr(kr, "composeEventHandlers");
function Ar(e) {
	if (!Or) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
Dr(Ar, "getOwnerWindow");
function jr(e) {
	if (!Or) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
Dr(jr, "getOwnerDocument");
function Mr(e, t = !1) {
	let { activeElement: n } = jr(e);
	if (!n?.nodeName) return null;
	if (Nr(n) && n.contentDocument) return Mr(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = jr(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
Dr(Mr, "getActiveElement");
function Nr(e) {
	return e.tagName === "IFRAME";
}
Dr(Nr, "isFrame");
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var Pr = Object.defineProperty, Fr = (e, t) => Pr(e, "name", {
	value: t,
	configurable: !0
}), Ir = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = /* @__PURE__ */ er(`Primitive.${t}`), r = E.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, z.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function Lr(e, t) {
	e && ze.flushSync(() => e.dispatchEvent(t));
}
Fr(Lr, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Rr = globalThis?.document ? E.useLayoutEffect : () => {}, zr = Object.defineProperty, Br = (e, t) => zr(e, "name", {
	value: t,
	configurable: !0
}), Vr = E.useEffectEvent, Hr = E.useInsertionEffect;
function Ur(e) {
	if (typeof Vr == "function") return Vr(e);
	let t = E.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof Hr == "function" ? Hr(() => {
		t.current = e;
	}) : Rr(() => {
		t.current = e;
	}), E.useMemo(() => ((...e) => t.current?.(...e)), []);
}
Br(Ur, "useEffectEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Wr = Object.defineProperty, Gr = (e, t) => Wr(e, "name", {
	value: t,
	configurable: !0
}), Kr = E.useInsertionEffect || Rr;
function qr({ prop: e, defaultProp: t, onChange: n = /* @__PURE__ */ Gr(() => {}, "onChange"), caller: r }) {
	let [i, a, o] = Jr({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0;
	return [s ? e : i, E.useCallback((t) => {
		if (s) {
			let n = Yr(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
Gr(qr, "useControllableState");
function Jr({ defaultProp: e, onChange: t }) {
	let [n, r] = E.useState(e), i = E.useRef(n), a = E.useRef(t);
	return Kr(() => {
		a.current = t;
	}, [t]), E.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
Gr(Jr, "useUncontrolledState");
function Yr(e) {
	return typeof e == "function";
}
Gr(Yr, "isFunction");
var Xr = Symbol("RADIX:SYNC_STATE");
function Zr(e, t, n, r) {
	let { prop: i, defaultProp: a, onChange: o, caller: s } = t, c = i !== void 0, l = Ur(o), u = [{
		...n,
		state: a
	}];
	r && u.push(r);
	let [d, f] = E.useReducer((t, n) => {
		if (n.type === Xr) return {
			...t,
			state: n.state
		};
		let r = e(t, n);
		return c && !Object.is(r.state, t.state) && l(r.state), r;
	}, ...u), p = d.state, m = E.useRef(p);
	E.useEffect(() => {
		m.current !== p && (m.current = p, c || l(p));
	}, [
		p,
		m,
		c
	]);
	let h = E.useMemo(() => i === void 0 ? d : {
		...d,
		state: i
	}, [d, i]);
	return E.useEffect(() => {
		c && !Object.is(i, d.state) && f({
			type: Xr,
			state: i
		});
	}, [
		i,
		d.state,
		c
	]), [h, f];
}
Gr(Zr, "useControllableStateReducer");
//#endregion
//#region node_modules/@radix-ui/react-direction/dist/index.mjs
var Qr = Object.defineProperty, $r = (e, t) => Qr(e, "name", {
	value: t,
	configurable: !0
}), ei = {
	LTR: "ltr",
	RTL: "rtl"
}, ti = E.createContext(void 0);
function ni(e) {
	let t = E.useContext(ti);
	return e || t || ei.LTR;
}
$r(ni, "useDirection");
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
var ri = Object.defineProperty, ii = (e, t) => ri(e, "name", {
	value: t,
	configurable: !0
});
function ai(e, t) {
	return E.useReducer((e, n) => t[e][n] ?? e, e);
}
ii(ai, "useStateMachine");
var oi = /* @__PURE__ */ ii((e) => {
	let { present: t, children: n } = e, r = si(t), i = typeof n == "function" ? n({ present: r.isPresent }) : E.Children.only(n), a = li(r.ref, di(i));
	return typeof n == "function" || r.isPresent ? E.cloneElement(i, { ref: a }) : null;
}, "Presence");
function si(e) {
	let [t, n] = E.useState(), r = E.useRef(null), i = E.useRef(e), a = E.useRef("none"), o = E.useRef(void 0), [s, c] = ai(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return E.useEffect(() => {
		s === "mounted" ? (a.current = o.current ?? ui(r.current), o.current = void 0) : a.current = "none";
	}, [s]), Rr(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, s = ui(t);
			e ? (o.current = s, c("MOUNT")) : s === "none" || t?.display === "none" ? c("UNMOUNT") : c(n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, c]), Rr(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = /* @__PURE__ */ ii((a) => {
				let o = ui(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (c("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ ii((e) => {
				e.target === t && (a.current = ui(r.current));
			}, "handleAnimationStart");
			return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		}
		c("ANIMATION_END");
	}, [t, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: E.useCallback((e) => {
			if (e) {
				let t = getComputedStyle(e);
				r.current = t, o.current = ui(t);
			} else r.current = null;
			n(e);
		}, [])
	};
}
ii(si, "usePresence");
function ci(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
ii(ci, "setRef");
function li(...e) {
	let t = E.useRef(e);
	return t.current = e, E.useCallback((e) => {
		let n = t.current, r = !1, i = n.map((t) => {
			let n = ci(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "function" ? t() : ci(n[e], null);
			}
		};
	}, []);
}
ii(li, "useStableComposedRefs");
function ui(e) {
	return e?.animationName || "none";
}
ii(ui, "getAnimationName");
function di(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
ii(di, "getElementRef");
//#endregion
//#region node_modules/@radix-ui/react-id/dist/index.mjs
var fi = Object.defineProperty, pi = (e, t) => fi(e, "name", {
	value: t,
	configurable: !0
}), mi = E.useId || (() => void 0), hi = 0;
function gi(e) {
	let [t, n] = E.useState(mi());
	return Rr(() => {
		e || n((e) => e ?? String(hi++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
pi(gi, "useId");
//#endregion
//#region node_modules/@radix-ui/react-collection/dist/index.mjs
var _i = Object.defineProperty, vi = (e, t) => _i(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function yi(e) {
	let t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ wr(t), [i, a] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), o = /* @__PURE__ */ vi((e) => {
		let { scope: t, children: n } = e, r = E.useRef(null), a = E.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, z.jsx)(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	}, "CollectionProvider");
	o.displayName = t;
	let s = e + "CollectionSlot", c = /* @__PURE__ */ er(s), l = E.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = Zn(t, a(s, n).collectionRef);
		return /* @__PURE__ */ (0, z.jsx)(c, {
			ref: i,
			children: r
		});
	});
	l.displayName = s;
	let u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ er(u), p = E.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = E.useRef(null), s = Zn(t, o), c = a(u, n);
		return E.useEffect(() => (c.itemMap.set(o, {
			ref: o,
			...i
		}), () => void c.itemMap.delete(o))), /* @__PURE__ */ (0, z.jsx)(f, {
			[d]: "",
			ref: s,
			children: r
		});
	});
	p.displayName = u;
	function m(t) {
		let n = a(e + "CollectionConsumer", t);
		return E.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${d}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return vi(m, "useCollection"), [
		{
			Provider: o,
			Slot: l,
			ItemSlot: p
		},
		m,
		r
	];
}
vi(yi, "createCollection");
var bi = /* @__PURE__ */ new WeakMap(), xi = class e extends Map {
	static {
		vi(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], bi.set(this, !0);
	}
	set(e, t) {
		return bi.get(this) && !this.has(e) && this.#e.push(e), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = r ? this.size : this.size + 1, a = wi(e), o = a >= 0 ? Math.min(a, i - 1) : Math.max(i + a, 0);
		if (r ? this.#e.indexOf(t) === o : o === this.size) return this.set(t, n), this;
		let s = this.#e.filter((e) => e !== t);
		s.splice(o, 0, t);
		let c = s.map((e) => [e, e === t ? n : this.get(e)]);
		this.clear();
		for (let [e, t] of c) this.set(e, t);
		return this;
	}
	with(t, n, r) {
		let i = new e(this);
		return i.insert(t, n, r), i;
	}
	before(e) {
		let t = this.#e.indexOf(e) - 1;
		if (!(t < 0)) return this.entryAt(t);
	}
	setBefore(e, t, n) {
		let r = this.#e.indexOf(e);
		if (r === -1) return this;
		let i = this.#e.indexOf(t), a = i !== -1 && i < r ? r - 1 : r;
		return this.insert(a, t, n);
	}
	after(e) {
		let t = this.#e.indexOf(e);
		if (t = t === -1 || t === this.size - 1 ? -1 : t + 1, t !== -1) return this.entryAt(t);
	}
	setAfter(e, t, n) {
		let r = this.#e.indexOf(e);
		if (r === -1) return this;
		let i = this.#e.indexOf(t), a = i !== -1 && i <= r ? r : r + 1;
		return this.insert(a, t, n);
	}
	first() {
		return this.entryAt(0);
	}
	last() {
		return this.entryAt(-1);
	}
	clear() {
		return this.#e = [], super.clear();
	}
	delete(e) {
		let t = super.delete(e);
		return t && this.#e.splice(this.#e.indexOf(e), 1), t;
	}
	deleteAt(e) {
		let t = this.keyAt(e);
		return t !== void 0 && this.delete(t);
	}
	at(e) {
		let t = Si(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = Si(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return Si(this.#e, e);
	}
	from(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r);
	}
	keyFrom(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r);
	}
	find(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return r;
			n++;
		}
	}
	findIndex(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return n;
			n++;
		}
		return -1;
	}
	filter(t, n) {
		let r = [], i = 0;
		for (let e of this) Reflect.apply(t, n, [
			e,
			i,
			this
		]) && r.push(e), i++;
		return new e(r);
	}
	map(t, n) {
		let r = [], i = 0;
		for (let e of this) r.push([e[0], Reflect.apply(t, n, [
			e,
			i,
			this
		])]), i++;
		return new e(r);
	}
	reduce(...e) {
		let [t, n] = e, r = e.length > 1;
		if (!r && this.size === 0) throw TypeError("Reduce of empty OrderedDict with no initial value");
		let i = 0, a = n;
		for (let e of this) a = i === 0 && !r ? e : Reflect.apply(t, this, [
			a,
			e,
			i,
			this
		]), i++;
		return a;
	}
	reduceRight(...e) {
		let [t, n] = e, r = e.length > 1;
		if (!r && this.size === 0) throw TypeError("Reduce of empty OrderedDict with no initial value");
		let i = n;
		for (let e = this.size - 1; e >= 0; e--) {
			let n = this.entryAt(e);
			i = e === this.size - 1 && !r ? n : Reflect.apply(t, this, [
				i,
				n,
				e,
				this
			]);
		}
		return i;
	}
	sort(e) {
		if (typeof e != "function") throw TypeError("OrderedDict.sort requires a compare function");
		let t = [...this.entries()].sort(e);
		this.clear();
		for (let [e, n] of t) this.set(e, n);
		return this;
	}
	toSorted(t) {
		if (typeof t != "function") throw TypeError("OrderedDict.toSorted requires a compare function");
		let n = [...this.entries()].sort(t);
		return new e(n);
	}
	toReversed() {
		let t = new e();
		for (let e = this.size - 1; e >= 0; e--) {
			let n = this.keyAt(e), r = this.get(n);
			t.set(n, r);
		}
		return t;
	}
	toSpliced(...t) {
		let n = [...this.entries()];
		return n.splice(...t), new e(n);
	}
	slice(t, n) {
		let r = new e();
		for (let e of this.#e.slice(t, n)) r.set(e, this.get(e));
		return r;
	}
	every(e, t) {
		let n = 0;
		for (let r of this) {
			if (!Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !1;
			n++;
		}
		return !0;
	}
	some(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !0;
			n++;
		}
		return !1;
	}
};
function Si(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = Ci(e, t);
	return n === -1 ? void 0 : e[n];
}
vi(Si, "at");
function Ci(e, t) {
	let n = e.length, r = wi(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
vi(Ci, "toSafeIndex");
function wi(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
vi(wi, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Ti(e) {
	let t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ wr(t), [i, a] = n(t);
	i.displayName = e + "CollectionStableContextProvider";
	let [o, s] = n(t);
	o.displayName = e + "CollectionStatefulContextProvider";
	let c = /* @__PURE__ */ vi(({ state: e, ...t }) => e ? /* @__PURE__ */ (0, z.jsx)(u, {
		...t,
		state: e
	}) : /* @__PURE__ */ (0, z.jsx)(l, { ...t }), "CollectionProvider");
	c.displayName = t;
	let l = /* @__PURE__ */ vi((e) => {
		let t = _();
		return /* @__PURE__ */ (0, z.jsx)(u, {
			...e,
			state: t
		});
	}, "CollectionInit");
	l.displayName = e + "CollectionInit";
	let u = /* @__PURE__ */ vi((e) => {
		let { scope: t, children: n, state: r } = e, a = E.useRef(null), [s, c] = E.useState(null), l = Zn(a, c), [u, d] = r, f = E.useRef(new xi()), p = E.useCallback(() => {
			let e = f.current;
			return Oi(e) || e.sort(ki), e;
		}, []);
		return E.useEffect(() => {
			if (!s) return;
			let e = Ai(() => {
				d((e) => {
					let t = e.toSorted(ki);
					return t.some(([t], n) => e.keyAt(n) !== t) ? t : e;
				});
			});
			return e.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [s, d]), /* @__PURE__ */ (0, z.jsx)(i, {
			scope: t,
			collectionElementRef: l,
			collectionElementRefObject: a,
			getCollection: p,
			setCollection: d,
			registryRef: f,
			children: /* @__PURE__ */ (0, z.jsx)(o, {
				scope: t,
				collectionElement: s,
				collection: u,
				children: n
			})
		});
	}, "CollectionProviderImpl");
	u.displayName = e + "CollectionProviderImpl";
	let d = e + "CollectionSlot", f = /* @__PURE__ */ er(d), p = E.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = Zn(t, a(d, n).collectionElementRef);
		return /* @__PURE__ */ (0, z.jsx)(f, {
			ref: i,
			children: r
		});
	});
	p.displayName = d;
	let m = e + "CollectionItemSlot", h = /* @__PURE__ */ er(m), g = E.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = E.useRef(null), { setCollection: s, registryRef: c } = a(m, n), l = E.useRef(i);
		Ei(l.current, i) || (l.current = i);
		let u = l.current, d = Zn(t, E.useCallback((e) => {
			let t = c.current;
			e ? t.set(e, {
				...l.current,
				element: e
			}) : o.current && t.delete(o.current);
		}, [c]), o);
		Rr(() => {
			let e = o.current, t = c.current;
			e && t.has(e) && t.set(e, {
				...u,
				element: e
			});
		}, [u, c]);
		let f = E.useRef(null);
		return E.useEffect(() => {
			let e = o.current, t = f.current;
			((t?.element ?? null) !== e || e && t?.itemData !== u) && (f.current = e ? {
				element: e,
				itemData: u
			} : null, s((n) => {
				let r = new xi(n);
				return t && t.element !== e && r.delete(t.element), e && r.set(e, {
					...u,
					element: e
				}), r.sort(ki);
			}));
		}), E.useEffect(() => () => {
			let e = f.current;
			f.current = null, e && s((t) => {
				if (!t.has(e.element)) return t;
				let n = new xi(t);
				return n.delete(e.element), n;
			});
		}, [s]), /* @__PURE__ */ (0, z.jsx)(h, {
			"data-radix-collection-item": "",
			ref: d,
			children: r
		});
	});
	g.displayName = m;
	function _() {
		return E.useState(new xi());
	}
	vi(_, "useInitCollection");
	function v(t) {
		let { collection: n } = s(e + "CollectionConsumer", t);
		return n;
	}
	vi(v, "useCollection");
	function y(t) {
		let { getCollection: n } = a(e + "CollectionConsumer", t);
		return n;
	}
	return vi(y, "useGetCollection"), [{
		Provider: c,
		Slot: p,
		ItemSlot: g
	}, {
		createCollectionScope: r,
		useCollection: v,
		useGetCollection: y,
		useInitCollection: _
	}];
}
vi(Ti, "createCollection");
function Ei(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
vi(Ei, "shallowEqual");
function Di(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
vi(Di, "isElementPreceding");
function Oi(e) {
	let t;
	for (let n of e.keys()) {
		if (t) {
			let e = t.compareDocumentPosition(n);
			if (!(e & Node.DOCUMENT_POSITION_DISCONNECTED) && e & Node.DOCUMENT_POSITION_PRECEDING) return !1;
		}
		t = n;
	}
	return !0;
}
vi(Oi, "isInDocumentOrder");
function ki(e, t) {
	return !e[1].element || !t[1].element ? 0 : Di(e[1].element, t[1].element) ? -1 : 1;
}
vi(ki, "sortByDocumentPosition");
function Ai(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
vi(Ai, "getChildListObserver");
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var ji = Object.defineProperty, Mi = (e, t) => ji(e, "name", {
	value: t,
	configurable: !0
}), Ni = E.useInsertionEffect;
function Pi(e) {
	let t = E.useRef(e);
	return typeof Ni == "function" ? Ni(() => {
		t.current = e;
	}) : Rr(() => {
		t.current = e;
	}), E.useMemo(() => ((...e) => t.current?.(...e)), []);
}
Mi(Pi, "useCallbackRef");
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var Fi = Object.defineProperty, Ii = (e, t) => Fi(e, "name", {
	value: t,
	configurable: !0
}), Li = "dismissableLayer.update", Ri = "dismissableLayer.pointerDownOutside", zi = "dismissableLayer.focusOutside", Bi, Vi = E.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), Hi = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ Ii(function(e, t) {
	let { disableOutsidePointerEvents: n = !1, deferPointerDownOutside: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = e, u = E.useContext(Vi), [d, f] = E.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = E.useState({}), h = Zn(t, f), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = _ ? g.indexOf(_) : -1, y = d ? g.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, S = E.useRef(!1), C = Gi((e) => {
		a?.(e), s?.(e), e.defaultPrevented || c?.();
	}, {
		ownerDocument: p,
		deferPointerDownOutside: r,
		isDeferredPointerDownOutsideRef: S,
		dismissableSurfaces: u.dismissableSurfaces,
		shouldHandlePointerDownOutside: E.useCallback((e) => {
			if (!(e instanceof Node)) return !1;
			let t = [...u.branches].some((t) => t.contains(e));
			return x && !t;
		}, [u.branches, x])
	}), w = Ki((e) => {
		if (r && S.current) return;
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p), T = d ? y === g.length - 1 : !1, ee = Pi((e) => {
		e.key === "Escape" && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	});
	return E.useEffect(() => {
		if (T) return p.addEventListener("keydown", ee, { capture: !0 }), () => p.removeEventListener("keydown", ee, { capture: !0 });
	}, [
		p,
		T,
		ee
	]), E.useEffect(() => {
		if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Bi = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), qi(), () => {
			n && (u.layersWithOutsidePointerEventsDisabled.delete(d), u.layersWithOutsidePointerEventsDisabled.size === 0 && (p.body.style.pointerEvents = Bi));
		};
	}, [
		d,
		p,
		n,
		u
	]), E.useEffect(() => () => {
		d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), qi());
	}, [d, u]), E.useEffect(() => {
		let e = /* @__PURE__ */ Ii(() => m({}), "handleUpdate");
		return document.addEventListener(Li, e), () => document.removeEventListener(Li, e);
	}, []), /* @__PURE__ */ (0, z.jsx)(Ir.div, {
		...l,
		ref: h,
		style: {
			pointerEvents: b ? x ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: kr(e.onFocusCapture, w.onFocusCapture),
		onBlurCapture: kr(e.onBlurCapture, w.onBlurCapture),
		onPointerDownCapture: kr(e.onPointerDownCapture, C.onPointerDownCapture)
	});
}, "DismissableLayer"));
function Ui() {
	let e = E.useContext(Vi), [t, n] = E.useState(null);
	return E.useEffect(() => {
		if (t) return e.dismissableSurfaces.add(t), () => {
			e.dismissableSurfaces.delete(t);
		};
	}, [t, e.dismissableSurfaces]), n;
}
Ii(Ui, "useDismissableLayerSurface");
var Wi = /* @__PURE__ */ Ii(() => !0, "IS_TRUE");
function Gi(e, t) {
	let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: r = !1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a, shouldHandlePointerDownOutside: o = Wi } = t, s = Pi(e), c = E.useRef(!1), l = E.useRef(!1), u = E.useRef(/* @__PURE__ */ new Map()), d = E.useRef(() => {});
	return E.useEffect(() => {
		function e() {
			l.current = !1, i.current = !1, u.current.clear();
		}
		Ii(e, "resetOutsideInteraction");
		function t() {
			return Array.from(u.current.values()).some(Boolean);
		}
		Ii(t, "isOutsideInteractionIntercepted");
		function f(e) {
			if (!l.current) return;
			let t = e.target;
			t instanceof Node && [...a].some((e) => e.contains(t)) || u.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				l.current && d.current();
			}, 0);
		}
		Ii(f, "handleInteractionCapture");
		function p(e) {
			l.current && u.current.set(e.type, !1);
		}
		Ii(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ Ii((a) => {
			if (a.target && !c.current) {
				let f = function() {
					n.removeEventListener("click", d.current);
					let r = t();
					e(), r || Ji(Ri, s, p, { discrete: !0 });
				};
				if (Ii(f, "handleAndDispatchPointerDownOutsideEvent"), !o(a.target)) {
					n.removeEventListener("click", d.current), e(), c.current = !1;
					return;
				}
				let p = { originalEvent: a };
				l.current = !0, i.current = r && a.button === 0, u.current.clear(), !r || a.button !== 0 ? f() : (n.removeEventListener("click", d.current), d.current = f, n.addEventListener("click", d.current, { once: !0 }));
			} else n.removeEventListener("click", d.current), e();
			c.current = !1;
		}, "handlePointerDown"), h = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of h) n.addEventListener(e, f, !0), n.addEventListener(e, p);
		let g = window.setTimeout(() => {
			n.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(g), n.removeEventListener("pointerdown", m), n.removeEventListener("click", d.current);
			for (let e of h) n.removeEventListener(e, f, !0), n.removeEventListener(e, p);
		};
	}, [
		n,
		s,
		r,
		i,
		a,
		o
	]), { onPointerDownCapture: /* @__PURE__ */ Ii(() => c.current = !0, "onPointerDownCapture") };
}
Ii(Gi, "usePointerDownOutside");
function Ki(e, t = globalThis?.document) {
	let n = Pi(e), r = E.useRef(!1);
	return E.useEffect(() => {
		let e = /* @__PURE__ */ Ii((e) => {
			e.target && !r.current && Ji(zi, n, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: /* @__PURE__ */ Ii(() => r.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ Ii(() => r.current = !1, "onBlurCapture")
	};
}
Ii(Ki, "useFocusOutside");
function qi() {
	let e = new CustomEvent(Li);
	document.dispatchEvent(e);
}
Ii(qi, "dispatchUpdate");
function Ji(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? Lr(i, a) : i.dispatchEvent(a);
}
Ii(Ji, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
var Yi = Object.defineProperty, Xi = (e, t) => Yi(e, "name", {
	value: t,
	configurable: !0
});
function Zi(e) {
	let t = E.useRef({
		value: e,
		previous: e
	});
	return E.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
Xi(Zi, "usePrevious");
//#endregion
//#region node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var Qi = Object.defineProperty, $i = (e, t) => Qi(e, "name", {
	value: t,
	configurable: !0
}), ea = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), ta = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ $i(function(e, t) {
	return /* @__PURE__ */ (0, z.jsx)(Ir.span, {
		...e,
		ref: t,
		style: {
			...ea,
			...e.style
		}
	});
}, "VisuallyHidden")), na = Object.defineProperty, B = (e, t) => na(e, "name", {
	value: t,
	configurable: !0
}), V = {
	Automatic: "automatic",
	Manual: "manual"
}, H = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, ra = {
	LTR: "ltr",
	RTL: "rtl"
}, ia = "NavigationMenu", [aa, oa, sa] = /* @__PURE__ */ yi(ia), [ca, la, ua] = /* @__PURE__ */ yi(ia), [da, fa] = /* @__PURE__ */ wr(ia, [sa, ua]), [pa, ma] = da(ia), [ha, ga] = da(ia), _a = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ B(function(e, t) {
	let { __scopeNavigationMenu: n, value: r, onValueChange: i, defaultValue: a, delayDuration: o = 200, skipDelayDuration: s = 300, orientation: c = H.Horizontal, dir: l, activationMode: u = V.Automatic, ...d } = e, [f, p] = E.useState(null), m = Zn(t, p), h = ni(l), g = E.useRef(0), _ = E.useRef(0), v = E.useRef(0), [y, b] = E.useState(!0), [x, S] = qr({
		prop: r,
		onChange: /* @__PURE__ */ B((e) => {
			let t = e !== "", n = s > 0;
			t ? (window.clearTimeout(v.current), n && b(!1)) : (window.clearTimeout(v.current), v.current = window.setTimeout(() => b(!0), s)), i?.(e);
		}, "onChange"),
		defaultProp: a ?? "",
		caller: ia
	}), C = E.useCallback(() => {
		window.clearTimeout(_.current), _.current = window.setTimeout(() => S(""), 150);
	}, [S]), w = E.useCallback((e) => {
		window.clearTimeout(_.current), S(e);
	}, [S]), T = E.useCallback((e) => {
		x === e ? window.clearTimeout(_.current) : g.current = window.setTimeout(() => {
			window.clearTimeout(_.current), S(e);
		}, o);
	}, [
		x,
		S,
		o
	]);
	return E.useEffect(() => () => {
		window.clearTimeout(g.current), window.clearTimeout(_.current), window.clearTimeout(v.current);
	}, []), /* @__PURE__ */ (0, z.jsx)(va, {
		scope: n,
		isRootMenu: !0,
		value: x,
		dir: h,
		orientation: c,
		activationMode: u,
		rootNavigationMenu: f,
		onTriggerEnter: (e) => {
			u === V.Automatic && (window.clearTimeout(g.current), y ? T(e) : w(e));
		},
		onTriggerLeave: () => {
			u === V.Automatic && (window.clearTimeout(g.current), C());
		},
		onContentEnter: () => {
			u === V.Automatic && window.clearTimeout(_.current);
		},
		onContentLeave: () => {
			u === V.Automatic && C();
		},
		onItemSelect: (e) => {
			S((t) => t === e ? "" : e);
		},
		onItemDismiss: () => S(""),
		children: /* @__PURE__ */ (0, z.jsx)(Ir.nav, {
			"aria-label": "Main",
			"data-orientation": c,
			dir: h,
			...d,
			ref: m
		})
	});
}, "NavigationMenu")), va = /* @__PURE__ */ B((e) => {
	let { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: i, orientation: a, activationMode: o, children: s, value: c, onItemSelect: l, onItemDismiss: u, onTriggerEnter: d, onTriggerLeave: f, onContentEnter: p, onContentLeave: m } = e, [h, g] = E.useState(null), [_, v] = E.useState(/* @__PURE__ */ new Map()), [y, b] = E.useState(null);
	return /* @__PURE__ */ (0, z.jsx)(pa, {
		scope: t,
		isRootMenu: n,
		rootNavigationMenu: r,
		value: c,
		previousValue: Zi(c),
		baseId: gi(),
		dir: i,
		orientation: a,
		activationMode: o,
		viewport: h,
		onViewportChange: g,
		indicatorTrack: y,
		onIndicatorTrackChange: b,
		onTriggerEnter: Pi(d),
		onTriggerLeave: Pi(f),
		onContentEnter: Pi(p),
		onContentLeave: Pi(m),
		onItemSelect: Pi(l),
		onItemDismiss: Pi(u),
		onViewportContentChange: E.useCallback((e, t) => {
			v((n) => (n.set(e, t), new Map(n)));
		}, []),
		onViewportContentRemove: E.useCallback((e) => {
			v((t) => t.has(e) ? (t.delete(e), new Map(t)) : t);
		}, []),
		children: /* @__PURE__ */ (0, z.jsx)(aa.Provider, {
			scope: t,
			children: /* @__PURE__ */ (0, z.jsx)(ha, {
				scope: t,
				items: _,
				children: s
			})
		})
	});
}, "NavigationMenuProvider"), ya = "NavigationMenuList", ba = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ B(function(e, t) {
	let { __scopeNavigationMenu: n, ...r } = e, i = ma(ya, n), a = /* @__PURE__ */ (0, z.jsx)(Ir.ul, {
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
	return /* @__PURE__ */ (0, z.jsx)(Ir.div, {
		style: { position: "relative" },
		ref: i.onIndicatorTrackChange,
		children: /* @__PURE__ */ (0, z.jsx)(aa.Slot, {
			scope: n,
			children: i.isRootMenu ? /* @__PURE__ */ (0, z.jsx)(za, {
				asChild: !0,
				children: a
			}) : a
		})
	});
}, "NavigationMenuList")), [xa, Sa] = da("NavigationMenuItem"), Ca = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ B(function(e, t) {
	let { __scopeNavigationMenu: n, value: r, ...i } = e, a = gi(), o = r || a || "LEGACY_REACT_AUTO_VALUE", s = E.useRef(null), c = E.useRef(null), l = E.useRef(null), u = E.useRef(() => {}), d = E.useRef(!1), f = E.useCallback((e = "start") => {
		if (s.current) {
			u.current();
			let t = Ua(s.current);
			t.length && Wa(e === "start" ? t : t.reverse());
		}
	}, []), p = E.useCallback(() => {
		if (s.current) {
			let e = Ua(s.current);
			e.length && (u.current = Ga(e));
		}
	}, []);
	return /* @__PURE__ */ (0, z.jsx)(xa, {
		scope: n,
		value: o,
		triggerRef: c,
		contentRef: s,
		focusProxyRef: l,
		wasEscapeCloseRef: d,
		onEntryKeyDown: f,
		onFocusProxyEnter: f,
		onRootContentClose: p,
		onContentFocusOutside: p,
		children: /* @__PURE__ */ (0, z.jsx)(Ir.li, {
			...i,
			ref: t
		})
	});
}, "NavigationMenuItem")), wa = "NavigationMenuTrigger", Ta = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ B(function(e, t) {
	let { __scopeNavigationMenu: n, disabled: r, ...i } = e, a = ma(wa, e.__scopeNavigationMenu), o = Sa(wa, e.__scopeNavigationMenu), s = E.useRef(null), c = Zn(s, o.triggerRef, t), l = Ja(a.baseId, o.value), u = Ya(a.baseId, o.value), d = E.useRef(!1), f = E.useRef(!1), p = o.value === a.value;
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(aa.ItemSlot, {
		scope: n,
		value: o.value,
		children: /* @__PURE__ */ (0, z.jsx)(Ha, {
			asChild: !0,
			children: /* @__PURE__ */ (0, z.jsx)(Ir.button, {
				id: l,
				disabled: r,
				"data-disabled": r ? "" : void 0,
				"data-state": qa(p),
				"aria-expanded": p,
				"aria-controls": p ? u : void 0,
				...i,
				ref: c,
				onPointerEnter: kr(e.onPointerEnter, () => {
					f.current = !1, o.wasEscapeCloseRef.current = !1;
				}),
				onPointerMove: kr(e.onPointerMove, Xa(() => {
					r || f.current || o.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(o.value), d.current = !0);
				})),
				onPointerLeave: kr(e.onPointerLeave, Xa(() => {
					r || (a.onTriggerLeave(), d.current = !1);
				})),
				onClick: kr(e.onClick, () => {
					a.onItemSelect(o.value), f.current = p;
				}),
				onKeyDown: kr(e.onKeyDown, (e) => {
					let t = {
						horizontal: "ArrowDown",
						vertical: a.dir === ra.RTL ? "ArrowLeft" : "ArrowRight"
					}[a.orientation];
					p && e.key === t && (o.onEntryKeyDown(), e.preventDefault());
				})
			})
		})
	}), p && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(ta, {
		"aria-hidden": !0,
		tabIndex: 0,
		ref: o.focusProxyRef,
		onFocus: (e) => {
			let t = o.contentRef.current, n = e.relatedTarget, r = n === s.current, i = t?.contains(n);
			(r || !i) && o.onFocusProxyEnter(r ? "start" : "end");
		}
	}), a.viewport && /* @__PURE__ */ (0, z.jsx)("span", { "aria-owns": u })] })] });
}, "NavigationMenuTrigger")), Ea = "navigationMenu.linkSelect", Da = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ B(function(e, t) {
	let { __scopeNavigationMenu: n, active: r, onSelect: i, ...a } = e;
	return /* @__PURE__ */ (0, z.jsx)(Ha, {
		asChild: !0,
		children: /* @__PURE__ */ (0, z.jsx)(Ir.a, {
			"data-active": r ? "" : void 0,
			"aria-current": r ? "page" : void 0,
			...a,
			ref: t,
			onClick: kr(e.onClick, (e) => {
				let t = e.target, n = new CustomEvent(Ea, {
					bubbles: !0,
					cancelable: !0
				});
				t.addEventListener(Ea, (e) => i?.(e), { once: !0 }), Lr(t, n), !n.defaultPrevented && !e.metaKey && Lr(t, new CustomEvent(ja, {
					bubbles: !0,
					cancelable: !0
				}));
			}, { checkForDefaultPrevented: !1 })
		})
	});
}, "NavigationMenuLink")), Oa = "NavigationMenuContent", ka = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ B(function(e, t) {
	let { forceMount: n, ...r } = e, i = ma(Oa, e.__scopeNavigationMenu), a = Sa(Oa, e.__scopeNavigationMenu), o = Zn(a.contentRef, t), s = a.value === i.value, c = qa(s), l = {
		value: a.value,
		triggerRef: a.triggerRef,
		focusProxyRef: a.focusProxyRef,
		wasEscapeCloseRef: a.wasEscapeCloseRef,
		onContentFocusOutside: a.onContentFocusOutside,
		onRootContentClose: a.onRootContentClose,
		...r
	};
	return i.viewport ? /* @__PURE__ */ (0, z.jsx)(Aa, {
		"data-state": c,
		forceMount: n,
		...l,
		ref: o
	}) : /* @__PURE__ */ (0, z.jsx)(oi, {
		present: n || s,
		children: /* @__PURE__ */ (0, z.jsx)(Ma, {
			"data-state": c,
			...l,
			ref: o,
			onPointerEnter: kr(e.onPointerEnter, i.onContentEnter),
			onPointerLeave: kr(e.onPointerLeave, Xa(i.onContentLeave)),
			style: {
				pointerEvents: !s && i.isRootMenu ? "none" : void 0,
				...l.style
			}
		})
	});
}, "NavigationMenuContent")), Aa = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ B(function(e, t) {
	let { onViewportContentChange: n, onViewportContentRemove: r } = ma(Oa, e.__scopeNavigationMenu);
	return Rr(() => {
		n(e.value, {
			ref: t,
			...e
		});
	}, [
		e,
		t,
		n
	]), Rr(() => () => r(e.value), [e.value, r]), null;
}, "ViewportContentMounter")), ja = "navigationMenu.rootContentDismiss", Ma = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ B(function(e, t) {
	let { __scopeNavigationMenu: n, value: r, triggerRef: i, focusProxyRef: a, wasEscapeCloseRef: o, onRootContentClose: s, onContentFocusOutside: c, ...l } = e, u = ma(Oa, n), d = E.useRef(null), f = Zn(d, t), p = Ja(u.baseId, r), m = Ya(u.baseId, r), h = oa(n), g = E.useRef(null), { onItemDismiss: _ } = u;
	E.useEffect(() => {
		let e = d.current;
		if (u.isRootMenu && e) {
			let t = /* @__PURE__ */ B(() => {
				_(), s(), e.contains(document.activeElement) && i.current?.focus();
			}, "handleClose");
			return e.addEventListener(ja, t), () => e.removeEventListener(ja, t);
		}
	}, [
		u.isRootMenu,
		e.value,
		i,
		_,
		s
	]);
	let v = E.useMemo(() => {
		let e = h().map((e) => e.value);
		u.dir === ra.RTL && e.reverse();
		let t = e.indexOf(u.value), n = e.indexOf(u.previousValue), i = r === u.value, a = n === e.indexOf(r);
		if (!i && !a) return g.current;
		let o = (() => {
			if (t !== n) {
				if (i && n !== -1) return t > n ? "from-end" : "from-start";
				if (a && t !== -1) return t > n ? "to-start" : "to-end";
			}
			return null;
		})();
		return g.current = o, o;
	}, [
		u.previousValue,
		u.value,
		u.dir,
		h,
		r
	]);
	return /* @__PURE__ */ (0, z.jsx)(za, {
		asChild: !0,
		children: /* @__PURE__ */ (0, z.jsx)(Hi, {
			id: m,
			"aria-labelledby": p,
			"data-motion": v,
			"data-orientation": u.orientation,
			...l,
			ref: f,
			disableOutsidePointerEvents: !1,
			onDismiss: () => {
				let e = new Event(ja, {
					bubbles: !0,
					cancelable: !0
				});
				d.current?.dispatchEvent(e);
			},
			onFocusOutside: kr(e.onFocusOutside, (e) => {
				c();
				let t = e.target, n = e.detail.originalEvent.relatedTarget, r = u.rootNavigationMenu?.contains(t), i = u.rootNavigationMenu?.contains(n);
				(r || !i) && e.preventDefault();
			}),
			onPointerDownOutside: kr(e.onPointerDownOutside, (e) => {
				let t = e.target, n = h().some((e) => e.ref.current?.contains(t)), r = u.isRootMenu && u.viewport?.contains(t);
				(n || r || !u.isRootMenu) && e.preventDefault();
			}),
			onKeyDown: kr(e.onKeyDown, (e) => {
				let t = e.altKey || e.ctrlKey || e.metaKey;
				if (e.key === "Tab" && !t) {
					let t = Ua(e.currentTarget), n = document.activeElement, r = t.findIndex((e) => e === n);
					Wa(e.shiftKey ? t.slice(0, r).reverse() : t.slice(r + 1, t.length)) ? e.preventDefault() : a.current?.focus();
				}
			}),
			onEscapeKeyDown: kr(e.onEscapeKeyDown, (e) => {
				o.current = !0;
			})
		})
	});
}, "NavigationMenuContentImpl")), Na = "NavigationMenuViewport", Pa = /* @__PURE__ */ rr(Na), Fa = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ B(function(e, t) {
	let { forceMount: n, ...r } = e, i = !!ma(Na, e.__scopeNavigationMenu).value;
	return /* @__PURE__ */ (0, z.jsx)(oi, {
		present: n || i,
		children: /* @__PURE__ */ (0, z.jsx)(Ia, {
			...r,
			ref: t
		})
	});
}, "NavigationMenuViewport")), Ia = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ B(function(e, t) {
	let { __scopeNavigationMenu: n, children: r, ...i } = e, a = ma(Na, n), o = Zn(t, a.onViewportChange), s = ga(Oa, e.__scopeNavigationMenu), [c, l] = E.useState(null), [u, d] = E.useState(null), f = c ? c?.width + "px" : void 0, p = c ? c?.height + "px" : void 0, m = !!a.value, h = m ? a.value : a.previousValue;
	return Ka(u, /* @__PURE__ */ B(() => {
		u && l({
			width: u.offsetWidth,
			height: u.offsetHeight
		});
	}, "handleSizeChange")), /* @__PURE__ */ (0, z.jsxs)(Ir.div, {
		"data-state": qa(m),
		"data-orientation": a.orientation,
		...i,
		ref: o,
		style: {
			pointerEvents: !m && a.isRootMenu ? "none" : void 0,
			"--radix-navigation-menu-viewport-width": f,
			"--radix-navigation-menu-viewport-height": p,
			...i.style
		},
		onPointerEnter: kr(e.onPointerEnter, a.onContentEnter),
		onPointerLeave: kr(e.onPointerLeave, Xa(a.onContentLeave)),
		children: [/* @__PURE__ */ (0, z.jsx)(Pa, { children: r }), Array.from(s.items).map(([e, { ref: t, forceMount: n, ...r }]) => {
			let i = h === e;
			return /* @__PURE__ */ (0, z.jsx)(oi, {
				present: n || i,
				children: /* @__PURE__ */ (0, z.jsx)(La, {
					...r,
					contentRef: t,
					isActive: i,
					onActiveContentChange: d
				})
			}, e);
		})]
	});
}, "NavigationMenuViewportImpl")), La = /* @__PURE__ */ B(({ contentRef: e, isActive: t, onActiveContentChange: n, ...r }) => {
	let i = Zn(e, E.useCallback((e) => {
		t && e && n(e);
	}, [t, n]));
	return /* @__PURE__ */ (0, z.jsx)(Ma, {
		...r,
		ref: i
	});
}, "NavigationMenuViewportItem"), Ra = "FocusGroup", za = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ B(function(e, t) {
	let { __scopeNavigationMenu: n, ...r } = e, i = ma(Ra, n);
	return /* @__PURE__ */ (0, z.jsx)(ca.Provider, {
		scope: n,
		children: /* @__PURE__ */ (0, z.jsx)(ca.Slot, {
			scope: n,
			children: /* @__PURE__ */ (0, z.jsx)(Ir.div, {
				dir: i.dir,
				...r,
				ref: t
			})
		})
	});
}, "FocusGroup")), Ba = [
	"ArrowRight",
	"ArrowLeft",
	"ArrowUp",
	"ArrowDown"
], Va = "FocusGroupItem", Ha = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ B(function(e, t) {
	let { __scopeNavigationMenu: n, ...r } = e, i = la(n), a = ma(Va, n);
	return /* @__PURE__ */ (0, z.jsx)(ca.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ (0, z.jsx)(Ir.button, {
			...r,
			ref: t,
			onKeyDown: kr(e.onKeyDown, (e) => {
				if ([
					"Home",
					"End",
					...Ba
				].includes(e.key)) {
					let t = i().map((e) => e.ref.current);
					if ([
						a.dir === ra.RTL ? "ArrowRight" : "ArrowLeft",
						"ArrowUp",
						"End"
					].includes(e.key) && t.reverse(), Ba.includes(e.key)) {
						let n = t.indexOf(e.currentTarget);
						t = t.slice(n + 1);
					}
					setTimeout(() => Wa(t)), e.preventDefault();
				}
			})
		})
	});
}, "FocusGroupItem"));
function Ua(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ B((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
B(Ua, "getTabbableCandidates");
function Wa(e) {
	let t = document.activeElement;
	return e.some((e) => e === t || (e.focus(), document.activeElement !== t));
}
B(Wa, "focusFirst");
function Ga(e) {
	return e.forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	}), () => {
		e.forEach((e) => {
			let t = e.dataset.tabindex;
			e.setAttribute("tabindex", t);
		});
	};
}
B(Ga, "removeFromTabOrder");
function Ka(e, t) {
	let n = Pi(t);
	Rr(() => {
		let t = 0;
		if (e) {
			let r = new ResizeObserver(() => {
				cancelAnimationFrame(t), t = window.requestAnimationFrame(n);
			});
			return r.observe(e), () => {
				window.cancelAnimationFrame(t), r.unobserve(e);
			};
		}
	}, [e, n]);
}
B(Ka, "useResizeObserver");
function qa(e) {
	return e ? "open" : "closed";
}
B(qa, "getOpenState");
function Ja(e, t) {
	return `${e}-trigger-${t}`;
}
B(Ja, "makeTriggerId");
function Ya(e, t) {
	return `${e}-content-${t}`;
}
B(Ya, "makeContentId");
function Xa(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
B(Xa, "whenMouse");
//#endregion
//#region src/components/ui/navigation-menu.tsx
var Za = E.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, z.jsxs)(_a, {
	ref: r,
	className: mn("ui-navigation-menu relative z-10 flex max-w-max items-center", e),
	...n,
	children: [t, /* @__PURE__ */ (0, z.jsx)(ro, {})]
}));
Za.displayName = "NavigationMenu";
var Qa = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, z.jsx)(ba, {
	ref: n,
	className: mn("flex list-none items-center gap-1", e),
	...t
}));
Qa.displayName = "NavigationMenuList";
var $a = Ca, eo = Da, to = E.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, z.jsxs)(Ta, {
	ref: r,
	className: mn("ui-navigation-trigger group inline-flex h-9 items-center justify-center gap-1 rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4", e),
	...n,
	children: [t, /* @__PURE__ */ (0, z.jsx)(he, {
		size: 12,
		className: "transition-transform group-data-[state=open]:rotate-180",
		"aria-hidden": "true"
	})]
}));
to.displayName = "NavigationMenuTrigger";
var no = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, z.jsx)(ka, {
	ref: n,
	className: mn("ui-navigation-content absolute left-0 top-0 w-auto", e),
	...t
}));
no.displayName = "NavigationMenuContent";
var ro = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, z.jsx)("div", {
	className: "ui-navigation-viewport-position",
	children: /* @__PURE__ */ (0, z.jsx)(Fa, {
		ref: n,
		className: mn("ui-navigation-viewport relative overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-xl", e),
		...t
	})
}));
ro.displayName = "NavigationMenuViewport";
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var io = Object.defineProperty, ao = (e, t) => io(e, "name", {
	value: t,
	configurable: !0
}), oo = 0, so = null;
function co(e) {
	return lo(), e.children;
}
ao(co, "FocusGuards");
function lo() {
	E.useEffect(() => {
		so ||= {
			start: uo(),
			end: uo()
		};
		let { start: e, end: t } = so;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), oo++, () => {
			oo === 1 && (so?.start.remove(), so?.end.remove(), so = null), oo = Math.max(0, oo - 1);
		};
	}, []);
}
ao(lo, "useFocusGuards");
function uo() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
ao(uo, "createFocusGuard");
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var fo = Object.defineProperty, po = (e, t) => fo(e, "name", {
	value: t,
	configurable: !0
}), mo = "focusScope.autoFocusOnMount", ho = "focusScope.autoFocusOnUnmount", go = {
	bubbles: !1,
	cancelable: !0
}, _o = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ po(function(e, t) {
	let { loop: n = !1, trapped: r = !1, branches: i, onMountAutoFocus: a, onUnmountAutoFocus: o, ...s } = e, [c, l] = E.useState(null), u = Pi(a), d = Pi(o), f = E.useRef(null), p = Zn(t, l), m = E.useRef(i);
	E.useEffect(() => {
		m.current = i;
	});
	let h = E.useCallback((e) => e ? c?.contains(e) ? !0 : !!m.current?.some((t) => t.contains(e)) : !1, [c]), g = E.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	E.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (g.paused || !c) return;
				let t = e.target;
				h(t) ? f.current = t : Oo(f.current, { select: !0 });
			}, t = function(e) {
				if (g.paused || !c) return;
				let t = e.relatedTarget;
				t !== null && (h(t) || Oo(f.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Oo(c);
			};
			po(e, "handleFocusIn"), po(t, "handleFocusOut"), po(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return c && r.observe(c, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		c,
		g.paused,
		h
	]), E.useEffect(() => {
		if (c) {
			ko.add(g);
			let e = document.activeElement;
			if (!c.contains(e)) {
				let t = new CustomEvent(mo, go);
				c.addEventListener(mo, u), c.dispatchEvent(t), t.defaultPrevented || (So(Mo(wo(c)), { select: !0 }), document.activeElement === e && Oo(c));
			}
			return () => {
				c.removeEventListener(mo, u);
				let t = c.ownerDocument, n = CustomEvent;
				setTimeout(() => {
					let r = new n(ho, go);
					c.addEventListener(ho, d), c.dispatchEvent(r), r.defaultPrevented || Oo(e ?? t.body, { select: !0 }), c.removeEventListener(ho, d), ko.remove(g);
				}, 0);
			};
		}
	}, [
		c,
		u,
		d,
		g
	]);
	let _ = E.useCallback((e) => {
		if (!n && !r || g.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = Co(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && Oo(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && Oo(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		g.paused
	]);
	return /* @__PURE__ */ (0, z.jsx)(Ir.div, {
		tabIndex: -1,
		...s,
		ref: p,
		onKeyDown: _
	});
}, "FocusScope")), vo = E.createContext(null);
function yo({ registry: e, children: t }) {
	return e ? /* @__PURE__ */ (0, z.jsx)(vo.Provider, {
		value: e,
		children: t
	}) : t;
}
po(yo, "FocusScopeBranchProvider");
function bo() {
	let [e, t] = E.useState([]);
	return {
		nodes: e,
		registry: E.useMemo(() => ({
			add: /* @__PURE__ */ po((e) => t((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ po((e) => t((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
po(bo, "useFocusScopeBranchRegistry");
function xo(e) {
	let t = E.useContext(vo);
	E.useEffect(() => {
		if (e && t) return t.add(e), () => t.remove(e);
	}, [e, t]);
}
po(xo, "useFocusScopeBranch");
function So(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Oo(r, { select: t }), document.activeElement !== n) return;
}
po(So, "focusFirst");
function Co(e) {
	let t = wo(e);
	return [To(t, e), To(t.reverse(), e)];
}
po(Co, "getTabbableEdges");
function wo(e) {
	let t = [], n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ po((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
po(wo, "getTabbableCandidates");
function To(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Eo(r, { upTo: t }))) return r;
}
po(To, "findVisible");
function Eo(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
po(Eo, "isHidden");
function Do(e) {
	return e.tagName === "INPUT" && typeof e.select == "function";
}
po(Do, "isSelectableInput");
function Oo(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = (e.ownerDocument ?? document).activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Do(e) && t && e.select();
	}
}
po(Oo, "focus");
var ko = Ao();
function Ao() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = jo(e, t), e.unshift(t);
		},
		remove(t) {
			e = jo(e, t), e[0]?.resume();
		}
	};
}
po(Ao, "createFocusScopesStack");
function jo(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
po(jo, "arrayRemove");
function Mo(e) {
	return e.filter((e) => e.tagName !== "A");
}
po(Mo, "removeLinks");
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var No = [
	"top",
	"right",
	"bottom",
	"left"
], Po = Math.min, Fo = Math.max, Io = Math.round, Lo = Math.floor, Ro = (e) => ({
	x: e,
	y: e
}), zo = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Bo(e, t, n) {
	return Fo(e, Po(t, n));
}
function U(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function W(e) {
	return e.split("-")[0];
}
function Vo(e) {
	return e.split("-")[1];
}
function Ho(e) {
	return e === "x" ? "y" : "x";
}
function Uo(e) {
	return e === "y" ? "height" : "width";
}
function Wo(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Go(e) {
	return Ho(Wo(e));
}
function Ko(e, t, n) {
	n === void 0 && (n = !1);
	let r = Vo(e), i = Go(e), a = Uo(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = ts(o)), [o, ts(o)];
}
function qo(e) {
	let t = ts(e);
	return [
		Jo(e),
		t,
		Jo(t)
	];
}
function Jo(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Yo = ["left", "right"], Xo = ["right", "left"], Zo = ["top", "bottom"], Qo = ["bottom", "top"];
function $o(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Xo : Yo : t ? Yo : Xo;
		case "left":
		case "right": return t ? Zo : Qo;
		default: return [];
	}
}
function es(e, t, n, r) {
	let i = Vo(e), a = $o(W(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Jo)))), a;
}
function ts(e) {
	let t = W(e);
	return zo[t] + e.slice(t.length);
}
function ns(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function rs(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : ns(e);
}
function is(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function as(e, t, n) {
	let { reference: r, floating: i } = e, a = Wo(t), o = Go(t), s = Uo(o), c = W(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	let m = Vo(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function os(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = U(t, e), p = rs(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = is(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = is(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var ss = 50, cs = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: os
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = as(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < ss && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = as(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, ls = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = U(e, t) || {};
		if (l == null) return {};
		let d = rs(u), f = {
			x: n,
			y: r
		}, p = Go(i), m = Uo(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, ee = Po(d[_], T), E = Po(d[v], T), te = C - h[m] - E, ne = C / 2 - h[m] / 2 + w, re = Bo(ee, ne, te), D = !c.arrow && Vo(i) != null && ne !== re && a.reference[m] / 2 - (ne < ee ? ee : E) - h[m] / 2 < 0, O = D ? ne < ee ? ne - ee : ne - te : 0;
		return {
			[p]: f[p] + O,
			data: {
				[p]: re,
				centerOffset: ne - re - O,
				...D && { alignmentOffset: O }
			},
			reset: D
		};
	}
}), us = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = U(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = W(r), _ = Wo(o), v = W(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [ts(o)] : qo(o)), x = p !== "none";
			!d && x && b.push(...es(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Ko(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === Wo(t) || T.every((e) => Wo(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Wo(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = o;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function ds(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function fs(e) {
	return No.some((t) => e[t] >= 0);
}
var ps = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = U(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = ds(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: fs(e)
					} };
				}
				case "escaped": {
					let e = ds(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: fs(e)
					} };
				}
				default: return {};
			}
		}
	};
}, ms = /*#__PURE__*/ new Set(["left", "top"]);
async function hs(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = W(n), s = Vo(n), c = Wo(n) === "y", l = ms.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = U(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var gs = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await hs(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, _s = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = U(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Wo(i), p = Ho(f), m = u[p], h = u[f], g = (e, t) => Bo(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
			o && (m = g(p, m)), s && (h = g(f, h));
			let _ = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				..._,
				data: {
					x: _.x - n,
					y: _.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, vs = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = U(e, t), u = {
				x: n,
				y: r
			}, d = Wo(i), f = Ho(d), p = u[f], m = u[d], h = U(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: h.mainAxis ?? 0,
				crossAxis: h.crossAxis ?? 0
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = ms.has(W(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, ys = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = U(e, t), c = await i.detectOverflow(t, s), l = W(n), u = Vo(n), d = Wo(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = Po(p - c[m], g), y = Po(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * Fo(c.left, c.right) : S = p - 2 * Fo(c.top, c.bottom)), await o({
				...t,
				availableWidth: C,
				availableHeight: S
			});
			let w = await i.getDimensions(a.floating);
			return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function bs() {
	return typeof window < "u";
}
function xs(e) {
	return ws(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ss(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Cs(e) {
	return ((ws(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function ws(e) {
	return bs() ? e instanceof Node || e instanceof Ss(e).Node : !1;
}
function Ts(e) {
	return bs() ? e instanceof Element || e instanceof Ss(e).Element : !1;
}
function Es(e) {
	return bs() ? e instanceof HTMLElement || e instanceof Ss(e).HTMLElement : !1;
}
function Ds(e) {
	return !bs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ss(e).ShadowRoot;
}
function Os(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = zs(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function ks(e) {
	return /^(table|td|th)$/.test(xs(e));
}
function As(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var js = /transform|translate|scale|rotate|perspective|filter/, Ms = /paint|layout|strict|content/, Ns = (e) => !!e && e !== "none", Ps;
function Fs(e) {
	let t = Ts(e) ? zs(e) : e;
	return Ns(t.transform) || Ns(t.translate) || Ns(t.scale) || Ns(t.rotate) || Ns(t.perspective) || !Ls() && (Ns(t.backdropFilter) || Ns(t.filter)) || js.test(t.willChange || "") || Ms.test(t.contain || "");
}
function Is(e) {
	let t = Vs(e);
	for (; Es(t) && !Rs(t);) {
		if (Fs(t)) return t;
		if (As(t)) return null;
		t = Vs(t);
	}
	return null;
}
function Ls() {
	return Ps ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Ps;
}
function Rs(e) {
	return /^(html|body|#document)$/.test(xs(e));
}
function zs(e) {
	return Ss(e).getComputedStyle(e);
}
function Bs(e) {
	return Ts(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Vs(e) {
	if (xs(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Ds(e) && e.host || Cs(e);
	return Ds(t) ? t.host : t;
}
function Hs(e) {
	let t = Vs(e);
	return Rs(t) ? (e.ownerDocument || e).body : Es(t) && Os(t) ? t : Hs(t);
}
function Us(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Hs(e), i = r === e.ownerDocument?.body, a = Ss(r);
	if (i) {
		let e = Ws(a);
		return t.concat(a, a.visualViewport || [], Os(r) ? r : [], e && n ? Us(e) : []);
	}
	return t.concat(r, Us(r, [], n));
}
function Ws(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Gs(e) {
	let t = zs(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Es(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Io(n) !== a || Io(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Ks(e) {
	return Ts(e) ? e : e.contextElement;
}
function qs(e) {
	let t = Ks(e);
	if (!Es(t)) return Ro(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Gs(t), o = (a ? Io(n.width) : n.width) / r, s = (a ? Io(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Js = /*#__PURE__*/ Ro(0);
function Ys(e) {
	let t = Ss(e);
	return !Ls() || !t.visualViewport ? Js : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Xs(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === Ss(e);
}
function Zs(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Ks(e), o = Ro(1);
	t && (r ? Ts(r) && (o = qs(r)) : o = qs(e));
	let s = Xs(a, n, r) ? Ys(a) : Ro(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = Ss(a), t = Ts(r) ? Ss(r) : r, n = e, i = Ws(n);
		for (; i && t !== n;) {
			let e = qs(i), t = i.getBoundingClientRect(), r = zs(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Ss(i), i = Ws(n);
		}
	}
	return is({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Qs(e, t) {
	let n = Bs(e).scrollLeft;
	return t ? t.left + n : Zs(Cs(e)).left + n;
}
function $s(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Qs(e, n),
		y: n.top + t.scrollTop
	};
}
function ec(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Cs(r), s = t ? As(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Ro(1), u = Ro(0), d = Es(r);
	if ((d || !a) && ((xs(r) !== "body" || Os(o)) && (c = Bs(r)), d)) {
		let e = Zs(r);
		l = qs(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? $s(o, c) : Ro(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function tc(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function nc(e) {
	let t = Bs(e), n = e.ownerDocument.body, r = Fo(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Fo(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Qs(e), o = -t.scrollTop;
	return zs(n).direction === "rtl" && (a += Fo(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var rc = 25;
function ic(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = Ss(e), a = Cs(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Ls() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Qs(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= rc && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function ac(e, t) {
	let n = Zs(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = qs(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function oc(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = ic(e, n, t);
	else if (t === "document") r = nc(Cs(e));
	else if (Ts(t)) r = ac(t, n);
	else {
		let n = Ys(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return is(r);
}
function sc(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Us(e, [], !1).filter((e) => Ts(e) && xs(e) !== "body"), i = null, a = zs(e).position === "fixed", o = a ? Vs(e) : e;
	for (; Ts(o) && !Rs(o);) {
		let e = zs(o), t = Fs(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = Vs(o);
	}
	return t.set(e, r), r;
}
function cc(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? As(t) ? [] : sc(t, this._c) : [].concat(n), r], o = oc(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = oc(t, a[e], i);
		s = Fo(n.top, s), c = Po(n.right, c), l = Po(n.bottom, l), u = Fo(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function lc(e) {
	let { width: t, height: n } = Gs(e);
	return {
		width: t,
		height: n
	};
}
function uc(e, t, n) {
	let r = Es(t), i = Cs(t), a = n === "fixed", o = Zs(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Ro(0);
	if ((r || !a) && ((xs(t) !== "body" || Os(i)) && (s = Bs(t)), r)) {
		let e = Zs(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Qs(i));
	let l = i && !r && !a ? $s(i, s) : Ro(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function dc(e) {
	return zs(e).position === "static";
}
function fc(e, t) {
	if (!Es(e) || zs(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Cs(e) === n && (n = n.ownerDocument.body), n;
}
function pc(e, t) {
	let n = Ss(e);
	if (As(e)) return n;
	if (!Es(e)) {
		let t = Vs(e);
		for (; t && !Rs(t);) {
			if (Ts(t) && !dc(t)) return t;
			t = Vs(t);
		}
		return n;
	}
	let r = fc(e, t);
	for (; r && ks(r) && dc(r);) r = fc(r, t);
	return r && Rs(r) && dc(r) && !Fs(r) ? n : r || Is(e) || n;
}
var mc = async function(e) {
	let t = this.getOffsetParent || pc, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: uc(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function hc(e) {
	return zs(e).direction === "rtl";
}
var gc = {
	convertOffsetParentRelativeRectToViewportRelativeRect: ec,
	getDocumentElement: Cs,
	getClippingRect: cc,
	getOffsetParent: pc,
	getElementRects: mc,
	getClientRects: tc,
	getDimensions: lc,
	getScale: qs,
	isElement: Ts,
	isRTL: hc
};
function _c(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function vc(e, t, n) {
	let r = null, i, a = Cs(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = Lo(d), h = Lo(a.clientWidth - (u + f)), g = Lo(a.clientHeight - (d + p)), _ = Lo(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Fo(0, Po(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!_c(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = Ss(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function yc(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Ks(e), u = i || a ? [...l ? Us(l) : [], ...t ? Us(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? vc(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Zs(e) : null;
	c && g();
	function g() {
		let t = Zs(e);
		h && !_c(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var bc = gs, xc = _s, Sc = us, Cc = ys, wc = ps, Tc = ls, Ec = vs, Dc = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...gc,
		...i.platform,
		_c: r
	};
	return cs(e, t, {
		...i,
		platform: a
	});
}, Oc = typeof document < "u" ? E.useLayoutEffect : function() {};
function kc(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!kc(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !kc(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Ac(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function jc(e, t) {
	let n = Ac(e);
	return Math.round(t * n) / n;
}
function Mc(e) {
	let t = E.useRef(e);
	return Oc(() => {
		t.current = e;
	}), t;
}
function Nc(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = E.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = E.useState(r);
	kc(f, r) || p(r);
	let [m, h] = E.useState(null), [g, _] = E.useState(null), v = E.useCallback((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = E.useCallback((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = E.useRef(null), C = E.useRef(null), w = E.useRef(u), T = c != null, ee = Mc(c), te = Mc(i), ne = Mc(l), re = E.useCallback(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		te.current && (e.platform = te.current), Dc(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: ne.current !== !1
			};
			D.current && !kc(w.current, t) && (w.current = t, ze.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		te,
		ne
	]);
	Oc(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let D = E.useRef(!1);
	Oc(() => (D.current = !0, () => {
		D.current = !1;
	}), []), Oc(() => {
		if (b && (S.current = b), x && (C.current = x), b && x) {
			if (ee.current) return ee.current(b, x, re);
			re();
		}
	}, [
		b,
		x,
		re,
		ee,
		T
	]);
	let O = E.useMemo(() => ({
		reference: S,
		floating: C,
		setReference: v,
		setFloating: y
	}), [v, y]), k = E.useMemo(() => ({
		reference: b,
		floating: x
	}), [b, x]), ie = E.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!k.floating) return e;
		let t = jc(k.floating, u.x), r = jc(k.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...Ac(k.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		k.floating,
		u.x,
		u.y
	]);
	return E.useMemo(() => ({
		...u,
		update: re,
		refs: O,
		elements: k,
		floatingStyles: ie
	}), [
		u,
		re,
		O,
		k,
		ie
	]);
}
var Pc = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Tc({
				element: r.current,
				padding: i
			}).fn(n) : r ? Tc({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Fc = (e, t) => {
	let n = bc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ic = (e, t) => {
	let n = xc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Lc = (e, t) => ({
	fn: Ec(e).fn,
	options: [e, t]
}), Rc = (e, t) => {
	let n = Sc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, zc = (e, t) => {
	let n = Cc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Bc = (e, t) => {
	let n = wc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Vc = (e, t) => {
	let n = Pc(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Hc = Object.defineProperty, Uc = (e, t) => Hc(e, "name", {
	value: t,
	configurable: !0
});
function Wc(e) {
	let [t, n] = E.useState(void 0);
	return Rr(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = 0, r = new ResizeObserver((r) => {
				if (!Array.isArray(r) || !r.length) return;
				let i = r[0];
				window.cancelAnimationFrame(t), t = window.requestAnimationFrame(() => {
					let t, r;
					if ("borderBoxSize" in i) {
						let e = i.borderBoxSize, n = Array.isArray(e) ? e[0] : e;
						t = n.inlineSize, r = n.blockSize;
					} else t = e.offsetWidth, r = e.offsetHeight;
					n({
						width: t,
						height: r
					});
				});
			});
			return r.observe(e, { box: "border-box" }), () => {
				window.cancelAnimationFrame(t), r.unobserve(e);
			};
		}
		n(void 0);
	}, [e]), t;
}
Uc(Wc, "useSize");
//#endregion
//#region node_modules/@radix-ui/react-popper/dist/index.mjs
var Gc = Object.defineProperty, Kc = (e, t) => Gc(e, "name", {
	value: t,
	configurable: !0
}), qc = {
	Partial: "partial",
	Always: "always"
}, Jc = {
	Optimized: "optimized",
	Always: "always"
}, Yc = "Popper", [Xc, Zc] = /* @__PURE__ */ wr(Yc), [Qc, $c] = Xc(Yc), el = /* @__PURE__ */ Kc((e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = E.useState(null), [a, o] = E.useState(void 0);
	return /* @__PURE__ */ (0, z.jsx)(Qc, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		placementState: a,
		setPlacementState: o,
		children: n
	});
}, "Popper"), tl = "PopperAnchor", nl = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ Kc(function(e, t) {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = $c(tl, n), o = E.useRef(null), s = a.onAnchorChange, c = Zn(t, E.useCallback((e) => {
		o.current = e, e && s(e);
	}, [s])), l = E.useRef(null);
	E.useEffect(() => {
		if (!r) return;
		let e = l.current;
		l.current = r.current, e !== l.current && s(l.current);
	});
	let u = a.placementState && ll(a.placementState), d = u?.[0], f = u?.[1];
	return r ? null : /* @__PURE__ */ (0, z.jsx)(Ir.div, {
		"data-radix-popper-side": d,
		"data-radix-popper-align": f,
		...i,
		ref: c
	});
}, "PopperAnchor")), rl = "PopperContent", [il, al] = Xc(rl), ol = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ Kc(function(e, t) {
	let { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: o = 0, arrowPadding: s = 0, avoidCollisions: c = !0, collisionBoundary: l = [], collisionPadding: u = 0, sticky: d = qc.Partial, hideWhenDetached: f = !1, updatePositionStrategy: p = Jc.Optimized, onPlaced: m, ...h } = e, g = $c(rl, n), [_, v] = E.useState(null), y = Zn(t, v), [b, x] = E.useState(null), S = Wc(b), C = S?.width ?? 0, w = S?.height ?? 0, T = r + (a === "center" ? "" : "-" + a), ee = typeof u == "number" ? u : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...u
	}, te = Array.isArray(l) ? l : [l], ne = te.length > 0, re = {
		padding: ee,
		boundary: te.filter(sl),
		altBoundary: ne
	}, { refs: D, floatingStyles: O, placement: k, isPositioned: ie, middlewareData: A } = Nc({
		strategy: "fixed",
		placement: T,
		whileElementsMounted: /* @__PURE__ */ Kc((...e) => yc(...e, { animationFrame: p === Jc.Always }), "whileElementsMounted"),
		elements: { reference: g.anchor },
		middleware: [
			Fc({
				mainAxis: i + w,
				alignmentAxis: o
			}),
			c && Ic({
				mainAxis: !0,
				crossAxis: !1,
				...d === qc.Partial ? { limiter: Lc() } : {},
				...re
			}),
			c && Rc({ ...re }),
			zc({
				...re,
				apply: /* @__PURE__ */ Kc(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			b && Vc({
				element: b,
				padding: s
			}),
			cl({
				arrowWidth: C,
				arrowHeight: w
			}),
			f && Bc(ne ? {
				strategy: "referenceHidden",
				...re
			} : {
				strategy: "referenceHidden",
				padding: re.padding,
				altBoundary: re.altBoundary
			})
		]
	}), j = g.setPlacementState;
	Rr(() => (j(k), () => {
		j(void 0);
	}), [k, j]);
	let [ae, oe] = ll(k), se = Pi(m);
	Rr(() => {
		ie && se?.();
	}, [ie, se]);
	let ce = A.arrow?.x, le = A.arrow?.y, ue = A.arrow?.centerOffset !== 0, [de, fe] = E.useState();
	return Rr(() => {
		_ && fe(window.getComputedStyle(_).zIndex);
	}, [_]), /* @__PURE__ */ (0, z.jsx)("div", {
		ref: D.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...O,
			transform: ie ? O.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: de,
			"--radix-popper-transform-origin": [A.transformOrigin?.x, A.transformOrigin?.y].join(" "),
			...A.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ (0, z.jsx)(il, {
			scope: n,
			placedSide: ae,
			placedAlign: oe,
			onArrowChange: x,
			arrowX: ce,
			arrowY: le,
			shouldHideArrow: ue,
			children: /* @__PURE__ */ (0, z.jsx)(Ir.div, {
				"data-side": ae,
				"data-align": oe,
				...h,
				ref: y,
				style: {
					...h.style,
					animation: ie ? h.style?.animation : "none"
				}
			})
		})
	});
}, "PopperContent"));
function sl(e) {
	return e !== null;
}
Kc(sl, "isNotNull");
var cl = /* @__PURE__ */ Kc((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = ll(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
}), "transformOrigin");
function ll(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
Kc(ll, "getSideAndAlignFromPlacement");
//#endregion
//#region node_modules/@radix-ui/react-portal/dist/index.mjs
var ul = Object.defineProperty, dl = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ((e, t) => ul(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	let { container: n, ...r } = e, [i, a] = E.useState(!1);
	Rr(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? ze.createPortal(/* @__PURE__ */ (0, z.jsx)(Ir.div, {
		...r,
		ref: t
	}), o) : null;
}, "Portal")), fl = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, pl = /* @__PURE__ */ new WeakMap(), ml = /* @__PURE__ */ new WeakMap(), hl = {}, gl = 0, _l = function(e) {
	return e && (e.host || _l(e.parentNode));
}, vl = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = _l(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, yl = function(e, t, n, r) {
	var i = vl(t, Array.isArray(e) ? e : [e]);
	hl[n] || (hl[n] = /* @__PURE__ */ new WeakMap());
	var a = hl[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (pl.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				pl.set(e, c), a.set(e, l), o.push(e), c === 1 && i && ml.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), gl++, function() {
		o.forEach(function(e) {
			var t = pl.get(e) - 1, i = a.get(e) - 1;
			pl.set(e, t), a.set(e, i), t || (ml.has(e) || e.removeAttribute(r), ml.delete(e)), i || e.removeAttribute(n);
		}), gl--, gl || (pl = /* @__PURE__ */ new WeakMap(), pl = /* @__PURE__ */ new WeakMap(), ml = /* @__PURE__ */ new WeakMap(), hl = {});
	};
}, bl = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || fl(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), yl(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, xl = function() {
	return xl = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, xl.apply(this, arguments);
};
function Sl(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Cl(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var wl = "right-scroll-bar-position", Tl = "width-before-scroll-bar", El = "with-scroll-bars-hidden", Dl = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
function Ol(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
function kl(e, t) {
	var n = (0, E.useState)(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var Al = typeof window < "u" ? E.useLayoutEffect : E.useEffect, jl = /* @__PURE__ */ new WeakMap();
function Ml(e, t) {
	var n = kl(t || null, function(t) {
		return e.forEach(function(e) {
			return Ol(e, t);
		});
	});
	return Al(function() {
		var t = jl.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Ol(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Ol(e, a);
			});
		}
		jl.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function Nl(e) {
	return e;
}
function Pl(e, t) {
	t === void 0 && (t = Nl);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function Fl(e) {
	e === void 0 && (e = {});
	var t = Pl(null);
	return t.options = xl({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var Il = function(e) {
	var t = e.sideCar, n = Sl(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return E.createElement(r, xl({}, n));
};
Il.isSideCarExport = !0;
function Ll(e, t) {
	return e.useMedium(t), Il;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var Rl = Fl(), zl = function() {}, Bl = E.forwardRef(function(e, t) {
	var n = E.useRef(null), r = E.useState({
		onScrollCapture: zl,
		onWheelCapture: zl,
		onTouchMoveCapture: zl
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = Sl(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), x = f, S = Ml([n, t]), C = xl(xl({}, b), i);
	return E.createElement(E.Fragment, null, u && E.createElement(x, {
		sideCar: Rl,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? E.cloneElement(E.Children.only(s), xl(xl({}, C), { ref: S })) : E.createElement(v, xl({}, C, {
		className: c,
		ref: S
	}), s));
});
Bl.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Bl.classNames = {
	fullWidth: Tl,
	zeroRight: wl
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var Vl = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function Hl() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Vl();
	return t && e.setAttribute("nonce", t), e;
}
function Ul(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Wl(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Gl = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Hl()) && (Ul(t, n), Wl(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Kl = function() {
	var e = Gl();
	return function(t, n) {
		E.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, ql = function() {
	var e = Kl();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Jl = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Yl = function(e) {
	return parseInt(e || "", 10) || 0;
}, Xl = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Yl(n),
		Yl(r),
		Yl(i)
	];
}, Zl = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Jl;
	var t = Xl(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Ql = ql(), $l = "data-scroll-locked", eu = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${El} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${$l}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${wl} {
    right: ${s}px ${r};
  }
  
  .${Tl} {
    margin-right: ${s}px ${r};
  }
  
  .${wl} .${wl} {
    right: 0 ${r};
  }
  
  .${Tl} .${Tl} {
    margin-right: 0 ${r};
  }
  
  body[${$l}] {
    ${Dl}: ${s}px;
  }
`;
}, tu = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, nu = function() {
	E.useEffect(function() {
		return document.body.setAttribute($l, (tu() + 1).toString()), function() {
			var e = tu() - 1;
			e <= 0 ? document.body.removeAttribute($l) : document.body.setAttribute($l, e.toString());
		};
	}, []);
}, ru = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	nu();
	var a = E.useMemo(function() {
		return Zl(i);
	}, [i]);
	return E.createElement(Ql, { styles: eu(a, !t, i, n ? "" : "!important") });
}, iu = !1;
if (typeof window < "u") try {
	var G = Object.defineProperty({}, "passive", { get: function() {
		return iu = !0, !0;
	} });
	window.addEventListener("test", G, G), window.removeEventListener("test", G, G);
} catch {
	iu = !1;
}
var au = iu ? { passive: !1 } : !1, ou = function(e) {
	return e.tagName === "TEXTAREA";
}, su = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !ou(e) && n[t] === "visible");
}, cu = function(e) {
	return su(e, "overflowY");
}, lu = function(e) {
	return su(e, "overflowX");
}, uu = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), pu(e, r)) {
			var i = mu(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, du = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, fu = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, pu = function(e, t) {
	return e === "v" ? cu(t) : lu(t);
}, mu = function(e, t) {
	return e === "v" ? du(t) : fu(t);
}, hu = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, gu = function(e, t, n, r, i) {
	var a = hu(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = mu(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && pu(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, _u = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, vu = function(e) {
	return [e.deltaX, e.deltaY];
}, yu = function(e) {
	return e && "current" in e ? e.current : e;
}, bu = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, xu = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Su = 0, Cu = [];
function wu(e) {
	var t = E.useRef([]), n = E.useRef([0, 0]), r = E.useRef(), i = E.useState(Su++)[0], a = E.useState(ql)[0], o = E.useRef(e);
	E.useEffect(function() {
		o.current = e;
	}, [e]), E.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = Cl([e.lockRef.current], (e.shards || []).map(yu), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = E.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = _u(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = uu(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = uu(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return gu(h, t, e, h === "h" ? s : c, !0);
	}, []), c = E.useCallback(function(e) {
		var n = e;
		if (Cu.length && Cu[Cu.length - 1] === a) {
			var r = "deltaY" in n ? vu(n) : _u(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && bu(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(yu).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = E.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Tu(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = E.useCallback(function(e) {
		n.current = _u(e), r.current = void 0;
	}, []), d = E.useCallback(function(t) {
		l(t.type, vu(t), t.target, s(t, e.lockRef.current));
	}, []), f = E.useCallback(function(t) {
		l(t.type, _u(t), t.target, s(t, e.lockRef.current));
	}, []);
	E.useEffect(function() {
		return Cu.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, au), document.addEventListener("touchmove", c, au), document.addEventListener("touchstart", u, au), function() {
			Cu = Cu.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, au), document.removeEventListener("touchmove", c, au), document.removeEventListener("touchstart", u, au);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return E.createElement(E.Fragment, null, m ? E.createElement(a, { styles: xu(i) }) : null, p ? E.createElement(ru, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Tu(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Eu = Ll(Rl, wu), Du = E.forwardRef(function(e, t) {
	return E.createElement(Bl, xl({}, e, {
		ref: t,
		sideCar: Eu
	}));
});
Du.classNames = Bl.classNames;
//#endregion
//#region node_modules/@radix-ui/react-popover/dist/index.mjs
var Ou = Object.defineProperty, ku = (e, t) => Ou(e, "name", {
	value: t,
	configurable: !0
}), Au = "Popover", [ju, Mu] = /* @__PURE__ */ wr(Au, [Zc]), Nu = Zc(), [Pu, Fu] = ju(Au), Iu = /* @__PURE__ */ ku((e) => {
	let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !1 } = e, s = Nu(t), c = E.useRef(null), [l, u] = E.useState(!1), [d, f] = E.useState(0), [p, m] = E.useState(0), [h, g] = qr({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: Au
	});
	return /* @__PURE__ */ (0, z.jsx)(el, {
		...s,
		children: /* @__PURE__ */ (0, z.jsx)(Pu, {
			scope: t,
			contentId: gi(),
			titleId: gi(),
			descriptionId: gi(),
			titlePresent: d > 0,
			descriptionPresent: p > 0,
			setTitleCount: f,
			setDescriptionCount: m,
			triggerRef: c,
			open: h,
			onOpenChange: g,
			onOpenToggle: E.useCallback(() => g((e) => !e), [g]),
			hasCustomAnchor: l,
			onCustomAnchorAdd: E.useCallback(() => u(!0), []),
			onCustomAnchorRemove: E.useCallback(() => u(!1), []),
			modal: o,
			children: n
		})
	});
}, "Popover"), Lu = "PopoverTrigger", Ru = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ku(function(e, t) {
	let { __scopePopover: n, ...r } = e, i = Fu(Lu, n), a = Nu(n), o = Zn(t, i.triggerRef), s = /* @__PURE__ */ (0, z.jsx)(Ir.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": Yu(i.open),
		...r,
		ref: o,
		onClick: kr(e.onClick, i.onOpenToggle)
	});
	return i.hasCustomAnchor ? s : /* @__PURE__ */ (0, z.jsx)(nl, {
		asChild: !0,
		...a,
		children: s
	});
}, "PopoverTrigger")), zu = "PopoverPortal", [Bu, Vu] = ju(zu, { forceMount: void 0 }), Hu = /* @__PURE__ */ ku((e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = Fu(zu, t);
	return /* @__PURE__ */ (0, z.jsx)(Bu, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, z.jsx)(oi, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, z.jsx)(dl, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "PopoverPortal"), Uu = "PopoverContent", Wu = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ku(function(e, t) {
	let n = Vu(Uu, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = Fu(Uu, e.__scopePopover);
	return /* @__PURE__ */ (0, z.jsx)(oi, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, z.jsx)(Ku, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, z.jsx)(qu, {
			...i,
			ref: t
		})
	});
}, "PopoverContent")), Gu = /* @__PURE__ */ er("PopoverContent.RemoveScroll"), Ku = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ku(function(e, t) {
	let n = Fu(Uu, e.__scopePopover), r = E.useRef(null), i = Zn(t, r), a = E.useRef(!1), { nodes: o, registry: s } = bo();
	return E.useEffect(() => {
		let e = r.current;
		if (e) return bl(e);
	}, []), /* @__PURE__ */ (0, z.jsx)(Du, {
		as: Gu,
		allowPinchZoom: !0,
		shards: E.useMemo(() => [r, ...o.map((e) => ({ current: e }))], [r, o]),
		children: /* @__PURE__ */ (0, z.jsx)(Ju, {
			...e,
			ref: i,
			branchNodes: o,
			branchRegistry: s,
			trapFocus: n.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: kr(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), a.current || n.triggerRef.current?.focus();
			}),
			onPointerDownOutside: kr(e.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
				a.current = r;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: kr(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}, "PopoverContentModal")), qu = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ku(function(e, t) {
	let n = Fu(Uu, e.__scopePopover), r = E.useRef(!1), i = E.useRef(!1);
	return /* @__PURE__ */ (0, z.jsx)(Ju, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}, "PopoverContentNonModal")), Ju = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ku(function(e, t) {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, "aria-describedby": d, branchNodes: f, branchRegistry: p, ...m } = e, h = Fu(Uu, n), g = Nu(n), [_, v] = E.useState(null), y = Zn(t, v);
	return xo(_), lo(), /* @__PURE__ */ (0, z.jsx)(yo, {
		registry: p,
		children: /* @__PURE__ */ (0, z.jsx)(_o, {
			asChild: !0,
			loop: !0,
			trapped: r,
			branches: f,
			onMountAutoFocus: i,
			onUnmountAutoFocus: a,
			children: /* @__PURE__ */ (0, z.jsx)(Hi, {
				asChild: !0,
				disableOutsidePointerEvents: o,
				onInteractOutside: u,
				onEscapeKeyDown: s,
				onPointerDownOutside: c,
				onFocusOutside: l,
				onDismiss: () => h.onOpenChange(!1),
				deferPointerDownOutside: !0,
				children: /* @__PURE__ */ (0, z.jsx)(ol, {
					"data-state": Yu(h.open),
					role: "dialog",
					id: h.contentId,
					"aria-labelledby": h.titlePresent ? h.titleId : void 0,
					"aria-describedby": h.descriptionPresent ? Xu(d, h.descriptionId) : d,
					...g,
					...m,
					ref: y,
					style: {
						...m.style,
						"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
						"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
						"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
						"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
						"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
					}
				})
			})
		})
	});
}, "PopoverContentImpl"));
function Yu(e) {
	return e ? "open" : "closed";
}
ku(Yu, "getState");
function Xu(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
ku(Xu, "concatAriaDescribedby");
//#endregion
//#region src/components/ui/popover.tsx
var Zu = Iu, Qu = Ru, $u = E.forwardRef(({ className: e, align: t = "center", sideOffset: n = 8, ...r }, i) => /* @__PURE__ */ (0, z.jsx)(Hu, { children: /* @__PURE__ */ (0, z.jsx)(Wu, {
	ref: i,
	align: t,
	sideOffset: n,
	collisionPadding: 16,
	className: mn("ui-popover-content z-50 rounded-xl border border-border bg-popover p-3 text-popover-foreground shadow-xl outline-none", e),
	...r
}) }));
$u.displayName = "PopoverContent";
//#endregion
//#region src/components/ui/navigation-menu-4.tsx
var K = (e) => e;
function ed({ logo: e, phone: t, links: n, activeKey: r, activeHref: i, theme: a, onThemeToggle: o, onNavigate: s, hrefFor: c = K }) {
	let [l, u] = E.useState(!1), [d, f] = E.useState(""), [p, m] = E.useState(() => window.scrollY > 40), h = E.useRef(!1), g = Kn(r === "home");
	E.useEffect(() => {
		u(!1), f("");
	}, [i]), E.useEffect(() => {
		let e = () => m(window.scrollY > 40);
		window.addEventListener("scroll", e, { passive: !0 });
		let t = window.matchMedia("(min-width: 768px)"), n = () => {
			t.matches ? u(!1) : f("");
		};
		return t.addEventListener("change", n), () => {
			window.removeEventListener("scroll", e), t.removeEventListener("change", n);
		};
	}, []);
	let _ = (e, t) => {
		t.button !== 0 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || (h.current = l, u(!1), f(""), s && (t.preventDefault(), s(e)));
	}, v = (e, t) => {
		let n = e.icon;
		return /* @__PURE__ */ (0, z.jsxs)("a", {
			href: c(e.href),
			className: t,
			onClick: (t) => _(e.href, t),
			"aria-current": i === e.href ? "page" : void 0,
			children: [n && /* @__PURE__ */ (0, z.jsx)(n, {
				size: 18,
				strokeWidth: 1.4,
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, z.jsxs)("span", { children: [/* @__PURE__ */ (0, z.jsx)("span", {
				className: "nav-item-title",
				children: e.label
			}), e.description && /* @__PURE__ */ (0, z.jsx)("span", {
				className: "nav-item-description",
				children: e.description
			})] })]
		});
	};
	return /* @__PURE__ */ (0, z.jsx)("header", {
		className: mn("site-header company-navigation", p && "is-scrolled"),
		"data-home-idle": g && !l && !d ? "true" : void 0,
		children: /* @__PURE__ */ (0, z.jsxs)("div", {
			className: "company-navigation-bar",
			children: [/* @__PURE__ */ (0, z.jsxs)("div", {
				className: "nav-start",
				children: [
					/* @__PURE__ */ (0, z.jsxs)(Zu, {
						open: l,
						onOpenChange: u,
						modal: !0,
						children: [/* @__PURE__ */ (0, z.jsx)(Qu, {
							asChild: !0,
							children: /* @__PURE__ */ (0, z.jsx)(br, {
								variant: "ghost",
								size: "icon",
								className: "menu-toggle nav-mobile-trigger",
								"aria-controls": "mobile-navigation",
								"aria-label": l ? "关闭菜单" : "打开菜单",
								children: /* @__PURE__ */ (0, z.jsxs)("span", {
									className: "nav-menu-icon",
									"aria-hidden": "true",
									children: [
										/* @__PURE__ */ (0, z.jsx)("i", {}),
										/* @__PURE__ */ (0, z.jsx)("i", {}),
										/* @__PURE__ */ (0, z.jsx)("i", {})
									]
								})
							})
						}), /* @__PURE__ */ (0, z.jsxs)($u, {
							id: "mobile-navigation",
							align: "start",
							sideOffset: 15,
							className: "company-mobile-panel",
							"aria-label": "网站导航",
							onCloseAutoFocus: (e) => {
								h.current &&= (e.preventDefault(), !1);
							},
							children: [/* @__PURE__ */ (0, z.jsx)("nav", {
								"aria-label": "手机导航",
								children: n.map((e) => /* @__PURE__ */ (0, z.jsx)("div", {
									className: "nav-mobile-group",
									children: e.items ? /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsxs)("a", {
										className: "nav-mobile-heading",
										href: c(e.href),
										onClick: (t) => _(e.href, t),
										children: [e.label, /* @__PURE__ */ (0, z.jsx)("span", { children: "查看全部" })]
									}), /* @__PURE__ */ (0, z.jsx)("ul", {
										className: mn("nav-mobile-items", e.layout === "cases" && "nav-mobile-categories"),
										children: e.items.map((e) => /* @__PURE__ */ (0, z.jsx)("li", { children: v(e, "nav-mobile-item") }, e.href))
									})] }) : /* @__PURE__ */ (0, z.jsx)("a", {
										href: c(e.href),
										onClick: (t) => _(e.href, t),
										className: "nav-mobile-direct",
										"aria-current": r === e.key ? "page" : void 0,
										children: e.label
									})
								}, e.key))
							}), /* @__PURE__ */ (0, z.jsxs)("a", {
								className: "nav-mobile-phone",
								href: "tel:" + t,
								children: [/* @__PURE__ */ (0, z.jsx)(Ee, { size: 14 }), t]
							})]
						})]
					}),
					/* @__PURE__ */ (0, z.jsxs)("a", {
						className: "brand nav-brand",
						href: c("/"),
						"aria-label": "乐品乐道，返回首页",
						onClick: (e) => _("/", e),
						children: [/* @__PURE__ */ (0, z.jsx)("img", {
							className: "nav-brand-base",
							src: e,
							alt: "乐品乐道",
							width: "179",
							height: "43"
						}), /* @__PURE__ */ (0, z.jsx)("img", {
							className: "nav-brand-lead",
							src: e,
							alt: "",
							"aria-hidden": "true",
							width: "179",
							height: "43"
						})]
					}),
					/* @__PURE__ */ (0, z.jsx)("div", {
						className: "desktop-navigation nav-desktop",
						children: /* @__PURE__ */ (0, z.jsx)(Za, {
							"aria-label": "主导航",
							value: d,
							onValueChange: f,
							delayDuration: 180,
							skipDelayDuration: 300,
							children: /* @__PURE__ */ (0, z.jsx)(Qa, { children: n.map((e) => /* @__PURE__ */ (0, z.jsx)($a, {
								value: e.key,
								children: e.items ? /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(to, {
									className: "nav-top-trigger",
									"data-current": r === e.key ? "true" : void 0,
									children: e.label
								}), /* @__PURE__ */ (0, z.jsx)(no, { children: /* @__PURE__ */ (0, z.jsxs)("div", {
									className: mn("nav-dropdown", "nav-dropdown-" + e.layout),
									children: [/* @__PURE__ */ (0, z.jsxs)("div", {
										className: "nav-dropdown-heading",
										children: [/* @__PURE__ */ (0, z.jsx)("span", { children: e.label }), /* @__PURE__ */ (0, z.jsx)(eo, {
											asChild: !0,
											children: /* @__PURE__ */ (0, z.jsx)("a", {
												href: c(e.href),
												onClick: (t) => _(e.href, t),
												children: "查看全部"
											})
										})]
									}), /* @__PURE__ */ (0, z.jsx)("ul", {
										className: "nav-dropdown-items",
										children: e.items.map((e) => /* @__PURE__ */ (0, z.jsx)("li", { children: /* @__PURE__ */ (0, z.jsx)(eo, {
											asChild: !0,
											children: v(e, "nav-dropdown-item")
										}) }, e.href))
									})]
								}) })] }) : /* @__PURE__ */ (0, z.jsx)(eo, {
									asChild: !0,
									children: /* @__PURE__ */ (0, z.jsx)("a", {
										className: "nav-top-link",
										href: c(e.href),
										"aria-current": r === e.key ? "page" : void 0,
										onClick: (t) => _(e.href, t),
										children: e.label
									})
								})
							}, e.key)) })
						})
					})
				]
			}), /* @__PURE__ */ (0, z.jsxs)("div", {
				className: "nav-actions",
				children: [
					/* @__PURE__ */ (0, z.jsxs)("span", {
						className: "nav-location",
						children: ["Xi’an, China", /* @__PURE__ */ (0, z.jsx)("span", {
							className: "nav-location-dot",
							"aria-hidden": "true"
						})]
					}),
					o && /* @__PURE__ */ (0, z.jsx)(br, {
						variant: "ghost",
						size: "icon",
						className: "nav-theme-toggle",
						onClick: o,
						"aria-label": a === "dark" ? "切换浅色模式" : "切换深色模式",
						children: a === "dark" ? /* @__PURE__ */ (0, z.jsx)(Pe, {
							size: 17,
							strokeWidth: 1.5
						}) : /* @__PURE__ */ (0, z.jsx)(Ce, {
							size: 17,
							strokeWidth: 1.5
						})
					}),
					/* @__PURE__ */ (0, z.jsx)(br, {
						asChild: !0,
						size: "sm",
						className: "nav-phone-button",
						children: /* @__PURE__ */ (0, z.jsxs)("a", {
							href: c("/contact/"),
							onClick: (e) => _("/contact/", e),
							"aria-label": "查看联系方式：" + t,
							children: [/* @__PURE__ */ (0, z.jsx)(Ee, {
								size: 14,
								strokeWidth: 1.6
							}), /* @__PURE__ */ (0, z.jsx)("span", { children: t })]
						})
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/lib/sample-projects.js
function q(e, t = 12) {
	let n = [...e], r = Math.min(Math.max(0, Math.floor(t)), n.length);
	for (let e = 0; e < r; e++) {
		let t = e + Math.floor(Math.random() * (n.length - e));
		[n[e], n[t]] = [n[t], n[e]];
	}
	return n.slice(0, r);
}
//#endregion
//#region src/components/ui/footer-1-utils/nav-links.tsx
function J({ href: e, hrefFor: t, onNavigate: n, onClick: r, ...i }) {
	let a = e.startsWith("/") && !e.startsWith("//"), o = (t) => {
		r?.(t), !(!a || !n || t.defaultPrevented || t.button !== 0 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || i.target && i.target !== "_self" || i.download != null) && (t.preventDefault(), n(e));
	};
	return /* @__PURE__ */ (0, z.jsx)("a", {
		...i,
		href: a && t ? t(e) : e,
		onClick: o
	});
}
function Y({ sections: e, hrefFor: t, onNavigate: n }) {
	return /* @__PURE__ */ (0, z.jsx)("nav", {
		className: "site-footer-nav",
		"aria-label": "页脚导航",
		children: e.map((e) => /* @__PURE__ */ (0, z.jsxs)("section", {
			className: "site-footer-section",
			children: [/* @__PURE__ */ (0, z.jsx)("h2", { children: e.title }), /* @__PURE__ */ (0, z.jsx)("ul", { children: e.links.map((e) => /* @__PURE__ */ (0, z.jsx)("li", { children: /* @__PURE__ */ (0, z.jsx)(J, {
				href: e.href,
				hrefFor: t,
				onNavigate: n,
				children: e.label
			}) }, e.href)) })]
		}, e.title))
	});
}
//#endregion
//#region src/components/ui/footer-1.tsx
function td({ logo: e, companyName: t, description: n, sections: r, icp: i, hrefFor: a, onNavigate: o, onBackToTop: s }) {
	return /* @__PURE__ */ (0, z.jsxs)("footer", {
		className: "site-footer w-full border-t border-border",
		"aria-label": "网站页脚",
		children: [/* @__PURE__ */ (0, z.jsxs)("div", {
			className: "site-footer-main",
			children: [/* @__PURE__ */ (0, z.jsxs)("div", {
				className: "site-footer-brand-column",
				children: [
					/* @__PURE__ */ (0, z.jsx)(J, {
						href: "/",
						hrefFor: a,
						onNavigate: o,
						className: "site-footer-brand",
						"aria-label": "乐品乐道，返回首页",
						children: /* @__PURE__ */ (0, z.jsx)("img", {
							src: e,
							alt: "乐品乐道工业设计",
							width: "170",
							height: "47",
							style: { borderRadius: 0 },
							loading: "lazy",
							decoding: "async"
						})
					}),
					/* @__PURE__ */ (0, z.jsx)("p", {
						className: "site-footer-description",
						children: n
					}),
					/* @__PURE__ */ (0, z.jsx)(br, {
						variant: "outline",
						size: "sm",
						asChild: !0,
						className: "site-footer-contact-button",
						children: /* @__PURE__ */ (0, z.jsxs)(J, {
							href: "/contact/",
							hrefFor: a,
							onNavigate: o,
							children: ["联系乐品乐道", /* @__PURE__ */ (0, z.jsx)(se, {
								size: 15,
								"aria-hidden": "true"
							})]
						})
					})
				]
			}), /* @__PURE__ */ (0, z.jsx)(Y, {
				sections: r,
				hrefFor: a,
				onNavigate: o
			})]
		}), /* @__PURE__ */ (0, z.jsxs)("div", {
			className: "site-footer-bottom",
			children: [/* @__PURE__ */ (0, z.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				t
			] }), /* @__PURE__ */ (0, z.jsxs)("div", {
				className: "site-footer-legal",
				children: [i && /* @__PURE__ */ (0, z.jsx)("a", {
					href: "https://beian.miit.gov.cn/",
					target: "_blank",
					rel: "noopener noreferrer",
					children: i
				}), s && /* @__PURE__ */ (0, z.jsxs)(br, {
					type: "button",
					variant: "ghost",
					size: "sm",
					onClick: s,
					className: "site-footer-back-top",
					children: ["回到顶部", /* @__PURE__ */ (0, z.jsx)(le, {
						size: 13,
						"aria-hidden": "true"
					})]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/timeline-01-utils/timeline.tsx
function nd({ items: e }) {
	return /* @__PURE__ */ (0, z.jsx)("ol", {
		className: "company-timeline-list",
		children: e.map((e) => /* @__PURE__ */ (0, z.jsxs)("li", {
			className: "company-timeline-item",
			children: [
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "company-timeline-date",
					children: /^[0-9]{4}$/.test(e.date) ? /* @__PURE__ */ (0, z.jsxs)("time", {
						dateTime: e.date,
						children: [e.date, /* @__PURE__ */ (0, z.jsx)("span", { children: "年" })]
					}) : /* @__PURE__ */ (0, z.jsx)("span", { children: e.date })
				}),
				/* @__PURE__ */ (0, z.jsx)("div", {
					className: "company-timeline-marker",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, z.jsx)("span", {})
				}),
				/* @__PURE__ */ (0, z.jsxs)("div", {
					className: "company-timeline-content",
					children: [
						/* @__PURE__ */ (0, z.jsx)("h3", { children: e.title }),
						/* @__PURE__ */ (0, z.jsx)("p", { children: e.description }),
						e.image && /* @__PURE__ */ (0, z.jsx)("figure", { children: /* @__PURE__ */ (0, z.jsx)("img", {
							src: e.image,
							alt: e.imageAlt || e.title,
							width: e.imageWidth || 1190,
							height: e.imageHeight || 720,
							loading: "lazy",
							decoding: "async"
						}) })
					]
				})
			]
		}, e.date))
	});
}
//#endregion
//#region src/components/ui/badge.tsx
var rd = vr("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function id({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ (0, z.jsx)("div", {
		className: mn(rd({ variant: t }), e),
		...n
	});
}
//#endregion
//#region src/components/ui/timeline-01.tsx
function ad({ items: e }) {
	if (!e.length) return null;
	let t = e.map((e) => e.date).filter((e) => /^[0-9]{4}$/.test(e));
	return /* @__PURE__ */ (0, z.jsxs)("section", {
		id: "about-history",
		className: "company-history overflow-hidden",
		"aria-labelledby": "company-history-title",
		children: [
			/* @__PURE__ */ (0, z.jsxs)("header", {
				className: "company-history-heading",
				children: [
					t.length > 0 && /* @__PURE__ */ (0, z.jsxs)(id, {
						variant: "outline",
						className: "company-history-badge rounded-full px-3 py-1 font-normal",
						children: [
							t[0],
							"—",
							t[t.length - 1]
						]
					}),
					/* @__PURE__ */ (0, z.jsx)("h2", {
						id: "company-history-title",
						children: "公司发展历程"
					}),
					/* @__PURE__ */ (0, z.jsx)("p", { children: "从乐品工作室出发，记录一路的设计合作、团队成长与重要节点。" })
				]
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "company-history-body",
				children: /* @__PURE__ */ (0, z.jsx)(nd, { items: e })
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "company-history-endcap",
				"aria-hidden": "true"
			})
		]
	});
}
//#endregion
//#region src/secondary-pages.jsx
function od(e) {
	let t = String(e || "").trim();
	return t.replace(/<[^>]*>/g, "").replace(/&(?:nbsp|#160|#xA0);/gi, " ").trim() ? /<(?:p|h[1-6]|ul|ol|blockquote|table)\b/i.test(t) ? t : t.replace(/\r\n?/g, "\n").replace(/(?:<br\s*\/?>\s*){2,}/gi, "\n\n").split(/\n[ \t]*\n+/).map((e) => e.trim()).filter(Boolean).map((e) => "<p>" + e + "</p>").join("\n") : "";
}
function sd({ data: e, Link: t, reduced: n, hrefFor: r }) {
	let i = new Map(e.projects.map((e) => [e.id, e])), a = (e) => String(e).padStart(2, "0"), o = [
		{
			title: "设计服务",
			links: [
				{
					label: "产品外观设计",
					href: "/products/?service=0"
				},
				{
					label: "产品结构设计",
					href: "/products/?service=1"
				},
				{
					label: "样机制作与验证",
					href: "/products/?service=2"
				},
				{
					label: "生产与落地支持",
					href: "/products/?service=3"
				}
			]
		},
		{
			title: "案例领域",
			links: [...e.categories.filter((e) => [
				"医疗健康",
				"智能设备",
				"设备设施",
				"日用家电"
			].includes(e.name)).map((e) => ({
				label: e.name,
				href: e.url
			})), {
				label: "查看全部案例",
				href: "/case/"
			}]
		},
		{
			title: "关于公司",
			links: [
				{
					label: "关于乐品乐道",
					href: "/about/"
				},
				{
					label: "合作客户",
					href: "/about/?section=clients"
				},
				{
					label: "西安乐品乐道工业设计有限公司",
					href: "/about/?section=studio"
				}
			]
		},
		{
			title: "联系方式",
			links: [
				{
					label: e.site.phone,
					href: "tel:" + e.site.phone
				},
				{
					label: e.site.email,
					href: "mailto:" + e.site.email
				},
				{
					label: e.site.address,
					href: "/contact/"
				}
			]
		}
	];
	function s({ title: e, description: t }) {
		return /* @__PURE__ */ (0, z.jsxs)("header", {
			className: "page-heading inner-heading",
			children: [/* @__PURE__ */ (0, z.jsx)("h1", {
				className: "inner-title",
				children: e
			}), t && /* @__PURE__ */ (0, z.jsx)("p", { children: t })]
		});
	}
	function c({ onNavigate: t }) {
		return /* @__PURE__ */ (0, z.jsx)(td, {
			logo: e.assets?.logo || "/templates/pc_wjdh/images/dlogo.png",
			companyName: e.site.name,
			description: "以工业设计连接想法、技术与制造。从产品外观、结构到样机与生产，让想法成为产品。",
			sections: o,
			icp: e.site.icp,
			hrefFor: r,
			onNavigate: e.draftPreview ? void 0 : t,
			onBackToTop: () => window.scrollTo({
				top: 0,
				behavior: n() ? "instant" : "smooth"
			})
		});
	}
	function l({ page: n, onNavigate: r }) {
		let [i, o] = (0, E.useState)("grid"), [l, u] = (0, E.useState)(null), d = Number(n.query.get("category")) || n.categoryId || 0, f = n.query.get("keyword") || "", p = e.categories.find((e) => e.id === d), m = (0, E.useMemo)(() => e.projects.filter((e) => (!d || e.categoryId === d) && (!f || [
			e.title,
			e.category,
			e.summary,
			e.client
		].join(" ").toLowerCase().includes(f.toLowerCase()))), [d, f]), h = Math.max(1, Math.ceil(m.length / 12)), g = Math.max(1, Math.min(h, Number(n.query.get("page")) || 1)), _ = m.slice((g - 1) * 12, g * 12), v = _.find((e) => e.id === l) || _[0], y = (e) => {
			let t = new URLSearchParams({
				...d ? { category: String(d) } : {},
				...f ? { keyword: f } : {}
			});
			for (let [n, r] of Object.entries(e)) r ? t.set(n, String(r)) : t.delete(n);
			return "/case/" + (t.size ? "?" + t : "");
		};
		return /* @__PURE__ */ (0, z.jsxs)("main", {
			id: "main-content",
			className: "content-page works-page",
			children: [
				/* @__PURE__ */ (0, z.jsx)(s, {
					title: p ? p.name + "案例" : "设计案例",
					description: "从专业设备到日常用品，查看不同领域的产品设计。"
				}),
				/* @__PURE__ */ (0, z.jsxs)("div", {
					className: "works-toolbar",
					children: [/* @__PURE__ */ (0, z.jsxs)("nav", {
						className: "category-filters",
						"aria-label": "按行业筛选",
						children: [/* @__PURE__ */ (0, z.jsx)(t, {
							href: y({
								category: 0,
								page: 0
							}),
							onNavigate: r,
							className: d ? "" : "active",
							"aria-current": d ? void 0 : "page",
							children: "全部"
						}), e.categories.map((e) => /* @__PURE__ */ (0, z.jsx)(t, {
							href: y({
								category: e.id,
								page: 0
							}),
							onNavigate: r,
							className: d === e.id ? "active" : "",
							"aria-current": d === e.id ? "page" : void 0,
							children: e.name
						}, e.id))]
					}), /* @__PURE__ */ (0, z.jsxs)("div", {
						className: "works-utilities",
						children: [/* @__PURE__ */ (0, z.jsxs)("label", {
							className: "project-search",
							children: [/* @__PURE__ */ (0, z.jsx)(Me, { size: 16 }), /* @__PURE__ */ (0, z.jsx)("input", {
								type: "search",
								"aria-label": "搜索设计案例",
								placeholder: "搜索案例",
								value: f,
								onChange: (e) => r(y({
									keyword: e.target.value,
									page: 0
								}), {
									replace: !0,
									instant: !0,
									preserveScroll: !0
								})
							})]
						}), /* @__PURE__ */ (0, z.jsxs)("div", {
							className: "layout-switch",
							"aria-label": "案例显示方式",
							children: [/* @__PURE__ */ (0, z.jsx)("button", {
								type: "button",
								"aria-label": "图片视图",
								"aria-pressed": i === "grid",
								onClick: () => o("grid"),
								children: /* @__PURE__ */ (0, z.jsx)(M, { size: 17 })
							}), /* @__PURE__ */ (0, z.jsx)("button", {
								type: "button",
								"aria-label": "列表视图",
								"aria-pressed": i === "list",
								onClick: () => o("list"),
								children: /* @__PURE__ */ (0, z.jsx)(ye, { size: 18 })
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, z.jsxs)("p", {
					className: "result-count",
					"aria-live": "polite",
					children: [
						m.length,
						" 个案例",
						f ? " / “" + f + "”" : ""
					]
				}),
				_.length ? /* @__PURE__ */ (0, z.jsxs)("div", {
					className: "works-layout " + i,
					children: [/* @__PURE__ */ (0, z.jsx)("div", {
						className: "work-items",
						children: _.map((e) => /* @__PURE__ */ (0, z.jsxs)(t, {
							href: e.url,
							onNavigate: r,
							shared: i === "grid",
							className: "work-item",
							onPointerEnter: () => u(e.id),
							onFocus: () => u(e.id),
							children: [i === "grid" && /* @__PURE__ */ (0, z.jsx)("figure", {
								"data-visual": !0,
								children: /* @__PURE__ */ (0, z.jsx)("img", {
									src: e.hero,
									alt: e.title,
									loading: "lazy",
									width: "1190",
									height: "720"
								})
							}), /* @__PURE__ */ (0, z.jsxs)("div", {
								className: "work-caption",
								children: [/* @__PURE__ */ (0, z.jsxs)("div", {
									className: "work-name",
									children: [/* @__PURE__ */ (0, z.jsx)("h2", { children: e.title }), /* @__PURE__ */ (0, z.jsx)("p", {
										className: "work-category",
										children: e.category
									})]
								}), /* @__PURE__ */ (0, z.jsx)(se, {
									className: "work-arrow",
									size: 18,
									strokeWidth: 1.4
								})]
							})]
						}, e.id))
					}), i === "list" && v && /* @__PURE__ */ (0, z.jsxs)("aside", {
						className: "work-preview",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, z.jsx)("figure", { children: /* @__PURE__ */ (0, z.jsx)("img", {
							src: v.hero,
							alt: "",
							width: "1190",
							height: "700"
						}) }), /* @__PURE__ */ (0, z.jsx)("p", { children: v.summary })]
					})]
				}) : /* @__PURE__ */ (0, z.jsxs)("div", {
					className: "empty-results",
					children: [
						/* @__PURE__ */ (0, z.jsx)("h2", { children: "没有找到相关案例。" }),
						/* @__PURE__ */ (0, z.jsx)("p", { children: "试试其他关键词，或查看全部案例。" }),
						/* @__PURE__ */ (0, z.jsxs)(t, {
							href: "/case/",
							onNavigate: r,
							className: "text-link",
							children: ["查看全部案例", /* @__PURE__ */ (0, z.jsx)(ae, { size: 16 })]
						})
					]
				}),
				h > 1 && /* @__PURE__ */ (0, z.jsxs)("nav", {
					className: "pagination",
					"aria-label": "案例分页",
					children: [
						/* @__PURE__ */ (0, z.jsxs)(t, {
							href: y({ page: Math.max(1, g - 1) }),
							onNavigate: r,
							"aria-disabled": g === 1,
							tabIndex: g === 1 ? -1 : 0,
							children: [/* @__PURE__ */ (0, z.jsx)(A, { size: 16 }), "上一页"]
						}),
						/* @__PURE__ */ (0, z.jsx)("div", { children: Array.from({ length: h }, (e, n) => /* @__PURE__ */ (0, z.jsx)(t, {
							href: y({ page: n + 1 }),
							onNavigate: r,
							"aria-current": g === n + 1 ? "page" : void 0,
							children: a(n + 1)
						}, n)) }),
						/* @__PURE__ */ (0, z.jsxs)(t, {
							href: y({ page: Math.min(h, g + 1) }),
							onNavigate: r,
							"aria-disabled": g === h,
							tabIndex: g === h ? -1 : 0,
							children: ["下一页", /* @__PURE__ */ (0, z.jsx)(ae, { size: 16 })]
						})
					]
				}),
				/* @__PURE__ */ (0, z.jsx)(c, { onNavigate: r })
			]
		});
	}
	function u({ project: n, onNavigate: r, homepageProjects: i }) {
		let a = i.includes(n) ? i : e.projects, o = a[(a.indexOf(n) + 1) % a.length], s = n.gallery.filter((e) => e.src !== n.hero), l = n.gallery.find((e) => e.src === n.hero), u = od(n.bodyHtml), d = [
			["项目领域", n.category],
			["合作客户", n.client],
			["服务内容", n.services],
			["设计年份", n.year]
		].filter(([, e]) => e);
		return (0, E.useEffect)(() => {
			let e = (e) => {
				e.key === "ArrowRight" && !e.target.closest("input,button,a,textarea") && r(o.url);
			};
			return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
		}, [o, r]), /* @__PURE__ */ (0, z.jsxs)("main", {
			id: "main-content",
			className: "content-page project-page",
			children: [/* @__PURE__ */ (0, z.jsxs)("article", {
				className: "project-content",
				children: [
					/* @__PURE__ */ (0, z.jsxs)("div", {
						className: "project-topline",
						children: [
							/* @__PURE__ */ (0, z.jsxs)(t, {
								href: "/case/",
								onNavigate: r,
								children: [/* @__PURE__ */ (0, z.jsx)(A, { size: 16 }), "全部案例"]
							}),
							/* @__PURE__ */ (0, z.jsx)("span", { children: n.category }),
							/* @__PURE__ */ (0, z.jsx)(t, {
								href: "/",
								onNavigate: r,
								"aria-label": "关闭项目，返回首页",
								children: /* @__PURE__ */ (0, z.jsx)(Re, { size: 20 })
							})
						]
					}),
					/* @__PURE__ */ (0, z.jsx)("div", {
						className: "project-heading",
						children: /* @__PURE__ */ (0, z.jsx)("h1", {
							className: "inner-title project-chinese-title",
							children: n.title
						})
					}),
					/* @__PURE__ */ (0, z.jsx)("figure", {
						className: "project-hero",
						style: { viewTransitionName: "project-visual" },
						children: /* @__PURE__ */ (0, z.jsx)("img", {
							src: n.hero,
							alt: n.title,
							width: l?.width || 1190,
							height: l?.height || 700,
							fetchPriority: "high"
						})
					}),
					/* @__PURE__ */ (0, z.jsxs)("section", {
						className: "project-overview" + (n.summary ? "" : " without-summary"),
						"aria-label": "项目介绍",
						children: [n.summary && /* @__PURE__ */ (0, z.jsx)("p", {
							className: "project-lead",
							children: n.summary
						}), /* @__PURE__ */ (0, z.jsx)("dl", {
							className: "project-metadata",
							"data-fields": d.length,
							children: d.map(([e, t]) => /* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)("dt", { children: e }), /* @__PURE__ */ (0, z.jsx)("dd", { children: t })] }, e))
						})]
					}),
					u && /* @__PURE__ */ (0, z.jsx)("section", {
						className: "project-story",
						"aria-label": "设计说明",
						dangerouslySetInnerHTML: { __html: u }
					}),
					!!s.length && /* @__PURE__ */ (0, z.jsx)("section", {
						className: "project-gallery",
						"aria-label": "案例图片",
						children: s.map((e, t) => /* @__PURE__ */ (0, z.jsx)("figure", { children: /* @__PURE__ */ (0, z.jsx)("img", {
							src: e.src,
							alt: n.title + "，案例图片 " + (t + 1),
							width: e.width || 1190,
							height: e.height || 700,
							loading: "lazy",
							decoding: "async"
						}) }, e.src))
					}),
					/* @__PURE__ */ (0, z.jsxs)("p", {
						className: "publication-note",
						children: ["资料发布日期：", n.publishedDate]
					}),
					o && /* @__PURE__ */ (0, z.jsxs)(t, {
						href: o.url,
						onNavigate: r,
						shared: !0,
						className: "next-project",
						children: [
							/* @__PURE__ */ (0, z.jsxs)("div", { children: [
								/* @__PURE__ */ (0, z.jsx)("span", { children: "下一个案例" }),
								/* @__PURE__ */ (0, z.jsx)("h2", { children: o.title }),
								/* @__PURE__ */ (0, z.jsx)("p", { children: o.category })
							] }),
							/* @__PURE__ */ (0, z.jsx)("figure", {
								"data-visual": !0,
								children: /* @__PURE__ */ (0, z.jsx)("img", {
									src: o.hero,
									alt: o.title,
									loading: "lazy",
									width: "1190",
									height: "700"
								})
							}),
							/* @__PURE__ */ (0, z.jsx)(se, {
								size: 24,
								strokeWidth: 1.3
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, z.jsx)(c, { onNavigate: r })]
		});
	}
	let d = [
		{
			name: "产品外观设计",
			tab: "外观设计",
			description: "从使用场景出发，梳理产品的形态、比例、色彩与材质，让功能与外观形成清晰一致的表达。",
			items: [
				"产品造型",
				"色彩与材质",
				"系列化设计"
			],
			project: 888646
		},
		{
			name: "产品结构设计",
			tab: "结构设计",
			description: "连接外观与内部功能，考虑部件布局、装配关系和工艺要求，为样机与制造建立基础。",
			items: [
				"内部结构",
				"部件与装配",
				"工艺衔接"
			],
			project: 888655
		},
		{
			name: "样机制作与验证",
			tab: "样机验证",
			description: "把方案转化为可以观察、触摸与验证的样机，在实际体验和装配中完善产品细节。",
			items: [
				"外观样机",
				"结构样机",
				"验证与调整"
			],
			project: 888616
		},
		{
			name: "生产与落地支持",
			tab: "生产支持",
			description: "结合材料、工艺和数量要求，协同打样、加工、装配与生产衔接，把设计方案逐步转化为实物产品。",
			items: [
				"工艺沟通",
				"制造协作",
				"生产衔接"
			],
			project: null
		}
	];
	function f({ page: r, onNavigate: o }) {
		let l = r.query.has("service") ? Number(r.query.get("service")) : r.service ?? 0, u = Number.isInteger(l) && l >= 0 && l < d.length ? l : 0, f = d[u], p = e.serviceMedia?.[u] || [], m = Number(r.query.get("supplier")) || r.supplierCategoryId || 0, h = (e.suppliers || []).filter((e) => !m || e.categoryId === m);
		return (0, E.useEffect)(() => {
			if (!r.query.has("service") && r.service === void 0) return;
			let e = r.supplierCategoryId || r.query.has("supplier") ? "manufacturing-resources" : "service-" + u, t = requestAnimationFrame(() => document.getElementById(e)?.scrollIntoView({
				block: "start",
				behavior: "instant"
			}));
			return () => cancelAnimationFrame(t);
		}, [
			u,
			r.service,
			r.query.has("service")
		]), /* @__PURE__ */ (0, z.jsxs)("main", {
			id: "main-content",
			className: "content-page services-page",
			children: [
				/* @__PURE__ */ (0, z.jsx)(s, {
					title: "设计服务",
					description: "从想法、设计到样机与制造，为产品的不同阶段提供支持。"
				}),
				/* @__PURE__ */ (0, z.jsx)("nav", {
					className: "service-tabs",
					"aria-label": "服务项目",
					children: d.map((e, n) => /* @__PURE__ */ (0, z.jsx)(t, {
						href: "/products/?service=" + n,
						onNavigate: o,
						className: u === n ? "active" : "",
						"aria-current": u === n ? "page" : void 0,
						children: e.tab
					}, e.name))
				}),
				/* @__PURE__ */ (0, z.jsxs)("section", {
					id: "service-" + u,
					className: "service-detail",
					"aria-labelledby": "service-title",
					children: [
						/* @__PURE__ */ (0, z.jsxs)("div", {
							className: "service-detail-intro",
							children: [/* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)("h2", {
								id: "service-title",
								children: f.name
							}), /* @__PURE__ */ (0, z.jsx)("ul", {
								className: "service-scope",
								children: f.items.map((e) => /* @__PURE__ */ (0, z.jsx)("li", { children: e }, e))
							})] }), /* @__PURE__ */ (0, z.jsx)("p", { children: f.description })]
						}),
						u === 3 && /* @__PURE__ */ (0, z.jsxs)("button", {
							type: "button",
							className: "text-link manufacturing-jump",
							onClick: () => document.getElementById("manufacturing-resources")?.scrollIntoView({
								block: "start",
								behavior: n() ? "instant" : "smooth"
							}),
							children: ["查看厂家图片与资料", /* @__PURE__ */ (0, z.jsx)(ae, { size: 16 })]
						}),
						/* @__PURE__ */ (0, z.jsx)("div", {
							id: "service-panel-" + u,
							className: "service-media-grid" + (p.length === 1 ? " single" : ""),
							children: p.map((e) => /* @__PURE__ */ (0, z.jsxs)("figure", { children: [/* @__PURE__ */ (0, z.jsx)("div", {
								className: "service-image",
								children: /* @__PURE__ */ (0, z.jsx)("img", {
									src: e.src,
									alt: e.alt,
									width: e.width,
									height: e.height,
									loading: "lazy",
									decoding: "async"
								})
							}), /* @__PURE__ */ (0, z.jsx)("figcaption", { children: e.caption })] }, e.src))
						}),
						f.project && i.has(f.project) && /* @__PURE__ */ (0, z.jsxs)(t, {
							href: i.get(f.project).url,
							onNavigate: o,
							className: "text-link",
							children: ["查看相关案例", /* @__PURE__ */ (0, z.jsx)(se, { size: 16 })]
						}),
						u === 3 && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsxs)("section", {
							className: "production-section",
							children: [/* @__PURE__ */ (0, z.jsxs)("div", {
								className: "inner-section-heading",
								children: [/* @__PURE__ */ (0, z.jsx)("h2", { children: "从打样到产品" }), /* @__PURE__ */ (0, z.jsx)("p", { children: "根据材料、工艺与产量需求，衔接打样、加工、装配与测试。" })]
							}), /* @__PURE__ */ (0, z.jsx)("ol", {
								className: "production-process",
								children: (e.productionSteps || []).map((e, t) => /* @__PURE__ */ (0, z.jsxs)("li", { children: [
									/* @__PURE__ */ (0, z.jsx)("figure", { children: /* @__PURE__ */ (0, z.jsx)("img", {
										src: e.src,
										alt: e.alt,
										width: e.width,
										height: e.height,
										loading: "lazy"
									}) }),
									/* @__PURE__ */ (0, z.jsxs)("div", {
										className: "production-step-heading",
										children: [/* @__PURE__ */ (0, z.jsx)("span", { children: a(t + 1) }), /* @__PURE__ */ (0, z.jsx)("h3", { children: e.title })]
									}),
									/* @__PURE__ */ (0, z.jsx)("p", { children: e.description })
								] }, e.title))
							})]
						}), /* @__PURE__ */ (0, z.jsxs)("section", {
							id: "manufacturing-resources",
							className: "supplier-section",
							"aria-labelledby": "supplier-heading",
							children: [
								/* @__PURE__ */ (0, z.jsxs)("div", {
									className: "inner-section-heading",
									children: [/* @__PURE__ */ (0, z.jsx)("h2", {
										id: "supplier-heading",
										children: "制造协作厂家"
									}), /* @__PURE__ */ (0, z.jsx)("p", { children: "按加工类型浏览厂家，查看车间、设备与样件图片。" })]
								}),
								/* @__PURE__ */ (0, z.jsxs)("nav", {
									className: "supplier-filters",
									"aria-label": "制造资源分类",
									children: [/* @__PURE__ */ (0, z.jsx)(t, {
										href: "/products/?service=3",
										onNavigate: (e) => o(e, {
											preserveScroll: !0,
											instant: !0
										}),
										className: m ? "" : "active",
										children: "全部"
									}), (e.supplierCategories || []).filter((t) => e.suppliers.some((e) => e.categoryId === t.id)).map((e) => /* @__PURE__ */ (0, z.jsx)(t, {
										href: "/products/?service=3&supplier=" + e.id,
										onNavigate: (e) => o(e, {
											preserveScroll: !0,
											instant: !0
										}),
										className: m === e.id ? "active" : "",
										children: e.name
									}, e.id))]
								}),
								/* @__PURE__ */ (0, z.jsx)("div", {
									className: "supplier-grid",
									children: h.map((e) => /* @__PURE__ */ (0, z.jsxs)(t, {
										href: e.url,
										onNavigate: o,
										className: "supplier-card",
										children: [
											/* @__PURE__ */ (0, z.jsx)("figure", { children: /* @__PURE__ */ (0, z.jsx)("img", {
												src: e.hero,
												alt: e.name + "，厂家图片",
												loading: "lazy"
											}) }),
											/* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)("h3", { children: e.name }), /* @__PURE__ */ (0, z.jsx)(se, { size: 17 })] }),
											/* @__PURE__ */ (0, z.jsx)("p", { children: e.summary })
										]
									}, e.id))
								})
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, z.jsxs)("section", {
					className: "process-section",
					children: [/* @__PURE__ */ (0, z.jsx)("h2", { children: "把设计一步步做实" }), /* @__PURE__ */ (0, z.jsx)("ol", {
						className: "process-steps",
						children: [
							["理解", "明确需求与使用场景"],
							["设计", "推进外观与结构方案"],
							["验证", "通过样机完善细节"],
							["落地", "衔接工艺与生产"]
						].map(([e, t], n) => /* @__PURE__ */ (0, z.jsxs)("li", { children: [
							/* @__PURE__ */ (0, z.jsx)("span", { children: a(n + 1) }),
							/* @__PURE__ */ (0, z.jsx)("h3", { children: e }),
							/* @__PURE__ */ (0, z.jsx)("p", { children: t })
						] }, e))
					})]
				}),
				/* @__PURE__ */ (0, z.jsx)(c, { onNavigate: o })
			]
		});
	}
	function p({ supplier: e, onNavigate: n }) {
		return /* @__PURE__ */ (0, z.jsxs)("main", {
			id: "main-content",
			className: "content-page supplier-page",
			children: [
				/* @__PURE__ */ (0, z.jsxs)(t, {
					href: "/products/?service=3&supplier=" + e.categoryId,
					onNavigate: n,
					className: "detail-back",
					children: [/* @__PURE__ */ (0, z.jsx)(A, { size: 16 }), "制造协作厂家"]
				}),
				/* @__PURE__ */ (0, z.jsx)(s, {
					title: e.name,
					description: e.summary
				}),
				/* @__PURE__ */ (0, z.jsxs)("div", {
					className: "supplier-provenance",
					children: [/* @__PURE__ */ (0, z.jsx)("span", { children: e.category }), /* @__PURE__ */ (0, z.jsx)("span", { children: "厂家资料" })]
				}),
				/* @__PURE__ */ (0, z.jsx)("section", {
					className: "supplier-gallery",
					"aria-label": e.name + "图片",
					children: e.gallery.map((t, n) => /* @__PURE__ */ (0, z.jsx)("figure", { children: /* @__PURE__ */ (0, z.jsx)("img", {
						src: t.src,
						alt: e.name + "，厂家图片 " + (n + 1),
						width: t.width,
						height: t.height,
						style: { maxWidth: t.width },
						loading: n === 0 ? "eager" : "lazy",
						decoding: "async"
					}) }, t.src))
				}),
				/* @__PURE__ */ (0, z.jsxs)("p", {
					className: "publication-note",
					children: ["资料发布日期：", e.publishedDate]
				}),
				/* @__PURE__ */ (0, z.jsx)(c, { onNavigate: n })
			]
		});
	}
	function m({ page: n, onNavigate: r }) {
		let i = n.query.get("section");
		return (0, E.useEffect)(() => {
			if (![
				"clients",
				"studio",
				"history"
			].includes(i)) return;
			let e = requestAnimationFrame(() => document.getElementById("about-" + i)?.scrollIntoView({
				block: "start",
				behavior: "instant"
			}));
			return () => cancelAnimationFrame(e);
		}, [i]), /* @__PURE__ */ (0, z.jsxs)("main", {
			id: "main-content",
			className: "content-page about-page",
			children: [
				/* @__PURE__ */ (0, z.jsx)(s, {
					title: "关于乐品乐道",
					description: "以设计思考，赋予产品价值。"
				}),
				/* @__PURE__ */ (0, z.jsxs)("section", {
					className: "about-introduction",
					children: [/* @__PURE__ */ (0, z.jsxs)("h2", { children: [
						"让想法成为",
						/* @__PURE__ */ (0, z.jsx)("br", {}),
						"更好的产品。"
					] }), /* @__PURE__ */ (0, z.jsxs)("div", { children: [
						/* @__PURE__ */ (0, z.jsx)("p", { children: "西安乐品乐道工业设计有限公司关注产品的外观、结构与实际使用，为企业提供从设计到样机、生产衔接的支持。" }),
						/* @__PURE__ */ (0, z.jsx)("p", { children: "从专业设备到日用产品，我们通过理解需求、推敲方案和验证细节，让设计逐步走向实物。" }),
						/* @__PURE__ */ (0, z.jsxs)(t, {
							href: "/products/",
							onNavigate: r,
							className: "text-link",
							children: ["了解设计服务", /* @__PURE__ */ (0, z.jsx)(se, { size: 16 })]
						})
					] })]
				}),
				/* @__PURE__ */ (0, z.jsx)(ad, { items: e.companyHistory || [] }),
				/* @__PURE__ */ (0, z.jsxs)("section", {
					className: "fields-section",
					children: [/* @__PURE__ */ (0, z.jsx)("h2", { children: "设计领域" }), /* @__PURE__ */ (0, z.jsx)("div", { children: e.categories.map((e) => /* @__PURE__ */ (0, z.jsxs)(t, {
						href: e.url,
						onNavigate: r,
						children: [e.name, /* @__PURE__ */ (0, z.jsx)(se, { size: 15 })]
					}, e.id)) })]
				}),
				/* @__PURE__ */ (0, z.jsxs)("section", {
					id: "about-clients",
					className: "client-section",
					children: [/* @__PURE__ */ (0, z.jsxs)("div", {
						className: "inner-section-heading",
						children: [/* @__PURE__ */ (0, z.jsx)("h2", { children: "合作客户" }), /* @__PURE__ */ (0, z.jsx)("p", { children: "与不同领域的伙伴一起，推进产品设计。" })]
					}), /* @__PURE__ */ (0, z.jsx)("div", {
						className: "client-logos",
						children: e.clients.map((e) => /* @__PURE__ */ (0, z.jsxs)("figure", { children: [/* @__PURE__ */ (0, z.jsx)("img", {
							src: e.image,
							alt: e.name,
							loading: "lazy",
							width: "132",
							height: "100"
						}), /* @__PURE__ */ (0, z.jsx)("figcaption", { children: e.name })] }, e.name))
					})]
				}),
				/* @__PURE__ */ (0, z.jsxs)("section", {
					id: "about-studio",
					className: "studio-address",
					children: [/* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)("h2", { children: "西安乐品乐道工业设计有限公司" }), /* @__PURE__ */ (0, z.jsx)("p", { children: e.site.address })] }), /* @__PURE__ */ (0, z.jsxs)(t, {
						href: "/contact/",
						onNavigate: r,
						className: "text-link",
						children: ["联系方式", /* @__PURE__ */ (0, z.jsx)(se, { size: 16 })]
					})]
				}),
				/* @__PURE__ */ (0, z.jsx)(c, { onNavigate: r })
			]
		});
	}
	function h({ onNavigate: t }) {
		let [n, r] = (0, E.useState)(!1), i = (0, E.useRef)(null);
		return (0, E.useEffect)(() => () => clearTimeout(i.current), []), /* @__PURE__ */ (0, z.jsxs)("main", {
			id: "main-content",
			className: "content-page contact-page",
			children: [
				/* @__PURE__ */ (0, z.jsx)(s, {
					title: "联系乐品乐道",
					description: "从一个想法开始，聊聊产品与设计。"
				}),
				/* @__PURE__ */ (0, z.jsxs)("section", {
					className: "contact-methods",
					"aria-label": "联系方式",
					children: [/* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)("h2", { children: "电话" }), /* @__PURE__ */ (0, z.jsxs)("a", {
						href: "tel:" + e.site.phone,
						className: "contact-phone",
						children: [e.site.phone, /* @__PURE__ */ (0, z.jsx)(se, { size: 25 })]
					})] }), /* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)("h2", { children: "邮箱" }), /* @__PURE__ */ (0, z.jsxs)("a", {
						href: "mailto:" + e.site.email,
						className: "contact-email",
						children: [e.site.email, /* @__PURE__ */ (0, z.jsx)(se, { size: 20 })]
					})] })]
				}),
				/* @__PURE__ */ (0, z.jsxs)("section", {
					className: "contact-address",
					children: [/* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)("h2", { children: "来访地址" }), /* @__PURE__ */ (0, z.jsx)("p", {
						"data-address": !0,
						children: e.site.address
					})] }), /* @__PURE__ */ (0, z.jsxs)("button", {
						type: "button",
						className: "copy-address",
						onClick: async () => {
							try {
								await navigator.clipboard.writeText(e.site.address), r(!0), clearTimeout(i.current), i.current = setTimeout(() => r(!1), 2200);
							} catch {
								let e = document.querySelector("[data-address]");
								if (e) {
									let t = document.createRange();
									t.selectNodeContents(e);
									let n = window.getSelection();
									n.removeAllRanges(), n.addRange(t);
								}
							}
						},
						children: [n ? /* @__PURE__ */ (0, z.jsx)(pe, { size: 15 }) : /* @__PURE__ */ (0, z.jsx)(_e, { size: 15 }), /* @__PURE__ */ (0, z.jsx)("span", {
							"aria-live": "polite",
							children: n ? "地址已复制" : "复制地址"
						})]
					})]
				}),
				/* @__PURE__ */ (0, z.jsx)(c, { onNavigate: t })
			]
		});
	}
	return {
		Works: l,
		Project: u,
		Services: f,
		About: m,
		Contact: h,
		Supplier: p
	};
}
//#endregion
//#region src/portfolio.jsx
var X = JSON.parse(document.getElementById("portfolio-data").textContent);
if (X.embeddedImages) {
	let e = (e) => X.embeddedImages[e] || e;
	for (let t of X.projects) {
		t.hero = e(t.hero), t.cover = e(t.cover);
		for (let n of t.gallery) n.src = e(n.src);
	}
	for (let t of X.clients) t.image = e(t.image);
	for (let t of Object.values(X.serviceMedia || {}).flat()) t.src = e(t.src);
	for (let t of X.productionSteps || []) t.src = e(t.src);
	for (let t of X.suppliers || []) {
		t.hero = e(t.hero);
		for (let n of t.gallery) n.src = e(n.src);
	}
	for (let t of X.companyHistory || []) t.image &&= e(t.image);
	X.assets?.logo && (X.assets.logo = e(X.assets.logo)), delete X.embeddedImages, document.getElementById("portfolio-data").remove();
}
var cd = window.location.protocol === "file:" || X.staticSite === !0, ld = new Map(X.projects.map((e) => [e.id, e])), ud = new Map((X.suppliers || []).map((e) => [e.id, e])), dd = X.projects.filter((e) => e.hero && e.url), fd = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, pd = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey, md = [
	{
		key: "home",
		label: "首页",
		href: "/"
	},
	{
		key: "work",
		label: "案例",
		href: "/case/",
		layout: "cases",
		items: X.categories.map((e) => ({
			label: e.name,
			href: e.url,
			description: X.projects.filter((t) => t.categoryId === e.id).length + " 个设计案例"
		}))
	},
	{
		key: "services",
		label: "服务",
		href: "/products/",
		layout: "description",
		items: [
			{
				label: "产品外观设计",
				href: "/products/?service=0",
				description: "从形态、比例到色彩与材质，建立产品的鲜明表达。"
			},
			{
				label: "产品结构设计",
				href: "/products/?service=1",
				description: "衔接内部功能、部件布局与装配工艺。"
			},
			{
				label: "样机制作与验证",
				href: "/products/?service=2",
				description: "通过可观察、可体验的样机完善设计细节。"
			},
			{
				label: "生产与落地支持",
				href: "/products/?service=3",
				description: "协同打样、加工与生产，让方案走向产品。"
			}
		]
	},
	{
		key: "about",
		label: "关于",
		href: "/about/",
		layout: "icon",
		items: [
			{
				label: "关于乐品乐道",
				href: "/about/",
				description: "了解我们的设计理念与工作方式。",
				icon: de
			},
			{
				label: "合作客户",
				href: "/about/?section=clients",
				description: "与不同领域的伙伴，探索产品的可能。",
				icon: Ie
			},
			{
				label: "西安乐品乐道工业设计有限公司",
				href: "/about/?section=studio",
				description: "在西安，保持创造。",
				icon: xe
			}
		]
	},
	{
		key: "contact",
		label: "联系",
		href: "/contact/"
	}
], hd = (e) => cd && e.startsWith("/") && !e.startsWith("//") ? "#" + e : e;
function gd(e) {
	if (!cd) return;
	let t = document.getElementById("main-content");
	t && (e.preventDefault(), t.setAttribute("tabindex", "-1"), t.focus());
}
function _d() {
	let e = cd ? new URL(window.location.hash.slice(1) || "/", "https://portfolio.local") : window.location, t = e.pathname.replace(/\/+$/, "") || "/", n = new URLSearchParams(e.search);
	if (t.startsWith("/__cms-preview/") && X.draftPreview && X.initialPage?.id) {
		let e = X.initialPage.type === "supplier" && ud.get(X.initialPage.id);
		if (e) return {
			type: "supplier",
			supplier: e,
			query: n
		};
		let t = ld.get(X.initialPage.id);
		if (t) return {
			type: "project",
			project: t,
			query: n
		};
	}
	if (t === "/") return {
		type: "home",
		query: n
	};
	if (["/case", "/projects"].includes(t)) return {
		type: "work",
		query: n
	};
	if ([
		"/products",
		"/services",
		"/fwyd",
		"/p1",
		"/p2",
		"/fwlc",
		"/scfw",
		"/gyl"
	].includes(t)) return {
		type: "services",
		service: ["/scfw", "/gyl"].includes(t) ? 3 : void 0,
		query: n
	};
	if ([
		"/about",
		"/aboutus",
		"/album",
		"/customs",
		"/khdt"
	].includes(t)) return {
		type: "about",
		query: n
	};
	if ([
		"/contact",
		"/sjzx",
		"/lxgsxx"
	].includes(t)) return {
		type: "contact",
		query: n
	};
	let r = (X.suppliers || []).find((e) => e.url.replace(/\/$/, "") === t);
	if (r) return {
		type: "supplier",
		supplier: r,
		query: n
	};
	let i = (X.supplierCategories || []).find((e) => e.url.replace(/\/$/, "") === t);
	if (i) return {
		type: "services",
		service: 3,
		supplierCategoryId: i.id,
		query: n
	};
	let a = X.projects.find((e) => e.url.replace(/\/$/, "") === t);
	if (a) return {
		type: "project",
		project: a,
		query: n
	};
	let o = X.categories.find((e) => e.url.replace(/\/$/, "") === t);
	return o ? {
		type: "work",
		categoryId: o.id,
		query: n
	} : {
		type: "notFound",
		query: n
	};
}
function vd({ href: e, onNavigate: t, children: n, className: r = "", shared: i = !1, ...a }) {
	return /* @__PURE__ */ (0, z.jsx)("a", {
		href: hd(e),
		className: r,
		...a,
		onClick: (n) => {
			if (a.onClick?.(n), !X.draftPreview && !n.defaultPrevented && pd(n)) {
				if (n.preventDefault(), i) {
					let e = n.currentTarget.querySelector("[data-visual]");
					e && (document.querySelectorAll("[style*=\"view-transition-name\"]").forEach((e) => {
						e.style.viewTransitionName = "none";
					}), e.style.viewTransitionName = "project-visual");
				}
				t(e);
			}
		},
		children: n
	});
}
function yd({ page: e, onNavigate: t }) {
	let n = cd ? window.location.hash.slice(1) || "/" : window.location.pathname + window.location.search;
	return /* @__PURE__ */ (0, z.jsx)(ed, {
		logo: X.assets?.logo || (cd ? "./" : "/") + "templates/pc_wjdh/images/dlogo.png",
		phone: X.site.phone,
		links: md,
		activeKey: e.type === "project" ? "work" : e.type === "supplier" ? "services" : e.type,
		activeHref: n,
		hrefFor: hd,
		onNavigate: X.draftPreview ? void 0 : t,
		theme: "dark"
	});
}
function bd({ projects: e, index: t, expanded: n, onActiveChange: r, onNavigate: i }) {
	let [a, o] = (0, E.useState)(!1), s = (0, E.useCallback)((e) => o(e), []), c = (0, E.useMemo)(() => e.map((e) => ({
		id: e.id,
		title: e.title,
		category: e.category,
		image: e.hero,
		href: hd(e.url)
	})), [e]), l = (e, t) => {
		let n = t.currentTarget.closest("[data-wheel-card]")?.querySelector("[data-visual]") || document.querySelector("[data-wheel-front=true] [data-visual]");
		n && (document.querySelectorAll("[style*=\"view-transition-name\"]").forEach((e) => {
			e.style.viewTransitionName = "none";
		}), n.style.viewTransitionName = "project-visual"), i(ld.get(e.id).url);
	};
	if (!c.length) return /* @__PURE__ */ (0, z.jsx)(xd, {
		page: { query: new URLSearchParams() },
		onNavigate: i
	});
	let u = X.assets?.logo || (cd ? "./" : "/") + "templates/pc_wjdh/images/dlogo.png", d = c[t];
	return /* @__PURE__ */ (0, z.jsxs)("main", {
		id: "main-content",
		className: "home-stage home-wheel-layout",
		children: [
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "home-overview-backdrop" + (n ? " is-hidden" : ""),
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, z.jsx)(Wn, {})
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "home-case-backdrop" + (n ? " is-visible" : ""),
				"aria-hidden": "true",
				children: c.slice(Math.max(0, t - 2), t + 3).map((e) => /* @__PURE__ */ (0, z.jsx)("img", {
					src: e.image,
					alt: "",
					decoding: "async",
					"data-backdrop-active": e === d ? "true" : void 0,
					className: e === d ? "is-current" : ""
				}, e.id))
			}),
			/* @__PURE__ */ (0, z.jsx)(Mn, {
				items: c,
				className: "home-works-wheel",
				initialIndex: n ? t : void 0,
				onActiveChange: r,
				onIdleChange: s,
				wheelIdleReturnMs: 5e3,
				onOpen: l,
				overview: /* @__PURE__ */ (0, z.jsx)(Un, {
					items: c,
					logo: u,
					companyName: "乐品乐道工业设计（西安）",
					paused: !a || n,
					onOpen: l
				})
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "home-bottom",
				children: /* @__PURE__ */ (0, z.jsxs)("span", {
					className: "scroll-prompt",
					children: [/* @__PURE__ */ (0, z.jsx)("span", { className: "scroll-mouse" }), "滚轮或左右拖动，探索案例"]
				})
			})
		]
	});
}
var { Works: xd, Project: Sd, Services: Cd, About: wd, Contact: Td, Supplier: Ed } = sd({
	data: X,
	Link: vd,
	reduced: fd,
	hrefFor: hd
});
function Dd() {
	let [e, t] = (0, E.useState)(_d), [n, r] = (0, E.useState)(() => ({
		projects: q(dd, dd.length),
		revision: 0
	})), [i, a] = (0, E.useState)(0), [o, s] = (0, E.useState)(!1), c = (0, E.useRef)(window.location.href), l = (0, E.useCallback)(() => {
		let e = q(dd, dd.length);
		r((t) => ({
			projects: e,
			revision: t.revision + 1
		})), a(0), s(!1);
	}, []), u = (0, E.useCallback)((e, t) => {
		a(e), s(t);
	}, []), d = (0, E.useCallback)((e, n = {}) => {
		let r = cd ? "https://portfolio.local" : window.location.origin, i = new URL(e, r);
		if (i.origin !== r) {
			window.location.href = e;
			return;
		}
		let a = () => {
			window.history[n.replace ? "replaceState" : "pushState"]({}, "", (cd ? "#" : "") + i.pathname + i.search + i.hash), c.current = window.location.href, (0, ze.flushSync)(() => {
				let e = _d();
				e.type === "home" && l(), t(e);
			}), n.preserveScroll || window.scrollTo({
				top: 0,
				behavior: "instant"
			});
		};
		document.startViewTransition && !fd() && !n.instant ? document.startViewTransition(a) : a();
	}, [l]);
	return (0, E.useEffect)(() => {
		let e = (e) => {
			if (e.type === "hashchange" && c.current === window.location.href) return;
			c.current = window.location.href;
			let n = _d();
			n.type === "home" && l(), t(n), window.scrollTo(0, 0);
		};
		return window.addEventListener("popstate", e), cd && window.addEventListener("hashchange", e), () => {
			window.removeEventListener("popstate", e), window.removeEventListener("hashchange", e);
		};
	}, [l]), (0, E.useLayoutEffect)(() => {
		document.documentElement.dataset.home = String(e.type === "home"), document.documentElement.dataset.theme = "dark", document.querySelector("meta[name=\"theme-color\"]")?.setAttribute("content", e.type === "home" ? "#000000" : "#080808");
	}, [e.type]), (0, E.useEffect)(() => {
		document.body.classList.toggle("is-home", e.type === "home"), document.body.classList.toggle("draft-preview", !!X.draftPreview), document.title = (e.project?.title || e.supplier?.name || {
			home: "让想法，成为更好的产品",
			work: "设计案例",
			services: "设计服务",
			about: "关于乐品乐道",
			contact: "联系信息"
		}[e.type] || "页面未找到") + " — 乐品乐道工业设计";
		let t = document.querySelector("main");
		e.type !== "home" && t && (t.setAttribute("tabindex", "-1"), t.focus({ preventScroll: !0 }));
	}, [
		e.type,
		e.project?.id,
		e.supplier?.id
	]), /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
		/* @__PURE__ */ (0, z.jsx)("a", {
			className: "skip-link",
			href: "#main-content",
			onClick: gd,
			children: "跳到主要内容"
		}),
		X.draftPreview && /* @__PURE__ */ (0, z.jsxs)("aside", {
			className: "draft-notice",
			children: [/* @__PURE__ */ (0, z.jsx)("span", { children: "草稿预览 · 尚未发布" }), /* @__PURE__ */ (0, z.jsx)("a", {
				href: "/",
				children: "返回已发布网站"
			})]
		}),
		/* @__PURE__ */ (0, z.jsx)(yd, {
			page: e,
			onNavigate: d
		}),
		e.type === "home" ? /* @__PURE__ */ (0, z.jsx)(bd, {
			projects: n.projects,
			index: i,
			expanded: o,
			onActiveChange: u,
			onNavigate: d
		}, n.revision) : e.type === "work" ? /* @__PURE__ */ (0, z.jsx)(xd, {
			page: e,
			onNavigate: d
		}) : e.type === "project" ? /* @__PURE__ */ (0, z.jsx)(Sd, {
			project: e.project,
			homepageProjects: n.projects.slice(0, 12),
			onNavigate: d
		}, e.project.id) : e.type === "supplier" ? /* @__PURE__ */ (0, z.jsx)(Ed, {
			supplier: e.supplier,
			onNavigate: d
		}, e.supplier.id) : e.type === "services" ? /* @__PURE__ */ (0, z.jsx)(Cd, {
			page: e,
			onNavigate: d
		}) : e.type === "about" ? /* @__PURE__ */ (0, z.jsx)(wd, {
			page: e,
			onNavigate: d
		}) : e.type === "contact" ? /* @__PURE__ */ (0, z.jsx)(Td, { onNavigate: d }) : /* @__PURE__ */ (0, z.jsxs)("main", {
			className: "content-page empty-results",
			children: [/* @__PURE__ */ (0, z.jsx)("h1", { children: "这个想法，还没有成形。" }), /* @__PURE__ */ (0, z.jsx)(vd, {
				href: "/",
				onNavigate: d,
				children: "回到首页"
			})]
		})
	] });
}
(0, Be.createRoot)(document.getElementById("portfolio-root")).render(/* @__PURE__ */ (0, z.jsx)(Dd, {}));
//#endregion
