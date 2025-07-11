!function(t) {
    var e = {};
    function o(a) {
        if (e[a])
            return e[a].exports;
        var n = e[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(n.exports, n, n.exports, o),
        n.l = !0,
        n.exports
    }
    o.m = t,
    o.c = e,
    o.d = function(t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }
    ,
    o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(t, e) {
        if (1 & e && (t = o(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var a = Object.create(null);
        if (o.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var n in t)
                o.d(a, n, function(e) {
                    return t[e]
                }
                .bind(null, n));
        return a
    }
    ,
    o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return o.d(e, "a", e),
        e
    }
    ,
    o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    o.p = "",
    o(o.s = 7)
}([function(t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isObject = MathJax._.components.global.isObject,
    e.combineConfig = MathJax._.components.global.combineConfig,
    e.combineDefaults = MathJax._.components.global.combineDefaults,
    e.combineWithMathJax = MathJax._.components.global.combineWithMathJax,
    e.MathJax = MathJax._.components.global.MathJax
}
, function(t, e, o) {
    "use strict";
    var a = this && this.__values || function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator
          , o = e && t[e]
          , a = 0;
        if (o)
            return o.call(t);
        if (t && "number" == typeof t.length)
            return {
                next: function() {
                    return t && a >= t.length && (t = void 0),
                    {
                        value: t && t[a++],
                        done: !t
                    }
                }
            };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.BoldsymbolConfiguration = e.rewriteBoldTokens = e.createBoldToken = e.BoldsymbolMethods = void 0;
    var n = o(2)
      , r = o(3)
      , i = o(4)
      , l = o(5)
      , u = o(6)
      , s = {};
    function c(t, e, o, a) {
        var n = u.NodeFactory.createToken(t, e, o, a);
        return "mtext" !== e && t.configuration.parser.stack.env.boldsymbol && (r.default.setProperty(n, "fixBold", !0),
        t.configuration.addNode("fixBold", n)),
        n
    }
    function d(t) {
        var e, o;
        try {
            for (var n = a(t.data.getList("fixBold")), l = n.next(); !l.done; l = n.next()) {
                var u = l.value;
                if (r.default.getProperty(u, "fixBold")) {
                    var c = r.default.getAttribute(u, "mathvariant");
                    null == c ? r.default.setAttribute(u, "mathvariant", i.TexConstant.Variant.BOLD) : r.default.setAttribute(u, "mathvariant", s[c] || c),
                    r.default.removeProperties(u, "fixBold")
                }
            }
        } catch (t) {
            e = {
                error: t
            }
        } finally {
            try {
                l && !l.done && (o = n.return) && o.call(n)
            } finally {
                if (e)
                    throw e.error
            }
        }
    }
    s[i.TexConstant.Variant.NORMAL] = i.TexConstant.Variant.BOLD,
    s[i.TexConstant.Variant.ITALIC] = i.TexConstant.Variant.BOLDITALIC,
    s[i.TexConstant.Variant.FRAKTUR] = i.TexConstant.Variant.BOLDFRAKTUR,
    s[i.TexConstant.Variant.SCRIPT] = i.TexConstant.Variant.BOLDSCRIPT,
    s[i.TexConstant.Variant.SANSSERIF] = i.TexConstant.Variant.BOLDSANSSERIF,
    s["-tex-calligraphic"] = "-tex-bold-calligraphic",
    s["-tex-oldstyle"] = "-tex-bold-oldstyle",
    e.BoldsymbolMethods = {},
    e.BoldsymbolMethods.Boldsymbol = function(t, e) {
        var o = t.stack.env.boldsymbol;
        t.stack.env.boldsymbol = !0;
        var a = t.ParseArg(e);
        t.stack.env.boldsymbol = o,
        t.Push(a)
    }
    ,
    new l.CommandMap("boldsymbol",{
        boldsymbol: "Boldsymbol"
    },e.BoldsymbolMethods),
    e.createBoldToken = c,
    e.rewriteBoldTokens = d,
    e.BoldsymbolConfiguration = n.Configuration.create("boldsymbol", {
        handler: {
            macro: ["boldsymbol"]
        },
        nodes: {
            token: c
        },
        postprocessors: [d]
    })
}
, function(t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Configuration = MathJax._.input.tex.Configuration.Configuration,
    e.ConfigurationHandler = MathJax._.input.tex.Configuration.ConfigurationHandler,
    e.ParserConfiguration = MathJax._.input.tex.Configuration.ParserConfiguration
}
, function(t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = MathJax._.input.tex.NodeUtil.default
}
, function(t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.TexConstant = MathJax._.input.tex.TexConstants.TexConstant
}
, function(t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.AbstractSymbolMap = MathJax._.input.tex.SymbolMap.AbstractSymbolMap,
    e.RegExpMap = MathJax._.input.tex.SymbolMap.RegExpMap,
    e.AbstractParseMap = MathJax._.input.tex.SymbolMap.AbstractParseMap,
    e.CharacterMap = MathJax._.input.tex.SymbolMap.CharacterMap,
    e.DelimiterMap = MathJax._.input.tex.SymbolMap.DelimiterMap,
    e.MacroMap = MathJax._.input.tex.SymbolMap.MacroMap,
    e.CommandMap = MathJax._.input.tex.SymbolMap.CommandMap,
    e.EnvironmentMap = MathJax._.input.tex.SymbolMap.EnvironmentMap
}
, function(t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.NodeFactory = MathJax._.input.tex.NodeFactory.NodeFactory
}
, function(t, e, o) {
    "use strict";
    o.r(e);
    var a = o(0)
      , n = o(1);
    Object(a.combineWithMathJax)({
        _: {
            input: {
                tex: {
                    boldsymbol: {
                        BoldsymbolConfiguration: n
                    }
                }
            }
        }
    })
}
]);
