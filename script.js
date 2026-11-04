var ig = Object.defineProperty;
var cg = (e, t, n) => t in e ? ig(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var Rt = (e, t, n) => cg(e, typeof t != "symbol" ? t + "" : t, n);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const o of s)
            if (o.type === "childList")
                for (const a of o.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity),
        s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const o = n(s);
        fetch(s.href, o)
    }
}
)();
function ug(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var xm = {
    exports: {}
}
  , Gl = {}
  , gm = {
    exports: {}
}
  , le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zs = Symbol.for("react.element")
  , dg = Symbol.for("react.portal")
  , fg = Symbol.for("react.fragment")
  , hg = Symbol.for("react.strict_mode")
  , mg = Symbol.for("react.profiler")
  , pg = Symbol.for("react.provider")
  , xg = Symbol.for("react.context")
  , gg = Symbol.for("react.forward_ref")
  , yg = Symbol.for("react.suspense")
  , vg = Symbol.for("react.memo")
  , wg = Symbol.for("react.lazy")
  , Gu = Symbol.iterator;
function kg(e) {
    return e === null || typeof e != "object" ? null : (e = Gu && e[Gu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ym = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , vm = Object.assign
  , wm = {};
function Ir(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = wm,
    this.updater = n || ym
}
Ir.prototype.isReactComponent = {};
Ir.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Ir.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function km() {}
km.prototype = Ir.prototype;
function Ic(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = wm,
    this.updater = n || ym
}
var _c = Ic.prototype = new km;
_c.constructor = Ic;
vm(_c, Ir.prototype);
_c.isPureReactComponent = !0;
var Ku = Array.isArray
  , jm = Object.prototype.hasOwnProperty
  , zc = {
    current: null
}
  , bm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Sm(e, t, n) {
    var r, s = {}, o = null, a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            jm.call(t, r) && !bm.hasOwnProperty(r) && (s[r] = t[r]);
    var i = arguments.length - 2;
    if (i === 1)
        s.children = n;
    else if (1 < i) {
        for (var c = Array(i), u = 0; u < i; u++)
            c[u] = arguments[u + 2];
        s.children = c
    }
    if (e && e.defaultProps)
        for (r in i = e.defaultProps,
        i)
            s[r] === void 0 && (s[r] = i[r]);
    return {
        $$typeof: Zs,
        type: e,
        key: o,
        ref: a,
        props: s,
        _owner: zc.current
    }
}
function jg(e, t) {
    return {
        $$typeof: Zs,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Fc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Zs
}
function bg(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var qu = /\/+/g;
function xa(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? bg("" + e.key) : t.toString(36)
}
function Uo(e, t, n, r, s) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (o) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Zs:
            case dg:
                a = !0
            }
        }
    if (a)
        return a = e,
        s = s(a),
        e = r === "" ? "." + xa(a, 0) : r,
        Ku(s) ? (n = "",
        e != null && (n = e.replace(qu, "$&/") + "/"),
        Uo(s, t, n, "", function(u) {
            return u
        })) : s != null && (Fc(s) && (s = jg(s, n + (!s.key || a && a.key === s.key ? "" : ("" + s.key).replace(qu, "$&/") + "/") + e)),
        t.push(s)),
        1;
    if (a = 0,
    r = r === "" ? "." : r + ":",
    Ku(e))
        for (var i = 0; i < e.length; i++) {
            o = e[i];
            var c = r + xa(o, i);
            a += Uo(o, t, n, c, s)
        }
    else if (c = kg(e),
    typeof c == "function")
        for (e = c.call(e),
        i = 0; !(o = e.next()).done; )
            o = o.value,
            c = r + xa(o, i++),
            a += Uo(o, t, n, c, s);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function lo(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , s = 0;
    return Uo(e, r, "", "", function(o) {
        return t.call(n, o, s++)
    }),
    r
}
function Sg(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var qe = {
    current: null
}
  , Bo = {
    transition: null
}
  , Ng = {
    ReactCurrentDispatcher: qe,
    ReactCurrentBatchConfig: Bo,
    ReactCurrentOwner: zc
};
function Nm() {
    throw Error("act(...) is not supported in production builds of React.")
}
le.Children = {
    map: lo,
    forEach: function(e, t, n) {
        lo(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return lo(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return lo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Fc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
le.Component = Ir;
le.Fragment = fg;
le.Profiler = mg;
le.PureComponent = Ic;
le.StrictMode = hg;
le.Suspense = yg;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ng;
le.act = Nm;
le.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = vm({}, e.props)
      , s = e.key
      , o = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        a = zc.current),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
            var i = e.type.defaultProps;
        for (c in t)
            jm.call(t, c) && !bm.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c])
    }
    var c = arguments.length - 2;
    if (c === 1)
        r.children = n;
    else if (1 < c) {
        i = Array(c);
        for (var u = 0; u < c; u++)
            i[u] = arguments[u + 2];
        r.children = i
    }
    return {
        $$typeof: Zs,
        type: e.type,
        key: s,
        ref: o,
        props: r,
        _owner: a
    }
}
;
le.createContext = function(e) {
    return e = {
        $$typeof: xg,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: pg,
        _context: e
    },
    e.Consumer = e
}
;
le.createElement = Sm;
le.createFactory = function(e) {
    var t = Sm.bind(null, e);
    return t.type = e,
    t
}
;
le.createRef = function() {
    return {
        current: null
    }
}
;
le.forwardRef = function(e) {
    return {
        $$typeof: gg,
        render: e
    }
}
;
le.isValidElement = Fc;
le.lazy = function(e) {
    return {
        $$typeof: wg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Sg
    }
}
;
le.memo = function(e, t) {
    return {
        $$typeof: vg,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
le.startTransition = function(e) {
    var t = Bo.transition;
    Bo.transition = {};
    try {
        e()
    } finally {
        Bo.transition = t
    }
}
;
le.unstable_act = Nm;
le.useCallback = function(e, t) {
    return qe.current.useCallback(e, t)
}
;
le.useContext = function(e) {
    return qe.current.useContext(e)
}
;
le.useDebugValue = function() {}
;
le.useDeferredValue = function(e) {
    return qe.current.useDeferredValue(e)
}
;
le.useEffect = function(e, t) {
    return qe.current.useEffect(e, t)
}
;
le.useId = function() {
    return qe.current.useId()
}
;
le.useImperativeHandle = function(e, t, n) {
    return qe.current.useImperativeHandle(e, t, n)
}
;
le.useInsertionEffect = function(e, t) {
    return qe.current.useInsertionEffect(e, t)
}
;
le.useLayoutEffect = function(e, t) {
    return qe.current.useLayoutEffect(e, t)
}
;
le.useMemo = function(e, t) {
    return qe.current.useMemo(e, t)
}
;
le.useReducer = function(e, t, n) {
    return qe.current.useReducer(e, t, n)
}
;
le.useRef = function(e) {
    return qe.current.useRef(e)
}
;
le.useState = function(e) {
    return qe.current.useState(e)
}
;
le.useSyncExternalStore = function(e, t, n) {
    return qe.current.useSyncExternalStore(e, t, n)
}
;
le.useTransition = function() {
    return qe.current.useTransition()
}
;
le.version = "18.3.1";
gm.exports = le;
var h = gm.exports;
const Mg = ug(h);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eg = h
  , Tg = Symbol.for("react.element")
  , Rg = Symbol.for("react.fragment")
  , Ag = Object.prototype.hasOwnProperty
  , Cg = Eg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Lg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Mm(e, t, n) {
    var r, s = {}, o = null, a = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (r in t)
        Ag.call(t, r) && !Lg.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            s[r] === void 0 && (s[r] = t[r]);
    return {
        $$typeof: Tg,
        type: e,
        key: o,
        ref: a,
        props: s,
        _owner: Cg.current
    }
}
Gl.Fragment = Rg;
Gl.jsx = Mm;
Gl.jsxs = Mm;
xm.exports = Gl;
var l = xm.exports
  , hi = {}
  , Em = {
    exports: {}
}
  , it = {}
  , Tm = {
    exports: {}
}
  , Rm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(I, $) {
        var F = I.length;
        I.push($);
        e: for (; 0 < F; ) {
            var z = F - 1 >>> 1
              , U = I[z];
            if (0 < s(U, $))
                I[z] = $,
                I[F] = U,
                F = z;
            else
                break e
        }
    }
    function n(I) {
        return I.length === 0 ? null : I[0]
    }
    function r(I) {
        if (I.length === 0)
            return null;
        var $ = I[0]
          , F = I.pop();
        if (F !== $) {
            I[0] = F;
            e: for (var z = 0, U = I.length, B = U >>> 1; z < B; ) {
                var O = 2 * (z + 1) - 1
                  , H = I[O]
                  , V = O + 1
                  , Q = I[V];
                if (0 > s(H, F))
                    V < U && 0 > s(Q, H) ? (I[z] = Q,
                    I[V] = F,
                    z = V) : (I[z] = H,
                    I[O] = F,
                    z = O);
                else if (V < U && 0 > s(Q, F))
                    I[z] = Q,
                    I[V] = F,
                    z = V;
                else
                    break e
            }
        }
        return $
    }
    function s(I, $) {
        var F = I.sortIndex - $.sortIndex;
        return F !== 0 ? F : I.id - $.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var a = Date
          , i = a.now();
        e.unstable_now = function() {
            return a.now() - i
        }
    }
    var c = []
      , u = []
      , d = 1
      , f = null
      , m = 3
      , y = !1
      , g = !1
      , p = !1
      , k = typeof setTimeout == "function" ? setTimeout : null
      , v = typeof clearTimeout == "function" ? clearTimeout : null
      , x = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function w(I) {
        for (var $ = n(u); $ !== null; ) {
            if ($.callback === null)
                r(u);
            else if ($.startTime <= I)
                r(u),
                $.sortIndex = $.expirationTime,
                t(c, $);
            else
                break;
            $ = n(u)
        }
    }
    function b(I) {
        if (p = !1,
        w(I),
        !g)
            if (n(c) !== null)
                g = !0,
                E(M);
            else {
                var $ = n(u);
                $ !== null && A(b, $.startTime - I)
            }
    }
    function M(I, $) {
        g = !1,
        p && (p = !1,
        v(S),
        S = -1),
        y = !0;
        var F = m;
        try {
            for (w($),
            f = n(c); f !== null && (!(f.expirationTime > $) || I && !T()); ) {
                var z = f.callback;
                if (typeof z == "function") {
                    f.callback = null,
                    m = f.priorityLevel;
                    var U = z(f.expirationTime <= $);
                    $ = e.unstable_now(),
                    typeof U == "function" ? f.callback = U : f === n(c) && r(c),
                    w($)
                } else
                    r(c);
                f = n(c)
            }
            if (f !== null)
                var B = !0;
            else {
                var O = n(u);
                O !== null && A(b, O.startTime - $),
                B = !1
            }
            return B
        } finally {
            f = null,
            m = F,
            y = !1
        }
    }
    var N = !1
      , j = null
      , S = -1
      , R = 5
      , C = -1;
    function T() {
        return !(e.unstable_now() - C < R)
    }
    function _() {
        if (j !== null) {
            var I = e.unstable_now();
            C = I;
            var $ = !0;
            try {
                $ = j(!0, I)
            } finally {
                $ ? P() : (N = !1,
                j = null)
            }
        } else
            N = !1
    }
    var P;
    if (typeof x == "function")
        P = function() {
            x(_)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var L = new MessageChannel
          , D = L.port2;
        L.port1.onmessage = _,
        P = function() {
            D.postMessage(null)
        }
    } else
        P = function() {
            k(_, 0)
        }
        ;
    function E(I) {
        j = I,
        N || (N = !0,
        P())
    }
    function A(I, $) {
        S = k(function() {
            I(e.unstable_now())
        }, $)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(I) {
        I.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        g || y || (g = !0,
        E(M))
    }
    ,
    e.unstable_forceFrameRate = function(I) {
        0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < I ? Math.floor(1e3 / I) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(c)
    }
    ,
    e.unstable_next = function(I) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var $ = 3;
            break;
        default:
            $ = m
        }
        var F = m;
        m = $;
        try {
            return I()
        } finally {
            m = F
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(I, $) {
        switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            I = 3
        }
        var F = m;
        m = I;
        try {
            return $()
        } finally {
            m = F
        }
    }
    ,
    e.unstable_scheduleCallback = function(I, $, F) {
        var z = e.unstable_now();
        switch (typeof F == "object" && F !== null ? (F = F.delay,
        F = typeof F == "number" && 0 < F ? z + F : z) : F = z,
        I) {
        case 1:
            var U = -1;
            break;
        case 2:
            U = 250;
            break;
        case 5:
            U = 1073741823;
            break;
        case 4:
            U = 1e4;
            break;
        default:
            U = 5e3
        }
        return U = F + U,
        I = {
            id: d++,
            callback: $,
            priorityLevel: I,
            startTime: F,
            expirationTime: U,
            sortIndex: -1
        },
        F > z ? (I.sortIndex = F,
        t(u, I),
        n(c) === null && I === n(u) && (p ? (v(S),
        S = -1) : p = !0,
        A(b, F - z))) : (I.sortIndex = U,
        t(c, I),
        g || y || (g = !0,
        E(M))),
        I
    }
    ,
    e.unstable_shouldYield = T,
    e.unstable_wrapCallback = function(I) {
        var $ = m;
        return function() {
            var F = m;
            m = $;
            try {
                return I.apply(this, arguments)
            } finally {
                m = F
            }
        }
    }
}
)(Rm);
Tm.exports = Rm;
var $g = Tm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pg = h
  , at = $g;
function G(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Am = new Set
  , Cs = {};
function Gn(e, t) {
    Rr(e, t),
    Rr(e + "Capture", t)
}
function Rr(e, t) {
    for (Cs[e] = t,
    e = 0; e < t.length; e++)
        Am.add(t[e])
}
var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , mi = Object.prototype.hasOwnProperty
  , Og = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Xu = {}
  , Qu = {};
function Dg(e) {
    return mi.call(Qu, e) ? !0 : mi.call(Xu, e) ? !1 : Og.test(e) ? Qu[e] = !0 : (Xu[e] = !0,
    !1)
}
function Ig(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function _g(e, t, n, r) {
    if (t === null || typeof t > "u" || Ig(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Xe(e, t, n, r, s, o, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = s,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = a
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ze[e] = new Xe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ze[t] = new Xe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ze[e] = new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ze[e] = new Xe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ze[e] = new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ze[e] = new Xe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ze[e] = new Xe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ze[e] = new Xe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ze[e] = new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Hc = /[\-:]([a-z])/g;
function Wc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Hc, Wc);
    ze[t] = new Xe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Hc, Wc);
    ze[t] = new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Hc, Wc);
    ze[t] = new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ze[e] = new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ze.xlinkHref = new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ze[e] = new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Uc(e, t, n, r) {
    var s = ze.hasOwnProperty(t) ? ze[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_g(t, n, s, r) && (n = null),
    r || s === null ? Dg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName,
    r = s.attributeNamespace,
    n === null ? e.removeAttribute(t) : (s = s.type,
    n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Jt = Pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ao = Symbol.for("react.element")
  , nr = Symbol.for("react.portal")
  , rr = Symbol.for("react.fragment")
  , Bc = Symbol.for("react.strict_mode")
  , pi = Symbol.for("react.profiler")
  , Cm = Symbol.for("react.provider")
  , Lm = Symbol.for("react.context")
  , Vc = Symbol.for("react.forward_ref")
  , xi = Symbol.for("react.suspense")
  , gi = Symbol.for("react.suspense_list")
  , Yc = Symbol.for("react.memo")
  , rn = Symbol.for("react.lazy")
  , $m = Symbol.for("react.offscreen")
  , Zu = Symbol.iterator;
function Fr(e) {
    return e === null || typeof e != "object" ? null : (e = Zu && e[Zu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var je = Object.assign, ga;
function rs(e) {
    if (ga === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ga = t && t[1] || ""
        }
    return `
` + ga + e
}
var ya = !1;
function va(e, t) {
    if (!e || ya)
        return "";
    ya = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), o = r.stack.split(`
`), a = s.length - 1, i = o.length - 1; 1 <= a && 0 <= i && s[a] !== o[i]; )
                i--;
            for (; 1 <= a && 0 <= i; a--,
            i--)
                if (s[a] !== o[i]) {
                    if (a !== 1 || i !== 1)
                        do
                            if (a--,
                            i--,
                            0 > i || s[a] !== o[i]) {
                                var c = `
` + s[a].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)),
                                c
                            }
                        while (1 <= a && 0 <= i);
                    break
                }
        }
    } finally {
        ya = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? rs(e) : ""
}
function zg(e) {
    switch (e.tag) {
    case 5:
        return rs(e.type);
    case 16:
        return rs("Lazy");
    case 13:
        return rs("Suspense");
    case 19:
        return rs("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = va(e.type, !1),
        e;
    case 11:
        return e = va(e.type.render, !1),
        e;
    case 1:
        return e = va(e.type, !0),
        e;
    default:
        return ""
    }
}
function yi(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case rr:
        return "Fragment";
    case nr:
        return "Portal";
    case pi:
        return "Profiler";
    case Bc:
        return "StrictMode";
    case xi:
        return "Suspense";
    case gi:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Lm:
            return (e.displayName || "Context") + ".Consumer";
        case Cm:
            return (e._context.displayName || "Context") + ".Provider";
        case Vc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Yc:
            return t = e.displayName || null,
            t !== null ? t : yi(e.type) || "Memo";
        case rn:
            t = e._payload,
            e = e._init;
            try {
                return yi(e(t))
            } catch {}
        }
    return null
}
function Fg(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return yi(t);
    case 8:
        return t === Bc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function kn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Pm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Hg(e) {
    var t = Pm(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(a) {
                r = "" + a,
                o.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function io(e) {
    e._valueTracker || (e._valueTracker = Hg(e))
}
function Om(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Pm(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function al(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function vi(e, t) {
    var n = t.checked;
    return je({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ju(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = kn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Dm(e, t) {
    t = t.checked,
    t != null && Uc(e, "checked", t, !1)
}
function wi(e, t) {
    Dm(e, t);
    var n = kn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ki(e, t.type, n) : t.hasOwnProperty("defaultValue") && ki(e, t.type, kn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ed(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ki(e, t, n) {
    (t !== "number" || al(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ss = Array.isArray;
function wr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var s = 0; s < n.length; s++)
            t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++)
            s = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== s && (e[n].selected = s),
            s && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + kn(n),
        t = null,
        s = 0; s < e.length; s++) {
            if (e[s].value === n) {
                e[s].selected = !0,
                r && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}
function ji(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(G(91));
    return je({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function td(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(G(92));
            if (ss(n)) {
                if (1 < n.length)
                    throw Error(G(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: kn(n)
    }
}
function Im(e, t) {
    var n = kn(t.value)
      , r = kn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function nd(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function _m(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function bi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? _m(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var co, zm = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, s)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (co = co || document.createElement("div"),
        co.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = co.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ls(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ys = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Wg = ["Webkit", "ms", "Moz", "O"];
Object.keys(ys).forEach(function(e) {
    Wg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ys[t] = ys[e]
    })
});
function Fm(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ys.hasOwnProperty(e) && ys[e] ? ("" + t).trim() : t + "px"
}
function Hm(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , s = Fm(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, s) : e[n] = s
        }
}
var Ug = je({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Si(e, t) {
    if (t) {
        if (Ug[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(G(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(G(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(G(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(G(62))
    }
}
function Ni(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Mi = null;
function Gc(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ei = null
  , kr = null
  , jr = null;
function rd(e) {
    if (e = to(e)) {
        if (typeof Ei != "function")
            throw Error(G(280));
        var t = e.stateNode;
        t && (t = Zl(t),
        Ei(e.stateNode, e.type, t))
    }
}
function Wm(e) {
    kr ? jr ? jr.push(e) : jr = [e] : kr = e
}
function Um() {
    if (kr) {
        var e = kr
          , t = jr;
        if (jr = kr = null,
        rd(e),
        t)
            for (e = 0; e < t.length; e++)
                rd(t[e])
    }
}
function Bm(e, t) {
    return e(t)
}
function Vm() {}
var wa = !1;
function Ym(e, t, n) {
    if (wa)
        return e(t, n);
    wa = !0;
    try {
        return Bm(e, t, n)
    } finally {
        wa = !1,
        (kr !== null || jr !== null) && (Vm(),
        Um())
    }
}
function $s(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Zl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(G(231, t, typeof n));
    return n
}
var Ti = !1;
if (qt)
    try {
        var Hr = {};
        Object.defineProperty(Hr, "passive", {
            get: function() {
                Ti = !0
            }
        }),
        window.addEventListener("test", Hr, Hr),
        window.removeEventListener("test", Hr, Hr)
    } catch {
        Ti = !1
    }
function Bg(e, t, n, r, s, o, a, i, c) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var vs = !1
  , il = null
  , cl = !1
  , Ri = null
  , Vg = {
    onError: function(e) {
        vs = !0,
        il = e
    }
};
function Yg(e, t, n, r, s, o, a, i, c) {
    vs = !1,
    il = null,
    Bg.apply(Vg, arguments)
}
function Gg(e, t, n, r, s, o, a, i, c) {
    if (Yg.apply(this, arguments),
    vs) {
        if (vs) {
            var u = il;
            vs = !1,
            il = null
        } else
            throw Error(G(198));
        cl || (cl = !0,
        Ri = u)
    }
}
function Kn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Gm(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function sd(e) {
    if (Kn(e) !== e)
        throw Error(G(188))
}
function Kg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Kn(e),
        t === null)
            throw Error(G(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var s = n.return;
        if (s === null)
            break;
        var o = s.alternate;
        if (o === null) {
            if (r = s.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (s.child === o.child) {
            for (o = s.child; o; ) {
                if (o === n)
                    return sd(s),
                    e;
                if (o === r)
                    return sd(s),
                    t;
                o = o.sibling
            }
            throw Error(G(188))
        }
        if (n.return !== r.return)
            n = s,
            r = o;
        else {
            for (var a = !1, i = s.child; i; ) {
                if (i === n) {
                    a = !0,
                    n = s,
                    r = o;
                    break
                }
                if (i === r) {
                    a = !0,
                    r = s,
                    n = o;
                    break
                }
                i = i.sibling
            }
            if (!a) {
                for (i = o.child; i; ) {
                    if (i === n) {
                        a = !0,
                        n = o,
                        r = s;
                        break
                    }
                    if (i === r) {
                        a = !0,
                        r = o,
                        n = s;
                        break
                    }
                    i = i.sibling
                }
                if (!a)
                    throw Error(G(189))
            }
        }
        if (n.alternate !== r)
            throw Error(G(190))
    }
    if (n.tag !== 3)
        throw Error(G(188));
    return n.stateNode.current === n ? e : t
}
function Km(e) {
    return e = Kg(e),
    e !== null ? qm(e) : null
}
function qm(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = qm(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Xm = at.unstable_scheduleCallback
  , od = at.unstable_cancelCallback
  , qg = at.unstable_shouldYield
  , Xg = at.unstable_requestPaint
  , Re = at.unstable_now
  , Qg = at.unstable_getCurrentPriorityLevel
  , Kc = at.unstable_ImmediatePriority
  , Qm = at.unstable_UserBlockingPriority
  , ul = at.unstable_NormalPriority
  , Zg = at.unstable_LowPriority
  , Zm = at.unstable_IdlePriority
  , Kl = null
  , Ft = null;
function Jg(e) {
    if (Ft && typeof Ft.onCommitFiberRoot == "function")
        try {
            Ft.onCommitFiberRoot(Kl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Nt = Math.clz32 ? Math.clz32 : n1
  , e1 = Math.log
  , t1 = Math.LN2;
function n1(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (e1(e) / t1 | 0) | 0
}
var uo = 64
  , fo = 4194304;
function os(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
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
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function dl(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , s = e.suspendedLanes
      , o = e.pingedLanes
      , a = n & 268435455;
    if (a !== 0) {
        var i = a & ~s;
        i !== 0 ? r = os(i) : (o &= a,
        o !== 0 && (r = os(o)))
    } else
        a = n & ~s,
        a !== 0 ? r = os(a) : o !== 0 && (r = os(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & s) && (s = r & -r,
    o = t & -t,
    s >= o || s === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Nt(t),
            s = 1 << n,
            r |= e[n],
            t &= ~s;
    return r
}
function r1(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function s1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var a = 31 - Nt(o)
          , i = 1 << a
          , c = s[a];
        c === -1 ? (!(i & n) || i & r) && (s[a] = r1(i, t)) : c <= t && (e.expiredLanes |= i),
        o &= ~i
    }
}
function Ai(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Jm() {
    var e = uo;
    return uo <<= 1,
    !(uo & 4194240) && (uo = 64),
    e
}
function ka(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Js(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Nt(t),
    e[t] = n
}
function o1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var s = 31 - Nt(n)
          , o = 1 << s;
        t[s] = 0,
        r[s] = -1,
        e[s] = -1,
        n &= ~o
    }
}
function qc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Nt(n)
          , s = 1 << r;
        s & t | e[r] & t && (e[r] |= t),
        n &= ~s
    }
}
var me = 0;
function ep(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var tp, Xc, np, rp, sp, Ci = !1, ho = [], hn = null, mn = null, pn = null, Ps = new Map, Os = new Map, ln = [], l1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ld(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        hn = null;
        break;
    case "dragenter":
    case "dragleave":
        mn = null;
        break;
    case "mouseover":
    case "mouseout":
        pn = null;
        break;
    case "pointerover":
    case "pointerout":
        Ps.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Os.delete(t.pointerId)
    }
}
function Wr(e, t, n, r, s, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s]
    },
    t !== null && (t = to(t),
    t !== null && Xc(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    s !== null && t.indexOf(s) === -1 && t.push(s),
    e)
}
function a1(e, t, n, r, s) {
    switch (t) {
    case "focusin":
        return hn = Wr(hn, e, t, n, r, s),
        !0;
    case "dragenter":
        return mn = Wr(mn, e, t, n, r, s),
        !0;
    case "mouseover":
        return pn = Wr(pn, e, t, n, r, s),
        !0;
    case "pointerover":
        var o = s.pointerId;
        return Ps.set(o, Wr(Ps.get(o) || null, e, t, n, r, s)),
        !0;
    case "gotpointercapture":
        return o = s.pointerId,
        Os.set(o, Wr(Os.get(o) || null, e, t, n, r, s)),
        !0
    }
    return !1
}
function op(e) {
    var t = Pn(e.target);
    if (t !== null) {
        var n = Kn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Gm(n),
                t !== null) {
                    e.blockedOn = t,
                    sp(e.priority, function() {
                        np(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Vo(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Mi = r,
            n.target.dispatchEvent(r),
            Mi = null
        } else
            return t = to(n),
            t !== null && Xc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function ad(e, t, n) {
    Vo(e) && n.delete(t)
}
function i1() {
    Ci = !1,
    hn !== null && Vo(hn) && (hn = null),
    mn !== null && Vo(mn) && (mn = null),
    pn !== null && Vo(pn) && (pn = null),
    Ps.forEach(ad),
    Os.forEach(ad)
}
function Ur(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ci || (Ci = !0,
    at.unstable_scheduleCallback(at.unstable_NormalPriority, i1)))
}
function Ds(e) {
    function t(s) {
        return Ur(s, e)
    }
    if (0 < ho.length) {
        Ur(ho[0], e);
        for (var n = 1; n < ho.length; n++) {
            var r = ho[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (hn !== null && Ur(hn, e),
    mn !== null && Ur(mn, e),
    pn !== null && Ur(pn, e),
    Ps.forEach(t),
    Os.forEach(t),
    n = 0; n < ln.length; n++)
        r = ln[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ln.length && (n = ln[0],
    n.blockedOn === null); )
        op(n),
        n.blockedOn === null && ln.shift()
}
var br = Jt.ReactCurrentBatchConfig
  , fl = !0;
function c1(e, t, n, r) {
    var s = me
      , o = br.transition;
    br.transition = null;
    try {
        me = 1,
        Qc(e, t, n, r)
    } finally {
        me = s,
        br.transition = o
    }
}
function u1(e, t, n, r) {
    var s = me
      , o = br.transition;
    br.transition = null;
    try {
        me = 4,
        Qc(e, t, n, r)
    } finally {
        me = s,
        br.transition = o
    }
}
function Qc(e, t, n, r) {
    if (fl) {
        var s = Li(e, t, n, r);
        if (s === null)
            Ca(e, t, r, hl, n),
            ld(e, r);
        else if (a1(s, e, t, n, r))
            r.stopPropagation();
        else if (ld(e, r),
        t & 4 && -1 < l1.indexOf(e)) {
            for (; s !== null; ) {
                var o = to(s);
                if (o !== null && tp(o),
                o = Li(e, t, n, r),
                o === null && Ca(e, t, r, hl, n),
                o === s)
                    break;
                s = o
            }
            s !== null && r.stopPropagation()
        } else
            Ca(e, t, r, null, n)
    }
}
var hl = null;
function Li(e, t, n, r) {
    if (hl = null,
    e = Gc(r),
    e = Pn(e),
    e !== null)
        if (t = Kn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Gm(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return hl = e,
    null
}
function lp(e) {
    switch (e) {
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
    case "resize":
    case "seeked":
    case "submit":
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
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
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
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Qg()) {
        case Kc:
            return 1;
        case Qm:
            return 4;
        case ul:
        case Zg:
            return 16;
        case Zm:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var dn = null
  , Zc = null
  , Yo = null;
function ap() {
    if (Yo)
        return Yo;
    var e, t = Zc, n = t.length, r, s = "value"in dn ? dn.value : dn.textContent, o = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++)
        ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === s[o - r]; r++)
        ;
    return Yo = s.slice(e, 1 < r ? 1 - r : void 0)
}
function Go(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function mo() {
    return !0
}
function id() {
    return !1
}
function ct(e) {
    function t(n, r, s, o, a) {
        this._reactName = n,
        this._targetInst = s,
        this.type = r,
        this.nativeEvent = o,
        this.target = a,
        this.currentTarget = null;
        for (var i in e)
            e.hasOwnProperty(i) && (n = e[i],
            this[i] = n ? n(o) : o[i]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? mo : id,
        this.isPropagationStopped = id,
        this
    }
    return je(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = mo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = mo)
        },
        persist: function() {},
        isPersistent: mo
    }),
    t
}
var _r = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Jc = ct(_r), eo = je({}, _r, {
    view: 0,
    detail: 0
}), d1 = ct(eo), ja, ba, Br, ql = je({}, eo, {
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
    getModifierState: eu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Br && (Br && e.type === "mousemove" ? (ja = e.screenX - Br.screenX,
        ba = e.screenY - Br.screenY) : ba = ja = 0,
        Br = e),
        ja)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ba
    }
}), cd = ct(ql), f1 = je({}, ql, {
    dataTransfer: 0
}), h1 = ct(f1), m1 = je({}, eo, {
    relatedTarget: 0
}), Sa = ct(m1), p1 = je({}, _r, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), x1 = ct(p1), g1 = je({}, _r, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), y1 = ct(g1), v1 = je({}, _r, {
    data: 0
}), ud = ct(v1), w1 = {
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
}, k1 = {
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
}, j1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function b1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = j1[e]) ? !!t[e] : !1
}
function eu() {
    return b1
}
var S1 = je({}, eo, {
    key: function(e) {
        if (e.key) {
            var t = w1[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Go(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? k1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: eu,
    charCode: function(e) {
        return e.type === "keypress" ? Go(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Go(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , N1 = ct(S1)
  , M1 = je({}, ql, {
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
})
  , dd = ct(M1)
  , E1 = je({}, eo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: eu
})
  , T1 = ct(E1)
  , R1 = je({}, _r, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , A1 = ct(R1)
  , C1 = je({}, ql, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , L1 = ct(C1)
  , $1 = [9, 13, 27, 32]
  , tu = qt && "CompositionEvent"in window
  , ws = null;
qt && "documentMode"in document && (ws = document.documentMode);
var P1 = qt && "TextEvent"in window && !ws
  , ip = qt && (!tu || ws && 8 < ws && 11 >= ws)
  , fd = " "
  , hd = !1;
function cp(e, t) {
    switch (e) {
    case "keyup":
        return $1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function up(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var sr = !1;
function O1(e, t) {
    switch (e) {
    case "compositionend":
        return up(t);
    case "keypress":
        return t.which !== 32 ? null : (hd = !0,
        fd);
    case "textInput":
        return e = t.data,
        e === fd && hd ? null : e;
    default:
        return null
    }
}
function D1(e, t) {
    if (sr)
        return e === "compositionend" || !tu && cp(e, t) ? (e = ap(),
        Yo = Zc = dn = null,
        sr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return ip && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var I1 = {
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
function md(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!I1[e.type] : t === "textarea"
}
function dp(e, t, n, r) {
    Wm(r),
    t = ml(t, "onChange"),
    0 < t.length && (n = new Jc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var ks = null
  , Is = null;
function _1(e) {
    jp(e, 0)
}
function Xl(e) {
    var t = ar(e);
    if (Om(t))
        return e
}
function z1(e, t) {
    if (e === "change")
        return t
}
var fp = !1;
if (qt) {
    var Na;
    if (qt) {
        var Ma = "oninput"in document;
        if (!Ma) {
            var pd = document.createElement("div");
            pd.setAttribute("oninput", "return;"),
            Ma = typeof pd.oninput == "function"
        }
        Na = Ma
    } else
        Na = !1;
    fp = Na && (!document.documentMode || 9 < document.documentMode)
}
function xd() {
    ks && (ks.detachEvent("onpropertychange", hp),
    Is = ks = null)
}
function hp(e) {
    if (e.propertyName === "value" && Xl(Is)) {
        var t = [];
        dp(t, Is, e, Gc(e)),
        Ym(_1, t)
    }
}
function F1(e, t, n) {
    e === "focusin" ? (xd(),
    ks = t,
    Is = n,
    ks.attachEvent("onpropertychange", hp)) : e === "focusout" && xd()
}
function H1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Xl(Is)
}
function W1(e, t) {
    if (e === "click")
        return Xl(t)
}
function U1(e, t) {
    if (e === "input" || e === "change")
        return Xl(t)
}
function B1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Et = typeof Object.is == "function" ? Object.is : B1;
function _s(e, t) {
    if (Et(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!mi.call(t, s) || !Et(e[s], t[s]))
            return !1
    }
    return !0
}
function gd(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function yd(e, t) {
    var n = gd(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = gd(n)
    }
}
function mp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mp(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function pp() {
    for (var e = window, t = al(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = al(e.document)
    }
    return t
}
function nu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function V1(e) {
    var t = pp()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && mp(n.ownerDocument.documentElement, n)) {
        if (r !== null && nu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var s = n.textContent.length
                  , o = Math.min(r.start, s);
                r = r.end === void 0 ? o : Math.min(r.end, s),
                !e.extend && o > r && (s = r,
                r = o,
                o = s),
                s = yd(n, o);
                var a = yd(n, r);
                s && a && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(s.node, s.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Y1 = qt && "documentMode"in document && 11 >= document.documentMode
  , or = null
  , $i = null
  , js = null
  , Pi = !1;
function vd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Pi || or == null || or !== al(r) || (r = or,
    "selectionStart"in r && nu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    js && _s(js, r) || (js = r,
    r = ml($i, "onSelect"),
    0 < r.length && (t = new Jc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = or)))
}
function po(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var lr = {
    animationend: po("Animation", "AnimationEnd"),
    animationiteration: po("Animation", "AnimationIteration"),
    animationstart: po("Animation", "AnimationStart"),
    transitionend: po("Transition", "TransitionEnd")
}
  , Ea = {}
  , xp = {};
qt && (xp = document.createElement("div").style,
"AnimationEvent"in window || (delete lr.animationend.animation,
delete lr.animationiteration.animation,
delete lr.animationstart.animation),
"TransitionEvent"in window || delete lr.transitionend.transition);
function Ql(e) {
    if (Ea[e])
        return Ea[e];
    if (!lr[e])
        return e;
    var t = lr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in xp)
            return Ea[e] = t[n];
    return e
}
var gp = Ql("animationend")
  , yp = Ql("animationiteration")
  , vp = Ql("animationstart")
  , wp = Ql("transitionend")
  , kp = new Map
  , wd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function bn(e, t) {
    kp.set(e, t),
    Gn(t, [e])
}
for (var Ta = 0; Ta < wd.length; Ta++) {
    var Ra = wd[Ta]
      , G1 = Ra.toLowerCase()
      , K1 = Ra[0].toUpperCase() + Ra.slice(1);
    bn(G1, "on" + K1)
}
bn(gp, "onAnimationEnd");
bn(yp, "onAnimationIteration");
bn(vp, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(wp, "onTransitionEnd");
Rr("onMouseEnter", ["mouseout", "mouseover"]);
Rr("onMouseLeave", ["mouseout", "mouseover"]);
Rr("onPointerEnter", ["pointerout", "pointerover"]);
Rr("onPointerLeave", ["pointerout", "pointerover"]);
Gn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Gn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Gn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Gn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ls = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , q1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));
function kd(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Gg(r, t, void 0, e),
    e.currentTarget = null
}
function jp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , s = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var i = r[a]
                      , c = i.instance
                      , u = i.currentTarget;
                    if (i = i.listener,
                    c !== o && s.isPropagationStopped())
                        break e;
                    kd(s, i, u),
                    o = c
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (i = r[a],
                    c = i.instance,
                    u = i.currentTarget,
                    i = i.listener,
                    c !== o && s.isPropagationStopped())
                        break e;
                    kd(s, i, u),
                    o = c
                }
        }
    }
    if (cl)
        throw e = Ri,
        cl = !1,
        Ri = null,
        e
}
function xe(e, t) {
    var n = t[zi];
    n === void 0 && (n = t[zi] = new Set);
    var r = e + "__bubble";
    n.has(r) || (bp(t, e, 2, !1),
    n.add(r))
}
function Aa(e, t, n) {
    var r = 0;
    t && (r |= 4),
    bp(n, e, r, t)
}
var xo = "_reactListening" + Math.random().toString(36).slice(2);
function zs(e) {
    if (!e[xo]) {
        e[xo] = !0,
        Am.forEach(function(n) {
            n !== "selectionchange" && (q1.has(n) || Aa(n, !1, e),
            Aa(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xo] || (t[xo] = !0,
        Aa("selectionchange", !1, t))
    }
}
function bp(e, t, n, r) {
    switch (lp(t)) {
    case 1:
        var s = c1;
        break;
    case 4:
        s = u1;
        break;
    default:
        s = Qc
    }
    n = s.bind(null, t, n, e),
    s = void 0,
    !Ti || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
    r ? s !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
        passive: s
    }) : e.addEventListener(t, n, !1)
}
function Ca(e, t, n, r, s) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var i = r.stateNode.containerInfo;
                if (i === s || i.nodeType === 8 && i.parentNode === s)
                    break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var c = a.tag;
                        if ((c === 3 || c === 4) && (c = a.stateNode.containerInfo,
                        c === s || c.nodeType === 8 && c.parentNode === s))
                            return;
                        a = a.return
                    }
                for (; i !== null; ) {
                    if (a = Pn(i),
                    a === null)
                        return;
                    if (c = a.tag,
                    c === 5 || c === 6) {
                        r = o = a;
                        continue e
                    }
                    i = i.parentNode
                }
            }
            r = r.return
        }
    Ym(function() {
        var u = o
          , d = Gc(n)
          , f = [];
        e: {
            var m = kp.get(e);
            if (m !== void 0) {
                var y = Jc
                  , g = e;
                switch (e) {
                case "keypress":
                    if (Go(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = N1;
                    break;
                case "focusin":
                    g = "focus",
                    y = Sa;
                    break;
                case "focusout":
                    g = "blur",
                    y = Sa;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = Sa;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = cd;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = h1;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = T1;
                    break;
                case gp:
                case yp:
                case vp:
                    y = x1;
                    break;
                case wp:
                    y = A1;
                    break;
                case "scroll":
                    y = d1;
                    break;
                case "wheel":
                    y = L1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = y1;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = dd
                }
                var p = (t & 4) !== 0
                  , k = !p && e === "scroll"
                  , v = p ? m !== null ? m + "Capture" : null : m;
                p = [];
                for (var x = u, w; x !== null; ) {
                    w = x;
                    var b = w.stateNode;
                    if (w.tag === 5 && b !== null && (w = b,
                    v !== null && (b = $s(x, v),
                    b != null && p.push(Fs(x, b, w)))),
                    k)
                        break;
                    x = x.return
                }
                0 < p.length && (m = new y(m,g,null,n,d),
                f.push({
                    event: m,
                    listeners: p
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                m && n !== Mi && (g = n.relatedTarget || n.fromElement) && (Pn(g) || g[Xt]))
                    break e;
                if ((y || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window,
                y ? (g = n.relatedTarget || n.toElement,
                y = u,
                g = g ? Pn(g) : null,
                g !== null && (k = Kn(g),
                g !== k || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null,
                g = u),
                y !== g)) {
                    if (p = cd,
                    b = "onMouseLeave",
                    v = "onMouseEnter",
                    x = "mouse",
                    (e === "pointerout" || e === "pointerover") && (p = dd,
                    b = "onPointerLeave",
                    v = "onPointerEnter",
                    x = "pointer"),
                    k = y == null ? m : ar(y),
                    w = g == null ? m : ar(g),
                    m = new p(b,x + "leave",y,n,d),
                    m.target = k,
                    m.relatedTarget = w,
                    b = null,
                    Pn(d) === u && (p = new p(v,x + "enter",g,n,d),
                    p.target = w,
                    p.relatedTarget = k,
                    b = p),
                    k = b,
                    y && g)
                        t: {
                            for (p = y,
                            v = g,
                            x = 0,
                            w = p; w; w = Xn(w))
                                x++;
                            for (w = 0,
                            b = v; b; b = Xn(b))
                                w++;
                            for (; 0 < x - w; )
                                p = Xn(p),
                                x--;
                            for (; 0 < w - x; )
                                v = Xn(v),
                                w--;
                            for (; x--; ) {
                                if (p === v || v !== null && p === v.alternate)
                                    break t;
                                p = Xn(p),
                                v = Xn(v)
                            }
                            p = null
                        }
                    else
                        p = null;
                    y !== null && jd(f, m, y, p, !1),
                    g !== null && k !== null && jd(f, k, g, p, !0)
                }
            }
            e: {
                if (m = u ? ar(u) : window,
                y = m.nodeName && m.nodeName.toLowerCase(),
                y === "select" || y === "input" && m.type === "file")
                    var M = z1;
                else if (md(m))
                    if (fp)
                        M = U1;
                    else {
                        M = H1;
                        var N = F1
                    }
                else
                    (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (M = W1);
                if (M && (M = M(e, u))) {
                    dp(f, M, n, d);
                    break e
                }
                N && N(e, m, u),
                e === "focusout" && (N = m._wrapperState) && N.controlled && m.type === "number" && ki(m, "number", m.value)
            }
            switch (N = u ? ar(u) : window,
            e) {
            case "focusin":
                (md(N) || N.contentEditable === "true") && (or = N,
                $i = u,
                js = null);
                break;
            case "focusout":
                js = $i = or = null;
                break;
            case "mousedown":
                Pi = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Pi = !1,
                vd(f, n, d);
                break;
            case "selectionchange":
                if (Y1)
                    break;
            case "keydown":
            case "keyup":
                vd(f, n, d)
            }
            var j;
            if (tu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var S = "onCompositionStart";
                        break e;
                    case "compositionend":
                        S = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        S = "onCompositionUpdate";
                        break e
                    }
                    S = void 0
                }
            else
                sr ? cp(e, n) && (S = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
            S && (ip && n.locale !== "ko" && (sr || S !== "onCompositionStart" ? S === "onCompositionEnd" && sr && (j = ap()) : (dn = d,
            Zc = "value"in dn ? dn.value : dn.textContent,
            sr = !0)),
            N = ml(u, S),
            0 < N.length && (S = new ud(S,e,null,n,d),
            f.push({
                event: S,
                listeners: N
            }),
            j ? S.data = j : (j = up(n),
            j !== null && (S.data = j)))),
            (j = P1 ? O1(e, n) : D1(e, n)) && (u = ml(u, "onBeforeInput"),
            0 < u.length && (d = new ud("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: u
            }),
            d.data = j))
        }
        jp(f, t)
    })
}
function Fs(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ml(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var s = e
          , o = s.stateNode;
        s.tag === 5 && o !== null && (s = o,
        o = $s(e, n),
        o != null && r.unshift(Fs(e, o, s)),
        o = $s(e, t),
        o != null && r.push(Fs(e, o, s))),
        e = e.return
    }
    return r
}
function Xn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function jd(e, t, n, r, s) {
    for (var o = t._reactName, a = []; n !== null && n !== r; ) {
        var i = n
          , c = i.alternate
          , u = i.stateNode;
        if (c !== null && c === r)
            break;
        i.tag === 5 && u !== null && (i = u,
        s ? (c = $s(n, o),
        c != null && a.unshift(Fs(n, c, i))) : s || (c = $s(n, o),
        c != null && a.push(Fs(n, c, i)))),
        n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var X1 = /\r\n?/g
  , Q1 = /\u0000|\uFFFD/g;
function bd(e) {
    return (typeof e == "string" ? e : "" + e).replace(X1, `
`).replace(Q1, "")
}
function go(e, t, n) {
    if (t = bd(t),
    bd(e) !== t && n)
        throw Error(G(425))
}
function pl() {}
var Oi = null
  , Di = null;
function Ii(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var _i = typeof setTimeout == "function" ? setTimeout : void 0
  , Z1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Sd = typeof Promise == "function" ? Promise : void 0
  , J1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sd < "u" ? function(e) {
    return Sd.resolve(null).then(e).catch(ey)
}
: _i;
function ey(e) {
    setTimeout(function() {
        throw e
    })
}
function La(e, t) {
    var n = t
      , r = 0;
    do {
        var s = n.nextSibling;
        if (e.removeChild(n),
        s && s.nodeType === 8)
            if (n = s.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(s),
                    Ds(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    Ds(t)
}
function xn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Nd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var zr = Math.random().toString(36).slice(2)
  , _t = "__reactFiber$" + zr
  , Hs = "__reactProps$" + zr
  , Xt = "__reactContainer$" + zr
  , zi = "__reactEvents$" + zr
  , ty = "__reactListeners$" + zr
  , ny = "__reactHandles$" + zr;
function Pn(e) {
    var t = e[_t];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Xt] || n[_t]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Nd(e); e !== null; ) {
                    if (n = e[_t])
                        return n;
                    e = Nd(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function to(e) {
    return e = e[_t] || e[Xt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function ar(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(G(33))
}
function Zl(e) {
    return e[Hs] || null
}
var Fi = []
  , ir = -1;
function Sn(e) {
    return {
        current: e
    }
}
function ge(e) {
    0 > ir || (e.current = Fi[ir],
    Fi[ir] = null,
    ir--)
}
function pe(e, t) {
    ir++,
    Fi[ir] = e.current,
    e.current = t
}
var jn = {}
  , Be = Sn(jn)
  , Je = Sn(!1)
  , Hn = jn;
function Ar(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return jn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, o;
    for (o in n)
        s[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function et(e) {
    return e = e.childContextTypes,
    e != null
}
function xl() {
    ge(Je),
    ge(Be)
}
function Md(e, t, n) {
    if (Be.current !== jn)
        throw Error(G(168));
    pe(Be, t),
    pe(Je, n)
}
function Sp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var s in r)
        if (!(s in t))
            throw Error(G(108, Fg(e) || "Unknown", s));
    return je({}, n, r)
}
function gl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jn,
    Hn = Be.current,
    pe(Be, e),
    pe(Je, Je.current),
    !0
}
function Ed(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(G(169));
    n ? (e = Sp(e, t, Hn),
    r.__reactInternalMemoizedMergedChildContext = e,
    ge(Je),
    ge(Be),
    pe(Be, e)) : ge(Je),
    pe(Je, n)
}
var Ut = null
  , Jl = !1
  , $a = !1;
function Np(e) {
    Ut === null ? Ut = [e] : Ut.push(e)
}
function ry(e) {
    Jl = !0,
    Np(e)
}
function Nn() {
    if (!$a && Ut !== null) {
        $a = !0;
        var e = 0
          , t = me;
        try {
            var n = Ut;
            for (me = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ut = null,
            Jl = !1
        } catch (s) {
            throw Ut !== null && (Ut = Ut.slice(e + 1)),
            Xm(Kc, Nn),
            s
        } finally {
            me = t,
            $a = !1
        }
    }
    return null
}
var cr = []
  , ur = 0
  , yl = null
  , vl = 0
  , ft = []
  , ht = 0
  , Wn = null
  , Vt = 1
  , Yt = "";
function Cn(e, t) {
    cr[ur++] = vl,
    cr[ur++] = yl,
    yl = e,
    vl = t
}
function Mp(e, t, n) {
    ft[ht++] = Vt,
    ft[ht++] = Yt,
    ft[ht++] = Wn,
    Wn = e;
    var r = Vt;
    e = Yt;
    var s = 32 - Nt(r) - 1;
    r &= ~(1 << s),
    n += 1;
    var o = 32 - Nt(t) + s;
    if (30 < o) {
        var a = s - s % 5;
        o = (r & (1 << a) - 1).toString(32),
        r >>= a,
        s -= a,
        Vt = 1 << 32 - Nt(t) + s | n << s | r,
        Yt = o + e
    } else
        Vt = 1 << o | n << s | r,
        Yt = e
}
function ru(e) {
    e.return !== null && (Cn(e, 1),
    Mp(e, 1, 0))
}
function su(e) {
    for (; e === yl; )
        yl = cr[--ur],
        cr[ur] = null,
        vl = cr[--ur],
        cr[ur] = null;
    for (; e === Wn; )
        Wn = ft[--ht],
        ft[ht] = null,
        Yt = ft[--ht],
        ft[ht] = null,
        Vt = ft[--ht],
        ft[ht] = null
}
var lt = null
  , ot = null
  , ve = !1
  , jt = null;
function Ep(e, t) {
    var n = mt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Td(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        lt = e,
        ot = xn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        lt = e,
        ot = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Wn !== null ? {
            id: Vt,
            overflow: Yt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = mt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        lt = e,
        ot = null,
        !0) : !1;
    default:
        return !1
    }
}
function Hi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Wi(e) {
    if (ve) {
        var t = ot;
        if (t) {
            var n = t;
            if (!Td(e, t)) {
                if (Hi(e))
                    throw Error(G(418));
                t = xn(n.nextSibling);
                var r = lt;
                t && Td(e, t) ? Ep(r, n) : (e.flags = e.flags & -4097 | 2,
                ve = !1,
                lt = e)
            }
        } else {
            if (Hi(e))
                throw Error(G(418));
            e.flags = e.flags & -4097 | 2,
            ve = !1,
            lt = e
        }
    }
}
function Rd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    lt = e
}
function yo(e) {
    if (e !== lt)
        return !1;
    if (!ve)
        return Rd(e),
        ve = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Ii(e.type, e.memoizedProps)),
    t && (t = ot)) {
        if (Hi(e))
            throw Tp(),
            Error(G(418));
        for (; t; )
            Ep(e, t),
            t = xn(t.nextSibling)
    }
    if (Rd(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(G(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ot = xn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ot = null
        }
    } else
        ot = lt ? xn(e.stateNode.nextSibling) : null;
    return !0
}
function Tp() {
    for (var e = ot; e; )
        e = xn(e.nextSibling)
}
function Cr() {
    ot = lt = null,
    ve = !1
}
function ou(e) {
    jt === null ? jt = [e] : jt.push(e)
}
var sy = Jt.ReactCurrentBatchConfig;
function Vr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(G(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(G(147, e));
            var s = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
                var i = s.refs;
                a === null ? delete i[o] : i[o] = a
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(G(284));
        if (!n._owner)
            throw Error(G(290, e))
    }
    return e
}
function vo(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(G(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Ad(e) {
    var t = e._init;
    return t(e._payload)
}
function Rp(e) {
    function t(v, x) {
        if (e) {
            var w = v.deletions;
            w === null ? (v.deletions = [x],
            v.flags |= 16) : w.push(x)
        }
    }
    function n(v, x) {
        if (!e)
            return null;
        for (; x !== null; )
            t(v, x),
            x = x.sibling;
        return null
    }
    function r(v, x) {
        for (v = new Map; x !== null; )
            x.key !== null ? v.set(x.key, x) : v.set(x.index, x),
            x = x.sibling;
        return v
    }
    function s(v, x) {
        return v = wn(v, x),
        v.index = 0,
        v.sibling = null,
        v
    }
    function o(v, x, w) {
        return v.index = w,
        e ? (w = v.alternate,
        w !== null ? (w = w.index,
        w < x ? (v.flags |= 2,
        x) : w) : (v.flags |= 2,
        x)) : (v.flags |= 1048576,
        x)
    }
    function a(v) {
        return e && v.alternate === null && (v.flags |= 2),
        v
    }
    function i(v, x, w, b) {
        return x === null || x.tag !== 6 ? (x = Fa(w, v.mode, b),
        x.return = v,
        x) : (x = s(x, w),
        x.return = v,
        x)
    }
    function c(v, x, w, b) {
        var M = w.type;
        return M === rr ? d(v, x, w.props.children, b, w.key) : x !== null && (x.elementType === M || typeof M == "object" && M !== null && M.$$typeof === rn && Ad(M) === x.type) ? (b = s(x, w.props),
        b.ref = Vr(v, x, w),
        b.return = v,
        b) : (b = el(w.type, w.key, w.props, null, v.mode, b),
        b.ref = Vr(v, x, w),
        b.return = v,
        b)
    }
    function u(v, x, w, b) {
        return x === null || x.tag !== 4 || x.stateNode.containerInfo !== w.containerInfo || x.stateNode.implementation !== w.implementation ? (x = Ha(w, v.mode, b),
        x.return = v,
        x) : (x = s(x, w.children || []),
        x.return = v,
        x)
    }
    function d(v, x, w, b, M) {
        return x === null || x.tag !== 7 ? (x = Fn(w, v.mode, b, M),
        x.return = v,
        x) : (x = s(x, w),
        x.return = v,
        x)
    }
    function f(v, x, w) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return x = Fa("" + x, v.mode, w),
            x.return = v,
            x;
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case ao:
                return w = el(x.type, x.key, x.props, null, v.mode, w),
                w.ref = Vr(v, null, x),
                w.return = v,
                w;
            case nr:
                return x = Ha(x, v.mode, w),
                x.return = v,
                x;
            case rn:
                var b = x._init;
                return f(v, b(x._payload), w)
            }
            if (ss(x) || Fr(x))
                return x = Fn(x, v.mode, w, null),
                x.return = v,
                x;
            vo(v, x)
        }
        return null
    }
    function m(v, x, w, b) {
        var M = x !== null ? x.key : null;
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return M !== null ? null : i(v, x, "" + w, b);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case ao:
                return w.key === M ? c(v, x, w, b) : null;
            case nr:
                return w.key === M ? u(v, x, w, b) : null;
            case rn:
                return M = w._init,
                m(v, x, M(w._payload), b)
            }
            if (ss(w) || Fr(w))
                return M !== null ? null : d(v, x, w, b, null);
            vo(v, w)
        }
        return null
    }
    function y(v, x, w, b, M) {
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return v = v.get(w) || null,
            i(x, v, "" + b, M);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case ao:
                return v = v.get(b.key === null ? w : b.key) || null,
                c(x, v, b, M);
            case nr:
                return v = v.get(b.key === null ? w : b.key) || null,
                u(x, v, b, M);
            case rn:
                var N = b._init;
                return y(v, x, w, N(b._payload), M)
            }
            if (ss(b) || Fr(b))
                return v = v.get(w) || null,
                d(x, v, b, M, null);
            vo(x, b)
        }
        return null
    }
    function g(v, x, w, b) {
        for (var M = null, N = null, j = x, S = x = 0, R = null; j !== null && S < w.length; S++) {
            j.index > S ? (R = j,
            j = null) : R = j.sibling;
            var C = m(v, j, w[S], b);
            if (C === null) {
                j === null && (j = R);
                break
            }
            e && j && C.alternate === null && t(v, j),
            x = o(C, x, S),
            N === null ? M = C : N.sibling = C,
            N = C,
            j = R
        }
        if (S === w.length)
            return n(v, j),
            ve && Cn(v, S),
            M;
        if (j === null) {
            for (; S < w.length; S++)
                j = f(v, w[S], b),
                j !== null && (x = o(j, x, S),
                N === null ? M = j : N.sibling = j,
                N = j);
            return ve && Cn(v, S),
            M
        }
        for (j = r(v, j); S < w.length; S++)
            R = y(j, v, S, w[S], b),
            R !== null && (e && R.alternate !== null && j.delete(R.key === null ? S : R.key),
            x = o(R, x, S),
            N === null ? M = R : N.sibling = R,
            N = R);
        return e && j.forEach(function(T) {
            return t(v, T)
        }),
        ve && Cn(v, S),
        M
    }
    function p(v, x, w, b) {
        var M = Fr(w);
        if (typeof M != "function")
            throw Error(G(150));
        if (w = M.call(w),
        w == null)
            throw Error(G(151));
        for (var N = M = null, j = x, S = x = 0, R = null, C = w.next(); j !== null && !C.done; S++,
        C = w.next()) {
            j.index > S ? (R = j,
            j = null) : R = j.sibling;
            var T = m(v, j, C.value, b);
            if (T === null) {
                j === null && (j = R);
                break
            }
            e && j && T.alternate === null && t(v, j),
            x = o(T, x, S),
            N === null ? M = T : N.sibling = T,
            N = T,
            j = R
        }
        if (C.done)
            return n(v, j),
            ve && Cn(v, S),
            M;
        if (j === null) {
            for (; !C.done; S++,
            C = w.next())
                C = f(v, C.value, b),
                C !== null && (x = o(C, x, S),
                N === null ? M = C : N.sibling = C,
                N = C);
            return ve && Cn(v, S),
            M
        }
        for (j = r(v, j); !C.done; S++,
        C = w.next())
            C = y(j, v, S, C.value, b),
            C !== null && (e && C.alternate !== null && j.delete(C.key === null ? S : C.key),
            x = o(C, x, S),
            N === null ? M = C : N.sibling = C,
            N = C);
        return e && j.forEach(function(_) {
            return t(v, _)
        }),
        ve && Cn(v, S),
        M
    }
    function k(v, x, w, b) {
        if (typeof w == "object" && w !== null && w.type === rr && w.key === null && (w = w.props.children),
        typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case ao:
                e: {
                    for (var M = w.key, N = x; N !== null; ) {
                        if (N.key === M) {
                            if (M = w.type,
                            M === rr) {
                                if (N.tag === 7) {
                                    n(v, N.sibling),
                                    x = s(N, w.props.children),
                                    x.return = v,
                                    v = x;
                                    break e
                                }
                            } else if (N.elementType === M || typeof M == "object" && M !== null && M.$$typeof === rn && Ad(M) === N.type) {
                                n(v, N.sibling),
                                x = s(N, w.props),
                                x.ref = Vr(v, N, w),
                                x.return = v,
                                v = x;
                                break e
                            }
                            n(v, N);
                            break
                        } else
                            t(v, N);
                        N = N.sibling
                    }
                    w.type === rr ? (x = Fn(w.props.children, v.mode, b, w.key),
                    x.return = v,
                    v = x) : (b = el(w.type, w.key, w.props, null, v.mode, b),
                    b.ref = Vr(v, x, w),
                    b.return = v,
                    v = b)
                }
                return a(v);
            case nr:
                e: {
                    for (N = w.key; x !== null; ) {
                        if (x.key === N)
                            if (x.tag === 4 && x.stateNode.containerInfo === w.containerInfo && x.stateNode.implementation === w.implementation) {
                                n(v, x.sibling),
                                x = s(x, w.children || []),
                                x.return = v,
                                v = x;
                                break e
                            } else {
                                n(v, x);
                                break
                            }
                        else
                            t(v, x);
                        x = x.sibling
                    }
                    x = Ha(w, v.mode, b),
                    x.return = v,
                    v = x
                }
                return a(v);
            case rn:
                return N = w._init,
                k(v, x, N(w._payload), b)
            }
            if (ss(w))
                return g(v, x, w, b);
            if (Fr(w))
                return p(v, x, w, b);
            vo(v, w)
        }
        return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w,
        x !== null && x.tag === 6 ? (n(v, x.sibling),
        x = s(x, w),
        x.return = v,
        v = x) : (n(v, x),
        x = Fa(w, v.mode, b),
        x.return = v,
        v = x),
        a(v)) : n(v, x)
    }
    return k
}
var Lr = Rp(!0)
  , Ap = Rp(!1)
  , wl = Sn(null)
  , kl = null
  , dr = null
  , lu = null;
function au() {
    lu = dr = kl = null
}
function iu(e) {
    var t = wl.current;
    ge(wl),
    e._currentValue = t
}
function Ui(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Sr(e, t) {
    kl = e,
    lu = dr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0),
    e.firstContext = null)
}
function xt(e) {
    var t = e._currentValue;
    if (lu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        dr === null) {
            if (kl === null)
                throw Error(G(308));
            dr = e,
            kl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            dr = dr.next = e;
    return t
}
var On = null;
function cu(e) {
    On === null ? On = [e] : On.push(e)
}
function Cp(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n,
    cu(t)) : (n.next = s.next,
    s.next = n),
    t.interleaved = n,
    Qt(e, r)
}
function Qt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var sn = !1;
function uu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Lp(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Kt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function gn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    ue & 2) {
        var s = r.pending;
        return s === null ? t.next = t : (t.next = s.next,
        s.next = t),
        r.pending = t,
        Qt(e, n)
    }
    return s = r.interleaved,
    s === null ? (t.next = t,
    cu(r)) : (t.next = s.next,
    s.next = t),
    r.interleaved = t,
    Qt(e, n)
}
function Ko(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        qc(e, n)
    }
}
function Cd(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var s = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? s = o = a : o = o.next = a,
                n = n.next
            } while (n !== null);
            o === null ? s = o = t : o = o.next = t
        } else
            s = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function jl(e, t, n, r) {
    var s = e.updateQueue;
    sn = !1;
    var o = s.firstBaseUpdate
      , a = s.lastBaseUpdate
      , i = s.shared.pending;
    if (i !== null) {
        s.shared.pending = null;
        var c = i
          , u = c.next;
        c.next = null,
        a === null ? o = u : a.next = u,
        a = c;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        i = d.lastBaseUpdate,
        i !== a && (i === null ? d.firstBaseUpdate = u : i.next = u,
        d.lastBaseUpdate = c))
    }
    if (o !== null) {
        var f = s.baseState;
        a = 0,
        d = u = c = null,
        i = o;
        do {
            var m = i.lane
              , y = i.eventTime;
            if ((r & m) === m) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                });
                e: {
                    var g = e
                      , p = i;
                    switch (m = t,
                    y = n,
                    p.tag) {
                    case 1:
                        if (g = p.payload,
                        typeof g == "function") {
                            f = g.call(y, f, m);
                            break e
                        }
                        f = g;
                        break e;
                    case 3:
                        g.flags = g.flags & -65537 | 128;
                    case 0:
                        if (g = p.payload,
                        m = typeof g == "function" ? g.call(y, f, m) : g,
                        m == null)
                            break e;
                        f = je({}, f, m);
                        break e;
                    case 2:
                        sn = !0
                    }
                }
                i.callback !== null && i.lane !== 0 && (e.flags |= 64,
                m = s.effects,
                m === null ? s.effects = [i] : m.push(i))
            } else
                y = {
                    eventTime: y,
                    lane: m,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                },
                d === null ? (u = d = y,
                c = f) : d = d.next = y,
                a |= m;
            if (i = i.next,
            i === null) {
                if (i = s.shared.pending,
                i === null)
                    break;
                m = i,
                i = m.next,
                m.next = null,
                s.lastBaseUpdate = m,
                s.shared.pending = null
            }
        } while (!0);
        if (d === null && (c = f),
        s.baseState = c,
        s.firstBaseUpdate = u,
        s.lastBaseUpdate = d,
        t = s.shared.interleaved,
        t !== null) {
            s = t;
            do
                a |= s.lane,
                s = s.next;
            while (s !== t)
        } else
            o === null && (s.shared.lanes = 0);
        Bn |= a,
        e.lanes = a,
        e.memoizedState = f
    }
}
function Ld(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , s = r.callback;
            if (s !== null) {
                if (r.callback = null,
                r = n,
                typeof s != "function")
                    throw Error(G(191, s));
                s.call(r)
            }
        }
}
var no = {}
  , Ht = Sn(no)
  , Ws = Sn(no)
  , Us = Sn(no);
function Dn(e) {
    if (e === no)
        throw Error(G(174));
    return e
}
function du(e, t) {
    switch (pe(Us, t),
    pe(Ws, e),
    pe(Ht, no),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : bi(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = bi(t, e)
    }
    ge(Ht),
    pe(Ht, t)
}
function $r() {
    ge(Ht),
    ge(Ws),
    ge(Us)
}
function $p(e) {
    Dn(Us.current);
    var t = Dn(Ht.current)
      , n = bi(t, e.type);
    t !== n && (pe(Ws, e),
    pe(Ht, n))
}
function fu(e) {
    Ws.current === e && (ge(Ht),
    ge(Ws))
}
var we = Sn(0);
function bl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Pa = [];
function hu() {
    for (var e = 0; e < Pa.length; e++)
        Pa[e]._workInProgressVersionPrimary = null;
    Pa.length = 0
}
var qo = Jt.ReactCurrentDispatcher
  , Oa = Jt.ReactCurrentBatchConfig
  , Un = 0
  , ke = null
  , Le = null
  , Pe = null
  , Sl = !1
  , bs = !1
  , Bs = 0
  , oy = 0;
function Fe() {
    throw Error(G(321))
}
function mu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Et(e[n], t[n]))
            return !1;
    return !0
}
function pu(e, t, n, r, s, o) {
    if (Un = o,
    ke = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    qo.current = e === null || e.memoizedState === null ? cy : uy,
    e = n(r, s),
    bs) {
        o = 0;
        do {
            if (bs = !1,
            Bs = 0,
            25 <= o)
                throw Error(G(301));
            o += 1,
            Pe = Le = null,
            t.updateQueue = null,
            qo.current = dy,
            e = n(r, s)
        } while (bs)
    }
    if (qo.current = Nl,
    t = Le !== null && Le.next !== null,
    Un = 0,
    Pe = Le = ke = null,
    Sl = !1,
    t)
        throw Error(G(300));
    return e
}
function xu() {
    var e = Bs !== 0;
    return Bs = 0,
    e
}
function Pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Pe === null ? ke.memoizedState = Pe = e : Pe = Pe.next = e,
    Pe
}
function gt() {
    if (Le === null) {
        var e = ke.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Le.next;
    var t = Pe === null ? ke.memoizedState : Pe.next;
    if (t !== null)
        Pe = t,
        Le = e;
    else {
        if (e === null)
            throw Error(G(310));
        Le = e,
        e = {
            memoizedState: Le.memoizedState,
            baseState: Le.baseState,
            baseQueue: Le.baseQueue,
            queue: Le.queue,
            next: null
        },
        Pe === null ? ke.memoizedState = Pe = e : Pe = Pe.next = e
    }
    return Pe
}
function Vs(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Da(e) {
    var t = gt()
      , n = t.queue;
    if (n === null)
        throw Error(G(311));
    n.lastRenderedReducer = e;
    var r = Le
      , s = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (s !== null) {
            var a = s.next;
            s.next = o.next,
            o.next = a
        }
        r.baseQueue = s = o,
        n.pending = null
    }
    if (s !== null) {
        o = s.next,
        r = r.baseState;
        var i = a = null
          , c = null
          , u = o;
        do {
            var d = u.lane;
            if ((Un & d) === d)
                c !== null && (c = c.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                c === null ? (i = c = f,
                a = r) : c = c.next = f,
                ke.lanes |= d,
                Bn |= d
            }
            u = u.next
        } while (u !== null && u !== o);
        c === null ? a = r : c.next = i,
        Et(r, t.memoizedState) || (Ze = !0),
        t.memoizedState = r,
        t.baseState = a,
        t.baseQueue = c,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        s = e;
        do
            o = s.lane,
            ke.lanes |= o,
            Bn |= o,
            s = s.next;
        while (s !== e)
    } else
        s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ia(e) {
    var t = gt()
      , n = t.queue;
    if (n === null)
        throw Error(G(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , s = n.pending
      , o = t.memoizedState;
    if (s !== null) {
        n.pending = null;
        var a = s = s.next;
        do
            o = e(o, a.action),
            a = a.next;
        while (a !== s);
        Et(o, t.memoizedState) || (Ze = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Pp() {}
function Op(e, t) {
    var n = ke
      , r = gt()
      , s = t()
      , o = !Et(r.memoizedState, s);
    if (o && (r.memoizedState = s,
    Ze = !0),
    r = r.queue,
    gu(_p.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || Pe !== null && Pe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Ys(9, Ip.bind(null, n, r, s, t), void 0, null),
        Oe === null)
            throw Error(G(349));
        Un & 30 || Dp(n, t, s)
    }
    return s
}
function Dp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ke.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ke.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Ip(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    zp(t) && Fp(e)
}
function _p(e, t, n) {
    return n(function() {
        zp(t) && Fp(e)
    })
}
function zp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Et(e, n)
    } catch {
        return !0
    }
}
function Fp(e) {
    var t = Qt(e, 1);
    t !== null && Mt(t, e, 1, -1)
}
function $d(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vs,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = iy.bind(null, ke, e),
    [t.memoizedState, e]
}
function Ys(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ke.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ke.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Hp() {
    return gt().memoizedState
}
function Xo(e, t, n, r) {
    var s = Pt();
    ke.flags |= e,
    s.memoizedState = Ys(1 | t, n, void 0, r === void 0 ? null : r)
}
function ea(e, t, n, r) {
    var s = gt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Le !== null) {
        var a = Le.memoizedState;
        if (o = a.destroy,
        r !== null && mu(r, a.deps)) {
            s.memoizedState = Ys(t, n, o, r);
            return
        }
    }
    ke.flags |= e,
    s.memoizedState = Ys(1 | t, n, o, r)
}
function Pd(e, t) {
    return Xo(8390656, 8, e, t)
}
function gu(e, t) {
    return ea(2048, 8, e, t)
}
function Wp(e, t) {
    return ea(4, 2, e, t)
}
function Up(e, t) {
    return ea(4, 4, e, t)
}
function Bp(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Vp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    ea(4, 4, Bp.bind(null, t, e), n)
}
function yu() {}
function Yp(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Gp(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mu(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Kp(e, t, n) {
    return Un & 21 ? (Et(n, t) || (n = Jm(),
    ke.lanes |= n,
    Bn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ze = !0),
    e.memoizedState = n)
}
function ly(e, t) {
    var n = me;
    me = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Oa.transition;
    Oa.transition = {};
    try {
        e(!1),
        t()
    } finally {
        me = n,
        Oa.transition = r
    }
}
function qp() {
    return gt().memoizedState
}
function ay(e, t, n) {
    var r = vn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Xp(e))
        Qp(t, n);
    else if (n = Cp(e, t, n, r),
    n !== null) {
        var s = Ke();
        Mt(n, e, r, s),
        Zp(n, t, r)
    }
}
function iy(e, t, n) {
    var r = vn(e)
      , s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Xp(e))
        Qp(t, s);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var a = t.lastRenderedState
                  , i = o(a, n);
                if (s.hasEagerState = !0,
                s.eagerState = i,
                Et(i, a)) {
                    var c = t.interleaved;
                    c === null ? (s.next = s,
                    cu(t)) : (s.next = c.next,
                    c.next = s),
                    t.interleaved = s;
                    return
                }
            } catch {} finally {}
        n = Cp(e, t, s, r),
        n !== null && (s = Ke(),
        Mt(n, e, r, s),
        Zp(n, t, r))
    }
}
function Xp(e) {
    var t = e.alternate;
    return e === ke || t !== null && t === ke
}
function Qp(e, t) {
    bs = Sl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Zp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        qc(e, n)
    }
}
var Nl = {
    readContext: xt,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1
}
  , cy = {
    readContext: xt,
    useCallback: function(e, t) {
        return Pt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: xt,
    useEffect: Pd,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Xo(4194308, 4, Bp.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Xo(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Xo(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Pt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Pt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = ay.bind(null, ke, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Pt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: $d,
    useDebugValue: yu,
    useDeferredValue: function(e) {
        return Pt().memoizedState = e
    },
    useTransition: function() {
        var e = $d(!1)
          , t = e[0];
        return e = ly.bind(null, e[1]),
        Pt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ke
          , s = Pt();
        if (ve) {
            if (n === void 0)
                throw Error(G(407));
            n = n()
        } else {
            if (n = t(),
            Oe === null)
                throw Error(G(349));
            Un & 30 || Dp(r, t, n)
        }
        s.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return s.queue = o,
        Pd(_p.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Ys(9, Ip.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Pt()
          , t = Oe.identifierPrefix;
        if (ve) {
            var n = Yt
              , r = Vt;
            n = (r & ~(1 << 32 - Nt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Bs++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = oy++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , uy = {
    readContext: xt,
    useCallback: Yp,
    useContext: xt,
    useEffect: gu,
    useImperativeHandle: Vp,
    useInsertionEffect: Wp,
    useLayoutEffect: Up,
    useMemo: Gp,
    useReducer: Da,
    useRef: Hp,
    useState: function() {
        return Da(Vs)
    },
    useDebugValue: yu,
    useDeferredValue: function(e) {
        var t = gt();
        return Kp(t, Le.memoizedState, e)
    },
    useTransition: function() {
        var e = Da(Vs)[0]
          , t = gt().memoizedState;
        return [e, t]
    },
    useMutableSource: Pp,
    useSyncExternalStore: Op,
    useId: qp,
    unstable_isNewReconciler: !1
}
  , dy = {
    readContext: xt,
    useCallback: Yp,
    useContext: xt,
    useEffect: gu,
    useImperativeHandle: Vp,
    useInsertionEffect: Wp,
    useLayoutEffect: Up,
    useMemo: Gp,
    useReducer: Ia,
    useRef: Hp,
    useState: function() {
        return Ia(Vs)
    },
    useDebugValue: yu,
    useDeferredValue: function(e) {
        var t = gt();
        return Le === null ? t.memoizedState = e : Kp(t, Le.memoizedState, e)
    },
    useTransition: function() {
        var e = Ia(Vs)[0]
          , t = gt().memoizedState;
        return [e, t]
    },
    useMutableSource: Pp,
    useSyncExternalStore: Op,
    useId: qp,
    unstable_isNewReconciler: !1
};
function wt(e, t) {
    if (e && e.defaultProps) {
        t = je({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Bi(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : je({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ta = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Kn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ke()
          , s = vn(e)
          , o = Kt(r, s);
        o.payload = t,
        n != null && (o.callback = n),
        t = gn(e, o, s),
        t !== null && (Mt(t, e, s, r),
        Ko(t, e, s))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ke()
          , s = vn(e)
          , o = Kt(r, s);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = gn(e, o, s),
        t !== null && (Mt(t, e, s, r),
        Ko(t, e, s))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ke()
          , r = vn(e)
          , s = Kt(n, r);
        s.tag = 2,
        t != null && (s.callback = t),
        t = gn(e, s, r),
        t !== null && (Mt(t, e, r, n),
        Ko(t, e, r))
    }
};
function Od(e, t, n, r, s, o, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, a) : t.prototype && t.prototype.isPureReactComponent ? !_s(n, r) || !_s(s, o) : !0
}
function Jp(e, t, n) {
    var r = !1
      , s = jn
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = xt(o) : (s = et(t) ? Hn : Be.current,
    r = t.contextTypes,
    o = (r = r != null) ? Ar(e, s) : jn),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ta,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = s,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function Dd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ta.enqueueReplaceState(t, t.state, null)
}
function Vi(e, t, n, r) {
    var s = e.stateNode;
    s.props = n,
    s.state = e.memoizedState,
    s.refs = {},
    uu(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? s.context = xt(o) : (o = et(t) ? Hn : Be.current,
    s.context = Ar(e, o)),
    s.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Bi(e, t, o, n),
    s.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    t !== s.state && ta.enqueueReplaceState(s, s.state, null),
    jl(e, n, s, r),
    s.state = e.memoizedState),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function Pr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += zg(r),
            r = r.return;
        while (r);
        var s = n
    } catch (o) {
        s = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: s,
        digest: null
    }
}
function _a(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Yi(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var fy = typeof WeakMap == "function" ? WeakMap : Map;
function ex(e, t, n) {
    n = Kt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        El || (El = !0,
        nc = r),
        Yi(e, t)
    }
    ,
    n
}
function tx(e, t, n) {
    n = Kt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = t.value;
        n.payload = function() {
            return r(s)
        }
        ,
        n.callback = function() {
            Yi(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Yi(e, t),
        typeof r != "function" && (yn === null ? yn = new Set([this]) : yn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    n
}
function Id(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new fy;
        var s = new Set;
        r.set(t, s)
    } else
        s = r.get(t),
        s === void 0 && (s = new Set,
        r.set(t, s));
    s.has(n) || (s.add(n),
    e = My.bind(null, e, t, n),
    t.then(e, e))
}
function _d(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function zd(e, t, n, r, s) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = s,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Kt(-1, 1),
    t.tag = 2,
    gn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var hy = Jt.ReactCurrentOwner
  , Ze = !1;
function Ge(e, t, n, r) {
    t.child = e === null ? Ap(t, null, n, r) : Lr(t, e.child, n, r)
}
function Fd(e, t, n, r, s) {
    n = n.render;
    var o = t.ref;
    return Sr(t, s),
    r = pu(e, t, n, r, o, s),
    n = xu(),
    e !== null && !Ze ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    Zt(e, t, s)) : (ve && n && ru(t),
    t.flags |= 1,
    Ge(e, t, r, s),
    t.child)
}
function Hd(e, t, n, r, s) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Mu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        nx(e, t, o, r, s)) : (e = el(n.type, null, r, t, t.mode, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & s)) {
        var a = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : _s,
        n(a, r) && e.ref === t.ref)
            return Zt(e, t, s)
    }
    return t.flags |= 1,
    e = wn(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function nx(e, t, n, r, s) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (_s(o, r) && e.ref === t.ref)
            if (Ze = !1,
            t.pendingProps = r = o,
            (e.lanes & s) !== 0)
                e.flags & 131072 && (Ze = !0);
            else
                return t.lanes = e.lanes,
                Zt(e, t, s)
    }
    return Gi(e, t, n, r, s)
}
function rx(e, t, n) {
    var r = t.pendingProps
      , s = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            pe(hr, rt),
            rt |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                pe(hr, rt),
                rt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            pe(hr, rt),
            rt |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        pe(hr, rt),
        rt |= r;
    return Ge(e, t, s, n),
    t.child
}
function sx(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Gi(e, t, n, r, s) {
    var o = et(n) ? Hn : Be.current;
    return o = Ar(t, o),
    Sr(t, s),
    n = pu(e, t, n, r, o, s),
    r = xu(),
    e !== null && !Ze ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    Zt(e, t, s)) : (ve && r && ru(t),
    t.flags |= 1,
    Ge(e, t, n, s),
    t.child)
}
function Wd(e, t, n, r, s) {
    if (et(n)) {
        var o = !0;
        gl(t)
    } else
        o = !1;
    if (Sr(t, s),
    t.stateNode === null)
        Qo(e, t),
        Jp(t, n, r),
        Vi(t, n, r, s),
        r = !0;
    else if (e === null) {
        var a = t.stateNode
          , i = t.memoizedProps;
        a.props = i;
        var c = a.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = xt(u) : (u = et(n) ? Hn : Be.current,
        u = Ar(t, u));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (i !== r || c !== u) && Dd(t, a, r, u),
        sn = !1;
        var m = t.memoizedState;
        a.state = m,
        jl(t, r, a, s),
        c = t.memoizedState,
        i !== r || m !== c || Je.current || sn ? (typeof d == "function" && (Bi(t, n, d, r),
        c = t.memoizedState),
        (i = sn || Od(t, n, i, r, m, c, u)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = c),
        a.props = r,
        a.state = c,
        a.context = u,
        r = i) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        a = t.stateNode,
        Lp(e, t),
        i = t.memoizedProps,
        u = t.type === t.elementType ? i : wt(t.type, i),
        a.props = u,
        f = t.pendingProps,
        m = a.context,
        c = n.contextType,
        typeof c == "object" && c !== null ? c = xt(c) : (c = et(n) ? Hn : Be.current,
        c = Ar(t, c));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (i !== f || m !== c) && Dd(t, a, r, c),
        sn = !1,
        m = t.memoizedState,
        a.state = m,
        jl(t, r, a, s);
        var g = t.memoizedState;
        i !== f || m !== g || Je.current || sn ? (typeof y == "function" && (Bi(t, n, y, r),
        g = t.memoizedState),
        (u = sn || Od(t, n, u, r, m, g, c) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, g, c),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, g, c)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = g),
        a.props = r,
        a.state = g,
        a.context = c,
        r = u) : (typeof a.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ki(e, t, n, r, o, s)
}
function Ki(e, t, n, r, s, o) {
    sx(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a)
        return s && Ed(t, n, !1),
        Zt(e, t, o);
    r = t.stateNode,
    hy.current = t;
    var i = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = Lr(t, e.child, null, o),
    t.child = Lr(t, null, i, o)) : Ge(e, t, i, o),
    t.memoizedState = r.state,
    s && Ed(t, n, !0),
    t.child
}
function ox(e) {
    var t = e.stateNode;
    t.pendingContext ? Md(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Md(e, t.context, !1),
    du(e, t.containerInfo)
}
function Ud(e, t, n, r, s) {
    return Cr(),
    ou(s),
    t.flags |= 256,
    Ge(e, t, n, r),
    t.child
}
var qi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Xi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function lx(e, t, n) {
    var r = t.pendingProps, s = we.current, o = !1, a = (t.flags & 128) !== 0, i;
    if ((i = a) || (i = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    i ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
    pe(we, s & 1),
    e === null)
        return Wi(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = a) : o = sa(a, r, 0, null),
        e = Fn(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Xi(n),
        t.memoizedState = qi,
        e) : vu(t, a));
    if (s = e.memoizedState,
    s !== null && (i = s.dehydrated,
    i !== null))
        return my(e, t, a, r, i, s, n);
    if (o) {
        o = r.fallback,
        a = t.mode,
        s = e.child,
        i = s.sibling;
        var c = {
            mode: "hidden",
            children: r.children
        };
        return !(a & 1) && t.child !== s ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = c,
        t.deletions = null) : (r = wn(s, c),
        r.subtreeFlags = s.subtreeFlags & 14680064),
        i !== null ? o = wn(i, o) : (o = Fn(o, a, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        a = e.child.memoizedState,
        a = a === null ? Xi(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        },
        o.memoizedState = a,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = qi,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = wn(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function vu(e, t) {
    return t = sa({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function wo(e, t, n, r) {
    return r !== null && ou(r),
    Lr(t, e.child, null, n),
    e = vu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function my(e, t, n, r, s, o, a) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = _a(Error(G(422))),
        wo(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        s = t.mode,
        r = sa({
            mode: "visible",
            children: r.children
        }, s, 0, null),
        o = Fn(o, s, a, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Lr(t, e.child, null, a),
        t.child.memoizedState = Xi(a),
        t.memoizedState = qi,
        o);
    if (!(t.mode & 1))
        return wo(e, t, a, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset,
        r)
            var i = r.dgst;
        return r = i,
        o = Error(G(419)),
        r = _a(o, r, void 0),
        wo(e, t, a, r)
    }
    if (i = (a & e.childLanes) !== 0,
    Ze || i) {
        if (r = Oe,
        r !== null) {
            switch (a & -a) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
                break;
            case 64:
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
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (r.suspendedLanes | a) ? 0 : s,
            s !== 0 && s !== o.retryLane && (o.retryLane = s,
            Qt(e, s),
            Mt(r, e, s, -1))
        }
        return Nu(),
        r = _a(Error(G(421))),
        wo(e, t, a, r)
    }
    return s.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Ey.bind(null, e),
    s._reactRetry = t,
    null) : (e = o.treeContext,
    ot = xn(s.nextSibling),
    lt = t,
    ve = !0,
    jt = null,
    e !== null && (ft[ht++] = Vt,
    ft[ht++] = Yt,
    ft[ht++] = Wn,
    Vt = e.id,
    Yt = e.overflow,
    Wn = t),
    t = vu(t, r.children),
    t.flags |= 4096,
    t)
}
function Bd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ui(e.return, t, n)
}
function za(e, t, n, r, s) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = s)
}
function ax(e, t, n) {
    var r = t.pendingProps
      , s = r.revealOrder
      , o = r.tail;
    if (Ge(e, t, r.children, n),
    r = we.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Bd(e, n, t);
                else if (e.tag === 19)
                    Bd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (pe(we, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (n = t.child,
            s = null; n !== null; )
                e = n.alternate,
                e !== null && bl(e) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = t.child,
            t.child = null) : (s = n.sibling,
            n.sibling = null),
            za(t, !1, s, n, o);
            break;
        case "backwards":
            for (n = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && bl(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = n,
                n = s,
                s = e
            }
            za(t, !0, n, null, o);
            break;
        case "together":
            za(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Qo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Zt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Bn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(G(153));
    if (t.child !== null) {
        for (e = t.child,
        n = wn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = wn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function py(e, t, n) {
    switch (t.tag) {
    case 3:
        ox(t),
        Cr();
        break;
    case 5:
        $p(t);
        break;
    case 1:
        et(t.type) && gl(t);
        break;
    case 4:
        du(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , s = t.memoizedProps.value;
        pe(wl, r._currentValue),
        r._currentValue = s;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (pe(we, we.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? lx(e, t, n) : (pe(we, we.current & 1),
            e = Zt(e, t, n),
            e !== null ? e.sibling : null);
        pe(we, we.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return ax(e, t, n);
            t.flags |= 128
        }
        if (s = t.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        pe(we, we.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        rx(e, t, n)
    }
    return Zt(e, t, n)
}
var ix, Qi, cx, ux;
ix = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Qi = function() {}
;
cx = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
        e = t.stateNode,
        Dn(Ht.current);
        var o = null;
        switch (n) {
        case "input":
            s = vi(e, s),
            r = vi(e, r),
            o = [];
            break;
        case "select":
            s = je({}, s, {
                value: void 0
            }),
            r = je({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            s = ji(e, s),
            r = ji(e, r),
            o = [];
            break;
        default:
            typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = pl)
        }
        Si(n, r);
        var a;
        n = null;
        for (u in s)
            if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var i = s[u];
                    for (a in i)
                        i.hasOwnProperty(a) && (n || (n = {}),
                        n[a] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Cs.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var c = r[u];
            if (i = s != null ? s[u] : void 0,
            r.hasOwnProperty(u) && c !== i && (c != null || i != null))
                if (u === "style")
                    if (i) {
                        for (a in i)
                            !i.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (n || (n = {}),
                            n[a] = "");
                        for (a in c)
                            c.hasOwnProperty(a) && i[a] !== c[a] && (n || (n = {}),
                            n[a] = c[a])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = c;
                else
                    u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                    i = i ? i.__html : void 0,
                    c != null && i !== c && (o = o || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Cs.hasOwnProperty(u) ? (c != null && u === "onScroll" && xe("scroll", e),
                    o || i === c || (o = [])) : (o = o || []).push(u, c))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
ux = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Yr(e, t) {
    if (!ve)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags & 14680064,
            r |= s.flags & 14680064,
            s.return = e,
            s = s.sibling;
    else
        for (s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags,
            r |= s.flags,
            s.return = e,
            s = s.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function xy(e, t, n) {
    var r = t.pendingProps;
    switch (su(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return He(t),
        null;
    case 1:
        return et(t.type) && xl(),
        He(t),
        null;
    case 3:
        return r = t.stateNode,
        $r(),
        ge(Je),
        ge(Be),
        hu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (yo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        jt !== null && (oc(jt),
        jt = null))),
        Qi(e, t),
        He(t),
        null;
    case 5:
        fu(t);
        var s = Dn(Us.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            cx(e, t, n, r, s),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(G(166));
                return He(t),
                null
            }
            if (e = Dn(Ht.current),
            yo(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[_t] = t,
                r[Hs] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    xe("cancel", r),
                    xe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    xe("load", r);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < ls.length; s++)
                        xe(ls[s], r);
                    break;
                case "source":
                    xe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    xe("error", r),
                    xe("load", r);
                    break;
                case "details":
                    xe("toggle", r);
                    break;
                case "input":
                    Ju(r, o),
                    xe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    xe("invalid", r);
                    break;
                case "textarea":
                    td(r, o),
                    xe("invalid", r)
                }
                Si(n, o),
                s = null;
                for (var a in o)
                    if (o.hasOwnProperty(a)) {
                        var i = o[a];
                        a === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && go(r.textContent, i, e),
                        s = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && go(r.textContent, i, e),
                        s = ["children", "" + i]) : Cs.hasOwnProperty(a) && i != null && a === "onScroll" && xe("scroll", r)
                    }
                switch (n) {
                case "input":
                    io(r),
                    ed(r, o, !0);
                    break;
                case "textarea":
                    io(r),
                    nd(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = pl)
                }
                r = s,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                a = s.nodeType === 9 ? s : s.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = _m(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                    is: r.is
                }) : (e = a.createElement(n),
                n === "select" && (a = e,
                r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n),
                e[_t] = t,
                e[Hs] = r,
                ix(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = Ni(n, r),
                    n) {
                    case "dialog":
                        xe("cancel", e),
                        xe("close", e),
                        s = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        xe("load", e),
                        s = r;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < ls.length; s++)
                            xe(ls[s], e);
                        s = r;
                        break;
                    case "source":
                        xe("error", e),
                        s = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        xe("error", e),
                        xe("load", e),
                        s = r;
                        break;
                    case "details":
                        xe("toggle", e),
                        s = r;
                        break;
                    case "input":
                        Ju(e, r),
                        s = vi(e, r),
                        xe("invalid", e);
                        break;
                    case "option":
                        s = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        s = je({}, r, {
                            value: void 0
                        }),
                        xe("invalid", e);
                        break;
                    case "textarea":
                        td(e, r),
                        s = ji(e, r),
                        xe("invalid", e);
                        break;
                    default:
                        s = r
                    }
                    Si(n, s),
                    i = s;
                    for (o in i)
                        if (i.hasOwnProperty(o)) {
                            var c = i[o];
                            o === "style" ? Hm(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                            c != null && zm(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Ls(e, c) : typeof c == "number" && Ls(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Cs.hasOwnProperty(o) ? c != null && o === "onScroll" && xe("scroll", e) : c != null && Uc(e, o, c, a))
                        }
                    switch (n) {
                    case "input":
                        io(e),
                        ed(e, r, !1);
                        break;
                    case "textarea":
                        io(e),
                        nd(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + kn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? wr(e, !!r.multiple, o, !1) : r.defaultValue != null && wr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (e.onclick = pl)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return He(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ux(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(G(166));
            if (n = Dn(Us.current),
            Dn(Ht.current),
            yo(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[_t] = t,
                (o = r.nodeValue !== n) && (e = lt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        go(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && go(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[_t] = t,
                t.stateNode = r
        }
        return He(t),
        null;
    case 13:
        if (ge(we),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ve && ot !== null && t.mode & 1 && !(t.flags & 128))
                Tp(),
                Cr(),
                t.flags |= 98560,
                o = !1;
            else if (o = yo(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(G(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(G(317));
                    o[_t] = t
                } else
                    Cr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                He(t),
                o = !1
            } else
                jt !== null && (oc(jt),
                jt = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || we.current & 1 ? $e === 0 && ($e = 3) : Nu())),
        t.updateQueue !== null && (t.flags |= 4),
        He(t),
        null);
    case 4:
        return $r(),
        Qi(e, t),
        e === null && zs(t.stateNode.containerInfo),
        He(t),
        null;
    case 10:
        return iu(t.type._context),
        He(t),
        null;
    case 17:
        return et(t.type) && xl(),
        He(t),
        null;
    case 19:
        if (ge(we),
        o = t.memoizedState,
        o === null)
            return He(t),
            null;
        if (r = (t.flags & 128) !== 0,
        a = o.rendering,
        a === null)
            if (r)
                Yr(o, !1);
            else {
                if ($e !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (a = bl(e),
                        a !== null) {
                            for (t.flags |= 128,
                            Yr(o, !1),
                            r = a.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                a = o.alternate,
                                a === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = a.childLanes,
                                o.lanes = a.lanes,
                                o.child = a.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = a.memoizedProps,
                                o.memoizedState = a.memoizedState,
                                o.updateQueue = a.updateQueue,
                                o.type = a.type,
                                e = a.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return pe(we, we.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && Re() > Or && (t.flags |= 128,
                r = !0,
                Yr(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = bl(a),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Yr(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !a.alternate && !ve)
                        return He(t),
                        null
                } else
                    2 * Re() - o.renderingStartTime > Or && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Yr(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (a.sibling = t.child,
            t.child = a) : (n = o.last,
            n !== null ? n.sibling = a : t.child = a,
            o.last = a)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = Re(),
        t.sibling = null,
        n = we.current,
        pe(we, r ? n & 1 | 2 : n & 1),
        t) : (He(t),
        null);
    case 22:
    case 23:
        return Su(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? rt & 1073741824 && (He(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : He(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(G(156, t.tag))
}
function gy(e, t) {
    switch (su(t),
    t.tag) {
    case 1:
        return et(t.type) && xl(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return $r(),
        ge(Je),
        ge(Be),
        hu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return fu(t),
        null;
    case 13:
        if (ge(we),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(G(340));
            Cr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ge(we),
        null;
    case 4:
        return $r(),
        null;
    case 10:
        return iu(t.type._context),
        null;
    case 22:
    case 23:
        return Su(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ko = !1
  , Ue = !1
  , yy = typeof WeakSet == "function" ? WeakSet : Set
  , q = null;
function fr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Se(e, t, r)
            }
        else
            n.current = null
}
function Zi(e, t, n) {
    try {
        n()
    } catch (r) {
        Se(e, t, r)
    }
}
var Vd = !1;
function vy(e, t) {
    if (Oi = fl,
    e = pp(),
    nu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var a = 0
                      , i = -1
                      , c = -1
                      , u = 0
                      , d = 0
                      , f = e
                      , m = null;
                    t: for (; ; ) {
                        for (var y; f !== n || s !== 0 && f.nodeType !== 3 || (i = a + s),
                        f !== o || r !== 0 && f.nodeType !== 3 || (c = a + r),
                        f.nodeType === 3 && (a += f.nodeValue.length),
                        (y = f.firstChild) !== null; )
                            m = f,
                            f = y;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (m === n && ++u === s && (i = a),
                            m === o && ++d === r && (c = a),
                            (y = f.nextSibling) !== null)
                                break;
                            f = m,
                            m = f.parentNode
                        }
                        f = y
                    }
                    n = i === -1 || c === -1 ? null : {
                        start: i,
                        end: c
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Di = {
        focusedElem: e,
        selectionRange: n
    },
    fl = !1,
    q = t; q !== null; )
        if (t = q,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            q = e;
        else
            for (; q !== null; ) {
                t = q;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var p = g.memoizedProps
                                  , k = g.memoizedState
                                  , v = t.stateNode
                                  , x = v.getSnapshotBeforeUpdate(t.elementType === t.type ? p : wt(t.type, p), k);
                                v.__reactInternalSnapshotBeforeUpdate = x
                            }
                            break;
                        case 3:
                            var w = t.stateNode.containerInfo;
                            w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(G(163))
                        }
                } catch (b) {
                    Se(t, t.return, b)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    q = e;
                    break
                }
                q = t.return
            }
    return g = Vd,
    Vd = !1,
    g
}
function Ss(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & e) === e) {
                var o = s.destroy;
                s.destroy = void 0,
                o !== void 0 && Zi(t, n, o)
            }
            s = s.next
        } while (s !== r)
    }
}
function na(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ji(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function dx(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    dx(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[_t],
    delete t[Hs],
    delete t[zi],
    delete t[ty],
    delete t[ny])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function fx(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Yd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || fx(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ec(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = pl));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ec(e, t, n),
        e = e.sibling; e !== null; )
            ec(e, t, n),
            e = e.sibling
}
function tc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (tc(e, t, n),
        e = e.sibling; e !== null; )
            tc(e, t, n),
            e = e.sibling
}
var Ie = null
  , kt = !1;
function en(e, t, n) {
    for (n = n.child; n !== null; )
        hx(e, t, n),
        n = n.sibling
}
function hx(e, t, n) {
    if (Ft && typeof Ft.onCommitFiberUnmount == "function")
        try {
            Ft.onCommitFiberUnmount(Kl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ue || fr(n, t);
    case 6:
        var r = Ie
          , s = kt;
        Ie = null,
        en(e, t, n),
        Ie = r,
        kt = s,
        Ie !== null && (kt ? (e = Ie,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ie.removeChild(n.stateNode));
        break;
    case 18:
        Ie !== null && (kt ? (e = Ie,
        n = n.stateNode,
        e.nodeType === 8 ? La(e.parentNode, n) : e.nodeType === 1 && La(e, n),
        Ds(e)) : La(Ie, n.stateNode));
        break;
    case 4:
        r = Ie,
        s = kt,
        Ie = n.stateNode.containerInfo,
        kt = !0,
        en(e, t, n),
        Ie = r,
        kt = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ue && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            s = r = r.next;
            do {
                var o = s
                  , a = o.destroy;
                o = o.tag,
                a !== void 0 && (o & 2 || o & 4) && Zi(n, t, a),
                s = s.next
            } while (s !== r)
        }
        en(e, t, n);
        break;
    case 1:
        if (!Ue && (fr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (i) {
                Se(n, t, i)
            }
        en(e, t, n);
        break;
    case 21:
        en(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null,
        en(e, t, n),
        Ue = r) : en(e, t, n);
        break;
    default:
        en(e, t, n)
    }
}
function Gd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new yy),
        t.forEach(function(r) {
            var s = Ty.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(s, s))
        })
    }
}
function yt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var o = e
                  , a = t
                  , i = a;
                e: for (; i !== null; ) {
                    switch (i.tag) {
                    case 5:
                        Ie = i.stateNode,
                        kt = !1;
                        break e;
                    case 3:
                        Ie = i.stateNode.containerInfo,
                        kt = !0;
                        break e;
                    case 4:
                        Ie = i.stateNode.containerInfo,
                        kt = !0;
                        break e
                    }
                    i = i.return
                }
                if (Ie === null)
                    throw Error(G(160));
                hx(o, a, s),
                Ie = null,
                kt = !1;
                var c = s.alternate;
                c !== null && (c.return = null),
                s.return = null
            } catch (u) {
                Se(s, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            mx(t, e),
            t = t.sibling
}
function mx(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (yt(t, e),
        At(e),
        r & 4) {
            try {
                Ss(3, e, e.return),
                na(3, e)
            } catch (p) {
                Se(e, e.return, p)
            }
            try {
                Ss(5, e, e.return)
            } catch (p) {
                Se(e, e.return, p)
            }
        }
        break;
    case 1:
        yt(t, e),
        At(e),
        r & 512 && n !== null && fr(n, n.return);
        break;
    case 5:
        if (yt(t, e),
        At(e),
        r & 512 && n !== null && fr(n, n.return),
        e.flags & 32) {
            var s = e.stateNode;
            try {
                Ls(s, "")
            } catch (p) {
                Se(e, e.return, p)
            }
        }
        if (r & 4 && (s = e.stateNode,
        s != null)) {
            var o = e.memoizedProps
              , a = n !== null ? n.memoizedProps : o
              , i = e.type
              , c = e.updateQueue;
            if (e.updateQueue = null,
            c !== null)
                try {
                    i === "input" && o.type === "radio" && o.name != null && Dm(s, o),
                    Ni(i, a);
                    var u = Ni(i, o);
                    for (a = 0; a < c.length; a += 2) {
                        var d = c[a]
                          , f = c[a + 1];
                        d === "style" ? Hm(s, f) : d === "dangerouslySetInnerHTML" ? zm(s, f) : d === "children" ? Ls(s, f) : Uc(s, d, f, u)
                    }
                    switch (i) {
                    case "input":
                        wi(s, o);
                        break;
                    case "textarea":
                        Im(s, o);
                        break;
                    case "select":
                        var m = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!o.multiple;
                        var y = o.value;
                        y != null ? wr(s, !!o.multiple, y, !1) : m !== !!o.multiple && (o.defaultValue != null ? wr(s, !!o.multiple, o.defaultValue, !0) : wr(s, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    s[Hs] = o
                } catch (p) {
                    Se(e, e.return, p)
                }
        }
        break;
    case 6:
        if (yt(t, e),
        At(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(G(162));
            s = e.stateNode,
            o = e.memoizedProps;
            try {
                s.nodeValue = o
            } catch (p) {
                Se(e, e.return, p)
            }
        }
        break;
    case 3:
        if (yt(t, e),
        At(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Ds(t.containerInfo)
            } catch (p) {
                Se(e, e.return, p)
            }
        break;
    case 4:
        yt(t, e),
        At(e);
        break;
    case 13:
        yt(t, e),
        At(e),
        s = e.child,
        s.flags & 8192 && (o = s.memoizedState !== null,
        s.stateNode.isHidden = o,
        !o || s.alternate !== null && s.alternate.memoizedState !== null || (ju = Re())),
        r & 4 && Gd(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ue = (u = Ue) || d,
        yt(t, e),
        Ue = u) : yt(t, e),
        At(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (q = e,
                d = e.child; d !== null; ) {
                    for (f = q = d; q !== null; ) {
                        switch (m = q,
                        y = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ss(4, m, m.return);
                            break;
                        case 1:
                            fr(m, m.return);
                            var g = m.stateNode;
                            if (typeof g.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    g.props = t.memoizedProps,
                                    g.state = t.memoizedState,
                                    g.componentWillUnmount()
                                } catch (p) {
                                    Se(r, n, p)
                                }
                            }
                            break;
                        case 5:
                            fr(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                qd(f);
                                continue
                            }
                        }
                        y !== null ? (y.return = m,
                        q = y) : qd(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            s = f.stateNode,
                            u ? (o = s.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = f.stateNode,
                            c = f.memoizedProps.style,
                            a = c != null && c.hasOwnProperty("display") ? c.display : null,
                            i.style.display = Fm("display", a))
                        } catch (p) {
                            Se(e, e.return, p)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (p) {
                            Se(e, e.return, p)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        yt(t, e),
        At(e),
        r & 4 && Gd(e);
        break;
    case 21:
        break;
    default:
        yt(t, e),
        At(e)
    }
}
function At(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (fx(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(G(160))
            }
            switch (r.tag) {
            case 5:
                var s = r.stateNode;
                r.flags & 32 && (Ls(s, ""),
                r.flags &= -33);
                var o = Yd(e);
                tc(e, o, s);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo
                  , i = Yd(e);
                ec(e, i, a);
                break;
            default:
                throw Error(G(161))
            }
        } catch (c) {
            Se(e, e.return, c)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function wy(e, t, n) {
    q = e,
    px(e)
}
function px(e, t, n) {
    for (var r = (e.mode & 1) !== 0; q !== null; ) {
        var s = q
          , o = s.child;
        if (s.tag === 22 && r) {
            var a = s.memoizedState !== null || ko;
            if (!a) {
                var i = s.alternate
                  , c = i !== null && i.memoizedState !== null || Ue;
                i = ko;
                var u = Ue;
                if (ko = a,
                (Ue = c) && !u)
                    for (q = s; q !== null; )
                        a = q,
                        c = a.child,
                        a.tag === 22 && a.memoizedState !== null ? Xd(s) : c !== null ? (c.return = a,
                        q = c) : Xd(s);
                for (; o !== null; )
                    q = o,
                    px(o),
                    o = o.sibling;
                q = s,
                ko = i,
                Ue = u
            }
            Kd(e)
        } else
            s.subtreeFlags & 8772 && o !== null ? (o.return = s,
            q = o) : Kd(e)
    }
}
function Kd(e) {
    for (; q !== null; ) {
        var t = q;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ue || na(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ue)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var s = t.elementType === t.type ? n.memoizedProps : wt(t.type, n.memoizedProps);
                                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Ld(t, o, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Ld(t, a, n)
                        }
                        break;
                    case 5:
                        var i = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = i;
                            var c = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                c.autoFocus && n.focus();
                                break;
                            case "img":
                                c.src && (n.src = c.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && Ds(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(G(163))
                    }
                Ue || t.flags & 512 && Ji(t)
            } catch (m) {
                Se(t, t.return, m)
            }
        }
        if (t === e) {
            q = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            q = n;
            break
        }
        q = t.return
    }
}
function qd(e) {
    for (; q !== null; ) {
        var t = q;
        if (t === e) {
            q = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            q = n;
            break
        }
        q = t.return
    }
}
function Xd(e) {
    for (; q !== null; ) {
        var t = q;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    na(4, t)
                } catch (c) {
                    Se(t, n, c)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var s = t.return;
                    try {
                        r.componentDidMount()
                    } catch (c) {
                        Se(t, s, c)
                    }
                }
                var o = t.return;
                try {
                    Ji(t)
                } catch (c) {
                    Se(t, o, c)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    Ji(t)
                } catch (c) {
                    Se(t, a, c)
                }
            }
        } catch (c) {
            Se(t, t.return, c)
        }
        if (t === e) {
            q = null;
            break
        }
        var i = t.sibling;
        if (i !== null) {
            i.return = t.return,
            q = i;
            break
        }
        q = t.return
    }
}
var ky = Math.ceil
  , Ml = Jt.ReactCurrentDispatcher
  , wu = Jt.ReactCurrentOwner
  , pt = Jt.ReactCurrentBatchConfig
  , ue = 0
  , Oe = null
  , Ce = null
  , _e = 0
  , rt = 0
  , hr = Sn(0)
  , $e = 0
  , Gs = null
  , Bn = 0
  , ra = 0
  , ku = 0
  , Ns = null
  , Qe = null
  , ju = 0
  , Or = 1 / 0
  , Wt = null
  , El = !1
  , nc = null
  , yn = null
  , jo = !1
  , fn = null
  , Tl = 0
  , Ms = 0
  , rc = null
  , Zo = -1
  , Jo = 0;
function Ke() {
    return ue & 6 ? Re() : Zo !== -1 ? Zo : Zo = Re()
}
function vn(e) {
    return e.mode & 1 ? ue & 2 && _e !== 0 ? _e & -_e : sy.transition !== null ? (Jo === 0 && (Jo = Jm()),
    Jo) : (e = me,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : lp(e.type)),
    e) : 1
}
function Mt(e, t, n, r) {
    if (50 < Ms)
        throw Ms = 0,
        rc = null,
        Error(G(185));
    Js(e, n, r),
    (!(ue & 2) || e !== Oe) && (e === Oe && (!(ue & 2) && (ra |= n),
    $e === 4 && an(e, _e)),
    tt(e, r),
    n === 1 && ue === 0 && !(t.mode & 1) && (Or = Re() + 500,
    Jl && Nn()))
}
function tt(e, t) {
    var n = e.callbackNode;
    s1(e, t);
    var r = dl(e, e === Oe ? _e : 0);
    if (r === 0)
        n !== null && od(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && od(n),
        t === 1)
            e.tag === 0 ? ry(Qd.bind(null, e)) : Np(Qd.bind(null, e)),
            J1(function() {
                !(ue & 6) && Nn()
            }),
            n = null;
        else {
            switch (ep(r)) {
            case 1:
                n = Kc;
                break;
            case 4:
                n = Qm;
                break;
            case 16:
                n = ul;
                break;
            case 536870912:
                n = Zm;
                break;
            default:
                n = ul
            }
            n = bx(n, xx.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function xx(e, t) {
    if (Zo = -1,
    Jo = 0,
    ue & 6)
        throw Error(G(327));
    var n = e.callbackNode;
    if (Nr() && e.callbackNode !== n)
        return null;
    var r = dl(e, e === Oe ? _e : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Rl(e, r);
    else {
        t = r;
        var s = ue;
        ue |= 2;
        var o = yx();
        (Oe !== e || _e !== t) && (Wt = null,
        Or = Re() + 500,
        zn(e, t));
        do
            try {
                Sy();
                break
            } catch (i) {
                gx(e, i)
            }
        while (!0);
        au(),
        Ml.current = o,
        ue = s,
        Ce !== null ? t = 0 : (Oe = null,
        _e = 0,
        t = $e)
    }
    if (t !== 0) {
        if (t === 2 && (s = Ai(e),
        s !== 0 && (r = s,
        t = sc(e, s))),
        t === 1)
            throw n = Gs,
            zn(e, 0),
            an(e, r),
            tt(e, Re()),
            n;
        if (t === 6)
            an(e, r);
        else {
            if (s = e.current.alternate,
            !(r & 30) && !jy(s) && (t = Rl(e, r),
            t === 2 && (o = Ai(e),
            o !== 0 && (r = o,
            t = sc(e, o))),
            t === 1))
                throw n = Gs,
                zn(e, 0),
                an(e, r),
                tt(e, Re()),
                n;
            switch (e.finishedWork = s,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(G(345));
            case 2:
                Ln(e, Qe, Wt);
                break;
            case 3:
                if (an(e, r),
                (r & 130023424) === r && (t = ju + 500 - Re(),
                10 < t)) {
                    if (dl(e, 0) !== 0)
                        break;
                    if (s = e.suspendedLanes,
                    (s & r) !== r) {
                        Ke(),
                        e.pingedLanes |= e.suspendedLanes & s;
                        break
                    }
                    e.timeoutHandle = _i(Ln.bind(null, e, Qe, Wt), t);
                    break
                }
                Ln(e, Qe, Wt);
                break;
            case 4:
                if (an(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                s = -1; 0 < r; ) {
                    var a = 31 - Nt(r);
                    o = 1 << a,
                    a = t[a],
                    a > s && (s = a),
                    r &= ~o
                }
                if (r = s,
                r = Re() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ky(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = _i(Ln.bind(null, e, Qe, Wt), r);
                    break
                }
                Ln(e, Qe, Wt);
                break;
            case 5:
                Ln(e, Qe, Wt);
                break;
            default:
                throw Error(G(329))
            }
        }
    }
    return tt(e, Re()),
    e.callbackNode === n ? xx.bind(null, e) : null
}
function sc(e, t) {
    var n = Ns;
    return e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
    e = Rl(e, t),
    e !== 2 && (t = Qe,
    Qe = n,
    t !== null && oc(t)),
    e
}
function oc(e) {
    Qe === null ? Qe = e : Qe.push.apply(Qe, e)
}
function jy(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r]
                      , o = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Et(o(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function an(e, t) {
    for (t &= ~ku,
    t &= ~ra,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Nt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Qd(e) {
    if (ue & 6)
        throw Error(G(327));
    Nr();
    var t = dl(e, 0);
    if (!(t & 1))
        return tt(e, Re()),
        null;
    var n = Rl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ai(e);
        r !== 0 && (t = r,
        n = sc(e, r))
    }
    if (n === 1)
        throw n = Gs,
        zn(e, 0),
        an(e, t),
        tt(e, Re()),
        n;
    if (n === 6)
        throw Error(G(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Ln(e, Qe, Wt),
    tt(e, Re()),
    null
}
function bu(e, t) {
    var n = ue;
    ue |= 1;
    try {
        return e(t)
    } finally {
        ue = n,
        ue === 0 && (Or = Re() + 500,
        Jl && Nn())
    }
}
function Vn(e) {
    fn !== null && fn.tag === 0 && !(ue & 6) && Nr();
    var t = ue;
    ue |= 1;
    var n = pt.transition
      , r = me;
    try {
        if (pt.transition = null,
        me = 1,
        e)
            return e()
    } finally {
        me = r,
        pt.transition = n,
        ue = t,
        !(ue & 6) && Nn()
    }
}
function Su() {
    rt = hr.current,
    ge(hr)
}
function zn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Z1(n)),
    Ce !== null)
        for (n = Ce.return; n !== null; ) {
            var r = n;
            switch (su(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && xl();
                break;
            case 3:
                $r(),
                ge(Je),
                ge(Be),
                hu();
                break;
            case 5:
                fu(r);
                break;
            case 4:
                $r();
                break;
            case 13:
                ge(we);
                break;
            case 19:
                ge(we);
                break;
            case 10:
                iu(r.type._context);
                break;
            case 22:
            case 23:
                Su()
            }
            n = n.return
        }
    if (Oe = e,
    Ce = e = wn(e.current, null),
    _e = rt = t,
    $e = 0,
    Gs = null,
    ku = ra = Bn = 0,
    Qe = Ns = null,
    On !== null) {
        for (t = 0; t < On.length; t++)
            if (n = On[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var s = r.next
                  , o = n.pending;
                if (o !== null) {
                    var a = o.next;
                    o.next = s,
                    r.next = a
                }
                n.pending = r
            }
        On = null
    }
    return e
}
function gx(e, t) {
    do {
        var n = Ce;
        try {
            if (au(),
            qo.current = Nl,
            Sl) {
                for (var r = ke.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null),
                    r = r.next
                }
                Sl = !1
            }
            if (Un = 0,
            Pe = Le = ke = null,
            bs = !1,
            Bs = 0,
            wu.current = null,
            n === null || n.return === null) {
                $e = 1,
                Gs = t,
                Ce = null;
                break
            }
            e: {
                var o = e
                  , a = n.return
                  , i = n
                  , c = t;
                if (t = _e,
                i.flags |= 32768,
                c !== null && typeof c == "object" && typeof c.then == "function") {
                    var u = c
                      , d = i
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var m = d.alternate;
                        m ? (d.updateQueue = m.updateQueue,
                        d.memoizedState = m.memoizedState,
                        d.lanes = m.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var y = _d(a);
                    if (y !== null) {
                        y.flags &= -257,
                        zd(y, a, i, o, t),
                        y.mode & 1 && Id(o, u, t),
                        t = y,
                        c = u;
                        var g = t.updateQueue;
                        if (g === null) {
                            var p = new Set;
                            p.add(c),
                            t.updateQueue = p
                        } else
                            g.add(c);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Id(o, u, t),
                            Nu();
                            break e
                        }
                        c = Error(G(426))
                    }
                } else if (ve && i.mode & 1) {
                    var k = _d(a);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256),
                        zd(k, a, i, o, t),
                        ou(Pr(c, i));
                        break e
                    }
                }
                o = c = Pr(c, i),
                $e !== 4 && ($e = 2),
                Ns === null ? Ns = [o] : Ns.push(o),
                o = a;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var v = ex(o, c, t);
                        Cd(o, v);
                        break e;
                    case 1:
                        i = c;
                        var x = o.type
                          , w = o.stateNode;
                        if (!(o.flags & 128) && (typeof x.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (yn === null || !yn.has(w)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var b = tx(o, i, t);
                            Cd(o, b);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            wx(n)
        } catch (M) {
            t = M,
            Ce === n && n !== null && (Ce = n = n.return);
            continue
        }
        break
    } while (!0)
}
function yx() {
    var e = Ml.current;
    return Ml.current = Nl,
    e === null ? Nl : e
}
function Nu() {
    ($e === 0 || $e === 3 || $e === 2) && ($e = 4),
    Oe === null || !(Bn & 268435455) && !(ra & 268435455) || an(Oe, _e)
}
function Rl(e, t) {
    var n = ue;
    ue |= 2;
    var r = yx();
    (Oe !== e || _e !== t) && (Wt = null,
    zn(e, t));
    do
        try {
            by();
            break
        } catch (s) {
            gx(e, s)
        }
    while (!0);
    if (au(),
    ue = n,
    Ml.current = r,
    Ce !== null)
        throw Error(G(261));
    return Oe = null,
    _e = 0,
    $e
}
function by() {
    for (; Ce !== null; )
        vx(Ce)
}
function Sy() {
    for (; Ce !== null && !qg(); )
        vx(Ce)
}
function vx(e) {
    var t = jx(e.alternate, e, rt);
    e.memoizedProps = e.pendingProps,
    t === null ? wx(e) : Ce = t,
    wu.current = null
}
function wx(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = gy(n, t),
            n !== null) {
                n.flags &= 32767,
                Ce = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                $e = 6,
                Ce = null;
                return
            }
        } else if (n = xy(n, t, rt),
        n !== null) {
            Ce = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ce = t;
            return
        }
        Ce = t = e
    } while (t !== null);
    $e === 0 && ($e = 5)
}
function Ln(e, t, n) {
    var r = me
      , s = pt.transition;
    try {
        pt.transition = null,
        me = 1,
        Ny(e, t, n, r)
    } finally {
        pt.transition = s,
        me = r
    }
    return null
}
function Ny(e, t, n, r) {
    do
        Nr();
    while (fn !== null);
    if (ue & 6)
        throw Error(G(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(G(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (o1(e, o),
    e === Oe && (Ce = Oe = null,
    _e = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jo || (jo = !0,
    bx(ul, function() {
        return Nr(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = pt.transition,
        pt.transition = null;
        var a = me;
        me = 1;
        var i = ue;
        ue |= 4,
        wu.current = null,
        vy(e, n),
        mx(n, e),
        V1(Di),
        fl = !!Oi,
        Di = Oi = null,
        e.current = n,
        wy(n),
        Xg(),
        ue = i,
        me = a,
        pt.transition = o
    } else
        e.current = n;
    if (jo && (jo = !1,
    fn = e,
    Tl = s),
    o = e.pendingLanes,
    o === 0 && (yn = null),
    Jg(n.stateNode),
    tt(e, Re()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            s = t[n],
            r(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (El)
        throw El = !1,
        e = nc,
        nc = null,
        e;
    return Tl & 1 && e.tag !== 0 && Nr(),
    o = e.pendingLanes,
    o & 1 ? e === rc ? Ms++ : (Ms = 0,
    rc = e) : Ms = 0,
    Nn(),
    null
}
function Nr() {
    if (fn !== null) {
        var e = ep(Tl)
          , t = pt.transition
          , n = me;
        try {
            if (pt.transition = null,
            me = 16 > e ? 16 : e,
            fn === null)
                var r = !1;
            else {
                if (e = fn,
                fn = null,
                Tl = 0,
                ue & 6)
                    throw Error(G(331));
                var s = ue;
                for (ue |= 4,
                q = e.current; q !== null; ) {
                    var o = q
                      , a = o.child;
                    if (q.flags & 16) {
                        var i = o.deletions;
                        if (i !== null) {
                            for (var c = 0; c < i.length; c++) {
                                var u = i[c];
                                for (q = u; q !== null; ) {
                                    var d = q;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ss(8, d, o)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        q = f;
                                    else
                                        for (; q !== null; ) {
                                            d = q;
                                            var m = d.sibling
                                              , y = d.return;
                                            if (dx(d),
                                            d === u) {
                                                q = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = y,
                                                q = m;
                                                break
                                            }
                                            q = y
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var p = g.child;
                                if (p !== null) {
                                    g.child = null;
                                    do {
                                        var k = p.sibling;
                                        p.sibling = null,
                                        p = k
                                    } while (p !== null)
                                }
                            }
                            q = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && a !== null)
                        a.return = o,
                        q = a;
                    else
                        e: for (; q !== null; ) {
                            if (o = q,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ss(9, o, o.return)
                                }
                            var v = o.sibling;
                            if (v !== null) {
                                v.return = o.return,
                                q = v;
                                break e
                            }
                            q = o.return
                        }
                }
                var x = e.current;
                for (q = x; q !== null; ) {
                    a = q;
                    var w = a.child;
                    if (a.subtreeFlags & 2064 && w !== null)
                        w.return = a,
                        q = w;
                    else
                        e: for (a = x; q !== null; ) {
                            if (i = q,
                            i.flags & 2048)
                                try {
                                    switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        na(9, i)
                                    }
                                } catch (M) {
                                    Se(i, i.return, M)
                                }
                            if (i === a) {
                                q = null;
                                break e
                            }
                            var b = i.sibling;
                            if (b !== null) {
                                b.return = i.return,
                                q = b;
                                break e
                            }
                            q = i.return
                        }
                }
                if (ue = s,
                Nn(),
                Ft && typeof Ft.onPostCommitFiberRoot == "function")
                    try {
                        Ft.onPostCommitFiberRoot(Kl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            me = n,
            pt.transition = t
        }
    }
    return !1
}
function Zd(e, t, n) {
    t = Pr(n, t),
    t = ex(e, t, 1),
    e = gn(e, t, 1),
    t = Ke(),
    e !== null && (Js(e, 1, t),
    tt(e, t))
}
function Se(e, t, n) {
    if (e.tag === 3)
        Zd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Zd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (yn === null || !yn.has(r))) {
                    e = Pr(n, e),
                    e = tx(t, e, 1),
                    t = gn(t, e, 1),
                    e = Ke(),
                    t !== null && (Js(t, 1, e),
                    tt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function My(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ke(),
    e.pingedLanes |= e.suspendedLanes & n,
    Oe === e && (_e & n) === n && ($e === 4 || $e === 3 && (_e & 130023424) === _e && 500 > Re() - ju ? zn(e, 0) : ku |= n),
    tt(e, t)
}
function kx(e, t) {
    t === 0 && (e.mode & 1 ? (t = fo,
    fo <<= 1,
    !(fo & 130023424) && (fo = 4194304)) : t = 1);
    var n = Ke();
    e = Qt(e, t),
    e !== null && (Js(e, t, n),
    tt(e, n))
}
function Ey(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    kx(e, n)
}
function Ty(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(G(314))
    }
    r !== null && r.delete(t),
    kx(e, n)
}
var jx;
jx = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Je.current)
            Ze = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ze = !1,
                py(e, t, n);
            Ze = !!(e.flags & 131072)
        }
    else
        Ze = !1,
        ve && t.flags & 1048576 && Mp(t, vl, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Qo(e, t),
        e = t.pendingProps;
        var s = Ar(t, Be.current);
        Sr(t, n),
        s = pu(null, t, r, e, s, n);
        var o = xu();
        return t.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        et(r) ? (o = !0,
        gl(t)) : o = !1,
        t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        uu(t),
        s.updater = ta,
        t.stateNode = s,
        s._reactInternals = t,
        Vi(t, r, e, n),
        t = Ki(null, t, r, !0, o, n)) : (t.tag = 0,
        ve && o && ru(t),
        Ge(null, t, s, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Qo(e, t),
            e = t.pendingProps,
            s = r._init,
            r = s(r._payload),
            t.type = r,
            s = t.tag = Ay(r),
            e = wt(r, e),
            s) {
            case 0:
                t = Gi(null, t, r, e, n);
                break e;
            case 1:
                t = Wd(null, t, r, e, n);
                break e;
            case 11:
                t = Fd(null, t, r, e, n);
                break e;
            case 14:
                t = Hd(null, t, r, wt(r.type, e), n);
                break e
            }
            throw Error(G(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : wt(r, s),
        Gi(e, t, r, s, n);
    case 1:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : wt(r, s),
        Wd(e, t, r, s, n);
    case 3:
        e: {
            if (ox(t),
            e === null)
                throw Error(G(387));
            r = t.pendingProps,
            o = t.memoizedState,
            s = o.element,
            Lp(e, t),
            jl(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    s = Pr(Error(G(423)), t),
                    t = Ud(e, t, r, n, s);
                    break e
                } else if (r !== s) {
                    s = Pr(Error(G(424)), t),
                    t = Ud(e, t, r, n, s);
                    break e
                } else
                    for (ot = xn(t.stateNode.containerInfo.firstChild),
                    lt = t,
                    ve = !0,
                    jt = null,
                    n = Ap(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Cr(),
                r === s) {
                    t = Zt(e, t, n);
                    break e
                }
                Ge(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return $p(t),
        e === null && Wi(t),
        r = t.type,
        s = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        a = s.children,
        Ii(r, s) ? a = null : o !== null && Ii(r, o) && (t.flags |= 32),
        sx(e, t),
        Ge(e, t, a, n),
        t.child;
    case 6:
        return e === null && Wi(t),
        null;
    case 13:
        return lx(e, t, n);
    case 4:
        return du(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Lr(t, null, r, n) : Ge(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : wt(r, s),
        Fd(e, t, r, s, n);
    case 7:
        return Ge(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ge(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ge(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            s = t.pendingProps,
            o = t.memoizedProps,
            a = s.value,
            pe(wl, r._currentValue),
            r._currentValue = a,
            o !== null)
                if (Et(o.value, a)) {
                    if (o.children === s.children && !Je.current) {
                        t = Zt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var i = o.dependencies;
                        if (i !== null) {
                            a = o.child;
                            for (var c = i.firstContext; c !== null; ) {
                                if (c.context === r) {
                                    if (o.tag === 1) {
                                        c = Kt(-1, n & -n),
                                        c.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? c.next = c : (c.next = d.next,
                                            d.next = c),
                                            u.pending = c
                                        }
                                    }
                                    o.lanes |= n,
                                    c = o.alternate,
                                    c !== null && (c.lanes |= n),
                                    Ui(o.return, n, t),
                                    i.lanes |= n;
                                    break
                                }
                                c = c.next
                            }
                        } else if (o.tag === 10)
                            a = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (a = o.return,
                            a === null)
                                throw Error(G(341));
                            a.lanes |= n,
                            i = a.alternate,
                            i !== null && (i.lanes |= n),
                            Ui(a, n, t),
                            a = o.sibling
                        } else
                            a = o.child;
                        if (a !== null)
                            a.return = o;
                        else
                            for (a = o; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (o = a.sibling,
                                o !== null) {
                                    o.return = a.return,
                                    a = o;
                                    break
                                }
                                a = a.return
                            }
                        o = a
                    }
            Ge(e, t, s.children, n),
            t = t.child
        }
        return t;
    case 9:
        return s = t.type,
        r = t.pendingProps.children,
        Sr(t, n),
        s = xt(s),
        r = r(s),
        t.flags |= 1,
        Ge(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        s = wt(r, t.pendingProps),
        s = wt(r.type, s),
        Hd(e, t, r, s, n);
    case 15:
        return nx(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : wt(r, s),
        Qo(e, t),
        t.tag = 1,
        et(r) ? (e = !0,
        gl(t)) : e = !1,
        Sr(t, n),
        Jp(t, r, s),
        Vi(t, r, s, n),
        Ki(null, t, r, !0, e, n);
    case 19:
        return ax(e, t, n);
    case 22:
        return rx(e, t, n)
    }
    throw Error(G(156, t.tag))
}
;
function bx(e, t) {
    return Xm(e, t)
}
function Ry(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function mt(e, t, n, r) {
    return new Ry(e,t,n,r)
}
function Mu(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Ay(e) {
    if (typeof e == "function")
        return Mu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Vc)
            return 11;
        if (e === Yc)
            return 14
    }
    return 2
}
function wn(e, t) {
    var n = e.alternate;
    return n === null ? (n = mt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function el(e, t, n, r, s, o) {
    var a = 2;
    if (r = e,
    typeof e == "function")
        Mu(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case rr:
            return Fn(n.children, s, o, t);
        case Bc:
            a = 8,
            s |= 8;
            break;
        case pi:
            return e = mt(12, n, t, s | 2),
            e.elementType = pi,
            e.lanes = o,
            e;
        case xi:
            return e = mt(13, n, t, s),
            e.elementType = xi,
            e.lanes = o,
            e;
        case gi:
            return e = mt(19, n, t, s),
            e.elementType = gi,
            e.lanes = o,
            e;
        case $m:
            return sa(n, s, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Cm:
                    a = 10;
                    break e;
                case Lm:
                    a = 9;
                    break e;
                case Vc:
                    a = 11;
                    break e;
                case Yc:
                    a = 14;
                    break e;
                case rn:
                    a = 16,
                    r = null;
                    break e
                }
            throw Error(G(130, e == null ? e : typeof e, ""))
        }
    return t = mt(a, n, t, s),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Fn(e, t, n, r) {
    return e = mt(7, e, r, t),
    e.lanes = n,
    e
}
function sa(e, t, n, r) {
    return e = mt(22, e, r, t),
    e.elementType = $m,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Fa(e, t, n) {
    return e = mt(6, e, null, t),
    e.lanes = n,
    e
}
function Ha(e, t, n) {
    return t = mt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Cy(e, t, n, r, s) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ka(0),
    this.expirationTimes = ka(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ka(0),
    this.identifierPrefix = r,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function Eu(e, t, n, r, s, o, a, i, c) {
    return e = new Cy(e,t,n,i,c),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = mt(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    uu(o),
    e
}
function Ly(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: nr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Sx(e) {
    if (!e)
        return jn;
    e = e._reactInternals;
    e: {
        if (Kn(e) !== e || e.tag !== 1)
            throw Error(G(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (et(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(G(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (et(n))
            return Sp(e, n, t)
    }
    return t
}
function Nx(e, t, n, r, s, o, a, i, c) {
    return e = Eu(n, r, !0, e, s, o, a, i, c),
    e.context = Sx(null),
    n = e.current,
    r = Ke(),
    s = vn(n),
    o = Kt(r, s),
    o.callback = t ?? null,
    gn(n, o, s),
    e.current.lanes = s,
    Js(e, s, r),
    tt(e, r),
    e
}
function oa(e, t, n, r) {
    var s = t.current
      , o = Ke()
      , a = vn(s);
    return n = Sx(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Kt(o, a),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = gn(s, t, a),
    e !== null && (Mt(e, s, a, o),
    Ko(e, s, a)),
    a
}
function Al(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Jd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Tu(e, t) {
    Jd(e, t),
    (e = e.alternate) && Jd(e, t)
}
function $y() {
    return null
}
var Mx = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ru(e) {
    this._internalRoot = e
}
la.prototype.render = Ru.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(G(409));
    oa(e, t, null, null)
}
;
la.prototype.unmount = Ru.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Vn(function() {
            oa(null, e, null, null)
        }),
        t[Xt] = null
    }
}
;
function la(e) {
    this._internalRoot = e
}
la.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = rp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++)
            ;
        ln.splice(n, 0, e),
        n === 0 && op(e)
    }
}
;
function Au(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function aa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function ef() {}
function Py(e, t, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = Al(a);
                o.call(u)
            }
        }
        var a = Nx(t, r, e, 0, null, !1, !1, "", ef);
        return e._reactRootContainer = a,
        e[Xt] = a.current,
        zs(e.nodeType === 8 ? e.parentNode : e),
        Vn(),
        a
    }
    for (; s = e.lastChild; )
        e.removeChild(s);
    if (typeof r == "function") {
        var i = r;
        r = function() {
            var u = Al(c);
            i.call(u)
        }
    }
    var c = Eu(e, 0, !1, null, null, !1, !1, "", ef);
    return e._reactRootContainer = c,
    e[Xt] = c.current,
    zs(e.nodeType === 8 ? e.parentNode : e),
    Vn(function() {
        oa(t, c, n, r)
    }),
    c
}
function ia(e, t, n, r, s) {
    var o = n._reactRootContainer;
    if (o) {
        var a = o;
        if (typeof s == "function") {
            var i = s;
            s = function() {
                var c = Al(a);
                i.call(c)
            }
        }
        oa(t, a, e, s)
    } else
        a = Py(n, t, e, s, r);
    return Al(a)
}
tp = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = os(t.pendingLanes);
            n !== 0 && (qc(t, n | 1),
            tt(t, Re()),
            !(ue & 6) && (Or = Re() + 500,
            Nn()))
        }
        break;
    case 13:
        Vn(function() {
            var r = Qt(e, 1);
            if (r !== null) {
                var s = Ke();
                Mt(r, e, 1, s)
            }
        }),
        Tu(e, 1)
    }
}
;
Xc = function(e) {
    if (e.tag === 13) {
        var t = Qt(e, 134217728);
        if (t !== null) {
            var n = Ke();
            Mt(t, e, 134217728, n)
        }
        Tu(e, 134217728)
    }
}
;
np = function(e) {
    if (e.tag === 13) {
        var t = vn(e)
          , n = Qt(e, t);
        if (n !== null) {
            var r = Ke();
            Mt(n, e, t, r)
        }
        Tu(e, t)
    }
}
;
rp = function() {
    return me
}
;
sp = function(e, t) {
    var n = me;
    try {
        return me = e,
        t()
    } finally {
        me = n
    }
}
;
Ei = function(e, t, n) {
    switch (t) {
    case "input":
        if (wi(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var s = Zl(r);
                    if (!s)
                        throw Error(G(90));
                    Om(r),
                    wi(r, s)
                }
            }
        }
        break;
    case "textarea":
        Im(e, n);
        break;
    case "select":
        t = n.value,
        t != null && wr(e, !!n.multiple, t, !1)
    }
}
;
Bm = bu;
Vm = Vn;
var Oy = {
    usingClientEntryPoint: !1,
    Events: [to, ar, Zl, Wm, Um, bu]
}
  , Gr = {
    findFiberByHostInstance: Pn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Dy = {
    bundleType: Gr.bundleType,
    version: Gr.version,
    rendererPackageName: Gr.rendererPackageName,
    rendererConfig: Gr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Km(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Gr.findFiberByHostInstance || $y,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bo.isDisabled && bo.supportsFiber)
        try {
            Kl = bo.inject(Dy),
            Ft = bo
        } catch {}
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oy;
it.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Au(t))
        throw Error(G(200));
    return Ly(e, t, null, n)
}
;
it.createRoot = function(e, t) {
    if (!Au(e))
        throw Error(G(299));
    var n = !1
      , r = ""
      , s = Mx;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    t = Eu(e, 1, !1, null, null, n, !1, r, s),
    e[Xt] = t.current,
    zs(e.nodeType === 8 ? e.parentNode : e),
    new Ru(t)
}
;
it.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(G(188)) : (e = Object.keys(e).join(","),
        Error(G(268, e)));
    return e = Km(t),
    e = e === null ? null : e.stateNode,
    e
}
;
it.flushSync = function(e) {
    return Vn(e)
}
;
it.hydrate = function(e, t, n) {
    if (!aa(t))
        throw Error(G(200));
    return ia(null, e, t, !0, n)
}
;
it.hydrateRoot = function(e, t, n) {
    if (!Au(e))
        throw Error(G(405));
    var r = n != null && n.hydratedSources || null
      , s = !1
      , o = ""
      , a = Mx;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    t = Nx(t, null, e, 1, n ?? null, s, !1, o, a),
    e[Xt] = t.current,
    zs(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            s = n._getVersion,
            s = s(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
    return new la(t)
}
;
it.render = function(e, t, n) {
    if (!aa(t))
        throw Error(G(200));
    return ia(null, e, t, !1, n)
}
;
it.unmountComponentAtNode = function(e) {
    if (!aa(e))
        throw Error(G(40));
    return e._reactRootContainer ? (Vn(function() {
        ia(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Xt] = null
        })
    }),
    !0) : !1
}
;
it.unstable_batchedUpdates = bu;
it.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!aa(n))
        throw Error(G(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(G(38));
    return ia(e, t, n, !1, r)
}
;
it.version = "18.3.1-next-f1338f8080-20240426";
function Ex() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ex)
        } catch (e) {
            console.error(e)
        }
}
Ex(),
Em.exports = it;
var Iy = Em.exports
  , tf = Iy;
hi.createRoot = tf.createRoot,
hi.hydrateRoot = tf.hydrateRoot;
function te({children: e, ...t}) {
    return l.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...t,
        children: e
    })
}
const Cl = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "3",
        y: "4",
        width: "18",
        height: "16",
        rx: "2"
    }), l.jsx("path", {
        d: "m7 9 3 3-3 3M13 15h4"
    })]
})
  , mr = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("path", {
        d: "M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3Z"
    }), l.jsx("path", {
        d: "m9 12 2 2 4-4"
    })]
})
  , Tx = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "3",
        y: "4",
        width: "18",
        height: "6",
        rx: "1.5"
    }), l.jsx("rect", {
        x: "3",
        y: "14",
        width: "18",
        height: "6",
        rx: "1.5"
    }), l.jsx("path", {
        d: "M7 7h.01M7 17h.01"
    })]
})
  , Es = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "5",
        y: "11",
        width: "14",
        height: "9",
        rx: "2"
    }), l.jsx("path", {
        d: "M8 11V8a4 4 0 0 1 8 0v3"
    })]
})
  , lc = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("path", {
        d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
    }), l.jsx("path", {
        d: "M14 3v5h5"
    }), l.jsx("rect", {
        x: "9",
        y: "13",
        width: "6",
        height: "4.5",
        rx: "1"
    })]
})
  , pr = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "8"
    }), l.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "3"
    })]
})
  , Cu = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "9"
    }), l.jsx("path", {
        d: "m8 12 3 3 5-6"
    })]
})
  , Lu = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "9"
    }), l.jsx("path", {
        d: "m9 9 6 6M15 9l-6 6"
    })]
})
  , tl = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v4"
    })
})
  , Rx = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("circle", {
        cx: "8",
        cy: "15",
        r: "4"
    }), l.jsx("path", {
        d: "m11 12 8-8M16 7l3 3M14 9l2 2"
    })]
})
  , ac = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "4",
        y: "4",
        width: "6",
        height: "7",
        rx: "3"
    }), l.jsx("path", {
        d: "M16 4v7M14 6l2-2M4 15v5M4 15l-1.5 1.5M14 15.5a3 3 0 0 1 6 0v3a3 3 0 0 1-6 0v-3Z"
    })]
})
  , _y = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("path", {
        d: "M4 5h6a7 7 0 0 1 0 14H4V5Z"
    }), l.jsx("path", {
        d: "M1 9h3M1 15h3M17 12h6"
    })]
})
  , zy = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "5",
        y: "3",
        width: "14",
        height: "18",
        rx: "2"
    }), l.jsx("path", {
        d: "M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"
    })]
})
  , nf = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M3 12h2l2-6 3 12 3-9 2 5 2-2h4"
    })
})
  , Fy = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2"
    }), l.jsx("path", {
        d: "M9 3v18M15 3v18M3 9h18M3 15h18"
    })]
})
  , Hy = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.3 1 2.5h6c0-1.2.4-1.9 1-2.5A6 6 0 0 0 12 3Z"
    })
})
  , rf = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M5 3v14a3 3 0 0 0 6 0V3M13 3v14a3 3 0 0 0 6 0V3M4 3h8M12 3h8"
    })
})
  , Wy = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "4",
        y: "11",
        width: "16",
        height: "10",
        rx: "2"
    }), l.jsx("path", {
        d: "M8 11V8a4 4 0 0 1 8 0v3M12 15v2"
    })]
})
  , Ax = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M18 5H7l6 7-6 7h11"
    })
})
  , Uy = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("path", {
        d: "M3 6h11v10H3zM14 9h4l3 3v4h-7"
    }), l.jsx("circle", {
        cx: "7",
        cy: "18",
        r: "1.8"
    }), l.jsx("circle", {
        cx: "17",
        cy: "18",
        r: "1.8"
    })]
})
  , By = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M12 3v7M8 10h8v3H8zM12 13v5M9 21h6"
    })
})
  , Vy = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M14 3 11 11M7 11h8l2 5H5zM7 16l-1 5M10 16v5M13 16v5M16 16l1 5"
    })
})
  , Yy = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6"
    })
})
  , Gy = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "14",
        rx: "2"
    }), l.jsx("path", {
        d: "m3 7 9 6 9-6"
    })]
})
  , Ky = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "5",
        y: "2.5",
        width: "14",
        height: "19",
        rx: "2"
    }), l.jsx("path", {
        d: "M9 7h.01M12 7h.01M15 7h.01M9 11h.01M12 11h.01M15 11h.01M9 15h.01M12 15h.01M15 15h.01M12 18.5h.01"
    })]
})
  , qy = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "8.5"
    }), l.jsx("path", {
        d: "M12 12 15.5 7.5M12 2v2M12 20v2M2 12h2M20 12h2"
    })]
})
  , Xy = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2"
    }), l.jsx("path", {
        d: "M8 3v9h4M16 21v-9M12 7h5M3 16h8"
    })]
})
  , Qy = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("circle", {
        cx: "6",
        cy: "6",
        r: "3"
    }), l.jsx("circle", {
        cx: "6",
        cy: "18",
        r: "3"
    }), l.jsx("path", {
        d: "M8.6 7.6 20 18M8.6 16.4 20 6"
    })]
})
  , Zy = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"
    })
})
  , Jy = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M4 8h13l-3-3M20 16H7l3 3"
    })
})
  , ev = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("path", {
        d: "M4.5 17a8 8 0 1 1 15 0"
    }), l.jsx("path", {
        d: "m12 13 4-4"
    }), l.jsx("circle", {
        cx: "12",
        cy: "13",
        r: "1"
    })]
})
  , tv = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("path", {
        d: "M3 18h9l6-12"
    }), l.jsx("path", {
        d: "m14 4 6 6"
    })]
})
  , nv = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("circle", {
        cx: "12",
        cy: "10",
        r: "2"
    }), l.jsx("path", {
        d: "M12 12v9M8.5 6.5a5 5 0 0 0 0 7M15.5 6.5a5 5 0 0 1 0 7M5.5 3.5a9.5 9.5 0 0 0 0 13M18.5 3.5a9.5 9.5 0 0 1 0 13"
    })]
})
  , rv = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M3 5h18l-7 8v6l-4 2v-8z"
    })
})
  , sv = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("circle", {
        cx: "6",
        cy: "19",
        r: "2"
    }), l.jsx("circle", {
        cx: "18",
        cy: "5",
        r: "2"
    }), l.jsx("path", {
        d: "M8 19h7a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h7"
    })]
})
  , ov = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "5",
        y: "4",
        width: "14",
        height: "17",
        rx: "2"
    }), l.jsx("path", {
        d: "M9 4V3h6v1M9 10h6M9 14h6M9 18h3"
    })]
})
  , lv = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2"
    }), l.jsx("path", {
        d: "M3 9h18M3 15h18M9 3v18M15 3v18"
    }), l.jsx("path", {
        d: "M10 10h4v4h-4z",
        fill: "currentColor"
    })]
})
  , av = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("circle", {
        cx: "5",
        cy: "18",
        r: "2"
    }), l.jsx("circle", {
        cx: "19",
        cy: "6",
        r: "2"
    }), l.jsx("path", {
        d: "M7 18h3l4-8h3v-2"
    })]
})
  , iv = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M2 15h4l2-2 2 2 2-12 2 18 2-6h6"
    })
})
  , cv = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2"
    }), l.jsx("path", {
        d: "M3 10h11M10 3v7M14 14h7M14 14v7"
    })]
})
  , uv = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "8",
        y: "8",
        width: "13",
        height: "13",
        rx: "1.5"
    }), l.jsx("path", {
        d: "M3 10h2M3 14h2M3 18h2M10 3v2M14 3v2M18 3v2"
    }), l.jsx("path", {
        d: "M11 11h3v3h-3zM14 14h4v4h-4z",
        fill: "currentColor"
    })]
})
  , dv = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2"
    }), l.jsx("path", {
        d: "M3 9h18M3 15h18M9 3v18M15 3v18"
    }), l.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "1.5",
        fill: "currentColor"
    })]
})
  , fv = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("rect", {
        x: "3",
        y: "4",
        width: "5",
        height: "5",
        rx: "1"
    }), l.jsx("rect", {
        x: "9.5",
        y: "4",
        width: "5",
        height: "5",
        rx: "1"
    }), l.jsx("rect", {
        x: "16",
        y: "4",
        width: "5",
        height: "5",
        rx: "1",
        fill: "currentColor"
    }), l.jsx("path", {
        d: "M20 17H5l3-3M5 17l3 3"
    })]
})
  , hv = e => l.jsx(te, {
    ...e,
    children: l.jsx("path", {
        d: "M3 7h4M10 7h3M16 7h5M3 12h2M8 12h5M16 12h3M3 17h5M11 17h3M17 17h4"
    })
})
  , mv = e => l.jsxs(te, {
    ...e,
    children: [l.jsx("circle", {
        cx: "5",
        cy: "6",
        r: "1.8"
    }), l.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "1.8"
    }), l.jsx("circle", {
        cx: "19",
        cy: "6",
        r: "1.8"
    }), l.jsx("path", {
        d: "M6.4 7.4 10.6 10.6M13.4 10.6 17.6 7.4M3 19h18"
    })]
});
function re({left: e, total: t, hideText: n}) {
    const r = t > 0 ? Math.min(1, Math.max(0, e / t)) : 0;
    return l.jsxs("div", {
        className: "flex w-full items-center gap-3",
        children: [l.jsx("div", {
            className: "h-1.5 flex-1 overflow-hidden rounded-full bg-track",
            children: l.jsx("div", {
                className: `h-full origin-left ${r <= .25 ? "bg-warn" : "bg-accent"}`,
                style: {
                    transform: `scaleX(${r})`
                }
            })
        }), !n && l.jsxs("span", {
            className: "w-12 text-right font-mono text-xs text-muted",
            children: [(e / 1e3).toFixed(1), "s"]
        })]
    })
}
function ee({total: e, used: t, label: n}) {
    return l.jsxs("div", {
        className: "flex items-center gap-2 text-xs text-muted",
        children: [l.jsx("span", {
            children: n
        }), l.jsx("div", {
            className: "flex gap-1",
            children: Array.from({
                length: Math.min(e, 12)
            }, (r, s) => l.jsx("span", {
                className: `h-2.5 w-2.5 rounded-full ${s < e - t ? "bg-accent" : "bg-track"}`
            }, s))
        })]
    })
}
function ne(e) {
    const t = h.useRef(e);
    t.current = e,
    h.useEffect( () => {
        const n = r => t.current(r);
        return window.addEventListener("keydown", n),
        () => window.removeEventListener("keydown", n)
    }
    , [])
}
function ca(e) {
    const t = h.useRef(e);
    t.current = e,
    h.useEffect( () => {
        const n = r => t.current(r);
        return window.addEventListener("keyup", n),
        () => window.removeEventListener("keyup", n)
    }
    , [])
}
function De(e, t=!0) {
    const n = h.useRef(e);
    n.current = e,
    h.useEffect( () => {
        if (!t)
            return;
        let r = 0
          , s = -1;
        const o = a => {
            s < 0 && (s = a);
            const i = Math.min(.05, (a - s) / 1e3);
            s = a,
            n.current(i, a),
            r = requestAnimationFrame(o)
        }
        ;
        return r = requestAnimationFrame(o),
        () => cancelAnimationFrame(r)
    }
    , [t])
}
function pv(e, t) {
    const n = () => Math.min(window.innerWidth * .94 / e, window.innerHeight * .94 / t, 1.6)
      , [r,s] = h.useState(n);
    return h.useEffect( () => {
        const o = () => s(n());
        return o(),
        window.addEventListener("resize", o),
        () => window.removeEventListener("resize", o)
    }
    , [e, t]),
    r
}
function se(e, t, n=!0) {
    const r = h.useRef(t);
    r.current = t;
    const s = h.useRef({
        total: e,
        deadline: 0,
        fired: !1
    })
      , [o,a] = h.useState(e)
      , [i,c] = h.useState(0);
    return h.useEffect( () => {
        if (!n || e <= 0)
            return;
        const u = s.current;
        u.deadline = performance.now() + u.total,
        u.fired = !1,
        a(u.total);
        const d = setInterval( () => {
            const f = Math.max(0, u.deadline - performance.now());
            a(f),
            f <= 0 && !u.fired && (u.fired = !0,
            clearInterval(d),
            r.current())
        }
        , 50);
        return () => clearInterval(d)
    }
    , [n, i, e]),
    {
        left: o,
        total: s.current.total,
        frac: s.current.total > 0 ? o / s.current.total : 0,
        penalize(u) {
            s.current.deadline -= u
        },
        reset(u) {
            s.current.total = u ?? s.current.total,
            c(d => d + 1)
        }
    }
}
const he = (e, t) => e + Math.random() * (t - e)
  , K = (e, t) => Math.floor(he(e, t + 1))
  , Y = (e, t, n) => Math.min(n, Math.max(t, e));
function ie(e) {
    const t = [...e];
    for (let n = t.length - 1; n > 0; n--) {
        const r = Math.floor(Math.random() * (n + 1));
        [t[n],t[r]] = [t[r], t[n]]
    }
    return t
}
const nl = {};
let Cx = !1;
function xv() {
    Cx = !0
}
const Lx = e => nl[e] ?? (nl[e] = new Audio(`sounds/${e}.ogg`));
function gv(e) {
    try {
        Lx(e)
    } catch {}
}
function W(e, t=.7) {
    if (!Cx)
        try {
            const n = Lx(e);
            n.volume = t,
            n.currentTime = 0,
            n.play().catch( () => {}
            )
        } catch {}
}
function Wa(e) {
    const t = nl[e];
    t && (t.pause(),
    t.currentTime = 0)
}
const yv = 10
  , vv = 700
  , wv = 250
  , kv = 900
  , sf = 1200
  , jv = 700
  , bv = ["mirror", "flip", "cw", "ccw"]
  , Sv = {
    mirror: "mirrored left to right",
    flip: "upside down",
    cw: "rotated 90° clockwise",
    ccw: "rotated 90° counter-clockwise"
};
function ic(e, t, n) {
    const r = Math.floor(e / t)
      , s = e % t;
    return n === "mirror" ? r * t + (t - 1 - s) : n === "flip" ? (t - 1 - r) * t + s : n === "cw" ? s * t + (t - 1 - r) : (t - 1 - s) * t + r
}
function Nv(e, t, n) {
    const r = t * t;
    let s = [];
    for (let o = 0; o < 20; o++) {
        s = [];
        for (let a = 0; a < e; a++) {
            let i = Math.floor(Math.random() * r);
            a && i === s[a - 1] && (i = (i + 1 + Math.floor(Math.random() * (r - 1))) % r),
            s.push(i)
        }
        if (s.some(a => ic(a, t, n) !== a))
            return s
    }
    return s
}
function Mv({settings: e, finish: t}) {
    const n = Y(Math.round(e.size), 3, 5)
      , r = Y(Math.round(e.length), 3, 8)
      , s = Math.max(1, Math.round(e.rounds))
      , o = Math.max(1, Math.round(e.lives))
      , a = Math.max(250, e.showMs)
      , i = Math.max(80, e.gapMs)
      , [c] = h.useState( () => ie(bv))
      , [u,d] = h.useState({
        path: [],
        turn: "mirror"
    })
      , [f,m] = h.useState(0)
      , [y,g] = h.useState("watch")
      , [p,k] = h.useState(-1)
      , [v,x] = h.useState(0)
      , [w,b] = h.useState(null)
      , [M,N] = h.useState(0)
      , [j,S] = h.useState(0)
      , [R,C] = h.useState(!1)
      , T = h.useRef({
        cleared: 0,
        wrong: 0,
        boards: 0,
        done: !1,
        phase: "watch",
        k: 0,
        board: u
    })
      , _ = h.useRef([])
      , P = (F, z) => void _.current.push(setTimeout(F, z));
    h.useEffect( () => () => _.current.forEach(clearTimeout), []);
    const L = se(e.timeLimit, () => D(!1, "time"), !R)
      , D = (F, z) => {
        const U = T.current;
        if (!U.done) {
            if (U.done = !0,
            C(!0),
            F)
                return P( () => t(!0), jv);
            if (W("wrong", .4),
            z === "time")
                return t(!1, "time");
            P( () => t(!1, "error"), sf)
        }
    }
      , E = F => {
        T.current.phase = F,
        g(F)
    }
    ;
    h.useEffect( () => {
        let F = !1;
        const z = O => new Promise(H => _.current.push(setTimeout(H, O)))
          , U = c[T.current.boards++ % c.length]
          , B = {
            path: Nv(Y(r + T.current.cleared, r, yv), n, U),
            turn: U
        };
        return T.current.board = B,
        T.current.k = 0,
        d(B),
        x(0),
        k(-1),
        b(null),
        E("watch"),
        (async () => {
            await z(vv);
            for (const O of B.path) {
                if (F || T.current.done)
                    return;
                k(O),
                W("beep", .12),
                await z(a),
                k(-1),
                await z(i)
            }
            !F && !T.current.done && E("ask")
        }
        )(),
        () => {
            F = !0
        }
    }
    , [f]);
    const A = F => {
        const z = T.current;
        if (z.done || z.phase !== "ask")
            return;
        const U = z.board;
        if (F !== ic(U.path[z.k], n, U.turn))
            return z.wrong += 1,
            S(z.wrong),
            b({
                cell: F,
                kind: "bad"
            }),
            E("bad"),
            z.wrong >= o ? D(!1, "error") : (W("wrong", .4),
            P( () => m(B => B + 1), sf));
        if (z.k += 1,
        x(z.k),
        b({
            cell: F,
            kind: "ok"
        }),
        P( () => b(B => B && B.cell === F && B.kind === "ok" ? null : B), wv),
        W("correct", .25),
        !(z.k < U.path.length)) {
            if (z.cleared += 1,
            N(z.cleared),
            E("ok"),
            W("correct", .4),
            z.cleared >= s)
                return D(!0);
            P( () => m(B => B + 1), kv)
        }
    }
    ;
    y === "ask" && ic(u.path[v], n, u.turn);
    const I = -1
      , $ = y !== "watch";
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [Math.min(M + 1, s), "/", s]
                })]
            }), l.jsx("span", {
                className: "text-fg",
                children: $ ? "Enter the path" : "Watch the path"
            }), l.jsx(ee, {
                total: o,
                used: j,
                label: "Errors"
            })]
        }), l.jsxs("div", {
            className: "flex flex-1 flex-col items-center justify-center gap-5",
            children: [l.jsx("div", {
                className: "h-5 text-center text-sm text-fg",
                children: $ && l.jsxs(l.Fragment, {
                    children: ["Enter it ", l.jsx("span", {
                        className: "text-accent",
                        children: Sv[u.turn]
                    }), l.jsxs("span", {
                        className: "ml-3 font-mono text-xs text-muted",
                        children: [v, "/", u.path.length]
                    })]
                })
            }), l.jsx("div", {
                className: "grid aspect-square w-[400px] gap-2",
                style: {
                    gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${n}, minmax(0, 1fr))`
                },
                children: Array.from({
                    length: n * n
                }, (F, z) => l.jsx("button", {
                    onMouseDown: () => A(z),
                    className: `relative rounded border-2 ${p === z ? "border-accent bg-accent" : (w == null ? void 0 : w.cell) === z ? w.kind === "ok" ? "border-accent bg-accent-soft" : "shake border-danger bg-danger-soft" : y === "ask" ? "cursor-pointer border-line bg-raised hover:border-accent-line" : "border-line bg-raised"}`,
                    children: I === z && l.jsx("span", {
                        className: "absolute top-1.5 left-1.5 h-1 w-1 rounded-full bg-accent-line"
                    })
                }, z))
            })]
        }), l.jsx("div", {
            className: "w-full",
            children: l.jsx(re, {
                left: L.left,
                total: L.total
            })
        })]
    })
}
const Ev = 8;
function Mr({i: e, className: t}) {
    const n = {
        fill: "currentColor",
        stroke: "none"
    }
      , r = {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2.6,
        strokeLinecap: "round"
    };
    return l.jsxs("svg", {
        viewBox: "0 0 24 24",
        className: t,
        children: [e === 0 && l.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "7.5",
            ...n
        }), e === 1 && l.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "6.5",
            ...r
        }), e === 2 && l.jsx("rect", {
            x: "5",
            y: "5",
            width: "14",
            height: "14",
            rx: "1.5",
            ...n
        }), e === 3 && l.jsx("path", {
            d: "M12 3 21 12 12 21 3 12Z",
            ...n
        }), e === 4 && l.jsx("path", {
            d: "M12 4 21 20H3Z",
            ...n
        }), e === 5 && l.jsx("path", {
            d: "M12 4v16M4 12h16",
            ...r
        }), e === 6 && l.jsx("path", {
            d: "M5 5l14 14M19 5 5 19",
            ...r
        }), e === 7 && l.jsx("path", {
            d: "M6.5 5v14M12 5v14M17.5 5v14",
            ...r
        })]
    })
}
const cc = 4
  , Mn = 84
  , Ua = -cc - 1.5
  , Tv = 800
  , of = 1e3
  , Rv = 700
  , Av = 3
  , $x = e => e[Math.floor(Math.random() * e.length)];
function Cv(e, t) {
    return Array.from({
        length: e
    }, () => $x(t))
}
function Lv(e, t, n) {
    const r = e.length
      , s = t.filter(c => e.includes(c))
      , o = [];
    for (; o.length < n; )
        o.push(...ie(["count", "after", "before"]));
    const a = new Set
      , i = [];
    for (const c of o.slice(0, n)) {
        let u = c
          , d = s;
        u === "after" ? d = s.filter(g => e.lastIndexOf(g) < r - 1) : u === "before" && (d = s.filter(g => e.indexOf(g) > 0)),
        d.length || (u = "count",
        d = s);
        const f = d.filter(g => !a.has(g))
          , m = $x(f.length ? f : d);
        a.add(m);
        const y = u === "count" ? e.filter(g => g === m).length : u === "after" ? e[e.lastIndexOf(m) + 1] : e[e.indexOf(m) - 1];
        i.push({
            kind: u,
            sym: m,
            answer: y
        })
    }
    return i
}
function $v({settings: e, finish: t}) {
    const n = Y(Math.round(e.symbols), 3, 6)
      , r = Math.max(300, e.interval)
      , s = Math.max(8, Math.round(Y(e.duration, 6e3, 25e3) / r))
      , o = Y(Math.round(e.questions), 1, 4)
      , a = Math.max(1, Math.round(e.lives))
      , [i] = h.useState( () => ie(Array.from({
        length: Ev
    }, (O, H) => H)).slice(0, n))
      , [c] = h.useState( () => Cv(s, i))
      , [u,d] = h.useState("stream")
      , [f,m] = h.useState(Math.floor(Ua))
      , [y,g] = h.useState([])
      , [p,k] = h.useState(0)
      , [v,x] = h.useState("")
      , [w,b] = h.useState(0)
      , [M,N] = h.useState(!1)
      , j = h.useRef(null)
      , S = h.useRef({
        pos: Ua,
        head: Math.floor(Ua),
        phase: "stream",
        qs: [],
        q: 0,
        digits: "",
        wrong: 0,
        done: !1
    })
      , R = h.useRef([])
      , C = (O, H) => void R.current.push(setTimeout(O, H));
    h.useEffect( () => () => R.current.forEach(clearTimeout), []);
    const T = se(e.timeLimit, () => _(!1, "time"), !M)
      , _ = (O, H) => {
        const V = S.current;
        if (!V.done) {
            if (V.done = !0,
            N(!0),
            O)
                return C( () => t(!0), Rv);
            if (W("wrong", .4),
            H === "time")
                return t(!1, "time");
            C( () => t(!1, "error"), of)
        }
    }
      , P = O => {
        S.current.phase = O,
        d(O)
    }
    ;
    De(O => {
        const H = S.current;
        if (H.phase !== "stream" || H.done)
            return;
        H.pos += O / (r / 1e3),
        j.current && (j.current.style.transform = `translateX(${-H.pos * Mn}px)`);
        const V = Math.floor(H.pos);
        V !== H.head && (H.head = V,
        m(V)),
        H.pos >= s && (H.qs = Lv(c, i, o),
        g(H.qs),
        P("ask"))
    }
    , u === "stream");
    const L = O => {
        const H = S.current;
        if (H.done || H.phase !== "ask")
            return;
        const V = H.qs[H.q].answer === O;
        if (V || (H.wrong += 1,
        b(H.wrong)),
        W(V ? "correct" : "wrong", .4),
        P(V ? "ok" : "bad"),
        H.wrong >= a)
            return _(!1, "error");
        if (H.q + 1 >= H.qs.length)
            return _(!0);
        C( () => {
            H.q += 1,
            H.digits = "",
            k(H.q),
            x(""),
            P("ask")
        }
        , V ? Tv : of)
    }
      , D = O => {
        const H = S.current;
        H.done || H.phase !== "ask" || H.qs[H.q].kind !== "count" || H.digits.length >= Av || (H.digits += O,
        x(H.digits))
    }
      , E = () => {
        const O = S.current;
        O.done || O.phase !== "ask" || (O.digits = O.digits.slice(0, -1),
        x(O.digits))
    }
      , A = () => {
        const O = S.current;
        O.digits && L(Number(O.digits))
    }
    ;
    ne(O => {
        const H = S.current;
        if (!(H.phase !== "ask" || H.done))
            if (H.qs[H.q].kind === "count")
                /^\d$/.test(O.key) ? D(O.key) : O.key === "Backspace" ? E() : O.key === "Enter" && A();
            else {
                const V = Number(O.key);
                V >= 1 && V <= n && L(i[V - 1])
            }
    }
    );
    const I = y[p]
      , $ = u !== "stream" && I
      , F = !1
      , z = Math.max(0, f - 1)
      , U = Math.min(s - 1, f + cc + 1)
      , B = u === "ok" ? "border-accent bg-accent-soft" : u === "bad" ? "shake border-danger bg-danger-soft" : "border-line bg-raised";
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: $ ? l.jsxs(l.Fragment, {
                    children: ["Question ", l.jsxs("span", {
                        className: "font-mono text-sm text-accent",
                        children: [p + 1, "/", y.length]
                    })]
                }) : "Stream"
            }), l.jsx("span", {
                className: "text-fg",
                children: $ ? "Report what passed" : "Watch the stream"
            }), l.jsx(ee, {
                total: a,
                used: w,
                label: "Errors"
            })]
        }), l.jsx("div", {
            className: "flex flex-1 flex-col items-center justify-center gap-7",
            children: $ ? l.jsxs(l.Fragment, {
                children: [l.jsxs("div", {
                    className: "max-w-sm text-center text-sm text-fg",
                    children: [I.kind === "count" ? "How many " : I.kind === "after" ? "Which packet came right after the last " : "Which packet came right before the first ", l.jsx(Mr, {
                        i: I.sym,
                        className: "inline h-5 w-5 align-text-bottom text-accent"
                    }), I.kind === "count" ? " passed?" : "?"]
                }), I.kind === "count" ? l.jsxs(l.Fragment, {
                    children: [l.jsxs("div", {
                        className: `relative flex h-16 w-28 items-center justify-center rounded border font-mono text-3xl text-accent ${B}`,
                        children: [v || l.jsx("span", {
                            className: "text-muted",
                            children: "0"
                        }), F]
                    }), l.jsx("div", {
                        className: "grid grid-cols-5 gap-2",
                        children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(O => l.jsx("button", {
                            onMouseDown: () => D(O),
                            className: "flex h-12 w-12 cursor-pointer items-center justify-center rounded border border-line bg-raised font-mono text-base text-fg hover:border-accent-line hover:bg-hover",
                            children: O
                        }, O))
                    }), l.jsxs("div", {
                        className: "flex gap-2",
                        children: [l.jsx("button", {
                            onMouseDown: E,
                            className: "cursor-pointer rounded border border-line px-4 py-1.5 text-xs text-fg hover:border-accent-line",
                            children: "Undo"
                        }), l.jsx("button", {
                            onMouseDown: A,
                            className: `rounded border px-4 py-1.5 text-xs ${v ? "cursor-pointer border-accent bg-accent text-accent-ink" : "border-line text-muted"}`,
                            children: "Confirm"
                        })]
                    })]
                }) : l.jsx("div", {
                    className: `flex flex-wrap justify-center gap-2 rounded border p-3 ${u === "ok" ? "border-accent" : u === "bad" ? "shake border-danger" : "border-transparent"}`,
                    children: i.map( (O, H) => l.jsxs("button", {
                        onMouseDown: () => L(O),
                        className: "relative flex h-14 w-14 cursor-pointer items-center justify-center rounded border border-line bg-raised hover:border-accent-line hover:bg-hover",
                        children: [l.jsx(Mr, {
                            i: O,
                            className: "h-7 w-7 text-fg"
                        }), l.jsx("span", {
                            className: "absolute right-1 bottom-0.5 font-mono text-[10px] text-muted",
                            children: H + 1
                        }), F]
                    }, O))
                })]
            }) : l.jsx("div", {
                className: "relative overflow-hidden rounded border border-line bg-raised",
                style: {
                    width: cc * Mn,
                    height: Mn + 16
                },
                children: l.jsx("div", {
                    ref: j,
                    className: "absolute inset-y-0 left-0",
                    style: {
                        transform: `translateX(${-S.current.pos * Mn}px)`
                    },
                    children: Array.from({
                        length: Math.max(0, U - z + 1)
                    }, (O, H) => z + H).map(O => l.jsx("div", {
                        className: "absolute flex items-center justify-center",
                        style: {
                            left: O * Mn,
                            top: 8,
                            width: Mn,
                            height: Mn
                        },
                        children: l.jsx(Mr, {
                            i: c[O],
                            className: "h-11 w-11 text-accent"
                        })
                    }, O))
                })
            })
        }), l.jsx("div", {
            className: "w-full",
            children: l.jsx(re, {
                left: T.left,
                total: T.total
            })
        })]
    })
}
const Pv = 12
  , Ov = 700
  , Dv = 900
  , lf = 1200
  , Iv = 700;
function _v(e, t, n) {
    const r = [];
    for (let o = 0; o < e; o++) {
        let a = Math.floor(Math.random() * t);
        o && a === r[o - 1] && (a = (a + 1 + Math.floor(Math.random() * (t - 1))) % t),
        r.push(a)
    }
    const s = ie(Array.from({
        length: e
    }, (o, a) => a)).slice(0, n).sort( (o, a) => a - o);
    return {
        seq: r,
        asked: s
    }
}
const zv = e => e.length > 1 ? `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}` : String(e[0]);
function Fv({settings: e, finish: t}) {
    const n = Y(Math.round(e.length), 4, 10)
      , r = Y(Math.round(e.ask), 1, Math.min(4, n - 2))
      , s = Y(Math.round(e.symbols), 4, 8)
      , o = Math.max(1, Math.round(e.rounds))
      , a = Math.max(1, Math.round(e.lives))
      , i = Math.max(250, e.showMs)
      , c = Math.max(80, e.gapMs)
      , [u,d] = h.useState({
        seq: [],
        asked: []
    })
      , [f,m] = h.useState(0)
      , [y,g] = h.useState("watch")
      , [p,k] = h.useState(-1)
      , [v,x] = h.useState(0)
      , [w,b] = h.useState([])
      , [M,N] = h.useState(0)
      , [j,S] = h.useState(0)
      , [R,C] = h.useState(!1)
      , T = h.useRef({
        cleared: 0,
        wrong: 0,
        done: !1,
        phase: "watch",
        entered: [],
        board: u
    })
      , _ = h.useRef([])
      , P = (U, B) => void _.current.push(setTimeout(U, B));
    h.useEffect( () => () => _.current.forEach(clearTimeout), []);
    const L = se(e.timeLimit, () => D(!1, "time"), !R)
      , D = (U, B) => {
        const O = T.current;
        if (!O.done) {
            if (O.done = !0,
            C(!0),
            U)
                return P( () => t(!0), Iv);
            if (W("wrong", .4),
            B === "time")
                return t(!1, "time");
            P( () => t(!1, "error"), lf)
        }
    }
      , E = U => {
        T.current.phase = U,
        g(U)
    }
    ;
    h.useEffect( () => {
        let U = !1;
        const B = H => new Promise(V => _.current.push(setTimeout(V, H)))
          , O = _v(Y(n + T.current.cleared, n, Pv), s, r);
        return T.current.board = O,
        T.current.entered = [],
        d(O),
        b([]),
        k(-1),
        x(0),
        E("watch"),
        (async () => {
            await B(Ov);
            for (let H = 0; H < O.seq.length; H++) {
                if (U || T.current.done)
                    return;
                k(O.seq[H]),
                x(H + 1),
                W("beep", .12),
                await B(i),
                k(-1),
                await B(c)
            }
            !U && !T.current.done && E("ask")
        }
        )(),
        () => {
            U = !0
        }
    }
    , [f]);
    const A = U => {
        const B = T.current;
        if (B.done || B.phase !== "ask" || B.entered.length >= B.board.asked.length)
            return;
        const O = [...B.entered, U];
        if (B.entered = O,
        b(O),
        W("beep", .15),
        !(O.length < B.board.asked.length)) {
            if (B.board.asked.every( (H, V) => B.board.seq[H] === O[V]))
                return B.cleared += 1,
                N(B.cleared),
                E("ok"),
                W("correct", .4),
                B.cleared >= o ? D(!0) : P( () => m(H => H + 1), Dv);
            if (B.wrong += 1,
            S(B.wrong),
            E("bad"),
            B.wrong >= a)
                return D(!1, "error");
            W("wrong", .4),
            P( () => m(H => H + 1), lf)
        }
    }
      , I = () => {
        const U = T.current;
        U.done || U.phase !== "ask" || !U.entered.length || (U.entered = U.entered.slice(0, -1),
        b(U.entered))
    }
    ;
    ne(U => {
        if (U.key === "Backspace")
            return I();
        const B = Number(U.key);
        B >= 1 && B <= s && A(B - 1)
    }
    );
    const $ = u.asked.map(U => u.seq[U])
      , F = -1
      , z = u.seq.length;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [Math.min(M + 1, o), "/", o]
                })]
            }), l.jsx("span", {
                className: "text-fg",
                children: y === "watch" ? "Watch the packets" : "Enter them"
            }), l.jsx(ee, {
                total: a,
                used: j,
                label: "Errors"
            })]
        }), l.jsx("div", {
            className: "flex flex-1 flex-col items-center justify-center gap-6",
            children: y === "watch" ? l.jsxs(l.Fragment, {
                children: [l.jsx("div", {
                    className: "flex h-36 w-36 items-center justify-center rounded border border-line bg-raised",
                    children: p >= 0 && l.jsx(Mr, {
                        i: p,
                        className: "h-20 w-20 text-accent"
                    })
                }), l.jsx("div", {
                    className: "flex gap-1.5",
                    children: Array.from({
                        length: z
                    }, (U, B) => l.jsx("span", {
                        className: `h-1.5 w-6 rounded-full ${B < v ? "bg-accent" : "bg-track"}`
                    }, B))
                })]
            }) : l.jsxs(l.Fragment, {
                children: [l.jsxs("div", {
                    className: "text-center text-sm text-fg",
                    children: ["Enter packets ", l.jsx("span", {
                        className: "font-mono text-accent",
                        children: zv([...u.asked].reverse().map(U => U + 1))
                    }), ", last to first"]
                }), l.jsx("div", {
                    className: "flex gap-3",
                    children: u.asked.map( (U, B) => {
                        const O = w[B]
                          , H = y === "ok" ? "border-accent bg-accent-soft" : y === "bad" ? `shake ${O === $[B] ? "border-line bg-raised" : "border-danger bg-danger-soft"}` : B === w.length ? "border-accent-line bg-raised" : "border-line bg-raised";
                        return l.jsxs("div", {
                            className: "flex flex-col items-center gap-1",
                            children: [l.jsxs("span", {
                                className: "font-mono text-xs text-muted",
                                children: ["#", U + 1]
                            }), l.jsx("div", {
                                className: `flex h-16 w-16 items-center justify-center rounded border ${H}`,
                                children: O !== void 0 && l.jsx(Mr, {
                                    i: O,
                                    className: `h-9 w-9 ${y === "bad" && O !== $[B] ? "text-danger" : "text-accent"}`
                                })
                            })]
                        }, B)
                    }
                    )
                }), l.jsx("div", {
                    className: "flex flex-wrap justify-center gap-2",
                    children: Array.from({
                        length: s
                    }, (U, B) => l.jsxs("button", {
                        onMouseDown: () => A(B),
                        className: `relative flex h-14 w-14 items-center justify-center rounded border border-line bg-raised ${y === "ask" ? "cursor-pointer hover:border-accent-line hover:bg-hover" : ""}`,
                        children: [l.jsx(Mr, {
                            i: B,
                            className: "h-7 w-7 text-fg"
                        }), l.jsx("span", {
                            className: "absolute right-1 bottom-0.5 font-mono text-[10px] text-muted",
                            children: B + 1
                        }), F === B && l.jsx("span", {
                            className: "absolute top-1 left-1 h-1 w-1 rounded-full bg-accent-line"
                        })]
                    }, B))
                }), l.jsx("button", {
                    onMouseDown: I,
                    className: `rounded border border-line px-3 py-1 text-xs ${w.length && y === "ask" ? "cursor-pointer text-fg hover:border-accent-line" : "text-muted"}`,
                    children: "Undo"
                })]
            })
        }), l.jsx("div", {
            className: "w-full",
            children: l.jsx(re, {
                left: L.left,
                total: L.total
            })
        })]
    })
}
const ae = window
  , oe = {
    setTimeout: ae.setTimeout.bind(ae),
    clearTimeout: ae.clearTimeout.bind(ae),
    setInterval: ae.setInterval.bind(ae),
    clearInterval: ae.clearInterval.bind(ae),
    raf: ae.requestAnimationFrame.bind(ae),
    caf: ae.cancelAnimationFrame.bind(ae),
    now: performance.now.bind(performance),
    dateNow: Date.now,
    random: Math.random
};
function Px(e) {
    let t = e >>> 0;
    return () => {
        t = t + 1831565813 >>> 0;
        let n = t;
        return n = Math.imul(n ^ n >>> 15, n | 1),
        n ^= n + Math.imul(n ^ n >>> 7, n | 61),
        ((n ^ n >>> 14) >>> 0) / 4294967296
    }
}
const Er = {
    virtual: !1,
    behind: 0
}
  , Kr = 1e6;
class Hv {
    constructor() {
        Rt(this, "now", 0);
        Rt(this, "base", Math.floor(oe.now()));
        Rt(this, "dateBase", oe.dateNow());
        Rt(this, "timers", new Map);
        Rt(this, "nextId", Kr);
        Rt(this, "frames", new Map);
        Rt(this, "nextFrame", Kr);
        Rt(this, "restore", null)
    }
    install(t, n) {
        if (this.restore)
            return;
        const r = {
            setTimeout: ae.setTimeout,
            clearTimeout: ae.clearTimeout,
            setInterval: ae.setInterval,
            clearInterval: ae.clearInterval,
            raf: ae.requestAnimationFrame,
            caf: ae.cancelAnimationFrame,
            now: performance.now,
            dateNow: Date.now,
            random: Math.random,
            capture: Element.prototype.setPointerCapture,
            release: Element.prototype.releasePointerCapture,
            innerWidth: Object.getOwnPropertyDescriptor(ae, "innerWidth"),
            innerHeight: Object.getOwnPropertyDescriptor(ae, "innerHeight")
        }
          , s = (a, i, c) => {
            const u = this.nextId++;
            return typeof a == "function" && this.timers.set(u, {
                cb: a,
                args: i,
                repeat: c
            }),
            u
        }
          , o = a => {
            a !== void 0 && (a >= Kr ? this.timers.delete(a) : oe.clearTimeout(a))
        }
        ;
        ae.setTimeout = (a, i, ...c) => s(a, c, !1),
        ae.setInterval = (a, i, ...c) => s(a, c, !0),
        ae.clearTimeout = o,
        ae.clearInterval = o,
        ae.requestAnimationFrame = a => {
            const i = this.nextFrame++;
            return this.frames.set(i, a),
            i
        }
        ,
        ae.cancelAnimationFrame = a => {
            a >= Kr ? this.frames.delete(a) : oe.caf(a)
        }
        ,
        performance.now = () => this.base + this.now,
        Date.now = () => this.dateBase + Math.floor(this.now),
        Math.random = Px(t),
        Element.prototype.setPointerCapture = function(a) {
            try {
                r.capture.call(this, a)
            } catch {}
        }
        ,
        Element.prototype.releasePointerCapture = function(a) {
            try {
                r.release.call(this, a)
            } catch {}
        }
        ,
        Object.defineProperty(ae, "innerWidth", {
            configurable: !0,
            get: n.width
        }),
        Object.defineProperty(ae, "innerHeight", {
            configurable: !0,
            get: n.height
        }),
        Er.virtual = !0,
        this.restore = () => {
            ae.setTimeout = r.setTimeout,
            ae.clearTimeout = r.clearTimeout,
            ae.setInterval = r.setInterval,
            ae.clearInterval = r.clearInterval,
            ae.requestAnimationFrame = r.raf,
            ae.cancelAnimationFrame = r.caf,
            performance.now = r.now,
            Date.now = r.dateNow,
            Math.random = r.random,
            Element.prototype.setPointerCapture = r.capture,
            Element.prototype.releasePointerCapture = r.release;
            for (const a of ["innerWidth", "innerHeight"]) {
                const i = r[a];
                i ? Object.defineProperty(ae, a, i) : delete ae[a]
            }
            Er.virtual = !1,
            Er.behind = 0
        }
    }
    uninstall() {
        var t;
        (t = this.restore) == null || t.call(this),
        this.restore = null,
        this.timers.clear(),
        this.frames.clear()
    }
    fire(t, n) {
        const r = Kr + t - 1
          , s = this.timers.get(r);
        if (this.now = Math.max(this.now, n),
        !!s) {
            s.repeat || this.timers.delete(r);
            try {
                s.cb(...s.args)
            } catch (o) {
                console.error("[screen] timer", o)
            }
        }
    }
    frame(t) {
        this.now = Math.max(this.now, t);
        const n = [...this.frames.values()];
        this.frames.clear();
        for (const r of n)
            try {
                r(this.base + t)
            } catch (s) {
                console.error("[screen] frame", s)
            }
    }
}
function Tt({duration: e, onExpire: t}) {
    const n = h.useRef(t);
    n.current = t;
    const [r] = h.useState( () => Er.virtual ? Er.behind : 0);
    return h.useEffect( () => {
        const s = setTimeout( () => n.current(), Math.max(1, e));
        return () => clearTimeout(s)
    }
    , []),
    l.jsx("div", {
        className: "h-1.5 w-full overflow-hidden rounded-full bg-track",
        children: l.jsx("div", {
            className: "timer-drain h-full w-full bg-accent",
            style: {
                "--dur": `${Math.max(1, e)}ms`,
                animationDelay: r > 0 ? `-${Math.round(r)}ms` : void 0
            }
        })
    })
}
function be({value: e}) {
    return l.jsx("div", {
        className: "h-1.5 w-full overflow-hidden rounded-full bg-track",
        children: l.jsx("div", {
            className: "h-full origin-left bg-accent",
            style: {
                transform: `scaleX(${Math.min(1, Math.max(0, e))})`
            }
        })
    })
}
const Ll = (e, t) => `${e},${t}`
  , Wv = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0]
}
  , Uv = {
    up: "down",
    down: "up",
    left: "right",
    right: "left"
}
  , Bv = {
    ArrowUp: "up",
    KeyW: "up",
    ArrowDown: "down",
    KeyS: "down",
    ArrowLeft: "left",
    KeyA: "left",
    ArrowRight: "right",
    KeyD: "right"
}
  , Vv = {
    up: "↓",
    down: "↑",
    left: "→",
    right: "←"
};
function Yv(e) {
    const t = new Set;
    let n = Math.ceil(e / 2)
      , r = 0;
    for (let s = 1; s <= e && (t.add(Ll(n, s)),
    s !== e); s++) {
        const o = r === 0 ? [-1, 0, 1] : [r, 0];
        let a = o[K(0, o.length - 1)]
          , i = a === 0 ? 0 : K(1, 3);
        for (; i > 0 && (n + a * i < 1 || n + a * i > e); )
            i--;
        i === 0 && (a = 0);
        for (let c = 0; c < i; c++)
            n += a,
            t.add(Ll(n, s));
        r = a
    }
    return t
}
function Gv({settings: e, finish: t}) {
    const n = Y(Math.round(e.gridSize), 5, 31)
      , r = Math.max(1, Math.round(e.lives))
      , s = h.useMemo( () => Yv(n), [n])
      , [o,a] = h.useState("preview")
      , i = h.useRef({
        x: Math.ceil(n / 2),
        y: 1,
        lastMove: null,
        onPath: !0,
        errors: 0
    })
      , [,c] = h.useState(0);
    ne(f => {
        const m = Bv[f.code];
        if (!m || o !== "play" || (f.preventDefault(),
        f.repeat))
            return;
        const y = i.current;
        if (!y.onPath && m !== Uv[y.lastMove])
            return;
        const [g,p] = Wv[m]
          , k = y.x + g
          , v = y.y + p;
        k < 1 || k > n || v < 1 || v > n || (y.x = k,
        y.y = v,
        y.lastMove = m,
        y.onPath = s.has(Ll(k, v)),
        c(x => x + 1),
        y.onPath ? v === n && t(!0) : (y.errors++,
        W("wrong", .4),
        y.errors >= r && t(!1, "error")))
    }
    );
    const u = i.current
      , d = [];
    for (let f = n; f >= 1; f--)
        for (let m = 1; m <= n; m++) {
            const y = u.x === m && u.y === f;
            let g = "bg-dim"
              , p = null;
            y ? (g = u.onPath ? "bg-accent" : "bg-danger shake",
            u.onPath || (p = Vv[u.lastMove])) : o === "preview" && s.has(Ll(m, f)) && (g = "bg-accent-line"),
            d.push(l.jsx("div", {
                className: `flex items-center justify-center text-sm font-bold text-surface ${g}`,
                children: p
            }, `${m},${f}`))
        }
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx("div", {
            className: "grid aspect-square w-[540px] gap-0.5",
            style: {
                gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${n}, minmax(0, 1fr))`
            },
            children: d
        }), l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: o === "preview" ? "Memorize the route" : "WASD / arrows to move. Step back when off the route."
            }), l.jsx(ee, {
                total: r,
                used: u.errors,
                label: "Integrity"
            })]
        }), o === "preview" ? l.jsx(Tt, {
            duration: e.pathTimeout,
            onExpire: () => a("play")
        }, "preview") : l.jsx(Tt, {
            duration: e.timeLimit,
            onExpire: () => t(!1, "time")
        }, "play")]
    })
}
const af = (e, t) => Array.from({
    length: t - e + 1
}, (n, r) => String.fromCodePoint(e + r)).join("")
  , cf = {
    numeric: "0123456789",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    alphanumeric: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    greek: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
    runes: af(5792, 5866),
    braille: af(10304, 10495)
};
function Kv({settings: e, finish: t}) {
    const n = Y(Math.round(e.gridSize), 3, 10)
      , r = n * n
      , s = Math.max(1, Math.round(e.required))
      , o = h.useMemo( () => Array.from(cf[e.charSet] ?? cf.alphanumeric), [e.charSet])
      , a = h.useMemo( () => o[K(0, o.length - 1)], [o])
      , i = () => {
        let k;
        do
            k = o[K(0, o.length - 1)];
        while (k === a && o.length > 1);
        return k
    }
      , [c,u] = h.useState( () => Array.from({
        length: r
    }, i))
      , [d,f] = h.useState( () => K(0, r - 1))
      , [m,y] = h.useState(0)
      , g = h.useRef(d);
    g.current = d,
    h.useEffect( () => {
        const k = setInterval( () => {
            const v = K(0, r - 1);
            v !== g.current && u(x => {
                const w = x.slice();
                return w[v] = i(),
                w
            }
            )
        }
        , 45);
        return () => clearInterval(k)
    }
    , []);
    const p = k => {
        if (k !== d)
            return;
        const v = m + 1;
        if (v >= s)
            return t(!0);
        W("correct", .5),
        y(v);
        let x;
        do
            x = K(0, r - 1);
        while (x === d);
        u(w => {
            const b = w.slice();
            return b[d] = i(),
            b
        }
        ),
        f(x)
    }
    ;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between",
            children: [l.jsx("div", {
                className: "text-xs text-muted",
                children: "Find the symbol in the grid"
            }), l.jsx("div", {
                className: "flex h-14 w-14 items-center justify-center rounded border border-accent bg-raised font-glyph text-3xl font-semibold text-accent",
                children: a
            }), l.jsxs("div", {
                className: "text-xs text-muted",
                children: [m, "/", s]
            })]
        }), l.jsx("div", {
            className: "grid aspect-square w-[540px] gap-0.5",
            style: {
                gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${n}, minmax(0, 1fr))`
            },
            children: Array.from({
                length: r
            }, (k, v) => l.jsx("button", {
                onMouseDown: () => p(v),
                className: "flex cursor-pointer items-center justify-center rounded-sm bg-raised font-glyph text-fg hover:bg-accent hover:text-accent-ink",
                style: {
                    fontSize: `${Math.max(14, 300 / n)}px`
                },
                children: v === d ? a : c[v]
            }, v))
        }), l.jsx(be, {
            value: m / s
        }), l.jsx(Tt, {
            duration: e.timeLimit,
            onExpire: () => t(!1, "time")
        }, m)]
    })
}
const qv = ["+", "-", "×"]
  , So = (e, t, n) => e === "+" ? t + n : e === "-" ? t - n : t * n;
function uf(e, t) {
    return t[1] === "×" ? So(t[0], e[0], So(t[1], e[1], e[2])) : So(t[1], So(t[0], e[0], e[1]), e[2])
}
function df(e, t) {
    const n = [0, 1, 2].map(s => uf(e.slice(s * 3, s * 3 + 3), [t[5 * s], t[5 * s + 1]]))
      , r = [0, 1, 2].map(s => uf([e[s], e[s + 3], e[s + 6]], [t[2 + s], t[7 + s]]));
    return {
        rows: n,
        cols: r
    }
}
function Xv({settings: e, finish: t}) {
    const n = h.useMemo( () => {
        const d = ie([1, 2, 3, 4, 5, 6, 7, 8, 9])
          , f = Array.from({
            length: 12
        }, () => qv[K(0, 2)]);
        return {
            ops: f,
            ...df(d, f)
        }
    }
    , [])
      , [r,s] = h.useState(Array(9).fill(""))
      , o = h.useRef([])
      , a = (d, f) => {
        var y;
        const m = f.replace(/[^1-9]/g, "").slice(-1);
        s(g => g.map( (p, k) => k === d ? m : p)),
        m && d < 8 && ((y = o.current[d + 1]) == null || y.focus())
    }
      , i = () => {
        const d = r.map(Number);
        if (!(new Set(d).size === 9 && d.every(g => g >= 1 && g <= 9)))
            return t(!1, "error");
        const m = df(d, n.ops)
          , y = m.rows.every( (g, p) => g === n.rows[p]) && m.cols.every( (g, p) => g === n.cols[p]);
        t(y, y ? void 0 : "error")
    }
      , c = "flex h-14 w-14 items-center justify-center rounded text-lg font-semibold"
      , u = [];
    for (let d = 0; d < 7; d++)
        for (let f = 0; f < 7; f++) {
            const m = `${d}${f}`;
            if (d % 2 === 1 && f % 2 === 1) {
                const g = (d - 1) / 2 * 3 + (f - 1) / 2;
                u.push(l.jsx("input", {
                    ref: p => {
                        o.current[g] = p
                    }
                    ,
                    value: r[g],
                    onChange: p => a(g, p.target.value),
                    onFocus: p => p.target.select(),
                    onKeyDown: p => {
                        var k;
                        p.key === "Enter" && i(),
                        p.key === "Backspace" && !r[g] && g > 0 && ((k = o.current[g - 1]) == null || k.focus())
                    }
                    ,
                    inputMode: "numeric",
                    maxLength: 1,
                    autoFocus: g === 0,
                    className: `${c} border-2 border-accent-line bg-raised text-center text-fg outline-none focus:border-accent`
                }, m))
            } else if (d % 2 === 1 && f % 2 === 0 && f !== 0 && f !== 6) {
                const g = (d - 1) / 2;
                u.push(l.jsx("div", {
                    className: `${c} bg-dim text-muted`,
                    children: n.ops[5 * g + f / 2 - 1]
                }, m))
            } else if (d % 2 === 0 && f % 2 === 1 && d !== 0 && d !== 6) {
                const g = d / 2 - 1;
                u.push(l.jsx("div", {
                    className: `${c} bg-dim text-muted`,
                    children: n.ops[5 * g + 2 + (f - 1) / 2]
                }, m))
            } else
                (d === 0 || d === 6) && f % 2 === 1 ? u.push(l.jsx("div", {
                    className: `${c} bg-accent text-accent-ink`,
                    children: n.cols[(f - 1) / 2]
                }, m)) : d % 2 === 1 && (f === 0 || f === 6) ? u.push(l.jsx("div", {
                    className: `${c} bg-accent text-accent-ink`,
                    children: n.rows[(d - 1) / 2]
                }, m)) : u.push(l.jsx("div", {
                    className: "h-14 w-14"
                }, m))
        }
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsx("p", {
            className: "text-center text-xs text-muted",
            children: "Place each digit from 1 to 9 exactly once. Every row and column must equal the amber value at its ends. × is solved before + and −."
        }), l.jsx("div", {
            className: "grid grid-cols-7 gap-2",
            children: u
        }), l.jsxs("div", {
            className: "flex gap-3",
            children: [l.jsx("button", {
                onClick: () => s(Array(9).fill("")),
                className: "cursor-pointer rounded border border-line bg-raised px-6 py-2 text-sm font-semibold hover:bg-hover",
                children: "Clear"
            }), l.jsx("button", {
                onClick: i,
                className: "cursor-pointer rounded bg-accent px-6 py-2 text-sm font-semibold text-accent-ink hover:bg-accent-bright",
                children: "Submit"
            })]
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: l.jsx(Tt, {
                duration: e.timeLimit,
                onExpire: () => t(!1, "time")
            })
        })]
    })
}
function Qv({settings: e, finish: t}) {
    const n = Y(Math.round(e.buttonGrid), 2, 8)
      , r = Math.max(1, Math.round(e.length))
      , s = h.useMemo( () => Array.from({
        length: r
    }, () => K(0, n * n - 1)), [n, r])
      , [o,a] = h.useState(0)
      , [i,c] = h.useState(0)
      , [u,d] = h.useState(!1)
      , [f,m] = h.useState(null)
      , y = h.useRef(t);
    y.current = t,
    h.useEffect( () => {
        let v = !1;
        const x = w => new Promise(b => setTimeout(b, w));
        return d(!1),
        c(0),
        (async () => {
            await x(600);
            for (let w = 0; w <= o; w++) {
                if (v)
                    return;
                m({
                    key: s[w],
                    kind: "show"
                }),
                await x(Math.max(160, 340 - o * 8)),
                m(null),
                await x(120)
            }
            v || d(!0)
        }
        )(),
        () => {
            v = !0
        }
    }
    , [o, s]);
    const g = v => {
        if (u) {
            if (v !== s[i])
                return d(!1),
                m({
                    key: v,
                    kind: "bad"
                }),
                t(!1, "error");
            if (m({
                key: v,
                kind: "ok"
            }),
            setTimeout( () => m(x => (x == null ? void 0 : x.key) === v && x.kind === "ok" ? null : x), 180),
            i + 1 > o) {
                if (d(!1),
                o + 1 >= r)
                    return t(!0);
                W("correct", .5),
                setTimeout( () => a(x => x + 1), 500)
            } else
                c(i + 1)
        }
    }
      , p = n > 5 ? 6 : 10
      , k = Array.from({
        length: n * n
    }, (v, x) => {
        const w = (f == null ? void 0 : f.key) === x ? f.kind : null
          , b = w === "show" ? "bg-accent-bright" : w === "ok" ? "bg-accent" : w === "bad" ? "bg-danger" : u ? "bg-raised hover:bg-hover" : "bg-raised";
        return l.jsx("button", {
            onMouseDown: () => g(x),
            className: `aspect-square rounded ${b} ${u ? "cursor-pointer" : "cursor-default"}`
        }, x)
    }
    );
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: u ? "Repeat the sequence" : (f == null ? void 0 : f.kind) === "bad" ? "Wrong key" : "Watch the sequence"
            }), l.jsxs("span", {
                children: ["Stage ", o + 1, "/", r]
            })]
        }), l.jsx("div", {
            className: "grid aspect-square w-[500px]",
            style: {
                gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                gap: p
            },
            children: k
        }), l.jsx(be, {
            value: o / r
        }), u ? l.jsx(Tt, {
            duration: 2e3 * (o + 1),
            onExpire: () => t(!1, "time")
        }, o) : l.jsx("div", {
            className: "h-1.5 w-full"
        })]
    })
}
function Zv({settings: e, finish: t}) {
    const n = h.useMemo( () => ie([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 4).join(""), [])
      , [r,s] = h.useState("")
      , o = h.useRef("")
      , a = p => {
        o.current = p,
        s(p)
    }
      , [i,c] = h.useState(null)
      , [u,d] = h.useState([])
      , f = h.useRef(!1)
      , m = h.useRef();
    h.useEffect( () => () => clearTimeout(m.current), []);
    const y = p => {
        if (f.current || o.current.length >= 4)
            return;
        const k = o.current + p;
        if (a(k),
        k.length < 4)
            return;
        const v = [...k].map( (x, w) => x === n[w] ? "hit" : n.includes(x) ? "near" : "none");
        if (f.current = !0,
        c(v),
        v.every(x => x === "hit"))
            return t(!0);
        W("wrong", .4),
        d(x => [{
            guess: k,
            marks: v
        }, ...x].slice(0, 5)),
        m.current = setTimeout( () => {
            a(""),
            f.current = !1,
            c(null)
        }
        , 900)
    }
    ;
    ne(p => {
        p.key >= "1" && p.key <= "9" && p.key.length === 1 ? y(p.key) : p.key === "Backspace" && !f.current && a(o.current.slice(0, -1))
    }
    );
    const g = p => p === "hit" ? "border-accent bg-accent text-accent-ink" : p === "near" ? "border-warn text-warn bg-warn-soft" : "border-line bg-raised text-fg";
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsx("p", {
            className: "text-center text-xs text-muted",
            children: "Type four different digits (1-9). Solid = correct place, outlined = wrong place."
        }), l.jsx("div", {
            className: "flex gap-3",
            children: [0, 1, 2, 3].map(p => l.jsx("div", {
                className: `flex h-20 w-20 items-center justify-center rounded border-2 text-4xl font-semibold ${g(i == null ? void 0 : i[p])} ${!i && p === r.length ? "border-accent-line" : ""}`,
                children: r[p] ?? "_"
            }, p))
        }), l.jsx("div", {
            className: "grid grid-cols-9 gap-1.5",
            children: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(p => l.jsx("button", {
                onMouseDown: () => y(String(p)),
                className: "h-10 w-10 cursor-pointer rounded bg-raised font-semibold hover:bg-accent hover:text-accent-ink",
                children: p
            }, p))
        }), l.jsx("div", {
            className: "flex min-h-[3.5rem] flex-col items-center gap-1 text-xs text-muted",
            children: u.slice(0, 2).map( (p, k) => l.jsx("div", {
                className: "flex gap-1.5",
                children: [...p.guess].map( (v, x) => l.jsx("span", {
                    className: `flex h-6 w-6 items-center justify-center rounded border text-xs ${g(p.marks[x])}`,
                    children: v
                }, x))
            }, k))
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: l.jsx(Tt, {
                duration: e.timeLimit,
                onExpire: () => t(!1, "time")
            })
        })]
    })
}
const Ox = typeof window.GetParentResourceName == "function";
let Dx = !1;
function Jv() {
    Dx = !0
}
async function zt(e, t={}) {
    if (!Dx) {
        if (!Ox) {
            console.info("[nui]", e, t);
            return
        }
        try {
            await fetch(`https://${window.GetParentResourceName()}/${e}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(t)
            })
        } catch {}
    }
}
function St(e, t) {
    h.useEffect( () => {
        const n = r => {
            var s;
            ((s = r.data) == null ? void 0 : s.action) === e && t(r.data.data)
        }
        ;
        return window.addEventListener("message", n),
        () => window.removeEventListener("message", n)
    }
    , [e, t])
}
const nt = 480
  , ew = 2.5
  , tw = 1500
  , nw = e => e * e * (3 - 2 * e);
function rw({settings: e, finish: t}) {
    const n = h.useRef(null)
      , [r,s] = h.useState(!1)
      , o = h.useRef({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    })
      , a = h.useRef({
        from: {
            x: nt / 2,
            y: nt / 2,
            d: 56
        },
        to: {
            x: nt / 2,
            y: nt / 2,
            d: 56
        },
        t: 1
    })
      , i = h.useRef(!1)
      , c = h.useRef(null);
    return h.useEffect( () => {
        zt("centerCursor"),
        o.current = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };
        const u = m => {
            o.current = {
                x: m.clientX,
                y: m.clientY
            }
        }
        ;
        window.addEventListener("mousemove", u);
        const d = setTimeout( () => {
            var k;
            const m = (k = c.current) == null ? void 0 : k.getBoundingClientRect();
            if (!m || !n.current)
                return;
            const y = m.width / nt
              , g = Math.min(nt - 28, Math.max(28, (window.innerWidth / 2 - m.left) / y))
              , p = Math.min(nt - 28, Math.max(28, (window.innerHeight / 2 - m.top) / y));
            a.current = {
                from: {
                    x: g,
                    y: p,
                    d: 56
                },
                to: {
                    x: g,
                    y: p,
                    d: 56
                },
                t: 1
            },
            n.current.style.transform = `translate(${g - 28}px, ${p - 28}px)`
        }
        , 250)
          , f = setTimeout( () => s(!0), tw);
        return () => {
            window.removeEventListener("mousemove", u),
            clearTimeout(f),
            clearTimeout(d)
        }
    }
    , []),
    De(u => {
        const d = n.current;
        if (!d || i.current)
            return;
        const f = a.current;
        if (f.t += u / ew,
        f.t >= 1) {
            const w = he(50, 64);
            f.from = {
                ...f.to
            },
            f.to = {
                x: he(w / 2, nt - w / 2),
                y: he(w / 2, nt - w / 2),
                d: w
            },
            f.t = 0
        }
        const m = nw(f.t)
          , y = f.from.d + (f.to.d - f.from.d) * m
          , g = f.from.x + (f.to.x - f.from.x) * m
          , p = f.from.y + (f.to.y - f.from.y) * m;
        d.style.width = d.style.height = `${y}px`,
        d.style.transform = `translate(${g - y / 2}px, ${p - y / 2}px)`;
        const k = d.getBoundingClientRect()
          , v = o.current.x - (k.left + k.width / 2)
          , x = o.current.y - (k.top + k.height / 2);
        Math.hypot(v, x) > k.width / 2 && (i.current = !0,
        t(!1, "error"))
    }
    , r),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsx("div", {
            className: "text-xs text-muted",
            children: r ? "Keep your cursor inside the dot" : "Place your cursor on the dot..."
        }), l.jsx("div", {
            ref: c,
            className: "relative overflow-hidden rounded border border-line bg-raised",
            style: {
                width: nt,
                height: nt
            },
            children: l.jsx("div", {
                ref: n,
                className: "absolute left-0 top-0 rounded-full bg-accent",
                style: {
                    width: 56,
                    height: 56,
                    transform: `translate(${nt / 2 - 28}px, ${nt / 2 - 28}px)`
                }
            })
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: r ? l.jsx(Tt, {
                duration: e.timeLimit,
                onExpire: () => t(!0)
            }) : l.jsx("div", {
                className: "h-1.5 w-full"
            })
        })]
    })
}
const No = 860
  , En = 690
  , sw = .5
  , ow = -10
  , lw = 3
  , Mo = 180
  , qr = 80
  , ff = 1.8
  , Ct = 30
  , Eo = 100;
function aw({settings: e, finish: t}) {
    const n = Math.max(1, Math.round(e.targetScore))
      , r = h.useRef(null)
      , [s,o] = h.useState(!1)
      , [a,i] = h.useState(0)
      , c = h.useRef({
        y: En / 2 - Ct / 2,
        v: 0,
        walls: [],
        spawn: ff,
        score: 0,
        done: !1
    })
      , u = h.useRef({
        danger: "#ff6b6b",
        accent: "#ffb000"
    });
    h.useEffect( () => {
        const y = getComputedStyle(document.documentElement);
        u.current = {
            danger: y.getPropertyValue("--danger").trim() || u.current.danger,
            accent: y.getPropertyValue("--accent").trim() || u.current.accent
        }
    }
    , []);
    const d = () => {
        c.current.done || (s || o(!0),
        c.current.v = ow)
    }
    ;
    ne(y => {
        y.code === "Space" && (y.preventDefault(),
        y.repeat || d())
    }
    );
    const f = y => {
        c.current.done = !0,
        t(y, y ? void 0 : "error")
    }
      , m = () => {
        var p;
        const y = (p = r.current) == null ? void 0 : p.getContext("2d");
        if (!y)
            return;
        const g = c.current;
        y.clearRect(0, 0, No, En),
        y.fillStyle = u.current.danger;
        for (const k of g.walls)
            y.fillRect(k.x, 0, qr, k.gap),
            y.fillRect(k.x, k.gap + Mo, qr, En - k.gap - Mo);
        y.save(),
        y.translate(Eo + Ct / 2, g.y + Ct / 2),
        y.rotate(Math.max(-20, Math.min(20, g.v * 3)) * Math.PI / 180),
        y.fillStyle = u.current.accent,
        y.fillRect(-Ct / 2, -Ct / 2, Ct, Ct),
        y.restore()
    }
    ;
    return h.useEffect(m, []),
    De(y => {
        const g = c.current;
        if (g.done)
            return;
        const p = y * 60;
        g.v += sw * p,
        g.y += g.v * p,
        g.y < 0 && (g.y = 0,
        g.v = 0),
        g.spawn += y,
        g.spawn >= ff && (g.spawn = 0,
        g.walls.push({
            x: No,
            gap: he(50, En - Mo - 50),
            passed: !1
        }));
        for (let v = g.walls.length - 1; v >= 0; v--) {
            const x = g.walls[v];
            if (x.x -= lw * p,
            !x.passed && x.x + qr < Eo && (x.passed = !0,
            g.score++,
            i(g.score),
            W("correct", .3),
            g.score >= n))
                return m(),
                f(!0);
            x.x < -qr && g.walls.splice(v, 1)
        }
        const k = g.walls.some(v => Eo + Ct > v.x && Eo < v.x + qr && (g.y < v.gap || g.y + Ct > v.gap + Mo));
        m(),
        (k || g.y > En - Ct) && f(!1)
    }
    , s),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: "Space or click to jump"
            }), l.jsxs("span", {
                className: "font-mono text-sm text-accent",
                children: [a, "/", n]
            })]
        }), l.jsxs("div", {
            className: "relative overflow-hidden rounded border border-line bg-raised",
            style: {
                width: No,
                height: En
            },
            onPointerDown: d,
            children: [l.jsx("canvas", {
                ref: r,
                width: No,
                height: En
            }), !s && l.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center text-sm",
                children: l.jsx("span", {
                    className: "rounded bg-surface px-4 py-2 text-accent",
                    children: "Press SPACE or click to start"
                })
            })]
        }), l.jsx(be, {
            value: a / n
        })]
    })
}
const uc = 600
  , Ba = 50
  , as = 29;
function iw(e) {
    let t, n, r, s;
    do {
        t = K(0, 9),
        n = K(0, 9);
        const o = K(0, 2);
        s = ["+", "-", "×"][o],
        r = o === 0 ? t + n : o === 1 ? t - n : t * n
    } while (r < 0 || r > 9);
    return {
        id: e,
        text: `${t} ${s} ${n}`,
        answer: r,
        y: uc + as,
        hit: !1
    }
}
function cw({settings: e, finish: t}) {
    const n = Math.max(1, Math.round(e.targetScore))
      , r = Math.max(1, Math.round(e.maxMisses))
      , s = Math.max(8, e.targetHeight)
      , o = Ba - s / 2
      , a = Ba + s / 2
      , i = h.useRef({
        problems: [],
        score: 0,
        misses: 0,
        since: 1e9,
        nextId: 0,
        done: !1
    })
      , [c,u] = h.useState({
        problems: [],
        score: 0,
        misses: 0
    })
      , [d,f] = h.useState(null)
      , m = h.useRef()
      , y = () => u({
        problems: i.current.problems.slice(),
        score: i.current.score,
        misses: i.current.misses
    })
      , g = k => {
        f(k),
        clearTimeout(m.current),
        m.current = setTimeout( () => f(null), 150)
    }
      , p = () => {
        const k = i.current;
        k.misses++,
        W("wrong", .4),
        g("bad"),
        k.misses >= r && !k.done && (k.done = !0,
        y(),
        t(!1, "error"))
    }
    ;
    return ne(k => {
        const v = i.current;
        if (v.done || k.repeat || k.key.length !== 1 || k.key < "0" || k.key > "9")
            return;
        const x = v.problems.find(w => !w.hit && w.y >= o && w.y <= a);
        if (x) {
            if (Number(k.key) !== x.answer)
                return p();
            x.hit = !0,
            v.score++,
            W("correct", .4),
            g("ok"),
            y(),
            v.score >= n && (v.done = !0,
            t(!0))
        }
    }
    ),
    De(k => {
        const v = i.current;
        if (v.done)
            return;
        const x = Math.max(e.minSpawnRate, e.initialSpawnRate - v.score * 20);
        v.since += k * 1e3,
        v.since >= x && (v.since = 0,
        v.problems.push(iw(v.nextId++)));
        for (const w of v.problems)
            if (w.y -= e.speed * k * 60,
            !w.hit && w.y < o && (w.hit = !0,
            p(),
            v.done))
                return;
        v.problems = v.problems.filter(w => w.y > -as),
        y()
    }
    ),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: "Type the answer on the line"
            }), l.jsx(ee, {
                total: r,
                used: c.misses,
                label: "Errors"
            })]
        }), l.jsxs("div", {
            className: `relative overflow-hidden rounded border bg-raised ${d === "bad" ? "border-danger" : d === "ok" ? "border-accent" : "border-line"}`,
            style: {
                width: uc,
                height: uc
            },
            children: [l.jsx("div", {
                className: "absolute left-0 w-full bg-accent-faint",
                style: {
                    top: o,
                    height: s
                }
            }), l.jsx("div", {
                className: "absolute left-0 h-0.5 w-full bg-accent",
                style: {
                    top: Ba - 1
                }
            }), c.problems.map(k => l.jsx("div", {
                className: `absolute left-0 w-full text-center text-2xl font-bold ${k.hit ? "text-accent opacity-30" : "text-fg"}`,
                style: {
                    top: k.y - as,
                    height: as,
                    lineHeight: `${as}px`
                },
                children: k.text
            }, k.id))]
        }), l.jsx(be, {
            value: c.score / n
        })]
    })
}
const Jn = 520
  , Va = 480
  , Xr = 50
  , Qr = Jn - 50
  , hf = 550
  , uw = [l.jsx("circle", {
    r: "8"
}), l.jsx("rect", {
    x: "-8",
    y: "-8",
    width: "16",
    height: "16"
}), l.jsx("polygon", {
    points: "0,-9 9,7 -9,7"
}), l.jsx("polygon", {
    points: "0,-10 10,0 0,10 -10,0"
}), l.jsx("path", {
    d: "M0 -9V9M-9 0H9"
}), l.jsx("path", {
    d: "M-7 -7L7 7M7 -7L-7 7"
}), l.jsx("polygon", {
    points: "0,-10 9,-5 9,5 0,10 -9,5 -9,-5"
}), l.jsx("path", {
    d: "M-8 -5H8M-8 0H8M-8 5H8"
})];
function mf({id: e, x: t, y: n, scale: r, className: s}) {
    return l.jsx("g", {
        transform: `translate(${t} ${n}) scale(${r})`,
        className: s,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2 / r > 2 ? 2 / r : 1.6,
        strokeLinejoin: "round",
        strokeLinecap: "round",
        children: uw[e]
    })
}
function dw({settings: e, finish: t}) {
    const n = Y(Math.round(e.pairs), 3, 8)
      , r = Math.max(1, Math.round(e.lives))
      , s = Math.max(0, e.memorizeTime)
      , o = s > 0 ? Math.max(0, Math.round(e.scramble)) : 0
      , {left: a, right: i} = h.useMemo( () => {
        const E = ie([0, 1, 2, 3, 4, 5, 6, 7]).slice(0, n);
        return {
            left: E,
            right: ie(E)
        }
    }
    , [n])
      , [c,u] = h.useState(s > 0 ? "memorize" : "play")
      , [d,f] = h.useState( () => Array(n).fill(-1))
      , [m,y] = h.useState( () => Array.from({
        length: n
    }, (E, A) => A))
      , [g,p] = h.useState(null)
      , [k,v] = h.useState(0)
      , [x,w] = h.useState(null)
      , b = h.useRef(null)
      , M = h.useRef()
      , N = Va / n
      , j = Math.min(30, N / 2 - 5)
      , S = E => N * (E + .5)
      , R = E => m[E]
      , C = new Set(d.filter(E => E >= 0))
      , T = c === "memorize" || s === 0;
    h.useEffect( () => {
        if (c !== "scramble")
            return;
        const E = [];
        for (let A = 0; A < o; A++)
            E.push(setTimeout( () => {
                y(I => {
                    const $ = K(0, n - 1);
                    let F = K(0, n - 1);
                    for (; F === $; )
                        F = K(0, n - 1);
                    const z = I.slice();
                    return [z[$],z[F]] = [z[F], z[$]],
                    z
                }
                )
            }
            , 300 + A * hf));
        return E.push(setTimeout( () => u("play"), 300 + o * hf + 200)),
        () => E.forEach(clearTimeout)
    }
    , [c]);
    const _ = E => {
        const A = b.current.getBoundingClientRect()
          , I = Jn / A.width;
        return {
            x: (E.clientX - A.left) * I,
            y: (E.clientY - A.top) * I
        }
    }
      , P = E => {
        if (c !== "play")
            return;
        const A = _(E)
          , I = Array.from({
            length: n
        }, ($, F) => F).find($ => d[$] < 0 && Math.hypot(A.x - Xr, A.y - S($)) <= j + 6);
        I !== void 0 && (b.current.setPointerCapture(E.pointerId),
        p({
            from: I,
            ...A
        }))
    }
      , L = E => {
        g && p({
            ...g,
            ..._(E)
        })
    }
      , D = E => {
        if (!g)
            return;
        const A = _(E)
          , I = g.from;
        p(null);
        const $ = Array.from({
            length: n
        }, (z, U) => U).find(z => !C.has(z) && Math.hypot(A.x - Qr, A.y - S(R(z))) <= j + 6);
        if ($ === void 0)
            return;
        if (i[$] === a[I]) {
            W("correct", .5);
            const z = d.slice();
            z[I] = $,
            f(z),
            z.every(U => U >= 0) && t(!0);
            return
        }
        W("wrong", .4),
        w($),
        clearTimeout(M.current),
        M.current = setTimeout( () => w(null), 350);
        const F = k + 1;
        v(F),
        F >= r && t(!1, "error")
    }
    ;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: c === "memorize" ? "Memorize the symbols on the right" : c === "scramble" ? "Track the terminals..." : "Drag each symbol to its match"
            }), l.jsx(ee, {
                total: r,
                used: k,
                label: "Integrity"
            })]
        }), l.jsxs("svg", {
            ref: b,
            viewBox: `0 0 ${Jn} ${Va}`,
            width: Jn,
            height: Va,
            className: "touch-none rounded border border-line bg-raised",
            onPointerDown: P,
            onPointerMove: L,
            onPointerUp: D,
            onPointerCancel: () => p(null),
            children: [d.map( (E, A) => E < 0 ? null : l.jsx("path", {
                d: `M${Xr} ${S(A)} C${Jn / 2} ${S(A)}, ${Jn / 2} ${S(R(E))}, ${Qr} ${S(R(E))}`,
                fill: "none",
                className: "stroke-accent",
                strokeWidth: "4",
                strokeLinecap: "round"
            }, A)), g && l.jsx("path", {
                d: `M${Xr} ${S(g.from)} L${g.x} ${g.y}`,
                fill: "none",
                className: "stroke-accent-line",
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeDasharray: "6 6"
            }), a.map( (E, A) => l.jsxs("g", {
                "data-side": "left",
                "data-sym": E,
                children: [l.jsx("circle", {
                    cx: Xr,
                    cy: S(A),
                    r: j,
                    className: `fill-surface ${d[A] >= 0 || (g == null ? void 0 : g.from) === A ? "stroke-accent" : "stroke-line"}`,
                    strokeWidth: "2"
                }), l.jsx(mf, {
                    id: E,
                    x: Xr,
                    y: S(A),
                    scale: j / 14,
                    className: d[A] >= 0 ? "text-accent" : "text-fg"
                })]
            }, `l${A}`)), i.map( (E, A) => {
                const I = T || C.has(A);
                return l.jsx("g", {
                    "data-side": "right",
                    "data-sym": E,
                    "data-slot": R(A),
                    style: {
                        transform: `translateY(${(R(A) - A) * N}px)`,
                        transition: "transform 400ms ease-in-out"
                    },
                    children: l.jsxs("g", {
                        className: x === A ? "shake" : "",
                        children: [l.jsx("circle", {
                            cx: Qr,
                            cy: S(A),
                            r: j,
                            className: `fill-surface ${C.has(A) ? "stroke-accent" : x === A ? "stroke-danger" : "stroke-line"}`,
                            strokeWidth: "2"
                        }), I ? l.jsx(mf, {
                            id: E,
                            x: Qr,
                            y: S(A),
                            scale: j / 14,
                            className: C.has(A) ? "text-accent" : "text-fg"
                        }) : l.jsx("text", {
                            x: Qr,
                            y: S(A) + 6,
                            textAnchor: "middle",
                            className: "fill-muted text-lg font-semibold",
                            children: "?"
                        })]
                    })
                }, `r${A}`)
            }
            )]
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: c === "memorize" ? l.jsx(Tt, {
                duration: s,
                onExpire: () => u(o > 0 ? "scramble" : "play")
            }, "memorize") : c === "scramble" ? l.jsx("div", {
                className: "h-1.5 w-full"
            }) : l.jsx(Tt, {
                duration: e.timeLimit,
                onExpire: () => t(!1, "time")
            }, "play")
        })]
    })
}
const is = 400
  , We = is / 2
  , xr = 160
  , fw = 600
  , hw = .08
  , mw = 10
  , pw = 150
  , pf = e => (e % 360 + 360) % 360
  , xf = (e, t) => {
    const n = Math.abs(pf(e) - pf(t));
    return n > 180 ? 360 - n : n
}
  , gf = (e, t) => {
    const n = e * Math.PI / 180;
    return `${We + t * Math.sin(n)} ${We - t * Math.cos(n)}`
}
  , xw = (e, t) => `M${gf(e - t / 2, xr)} A${xr} ${xr} 0 ${t > 180 ? 1 : 0} 1 ${gf(e + t / 2, xr)}`;
function gw({settings: e, finish: t}) {
    const n = Y(Math.round(e.pins), 1, 8)
      , r = Math.max(1, Math.round(e.lives))
      , s = Math.max(30, e.speed)
      , [o,a] = h.useState(0)
      , [i,c] = h.useState(0)
      , [u,d] = h.useState(!1)
      , [f,m] = h.useState(null)
      , y = h.useRef(null)
      , g = h.useRef()
      , p = Math.max(mw, e.zone - e.shrink * o)
      , k = s * (1 + hw * o)
      , v = h.useRef({
        angle: he(0, 360),
        dir: 1,
        t: 0,
        zone: he(0, 360),
        last: 0,
        done: !1
    })
      , [x,w] = h.useState( () => v.current.zone);
    h.useEffect( () => {
        const j = setTimeout( () => {
            v.current.t = performance.now(),
            d(!0)
        }
        , fw);
        return () => {
            clearTimeout(j),
            clearTimeout(g.current)
        }
    }
    , []);
    const b = j => v.current.angle + v.current.dir * k * ((j - v.current.t) / 1e3);
    De( (j, S) => {
        var C;
        const R = v.current;
        R.angle = b(S),
        R.t = S,
        (C = y.current) == null || C.setAttribute("transform", `rotate(${R.angle} ${We} ${We})`)
    }
    , u);
    const M = j => {
        m(j),
        clearTimeout(g.current),
        g.current = setTimeout( () => m(null), 250)
    }
      , N = () => {
        const j = v.current
          , S = performance.now();
        if (!u || j.done || S - j.last < pw)
            return;
        j.last = S;
        const R = b(S);
        if (xf(R, j.zone) <= p / 2) {
            if (M("ok"),
            W("correct", .5),
            o + 1 >= n)
                return j.done = !0,
                t(!0);
            let C;
            do
                C = he(0, 360);
            while (xf(C, R) < 70);
            j.zone = C,
            j.dir = -j.dir,
            w(C),
            a(o + 1)
        } else {
            M("bad"),
            W("wrong", .4);
            const C = i + 1;
            c(C),
            C >= r && (j.done = !0,
            t(!1, "error"))
        }
    }
    ;
    return ne(j => {
        j.code === "Space" && (j.preventDefault(),
        j.repeat || N())
    }
    ),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: "Press SPACE or click when the needle is in the zone"
            }), l.jsx(ee, {
                total: r,
                used: i,
                label: "Integrity"
            })]
        }), l.jsxs("svg", {
            viewBox: `0 0 ${is} ${is}`,
            width: is,
            height: is,
            className: `cursor-pointer rounded border bg-raised ${f === "bad" ? "border-danger shake" : f === "ok" ? "border-accent" : "border-line"}`,
            onPointerDown: N,
            children: [l.jsx("circle", {
                cx: We,
                cy: We,
                r: xr,
                fill: "none",
                className: "stroke-line",
                strokeWidth: "18"
            }), l.jsx("path", {
                "data-zone": x,
                "data-width": p,
                d: xw(x, p),
                fill: "none",
                className: "stroke-accent",
                strokeWidth: "18"
            }), l.jsx("g", {
                ref: y,
                transform: `rotate(${v.current.angle} ${We} ${We})`,
                children: l.jsx("line", {
                    x1: We,
                    y1: We,
                    x2: We,
                    y2: We - xr - 14,
                    className: f === "bad" ? "stroke-danger" : "stroke-fg",
                    strokeWidth: "4",
                    strokeLinecap: "round"
                })
            }), l.jsx("circle", {
                cx: We,
                cy: We,
                r: "10",
                className: "fill-fg"
            }), l.jsxs("text", {
                x: We,
                y: We + 56,
                textAnchor: "middle",
                className: "fill-muted text-sm",
                children: ["Pin ", o + 1, " / ", n]
            })]
        }), l.jsx(be, {
            value: o / n
        })]
    })
}
const yw = e => e.toString(2).replace(/0/g, "").length
  , vw = 450;
function yf(e, t, n) {
    const r = Math.min(e - 1, 2 + Math.floor(t / 2));
    let s;
    do
        s = K(1, 2 ** e - 1);
    while (yw(s) < r || s === n);
    return s
}
function ww({settings: e, finish: t}) {
    const n = Y(Math.round(e.bits), 4, 8)
      , r = Math.max(1, Math.round(e.rounds))
      , s = Math.max(1, Math.round(e.lives))
      , [o,a] = h.useState(0)
      , [i,c] = h.useState(0)
      , [u,d] = h.useState( () => yf(n, 0, -1))
      , [f,m] = h.useState( () => Array(n).fill(!1))
      , [y,g] = h.useState(0)
      , [p,k] = h.useState(!1)
      , v = h.useRef(f)
      , x = h.useRef(!1)
      , w = h.useRef();
    h.useEffect( () => () => clearTimeout(w.current), []);
    const b = Array.from({
        length: n
    }, (S, R) => 2 ** (n - 1 - R))
      , M = S => {
        if (x.current || S < 0 || S >= n)
            return;
        const R = v.current.slice();
        if (R[S] = !R[S],
        v.current = R,
        m(R),
        R.reduce( (T, _, P) => T + (_ ? b[P] : 0), 0) === u) {
            if (x.current = !0,
            k(!0),
            W("correct", .5),
            o + 1 >= r)
                return t(!0);
            w.current = setTimeout( () => N(o + 1, o + 1), vw)
        }
    }
      , N = (S, R) => {
        const C = Array(n).fill(!1);
        v.current = C,
        m(C),
        d(T => yf(n, R, T)),
        a(S),
        c(T => T + 1),
        k(!1),
        x.current = !1
    }
      , j = () => {
        if (x.current)
            return;
        const S = y + 1;
        if (g(S),
        W("wrong", .4),
        S >= s)
            return t(!1, "time");
        N(o, o)
    }
    ;
    return ne(S => {
        S.repeat || S.key.length !== 1 || S.key < "1" || S.key > "9" || M(Number(S.key) - 1)
    }
    ),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", o + 1, "/", r]
            }), l.jsx(ee, {
                total: s,
                used: y,
                label: "Integrity"
            })]
        }), l.jsx("p", {
            className: "text-center text-xs text-muted",
            children: "Flip the switches until their values add up to the number"
        }), l.jsx("div", {
            className: `rounded border px-12 py-4 font-mono text-7xl font-semibold ${p ? "border-accent text-accent" : "border-line text-fg"}`,
            children: u
        }), l.jsx("div", {
            className: "flex gap-2",
            children: b.map( (S, R) => l.jsxs("button", {
                onMouseDown: () => M(R),
                className: "flex w-[60px] cursor-pointer flex-col items-center gap-1.5",
                children: [l.jsx("span", {
                    className: "text-xs text-muted",
                    children: S
                }), l.jsx("span", {
                    className: `flex h-16 w-full items-center justify-center rounded border-2 font-mono text-2xl font-semibold ${f[R] ? "border-accent bg-accent text-accent-ink" : "border-line bg-raised text-fg"}`,
                    children: f[R] ? 1 : 0
                }), l.jsx("span", {
                    className: "text-[10px] text-muted",
                    children: R + 1
                })]
            }, R))
        }), l.jsxs("div", {
            className: "mt-auto flex w-full flex-col gap-2",
            children: [l.jsx(be, {
                value: (o + (p ? 1 : 0)) / r
            }), l.jsx(Tt, {
                duration: e.timeLimit,
                onExpire: j
            }, i)]
        })]
    })
}
const vf = ["AND", "OR", "XOR", "NAND", "NOR", "XNOR"]
  , kw = (e, t, n) => {
    switch (e) {
    case "AND":
        return t && n;
    case "OR":
        return t || n;
    case "XOR":
        return t !== n;
    case "NAND":
        return !(t && n);
    case "NOR":
        return !(t || n);
    case "XNOR":
        return t === n
    }
}
;
function Ks(e, t) {
    const n = [];
    for (const r of e.nodes)
        r.kind === "in" ? n[r.id] = (t >> r.input & 1) === 1 : r.kind === "not" ? n[r.id] = !n[r.a] : n[r.id] = kw(r.op, n[r.a], n[r.b]);
    return n
}
const jw = e => e.toString(2).replace(/0/g, "").length;
function wf(e, t) {
    const n = []
      , r = Math.max(1, 2 * e - 2)
      , s = new Set(ie(Array.from({
        length: r
    }, (m, y) => y)).slice(0, Math.min(t, r)));
    let o = 0
      , a = 0;
    const i = ie(Array.from({
        length: e
    }, (m, y) => y))
      , c = m => (n.push({
        ...m,
        id: n.length
    }),
    n.length - 1)
      , u = m => s.has(o++) ? c({
        kind: "not",
        a: m
    }) : m
      , d = m => {
        if (m === 1)
            return c({
                kind: "in",
                input: i[a++]
            });
        const y = Y(Math.round(m * (.35 + Math.random() * .3)), 1, m - 1)
          , g = u(d(y))
          , p = u(d(m - y));
        return c({
            kind: "gate",
            op: vf[K(0, vf.length - 1)],
            a: g,
            b: p
        })
    }
      , f = d(e);
    return {
        nodes: n,
        root: f,
        inputs: e
    }
}
function dc(e) {
    const t = [];
    for (let n = 0; n < 1 << e.inputs; n++)
        Ks(e, n)[e.root] && t.push(n);
    return t
}
function kf(e, t, n=dc(e)) {
    return Math.min(...n.map(r => jw(r ^ t)))
}
const Ix = e => Math.min(2, e - 1);
function jf(e, t, n=0) {
    const r = Ix(e)
      , s = n > 0 ? Y(n, r, e) : e;
    for (let i = 0; i < 2; i++) {
        const c = i ? 1 : r;
        for (let u = 0; u < 400; u++) {
            const d = wf(e, t)
              , f = dc(d);
            if (!f.length || f.length > (1 << e) * .45)
                continue;
            const y = ie(Array.from({
                length: e
            }, (p, k) => k)).slice(0, K(c, Math.max(c, s))).reduce( (p, k) => p ^ 1 << k, f[K(0, f.length - 1)]);
            if (Ks(d, y)[d.root])
                continue;
            const g = kf(d, y, f);
            if (g >= c && g <= s)
                return {
                    circuit: d,
                    start: y,
                    min: g
                }
        }
    }
    const o = wf(e, t)
      , a = dc(o);
    for (let i = 0; i < 1 << e; i++)
        if (!Ks(o, i)[o.root])
            return {
                circuit: o,
                start: i,
                min: kf(o, i, a)
            };
    return {
        circuit: o,
        start: 0,
        min: 0
    }
}
const bf = 560
  , bw = 40
  , rl = 520
  , Sw = 58
  , Nw = 26;
function Mw(e, t) {
    const n = [];
    for (const c of e.nodes)
        n[c.id] = c.kind === "in" ? 0 : Math.max(n[c.a], c.b === void 0 ? 0 : n[c.b]) + 1;
    const r = n[e.root]
      , s = r > 1 ? (rl - 70 - 100) / (r - 1) : 0
      , o = e.nodes.filter(c => c.kind === "in")
      , a = o.length > 1 ? (t - 2 * 26) / (o.length - 1) : 0
      , i = [];
    o.forEach( (c, u) => i[c.id] = {
        x: bw,
        y: 26 + u * a,
        w: 46,
        h: 28
    });
    for (const c of e.nodes) {
        if (c.kind === "in")
            continue;
        const u = i[c.a].y
          , d = c.b === void 0 ? u : i[c.b].y
          , f = c.kind === "not";
        i[c.id] = {
            x: 100 + (n[c.id] - 1) * s,
            y: (u + d) / 2,
            w: f ? 36 : Sw,
            h: f ? 22 : Nw
        }
    }
    return i
}
const Ew = 800
  , Tw = 700;
function Rw({settings: e, finish: t}) {
    const n = Y(Math.round(e.inputs), 3, 8)
      , r = Y(Math.round(e.inverters), 0, 2 * n - 2)
      , s = Math.max(1, Math.round(e.rounds))
      , o = e.maxMoves > 0 ? Math.max(Ix(n), Math.round(e.maxMoves)) : 0
      , a = 40 + n * 44
      , [i,c] = h.useState(0)
      , [u,d] = h.useState(0)
      , [f,m] = h.useState( () => jf(n, r, o))
      , [y,g] = h.useState(0)
      , [p,k] = h.useState(f.start)
      , [v,x] = h.useState(!1)
      , [w,b] = h.useState(!1)
      , M = h.useRef(p)
      , N = h.useRef(!1)
      , j = h.useRef();
    h.useEffect( () => () => clearTimeout(j.current), []);
    const {circuit: S} = f
      , R = h.useMemo( () => Ks(S, p), [S, p])
      , C = h.useMemo( () => Mw(S, a), [S, a])
      , T = E => {
        if (N.current || E < 0 || E >= n)
            return;
        const A = M.current ^ 1 << E;
        M.current = A,
        k(A);
        const I = y + 1;
        if (g(I),
        !Ks(S, A)[S.root]) {
            if (o > 0 && I >= o) {
                N.current = !0,
                b(!0),
                W("wrong", .4),
                j.current = setTimeout( () => t(!1, "error"), Tw);
                return
            }
            return W("beep", .2)
        }
        N.current = !0,
        x(!0),
        W("correct", .5),
        j.current = setTimeout( () => {
            if (i + 1 >= s)
                return t(!0);
            const $ = jf(n, r, o);
            M.current = $.start,
            g(0),
            m($),
            k($.start),
            c(i + 1),
            d(F => F + 1),
            x(!1),
            N.current = !1
        }
        , Ew)
    }
      , _ = () => {
        N.current || (N.current = !0,
        W("wrong", .4),
        t(!1, "time"))
    }
    ;
    ne(E => {
        E.repeat || E.key.length !== 1 || E.key < "1" || E.key > "9" || T(Number(E.key) - 1)
    }
    );
    const P = (E, A, I) => {
        const $ = C[E]
          , F = $.x + $.w / 2
          , z = A.x
          , U = (F + z) / 2;
        return l.jsx("path", {
            d: `M${F} ${$.y} C${U} ${$.y} ${U} ${A.y} ${z} ${A.y}`,
            fill: "none",
            strokeWidth: R[E] ? 2.5 : 2,
            className: R[E] ? "stroke-accent" : "stroke-muted"
        }, `${E}-${I ?? "out"}`)
    }
      , L = C[S.root]
      , D = R[S.root];
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [i + 1, "/", s]
                })]
            }), l.jsx("span", {
                className: w ? "text-danger" : "text-fg",
                children: w ? "Out of moves" : "Flip the switches to light the output"
            }), l.jsxs("span", {
                children: ["Moves", " ", l.jsxs("span", {
                    className: `font-mono text-sm ${o > 0 && o - y <= 1 ? "text-danger" : "text-fg"}`,
                    children: [y, o > 0 ? ` / ${o}` : ""]
                })]
            })]
        }), l.jsx("div", {
            className: "flex min-h-0 flex-1 items-center",
            children: l.jsxs("svg", {
                viewBox: `0 0 ${bf} ${a}`,
                width: bf * 1.08,
                height: a * 1.08,
                className: "rounded border border-line bg-raised",
                children: [S.nodes.flatMap(E => {
                    if (E.kind === "in")
                        return [];
                    const A = C[E.id]
                      , I = E.b !== void 0 ? 7 : 0
                      , $ = [P(E.a, {
                        x: A.x - A.w / 2,
                        y: A.y - I
                    }, E.id)];
                    return E.b !== void 0 && $.push(P(E.b, {
                        x: A.x - A.w / 2,
                        y: A.y + I
                    }, E.id)),
                    $
                }
                ), P(S.root, {
                    x: rl - 24,
                    y: L.y
                }), S.nodes.map(E => {
                    const A = C[E.id]
                      , I = R[E.id];
                    if (E.kind === "in") {
                        const $ = E.input;
                        return l.jsxs("g", {
                            onMouseDown: () => T($),
                            className: "cursor-pointer",
                            children: [l.jsx("rect", {
                                x: A.x - A.w / 2,
                                y: A.y - A.h / 2,
                                width: A.w,
                                height: A.h,
                                rx: 4,
                                strokeWidth: 2,
                                className: I ? "fill-accent stroke-accent" : "fill-surface stroke-line"
                            }), l.jsx("text", {
                                x: A.x,
                                y: A.y + 5,
                                textAnchor: "middle",
                                className: `font-mono text-[14px] font-semibold ${I ? "fill-accent-ink" : "fill-fg"}`,
                                children: I ? 1 : 0
                            }), l.jsx("text", {
                                x: A.x - A.w / 2 - 7,
                                y: A.y + 4,
                                textAnchor: "end",
                                className: "fill-muted font-mono text-[10px]",
                                children: $ + 1
                            })]
                        }, E.id)
                    }
                    return l.jsxs("g", {
                        children: [l.jsx("rect", {
                            x: A.x - A.w / 2,
                            y: A.y - A.h / 2,
                            width: A.w,
                            height: A.h,
                            rx: 4,
                            strokeWidth: 2,
                            className: `fill-surface ${I ? "stroke-accent" : "stroke-line"}`
                        }), l.jsx("text", {
                            x: A.x,
                            y: A.y + 4,
                            textAnchor: "middle",
                            className: `font-mono text-[11px] font-semibold ${I ? "fill-accent" : "fill-muted"}`,
                            children: E.kind === "not" ? "NOT" : E.op
                        })]
                    }, E.id)
                }
                ), l.jsxs("g", {
                    children: [l.jsx("rect", {
                        x: rl - 24,
                        y: L.y - 17,
                        width: 56,
                        height: 34,
                        rx: 6,
                        strokeWidth: 2,
                        className: D ? "fill-accent stroke-accent" : "fill-surface stroke-line"
                    }), l.jsx("text", {
                        x: rl + 4,
                        y: L.y + 5,
                        textAnchor: "middle",
                        className: `font-mono text-[13px] font-semibold ${D ? "fill-accent-ink" : "fill-muted"}`,
                        children: "OUT"
                    })]
                })]
            })
        }), l.jsxs("div", {
            className: "mt-auto flex w-full flex-col gap-2",
            children: [l.jsx(be, {
                value: (i + (v ? 1 : 0)) / s
            }), l.jsx(Tt, {
                duration: e.timeLimit,
                onExpire: _
            }, u)]
        })]
    })
}
const fc = ["+", "−", "×", "÷"]
  , Aw = 9999;
function hc(e, t, n) {
    let r;
    switch (n) {
    case "+":
        r = e + t;
        break;
    case "−":
        r = e - t;
        break;
    case "×":
        r = e * t;
        break;
    case "÷":
        if (t === 0 || e % t !== 0)
            return null;
        r = e / t;
        break
    }
    return r >= 1 && r <= Aw ? r : null
}
function Sf(e, t) {
    for (let s = 0; s < 1e3; s++) {
        const o = Array.from({
            length: e
        }, () => K(2, t));
        let a = o.map(u => ({
            v: u,
            e: String(u)
        }));
        for (; a.length > 1; ) {
            const [u,d] = ie(a.map( (m, y) => y)).slice(0, 2)
              , f = [];
            for (const m of fc)
                for (const [y,g] of [[a[u], a[d]], [a[d], a[u]]]) {
                    const p = hc(y.v, g.v, m);
                    p !== null && f.push({
                        v: p,
                        e: `(${y.e} ${m} ${g.e})`
                    })
                }
            if (!f.length)
                break;
            a = a.filter( (m, y) => y !== u && y !== d).concat(f[K(0, f.length - 1)])
        }
        if (a.length !== 1)
            continue;
        const i = a[0].v;
        if (i < 3 || o.includes(i))
            continue;
        let c = !1;
        for (const u of o)
            for (const d of o)
                for (const f of fc)
                    hc(u, d, f) === i && (c = !0);
        if (!(e > 2 && c))
            return {
                numbers: o,
                target: i,
                expr: a[0].e
            }
    }
    const n = [3, 4, 5, 6, 7].slice(0, Math.max(3, e))
      , r = 3 * 4 + n.slice(2).reduce( (s, o) => s + o, 0);
    return {
        numbers: n,
        target: r,
        expr: `(3 × 4) + ${n.slice(2).join(" + ")}`
    }
}
const Cw = 800
  , Lw = 700;
function $w({settings: e, finish: t}) {
    const n = Y(Math.round(e.numbers), 3, 5)
      , r = Math.max(1, Math.round(e.rounds))
      , s = Math.max(1, Math.round(e.lives))
      , o = Y(Math.round(e.maxNumber), 4, 30)
      , a = Math.max(0, e.undoPenalty)
      , i = Math.max(0, e.resetPenalty)
      , c = h.useRef(0)
      , u = V => V.map(Q => ({
        id: c.current++,
        value: Q
    }))
      , [d,f] = h.useState(0)
      , [m,y] = h.useState( () => Sf(n, o))
      , [g,p] = h.useState( () => u(m.numbers))
      , [k,v] = h.useState([])
      , [x,w] = h.useState(null)
      , [b,M] = h.useState(null)
      , [N,j] = h.useState(0)
      , [S,R] = h.useState("")
      , [C,T] = h.useState(0)
      , [_,P] = h.useState(!1)
      , L = h.useRef(!1)
      , D = se(e.timeLimit, () => O(), !_)
      , E = h.useRef();
    h.useEffect( () => () => clearTimeout(E.current), []);
    const A = () => {
        w(null),
        M(null)
    }
      , I = () => {
        p(u(m.numbers)),
        v([]),
        A(),
        R("")
    }
      , $ = (V, Q, ye) => {
        const Me = hc(V.value, Q.value, ye);
        if (Me === null) {
            W("wrong", .3),
            T(de => de + 1),
            R(ye === "÷" && Q.value !== 0 && V.value % Q.value !== 0 ? "Division must be exact" : "Result must be a positive whole number"),
            M(null);
            return
        }
        R("");
        const J = {
            id: c.current++,
            value: Me
        }
          , ce = g.flatMap(de => de.id === V.id ? [] : de.id === Q.id ? [J] : [de]);
        if (v(de => [...de, g]),
        p(ce),
        A(),
        Me === m.target) {
            L.current = !0,
            P(!0),
            W("correct", .5),
            E.current = setTimeout( () => {
                if (d + 1 >= r)
                    return t(!0);
                const de = Sf(n, o);
                y(de),
                p(u(de.numbers)),
                v([]),
                R(""),
                P(!1),
                f(d + 1),
                L.current = !1
            }
            , Cw);
            return
        }
        if (ce.length === 1) {
            L.current = !0;
            const de = N + 1;
            j(de),
            T(Ve => Ve + 1),
            R(`Ended on ${Me}, not ${m.target}`),
            W("wrong", .4),
            E.current = setTimeout( () => {
                if (de >= s)
                    return t(!1, "error");
                I(),
                L.current = !1
            }
            , Lw)
        } else
            W("beep", .25)
    }
      , F = V => {
        if (L.current || V < 0 || V >= g.length)
            return;
        const Q = g[V];
        if (x === null || b === null) {
            if (x === Q.id)
                return A();
            w(Q.id),
            R("");
            return
        }
        if (Q.id === x)
            return A();
        const ye = g.find(Me => Me.id === x);
        ye && $(ye, Q, b)
    }
      , z = V => {
        L.current || x === null || M(b === V ? null : V)
    }
      , U = () => {
        L.current || !k.length || (D.penalize(a),
        p(k[k.length - 1]),
        v(k.slice(0, -1)),
        A(),
        R(""))
    }
      , B = () => {
        L.current || !k.length || (D.penalize(i),
        I())
    }
      , O = () => {
        L.current || (L.current = !0,
        W("wrong", .4),
        t(!1, "time"))
    }
    ;
    ne(V => {
        if (V.repeat)
            return;
        if (V.key >= "1" && V.key <= "9")
            return F(Number(V.key) - 1);
        const Q = {
            "+": "+",
            "-": "−",
            "*": "×",
            x: "×",
            "/": "÷"
        };
        if (Q[V.key])
            return V.preventDefault(),
            z(Q[V.key]);
        V.key === "Backspace" || V.key.toLowerCase() === "z" ? U() : V.key.toLowerCase() === "r" && B()
    }
    );
    const H = g.find(V => V.id === x);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [d + 1, "/", r]
                })]
            }), l.jsx(ee, {
                total: s,
                used: N,
                label: "Integrity"
            })]
        }), l.jsx("p", {
            className: "text-center text-xs text-muted",
            children: "Merge two numbers with an operator. Reach the target."
        }), l.jsx("div", {
            className: `rounded border px-12 py-3 font-mono text-6xl font-semibold ${_ ? "border-accent text-accent" : "border-line text-fg"}`,
            children: m.target
        }), l.jsx("div", {
            className: `flex min-h-[96px] items-center justify-center gap-3 ${C && S ? "shake" : ""}`,
            children: g.map( (V, Q) => {
                const ye = V.id === x;
                return l.jsxs("button", {
                    onMouseDown: () => F(Q),
                    className: `pop relative flex h-20 min-w-[88px] cursor-pointer items-center justify-center rounded border-2 px-3 font-mono text-3xl font-semibold ${_ && V.value === m.target ? "border-accent bg-accent text-accent-ink" : ye ? "border-accent bg-accent-soft text-accent" : "border-line bg-raised text-fg hover:border-accent-line"}`,
                    children: [V.value, l.jsx("span", {
                        className: "absolute left-1.5 top-0.5 text-[10px] font-normal text-muted",
                        children: Q + 1
                    })]
                }, V.id)
            }
            )
        }, C), l.jsx("div", {
            className: "flex gap-2",
            children: fc.map(V => l.jsx("button", {
                onMouseDown: () => z(V),
                className: `flex h-12 w-14 cursor-pointer items-center justify-center rounded border-2 font-mono text-2xl font-semibold ${b === V ? "border-accent bg-accent text-accent-ink" : x === null ? "border-line bg-raised text-muted" : "border-line bg-raised text-fg hover:border-accent-line"}`,
                children: V
            }, V))
        }), l.jsx("div", {
            className: "h-5 text-center text-xs",
            children: S ? l.jsx("span", {
                className: "text-danger",
                children: S
            }) : H ? l.jsxs("span", {
                className: "font-mono text-fg",
                children: [H.value, " ", b ?? "?", " ?"]
            }) : l.jsx("span", {
                className: "text-muted",
                children: "Pick a number, an operator, then a second number"
            })
        }), l.jsxs("div", {
            className: "flex gap-2 text-xs",
            children: [l.jsxs("button", {
                onMouseDown: U,
                disabled: !k.length,
                className: "cursor-pointer rounded border border-line bg-raised px-4 py-1.5 text-fg hover:border-accent-line disabled:cursor-default disabled:text-muted disabled:hover:border-line",
                children: ["Undo (Z)", a > 0 && l.jsxs("span", {
                    className: "ml-1.5 text-warn",
                    children: ["−", a / 1e3, "s"]
                })]
            }), l.jsxs("button", {
                onMouseDown: B,
                disabled: !k.length,
                className: "cursor-pointer rounded border border-line bg-raised px-4 py-1.5 text-fg hover:border-accent-line disabled:cursor-default disabled:text-muted disabled:hover:border-line",
                children: ["Reset (R)", i > 0 && l.jsxs("span", {
                    className: "ml-1.5 text-warn",
                    children: ["−", i / 1e3, "s"]
                })]
            })]
        }), l.jsxs("div", {
            className: "mt-auto flex w-full flex-col gap-2",
            children: [l.jsx(be, {
                value: (d + (_ ? 1 : 0)) / r
            }), l.jsx(re, {
                left: D.left,
                total: D.total
            })]
        })]
    })
}
const Pw = 900
  , Ow = 500
  , Nf = 160
  , Dw = 6e3
  , Mf = 900
  , Iw = 700
  , Ef = 12
  , Tf = [.5, 1, 1, 1.5, 2];
function _w(e, t) {
    return Math.max(10, Math.min(t, Math.ceil(6e4 / e / 4) - 1))
}
function zw(e, t, n) {
    const r = 6e4 / t
      , s = Tf.filter(c => r * c >= n * 2)
      , o = s.length ? s : [Math.max(...Tf)]
      , a = Math.max(1, e - 1)
      , i = new Set(o).size;
    for (let c = 0; c < 100; c++) {
        const u = Array.from({
            length: a
        }, () => Math.round(r * o[K(0, o.length - 1)]));
        if (a < 2 || i < 2 || new Set(u).size >= 2)
            return u
    }
    return Array.from({
        length: a
    }, (c, u) => Math.round(r * o[u % o.length]))
}
function Fw(e, t, n) {
    const r = e - t;
    return {
        ok: Math.abs(r) <= n,
        delta: r
    }
}
const Hw = (e, t) => {
    if (e.delta === null)
        return e.ok ? "" : "Missed beat";
    const n = Math.round(Math.abs(e.delta));
    return e.ok ? n <= t / 3 ? "On the beat" : e.delta < 0 ? `Early ${n} ms` : `Late ${n} ms` : `${e.delta < 0 ? "Early" : "Late"} by ${n} ms`
}
;
function Ww({settings: e, finish: t}) {
    const n = Math.max(1, Math.round(e.rounds))
      , r = Y(Math.round(e.beats), 3, Ef)
      , s = Y(e.bpm, 40, 160)
      , o = _w(s, Y(e.tolerance, 40, 400))
      , a = Math.max(1, Math.round(e.maxMisses))
      , i = h.useRef({
        gaps: [],
        idx: 0,
        last: 0,
        misses: 0,
        round: 0,
        phase: "listen",
        over: !1,
        wd: void 0
    })
      , c = h.useRef([])
      , u = (z, U) => {
        const B = setTimeout(z, U);
        return c.current.push(B),
        B
    }
      , [d,f] = h.useState(0)
      , [m,y] = h.useState("listen")
      , [g,p] = h.useState(r)
      , [k,v] = h.useState(0)
      , [x,w] = h.useState([])
      , [b,M] = h.useState(0)
      , [N,j] = h.useState(!1)
      , [S,R] = h.useState({
        text: "",
        bad: !1
    })
      , [C,T] = h.useState(0)
      , _ = () => clearTimeout(i.current.wd)
      , P = (z, U) => {
        const B = i.current;
        B.over || (B.over = !0,
        B.phase = "over",
        _(),
        y("over"),
        R({
            text: U,
            bad: !0
        }),
        T(O => O + 1),
        W("wrong", .4),
        u( () => t(!1, z), Iw))
    }
      , L = z => {
        const U = i.current
          , B = zw(Y(r + z, 3, Ef), s, o);
        U.gaps = B,
        U.idx = 0,
        U.round = z,
        U.phase = "listen",
        p(B.length + 1),
        w(Array(B.length + 1).fill(null)),
        v(0),
        y("listen"),
        R({
            text: "",
            bad: !1
        });
        let O = Pw;
        for (let H = 0; H <= B.length; H++)
            H > 0 && (O += B[H - 1]),
            u( () => {
                W("beep", .5),
                j(!0),
                v(H + 1),
                u( () => j(!1), Nf)
            }
            , O);
        u( () => {
            U.phase = "echo",
            y("echo"),
            U.wd = u( () => P("time", "No input"), Dw)
        }
        , O + Ow)
    }
    ;
    h.useEffect( () => (gv("beep"),
    L(0),
    () => {
        c.current.forEach(clearTimeout),
        c.current = []
    }
    ), []);
    const D = () => {
        const z = i.current;
        if (z.phase = "between",
        _(),
        y("between"),
        R({
            text: "Pattern echoed",
            bad: !1
        }),
        W("correct", .4),
        z.round + 1 >= n) {
            u( () => {
                z.over = !0,
                t(!0)
            }
            , Mf);
            return
        }
        u( () => {
            f(z.round + 1),
            L(z.round + 1)
        }
        , Mf)
    }
      , E = (z, U) => {
        const B = i.current
          , O = B.idx++
          , H = {
            ok: z,
            delta: U
        };
        if (w(V => V.map( (Q, ye) => ye === O ? H : Q)),
        R({
            text: Hw(H, o),
            bad: !z
        }),
        !z && (B.misses++,
        M(B.misses),
        T(V => V + 1),
        W("wrong", .25),
        B.misses >= a))
            return P("error", "Too many missed beats");
        if (B.idx > B.gaps.length)
            return D();
        B.wd = u( () => {
            B.over || B.phase !== "echo" || (B.last += B.gaps[B.idx - 1],
            E(!1, null))
        }
        , B.gaps[B.idx - 1] + o)
    }
      , A = () => {
        const z = i.current;
        if (z.over || z.phase !== "echo")
            return;
        const U = performance.now();
        if (_(),
        W("beep", .4),
        j(!0),
        u( () => j(!1), Nf),
        z.idx === 0)
            return z.last = U,
            E(!0, null);
        const {ok: B, delta: O} = Fw(U - z.last, z.gaps[z.idx - 1], o);
        z.last = U,
        E(B, O)
    }
    ;
    ne(z => {
        z.key === " " && (z.preventDefault(),
        z.repeat || A())
    }
    );
    const I = m === "listen" ? "Listen to the rhythm" : m === "echo" ? x.some(Boolean) ? "Keep the rhythm" : "Tap it back. Your first tap starts it" : ""
      , $ = x.filter(Boolean).length
      , F = S.bad;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [d + 1, "/", n]
                })]
            }), l.jsx("span", {
                className: "text-fg",
                children: I
            }), l.jsx(ee, {
                total: a,
                used: Math.min(b, a),
                label: "Misses"
            })]
        }), l.jsx("div", {
            className: "flex flex-1 items-center",
            children: l.jsx("button", {
                onMouseDown: A,
                className: `flex h-44 w-44 items-center justify-center rounded-full border-4 font-mono text-lg font-semibold ${N ? "border-accent bg-accent text-accent-ink" : m === "echo" ? "cursor-pointer border-accent-line bg-raised text-accent hover:border-accent" : "border-line bg-raised text-muted"}`,
                children: m === "listen" ? "LISTEN" : m === "echo" ? "TAP" : ""
            })
        }), l.jsx("div", {
            className: `flex gap-2 ${C && F ? "shake" : ""}`,
            children: Array.from({
                length: g
            }, (z, U) => {
                const B = x[U]
                  , O = m === "listen" ? U < k : !!B;
                return l.jsx("span", {
                    className: `h-3.5 w-3.5 rounded-full ${O ? m === "listen" || B != null && B.ok ? "bg-accent" : "bg-danger" : "bg-track"}`
                }, U)
            }
            )
        }, C), l.jsx("div", {
            className: `h-5 text-center text-xs ${F ? "text-danger" : "text-fg"}`,
            children: S.text
        }), l.jsx("p", {
            className: "text-xs text-muted",
            children: "Space or click"
        }), l.jsx("div", {
            className: "w-full",
            children: l.jsx(be, {
                value: (d + (m === "echo" ? $ / g : m === "between" ? 1 : 0)) / n
            })
        })]
    })
}
const Uw = 900
  , Bw = 700
  , Vw = 450;
function Yw(e) {
    const t = Array.from({
        length: e
    }, (o, a) => a)
      , n = ie(t)
      , r = ie(t)
      , s = ie(t);
    return n.map(o => r.map(a => s[(o + a) % e] + 1))
}
const Gw = (e, t, n, r) => {
    for (let s = 0; s < e.length; s++)
        if (e[t][s] === r || e[s][n] === r)
            return !1;
    return !0
}
;
function Kw(e, t=2) {
    const n = e.length
      , r = e.map(a => a.slice());
    let s = 0;
    const o = () => {
        let a = -1
          , i = -1
          , c = [];
        for (let u = 0; u < n; u++)
            for (let d = 0; d < n; d++) {
                if (r[u][d])
                    continue;
                const f = [];
                for (let m = 1; m <= n; m++)
                    Gw(r, u, d, m) && f.push(m);
                if ((a < 0 || f.length < c.length) && (a = u,
                i = d,
                c = f),
                !f.length)
                    return
            }
        if (a < 0) {
            s++;
            return
        }
        for (const u of c)
            if (r[a][i] = u,
            o(),
            r[a][i] = 0,
            s >= t)
                return
    }
    ;
    return o(),
    s
}
function qw(e, t) {
    const n = Yw(e)
      , r = n.map(a => a.slice())
      , s = ie(Array.from({
        length: e * e
    }, (a, i) => i));
    let o = e * e;
    for (const a of s) {
        if (o <= t)
            break;
        const i = Math.floor(a / e)
          , c = a % e
          , u = r[i][c];
        r[i][c] = 0,
        Kw(r) === 1 ? o-- : r[i][c] = u
    }
    return {
        solution: n,
        puzzle: r
    }
}
function Xw({settings: e, finish: t}) {
    const n = Y(Math.round(e.gridSize), 3, 6)
      , r = Y(Math.round(e.givens), n, n * n - 1)
      , s = Math.max(1, Math.round(e.maxMistakes))
      , [o] = h.useState( () => qw(n, r))
      , a = h.useRef(o.puzzle.map(P => P.map(L => L !== 0))).current
      , [i,c] = h.useState( () => o.puzzle.map(P => P.slice()))
      , [u,d] = h.useState( () => {
        const P = o.puzzle.flat().indexOf(0);
        return P < 0 ? null : P
    }
    )
      , [f,m] = h.useState(0)
      , [y,g] = h.useState(null)
      , [p,k] = h.useState({
        text: "",
        bad: !1
    })
      , [v,x] = h.useState(!1)
      , w = h.useRef(!1)
      , b = h.useRef([])
      , M = (P, L) => void b.current.push(setTimeout(P, L));
    h.useEffect( () => () => b.current.forEach(clearTimeout), []);
    const N = se(e.timeLimit, () => j("time", "Time's up"), !v)
      , j = (P, L) => {
        w.current || (w.current = !0,
        x(!0),
        k({
            text: L,
            bad: !0
        }),
        W("wrong", .4),
        M( () => t(!1, P), Bw))
    }
      , S = P => {
        if (w.current || u === null || P < 1 || P > n)
            return;
        const L = Math.floor(u / n)
          , D = u % n;
        if (a[L][D] || i[L][D])
            return;
        if (o.solution[L][D] !== P) {
            const I = f + 1;
            if (m(I),
            g(u),
            M( () => g(null), Vw),
            k({
                text: `${P} does not belong there`,
                bad: !0
            }),
            I >= s)
                return j("error", "Too many mistakes");
            W("wrong", .3);
            return
        }
        const E = i.map( (I, $) => $ === L ? I.map( (F, z) => z === D ? P : F) : I);
        c(E),
        k({
            text: "",
            bad: !1
        });
        const A = E.flat().map( (I, $) => I ? -1 : $).filter(I => I >= 0);
        if (!A.length) {
            w.current = !0,
            x(!0),
            d(null),
            k({
                text: "Square complete",
                bad: !1
            }),
            W("correct", .5),
            M( () => t(!0), Uw);
            return
        }
        W("beep", .25),
        d(A.find(I => I > u) ?? A[0])
    }
      , R = (P, L) => {
        if (w.current)
            return;
        const D = u ?? 0
          , E = Y(Math.floor(D / n) + P, 0, n - 1)
          , A = Y(D % n + L, 0, n - 1);
        d(E * n + A)
    }
    ;
    ne(P => {
        if (P.key >= "1" && P.key <= "9")
            return S(Number(P.key));
        const L = {
            ArrowUp: [-1, 0],
            ArrowDown: [1, 0],
            ArrowLeft: [0, -1],
            ArrowRight: [0, 1]
        };
        L[P.key] && (P.preventDefault(),
        R(...L[P.key]))
    }
    );
    const C = P => i.flat().filter(L => L === P).length
      , T = u === null ? -1 : Math.floor(u / n)
      , _ = u === null ? -1 : u % n;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: "Each digit once per row and column"
            }), l.jsx(ee, {
                total: s,
                used: Math.min(f, s),
                label: "Mistakes"
            })]
        }), l.jsx("div", {
            className: "flex flex-1 items-center",
            children: l.jsx("div", {
                className: "grid aspect-square w-[340px] gap-1.5",
                style: {
                    gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${n}, minmax(0, 1fr))`
                },
                children: i.flatMap( (P, L) => P.map( (D, E) => {
                    const A = L * n + E
                      , I = a[L][E];
                    return l.jsx("button", {
                        onMouseDown: () => !w.current && !I && !D && d(A),
                        className: `flex items-center justify-center rounded border-2 font-mono text-3xl font-semibold ${y === A ? "shake border-danger bg-danger-soft text-danger" : A === u ? "border-accent bg-accent-soft text-accent" : I ? "border-line bg-track text-fg" : D ? "border-accent-line bg-raised text-accent" : L === T || E === _ ? "cursor-pointer border-line bg-accent-faint hover:border-accent-line" : "cursor-pointer border-line bg-raised hover:border-accent-line"}`,
                        children: D || ""
                    }, A)
                }
                ))
            })
        }), l.jsx("div", {
            className: "flex gap-2",
            children: Array.from({
                length: n
            }, (P, L) => {
                const D = L + 1
                  , E = C(D) >= n;
                return l.jsx("button", {
                    onMouseDown: () => S(D),
                    disabled: E,
                    className: "flex h-11 w-11 cursor-pointer items-center justify-center rounded border-2 border-line bg-raised font-mono text-xl font-semibold text-fg hover:border-accent-line disabled:cursor-default disabled:text-muted disabled:hover:border-line",
                    children: D
                }, D)
            }
            )
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${p.bad ? "text-danger" : "text-fg"}`,
            children: p.text || "Pick a cell, then a digit (keys 1-9, arrows move)"
        }), l.jsx("div", {
            className: "w-full",
            children: l.jsx(re, {
                left: N.left,
                total: N.total
            })
        })]
    })
}
const Rf = 800
  , Qw = 700;
function $l(e, t, n) {
    const r = e.slice()
      , s = Math.floor(n / t)
      , o = n % t;
    return r[n] ^= 1,
    s > 0 && (r[n - t] ^= 1),
    s < t - 1 && (r[n + t] ^= 1),
    o > 0 && (r[n - 1] ^= 1),
    o < t - 1 && (r[n + 1] ^= 1),
    r
}
function Zw(e, t) {
    const n = t * t
      , r = Array.from({
        length: n
    }, (c, u) => Array.from({
        length: n + 1
    }, (d, f) => f === n ? e[u] : $l(Array(n).fill(0), t, f)[u]))
      , s = [];
    let o = 0;
    for (let c = 0; c < n && o < n; c++) {
        let u = o;
        for (; u < n && !r[u][c]; )
            u++;
        if (u !== n) {
            [r[o],r[u]] = [r[u], r[o]];
            for (let d = 0; d < n; d++)
                if (d !== o && r[d][c])
                    for (let f = c; f <= n; f++)
                        r[d][f] ^= r[o][f];
            s.push(c),
            o++
        }
    }
    for (let c = o; c < n; c++)
        if (r[c][n])
            return -1;
    const a = Array.from({
        length: n
    }, (c, u) => u).filter(c => !s.includes(c));
    let i = 1 / 0;
    for (let c = 0; c < 1 << a.length; c++) {
        const u = Array(n).fill(0);
        a.forEach( (d, f) => u[d] = c >> f & 1),
        s.forEach( (d, f) => {
            let m = r[f][n];
            a.forEach( (y, g) => {
                c >> g & 1 && (m ^= r[f][y])
            }
            ),
            u[d] = m
        }
        ),
        i = Math.min(i, u.reduce( (d, f) => d + f, 0))
    }
    return i
}
function Af(e, t, n=0) {
    const r = e * e
      , s = n > 0 ? Math.min(t, n) : t
      , o = Math.min(2, s);
    let a = null;
    for (let i = 0; i < 300; i++) {
        let c = Array(r).fill(0);
        for (const d of ie(Array.from({
            length: r
        }, (f, m) => m)).slice(0, s))
            c = $l(c, e, d);
        const u = Zw(c, e);
        if (!(u < 1) && !(n > 0 && u > n)) {
            if (u >= o)
                return {
                    board: c,
                    min: u
                };
            a ?? (a = {
                board: c,
                min: u
            })
        }
    }
    return a || {
        board: $l(Array(r).fill(0), e, Math.floor(r / 2)),
        min: 1
    }
}
function Jw({settings: e, finish: t}) {
    const n = Y(Math.round(e.gridSize), 3, 6)
      , r = Math.max(1, Math.round(e.rounds))
      , s = Y(Math.round(e.scramble), 2, n * n - 1)
      , o = e.maxMoves > 0 ? Math.max(2, Math.round(e.maxMoves)) : 0
      , [a,i] = h.useState(0)
      , [c,u] = h.useState( () => Af(n, s, o))
      , [d,f] = h.useState(c.board)
      , [m,y] = h.useState(0)
      , [g,p] = h.useState(Math.floor(n * n / 2))
      , [k,v] = h.useState(!1)
      , [x,w] = h.useState({
        text: "",
        bad: !1
    })
      , b = h.useRef(!1)
      , M = h.useRef([])
      , N = (T, _) => void M.current.push(setTimeout(T, _));
    h.useEffect( () => () => M.current.forEach(clearTimeout), []);
    const j = se(e.timeLimit, () => S(), !k)
      , S = () => {
        b.current || (b.current = !0,
        v(!0),
        w({
            text: "Time's up",
            bad: !0
        }),
        W("wrong", .4),
        t(!1, "time"))
    }
      , R = T => {
        if (b.current || k || T < 0 || T >= n * n)
            return;
        const _ = $l(d, n, T)
          , P = m + 1;
        if (f(_),
        y(P),
        p(T),
        _.every(L => !L)) {
            if (v(!0),
            w({
                text: "Grid dark",
                bad: !1
            }),
            W("correct", .5),
            a + 1 >= r)
                return b.current = !0,
                void N( () => t(!0), Rf);
            N( () => {
                const L = Af(n, s, o);
                u(L),
                f(L.board),
                y(0),
                w({
                    text: "",
                    bad: !1
                }),
                i(a + 1),
                v(!1)
            }
            , Rf);
            return
        }
        if (o > 0 && P >= o)
            return b.current = !0,
            v(!0),
            w({
                text: "Out of moves",
                bad: !0
            }),
            W("wrong", .4),
            void N( () => t(!1, "error"), Qw);
        W("beep", .2)
    }
    ;
    ne(T => {
        if ({
            ArrowUp: -n,
            ArrowDown: n,
            ArrowLeft: -1,
            ArrowRight: 1
        }[T.key] !== void 0) {
            T.preventDefault();
            const P = Math.floor(g / n) + (T.key === "ArrowUp" ? -1 : T.key === "ArrowDown" ? 1 : 0)
              , L = g % n + (T.key === "ArrowLeft" ? -1 : T.key === "ArrowRight" ? 1 : 0);
            P >= 0 && P < n && L >= 0 && L < n && p(P * n + L)
        } else
            (T.key === " " || T.key === "Enter") && !T.repeat && (T.preventDefault(),
            R(g))
    }
    );
    const C = d.filter(Boolean).length;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [a + 1, "/", r]
                })]
            }), l.jsxs("span", {
                children: ["Lit ", l.jsx("span", {
                    className: "font-mono text-sm text-accent",
                    children: C
                })]
            }), l.jsxs("span", {
                children: ["Moves", " ", l.jsx("span", {
                    className: `font-mono text-sm ${o > 0 && o - m <= 2 ? "text-warn" : "text-accent"}`,
                    children: o > 0 ? `${m}/${o}` : m
                })]
            })]
        }), l.jsx("div", {
            className: "flex flex-1 items-center",
            children: l.jsx("div", {
                className: "grid aspect-square w-[330px] gap-1.5",
                style: {
                    gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${n}, minmax(0, 1fr))`
                },
                children: d.map( (T, _) => l.jsx("button", {
                    onMouseDown: () => R(_),
                    className: `cursor-pointer rounded border-2 ${T ? "border-accent bg-accent" : _ === g ? "border-accent-line bg-raised" : "border-line bg-raised hover:border-accent-line"}`
                }, _))
            })
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${x.bad ? "text-danger" : "text-fg"}`,
            children: x.text || (o > 0 ? "A press flips the cell and its four neighbours" : "A press flips the cell and its four neighbours. No move limit")
        }), l.jsxs("div", {
            className: "flex w-full flex-col gap-2",
            children: [l.jsx(be, {
                value: (a + (k ? 1 : 0)) / r
            }), l.jsx(re, {
                left: j.left,
                total: j.total
            })]
        })]
    })
}
const cn = 4
  , Cf = 800
  , ek = 700
  , qs = e => e[e.length - 1]
  , _x = e => {
    let t = 0;
    for (; t < e.length && e[e.length - 1 - t] === qs(e); )
        t++;
    return t
}
;
function tk(e, t, n) {
    if (t === n)
        return {
            error: "same"
        };
    const r = e[t]
      , s = e[n];
    if (!r.length)
        return {
            error: "empty"
        };
    if (s.length && qs(s) !== qs(r))
        return {
            error: "color"
        };
    const o = Math.min(_x(r), cn - s.length);
    if (o <= 0)
        return {
            error: "full"
        };
    const a = e.map(c => c.slice())
      , i = a[t].splice(a[t].length - o, o);
    return a[n].push(...i),
    {
        tubes: a
    }
}
const zx = e => e.every(t => t.length === 0 || t.length === cn && t.every(n => n === t[0]));
function nk(e, t, n) {
    const r = e + t;
    for (let o = 0; o < 200; o++) {
        const a = Array.from({
            length: r
        }, (c, u) => u < e ? Array(cn).fill(u) : [])
          , i = [];
        for (let c = 0; c < n * 30 && i.length < n; c++) {
            const u = K(0, r - 1)
              , d = a[u];
            if (!d.length)
                continue;
            const f = qs(d)
              , m = _x(d)
              , y = Array.from({
                length: m
            }, (x, w) => w + 1).filter(x => x < m || d.length === x)
              , g = y[K(0, y.length - 1)]
              , p = i[0]
              , k = ie(Array.from({
                length: r
            }, (x, w) => w)).filter(x => x !== u && a[x].length + g <= cn && (!a[x].length || qs(a[x]) !== f) && !(p && p[0] === u && p[1] === x));
            if (!k.length)
                continue;
            const v = k[0];
            a[v].push(...d.splice(d.length - g, g)),
            i.unshift([v, u])
        }
        if (i.length >= Math.min(n, 2) && !zx(a))
            return {
                tubes: a,
                steps: i.length,
                trail: i
            }
    }
    const s = Array.from({
        length: e + t
    }, (o, a) => a < e ? Array(cn).fill(a) : []);
    return s[0][cn - 1] = 1,
    s[1][cn - 1] = 0,
    {
        tubes: s,
        steps: 3,
        trail: []
    }
}
const Pl = [l.jsx("circle", {
    cx: "12",
    cy: "12",
    r: "6"
}, "c"), l.jsx("path", {
    d: "M12 5 19 18H5Z"
}, "t"), l.jsx("rect", {
    x: "6.5",
    y: "6.5",
    width: "11",
    height: "11"
}, "s"), l.jsx("path", {
    d: "M12 4 20 12 12 20 4 12Z"
}, "d"), l.jsx("path", {
    d: "M10 5h4v5h5v4h-5v5h-4v-5H5v-4h5Z"
}, "p"), l.jsx("path", {
    d: "m12 4 2.4 5.2 5.6.6-4.2 3.8 1.2 5.6L12 16.4 7 19.2l1.2-5.6L4 9.8l5.6-.6Z"
}, "st")];
function rk({color: e, symbols: t, small: n}) {
    return l.jsx("span", {
        className: `flex items-center justify-center rounded-lg ${n ? "h-8 w-8" : "h-10 w-10"}`,
        style: {
            backgroundColor: `var(--tok-${e + 1})`
        },
        children: t && l.jsx("svg", {
            viewBox: "0 0 24 24",
            className: `fill-surface stroke-fg ${n ? "h-5 w-5" : "h-7 w-7"}`,
            strokeWidth: "1.4",
            strokeLinejoin: "round",
            children: Pl[e % Pl.length]
        })
    })
}
const sk = {
    empty: "That tube is empty",
    same: "",
    color: "Colors do not match",
    full: "That tube is full"
};
function ok({settings: e, finish: t}) {
    const n = Y(Math.round(e.colors), 3, 6)
      , r = Y(Math.round(e.extraTubes), 1, 3)
      , s = Math.max(1, Math.round(e.rounds))
      , o = e.maxMoves > 0 ? Math.max(2, Math.round(e.maxMoves)) : 0
      , a = Y(Math.round(e.scramble), 2, 60)
      , i = Math.max(0, e.undoPenalty)
      , c = Math.max(0, e.resetPenalty)
      , u = e.symbols !== !1
      , d = e.colorblind === !0
      , f = () => nk(n, r, o > 0 ? Math.min(a, o) : a).tubes
      , [m,y] = h.useState(0)
      , [g,p] = h.useState(f)
      , [k,v] = h.useState(g)
      , [x,w] = h.useState([])
      , [b,M] = h.useState(0)
      , [N,j] = h.useState(null)
      , [S,R] = h.useState(!1)
      , [C,T] = h.useState({
        text: "",
        bad: !1
    })
      , [_,P] = h.useState(0)
      , L = h.useRef(!1)
      , D = h.useRef([])
      , E = (O, H) => void D.current.push(setTimeout(O, H));
    h.useEffect( () => () => D.current.forEach(clearTimeout), []);
    const A = se(e.timeLimit, () => I(), !S)
      , I = () => {
        L.current || (L.current = !0,
        R(!0),
        T({
            text: "Time's up",
            bad: !0
        }),
        W("wrong", .4),
        t(!1, "time"))
    }
      , $ = O => {
        if (S || L.current || O < 0 || O >= k.length)
            return;
        if (N === null) {
            if (!k[O].length)
                return;
            j(O),
            T({
                text: "",
                bad: !1
            });
            return
        }
        if (N === O)
            return j(null);
        const H = tk(k, N, O);
        if (j(null),
        "error"in H) {
            T({
                text: sk[H.error],
                bad: !0
            }),
            P(Q => Q + 1),
            W("wrong", .3);
            return
        }
        const V = b + 1;
        if (w(Q => [...Q, {
            tubes: k,
            moves: b
        }]),
        v(H.tubes),
        M(V),
        T({
            text: "",
            bad: !1
        }),
        zx(H.tubes)) {
            if (R(!0),
            T({
                text: "Sorted",
                bad: !1
            }),
            W("correct", .5),
            m + 1 >= s)
                return L.current = !0,
                void E( () => t(!0), Cf);
            E( () => {
                const Q = f();
                p(Q),
                v(Q),
                w([]),
                M(0),
                T({
                    text: "",
                    bad: !1
                }),
                y(m + 1),
                R(!1)
            }
            , Cf);
            return
        }
        if (o > 0 && V >= o)
            return L.current = !0,
            R(!0),
            T({
                text: "Out of moves",
                bad: !0
            }),
            W("wrong", .4),
            void E( () => t(!1, "error"), ek);
        W("beep", .2)
    }
      , F = () => {
        if (S || L.current || !x.length)
            return;
        A.penalize(i);
        const O = x[x.length - 1];
        v(O.tubes),
        M(O.moves),
        w(x.slice(0, -1)),
        j(null),
        T({
            text: "",
            bad: !1
        })
    }
      , z = () => {
        S || L.current || !x.length || (A.penalize(c),
        v(g),
        M(0),
        w([]),
        j(null),
        T({
            text: "",
            bad: !1
        }))
    }
    ;
    ne(O => {
        if (!O.repeat) {
            if (O.key >= "1" && O.key <= "9")
                return $(Number(O.key) - 1);
            O.key === "Backspace" || O.key.toLowerCase() === "z" ? F() : O.key.toLowerCase() === "r" && z()
        }
    }
    );
    const U = k.length > 7
      , B = "cursor-pointer rounded border border-line bg-raised px-4 py-1.5 text-fg hover:border-accent-line disabled:cursor-default disabled:text-muted disabled:hover:border-line";
    return l.jsxs("div", {
        className: `flex h-full flex-col items-center gap-3 p-4 ${d ? "palette-cb" : ""}`,
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [m + 1, "/", s]
                })]
            }), l.jsxs("span", {
                children: ["Moves", " ", l.jsx("span", {
                    className: `font-mono text-sm ${o > 0 && o - b <= 2 ? "text-warn" : "text-accent"}`,
                    children: o > 0 ? `${b}/${o}` : b
                })]
            })]
        }), l.jsx("div", {
            className: `flex flex-1 flex-wrap content-center items-end justify-center ${U ? "gap-2" : "gap-3"} ${_ && C.bad ? "shake" : ""}`,
            children: k.map( (O, H) => l.jsxs("button", {
                onMouseDown: () => $(H),
                className: `relative flex ${U ? "w-[44px]" : "w-[56px]"} cursor-pointer flex-col-reverse items-center gap-1 rounded-b-2xl rounded-t border-2 p-1 ${N === H ? "-translate-y-2 border-accent bg-accent-soft" : "border-line bg-raised hover:border-accent-line"}`,
                style: {
                    height: cn * (U ? 36 : 44) + 12
                },
                children: [O.map( (V, Q) => l.jsx(rk, {
                    color: V,
                    symbols: u,
                    small: U
                }, Q)), l.jsx("span", {
                    className: "absolute -bottom-5 text-[10px] text-muted",
                    children: H + 1
                })]
            }, H))
        }, _), l.jsx("div", {
            className: `mt-3 h-5 text-center text-xs ${C.bad ? "text-danger" : "text-fg"}`,
            children: C.text || "Pick a tube, then where to pour it. Colors must match"
        }), l.jsxs("div", {
            className: "flex gap-2 text-xs",
            children: [l.jsxs("button", {
                onMouseDown: F,
                disabled: !x.length,
                className: B,
                children: ["Undo (Z)", i > 0 && l.jsxs("span", {
                    className: "ml-1.5 text-warn",
                    children: ["−", i / 1e3, "s"]
                })]
            }), l.jsxs("button", {
                onMouseDown: z,
                disabled: !x.length,
                className: B,
                children: ["Reset (R)", c > 0 && l.jsxs("span", {
                    className: "ml-1.5 text-warn",
                    children: ["−", c / 1e3, "s"]
                })]
            })]
        }), l.jsxs("div", {
            className: "flex w-full flex-col gap-2",
            children: [l.jsx(be, {
                value: (m + (S ? 1 : 0)) / s
            }), l.jsx(re, {
                left: A.left,
                total: A.total
            })]
        })]
    })
}
const Fx = ["ADMIN", "ALARM", "ALERT", "BLOCK", "BRAKE", "BREAK", "BURST", "CABLE", "CACHE", "CHAIN", "CHAOS", "CHASE", "CHEAP", "CHECK", "CHIEF", "CHORD", "CLAIM", "CLASH", "CLASS", "CLEAN", "CLEAR", "CLICK", "CLIMB", "CLOCK", "CLONE", "CLOSE", "CLOUD", "COACH", "COAST", "CODER", "CORPS", "COULD", "COUNT", "COURT", "COVER", "CRACK", "CRAFT", "CRASH", "CRAZY", "CREAM", "CRIME", "CRISP", "CROSS", "CROWD", "CROWN", "CRUEL", "CRUSH", "CRYPT", "CYBER", "CYCLE", "DANCE", "DEATH", "DEBUG", "DECAY", "DECOY", "DELTA", "DENSE", "DEPOT", "DEPTH", "DRAFT", "DRAIN", "DRAMA", "DRANK", "DREAM", "DRESS", "DRIFT", "DRILL", "DRINK", "DRIVE", "DROIT", "DRONE", "DROWN", "EJECT", "ELITE", "EMAIL", "EMPTY", "ENEMY", "ENJOY", "ENTER", "ENTRY", "EQUAL", "ERROR", "EVENT", "EXACT", "EXCEL", "EXIST", "EXTRA", "FAITH", "FALSE", "FAULT", "FEVER", "FIBER", "FIELD", "FIFTH", "FIGHT", "FINAL", "FIRST", "FIXED", "FLAME", "FLASH", "FLASK", "FLESH", "FLOAT", "FLOOD", "FLOOR", "FLOUR", "FLUID", "FLUSH", "FOCUS", "FORCE", "FORGE", "FORUM", "FOUND", "FRAME", "FRANK", "FRAUD", "FRESH", "FRONT", "FRUIT", "GAMMA", "GHOST", "GIANT", "GIVEN", "GLASS", "GLEAM", "GLIDE", "GLOBE", "GLOOM", "GLORY", "GLYPH", "GRACE", "GRADE", "GRAIN", "GRAND", "GRANT", "GRAPH", "GRASP", "GRASS", "GRAVE", "GREAT", "GREEN", "GRIND", "GROSS", "GROUP", "GUARD", "GUESS", "GUEST", "GUIDE", "GUILD", "GUILT", "HASTE", "HAVEN", "HEART", "HEIST", "HENCE", "HORSE", "HOTEL", "HOURS", "HOUSE", "HUMAN", "HYPER", "IDEAL", "IMAGE", "INDEX", "INNER", "INPUT", "INTEL", "INTER", "ISSUE", "JOINT", "JUDGE", "JUICE", "KNIFE", "KNOCK", "KNOWN", "LABEL", "LABOR", "LASER", "LATCH", "LATER", "LAUGH", "LAYER", "LEARN", "LEASE", "LEAVE", "LEGAL", "LEMON", "LEVEL", "LEVER", "LIGHT", "LIMIT", "LINUX", "LIVER", "LOBBY", "LOCAL", "LODGE", "LOGIC", "LOGIN", "LOOSE", "LOWER", "LOYAL", "LUCKY", "LUNCH", "LYING", "MACRO", "MAGIC", "MAJOR", "MAKER", "MARCH", "MARRY", "MATCH", "MAYOR", "MEDIA", "MERCY", "MERGE", "MERIT", "METAL", "METER", "MICRO", "MIGHT", "MINOR", "MINUS", "MIXED", "MODEL", "MODEM", "MONEY", "MONTH", "MORAL", "MOTOR", "MOUNT", "MOUSE", "MOUTH", "MOVIE", "MULTI", "MUSIC", "NAIVE", "NAKED", "NERVE", "NEVER", "NIGHT", "NINTH", "NOBLE", "NOISE", "NORTH", "NOTED", "NOVEL", "NURSE", "OCCUR", "OCEAN", "OFFER", "OFTEN", "OMEGA", "ONION", "ONSET", "OPERA", "ORBIT", "ORDER", "OTHER", "OUGHT", "OUTER", "OWNER", "OXIDE", "OZONE", "PAINT", "PANEL", "PANIC", "PAPER", "PARTY", "PASTA", "PATCH", "PAUSE", "PEACE", "PEARL", "PENNY", "PHASE", "PHONE", "PHOTO", "PIANO", "PIECE", "PILOT", "PINCH", "PITCH", "PIXEL", "PLACE", "PLAIN", "PLANE", "PLANT", "PLATE", "PLAZA", "PLEAD", "POINT", "POLAR", "POUND", "POWER", "PRESS", "PRICE", "PRIDE", "PRIME", "PRINT", "PRIOR", "PRIZE", "PROBE", "PROOF", "PROSE", "PROUD", "PROVE", "PROXY", "PULSE", "PUNCH", "PUPIL", "PURSE", "QUEEN", "QUERY", "QUEST", "QUEUE", "QUICK", "QUIET", "QUOTA", "QUOTE", "RADAR", "RADIO", "RAISE", "RALLY", "RANGE", "RAPID", "RATIO", "REACH", "REACT", "REALM", "REBEL", "REFER", "REIGN", "RELAY", "REMIT", "RENAL", "RENEW", "REPAY", "REPLY", "RESET", "RIDER", "RIDGE", "RIFLE", "RIGHT", "RIGID", "RISKY", "RIVAL", "RIVER", "ROBOT", "ROCKY", "ROGUE", "ROMAN", "ROUGH", "ROUND", "ROUTE", "ROYAL", "RUGBY", "RULED", "RURAL", "SADLY", "SAINT", "SALAD", "SALON", "SANDY", "SATAN", "SAUCE", "SCALE", "SCARE", "SCENE", "SCENT", "SCOPE", "SCORE", "SCOUT", "SCRAP", "SERVE", "SETUP", "SEVEN", "SHADE", "SHAFT", "SHAKE", "SHALL", "SHAME", "SHAPE", "SHARE", "SHARK", "SHARP", "SHEEP", "SHEER", "SHEET", "SHELF", "SHELL", "SHIFT", "SHINE", "SHIRT", "SHOCK", "SHOOT", "SHORE", "SHORT", "SHOUT", "SHOWN", "SIGHT", "SIGMA", "SIGN", "SILLY", "SINCE", "SIXTH", "SIXTY", "SIZED", "SKILL", "SKIRT", "SKULL", "SLATE", "SLAVE", "SLEEP", "SLICE", "SLIDE", "SLOPE", "SMALL", "SMART", "SMELL", "SMILE", "SMITH", "SMOKE", "SNAKE", "SOLID", "SOLVE", "SORRY", "SOUND", "SOUTH", "SPACE", "SPARE", "SPARK", "SPAWN", "SPEAK", "SPEAR", "SPEED", "SPELL", "SPEND", "SPICE", "SPINE", "SPLIT", "SPOKE", "SPORT", "SPOOF", "SPRAY", "SQUAD", "STACK", "STAFF", "STAGE", "STAIN", "STAKE", "STALE", "STAMP", "STAND", "STARK", "START", "STATE", "STAYS", "STEAD", "STEAL", "STEAM", "STEEL", "STEEP", "STEER", "STERN", "STICK", "STIFF", "STILL", "STOCK", "STONE", "STOOD", "STORE", "STORM", "STORY", "STOVE", "STRIP", "STUCK", "STUDY", "STUFF", "STYLE", "SUGAR", "SUITE", "SUNNY", "SUPER", "SURGE", "SWAMP", "SWEAR", "SWEAT", "SWEEP", "SWEET", "SWEPT", "SWIFT", "SWING", "SWORD", "SYNTH", "TABLE", "TAKEN", "TASTE", "TEACH", "TEETH", "TEMPO", "TENSE", "TENTH", "TERMS", "TERRA", "TERRY", "TEXAS", "THANK", "THEFT", "THEIR", "THEME", "THERE", "THESE", "THICK", "THIEF", "THING", "THINK", "THIRD", "THOSE", "THREE", "THREW", "THROW", "THUMB", "TIGER", "TIGHT", "TIMES", "TIRED", "TITLE", "TODAY", "TOKEN", "TONAL", "TOOTH", "TOPIC", "TOTAL", "TOUCH", "TOUGH", "TOWER", "TOXIC", "TRACE", "TRACK", "TRADE", "TRAIL", "TRAIN", "TRAIT", "TRASH", "TREAT", "TREND", "TRIAL", "TRIBE", "TRICK", "TRIED", "TROOP", "TRUCK", "TRULY", "TRUMP", "TRUNK", "TRUST", "TRUTH", "TUMOR", "TUNER", "TWIST", "ULTRA", "UNCLE", "UNDER", "UNIFY", "UNION", "UNITE", "UNITY", "UNTIL", "UPPER", "UPSET", "URBAN", "USAGE", "USUAL", "VALID", "VALUE", "VAULT", "VENOM", "VENUE", "VERSE", "VIDEO", "VIGOR", "VINYL", "VIRAL", "VIRUS", "VISIT", "VITAL", "VIVID", "VOCAL", "VOICE", "VOTER", "WAGON", "WASTE", "WATCH", "WATER", "WAVED", "WEIGH", "WEIRD", "WHEAT", "WHEEL", "WHERE", "WHICH", "WHILE", "WHITE", "WHOLE", "WHOSE", "WIDTH", "WIRED", "WITCH", "WOMAN", "WOODS", "WORLD", "WORRY", "WORSE", "WORST", "WORTH", "WOULD", "WOUND", "WRATH", "WRECK", "WRIST", "WRITE", "WRONG", "WROTE", "XENON", "YACHT", "YIELD", "YOUNG", "YOUTH", "ZEBRA", "ZONAL"]
  , Hx = ["APPLE", "HOUSE", "WATER", "LIGHT", "PAPER", "MUSIC", "PHONE", "MONEY", "CHAIR", "TABLE", "WORLD", "NIGHT", "BEACH", "OCEAN", "RIVER", "MOUNT", "FIELD", "STONE", "PLANT", "HEART", "BRAIN", "VOICE", "SMILE", "POWER", "DREAM", "MAGIC", "TRUTH", "PEACE", "STORM", "CLOUD", "SPACE", "EARTH", "GLASS", "METAL", "BREAD", "FRUIT", "SWEET", "SHARP", "QUICK", "HAPPY", "ANGRY", "QUIET", "ROUGH", "SMOOTH", "HEAVY", "FRESH", "CLEAN", "DIRTY", "CLEAR", "SOLID", "EMPTY", "SUNNY", "WINDY", "COLD", "WARM", "TALL", "SHORT", "WIDE", "THIN", "ROUND", "SQUARE", "BRIGHT", "DARK", "YOUNG", "OLD", "NEW", "FAST", "SLOW", "SOFT", "HARD", "LOUD", "ROYAL", "NOBLE", "BRAVE", "WISE", "KIND", "CRUEL", "GENTLE", "WILD", "CALM", "BUSY", "FREE", "SAFE", "LOST", "FOUND", "OPEN", "SHUT", "FIRST", "LAST", "BEST", "WORST", "GREAT", "SMALL", "GIANT", "TINY", "FRONT", "BACK", "LEFT", "RIGHT", "ABOVE", "BELOW", "NEAR", "FAR", "OUTER", "UPPER", "LOWER", "NORTH", "SOUTH", "EAST", "WEST", "BOOK", "PAGE", "WORD", "LINE", "STORY", "POEM", "SONG", "DANCE", "GAME", "SPORT", "RACE", "PRIZE", "GIFT", "PARTY", "FEAST", "MEAL", "FOOD", "DRINK", "WINE", "BEER", "MILK", "JUICE", "SUGAR", "SALT", "FIRE", "SMOKE", "FLAME", "SPARK", "TORCH", "CANDLE", "LAMP", "BULB", "DOOR", "WINDOW", "WALL", "FLOOR", "ROOF", "ROOM", "HALL", "YARD", "GARDEN", "FLOWER", "TREE", "LEAF", "BRANCH", "ROOT", "SEED", "GRASS", "CIRCUIT"]
  , Lf = 900
  , lk = 700
  , $u = 65
  , Ya = Array.from({
    length: 26
}, (e, t) => String.fromCharCode($u + t))
  , $f = ["shift", "atbash", "number"]
  , mc = e => e.charCodeAt(0) - $u
  , Ol = e => String.fromCharCode($u + (e % 26 + 26) % 26);
function Pf(e, t) {
    let n = e.split("").map(r => {
        const s = mc(r);
        return t.kind === "shift" ? Ol(s + t.shift) : t.kind === "atbash" ? Ol(25 - s) : String(s + 1)
    }
    );
    return t.reversed && (n = n.reverse()),
    n
}
function ak(e) {
    const t = r => Array.from(new Set([...Fx, ...Hx])).filter(s => s.length === r && /^[A-Z]+$/.test(s))
      , n = t(e);
    return n.length >= 8 ? n : t(5)
}
function Of(e, t, n, r="") {
    const s = ak(e);
    for (let i = 0; i < 100; i++) {
        const c = s[K(0, s.length - 1)];
        if (c === r)
            continue;
        const u = {
            kind: t,
            shift: K(1, 25),
            reversed: n >= 2
        }
          , d = Pf(c, u);
        if (!(t !== "number" && d.join("") === c))
            return {
                word: c,
                cipher: u,
                tokens: d
            }
    }
    const o = s[0]
      , a = {
        kind: t,
        shift: 3,
        reversed: n >= 2
    };
    return {
        word: o,
        cipher: a,
        tokens: Pf(o, a)
    }
}
function ik(e) {
    const t = [];
    return e.reversed && t.push("The word is written backwards. Read it from the right first"),
    e.kind === "shift" ? t.push(`Every letter was moved forward ${e.shift}. Move each one back ${e.shift}`) : e.kind === "atbash" ? t.push("The alphabet was mirrored: A and Z swap, B and Y swap, and so on") : t.push("Every letter was replaced by its place in the alphabet: A is 1, B is 2 ... Z is 26"),
    t
}
function ck(e) {
    if (e.kind === "number")
        return [Ya.map( (r, s) => String(s + 1)), Ya];
    const t = Ya
      , n = t.map(r => e.kind === "shift" ? Ol(mc(r) - e.shift) : Ol(25 - mc(r)));
    return [t, n]
}
function uk({settings: e, finish: t}) {
    const n = Y(Math.round(e.wordLength), 4, 6)
      , r = Math.max(1, Math.round(e.rounds))
      , s = Y(Math.round(e.layers), 1, 2)
      , o = Math.max(1, Math.round(e.maxMistakes))
      , a = String(e.cipher || "mixed")
      , i = E => $f.includes(a) ? a : $f[(E + K(0, 2)) % 3]
      , [c,u] = h.useState(0)
      , [d,f] = h.useState( () => Of(n, i(0), s))
      , [m,y] = h.useState("")
      , [g,p] = h.useState(0)
      , [k,v] = h.useState(!1)
      , [x,w] = h.useState({
        text: "",
        bad: !1
    })
      , [b,M] = h.useState(0)
      , N = h.useRef(!1)
      , j = h.useRef([])
      , S = (E, A) => void j.current.push(setTimeout(E, A));
    h.useEffect( () => () => j.current.forEach(clearTimeout), []);
    const R = se(e.timeLimit, () => C("time", "Time's up"), !k)
      , C = (E, A) => {
        N.current || (N.current = !0,
        v(!0),
        w({
            text: A,
            bad: !0
        }),
        W("wrong", .4),
        S( () => t(!1, E), lk))
    }
      , T = () => {
        if (k || N.current || m.length !== d.word.length)
            return;
        if (m === d.word) {
            if (v(!0),
            w({
                text: "Decoded",
                bad: !1
            }),
            W("correct", .5),
            c + 1 >= r)
                return N.current = !0,
                void S( () => t(!0), Lf);
            S( () => {
                f(Of(n, i(c + 1), s, d.word)),
                y(""),
                w({
                    text: "",
                    bad: !1
                }),
                u(c + 1),
                v(!1)
            }
            , Lf);
            return
        }
        const E = g + 1;
        if (p(E),
        y(""),
        M(A => A + 1),
        w({
            text: "Wrong word",
            bad: !0
        }),
        E >= o)
            return C("error", "Too many wrong words");
        W("wrong", .3)
    }
    ;
    ne(E => {
        if (!(k || N.current)) {
            if (E.key === "Enter")
                return T();
            if (E.key === "Backspace")
                return y(A => A.slice(0, -1));
            /^[a-zA-Z]$/.test(E.key) && !E.ctrlKey && !E.metaKey && (y(A => A.length < d.word.length ? A + E.key.toUpperCase() : A),
            x.bad && w({
                text: "",
                bad: !1
            }))
        }
    }
    );
    const [_,P] = ck(d.cipher)
      , L = ik(d.cipher)
      , D = m.length === d.word.length;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [c + 1, "/", r]
                })]
            }), l.jsx(ee, {
                total: o,
                used: Math.min(g, o),
                label: "Mistakes"
            })]
        }), l.jsx("div", {
            className: "flex flex-wrap justify-center gap-2 pt-2",
            children: d.tokens.map( (E, A) => l.jsx("span", {
                className: "flex h-14 min-w-[52px] items-center justify-center rounded border-2 border-accent-line bg-raised px-2 font-mono text-3xl font-semibold text-accent",
                children: E
            }, A))
        }), l.jsx("ol", {
            className: "flex w-full max-w-[560px] flex-col gap-0.5 text-xs text-fg",
            children: L.map( (E, A) => l.jsxs("li", {
                className: "flex gap-2",
                children: [l.jsxs("span", {
                    className: "font-mono text-accent",
                    children: [A + 1, "."]
                }), l.jsx("span", {
                    children: E
                })]
            }, A))
        }), l.jsxs("div", {
            className: "grid w-full max-w-[580px] gap-y-0.5 rounded border border-line bg-raised p-2 font-mono text-[11px]",
            style: {
                gridTemplateColumns: "48px repeat(26, minmax(0, 1fr))"
            },
            children: [l.jsx("span", {
                className: "text-muted",
                children: "Code"
            }), _.map( (E, A) => l.jsx("span", {
                className: "text-center text-accent",
                children: E
            }, A)), l.jsx("span", {
                className: "text-muted",
                children: "Plain"
            }), P.map( (E, A) => l.jsx("span", {
                className: "text-center text-fg",
                children: E
            }, A))]
        }), l.jsx("div", {
            className: `flex flex-1 items-center gap-2 ${b && x.bad ? "shake" : ""}`,
            children: Array.from({
                length: d.word.length
            }, (E, A) => l.jsx("span", {
                className: `flex h-14 w-12 items-center justify-center rounded border-2 font-mono text-3xl font-semibold ${m[A] ? "border-accent bg-accent-soft text-fg" : A === m.length && !k ? "border-accent-line bg-raised" : "border-line bg-raised"}`,
                children: m[A] ?? ""
            }, A))
        }, b), l.jsx("div", {
            className: `h-5 text-center text-xs ${x.bad ? "text-danger" : "text-fg"}`,
            children: x.text || (D ? "Press Enter to submit" : "Type the decoded word")
        }), l.jsxs("div", {
            className: "flex w-full flex-col gap-2",
            children: [l.jsx(be, {
                value: (c + (k ? 1 : 0)) / r
            }), l.jsx(re, {
                left: R.left,
                total: R.total
            })]
        })]
    })
}
const dk = 900
  , fk = 700
  , hk = 450;
function mk(e) {
    const t = Array.from({
        length: e
    }, () => Array(e).fill(0));
    for (let n = 0; n < e; n++)
        for (let r = 0; r < e; r++) {
            const s = new Set;
            for (let o = 0; o < e; o++)
                s.add(t[n][o]),
                s.add(t[o][r]);
            t[n][r] = ie([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(o => !s.has(o)))[0]
        }
    return t
}
function pk(e, t, n, r=2) {
    const s = e.length
      , o = e.map(c => c.slice());
    let a = 0;
    const i = c => {
        if (a >= r)
            return;
        if (c === s * s) {
            a++;
            return
        }
        const u = Math.floor(c / s)
          , d = c % s;
        if (o[u][d])
            return i(c + 1);
        for (let f = 1; f <= 9; f++) {
            let m = !0;
            for (let w = 0; w < s && m; w++)
                (w !== d && o[u][w] === f || w !== u && o[w][d] === f) && (m = !1);
            if (!m)
                continue;
            o[u][d] = f;
            let y = 0
              , g = 0;
            for (let w = 0; w < s; w++)
                y += o[u][w],
                o[u][w] || g++;
            let p = 0
              , k = 0;
            for (let w = 0; w < s; w++)
                p += o[w][d],
                o[w][d] || k++;
            const v = g === 0 ? y === t[u] : y + g <= t[u]
              , x = k === 0 ? p === n[d] : p + k <= n[d];
            v && x && i(c + 1),
            o[u][d] = 0
        }
    }
    ;
    return i(0),
    a
}
function xk(e, t) {
    const n = mk(e)
      , r = n.map(i => i.reduce( (c, u) => c + u, 0))
      , s = n[0].map( (i, c) => n.reduce( (u, d) => u + d[c], 0))
      , o = n.map(i => i.slice());
    let a = 0;
    for (const i of ie(Array.from({
        length: e * e
    }, (c, u) => u))) {
        if (a >= t)
            break;
        const c = Math.floor(i / e)
          , u = i % e
          , d = o[c][u];
        o[c][u] = 0,
        pk(o, r, s) === 1 ? a++ : o[c][u] = d
    }
    return {
        solution: n,
        puzzle: o,
        rowSums: r,
        colSums: s
    }
}
function gk({settings: e, finish: t}) {
    const n = Y(Math.round(e.gridSize), 3, 5)
      , r = Y(Math.round(e.blanks), 1, n * n - 1)
      , s = Math.max(1, Math.round(e.maxMistakes))
      , [o] = h.useState( () => xk(n, r))
      , a = h.useRef(o.puzzle.map(D => D.map(E => E !== 0))).current
      , [i,c] = h.useState( () => o.puzzle.map(D => D.slice()))
      , [u,d] = h.useState( () => {
        const D = o.puzzle.flat().indexOf(0);
        return D < 0 ? null : D
    }
    )
      , [f,m] = h.useState(0)
      , [y,g] = h.useState(null)
      , [p,k] = h.useState({
        text: "",
        bad: !1
    })
      , [v,x] = h.useState(!1)
      , w = h.useRef(!1)
      , b = h.useRef([])
      , M = (D, E) => void b.current.push(setTimeout(D, E));
    h.useEffect( () => () => b.current.forEach(clearTimeout), []);
    const N = se(e.timeLimit, () => j("time", "Time's up"), !v)
      , j = (D, E) => {
        w.current || (w.current = !0,
        x(!0),
        k({
            text: E,
            bad: !0
        }),
        W("wrong", .4),
        M( () => t(!1, D), fk))
    }
      , S = D => {
        if (w.current || u === null || D < 1 || D > 9)
            return;
        const E = Math.floor(u / n)
          , A = u % n;
        if (a[E][A] || i[E][A])
            return;
        if (o.solution[E][A] !== D) {
            const F = f + 1;
            if (m(F),
            g(u),
            M( () => g(null), hk),
            k({
                text: `${D} does not fit there`,
                bad: !0
            }),
            F >= s)
                return j("error", "Too many mistakes");
            W("wrong", .3);
            return
        }
        const I = i.map( (F, z) => z === E ? F.map( (U, B) => B === A ? D : U) : F);
        c(I),
        k({
            text: "",
            bad: !1
        });
        const $ = I.flat().map( (F, z) => F ? -1 : z).filter(F => F >= 0);
        if (!$.length) {
            w.current = !0,
            x(!0),
            d(null),
            k({
                text: "Grid balanced",
                bad: !1
            }),
            W("correct", .5),
            M( () => t(!0), dk);
            return
        }
        W("beep", .25),
        d($.find(F => F > u) ?? $[0])
    }
      , R = (D, E) => {
        if (w.current)
            return;
        const A = u ?? 0;
        d(Y(Math.floor(A / n) + D, 0, n - 1) * n + Y(A % n + E, 0, n - 1))
    }
    ;
    ne(D => {
        if (D.key >= "1" && D.key <= "9")
            return S(Number(D.key));
        const E = {
            ArrowUp: [-1, 0],
            ArrowDown: [1, 0],
            ArrowLeft: [0, -1],
            ArrowRight: [0, 1]
        };
        E[D.key] && (D.preventDefault(),
        R(...E[D.key]))
    }
    );
    const C = u === null ? -1 : Math.floor(u / n)
      , T = u === null ? -1 : u % n
      , _ = D => i[D].every(Boolean)
      , P = D => i.every(E => E[D])
      , L = (D, E) => l.jsx("span", {
        className: `flex items-center justify-center rounded border font-mono text-lg font-semibold ${E ? "border-accent-line bg-accent-faint text-accent" : "border-dashed border-line text-fg"}`,
        children: D
    });
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: "Rows and columns add up. No repeats in a line"
            }), l.jsx(ee, {
                total: s,
                used: Math.min(f, s),
                label: "Mistakes"
            })]
        }), l.jsx("div", {
            className: "flex flex-1 items-center",
            children: l.jsxs("div", {
                className: "grid w-[360px] gap-1.5",
                style: {
                    gridTemplateColumns: `repeat(${n + 1}, minmax(0, 1fr))`,
                    gridAutoRows: "56px"
                },
                children: [i.flatMap( (D, E) => [...D.map( (A, I) => {
                    const $ = E * n + I
                      , F = a[E][I];
                    return l.jsx("button", {
                        onMouseDown: () => !w.current && !F && !A && d($),
                        className: `flex items-center justify-center rounded border-2 font-mono text-2xl font-semibold ${y === $ ? "shake border-danger bg-danger-soft text-danger" : $ === u ? "border-accent bg-accent-soft text-accent" : F ? "border-line bg-track text-fg" : A ? "border-accent-line bg-raised text-accent" : E === C || I === T ? "cursor-pointer border-line bg-accent-faint hover:border-accent-line" : "cursor-pointer border-line bg-raised hover:border-accent-line"}`,
                        children: A || ""
                    }, $)
                }
                ), l.jsx("span", {
                    className: "contents",
                    children: L(o.rowSums[E], _(E))
                }, `rs${E}`)]), o.colSums.map( (D, E) => l.jsx("span", {
                    className: "contents",
                    children: L(D, P(E))
                }, `cs${E}`))]
            })
        }), l.jsx("div", {
            className: "flex gap-1.5",
            children: Array.from({
                length: 9
            }, (D, E) => l.jsx("button", {
                onMouseDown: () => S(E + 1),
                className: "flex h-10 w-10 cursor-pointer items-center justify-center rounded border-2 border-line bg-raised font-mono text-lg font-semibold text-fg hover:border-accent-line",
                children: E + 1
            }, E))
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${p.bad ? "text-danger" : "text-fg"}`,
            children: p.text || "Pick a cell, then a digit (keys 1-9, arrows move)"
        }), l.jsx("div", {
            className: "w-full",
            children: l.jsx(re, {
                left: N.left,
                total: N.total
            })
        })]
    })
}
const Df = 800;
function Dl(e) {
    const t = Math.min(...e.map(r => r[0]))
      , n = Math.min(...e.map(r => r[1]));
    return e.map( ([r,s]) => [r - t, s - n]).sort( (r, s) => r[0] - s[0] || r[1] - s[1])
}
const yk = e => Dl(e.map( ([t,n]) => [n, -t]));
function Wx(e, t) {
    let n = Dl(e);
    for (let r = 0; r < (t % 4 + 4) % 4; r++)
        n = yk(n);
    return n
}
const Ux = e => ({
    h: Math.max(...e.map(t => t[0])) + 1,
    w: Math.max(...e.map(t => t[1])) + 1
});
function vk(e, t, n) {
    const r = e * t;
    for (let s = 0; s < 500; s++) {
        const o = Array(r).fill(-1);
        for (const [c,u] of ie(Array.from({
            length: r
        }, (d, f) => f)).slice(0, n).entries())
            o[u] = c;
        let a = r - n;
        for (; a > 0; ) {
            const c = [];
            for (let f = 0; f < r; f++) {
                if (o[f] < 0)
                    continue;
                const m = Math.floor(f / e)
                  , y = f % e;
                m > 0 && o[f - e] < 0 && c.push([f - e, o[f]]),
                m < t - 1 && o[f + e] < 0 && c.push([f + e, o[f]]),
                y > 0 && o[f - 1] < 0 && c.push([f - 1, o[f]]),
                y < e - 1 && o[f + 1] < 0 && c.push([f + 1, o[f]])
            }
            const [u,d] = c[K(0, c.length - 1)];
            o[u] = d,
            a--
        }
        const i = Array.from({
            length: n
        }, (c, u) => ({
            id: u,
            cells: []
        }));
        if (o.forEach( (c, u) => i[c].cells.push([Math.floor(u / e), u % e])),
        i.every(c => c.cells.length >= 2))
            return i.map(c => ({
                id: c.id,
                cells: Dl(c.cells)
            }))
    }
    return Array.from({
        length: n
    }, (s, o) => ({
        id: o,
        cells: Dl(Array.from({
            length: r / n
        }, (a, i) => [0, i]))
    }))
}
function If(e, t, n, r) {
    return t.every( ([s,o]) => {
        var a;
        return ((a = e[s + n]) == null ? void 0 : a[o + r]) === -1
    }
    )
}
const wk = (e, t) => Array.from({
    length: t
}, () => Array(e).fill(-1));
function kk(e, t, n, r) {
    const s = wk(n, r);
    for (const o of e) {
        const a = t[o.id];
        if (a)
            for (const [i,c] of Wx(o.cells, a.rot))
                s[i + a.r][c + a.c] = o.id
    }
    return s
}
function Bx({id: e, symbols: t, px: n}) {
    return l.jsx("span", {
        className: "flex items-center justify-center rounded",
        style: {
            width: n,
            height: n,
            backgroundColor: `var(--tok-${e % 6 + 1})`
        },
        children: t && l.jsx("svg", {
            viewBox: "0 0 24 24",
            className: "fill-surface stroke-fg",
            style: {
                width: n * .6,
                height: n * .6
            },
            strokeWidth: "1.4",
            strokeLinejoin: "round",
            children: Pl[e % Pl.length]
        })
    })
}
function jk({cells: e, id: t, symbols: n, px: r}) {
    const {h: s, w: o} = Ux(e);
    return l.jsx("div", {
        className: "relative",
        style: {
            width: o * r,
            height: s * r
        },
        children: e.map( ([a,i]) => l.jsx("span", {
            className: "absolute",
            style: {
                left: i * r,
                top: a * r,
                padding: 1
            },
            children: l.jsx(Bx, {
                id: t,
                symbols: n,
                px: r - 2
            })
        }, `${a}.${i}`))
    })
}
function bk({settings: e, finish: t}) {
    const n = Y(Math.round(e.cols), 4, 8)
      , r = Y(Math.round(e.rows), 3, 6)
      , s = Y(Math.round(e.bags), 3, Math.min(6, Math.floor(n * r / 2)))
      , o = Math.max(1, Math.round(e.rounds))
      , a = e.rotate !== !1
      , i = e.symbols !== !1
      , c = e.colorblind === !0
      , u = n > 6 || r > 5 ? 44 : 56
      , d = () => {
        const J = vk(n, r, s)
          , ce = J.map( () => a ? K(0, 3) : 0);
        return {
            load: J,
            rots: ce
        }
    }
      , [f,m] = h.useState(0)
      , [y,g] = h.useState(d)
      , {load: p} = y
      , [k,v] = h.useState(y.rots)
      , [x,w] = h.useState({})
      , [b,M] = h.useState(null)
      , [N,j] = h.useState(null)
      , [S,R] = h.useState(!1)
      , [C,T] = h.useState({
        text: "",
        bad: !1
    })
      , [_,P] = h.useState(0)
      , L = h.useRef(!1)
      , D = h.useRef([])
      , E = (J, ce) => void D.current.push(setTimeout(J, ce));
    h.useEffect( () => () => D.current.forEach(clearTimeout), []);
    const A = se(e.timeLimit, () => I(), !S)
      , I = () => {
        L.current || (L.current = !0,
        R(!0),
        M(null),
        T({
            text: "Time's up",
            bad: !0
        }),
        W("wrong", .4),
        t(!1, "time"))
    }
      , $ = kk(p, x, n, r)
      , F = J => Wx(p[J].cells, k[J])
      , z = (J, ce) => {
        const {h: de, w: Ve} = Ux(F(J));
        return [ce[0] - Math.floor(de / 2), ce[1] - Math.floor(Ve / 2)]
    }
      , U = J => {
        S || L.current || x[J] || (M(b === J ? null : J),
        T({
            text: "",
            bad: !1
        }))
    }
      , B = () => {
        S || L.current || b === null || !a || (v(J => J.map( (ce, de) => de === b ? (ce + 1) % 4 : ce)),
        W("beep", .15))
    }
      , O = J => {
        if (S || L.current)
            return;
        const ce = $[J[0]][J[1]];
        if (b === null) {
            if (ce < 0)
                return;
            const qn = x[ce];
            v(pa => pa.map( (lg, ag) => ag === ce ? qn.rot : lg)),
            w(Object.fromEntries(Object.entries(x).filter( ([pa]) => Number(pa) !== ce))),
            M(ce),
            T({
                text: "",
                bad: !1
            });
            return
        }
        const [de,Ve] = z(b, J)
          , so = F(b);
        if (!If($, so, de, Ve)) {
            T({
                text: ce >= 0 ? "That space is taken" : "Does not fit there",
                bad: !0
            }),
            P(qn => qn + 1),
            W("wrong", .3);
            return
        }
        const oo = {
            ...x,
            [b]: {
                r: de,
                c: Ve,
                rot: k[b]
            }
        };
        if (w(oo),
        M(null),
        T({
            text: "",
            bad: !1
        }),
        Object.keys(oo).length < s)
            return void W("beep", .2);
        if (R(!0),
        T({
            text: "Loaded",
            bad: !1
        }),
        W("correct", .5),
        f + 1 >= o)
            return L.current = !0,
            void E( () => t(!0), Df);
        E( () => {
            const qn = d();
            g(qn),
            v(qn.rots),
            w({}),
            M(null),
            T({
                text: "",
                bad: !1
            }),
            m(f + 1),
            R(!1)
        }
        , Df)
    }
    ;
    ne(J => {
        if (!J.repeat)
            if (J.key >= "1" && J.key <= "9") {
                const ce = Number(J.key) - 1;
                ce < s && U(ce)
            } else
                J.key.toLowerCase() === "r" && B()
    }
    );
    const H = b !== null && N ? z(b, N) : null
      , V = b !== null ? F(b) : []
      , Q = H ? If($, V, H[0], H[1]) : !1
      , ye = new Map;
    if (H)
        for (const [J,ce] of V)
            ye.set(`${J + H[0]}.${ce + H[1]}`, Q);
    const Me = p.filter(J => !x[J.id]);
    return l.jsxs("div", {
        className: `flex h-full flex-col items-center gap-3 p-4 ${c ? "palette-cb" : ""}`,
        onContextMenu: J => {
            J.preventDefault(),
            B()
        }
        ,
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Load ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [f + 1, "/", o]
                })]
            }), l.jsxs("span", {
                children: ["Bags left ", l.jsx("span", {
                    className: "font-mono text-sm text-accent",
                    children: Me.length
                })]
            })]
        }), l.jsx("div", {
            className: "flex flex-1 items-center",
            children: l.jsx("div", {
                className: `grid gap-0.5 rounded border-2 border-line bg-track p-1 ${_ && C.bad ? "shake" : ""}`,
                style: {
                    gridTemplateColumns: `repeat(${n}, ${u}px)`,
                    gridAutoRows: `${u}px`
                },
                onMouseLeave: () => j(null),
                children: $.flatMap( (J, ce) => J.map( (de, Ve) => {
                    const so = ye.get(`${ce}.${Ve}`);
                    return l.jsx("button", {
                        onMouseDown: oo => oo.button === 0 && O([ce, Ve]),
                        onMouseEnter: () => j([ce, Ve]),
                        className: `flex items-center justify-center rounded border ${so === void 0 ? de >= 0 ? "cursor-pointer border-transparent" : "border-line bg-surface" : so ? "border-accent bg-accent-soft" : "border-danger bg-danger-soft"}`,
                        children: de >= 0 && l.jsx(Bx, {
                            id: de,
                            symbols: i,
                            px: u - 6
                        })
                    }, `${ce}.${Ve}`)
                }
                ))
            }, _)
        }), l.jsx("div", {
            className: "flex min-h-[84px] w-full flex-wrap items-center justify-center gap-4",
            children: Me.map(J => l.jsxs("button", {
                onMouseDown: ce => ce.button === 0 && U(J.id),
                className: `relative flex cursor-pointer items-center justify-center rounded border-2 p-2 ${b === J.id ? "border-accent bg-accent-soft" : "border-line bg-raised hover:border-accent-line"}`,
                children: [l.jsx(jk, {
                    cells: F(J.id),
                    id: J.id,
                    symbols: i,
                    px: 22
                }), l.jsx("span", {
                    className: "absolute -top-2 left-1 rounded bg-surface px-1 font-mono text-[10px] text-muted",
                    children: J.id + 1
                })]
            }, J.id))
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${C.bad ? "text-danger" : "text-fg"}`,
            children: C.text || (a ? "Pick a bag (keys 1-6), click the bed to place it. R or right click turns it" : "Pick a bag (keys 1-6), click the bed to place it")
        }), l.jsxs("div", {
            className: "flex w-full flex-col gap-2",
            children: [l.jsx(be, {
                value: (f + (S ? 1 : 0)) / o
            }), l.jsx(re, {
                left: A.left,
                total: A.total
            })]
        })]
    })
}
const Sk = 600
  , Nk = 600
  , Mk = .18
  , _f = 2.6;
function zf(e, t) {
    for (let n = 0; n < 40; n++) {
        const r = he(0, 1 - e)
          , s = r + e / 2;
        if (Math.abs(s - t) >= Mk + e / 2)
            return r
    }
    return t < .5 ? 1 - e : 0
}
const Ek = (e, t, n) => e >= t && e <= t + n
  , Ff = ["M120 20 L112 52 L126 72", "M60 28 L76 58 L66 86", "M180 26 L168 60 L184 90", "M112 52 L84 66 L88 92", "M126 72 L150 84 L146 104", "M76 58 L48 64", "M168 60 L198 58", "M66 86 L56 108"];
function Tk({settings: e, finish: t}) {
    const n = Math.max(1, Math.round(e.strikes))
      , r = Math.max(1, Math.round(e.maxMisses))
      , s = Y(e.speed, .3, _f)
      , o = Math.max(0, e.speedUp)
      , a = Y(e.zone, 6, 60) / 100
      , i = Math.max(0, e.shrink) / 100
      , c = Math.min(a, Y(e.minZone, 4, 60) / 100)
      , [u,d] = h.useState(0)
      , [f,m] = h.useState(0)
      , [y,g] = h.useState(0)
      , [p,k] = h.useState( () => zf(a, 0))
      , [v,x] = h.useState({
        text: "",
        bad: !1
    })
      , [w,b] = h.useState(0)
      , [M,N] = h.useState(null)
      , [j,S] = h.useState(!1)
      , R = h.useRef(0)
      , C = h.useRef(1)
      , T = h.useRef(!1)
      , _ = h.useRef([])
      , P = (z, U) => void _.current.push(setTimeout(z, U));
    h.useEffect( () => () => _.current.forEach(clearTimeout), []);
    const L = Math.max(c, a - i * u)
      , D = Math.min(_f, s + o * u)
      , E = se(e.timeLimit, () => A("time", "Time's up"), !j)
      , A = (z, U) => {
        T.current || (T.current = !0,
        S(!0),
        x({
            text: U,
            bad: !0
        }),
        W("wrong", .4),
        P( () => t(!1, z), Nk))
    }
    ;
    De(z => {
        let U = R.current + C.current * D * z;
        U >= 1 ? (U = 1,
        C.current = -1) : U <= 0 && (U = 0,
        C.current = 1),
        R.current = U,
        g(U)
    }
    , !j);
    const I = z => {
        N(z),
        P( () => N(null), 160)
    }
      , $ = () => {
        if (T.current)
            return;
        if (!Ek(R.current, p, L)) {
            const U = f + 1;
            if (m(U),
            b(B => B + 1),
            I("miss"),
            x({
                text: "Off the mark",
                bad: !0
            }),
            U >= r)
                return A("error", "Hammer overheated");
            W("wrong", .3);
            return
        }
        const z = u + 1;
        if (d(z),
        I("hit"),
        x({
            text: "",
            bad: !1
        }),
        z >= n)
            return T.current = !0,
            S(!0),
            x({
                text: "Rubble cleared",
                bad: !1
            }),
            W("correct", .5),
            void P( () => t(!0), Sk);
        W("beep", .25),
        k(zf(Math.max(c, a - i * z), R.current))
    }
    ;
    ne(z => {
        z.repeat || (z.key === " " || z.key === "Enter") && (z.preventDefault(),
        $())
    }
    );
    const F = Math.ceil(u / n * Ff.length);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Strikes ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [u, "/", n]
                })]
            }), l.jsx(ee, {
                total: r,
                used: Math.min(f, r),
                label: "Overheat"
            })]
        }), l.jsxs("svg", {
            viewBox: "0 0 240 120",
            className: `h-[120px] w-[240px] ${M === "hit" ? "shake" : ""}`,
            children: [l.jsx("rect", {
                x: "14",
                y: "10",
                width: "212",
                height: "100",
                rx: "6",
                className: "fill-raised stroke-line",
                strokeWidth: "2"
            }), Ff.slice(0, F).map(z => l.jsx("path", {
                d: z,
                className: "fill-none stroke-accent",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, z))]
        }), l.jsx("div", {
            className: `w-full ${w && v.bad ? "shake" : ""}`,
            children: l.jsxs("div", {
                className: "relative mx-auto h-12 w-[480px] rounded border-2 border-line bg-track",
                children: [l.jsx("div", {
                    className: `absolute top-0 h-full rounded border-2 ${M === "hit" ? "border-fg bg-accent" : "border-accent bg-accent-soft"}`,
                    style: {
                        left: `${p * 100}%`,
                        width: `${L * 100}%`
                    }
                }), l.jsx("div", {
                    className: `absolute -top-1.5 h-[calc(100%+12px)] w-1.5 -translate-x-1/2 rounded ${M === "miss" ? "bg-danger" : "bg-fg"}`,
                    style: {
                        left: `${y * 100}%`
                    }
                })]
            })
        }, w), l.jsx("button", {
            onMouseDown: $,
            className: "cursor-pointer rounded border-2 border-accent bg-accent px-10 py-2 text-sm font-semibold text-accent-ink hover:bg-accent-bright",
            children: "Strike (Space)"
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${v.bad ? "text-danger" : "text-fg"}`,
            children: v.text || "Strike when the marker is inside the zone"
        }), l.jsxs("div", {
            className: "flex w-full flex-col gap-2",
            children: [l.jsx(be, {
                value: u / n
            }), l.jsx(re, {
                left: E.left,
                total: E.total
            })]
        })]
    })
}
const Rk = 500
  , Ak = 600
  , Ck = 64
  , st = (e, t) => t * 1e3 + e
  , Lk = [[1, 0], [-1, 0], [0, 1], [0, -1]];
function Hf(e, t, n) {
    const r = new Set
      , s = [[K(0, e - 1), K(0, t - 1)]];
    for (r.add(st(s[0][0], s[0][1])); s.length < n; ) {
        const [o,a] = s[s.length - 1]
          , i = ie(Lk).map( ([c,u]) => [o + c, a + u]).find( ([c,u]) => c >= 0 && c < e && u >= 0 && u < t && !r.has(st(c, u)));
        if (!i)
            return null;
        r.add(st(i[0], i[1])),
        s.push(i)
    }
    return s
}
function $k(e, t, n, r) {
    const s = Math.max(1, Math.min(n, e * t - 2));
    let o = null;
    for (let u = 0; u < 300 && !o; u++)
        o = Hf(e, t, Math.min(e * t - 1, s + K(2, 4)));
    o || (o = Hf(e, t, 2) ?? [[0, 0], [1, 0]]);
    const a = new Set(o.map( ([u,d]) => st(u, d)))
      , i = [o.length - 1, ...ie(o.map( (u, d) => d).slice(1, -1))].slice(0, Math.min(s, o.length - 1))
      , c = [];
    for (let u = 0; u < t; u++)
        for (let d = 0; d < e; d++)
            a.has(st(d, u)) || c.push([d, u]);
    return {
        start: o[0],
        spills: new Set(i.map(u => st(o[u][0], o[u][1]))),
        signs: new Set(ie(c).slice(0, r).map( ([u,d]) => st(u, d)))
    }
}
function Pk({settings: e, finish: t}) {
    const n = Y(Math.round(e.cols), 3, 10)
      , r = Y(Math.round(e.rows), 3, 6)
      , s = Math.max(1, Math.round(e.lives))
      , o = h.useMemo( () => $k(n, r, Math.round(e.spills), Math.max(0, Math.round(e.signs))), [])
      , a = Math.min(Ck, Math.floor(480 / n))
      , [i,c] = h.useState([o.start])
      , [u,d] = h.useState(0)
      , [f,m] = h.useState("")
      , [y,g] = h.useState(0)
      , [p,k] = h.useState(!1)
      , v = h.useRef(!1)
      , x = (T, _) => {
        v.current || (v.current = !0,
        k(!0),
        m(_),
        W("wrong", .4),
        setTimeout( () => t(!1, T), Ak))
    }
      , w = se(e.timeLimit, () => x("time", "Time's up"), !p)
      , b = new Set(i.map( ([T,_]) => st(T, _)))
      , M = [...o.spills].filter(T => b.has(T)).length
      , N = i[i.length - 1]
      , j = (T, _) => {
        if (v.current || T < 0 || T >= n || _ < 0 || _ >= r || Math.abs(T - N[0]) + Math.abs(_ - N[1]) !== 1)
            return;
        const P = i[i.length - 2];
        if (P && P[0] === T && P[1] === _) {
            c(i.slice(0, -1)),
            m("");
            return
        }
        const L = o.signs.has(st(T, _)) ? "Wet floor sign" : b.has(st(T, _)) ? "Already mopped" : "";
        if (L) {
            const E = u + 1;
            if (d(E),
            g(A => A + 1),
            m(L),
            E >= s)
                return x("error", "Too many slips");
            W("wrong", .3);
            return
        }
        const D = [...i, [T, _]];
        if (c(D),
        m(""),
        o.spills.has(st(T, _)) && [...o.spills].every(E => E === st(T, _) || b.has(E))) {
            v.current = !0,
            k(!0),
            m("Floor clean"),
            W("correct", .5),
            setTimeout( () => t(!0), Rk);
            return
        }
        W("beep", .15)
    }
    ;
    ne(T => {
        const _ = {
            ArrowUp: [0, -1],
            KeyW: [0, -1],
            ArrowDown: [0, 1],
            KeyS: [0, 1],
            ArrowLeft: [-1, 0],
            KeyA: [-1, 0],
            ArrowRight: [1, 0],
            KeyD: [1, 0]
        };
        if (T.code === "Backspace") {
            T.preventDefault(),
            !v.current && i.length > 1 && c(i.slice(0, -1));
            return
        }
        const P = _[T.code];
        P && (T.preventDefault(),
        !T.repeat && j(N[0] + P[0], N[1] + P[1]))
    }
    );
    const S = T => T * a + a / 2
      , R = i.map( ([T,_]) => `${S(T)},${S(_)}`).join(" ")
      , C = [];
    for (let T = 0; T < r; T++)
        for (let _ = 0; _ < n; _++) {
            const P = st(_, T)
              , L = N[0] === _ && N[1] === T
              , D = o.spills.has(P)
              , E = o.signs.has(P);
            C.push(l.jsxs("div", {
                onMouseDown: () => j(_, T),
                onMouseEnter: A => A.buttons === 1 && j(_, T),
                className: `flex cursor-pointer items-center justify-center rounded-sm ${E ? "bg-warn-soft" : L ? "bg-accent" : b.has(P) ? "bg-accent-soft" : "bg-dim"}`,
                style: {
                    width: a,
                    height: a
                },
                children: [E && l.jsx("svg", {
                    viewBox: "0 0 24 24",
                    className: "h-7 w-7 fill-none stroke-warn",
                    strokeWidth: "2",
                    strokeLinejoin: "round",
                    strokeLinecap: "round",
                    children: l.jsx("path", {
                        d: "M12 3 2.5 20h19ZM12 10v4.5M12 17.5v.01"
                    })
                }), D && !E && l.jsx("svg", {
                    viewBox: "0 0 24 24",
                    className: `h-7 w-7 fill-none ${b.has(P) ? "stroke-accent" : "stroke-fg"}`,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: b.has(P) ? l.jsx("path", {
                        d: "m5 12.5 4.5 4.5L19 7"
                    }) : l.jsx("path", {
                        d: "M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11Z",
                        strokeDasharray: "3 3"
                    })
                })]
            }, P))
        }
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Spills ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [M, "/", o.spills.size]
                })]
            }), l.jsx(ee, {
                total: s,
                used: Math.min(u, s),
                label: "Slips"
            })]
        }), l.jsxs("div", {
            className: `relative ${y && f && !p ? "shake" : ""}`,
            style: {
                width: a * n,
                height: a * r
            },
            children: [l.jsx("div", {
                className: "grid h-full w-full",
                style: {
                    gridTemplateColumns: `repeat(${n}, ${a}px)`,
                    gap: 0
                },
                children: C
            }), l.jsx("svg", {
                className: "pointer-events-none absolute inset-0",
                width: a * n,
                height: a * r,
                children: l.jsx("polyline", {
                    points: R,
                    fill: "none",
                    className: "stroke-accent-line",
                    strokeWidth: a * .28,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })]
        }, y), l.jsx("div", {
            className: `h-5 text-center text-xs ${f && f !== "Floor clean" ? "text-danger" : "text-fg"}`,
            children: f || "Drag or use WASD / arrows. Backspace steps back."
        }), l.jsx(re, {
            left: w.left,
            total: w.total
        })]
    })
}
const Ok = 500
  , Dk = 600
  , Wf = 250
  , Uf = 34
  , Ik = .3
  , Zr = [{
    name: "Recycling",
    icon: l.jsx("path", {
        d: "M7 4 4 9h4l2 4M17 4l3 5h-4l-2 4M10 20H5l-1-3M14 20h5l1-3"
    }),
    items: ["Soda can", "Glass bottle", "Cardboard box", "Plastic cup", "Juice carton"]
}, {
    name: "General",
    icon: l.jsx("path", {
        d: "M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13"
    }),
    items: ["Wrapper", "Napkin", "Straw", "Receipt", "Paper bag"]
}, {
    name: "Compost",
    icon: l.jsx("path", {
        d: "M5 19c0-8 5-13 14-14 0 9-5 14-13 14ZM5 19c3-4 6-6 9-8"
    }),
    items: ["Burger bun", "Lettuce", "Bones", "Tomato slice", "Onion peel"]
}, {
    name: "Grease",
    icon: l.jsx("path", {
        d: "M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11Z"
    }),
    items: ["Fry oil", "Grease tray", "Bacon fat", "Sauce tub", "Fryer filter"]
}];
function _k({settings: e, finish: t}) {
    const n = Math.max(1, Math.round(e.items))
      , r = Math.max(1, Math.round(e.lives))
      , s = Y(e.fall, 1.5, 15)
      , o = Math.max(0, e.speedUp)
      , a = Math.min(s, Y(e.minFall, 1, 15))
      , [i,c] = h.useState(0)
      , [u,d] = h.useState(0)
      , [,f] = h.useState(0)
      , [m,y] = h.useState({
        text: "",
        bad: !1
    })
      , [g,p] = h.useState(null)
      , [k,v] = h.useState(!1)
      , x = h.useRef([])
      , w = h.useRef(.4)
      , b = h.useRef(0)
      , M = h.useRef(0)
      , N = h.useRef(0)
      , j = h.useRef(!1)
      , S = h.useRef([])
      , R = (E, A) => void S.current.push(setTimeout(E, A));
    h.useEffect( () => () => S.current.forEach(clearTimeout), []);
    const C = (E, A) => {
        j.current || (j.current = !0,
        v(!0),
        y({
            text: A,
            bad: !0
        }),
        W("wrong", .4),
        R( () => t(!1, E), Dk))
    }
      , T = se(e.timeLimit, () => C("time", "Time's up"), !k)
      , _ = () => Math.max(a, s - o * M.current)
      , P = E => {
        if (N.current += 1,
        d(N.current),
        y({
            text: E,
            bad: !0
        }),
        N.current >= r)
            return C("error", "Too much mess");
        W("wrong", .3)
    }
    ;
    De(E => {
        const A = _();
        x.current.forEach($ => $.y += E / A);
        const I = x.current.filter($ => $.y >= 1);
        if (I.length && (x.current = x.current.filter($ => $.y < 1),
        P(`${I[0].name} hit the floor`)),
        w.current -= E,
        !j.current && w.current <= 0 && M.current + x.current.length < n) {
            const $ = K(0, Zr.length - 1)
              , F = Zr[$].items;
            x.current.push({
                uid: ++b.current,
                name: F[K(0, F.length - 1)],
                bin: $,
                y: 0
            }),
            w.current = A * Ik
        }
        f($ => $ + 1)
    }
    , !k);
    const L = E => {
        if (j.current)
            return;
        const A = x.current.reduce( ($, F) => !$ || F.y > $.y ? F : $, null);
        if (!A)
            return;
        x.current = x.current.filter($ => $.uid !== A.uid);
        const I = A.bin === E;
        if (p({
            bin: E,
            ok: I
        }),
        R( () => p(null), 180),
        !I)
            return P(`${A.name} goes in ${Zr[A.bin].name}`);
        if (M.current += 1,
        c(M.current),
        y({
            text: "",
            bad: !1
        }),
        M.current >= n)
            return j.current = !0,
            v(!0),
            y({
                text: "All sorted",
                bad: !1
            }),
            W("correct", .5),
            void R( () => t(!0), Ok);
        W("beep", .2)
    }
    ;
    ne(E => {
        if (E.repeat)
            return;
        const A = Number(E.key);
        A >= 1 && A <= Zr.length && (E.preventDefault(),
        L(A - 1))
    }
    );
    const D = x.current.reduce( (E, A) => !E || A.y > E.y ? A : E, null);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Sorted ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [i, "/", n]
                })]
            }), l.jsx(ee, {
                total: r,
                used: Math.min(u, r),
                label: "Mess"
            })]
        }), l.jsxs("div", {
            className: "relative w-full overflow-hidden rounded border-2 border-line bg-dim",
            style: {
                height: Wf
            },
            children: [l.jsx("div", {
                className: "absolute inset-x-0 bottom-0 h-0.5 bg-danger"
            }), x.current.map(E => l.jsx("div", {
                className: `absolute left-1/2 w-44 -translate-x-1/2 rounded border-2 bg-raised text-center text-sm font-semibold leading-8 ${(D == null ? void 0 : D.uid) === E.uid ? "border-accent text-fg" : "border-line text-muted"}`,
                style: {
                    top: E.y * (Wf - Uf - 2),
                    height: Uf
                },
                children: E.name
            }, E.uid))]
        }), l.jsx("div", {
            className: "grid w-full grid-cols-4 gap-2",
            children: Zr.map( (E, A) => l.jsxs("button", {
                onMouseDown: () => L(A),
                className: `flex cursor-pointer flex-col items-center gap-1 rounded border-2 py-2 text-xs font-semibold ${(g == null ? void 0 : g.bin) === A ? g.ok ? "border-fg bg-accent text-accent-ink" : "border-danger bg-danger-soft text-fg" : "border-line bg-raised text-fg hover:bg-hover"}`,
                children: [l.jsx("svg", {
                    viewBox: "0 0 24 24",
                    className: "h-6 w-6 fill-none stroke-current",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: E.icon
                }), l.jsx("span", {
                    children: E.name
                }), l.jsx("span", {
                    className: "font-mono text-[11px] text-muted",
                    children: A + 1
                })]
            }, E.name))
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${m.bad ? "text-danger" : "text-fg"}`,
            children: m.text || "Sort the lowest item: keys 1-4 or click a bin"
        }), l.jsxs("div", {
            className: "flex w-full flex-col gap-2",
            children: [l.jsx(be, {
                value: i / n
            }), l.jsx(re, {
                left: T.left,
                total: T.total
            })]
        })]
    })
}
const zk = 400
  , Fk = 600
  , pc = ["Hillcrest Ave", "Vinewood Blvd", "Strawberry Ave", "Davis Ave", "Mirror Park Blvd", "Alta St", "Elgin Ave", "Eclipse Blvd", "Palomino Ave", "Sinner St", "Carson Ave", "Bay City Ave", "Procopio Dr", "Zancudo Ave"]
  , sl = e => `${e.number} ${e.street}`
  , Ga = e => {
    const t = pc.filter(n => n !== e);
    return t[K(0, t.length - 1)]
}
  , Bf = e => String(K(10 ** (e - 1), 10 ** e - 1));
function Hk(e) {
    const t = K(0, e.length - 1);
    let n = K(0, 9);
    for (; String(n) === e[t] || t === 0 && n === 0; )
        n = K(0, 9);
    return e.slice(0, t) + n + e.slice(t + 1)
}
function Wk(e) {
    const t = K(0, e.length - 2);
    return e[t] === e[t + 1] || t === 0 && e[1] === "0" ? null : e.slice(0, t) + e[t + 1] + e[t] + e.slice(t + 2)
}
function Vf(e, t) {
    const n = t >= 2 ? 4 : 3
      , r = {
        number: Bf(n),
        street: pc[K(0, pc.length - 1)]
    }
      , s = new Set([sl(r)])
      , o = []
      , a = [ () => ({
        number: Hk(r.number),
        street: r.street
    }), () => ({
        number: r.number,
        street: Ga(r.street)
    }), () => {
        const u = Wk(r.number);
        return u ? {
            number: u,
            street: r.street
        } : null
    }
    ]
      , i = () => ({
        number: Bf(n),
        street: Ga(r.street)
    });
    for (let u = 0; o.length < e - 1 && u < 200; u++) {
        const d = [.34, .67, 1][Y(t, 0, 2)]
          , m = (Math.random() < d ? a[K(0, a.length - 1)] : i)();
        !m || s.has(sl(m)) || (s.add(sl(m)),
        o.push(m))
    }
    for (; o.length < e - 1; )
        o.push({
            number: String(K(10 ** (n - 1), 10 ** n - 1)) + o.length,
            street: Ga(r.street)
        });
    const c = ie([r, ...o]);
    return {
        target: r,
        plates: c,
        answer: c.indexOf(r)
    }
}
function Uk({settings: e, finish: t}) {
    const n = Math.max(1, Math.round(e.rounds))
      , r = Y(Math.round(e.choices), 2, 8)
      , s = Math.max(1, Math.round(e.lives))
      , o = T => n <= 1 ? 1 : Math.min(2, Math.floor(T / n * 3))
      , [a,i] = h.useState(0)
      , [c,u] = h.useState( () => Vf(r, o(0)))
      , [d,f] = h.useState([])
      , [m,y] = h.useState(0)
      , [g,p] = h.useState({
        text: "",
        bad: !1
    })
      , [k,v] = h.useState(null)
      , [x,w] = h.useState(!1)
      , b = h.useRef(!1)
      , M = h.useRef([])
      , N = (T, _) => void M.current.push(setTimeout(T, _));
    h.useEffect( () => () => M.current.forEach(clearTimeout), []);
    const j = (T, _) => {
        b.current || (b.current = !0,
        w(!0),
        p({
            text: _,
            bad: !0
        }),
        W("wrong", .4),
        N( () => t(!1, T), Fk))
    }
      , S = se(e.timeLimit, () => j("time", "Time's up"), !x)
      , R = T => {
        if (b.current || d.includes(T) || T >= c.plates.length)
            return;
        if (T !== c.answer) {
            const P = m + 1;
            return y(P),
            f([...d, T]),
            p({
                text: "Wrong mailbox",
                bad: !0
            }),
            P >= s ? j("error", "Wrong mailbox") : void W("wrong", .3)
        }
        v(T),
        N( () => v(null), 200);
        const _ = a + 1;
        if (_ >= n)
            return b.current = !0,
            i(_),
            w(!0),
            p({
                text: "Delivered",
                bad: !1
            }),
            W("correct", .5),
            void N( () => t(!0), zk);
        W("beep", .25),
        i(_),
        f([]),
        p({
            text: "",
            bad: !1
        }),
        u(Vf(r, o(_))),
        S.reset()
    }
    ;
    ne(T => {
        if (T.repeat)
            return;
        const _ = Number(T.key);
        _ >= 1 && _ <= r && (T.preventDefault(),
        R(_ - 1))
    }
    );
    const C = r <= 4 ? r : 4;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Parcel ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [Math.min(a + 1, n), "/", n]
                })]
            }), l.jsx(ee, {
                total: s,
                used: Math.min(m, s),
                label: "Misdeliveries"
            })]
        }), l.jsxs("div", {
            className: "w-full rounded border-2 border-dashed border-line bg-raised px-4 py-3 text-center",
            children: [l.jsx("div", {
                className: "text-xs text-muted",
                children: "Deliver to"
            }), l.jsx("div", {
                className: "text-2xl font-semibold text-fg",
                children: sl(c.target)
            })]
        }), l.jsx("div", {
            className: "grid w-full gap-2",
            style: {
                gridTemplateColumns: `repeat(${C}, minmax(0, 1fr))`
            },
            children: c.plates.map( (T, _) => {
                const P = d.includes(_);
                return l.jsxs("button", {
                    onMouseDown: () => R(_),
                    disabled: P,
                    className: `relative flex cursor-pointer flex-col items-center justify-center gap-0.5 rounded border-2 px-2 py-4 ${k === _ ? "border-fg bg-accent text-accent-ink" : P ? "border-danger bg-danger-soft text-muted line-through" : "border-line bg-raised text-fg hover:border-accent hover:bg-hover"}`,
                    children: [l.jsx("span", {
                        className: "text-2xl font-semibold leading-none",
                        children: T.number
                    }), l.jsx("span", {
                        className: "text-xs",
                        children: T.street
                    }), l.jsx("span", {
                        className: "absolute bottom-1 right-1.5 font-mono text-[10px] text-muted",
                        children: _ + 1
                    })]
                }, `${a}-${_}`)
            }
            )
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${g.bad ? "text-danger" : "text-fg"}`,
            children: g.text || "Click the matching mailbox or press its number"
        }), l.jsxs("div", {
            className: "mt-auto flex w-full flex-col gap-2",
            children: [l.jsx(be, {
                value: Math.min(a, n) / n
            }), l.jsx(re, {
                left: S.left,
                total: S.total
            })]
        })]
    })
}
const ol = 520
  , Ts = 320
  , tn = 36
  , Bk = .6
  , Vk = 2
  , xc = 2.6
  , Yk = 1
  , Gk = .5
  , Yf = 700
  , Kk = 600
  , Gf = (e, t) => ({
    x: e.x - t.x,
    y: e.y - t.y
})
  , Kf = (e, t) => e.x * t.x + e.y * t.y;
function gr(e, t, n) {
    const r = Gf(n, t)
      , s = Kf(r, r)
      , o = s > 0 ? Y(Kf(Gf(e, t), r) / s, 0, 1) : 0;
    return {
        d: Math.hypot(e.x - (t.x + r.x * o), e.y - (t.y + r.y * o)),
        t: o
    }
}
function qk(e, t, n, r) {
    return Math.min(gr(e, n, r).d, gr(t, n, r).d, gr(n, e, t).d, gr(r, e, t).d)
}
const To = (e, t) => e.widths[Math.min(t, e.widths.length - 1)] / 2 + 5;
function Xk(e, t, n, r) {
    const s = (ol - tn * 2) / e
      , o = Array.from({
        length: e
    }, (m, y) => t * (1 - (1 - Bk) * y / Math.max(1, e - 1)));
    let a = [];
    for (let m = 0; m < 300; m++) {
        a = [];
        let y = he(tn + 30, Ts - tn - 30);
        for (let p = 0; p <= e; p++) {
            const k = tn + p * s + (p > 0 && p < e ? he(-s * .25, s * .25) : 0);
            if (p > 0) {
                const v = he(40, 150) * (Math.random() < .5 ? -1 : 1);
                y = y + v < tn || y + v > Ts - tn ? y - v : y + v,
                y = Y(y, tn, Ts - tn)
            }
            a.push({
                x: k,
                y
            })
        }
        let g = !0;
        for (let p = 0; p < e && g; p++)
            for (let k = p + 2; k < e && g; k++)
                qk(a[p], a[p + 1], a[k], a[k + 1]) < (o[p] + o[k]) / 2 + 10 && (g = !1);
        if (g)
            break
    }
    const i = [0];
    for (let m = 0; m < e; m++)
        i.push(i[m] + Math.hypot(a[m + 1].x - a[m].x, a[m + 1].y - a[m].y));
    const c = Y(Math.round(n), 0, Math.floor((e - 1) / 2))
      , u = [0];
    for (let m = 1; m <= c; m++)
        u.push(Math.round(e * m / (c + 1)));
    u.push(e);
    const d = Array.from({
        length: e
    }, (m, y) => y).filter(m => !u.includes(m) && !u.includes(m + 1))
      , f = new Map;
    for (const m of ie(d).slice(0, Math.max(0, Math.round(r))))
        f.set(m, he(0, xc));
    return {
        pts: a,
        widths: o,
        arc: i,
        pads: u,
        live: f
    }
}
function qf(e, t) {
    const n = (t + e) % xc;
    return n < Yk ? "live" : n > xc - Gk ? "warn" : "off"
}
function Qk({settings: e, finish: t}) {
    const n = Y(Math.round(e.length), 4, 12)
      , r = Y(Number(e.width) || 28, 14, 40)
      , s = Math.max(1, Math.round(e.lives))
      , [o] = h.useState( () => Xk(n, r, e.checkpoints, e.liveSegments))
      , [a,i] = h.useState(null)
      , [c,u] = h.useState(0)
      , [d,f] = h.useState(0)
      , [m,y] = h.useState(0)
      , [g,p] = h.useState(null)
      , [k,v] = h.useState({})
      , [x,w] = h.useState("")
      , [b,M] = h.useState({
        text: "Hold the first pad to arm the probe",
        bad: !1
    })
      , N = h.useRef(null)
      , j = h.useRef(0)
      , S = h.useRef({
        probe: null,
        resume: 0,
        reach: 0,
        shorts: 0,
        done: !1
    })
      , R = h.useRef([])
      , C = (O, H) => void R.current.push(setTimeout(O, H));
    h.useEffect( () => () => R.current.forEach(clearTimeout), []);
    const T = se(e.timeLimit, () => P(), x === "")
      , _ = (O, H) => {
        S.current.done || (S.current.done = !0,
        S.current.probe = null,
        i(null),
        w(O ? "won" : "lost"),
        O ? (M({
            text: "Trace spliced",
            bad: !1
        }),
        W("correct", .5),
        C( () => t(!0), Kk)) : (W("wrong", .4),
        H === "time" ? t(!1, "time") : C( () => t(!1, "error"), Yf)))
    }
      , P = () => {
        M({
            text: "Time's up",
            bad: !0
        }),
        _(!1, "time")
    }
      , L = (O, H) => {
        const V = S.current;
        if (V.probe = null,
        V.shorts += 1,
        i(null),
        y(V.shorts),
        p(O),
        C( () => p(null), Yf),
        V.shorts >= s)
            return M({
                text: H,
                bad: !0
            }),
            _(!1, "error");
        W("wrong", .4),
        M({
            text: `${H}. Hold the ${V.resume === 0 ? "first" : "last lit"} pad to try again`,
            bad: !0
        })
    }
      , D = O => {
        let H = null;
        for (let V = 0; V < n; V++) {
            const Q = gr(O, o.pts[V], o.pts[V + 1]);
            Q.d <= o.widths[V] / 2 && (!H || Q.d < H.d) && (H = {
                i: V,
                ...Q
            })
        }
        return H
    }
      , E = O => {
        for (const [H,V] of o.live)
            if (qf(V, j.current) === "live" && gr(O, o.pts[H], o.pts[H + 1]).d <= o.widths[H] / 2)
                return !0;
        return !1
    }
      , A = O => {
        const H = S.current
          , V = H.probe;
        if (!V)
            return !1;
        const Q = Math.max(1, Math.ceil(Math.hypot(O.x - V.x, O.y - V.y) / Vk));
        for (let ye = 1; ye <= Q; ye++) {
            const Me = {
                x: V.x + (O.x - V.x) * ye / Q,
                y: V.y + (O.y - V.y) * ye / Q
            }
              , J = D(Me);
            if (!J)
                return L(Me, "Probe touched the edge"),
                !1;
            if (E(Me))
                return L(Me, "Probe hit a live segment"),
                !1;
            const ce = o.arc[J.i] + J.t * (o.arc[J.i + 1] - o.arc[J.i]);
            ce > H.reach && (H.reach = ce,
            f(ce));
            for (let de = H.resume + 1; de < o.pads.length; de++) {
                const Ve = o.pads[de];
                if (!(Math.hypot(Me.x - o.pts[Ve].x, Me.y - o.pts[Ve].y) > To(o, Ve))) {
                    if (de === o.pads.length - 1)
                        return H.probe = null,
                        _(!0),
                        !1;
                    H.resume = de,
                    u(de),
                    M({
                        text: "Checkpoint reached",
                        bad: !1
                    }),
                    W("beep", .3)
                }
            }
        }
        return H.probe = O,
        i(O),
        !0
    }
    ;
    De(O => {
        if (S.current.done)
            return;
        j.current += O;
        let H = !1;
        const V = {};
        for (const [ye,Me] of o.live)
            V[ye] = qf(Me, j.current),
            V[ye] !== k[ye] && (H = !0);
        H && v(V);
        const Q = S.current.probe;
        Q && E(Q) && L(Q, "Probe hit a live segment")
    }
    );
    const I = O => {
        const H = N.current.getBoundingClientRect()
          , V = ol / H.width;
        return {
            x: (O.clientX - H.left) * V,
            y: (O.clientY - H.top) * V
        }
    }
      , $ = a !== null;
    h.useEffect( () => {
        if (!$)
            return;
        const O = V => void A(I(V))
          , H = () => {
            S.current.probe && (S.current.probe = null,
            i(null),
            M({
                text: `Probe lifted. Hold the ${S.current.resume === 0 ? "first" : "last lit"} pad to continue`,
                bad: !1
            }))
        }
        ;
        return window.addEventListener("pointermove", O),
        window.addEventListener("pointerup", H),
        window.addEventListener("pointercancel", H),
        window.addEventListener("blur", H),
        () => {
            window.removeEventListener("pointermove", O),
            window.removeEventListener("pointerup", H),
            window.removeEventListener("pointercancel", H),
            window.removeEventListener("blur", H)
        }
    }
    , [$]);
    const F = O => {
        O.preventDefault();
        const H = S.current;
        if (H.done || H.probe || O.button !== 0)
            return;
        const V = I(O)
          , Q = o.pads[H.resume];
        Math.hypot(V.x - o.pts[Q].x, V.y - o.pts[Q].y) > To(o, Q) || (H.probe = V,
        i(V),
        M({
            text: "Keep the probe inside the trace",
            bad: !1
        }))
    }
      , z = [];
    for (let O = 0; O < n && !(o.arc[O] > d); O++)
        if (z.push(o.pts[O]),
        o.arc[O + 1] > d) {
            const H = (d - o.arc[O]) / (o.arc[O + 1] - o.arc[O]);
            z.push({
                x: o.pts[O].x + (o.pts[O + 1].x - o.pts[O].x) * H,
                y: o.pts[O].y + (o.pts[O + 1].y - o.pts[O].y) * H
            })
        }
    const U = Math.round((x === "won" ? 1 : d / o.arc[n]) * 100)
      , B = O => `M${o.pts[O].x} ${o.pts[O].y}L${o.pts[O + 1].x} ${o.pts[O + 1].y}`;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx(ee, {
                total: s,
                used: m,
                label: "Lives"
            }), l.jsxs("span", {
                children: ["Spliced ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [U, "%"]
                })]
            })]
        }), l.jsxs("svg", {
            ref: N,
            viewBox: `0 0 ${ol} ${Ts}`,
            width: ol,
            height: Ts,
            className: `touch-none rounded border border-line bg-raised ${$ ? "cursor-none" : "cursor-crosshair"}`,
            onPointerDown: F,
            children: [o.widths.map( (O, H) => l.jsx("path", {
                d: B(H),
                className: "stroke-accent-line",
                strokeWidth: O + 4,
                strokeLinecap: "round",
                fill: "none"
            }, `e${H}`)), o.widths.map( (O, H) => l.jsx("path", {
                d: B(H),
                className: "stroke-surface",
                strokeWidth: O,
                strokeLinecap: "round",
                fill: "none"
            }, `c${H}`)), z.length > 1 && l.jsx("polyline", {
                points: z.map(O => `${O.x},${O.y}`).join(" "),
                className: "stroke-accent-soft",
                strokeWidth: o.widths[n - 1] - 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none"
            }), [...o.live.keys()].map(O => {
                const H = k[O] ?? "off";
                return H === "off" ? l.jsx("path", {
                    d: B(O),
                    className: "stroke-dim",
                    strokeWidth: o.widths[O],
                    strokeLinecap: "round",
                    fill: "none"
                }, `l${O}`) : l.jsx("path", {
                    d: B(O),
                    className: H === "live" ? "stroke-danger-soft" : "stroke-warn-soft",
                    strokeWidth: o.widths[O],
                    strokeLinecap: "round",
                    fill: "none"
                }, `l${O}`)
            }
            ), [...o.live.keys()].map(O => {
                const H = k[O] ?? "off"
                  , V = o.pts[O]
                  , Q = o.pts[O + 1];
                return l.jsx("path", {
                    d: `M${V.x} ${V.y}L${Q.x} ${Q.y}`,
                    className: H === "live" ? "stroke-danger" : H === "warn" ? "stroke-warn" : "stroke-track",
                    strokeWidth: 1.5,
                    strokeDasharray: "5 5",
                    fill: "none"
                }, `z${O}`)
            }
            ), o.pads.map( (O, H) => {
                const V = o.pts[O]
                  , Q = H <= c || x === "won"
                  , ye = H === c && !$ && x === "";
                return l.jsxs("g", {
                    children: [l.jsx("circle", {
                        cx: V.x,
                        cy: V.y,
                        r: To(o, O),
                        className: Q ? "fill-accent" : "fill-raised stroke-accent",
                        strokeWidth: 2
                    }), l.jsx("circle", {
                        cx: V.x,
                        cy: V.y,
                        r: 3,
                        className: Q ? "fill-accent-ink" : "fill-accent"
                    }), ye && l.jsx("circle", {
                        cx: V.x,
                        cy: V.y,
                        r: To(o, O) + 5,
                        className: "stroke-accent-bright",
                        strokeWidth: 1.5,
                        strokeDasharray: "3 4",
                        fill: "none"
                    })]
                }, `p${O}`)
            }
            ), g && l.jsx("g", {
                className: "stroke-danger",
                strokeWidth: 2.5,
                strokeLinecap: "round",
                children: l.jsx("path", {
                    d: `M${g.x - 7} ${g.y - 7}L${g.x + 7} ${g.y + 7}M${g.x + 7} ${g.y - 7}L${g.x - 7} ${g.y + 7}`
                })
            }), a && l.jsx("circle", {
                cx: a.x,
                cy: a.y,
                r: 3.5,
                className: "fill-accent-bright stroke-accent-ink",
                strokeWidth: 1.5
            })]
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${b.bad ? "text-danger" : "text-fg"}`,
            children: b.text
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: l.jsx(re, {
                left: T.left,
                total: T.total
            })
        })]
    })
}
const nn = 480
  , er = 220
  , Ka = er / 2 + 20
  , Xf = 6
  , Qf = 96
  , Zk = 9
  , Jk = 70
  , yr = 110
  , e2 = 900
  , Ro = 650
  , t2 = 2
  , Zf = ["pulse", "dip", "twin"];
function n2(e, t, n) {
    const r = Math.abs(t - n);
    return e === "carrier" ? -yr * Math.max(0, 1 - r / 16) : e === "pulse" ? r < 24 ? -yr * .6 : 0 : e === "dip" ? yr * .7 * Math.max(0, 1 - r / 16) : -yr * .55 * Math.max(0, 1 - Math.abs(r - 16) / 9)
}
function r2({settings: e, finish: t}) {
    const n = Y(Math.round(e.rounds), 1, 20)
      , r = Math.max(1, Math.round(e.lives))
      , s = Y(Math.round(e.windowMs), 150, 2e3)
      , o = Y(Number(e.decoys) || 0, 0, .8)
      , a = Math.max(200, Math.round(e.minDelay))
      , i = Math.max(a, Math.round(e.maxDelay))
      , [c] = h.useState( () => Array.from({
        length: Qf
    }, () => he(-1, 1)))
      , [u,d] = h.useState(0)
      , [f,m] = h.useState(0)
      , [y,g] = h.useState(null)
      , [p,k] = h.useState({
        text: "Watch the scope",
        bad: !1
    })
      , [v,x] = h.useState("")
      , w = h.useRef(null)
      , b = h.useRef({
        signal: null,
        shownAt: 0,
        scroll: 0,
        caught: 0,
        faults: 0,
        decoysInRow: 0,
        times: [],
        waiting: !1,
        done: !1
    })
      , M = h.useRef([])
      , N = (C, T) => void M.current.push(setTimeout(C, T))
      , j = () => {
        M.current.forEach(clearTimeout),
        M.current = []
    }
    ;
    h.useEffect( () => (N(S, e2),
    j), []);
    const S = () => {
        const C = b.current;
        C.done || (C.signal = null,
        C.waiting = !0,
        x(""),
        N( () => {
            const T = C.decoysInRow < t2 && Math.random() < o
              , _ = T ? Zf[Math.floor(Math.random() * Zf.length)] : "carrier";
            C.decoysInRow = T ? C.decoysInRow + 1 : 0,
            C.signal = _,
            C.shownAt = performance.now(),
            C.waiting = !1,
            N( () => {
                C.signal === _ && (C.signal = null,
                _ === "carrier" ? R("Carrier missed") : S())
            }
            , s)
        }
        , he(a, i)))
    }
      , R = C => {
        const T = b.current;
        if (j(),
        T.signal = null,
        T.waiting = !1,
        T.faults += 1,
        m(T.faults),
        x("bad"),
        k({
            text: C,
            bad: !0
        }),
        W("wrong", .4),
        T.faults >= r)
            return T.done = !0,
            N( () => t(!1, "error"), Ro);
        N(S, Ro)
    }
    ;
    return ne(C => {
        if (C.code !== "Space" && C.key !== " ")
            return;
        C.preventDefault();
        const T = b.current;
        if (T.done || C.repeat)
            return;
        if (T.waiting)
            return R("Too early");
        if (!T.signal)
            return;
        if (T.signal !== "carrier")
            return R("That was a decoy");
        const _ = Math.round(performance.now() - T.shownAt);
        if (j(),
        T.signal = null,
        T.caught += 1,
        T.times.push(_),
        d(T.caught),
        g(_),
        x("hit"),
        k({
            text: `Caught in ${_} ms`,
            bad: !1
        }),
        W("correct", .4),
        T.caught >= n) {
            T.done = !0;
            const P = Math.round(T.times.reduce( (L, D) => L + D, 0) / T.times.length);
            return N( () => t(!0, void 0, {
                avgMs: P
            }), Ro)
        }
        N(S, Ro)
    }
    ),
    De(C => {
        const T = b.current;
        T.scroll += C * Jk;
        const _ = w.current;
        if (!_)
            return;
        const P = T.scroll / Xf
          , L = Math.floor(P)
          , D = [];
        for (let E = 0, A = 0; E <= nn; E += Xf,
        A++) {
            const I = c[(L + A) % Qf] * Zk;
            D.push(`${E},${(Ka + I + (T.signal ? n2(T.signal, E, nn / 2) : 0)).toFixed(1)}`)
        }
        _.setAttribute("points", D.join(" "))
    }
    ),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx(ee, {
                total: r,
                used: f,
                label: "Lives"
            }), l.jsxs("span", {
                children: ["Caught ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [u, "/", n]
                })]
            }), l.jsxs("span", {
                children: ["Last ", l.jsx("span", {
                    className: "font-mono text-sm text-accent",
                    children: y === null ? "–" : `${y} ms`
                })]
            })]
        }), l.jsxs("svg", {
            viewBox: `0 0 ${nn} ${er}`,
            width: nn,
            height: er,
            className: `rounded border-2 bg-surface ${v === "bad" ? "border-danger" : v === "hit" ? "border-accent" : "border-line"}`,
            children: [Array.from({
                length: 7
            }, (C, T) => l.jsx("line", {
                x1: nn / 8 * (T + 1),
                y1: 0,
                x2: nn / 8 * (T + 1),
                y2: er,
                className: "stroke-dim"
            }, `v${T}`)), Array.from({
                length: 3
            }, (C, T) => l.jsx("line", {
                x1: 0,
                y1: er / 4 * (T + 1),
                x2: nn,
                y2: er / 4 * (T + 1),
                className: "stroke-dim"
            }, `h${T}`)), l.jsx("line", {
                x1: 0,
                y1: Ka - yr * .8,
                x2: nn,
                y2: Ka - yr * .8,
                className: "stroke-accent-line",
                strokeDasharray: "4 6"
            }), l.jsx("polyline", {
                ref: w,
                className: "stroke-accent",
                strokeWidth: 2,
                strokeLinejoin: "round",
                fill: "none"
            })]
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${p.bad ? "text-danger" : "text-fg"}`,
            children: p.text
        }), l.jsx("div", {
            className: "text-center text-xs text-muted",
            children: "Press Space when a single spike crosses the dashed line"
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: l.jsx(be, {
                value: u / n
            })
        })]
    })
}
const fe = 6
  , ll = 2
  , ut = 58
  , dt = 4
  , s2 = 400
  , o2 = 6e3
  , l2 = 3
  , qa = 700
  , gc = e => e[0].c + e[0].len === fe;
function Vx(e, t=-1) {
    const n = new Int8Array(fe * fe).fill(-1);
    return e.forEach( (r, s) => {
        if (s !== t)
            for (let o = 0; o < r.len; o++)
                n[(r.r + (r.h ? 0 : o)) * fe + r.c + (r.h ? o : 0)] = s
    }
    ),
    n
}
function a2(e, t) {
    const n = Vx(e, t)
      , r = e[t]
      , s = c => (r.h ? n[r.r * fe + c] : n[c * fe + r.c]) === -1
      , o = r.h ? r.c : r.r;
    let a = o;
    for (; a > 0 && s(a - 1); )
        a--;
    let i = o;
    for (; i + r.len < fe && s(i + r.len); )
        i++;
    return [a, i]
}
const i2 = (e, t, n) => e.map( (r, s) => s !== t ? r : r.h ? {
    ...r,
    c: n
} : {
    ...r,
    r: n
});
function c2(e, t=2e4) {
    if (gc(e))
        return [];
    const n = e.length
      , r = Array.from({
        length: n
    }, (m, y) => fe ** y)
      , s = new Int8Array(n)
      , o = new Int8Array(fe * fe)
      , a = (m, y, g) => e[m].h ? e[m].r * fe + y + g : (y + g) * fe + e[m].c;
    let i = 0;
    e.forEach( (m, y) => i += (m.h ? m.c : m.r) * r[y]);
    const c = new Map([[i, -1]])
      , u = new Map
      , d = [i]
      , f = fe - e[0].len;
    for (let m = 0; m < d.length && c.size < t; m++) {
        const y = d[m];
        o.fill(-1);
        for (let g = 0, p = y; g < n; g++,
        p = Math.floor(p / fe)) {
            s[g] = p % fe;
            for (let k = 0; k < e[g].len; k++)
                o[a(g, s[g], k)] = g
        }
        for (let g = 0; g < n; g++) {
            const p = s[g]
              , k = e[g].len;
            for (const v of [-1, 1])
                for (let x = p + v; x >= 0 && x + k <= fe && o[a(g, v < 0 ? x : x + k - 1, 0)] === -1; x += v) {
                    const w = y + (x - p) * r[g];
                    if (!c.has(w)) {
                        if (c.set(w, y),
                        u.set(w, g * fe + x),
                        g === 0 && x === f) {
                            const b = [];
                            for (let M = w; M !== i; M = c.get(M)) {
                                const N = u.get(M);
                                b.unshift([Math.floor(N / fe), N % fe])
                            }
                            return b
                        }
                        d.push(w)
                    }
                }
        }
    }
    return null
}
function Jf(e, t, n=0) {
    let r = null;
    for (let s = 0; s < s2; s++) {
        const o = [{
            r: ll,
            c: Math.floor(Math.random() * 2),
            len: 2,
            h: !0
        }];
        for (let c = 0; c < 60 && o.length < e; c++) {
            const u = Math.random() < .5
              , d = Math.random() < .7 ? 2 : 3
              , f = Math.floor(u ? Math.random() * fe : Math.random() * (fe - d + 1));
            if (u && f === ll)
                continue;
            const m = Math.floor(u ? Math.random() * (fe - d + 1) : Math.random() * fe)
              , y = {
                r: f,
                c: m,
                len: d,
                h: u
            }
              , g = Vx(o);
            let p = !0;
            for (let k = 0; k < d && p; k++)
                g[(f + (u ? 0 : k)) * fe + m + (u ? k : 0)] !== -1 && (p = !1);
            p && o.push(y)
        }
        const a = c2(o, o2);
        if (!a || a.length < 2)
            continue;
        const i = a.length;
        if (!(n > 0 && i > n) && ((!r || Math.abs(i - t) < Math.abs(r.min - t)) && (r = {
            blocks: o,
            min: i
        }),
        i >= t && i <= t + l2))
            break
    }
    return r ?? {
        blocks: [{
            r: ll,
            c: 0,
            len: 2,
            h: !0
        }, {
            r: 1,
            c: 3,
            len: 2,
            h: !1
        }, {
            r: 2,
            c: 5,
            len: 3,
            h: !1
        }],
        min: 2
    }
}
const Jr = e => e * (ut + dt) + dt;
function u2({settings: e, finish: t}) {
    const n = Y(Math.round(e.blocks), 4, 12)
      , r = Y(Math.round(e.minMoves), 2, 12)
      , s = e.maxMoves > 0 ? Math.max(2, Math.round(e.maxMoves)) : 0
      , o = Math.max(1, Math.round(e.rounds))
      , [a,i] = h.useState(0)
      , [c,u] = h.useState( () => Jf(n, r, s))
      , [d,f] = h.useState(c.blocks)
      , [m,y] = h.useState(0)
      , [g,p] = h.useState(null)
      , [k,v] = h.useState(!1)
      , [x,w] = h.useState({
        text: "",
        bad: !1
    })
      , b = h.useRef(null)
      , M = h.useRef({
        i: -1,
        start: 0,
        pos: 0,
        lo: 0,
        hi: 0
    })
      , N = h.useRef(!1)
      , j = h.useRef([])
      , S = ($, F) => void j.current.push(setTimeout($, F));
    h.useEffect( () => () => j.current.forEach(clearTimeout), []);
    const R = se(e.timeLimit, () => C(), !k)
      , C = () => {
        N.current || (N.current = !0,
        v(!0),
        p(null),
        w({
            text: "Time's up",
            bad: !0
        }),
        W("wrong", .4),
        t(!1, "time"))
    }
      , T = h.useMemo( () => null, [d, k])
      , _ = $ => {
        const F = b.current.getBoundingClientRect()
          , z = F.width / (fe * (ut + dt) + dt);
        return {
            x: ($.clientX - F.left) / z,
            y: ($.clientY - F.top) / z
        }
    }
      , P = ($, F) => {
        const z = d[$];
        if (F === (z.h ? z.c : z.r))
            return;
        const U = i2(d, $, F)
          , B = m + 1;
        if (f(U),
        y(B),
        gc(U)) {
            if (v(!0),
            w({
                text: "Drive ejected",
                bad: !1
            }),
            W("correct", .5),
            a + 1 >= o)
                return N.current = !0,
                void S( () => t(!0), qa);
            S( () => {
                const O = Jf(n, r, s);
                u(O),
                f(O.blocks),
                y(0),
                w({
                    text: "",
                    bad: !1
                }),
                i(a + 1),
                v(!1)
            }
            , qa);
            return
        }
        if (s > 0 && B >= s)
            return N.current = !0,
            v(!0),
            w({
                text: "Out of moves",
                bad: !0
            }),
            W("wrong", .4),
            void S( () => t(!1, "error"), qa);
        W("beep", .2)
    }
      , L = g !== null;
    h.useEffect( () => {
        if (!L)
            return;
        const $ = z => {
            const U = M.current
              , B = _(z)
              , O = Y(U.pos + ((d[U.i].h ? B.x : B.y) - U.start) / (ut + dt), U.lo, U.hi);
            p({
                i: U.i,
                at: O
            })
        }
          , F = z => {
            const U = M.current;
            if (p(null),
            !("clientX"in z))
                return;
            const B = _(z);
            P(U.i, Math.round(Y(U.pos + ((d[U.i].h ? B.x : B.y) - U.start) / (ut + dt), U.lo, U.hi)))
        }
        ;
        return window.addEventListener("pointermove", $),
        window.addEventListener("pointerup", F),
        window.addEventListener("pointercancel", F),
        window.addEventListener("blur", F),
        () => {
            window.removeEventListener("pointermove", $),
            window.removeEventListener("pointerup", F),
            window.removeEventListener("pointercancel", F),
            window.removeEventListener("blur", F)
        }
    }
    , [L]);
    const D = $ => F => {
        if (F.preventDefault(),
        N.current || k || L || F.button !== 0)
            return;
        const z = d[$]
          , U = _(F)
          , [B,O] = a2(d, $);
        M.current = {
            i: $,
            start: z.h ? U.x : U.y,
            pos: z.h ? z.c : z.r,
            lo: B,
            hi: O
        },
        p({
            i: $,
            at: z.h ? z.c : z.r
        })
    }
      , E = () => {
        N.current || k || (f(c.blocks),
        y(0),
        w({
            text: "Rack reset",
            bad: !1
        }))
    }
      , A = fe * (ut + dt) + dt
      , I = s > 0 ? s - m : 0;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [a + 1, "/", o]
                })]
            }), l.jsxs("span", {
                children: ["Best ", l.jsx("span", {
                    className: "font-mono text-sm text-accent",
                    children: c.min
                })]
            }), l.jsxs("span", {
                children: ["Moves", " ", l.jsx("span", {
                    className: `font-mono text-sm ${s > 0 && I <= 2 ? "text-warn" : "text-accent"}`,
                    children: s > 0 ? `${m}/${s}` : m
                })]
            })]
        }), l.jsx("div", {
            className: "flex flex-1 items-center",
            children: l.jsxs("div", {
                className: "relative",
                children: [l.jsxs("div", {
                    ref: b,
                    className: "relative touch-none rounded border-2 border-line bg-surface",
                    style: {
                        width: A,
                        height: A
                    },
                    children: [Array.from({
                        length: fe * fe
                    }, ($, F) => l.jsx("div", {
                        className: "absolute rounded-sm bg-dim",
                        style: {
                            left: Jr(F % fe),
                            top: Jr(Math.floor(F / fe)),
                            width: ut,
                            height: ut
                        }
                    }, F)), d.map( ($, F) => {
                        const z = (g == null ? void 0 : g.i) === F ? g.at : $.h ? $.c : $.r
                          , U = Jr($.h ? z : $.c)
                          , B = Jr($.h ? $.r : z)
                          , O = $.h ? $.len * (ut + dt) - dt : ut
                          , H = $.h ? ut : $.len * (ut + dt) - dt
                          , V = F === 0
                          , Q = (T == null ? void 0 : T[0]) === F;
                        return l.jsxs("div", {
                            onPointerDown: D(F),
                            className: `absolute flex items-center justify-center rounded border-2 ${V ? "border-accent-bright bg-accent" : (g == null ? void 0 : g.i) === F ? "border-accent bg-hover" : "border-line bg-raised hover:border-accent-line"} ${$.h ? "cursor-ew-resize" : "cursor-ns-resize"} ${Q ? "outline-2 outline-offset-2 outline-dashed outline-accent-bright" : ""}`,
                            style: {
                                left: U,
                                top: B,
                                width: O,
                                height: H
                            },
                            children: [l.jsx("div", {
                                className: `flex gap-1.5 ${$.h ? "flex-row" : "flex-col"}`,
                                children: Array.from({
                                    length: $.len + 1
                                }, (ye, Me) => l.jsx("span", {
                                    className: `h-1.5 w-1.5 rounded-full ${V ? "bg-accent-ink" : Me === 0 ? "bg-accent" : "bg-track"}`
                                }, Me))
                            }), Q && l.jsx("span", {
                                className: "absolute -top-5 font-mono text-xs text-accent-bright",
                                children: $.h ? T[1] > $.c ? "→" : "←" : T[1] > $.r ? "↓" : "↑"
                            })]
                        }, F)
                    }
                    )]
                }), l.jsx("div", {
                    className: "absolute rounded-r bg-accent",
                    style: {
                        left: A,
                        top: Jr(ll) + 2,
                        width: 6,
                        height: ut
                    }
                })]
            })
        }), l.jsxs("div", {
            className: "flex w-full items-center justify-between",
            children: [l.jsx("span", {
                className: `text-xs ${x.bad ? "text-danger" : "text-fg"}`,
                children: x.text || "Drag modules along their rails. Get the lit drive out of the port"
            }), l.jsx("button", {
                onClick: E,
                className: "cursor-pointer rounded bg-raised px-3 py-1 text-xs text-muted hover:bg-hover hover:text-fg",
                children: "Reset"
            })]
        }), l.jsxs("div", {
            className: "flex w-full flex-col gap-2",
            children: [l.jsx(be, {
                value: (a + (gc(d) ? 1 : 0)) / o
            }), l.jsx(re, {
                left: R.left,
                total: R.total
            })]
        })]
    })
}
const d2 = 330
  , f2 = 300
  , h2 = 900
  , m2 = 700
  , p2 = 450
  , Ao = 0
  , Tn = 1
  , Co = 2
  , Lo = 3;
function eh(e) {
    const t = [];
    let n = 0;
    for (const r of e)
        r ? n++ : n && (t.push(n),
        n = 0);
    return n && t.push(n),
    t
}
function x2(e, t, n) {
    const r = []
      , s = Array(t).fill(0)
      , o = (a, i) => {
        if (a === e.length) {
            for (let d = i; d < t; d++)
                if (n[d] === 1)
                    return;
            r.push(s.slice());
            return
        }
        const c = e[a]
          , u = e.slice(a + 1).reduce( (d, f) => d + f + 1, 0);
        for (let d = i; d + c + u <= t && n[d - 1] !== 1; d++) {
            let f = !0;
            for (let m = d; m < d + c && f; m++)
                n[m] === 0 && (f = !1);
            if (f && n[d + c] === 1 && (f = !1),
            f) {
                for (let m = d; m < d + c; m++)
                    s[m] = 1;
                o(a + 1, d + c + 1);
                for (let m = d; m < d + c; m++)
                    s[m] = 0
            }
            if (n[d] === 1)
                break
        }
    }
    ;
    return o(0, 0),
    r
}
function g2(e, t, n) {
    const r = Array.from({
        length: n
    }, () => Array(n).fill(-1));
    for (let s = !0; s; ) {
        s = !1;
        for (let o = 0; o < 2; o++)
            for (let a = 0; a < n; a++) {
                const i = Array.from({
                    length: n
                }, (u, d) => o ? r[d][a] : r[a][d]);
                if (!i.includes(-1))
                    continue;
                const c = x2(o ? t[a] : e[a], n, i);
                if (c.length === 0)
                    return null;
                for (let u = 0; u < n; u++) {
                    if (i[u] !== -1)
                        continue;
                    const d = c[0][u];
                    c.every(f => f[u] === d) && (o ? r[u][a] = d : r[a][u] = d,
                    s = !0)
                }
            }
    }
    return r
}
function y2(e, t) {
    let n = null;
    for (let r = 0; r < f2; r++) {
        const s = Array.from({
            length: e
        }, () => Array.from({
            length: e
        }, () => Math.random() < t ? 1 : 0))
          , o = s.map(eh)
          , a = s[0].map( (c, u) => eh(s.map(d => d[u])));
        n = {
            cells: s,
            rows: o,
            cols: a
        };
        const i = g2(o, a, e);
        if (i && i.every(c => !c.includes(-1)))
            return n
    }
    return n
}
function v2({settings: e, finish: t}) {
    const n = Y(Math.round(e.size), 4, 10)
      , r = Y(Number(e.density) || .55, .4, .75)
      , s = Math.max(1, Math.round(e.maxMistakes))
      , [o] = h.useState( () => y2(n, r))
      , [a,i] = h.useState( () => Array(n * n).fill(Ao))
      , [c,u] = h.useState(0)
      , [d,f] = h.useState(-1)
      , [m,y] = h.useState(!1)
      , [g,p] = h.useState({
        text: "Left click fills a cell, right click crosses it out",
        bad: !1
    })
      , k = h.useRef(null)
      , v = h.useRef({
        marks: a,
        mistakes: 0,
        action: null,
        done: !1
    })
      , x = h.useRef([])
      , w = (E, A) => void x.current.push(setTimeout(E, A));
    h.useEffect( () => () => x.current.forEach(clearTimeout), []);
    const b = se(e.timeLimit, () => M(!1, "time"), !m)
      , M = (E, A) => {
        const I = v.current;
        if (!I.done) {
            if (I.done = !0,
            I.action = null,
            y(!0),
            E)
                return p({
                    text: "Access pattern matched",
                    bad: !1
                }),
                W("correct", .5),
                w( () => t(!0), h2);
            if (W("wrong", .4),
            A === "time")
                return p({
                    text: "Time's up",
                    bad: !0
                }),
                t(!1, "time");
            p({
                text: "Too many wrong cells",
                bad: !0
            }),
            w( () => t(!1, "error"), m2)
        }
    }
      , N = E => o.cells[Math.floor(E / n)][E % n]
      , j = E => {
        const A = v.current;
        if (A.done || !A.action || E < 0)
            return;
        const I = A.marks[E];
        let $ = I;
        if (A.action === "fill" && I === Ao ? $ = N(E) ? Tn : Lo : A.action === "cross" && I === Ao ? $ = Co : A.action === "uncross" && I === Co && ($ = Ao),
        $ === I)
            return;
        const F = A.marks.slice();
        if (F[E] = $,
        A.marks = F,
        i(F),
        $ === Lo) {
            if (A.action = null,
            A.mistakes += 1,
            u(A.mistakes),
            f(E),
            w( () => f(-1), p2),
            A.mistakes >= s)
                return M(!1, "error");
            W("wrong", .4),
            p({
                text: "That cell is empty",
                bad: !0
            });
            return
        }
        $ === Tn && (W("beep", .15),
        F.every( (z, U) => z === Tn || !N(U)) && M(!0))
    }
      , S = E => {
        const A = k.current.getBoundingClientRect()
          , I = Math.floor((E.clientX - A.left) / A.width * n)
          , $ = Math.floor((E.clientY - A.top) / A.height * n);
        return $ >= 0 && $ < n && I >= 0 && I < n ? $ * n + I : -1
    }
      , R = E => {
        E.preventDefault();
        const A = v.current;
        if (A.done)
            return;
        const I = S(E);
        if (!(I < 0)) {
            if (E.button === 0)
                A.action = "fill";
            else if (E.button === 2)
                A.action = A.marks[I] === Co ? "uncross" : "cross";
            else
                return;
            j(I)
        }
    }
    ;
    h.useEffect( () => {
        const E = I => {
            v.current.action && j(S(I))
        }
          , A = () => void (v.current.action = null);
        return window.addEventListener("pointermove", E),
        window.addEventListener("pointerup", A),
        window.addEventListener("pointercancel", A),
        window.addEventListener("blur", A),
        () => {
            window.removeEventListener("pointermove", E),
            window.removeEventListener("pointerup", A),
            window.removeEventListener("pointercancel", A),
            window.removeEventListener("blur", A)
        }
    }
    , []);
    const C = Math.floor(d2 / n)
      , T = C * n
      , _ = E => o.cells[E].every( (A, I) => !A || a[E * n + I] === Tn)
      , P = E => o.cells.every( (A, I) => !A[E] || a[I * n + E] === Tn)
      , L = E => E.length ? E : [0]
      , D = !1;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx(ee, {
                total: s,
                used: c,
                label: "Lives"
            }), l.jsxs("span", {
                children: ["Filled", " ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [a.filter(E => E === Tn).length, "/", o.cells.flat().filter(Boolean).length]
                })]
            })]
        }), l.jsx("div", {
            className: "flex flex-1 items-center",
            children: l.jsxs("div", {
                className: "grid gap-1.5",
                style: {
                    gridTemplateColumns: `auto ${T}px`,
                    gridTemplateRows: `auto ${T}px`
                },
                children: [l.jsx("div", {}), l.jsx("div", {
                    className: "flex items-end",
                    children: o.cols.map( (E, A) => l.jsx("div", {
                        className: `flex flex-col items-center gap-0.5 pb-1 font-mono text-xs ${P(A) ? "text-muted" : "text-accent"}`,
                        style: {
                            width: C
                        },
                        children: L(E).map( (I, $) => l.jsx("span", {
                            children: I
                        }, $))
                    }, A))
                }), l.jsx("div", {
                    className: "flex flex-col",
                    children: o.rows.map( (E, A) => l.jsx("div", {
                        className: `flex items-center justify-end gap-2 pr-2 font-mono text-xs ${_(A) ? "text-muted" : "text-accent"}`,
                        style: {
                            height: C
                        },
                        children: L(E).map( (I, $) => l.jsx("span", {
                            children: I
                        }, $))
                    }, A))
                }), l.jsx("div", {
                    ref: k,
                    onPointerDown: R,
                    onContextMenu: E => E.preventDefault(),
                    className: "grid touch-none cursor-pointer rounded border border-line bg-line",
                    style: {
                        gridTemplateColumns: `repeat(${n}, ${C}px)`,
                        gridTemplateRows: `repeat(${n}, ${C}px)`,
                        gap: 0
                    },
                    children: a.map( (E, A) => {
                        const I = Math.floor(A / n)
                          , $ = A % n
                          , F = `${$ % 5 === 4 && $ < n - 1 ? "border-r-line" : "border-r-surface"} ${I % 5 === 4 && I < n - 1 ? "border-b-line" : "border-b-surface"}`;
                        return l.jsxs("div", {
                            className: `relative flex items-center justify-center border-r border-b ${F} ${E === Tn ? "bg-accent" : d === A ? "bg-danger-soft" : "bg-raised"}`,
                            children: [(E === Co || E === Lo) && l.jsx("svg", {
                                viewBox: "0 0 10 10",
                                className: `h-1/3 w-1/3 ${E === Lo ? "stroke-danger" : "stroke-muted"}`,
                                strokeWidth: 1.6,
                                strokeLinecap: "round",
                                children: l.jsx("path", {
                                    d: "M1 1l8 8M9 1l-8 8"
                                })
                            }), D]
                        }, A)
                    }
                    )
                })]
            })
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${g.bad ? "text-danger" : "text-fg"}`,
            children: g.text
        }), l.jsx("div", {
            className: "w-full",
            children: l.jsx(re, {
                left: b.left,
                total: b.total
            })
        })]
    })
}
const w2 = 340
  , k2 = 300
  , j2 = 900
  , b2 = 900;
function ua(e, t) {
    const n = Math.floor(e / t)
      , r = e % t
      , s = [];
    for (let o = -1; o <= 1; o++)
        for (let a = -1; a <= 1; a++) {
            if (!o && !a)
                continue;
            const i = n + o
              , c = r + a;
            i >= 0 && i < t && c >= 0 && c < t && s.push(i * t + c)
        }
    return s
}
function yc(e, t, n, r, s) {
    const o = []
      , a = [e];
    for (; a.length; ) {
        const i = a.pop();
        s[i] || n[i] || (s[i] = !0,
        o.push(i),
        r[i] === 0 && a.push(...ua(i, t)))
    }
    return o
}
const Yx = (e, t) => e.map( (n, r) => ua(r, t).filter(s => e[s]).length);
function S2(e, t, n) {
    const r = Yx(e, t)
      , s = Array(t * t).fill(!1)
      , o = Array(t * t).fill(!1);
    yc(n, t, e, r, s);
    const a = e.filter(i => !i).length;
    for (let i = !0; i; ) {
        i = !1;
        const c = [];
        for (let f = 0; f < t * t; f++) {
            if (!s[f])
                continue;
            const m = ua(f, t)
              , y = m.filter(g => !s[g] && !o[g]);
            y.length && c.push({
                cells: y,
                need: r[f] - m.filter(g => o[g]).length
            })
        }
        const u = f => {
            s[f] || o[f] || (yc(f, t, e, r, s),
            i = !0)
        }
          , d = f => {
            o[f] || (o[f] = !0,
            i = !0)
        }
        ;
        for (const f of c)
            f.need === 0 ? f.cells.forEach(u) : f.need === f.cells.length && f.cells.forEach(d);
        if (!i)
            for (const f of c)
                for (const m of c) {
                    if (f === m || f.cells.length >= m.cells.length || !f.cells.every(p => m.cells.includes(p)))
                        continue;
                    const y = m.cells.filter(p => !f.cells.includes(p))
                      , g = m.need - f.need;
                    g === 0 ? y.forEach(u) : g === y.length && y.forEach(d)
                }
    }
    return s.filter(Boolean).length === a
}
function N2(e, t, n) {
    const r = new Set([n, ...ua(n, e)])
      , s = Array.from({
        length: e * e
    }, (a, i) => i).filter(a => !r.has(a));
    let o = [];
    for (let a = 0; a < k2; a++) {
        o = Array(e * e).fill(!1);
        const i = s.slice();
        for (let c = 0; c < t && i.length; c++)
            o[i.splice(Math.floor(Math.random() * i.length), 1)[0]] = !0;
        if (S2(o, e, n))
            return o
    }
    return o
}
function M2({settings: e, finish: t}) {
    const n = Y(Math.round(e.size), 5, 10)
      , r = Y(Math.round(e.nodes), 1, Math.floor(n * n * .22))
      , s = Math.max(1, Math.round(e.lives))
      , [o,a] = h.useState(null)
      , [i,c] = h.useState( () => Array(n * n).fill(!1))
      , [u,d] = h.useState( () => Array(n * n).fill(!1))
      , [f,m] = h.useState([])
      , [y,g] = h.useState("")
      , [p,k] = h.useState({
        text: "Left click probes a cell, right click tags a node",
        bad: !1
    })
      , v = h.useRef({
        nodes: null,
        counts: [],
        open: i,
        tags: u,
        trips: 0,
        done: !1
    })
      , x = h.useRef([])
      , w = (P, L) => void x.current.push(setTimeout(P, L));
    h.useEffect( () => () => x.current.forEach(clearTimeout), []);
    const b = se(e.timeLimit, () => M(!1, "time"), y === "")
      , M = (P, L) => {
        const D = v.current;
        if (!D.done) {
            if (D.done = !0,
            g(P ? "won" : "lost"),
            P)
                return k({
                    text: "Every node found",
                    bad: !1
                }),
                W("correct", .5),
                w( () => t(!0), j2);
            if (W("wrong", .4),
            L === "time")
                return k({
                    text: "Time's up",
                    bad: !0
                }),
                t(!1, "time");
            k({
                text: "Alarm tripped",
                bad: !0
            }),
            w( () => t(!1, "error"), b2)
        }
    }
      , N = P => {
        const L = v.current;
        if (L.done || L.open[P] || L.tags[P])
            return;
        if (L.nodes || (L.nodes = N2(n, r, P),
        L.counts = Yx(L.nodes, n),
        a(L.nodes)),
        L.nodes[P]) {
            L.trips += 1;
            const E = L.open.slice();
            if (E[P] = !0,
            L.open = E,
            c(E),
            m(A => [...A, P]),
            L.trips >= s)
                return M(!1, "error");
            W("wrong", .4),
            k({
                text: "That was a node. Alarm level raised",
                bad: !0
            });
            return
        }
        const D = L.open.slice();
        yc(P, n, L.nodes, L.counts, D),
        L.open = D,
        c(D),
        W("beep", .15),
        D.every( (E, A) => E || L.nodes[A]) && M(!0)
    }
      , j = P => {
        const L = v.current;
        if (L.done || L.open[P])
            return;
        const D = L.tags.slice();
        D[P] = !D[P],
        L.tags = D,
        d(D)
    }
      , S = P => L => {
        L.preventDefault(),
        L.button === 0 ? N(P) : L.button === 2 && j(P)
    }
      , R = Math.floor(w2 / n)
      , C = v.current.counts
      , T = r - u.filter(Boolean).length - f.length
      , _ = !1;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx(ee, {
                total: s,
                used: f.length,
                label: "Lives"
            }), l.jsxs("span", {
                children: ["Nodes left ", l.jsx("span", {
                    className: `font-mono text-sm ${T < 0 ? "text-warn" : "text-accent"}`,
                    children: T
                })]
            })]
        }), l.jsx("div", {
            className: "flex flex-1 items-center",
            children: l.jsx("div", {
                onContextMenu: P => P.preventDefault(),
                className: "grid touch-none gap-1",
                style: {
                    gridTemplateColumns: `repeat(${n}, ${R - 4}px)`,
                    gridTemplateRows: `repeat(${n}, ${R - 4}px)`
                },
                children: i.map( (P, L) => {
                    const D = (o == null ? void 0 : o[L]) === !0
                      , E = P || y === "lost" && D
                      , A = f.includes(L);
                    return l.jsxs("div", {
                        onPointerDown: S(L),
                        className: `flex items-center justify-center rounded-sm font-mono text-sm ${A ? "bg-danger-soft text-danger" : E ? D ? "bg-raised" : "bg-surface" : "cursor-pointer bg-raised hover:bg-hover"}`,
                        children: [E && D && l.jsx("span", {
                            className: `h-2.5 w-2.5 rotate-45 ${A ? "bg-danger" : "bg-accent"}`
                        }), E && !D && C[L] > 0 && l.jsx("span", {
                            className: C[L] >= 3 ? "text-accent-bright" : "text-accent",
                            children: C[L]
                        }), !E && u[L] && l.jsx("span", {
                            className: "h-2.5 w-2.5 rotate-45 border-2 border-accent"
                        }), !E && !u[L] && _]
                    }, L)
                }
                )
            })
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${p.bad ? "text-danger" : "text-fg"}`,
            children: p.text
        }), l.jsx("div", {
            className: "w-full",
            children: l.jsx(re, {
                left: b.left,
                total: b.total
            })
        })]
    })
}
const Pu = 14
  , th = 280;
function Gx(e) {
    return ie(Array.from({
        length: Pu
    }, (t, n) => n)).slice(0, e).sort( (t, n) => t - n)
}
function E2(e, t) {
    for (let n = 0; n < 50; n++) {
        const r = [...e]
          , s = K(1, 2);
        for (let a = 0; a < s; a++) {
            const i = Array.from({
                length: Pu
            }, (c, u) => u).filter(c => !r.includes(c));
            r[K(0, r.length - 1)] = i[K(0, i.length - 1)]
        }
        r.sort( (a, i) => a - i);
        const o = r.join(",");
        if (!t.has(o))
            return t.add(o),
            r
    }
    return Gx(e.length)
}
function T2(e, t) {
    const n = Gx(t)
      , r = new Set([n.join(",")])
      , s = K(0, e - 1)
      , o = Array.from({
        length: e
    }, (a, i) => i === s ? n : E2(n, r));
    return {
        sample: n,
        options: o,
        answer: s
    }
}
function nh({bands: e, tone: t, onClick: n, state: r}) {
    const s = t === "sample" ? "bg-accent" : r === "wrong" ? "bg-danger" : "bg-fg"
      , o = n ? "button" : "div";
    return l.jsx(o, {
        onMouseDown: n,
        className: `relative w-14 rounded border ${t === "sample" ? "border-accent" : r === "wrong" ? "border-danger opacity-60" : "cursor-pointer border-line hover:border-accent"} bg-raised`,
        style: {
            height: th
        },
        children: e.map(a => l.jsx("span", {
            className: `absolute inset-x-2 h-1 rounded-sm ${s}`,
            style: {
                top: 10 + a * ((th - 24) / (Pu - 1))
            }
        }, a))
    })
}
function R2({settings: e, finish: t}) {
    const n = e.rounds
      , [r,s] = h.useState(0)
      , [o,a] = h.useState(0)
      , [i,c] = h.useState([])
      , u = h.useMemo( () => T2(e.lanes, e.bands), [r])
      , d = h.useRef(!1)
      , f = (g, p, k=r) => {
        d.current || (d.current = !0,
        t(g, p, {
            score: Math.round(k / n * 100)
        }))
    }
      , m = se(e.timeLimit, () => f(!1, "time"))
      , y = g => {
        if (!(d.current || i.includes(g))) {
            if (g === u.answer) {
                if (W("correct", .3),
                r + 1 >= n)
                    return W("finish", .4),
                    f(!0, void 0, n);
                c([]),
                s(r + 1);
                return
            }
            if (W("wrong", .4),
            c([...i, g]),
            o + 1 >= e.lives)
                return f(!1, "error");
            a(o + 1)
        }
    }
    ;
    return l.jsxs("div", {
        className: "flex h-full flex-col gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: "Pick the lane that matches the sample"
            }), l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [Math.min(r + 1, n), "/", n]
                })]
            })]
        }), l.jsxs("div", {
            className: "flex flex-1 items-center justify-center gap-4",
            children: [l.jsxs("div", {
                className: "flex flex-col items-center gap-1.5",
                children: [l.jsx(nh, {
                    bands: u.sample,
                    tone: "sample"
                }), l.jsx("span", {
                    className: "text-xs text-accent",
                    children: "Sample"
                })]
            }), l.jsx("div", {
                className: "mx-1 w-px self-stretch bg-line"
            }), u.options.map( (g, p) => l.jsxs("div", {
                className: "flex flex-col items-center gap-1.5",
                children: [l.jsx(nh, {
                    bands: g,
                    tone: "option",
                    onClick: () => y(p),
                    state: i.includes(p) ? "wrong" : void 0
                }), l.jsx("span", {
                    className: "text-xs text-muted",
                    children: p + 1
                })]
            }, `${r}-${p}`))]
        }), l.jsx(ee, {
            total: e.lives,
            used: o,
            label: "Mistakes left"
        }), l.jsx(re, {
            left: m.left,
            total: m.total
        })]
    })
}
const A2 = 520
  , C2 = 90
  , rh = 50;
function L2(e) {
    const t = Array.from({
        length: e
    }, (r, s) => ({
        x: (s + .5) * (100 / e) + he(-2.5, 2.5),
        w: K(1, 5),
        top: K(0, 30),
        bottom: K(0, 30)
    }));
    let n = K(-40, 40);
    for (; Math.abs(n) < 12; )
        n = K(-40, 40);
    return {
        marks: t,
        offset: n,
        focus: K(20, 80)
    }
}
function sh({marks: e, shift: t, blur: n, tone: r}) {
    return l.jsx("div", {
        className: "relative overflow-hidden rounded border border-line bg-raised",
        style: {
            width: A2,
            height: C2
        },
        children: l.jsx("div", {
            className: "absolute inset-0",
            style: {
                filter: n > .2 ? `blur(${n.toFixed(1)}px)` : void 0
            },
            children: e.map( (s, o) => l.jsx("span", {
                className: `absolute ${r === "ref" ? "bg-muted" : "bg-accent"}`,
                style: {
                    left: `${s.x + t}%`,
                    width: s.w,
                    top: s.top,
                    bottom: s.bottom
                }
            }, o))
        })
    })
}
function $2({settings: e, finish: t}) {
    const n = e.rounds
      , [r,s] = h.useState(0)
      , o = h.useMemo( () => L2(e.marks), [r])
      , [a,i] = h.useState(0)
      , [c,u] = h.useState( () => o.focus > 50 ? 5 : 95)
      , [d,f] = h.useState(0)
      , m = h.useRef(!1)
      , y = (x, w, b=r) => {
        m.current || (m.current = !0,
        t(x, w, {
            score: Math.round(b / n * 100)
        }))
    }
      , g = se(e.timeLimit, () => y(!1, "time"))
      , p = Math.abs(a - o.offset)
      , k = Math.abs(c - o.focus)
      , v = p <= e.tolerance && k <= e.tolerance * 3;
    return De(x => {
        if (m.current)
            return;
        if (!v) {
            d !== 0 && f(0);
            return
        }
        const w = d + x * 1e3;
        if (w < e.holdMs)
            return f(w);
        if (W("correct", .3),
        r + 1 >= n)
            return W("finish", .4),
            y(!0, void 0, n);
        f(0),
        i(0),
        s(r + 1)
    }
    ),
    l.jsxs("div", {
        className: "flex h-full flex-col gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: "Line the striations up with the reference and hold"
            }), l.jsxs("span", {
                children: ["Casing ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [Math.min(r + 1, n), "/", n]
                })]
            })]
        }), l.jsxs("div", {
            className: "flex flex-1 flex-col items-center justify-center gap-2",
            children: [l.jsx("span", {
                className: "self-start text-xs text-muted",
                children: "Reference"
            }), l.jsx(sh, {
                marks: o.marks,
                shift: 0,
                blur: 0,
                tone: "ref"
            }), l.jsx(sh, {
                marks: o.marks,
                shift: o.offset - a,
                blur: k / 8,
                tone: "sample"
            }), l.jsx("span", {
                className: "self-start text-xs text-accent",
                children: "Sample"
            })]
        }), l.jsxs("label", {
            className: "flex items-center gap-3 text-xs text-muted",
            children: [l.jsx("span", {
                className: "w-12",
                children: "Align"
            }), l.jsx("input", {
                type: "range",
                min: -rh,
                max: rh,
                step: 1,
                value: a,
                onChange: x => i(Number(x.target.value)),
                className: "flex-1 accent-[var(--accent)]"
            })]
        }), l.jsxs("label", {
            className: "flex items-center gap-3 text-xs text-muted",
            children: [l.jsx("span", {
                className: "w-12",
                children: "Focus"
            }), l.jsx("input", {
                type: "range",
                min: 0,
                max: 100,
                step: 1,
                value: c,
                onChange: x => u(Number(x.target.value)),
                className: "flex-1 accent-[var(--accent)]"
            })]
        }), l.jsxs("div", {
            className: "flex items-center gap-3 text-xs text-muted",
            children: [l.jsx("span", {
                className: "w-12",
                children: "Hold"
            }), l.jsx("div", {
                className: "h-1.5 flex-1 overflow-hidden rounded-full bg-track",
                children: l.jsx("div", {
                    className: "h-full origin-left bg-accent",
                    style: {
                        transform: `scaleX(${Math.min(1, d / e.holdMs)})`
                    }
                })
            })]
        }), l.jsx(re, {
            left: g.left,
            total: g.total
        })]
    })
}
const Kx = 520
  , vc = 200
  , P2 = 4.5
  , oh = [1, .7, .45, .85, .6];
function O2(e) {
    for (let t = 0; t < 100; t++) {
        const n = Array.from({
            length: e
        }, () => K(8, 92)).sort( (r, s) => r - s);
        if (n.every( (r, s) => s === 0 || r - n[s - 1] >= 15))
            return ie(n)
    }
    return Array.from({
        length: e
    }, (t, n) => Math.round((n + 1) * 100 / (e + 1)))
}
const wc = e => [...e].sort( (t, n) => t - n);
function lh(e) {
    const t = [];
    for (let n = 0; n <= 100; n += .5) {
        let r = 0;
        wc(e).forEach( (s, o) => {
            r += oh[o % oh.length] * Math.exp(-((n - s) ** 2) / (2 * P2 ** 2))
        }
        ),
        t.push(`${(n / 100 * Kx).toFixed(1)},${(vc - 10 - Math.min(1.1, r) * (vc - 30)).toFixed(1)}`)
    }
    return t.join(" ")
}
const D2 = (e, t) => {
    const n = wc(e)
      , r = wc(t);
    return Math.max(0, Math.round(100 - n.reduce( (s, o, a) => s + Math.abs(o - r[a]), 0) / n.length * 4))
}
;
function I2({settings: e, finish: t}) {
    const n = h.useMemo( () => O2(e.peaks), [])
      , [r,s] = h.useState( () => n.map(d => d > 50 ? K(5, 30) : K(70, 95)))
      , o = h.useRef(!1)
      , a = D2(r, n)
      , i = (d, f) => {
        o.current || (o.current = !0,
        t(d, f, {
            score: a
        }))
    }
      , c = se(e.timeLimit, () => i(!1, "time"))
      , u = () => {
        if (o.current)
            return;
        const d = a >= e.passScore;
        W(d ? "finish" : "wrong", .4),
        i(d, d ? void 0 : "error")
    }
    ;
    return l.jsxs("div", {
        className: "flex h-full flex-col gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: "Move each peak onto the reference, then lock the reading"
            }), l.jsx("span", {
                children: "One reading only"
            })]
        }), l.jsxs("svg", {
            width: Kx,
            height: vc,
            className: "self-center rounded border border-line bg-raised",
            "aria-hidden": "true",
            children: [l.jsx("polyline", {
                points: lh(n),
                fill: "none",
                stroke: "var(--muted)",
                strokeWidth: 2,
                strokeDasharray: "5 4"
            }), l.jsx("polyline", {
                points: lh(r),
                fill: "none",
                stroke: "var(--accent)",
                strokeWidth: 2.5
            })]
        }), r.map( (d, f) => l.jsxs("label", {
            className: "flex items-center gap-3 text-xs text-muted",
            children: [l.jsxs("span", {
                className: "w-14",
                children: ["Peak ", f + 1]
            }), l.jsx("input", {
                type: "range",
                min: 0,
                max: 100,
                step: 1,
                value: d,
                onChange: m => s(r.map( (y, g) => g === f ? Number(m.target.value) : y)),
                className: "flex-1 accent-[var(--accent)]"
            })]
        }, f)), l.jsx("button", {
            onMouseDown: u,
            className: "cursor-pointer self-end rounded bg-accent px-4 py-1.5 text-sm font-semibold text-accent-ink hover:bg-accent-bright",
            children: "Lock reading"
        }), l.jsx(re, {
            left: c.left,
            total: c.total
        })]
    })
}
const Il = 520
  , $o = 15
  , _2 = 1e3
  , z2 = 60;
function ah(e) {
    const t = e * .75
      , n = t
      , r = Il - e - t;
    return r <= n ? (Il - e) / 2 : he(n, r)
}
function F2({settings: e, finish: t}) {
    const n = Math.max(1, Math.round(e.requiredHacks))
      , r = Math.max($o + 2, e.safeZoneMinWidth)
      , s = Math.max(r, e.safeZoneMaxWidth)
      , [o,a] = h.useState(0)
      , [i,c] = h.useState(s)
      , [u,d] = h.useState( () => ah(s))
      , [f,m] = h.useState("run")
      , [y,g] = h.useState("Stop the pulse inside the safe zone")
      , [p,k] = h.useState(null)
      , v = h.useRef(null)
      , x = h.useRef({
        pos: 0,
        dir: 1,
        speed: e.initialSpeed,
        zoneX: 0,
        zoneW: s,
        hacks: 0
    })
      , w = h.useRef();
    h.useEffect( () => (x.current.zoneX = u,
    () => clearTimeout(w.current)), []);
    const b = se(e.timeLimit, () => M("Time expired!", "time"), f === "run")
      , M = (j, S) => {
        f !== "over" && (m("over"),
        k("bad"),
        g(j),
        W("wrong", .4),
        t(!1, S))
    }
    ;
    De(j => {
        const S = x.current;
        S.pos += S.dir * S.speed * z2 * j;
        const R = Il - $o;
        S.pos >= R ? (S.pos = R,
        S.dir = -1) : S.pos <= 0 && (S.pos = 0,
        S.dir = 1),
        v.current && (v.current.style.transform = `translateX(${S.pos}px)`)
    }
    , f === "run");
    const N = () => {
        if (f !== "run")
            return;
        const j = x.current;
        if (!(j.pos >= j.zoneX && j.pos + $o <= j.zoneX + j.zoneW))
            return M("Hack failed - outside safe zone!", "error");
        W("correct", .5);
        const R = j.hacks + 1;
        if (j.hacks = R,
        a(R),
        k("ok"),
        R >= n)
            return m("over"),
            g("FIREWALL BYPASSED!"),
            t(!0);
        m("pause"),
        g("Success! Difficulty increased."),
        w.current = setTimeout( () => {
            const C = Math.max(r, j.zoneW - e.safeZoneShrinkAmount);
            j.zoneW = C,
            j.zoneX = ah(C),
            j.speed = Math.min(e.maxSpeed, j.speed + 1),
            c(C),
            d(j.zoneX),
            k(null),
            g("Stop the pulse inside the safe zone"),
            m("run")
        }
        , _2)
    }
    ;
    return ne(j => {
        (j.code === "Space" || j.key === "Enter") && (j.preventDefault(),
        j.repeat || N())
    }
    ),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Hacks ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [o, "/", n]
                })]
            }), l.jsx("span", {
                className: p === "bad" ? "text-danger" : "text-fg",
                children: y
            })]
        }), l.jsxs("div", {
            className: "relative h-10 overflow-hidden rounded border border-line bg-raised",
            style: {
                width: Il
            },
            children: [l.jsx("div", {
                className: "absolute inset-y-0 border-x-2 border-accent bg-accent-soft",
                style: {
                    left: u,
                    width: i
                }
            }), l.jsx("div", {
                ref: v,
                className: `absolute left-0 top-0 h-full rounded-sm ${p === "bad" ? "bg-danger" : p === "ok" ? "bg-accent-bright" : "bg-fg"}`,
                style: {
                    width: $o
                }
            })]
        }), l.jsx("button", {
            onMouseDown: N,
            className: "cursor-pointer rounded bg-accent px-10 py-2 text-sm font-semibold text-accent-ink hover:bg-accent-bright",
            children: "HACK (Space)"
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: l.jsx(re, {
                left: b.left,
                total: b.total
            })
        })]
    })
}
const H2 = new Set("WASDQERFGHJKLZXCVBNM".split(""))
  , W2 = ["W", "A", "S", "D", "Q", "E"]
  , U2 = 1e3;
function ih(e, t) {
    return Array.from({
        length: t
    }, () => e[K(0, e.length - 1)])
}
function B2({settings: e, finish: t}) {
    const n = h.useMemo( () => {
        const N = (Array.isArray(e.keyPool) ? e.keyPool : Object.values(e.keyPool ?? {})).map(j => String(j).toUpperCase()).filter(j => j.length === 1);
        return N.length ? N : W2
    }
    , [])
      , r = Math.max(1, Math.round(e.stages))
      , s = Y(Math.round(e.keysPerStage), 1, 20)
      , [o,a] = h.useState(0)
      , [i,c] = h.useState( () => ih(n, s))
      , [u,d] = h.useState(0)
      , [f,m] = h.useState("Input the sequence to break the encryption")
      , [y,g] = h.useState(!1)
      , [p,k] = h.useState(!1)
      , v = h.useRef(!1)
      , x = h.useRef();
    h.useEffect( () => () => clearTimeout(x.current), []);
    const w = se(e.timeLimit, () => b("Time expired!", "time"), !y)
      , b = (M, N) => {
        v.current || (v.current = !0,
        m(M),
        k(!0),
        t(!1, N))
    }
    ;
    return ne(M => {
        if (v.current || y)
            return;
        const N = M.key.length === 1 ? M.key.toUpperCase() : "";
        if (!H2.has(N) && !n.includes(N))
            return;
        if (M.preventDefault(),
        N !== i[u])
            return b("Wrong key! Sequence failed.", "error");
        W("correct", .25);
        const j = u + 1;
        if (d(j),
        !(j < i.length)) {
            if (o + 1 >= r)
                return v.current = !0,
                m("SEQUENCE COMPLETE! Backdoor opened."),
                t(!0);
            g(!0),
            m("Stage complete! Next sequence starting..."),
            x.current = setTimeout( () => {
                a(o + 1),
                c(ih(n, s)),
                d(0),
                m("Input the sequence to break the encryption"),
                g(!1)
            }
            , U2)
        }
    }
    ),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Sequence ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [o + 1, "/", r]
                })]
            }), l.jsx("div", {
                className: "flex gap-1.5",
                children: Array.from({
                    length: r
                }, (M, N) => l.jsx("span", {
                    className: `h-2.5 w-2.5 rounded-full ${N < o ? "bg-accent" : N === o ? p ? "bg-danger" : "border-2 border-accent" : "bg-track"}`
                }, N))
            })]
        }), l.jsx("p", {
            className: `text-center text-sm ${p ? "text-danger" : "text-fg"}`,
            children: f
        }), l.jsx("div", {
            className: "flex flex-1 flex-wrap content-center items-center justify-center gap-2",
            children: i.map( (M, N) => l.jsx("div", {
                className: `flex h-14 w-14 items-center justify-center rounded border-2 font-mono text-2xl font-semibold ${N < u ? "border-accent bg-accent text-accent-ink" : N === u ? "border-accent bg-raised text-accent" : "border-line bg-raised text-muted"}`,
                children: M
            }, N))
        }), l.jsx("p", {
            className: "text-xs text-muted",
            children: e.keyHint || `Keys: ${n.join(", ")}`
        }), l.jsx("div", {
            className: "w-full",
            children: l.jsx(re, {
                left: w.left,
                total: w.total
            })
        })]
    })
}
const qx = 400
  , Qn = qx - 50 - 5
  , V2 = 20
  , Y2 = -20
  , G2 = 50
  , Xa = 60
  , Qa = 2e3
  , Za = {
    perfect: 10,
    great: 15,
    okay: 20
}
  , K2 = {
    perfect: 100,
    great: 50,
    okay: 20,
    miss: 0
};
function q2(e) {
    const t = e === "easy" ? 1.5 : e === "hard" ? .7 : 1;
    return {
        perfect: Za.perfect * t,
        great: Za.great * t,
        okay: Za.okay * t
    }
}
function X2({settings: e, finish: t}) {
    const n = Y(Math.round(e.lanes), 1, 8)
      , r = h.useMemo( () => {
        const N = (Array.isArray(e.keys) ? e.keys : Object.values(e.keys ?? {})).map(j => String(j).toUpperCase()).slice(0, n);
        for (; N.length < n; )
            N.push(String.fromCharCode(65 + N.length));
        return N
    }
    , [])
      , s = h.useMemo( () => q2(e.difficulty), [])
      , o = Math.max(1, Math.round(e.requiredNotes))
      , a = Math.max(1, Math.round(e.maxWrongKeys))
      , i = Math.max(1, Math.round(e.maxMissedNotes))
      , c = h.useRef({
        notes: [],
        id: 0,
        since: 0,
        elapsed: 0,
        hits: 0,
        wrong: 0,
        missed: 0,
        combo: 0,
        best: 0,
        score: 0,
        done: !1
    })
      , [u,d] = h.useState({
        notes: [],
        hits: 0,
        wrong: 0,
        missed: 0,
        combo: 0,
        score: 0
    })
      , [f,m] = h.useState( () => Array(n).fill(!1))
      , [y,g] = h.useState( () => Array(n).fill(null))
      , p = h.useRef([])
      , k = () => {
        const M = c.current;
        d({
            notes: M.notes.slice(),
            hits: M.hits,
            wrong: M.wrong,
            missed: M.missed,
            combo: M.combo,
            score: M.score
        })
    }
      , v = (M, N) => {
        g(j => j.map( (S, R) => R === M ? N : S)),
        clearTimeout(p.current[M]),
        p.current[M] = setTimeout( () => g(j => j.map( (S, R) => R === M ? null : S)), 450)
    }
      , x = M => {
        const N = c.current;
        N.done || (N.done = !0,
        k(),
        t(M, M ? void 0 : "error", {
            score: N.score,
            maxCombo: N.best
        }))
    }
      , w = () => {
        c.current.combo = 0
    }
    ;
    De(M => {
        const N = c.current;
        if (!N.done && (N.elapsed += M * 1e3,
        !(N.elapsed < Qa))) {
            N.since += M * 1e3,
            N.since >= e.noteSpawnRate && (N.since = 0,
            N.notes.push({
                id: N.id++,
                lane: Math.floor(Math.random() * n),
                y: Y2
            }));
            for (let j = N.notes.length - 1; j >= 0; j--) {
                const S = N.notes[j];
                if (S.y += e.noteSpeed * M,
                S.y > Qn + G2 && (N.notes.splice(j, 1),
                N.missed++,
                w(),
                v(S.lane, "miss"),
                W("wrong", .2),
                N.missed >= i))
                    return void x(!1)
            }
            k()
        }
    }
    ),
    ne(M => {
        const N = c.current;
        if (N.done || N.elapsed < Qa || M.repeat)
            return;
        const j = r.indexOf(M.key.toUpperCase());
        if (j < 0)
            return;
        M.preventDefault(),
        m(T => T.map( (_, P) => P === j ? !0 : _));
        let S = null;
        for (const T of N.notes)
            T.lane === j && (!S || Math.abs(T.y - Qn) < Math.abs(S.y - Qn)) && (S = T);
        if (!S) {
            N.wrong++,
            w(),
            v(j, "miss"),
            W("wrong", .3),
            N.wrong >= a ? x(!1) : k();
            return
        }
        const R = Math.abs(S.y - Qn)
          , C = R <= s.perfect ? "perfect" : R <= s.great ? "great" : R <= s.okay ? "okay" : "miss";
        if (C !== "miss") {
            if (N.notes = N.notes.filter(T => T !== S),
            N.hits++,
            N.combo++,
            N.best = Math.max(N.best, N.combo),
            N.score += K2[C] * (Math.floor((N.combo - 1) / 10) + 1),
            v(j, C),
            W("correct", .25),
            N.hits >= o)
                return void x(!0);
            k()
        }
    }
    ),
    ca(M => {
        const N = r.indexOf(M.key.toUpperCase());
        N >= 0 && m(j => j.map( (S, R) => R === N ? !1 : S))
    }
    );
    const b = n * Xa + (n - 1) * 6;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Score ", l.jsx("span", {
                    className: "font-mono text-sm text-accent",
                    children: u.score
                })]
            }), l.jsxs("span", {
                children: ["Combo ", l.jsx("span", {
                    className: "font-mono text-sm text-fg",
                    children: u.combo
                })]
            }), l.jsxs("div", {
                className: "flex gap-4",
                children: [l.jsx(ee, {
                    total: i,
                    used: u.missed,
                    label: "Missed"
                }), l.jsx(ee, {
                    total: a,
                    used: u.wrong,
                    label: "Wrong"
                })]
            })]
        }), l.jsxs("div", {
            className: "relative overflow-hidden rounded border border-line bg-raised",
            style: {
                width: Math.max(b, 200) + 40,
                height: qx
            },
            children: [l.jsx("div", {
                className: "absolute inset-y-0 left-1/2 flex -translate-x-1/2 gap-1.5",
                style: {
                    width: b
                },
                children: r.map( (M, N) => l.jsx("div", {
                    className: "relative h-full flex-1 border-x border-line bg-surface",
                    children: l.jsx("div", {
                        className: `absolute inset-x-0 text-center text-xs font-semibold tracking-wider ${y[N] === "miss" ? "text-danger" : "text-accent"}`,
                        style: {
                            top: Qn - 28,
                            opacity: y[N] ? 1 : 0
                        },
                        children: (y[N] ?? "").toUpperCase()
                    })
                }, N))
            }), l.jsx("div", {
                className: "absolute inset-x-0 h-[5px] bg-accent",
                style: {
                    top: Qn
                }
            }), l.jsx("div", {
                className: "absolute inset-y-0 left-1/2 -translate-x-1/2",
                style: {
                    width: b
                },
                children: u.notes.map(M => l.jsx("div", {
                    className: "absolute rounded bg-accent",
                    style: {
                        left: M.lane * (Xa + 6) + 5,
                        top: M.y,
                        width: Xa - 10,
                        height: V2
                    }
                }, M.id))
            })]
        }), l.jsx("div", {
            className: "flex gap-1.5",
            style: {
                width: b
            },
            children: r.map( (M, N) => l.jsx("div", {
                className: `flex h-10 flex-1 items-center justify-center rounded border-2 font-mono text-lg font-semibold ${f[N] ? "border-accent bg-accent text-accent-ink" : "border-line bg-raised text-fg"}`,
                children: M
            }, N))
        }), l.jsxs("div", {
            className: "mt-auto w-full",
            children: [l.jsx(be, {
                value: u.hits / o
            }), l.jsx("p", {
                className: "mt-1 text-center text-xs text-muted",
                children: c.current.elapsed < Qa ? "Get ready..." : `Hit ${o} notes`
            })]
        })]
    })
}
const Q2 = 500
  , Z2 = e => {
    const t = String(e ?? "").toUpperCase();
    return t === "SPACE" ? " " : t
}
;
function J2({settings: e, finish: t}) {
    const n = h.useMemo( () => {
        const g = (Array.isArray(e.keys) ? e.keys : Object.values(e.keys ?? {})).map(Z2).filter(p => p.length === 1);
        return g.length ? g : ["E"]
    }
    , [])
      , r = h.useMemo( () => n[Math.floor(Math.random() * n.length)], [n])
      , s = 100 / Math.max(1, e.requiredPresses)
      , [o,a] = h.useState(0)
      , i = h.useRef({
        p: 0,
        last: 0,
        started: !1,
        held: !1,
        done: !1
    })
      , [c,u] = h.useState(!1)
      , d = y => {
        i.current.done || (i.current.done = !0,
        W(y ? "finish" : "wrong", .5),
        t(y, y ? void 0 : "error"))
    }
    ;
    ne(y => {
        if (y.key.toUpperCase() !== r && !(r === " " && y.code === "Space"))
            return;
        y.preventDefault();
        const g = i.current;
        g.done || g.held || y.repeat || (g.held = !0,
        g.started = !0,
        g.last = performance.now(),
        g.p = Math.min(100, g.p + s),
        a(g.p),
        u(!0),
        setTimeout( () => u(!1), 90),
        g.p >= 100 && d(!0))
    }
    ),
    ca(y => {
        (y.key.toUpperCase() === r || r === " " && y.code === "Space") && (i.current.held = !1)
    }
    ),
    De( (y, g) => {
        const p = i.current;
        p.done || !p.started || g - p.last <= Q2 || (p.p = Math.max(0, p.p - e.decayRate * y),
        a(p.p),
        p.p <= 0 && d(!1))
    }
    );
    const f = 2 * Math.PI * 90
      , m = r === " " ? "SPACE" : r;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center justify-center gap-6 p-4",
        children: [l.jsx("p", {
            className: "text-center text-sm text-muted",
            children: i.current.started ? "Keep pressing! Do not let the ring empty." : "Press the key to start overriding"
        }), l.jsxs("div", {
            className: "relative h-[240px] w-[240px]",
            children: [l.jsxs("svg", {
                viewBox: "0 0 200 200",
                className: "h-full w-full -rotate-90",
                children: [l.jsx("circle", {
                    cx: "100",
                    cy: "100",
                    r: "90",
                    fill: "none",
                    className: "stroke-track",
                    strokeWidth: "12"
                }), l.jsx("circle", {
                    cx: "100",
                    cy: "100",
                    r: "90",
                    fill: "none",
                    className: o < 25 ? "stroke-danger" : "stroke-accent",
                    strokeWidth: "12",
                    strokeLinecap: "round",
                    strokeDasharray: f,
                    strokeDashoffset: f - Y(o, 0, 100) / 100 * f
                })]
            }), l.jsx("div", {
                className: `absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border-2 font-mono text-4xl font-semibold ${c ? "border-accent bg-accent text-accent-ink" : "border-line bg-raised text-fg"}`,
                children: m
            })]
        }), l.jsxs("div", {
            className: "font-mono text-sm text-muted",
            children: [Math.round(o), "%"]
        })]
    })
}
const Xx = 540
  , Qx = 360
  , _l = 72
  , ej = 4e3
  , Ja = () => ({
    x: he(0, Xx - _l),
    y: he(0, Qx - _l)
});
function tj({settings: e, finish: t}) {
    const n = Y(Math.round(e.blocks), 2, 9)
      , [r,s] = h.useState("memorize")
      , [o,a] = h.useState(1)
      , [i,c] = h.useState(null)
      , u = h.useRef([])
      , d = h.useRef(ie(Array.from({
        length: n
    }, (p, k) => k + 1)).map(p => {
        const k = Ja()
          , v = Ja();
        return {
            n: p,
            x: k.x,
            y: k.y,
            fromX: k.x,
            fromY: k.y,
            toX: v.x,
            toY: v.y,
            t: 0,
            dur: he(1, 4)
        }
    }
    ))
      , f = h.useRef(!1);
    h.useEffect( () => {
        const p = setTimeout( () => s("play"), ej);
        return () => clearTimeout(p)
    }
    , []);
    const m = se(e.speed * 1e3, () => y(!1, "time"), r === "play")
      , y = (p, k) => {
        f.current || (f.current = !0,
        s("over"),
        t(p, k))
    }
    ;
    De(p => {
        d.current.forEach( (k, v) => {
            if (k.t += p / k.dur,
            k.t >= 1) {
                k.fromX = k.toX,
                k.fromY = k.toY;
                const w = Ja();
                k.toX = w.x,
                k.toY = w.y,
                k.dur = he(1, 4),
                k.t = 0
            }
            k.x = k.fromX + (k.toX - k.fromX) * k.t,
            k.y = k.fromY + (k.toY - k.fromY) * k.t;
            const x = u.current[v];
            x && (x.style.transform = `translate(${k.x}px, ${k.y}px)`)
        }
        )
    }
    , r !== "over");
    const g = p => {
        if (r === "play") {
            if (p !== o)
                return c(p),
                W("wrong", .4),
                y(!1, "error");
            W("correct", .3),
            a(p + 1),
            p === n && y(!0)
        }
    }
    ;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx("p", {
            className: "text-center text-sm text-fg",
            children: r === "memorize" ? "Memorize the pattern" : r === "play" ? "Click the numbers in order!" : o > n ? "Success!" : "Failed!"
        }), l.jsx("div", {
            className: "relative overflow-hidden rounded border border-line bg-raised",
            style: {
                width: Xx,
                height: Qx
            },
            children: d.current.map( (p, k) => {
                const v = p.n < o;
                return l.jsx("button", {
                    ref: x => {
                        u.current[k] = x
                    }
                    ,
                    onMouseDown: () => g(p.n),
                    className: `absolute left-0 top-0 flex items-center justify-center rounded border-2 font-mono text-3xl font-semibold ${i === p.n ? "border-danger bg-danger-soft text-danger" : v ? "border-accent bg-accent text-accent-ink" : r === "play" ? "cursor-pointer border-accent-line bg-surface text-transparent hover:border-accent" : "border-accent-line bg-surface text-accent"}`,
                    style: {
                        width: _l,
                        height: _l,
                        transform: `translate(${p.x}px, ${p.y}px)`
                    },
                    children: r === "play" && !v && i !== p.n ? "?" : p.n
                }, p.n)
            }
            )
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: r === "memorize" ? l.jsx("div", {
                className: "h-1.5"
            }) : l.jsx(re, {
                left: m.left,
                total: m.total
            })
        })]
    })
}
function nj({settings: e, finish: t}) {
    const n = Y(Math.round(e.count), 2, 99)
      , r = Y(Math.round(e.gridCols), 2, 10)
      , s = Math.max(1, Math.round(e.maxMistakes))
      , o = h.useMemo( () => ie(Array.from({
        length: n
    }, (g, p) => p + 1)), [n])
      , [a,i] = h.useState(1)
      , [c,u] = h.useState(0)
      , [d,f] = h.useState(null)
      , m = se(e.timeLimit, () => t(!1, "time"))
      , y = g => {
        if (g < a)
            return;
        if (g === a) {
            W("correct", .3),
            i(g + 1),
            g === n && t(!0);
            return
        }
        W("wrong", .35);
        const p = c + 1;
        u(p),
        f(g),
        setTimeout( () => f(null), 350),
        p >= s && t(!1, "error")
    }
    ;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Next ", l.jsx("span", {
                    className: "font-mono text-lg text-accent",
                    children: a > n ? "-" : a
                })]
            }), l.jsx(ee, {
                total: s,
                used: c,
                label: "Mistakes"
            })]
        }), l.jsx("div", {
            className: "grid w-full gap-1.5",
            style: {
                gridTemplateColumns: `repeat(${r}, minmax(0, 1fr))`
            },
            children: o.map(g => l.jsx("button", {
                onMouseDown: () => y(g),
                className: `h-12 cursor-pointer rounded border-2 font-mono text-lg font-semibold ${g < a ? "border-line bg-surface text-muted opacity-40" : d === g ? "shake border-danger bg-danger-soft text-danger" : "border-line bg-raised hover:border-accent"}`,
                children: g
            }, g))
        }), l.jsxs("div", {
            className: "mt-auto flex w-full flex-col gap-2",
            children: [l.jsx(be, {
                value: (a - 1) / n
            }), l.jsx(re, {
                left: m.left,
                total: m.total
            })]
        })]
    })
}
const rj = 800
  , ch = 1500
  , sj = 2e3;
function uh(e, t) {
    const n = e * e;
    return ie(Array.from({
        length: n
    }, (r, s) => s)).slice(0, Math.min(t, n))
}
function oj({settings: e, finish: t}) {
    const n = Y(Math.round(e.gridSize), 2, 10)
      , r = Math.max(1, Math.round(e.rounds))
      , s = Math.max(1, Math.round(e.maxWrongPresses))
      , o = Math.max(200, e.showTime)
      , a = Math.max(500, e.guessTime)
      , [i,c] = h.useState(0)
      , [u,d] = h.useState("show")
      , [f,m] = h.useState( () => uh(n, e.squareCount))
      , [y,g] = h.useState([])
      , [p,k] = h.useState(null)
      , [v,x] = h.useState(0)
      , [w,b] = h.useState(!1)
      , M = h.useRef([])
      , N = h.useRef(!1)
      , j = (L, D) => void M.current.push(setTimeout(L, D));
    h.useEffect( () => () => M.current.forEach(clearTimeout), []);
    const S = se(o, () => d("guess"), u === "show")
      , R = se(a, () => T(), u === "guess")
      , C = h.useMemo( () => new Set(f), [f])
      , T = () => {
        N.current || (b(!0),
        d("over"),
        W("wrong", .4),
        j( () => _(!1, "time"), sj))
    }
      , _ = (L, D) => {
        N.current || (N.current = !0,
        t(L, D))
    }
      , P = L => {
        if (u !== "guess" || y.includes(L))
            return;
        if (C.has(L)) {
            const E = [...y, L];
            if (g(E),
            W("correct", .3),
            E.length === f.length) {
                if (d("between"),
                i + 1 >= r)
                    return j( () => _(!0), ch);
                j( () => {
                    c(i + 1),
                    m(uh(n, e.squareCount)),
                    g([]),
                    d("show")
                }
                , ch)
            }
            return
        }
        W("wrong", .35);
        const D = v + 1;
        x(D),
        k(L),
        j( () => k(E => E === L ? null : E), rj),
        D >= s && (d("over"),
        j( () => _(!1, "error"), 1e3))
    }
    ;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [i + 1, "/", r]
                })]
            }), l.jsx("span", {
                className: "text-fg",
                children: u === "show" ? "Memorize the pattern" : u === "guess" ? "Click the squares that were lit" : w ? "Time's up. Pattern shown." : ""
            }), l.jsx(ee, {
                total: s,
                used: v,
                label: "Errors"
            })]
        }), l.jsx("div", {
            className: "grid aspect-square w-[440px] gap-1.5",
            style: {
                gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${n}, minmax(0, 1fr))`
            },
            children: Array.from({
                length: n * n
            }, (L, D) => {
                const E = u === "show" && C.has(D)
                  , A = y.includes(D)
                  , I = w && C.has(D) && !A;
                return l.jsx("button", {
                    onMouseDown: () => P(D),
                    className: `rounded border-2 ${E ? "border-accent bg-accent" : A ? "border-accent bg-accent-soft" : I ? "border-warn bg-warn-soft" : p === D ? "shake border-danger bg-danger-soft" : u === "guess" ? "cursor-pointer border-line bg-raised hover:border-accent-line" : "border-line bg-raised"}`
                }, D)
            }
            )
        }), l.jsx(be, {
            value: i / r
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: u === "show" ? l.jsx(re, {
                left: S.left,
                total: S.total
            }) : l.jsx(re, {
                left: R.left,
                total: R.total
            })
        })]
    })
}
const lj = 1500
  , aj = 1500;
function ij({settings: e, finish: t}) {
    const n = Y(Math.round(e.gridSize), 2, 8)
      , r = Math.max(1, Math.round(e.rounds))
      , s = Math.max(1, Math.round(e.maxWrongPresses))
      , o = Math.max(100, e.showTime)
      , a = Math.max(0, e.delayBetween)
      , i = n * n
      , c = h.useRef([])
      , [u,d] = h.useState(0)
      , [f,m] = h.useState(0)
      , [y,g] = h.useState(null)
      , [p,k] = h.useState(!1)
      , [v,x] = h.useState(0)
      , [w,b] = h.useState(0)
      , [M,N] = h.useState(null)
      , j = h.useRef(!1)
      , S = h.useRef([])
      , R = (T, _) => void S.current.push(setTimeout(T, _));
    h.useEffect( () => () => S.current.forEach(clearTimeout), []),
    h.useEffect( () => {
        let T = !1;
        const _ = P => new Promise(L => S.current.push(setTimeout(L, P)));
        for (; c.current.length < u + 1; )
            c.current.push(K(0, i - 1));
        return k(!1),
        x(0),
        (async () => {
            await _(700);
            for (let P = 0; P <= u; P++) {
                if (T)
                    return;
                g(c.current[P]),
                W("correct", .15),
                await _(o),
                g(null),
                await _(a)
            }
            T || k(!0)
        }
        )(),
        () => {
            T = !0
        }
    }
    , [u, f]);
    const C = T => {
        if (!p || j.current)
            return;
        if (T === c.current[v]) {
            if (N({
                cell: T,
                kind: "ok"
            }),
            R( () => N(null), 300),
            W("correct", .3),
            v + 1 >= u + 1) {
                if (k(!1),
                u + 1 >= r)
                    return j.current = !0,
                    R( () => t(!0), 600);
                R( () => d(u + 1), aj)
            } else
                x(v + 1);
            return
        }
        k(!1),
        N({
            cell: T,
            kind: "bad"
        }),
        W("wrong", .35);
        const _ = w + 1;
        if (b(_),
        _ >= s)
            return j.current = !0,
            R( () => t(!1, "error"), 1e3);
        R( () => {
            N(null),
            m(P => P + 1)
        }
        , lj)
    }
    ;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [u + 1, "/", r]
                })]
            }), l.jsx("span", {
                className: "text-fg",
                children: p ? "Repeat the sequence" : "Watch the sequence"
            }), l.jsx(ee, {
                total: s,
                used: w,
                label: "Errors"
            })]
        }), l.jsx("div", {
            className: "grid aspect-square w-[440px] gap-1.5",
            style: {
                gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${n}, minmax(0, 1fr))`
            },
            children: Array.from({
                length: i
            }, (T, _) => l.jsx("button", {
                onMouseDown: () => C(_),
                className: `rounded border-2 ${y === _ ? "border-accent bg-accent" : (M == null ? void 0 : M.cell) === _ ? M.kind === "ok" ? "border-accent bg-accent-soft" : "shake border-danger bg-danger-soft" : p ? "cursor-pointer border-line bg-raised hover:border-accent-line" : "border-line bg-raised"}`
            }, _))
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: l.jsx(be, {
                value: u / r
            })
        })]
    })
}
const cj = 800
  , uj = 1500
  , dj = 500
  , fj = .7;
function hj(e, t) {
    return t.length === 0 || e.length > 0 && Math.random() < fj ? {
        word: e[0],
        isNew: !0
    } : {
        word: t[Math.floor(Math.random() * t.length)],
        isNew: !1
    }
}
function mj({settings: e, finish: t}) {
    const n = Math.max(1, Math.round(e.wordsToShow))
      , r = Math.max(1, Math.round(e.maxStrikes))
      , s = Math.max(500, e.wordDuration)
      , o = h.useRef(ie(Hx))
      , a = h.useRef([])
      , [i,c] = h.useState(0)
      , [u,d] = h.useState(null)
      , [f,m] = h.useState(!1)
      , [y,g] = h.useState(0)
      , [p,k] = h.useState(0)
      , [v,x] = h.useState(null)
      , [w,b] = h.useState("")
      , M = h.useRef(!1)
      , N = h.useRef([])
      , j = (L, D) => void N.current.push(setTimeout(L, D));
    h.useEffect( () => () => N.current.forEach(clearTimeout), []);
    const S = h.useRef({
        score: 0,
        strikes: 0
    })
      , R = se(s, () => _(null), f)
      , C = L => {
        M.current || (M.current = !0,
        m(!1),
        t(L, L ? void 0 : "error", {
            score: S.current.score,
            strikes: S.current.strikes
        }))
    }
      , T = L => {
        if (L >= n)
            return C(!0);
        const D = hj(o.current, a.current);
        D.isNew && (o.current = o.current.slice(1)),
        a.current.includes(D.word) || (a.current = [...a.current, D.word]),
        d(D),
        c(L),
        x(null),
        b(""),
        j( () => m(!0), dj)
    }
    ;
    h.useEffect( () => T(0), []);
    const _ = L => {
        if (!f || M.current || !u)
            return;
        if (m(!1),
        L !== null && L === "new" === u.isNew)
            return S.current.score++,
            g(S.current.score),
            x("ok"),
            W("correct", .4),
            j( () => T(i + 1), cj);
        if (S.current.strikes++,
        k(S.current.strikes),
        x("bad"),
        b(L === null ? "Time's up! Too slow..." : u.isNew ? "That was a NEW word." : "You already saw that word."),
        W("wrong", .4),
        S.current.strikes >= r)
            return j( () => C(!1), 1e3);
        j( () => T(i + 1), uj)
    }
    ;
    ne(L => {
        const D = L.key.toLowerCase();
        D === "s" ? _("seen") : D === "n" && _("new")
    }
    );
    const P = h.useMemo( () => v === "ok" ? "text-accent" : v === "bad" ? "text-danger" : "text-fg", [v]);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Score ", l.jsx("span", {
                    className: "font-mono text-sm text-accent",
                    children: y
                })]
            }), l.jsxs("span", {
                children: ["Word ", l.jsxs("span", {
                    className: "font-mono text-sm text-fg",
                    children: [Math.min(i + 1, n), "/", n]
                })]
            }), l.jsx(ee, {
                total: r,
                used: p,
                label: "Strikes"
            })]
        }), l.jsxs("div", {
            className: "flex w-full flex-1 flex-col items-center justify-center rounded border border-line bg-raised",
            children: [l.jsx("div", {
                className: `font-mono text-6xl font-semibold tracking-widest ${P}`,
                children: (u == null ? void 0 : u.word) ?? ""
            }), l.jsx("div", {
                className: "mt-3 h-5 text-sm text-warn",
                children: w
            })]
        }), l.jsxs("div", {
            className: "grid w-full grid-cols-2 gap-3",
            children: [l.jsxs("button", {
                onMouseDown: () => _("seen"),
                className: "cursor-pointer rounded border-2 border-accent bg-raised py-4 text-lg font-semibold text-accent hover:bg-accent hover:text-accent-ink",
                children: ["SEEN ", l.jsx("span", {
                    className: "text-xs opacity-60",
                    children: "(S)"
                })]
            }), l.jsxs("button", {
                onMouseDown: () => _("new"),
                className: "cursor-pointer rounded border-2 border-line bg-raised py-4 text-lg font-semibold hover:border-accent",
                children: ["NEW ", l.jsx("span", {
                    className: "text-xs opacity-60",
                    children: "(N)"
                })]
            })]
        }), l.jsx(re, {
            left: f ? R.left : s,
            total: s
        })]
    })
}
const pj = 650
  , xj = 1500
  , gj = 1e3
  , dh = 1500;
function fh(e, t) {
    const n = e * e;
    return ie(Array.from({
        length: n
    }, (r, s) => s)).slice(0, Math.min(t, n))
}
function yj({settings: e, finish: t}) {
    const n = Y(Math.round(e.gridSize), 2, 10)
      , r = Y(Math.round(e.sequenceLength), 2, n * n)
      , s = Math.max(1, Math.round(e.rounds))
      , o = Math.max(1, Math.round(e.maxWrongPresses))
      , a = Math.max(500, e.showTime)
      , i = Math.max(1e3, e.guessTime)
      , [c,u] = h.useState(0)
      , [d,f] = h.useState( () => fh(n, r))
      , [m,y] = h.useState("show")
      , [g,p] = h.useState(1)
      , [k,v] = h.useState(0)
      , [x,w] = h.useState(null)
      , [b,M] = h.useState([])
      , [N,j] = h.useState( () => Array(r).fill(!0))
      , [S,R] = h.useState("")
      , C = h.useRef([])
      , T = h.useRef(!1)
      , _ = ($, F) => void C.current.push(setTimeout($, F));
    h.useEffect( () => () => C.current.forEach(clearTimeout), []);
    const P = se(a, () => y("guess"), m === "show")
      , L = se(i, () => E(), m === "guess");
    h.useEffect( () => {
        if (m !== "show")
            return;
        const $ = () => j(Array.from({
            length: r
        }, () => Math.random() > .5));
        $();
        const F = setInterval($, pj);
        return () => clearInterval(F)
    }
    , [m, d]);
    const D = ($, F) => {
        T.current || (T.current = !0,
        y("over"),
        t($, F))
    }
      , E = () => {
        T.current || (y("over"),
        R("Time's up."),
        W("wrong", .4),
        _( () => D(!1, "time"), 1200))
    }
      , A = () => {
        f(fh(n, r)),
        p(1),
        M([]),
        y("show")
    }
      , I = $ => {
        if (m !== "guess" || b.includes($))
            return;
        if ($ === d[g - 1]) {
            W("correct", .3);
            const z = [...b, $];
            if (M(z),
            p(g + 1),
            g >= r) {
                if (y("locked"),
                R("Sequence complete"),
                c + 1 >= s)
                    return _( () => D(!0), dh);
                _( () => {
                    u(c + 1),
                    v(0),
                    R(""),
                    A()
                }
                , dh)
            }
            return
        }
        W("wrong", .35);
        const F = k + 1;
        if (v(F),
        w($),
        y("locked"),
        _( () => w(null), 500),
        F >= o)
            return R("Too many wrong presses"),
            _( () => D(!1, "error"), 1200);
        R(`Wrong square. Expected ${g}.`),
        _( () => {
            R(""),
            A()
        }
        , xj + gj)
    }
    ;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [c + 1, "/", s]
                })]
            }), l.jsx("span", {
                className: "text-fg",
                children: S || (m === "show" ? "Memorize the numbers" : m === "guess" ? `Click in order 1-${r}` : "")
            }), l.jsx(ee, {
                total: o,
                used: Math.min(k, o),
                label: "Errors"
            })]
        }), l.jsx("div", {
            className: "grid aspect-square w-[440px] gap-1.5",
            style: {
                gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${n}, minmax(0, 1fr))`
            },
            children: Array.from({
                length: n * n
            }, ($, F) => {
                const z = d.indexOf(F)
                  , U = m === "show" && z >= 0 && N[z];
                return l.jsx("button", {
                    onMouseDown: () => I(F),
                    className: `flex items-center justify-center rounded border-2 font-mono text-2xl font-semibold ${b.includes(F) ? "border-accent bg-accent-soft text-accent" : x === F ? "shake border-danger bg-danger-soft" : m === "show" && z >= 0 ? "border-accent-line bg-raised text-accent" : m === "guess" ? "cursor-pointer border-line bg-raised hover:border-accent-line" : "border-line bg-raised"}`,
                    children: U ? z + 1 : b.includes(F) ? d.indexOf(F) + 1 : ""
                }, F)
            }
            )
        }), l.jsx(be, {
            value: (c + (g - 1) / r) / s
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: m === "show" ? l.jsx(re, {
                left: P.left,
                total: P.total
            }) : l.jsx(re, {
                left: L.left,
                total: L.total
            })
        })]
    })
}
const hh = {
    symbols: ["◆", "◇", "○", "●", "□", "■", "△", "▲", "▽", "▼", "◈", "◉", "◎", "★", "☆", "✦", "✧", "⬟", "⬢", "⬡", "⬠", "⯃", "⯂", "⬤", "⬣", "⬬", "⬭", "⬮", "⬯", "⌬"],
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    numbers: "0123456789".split(""),
    dots: Array.from({
        length: 30
    }, (e, t) => String.fromCodePoint(10241 + t)),
    emojis: ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "⚫", "⚪", "🟤", "💀", "👽", "🤖", "👾", "🎮", "💎", "🔥", "⚡", "💧", "🌟", "🎯", "🔑", "🔒", "💰", "🎲", "🃏", "♠", "♥", "♦", "♣", "🎪"]
};
function vj(e) {
    if (Array.isArray(e.symbols) && e.symbols.length > 1)
        return e.symbols.map(String);
    if (e.symbols && typeof e.symbols == "object") {
        const t = Object.values(e.symbols).map(String);
        if (t.length > 1)
            return t
    }
    return hh[String(e.symbolType)] ?? hh.symbols
}
const kc = (e, t, n) => (e + t) % n;
function wj(e, t, n) {
    return t.every( (r, s) => e[kc(n, s, e.length)] === r)
}
function kj({settings: e, finish: t}) {
    const n = Y(Math.round(e.gridSize), 3, 14)
      , r = n * n
      , s = h.useMemo( () => vj(e), [])
      , o = h.useMemo( () => {
        const S = Y(Math.round(e.maxKeyLength), 1, Math.min(6, n))
          , R = Y(Math.round(e.minKeyLength), 1, S);
        return K(R, S)
    }
    , [])
      , {key: a, initial: i} = h.useMemo( () => {
        const S = () => s[K(0, s.length - 1)]
          , R = Array.from({
            length: o
        }, S)
          , C = Array.from({
            length: r
        }, S)
          , T = K(0, r - 1);
        return R.forEach( (_, P) => C[kc(T, P, r)] = _),
        {
            key: R,
            initial: C
        }
    }
    , [])
      , [c,u] = h.useState(i)
      , d = h.useRef(i)
      , [f,m] = h.useState(Math.floor(n / 2) * n + Math.floor(n / 2))
      , y = h.useRef(f)
      , [g,p] = h.useState(null)
      , k = h.useRef(!1)
      , v = h.useRef(!1)
      , x = se(e.timeLimit, () => w(!1, "time"))
      , w = (S, R) => {
        k.current || (k.current = !0,
        t(S, R))
    }
    ;
    jj(e.shiftInterval, () => {
        if (k.current || v.current)
            return;
        const S = d.current
          , R = S.slice(1).concat(S[0]);
        d.current = R,
        u(R)
    }
    );
    const b = (S, R) => {
        const C = Y(Math.floor(y.current / n) + S, 0, n - 1)
          , T = Y(y.current % n + R, 0, n - 1);
        y.current = C * n + T,
        m(y.current)
    }
      , M = () => {
        if (k.current || v.current)
            return;
        const S = wj(d.current, a, y.current);
        p(S ? "ok" : "bad"),
        W(S ? "correct" : "wrong", .4),
        v.current = !0,
        setTimeout( () => w(S, S ? void 0 : "error"), 500)
    }
    ;
    ne(S => {
        if (k.current || v.current)
            return;
        const R = S.key.toLowerCase();
        if (R === "arrowup" || R === "w")
            b(-1, 0);
        else if (R === "arrowdown" || R === "s")
            b(1, 0);
        else if (R === "arrowleft" || R === "a")
            b(0, -1);
        else if (R === "arrowright" || R === "d")
            b(0, 1);
        else if (R === "enter" || R === " ")
            M();
        else
            return;
        S.preventDefault()
    }
    );
    const N = new Set(Array.from({
        length: o
    }, (S, R) => kc(f, R, r)))
      , j = Math.max(14, 400 / n / 1.7);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: "Find the start of this sequence"
            }), l.jsx("div", {
                className: "flex gap-1.5 rounded border border-accent bg-raised px-3 py-1 font-glyph text-2xl text-accent",
                children: a.map( (S, R) => l.jsx("span", {
                    children: S
                }, R))
            }), l.jsx("span", {
                children: "WASD move, Enter confirm"
            })]
        }), l.jsx("div", {
            className: "grid aspect-square w-[460px] gap-0.5",
            style: {
                gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${n}, minmax(0, 1fr))`
            },
            children: c.map( (S, R) => l.jsx("button", {
                onMouseDown: () => {
                    y.current = R,
                    m(R)
                }
                ,
                className: `flex items-center justify-center rounded-sm font-glyph ${R === f ? g === "bad" ? "bg-danger text-surface" : "bg-accent text-accent-ink" : N.has(R) ? "bg-accent-soft text-fg" : "bg-raised text-fg"}`,
                style: {
                    fontSize: j
                },
                children: S
            }, R))
        }), l.jsxs("div", {
            className: "mt-auto flex w-full flex-col gap-2",
            children: [l.jsx("button", {
                onMouseDown: M,
                className: "cursor-pointer self-center rounded bg-accent px-8 py-1.5 text-sm font-semibold text-accent-ink hover:bg-accent-bright",
                children: "Confirm"
            }), l.jsx(re, {
                left: x.left,
                total: x.total
            })]
        })]
    })
}
function jj(e, t) {
    const n = h.useRef(t);
    n.current = t,
    h.useEffect( () => {
        const r = setInterval( () => n.current(), Math.max(100, e));
        return () => clearInterval(r)
    }
    , [e])
}
const Rs = e => [e[3], e[0], e[1], e[2]]
  , Po = [1, 0, 1, 0]
  , Oo = [1, 1, 0, 0]
  , Do = [1, 1, 0, 1]
  , ei = [1, 1, 1, 1]
  , zl = [-1, 0, 1, 0]
  , Fl = [0, 1, 0, -1]
  , Gt = (e, t) => e * 100 + t;
function bj(e, t) {
    let n = e;
    for (let r = 0; r < 4; r++) {
        if (t.every(s => n[s] === 1))
            return r;
        n = Rs(n)
    }
    return -1
}
function Sj(e) {
    for (let n = 0; n < 200; n++) {
        const r = [[0, 0]]
          , s = new Set([Gt(0, 0)]);
        let o = !1
          , a = 0;
        for (; r.length && a++ < 4e3 && !(r[r.length - 1][0] === e - 1 && r[r.length - 1][1] === e - 1); ) {
            const [c,u] = r[r.length - 1]
              , d = ie([0, 1, 2, 3]).filter(y => {
                const g = c + zl[y]
                  , p = u + Fl[y];
                return g >= 0 && p >= 0 && g < e && p < e && !s.has(Gt(g, p))
            }
            );
            if (d.length === 0) {
                const y = r.pop();
                if (s.delete(Gt(y[0], y[1])),
                r.length === 0) {
                    o = !0;
                    break
                }
                continue
            }
            const f = Math.random() < .55 ? d.find(y => y === 1 || y === 2) ?? d[0] : d[0]
              , m = [c + zl[f], u + Fl[f]];
            r.push(m),
            s.add(Gt(m[0], m[1]))
        }
        const i = r[r.length - 1];
        if (!o && r.length && i[0] === e - 1 && i[1] === e - 1)
            return r
    }
    const t = [];
    for (let n = 0; n < e; n++)
        t.push([0, n]);
    for (let n = 1; n < e; n++)
        t.push([n, e - 1]);
    return t
}
function Nj(e) {
    const t = Sj(e)
      , n = Array.from({
        length: e
    }, () => Array.from({
        length: e
    }, () => []));
    for (let i = 0; i < t.length; i++) {
        const [c,u] = t[i];
        for (const d of [i - 1, i + 1]) {
            if (d < 0 || d >= t.length)
                continue;
            const f = [0, 1, 2, 3].find(m => c + zl[m] === t[d][0] && u + Fl[m] === t[d][1]);
            n[c][u].push(f)
        }
    }
    const r = []
      , s = []
      , o = [];
    for (let i = 0; i < e; i++) {
        r.push([]),
        s.push([]),
        o.push([]);
        for (let c = 0; c < e; c++) {
            const u = n[i][c];
            let d;
            u.length === 0 ? d = [Po, Oo, Do, ei, Po, Oo][K(0, 5)] : u.length === 1 ? d = [Po, Oo, Do, ei][K(0, 3)] : d = u[0] % 2 === u[1] % 2 ? Math.random() < .8 ? Po : Do : Math.random() < .8 ? Oo : Do;
            let f = bj(d, u);
            f < 0 && (d = ei,
            f = 0);
            let m = d;
            for (let p = 0; p < f; p++)
                m = Rs(m);
            r[i].push(m);
            const y = i === e - 1 && c === e - 1;
            let g = m;
            if (!y)
                for (let p = K(0, 3); p > 0; p--)
                    g = Rs(g);
            s[i].push(g),
            o[i].push(y)
        }
    }
    const a = {
        size: e,
        grid: s,
        solution: r,
        fixed: o
    };
    for (let i = 0; i < 400 && Mj(s); i++) {
        const c = K(0, e - 1)
          , u = K(0, e - 1);
        if (!o[c][u])
            for (let d = K(1, 3); d > 0; d--)
                s[c][u] = Rs(s[c][u])
    }
    return a
}
function jc(e) {
    const t = e.length
      , n = new Set([Gt(0, 0)])
      , r = [[0, 0]];
    for (; r.length; ) {
        const [s,o] = r.shift();
        for (let a = 0; a < 4; a++) {
            const i = s + zl[a]
              , c = o + Fl[a];
            i < 0 || c < 0 || i >= t || c >= t || n.has(Gt(i, c)) || e[s][o][a] && e[i][c][(a + 2) % 4] && (n.add(Gt(i, c)),
            r.push([i, c]))
        }
    }
    return {
        reach: n,
        win: n.has(Gt(t - 1, t - 1))
    }
}
const Mj = e => jc(e).win;
function Ej({conn: e, on: t}) {
    const n = [[25, 0, 25, 25], [25, 25, 50, 25], [25, 25, 25, 50], [0, 25, 25, 25]];
    return l.jsxs("svg", {
        viewBox: "0 0 50 50",
        className: `h-full w-full ${t ? "text-accent" : "text-muted"}`,
        children: [e.map( (r, s) => r ? l.jsx("line", {
            x1: n[s][0],
            y1: n[s][1],
            x2: n[s][2],
            y2: n[s][3],
            stroke: "currentColor",
            strokeWidth: "8",
            strokeLinecap: "round"
        }, s) : null), l.jsx("circle", {
            cx: "25",
            cy: "25",
            r: "5",
            fill: "currentColor"
        })]
    })
}
function Tj({settings: e, finish: t}) {
    const n = Y(Math.round(e.gridSize), 3, 10)
      , r = h.useMemo( () => Nj(n), [n])
      , [s,o] = h.useState(r.grid)
      , [a,i] = h.useState(!1)
      , c = se(e.timeLimit, () => u(!1, "time"))
      , u = (y, g) => {
        a || (i(!0),
        t(y, g))
    }
      , d = (y, g) => {
        if (a || r.fixed[y][g])
            return;
        const p = s.map(k => k.slice());
        p[y][g] = Rs(p[y][g]),
        o(p),
        W("correct", .15),
        jc(p).win && u(!0)
    }
      , {reach: f} = jc(s)
      , m = Math.min(60, Math.floor(460 / n) - 4);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx("p", {
            className: "text-center text-xs text-muted",
            children: "Click a tile to rotate it. Connect START to END."
        }), l.jsx("div", {
            className: "grid gap-1",
            style: {
                gridTemplateColumns: `repeat(${n}, ${m}px)`
            },
            children: s.map( (y, g) => y.map( (p, k) => {
                const v = g === 0 && k === 0
                  , x = g === n - 1 && k === n - 1
                  , w = f.has(Gt(g, k));
                return l.jsxs("button", {
                    onMouseDown: () => d(g, k),
                    className: `relative rounded border-2 ${v || x || w ? "border-accent-line" : "border-line"} ${r.fixed[g][k] ? "cursor-default" : "cursor-pointer hover:border-accent"} ${w ? "bg-accent-faint" : "bg-raised"}`,
                    style: {
                        width: m,
                        height: m
                    },
                    children: [(v || x) && l.jsx("span", {
                        className: "absolute left-0.5 top-0 text-[8px] font-semibold tracking-wider text-accent",
                        children: v ? "START" : "END"
                    }), l.jsx(Ej, {
                        conn: p,
                        on: w
                    })]
                }, `${g}-${k}`)
            }
            ))
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: l.jsx(re, {
                left: c.left,
                total: c.total
            })
        })]
    })
}
const Rj = ["M12 1C8.676 1 6 3.676 6 7v2H4v14h16V9h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v2H8V7c0-2.276 1.724-4 4-4zm0 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z", "M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm14-2l-4.18 4.18A3.01 3.01 0 0 1 17 14c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-.34.06-.67.17-.97L9 14.83l-1.59-1.59L6 14.83 4.41 13.24l-1.59 1.59L1.24 13.24 7 7.47l1.41 1.41L10 7.29l4.54-4.54c.39-.39 1.02-.39 1.41 0l3.54 3.54c.39.39.39 1.02 0 1.41z", "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z", "M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z", "M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z", "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z", "M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z", "M6 4h12v2h-2v2h2v2h-2v2h2v2h-2v2h2v2H6v-2h2v-2H6v-2h2v-2H6V8h2V6H6V4zm3 4v8h6V8H9zm1 1h4v6h-4V9z", "M14 12h-4v-2h4v2zm0 4h-4v-2h4v2zm6-3.82c.6-.34 1-.96 1-1.68V9c0-1.1-.9-2-2-2h-1.18C17.14 5.77 15.72 5 14 5h-4c-1.72 0-3.14.77-3.82 2H5c-1.1 0-2 .9-2 2v1.5c0 .72.4 1.34 1 1.68V14c0 1.1.9 2 2 2h1v4h10v-4h1c1.1 0 2-.9 2-2v-1.82zM17 14H7v-4h10v4z", "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-10-7l-4 4h3v2h2v-2h3l-4-4z", "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z", "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z", "M12 1C8.676 1 6 3.676 6 7h2c0-2.276 1.724-4 4-4s4 1.724 4 4v2H4v14h16V9h-2V7c0-3.324-2.676-6-6-6zm0 12c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z", "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z", "M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z", "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"];
function Aj(e) {
    const t = e * e
      , n = Math.floor(t / 2)
      , s = ie(Rj).slice(0, n).flatMap( (o, a) => [{
        id: a,
        icon: o
    }, {
        id: a,
        icon: o
    }]);
    return t % 2 === 1 && s.push({
        id: -1,
        icon: "",
        blank: !0
    }),
    ie(s)
}
const Cj = 800;
function Lj({settings: e, finish: t}) {
    const n = Y(Math.round(e.gridSize), 2, 6)
      , r = Math.max(0, e.timeLimit)
      , s = Math.max(0, Math.round(e.maxAttempts))
      , o = h.useMemo( () => Aj(n), [n])
      , a = Math.floor(n * n / 2)
      , [i,c] = h.useState([])
      , [u,d] = h.useState(new Set)
      , [f,m] = h.useState(0)
      , y = h.useRef(!1)
      , g = h.useRef()
      , p = h.useRef(!1)
      , k = se(r, () => v(!1, "time"), r > 0);
    h.useEffect( () => () => clearTimeout(g.current), []);
    const v = (w, b) => {
        p.current || (p.current = !0,
        t(w, b))
    }
      , x = w => {
        if (y.current || p.current || o[w].blank || u.has(o[w].id) || i.includes(w))
            return;
        const b = [...i, w];
        if (c(b),
        b.length < 2)
            return;
        y.current = !0;
        const M = f + 1;
        m(M);
        const [N,j] = b;
        if (o[N].id === o[j].id) {
            const S = new Set(u).add(o[N].id);
            if (d(S),
            c([]),
            W("correct", .4),
            y.current = !1,
            S.size >= a)
                return v(!0);
            s > 0 && M >= s && v(!1, "error");
            return
        }
        W("wrong", .3),
        g.current = setTimeout( () => {
            c([]),
            y.current = !1,
            s > 0 && M >= s && v(!1, "error")
        }
        , Cj)
    }
    ;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Pairs ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [u.size, "/", a]
                })]
            }), l.jsxs("span", {
                children: ["Attempts ", l.jsxs("span", {
                    className: "font-mono text-sm text-fg",
                    children: [f, s > 0 ? ` / ${s}` : ""]
                })]
            })]
        }), l.jsx("div", {
            className: "grid aspect-square w-[460px] gap-2",
            style: {
                gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${n}, minmax(0, 1fr))`
            },
            children: o.map( (w, b) => {
                const M = w.blank || i.includes(b) || u.has(w.id);
                return l.jsx("button", {
                    onMouseDown: () => x(b),
                    disabled: w.blank,
                    className: `flex items-center justify-center overflow-hidden rounded border-2 ${w.blank ? "border-transparent bg-transparent" : u.has(w.id) ? "border-accent bg-accent-soft text-accent" : M ? "border-accent bg-raised text-fg" : "cursor-pointer border-line bg-raised text-muted hover:border-accent-line"}`,
                    children: M && !w.blank ? l.jsx("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        className: "h-3/5 w-3/5",
                        children: l.jsx("path", {
                            d: w.icon
                        })
                    }) : w.blank ? null : l.jsx("span", {
                        className: "text-lg",
                        children: "?"
                    })
                }, b)
            }
            )
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: r > 0 ? l.jsx(re, {
                left: k.left,
                total: k.total
            }) : l.jsx("div", {
                className: "h-1.5"
            })
        })]
    })
}
const ti = ["triangle", "circle", "square", "diamond"]
  , $j = {
    triangle: "TRIANGLES",
    circle: "CIRCLES",
    square: "SQUARES",
    diamond: "DIAMONDS"
};
function mh({shape: e, className: t}) {
    return l.jsxs("svg", {
        viewBox: "0 0 24 24",
        className: t,
        fill: "currentColor",
        children: [e === "triangle" && l.jsx("polygon", {
            points: "12,3 22,21 2,21"
        }), e === "circle" && l.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }), e === "square" && l.jsx("rect", {
            x: "3",
            y: "3",
            width: "18",
            height: "18"
        }), e === "diamond" && l.jsx("polygon", {
            points: "12,1 23,12 12,23 1,12"
        })]
    })
}
function ph(e) {
    const t = e * e
      , n = Math.max(2, Math.floor(t * .3) + Math.floor(Math.random() * t * .2))
      , r = Array(t).fill(null);
    let s = 0;
    for (; s < n; ) {
        const i = K(0, t - 1);
        r[i] || (r[i] = ti[K(0, ti.length - 1)],
        s++)
    }
    const o = ti.filter(i => r.includes(i))
      , a = o[K(0, o.length - 1)];
    return {
        cells: r,
        ask: a,
        answer: r.filter(i => i === a).length
    }
}
function Pj({settings: e, finish: t}) {
    const n = Y(Math.round(e.gridSize), 3, 10)
      , r = Math.max(1, Math.round(e.rounds))
      , [s,o] = h.useState(0)
      , [a,i] = h.useState( () => ph(n))
      , [c,u] = h.useState("memorize")
      , [d,f] = h.useState(0)
      , [m,y] = h.useState("")
      , [g,p] = h.useState(null)
      , k = h.useRef()
      , v = h.useRef(!1);
    h.useEffect( () => () => clearTimeout(k.current), []);
    const x = se(e.memorizeTime, () => u("answer"), c === "memorize")
      , w = se(e.answerTime, () => b(!0), c === "answer")
      , b = (M=!1) => {
        if (c === "result" && !M)
            return;
        const N = !M && parseInt(m, 10) === a.answer;
        p(N),
        u("result"),
        W(N ? "correct" : "wrong", .4);
        const j = d + (N ? 1 : 0);
        N && f(j),
        k.current = setTimeout( () => {
            if (s + 1 < r) {
                o(s + 1),
                i(ph(n)),
                y(""),
                p(null),
                u("memorize");
                return
            }
            if (v.current)
                return;
            v.current = !0;
            const S = j >= Math.ceil(r / 2);
            t(S, S ? void 0 : "error", {
                score: j,
                rounds: r
            })
        }
        , 1500)
    }
    ;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [s + 1, "/", r]
                })]
            }), l.jsx("span", {
                className: "text-fg",
                children: c === "memorize" ? "Memorize the shapes!" : ""
            }), l.jsxs("span", {
                children: ["Score ", l.jsx("span", {
                    className: "font-mono text-sm text-accent",
                    children: d
                })]
            })]
        }), l.jsx("div", {
            className: "grid aspect-square w-[400px] gap-1",
            style: {
                gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${n}, minmax(0, 1fr))`
            },
            children: a.cells.map( (M, N) => l.jsx("div", {
                className: "flex items-center justify-center rounded-sm border border-line bg-raised p-1 text-accent",
                children: c === "memorize" && M ? l.jsx(mh, {
                    shape: M,
                    className: "h-full w-full"
                }) : null
            }, N))
        }), c !== "memorize" ? l.jsxs("div", {
            className: "flex flex-col items-center gap-2",
            children: [l.jsxs("div", {
                className: "flex items-center gap-2 text-sm",
                children: ["How many", l.jsx(mh, {
                    shape: a.ask,
                    className: "h-5 w-5 text-accent"
                }), l.jsx("span", {
                    className: "font-semibold text-accent",
                    children: $j[a.ask]
                }), " were there?"]
            }), c === "result" ? l.jsxs("div", {
                className: `text-sm font-semibold ${g ? "text-accent" : "text-danger"}`,
                children: [g ? "Correct!" : "Wrong.", " The answer was ", a.answer, "."]
            }) : l.jsxs("div", {
                className: "flex gap-2",
                children: [l.jsx("input", {
                    autoFocus: !0,
                    value: m,
                    onChange: M => y(M.target.value.replace(/\D/g, "").slice(0, 3)),
                    onKeyDown: M => M.key === "Enter" && b(),
                    inputMode: "numeric",
                    className: "w-20 rounded border-2 border-accent-line bg-raised px-2 py-1 text-center font-mono text-lg outline-none focus:border-accent"
                }), l.jsx("button", {
                    onMouseDown: () => b(),
                    className: "cursor-pointer rounded bg-accent px-4 text-sm font-semibold text-accent-ink hover:bg-accent-bright",
                    children: "Submit"
                })]
            })]
        }) : null, l.jsx("div", {
            className: "mt-auto w-full",
            children: c === "memorize" ? l.jsx(re, {
                left: x.left,
                total: x.total
            }) : l.jsx(re, {
                left: w.left,
                total: w.total
            })
        })]
    })
}
const In = 400
  , Tr = 350
  , bt = 12
  , Io = 60
  , Oj = 50
  , Dj = 1200
  , _o = (e, t, n) => {
    const r = (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
    return Math.abs(r) < 1e-9 ? 0 : r > 0 ? 1 : 2
}
  , zo = (e, t, n) => t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
function Zx(e, t, n, r) {
    const s = _o(e, t, n)
      , o = _o(e, t, r)
      , a = _o(n, r, e)
      , i = _o(n, r, t);
    return s !== o && a !== i ? !0 : s === 0 && zo(e, n, t) || o === 0 && zo(e, r, t) || a === 0 && zo(n, e, r) || i === 0 && zo(n, t, r)
}
function bc(e, t) {
    const n = new Set;
    let r = 0;
    for (let s = 0; s < t.length; s++)
        for (let o = s + 1; o < t.length; o++) {
            const [a,i] = t[s]
              , [c,u] = t[o];
            a === c || a === u || i === c || i === u || Zx(e[a], e[i], e[c], e[u]) && (r++,
            n.add(s),
            n.add(o))
        }
    return {
        count: r,
        bad: n
    }
}
const ni = bt * 2 + 4;
function Jx(e, t, n) {
    let {x: r, y: s} = n;
    for (let o = 0; o < 3; o++)
        for (let a = 0; a < e.length; a++) {
            if (a === t)
                continue;
            let i = r - e[a].x
              , c = s - e[a].y
              , u = Math.hypot(i, c);
            if (!(u >= ni)) {
                if (u < 1e-6) {
                    const d = Math.random() * Math.PI * 2;
                    i = Math.cos(d),
                    c = Math.sin(d),
                    u = 1
                }
                r = e[a].x + i / u * ni,
                s = e[a].y + c / u * ni
            }
        }
    return {
        x: Y(r, bt, In - bt),
        y: Y(s, bt, Tr - bt)
    }
}
function xh(e) {
    const t = [];
    for (let n = 0; n < e; n++) {
        let r, s = 0;
        do
            r = {
                x: he(Io, In - Io),
                y: he(Io, Tr - Io)
            },
            s++;
        while (s < 200 && t.some(o => Math.hypot(r.x - o.x, r.y - o.y) < Oj));
        t.push(Jx(t.concat([r]), t.length, r))
    }
    return t
}
function Ij(e) {
    for (let s = 0; s < 50; s++) {
        const o = xh(e)
          , a = [];
        for (let u = 0; u < e; u++)
            for (let d = u + 1; d < e; d++)
                a.push([u, d]);
        a.sort( (u, d) => Math.hypot(o[u[0]].x - o[u[1]].x, o[u[0]].y - o[u[1]].y) - Math.hypot(o[d[0]].x - o[d[1]].x, o[d[0]].y - o[d[1]].y));
        const i = []
          , c = Math.round(e * 1.7);
        for (const u of a) {
            if (i.length >= c)
                break;
            i.every(d => d[0] === u[0] || d[0] === u[1] || d[1] === u[0] || d[1] === u[1] || !Zx(o[u[0]], o[u[1]], o[d[0]], o[d[1]])) && i.push(u)
        }
        if (!(i.length < e))
            for (let u = 0; u < 40; u++) {
                const d = xh(e);
                if (bc(d, i).count >= Math.min(3, Math.max(1, e - 3)))
                    return {
                        solved: o,
                        start: d,
                        edges: i
                    }
            }
    }
    const t = Array.from({
        length: e
    }, (s, o) => ({
        x: In / 2 + 150 * Math.cos(o / e * Math.PI * 2),
        y: Tr / 2 + 140 * Math.sin(o / e * Math.PI * 2)
    }))
      , n = t.map( (s, o) => [o, (o + 1) % e])
      , r = t.slice();
    return [r[1],r[2]] = [r[2], r[1]],
    {
        solved: t,
        start: r,
        edges: n
    }
}
function _j({settings: e, finish: t}) {
    const n = Y(Math.round(e.nodeCount), 4, 14)
      , r = h.useMemo( () => Ij(n), [n])
      , [s,o] = h.useState(r.start)
      , a = h.useRef(r.start)
      , [i,c] = h.useState(null)
      , u = h.useRef(null)
      , d = h.useRef(!1)
      , f = h.useRef(!1)
      , m = h.useRef();
    h.useEffect( () => () => clearTimeout(m.current), []);
    const [y,g] = h.useState(!1)
      , p = se(e.timeLimit, () => k(!1, "time"), !y)
      , k = (N, j) => {
        d.current || f.current || (d.current = !0,
        t(N, j))
    }
      , v = () => {
        d.current || f.current || (f.current = !0,
        g(!0),
        c(null),
        W("correct", .5),
        m.current = setTimeout( () => {
            d.current = !0,
            t(!0)
        }
        , Dj))
    }
      , {count: x, bad: w} = bc(s, r.edges)
      , b = N => {
        const j = u.current.getBoundingClientRect()
          , S = In / j.width;
        return {
            x: (N.clientX - j.left) * S,
            y: (N.clientY - j.top) * S
        }
    }
    ;
    h.useEffect( () => {
        if (i === null)
            return;
        const N = S => {
            const R = b(S)
              , C = a.current.slice();
            C[i] = Jx(C, i, {
                x: Y(R.x, bt, In - bt),
                y: Y(R.y, bt, Tr - bt)
            }),
            a.current = C,
            o(C),
            bc(C, r.edges).count === 0 && v()
        }
          , j = () => c(null);
        return window.addEventListener("pointermove", N),
        window.addEventListener("pointerup", j),
        window.addEventListener("pointercancel", j),
        window.addEventListener("blur", j),
        () => {
            window.removeEventListener("pointermove", N),
            window.removeEventListener("pointerup", j),
            window.removeEventListener("pointercancel", j),
            window.removeEventListener("blur", j)
        }
    }
    , [i]);
    const M = N => {
        if (d.current || f.current)
            return;
        N.preventDefault();
        const j = b(N)
          , S = a.current;
        let R = -1
          , C = bt + 10;
        for (let T = 0; T < S.length; T++) {
            const _ = Math.hypot(j.x - S[T].x, j.y - S[T].y);
            _ <= C && (R = T,
            C = _)
        }
        R >= 0 && c(R)
    }
    ;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: "Drag the nodes so no lines cross"
            }), l.jsxs("span", {
                children: ["Crossings ", l.jsx("span", {
                    className: `font-mono text-sm ${x === 0 ? "text-accent" : "text-danger"}`,
                    children: x
                })]
            })]
        }), l.jsxs("svg", {
            ref: u,
            viewBox: `0 0 ${In} ${Tr}`,
            width: In * 1.3,
            height: Tr * 1.3,
            className: `touch-none rounded border border-line bg-raised ${i !== null ? "cursor-grabbing" : "cursor-grab"}`,
            onPointerDown: M,
            children: [r.edges.map( ([N,j], S) => l.jsx("line", {
                x1: s[N].x,
                y1: s[N].y,
                x2: s[j].x,
                y2: s[j].y,
                className: w.has(S) ? "stroke-danger" : "stroke-accent",
                strokeWidth: w.has(S) ? 3 : 2,
                strokeDasharray: w.has(S) ? "6 4" : void 0
            }, S)), s.map( (N, j) => l.jsx("circle", {
                cx: N.x,
                cy: N.y,
                r: bt,
                className: `${i === j ? "fill-accent-bright" : "fill-accent"} stroke-surface`,
                strokeWidth: "3"
            }, j))]
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: l.jsx(re, {
                left: p.left,
                total: p.total
            })
        })]
    })
}
const cs = 500
  , Hl = 400
  , _n = 5
  , Xs = 8
  , Zn = Hl / _n
  , zj = cs / 2
  , Fj = Hl / 2
  , Hj = Math.PI * 2 / Xs
  , gh = [30, 48, 66, 84, 102, 120, 138, 156, 174]
  , Wj = [[[.15, .7], [1, .8], [2, .7]], [[.1, .65], [.9, .75], [1.85, .8]], [[.05, .6], [.8, .7], [1.7, .85]], [[0, .55], [.7, .65], [1.55, .75], [2.5, .4]], [[-.05, .5], [.6, .6], [1.4, .7], [2.3, .55]], [[-.1, .45], [.5, .55], [1.25, .65], [2.1, .6]], [[-.15, .4], [.4, .5], [1.1, .6], [1.9, .55], [2.65, .35]], [[-.2, .35], [.3, .45], [.95, .55], [1.7, .5], [2.4, .45]], [[-.25, .3], [.2, .4], [.8, .5], [1.5, .45], [2.15, .4], [2.75, .25]]];
function Uj() {
    const e = Array.from({
        length: _n
    }, () => K(0, Xs - 1));
    for (; e.filter(t => t !== 0).length < 3; ) {
        const t = K(0, _n - 1);
        e[t] === 0 && (e[t] = K(1, Xs - 1))
    }
    return e
}
function Bj({settings: e, finish: t}) {
    const [n,r] = h.useState(Uj)
      , s = h.useRef(null)
      , o = h.useRef({
        accent: "#ffb000",
        bright: "#ffc233",
        dim: "#a1a1aa",
        line: "#383b42"
    })
      , a = h.useRef(!1)
      , i = se(e.timeLimit, () => u(!1, "time"))
      , c = h.useRef(0)
      , u = (y, g) => {
        a.current || (a.current = !0,
        t(y, g, {
            score: y ? 100 : Math.round(n.filter(p => p === 0).length / _n * 100)
        }))
    }
    ;
    h.useEffect( () => {
        const y = getComputedStyle(document.documentElement);
        o.current = {
            accent: y.getPropertyValue("--accent").trim() || o.current.accent,
            bright: y.getPropertyValue("--accent-bright").trim() || o.current.bright,
            dim: y.getPropertyValue("--muted").trim() || o.current.dim,
            line: y.getPropertyValue("--border").trim() || o.current.line
        }
    }
    , []);
    const d = () => {
        var p;
        const y = (p = s.current) == null ? void 0 : p.getContext("2d");
        if (!y)
            return;
        const g = o.current;
        y.clearRect(0, 0, cs, Hl),
        y.lineCap = "round";
        for (let k = 0; k < _n; k++) {
            const v = n[k] === 0;
            y.save(),
            y.beginPath(),
            y.rect(0, k * Zn, cs, Zn),
            y.clip(),
            y.strokeStyle = v && e.showCorrectIndicator ? g.bright : v ? g.accent : g.dim,
            y.lineWidth = v && e.showCorrectIndicator ? 5 + (Math.sin(c.current) + 1) : 5;
            const x = n[k] * Hj;
            for (let w = 0; w < gh.length; w++)
                for (const [b,M] of Wj[w])
                    y.beginPath(),
                    y.arc(zj, Fj, gh[w], b * Math.PI + x, b * Math.PI + M * Math.PI + x),
                    y.stroke();
            y.restore()
        }
        y.strokeStyle = g.line,
        y.lineWidth = 1;
        for (let k = 1; k < _n; k++)
            y.beginPath(),
            y.moveTo(0, k * Zn),
            y.lineTo(cs, k * Zn),
            y.stroke()
    }
    ;
    h.useEffect(d, [n]),
    De(y => {
        !e.showCorrectIndicator || a.current || (c.current += y * 5,
        d())
    }
    );
    const f = (y, g) => {
        if (a.current)
            return;
        const p = n.map( (k, v) => v === y ? (k + g + Xs) % Xs : k);
        r(p),
        W("correct", .15),
        p.every(k => k === 0) && (W("finish", .4),
        u(!0))
    }
      , m = n.filter(y => y === 0).length;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsx("span", {
                children: "Rotate the rows until the print is whole"
            }), e.showAlignedCount && l.jsxs("span", {
                children: ["Aligned ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [m, "/", _n]
                })]
            })]
        }), l.jsxs("div", {
            className: "flex items-stretch gap-2",
            children: [l.jsx("div", {
                className: "flex flex-col",
                children: n.map( (y, g) => l.jsx("button", {
                    onMouseDown: () => f(g, -1),
                    className: "cursor-pointer rounded bg-raised px-2 text-lg hover:bg-accent hover:text-accent-ink",
                    style: {
                        height: Zn - 4,
                        marginBottom: 4
                    },
                    children: "<"
                }, g))
            }), l.jsx("canvas", {
                ref: s,
                width: cs,
                height: Hl,
                className: "rounded border border-line bg-raised"
            }), l.jsx("div", {
                className: "flex flex-col",
                children: n.map( (y, g) => l.jsx("button", {
                    onMouseDown: () => f(g, 1),
                    className: "cursor-pointer rounded bg-raised px-2 text-lg hover:bg-accent hover:text-accent-ink",
                    style: {
                        height: Zn - 4,
                        marginBottom: 4
                    },
                    children: ">"
                }, g))
            })]
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: l.jsx(re, {
                left: i.left,
                total: i.total
            })
        })]
    })
}
function Vj(e, t) {
    const n = Array(e.length).fill("miss")
      , r = t.split("");
    for (let s = 0; s < e.length; s++)
        e[s] === t[s] && (n[s] = "hit",
        r[s] = "");
    for (let s = 0; s < e.length; s++) {
        if (n[s] === "hit")
            continue;
        const o = r.indexOf(e[s]);
        o !== -1 && (n[s] = "near",
        r[o] = "")
    }
    return n
}
const yh = (e, t) => e === "hit" ? "border-accent bg-accent text-accent-ink" : e === "near" ? "border-accent bg-accent-soft text-accent" : e === "miss" ? "border-line bg-surface text-muted opacity-50" : t ? "border-accent-line bg-raised text-fg" : "border-line bg-raised text-fg"
  , vh = {
    digits: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]],
    letters: [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L"], ["Z", "X", "C", "V", "B", "N", "M"]]
};
function e0({solution: e, maxAttempts: t, timeLimit: n, kind: r, hint: s, finish: o}) {
    const a = e.length
      , [i,c] = h.useState("")
      , [u,d] = h.useState([])
      , [f,m] = h.useState(!1)
      , [y,g] = h.useState(!1)
      , p = h.useRef("")
      , k = h.useRef(!1)
      , v = h.useRef()
      , x = se(n, () => w(!1, "time"));
    h.useEffect( () => () => clearTimeout(v.current), []);
    const w = (R, C) => {
        if (!k.current) {
            if (k.current = !0,
            R)
                return o(!0);
            g(!0),
            clearTimeout(v.current),
            v.current = setTimeout( () => o(!1, C), 2200)
        }
    }
      , b = R => {
        p.current = R,
        c(R)
    }
      , M = R => {
        k.current || p.current.length >= a || b(p.current + R)
    }
      , N = () => {
        if (k.current)
            return;
        const R = p.current;
        if (R.length !== a) {
            W("wrong", .3),
            m(!0),
            clearTimeout(v.current),
            v.current = setTimeout( () => m(!1), 400);
            return
        }
        const C = Vj(R, e)
          , T = [...u, {
            guess: R,
            marks: C
        }];
        if (d(T),
        b(""),
        C.every(_ => _ === "hit"))
            return W("correct", .5),
            w(!0);
        T.length >= t && w(!1, "error")
    }
    ;
    ne(R => {
        if (R.key === "Backspace")
            return void b(p.current.slice(0, -1));
        if (R.key === "Enter")
            return N();
        if (R.key.length !== 1)
            return;
        const C = R.key.toUpperCase();
        (r === "digits" ? /^[0-9]$/.test(C) : /^[A-Z]$/.test(C)) && M(C)
    }
    );
    const j = Math.max(0, t - u.length - 1)
      , S = t > 7 ? "h-8 w-8 text-base" : "h-11 w-11 text-xl";
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx("p", {
            className: "text-center text-xs text-muted",
            children: s
        }), l.jsxs("div", {
            className: "flex flex-col gap-1.5",
            children: [u.map( (R, C) => l.jsx("div", {
                className: "flex justify-center gap-1.5",
                children: R.guess.split("").map( (T, _) => l.jsx("div", {
                    className: `flex ${S} items-center justify-center rounded border-2 font-mono font-semibold ${yh(R.marks[_], !0)}`,
                    children: T
                }, _))
            }, C)), u.length < t && l.jsx("div", {
                className: `flex justify-center gap-1.5 ${f ? "shake" : ""}`,
                children: Array.from({
                    length: a
                }, (R, C) => l.jsx("div", {
                    className: `flex ${S} items-center justify-center rounded border-2 font-mono font-semibold ${yh(void 0, !!i[C])} ${C === i.length ? "border-accent" : ""}`,
                    children: i[C] ?? ""
                }, C))
            }), Array.from({
                length: j
            }, (R, C) => l.jsx("div", {
                className: "flex justify-center gap-1.5 opacity-40",
                children: Array.from({
                    length: a
                }, (T, _) => l.jsx("div", {
                    className: `${S} rounded border-2 border-line bg-raised`
                }, _))
            }, `b${C}`))]
        }), y && l.jsxs("div", {
            className: "text-sm font-semibold text-danger",
            children: ["Answer: ", l.jsx("span", {
                className: "font-mono tracking-widest",
                children: e
            })]
        }), l.jsxs("div", {
            className: "text-xs text-muted",
            children: ["Attempt ", Math.min(u.length + 1, t), "/", t]
        }), l.jsx("div", {
            className: "mt-auto flex w-full flex-col items-center gap-1",
            children: vh[r].map( (R, C) => l.jsxs("div", {
                className: "flex gap-1",
                children: [R.map(T => l.jsx("button", {
                    onMouseDown: () => M(T),
                    className: "h-9 w-9 cursor-pointer rounded bg-raised font-mono text-sm hover:bg-accent hover:text-accent-ink",
                    children: T
                }, T)), C === vh[r].length - 1 && l.jsxs(l.Fragment, {
                    children: [l.jsx("button", {
                        onMouseDown: () => b(p.current.slice(0, -1)),
                        className: "h-9 cursor-pointer rounded bg-raised px-3 text-xs hover:bg-hover",
                        children: "DEL"
                    }), l.jsx("button", {
                        onMouseDown: N,
                        className: "h-9 cursor-pointer rounded bg-accent px-3 text-xs font-semibold text-accent-ink hover:bg-accent-bright",
                        children: "ENTER"
                    })]
                })]
            }, C))
        }), l.jsx(re, {
            left: x.left,
            total: x.total
        })]
    })
}
function Yj({settings: e, finish: t}) {
    const n = Y(Math.round(e.digitCount), 2, 8)
      , r = h.useMemo( () => Array.from({
        length: n
    }, () => K(0, 9)).join(""), [n]);
    return l.jsx(e0, {
        solution: r,
        maxAttempts: Math.max(1, Math.round(e.maxAttempts)),
        timeLimit: e.timeLimit,
        kind: "digits",
        hint: "Type the PIN. Solid = right place, outlined = wrong place, dim = not in the PIN.",
        finish: t
    })
}
function Gj(e, t) {
    const n = s => (Array.isArray(s) ? s : Object.values(s ?? {})).filter(o => typeof o == "string").map(o => o.trim().toUpperCase()).filter(o => o.length === t && /^[A-Z]+$/.test(o));
    let r = n(e);
    return r.length === 0 && (r = n(Fx)),
    r.length === 0 && (r = ["A".repeat(t)]),
    r[K(0, r.length - 1)]
}
function Kj({settings: e, finish: t}) {
    const n = Y(Math.round(e.wordLength), 3, 8)
      , r = h.useMemo( () => Gj(e.wordList, n), [n]);
    return l.jsx(e0, {
        solution: r,
        maxAttempts: Math.max(1, Math.round(e.maxAttempts)),
        timeLimit: e.timeLimit,
        kind: "letters",
        hint: `Guess the ${n}-letter word. Solid = right place, outlined = wrong place, dim = not in the word.`,
        finish: t
    })
}
const wh = .016
  , Sc = 250
  , Nc = 230
  , us = 190;
function kh(e, t, n) {
    const r = Math.abs(e);
    return r <= t * (100 / 90) ? "safe" : r <= (t + n) * (100 / 90) ? "caution" : "danger"
}
const Mc = (e, t) => {
    const n = e * Math.PI / 180;
    return [Sc + t * Math.cos(n), Nc + t * Math.sin(n)]
}
  , ri = (e, t) => {
    const [n,r] = Mc(180 + e, us)
      , [s,o] = Mc(180 + t, us);
    return `M${n} ${r} A${us} ${us} 0 0 1 ${s} ${o}`
}
;
function qj({settings: e, finish: t}) {
    const n = Math.max(1, e.greenZoneWidth)
      , r = Math.max(0, e.yellowZoneWidth)
      , [s,o] = h.useState(!1)
      , [a,i] = h.useState("safe")
      , [c,u] = h.useState(0)
      , [d,f] = h.useState(0)
      , m = h.useRef({
        needle: 0,
        drift: 0,
        target: e.driftSpeed * (Math.random() > .5 ? 1 : -1),
        danger: 0,
        acc: 0,
        q: !1,
        e: !1,
        done: !1
    })
      , y = se(e.timeLimit, () => g(!0), s)
      , g = w => {
        m.current.done || (m.current.done = !0,
        t(w, w ? void 0 : "error"))
    }
      , p = (w, b) => {
        const M = w.key.toLowerCase();
        if (M === "q" || M === "arrowleft")
            m.current.q = b;
        else if (M === "e" || M === "arrowright")
            m.current.e = b;
        else
            return;
        b && o(!0),
        w.preventDefault()
    }
    ;
    ne(w => p(w, !0)),
    ca(w => p(w, !1)),
    De(w => {
        const b = m.current;
        if (!b.done) {
            for (b.acc += w; b.acc >= wh; ) {
                b.acc -= wh,
                Math.random() < .02 && (b.target = (Math.random() - .5) * e.driftSpeed * 2);
                const M = (Math.random() - .5) * e.driftRandomness;
                b.drift += (b.target - b.drift) * .1,
                b.needle += (b.drift + M) * (16 / 100),
                b.q && (b.needle -= e.sensitivity * (16 / 100)),
                b.e && (b.needle += e.sensitivity * (16 / 100)),
                b.needle = Y(b.needle, -100, 100);
                const N = kh(b.needle, n, r);
                if (N === "danger" ? b.danger += 16 : N === "caution" ? b.danger = Math.max(0, b.danger - 8) : b.danger = Math.max(0, b.danger - 16),
                b.danger >= e.maxDangerTime)
                    return void g(!1)
            }
            u(b.needle * .9),
            i(kh(b.needle, n, r)),
            f(Y(b.danger / e.maxDangerTime, 0, 1))
        }
    }
    , s);
    const [k,v] = Mc(270 + c, us - 12)
      , x = s ? a === "safe" ? "STABLE" : a === "caution" ? "CAUTION" : "DANGER" : "PRESS Q OR E";
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx("p", {
            className: "text-center text-xs text-muted",
            children: s ? "Keep the needle in the amber band. Q pushes left, E pushes right." : "Press Q or E to begin stabilizing."
        }), l.jsxs("svg", {
            viewBox: "0 0 500 260",
            width: 500,
            height: 260,
            className: "rounded border border-line bg-raised",
            children: [l.jsx("path", {
                d: ri(0, 180),
                fill: "none",
                className: "stroke-danger",
                strokeWidth: "26"
            }), l.jsx("path", {
                d: ri(90 - n - r, 90 + n + r),
                fill: "none",
                className: "stroke-warn",
                strokeWidth: "26",
                strokeDasharray: "6 6"
            }), l.jsx("path", {
                d: ri(90 - n, 90 + n),
                fill: "none",
                className: "stroke-accent",
                strokeWidth: "26"
            }), l.jsx("line", {
                x1: Sc,
                y1: Nc,
                x2: k,
                y2: v,
                className: "stroke-fg",
                strokeWidth: "4",
                strokeLinecap: "round"
            }), l.jsx("circle", {
                cx: Sc,
                cy: Nc,
                r: "11",
                className: "fill-surface stroke-fg",
                strokeWidth: "3"
            })]
        }), l.jsx("div", {
            className: `text-sm font-semibold tracking-widest ${a === "danger" ? "text-danger" : a === "caution" ? "text-warn" : "text-accent"}`,
            children: x
        }), l.jsxs("div", {
            className: "w-full",
            children: [l.jsx("div", {
                className: "mb-1 flex justify-between text-xs text-muted",
                children: l.jsx("span", {
                    children: "Instability"
                })
            }), l.jsx("div", {
                className: "h-1.5 w-full overflow-hidden rounded-full bg-track",
                children: l.jsx("div", {
                    className: "h-full origin-left bg-danger",
                    style: {
                        transform: `scaleX(${d})`
                    }
                })
            })]
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: l.jsx(re, {
                left: s ? y.left : e.timeLimit,
                total: e.timeLimit
            })
        })]
    })
}
const jh = 460
  , bh = 350
  , Sh = 200;
function Xj({settings: e, finish: t}) {
    const n = Math.max(1, Math.round(e.targetsToHit))
      , r = Math.max(1, Math.round(e.maxMisses))
      , s = Math.max(16, e.targetSize)
      , o = Math.max(200, e.targetLifetime)
      , a = Math.max(0, e.timePenalty)
      , [i,c] = h.useState(0)
      , [u,d] = h.useState(0)
      , [f,m] = h.useState(null)
      , [y,g] = h.useState(!1)
      , p = h.useRef(!1)
      , k = h.useRef([])
      , v = h.useRef(0)
      , x = h.useRef({
        hits: 0,
        misses: 0
    })
      , w = se(e.timeLimit, () => M(!1, "time"))
      , b = (R, C) => {
        k.current.push(setTimeout(R, C))
    }
    ;
    h.useEffect( () => () => k.current.forEach(clearTimeout), []);
    const M = (R, C) => {
        p.current || (p.current = !0,
        t(R, C))
    }
      , N = () => {
        if (p.current)
            return;
        const R = {
            id: ++v.current,
            x: he(10, jh - s - 10),
            y: he(10, bh - s - 10),
            state: "live"
        };
        g(!1),
        m(R),
        b( () => g(!0), 50),
        b( () => j(R.id), o)
    }
      , j = R => {
        if (p.current || v.current !== R)
            return;
        const C = ++x.current.misses;
        if (d(C),
        m(T => T && T.id === R ? {
            ...T,
            state: "missed"
        } : T),
        W("wrong", .35),
        a > 0 && w.penalize(a),
        C >= r)
            return b( () => M(!1, "error"), 200);
        b(N, Sh + 200)
    }
      , S = R => {
        if (p.current || R.state !== "live" || v.current !== R.id)
            return;
        v.current++;
        const C = ++x.current.hits;
        if (c(C),
        m({
            ...R,
            state: "hit"
        }),
        W("correct", .4),
        C >= n)
            return b( () => M(!0), 100);
        b(N, 100 + Sh)
    }
    ;
    return h.useEffect( () => {
        b(N, 100)
    }
    , []),
    h.useEffect( () => {
        w.left <= 0 && !p.current && M(!1, "time")
    }
    , [w.left]),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Targets ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [i, "/", n]
                })]
            }), l.jsx(ee, {
                total: r,
                used: u,
                label: "Misses"
            })]
        }), l.jsx("div", {
            className: "relative cursor-crosshair overflow-hidden rounded border border-line bg-raised",
            style: {
                width: jh,
                height: bh
            },
            children: f && l.jsx("button", {
                onMouseDown: () => S(f),
                className: `absolute rounded-full border-2 ${f.state === "missed" ? "border-danger bg-danger-soft" : f.state === "hit" ? "border-accent bg-accent" : "border-danger bg-danger-soft"}`,
                style: {
                    left: f.x,
                    top: f.y,
                    width: s,
                    height: s,
                    transform: f.state === "hit" ? "scale(1.3)" : y && e.shrinkTarget ? "scale(0)" : "scale(1)",
                    transition: f.state === "live" && e.shrinkTarget ? `transform ${o}ms linear` : "transform 100ms",
                    opacity: f.state === "missed" ? .4 : 1
                },
                children: l.jsx("span", {
                    className: "absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fg"
                })
            }, f.id)
        }), l.jsx("div", {
            className: "mt-auto w-full",
            children: l.jsx(re, {
                left: w.left,
                total: w.total
            })
        })]
    })
}
const Qj = 60
  , Nh = 18
  , Zj = 15
  , Jj = 500
  , ds = 260
  , on = ds / 2
  , fs = 100
  , hs = e => (e % 360 + 360) % 360;
function eb(e, t, n) {
    const r = hs(e)
      , s = hs(t)
      , o = hs(t + n)
      , a = hs(e + Zj)
      , i = c => s <= o ? c >= s && c <= o : c >= s || c <= o;
    return i(r) || i(a)
}
const Mh = (e, t) => {
    const n = (e - 90) * Math.PI / 180;
    return `${on + t * Math.cos(n)} ${on + t * Math.sin(n)}`
}
  , si = (e, t) => `M${Mh(e, fs)} A${fs} ${fs} 0 ${t - e > 180 ? 1 : 0} 1 ${Mh(t, fs)}`;
function tb({settings: e, finish: t}) {
    const n = Math.max(1, Math.round(e.rounds))
      , r = Math.max(1, Math.round(e.maxFailures))
      , s = Math.max(8, e.targetZoneSize)
      , o = h.useMemo( () => {
        const j = (Array.isArray(e.keys) ? e.keys : Object.values(e.keys ?? {})).map(S => String(S).toUpperCase()).filter(S => S.length === 1);
        return j.length ? j : ["W", "A", "S", "D"]
    }
    , [])
      , [a,i] = h.useState(1)
      , [c,u] = h.useState( () => o[Math.floor(Math.random() * o.length)])
      , [d,f] = h.useState( () => he(-150, -30))
      , [m,y] = h.useState(0)
      , [g,p] = h.useState(null)
      , k = h.useRef(null)
      , v = h.useRef({
        angle: 0,
        dir: 1,
        speed: e.rotationSpeed,
        locked: !1,
        done: !1,
        zoneStart: 0,
        key: ""
    })
      , x = h.useRef([])
      , w = (N, j) => void x.current.push(setTimeout(N, j));
    h.useEffect( () => () => x.current.forEach(clearTimeout), []),
    v.current.zoneStart = d,
    v.current.key = c,
    h.useEffect( () => {
        v.current.angle = d + 180
    }
    , []),
    De(N => {
        var S;
        const j = v.current;
        j.done || (j.angle = hs(j.angle + j.speed * Qj * N * j.dir),
        (S = k.current) == null || S.setAttribute("d", si(j.angle, j.angle + Nh)))
    }
    );
    const b = N => {
        v.current.done || (v.current.done = !0,
        t(N, N ? void 0 : "error"))
    }
      , M = N => {
        const j = v.current;
        if (j.done || j.locked)
            return;
        const S = N === j.key && eb(j.angle, j.zoneStart, s);
        j.locked = !0,
        p(S ? "ok" : "bad"),
        W(S ? "correct" : "wrong", .4),
        w( () => {
            if (p(null),
            S) {
                if (a >= n)
                    return b(!0);
                const C = a + 1
                  , T = he(-150, -30);
                j.speed = e.rotationSpeed + (C - 1) * e.speedIncrease,
                e.randomizeDirection && (j.dir = Math.random() > .5 ? 1 : -1),
                j.angle = T + 180,
                j.zoneStart = T,
                i(C),
                f(T),
                u(o[Math.floor(Math.random() * o.length)]),
                j.locked = !1;
                return
            }
            const R = m + 1;
            if (y(R),
            R >= r)
                return b(!1);
            j.angle = j.zoneStart + 180,
            j.locked = !1
        }
        , Jj)
    }
    ;
    return ne(N => {
        if (N.repeat)
            return;
        const j = N.key.toUpperCase();
        o.includes(j) && (N.preventDefault(),
        M(j))
    }
    ),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Round ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [a, "/", n]
                })]
            }), l.jsx("span", {
                className: "text-fg",
                children: "Press the key when the segment is in the zone"
            }), l.jsx(ee, {
                total: r,
                used: m,
                label: "Fails"
            })]
        }), l.jsxs("svg", {
            viewBox: `0 0 ${ds} ${ds}`,
            width: ds * 1.5,
            height: ds * 1.5,
            children: [l.jsx("circle", {
                cx: on,
                cy: on,
                r: fs,
                fill: "none",
                className: "stroke-line",
                strokeWidth: "8"
            }), l.jsx("path", {
                d: si(d, d + s),
                fill: "none",
                className: "stroke-accent",
                strokeWidth: "8"
            }), l.jsx("path", {
                ref: k,
                d: si(d + 180, d + 180 + Nh),
                fill: "none",
                className: "stroke-fg",
                strokeWidth: "8",
                strokeLinecap: "round"
            }), l.jsx("circle", {
                cx: on,
                cy: on,
                r: "58",
                className: g === "ok" ? "fill-accent" : g === "bad" ? "fill-danger" : "fill-raised"
            }), l.jsx("text", {
                x: on,
                y: on + 12,
                textAnchor: "middle",
                className: `font-mono text-4xl font-semibold ${g === "ok" ? "fill-accent-ink" : "fill-fg"}`,
                children: c
            })]
        }), l.jsxs("p", {
            className: "text-xs text-muted",
            children: ["Keys: ", o.join(" ")]
        })]
    })
}
const ms = 300
  , Ae = ms / 2
  , Lt = 105
  , nb = 75
  , Eh = 125
  , rb = 500
  , un = e => (e % 360 + 360) % 360
  , sb = (e, t) => {
    const n = Math.abs(un(e) - un(t));
    return n > 180 ? 360 - n : n
}
  , Fo = (e, t) => {
    const n = (e - 90) * Math.PI / 180;
    return `${Ae + t * Math.cos(n)} ${Ae + t * Math.sin(n)}`
}
  , oi = (e, t) => un(e + t / 2 + 180 + he(-30, 30));
function ob({settings: e, finish: t}) {
    const n = Math.max(1, Math.round(e.rounds))
      , r = Math.max(4, e.sweetSpotSize)
      , s = Math.max(1, Math.round(e.maxFailures))
      , o = Math.max(1, e.shakeRange)
      , a = Math.max(100, e.lockTime)
      , [i,c] = h.useState(1)
      , [u,d] = h.useState(0)
      , [f,m] = h.useState(null)
      , [y,g] = h.useState(0)
      , [p,k] = h.useState({
        x: 0,
        y: 0
    })
      , [v,x] = h.useState( () => he(0, 360))
      , w = h.useRef(null)
      , b = h.useRef(null)
      , M = h.useRef({
        angle: 0,
        left: !1,
        right: !1,
        holdStart: 0,
        locked: !1,
        done: !1,
        spot: 0,
        over: !1
    })
      , N = h.useRef([])
      , j = (P, L) => void N.current.push(setTimeout(P, L));
    h.useEffect( () => () => N.current.forEach(clearTimeout), []),
    M.current.spot = v,
    h.useEffect( () => {
        M.current.angle = oi(v, r)
    }
    , []);
    const S = () => {
        const P = un(M.current.angle)
          , L = un(M.current.spot)
          , D = un(M.current.spot + r);
        return L <= D ? P >= L && P <= D : P >= L || P <= D
    }
      , R = P => {
        M.current.done || (M.current.done = !0,
        t(P, P ? void 0 : "error"))
    }
      , C = () => {
        const P = M.current;
        P.locked = !0,
        P.holdStart = 0,
        g(0);
        const L = S();
        m(L ? "ok" : "bad"),
        W(L ? "correct" : "wrong", .4),
        j( () => {
            if (m(null),
            L) {
                if (i >= n)
                    return R(!0);
                const E = he(0, 360);
                P.spot = E,
                P.angle = oi(E, r),
                x(E),
                c(i + 1),
                P.locked = !1;
                return
            }
            const D = u + 1;
            if (d(D),
            D >= s)
                return R(!1);
            P.angle = oi(P.spot, r),
            P.locked = !1
        }
        , rb)
    }
    ;
    ne(P => {
        const L = M.current
          , D = P.key.toLowerCase();
        if (D === "a" || D === "arrowleft")
            L.left = !0;
        else if (D === "d" || D === "arrowright")
            L.right = !0;
        else if ((D === "e" || D === " ") && !L.holdStart && !L.locked)
            L.holdStart = performance.now();
        else if (!(D === "e" || D === " "))
            return;
        P.preventDefault()
    }
    ),
    ca(P => {
        const L = M.current
          , D = P.key.toLowerCase();
        D === "a" || D === "arrowleft" ? L.left = !1 : D === "d" || D === "arrowright" ? L.right = !1 : (D === "e" || D === " ") && (L.holdStart = 0,
        g(0))
    }
    ),
    De( (P, L) => {
        var A, I, $, F, z;
        const D = M.current;
        if (D.done)
            return;
        if (!D.locked) {
            D.left && (D.angle = un(D.angle - Eh * P)),
            D.right && (D.angle = un(D.angle + Eh * P));
            const U = sb(D.angle, D.spot + r / 2)
              , B = U <= o ? (1 - U / o) * 8 : 0;
            if (k(B > 0 ? {
                x: (Math.random() - .5) * B,
                y: (Math.random() - .5) * B
            } : {
                x: 0,
                y: 0
            }),
            D.holdStart) {
                const O = Math.min(1, (L - D.holdStart) / a);
                g(O),
                O >= 1 && C()
            }
        }
        const E = (D.angle - 90) * Math.PI / 180;
        (A = w.current) == null || A.setAttribute("x2", String(Ae + (Lt - 5) * Math.cos(E))),
        (I = w.current) == null || I.setAttribute("y2", String(Ae + (Lt - 5) * Math.sin(E))),
        ($ = b.current) == null || $.setAttribute("cx", String(Ae + (Lt - 5) * Math.cos(E))),
        (F = b.current) == null || F.setAttribute("cy", String(Ae + (Lt - 5) * Math.sin(E))),
        (z = b.current) == null || z.setAttribute("visibility", S() ? "visible" : "hidden")
    }
    );
    const T = Array.from({
        length: 36
    }, (P, L) => L * 10)
      , _ = 2 * Math.PI * 14;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Lock ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [i, "/", n]
                })]
            }), l.jsx("span", {
                className: "text-fg",
                children: "A / D turn, hold E or Space to set"
            }), l.jsx(ee, {
                total: s,
                used: u,
                label: "Snaps"
            })]
        }), l.jsxs("svg", {
            viewBox: `0 0 ${ms} ${ms}`,
            width: ms * 1.4,
            height: ms * 1.4,
            style: {
                transform: `translate(${p.x}px, ${p.y}px)`
            },
            children: [l.jsx("circle", {
                cx: Ae,
                cy: Ae,
                r: Lt,
                fill: "none",
                className: f === "ok" ? "stroke-accent" : f === "bad" ? "stroke-danger" : "stroke-line",
                strokeWidth: "3"
            }), T.map( (P, L) => l.jsx("line", {
                x1: Fo(P, Lt - (L % 3 === 0 ? 11 : 8)).split(" ")[0],
                y1: Fo(P, Lt - (L % 3 === 0 ? 11 : 8)).split(" ")[1],
                x2: Fo(P, Lt).split(" ")[0],
                y2: Fo(P, Lt).split(" ")[1],
                className: L % 3 === 0 ? "stroke-fg" : "stroke-muted",
                strokeWidth: L % 3 === 0 ? 2 : 1
            }, L)), l.jsx("circle", {
                cx: Ae,
                cy: Ae,
                r: nb,
                className: f === "ok" ? "fill-accent-soft" : f === "bad" ? "fill-danger-soft" : "fill-raised",
                stroke: "none"
            }), l.jsx("line", {
                ref: w,
                x1: Ae,
                y1: Ae,
                x2: Ae,
                y2: Ae - Lt + 5,
                className: "stroke-fg",
                strokeWidth: "3",
                strokeLinecap: "round"
            }), l.jsx("circle", {
                ref: b,
                r: "5",
                visibility: "hidden",
                className: "fill-accent"
            }), l.jsx("circle", {
                cx: Ae,
                cy: Ae,
                r: "5",
                className: "fill-muted"
            }), y > 0 && l.jsx("circle", {
                cx: Ae,
                cy: Ae,
                r: "14",
                fill: "none",
                className: "stroke-accent",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeDasharray: _,
                strokeDashoffset: _ * (1 - y),
                transform: `rotate(-90 ${Ae} ${Ae})`
            })]
        })]
    })
}
const lb = {
    firewallpulse: {
        id: "firewallpulse",
        title: "Firewall Pulse",
        icon: Tx,
        w: 600,
        h: 250,
        Component: F2,
        hint: "Stop the pulse inside the safe zone",
        start: "Firewall detected. Preparing pulse bypass..",
        failTime: "Breach failed. Time expired.",
        failError: "Breach failed. Security alerted.",
        success: "Firewall bypassed.",
        defaults: {
            requiredHacks: 3,
            initialSpeed: 2,
            maxSpeed: 10,
            timeLimit: 1e4,
            safeZoneMinWidth: 40,
            safeZoneMaxWidth: 120,
            safeZoneShrinkAmount: 10
        }
    },
    backdoor: {
        id: "backdoor",
        title: "Backdoor Sequence",
        icon: Cl,
        w: 600,
        h: 440,
        Component: B2,
        hint: "Type the keys in order",
        start: "Encrypted channel found. Injecting sequence..",
        failTime: "Sequence failed. Time expired.",
        failError: "Sequence failed. Wrong key.",
        success: "Sequence complete. Backdoor opened.",
        defaults: {
            stages: 3,
            keysPerStage: 5,
            timeLimit: 15e3,
            keyPool: ["W", "A", "S", "D", "Q", "E"],
            keyHint: ""
        }
    },
    rhythm: {
        id: "rhythm",
        title: "Circuit Rhythm",
        icon: pr,
        w: 640,
        h: 600,
        Component: X2,
        hint: "Hit the notes in sync with the beat",
        start: "Circuit unstable. Synchronization required..",
        failTime: "Synchronization failed.",
        failError: "Synchronization failed. Circuit overloaded.",
        success: "Synchronization complete. Circuit stabilized.",
        defaults: {
            lanes: 4,
            keys: ["A", "S", "D", "F"],
            noteSpeed: 300,
            noteSpawnRate: 1e3,
            requiredNotes: 20,
            difficulty: "normal",
            maxWrongKeys: 5,
            maxMissedNotes: 3
        }
    },
    surge: {
        id: "surge",
        title: "Surge Override",
        icon: tl,
        w: 500,
        h: 520,
        Component: J2,
        hint: "Mash the key to override the surge",
        start: "Power surge detected. Manual override required..",
        failTime: "Override failed.",
        failError: "Override failed. Power lost.",
        success: "Override complete. Surge contained.",
        defaults: {
            keys: ["E"],
            requiredPresses: 50,
            decayRate: 2
        }
    },
    varhack: {
        id: "varhack",
        title: "Variable Hack",
        icon: lc,
        w: 600,
        h: 520,
        Component: tj,
        hint: "Memorize, then click the numbers in order",
        start: "Memory block located. Memorize the pattern..",
        failTime: "Hack failed. Time expired.",
        failError: "Hack failed. Wrong block.",
        success: "Variables extracted.",
        defaults: {
            blocks: 5,
            speed: 5
        }
    },
    numberup: {
        id: "numberup",
        title: "Number Up",
        icon: ac,
        w: 600,
        h: 620,
        Component: nj,
        hint: "Click the numbers in ascending order",
        start: "Sequence scrambled. Re-ordering required..",
        failTime: "Sequence failed. Time expired.",
        failError: "Sequence failed. Too many mistakes.",
        success: "Sequence complete.",
        defaults: {
            count: 20,
            timeLimit: 3e4,
            gridCols: 4,
            maxMistakes: 3
        }
    },
    memory: {
        id: "memory",
        title: "Memory Test",
        icon: mr,
        w: 560,
        h: 600,
        Component: oj,
        hint: "Remember which squares light up",
        start: "Security pattern detected. Memorize it..",
        failTime: "Memory test failed. Time expired.",
        failError: "Memory test failed.",
        success: "Memory test passed.",
        defaults: {
            gridSize: 5,
            squareCount: 8,
            rounds: 3,
            showTime: 3e3,
            guessTime: 1e4,
            maxWrongPresses: 3
        }
    },
    seqmemory: {
        id: "seqmemory",
        title: "Sequence Memory",
        icon: mr,
        w: 560,
        h: 580,
        Component: ij,
        hint: "Repeat the growing sequence",
        start: "Access pattern incoming. Watch closely..",
        failTime: "Sequence lost.",
        failError: "Sequence failed. Too many errors.",
        success: "Sequence memorized. Access granted.",
        defaults: {
            gridSize: 4,
            rounds: 5,
            maxWrongPresses: 3,
            showTime: 1e3,
            delayBetween: 300
        }
    },
    verbalmemory: {
        id: "verbalmemory",
        title: "Verbal Memory",
        icon: lc,
        w: 600,
        h: 520,
        Component: mj,
        hint: "Have you seen this word before?",
        start: "Passphrase vault. Word recall required..",
        failTime: "Recall failed.",
        failError: "Recall failed. Too many strikes.",
        success: "Recall complete. Vault opened.",
        defaults: {
            maxStrikes: 3,
            wordsToShow: 50,
            wordDuration: 5e3
        }
    },
    numseq: {
        id: "numseq",
        title: "Numbered Sequence",
        icon: ac,
        w: 560,
        h: 600,
        Component: yj,
        hint: "Memorize where the numbers were",
        start: "Keypad scrambled. Memorize the layout..",
        failTime: "Sequence failed. Time expired.",
        failError: "Sequence failed. Too many wrong presses.",
        success: "Sequence accepted.",
        defaults: {
            gridSize: 4,
            sequenceLength: 6,
            rounds: 3,
            showTime: 4e3,
            guessTime: 1e4,
            maxWrongPresses: 3
        }
    },
    symbolsearch: {
        id: "symbolsearch",
        title: "Symbol Search",
        icon: Cl,
        w: 600,
        h: 680,
        Component: kj,
        hint: "Find the start of the key sequence",
        start: "Key fragment located. Scanning data stream..",
        failTime: "Time expired. Access denied.",
        failError: "Wrong position. Access denied.",
        success: "Sequence found. Access granted.",
        defaults: {
            gridSize: 8,
            shiftInterval: 1e3,
            timeLimit: 3e4,
            minKeyLength: 1,
            maxKeyLength: 1,
            symbolType: "symbols",
            symbols: {}
        }
    },
    pipepressure: {
        id: "pipepressure",
        title: "Pipe Pressure",
        icon: tl,
        w: 560,
        h: 600,
        Component: Tj,
        hint: "Rotate pipes to connect START to END",
        start: "Pressure line blocked. Re-route the pipes..",
        failTime: "Time out. Pressure lost.",
        failError: "Pressure lost.",
        success: "Connected. Pressure restored.",
        defaults: {
            gridSize: 6,
            timeLimit: 3e4
        }
    },
    pairs: {
        id: "pairs",
        title: "Pairs",
        icon: mr,
        w: 560,
        h: 620,
        Component: Lj,
        hint: "Find every matching pair",
        start: "Cache scrambled. Match the data blocks..",
        failTime: "Time out.",
        failError: "Out of attempts.",
        success: "All pairs found.",
        defaults: {
            gridSize: 4,
            timeLimit: 12e4,
            maxAttempts: 0
        }
    },
    memorycolors: {
        id: "memorycolors",
        title: "Memory Shapes",
        icon: mr,
        w: 520,
        h: 540,
        Component: Pj,
        hint: "Memorize the shapes, then count them",
        start: "Pattern lock. Memorize the shapes..",
        failTime: "Time out.",
        failError: "Count failed.",
        success: "Count accepted.",
        defaults: {
            gridSize: 5,
            memorizeTime: 5e3,
            answerTime: 1e4,
            rounds: 3
        }
    },
    untangle: {
        id: "untangle",
        title: "Untangle",
        icon: tl,
        w: 600,
        h: 560,
        Component: _j,
        hint: "Drag nodes until no lines cross",
        start: "Wiring tangled. Untangle the circuit..",
        failTime: "Time out. Circuit shorted.",
        failError: "Circuit shorted.",
        success: "Circuit untangled.",
        defaults: {
            nodeCount: 8,
            timeLimit: 6e4
        }
    },
    fingerprint: {
        id: "fingerprint",
        title: "Fingerprint",
        icon: Es,
        w: 640,
        h: 540,
        Component: Bj,
        hint: "Align the rows to complete the print",
        start: "Biometric lock. Reconstruct the fingerprint..",
        failTime: "Access denied. Time expired.",
        failError: "Access denied.",
        success: "Access granted.",
        defaults: {
            timeLimit: 3e4,
            showAlignedCount: !0,
            showCorrectIndicator: !0
        }
    },
    codecrack: {
        id: "codecrack",
        title: "Code Crack",
        icon: Es,
        w: 560,
        h: 640,
        Component: Yj,
        hint: "Crack the PIN",
        start: "PIN pad locked. Cracking code..",
        failTime: "Lockout. Time expired.",
        failError: "Lockout. Too many attempts.",
        success: "Code cracked.",
        defaults: {
            timeLimit: 6e4,
            digitCount: 4,
            maxAttempts: 6
        }
    },
    wordcrack: {
        id: "wordcrack",
        title: "Word Crack",
        icon: Es,
        w: 560,
        h: 700,
        Component: Kj,
        hint: "Guess the password",
        start: "Password prompt. Guess the word..",
        failTime: "Lockout. Time expired.",
        failError: "Lockout. Too many attempts.",
        success: "Password cracked.",
        defaults: {
            timeLimit: 12e4,
            wordLength: 5,
            maxAttempts: 6,
            wordList: {}
        }
    },
    balance: {
        id: "balance",
        title: "Balance",
        icon: pr,
        w: 560,
        h: 520,
        Component: qj,
        hint: "Keep the needle in the safe zone",
        start: "Unstable core. Stabilization required..",
        failTime: "Core destabilized.",
        failError: "Core destabilized.",
        success: "Core stabilized.",
        defaults: {
            timeLimit: 1e4,
            driftSpeed: 3,
            sensitivity: 8,
            greenZoneWidth: 30,
            yellowZoneWidth: 25,
            driftRandomness: 2,
            maxDangerTime: 1e3
        }
    },
    aimtest: {
        id: "aimtest",
        title: "Target Lock",
        icon: pr,
        w: 540,
        h: 520,
        Component: Xj,
        hint: "Click the targets before they vanish",
        start: "Tracking system online. Acquire targets..",
        failTime: "Targets lost. Time expired.",
        failError: "Targets lost. Too many misses.",
        success: "All targets acquired.",
        defaults: {
            timeLimit: 3e4,
            targetsToHit: 10,
            targetLifetime: 1500,
            targetSize: 60,
            shrinkTarget: !0,
            maxMisses: 5,
            timePenalty: 0
        }
    },
    circleclick: {
        id: "circleclick",
        title: "Circle Click",
        icon: pr,
        w: 520,
        h: 620,
        Component: tb,
        hint: "Press the key when the segment hits the zone",
        start: "Rotating lock. Time your input..",
        failTime: "Lock failed.",
        failError: "Lock failed. Too many misses.",
        success: "Lock released.",
        defaults: {
            rounds: 5,
            rotationSpeed: 2,
            targetZoneSize: 45,
            maxFailures: 3,
            speedIncrease: .15,
            randomizeDirection: !0,
            keys: ["W", "A", "S", "D"]
        }
    },
    picklock: {
        id: "picklock",
        title: "Pick Lock",
        icon: Rx,
        w: 520,
        h: 620,
        Component: ob,
        hint: "Feel for the sweet spot, then hold to set",
        start: "Pin tumbler lock. Pick required..",
        failTime: "Pick failed.",
        failError: "Pick snapped.",
        success: "Lock picked.",
        defaults: {
            rounds: 3,
            sweetSpotSize: 30,
            maxFailures: 2,
            shakeRange: 40,
            lockTime: 500
        }
    }
}
  , ab = {
    path: {
        id: "path",
        title: "Route Trace",
        icon: Cl,
        w: 600,
        h: 700,
        Component: Gv,
        hint: "Memorize the route, then walk it",
        start: "Unrecognized user, connection required..",
        failTime: "Connection failed. Time limit reached.",
        failError: "Connection failed. Error limit reached.",
        success: "Connection successful. Access granted.",
        defaults: {
            gridSize: 10,
            lives: 3,
            timeLimit: 1e4,
            pathTimeout: 5e3
        }
    },
    spot: {
        id: "spot",
        title: "Decrypt",
        icon: lc,
        w: 600,
        h: 700,
        Component: Kv,
        hint: "Click the matching symbol",
        start: "Files encrypted, user bypass required..",
        failTime: "Decryption failed. Time limit reached.",
        failError: "Decryption failed.",
        success: "Files successfully decrypted.",
        defaults: {
            gridSize: 6,
            timeLimit: 8e3,
            charSet: "braille",
            required: 2
        }
    },
    math: {
        id: "math",
        title: "Firewall Bypass",
        icon: Tx,
        w: 600,
        h: 680,
        Component: Xv,
        hint: "Solve the number grid",
        start: "Firewall active. Attempting to bypass..",
        failTime: "Bypass failed. Time limit reached.",
        failError: "Bypass failed. Incorrect input.",
        success: "Firewall successfully bypassed.",
        defaults: {
            timeLimit: 3e5
        }
    },
    simonsays: {
        id: "simonsays",
        title: "Access Sequence",
        icon: mr,
        w: 600,
        h: 680,
        Component: Qv,
        hint: "Repeat the sequence",
        start: "Unrecognized access request. Attempting to bypass..",
        failTime: "Bypass failed. Time limit reached.",
        failError: "Bypass failed. Incorrect input.",
        success: "Bypass success. Access granted.",
        defaults: {
            buttonGrid: 6,
            length: 5
        }
    },
    pincrack: {
        id: "pincrack",
        title: "Password Crack",
        icon: Es,
        w: 600,
        h: 520,
        Component: Zv,
        hint: "Crack the 4 digit code",
        start: "Access requires password input..",
        failTime: "Cracking failed. Time limit reached.",
        failError: "Cracking failed. Incorrect password input.",
        success: "Cracking success. Access granted.",
        defaults: {
            timeLimit: 3e4
        }
    },
    dot: {
        id: "dot",
        title: "Sequence Lock",
        icon: pr,
        w: 560,
        h: 640,
        Component: rw,
        hint: "Follow the dot",
        start: "Sequence locked. Replication is required...",
        failTime: "Attempt to replicate has failed.",
        failError: "Attempt to replicate has failed.",
        success: "Sequence successfully replicated.",
        defaults: {
            timeLimit: 15e3
        }
    },
    flappy: {
        id: "flappy",
        title: "Data Stream",
        icon: Es,
        w: 900,
        h: 800,
        Component: aw,
        hint: "Fly through the gaps",
        start: "Firewall active. Bypass is required.",
        failTime: "Attempt to bypass has failed.",
        failError: "Attempt to bypass has failed.",
        success: "Successfully bypassed.",
        defaults: {
            targetScore: 25
        }
    },
    mathtempo: {
        id: "mathtempo",
        title: "Breach Protocol",
        icon: mr,
        w: 640,
        h: 760,
        Component: cw,
        hint: "Answer on the line",
        start: "Security system engaged. Breach protocol initialized.",
        failTime: "Breach attempt timed out. Reinforcements en route.",
        failError: "Breach attempt failed. Access denied.",
        success: "System compromised. Access granted.",
        defaults: {
            targetHeight: 30,
            targetScore: 5,
            speed: 3,
            maxMisses: 3,
            initialSpawnRate: 1e3,
            minSpawnRate: 300
        }
    },
    wires: {
        id: "wires",
        title: "Wire Match",
        icon: tl,
        w: 600,
        h: 700,
        Component: dw,
        hint: "Connect matching symbols",
        start: "Panel locked. Rewiring required..",
        failTime: "Rewire failed. Time limit reached.",
        failError: "Rewire failed. Circuit overloaded.",
        success: "Circuit restored. Access granted.",
        defaults: {
            pairs: 5,
            lives: 3,
            timeLimit: 2e4,
            memorizeTime: 3e3,
            scramble: 8
        }
    },
    lockpick: {
        id: "lockpick",
        title: "Lock Pick",
        icon: Rx,
        w: 600,
        h: 620,
        Component: gw,
        hint: "Hit the zone as the needle passes",
        start: "Mechanical lock engaged. Picking required..",
        failTime: "Lock pick failed. Time limit reached.",
        failError: "Lock pick failed. Pick snapped.",
        success: "Lock opened. Access granted.",
        defaults: {
            pins: 4,
            lives: 3,
            speed: 220,
            zone: 40,
            shrink: 6
        }
    },
    bitflip: {
        id: "bitflip",
        title: "Bit Flip",
        icon: ac,
        w: 600,
        h: 560,
        Component: ww,
        hint: "Set the switches to match the number",
        start: "Register locked. Manual override required..",
        failTime: "Override failed. Time limit reached.",
        failError: "Override failed. Register corrupted.",
        success: "Register unlocked. Access granted.",
        defaults: {
            rounds: 4,
            bits: 6,
            timeLimit: 8e3,
            lives: 2
        }
    },
    logicgates: {
        id: "logicgates",
        title: "Logic Gates",
        icon: _y,
        w: 660,
        h: 580,
        Component: Rw,
        hint: "Flip the switches to light the output",
        start: "Circuit locked. Rerouting signal..",
        failTime: "Reroute failed. Time limit reached.",
        failError: "Reroute failed. Out of moves.",
        success: "Signal routed. Access granted.",
        defaults: {
            inputs: 5,
            inverters: 1,
            rounds: 3,
            timeLimit: 25e3,
            maxMoves: 8
        }
    },
    targetnumber: {
        id: "targetnumber",
        title: "Target Number",
        icon: zy,
        w: 640,
        h: 560,
        Component: $w,
        hint: "Merge the numbers to reach the target",
        start: "Checksum mismatch. Recalculating..",
        failTime: "Calculation failed. Time limit reached.",
        failError: "Calculation failed. Too many errors.",
        success: "Checksum verified. Access granted.",
        defaults: {
            numbers: 4,
            rounds: 3,
            lives: 3,
            timeLimit: 6e4,
            maxNumber: 12,
            undoPenalty: 5e3,
            resetPenalty: 1e4
        }
    },
    echobeat: {
        id: "echobeat",
        title: "Echo Beat",
        icon: nf,
        w: 560,
        h: 520,
        Component: Ww,
        hint: "Tap the rhythm back",
        start: "Handshake pattern received. Replay it..",
        failTime: "Handshake failed. No response.",
        failError: "Handshake failed. Timing rejected.",
        success: "Handshake accepted. Access granted.",
        defaults: {
            rounds: 3,
            beats: 4,
            bpm: 90,
            tolerance: 150,
            maxMisses: 3
        }
    },
    latinsquare: {
        id: "latinsquare",
        title: "Latin Square",
        icon: Fy,
        w: 520,
        h: 600,
        Component: Xw,
        hint: "Each digit once per row and column",
        start: "Key matrix corrupted. Rebuilding..",
        failTime: "Rebuild failed. Time limit reached.",
        failError: "Rebuild failed. Too many mistakes.",
        success: "Key matrix restored. Access granted.",
        defaults: {
            gridSize: 5,
            givens: 11,
            maxMistakes: 3,
            timeLimit: 6e4
        }
    },
    lightsout: {
        id: "lightsout",
        title: "Lights Out",
        icon: Hy,
        w: 520,
        h: 560,
        Component: Jw,
        hint: "Switch off every light",
        start: "Power grid unstable. Shutting down..",
        failTime: "Shutdown failed. Time limit reached.",
        failError: "Shutdown failed. Out of moves.",
        success: "Grid offline. Access granted.",
        defaults: {
            gridSize: 5,
            rounds: 3,
            scramble: 6,
            maxMoves: 10,
            timeLimit: 3e4
        }
    },
    colorsort: {
        id: "colorsort",
        title: "Color Sort",
        icon: rf,
        w: 620,
        h: 500,
        Component: ok,
        hint: "Sort the tokens by color",
        start: "Signal channels mixed. Separating..",
        failTime: "Separation failed. Time limit reached.",
        failError: "Separation failed. Out of moves.",
        success: "Channels separated. Access granted.",
        defaults: {
            colors: 4,
            extraTubes: 2,
            rounds: 2,
            scramble: 16,
            maxMoves: 24,
            timeLimit: 6e4,
            undoPenalty: 5e3,
            resetPenalty: 1e4,
            symbols: !0,
            colorblind: !1
        }
    },
    cipherdecode: {
        id: "cipherdecode",
        title: "Cipher Decode",
        icon: Wy,
        w: 640,
        h: 560,
        Component: uk,
        hint: "Decode the word with the key",
        start: "Message encrypted. Key recovered..",
        failTime: "Decryption failed. Time limit reached.",
        failError: "Decryption failed. Too many wrong words.",
        success: "Message decrypted. Access granted.",
        defaults: {
            rounds: 3,
            wordLength: 5,
            cipher: "mixed",
            layers: 1,
            maxMistakes: 3,
            timeLimit: 6e4
        }
    },
    sumgrid: {
        id: "sumgrid",
        title: "Sum Grid",
        icon: Ax,
        w: 520,
        h: 600,
        Component: gk,
        hint: "Make every row and column add up",
        start: "Ledger unbalanced. Reconciling..",
        failTime: "Reconcile failed. Time limit reached.",
        failError: "Reconcile failed. Too many mistakes.",
        success: "Ledger balanced. Access granted.",
        defaults: {
            gridSize: 4,
            blanks: 8,
            maxMistakes: 3,
            timeLimit: 9e4
        }
    },
    compactorload: {
        id: "compactorload",
        title: "Compactor Load",
        icon: Uy,
        w: 600,
        h: 580,
        Component: bk,
        hint: "Fit every bag into the truck bed",
        start: "Truck bed empty. Loading bags..",
        failTime: "Load failed. Time limit reached.",
        failError: "Load failed.",
        success: "Truck loaded. Ready to haul.",
        defaults: {
            cols: 6,
            rows: 4,
            bags: 5,
            rounds: 2,
            timeLimit: 45e3,
            rotate: !0,
            symbols: !0,
            colorblind: !1
        }
    },
    jackhammer: {
        id: "jackhammer",
        title: "Jackhammer Rhythm",
        icon: By,
        w: 560,
        h: 470,
        Component: Tk,
        hint: "Strike when the marker is in the zone",
        start: "Rubble in the way. Drill ready..",
        failTime: "Repair failed. Time limit reached.",
        failError: "Repair failed. Hammer overheated.",
        success: "Rubble cleared. Road open.",
        defaults: {
            strikes: 8,
            maxMisses: 3,
            speed: 1.1,
            speedUp: .1,
            zone: 20,
            shrink: 1,
            minZone: 10,
            timeLimit: 2e4
        }
    },
    moppath: {
        id: "moppath",
        title: "Mop Path",
        icon: Vy,
        w: 560,
        h: 540,
        Component: Pk,
        hint: "Mop every spill. Avoid signs and mopped tiles",
        start: "Spills on the floor. Mop ready..",
        failTime: "Cleaning failed. Time limit reached.",
        failError: "Cleaning failed. Too many slips.",
        success: "Floor clean. Ready to serve.",
        defaults: {
            cols: 7,
            rows: 5,
            spills: 8,
            signs: 4,
            lives: 3,
            timeLimit: 4e4
        }
    },
    wastesort: {
        id: "wastesort",
        title: "Sort the Waste",
        icon: Yy,
        w: 560,
        h: 580,
        Component: _k,
        hint: "Send each item to the right bin before it hits the floor",
        start: "Bins are out. Sorting waste..",
        failTime: "Sorting failed. Time limit reached.",
        failError: "Sorting failed. Too much mess.",
        success: "All waste sorted. Bins full.",
        defaults: {
            items: 20,
            lives: 3,
            fall: 5,
            speedUp: .1,
            minFall: 2.5,
            timeLimit: 5e4
        }
    },
    addressmatch: {
        id: "addressmatch",
        title: "Address Match",
        icon: Gy,
        w: 560,
        h: 470,
        Component: Uk,
        hint: "Pick the mailbox that matches the address",
        start: "Parcel scanned. Finding the mailbox..",
        failTime: "Delivery failed. Time limit reached.",
        failError: "Delivery failed. Wrong mailbox.",
        success: "Parcel delivered.",
        defaults: {
            rounds: 3,
            choices: 4,
            lives: 2,
            timeLimit: 7e3
        }
    },
    tracesplice: {
        id: "tracesplice",
        title: "Trace Splice",
        icon: av,
        w: 600,
        h: 520,
        Component: Qk,
        hint: "Guide the probe along the trace without touching its edges",
        start: "Circuit trace exposed. Probe ready..",
        failTime: "Splice failed. Time limit reached.",
        failError: "Splice failed. Circuit shorted.",
        success: "Trace spliced.",
        defaults: {
            width: 10,
            length: 100,
            checkpoints: 0,
            liveSegments: 4,
            lives: 3,
            timeLimit: 3e4
        }
    },
    intercept: {
        id: "intercept",
        title: "Intercept",
        icon: iv,
        w: 560,
        h: 470,
        Component: r2,
        hint: "Press Space the moment the carrier spike appears. Ignore the decoys",
        start: "Listening for the carrier signal..",
        failTime: "Intercept failed. Time limit reached.",
        failError: "Intercept failed. Signal lost.",
        success: "Carrier intercepted.",
        defaults: {
            rounds: 6,
            lives: 3,
            windowMs: 300,
            decoys: .35,
            minDelay: 800,
            maxDelay: 2500
        }
    },
    echopath: {
        id: "echopath",
        title: "Echo Path",
        icon: mv,
        w: 520,
        h: 560,
        Component: Mv,
        hint: "Remember the path. You are told how to enter it afterwards",
        start: "Path signal received. Recording the route..",
        failTime: "Route lost. Time limit reached.",
        failError: "Route lost. Wrong cell.",
        success: "Route recovered.",
        defaults: {
            size: 4,
            length: 3,
            rounds: 1,
            lives: 2,
            showMs: 550,
            gapMs: 150,
            timeLimit: 6e4
        }
    },
    streamtally: {
        id: "streamtally",
        title: "Stream Tally",
        icon: hv,
        w: 520,
        h: 540,
        Component: $v,
        hint: "Watch the stream. You are asked what passed afterwards",
        start: "Data stream open. Monitoring traffic..",
        failTime: "Capture failed. Time limit reached.",
        failError: "Capture failed. Traffic misread.",
        success: "Traffic logged.",
        defaults: {
            symbols: 3,
            interval: 1e3,
            duration: 5e3,
            questions: 3,
            lives: 2,
            timeLimit: 45e3
        }
    },
    packetrecall: {
        id: "packetrecall",
        title: "Packet Recall",
        icon: fv,
        w: 520,
        h: 560,
        Component: Fv,
        hint: "Remember the packets. You are told which ones to enter afterwards",
        start: "Packets incoming. Logging the stream..",
        failTime: "Capture failed. Time limit reached.",
        failError: "Capture failed. Too many wrong packets.",
        success: "Packets recovered.",
        defaults: {
            length: 4,
            ask: 3,
            symbols: 6,
            rounds: 3,
            lives: 2,
            showMs: 600,
            gapMs: 200,
            timeLimit: 75e3
        }
    },
    rackslide: {
        id: "rackslide",
        title: "Rack Slide",
        icon: cv,
        w: 560,
        h: 600,
        Component: u2,
        hint: "Slide the modules until the drive can leave through the port",
        start: "Drive locked in the rack. Clearing a path..",
        failTime: "Extraction failed. Time limit reached.",
        failError: "Extraction failed. Out of moves.",
        success: "Drive extracted.",
        defaults: {
            blocks: 9,
            minMoves: 6,
            maxMoves: 10,
            rounds: 1,
            timeLimit: 6e4
        }
    },
    accessmatrix: {
        id: "accessmatrix",
        title: "Access Matrix",
        icon: uv,
        w: 560,
        h: 600,
        Component: v2,
        hint: "Fill the cells the row and column numbers describe",
        start: "Access pattern requested. Rebuilding the matrix..",
        failTime: "Access denied. Time limit reached.",
        failError: "Access denied. Too many wrong cells.",
        success: "Access pattern accepted.",
        defaults: {
            size: 6,
            density: .55,
            maxMistakes: 3,
            timeLimit: 9e4
        }
    },
    nodesweep: {
        id: "nodesweep",
        title: "Node Sweep",
        icon: dv,
        w: 520,
        h: 560,
        Component: M2,
        hint: "Each number counts the nodes around it. Open every safe cell",
        start: "Security nodes on the network. Sweeping..",
        failTime: "Sweep failed. Time limit reached.",
        failError: "Sweep failed. Alarm tripped.",
        success: "Network swept.",
        defaults: {
            size: 8,
            nodes: 10,
            lives: 2,
            timeLimit: 9e4
        }
    },
    gelmatch: {
        id: "gelmatch",
        title: "Gel Match",
        icon: rf,
        w: 600,
        h: 520,
        Component: R2,
        hint: "Pick the lane that matches the sample",
        start: "DNA sample loaded. Run the gel..",
        failTime: "Sequencing incomplete. Time limit reached.",
        failError: "Sequencing incomplete. Too many mismatches.",
        success: "Sequence matched.",
        defaults: {
            rounds: 3,
            lanes: 4,
            bands: 5,
            lives: 2,
            timeLimit: 35e3
        }
    },
    striation: {
        id: "striation",
        title: "Striation Match",
        icon: pr,
        w: 600,
        h: 520,
        Component: $2,
        hint: "Align and focus the striations, then hold",
        start: "Casing under the comparison microscope..",
        failTime: "Comparison incomplete. Time limit reached.",
        failError: "Comparison incomplete.",
        success: "Striations matched.",
        defaults: {
            rounds: 2,
            marks: 12,
            tolerance: 3,
            holdMs: 1500,
            timeLimit: 4e4
        }
    },
    spectrum: {
        id: "spectrum",
        title: "Residue Spectrum",
        icon: nf,
        w: 600,
        h: 520,
        Component: I2,
        hint: "Match the peaks, then lock the reading",
        start: "Swab loaded into the spectrometer..",
        failTime: "Reading incomplete. Time limit reached.",
        failError: "Reading too far off the reference.",
        success: "Reading matched.",
        defaults: {
            peaks: 3,
            passScore: 85,
            timeLimit: 3e4
        }
    }
}
  , Dr = {
    ...ab,
    ...lb
}
  , Ou = 1
  , Du = 2
  , Iu = 4
  , _u = 8;
function t0(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 900);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
function n0({v: e}) {
    return l.jsxs("div", {
        className: "flex w-full items-center justify-between text-xs text-muted",
        children: [l.jsxs("span", {
            children: ["Maze ", l.jsxs("span", {
                className: "font-mono text-sm text-accent",
                children: [e.stage, "/", e.stages]
            })]
        }), l.jsx(ee, {
            total: e.lives,
            used: Math.min(e.errors, e.lives),
            label: "Alarms"
        })]
    })
}
const Rn = 380;
function ib({v: e}) {
    const t = t0(e.check, e.last)
      , n = Rn / e.size
      , r = f => [f % e.size * n, Math.floor(f / e.size) * n]
      , s = f => r(f).map(m => m + n / 2)
      , [o,a] = s(e.pos)
      , [i,c] = r(e.exit)
      , [u,d] = s(e.start);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(n0, {
            v: e
        }), l.jsx("div", {
            className: t === "wrong" ? "shake" : "",
            children: l.jsxs("svg", {
                width: Rn + 8,
                height: Rn + 8,
                viewBox: `-4 -4 ${Rn + 8} ${Rn + 8}`,
                children: [l.jsx("rect", {
                    x: 0,
                    y: 0,
                    width: Rn,
                    height: Rn,
                    className: "fill-raised"
                }), l.jsx("rect", {
                    x: i + 3,
                    y: c + 3,
                    width: n - 6,
                    height: n - 6,
                    rx: 3,
                    className: "fill-accent-soft stroke-accent",
                    strokeWidth: "2"
                }), l.jsx("circle", {
                    cx: u,
                    cy: d,
                    r: n * .18,
                    className: "fill-none stroke-muted",
                    strokeWidth: "1.5"
                }), e.lasers.map(f => {
                    const [m,y] = r(f)
                      , g = f === e.tripped && t === "wrong";
                    return l.jsxs("g", {
                        children: [l.jsx("rect", {
                            x: m + 2,
                            y: y + 2,
                            width: n - 4,
                            height: n - 4,
                            className: g ? "fill-danger" : "fill-danger-soft"
                        }), l.jsx("path", {
                            d: `M${m + 5} ${y + 5}L${m + n - 5} ${y + n - 5}M${m + n - 5} ${y + 5}L${m + 5} ${y + n - 5}`,
                            className: "stroke-danger",
                            strokeWidth: "1.5"
                        })]
                    }, f)
                }
                ), e.trail.slice(0, -1).map( (f, m) => {
                    const [y,g] = s(f);
                    return l.jsx("circle", {
                        cx: y,
                        cy: g,
                        r: n * .07,
                        className: "fill-accent-line"
                    }, `${f}-${m}`)
                }
                ), e.walls.map( (f, m) => {
                    const [y,g] = r(m);
                    let p = "";
                    return f & Ou && (p += `M${y} ${g}h${n}`),
                    f & _u && (p += `M${y} ${g}v${n}`),
                    m % e.size === e.size - 1 && f & Du && (p += `M${y + n} ${g}v${n}`),
                    m >= e.size * (e.size - 1) && f & Iu && (p += `M${y} ${g + n}h${n}`),
                    p ? l.jsx("path", {
                        d: p,
                        className: "stroke-fg",
                        strokeWidth: "3",
                        strokeLinecap: "square"
                    }, m) : null
                }
                ), l.jsx("circle", {
                    cx: o,
                    cy: a,
                    r: n * .26,
                    className: "fill-accent"
                })]
            })
        }, e.check), l.jsx("div", {
            className: `h-5 text-center text-xs ${t === "wrong" ? "text-danger" : "text-muted"}`,
            children: t === "wrong" ? "Laser tripped. Your partner is back at the start." : t === "ok" ? "Exit reached. New maze." : "Talk your partner to the exit. They cannot see the lasers or the map."
        })]
    })
}
const Th = [{
    dir: "n",
    bit: Ou,
    label: "▲",
    keys: ["ArrowUp", "w", "W"],
    at: "col-start-2 row-start-1"
}, {
    dir: "w",
    bit: _u,
    label: "◀",
    keys: ["ArrowLeft", "a", "A"],
    at: "col-start-1 row-start-2"
}, {
    dir: "e",
    bit: Du,
    label: "▶",
    keys: ["ArrowRight", "d", "D"],
    at: "col-start-3 row-start-2"
}, {
    dir: "s",
    bit: Iu,
    label: "▼",
    keys: ["ArrowDown", "s", "S"],
    at: "col-start-2 row-start-3"
}];
function cb({v: e, send: t}) {
    const n = t0(e.check, e.last)
      , r = (o, a) => {
        e.here & a || t({
            type: "move",
            dir: o
        })
    }
    ;
    ne(o => {
        if (o.repeat)
            return;
        const a = Th.find(i => i.keys.includes(o.key));
        a && (o.preventDefault(),
        r(a.dir, a.bit))
    }
    );
    const s = o => e.here & o ? "var(--text)" : "transparent";
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(n0, {
            v: e
        }), l.jsxs("div", {
            className: "flex flex-1 flex-col items-center justify-center gap-2",
            children: [l.jsx("span", {
                className: "text-xs text-muted",
                children: "N"
            }), l.jsxs("div", {
                className: "grid grid-cols-[56px_200px_56px] grid-rows-[56px_200px_56px] place-items-center gap-2",
                children: [l.jsx("div", {
                    className: `col-start-2 row-start-2 flex h-full w-full items-center justify-center bg-raised ${n === "wrong" ? "shake bg-danger-soft" : ""}`,
                    style: {
                        borderStyle: "solid",
                        borderWidth: 6,
                        borderColor: `${s(Ou)} ${s(Du)} ${s(Iu)} ${s(_u)}`
                    },
                    children: l.jsx("span", {
                        className: "h-10 w-10 rounded-full bg-accent"
                    })
                }, e.check), Th.map(o => {
                    const a = !!(e.here & o.bit);
                    return l.jsx("button", {
                        disabled: a,
                        onMouseDown: () => r(o.dir, o.bit),
                        className: `${o.at} h-12 w-12 rounded border-2 text-lg font-semibold ${a ? "border-line bg-surface text-dim" : "cursor-pointer border-line bg-raised text-fg hover:border-accent"}`,
                        children: o.label
                    }, o.dir)
                }
                )]
            }), l.jsxs("span", {
                className: "font-mono text-xs text-muted",
                children: [e.steps, " ", e.steps === 1 ? "step" : "steps"]
            })]
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${n === "wrong" ? "text-danger" : "text-muted"}`,
            children: n === "wrong" ? "Alarm. You were sent back to the start." : n === "ok" ? "Exit reached. New maze." : "You only see the walls around you. Your partner has the map."
        })]
    })
}
function ub({view: e, role: t, send: n}) {
    return t === "nav" ? l.jsx(ib, {
        v: e
    }) : l.jsx(cb, {
        v: e,
        send: n
    })
}
const Rh = {
    circle: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",
    triangle: "M12 3 21.5 20h-19Z",
    square: "M4 4h16v16H4Z",
    star: "m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8Z",
    diamond: "M12 2.5 21.5 12 12 21.5 2.5 12Z",
    hexagon: "m12 2.5 8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5Z"
};
function ro({shape: e, className: t}) {
    return l.jsx("svg", {
        viewBox: "0 0 24 24",
        className: `fill-none stroke-current ${t ?? ""}`,
        strokeWidth: "2",
        strokeLinejoin: "round",
        children: l.jsx("path", {
            d: Rh[e] ?? Rh.circle
        })
    })
}
const r0 = e => e[0].toUpperCase() + e.slice(1);
function da(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 600);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
function fa({v: e}) {
    return l.jsxs("div", {
        className: "flex w-full items-center justify-between text-xs text-muted",
        children: [l.jsxs("span", {
            children: ["Code ", l.jsxs("span", {
                className: "font-mono text-sm text-accent",
                children: [e.stage, "/", e.stages]
            })]
        }), l.jsx(ee, {
            total: e.lives,
            used: Math.min(e.errors, e.lives),
            label: "Faults"
        })]
    })
}
function s0({length: e, filled: t, digits: n}) {
    return l.jsx("div", {
        className: "flex justify-center gap-2",
        children: Array.from({
            length: e
        }, (r, s) => l.jsx("div", {
            className: `flex h-12 w-10 items-center justify-center rounded border-2 font-mono text-2xl ${s < t ? "border-accent text-fg" : "border-line text-muted"}`,
            children: n ? n[s] ?? "" : s < t ? "•" : ""
        }, s))
    })
}
function ha({flash: e, text: t}) {
    return l.jsx("div", {
        className: `h-5 text-center text-xs ${e === "wrong" ? "text-danger" : "text-muted"}`,
        children: e === "wrong" ? "Code rejected. Start again from the symbols." : e === "ok" ? "Code accepted. New symbols." : t
    })
}
function db({v: e}) {
    const t = da(e.check, e.last);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsx(fa, {
            v: e
        }), l.jsxs("div", {
            className: `flex flex-1 flex-col items-center justify-center gap-6 ${t === "wrong" ? "shake" : ""}`,
            children: [l.jsxs("div", {
                className: "flex items-center gap-3 rounded border-2 border-line bg-raised px-4 py-2",
                children: [l.jsx("span", {
                    className: "text-xs text-muted",
                    children: "Channel"
                }), l.jsx("span", {
                    className: "font-mono text-4xl font-semibold text-accent",
                    children: e.channel
                })]
            }), l.jsx("ol", {
                className: "flex gap-3",
                children: e.symbols.map( (n, r) => l.jsxs("li", {
                    className: "flex w-20 flex-col items-center gap-1.5 rounded border-2 border-line bg-raised py-3",
                    children: [l.jsx("span", {
                        className: "font-mono text-xs text-muted",
                        children: r + 1
                    }), l.jsx(ro, {
                        shape: n,
                        className: "h-10 w-10 text-fg"
                    }), l.jsx("span", {
                        className: "text-xs text-muted",
                        children: r0(n)
                    })]
                }, r))
            }), l.jsx(s0, {
                length: e.length,
                filled: e.typed
            })]
        }, e.check), l.jsx(ha, {
            flash: t,
            text: "Read the channel and the symbols, in order, to the next person in the chain."
        })]
    })
}
function fb({v: e}) {
    const t = da(e.check, e.last);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsx(fa, {
            v: e
        }), l.jsx("div", {
            className: `flex w-full flex-1 flex-col justify-center ${t === "wrong" ? "shake" : ""}`,
            children: l.jsxs("table", {
                className: "w-full border-separate border-spacing-y-1.5 text-sm",
                children: [l.jsx("thead", {
                    children: l.jsxs("tr", {
                        className: "text-xs text-muted",
                        children: [l.jsx("th", {
                            className: "pb-1 text-left font-normal",
                            children: "Symbol"
                        }), l.jsx("th", {
                            className: "pb-1 text-left font-normal",
                            children: "Channel A"
                        }), l.jsx("th", {
                            className: "pb-1 text-left font-normal",
                            children: "Channel B"
                        })]
                    })
                }), l.jsx("tbody", {
                    children: e.table.map(n => l.jsxs("tr", {
                        className: "bg-raised",
                        children: [l.jsx("td", {
                            className: "rounded-l py-2 pl-3",
                            children: l.jsxs("span", {
                                className: "flex items-center gap-2 text-muted",
                                children: [l.jsx(ro, {
                                    shape: n.symbol,
                                    className: "h-5 w-5 text-accent"
                                }), r0(n.symbol)]
                            })
                        }), l.jsx("td", {
                            className: "py-2 font-semibold text-fg",
                            children: n.A
                        }), l.jsx("td", {
                            className: "rounded-r py-2 font-semibold text-fg",
                            children: n.B
                        })]
                    }, n.symbol))
                })]
            })
        }, e.check), l.jsx(ha, {
            flash: t,
            text: "Turn each symbol into its code word for the channel, and pass the words on in order."
        })]
    })
}
function o0({rows: e}) {
    return l.jsxs("div", {
        className: "flex w-full flex-col gap-1",
        children: [l.jsxs("div", {
            className: "grid grid-cols-[1fr_5rem_5rem] px-3 text-[11px] text-muted",
            children: [l.jsx("span", {
                children: "Code word"
            }), l.jsx("span", {
                className: "text-center",
                children: "1st, 3rd, 5th"
            }), l.jsx("span", {
                className: "text-center",
                children: "2nd, 4th, 6th"
            })]
        }), e.map(t => l.jsxs("div", {
            className: "grid grid-cols-[1fr_5rem_5rem] rounded bg-raised px-3 py-1 text-sm",
            children: [l.jsx("span", {
                className: "font-semibold text-fg",
                children: t.word
            }), l.jsx("span", {
                className: "text-center font-mono text-accent",
                children: t.odd
            }), l.jsx("span", {
                className: "text-center font-mono text-accent",
                children: t.even
            })]
        }, t.word))]
    })
}
function hb({v: e}) {
    const t = da(e.check, e.last);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(fa, {
            v: e
        }), l.jsx("div", {
            className: `flex min-h-0 w-full max-w-sm flex-1 flex-col justify-center overflow-y-auto ${t === "wrong" ? "shake" : ""}`,
            children: l.jsx(o0, {
                rows: e.rows ?? []
            })
        }, e.check), l.jsx(ha, {
            flash: t,
            text: "Turn each word into a digit. The column depends on the word's place in the code."
        })]
    })
}
function mb({v: e, send: t}) {
    const n = da(e.check, e.last);
    ne(s => {
        s.repeat || (/^[0-9]$/.test(s.key) ? t({
            type: "digit",
            digit: Number(s.key)
        }) : (s.key === "Backspace" || s.key === "Delete") && t({
            type: "clear"
        }))
    }
    );
    const r = (s, o, a=!1) => l.jsx("button", {
        onMouseDown: o,
        className: `cursor-pointer rounded border-2 border-line bg-raised py-2.5 text-lg font-semibold text-fg hover:border-accent hover:bg-hover ${a ? "text-sm" : ""}`,
        children: s
    }, s);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsx(fa, {
            v: e
        }), l.jsxs("div", {
            className: "flex w-full flex-1 items-center justify-center gap-6",
            children: [l.jsxs("div", {
                className: `flex flex-col items-center gap-4 ${n === "wrong" ? "shake" : ""}`,
                children: [l.jsx(s0, {
                    length: e.length,
                    filled: e.entered.length,
                    digits: e.entered
                }), l.jsxs("div", {
                    className: "grid w-56 grid-cols-3 gap-2",
                    children: [[1, 2, 3, 4, 5, 6, 7, 8, 9].map(s => r(String(s), () => t({
                        type: "digit",
                        digit: s
                    }))), r("Clear", () => t({
                        type: "clear"
                    }), !0), r("0", () => t({
                        type: "digit",
                        digit: 0
                    }))]
                })]
            }, e.check), e.rows && l.jsx("div", {
                className: "w-72",
                children: l.jsx(o0, {
                    rows: e.rows
                })
            })]
        }), l.jsx(ha, {
            flash: n,
            text: e.rows ? "Turn the code words you hear into digits and type them." : "Type the digits you are given, in order."
        })]
    })
}
function pb({view: e, role: t, send: n}) {
    return t === "spotter" ? l.jsx(db, {
        v: e
    }) : t === "linguist" ? l.jsx(fb, {
        v: e
    }) : t === "decoder" ? l.jsx(hb, {
        v: e
    }) : l.jsx(mb, {
        v: e,
        send: n
    })
}
const l0 = "ABCDE"
  , xb = (e, t) => `${l0[Math.floor(e / t)]}${e % t + 1}`;
function gb(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 800);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
function Ah({size: e, cell: t, children: n}) {
    return l.jsxs("div", {
        className: "grid gap-1",
        style: {
            gridTemplateColumns: `16px repeat(${e}, ${t}px)`
        },
        children: [l.jsx("span", {}), Array.from({
            length: e
        }, (r, s) => l.jsx("span", {
            className: "text-center font-mono text-[10px] text-muted",
            children: s + 1
        }, s)), n]
    })
}
function yb({view: e, send: t}) {
    const n = gb(e.check, e.last)
      , [r,s] = h.useState(new Set)
      , o = e.size >= 5 ? 38 : 46
      , a = d => e.players === 2 ? "your partner" : `player ${d}`
      , i = d => e.players === 2 ? "Your partner" : `Player ${d}`;
    h.useEffect( () => s(new Set), [e.stage, e.errors]);
    const c = d => s(f => {
        const m = new Set(f);
        return m.has(d) ? m.delete(d) : m.add(d),
        m
    }
    )
      , u = d => Array.from({
        length: e.size
    }, (f, m) => [l.jsx("span", {
        className: "flex items-center font-mono text-[10px] text-muted",
        children: l0[m]
    }, `r${m}`), ...Array.from({
        length: e.size
    }, (y, g) => d(m * e.size + g))]);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Stage ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [e.stage, "/", e.stages]
                }), e.players > 2 && l.jsxs("span", {
                    className: "ml-3",
                    children: ["You are player ", e.seat]
                })]
            }), l.jsx(ee, {
                total: e.lives,
                used: Math.min(e.errors, e.lives),
                label: "Faults"
            })]
        }), l.jsxs("div", {
            className: `flex flex-1 items-center justify-center gap-8 ${n === "wrong" ? "shake" : ""}`,
            children: [l.jsxs("div", {
                className: "flex flex-col items-center gap-2",
                children: [l.jsx("span", {
                    className: "text-xs text-muted",
                    children: "Your board"
                }), l.jsx(Ah, {
                    size: e.size,
                    cell: o,
                    children: u(d => {
                        const f = e.board.lights[d];
                        return l.jsx("button", {
                            onMouseDown: () => c(d),
                            style: {
                                width: o,
                                height: o
                            },
                            className: `cursor-pointer rounded-sm border-2 ${f ? "border-accent bg-accent" : "border-line bg-raised"} ${r.has(d) ? "outline-2 outline-offset-2 outline-fg" : ""}`
                        }, d)
                    }
                    )
                }), l.jsx("span", {
                    className: `text-xs ${e.board.solved ? "text-accent" : "text-muted"}`,
                    children: e.board.solved ? "Lit. Help the others." : `Pressed by ${a(e.controlledBy)}: ${e.board.presses}/${e.budget}`
                })]
            }), l.jsxs("div", {
                className: "flex flex-col items-center gap-2",
                children: [l.jsxs("span", {
                    className: "text-xs text-muted",
                    children: ["Buttons for ", a(e.controls), "'s board"]
                }), l.jsx(Ah, {
                    size: e.size,
                    cell: o,
                    children: u(d => l.jsx("button", {
                        disabled: e.target.solved,
                        onMouseDown: () => t({
                            type: "press",
                            cell: d
                        }),
                        style: {
                            width: o,
                            height: o
                        },
                        className: `rounded-full border-2 font-mono text-xs ${e.target.solved ? "border-line bg-surface text-dim" : "cursor-pointer border-line bg-raised text-muted hover:border-accent hover:text-fg"}`,
                        children: xb(d, e.size)
                    }, d))
                }), l.jsx("span", {
                    className: `text-xs ${e.target.solved ? "text-accent" : "text-muted"}`,
                    children: e.target.solved ? `${i(e.controls)}'s board is lit.` : `Presses used: ${e.target.presses}/${e.budget}`
                })]
            })]
        }, e.check), l.jsx("div", {
            className: `h-5 text-center text-xs ${n === "wrong" ? "text-danger" : "text-muted"}`,
            children: n === "wrong" ? "A board ran out of presses and was reset." : n === "ok" ? "Every board lit. New boards." : `A press flips the cell and its neighbours. Tell ${a(e.controlledBy)} which cells to press.`
        })]
    })
}
const a0 = 16
  , Wl = e => String(e).padStart(2, "0");
function zu(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 900);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
function Fu(e, t) {
    const n = h.useRef(0)
      , [r,s] = h.useState(e.msLeft ?? e.hopMs);
    return h.useEffect( () => {
        e.msLeft === null && t({
            type: "sync"
        })
    }
    , []),
    h.useEffect( () => {
        if (e.msLeft === null)
            return;
        n.current = oe.now() + e.msLeft,
        s(e.msLeft);
        let o = 0;
        const a = oe.setInterval( () => {
            const i = Math.max(0, n.current - oe.now());
            s(i),
            i === 0 && oe.now() >= o + 400 && (o = oe.now(),
            t({
                type: "sync"
            }))
        }
        , 100);
        return () => oe.clearInterval(a)
    }
    , [e.hop, e.msLeft]),
    e.msLeft === null ? e.hopMs : r
}
function Hu({v: e, left: t}) {
    const n = t < 3e3;
    return l.jsxs("div", {
        className: "flex w-full flex-col gap-2",
        children: [l.jsxs("div", {
            className: "flex items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Jammed ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [e.jams, "/", e.need]
                })]
            }), l.jsxs("span", {
                children: ["Next hop in ", l.jsxs("span", {
                    className: `font-mono text-sm ${n ? "text-warn" : "text-fg"}`,
                    children: [(t / 1e3).toFixed(1), " s"]
                })]
            }), l.jsx(ee, {
                total: e.lives,
                used: Math.min(e.errors, e.lives),
                label: "Faults"
            })]
        }), l.jsx("div", {
            className: "h-1.5 w-full overflow-hidden rounded-full bg-track",
            children: l.jsx("div", {
                className: `h-full ${n ? "bg-warn" : "bg-accent"}`,
                style: {
                    width: `${t / e.hopMs * 100}%`
                }
            })
        })]
    })
}
function Wu({v: e, flash: t, idle: n}) {
    return l.jsx("div", {
        className: `h-5 text-center text-xs ${t === "wrong" ? "text-danger" : "text-muted"}`,
        children: t === "wrong" ? e.why === "miss" ? "The tracker hopped before the lock and checked in." : "Wrong channel. The jammer showed up on the scan." : t === "ok" ? "Jammed. The tracker re-tuned to a new channel." : n
    })
}
function i0({dial: e, flash: t, send: n}) {
    return ne(r => {
        r.key === "ArrowLeft" || r.key === "a" || r.key === "A" ? n({
            type: "turn",
            dir: -1
        }) : r.key === "ArrowRight" || r.key === "d" || r.key === "D" ? n({
            type: "turn",
            dir: 1
        }) : (r.key === " " || r.key === "Enter") && !r.repeat && (r.preventDefault(),
        n({
            type: "lock"
        }))
    }
    ),
    l.jsxs("div", {
        className: "flex flex-col items-center gap-3",
        children: [l.jsx("div", {
            className: "grid grid-cols-8 gap-1.5",
            onWheel: r => n({
                type: "turn",
                dir: r.deltaY > 0 ? 1 : -1
            }),
            children: Array.from({
                length: a0
            }, (r, s) => l.jsx("button", {
                onMouseDown: () => n({
                    type: "tune",
                    value: s
                }),
                className: `h-10 w-12 cursor-pointer rounded border-2 font-mono text-sm font-semibold ${s === e ? "border-accent bg-accent text-accent-ink" : "border-line bg-raised text-fg hover:border-accent"}`,
                children: Wl(s)
            }, s))
        }), l.jsxs("button", {
            onMouseDown: () => n({
                type: "lock"
            }),
            className: `cursor-pointer rounded border-2 px-10 py-2 text-sm font-semibold ${t === "ok" ? "border-fg bg-accent text-accent-ink" : t === "wrong" ? "border-danger bg-danger-soft text-fg" : "border-accent bg-accent text-accent-ink hover:bg-accent-bright"}`,
            children: ["Lock channel ", Wl(e), " (Space)"]
        })]
    })
}
function vb({v: e, send: t}) {
    const n = zu(e.check, e.last)
      , r = Fu(e, t)
      , s = 576
      , o = 200
      , a = s / a0
      , i = 34;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(Hu, {
            v: e,
            left: r
        }), l.jsxs("div", {
            className: "flex w-full items-end justify-between",
            children: [l.jsxs("div", {
                className: "flex gap-6",
                children: [l.jsxs("div", {
                    children: [l.jsx("div", {
                        className: "text-xs text-muted",
                        children: "Channel now"
                    }), l.jsx("div", {
                        className: "font-mono text-4xl font-semibold text-fg",
                        children: Wl(e.channel)
                    })]
                }), l.jsxs("div", {
                    children: [l.jsx("div", {
                        className: "text-xs text-muted",
                        children: "Sync tag"
                    }), l.jsx("div", {
                        className: "font-mono text-4xl font-semibold text-accent",
                        children: e.tag
                    })]
                })]
            }), l.jsxs("div", {
                className: "text-right",
                children: [l.jsx("div", {
                    className: "text-xs text-muted",
                    children: "Tracker serial"
                }), l.jsx("div", {
                    className: "font-mono text-2xl tracking-[0.3em] text-fg",
                    children: e.serial
                })]
            })]
        }), l.jsx("div", {
            className: n === "wrong" ? "shake" : "",
            children: l.jsxs("svg", {
                width: s,
                height: o + 22,
                children: [e.noise.map( (c, u) => {
                    const d = u === e.channel
                      , f = d ? o - i : c * (o - i);
                    return l.jsxs("g", {
                        children: [l.jsx("rect", {
                            x: u * a + 4,
                            y: o - f,
                            width: a - 8,
                            height: f,
                            rx: 2,
                            className: d ? "fill-accent" : "fill-track"
                        }), d && l.jsxs(l.Fragment, {
                            children: [l.jsx("rect", {
                                x: u * a + 2,
                                y: 4,
                                width: a - 4,
                                height: 22,
                                rx: 3,
                                className: "fill-surface stroke-accent",
                                strokeWidth: "1.5"
                            }), l.jsx("text", {
                                x: u * a + a / 2,
                                y: 15,
                                dy: "0.35em",
                                textAnchor: "middle",
                                className: "fill-accent font-mono text-xs font-semibold",
                                children: e.tag
                            })]
                        }), l.jsx("text", {
                            x: u * a + a / 2,
                            y: o + 14,
                            textAnchor: "middle",
                            className: `font-mono text-[10px] ${d ? "fill-accent" : "fill-muted"}`,
                            children: Wl(u)
                        })]
                    }, u)
                }
                ), l.jsx("line", {
                    x1: 0,
                    y1: o,
                    x2: s,
                    y2: o,
                    className: "stroke-line"
                })]
            })
        }, e.check), l.jsx(Wu, {
            v: e,
            flash: n,
            idle: "Read out the channel and the sync tag every hop. The serial is needed for some rules."
        })]
    })
}
function wb({v: e, send: t}) {
    const n = zu(e.check, e.last)
      , r = Fu(e, t);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(Hu, {
            v: e,
            left: r
        }), l.jsxs("div", {
            className: `flex w-full flex-1 flex-col items-center justify-center gap-4 ${n === "wrong" ? "shake" : ""}`,
            children: [l.jsxs("div", {
                className: "w-full max-w-md",
                children: [l.jsx("div", {
                    className: "mb-1.5 text-xs text-muted",
                    children: "Hop table: next channel from the channel now"
                }), l.jsx("div", {
                    className: "flex flex-col gap-1",
                    children: e.card.map(s => l.jsxs("div", {
                        className: "flex items-center gap-3 rounded border border-line bg-raised px-3 py-1.5",
                        children: [l.jsx("span", {
                            className: "w-6 text-center font-mono text-lg font-semibold text-accent",
                            children: s.tag
                        }), l.jsx("span", {
                            className: "text-sm text-fg",
                            children: s.text
                        })]
                    }, s.tag))
                }), l.jsx("div", {
                    className: "mt-1.5 text-xs text-muted",
                    children: "Channels run 00 to 15 and wrap around: 15 + 1 is 00, 00 − 1 is 15, 9 × 2 is 02."
                })]
            }), e.tuner && e.dial !== void 0 && l.jsx(i0, {
                dial: e.dial,
                flash: n,
                send: t
            })]
        }, e.check), l.jsx(Wu, {
            v: e,
            flash: n,
            idle: e.tuner ? "Ask for the channel and tag, work out the next channel, then lock it." : "Ask for the channel and tag, then tell the jammer the next channel."
        })]
    })
}
function kb({v: e, send: t}) {
    const n = zu(e.check, e.last)
      , r = Fu(e, t);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(Hu, {
            v: e,
            left: r
        }), l.jsx("div", {
            className: `flex flex-1 items-center ${n === "wrong" ? "shake" : ""}`,
            children: l.jsx(i0, {
                dial: e.dial,
                flash: n,
                send: t
            })
        }, e.check), l.jsx(Wu, {
            v: e,
            flash: n,
            idle: "Lock the channel the codebook calls out before the tracker hops."
        })]
    })
}
function jb({view: e, role: t, send: n}) {
    return t === "scanner" ? l.jsx(vb, {
        v: e,
        send: n
    }) : t === "jammer" ? l.jsx(kb, {
        v: e,
        send: n
    }) : l.jsx(wb, {
        v: e,
        send: n
    })
}
const bb = {
    personnel: "Staff files",
    cameras: "Camera log"
};
function Sb(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 1200);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
function Nb({mark: e, onSet: t}) {
    return l.jsx("td", {
        className: "border border-line p-0",
        children: l.jsxs("button", {
            onMouseDown: n => n.button === 2 ? t(0) : n.button === 0 && t((e + 1) % 3),
            onContextMenu: n => n.preventDefault(),
            className: `flex h-9 w-11 cursor-pointer items-center justify-center ${e === 2 ? "bg-accent text-accent-ink" : "bg-raised text-muted hover:bg-hover"}`,
            children: [e === 1 && l.jsx("svg", {
                viewBox: "0 0 12 12",
                className: "h-3 w-3 stroke-current",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                children: l.jsx("path", {
                    d: "M2 2l8 8M10 2l-8 8"
                })
            }), e === 2 && l.jsx("svg", {
                viewBox: "0 0 12 12",
                className: "h-3.5 w-3.5 fill-none stroke-current",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: l.jsx("path", {
                    d: "M2 6.5l2.5 2.5L10 3"
                })
            })]
        })
    })
}
function Mb({view: e, role: t, send: n}) {
    const r = e
      , s = Sb(r.check, r.last)
      , o = r.names.length
      , a = (c, u, d) => n({
        type: "mark",
        grid: c,
        cell: u,
        mark: d
    })
      , i = [r.posts, r.shifts];
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Roster ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [r.stage, "/", r.stages]
                })]
            }), l.jsx(ee, {
                total: r.lives,
                used: Math.min(r.errors, r.lives),
                label: "Rejections"
            })]
        }), l.jsxs("div", {
            className: "w-full rounded border border-line bg-raised px-4 py-2.5",
            children: [l.jsxs("div", {
                className: "mb-1.5 text-xs text-muted",
                children: [bb[t] ?? "Clues", ". Your partner has the rest."]
            }), l.jsx("ul", {
                className: "flex flex-col gap-1",
                children: r.clues.map( (c, u) => l.jsx("li", {
                    className: "text-sm leading-snug text-fg",
                    children: c
                }, u))
            })]
        }), l.jsx("div", {
            className: `flex flex-1 items-center ${s === "wrong" ? "shake" : ""}`,
            children: l.jsxs("table", {
                className: "border-collapse",
                children: [l.jsxs("thead", {
                    children: [l.jsxs("tr", {
                        children: [l.jsx("th", {}), l.jsx("th", {
                            colSpan: o,
                            className: "pb-1 text-left text-xs font-medium text-muted",
                            children: "Post"
                        }), l.jsx("th", {}), l.jsx("th", {
                            colSpan: o,
                            className: "pb-1 text-left text-xs font-medium text-muted",
                            children: "Shift start"
                        })]
                    }), l.jsxs("tr", {
                        children: [l.jsx("th", {}), i.map( (c, u) => [u ? l.jsx("th", {
                            className: "w-4"
                        }, "gap") : null, ...c.map( (d, f) => l.jsx("th", {
                            className: "h-9 w-11 pb-1 align-bottom text-[11px] font-medium leading-tight text-fg",
                            children: d
                        }, `${u}${f}`))])]
                    })]
                }), l.jsx("tbody", {
                    children: r.names.map( (c, u) => l.jsxs("tr", {
                        children: [l.jsx("th", {
                            className: "pr-3 text-right text-sm font-medium text-fg",
                            children: c
                        }), [0, 1].map(d => [d ? l.jsx("td", {
                            className: "w-4"
                        }, "gap") : null, ...Array.from({
                            length: o
                        }, (f, m) => l.jsx(Nb, {
                            mark: r.marks[d][u * o + m],
                            onSet: y => a(d, u * o + m, y)
                        }, `${d}${m}`))])]
                    }, c))
                })]
            })
        }, r.check), l.jsxs("div", {
            className: "flex gap-3",
            children: [l.jsx("button", {
                onMouseDown: () => n({
                    type: "clear"
                }),
                className: "w-32 cursor-pointer rounded border-2 border-line bg-raised py-2 text-sm font-semibold text-fg hover:border-accent",
                children: "Clear grid"
            }), l.jsx("button", {
                disabled: !r.ready,
                onMouseDown: () => r.ready && n({
                    type: "submit"
                }),
                className: `w-40 rounded border-2 py-2 text-sm font-semibold ${r.ready ? "cursor-pointer border-accent bg-accent text-accent-ink hover:bg-accent-bright" : "border-line bg-raised text-dim"}`,
                children: "Send roster"
            })]
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${s === "wrong" ? "text-danger" : "text-muted"}`,
            children: s === "wrong" ? "The duty log does not match that roster. Check every tick against the clues." : s === "ok" ? "Roster accepted." : r.ready ? "Every guard has a post and a shift. Send it when you both agree." : "Read your clues to each other. Click a cell to cross it out, again to tick it."
        })]
    })
}
const c0 = "ABCDEFG"
  , Eb = [1, 0, -1, 0]
  , Tb = [0, 1, 0, -1]
  , Ye = 22;
function u0(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 900);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
function d0({v: e}) {
    return l.jsxs("div", {
        className: "flex w-full items-center justify-between text-xs text-muted",
        children: [l.jsxs("span", {
            children: ["Beam ", l.jsxs("span", {
                className: "font-mono text-sm text-accent",
                children: [e.stage, "/", e.stages]
            }), l.jsxs("span", {
                className: "ml-3",
                children: ["Flips ", l.jsxs("span", {
                    className: `font-mono text-sm ${e.flips >= e.budget - 1 ? "text-warn" : "text-fg"}`,
                    children: [e.flips, "/", e.budget]
                })]
            })]
        }), l.jsx(ee, {
            total: e.lives,
            used: Math.min(e.errors, e.lives),
            label: "Faults"
        })]
    })
}
function f0({v: e, children: t}) {
    const n = Math.floor(Math.min(52, 420 / e.w, 300 / e.h))
      , r = e.w * n
      , s = e.h * n
      , o = Ye + e.row * n + n / 2;
    return l.jsxs("svg", {
        width: r + Ye * 2,
        height: s + Ye * 2,
        children: [Array.from({
            length: e.w
        }, (a, i) => l.jsx("text", {
            x: Ye + i * n + n / 2,
            y: Ye - 8,
            textAnchor: "middle",
            className: "fill-muted font-mono text-[10px]",
            children: i + 1
        }, `c${i}`)), Array.from({
            length: e.h
        }, (a, i) => l.jsx("text", {
            x: r + Ye + 8,
            y: Ye + i * n + n / 2,
            dy: "0.35em",
            className: "fill-muted font-mono text-[10px]",
            children: c0[i]
        }, `r${i}`)), l.jsx("rect", {
            x: Ye,
            y: Ye,
            width: r,
            height: s,
            className: "fill-raised stroke-line"
        }), Array.from({
            length: e.w * e.h
        }, (a, i) => {
            const c = i % e.w
              , u = Math.floor(i / e.w);
            return l.jsx("g", {
                children: t(i, Ye + c * n, Ye + u * n, n)
            }, i)
        }
        ), l.jsx("path", {
            d: `M2 ${o - 7}L${Ye - 4} ${o}L2 ${o + 7}Z`,
            className: "fill-accent"
        })]
    })
}
function h0(e) {
    const t = Math.floor(Math.min(52, 420 / e.w, 300 / e.h))
      , n = s => [Ye + s % e.w * t + t / 2, Ye + Math.floor(s / e.w) * t + t / 2];
    return {
        size: t,
        mid: n,
        out: s => {
            const [o,a] = n(s.cell);
            return [o + Eb[s.dir] * (t / 2 + 12), a + Tb[s.dir] * (t / 2 + 12)]
        }
    }
}
const m0 = (e, t) => `${c0[Math.floor(e / t)]}${e % t + 1}`;
function Rb({v: e, send: t}) {
    const n = u0(e.check, e.last)
      , {mid: r, out: s} = h0(e)
      , [o,a] = s(e.receiver)
      , [i,c] = r(e.receiver.cell);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(d0, {
            v: e
        }), l.jsx("div", {
            className: `flex flex-1 items-center ${n === "wrong" ? "shake" : ""}`,
            children: l.jsxs("div", {
                className: "relative",
                children: [l.jsx(f0, {
                    v: e,
                    children: (u, d, f, m) => {
                        const y = e.alarms.includes(u)
                          , g = e.mirrors.includes(u)
                          , p = n === "wrong" && e.tripped === u;
                        return l.jsxs(l.Fragment, {
                            children: [l.jsx("rect", {
                                x: d,
                                y: f,
                                width: m,
                                height: m,
                                className: y ? p ? "fill-danger stroke-line" : "fill-danger-soft stroke-line" : "fill-none stroke-line"
                            }), y && l.jsx("path", {
                                d: `M${d + 8} ${f + 8}L${d + m - 8} ${f + m - 8}M${d + m - 8} ${f + 8}L${d + 8} ${f + m - 8}`,
                                className: "stroke-danger",
                                strokeWidth: "1.5"
                            }), g && l.jsxs("g", {
                                onMouseDown: () => t({
                                    type: "flip",
                                    cell: u
                                }),
                                className: "cursor-pointer",
                                children: [l.jsx("rect", {
                                    x: d + 5,
                                    y: f + 5,
                                    width: m - 10,
                                    height: m - 10,
                                    rx: 4,
                                    className: "fill-surface stroke-accent hover:fill-accent-soft",
                                    strokeWidth: "2"
                                }), l.jsx("text", {
                                    x: d + m / 2,
                                    y: f + m / 2,
                                    dy: "0.35em",
                                    textAnchor: "middle",
                                    className: "pointer-events-none select-none fill-accent font-mono text-[10px]",
                                    children: m0(u, e.w)
                                })]
                            })]
                        })
                    }
                }), l.jsxs("svg", {
                    className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                    children: [l.jsx("line", {
                        x1: i,
                        y1: c,
                        x2: o,
                        y2: a,
                        className: "stroke-accent-line",
                        strokeWidth: "2",
                        strokeDasharray: "3 3"
                    }), l.jsx("circle", {
                        cx: o,
                        cy: a,
                        r: 8,
                        className: n === "ok" ? "fill-accent stroke-accent" : "fill-surface stroke-accent",
                        strokeWidth: "3"
                    })]
                })]
            })
        }, e.check), l.jsx("div", {
            className: `h-5 text-center text-xs ${n === "wrong" ? "text-danger" : "text-muted"}`,
            children: n === "wrong" ? e.why === "budget" ? "Out of flips. The grid went back to the start." : "Alarm tripped. That mirror snapped back." : n === "ok" ? "Beam on target. New grid." : "Click a mirror to flip it. Tell your partner where the receiver and the alarms are."
        })]
    })
}
function Ab({v: e}) {
    const t = u0(e.check, e.last)
      , {mid: n, out: r} = h0(e)
      , s = new Map(e.mirrors.map(i => [i.cell, i.o]))
      , a = [[Ye - 4, n(e.path[0])[1]], ...e.path.map(n), r(e.exit)].map( ([i,c]) => `${i},${c}`).join(" ");
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(d0, {
            v: e
        }), l.jsx("div", {
            className: `flex flex-1 items-center ${t === "wrong" ? "shake" : ""}`,
            children: l.jsxs("div", {
                className: "relative",
                children: [l.jsx(f0, {
                    v: e,
                    children: (i, c, u, d) => {
                        const f = s.get(i);
                        return l.jsxs(l.Fragment, {
                            children: [l.jsx("rect", {
                                x: c,
                                y: u,
                                width: d,
                                height: d,
                                className: "fill-none stroke-line"
                            }), f && l.jsxs(l.Fragment, {
                                children: [l.jsx("line", {
                                    x1: c + 6,
                                    y1: f === "/" ? u + d - 6 : u + 6,
                                    x2: c + d - 6,
                                    y2: f === "/" ? u + 6 : u + d - 6,
                                    className: "stroke-fg",
                                    strokeWidth: "4",
                                    strokeLinecap: "round"
                                }), l.jsx("text", {
                                    x: c + 4,
                                    y: f === "/" ? u + 11 : u + d - 4,
                                    className: "fill-muted font-mono text-[9px]",
                                    children: m0(i, e.w)
                                })]
                            })]
                        })
                    }
                }), l.jsx("svg", {
                    className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                    children: l.jsx("polyline", {
                        points: a,
                        className: t === "wrong" ? "fill-none stroke-danger" : "fill-none stroke-accent",
                        strokeWidth: "3",
                        strokeLinejoin: "round"
                    })
                })]
            })
        }, e.check), l.jsx("div", {
            className: `h-5 text-center text-xs ${t === "wrong" ? "text-danger" : "text-muted"}`,
            children: t === "wrong" ? e.why === "budget" ? "Out of flips. The grid went back to the start." : "Alarm tripped. The last flip was undone." : t === "ok" ? "Beam on target. New grid." : "You see the beam. Ask where it must go, then call out which mirrors to flip."
        })]
    })
}
function Cb({view: e, role: t, send: n}) {
    return t === "operator" ? l.jsx(Rb, {
        v: e,
        send: n
    }) : l.jsx(Ab, {
        v: e
    })
}
const Ch = e => String(e).padStart(2, "0");
function p0(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 900);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
function x0({v: e}) {
    return l.jsxs("div", {
        className: "flex w-full items-center justify-between text-xs text-muted",
        children: [l.jsxs("span", {
            children: ["Packet ", l.jsxs("span", {
                className: "font-mono text-sm text-accent",
                children: [Math.min(e.done + 1, e.total), "/", e.total]
            })]
        }), l.jsx(ee, {
            total: e.lives,
            used: Math.min(e.errors, e.lives),
            label: "Faults"
        })]
    })
}
function g0({v: e, flash: t, idle: n}) {
    return l.jsx("div", {
        className: `h-5 text-center text-xs ${t === "wrong" ? "text-danger" : "text-muted"}`,
        children: t === "wrong" ? e.why === "leak" ? "That was a tracker packet. It got through." : "That packet was the car's. The engine stuttered." : t === "ok" ? "Right call. Next packet." : n
    })
}
const y0 = ({drop: e}) => l.jsx("span", {
    className: `w-12 rounded px-1.5 py-0.5 text-center text-xs font-semibold ${e ? "bg-accent text-accent-ink" : "border border-line text-fg"}`,
    children: e ? "Drop" : "Pass"
});
function Lb({v: e, send: t}) {
    const n = p0(e.check, e.last)
      , r = s => t({
        type: s,
        packet: e.done
    });
    return ne(s => {
        s.repeat || (s.key === "p" || s.key === "P" ? r("pass") : (s.key === "d" || s.key === "D") && r("drop"))
    }
    ),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(x0, {
            v: e
        }), l.jsxs("div", {
            className: `flex flex-1 flex-col items-center justify-center gap-5 ${n === "wrong" ? "shake" : ""}`,
            children: [l.jsxs("div", {
                className: "flex items-end gap-6 rounded border-2 border-line bg-raised px-6 py-4",
                children: [l.jsxs("div", {
                    children: [l.jsx("div", {
                        className: "text-xs text-muted",
                        children: "ID"
                    }), l.jsx("div", {
                        className: "font-mono text-5xl font-semibold tracking-wider text-accent",
                        children: e.packet.id
                    })]
                }), e.packet.data.map( (s, o) => l.jsxs("div", {
                    children: [l.jsxs("div", {
                        className: "text-xs text-muted",
                        children: ["Byte ", o + 1]
                    }), l.jsx("div", {
                        className: "font-mono text-5xl font-semibold text-fg",
                        children: Ch(s)
                    })]
                }, o))]
            }), l.jsxs("div", {
                className: "flex gap-3",
                children: [l.jsx("button", {
                    onMouseDown: () => r("pass"),
                    className: "w-36 cursor-pointer rounded border-2 border-line bg-raised py-2.5 text-sm font-semibold text-fg hover:border-accent",
                    children: "Pass (P)"
                }), l.jsx("button", {
                    onMouseDown: () => r("drop"),
                    className: "w-36 cursor-pointer rounded border-2 border-accent bg-accent py-2.5 text-sm font-semibold text-accent-ink hover:bg-accent-bright",
                    children: "Drop (D)"
                })]
            }), l.jsx("div", {
                className: "flex h-28 w-80 flex-col-reverse gap-1",
                children: [...e.log].reverse().map( (s, o) => l.jsxs("div", {
                    className: `flex items-center gap-3 font-mono text-xs ${o === 0 ? "text-fg" : "text-muted"}`,
                    children: [l.jsx("span", {
                        className: "w-8",
                        children: s.id
                    }), l.jsx("span", {
                        className: "w-16",
                        children: s.data.map(Ch).join(" ")
                    }), l.jsx(y0, {
                        drop: s.drop
                    }), l.jsx("span", {
                        className: s.ok ? "text-muted" : "text-danger",
                        children: s.ok ? "ok" : s.drop ? "stalled the car" : "leaked"
                    })]
                }, e.done - o))
            })]
        }, e.check), l.jsx(g0, {
            v: e,
            flash: n,
            idle: "Read the ID and the bytes to your partner. Pass or drop as they say."
        })]
    })
}
function $b({v: e}) {
    const t = p0(e.check, e.last)
      , n = e.log[e.log.length - 1];
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(x0, {
            v: e
        }), l.jsxs("div", {
            className: `flex w-full flex-1 flex-col justify-center gap-2 ${t === "wrong" ? "shake" : ""}`,
            children: [l.jsx("div", {
                className: "text-xs text-muted",
                children: "Check from the top. The first rule that matches decides."
            }), l.jsx("ol", {
                className: "flex flex-col gap-1",
                children: e.lines.map( (r, s) => l.jsxs("li", {
                    className: "flex items-center gap-3 rounded border border-line bg-raised px-3 py-1.5",
                    children: [l.jsx("span", {
                        className: "w-4 font-mono text-xs text-muted",
                        children: s + 1
                    }), l.jsx("span", {
                        className: "flex-1 text-sm text-fg",
                        children: r.text
                    }), l.jsx("span", {
                        className: "w-28 text-right text-xs text-muted",
                        children: r.label
                    }), l.jsx(y0, {
                        drop: r.drop
                    })]
                }, s))
            }), l.jsx("div", {
                className: "h-4 text-xs text-muted",
                children: n && l.jsxs(l.Fragment, {
                    children: ["Last packet: ", n.drop ? "dropped" : "passed", n.ok ? ", right call" : l.jsx("span", {
                        className: "text-danger",
                        children: ", wrong call"
                    })]
                })
            })]
        }, e.check), l.jsx(g0, {
            v: e,
            flash: t,
            idle: "Ask for the ID and the bytes. Tell your partner to pass or drop."
        })]
    })
}
function Pb({view: e, role: t, send: n}) {
    return t === "tap" ? l.jsx(Lb, {
        v: e,
        send: n
    }) : l.jsx($b, {
        v: e
    })
}
const Ob = "ABCDEFGHIJ"
  , Db = 15;
function Ib(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 1e3);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
function _b({view: e, send: t}) {
    const n = e
      , r = n.size
      , s = Ib(n.check, n.last)
      , [o,a] = h.useState(-1)
      , i = Math.floor(Math.min(34, 300 / r))
      , c = Math.max(...n.clues.map(v => v.length))
      , u = n.kind === "rows"
      , d = c * Db + 8
      , f = v => Number(n.cells[v])
      , m = v => Array.from({
        length: r
    }, (x, w) => u ? v * r + w : w * r + v)
      , y = v => m(v).filter(x => f(x) === 2).length === n.clues[v].reduce( (x, w) => x + w, 0)
      , g = o < 0 ? -1 : u ? Math.floor(o / r) : o % r
      , p = (v, x) => {
        const w = f(v);
        w !== 2 && (x === 0 ? t({
            type: "mark",
            cell: v,
            mark: 2
        }) : x === 2 && t({
            type: "mark",
            cell: v,
            mark: w === 1 ? 0 : 1
        }))
    }
      , k = v => y(v) ? "text-dim" : v === g ? "text-accent" : "text-fg";
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Feed ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [n.stage, "/", n.stages]
                })]
            }), l.jsx(ee, {
                total: n.lives,
                used: Math.min(n.errors, n.lives),
                label: "Bad pixels"
            })]
        }), l.jsx("div", {
            className: `flex flex-1 items-center ${s === "wrong" ? "shake" : ""}`,
            children: l.jsxs("div", {
                className: "grid",
                style: {
                    gridTemplateColumns: `${u ? d : 0}px 20px repeat(${r}, ${i}px)`,
                    gridTemplateRows: `${u ? 0 : d}px 18px repeat(${r}, ${i}px)`
                },
                onMouseLeave: () => a(-1),
                children: [l.jsx("div", {}), l.jsx("div", {}), Array.from({
                    length: r
                }, (v, x) => l.jsx("div", {
                    className: `flex flex-col items-center justify-end pb-1 font-mono text-sm leading-[15px] ${u ? "" : k(x)}`,
                    children: !u && n.clues[x].map( (w, b) => l.jsx("span", {
                        children: w
                    }, b))
                }, `cc${x}`)), l.jsx("div", {}), l.jsx("div", {}), Array.from({
                    length: r
                }, (v, x) => l.jsx("div", {
                    className: `text-center text-[10px] ${o >= 0 && o % r === x ? "text-accent" : "text-muted"}`,
                    children: x + 1
                }, `cn${x}`)), Array.from({
                    length: r
                }, (v, x) => [l.jsx("div", {
                    className: `flex items-center justify-end gap-1.5 pr-2 font-mono text-sm ${u ? k(x) : ""}`,
                    children: u && n.clues[x].map( (w, b) => l.jsx("span", {
                        children: w
                    }, b))
                }, `rc${x}`), l.jsx("div", {
                    className: `flex items-center justify-center text-[10px] ${o >= 0 && Math.floor(o / r) === x ? "text-accent" : "text-muted"}`,
                    children: Ob[x]
                }, `rn${x}`), ...Array.from({
                    length: r
                }, (w, b) => {
                    const M = x * r + b
                      , N = f(M)
                      , j = s === "wrong" && n.tripped === M;
                    return l.jsx("button", {
                        onMouseDown: S => p(M, S.button),
                        onContextMenu: S => S.preventDefault(),
                        onMouseEnter: () => a(M),
                        className: `flex items-center justify-center border-line ${b % 5 === 0 && b ? "border-l-2" : "border-l"} ${x % 5 === 0 && x ? "border-t-2" : "border-t"} ${b === r - 1 ? "border-r" : ""} ${x === r - 1 ? "border-b" : ""} ${N === 2 ? "bg-accent" : j ? "cursor-pointer bg-danger-soft text-danger" : "cursor-pointer bg-raised text-muted hover:bg-hover"}`,
                        children: N === 1 && l.jsx("svg", {
                            viewBox: "0 0 12 12",
                            className: "h-2.5 w-2.5 stroke-current",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            children: l.jsx("path", {
                                d: "M2 2l8 8M10 2l-8 8"
                            })
                        })
                    }, M)
                }
                )])]
            })
        }, n.check), l.jsx("div", {
            className: `h-5 text-center text-xs ${s === "wrong" ? "text-danger" : "text-muted"}`,
            children: s === "wrong" ? "That pixel is empty in the picture. It is marked empty now." : s === "ok" ? "Feed decoded." : u ? "You have the row clues. Your partner has the columns. Left click fills, right click marks empty." : "You have the column clues. Your partner has the rows. Left click fills, right click marks empty."
        })]
    })
}
function zb(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 900);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
const li = 190;
function Fb({g: e, max: t, flash: n}) {
    const r = a => li - Math.min(t, Math.max(0, a)) / t * li
      , s = e.value >= e.lo && e.value <= e.hi
      , o = e.burst && n;
    return l.jsxs("div", {
        className: "flex flex-col items-center gap-1.5",
        children: [l.jsx("span", {
            className: "font-mono text-xs text-muted",
            children: e.label
        }), l.jsxs("div", {
            className: `relative w-12 overflow-hidden rounded-sm border-2 ${o ? "border-danger bg-danger-soft" : "border-line bg-raised"}`,
            style: {
                height: li + 4
            },
            children: [l.jsx("div", {
                className: "absolute inset-x-0 border-y border-accent bg-accent-soft",
                style: {
                    top: r(e.hi + .5),
                    height: r(e.lo - .5) - r(e.hi + .5)
                }
            }), l.jsx("div", {
                className: `absolute inset-x-0 bottom-0 ${s ? "bg-accent" : "bg-track"}`,
                style: {
                    top: r(e.value)
                }
            }), l.jsx("div", {
                className: "absolute inset-x-0 h-0.5 bg-fg",
                style: {
                    top: r(e.value) - 1
                }
            })]
        }), l.jsx("span", {
            className: `font-mono text-lg font-semibold ${o ? "text-danger" : s ? "text-accent" : "text-fg"}`,
            children: e.value
        }), l.jsxs("span", {
            className: "font-mono text-[10px] text-muted",
            children: ["band ", e.lo, "–", e.hi]
        })]
    })
}
function Hb({view: e, send: t}) {
    const n = zb(e.check, e.last)
      , r = s => s === e.seat ? "yours" : e.players === 2 ? "partner's" : `player ${s}`;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Stage ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [e.stage, "/", e.stages]
                }), e.players > 2 && l.jsxs("span", {
                    className: "ml-3",
                    children: ["You are player ", e.seat]
                })]
            }), l.jsx(ee, {
                total: e.lives,
                used: Math.min(e.errors, e.lives),
                label: "Bursts"
            })]
        }), l.jsxs("div", {
            className: `flex w-full flex-1 items-center justify-center gap-8 ${n === "wrong" ? "shake" : ""}`,
            children: [l.jsx("div", {
                className: "flex gap-4",
                children: e.gauges.map(s => l.jsx(Fb, {
                    g: s,
                    max: e.max,
                    flash: n === "wrong"
                }, s.id))
            }), l.jsx("div", {
                className: "flex flex-col gap-2",
                children: e.valves.map( (s, o) => l.jsxs("div", {
                    className: "flex w-64 flex-col gap-2 rounded border-2 border-line bg-raised px-3 py-2",
                    children: [l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [l.jsxs("span", {
                            className: "text-sm font-semibold text-fg",
                            children: ["Valve ", o + 1]
                        }), l.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [l.jsx("button", {
                                disabled: s.pos <= 0,
                                onMouseDown: () => t({
                                    type: "turn",
                                    valve: s.id,
                                    dir: -1
                                }),
                                className: `h-7 w-7 rounded border-2 text-sm font-semibold ${s.pos > 0 ? "cursor-pointer border-line text-fg hover:border-accent" : "border-line text-dim"}`,
                                children: "−"
                            }), l.jsx("div", {
                                className: "flex gap-0.5",
                                children: Array.from({
                                    length: e.steps
                                }, (a, i) => l.jsx("span", {
                                    className: `h-3 w-2 rounded-sm ${i < s.pos ? "bg-accent" : "bg-track"}`
                                }, i))
                            }), l.jsx("button", {
                                disabled: s.pos >= e.steps,
                                onMouseDown: () => t({
                                    type: "turn",
                                    valve: s.id,
                                    dir: 1
                                }),
                                className: `h-7 w-7 rounded border-2 text-sm font-semibold ${s.pos < e.steps ? "cursor-pointer border-line text-fg hover:border-accent" : "border-line text-dim"}`,
                                children: "+"
                            })]
                        })]
                    }), l.jsx("ul", {
                        className: "flex flex-col gap-0.5 text-xs",
                        children: s.feeds.map( (a, i) => l.jsxs("li", {
                            className: "flex justify-between text-muted",
                            children: [l.jsxs("span", {
                                children: [l.jsx("span", {
                                    className: "font-mono text-fg",
                                    children: a.gauge
                                }), " (", r(a.owner), ")"]
                            }), l.jsxs("span", {
                                className: "font-mono text-fg",
                                children: [a.delta > 0 ? "▲" : "▼", " ", Math.abs(a.delta), " per +"]
                            })]
                        }, i))
                    })]
                }, s.id))
            })]
        }, e.check), l.jsx("div", {
            className: `h-5 text-center text-xs ${n === "wrong" ? "text-danger" : "text-muted"}`,
            children: n === "wrong" ? `A gauge left 0–${e.max} and burst. Every valve went back.` : n === "ok" ? "Every gauge in band. New pressures." : "Every gauge must sit in its band at once. Your valves move gauges you cannot see."
        })]
    })
}
function v0(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 900);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
function w0({v: e}) {
    return l.jsxs("div", {
        className: "flex w-full items-center justify-between text-xs text-muted",
        children: [l.jsxs("span", {
            children: ["Relay ", l.jsxs("span", {
                className: "font-mono text-sm text-accent",
                children: [e.stage, "/", e.stages]
            })]
        }), l.jsx(ee, {
            total: e.lives,
            used: Math.min(e.errors, e.lives),
            label: "Faults"
        })]
    })
}
const k0 = e => e === "overload" ? "Overload. Cards returned, total back to the start." : "Wrong total. Cards returned, total back to the start.";
function Wb({v: e, send: t}) {
    const n = v0(e.check, e.last)
      , r = s => {
        e.cards[s] && !e.cards[s].used && t({
            type: "play",
            card: s
        })
    }
    ;
    return ne(s => {
        if (s.repeat)
            return;
        const o = Number(s.key);
        Number.isInteger(o) && o >= 1 && r(o - 1)
    }
    ),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(w0, {
            v: e
        }), l.jsx("div", {
            className: `flex flex-1 flex-wrap content-center items-center justify-center gap-3 ${n === "wrong" ? "shake" : ""}`,
            children: e.cards.map( (s, o) => l.jsxs("button", {
                disabled: s.used,
                onMouseDown: () => r(o),
                className: `flex h-28 w-20 flex-col items-center justify-between rounded border-2 py-2 ${s.used ? "border-line bg-surface text-dim" : "cursor-pointer border-line bg-raised text-fg hover:border-accent"}`,
                children: [l.jsx("span", {
                    className: "self-start pl-2 font-mono text-[10px] text-muted",
                    children: o + 1
                }), l.jsx("span", {
                    className: "font-mono text-3xl font-semibold",
                    children: s.label
                }), l.jsx("span", {
                    className: "text-[10px] text-muted",
                    children: s.used ? "played" : ""
                })]
            }, o))
        }, e.check), l.jsx("div", {
            className: `h-5 text-center text-xs ${n === "wrong" ? "text-danger" : "text-muted"}`,
            children: n === "wrong" ? k0(e.why) : n === "ok" ? "Relay balanced. New hand." : "Read your cards out. Play them when your partner asks."
        })]
    })
}
function Ub({v: e, send: t}) {
    const n = v0(e.check, e.last);
    ne(o => {
        o.repeat || (o.key === "Enter" || o.key === " " ? (o.preventDefault(),
        t({
            type: "submit"
        })) : (o.key === "r" || o.key === "R" || o.key === "Backspace") && t({
            type: "reset"
        }))
    }
    );
    const r = o => `${Math.min(100, Math.max(0, o / e.cap * 100))}%`
      , s = e.total === e.target;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(w0, {
            v: e
        }), l.jsxs("div", {
            className: `flex w-full flex-1 flex-col items-center justify-center gap-5 ${n === "wrong" ? "shake" : ""}`,
            children: [l.jsxs("div", {
                className: "flex items-end gap-8",
                children: [l.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [l.jsx("span", {
                        className: "text-xs text-muted",
                        children: "Total"
                    }), l.jsx("span", {
                        className: `font-mono text-6xl font-semibold ${s ? "text-accent" : "text-fg"}`,
                        children: e.total
                    })]
                }), l.jsxs("div", {
                    className: "flex flex-col items-center pb-1",
                    children: [l.jsx("span", {
                        className: "text-xs text-muted",
                        children: "Target"
                    }), l.jsx("span", {
                        className: "font-mono text-4xl font-semibold text-fg",
                        children: e.target
                    })]
                })]
            }), l.jsxs("div", {
                className: "w-full max-w-sm",
                children: [l.jsxs("div", {
                    className: "relative h-3 rounded-sm bg-track",
                    children: [l.jsx("div", {
                        className: "absolute inset-y-0 left-0 rounded-sm bg-accent-soft",
                        style: {
                            width: r(e.total)
                        }
                    }), l.jsx("div", {
                        className: "absolute -inset-y-1 w-0.5 bg-fg",
                        style: {
                            left: r(e.target)
                        }
                    }), l.jsx("div", {
                        className: "absolute -inset-y-1 w-1 rounded-sm bg-accent",
                        style: {
                            left: `calc(${r(e.total)} - 2px)`
                        }
                    })]
                }), l.jsxs("div", {
                    className: "mt-1 flex justify-between font-mono text-[10px] text-muted",
                    children: [l.jsx("span", {
                        children: "0"
                    }), l.jsxs("span", {
                        className: "text-danger",
                        children: ["overload above ", e.cap]
                    })]
                })]
            }), l.jsxs("div", {
                className: "flex min-h-8 flex-wrap items-center justify-center gap-1.5 font-mono text-sm",
                children: [l.jsxs("span", {
                    className: "rounded border border-line px-2 py-1 text-muted",
                    children: ["start ", e.start]
                }), e.played.map( (o, a) => l.jsx("span", {
                    className: "rounded bg-raised px-2 py-1 text-fg",
                    children: o
                }, a)), l.jsxs("span", {
                    className: "px-1 text-xs text-muted",
                    children: [e.left, " in hand"]
                })]
            })]
        }, e.check), l.jsxs("div", {
            className: "flex items-center gap-2",
            children: [l.jsx("button", {
                disabled: !e.played.length,
                onMouseDown: () => t({
                    type: "reset"
                }),
                className: `rounded border-2 px-4 py-2 text-sm font-semibold ${e.played.length ? "cursor-pointer border-line bg-raised text-fg hover:border-accent" : "border-line bg-surface text-dim"}`,
                children: "Take back (R)"
            }), l.jsx("button", {
                disabled: !e.played.length,
                onMouseDown: () => t({
                    type: "submit"
                }),
                className: `rounded border-2 px-8 py-2 text-sm font-semibold ${n === "ok" ? "border-fg bg-accent text-accent-ink" : e.played.length ? "cursor-pointer border-accent bg-accent text-accent-ink hover:bg-accent-bright" : "border-line bg-surface text-dim"}`,
                children: "Submit (Enter)"
            })]
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${n === "wrong" ? "text-danger" : "text-muted"}`,
            children: n === "wrong" ? k0(e.why) : n === "ok" ? "Relay balanced. New target." : "Your partner holds the cards. Ask for the ones that reach the target."
        })]
    })
}
function Bb({view: e, role: t, send: n}) {
    return t === "hand" ? l.jsx(Wb, {
        v: e,
        send: n
    }) : l.jsx(Ub, {
        v: e,
        send: n
    })
}
const Vb = ["1st", "2nd", "3rd", "4th", "5th", "6th"]
  , j0 = e => e[0].toUpperCase() + e.slice(1);
function b0(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 450);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
function S0({length: e, filled: t, digits: n}) {
    return l.jsx("div", {
        className: "flex justify-center gap-2",
        children: Array.from({
            length: e
        }, (r, s) => l.jsx("div", {
            className: `flex h-12 w-10 items-center justify-center rounded border-2 font-mono text-2xl ${s < t ? "border-accent text-fg" : "border-line text-muted"}`,
            children: n ? n[s] ?? "" : s < t ? "•" : ""
        }, s))
    })
}
function N0({v: e, label: t}) {
    return l.jsxs("div", {
        className: "flex w-full items-center justify-between text-xs text-muted",
        children: [l.jsxs("span", {
            children: [t, " ", l.jsxs("span", {
                className: "font-mono text-sm text-accent",
                children: [e.stage, "/", e.stages]
            })]
        }), l.jsx(ee, {
            total: e.lives,
            used: Math.min(e.errors, e.lives),
            label: "Jams"
        })]
    })
}
function Yb({view: e, send: t}) {
    const n = b0(e.check, e.last);
    ne(s => {
        s.repeat || (/^[0-9]$/.test(s.key) ? t({
            type: "digit",
            digit: Number(s.key)
        }) : (s.key === "Backspace" || s.key === "Delete") && t({
            type: "clear"
        }))
    }
    );
    const r = (s, o, a=!1) => l.jsx("button", {
        onMouseDown: o,
        className: `cursor-pointer rounded border-2 border-line bg-raised py-2.5 text-lg font-semibold text-fg hover:border-accent hover:bg-hover ${a ? "text-sm" : ""}`,
        children: s
    }, s);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-4 p-4",
        children: [l.jsx(N0, {
            v: e,
            label: "Lock"
        }), l.jsxs("div", {
            className: `flex w-72 items-center gap-4 rounded border-2 px-5 py-3 ${n === "wrong" ? "shake border-danger" : n === "ok" ? "border-accent" : "border-line"} bg-raised`,
            children: [l.jsx(ro, {
                shape: e.shape,
                className: "h-12 w-12 text-accent"
            }), l.jsxs("div", {
                className: "flex flex-col",
                children: [l.jsx("span", {
                    className: "text-xs text-muted",
                    children: j0(e.shape)
                }), l.jsx("span", {
                    className: "font-mono text-4xl font-semibold text-fg",
                    children: e.screen
                })]
            })]
        }, e.check), l.jsx(S0, {
            length: e.length,
            filled: e.entered.length,
            digits: e.entered
        }), l.jsxs("div", {
            className: "grid w-60 grid-cols-3 gap-2",
            children: [[1, 2, 3, 4, 5, 6, 7, 8, 9].map(s => r(String(s), () => t({
                type: "digit",
                digit: s
            }))), r("Clear", () => t({
                type: "clear"
            }), !0), r("0", () => t({
                type: "digit",
                digit: 0
            }))]
        }), l.jsx("div", {
            className: "text-center text-xs text-muted",
            children: "Tell your partner the shape and the number. Type the code they read back."
        })]
    })
}
function Gb({view: e}) {
    const t = b0(e.check, e.last);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(N0, {
            v: e,
            label: "Lock"
        }), l.jsx("div", {
            className: t === "wrong" ? "shake" : "",
            children: l.jsx(S0, {
                length: e.length,
                filled: e.typed
            })
        }, e.check), l.jsx("div", {
            className: "grid min-h-0 w-full flex-1 grid-cols-2 gap-2 overflow-y-auto",
            children: e.cards.map(n => l.jsxs("div", {
                className: "rounded border-2 border-line bg-raised p-3",
                children: [l.jsxs("div", {
                    className: "mb-2 flex items-center gap-2 text-sm font-semibold text-accent",
                    children: [l.jsx(ro, {
                        shape: n.shape,
                        className: "h-5 w-5"
                    }), j0(n.shape)]
                }), l.jsx("ol", {
                    className: "flex flex-col gap-1 text-xs text-fg",
                    children: n.lines.map( (r, s) => l.jsxs("li", {
                        className: "flex gap-2",
                        children: [l.jsx("span", {
                            className: "w-7 shrink-0 text-muted",
                            children: Vb[s]
                        }), l.jsx("span", {
                            children: r
                        })]
                    }, s))
                })]
            }, n.shape))
        }), l.jsx("div", {
            className: "text-center text-xs text-muted",
            children: "Ask your partner for the shape and the number, then read them each digit."
        })]
    })
}
function Kb(e) {
    return e.role === "lock" ? l.jsx(Yb, {
        ...e
    }) : l.jsx(Gb, {
        ...e
    })
}
const M0 = "ABCDEFGHIJKLM"
  , qb = ["east", "south", "west", "north"]
  , Xb = [1, 0, -1, 0]
  , Qb = [0, 1, 0, -1]
  , $t = 20
  , Zb = (e, t) => `${M0[Math.floor(e / t)]}${e % t + 1}`;
function E0(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 900);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
function T0({v: e, children: t}) {
    return l.jsxs("div", {
        className: "flex w-full items-center justify-between text-xs text-muted",
        children: [l.jsxs("span", {
            children: ["Trace ", l.jsxs("span", {
                className: "font-mono text-sm text-accent",
                children: [e.stage, "/", e.stages]
            }), t]
        }), l.jsx(ee, {
            total: e.lives,
            used: Math.min(e.errors, e.lives),
            label: "Flags"
        })]
    })
}
function R0({v: e, flash: t, idle: n}) {
    return l.jsx("div", {
        className: `h-5 text-center text-xs ${t === "wrong" ? "text-danger" : "text-muted"}`,
        children: t === "wrong" ? e.why === "camera" ? "A traffic camera saw no car there. Move rejected." : e.why === "oneway" ? "Wrong way down a one-way street. Move rejected." : "Too far in a straight line, too fast. Move rejected." : t === "ok" ? "Trace parked at the decoy. New map." : n
    })
}
function A0({v: e, cell: t, over: n}) {
    const r = Math.floor(Math.min(34, 520 / e.w, 330 / e.h))
      , s = i => [$t + i % e.w * r + r / 2, $t + Math.floor(i / e.w) * r + r / 2]
      , [o,a] = s(e.dot);
    return l.jsxs("svg", {
        width: e.w * r + $t * 2,
        height: e.h * r + $t * 2,
        children: [Array.from({
            length: e.w
        }, (i, c) => l.jsx("text", {
            x: $t + c * r + r / 2,
            y: $t - 7,
            textAnchor: "middle",
            className: "fill-muted font-mono text-[10px]",
            children: c + 1
        }, `c${c}`)), Array.from({
            length: e.h
        }, (i, c) => l.jsx("text", {
            x: $t - 7,
            y: $t + c * r + r / 2,
            dy: "0.35em",
            textAnchor: "end",
            className: "fill-muted font-mono text-[10px]",
            children: M0[c]
        }, `r${c}`)), Array.from({
            length: e.w * e.h
        }, (i, c) => {
            const u = $t + c % e.w * r
              , d = $t + Math.floor(c / e.w) * r
              , f = e.roads[c] === "1";
            return l.jsxs("g", {
                children: [l.jsx("rect", {
                    x: u,
                    y: d,
                    width: r,
                    height: r,
                    className: f ? "fill-raised stroke-surface" : "fill-surface"
                }), f && t(c, u, d, r)]
            }, c)
        }
        ), e.trail.map( (i, c) => {
            const [u,d] = s(i);
            return l.jsx("circle", {
                cx: u,
                cy: d,
                r: 2.5,
                className: "pointer-events-none fill-accent-line"
            }, c)
        }
        ), l.jsx("circle", {
            cx: o,
            cy: a,
            r: r * .3,
            className: "pointer-events-none fill-accent stroke-accent-ink",
            strokeWidth: "2"
        }), n]
    })
}
function Jb({v: e, send: t}) {
    const n = E0(e.check, e.last)
      , r = o => t({
        type: "move",
        dir: o
    });
    ne(o => {
        const a = {
            ArrowRight: 0,
            d: 0,
            D: 0,
            ArrowDown: 1,
            s: 1,
            S: 1,
            ArrowLeft: 2,
            a: 2,
            A: 2,
            ArrowUp: 3,
            w: 3,
            W: 3
        }[o.key];
        a !== void 0 && (o.preventDefault(),
        r(a))
    }
    );
    const s = new Map;
    for (let o = 0; o < 4; o++) {
        const a = e.dot % e.w + Xb[o]
          , i = Math.floor(e.dot / e.w) + Qb[o];
        a >= 0 && i >= 0 && a < e.w && i < e.h && e.roads[i * e.w + a] === "1" && s.set(i * e.w + a, o)
    }
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(T0, {
            v: e,
            children: l.jsxs("span", {
                className: "ml-3",
                children: ["Decoy lot ", l.jsx("span", {
                    className: "font-mono text-sm text-fg",
                    children: Zb(e.dest, e.w)
                })]
            })
        }), l.jsx("div", {
            className: `flex flex-1 items-center ${n === "wrong" ? "shake" : ""}`,
            children: l.jsx(A0, {
                v: e,
                cell: (o, a, i, c) => l.jsxs(l.Fragment, {
                    children: [o === e.dest && l.jsxs(l.Fragment, {
                        children: [l.jsx("rect", {
                            x: a + 3,
                            y: i + 3,
                            width: c - 6,
                            height: c - 6,
                            rx: 3,
                            className: "fill-accent-soft stroke-accent",
                            strokeWidth: "2"
                        }), l.jsx("text", {
                            x: a + c / 2,
                            y: i + c / 2,
                            dy: "0.35em",
                            textAnchor: "middle",
                            className: "fill-accent text-xs font-semibold",
                            children: "P"
                        })]
                    }), s.has(o) && l.jsx("rect", {
                        x: a + 1,
                        y: i + 1,
                        width: c - 2,
                        height: c - 2,
                        onMouseDown: () => r(s.get(o)),
                        className: "cursor-pointer fill-transparent stroke-accent-line hover:fill-accent-faint",
                        strokeWidth: "1.5"
                    })]
                })
            })
        }, e.check), l.jsx(R0, {
            v: e,
            flash: n,
            idle: "Move with WASD, the arrow keys or a click. Ask your partner what dispatch would flag."
        })]
    })
}
function eS({x: e, y: t, size: n, dir: r}) {
    const s = e + n / 2
      , o = t + n / 2
      , a = n * .28;
    return l.jsx("path", {
        d: `M${-a} ${-a * .7}L${a * .6} 0L${-a} ${a * .7}`,
        transform: `translate(${s} ${o}) rotate(${r * 90})`,
        className: "pointer-events-none fill-none stroke-fg",
        strokeWidth: "2",
        strokeLinejoin: "round"
    })
}
function tS({v: e}) {
    const t = E0(e.check, e.last)
      , n = new Map(e.oneways.map(s => [s.cell, s.dir]))
      , r = e.streak >= e.straight;
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(T0, {
            v: e,
            children: l.jsxs("span", {
                className: "ml-3",
                children: ["Straight run", " ", l.jsxs("span", {
                    className: `font-mono text-sm ${r ? "text-warn" : "text-fg"}`,
                    children: [e.streak, "/", e.straight]
                }), e.heading >= 0 && l.jsx("span", {
                    className: "ml-1",
                    children: qb[e.heading]
                })]
            })
        }), l.jsx("div", {
            className: `flex flex-1 items-center ${t === "wrong" ? "shake" : ""}`,
            children: l.jsx(A0, {
                v: e,
                cell: (s, o, a, i) => l.jsxs(l.Fragment, {
                    children: [e.cameras.includes(s) && l.jsxs(l.Fragment, {
                        children: [l.jsx("rect", {
                            x: o + 2,
                            y: a + 2,
                            width: i - 4,
                            height: i - 4,
                            className: t === "wrong" && e.tripped === s ? "fill-danger" : "fill-danger-soft"
                        }), l.jsx("rect", {
                            x: o + i * .22,
                            y: a + i * .34,
                            width: i * .56,
                            height: i * .36,
                            rx: 2,
                            className: "pointer-events-none fill-none stroke-danger",
                            strokeWidth: "1.5"
                        }), l.jsx("circle", {
                            cx: o + i / 2,
                            cy: a + i * .52,
                            r: i * .1,
                            className: "pointer-events-none fill-danger"
                        })]
                    }), n.has(s) && l.jsx(eS, {
                        x: o,
                        y: a,
                        size: i,
                        dir: n.get(s)
                    }), t === "wrong" && e.tripped === s && !e.cameras.includes(s) && l.jsx("rect", {
                        x: o + 1,
                        y: a + 1,
                        width: i - 2,
                        height: i - 2,
                        className: "pointer-events-none fill-none stroke-danger",
                        strokeWidth: "2"
                    })]
                })
            })
        }, e.check), l.jsx(R0, {
            v: e,
            flash: t,
            idle: `Ask for the decoy lot. Avoid cameras, wrong ways and straight runs over ${e.straight}.`
        })]
    })
}
function nS({view: e, role: t, send: n}) {
    return t === "spoofer" ? l.jsx(Jb, {
        v: e,
        send: n
    }) : l.jsx(tS, {
        v: e
    })
}
const es = 260
  , ai = 108;
function Lh(e, t) {
    const [n,r] = h.useState(!1)
      , s = h.useRef(e);
    return h.useEffect( () => {
        if (e === s.current)
            return;
        s.current = e,
        r(!0);
        const o = setTimeout( () => r(!1), t);
        return () => clearTimeout(o)
    }
    , [e]),
    n
}
function rS({value: e, ticks: t, onSet: n}) {
    const r = es / 2
      , s = (i, c) => {
        const u = i / t * Math.PI * 2 - Math.PI / 2;
        return [r + Math.cos(u) * c, r + Math.sin(u) * c]
    }
      , [o,a] = s(e, ai - 30);
    return l.jsxs("svg", {
        width: es,
        height: es,
        viewBox: `0 0 ${es} ${es}`,
        children: [l.jsx("circle", {
            cx: r,
            cy: r,
            r: ai - 16,
            className: "fill-raised stroke-line",
            strokeWidth: "2"
        }), Array.from({
            length: t
        }, (i, c) => {
            const [u,d] = s(c, ai)
              , f = c === e;
            return l.jsxs("g", {
                onMouseDown: () => n(c),
                className: "cursor-pointer",
                children: [l.jsx("circle", {
                    cx: u,
                    cy: d,
                    r: 11,
                    className: f ? "fill-accent" : "fill-surface stroke-line hover:stroke-accent",
                    strokeWidth: "1.5"
                }), l.jsx("text", {
                    x: u,
                    y: d,
                    dy: "0.35em",
                    textAnchor: "middle",
                    className: `select-none font-mono text-[10px] ${f ? "fill-accent-ink" : "fill-muted"}`,
                    children: c
                })]
            }, c)
        }
        ), l.jsx("line", {
            x1: r,
            y1: r,
            x2: o,
            y2: a,
            className: "stroke-accent",
            strokeWidth: "4",
            strokeLinecap: "round"
        }), l.jsx("circle", {
            cx: r,
            cy: r,
            r: 7,
            className: "fill-accent"
        })]
    })
}
function sS({view: e, send: t}) {
    const n = Lh(e.lockSeq, e.window)
      , r = Lh(e.partnerLockSeq, e.window)
      , [s,o] = h.useState(null);
    return h.useEffect( () => {
        if (!e.check || !e.last)
            return;
        o(e.last),
        W(e.last === "ok" ? "correct" : "wrong", .4);
        const a = setTimeout( () => o(null), 450);
        return () => clearTimeout(a)
    }
    , [e.check]),
    ne(a => {
        a.key === "ArrowLeft" || a.key === "a" || a.key === "A" ? t({
            type: "turn",
            dir: -1
        }) : a.key === "ArrowRight" || a.key === "d" || a.key === "D" ? t({
            type: "turn",
            dir: 1
        }) : (a.key === " " || a.key === "Enter") && !a.repeat && (a.preventDefault(),
        t({
            type: "lock"
        }))
    }
    ),
    l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsxs("div", {
            className: "flex w-full items-center justify-between text-xs text-muted",
            children: [l.jsxs("span", {
                children: ["Stage ", l.jsxs("span", {
                    className: "font-mono text-sm text-accent",
                    children: [e.stage, "/", e.stages]
                })]
            }), l.jsx(ee, {
                total: e.lives,
                used: Math.min(e.errors, e.lives),
                label: "Jams"
            })]
        }), l.jsxs("div", {
            className: "flex w-full items-center justify-center gap-6",
            children: [l.jsx("div", {
                className: `rounded-full ${s === "wrong" ? "shake" : ""}`,
                onWheel: a => t({
                    type: "turn",
                    dir: a.deltaY > 0 ? 1 : -1
                }),
                children: l.jsx(rS, {
                    value: e.dial,
                    ticks: e.ticks,
                    onSet: a => t({
                        type: "set",
                        value: a
                    })
                })
            }, e.check), l.jsxs("div", {
                className: "flex w-44 flex-col gap-3",
                children: [l.jsxs("div", {
                    className: "rounded border-2 border-dashed border-line bg-raised px-3 py-2 text-center",
                    children: [l.jsx("div", {
                        className: "text-xs text-muted",
                        children: "Partner's target"
                    }), l.jsx("div", {
                        className: "font-mono text-4xl font-semibold text-fg",
                        children: e.partnerTarget
                    })]
                }), l.jsxs("div", {
                    className: "flex flex-col gap-1 text-xs",
                    children: [l.jsxs("span", {
                        className: n ? "text-accent" : "text-muted",
                        children: ["You: ", n ? "holding lock" : "not locked"]
                    }), l.jsxs("span", {
                        className: r ? "text-accent" : "text-muted",
                        children: ["Partner: ", r ? "holding lock" : "not locked"]
                    })]
                })]
            })]
        }), l.jsxs("div", {
            className: "flex items-center gap-2",
            children: [l.jsx("button", {
                onMouseDown: () => t({
                    type: "turn",
                    dir: -1
                }),
                className: "cursor-pointer rounded border-2 border-line bg-raised px-4 py-2 text-sm font-semibold text-fg hover:border-accent",
                children: "◀"
            }), l.jsx("button", {
                onMouseDown: () => t({
                    type: "lock"
                }),
                className: `cursor-pointer rounded border-2 px-10 py-2 text-sm font-semibold ${s === "ok" ? "border-fg bg-accent text-accent-ink" : s === "wrong" ? "border-danger bg-danger-soft text-fg" : "border-accent bg-accent text-accent-ink hover:bg-accent-bright"}`,
                children: "Lock (Space)"
            }), l.jsx("button", {
                onMouseDown: () => t({
                    type: "turn",
                    dir: 1
                }),
                className: "cursor-pointer rounded border-2 border-line bg-raised px-4 py-2 text-sm font-semibold text-fg hover:border-accent",
                children: "▶"
            })]
        }), l.jsx("div", {
            className: `h-5 text-center text-xs ${s === "wrong" ? "text-danger" : "text-muted"}`,
            children: s === "wrong" ? "A dial was off target" : `Tell your partner their target. Both press Lock within ${(e.window / 1e3).toFixed(1)} s.`
        })]
    })
}
function C0(e, t) {
    const [n,r] = h.useState(null);
    return h.useEffect( () => {
        if (!e || !t)
            return;
        r(t),
        W(t === "ok" ? "correct" : "wrong", .4);
        const s = setTimeout( () => r(null), 700);
        return () => clearTimeout(s)
    }
    , [e]),
    n
}
function L0({v: e}) {
    return l.jsxs("div", {
        className: "flex w-full items-center justify-between text-xs text-muted",
        children: [l.jsxs("span", {
            children: ["Panel ", l.jsxs("span", {
                className: "font-mono text-sm text-accent",
                children: [e.stage, "/", e.stages]
            }), l.jsxs("span", {
                className: "ml-3",
                children: ["Cuts ", l.jsxs("span", {
                    className: "font-mono text-sm text-fg",
                    children: [e.done, "/", e.cuts]
                })]
            })]
        }), l.jsx(ee, {
            total: e.lives,
            used: Math.min(e.errors, e.lives),
            label: "Faults"
        })]
    })
}
const An = 340;
function oS({pattern: e, cut: t}) {
    const n = t ? [[0, An / 2 - 18], [An / 2 + 18, An]] : [[0, An]];
    return l.jsxs("svg", {
        width: An,
        height: 24,
        className: t ? "text-dim" : "text-fg",
        children: [n.map( ([r,s], o) => e === "double" ? l.jsxs("g", {
            className: "stroke-current",
            strokeWidth: "2.5",
            children: [l.jsx("line", {
                x1: r,
                x2: s,
                y1: 8,
                y2: 8
            }), l.jsx("line", {
                x1: r,
                x2: s,
                y1: 16,
                y2: 16
            })]
        }, o) : l.jsx("line", {
            x1: r + (e === "dotted" ? 4 : 0),
            x2: s,
            y1: 12,
            y2: 12,
            className: "stroke-current",
            strokeWidth: e === "dotted" ? 7 : 6,
            strokeLinecap: e === "dotted" ? "round" : "butt",
            strokeDasharray: e === "dashed" ? "16 8" : e === "dotted" ? "0.1 13" : void 0
        }, o)), t && l.jsx("path", {
            d: `M${An / 2 - 12} 4l8 16M${An / 2 + 4} 4l8 16`,
            className: "stroke-muted",
            strokeWidth: "1.5"
        })]
    })
}
function lS({v: e, send: t}) {
    const n = C0(e.check, e.last)
      , [r,s] = h.useState(-1);
    return l.jsxs("div", {
        className: "flex h-full flex-col items-center gap-3 p-4",
        children: [l.jsx(L0, {
            v: e
        }), l.jsx("div", {
            className: "flex w-full justify-end",
            children: l.jsxs("span", {
                className: "rounded border border-line bg-raised px-2 py-1 font-mono text-xs text-muted",
                children: ["Serial ", l.jsx("span", {
                    className: "text-sm text-fg",
                    children: e.serial
                })]
            })
        }), l.jsx("div", {
            className: `flex flex-1 flex-col justify-center gap-2 ${n === "wrong" ? "shake" : ""}`,
            children: e.wires.map( (o, a) => l.jsxs("button", {
                disabled: o.cut,
                onMouseDown: () => {
                    s(a),
                    t({
                        type: "cut",
                        wire: a
                    })
                }
                ,
                className: `flex items-center gap-3 rounded border-2 px-3 py-1.5 ${o.cut ? "border-transparent" : n === "wrong" && r === a ? "border-danger bg-danger-soft" : "cursor-pointer border-transparent hover:border-accent hover:bg-accent-faint"}`,
                children: [l.jsx(ro, {
                    shape: o.tag,
                    className: `h-6 w-6 ${o.cut ? "text-dim" : "text-accent"}`
                }), l.jsx(oS, {
                    pattern: o.pattern,
                    cut: o.cut
                }), l.jsxs("span", {
                    className: `w-28 text-left text-xs ${o.cut ? "text-dim" : "text-muted"}`,
                    children: [o.pattern, ", ", o.tag]
                })]
            }, a))
        }, e.check), l.jsx("div", {
            className: `h-5 text-center text-xs ${n === "wrong" ? "text-danger" : "text-muted"}`,
            children: n === "wrong" ? "Wrong wire. It is still connected." : "Describe the wires and the serial. Click a wire to cut it."
        })]
    })
}
function aS({v: e}) {
    const t = C0(e.check, e.last);
    return l.jsxs("div", {
        className: "flex h-full flex-col gap-3 p-4",
        children: [l.jsx(L0, {
            v: e
        }), l.jsx("p", {
            className: "text-xs leading-relaxed text-muted",
            children: "Use the first rule that matches. Count only wires that are still connected, top to bottom. Read the sheet again after every cut."
        }), l.jsx("ol", {
            className: `flex flex-1 flex-col gap-1.5 overflow-y-auto ${t === "wrong" ? "shake" : ""}`,
            children: e.rules.map( (n, r) => l.jsxs("li", {
                className: "flex gap-3 rounded border border-line bg-raised px-3 py-2 text-sm leading-snug text-fg",
                children: [l.jsx("span", {
                    className: "w-4 shrink-0 font-mono text-accent",
                    children: r + 1
                }), l.jsx("span", {
                    children: n
                })]
            }, r))
        }, e.check), l.jsx("div", {
            className: `h-5 text-center text-xs ${t === "wrong" ? "text-danger" : t === "ok" ? "text-accent" : "text-muted"}`,
            children: t === "wrong" ? "Wrong wire cut. Check the rules again." : t === "ok" ? "Cut. Read the sheet again." : "You have the sheet. Your partner sees the wires."
        })]
    })
}
function iS({view: e, role: t, send: n}) {
    return t === "panel" ? l.jsx(lS, {
        v: e,
        send: n
    }) : l.jsx(aS, {
        v: e
    })
}
const Yn = {
    splitkeypad: {
        id: "splitkeypad",
        title: "Split Keypad",
        icon: Ky,
        w: 680,
        h: 600,
        Component: Kb,
        start: "Two-person lock. Connecting both panels..",
        hint: {
            lock: "You have the lock. Your partner has the manual.",
            manual: "You have the manual. Your partner has the lock."
        },
        roleNames: {
            lock: "Lock",
            manual: "Manual"
        },
        success: "Lock open.",
        failError: "Lock jammed. Too many wrong codes.",
        failTime: "Lock reset. Time limit reached."
    },
    twindials: {
        id: "twindials",
        title: "Twin Dials",
        icon: qy,
        w: 560,
        h: 520,
        Component: sS,
        start: "Dual tumbler lock. Connecting both dials..",
        hint: {
            a: "You see your partner's target, not your own.",
            b: "You see your partner's target, not your own."
        },
        roleNames: {
            a: "Dial A",
            b: "Dial B"
        },
        success: "Both tumblers locked.",
        failError: "Lock jammed. Too many bad locks.",
        failTime: "Lock reset. Time limit reached."
    },
    blindmaze: {
        id: "blindmaze",
        title: "Blind Maze",
        icon: Xy,
        w: 560,
        h: 560,
        Component: ub,
        start: "Laser corridor. Linking the map and the runner..",
        hint: {
            nav: "You have the map. Your partner moves blind.",
            runner: "You move. Your partner has the map and sees the lasers."
        },
        roleNames: {
            nav: "Navigator",
            runner: "Runner"
        },
        success: "Made it through the corridor.",
        failError: "Alarm raised. Too many lasers tripped.",
        failTime: "Corridor sealed. Time limit reached."
    },
    relaysum: {
        id: "relaysum",
        title: "Relay Sum",
        icon: Ax,
        w: 640,
        h: 520,
        Component: Bb,
        start: "Power relay. Linking the cards and the meter..",
        hint: {
            counter: "You see the meter and the target. Your partner holds the cards.",
            hand: "You hold the cards. Your partner sees the meter and the target."
        },
        roleNames: {
            counter: "Meter",
            hand: "Cards"
        },
        success: "Relay balanced.",
        failError: "Relay burnt out. Too many faults.",
        failTime: "Relay tripped. Time limit reached."
    },
    wiremanual: {
        id: "wiremanual",
        title: "Wire Manual",
        icon: Qy,
        w: 640,
        h: 560,
        Component: iS,
        start: "Tripwire panel. Linking the panel and the manual..",
        hint: {
            manual: "You have the rule sheet. Your partner sees the wires.",
            panel: "You see the wires. Your partner has the rule sheet."
        },
        roleNames: {
            manual: "Manual",
            panel: "Panel"
        },
        success: "Panel disarmed.",
        failError: "Alarm triggered. Too many wrong wires.",
        failTime: "Alarm triggered. Time limit reached."
    },
    chaincustody: {
        id: "chaincustody",
        title: "Chain of Custody",
        icon: Zy,
        w: 640,
        h: 580,
        Component: pb,
        start: "Relay lock. Linking every link of the chain..",
        hint: {
            spotter: "You see the symbols. Start the chain.",
            linguist: "You turn symbols into code words.",
            decoder: "You turn code words into digits.",
            keypad: "You type the code at the end of the chain."
        },
        roleNames: {
            spotter: "Spotter",
            linguist: "Linguist",
            decoder: "Decoder",
            keypad: "Keypad"
        },
        success: "Code accepted. Lock open.",
        failError: "Lock jammed. Too many wrong codes.",
        failTime: "Lock reset. Time limit reached."
    },
    crossedcontrols: {
        id: "crossedcontrols",
        title: "Crossed Controls",
        icon: Jy,
        w: 640,
        h: 500,
        Component: yb,
        start: "Crossed breaker panels. Linking every board..",
        hint: {
            p1: "Your buttons work the next board. Someone else works yours.",
            p2: "Your buttons work the next board. Someone else works yours.",
            p3: "Your buttons work the next board. Someone else works yours.",
            p4: "Your buttons work the next board. Someone else works yours."
        },
        roleNames: {
            p1: "Player 1",
            p2: "Player 2",
            p3: "Player 3",
            p4: "Player 4"
        },
        success: "Every board lit.",
        failError: "Breakers tripped. Too many faults.",
        failTime: "Breakers reset. Time limit reached."
    },
    pressurevalves: {
        id: "pressurevalves",
        title: "Pressure Valves",
        icon: ev,
        w: 640,
        h: 500,
        Component: Hb,
        start: "Shared pipe network. Linking every control station..",
        hint: {
            p1: "Your valves move other gauges. Call out what yours need.",
            p2: "Your valves move other gauges. Call out what yours need.",
            p3: "Your valves move other gauges. Call out what yours need.",
            p4: "Your valves move other gauges. Call out what yours need."
        },
        roleNames: {
            p1: "Station 1",
            p2: "Station 2",
            p3: "Station 3",
            p4: "Station 4"
        },
        success: "Pressure balanced.",
        failError: "Pipes burst. Too many overloads.",
        failTime: "System vented. Time limit reached."
    },
    mirrorbeam: {
        id: "mirrorbeam",
        title: "Mirror Beam",
        icon: tv,
        w: 600,
        h: 500,
        Component: Cb,
        start: "Laser grid. Linking the mirror controls and the beam camera..",
        hint: {
            operator: "You flip the mirrors and see the receiver and alarms. You cannot see the beam.",
            spotter: "You see the beam and the mirrors. You cannot see the receiver or the alarms."
        },
        roleNames: {
            operator: "Operator",
            spotter: "Spotter"
        },
        success: "Beam on target.",
        failError: "Alarm raised. Too many faults.",
        failTime: "Grid reset. Time limit reached."
    },
    frequencyhop: {
        id: "frequencyhop",
        title: "Frequency Hop",
        icon: nv,
        w: 640,
        h: 560,
        Component: jb,
        start: "Vehicle tracker. Linking the crew..",
        hint: {
            scanner: "You see the tracker on the spectrum. Call out its channel and sync tag.",
            codebook: "You have the hop table. Work out where the tracker hops next (and lock it, with two players).",
            jammer: "You hold the jammer. Lock the channel the codebook calls out."
        },
        roleNames: {
            scanner: "Scanner",
            codebook: "Codebook",
            jammer: "Jammer"
        },
        success: "Tracker jammed. The vehicle is off the grid.",
        failError: "The tracker got its position out.",
        failTime: "The tracker got its position out. Time limit reached."
    },
    packetfilter: {
        id: "packetfilter",
        title: "Packet Filter",
        icon: rv,
        w: 640,
        h: 560,
        Component: Pb,
        start: "Vehicle data bus. Linking the tap and the datasheet..",
        hint: {
            tap: "You see each packet on the bus. Your partner has the datasheet.",
            sheet: "You have the datasheet. Your partner sees the packets."
        },
        roleNames: {
            tap: "Tap",
            sheet: "Datasheet"
        },
        success: "Tracker filtered out. The vehicle is off the grid.",
        failError: "Too many bad calls. The tracker or the car gave you away.",
        failTime: "The tracker got its position out. Time limit reached."
    },
    spoofdrift: {
        id: "spoofdrift",
        title: "Spoof Drift",
        icon: sv,
        w: 640,
        h: 520,
        Component: nS,
        start: "Vehicle tracker. Linking the spoofer and the dispatch monitor..",
        hint: {
            spoofer: "You move the fake position and know where the decoy lot is.",
            monitor: "You see what dispatch sees: cameras, one-way streets and the speed check."
        },
        roleNames: {
            spoofer: "Spoofer",
            monitor: "Monitor"
        },
        success: "Trace parked at the decoy. The vehicle is off the grid.",
        failError: "Dispatch flagged the trace.",
        failTime: "The real position slipped through. Time limit reached."
    },
    guardroster: {
        id: "guardroster",
        title: "Guard Roster",
        icon: ov,
        w: 640,
        h: 600,
        Component: Mb,
        start: "Security office. Linking the staff files and the camera log..",
        hint: {
            personnel: "You have the staff files. Your partner has the camera log. Fill in the roster together.",
            cameras: "You have the camera log. Your partner has the staff files. Fill in the roster together."
        },
        roleNames: {
            personnel: "Staff files",
            cameras: "Camera log"
        },
        success: "Roster accepted. The guards are where you said they would be.",
        failError: "Roster rejected too many times. The office locked out.",
        failTime: "The shift changed. Time limit reached."
    },
    pixellock: {
        id: "pixellock",
        title: "Pixel Lock",
        icon: lv,
        w: 640,
        h: 560,
        Component: _b,
        start: "Scrambled camera feed. Linking the row and column decoders..",
        hint: {
            rows: "You have the row clues. Your partner has the column clues. Rebuild the picture together.",
            cols: "You have the column clues. Your partner has the row clues. Rebuild the picture together."
        },
        roleNames: {
            rows: "Rows",
            cols: "Columns"
        },
        success: "Feed decoded. Lock open.",
        failError: "Feed scrambled. Too many wrong pixels.",
        failTime: "Feed lost. Time limit reached."
    }
};
function $0({icon: e, title: t, aside: n}) {
    return l.jsxs("header", {
        className: "flex items-center justify-between border-b border-line px-4 py-2.5",
        children: [l.jsxs("div", {
            className: "flex items-center gap-2 text-accent",
            children: [l.jsx(e, {
                className: "h-5 w-5"
            }), l.jsx("span", {
                className: "text-sm font-semibold uppercase tracking-wider",
                children: t
            })]
        }), n]
    })
}
function P0({w: e, h: t, children: n}) {
    const r = pv(e, t);
    return l.jsx("div", {
        className: "absolute left-1/2 top-1/2 flex flex-col overflow-hidden rounded-md border border-line bg-surface",
        style: {
            width: e,
            height: t,
            transform: `translate(-50%, -50%) scale(${r})`
        },
        children: n
    })
}
function Ul({icon: e, text: t, sub: n}) {
    return l.jsxs("div", {
        className: "pop flex h-full flex-col items-center justify-center gap-4 px-10 text-center",
        children: [e, l.jsx("div", {
            className: "text-base font-semibold",
            children: t
        }), n && l.jsx("div", {
            className: "text-xs text-muted",
            children: n
        })]
    })
}
const cS = 100
  , uS = 190
  , dS = 33
  , fS = 16
  , $h = e => Math.round(Math.max(-5e3, Math.min(5e3, e)) * 1e3) / 1e3;
function hS(e, t) {
    const n = Math.floor(oe.now());
    let r = !0;
    const s = () => r ? 0 : Math.max(0, Math.floor(oe.now() - n));
    let o = []
      , a = -1
      , i = null
      , c = null
      , u = -1e3
      , d = null;
    const f = j => i && j instanceof Element && i.contains(j) && j !== i ? Array.prototype.indexOf.call(i.querySelectorAll("*"), j) : -1
      , m = () => {
        if (o.length === 0)
            return;
        const j = o;
        o = [],
        t(j)
    }
      , y = j => {
        o.push(j),
        o.length >= uS && m()
    }
      , g = (j, S, R) => {
        let C = 0
          , T = 0;
        if (i) {
            const _ = i.getBoundingClientRect()
              , P = _.width > 0 ? i.offsetWidth / _.width : 1;
            C = $h((S.clientX - _.left) * P),
            T = $h((S.clientY - _.top) * P)
        }
        return [j, R, C, T, Math.max(-1, Math.min(8, S.button)), S.buttons & 31, f(S.target)]
    }
      , p = () => {
        c && (y(g("m", c.e, c.t)),
        u = c.t,
        c = null)
    }
      , k = j => {
        p(),
        y(j)
    }
      , v = {
        random: Math.random,
        now: performance.now,
        raf: window.requestAnimationFrame,
        setTimeout: window.setTimeout,
        setInterval: window.setInterval
    };
    Math.random = Px(e),
    performance.now = () => n + s(),
    window.requestAnimationFrame = j => oe.raf(S => {
        const R = Math.max(a, 0, Math.floor(S - n));
        R !== a && (k(["f", R]),
        a = R),
        j(n + R)
    }
    );
    let x = 0;
    const w = j => (S, R, ...C) => {
        const T = ++x;
        return j(typeof S != "function" ? S : () => {
            k(["T", s(), T]),
            S(...C)
        }
        , R)
    }
    ;
    window.setTimeout = w(oe.setTimeout),
    window.setInterval = w(oe.setInterval);
    const b = {
        pointerdown: j => k(g("d", j, s())),
        pointerup: j => k(g("u", j, s())),
        pointermove: j => {
            const S = s();
            c && c.e.target !== j.target && p();
            const R = j.target !== d;
            d = j.target,
            c = {
                e: j,
                t: S
            },
            (R || S - u >= (j.buttons ? fS : dS)) && p()
        }
        ,
        click: j => k(g("c", j, s())),
        contextmenu: j => k(g("x", j, s())),
        dblclick: j => k(g("w", j, s())),
        keydown: j => k(["k", s(), 1, (j.key || "").slice(0, 24), (j.code || "").slice(0, 24), f(j.target), j.repeat ? 1 : 0]),
        keyup: j => k(["k", s(), 0, (j.key || "").slice(0, 24), (j.code || "").slice(0, 24), f(j.target), 0]),
        input: j => {
            const S = j.target
              , R = f(S);
            R >= 0 && (S instanceof HTMLInputElement || S instanceof HTMLTextAreaElement) && k(["v", s(), R, S.value.slice(0, 64)])
        }
        ,
        focusin: j => {
            const S = f(j.target);
            S >= 0 && k(["F", s(), S])
        }
    };
    for (const [j,S] of Object.entries(b))
        window.addEventListener(j, S, !0);
    const M = oe.setInterval( () => {
        p(),
        y(["t", s()]),
        m()
    }
    , cS);
    let N = !1;
    return {
        attach(j) {
            i = j
        },
        started() {
            r = !1
        },
        mark(j, S) {
            N || k([j, s(), S])
        },
        stop() {
            if (!N) {
                N = !0,
                oe.clearInterval(M);
                for (const [j,S] of Object.entries(b))
                    window.removeEventListener(j, S, !0);
                p(),
                y(["t", s()]),
                m(),
                Math.random = v.random,
                performance.now = v.now,
                window.requestAnimationFrame = v.raf,
                window.setTimeout = v.setTimeout,
                window.setInterval = v.setInterval
            }
        }
    }
}
let Ee = null;
function mS(e, t, n, r) {
    return (Ee == null ? void 0 : Ee.id) === e || (Ee == null || Ee.rec.stop(),
    Ee = {
        id: e,
        rec: hS(t, s => void zt(n, {
            id: e,
            b: s
        })),
        stopAt: null
    },
    r && Ee.rec.mark(r[0], r[1])),
    Ee
}
function O0({id: e, seed: t, area: n, callback: r="screenInput", first: s}) {
    const [o] = h.useState( () => mS(e, t, r, s));
    return h.useEffect( () => (o.stopAt !== null && oe.clearTimeout(o.stopAt),
    o.stopAt = null,
    n.current && o.rec.attach(n.current),
    () => {
        o.stopAt = oe.setTimeout( () => {
            o.rec.stop(),
            Ee === o && (Ee = null)
        }
        , 0)
    }
    ), [o]),
    null
}
function D0({id: e}) {
    return h.useEffect( () => {
        (Ee == null ? void 0 : Ee.id) === e && Ee.rec.started()
    }
    , [e]),
    null
}
function pS(e, t, n) {
    (Ee == null ? void 0 : Ee.id) === e && Ee.stopAt === null && Ee.rec.mark(t, n)
}
const xS = 2e3;
function gS(e, t) {
    const n = h.useRef(0)
      , [r,s] = h.useState(0);
    return h.useEffect( () => {
        e != null && e.started && (n.current = oe.now() + e.remainingMs,
        s(e.remainingMs))
    }
    , [e]),
    h.useEffect( () => {
        if (!t)
            return;
        const o = oe.setInterval( () => s(Math.max(0, n.current - oe.now())), 100);
        return () => oe.clearInterval(o)
    }
    , [t]),
    r
}
function Uu({start: e, update: t, end: n, send: r, area: s, clock: o}) {
    const a = Yn[e.game]
      , i = e.ui ?? {}
      , c = !!(t != null && t.started) && !n
      , u = h.useRef(null)
      , d = s ?? u
      , f = gS(t, c && !o)
      , m = h.useRef(0);
    t != null && t.started && !m.current && (m.current = t.remainingMs);
    const y = o ? o.left : f
      , g = c && !!e.live && typeof e.live.seed == "number";
    if (h.useEffect( () => {
        n && W(n.success ? "finish" : "wrong")
    }
    , [n]),
    !a)
        return null;
    const p = a.icon
      , k = a.Component
      , v = w => typeof i[w] == "string" && i[w] ? i[w] : a[w];
    let x;
    if (n)
        x = l.jsx(Ul, {
            icon: n.success ? l.jsx(Cu, {
                className: "h-16 w-16 text-accent"
            }) : l.jsx(Lu, {
                className: "h-16 w-16 text-danger"
            }),
            text: n.success ? v("success") : n.reason === "time" ? v("failTime") : v("failError"),
            sub: !n.success && n.why ? n.why : void 0
        });
    else if (t != null && t.started)
        x = l.jsx(k, {
            view: t.view,
            role: e.role,
            send: r
        });
    else {
        const w = (t == null ? void 0 : t.ready) ?? 1
          , b = (t == null ? void 0 : t.players) ?? 2;
        x = l.jsx(Ul, {
            icon: l.jsx(p, {
                className: "h-16 w-16 text-accent"
            }),
            text: v("start"),
            sub: `${a.hint[e.role] ?? ""} Waiting for your ${b > 2 ? "crew" : "partner"} (${w}/${b} ready).`
        })
    }
    return l.jsxs(l.Fragment, {
        children: [l.jsxs("header", {
            className: "flex items-center justify-between border-b border-line px-4 py-2.5",
            children: [l.jsxs("div", {
                className: "flex items-center gap-2 text-accent",
                children: [l.jsx(p, {
                    className: "h-5 w-5"
                }), l.jsx("span", {
                    className: "text-sm font-semibold uppercase tracking-wider",
                    children: a.title
                }), l.jsx("span", {
                    className: "rounded border border-line px-2 py-0.5 text-xs font-medium normal-case tracking-normal text-fg",
                    children: a.roleNames[e.role] ?? e.role
                })]
            }), !e.locked && !n && l.jsx("span", {
                className: "text-xs text-muted",
                children: "Esc to leave"
            })]
        }), l.jsxs("div", {
            ref: d,
            className: "min-h-0 flex-1",
            children: [g && l.jsx(O0, {
                id: e.id,
                seed: e.live.seed,
                area: d,
                callback: "coopScreenInput",
                first: ["S", t.vseq ?? 1]
            }), x, g && l.jsx(D0, {
                id: e.id
            })]
        }), c && l.jsx("div", {
            className: "px-4 pb-4",
            children: l.jsx(re, {
                left: y,
                total: o ? o.total : m.current || 1
            })
        })]
    })
}
function yS() {
    const [e,t] = h.useState(null)
      , [n,r] = h.useState(null)
      , [s,o] = h.useState(null)
      , a = h.useRef(null)
      , i = h.useRef(-1)
      , c = h.useRef(null);
    St("startCoop", h.useCallback(f => {
        a.current = f,
        i.current = -1,
        c.current = null,
        t(f),
        r(null),
        o(null),
        zt("coopReady", {
            id: f.id
        })
    }
    , [])),
    St("coopUpdate", h.useCallback(f => {
        var y;
        if (f.id !== ((y = a.current) == null ? void 0 : y.id) || f.seq <= i.current)
            return;
        i.current = f.seq;
        const m = c.current;
        m && typeof f.vseq == "number" && f.vseq === m.vseq ? f = {
            ...f,
            view: m.view
        } : typeof f.vseq == "number" && pS(f.id, "S", f.vseq),
        c.current = f,
        r(f)
    }
    , [])),
    St("coopEnd", h.useCallback(f => {
        var m;
        f.id === ((m = a.current) == null ? void 0 : m.id) && o(f)
    }
    , [])),
    h.useEffect( () => {
        if (!s || !e)
            return;
        const f = oe.setTimeout( () => {
            a.current = null,
            t(null),
            zt("coopClosed", {
                id: e.id
            })
        }
        , xS);
        return () => oe.clearTimeout(f)
    }
    , [s]),
    ne(f => {
        f.key === "Escape" && e && !s && !e.locked && zt("coopLeave", {
            id: e.id
        })
    }
    );
    const u = h.useCallback(f => {
        a.current && zt("coopAction", {
            id: a.current.id,
            action: f
        })
    }
    , []);
    if (!e)
        return null;
    const d = Yn[e.game];
    return d ? l.jsx(P0, {
        w: d.w,
        h: d.h,
        children: l.jsx(Uu, {
            start: e,
            update: n,
            end: s,
            send: u
        })
    }) : null
}
function vS(e, t) {
    const n = t && typeof t == "object" ? t : {}
      , r = {};
    for (const [s,o] of Object.entries(e)) {
        const a = n[s];
        typeof o == "number" ? r[s] = typeof a == "number" && Number.isFinite(a) ? a : o : typeof o == "boolean" ? r[s] = typeof a == "boolean" ? a : o : r[s] = typeof a == "string" ? a : o
    }
    return r
}
function wS(e) {
    let t = e >>> 0;
    return () => {
        t = t + 1831565813 >>> 0;
        let n = t;
        return n = Math.imul(n ^ n >>> 15, n | 1),
        n ^= n + Math.imul(n ^ n >>> 7, n | 61),
        ((n ^ n >>> 14) >>> 0) / 4294967296
    }
}
const Ne = (e, t) => t[Math.floor(e() * t.length)]
  , Z = (e, t, n) => t + Math.floor(e() * (n - t + 1))
  , X = (e, t, n) => Math.min(n, Math.max(t, Math.round(e)))
  , Ec = 1
  , Tc = 2
  , Rc = 4
  , Ac = 8
  , Bt = {
    n: {
        bit: Ec,
        dx: 0,
        dy: -1,
        back: Rc
    },
    e: {
        bit: Tc,
        dx: 1,
        dy: 0,
        back: Ac
    },
    s: {
        bit: Rc,
        dx: 0,
        dy: 1,
        back: Ec
    },
    w: {
        bit: Ac,
        dx: -1,
        dy: 0,
        back: Tc
    }
};
function Ph(e, t, n, r) {
    const s = new Array(e.length).fill(-1);
    s[n] = 0;
    const o = [n];
    for (let a = 0; a < o.length; a++) {
        const i = o[a]
          , c = i % t
          , u = Math.floor(i / t);
        for (const d of Object.values(Bt)) {
            if (e[i] & d.bit)
                continue;
            const f = (u + d.dy) * t + (c + d.dx);
            s[f] !== -1 || r != null && r.has(f) || (s[f] = s[i] + 1,
            o.push(f))
        }
    }
    return s
}
function kS(e, t) {
    const n = new Array(e * e).fill(Ec | Tc | Rc | Ac)
      , r = new Array(e * e).fill(!1)
      , s = [Z(t, 0, e * e - 1)];
    for (r[s[0]] = !0; s.length; ) {
        const o = s[s.length - 1]
          , a = o % e
          , i = Math.floor(o / e)
          , c = Object.keys(Bt).filter(f => {
            const m = a + Bt[f].dx
              , y = i + Bt[f].dy;
            return m >= 0 && y >= 0 && m < e && y < e && !r[y * e + m]
        }
        );
        if (!c.length) {
            s.pop();
            continue
        }
        const u = Bt[c[Math.floor(t() * c.length)]]
          , d = (i + u.dy) * e + (a + u.dx);
        n[o] &= ~u.bit,
        n[d] &= ~u.back,
        r[d] = !0,
        s.push(d)
    }
    for (let o = Math.floor(e * e / 6); o > 0; o--) {
        const a = Z(t, 0, e * e - 1)
          , i = a % e
          , c = Math.floor(a / e)
          , u = t() < .5 ? Bt.e : Bt.s;
        i + u.dx >= e || c + u.dy >= e || (n[a] &= ~u.bit,
        n[a + u.dx + u.dy * e] &= ~u.back)
    }
    return n
}
function Oh(e, t) {
    e.walls = kS(e.size, t),
    e.start = Z(t, 0, e.size * e.size - 1);
    const n = Ph(e.walls, e.size, e.start);
    e.exit = n.indexOf(Math.max(...n));
    const r = new Set(n.flatMap( (s, o) => s >= 0 && s <= 1 ? [o] : []));
    e.lasers = [];
    for (let s = 0; s < 40 && e.lasers.length < e.laserCount; s++) {
        const o = Z(t, 0, e.size * e.size - 1);
        if (o === e.exit || r.has(o) || e.lasers.includes(o))
            continue;
        const a = new Set([...e.lasers, o]);
        Ph(e.walls, e.size, e.start, a)[e.exit] !== -1 && e.lasers.push(o)
    }
    e.pos = e.start,
    e.trail = [e.start],
    e.tripped = -1
}
const jS = {
    id: "blindmaze",
    players: {
        min: 2,
        max: 2
    },
    roles: ["nav", "runner"],
    defaults: {
        stages: 2,
        size: 7,
        lasers: 4,
        lives: 3,
        timeLimit: 12e4
    },
    create(e, t, n) {
        const r = X(Number(e.size), 4, 11)
          , s = {
            stages: X(Number(e.stages), 1, 10),
            size: r,
            laserCount: X(Number(e.lasers), 0, Math.floor(r * r / 4)),
            lives: X(Number(e.lives), 1, 10),
            stage: 0,
            errors: 0,
            walls: [],
            lasers: [],
            start: 0,
            exit: 0,
            pos: 0,
            steps: 0,
            trail: [],
            tripped: -1,
            check: 0,
            last: null
        };
        return Oh(s, n),
        s
    },
    view(e, t) {
        const n = {
            stage: Math.min(e.stage + 1, e.stages),
            stages: e.stages,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last,
            steps: e.steps
        };
        return t === "nav" ? {
            ...n,
            size: e.size,
            walls: [...e.walls],
            lasers: [...e.lasers],
            start: e.start,
            exit: e.exit,
            pos: e.pos,
            trail: [...e.trail],
            tripped: e.tripped
        } : {
            ...n,
            here: e.walls[e.pos]
        }
    },
    apply(e, t, n, r) {
        if (t !== "runner" || !n || typeof n != "object")
            return {
                changed: !1
            };
        const s = n;
        if (s.type !== "move" || typeof s.dir != "string" || !Object.prototype.hasOwnProperty.call(Bt, s.dir))
            return {
                changed: !1
            };
        const o = Bt[s.dir];
        return e.walls[e.pos] & o.bit ? {
            changed: !1
        } : (e.pos += o.dx + o.dy * e.size,
        e.steps++,
        e.trail = [...e.trail, e.pos].slice(-8),
        e.lasers.includes(e.pos) ? (e.check++,
        e.errors++,
        e.last = "wrong",
        e.tripped = e.pos,
        e.pos = e.start,
        e.trail = [e.start],
        e.errors >= e.lives ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: "Alarm raised"
        } : {
            changed: !0
        }) : e.pos !== e.exit ? {
            changed: !0
        } : (e.check++,
        e.last = "ok",
        e.stage++,
        e.stage >= e.stages ? {
            changed: !0,
            outcome: "win",
            why: "Made it through"
        } : (Oh(e, r),
        {
            changed: !0
        })))
    }
}
  , ps = ["circle", "triangle", "square", "star", "diamond", "hexagon"]
  , Cc = ["A", "B"]
  , bS = ["Falcon", "Copper", "Harbor", "Velvet", "Ember", "Quartz", "Raven", "Summit", "Lantern", "Marble", "Thistle", "Cobalt", "Orchid", "Granite", "Willow", "Saffron", "Anchor", "Meadow", "Topaz", "Juniper"];
function Dh(e, t) {
    e.channel = Ne(t, Cc),
    e.symbols = Array.from({
        length: e.length
    }, () => Ne(t, ps)),
    e.code = e.symbols.map( (n, r) => e.digits[e.words[e.channel][n]][r % 2]),
    e.entered = []
}
const Ih = e => Object.entries(e.digits).sort( ([t], [n]) => t.localeCompare(n)).map( ([t,[n,r]]) => ({
    word: t,
    odd: n,
    even: r
}))
  , SS = {
    id: "chaincustody",
    players: {
        min: 3,
        max: 4
    },
    roles: ["spotter", "linguist", "decoder", "keypad"],
    rolesFor: e => e === 3 ? ["spotter", "linguist", "keypad"] : ["spotter", "linguist", "decoder", "keypad"],
    defaults: {
        stages: 3,
        length: 4,
        lives: 3,
        timeLimit: 15e4
    },
    create(e, t, n) {
        const r = [...bS].sort( () => n() - .5).slice(0, ps.length * Cc.length)
          , s = {
            A: {},
            B: {}
        }
          , o = {};
        Cc.forEach( (i, c) => ps.forEach( (u, d) => {
            const f = r[c * ps.length + d];
            s[i][u] = f,
            o[f] = [Z(n, 0, 9), Z(n, 0, 9)]
        }
        ));
        const a = {
            players: t,
            stages: X(Number(e.stages), 1, 10),
            length: X(Number(e.length), 3, 6),
            lives: X(Number(e.lives), 1, 10),
            stage: 0,
            errors: 0,
            words: s,
            digits: o,
            symbols: [],
            channel: "A",
            code: [],
            entered: [],
            check: 0,
            last: null
        };
        return Dh(a, n),
        a
    },
    view(e, t) {
        const n = {
            stage: Math.min(e.stage + 1, e.stages),
            stages: e.stages,
            length: e.length,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last,
            typed: e.entered.length
        };
        switch (t) {
        case "spotter":
            return {
                ...n,
                symbols: [...e.symbols],
                channel: e.channel
            };
        case "linguist":
            return {
                ...n,
                table: ps.map(r => ({
                    symbol: r,
                    A: e.words.A[r],
                    B: e.words.B[r]
                }))
            };
        case "decoder":
            return {
                ...n,
                rows: Ih(e)
            };
        case "keypad":
            return {
                ...n,
                entered: [...e.entered],
                ...e.players === 3 ? {
                    rows: Ih(e)
                } : {}
            }
        }
        return {}
    },
    apply(e, t, n, r) {
        if (t !== "keypad" || !n || typeof n != "object")
            return {
                changed: !1
            };
        const s = n;
        return s.type === "clear" ? e.entered.length ? (e.entered = [],
        {
            changed: !0
        }) : {
            changed: !1
        } : s.type !== "digit" || typeof s.digit != "number" || !Number.isInteger(s.digit) || s.digit < 0 || s.digit > 9 ? {
            changed: !1
        } : (e.entered.push(s.digit),
        e.entered.length < e.length ? {
            changed: !0
        } : (e.check++,
        e.entered.some( (o, a) => o !== e.code[a]) ? (e.errors++,
        e.last = "wrong",
        e.entered = [],
        e.errors >= e.lives ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: "Code rejected"
        } : {
            changed: !0
        }) : (e.last = "ok",
        e.stage++,
        e.stage >= e.stages ? {
            changed: !0,
            outcome: "win",
            why: "Code accepted"
        } : (Dh(e, r),
        {
            changed: !0
        }))))
    }
}
  , Lc = ["p1", "p2", "p3", "p4"];
function I0(e, t, n) {
    const r = n % t
      , s = Math.floor(n / t);
    for (const [o,a] of [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const i = r + o
          , c = s + a;
        i >= 0 && c >= 0 && i < t && c < t && (e[c * t + i] = !e[c * t + i])
    }
}
function NS(e, t) {
    const n = e.size * e.size;
    for (; ; ) {
        const r = new Array(n).fill(!0)
          , s = [...Array(n).keys()].sort( () => t() - .5).slice(0, e.scramble);
        for (const o of s)
            I0(r, e.size, o);
        if (r.some(o => !o))
            return r
    }
}
function _h(e, t) {
    e.boards = Array.from({
        length: e.players
    }, () => {
        const n = NS(e, t);
        return {
            start: n,
            lights: [...n],
            presses: 0,
            solved: !1
        }
    }
    )
}
const zh = e => Lc.indexOf(e)
  , Fh = e => e.scramble + e.slack
  , MS = {
    id: "crossedcontrols",
    players: {
        min: 2,
        max: 4
    },
    roles: Lc,
    rolesFor: e => Lc.slice(0, e),
    defaults: {
        stages: 2,
        size: 4,
        scramble: 3,
        slack: 4,
        lives: 3,
        timeLimit: 9e4
    },
    create(e, t, n) {
        const r = X(Number(e.size), 3, 5)
          , s = {
            players: t,
            size: r,
            scramble: X(Number(e.scramble), 1, Math.min(6, r * r - 1)),
            slack: X(Number(e.slack), 0, 20),
            stages: X(Number(e.stages), 1, 10),
            lives: X(Number(e.lives), 1, 10),
            stage: 0,
            errors: 0,
            boards: [],
            check: 0,
            last: null
        };
        return _h(s, n),
        s
    },
    view(e, t) {
        const n = zh(t);
        if (n < 0 || n >= e.players)
            return {};
        const r = e.boards[n]
          , s = e.boards[(n + 1) % e.players];
        return {
            stage: Math.min(e.stage + 1, e.stages),
            stages: e.stages,
            size: e.size,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last,
            players: e.players,
            seat: n + 1,
            controlledBy: (n - 1 + e.players) % e.players + 1,
            controls: (n + 1) % e.players + 1,
            budget: Fh(e),
            board: {
                lights: [...r.lights],
                presses: r.presses,
                solved: r.solved
            },
            target: {
                presses: s.presses,
                solved: s.solved
            }
        }
    },
    apply(e, t, n, r) {
        const s = zh(t);
        if (s < 0 || s >= e.players || !n || typeof n != "object")
            return {
                changed: !1
            };
        const o = n;
        if (o.type !== "press" || typeof o.cell != "number" || !Number.isInteger(o.cell) || o.cell < 0 || o.cell >= e.size * e.size)
            return {
                changed: !1
            };
        const a = e.boards[(s + 1) % e.players];
        return a.solved ? {
            changed: !1
        } : (I0(a.lights, e.size, o.cell),
        a.presses++,
        a.lights.every(Boolean) ? (a.solved = !0,
        e.boards.every(i => i.solved) ? (e.check++,
        e.last = "ok",
        e.stage++,
        e.stage >= e.stages ? {
            changed: !0,
            outcome: "win",
            why: "Every board lit"
        } : (_h(e, r),
        {
            changed: !0
        })) : {
            changed: !0
        }) : a.presses < Fh(e) ? {
            changed: !0
        } : (e.check++,
        e.errors++,
        e.last = "wrong",
        a.lights = [...a.start],
        a.presses = 0,
        e.errors >= e.lives ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: "Out of presses"
        } : {
            changed: !0
        }))
    }
}
  , Dt = 16
  , ES = 300
  , TS = "ABCDEFGHKLMNPRSTVXZ"
  , RS = ["1st", "2nd", "3rd", "4th"]
  , $n = e => (e % Dt + Dt) % Dt;
function AS(e) {
    switch (e.kind) {
    case "add":
        return `Add ${e.a}`;
    case "sub":
        return `Subtract ${e.a}`;
    case "double":
        return "Double it";
    case "mirror":
        return "15 minus the channel";
    case "serial":
        return `Add the ${RS[e.a]} digit of the serial`;
    case "parity":
        return `Even: add ${e.a}. Odd: subtract ${e.b}.`;
    case "half":
        return `8 or higher: subtract ${e.a}. Below 8: add ${e.b}.`
    }
}
function CS(e, t, n) {
    switch (e.kind) {
    case "add":
        return $n(t + e.a);
    case "sub":
        return $n(t - e.a);
    case "double":
        return $n(t * 2);
    case "mirror":
        return 15 - t;
    case "serial":
        return $n(t + n[e.a]);
    case "parity":
        return $n(t % 2 === 0 ? t + e.a : t - e.b);
    case "half":
        return $n(t >= 8 ? t - e.a : t + e.b)
    }
}
function LS(e, t) {
    const r = ["add", "sub", "double", "mirror", "serial", "parity", "half"].sort( () => t() - .5).slice(0, e)
      , s = TS.split("").sort( () => t() - .5).slice(0, e).sort()
      , o = Z(t, 2, 7);
    let a = Z(t, 2, 7);
    return a === o && (a = o === 7 ? 3 : o + 1),
    r.map( (i, c) => ({
        tag: s[c],
        kind: i,
        a: i === "add" ? o : i === "sub" ? a : i === "serial" ? Z(t, 0, 3) : Z(t, 2, 6),
        b: Z(t, 2, 6)
    }))
}
function $c(e, t, n) {
    let r = Z(t, 0, e.card.length - 1);
    r === e.sync && e.card.length > 1 && (r = (r + Z(t, 1, e.card.length - 1)) % e.card.length),
    e.sync = r,
    e.target = CS(e.card[r], e.channel, e.serial),
    e.noise = Array.from({
        length: Dt
    }, () => Math.round((.08 + t() * .32) * 100) / 100),
    e.hop++,
    e.hopEnds = n
}
function $S(e, t, n) {
    for (; e.hopEnds !== null && n > e.hopEnds + ES; ) {
        if (e.errors++,
        e.check++,
        e.last = "wrong",
        e.why = "miss",
        e.channel = e.target,
        e.errors >= e.lives)
            return !0;
        $c(e, t, e.hopEnds + e.hopMs)
    }
    return !1
}
const Hh = e => e.players === 2 ? "codebook" : "jammer"
  , PS = {
    id: "frequencyhop",
    players: {
        min: 2,
        max: 3
    },
    roles: ["scanner", "codebook", "jammer"],
    rolesFor: e => e >= 3 ? ["scanner", "codebook", "jammer"] : ["scanner", "codebook"],
    defaults: {
        jams: 4,
        hopMs: 12e3,
        tags: 4,
        lives: 3,
        timeLimit: 9e4
    },
    create(e, t, n) {
        const r = {
            players: t >= 3 ? 3 : 2,
            need: X(Number(e.jams), 1, 12),
            lives: X(Number(e.lives), 1, 10),
            hopMs: X(Number(e.hopMs), 4e3, 3e4),
            jams: 0,
            errors: 0,
            serial: Array.from({
                length: 4
            }, () => Z(n, 1, 9)),
            card: LS(X(Number(e.tags), 2, 6), n),
            channel: Z(n, 0, Dt - 1),
            sync: -1,
            target: 0,
            noise: [],
            dial: 0,
            hop: 0,
            hopEnds: null,
            at: 0,
            check: 0,
            last: null,
            why: null
        };
        return $c(r, n, 0),
        r.hopEnds = null,
        r.dial = (r.target + Z(n, 3, Dt - 3)) % Dt,
        r
    },
    view(e, t) {
        const n = {
            jams: e.jams,
            need: e.need,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last,
            why: e.why,
            hop: e.hop,
            hopMs: e.hopMs,
            msLeft: e.hopEnds === null ? null : Math.max(0, e.hopEnds - e.at),
            players: e.players
        }
          , r = t === Hh(e);
        return t === "scanner" ? {
            ...n,
            channel: e.channel,
            tag: e.card[e.sync].tag,
            serial: e.serial.join(""),
            noise: [...e.noise]
        } : t === "codebook" ? {
            ...n,
            tuner: r,
            card: e.card.map(s => ({
                tag: s.tag,
                text: AS(s)
            })),
            ...r ? {
                dial: e.dial
            } : {}
        } : t === "jammer" ? {
            ...n,
            tuner: r,
            dial: e.dial
        } : n
    },
    apply(e, t, n, r, s) {
        if (!n || typeof n != "object")
            return {
                changed: !1
            };
        const o = n;
        if (o.type !== "sync" && o.type !== "turn" && o.type !== "tune" && o.type !== "lock")
            return {
                changed: !1
            };
        e.at = s;
        let a = !1;
        e.hopEnds === null && (e.hopEnds = s + e.hopMs,
        a = !0);
        const i = e.hop;
        if ($S(e, r, s))
            return {
                changed: !0,
                outcome: "lose",
                reason: "error",
                why: "The tracker checked in"
            };
        if (e.hop !== i && (a = !0),
        o.type === "sync" || t !== Hh(e))
            return {
                changed: a
            };
        if (o.type === "turn" || o.type === "tune") {
            let c;
            if (o.type === "turn") {
                if (o.dir !== 1 && o.dir !== -1)
                    return {
                        changed: a
                    };
                c = $n(e.dial + o.dir)
            } else {
                if (typeof o.value != "number" || !Number.isInteger(o.value) || o.value < 0 || o.value >= Dt)
                    return {
                        changed: a
                    };
                c = o.value
            }
            return c === e.dial ? {
                changed: a
            } : (e.dial = c,
            {
                changed: !0
            })
        }
        return e.check++,
        e.dial !== e.target ? (e.errors++,
        e.last = "wrong",
        e.why = "lock",
        e.errors >= e.lives ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: "Jammed the wrong channel"
        } : {
            changed: !0
        }) : (e.jams++,
        e.last = "ok",
        e.why = null,
        e.jams >= e.need ? {
            changed: !0,
            outcome: "win",
            why: "Tracker jammed"
        } : (e.channel = (e.target + Z(r, 3, Dt - 3)) % Dt,
        $c(e, r, s + e.hopMs),
        {
            changed: !0
        }))
    }
}
  , OS = ["Diaz", "Kim", "Novak", "Reyes", "Okafor", "Silva", "Brandt", "Moreau"]
  , DS = ["Lobby", "Vault", "Roof", "Garage", "Server room", "Loading dock"]
  , IS = 14
  , Wh = ["personnel", "cameras"];
function _0(e) {
    if (e === 0)
        return [[]];
    const t = [];
    for (const n of _0(e - 1))
        for (let r = 0; r <= n.length; r++)
            t.push([...n.slice(0, r), e - 1, ...n.slice(r)]);
    return t
}
function Pc(e, t) {
    switch (e.k) {
    case "notPost":
        return t.post[e.g] !== e.p;
    case "notShift":
        return t.shift[e.g] !== e.t;
    case "postShift":
        return t.at[e.p] === e.t;
    case "notPostShift":
        return t.at[e.p] !== e.t;
    case "before":
        return t.shift[e.g] < t.shift[e.h];
    case "gap":
        return t.shift[e.h] - t.shift[e.g] === e.n;
    case "postBefore":
        return t.at[e.p] < t.shift[e.g];
    case "either":
        return t.post[e.g] === e.p != (t.shift[e.g] === e.t);
    case "adjacent":
        return Math.abs(t.shift[e.g] - t.shift[e.h]) === 1
    }
}
function _S(e, t) {
    const n = "g"in e ? t.names[e.g] : ""
      , r = "h"in e ? t.names[e.h] : ""
      , s = "p"in e ? t.posts[e.p] : ""
      , o = "t"in e ? t.shifts[e.t] : "";
    switch (e.k) {
    case "notPost":
        return `${n} does not work the ${s}.`;
    case "notShift":
        return `${n} does not start at ${o}.`;
    case "postShift":
        return `The ${s} guard starts at ${o}.`;
    case "notPostShift":
        return `Whoever starts at ${o} does not work the ${s}.`;
    case "before":
        return `${n} starts earlier than ${r}.`;
    case "gap":
        return `${r} starts exactly ${e.n * 2} hours after ${n}.`;
    case "postBefore":
        return `The ${s} guard starts earlier than ${n}.`;
    case "either":
        return `${n} works the ${s} or starts at ${o}, but not both.`;
    case "adjacent":
        return `${n} and ${r} start two hours apart.`
    }
}
function zS(e, t) {
    const n = []
      , r = (a, i) => n.push({
        w: a,
        list: i.filter(c => Pc(c, t))
    })
      , s = [...Array(e).keys()]
      , o = s.flatMap(a => s.filter(i => i !== a).map(i => [a, i]));
    return r(3, s.flatMap(a => s.map(i => ({
        k: "notPost",
        g: a,
        p: i
    })))),
    r(3, s.flatMap(a => s.map(i => ({
        k: "notShift",
        g: a,
        t: i
    })))),
    r(1, s.flatMap(a => s.map(i => ({
        k: "postShift",
        p: a,
        t: i
    })))),
    r(2, s.flatMap(a => s.map(i => ({
        k: "notPostShift",
        p: a,
        t: i
    })))),
    r(2, o.map( ([a,i]) => ({
        k: "before",
        g: a,
        h: i
    }))),
    r(1, o.flatMap( ([a,i]) => [2, 3].map(c => ({
        k: "gap",
        g: a,
        h: i,
        n: c
    })))),
    r(2, s.flatMap(a => s.filter(i => t.post[i] !== a).map(i => ({
        k: "postBefore",
        p: a,
        g: i
    })))),
    r(1, s.flatMap(a => s.flatMap(i => s.map(c => ({
        k: "either",
        g: a,
        p: i,
        t: c
    }))))),
    r(1, o.filter( ([a,i]) => a < i).map( ([a,i]) => ({
        k: "adjacent",
        g: a,
        h: i
    }))),
    n
}
const ii = new Map;
function FS(e) {
    if (!ii.has(e)) {
        const t = _0(e);
        ii.set(e, t.flatMap(n => t.map(r => ({
            post: n,
            shift: r,
            at: n.map( (s, o) => r[n.indexOf(o)])
        }))))
    }
    return ii.get(e)
}
function HS(e, t) {
    const n = e.size
      , r = FS(n)
      , s = new Map
      , o = d => {
        let f = s.get(d);
        if (!f) {
            f = new Uint8Array(r.length);
            for (let m = 0; m < r.length; m++)
                f[m] = Pc(d, r[m]) ? 1 : 0;
            s.set(d, f)
        }
        return f
    }
      , a = d => {
        const f = d.map(o);
        let m = 0;
        for (let y = 0; y < r.length; y++) {
            let g = 1;
            for (let p = 0; p < f.length && g; p++)
                g = f[p][y];
            m += g
        }
        return m
    }
      , i = d => d.sort( () => t() - .5)
      , c = [0, 0, 0, 3, 64, 40][n];
    let u = null;
    for (let d = 0; !u || d < 30 && u.left < c; d++) {
        const f = r[Z(t, 0, r.length - 1)]
          , m = zS(n, f).map(p => ({
            w: p.w,
            list: i(p.list)
        }))
          , y = [];
        let g = r;
        for (; g.length > 1; ) {
            const p = m.filter(b => b.list.length);
            if (!p.length)
                break;
            let k = t() * p.reduce( (b, M) => b + M.w, 0);
            const x = (p.find(b => (k -= b.w) < 0) ?? p[p.length - 1]).list.pop()
              , w = g.filter(b => Pc(x, b));
            w.length < g.length && (y.push(x),
            g = w)
        }
        if (g.length === 1) {
            for (const p of i([...y])) {
                const k = y.filter(v => v !== p);
                a(k) === 1 && y.splice(y.indexOf(p), 1)
            }
            if (!(y.length < n + 1 && d < 30))
                for (let p = 0; p < 12; p++) {
                    const k = i([...y])
                      , v = Math.ceil(k.length / 2)
                      , x = [k.slice(0, v), k.slice(v)]
                      , w = Math.min(a(x[0]), a(x[1]));
                    (!u || w > u.left) && (u = {
                        answer: f,
                        halves: x,
                        left: w
                    })
                }
        }
    }
    e.answer = u.answer,
    e.clues = u.halves.map(d => d.map(f => _S(f, e))),
    e.marks = [new Array(n * n).fill(0), new Array(n * n).fill(0)]
}
function Uh(e, t) {
    const n = e.size
      , r = s => [...s].sort( () => t() - .5);
    e.names = r(OS).slice(0, n),
    e.posts = r(DS).slice(0, n),
    e.shifts = Array.from({
        length: n
    }, (s, o) => `${IS + o * 2}:00`),
    HS(e, t)
}
function Bh(e) {
    const t = e.size
      , n = o => {
        const a = [];
        for (let i = 0; i < t; i++) {
            const c = o.slice(i * t, i * t + t);
            if (c.filter(u => u === 2).length !== 1)
                return null;
            a.push(c.indexOf(2))
        }
        return new Set(a).size === t ? a : null
    }
      , r = n(e.marks[0])
      , s = n(e.marks[1]);
    return r && s ? {
        post: r,
        shift: s
    } : null
}
const WS = {
    id: "guardroster",
    players: {
        min: 2,
        max: 2
    },
    roles: Wh,
    defaults: {
        stages: 1,
        guards: 4,
        lives: 3,
        timeLimit: 24e4
    },
    create(e, t, n) {
        const r = {
            stages: X(Number(e.stages), 1, 5),
            size: X(Number(e.guards), 3, 5),
            lives: X(Number(e.lives), 1, 10),
            stage: 0,
            errors: 0,
            names: [],
            posts: [],
            shifts: [],
            answer: {
                post: [],
                shift: [],
                at: []
            },
            clues: [[], []],
            marks: [[], []],
            check: 0,
            last: null
        };
        return Uh(r, n),
        r
    },
    view(e, t) {
        return {
            stage: Math.min(e.stage + 1, e.stages),
            stages: e.stages,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last,
            names: [...e.names],
            posts: [...e.posts],
            shifts: [...e.shifts],
            marks: [[...e.marks[0]], [...e.marks[1]]],
            clues: [...e.clues[t === "cameras" ? 1 : 0]],
            ready: Bh(e) !== null
        }
    },
    apply(e, t, n, r) {
        if (!Wh.includes(t) || !n || typeof n != "object")
            return {
                changed: !1
            };
        const s = n
          , o = e.size;
        if (s.type === "mark") {
            if (s.grid !== 0 && s.grid !== 1 || s.mark !== 0 && s.mark !== 1 && s.mark !== 2)
                return {
                    changed: !1
                };
            if (typeof s.cell != "number" || !Number.isInteger(s.cell) || s.cell < 0 || s.cell >= o * o)
                return {
                    changed: !1
                };
            const c = e.marks[s.grid];
            if (c[s.cell] === s.mark)
                return {
                    changed: !1
                };
            if (c[s.cell] = s.mark,
            s.mark === 2) {
                const u = Math.floor(s.cell / o)
                  , d = s.cell % o;
                for (let f = 0; f < o; f++)
                    f !== d && c[u * o + f] === 0 && (c[u * o + f] = 1),
                    f !== u && c[f * o + d] === 0 && (c[f * o + d] = 1)
            }
            return {
                changed: !0
            }
        }
        if (s.type === "clear")
            return e.marks.every(c => c.every(u => u === 0)) ? {
                changed: !1
            } : (e.marks = [new Array(o * o).fill(0), new Array(o * o).fill(0)],
            {
                changed: !0
            });
        if (s.type !== "submit")
            return {
                changed: !1
            };
        const a = Bh(e);
        return a ? (e.check++,
        a.post.every( (c, u) => c === e.answer.post[u] && a.shift[u] === e.answer.shift[u]) ? (e.last = "ok",
        e.stage++,
        e.stage >= e.stages ? {
            changed: !0,
            outcome: "win",
            why: "Roster accepted"
        } : (Uh(e, r),
        {
            changed: !0
        })) : (e.last = "wrong",
        e.errors++,
        e.errors >= e.lives ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: "The roster did not match the duty log"
        } : {
            changed: !0
        })) : {
            changed: !1
        }
    }
}
  , US = [1, 0, -1, 0]
  , BS = [0, 1, 0, -1]
  , VS = [3, 2, 1, 0]
  , YS = [1, 0, 3, 2];
function vr(e) {
    const t = [];
    let n = 0
      , r = e.row
      , s = 0;
    for (let o = 0; o < e.w * e.h * 4; o++) {
        const a = r * e.w + n;
        t.push(a);
        const i = e.mirrors.get(a);
        i && (s = (i === "/" ? VS : YS)[s]);
        const c = n + US[s]
          , u = r + BS[s];
        if (c < 0 || u < 0 || c >= e.w || u >= e.h)
            return {
                path: t,
                exit: {
                    cell: a,
                    dir: s
                }
            };
        n = c,
        r = u
    }
    return {
        path: t,
        exit: null
    }
}
const z0 = (e, t) => !!e && e.cell === t.cell && e.dir === t.dir
  , GS = (e, t) => e.alarms.find(n => t.includes(n)) ?? -1;
function Vh(e, t) {
    const n = e.w * e.h;
    for (let r = 0; r < 600; r++) {
        e.row = Z(t, 0, e.h - 1);
        const s = [...Array(n).keys()].sort( () => t() - .5).slice(0, e.mirrorCount)
          , o = new Map(s.map(p => [p, t() < .5 ? "/" : "\\"]));
        e.mirrors = o;
        const a = vr(e);
        if (!a.exit)
            continue;
        const i = s.filter(p => a.path.includes(p));
        if (i.length < Math.min(3, e.mirrorCount) || a.exit.dir === 2 && Math.floor(a.exit.cell / e.w) === e.row && a.exit.cell % e.w === 0)
            continue;
        e.receiver = a.exit;
        const c = s.filter(p => i.includes(p) ? t() < .7 : t() < .3);
        c.some(p => i.includes(p)) || c.push(i[0]),
        c.sort( () => t() - .5);
        const u = new Map(o);
        for (const p of c)
            u.set(p, xs(u.get(p)));
        const d = new Set
          , f = new Set
          , m = new Map(u);
        for (let p = 0; p <= c.length; p++) {
            e.mirrors = m;
            for (const k of vr(e).path)
                d.add(k);
            for (const k of s) {
                m.set(k, xs(m.get(k)));
                for (const v of vr(e).path)
                    f.add(v);
                m.set(k, xs(m.get(k)))
            }
            p < c.length && m.set(c[p], xs(m.get(c[p])))
        }
        const y = [...Array(n).keys()].filter(p => !o.has(p) && !d.has(p)).sort( () => t() - .5)
          , g = [...y.filter(p => f.has(p)), ...y.filter(p => !f.has(p))];
        if (e.alarms = g.slice(0, Math.max(0, e.alarmCount - Math.floor(r / 50))),
        e.mirrors = u,
        !z0(vr(e).exit, e.receiver)) {
            e.budget = c.length + e.slack;
            break
        }
    }
    e.start = new Map(e.mirrors),
    e.flips = 0,
    e.tripped = -1
}
const xs = e => e === "/" ? "\\" : "/"
  , KS = {
    id: "mirrorbeam",
    players: {
        min: 2,
        max: 2
    },
    roles: ["operator", "spotter"],
    defaults: {
        stages: 2,
        width: 7,
        height: 5,
        mirrors: 8,
        alarms: 3,
        slack: 3,
        lives: 3,
        timeLimit: 12e4
    },
    create(e, t, n) {
        const r = X(Number(e.width), 5, 9)
          , s = X(Number(e.height), 4, 7)
          , o = {
            w: r,
            h: s,
            stages: X(Number(e.stages), 1, 10),
            mirrorCount: X(Number(e.mirrors), 4, Math.floor(r * s / 2)),
            alarmCount: X(Number(e.alarms), 0, 8),
            lives: X(Number(e.lives), 1, 10),
            stage: 0,
            errors: 0,
            row: 0,
            mirrors: new Map,
            receiver: {
                cell: 0,
                dir: 0
            },
            alarms: [],
            tripped: -1,
            slack: X(Number(e.slack), 0, 20),
            budget: 0,
            flips: 0,
            start: new Map,
            why: null,
            check: 0,
            last: null
        };
        return Vh(o, n),
        o
    },
    view(e, t) {
        const n = {
            stage: Math.min(e.stage + 1, e.stages),
            stages: e.stages,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last,
            why: e.why,
            budget: e.budget,
            flips: e.flips,
            w: e.w,
            h: e.h,
            row: e.row
        };
        if (t === "operator")
            return {
                ...n,
                mirrors: [...e.mirrors.keys()],
                receiver: {
                    ...e.receiver
                },
                alarms: [...e.alarms],
                tripped: e.tripped
            };
        const {path: r, exit: s} = vr(e);
        return {
            ...n,
            mirrors: [...e.mirrors].map( ([o,a]) => ({
                cell: o,
                o: a
            })),
            path: r,
            exit: s
        }
    },
    apply(e, t, n, r) {
        if (t !== "operator" || !n || typeof n != "object")
            return {
                changed: !1
            };
        const s = n;
        if (s.type !== "flip" || typeof s.cell != "number" || !e.mirrors.has(s.cell))
            return {
                changed: !1
            };
        const o = e.mirrors.get(s.cell);
        e.mirrors.set(s.cell, xs(o)),
        e.tripped = -1;
        const {path: a, exit: i} = vr(e)
          , c = GS(e, a);
        return c >= 0 ? (e.mirrors.set(s.cell, o),
        e.check++,
        e.errors++,
        e.last = "wrong",
        e.tripped = c,
        e.why = "alarm",
        e.errors >= e.lives ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: "Alarm tripped"
        } : {
            changed: !0
        }) : (e.flips++,
        z0(i, e.receiver) ? (e.check++,
        e.last = "ok",
        e.why = null,
        e.stage++,
        e.stage >= e.stages ? {
            changed: !0,
            outcome: "win",
            why: "Beam on target"
        } : (Vh(e, r),
        {
            changed: !0
        })) : e.flips < e.budget ? {
            changed: !0
        } : (e.check++,
        e.errors++,
        e.last = "wrong",
        e.why = "budget",
        e.mirrors = new Map(e.start),
        e.flips = 0,
        e.errors >= e.lives ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: "Out of flips"
        } : {
            changed: !0
        }))
    }
}
  , As = "0123456789ABCDEF"
  , F0 = "ABCDEF"
  , qS = ["engine", "ABS", "dashboard", "airbag", "gearbox", "lights"]
  , Yh = e => String(e).padStart(2, "0");
function XS(e, t) {
    const n = t.id[2];
    switch (e.k) {
    case "idIs":
        return t.id === e.id;
    case "starts":
        return t.id[0] === e.d;
    case "endsLetter":
        return F0.includes(n);
    case "endsEven":
        return "02468".includes(n);
    case "endsOdd":
        return "13579".includes(n);
    case "above":
        return t.data[e.i] > e.n;
    case "below":
        return t.data[e.i] < e.n
    }
}
function QS(e) {
    switch (e.k) {
    case "idIs":
        return `ID is ${e.id}`;
    case "starts":
        return `ID starts with ${e.d}`;
    case "endsLetter":
        return "ID ends in a letter";
    case "endsEven":
        return "ID ends in an even digit";
    case "endsOdd":
        return "ID ends in an odd digit";
    case "above":
        return `byte ${e.i + 1} is above ${Yh(e.n)}`;
    case "below":
        return `byte ${e.i + 1} is below ${Yh(e.n)}`
    }
}
function ZS(e) {
    if (!e.conds.length)
        return "Anything else";
    const t = e.conds.map(QS).join(" and ");
    return t[0].toUpperCase() + t.slice(1)
}
const H0 = (e, t) => e.findIndex(n => n.conds.every(r => XS(r, t)));
function JS(e, t, n) {
    const r = t.id.split("");
    switch (e.k) {
    case "idIs":
        return void (t.id = e.id);
    case "starts":
        r[0] = e.d;
        break;
    case "endsLetter":
        r[2] = Ne(n, F0.split(""));
        break;
    case "endsEven":
        r[2] = Ne(n, [..."02468"]);
        break;
    case "endsOdd":
        r[2] = Ne(n, [..."13579"]);
        break;
    case "above":
        return void (t.data[e.i] = Z(n, e.n + 1, 99));
    case "below":
        return void (t.data[e.i] = Z(n, 0, e.n - 1))
    }
    t.id = r.join("")
}
const W0 = e => ({
    id: As[Z(e, 0, 7)] + As[Z(e, 0, 15)] + As[Z(e, 0, 15)],
    data: [Z(e, 0, 99), Z(e, 0, 99), Z(e, 0, 99)]
});
function eN(e, t, n) {
    for (let r = 0; r < 200; r++) {
        const s = W0(n);
        for (const o of e[t].conds)
            JS(o, s, n);
        if (H0(e, s) === t)
            return s
    }
    return null
}
function tN(e, t) {
    const n = "01234567".split("").sort( () => t() - .5)
      , r = [...qS].sort( () => t() - .5)
      , s = [{
        k: "endsLetter"
    }, {
        k: "endsEven"
    }, {
        k: "endsOdd"
    }]
      , o = () => t() < .5;
    return [...[( () => {
        const c = n[0]
          , u = o();
        return [{
            conds: [{
                k: "starts",
                d: c
            }, Ne(t, s)],
            drop: !u,
            label: u ? r[0] : "tracker"
        }, {
            conds: [{
                k: "starts",
                d: c
            }],
            drop: u,
            label: u ? "tracker" : r[0]
        }]
    }
    )(), ( () => {
        const c = n[1] + As[Z(t, 0, 15)] + As[Z(t, 0, 15)]
          , u = Z(t, 0, 2)
          , d = Z(t, 30, 70);
        return [{
            conds: [{
                k: "idIs",
                id: c
            }, o() ? {
                k: "above",
                i: u,
                n: d
            } : {
                k: "below",
                i: u,
                n: d
            }],
            drop: !0,
            label: "tracker"
        }, {
            conds: [{
                k: "idIs",
                id: c
            }],
            drop: !1,
            label: r[1]
        }]
    }
    )(), [{
        conds: [{
            k: "below",
            i: Z(t, 0, 2),
            n: Z(t, 10, 25)
        }, Ne(t, s)],
        drop: !0,
        label: "tracker heartbeat"
    }], [{
        conds: [{
            k: "starts",
            d: n[2]
        }],
        drop: !0,
        label: "tracker"
    }]].sort( () => t() - .5).slice(0, e).flat(), {
        conds: [],
        drop: !1,
        label: r[2]
    }]
}
function nN(e, t) {
    const n = Math.round(e.total * (.4 + t() * .2))
      , r = Array.from({
        length: e.total
    }, (o, a) => a < n).sort( () => t() - .5)
      , s = new Array(e.sheet.length).fill(0);
    e.packets = r.map(o => {
        const a = e.sheet.map( (i, c) => c).filter(i => e.sheet[i].drop === o).sort( (i, c) => s[i] - s[c] || t() - .5);
        for (const i of a) {
            const c = eN(e.sheet, i, t);
            if (c)
                return s[i]++,
                c
        }
        return W0(t)
    }
    )
}
const rN = {
    id: "packetfilter",
    players: {
        min: 2,
        max: 2
    },
    roles: ["tap", "sheet"],
    defaults: {
        packets: 12,
        blocks: 4,
        lives: 3,
        timeLimit: 15e4
    },
    create(e, t, n) {
        const r = {
            total: X(Number(e.packets), 4, 30),
            lives: X(Number(e.lives), 1, 10),
            errors: 0,
            sheet: tN(X(Number(e.blocks), 2, 4), n),
            packets: [],
            done: 0,
            log: [],
            check: 0,
            last: null,
            why: null
        };
        return nN(r, n),
        r
    },
    view(e, t) {
        const n = {
            done: e.done,
            total: e.total,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last,
            why: e.why
        }
          , r = e.log.slice(-5);
        if (t === "tap") {
            const s = e.packets[Math.min(e.done, e.total - 1)];
            return {
                ...n,
                packet: {
                    id: s.id,
                    data: [...s.data]
                },
                log: r.map(o => ({
                    id: o.id,
                    data: [...o.data],
                    drop: o.drop,
                    ok: o.ok
                }))
            }
        }
        return {
            ...n,
            lines: e.sheet.map(s => ({
                text: ZS(s),
                drop: s.drop,
                label: s.label
            })),
            log: r.map(s => ({
                drop: s.drop,
                ok: s.ok
            }))
        }
    },
    apply(e, t, n) {
        if (t !== "tap" || !n || typeof n != "object")
            return {
                changed: !1
            };
        const r = n;
        if (r.type !== "pass" && r.type !== "drop" || r.packet !== e.done || e.done >= e.total)
            return {
                changed: !1
            };
        const s = e.packets[e.done]
          , o = r.type === "drop"
          , a = e.sheet[H0(e.sheet, s)].drop
          , i = o === a;
        return e.log.push({
            ...s,
            drop: o,
            ok: i
        }),
        e.log.length > 5 && e.log.shift(),
        e.done++,
        e.check++,
        e.last = i ? "ok" : "wrong",
        e.why = i ? null : a ? "leak" : "stall",
        !i && (e.errors++,
        e.errors >= e.lives) ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: a ? "A tracker packet got through" : "The car stalled"
        } : e.done >= e.total ? {
            changed: !0,
            outcome: "win",
            why: "Tracker filtered out"
        } : {
            changed: !0
        }
    }
}
  , Gh = ["rows", "cols"];
function Ho(e) {
    const t = [];
    let n = 0;
    for (const r of e)
        r ? n++ : n && (t.push(n),
        n = 0);
    return n && t.push(n),
    t
}
function sN(e, t) {
    const n = t.length
      , r = new Array(n).fill(!1)
      , s = new Array(n).fill(!1)
      , o = new Array(n).fill(0)
      , a = u => {
        let d = 0;
        for (let f = u; f < e.length; f++)
            d += e[f] + (f > u ? 1 : 0);
        return d
    }
    ;
    let i = !1;
    const c = (u, d) => {
        if (u === e.length) {
            for (let f = d; f < n; f++) {
                if (t[f] === 1)
                    return;
                o[f] = 0
            }
            i = !0;
            for (let f = 0; f < n; f++)
                (o[f] ? r : s)[f] = !0;
            return
        }
        for (let f = d; f + a(u) <= n; f++) {
            let m = !0;
            for (let g = d; g < f && m; g++)
                t[g] === 1 && (m = !1),
                o[g] = 0;
            if (!m)
                break;
            for (let g = f; g < f + e[u] && m; g++)
                t[g] === 0 && (m = !1),
                o[g] = 1;
            if (!m)
                continue;
            const y = f + e[u];
            if (y < n) {
                if (t[y] === 1)
                    continue;
                o[y] = 0,
                c(u + 1, y + 1)
            } else
                c(u + 1, n)
        }
    }
    ;
    return c(0, 0),
    i ? t.map( (u, d) => r[d] && !s[d] ? 1 : s[d] && !r[d] ? 0 : -1) : null
}
function ci(e, t, n) {
    const r = new Array(e * e).fill(-1);
    for (let s = !0; s; ) {
        s = !1;
        for (let o = 0; o < 2; o++) {
            const a = o === 0 ? t : n;
            if (a)
                for (let i = 0; i < e; i++) {
                    const c = Array.from({
                        length: e
                    }, (d, f) => o === 0 ? i * e + f : f * e + i)
                      , u = sN(a[i], c.map(d => r[d]));
                    u && c.forEach( (d, f) => {
                        u[f] !== -1 && r[d] === -1 && (r[d] = u[f],
                        s = !0)
                    }
                    )
                }
        }
    }
    return r
}
const Kh = e => e.filter(t => t !== -1).length / e.length;
function qh(e, t) {
    const n = e.size
      , r = n * n;
    let s = new Array(r).fill(!0);
    for (let o = 0; o < 4e3; o++) {
        const a = .5 + t() * .15
          , i = Array.from({
            length: r
        }, () => t() < a)
          , c = Array.from({
            length: n
        }, (f, m) => Ho(i.slice(m * n, m * n + n)))
          , u = Array.from({
            length: n
        }, (f, m) => Ho(Array.from({
            length: n
        }, (y, g) => i[g * n + m])));
        if (c.some(f => !f.length) || u.some(f => !f.length) || ci(n, c, u).includes(-1))
            continue;
        const d = o < 300 ? .45 : o < 1e3 ? .6 : 1;
        if (!(Kh(ci(n, c, null)) > d || Kh(ci(n, null, u)) > d)) {
            s = i;
            break
        }
    }
    e.answer = s,
    e.rowClues = Array.from({
        length: n
    }, (o, a) => Ho(s.slice(a * n, a * n + n))),
    e.colClues = Array.from({
        length: n
    }, (o, a) => Ho(Array.from({
        length: n
    }, (i, c) => s[c * n + a]))),
    e.cells = new Array(r).fill(0),
    e.tripped = -1
}
const oN = {
    id: "pixellock",
    players: {
        min: 2,
        max: 2
    },
    roles: Gh,
    defaults: {
        stages: 1,
        size: 8,
        lives: 3,
        timeLimit: 18e4
    },
    create(e, t, n) {
        const r = {
            stages: X(Number(e.stages), 1, 5),
            size: X(Number(e.size), 5, 10),
            lives: X(Number(e.lives), 1, 10),
            stage: 0,
            errors: 0,
            answer: [],
            cells: [],
            rowClues: [],
            colClues: [],
            tripped: -1,
            check: 0,
            last: null
        };
        return qh(r, n),
        r
    },
    view(e, t) {
        return {
            stage: Math.min(e.stage + 1, e.stages),
            stages: e.stages,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last,
            size: e.size,
            kind: t === "cols" ? "cols" : "rows",
            tripped: e.tripped,
            cells: e.cells.join(""),
            clues: (t === "cols" ? e.colClues : e.rowClues).map(n => [...n])
        }
    },
    apply(e, t, n, r) {
        if (!Gh.includes(t) || !n || typeof n != "object")
            return {
                changed: !1
            };
        const s = n;
        if (s.type !== "mark" || s.mark !== 0 && s.mark !== 1 && s.mark !== 2)
            return {
                changed: !1
            };
        if (typeof s.cell != "number" || !Number.isInteger(s.cell) || s.cell < 0 || s.cell >= e.cells.length)
            return {
                changed: !1
            };
        const o = s.cell;
        return e.cells[o] === 2 || e.cells[o] === s.mark ? {
            changed: !1
        } : s.mark !== 2 ? (e.cells[o] = s.mark,
        {
            changed: !0
        }) : e.answer[o] ? (e.cells[o] = 2,
        e.answer.some( (a, i) => a && e.cells[i] !== 2) ? {
            changed: !0
        } : (e.check++,
        e.last = "ok",
        e.stage++,
        e.stage >= e.stages ? {
            changed: !0,
            outcome: "win",
            why: "Feed decoded"
        } : (qh(e, r),
        {
            changed: !0
        }))) : (e.cells[o] = 1,
        e.tripped = o,
        e.check++,
        e.errors++,
        e.last = "wrong",
        e.errors >= e.lives ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: "The feed rejected too many wrong pixels"
        } : {
            changed: !0
        })
    }
}
  , Oc = ["p1", "p2", "p3", "p4"]
  , Bl = 20
  , U0 = (e, t) => e.gauges[t].base + e.valves.reduce( (n, r) => n + r.pos * r.effects.reduce( (s, o) => s + (o.gauge === t ? o.delta : 0), 0), 0)
  , Vl = e => e.gauges.map( (t, n) => U0(e, n))
  , B0 = e => Vl(e).every( (t, n) => t >= e.gauges[n].lo && t <= e.gauges[n].hi)
  , V0 = e => Vl(e).every(t => t >= 0 && t <= Bl);
function Xh(e, t) {
    const n = e.players;
    for (let r = 0; r < 200; r++) {
        e.gauges = Array.from({
            length: n * e.perGauges
        }, (a, i) => ({
            owner: Math.floor(i / e.perGauges),
            base: 0,
            lo: 0,
            hi: 0
        }));
        const s = new Set;
        if (e.valves = Array.from({
            length: n * e.perValves
        }, (a, i) => {
            const c = Math.floor(i / e.perValves)
              , u = e.gauges.map( (k, v) => k.owner !== c ? v : -1).filter(k => k >= 0)
              , d = u[Math.floor(t() * u.length)];
            s.add(d);
            const f = e.gauges.map( (k, v) => v).filter(k => k !== d)
              , m = f.filter(k => !s.has(k))
              , y = m.length ? m : f
              , g = y[Math.floor(t() * y.length)];
            s.add(g);
            const p = () => (t() < .5 ? -1 : 1) * Z(t, 1, 2);
            return {
                owner: c,
                pos: 0,
                start: 0,
                effects: [{
                    gauge: d,
                    delta: p()
                }, {
                    gauge: g,
                    delta: p()
                }]
            }
        }
        ),
        e.gauges.some( (a, i) => !e.valves.some(c => c.effects.some(u => u.gauge === i))))
            continue;
        for (const a of e.valves)
            a.pos = Z(t, 0, e.steps);
        for (let a = 0; a < e.gauges.length; a++) {
            const i = U0(e, a)
              , c = Z(t, e.tol + 3, Bl - e.tol - 3);
            Object.assign(e.gauges[a], {
                base: c - i,
                lo: c - e.tol,
                hi: c + e.tol
            })
        }
        const o = e.valves.map(a => a.pos);
        for (const a of e.valves)
            a.start = a.pos = Z(t, 0, e.steps);
        if (V0(e) && !B0(e) && lN(e, o))
            break
    }
    for (const r of e.valves)
        r.pos = r.start;
    e.burst = -1
}
function lN(e, t) {
    for (; ; ) {
        const n = e.valves.map( (s, o) => o).filter(s => e.valves[s].pos !== t[s]);
        if (!n.length)
            return !0;
        if (n.find(s => {
            const o = e.valves[s]
              , a = Math.sign(t[s] - o.pos);
            return o.pos += a,
            V0(e) ? !0 : (o.pos -= a,
            !1)
        }
        ) === void 0)
            return !1
    }
}
const Qh = e => Oc.indexOf(e)
  , Zh = e => `G${e + 1}`
  , aN = {
    id: "pressurevalves",
    players: {
        min: 2,
        max: 4
    },
    roles: Oc,
    rolesFor: e => Oc.slice(0, e),
    defaults: {
        stages: 2,
        gauges: 2,
        valves: 2,
        steps: 4,
        tol: 1,
        lives: 3,
        timeLimit: 12e4
    },
    create(e, t, n) {
        const r = {
            players: t,
            stages: X(Number(e.stages), 1, 10),
            steps: X(Number(e.steps), 2, 6),
            tol: X(Number(e.tol), 0, 3),
            lives: X(Number(e.lives), 1, 10),
            perValves: X(Number(e.valves), 1, 3),
            perGauges: 0,
            stage: 0,
            errors: 0,
            gauges: [],
            valves: [],
            burst: -1,
            check: 0,
            last: null
        };
        return r.perGauges = X(Number(e.gauges), 1, Math.min(3, r.perValves * 2)),
        Xh(r, n),
        r
    },
    view(e, t) {
        const n = Qh(t);
        if (n < 0 || n >= e.players)
            return {};
        const r = Vl(e);
        return {
            stage: Math.min(e.stage + 1, e.stages),
            stages: e.stages,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last,
            players: e.players,
            seat: n + 1,
            max: Bl,
            steps: e.steps,
            gauges: e.gauges.flatMap( (s, o) => s.owner === n ? [{
                id: o,
                label: Zh(o),
                value: r[o],
                lo: s.lo,
                hi: s.hi,
                burst: e.burst === o
            }] : []),
            valves: e.valves.flatMap( (s, o) => s.owner === n ? [{
                id: o,
                pos: s.pos,
                feeds: s.effects.map(a => ({
                    gauge: Zh(a.gauge),
                    owner: e.gauges[a.gauge].owner + 1,
                    delta: a.delta
                }))
            }] : [])
        }
    },
    apply(e, t, n, r) {
        const s = Qh(t);
        if (s < 0 || s >= e.players || !n || typeof n != "object")
            return {
                changed: !1
            };
        const o = n;
        if (o.type !== "turn" || typeof o.valve != "number" || !Number.isInteger(o.valve) || o.dir !== 1 && o.dir !== -1)
            return {
                changed: !1
            };
        const a = e.valves[o.valve];
        if (!a || a.owner !== s)
            return {
                changed: !1
            };
        const i = a.pos + o.dir;
        if (i < 0 || i > e.steps)
            return {
                changed: !1
            };
        a.pos = i,
        e.burst = -1;
        const u = Vl(e).findIndex(d => d < 0 || d > Bl);
        if (u >= 0) {
            e.check++,
            e.errors++,
            e.last = "wrong",
            e.burst = u;
            for (const d of e.valves)
                d.pos = d.start;
            return e.errors >= e.lives ? {
                changed: !0,
                outcome: "lose",
                reason: "error",
                why: "Pipes burst"
            } : {
                changed: !0
            }
        }
        return B0(e) ? (e.check++,
        e.last = "ok",
        e.stage++,
        e.stage >= e.stages ? {
            changed: !0,
            outcome: "win",
            why: "Pressure balanced"
        } : (Xh(e, r),
        {
            changed: !0
        })) : {
            changed: !0
        }
    }
}
  , Y0 = (e, t) => t.op === "+" ? e + t.n : t.op === "-" ? e - t.n : e * t.n
  , Jh = e => e() < .2 ? {
    op: "x",
    n: Z(e, 2, 3)
} : {
    op: Ne(e, ["+", "-"]),
    n: Z(e, 1, 9)
}
  , em = e => `${e.op === "+" ? "+" : e.op === "-" ? "−" : "×"}${e.n}`;
function tm(e, t) {
    let n = [];
    for (let s = 0; s < 200; s++) {
        e.start = Z(t, 0, Math.min(9, e.cap)),
        n = [];
        let o = e.start;
        for (let a = 0; a < 40 && n.length < e.steps; a++) {
            const i = Jh(t)
              , c = Y0(o, i);
            c < 0 || c > e.cap || c === o || (n.push(i),
            o = c)
        }
        if (n.length === e.steps && o !== e.start && o > 0) {
            e.target = o;
            break
        }
    }
    const r = [...n];
    for (; r.length < e.size; )
        r.push(Jh(t));
    for (let s = r.length - 1; s > 0; s--) {
        const o = Math.floor(t() * (s + 1));
        [r[s],r[o]] = [r[o], r[s]]
    }
    e.cards = r.map(s => ({
        ...s,
        used: !1
    })),
    e.total = e.start,
    e.played = []
}
function G0(e) {
    for (const t of e.cards)
        t.used = !1;
    e.total = e.start,
    e.played = []
}
function nm(e, t) {
    return e.check++,
    e.errors++,
    e.last = "wrong",
    e.why = t,
    G0(e),
    e.errors >= e.lives ? {
        changed: !0,
        outcome: "lose",
        reason: "error",
        why: t === "overload" ? "Relay overloaded" : "Wrong total"
    } : {
        changed: !0
    }
}
const iN = {
    id: "relaysum",
    players: {
        min: 2,
        max: 2
    },
    roles: ["counter", "hand"],
    defaults: {
        stages: 3,
        cards: 6,
        steps: 3,
        cap: 50,
        lives: 3,
        timeLimit: 9e4
    },
    create(e, t, n) {
        const r = X(Number(e.cards), 3, 9)
          , s = {
            stages: X(Number(e.stages), 1, 10),
            size: r,
            steps: X(Number(e.steps), 2, r),
            cap: X(Number(e.cap), 20, 99),
            lives: X(Number(e.lives), 1, 10),
            stage: 0,
            errors: 0,
            start: 0,
            total: 0,
            target: 0,
            cards: [],
            played: [],
            check: 0,
            last: null,
            why: null
        };
        return tm(s, n),
        s
    },
    view(e, t) {
        const n = {
            stage: Math.min(e.stage + 1, e.stages),
            stages: e.stages,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last,
            why: e.why
        };
        return t === "hand" ? {
            ...n,
            cards: e.cards.map(r => ({
                label: em(r),
                used: r.used
            }))
        } : {
            ...n,
            start: e.start,
            total: e.total,
            target: e.target,
            cap: e.cap,
            played: e.played.map(r => em(e.cards[r])),
            left: e.cards.length - e.played.length
        }
    },
    apply(e, t, n, r) {
        if (!n || typeof n != "object")
            return {
                changed: !1
            };
        const s = n;
        if (t === "hand") {
            if (s.type !== "play" || typeof s.card != "number" || !Number.isInteger(s.card))
                return {
                    changed: !1
                };
            const o = e.cards[s.card];
            return !o || o.used ? {
                changed: !1
            } : (o.used = !0,
            e.played.push(s.card),
            e.total = Y0(e.total, o),
            e.total < 0 || e.total > e.cap ? nm(e, "overload") : {
                changed: !0
            })
        }
        return t !== "counter" ? {
            changed: !1
        } : s.type === "reset" ? e.played.length ? (G0(e),
        {
            changed: !0
        }) : {
            changed: !1
        } : s.type !== "submit" || !e.played.length ? {
            changed: !1
        } : e.total !== e.target ? nm(e, "miss") : (e.check++,
        e.last = "ok",
        e.why = null,
        e.stage++,
        e.stage >= e.stages ? {
            changed: !0,
            outcome: "win",
            why: "Relay balanced"
        } : (tm(e, r),
        {
            changed: !0
        }))
    }
}
  , rm = ["circle", "triangle", "square", "star", "diamond", "hexagon"]
  , ui = e => Math.floor(e / 10)
  , Wo = e => e % 10;
function cN(e, t) {
    const n = Z(e, 2, 9)
      , r = Z(e, 0, 9);
    let s = Z(e, 0, 9);
    s === r && (s = (r + 5) % 10);
    const o = ["tens", "ones", "add", "sum", "diff", "mul", "even", "above"];
    switch (t > 0 && e() < .25 ? "prev" : Ne(e, o)) {
    case "tens":
        return {
            text: "The first digit of the screen",
            digit: i => ui(i)
        };
    case "ones":
        return {
            text: "The last digit of the screen",
            digit: i => Wo(i)
        };
    case "add":
        return {
            text: `Last digit of (screen + ${n})`,
            digit: i => (i + n) % 10
        };
    case "sum":
        return {
            text: "Last digit of (first + last digit of the screen)",
            digit: i => (ui(i) + Wo(i)) % 10
        };
    case "diff":
        return {
            text: "Difference between the two screen digits",
            digit: i => Math.abs(ui(i) - Wo(i))
        };
    case "mul":
        return {
            text: `Last digit of (screen's last digit × ${n})`,
            digit: i => Wo(i) * n % 10
        };
    case "even":
        return {
            text: `${r} if the screen is even, otherwise ${s}`,
            digit: i => i % 2 === 0 ? r : s
        };
    case "above":
        {
            const i = Z(e, 3, 7) * 10;
            return {
                text: `${r} if the screen is above ${i}, otherwise ${s}`,
                digit: c => c > i ? r : s
            }
        }
    case "prev":
        return {
            text: `Last digit of (previous digit + ${n})`,
            digit: (i, c) => (c[c.length - 1] + n) % 10
        }
    }
}
function uN(e, t) {
    const n = [];
    for (const r of e.rules)
        n.push(r.digit(t, n));
    return n
}
function sm(e, t) {
    const n = Ne(t, e.cards);
    e.shape = n.shape,
    e.screen = Z(t, 10, 99),
    e.code = uN(n, e.screen),
    e.entered = []
}
const dN = {
    id: "splitkeypad",
    players: {
        min: 2,
        max: 2
    },
    roles: ["manual", "lock"],
    defaults: {
        stages: 3,
        length: 4,
        cards: 4,
        lives: 3,
        timeLimit: 9e4
    },
    create(e, t, n) {
        const r = X(Number(e.length), 3, 6)
          , s = [...rm].sort( () => n() - .5).slice(0, X(Number(e.cards), 2, rm.length))
          , o = {
            stages: X(Number(e.stages), 1, 10),
            length: r,
            lives: X(Number(e.lives), 1, 10),
            stage: 0,
            errors: 0,
            cards: s.map(a => ({
                shape: a,
                rules: Array.from({
                    length: r
                }, (i, c) => cN(n, c))
            })),
            shape: "circle",
            screen: 10,
            code: [],
            entered: [],
            check: 0,
            last: null
        };
        return sm(o, n),
        o
    },
    view(e, t) {
        const n = {
            stage: Math.min(e.stage + 1, e.stages),
            stages: e.stages,
            length: e.length,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last
        };
        return t === "lock" ? {
            ...n,
            shape: e.shape,
            screen: e.screen,
            entered: [...e.entered]
        } : {
            ...n,
            typed: e.entered.length,
            cards: e.cards.map(r => ({
                shape: r.shape,
                lines: r.rules.map(s => s.text)
            }))
        }
    },
    apply(e, t, n, r) {
        if (t !== "lock" || !n || typeof n != "object")
            return {
                changed: !1
            };
        const s = n;
        return s.type === "clear" ? e.entered.length ? (e.entered = [],
        {
            changed: !0
        }) : {
            changed: !1
        } : s.type !== "digit" || typeof s.digit != "number" || !Number.isInteger(s.digit) || s.digit < 0 || s.digit > 9 ? {
            changed: !1
        } : (e.entered.push(s.digit),
        e.entered.length < e.length ? {
            changed: !0
        } : (e.check++,
        e.entered.some( (o, a) => o !== e.code[a]) ? (e.errors++,
        e.last = "wrong",
        e.entered = [],
        e.errors >= e.lives ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: "Lock jammed"
        } : {
            changed: !0
        }) : (e.last = "ok",
        e.stage++,
        e.stage >= e.stages ? {
            changed: !0,
            outcome: "win",
            why: "Lock open"
        } : (sm(e, r),
        {
            changed: !0
        }))))
    }
}
  , fN = [1, 0, -1, 0]
  , hN = [0, 1, 0, -1]
  , It = 3
  , Bu = (e, t, n) => {
    const r = t % e.w + fN[n]
      , s = Math.floor(t / e.w) + hN[n];
    if (r < 0 || s < 0 || r >= e.w || s >= e.h)
        return -1;
    const o = s * e.w + r;
    return e.roads[o] ? o : -1
}
;
function K0(e, t, n, r, s, o) {
    if (e.cameras.includes(n))
        return "camera";
    const a = e.oneways.get(t)
      , i = e.oneways.get(n);
    return a !== void 0 && a !== r || i !== void 0 && i !== r ? "oneway" : r === s && o + 1 > e.straight ? "speed" : null
}
function mN(e, t, n) {
    const r = (a, i, c) => (a * 5 + i + 1) * (e.straight + 1) + c
      , s = new Set([r(t, -1, 0)]);
    let o = [[t, -1, 0]];
    for (let a = 0; o.length; a++) {
        const i = [];
        for (const [c,u,d] of o) {
            if (c === n)
                return a;
            for (let f = 0; f < 4; f++) {
                const m = Bu(e, c, f);
                if (m < 0 || K0(e, c, m, f, u, d))
                    continue;
                const y = f === u ? d + 1 : 1
                  , g = r(m, f, y);
                s.has(g) || (s.add(g),
                i.push([m, f, y]))
            }
        }
        o = i
    }
    return -1
}
function di(e, t) {
    const n = new Array(e.w * e.h).fill(-1);
    n[t] = 0;
    const r = [t];
    for (let s = 0; s < r.length; s++)
        for (let o = 0; o < 4; o++) {
            const a = Bu(e, r[s], o);
            a >= 0 && n[a] < 0 && (n[a] = n[r[s]] + 1,
            r.push(a))
        }
    return n
}
function pN(e, t) {
    const n = [];
    for (let r = 0; r < t; r += It)
        for (let s = 0; s + It < e; s += It)
            n.push({
                cells: [1, 2].map(o => r * e + s + o),
                axis: 0
            });
    for (let r = 0; r < e; r += It)
        for (let s = 0; s + It < t; s += It)
            n.push({
                cells: [1, 2].map(o => (s + o) * e + r),
                axis: 1
            });
    return n
}
function om(e, t) {
    const {w: n, h: r} = e
      , s = o => o.sort( () => t() - .5);
    for (let o = 0; o < 500; o++) {
        e.roads = Array.from({
            length: n * r
        }, (w, b) => b % n % It === 0 || Math.floor(b / n) % It === 0);
        const a = s(pN(n, r));
        for (const w of a.slice(0, 2)) {
            w.cells.forEach(M => e.roads[M] = !1);
            const b = e.roads.indexOf(!0);
            di(e, b).filter( (M, N) => e.roads[N] && M < 0).length && w.cells.forEach(M => e.roads[M] = !0)
        }
        const i = e.roads.map( (w, b) => w ? b : -1).filter(w => w >= 0)
          , c = i[Z(t, 0, i.length - 1)]
          , u = di(e, c)
          , d = i.filter(w => u[w] >= (n + r) / 2);
        if (!d.length)
            continue;
        const f = d[Z(t, 0, d.length - 1)]
          , m = di(e, f)
          , y = u[f]
          , g = new Set(i.filter(w => w !== c && w !== f && u[w] + m[w] === y))
          , p = Math.floor(o / 60)
          , k = s(i.filter(w => w !== c && w !== f));
        e.cameras = [...k.filter(w => g.has(w)), ...k.filter(w => !g.has(w))].slice(0, Math.max(0, e.cameraCount - p)),
        e.oneways = new Map;
        const v = a.filter(w => w.cells.every(b => e.roads[b] && b !== c && b !== f && !e.cameras.includes(b)))
          , x = [...v.filter(w => w.cells.some(b => g.has(b))), ...v.filter(w => !w.cells.some(b => g.has(b)))];
        for (const w of x.slice(0, Math.max(0, e.onewayCount - p))) {
            const b = w.axis === 0 ? t() < .5 ? 0 : 2 : t() < .5 ? 1 : 3;
            w.cells.forEach(M => e.oneways.set(M, b))
        }
        if (!(mN(e, c, f) < 0)) {
            e.dot = c,
            e.dest = f;
            break
        }
    }
    e.heading = -1,
    e.streak = 0,
    e.trail = [],
    e.tripped = -1
}
const xN = {
    id: "spoofdrift",
    players: {
        min: 2,
        max: 2
    },
    roles: ["spoofer", "monitor"],
    defaults: {
        stages: 2,
        blocksX: 4,
        blocksY: 3,
        cameras: 4,
        oneways: 3,
        straight: 4,
        lives: 3,
        timeLimit: 12e4
    },
    create(e, t, n) {
        const r = X(Number(e.blocksX), 3, 5)
          , s = X(Number(e.blocksY), 2, 4)
          , o = {
            stages: X(Number(e.stages), 1, 10),
            bx: r,
            by: s,
            cameraCount: X(Number(e.cameras), 0, 8),
            onewayCount: X(Number(e.oneways), 0, 6),
            straight: X(Number(e.straight), 3, 8),
            lives: X(Number(e.lives), 1, 10),
            stage: 0,
            errors: 0,
            w: r * It + 1,
            h: s * It + 1,
            roads: [],
            cameras: [],
            oneways: new Map,
            dot: 0,
            dest: 0,
            heading: -1,
            streak: 0,
            trail: [],
            tripped: -1,
            check: 0,
            last: null,
            why: null
        };
        return om(o, n),
        o
    },
    view(e, t) {
        const n = {
            stage: Math.min(e.stage + 1, e.stages),
            stages: e.stages,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last,
            why: e.why,
            w: e.w,
            h: e.h,
            roads: e.roads.map(r => r ? "1" : "0").join(""),
            dot: e.dot,
            trail: [...e.trail]
        };
        return t === "spoofer" ? {
            ...n,
            dest: e.dest
        } : {
            ...n,
            cameras: [...e.cameras],
            oneways: [...e.oneways].map( ([r,s]) => ({
                cell: r,
                dir: s
            })),
            heading: e.heading,
            streak: e.streak,
            straight: e.straight,
            tripped: e.tripped
        }
    },
    apply(e, t, n, r) {
        if (t !== "spoofer" || !n || typeof n != "object")
            return {
                changed: !1
            };
        const s = n;
        if (s.type !== "move" || s.dir !== 0 && s.dir !== 1 && s.dir !== 2 && s.dir !== 3)
            return {
                changed: !1
            };
        const o = s.dir
          , a = Bu(e, e.dot, o);
        if (a < 0)
            return {
                changed: !1
            };
        const i = K0(e, e.dot, a, o, e.heading, e.streak);
        return i ? (e.check++,
        e.errors++,
        e.last = "wrong",
        e.why = i,
        e.tripped = a,
        e.errors >= e.lives ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: "Dispatch flagged the trace"
        } : {
            changed: !0
        }) : (e.streak = o === e.heading ? e.streak + 1 : 1,
        e.heading = o,
        e.trail.push(e.dot),
        e.trail.length > 12 && e.trail.shift(),
        e.dot = a,
        e.tripped = -1,
        e.dot !== e.dest ? {
            changed: !0
        } : (e.check++,
        e.last = "ok",
        e.why = null,
        e.stage++,
        e.stage >= e.stages ? {
            changed: !0,
            outcome: "win",
            why: "Trace parked at the decoy"
        } : (om(e, r),
        {
            changed: !0
        })))
    }
}
  , Dc = ["a", "b"]
  , lm = e => e === "a" ? "b" : "a";
function am(e, t) {
    for (const n of Dc) {
        const r = e.seats[n];
        r.target = Z(t, 0, e.ticks - 1),
        r.dial = (r.target + Z(t, 2, e.ticks - 2)) % e.ticks,
        r.lockAt = -1 / 0
    }
}
const gN = {
    id: "twindials",
    players: {
        min: 2,
        max: 2
    },
    roles: [...Dc],
    defaults: {
        stages: 3,
        ticks: 20,
        lives: 3,
        window: 1500,
        timeLimit: 6e4
    },
    create(e, t, n) {
        const r = () => ({
            dial: 0,
            target: 0,
            lockAt: -1 / 0,
            lockSeq: 0
        })
          , s = {
            stages: X(Number(e.stages), 1, 10),
            ticks: X(Number(e.ticks), 8, 40),
            lives: X(Number(e.lives), 1, 10),
            window: X(Number(e.window), 500, 5e3),
            stage: 0,
            errors: 0,
            seats: {
                a: r(),
                b: r()
            },
            check: 0,
            last: null
        };
        return am(s, n),
        s
    },
    view(e, t) {
        const n = e.seats[t]
          , r = e.seats[lm(t)];
        return n ? {
            stage: Math.min(e.stage + 1, e.stages),
            stages: e.stages,
            ticks: e.ticks,
            errors: e.errors,
            lives: e.lives,
            window: e.window,
            check: e.check,
            last: e.last,
            dial: n.dial,
            partnerTarget: r.target,
            lockSeq: n.lockSeq,
            partnerLockSeq: r.lockSeq
        } : {}
    },
    apply(e, t, n, r, s) {
        const o = e.seats[t];
        if (!o || !n || typeof n != "object")
            return {
                changed: !1
            };
        const a = n;
        if (a.type === "turn" || a.type === "set") {
            let c;
            if (a.type === "turn") {
                if (a.dir !== 1 && a.dir !== -1)
                    return {
                        changed: !1
                    };
                c = (o.dial + a.dir + e.ticks) % e.ticks
            } else {
                if (typeof a.value != "number" || !Number.isInteger(a.value) || a.value < 0 || a.value >= e.ticks)
                    return {
                        changed: !1
                    };
                c = a.value
            }
            return c === o.dial ? {
                changed: !1
            } : (o.dial = c,
            o.lockAt = -1 / 0,
            {
                changed: !0
            })
        }
        if (a.type !== "lock")
            return {
                changed: !1
            };
        o.lockAt = s,
        o.lockSeq++;
        const i = e.seats[lm(t)];
        return s - i.lockAt > e.window ? {
            changed: !0
        } : (e.check++,
        o.lockAt = i.lockAt = -1 / 0,
        Dc.some(c => e.seats[c].dial !== e.seats[c].target) ? (e.errors++,
        e.last = "wrong",
        e.errors >= e.lives ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: "Dials jammed"
        } : {
            changed: !0
        }) : (e.last = "ok",
        e.stage++,
        e.stage >= e.stages ? {
            changed: !0,
            outcome: "win",
            why: "Both dials locked"
        } : (am(e, r),
        {
            changed: !0
        })))
    }
}
  , tr = ["solid", "dashed", "dotted", "double"]
  , gs = ["circle", "triangle", "square", "star", "diamond"]
  , ts = (e, t) => e.live.filter(n => t(e.wires[n])).length
  , im = (e, t) => e.live.find(n => t(e.wires[n])) ?? -1
  , cm = (e, t) => [...e.live].reverse().find(n => t(e.wires[n])) ?? -1
  , um = e => Number(e.serial[e.serial.length - 1]) % 2 === 1
  , dm = [e => {
    const t = Ne(e, tr);
    return {
        text: `If there is more than one ${t} wire, cut the last ${t} wire.`,
        pick: n => ts(n, r => r.pattern === t) > 1 ? cm(n, r => r.pattern === t) : -1
    }
}
, e => {
    const t = Ne(e, tr);
    return {
        text: `If there are no ${t} wires, cut the second wire.`,
        pick: n => ts(n, r => r.pattern === t) === 0 ? n.live[1] : -1
    }
}
, e => {
    const t = Ne(e, tr);
    return {
        text: `If the last wire is ${t}, cut the first wire.`,
        pick: n => n.wires[n.live[n.live.length - 1]].pattern === t ? n.live[0] : -1
    }
}
, e => {
    const t = Ne(e, gs);
    return {
        text: `If the serial number ends in an odd digit and any wire has a ${t} tag, cut the first wire with a ${t} tag.`,
        pick: n => um(n) ? im(n, r => r.tag === t) : -1
    }
}
, e => {
    const t = Ne(e, gs);
    return {
        text: `If the first wire has a ${t} tag, cut the last wire.`,
        pick: n => n.wires[n.live[0]].tag === t ? n.live[n.live.length - 1] : -1
    }
}
, e => {
    const t = Ne(e, tr);
    return {
        text: `If exactly one wire is ${t}, cut that wire.`,
        pick: n => ts(n, r => r.pattern === t) === 1 ? im(n, r => r.pattern === t) : -1
    }
}
, e => {
    const t = Ne(e, gs)
      , n = Z(e, 4, 5);
    return {
        text: `If there are ${n} or more wires and none has a ${t} tag, cut the third wire.`,
        pick: r => r.live.length >= n && ts(r, s => s.tag === t) === 0 ? r.live[2] : -1
    }
}
, e => {
    const t = Ne(e, gs);
    return {
        text: `If more than one wire has a ${t} tag, cut the last wire with a ${t} tag.`,
        pick: n => ts(n, r => r.tag === t) > 1 ? cm(n, r => r.tag === t) : -1
    }
}
, e => {
    const t = Ne(e, tr);
    return {
        text: `If the serial number ends in an even digit and the first wire is ${t}, cut the second wire.`,
        pick: n => !um(n) && n.wires[n.live[0]].pattern === t ? n.live[1] : -1
    }
}
];
function q0(e) {
    for (const t of e.sheet) {
        const n = t.pick(e.panel);
        if (n >= 0)
            return n
    }
    return e.panel.live[0]
}
function yN(e, t) {
    const n = "ABCDEFGHJKLMNPRSTVXZ";
    let r = "";
    for (let o = 0; o < 4; o++)
        r += n[Math.floor(t() * n.length)];
    r += `-${Z(t, 10, 99)}`;
    const s = Array.from({
        length: e.size
    }, () => ({
        pattern: Ne(t, tr),
        tag: Ne(t, gs),
        cut: !1
    }));
    return {
        wires: s,
        serial: r,
        live: s.map( (o, a) => a)
    }
}
function fm(e, t) {
    for (let n = 0; n < 30; n++) {
        e.panel = yN(e, t);
        const r = {
            ...e,
            panel: {
                ...e.panel,
                wires: e.panel.wires.map(o => ({
                    ...o
                })),
                live: [...e.panel.live]
            }
        };
        let s = 0;
        for (let o = 0; o < e.cuts; o++) {
            const a = q0(r);
            e.sheet.slice(0, -1).some(i => i.pick(r.panel) === a) && s++,
            r.panel.wires[a].cut = !0,
            r.panel.live = r.panel.live.filter(i => i !== a)
        }
        if (s >= Math.min(e.cuts, 2) || s >= 1 && n > 15)
            break
    }
    e.done = 0
}
const vN = {
    id: "wiremanual",
    players: {
        min: 2,
        max: 2
    },
    roles: ["manual", "panel"],
    defaults: {
        stages: 3,
        wires: 5,
        cuts: 2,
        rules: 5,
        lives: 3,
        timeLimit: 12e4
    },
    create(e, t, n) {
        const r = X(Number(e.wires), 4, 7)
          , s = [...dm].sort( () => n() - .5).slice(0, X(Number(e.rules), 3, dm.length))
          , o = Ne(n, [{
            text: "Otherwise, cut the first wire.",
            pick: i => i.live[0]
        }, {
            text: "Otherwise, cut the last wire.",
            pick: i => i.live[i.live.length - 1]
        }])
          , a = {
            stages: X(Number(e.stages), 1, 10),
            size: r,
            cuts: X(Number(e.cuts), 1, r - 3),
            lives: X(Number(e.lives), 1, 10),
            stage: 0,
            errors: 0,
            sheet: [...s.map(i => i(n)), o],
            panel: {
                wires: [],
                live: [],
                serial: ""
            },
            done: 0,
            check: 0,
            last: null
        };
        return fm(a, n),
        a
    },
    view(e, t) {
        const n = {
            stage: Math.min(e.stage + 1, e.stages),
            stages: e.stages,
            errors: e.errors,
            lives: e.lives,
            check: e.check,
            last: e.last,
            done: e.done,
            cuts: e.cuts
        };
        return t === "panel" ? {
            ...n,
            serial: e.panel.serial,
            wires: e.panel.wires.map(r => ({
                ...r
            }))
        } : {
            ...n,
            rules: e.sheet.map(r => r.text)
        }
    },
    apply(e, t, n, r) {
        if (t !== "panel" || !n || typeof n != "object")
            return {
                changed: !1
            };
        const s = n;
        if (s.type !== "cut" || typeof s.wire != "number" || !Number.isInteger(s.wire))
            return {
                changed: !1
            };
        const o = e.panel.wires[s.wire];
        return !o || o.cut ? {
            changed: !1
        } : (e.check++,
        s.wire !== q0(e) ? (e.errors++,
        e.last = "wrong",
        e.errors >= e.lives ? {
            changed: !0,
            outcome: "lose",
            reason: "error",
            why: "Wrong wire cut"
        } : {
            changed: !0
        }) : (o.cut = !0,
        e.panel.live = e.panel.live.filter(a => a !== s.wire),
        e.done++,
        e.last = "ok",
        e.done < e.cuts ? {
            changed: !0
        } : (e.stage++,
        e.stage >= e.stages ? {
            changed: !0,
            outcome: "win",
            why: "Panel disarmed"
        } : (fm(e, r),
        {
            changed: !0
        }))))
    }
}
  , ma = {
    blindmaze: jS,
    chaincustody: SS,
    crossedcontrols: MS,
    frequencyhop: PS,
    guardroster: WS,
    mirrorbeam: KS,
    packetfilter: rN,
    pixellock: oN,
    pressurevalves: aN,
    relaysum: iN,
    splitkeypad: dN,
    spoofdrift: xN,
    twindials: gN,
    wiremanual: vN
}
  , Vu = new Map;
function X0(e) {
    const t = e.roles.map(r => ma[e.game].view(e.state, r))
      , n = t.map( (r, s) => {
        const o = JSON.stringify(r)
          , a = o !== e.last[s];
        return e.last[s] = o,
        a
    }
    );
    return {
        views: t,
        fresh: n
    }
}
function wN(e, t, n, r, s=Date.now() ^ e * 2654435761) {
    var f;
    const o = ma[t];
    if (!o)
        return {
            ok: !1,
            error: "unknown game"
        };
    if (r < o.players.min || r > o.players.max)
        return {
            ok: !1,
            error: `needs ${o.players.min}-${o.players.max} players`
        };
    const a = vS(o.defaults, n)
      , i = wS(s)
      , c = ((f = o.rolesFor) == null ? void 0 : f.call(o, r)) ?? o.roles
      , u = Array.from({
        length: r
    }, (m, y) => c[y % c.length])
      , d = {
        game: t,
        state: o.create(a, r, i),
        roles: u,
        rng: i,
        last: []
    };
    return Vu.set(e, d),
    {
        ok: !0,
        roles: u,
        views: X0(d).views,
        timeLimit: Math.max(5e3, Number(a.timeLimit) || 6e4)
    }
}
function kN(e, t, n, r=Date.now()) {
    const s = Vu.get(e);
    if (!s || !Number.isInteger(t) || t < 1 || t > s.roles.length)
        return {
            changed: !1
        };
    try {
        const o = ma[s.game].apply(s.state, s.roles[t - 1], n, s.rng, r);
        return o.changed ? {
            ...o,
            ...X0(s)
        } : o
    } catch {
        return {
            changed: !1
        }
    }
}
function hm(e) {
    Vu.delete(e)
}
function jN({game: e, onClose: t, settings: n={}, players: r, overlay: s=!1}) {
    var u;
    const o = ((u = ma[e]) == null ? void 0 : u.players) ?? {
        min: 2,
        max: 2
    }
      , [a,i] = h.useState(Math.min(o.max, Math.max(o.min, Math.round(r ?? o.min))));
    h.useEffect( () => {
        if (!s)
            return;
        const d = f => {
            f.key === "Escape" && t()
        }
        ;
        return window.addEventListener("keydown", d),
        () => window.removeEventListener("keydown", d)
    }
    , [s, t]);
    const c = Array.from({
        length: o.max - o.min + 1
    }, (d, f) => o.min + f).filter(d => d <= 4);
    return l.jsxs("div", {
        className: "absolute inset-0 flex flex-col items-center justify-center gap-3 p-4",
        style: s ? {
            background: "rgba(0, 0, 0, 0.7)"
        } : void 0,
        children: [l.jsx(bN, {
            game: e,
            players: a,
            settings: n
        }, a), l.jsxs("div", {
            className: "flex gap-2",
            children: [c.length > 1 && c.map(d => l.jsxs("button", {
                onClick: () => i(d),
                className: `cursor-pointer rounded px-4 py-2 text-sm ${d === a ? "bg-accent text-accent-ink" : "bg-raised hover:bg-hover"}`,
                children: [d, " players"]
            }, d)), l.jsx("button", {
                onClick: t,
                className: "cursor-pointer rounded bg-raised px-4 py-2 text-sm hover:bg-accent hover:text-accent-ink",
                children: "Close"
            })]
        })]
    })
}
function bN({game: e, players: t, settings: n}) {
    const r = Yn[e]
      , [s] = h.useState( () => Date.now() % 1e9)
      , [o,a] = h.useState([])
      , [i,c] = h.useState([])
      , [u,d] = h.useState(null)
      , f = h.useRef(0)
      , m = h.useRef(0)
      , y = (p, k, v) => {
        d(x => x ?? {
            id: s,
            success: p,
            reason: k,
            why: v
        }),
        hm(s)
    }
    ;
    h.useEffect( () => {
        const p = wN(s, e, n, t);
        if (!p.ok || !p.views || !p.roles)
            return;
        const k = p.timeLimit ?? 6e4;
        m.current = performance.now() + k,
        a(p.roles.map( (x, w) => ({
            id: s,
            game: e,
            seat: w + 1,
            role: x,
            view: p.views[w]
        }))),
        f.current = 1,
        c(p.views.map(x => ({
            id: s,
            seq: 1,
            view: x,
            started: !0,
            ready: t,
            players: t,
            remainingMs: k
        })));
        const v = setTimeout( () => y(!1, "time"), k);
        return () => {
            clearTimeout(v),
            hm(s)
        }
    }
    , []);
    const g = p => k => {
        if (u)
            return;
        const v = kN(s, p, k);
        if (!v.changed || !v.views)
            return;
        f.current++;
        const x = Math.max(0, m.current - performance.now());
        c(v.views.map(w => ({
            id: s,
            seq: f.current,
            view: w,
            started: !0,
            ready: t,
            players: t,
            remainingMs: x
        }))),
        v.outcome && y(v.outcome === "win", v.reason, v.why)
    }
    ;
    return r ? l.jsx("div", {
        className: `flex items-start justify-center gap-4 ${t > 2 ? "max-w-[1200px] flex-wrap" : ""}`,
        children: o.map( (p, k) => l.jsx("div", {
            className: "flex flex-col overflow-hidden rounded-md border border-line bg-surface",
            style: {
                width: r.w,
                height: r.h,
                zoom: t > 2 ? .6 : .8
            },
            children: l.jsx(Uu, {
                start: p,
                update: i[k] ?? null,
                end: u,
                send: g(p.seat)
            })
        }, p.seat))
    }) : null
}
const SN = 2500
  , NN = 2e3;
function MN() {
    const [e,t] = h.useState(null)
      , [n,r] = h.useState(null)
      , [s,o] = h.useState(null)
      , a = h.useCallback( () => {
        o(null),
        zt("coopPreviewClosed")
    }
    , []);
    St("previewCoop", S => {
        if (!Yn[S.game])
            return void zt("coopPreviewClosed");
        o({
            game: S.game,
            settings: S.settings ?? {},
            players: S.players
        })
    }
    ),
    St("closeCoopPreview", () => o(null));
    const [i,c] = h.useState("intro")
      , [u,d] = h.useState({
        success: !1
    })
      , f = h.useRef("intro")
      , m = h.useRef(null)
      , y = h.useRef(u)
      , g = h.useRef(null)
      , p = S => {
        f.current = S,
        c(S)
    }
      , k = h.useCallback( (S, R) => {
        const C = m.current;
        C && (m.current = null,
        t(null),
        zt("endGame", {
            id: C.id,
            success: S,
            extra: R
        }))
    }
    , [])
      , v = h.useCallback(S => {
        var R;
        if (!Dr[S.game])
            return void zt("endGame", {
                id: S.id,
                success: !1
            });
        m.current = S,
        t(S),
        p(((R = S.ui) == null ? void 0 : R.skipIntro) === !0 ? "play" : "intro")
    }
    , []);
    St("startGame", v),
    St("abort", () => {
        m.current = null,
        t(null)
    }
    );
    const x = h.useCallback( (S, R, C) => {
        if (f.current !== "play" || !m.current)
            return;
        const T = {
            success: S,
            reason: R,
            extra: C
        };
        y.current = T,
        d(T),
        p("result")
    }
    , []);
    if (ne(S => {
        S.key !== "Escape" || !m.current || m.current.locked === !0 || k(f.current === "result" ? y.current.success : !1, f.current === "result" ? y.current.extra : void 0)
    }
    ),
    h.useEffect( () => {
        if (e) {
            if (i === "intro") {
                W("start");
                const S = setTimeout( () => p("play"), SN);
                return () => {
                    clearTimeout(S),
                    Wa("start")
                }
            }
            if (i === "result") {
                W(u.success ? "finish" : "wrong");
                const S = setTimeout( () => k(u.success, u.extra), NN);
                return () => {
                    clearTimeout(S),
                    Wa("finish"),
                    Wa("wrong")
                }
            }
        }
    }
    , [e, i]),
    s)
        return l.jsx(jN, {
            game: s.game,
            settings: s.settings,
            players: s.players,
            overlay: !0,
            onClose: a
        });
    if (!e)
        return null;
    const b = {
        ...Dr[e.game],
        ...TN(e.ui)
    }
      , M = b.Component
      , N = b.icon
      , j = i === "play" && e.live === !0 && typeof e.seed == "number";
    return l.jsxs(P0, {
        w: b.w,
        h: b.h,
        children: [l.jsx($0, {
            icon: N,
            title: b.title,
            aside: e.locked !== !0 && l.jsx("span", {
                className: "text-xs text-muted",
                children: "Esc to abort"
            })
        }), l.jsxs("div", {
            ref: g,
            className: "min-h-0 flex-1",
            children: [j && l.jsx(O0, {
                id: e.id,
                seed: e.seed,
                area: g
            }, `r${e.id}`), i === "play" && l.jsx(M, {
                settings: e.settings,
                finish: x
            }, e.id), j && l.jsx(D0, {
                id: e.id
            }, `s${e.id}`), i === "intro" && l.jsx(Ul, {
                icon: l.jsx(N, {
                    className: "h-16 w-16 text-accent"
                }),
                text: b.start,
                sub: b.hint
            }), i === "result" && l.jsx(Ul, {
                icon: u.success ? l.jsx(Cu, {
                    className: "h-16 w-16 text-accent"
                }) : l.jsx(Lu, {
                    className: "h-16 w-16 text-danger"
                }),
                text: u.success ? b.success : u.reason === "time" ? b.failTime : b.failError
            })]
        })]
    })
}
const EN = ["start", "hint", "success", "failError", "failTime"];
function TN(e) {
    const t = {};
    if (e)
        for (const n of EN)
            typeof e[n] == "string" && e[n] && (t[n] = e[n]);
    return t
}
const RN = 250
  , AN = 1e3
  , CN = 12e3
  , LN = new Set(["f", "T", "t", "S", "d", "u", "m", "c", "x", "w", "k", "v", "F"])
  , $N = 600
  , PN = 2e3
  , Te = {
    key: "",
    entries: [],
    batches: 0,
    latest: 0,
    views: new Map
};
function Yu(e="") {
    Te.key = e,
    Te.entries = [],
    Te.batches = 0,
    Te.latest = 0,
    Te.views = new Map
}
function ON(e, t, n, r) {
    if (!Array.isArray(r) || typeof n != "number" || n < 1)
        return;
    const s = `${e}:${t}`;
    Te.key !== s && Yu(s),
    r.forEach( (o, a) => {
        n + a <= $N && o != null && Te.views.set(n + a, o)
    }
    )
}
const DN = e => Array.isArray(e) && e.length >= 2 && typeof e[0] == "string" && LN.has(e[0]) && typeof e[1] == "number" && Number.isFinite(e[1]);
function IN(e, t, n, r) {
    if (!Array.isArray(r) || typeof n != "number")
        return;
    const s = `${e}:${t}`;
    Te.key !== s && Yu(s);
    for (let o = 0; o < r.length; o++) {
        const a = n + o;
        if (a <= Te.batches)
            continue;
        if (a !== Te.batches + 1)
            break;
        const i = r[o];
        if (!Array.isArray(i))
            break;
        for (const c of i) {
            if (Te.entries.length >= CN)
                break;
            if (!DN(c))
                continue;
            Te.entries.push(c);
            const u = c[1];
            u > Te.latest && (Te.latest = u)
        }
        Te.batches = a
    }
}
const Q0 = new MessageChannel
  , Z0 = [];
Q0.port1.onmessage = () => {
    var e;
    return (e = Z0.shift()) == null ? void 0 : e()
}
;
async function _N() {
    for (let e = 0; e < 6; e++)
        await null;
    await new Promise(e => {
        Z0.push(e),
        Q0.port2.postMessage(0)
    }
    )
}
const zN = () => new Promise(e => oe.raf(e))
  , vt = (e, t=0) => typeof e == "number" && Number.isFinite(e) ? e : t
  , fi = e => typeof e == "string" ? e : "";
function FN({clock: e, key: t, root: n, cursor: r, onView: s, onStall: o}) {
    let a = !1
      , i = 0
      , c = !1
      , u = null;
    const d = p => {
        const k = n()
          , v = vt(p, -1);
        if (k && v >= 0) {
            const x = k.querySelectorAll("*")[v];
            if (x)
                return x
        }
        return document.body
    }
      , f = p => {
        var S, R;
        const k = p[0];
        if (k === "f")
            return e.frame(vt(p[1]));
        if (k === "T")
            return e.fire(vt(p[2]), vt(p[1]));
        if (k === "t")
            return;
        if (k === "S")
            return s == null ? void 0 : s(Te.views.get(vt(p[2])));
        if (k === "k") {
            const C = {
                key: fi(p[3]),
                code: fi(p[4]),
                repeat: p[6] === 1,
                bubbles: !0,
                cancelable: !0,
                composed: !0
            };
            d(p[5]).dispatchEvent(new KeyboardEvent(p[2] === 1 ? "keydown" : "keyup",C));
            return
        }
        if (k === "v") {
            const C = d(p[2]);
            if (C instanceof HTMLInputElement || C instanceof HTMLTextAreaElement) {
                const T = C instanceof HTMLInputElement ? HTMLInputElement.prototype : HTMLTextAreaElement.prototype;
                (R = (S = Object.getOwnPropertyDescriptor(T, "value")) == null ? void 0 : S.set) == null || R.call(C, fi(p[3]).slice(0, 64)),
                C.dispatchEvent(new Event("input",{
                    bubbles: !0
                }))
            }
            return
        }
        if (k === "F") {
            const C = d(p[2]);
            C instanceof HTMLElement && C.focus({
                preventScroll: !0
            });
            return
        }
        const v = n();
        if (!v)
            return;
        const x = vt(p[2])
          , w = vt(p[3]);
        r(x, w);
        const b = v.getBoundingClientRect()
          , M = v.offsetWidth > 0 ? b.width / v.offsetWidth : 1
          , N = {
            bubbles: !0,
            cancelable: !0,
            composed: !0,
            view: window,
            clientX: b.left + x * M,
            clientY: b.top + w * M,
            screenX: b.left + x * M,
            screenY: b.top + w * M,
            button: vt(p[4]),
            buttons: vt(p[5]),
            pointerId: 1,
            pointerType: "mouse",
            isPrimary: !0
        }
          , j = d(p[6]);
        j !== u && (u != null && u.isConnected && (u.dispatchEvent(new PointerEvent("pointerout",{
            ...N,
            relatedTarget: j
        })),
        u.dispatchEvent(new MouseEvent("mouseout",{
            ...N,
            relatedTarget: j
        }))),
        j.dispatchEvent(new PointerEvent("pointerover",{
            ...N,
            relatedTarget: u
        })),
        j.dispatchEvent(new MouseEvent("mouseover",{
            ...N,
            relatedTarget: u
        })),
        u = j),
        k === "d" ? (c = !j.dispatchEvent(new PointerEvent("pointerdown",N)),
        c || j.dispatchEvent(new MouseEvent("mousedown",N))) : k === "u" ? (j.dispatchEvent(new PointerEvent("pointerup",N)),
        c || j.dispatchEvent(new MouseEvent("mouseup",N)),
        c = !1) : k === "m" ? (j.dispatchEvent(new PointerEvent("pointermove",N)),
        c || j.dispatchEvent(new MouseEvent("mousemove",N))) : k === "c" ? j.dispatchEvent(new MouseEvent("click",N)) : k === "x" ? j.dispatchEvent(new MouseEvent("contextmenu",N)) : k === "w" && j.dispatchEvent(new MouseEvent("dblclick",N))
    }
      , m = p => !!p && p[0] === "S" && !Te.views.has(vt(p[2]));
    let y = 0;
    return (async () => {
        let p = oe.now();
        for (; !a; ) {
            if (await zN(),
            a || Te.key !== t) {
                Te.key !== t && (i = 0),
                p = oe.now();
                continue
            }
            const k = oe.now()
              , v = k - p;
            p = k;
            const x = Te.latest - RN
              , w = x - e.now;
            if (Er.behind = Math.max(0, w),
            w <= 0)
                continue;
            const b = w > AN
              , M = b ? x : Math.min(x, e.now + v * (w > 400 ? 1.5 : 1))
              , N = oe.now() + (b ? 12 : 6);
            for (; !a; ) {
                const j = Te.entries[i]
                  , S = j ? vt(j[1]) : 1 / 0;
                if (j && S <= M && m(j)) {
                    y ? oe.now() - y > PN && (a = !0,
                    o == null || o()) : y = oe.now();
                    break
                }
                if (y = 0,
                j && S <= M) {
                    i++,
                    e.now = Math.max(e.now, S);
                    try {
                        f(j)
                    } catch (R) {
                        console.error("[screen] replay", R)
                    }
                } else {
                    e.now = Math.max(e.now, M);
                    break
                }
                if (await _N(),
                oe.now() > N)
                    break
            }
        }
    }
    )(),
    () => {
        a = !0
    }
}
const HN = /^(time|speed|delay)|Time|Timeout|Duration|Interval|Rate|Speed|Penalty|Lifetime|Delay/;
function WN(e, t) {
    if (!t || typeof t != "object" || Array.isArray(t))
        return !1;
    for (const [n,r] of Object.entries(t)) {
        const s = e.defaults[n];
        if (s === void 0)
            return !1;
        if (typeof r == "number") {
            const o = HN.test(n) ? 6e5 : Math.max(4 * Math.abs(typeof s == "number" ? s : 0), 64);
            if (!Number.isFinite(r) || Math.abs(r) > o)
                return !1
        } else if (typeof r == "string") {
            if (r.length > 32)
                return !1
        } else if (Array.isArray(r)) {
            if (r.length > 64 || r.some(o => !(typeof o == "string" && o.length <= 32) && !(typeof o == "number" && Number.isFinite(o))))
                return !1
        } else if (typeof r != "boolean")
            return !1
    }
    return !0
}
let Ot = null;
function mm(e) {
    var t;
    (t = e.stop) == null || t.call(e),
    e.clock.uninstall(),
    Ot === e && (Ot = null)
}
const J0 = () => {}
;
function UN({screen: e, live: t, meta: n, box: r, fallback: s}) {
    const o = `${e}:${t.gid}`
      , a = h.useRef(null)
      , i = h.useRef(null)
      , c = h.useRef(null)
      , u = Math.min(r.w / n.w, r.h / n.h)
      , d = eg(o, t.seed, a, r)
      , f = tg(c, i)
      , m = n.Component;
    return l.jsxs(ng, {
        w: n.w,
        h: n.h,
        scale: u,
        panel: a,
        pointer: c,
        children: [l.jsx($0, {
            icon: n.icon,
            title: n.title
        }), l.jsxs("div", {
            ref: i,
            className: "min-h-0 flex-1",
            children: [l.jsx(sg, {
                fallback: s,
                children: l.jsx(m, {
                    settings: t.settings,
                    finish: J0
                })
            }), l.jsx(rg, {
                c: d,
                area: i,
                cursor: f
            })]
        })]
    })
}
function eg(e, t, n, r) {
    const [s] = h.useState( () => {
        if ((Ot == null ? void 0 : Ot.key) === e)
            return Ot;
        Ot && mm(Ot);
        const o = new Hv
          , a = () => {
            var c;
            const i = (c = n.current) == null ? void 0 : c.getBoundingClientRect();
            return i ? {
                x: i.left + i.width / 2,
                y: i.top + i.height / 2
            } : {
                x: r.cx,
                y: r.cy
            }
        }
        ;
        return o.install(t, {
            width: () => 2 * a().x,
            height: () => 2 * a().y
        }),
        Ot = {
            key: e,
            clock: o,
            stop: null,
            endAt: null
        },
        Ot
    }
    );
    return h.useEffect( () => (s.endAt !== null && oe.clearTimeout(s.endAt),
    s.endAt = null,
    () => {
        s.endAt = oe.setTimeout( () => mm(s), 0)
    }
    ), [s]),
    s
}
function tg(e, t) {
    return (n, r) => {
        const s = e.current
          , o = t.current;
        !s || !o || (s.style.display = "block",
        s.style.transform = `translate(${o.offsetLeft + n}px, ${o.offsetTop + r}px)`)
    }
}
function ng({w: e, h: t, scale: n, panel: r, pointer: s, children: o}) {
    return l.jsx("div", {
        className: "pointer-events-none flex flex-1 items-center justify-center",
        children: l.jsx("div", {
            className: "relative",
            style: {
                width: e * n,
                height: t * n
            },
            children: l.jsxs("div", {
                ref: r,
                className: "absolute left-0 top-0 flex flex-col overflow-hidden rounded-md border border-line bg-surface",
                style: {
                    width: e,
                    height: t,
                    transform: `scale(${n})`,
                    transformOrigin: "top left"
                },
                children: [o, l.jsx("div", {
                    ref: s,
                    className: "absolute left-0 top-0 hidden",
                    "aria-hidden": !0,
                    children: l.jsx("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 22 22",
                        className: "-translate-x-px -translate-y-px",
                        children: l.jsx("path", {
                            d: "M2 2 L2 18 L6.5 13.8 L9.6 20 L12.6 18.6 L9.6 12.6 L16 12.6 Z",
                            className: "fill-accent stroke-accent-ink",
                            strokeWidth: "1.4",
                            strokeLinejoin: "round"
                        })
                    })
                })]
            })
        })
    })
}
function rg({c: e, area: t, cursor: n, hooks: r}) {
    return h.useEffect( () => {
        e.stop || (e.stop = FN({
            clock: e.clock,
            key: e.key,
            root: () => t.current,
            cursor: n,
            ...r
        }))
    }
    , [e]),
    null
}
const BN = (e, t, n) => ({
    id: e,
    game: t.id,
    seat: 0,
    role: n,
    view: null,
    locked: !0
});
function VN({screen: e, gid: t, meta: n, role: r, clock: s, box: o, fallback: a}) {
    const i = `${e}:${t}`
      , c = h.useRef(null)
      , u = h.useRef(null)
      , d = h.useRef(null)
      , f = Math.min(o.w / n.w, o.h / n.h)
      , m = eg(i, t, c, o)
      , y = tg(d, u)
      , [g,p] = h.useState(null)
      , [k,v] = h.useState(!1)
      , [x] = h.useState( () => BN(e, n, r))
      , w = h.useRef({
        onView: M => M != null && p(M),
        onStall: () => v(!0)
    })
      , b = h.useMemo( () => g == null ? null : {
        id: e,
        seq: 0,
        view: g,
        started: !0,
        ready: 0,
        players: 0,
        remainingMs: s.total
    }, [g]);
    return k ? l.jsx(l.Fragment, {
        children: a
    }) : l.jsxs(ng, {
        w: n.w,
        h: n.h,
        scale: f,
        panel: c,
        pointer: d,
        children: [l.jsx(sg, {
            fallback: a,
            children: l.jsx(Uu, {
                start: x,
                update: b,
                end: null,
                send: J0,
                area: u,
                clock: s
            })
        }), l.jsx(rg, {
            c: m,
            area: u,
            cursor: y,
            hooks: w.current
        })]
    })
}
const YN = h.memo(VN, (e, t) => e.screen === t.screen && e.gid === t.gid && e.meta === t.meta && e.clock.left === t.clock.left);
class sg extends h.Component {
    constructor() {
        super(...arguments);
        Rt(this, "state", {
            failed: !1
        })
    }
    static getDerivedStateFromError() {
        return {
            failed: !0
        }
    }
    componentDidCatch(n) {
        console.error("[screen] mirrored game", n)
    }
    render() {
        return this.state.failed ? this.props.fallback : this.props.children
    }
}
const GN = h.memo(UN, (e, t) => e.screen === t.screen && e.live.gid === t.live.gid && e.meta === t.meta)
  , Yl = 1024
  , Qs = 640;
function KN(e) {
    const t = h.useRef(0)
      , [n,r] = h.useState(0)
      , s = (e == null ? void 0 : e.phase) === "play" && typeof e.remainingMs == "number";
    return h.useEffect( () => {
        if (!s)
            return;
        t.current = oe.now() + (e.remainingMs ?? 0),
        r(e.remainingMs ?? 0);
        const o = oe.setInterval( () => r(Math.max(0, t.current - oe.now())), 250);
        return () => oe.clearInterval(o)
    }
    , [e, s]),
    n
}
function qN() {
    const [e,t] = h.useState(Ox ? null : sM)
      , n = h.useRef(null);
    St("screenShow", h.useCallback(s => {
        if (!s || typeof s.id != "number")
            return;
        const o = n.current;
        o && o.id === s.id && s.seq <= o.seq || (n.current = {
            id: s.id,
            seq: s.seq
        },
        t(s))
    }
    , [])),
    St("screenClear", h.useCallback( () => {
        n.current = null,
        Yu(),
        t(null)
    }
    , [])),
    St("liveBatches", h.useCallback(s => {
        s && typeof s.id == "number" && typeof s.gid == "number" && IN(s.id, s.gid, s.first, s.batches)
    }
    , [])),
    St("liveViews", h.useCallback(s => {
        s && typeof s.id == "number" && typeof s.gid == "number" && ON(s.id, s.gid, s.first, s.views)
    }
    , []));
    const r = KN(e);
    return l.jsx("div", {
        className: "relative overflow-hidden bg-surface font-screen text-fg",
        style: {
            width: Yl,
            height: Qs
        },
        children: e && l.jsx(QN, {
            snap: e,
            left: r
        })
    })
}
function XN(e) {
    if (e.mode === "coop" && e.game && Yn[e.game]) {
        const t = Yn[e.game];
        return {
            title: t.title,
            icon: t.icon,
            intro: t.start,
            success: t.success,
            fail: e.why || t.failError
        }
    }
    if (e.mode === "solo" && e.game && Dr[e.game]) {
        const t = Dr[e.game];
        return {
            title: t.title,
            icon: t.icon,
            intro: t.start,
            hint: t.hint,
            success: t.success,
            fail: t.failError
        }
    }
    return {
        title: e.mode === "idle" ? "Terminal" : "Hack in progress",
        icon: Cl
    }
}
function QN({snap: e, left: t}) {
    const n = XN(e)
      , r = n.icon
      , s = e.mode === "coop" ? Yn[e.game ?? ""] : void 0
      , o = s && e.role ? s.roleNames[e.role] ?? e.role : void 0;
    let a;
    e.mode === "idle" ? a = l.jsx(ns, {
        children: l.jsxs("div", {
            className: "flex items-baseline gap-3 text-7xl font-semibold",
            children: ["Ready", l.jsx("span", {
                className: "cursor-blink inline-block h-14 w-6 translate-y-1 bg-accent"
            })]
        })
    }) : e.phase === "intro" ? a = l.jsxs(ns, {
        children: [l.jsx("div", {
            className: "text-6xl font-semibold",
            children: s ? "Linking the crew" : "Connecting"
        }), n.intro && l.jsx("div", {
            className: "mt-4 max-w-[760px] text-2xl text-muted",
            children: n.intro
        })]
    }) : ZN(e) ? a = l.jsx(GN, {
        screen: e.id,
        live: e.live,
        meta: Dr[e.game],
        box: pm,
        fallback: l.jsx(ns, {
            children: l.jsx("div", {
                className: "text-6xl font-semibold",
                children: "Breaking in"
            })
        })
    }, `${e.id}:${e.live.gid}`) : s && JN(e) ? a = l.jsx(YN, {
        screen: e.id,
        gid: e.live.gid,
        meta: s,
        role: e.role ?? "",
        clock: {
            left: t,
            total: e.totalMs ?? 1
        },
        box: pm,
        fallback: l.jsx(ns, {
            children: l.jsx("div", {
                className: "text-6xl font-semibold",
                children: "Breaking in"
            })
        })
    }, `${e.id}:${e.live.gid}`) : s && e.view != null ? a = l.jsx(nM, {
        Component: s.Component,
        view: e.view,
        role: e.role ?? "",
        w: s.w,
        h: s.h
    }) : a = l.jsxs(ns, {
        children: [l.jsx("div", {
            className: "text-6xl font-semibold",
            children: "Breaking in"
        }), n.hint && l.jsx("div", {
            className: "mt-4 max-w-[760px] text-2xl text-muted",
            children: n.hint
        })]
    });
    const i = e.phase === "play" && typeof e.totalMs == "number" && e.totalMs > 0;
    return l.jsxs(l.Fragment, {
        children: [l.jsxs("header", {
            className: "flex h-[88px] items-center justify-between gap-6 border-b border-line px-12",
            children: [l.jsxs("div", {
                className: "flex min-w-0 items-center gap-4",
                children: [l.jsx(r, {
                    className: "h-9 w-9 shrink-0 text-accent"
                }), l.jsx("span", {
                    className: "truncate text-3xl font-medium",
                    children: n.title
                }), o && l.jsx("span", {
                    className: "shrink-0 rounded border border-accent-line px-3 py-0.5 text-xl text-accent",
                    children: o
                })]
            }), e.label && l.jsx("span", {
                className: "shrink-0 truncate text-2xl text-muted",
                children: e.label
            })]
        }), l.jsx("main", {
            className: "flex flex-col",
            style: {
                height: Qs - 88 - 120
            },
            children: a
        }), l.jsxs("footer", {
            className: "flex h-[120px] flex-col justify-center gap-3 px-12",
            children: [e.status && l.jsx("div", {
                className: "truncate text-2xl text-accent",
                children: e.status
            }), i && l.jsx(eM, {
                left: t,
                total: e.totalMs
            })]
        }), e.phase === "result" && l.jsx(tM, {
            success: e.success === !0,
            text: e.success ? n.success ?? "Access granted." : n.fail ?? "Access denied.",
            why: e.success || e.mode === "coop" ? void 0 : e.why
        })]
    })
}
const pm = {
    w: Yl - 48,
    h: Qs - 88 - 120 - 16,
    cx: Yl / 2,
    cy: 88 + (Qs - 88 - 120) / 2
};
function ZN(e) {
    if (e.mode !== "solo" || !e.live || e.phase !== "play" && e.phase !== "result")
        return !1;
    const t = e.game ? Dr[e.game] : void 0;
    return !!t && typeof e.live.gid == "number" && typeof e.live.seed == "number" && WN(t, e.live.settings)
}
function JN(e) {
    var t;
    return e.mode === "coop" && !!((t = e.live) != null && t.coop) && typeof e.live.gid == "number" && (e.phase === "play" || e.phase === "result")
}
function ns({children: e}) {
    return l.jsx("div", {
        className: "flex flex-1 flex-col justify-center px-12",
        children: e
    })
}
function eM({left: e, total: t}) {
    const n = Math.min(1, Math.max(0, e / t))
      , r = n <= .25;
    return l.jsxs("div", {
        className: "flex items-center gap-6",
        children: [l.jsx("div", {
            className: "h-5 flex-1 overflow-hidden rounded-sm bg-track",
            children: l.jsx("div", {
                className: `h-full origin-left transition-transform duration-[250ms] ease-linear ${r ? "bg-warn" : "bg-accent"}`,
                style: {
                    transform: `scaleX(${n})`
                }
            })
        }), l.jsxs("span", {
            className: `w-24 text-right text-4xl font-semibold tabular-nums ${r ? "text-warn" : "text-fg"}`,
            children: [Math.ceil(e / 1e3), "s"]
        })]
    })
}
function tM({success: e, text: t, why: n}) {
    return l.jsxs("div", {
        className: `flood absolute inset-0 flex flex-col items-center justify-center gap-6 px-16 text-center text-accent-ink ${e ? "bg-accent" : "bg-danger"}`,
        children: [e ? l.jsx(Cu, {
            className: "h-28 w-28"
        }) : l.jsx(Lu, {
            className: "h-28 w-28"
        }), l.jsx("div", {
            className: "text-5xl font-semibold",
            children: t
        }), n && l.jsx("div", {
            className: "text-2xl text-ink-soft",
            children: n
        })]
    })
}
function nM({Component: e, view: t, role: n, w: r, h: s}) {
    const o = Yl - 96
      , a = Qs - 88 - 120 - 16
      , i = Math.min(o / r, a / s);
    return l.jsx("div", {
        className: "pointer-events-none flex flex-1 items-center justify-center pt-4",
        children: l.jsx("div", {
            style: {
                width: r * i,
                height: s * i
            },
            children: l.jsx("div", {
                className: "flex flex-col overflow-hidden rounded-md border border-line bg-surface",
                style: {
                    width: r,
                    height: s,
                    transform: `scale(${i})`,
                    transformOrigin: "top left"
                },
                children: l.jsx(e, {
                    view: t,
                    role: n,
                    send: rM
                })
            })
        })
    })
}
const rM = () => {}
  , sM = {
    id: 1,
    seq: 1,
    mode: "solo",
    game: "path",
    phase: "play",
    totalMs: 1e4,
    remainingMs: 7400,
    label: "Fleeca, vault panel",
    status: "Stage 2 of 3"
}
  , og = new URLSearchParams(window.location.search).get("screen") === "1";
og && (xv(),
Jv());
hi.createRoot(document.getElementById("root")).render(l.jsx(Mg.StrictMode, {
    children: og ? l.jsx(qN, {}) : l.jsxs(l.Fragment, {
        children: [l.jsx(MN, {}), l.jsx(yS, {})]
    })
}));
