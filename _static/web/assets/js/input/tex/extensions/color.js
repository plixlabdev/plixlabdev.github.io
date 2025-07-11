!function(e) {
    var o = {};
    function t(r) {
        if (o[r])
            return o[r].exports;
        var n = o[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, t),
        n.l = !0,
        n.exports
    }
    t.m = e,
    t.c = o,
    t.d = function(e, o, r) {
        t.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: r
        })
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(e, o) {
        if (1 & o && (e = t(e)),
        8 & o)
            return e;
        if (4 & o && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (t.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & o && "string" != typeof e)
            for (var n in e)
                t.d(r, n, function(o) {
                    return e[o]
                }
                .bind(null, n));
        return r
    }
    ,
    t.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(o, "a", o),
        o
    }
    ,
    t.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }
    ,
    t.p = "",
    t(t.s = 10)
}([function(e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.ColorMethods = void 0;
    var r = t(7)
      , n = t(8);
    function a(e) {
        var o = "+" + e
          , t = e.replace(/^.*?([a-z]*)$/, "$1");
        return {
            width: "+" + 2 * parseFloat(o) + t,
            height: o,
            depth: o,
            lspace: e
        }
    }
    o.ColorMethods = {},
    o.ColorMethods.Color = function(e, o) {
        var t = e.GetBrackets(o, "")
          , r = e.GetArgument(o)
          , n = e.configuration.packageData.get("color").model.getColor(t, r)
          , a = e.itemFactory.create("style").setProperties({
            styles: {
                mathcolor: n
            }
        });
        e.stack.env.color = n,
        e.Push(a)
    }
    ,
    o.ColorMethods.TextColor = function(e, o) {
        var t = e.GetBrackets(o, "")
          , r = e.GetArgument(o)
          , n = e.configuration.packageData.get("color").model.getColor(t, r)
          , a = e.stack.env.color;
        e.stack.env.color = n;
        var l = e.ParseArg(o);
        a ? e.stack.env.color = a : delete e.stack.env.color;
        var i = e.create("node", "mstyle", [l], {
            mathcolor: n
        });
        e.Push(i)
    }
    ,
    o.ColorMethods.DefineColor = function(e, o) {
        var t = e.GetArgument(o)
          , r = e.GetArgument(o)
          , n = e.GetArgument(o);
        e.configuration.packageData.get("color").model.defineColor(r, t, n)
    }
    ,
    o.ColorMethods.ColorBox = function(e, o) {
        var t = e.GetArgument(o)
          , l = n.default.internalMath(e, e.GetArgument(o))
          , i = e.configuration.packageData.get("color").model
          , u = e.create("node", "mpadded", l, {
            mathbackground: i.getColor("named", t)
        });
        r.default.setProperties(u, a(e.options.color.padding)),
        e.Push(u)
    }
    ,
    o.ColorMethods.FColorBox = function(e, o) {
        var t = e.GetArgument(o)
          , l = e.GetArgument(o)
          , i = n.default.internalMath(e, e.GetArgument(o))
          , u = e.options.color
          , d = e.configuration.packageData.get("color").model
          , c = e.create("node", "mpadded", i, {
            mathbackground: d.getColor("named", l),
            style: "border: " + u.borderWidth + " solid " + d.getColor("named", t)
        });
        r.default.setProperties(c, a(u.padding)),
        e.Push(c)
    }
}
, function(e, o, t) {
    "use strict";
    var r = this && this.__values || function(e) {
        var o = "function" == typeof Symbol && Symbol.iterator
          , t = o && e[o]
          , r = 0;
        if (t)
            return t.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
        throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    ;
    Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.ColorModel = void 0;
    var n = t(9)
      , a = t(2)
      , l = new Map
      , i = function() {
        function e() {
            this.userColors = new Map
        }
        return e.prototype.normalizeColor = function(e, o) {
            if (!e || "named" === e)
                return o;
            if (l.has(e))
                return l.get(e)(o);
            throw new n.default("UndefinedColorModel","Color model '%1' not defined",e)
        }
        ,
        e.prototype.getColor = function(e, o) {
            return e && "named" !== e ? this.normalizeColor(e, o) : this.getColorByName(o)
        }
        ,
        e.prototype.getColorByName = function(e) {
            return this.userColors.has(e) ? this.userColors.get(e) : a.COLORS.has(e) ? a.COLORS.get(e) : e
        }
        ,
        e.prototype.defineColor = function(e, o, t) {
            var r = this.normalizeColor(e, t);
            this.userColors.set(o, r)
        }
        ,
        e
    }();
    o.ColorModel = i,
    l.set("rgb", (function(e) {
        var o, t, a = e.trim().split(/\s*,\s*/), l = "#";
        if (3 !== a.length)
            throw new n.default("ModelArg1","Color values for the %1 model require 3 numbers","rgb");
        try {
            for (var i = r(a), u = i.next(); !u.done; u = i.next()) {
                var d = u.value;
                if (!d.match(/^(\d+(\.\d*)?|\.\d+)$/))
                    throw new n.default("InvalidDecimalNumber","Invalid decimal number");
                var c = parseFloat(d);
                if (c < 0 || c > 1)
                    throw new n.default("ModelArg2","Color values for the %1 model must be between %2 and %3","rgb","0","1");
                var s = Math.floor(255 * c).toString(16);
                s.length < 2 && (s = "0" + s),
                l += s
            }
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                u && !u.done && (t = i.return) && t.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return l
    }
    )),
    l.set("RGB", (function(e) {
        var o, t, a = e.trim().split(/\s*,\s*/), l = "#";
        if (3 !== a.length)
            throw new n.default("ModelArg1","Color values for the %1 model require 3 numbers","RGB");
        try {
            for (var i = r(a), u = i.next(); !u.done; u = i.next()) {
                var d = u.value;
                if (!d.match(/^\d+$/))
                    throw new n.default("InvalidNumber","Invalid number");
                var c = parseInt(d);
                if (c > 255)
                    throw new n.default("ModelArg2","Color values for the %1 model must be between %2 and %3","RGB","0","255");
                var s = c.toString(16);
                s.length < 2 && (s = "0" + s),
                l += s
            }
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                u && !u.done && (t = i.return) && t.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return l
    }
    )),
    l.set("gray", (function(e) {
        if (!e.match(/^\s*(\d+(\.\d*)?|\.\d+)\s*$/))
            throw new n.default("InvalidDecimalNumber","Invalid decimal number");
        var o = parseFloat(e);
        if (o < 0 || o > 1)
            throw new n.default("ModelArg2","Color values for the %1 model must be between %2 and %3","gray","0","1");
        var t = Math.floor(255 * o).toString(16);
        return t.length < 2 && (t = "0" + t),
        "#" + t + t + t
    }
    ))
}
, function(e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.COLORS = void 0,
    o.COLORS = new Map([["Apricot", "#FBB982"], ["Aquamarine", "#00B5BE"], ["Bittersweet", "#C04F17"], ["Black", "#221E1F"], ["Blue", "#2D2F92"], ["BlueGreen", "#00B3B8"], ["BlueViolet", "#473992"], ["BrickRed", "#B6321C"], ["Brown", "#792500"], ["BurntOrange", "#F7921D"], ["CadetBlue", "#74729A"], ["CarnationPink", "#F282B4"], ["Cerulean", "#00A2E3"], ["CornflowerBlue", "#41B0E4"], ["Cyan", "#00AEEF"], ["Dandelion", "#FDBC42"], ["DarkOrchid", "#A4538A"], ["Emerald", "#00A99D"], ["ForestGreen", "#009B55"], ["Fuchsia", "#8C368C"], ["Goldenrod", "#FFDF42"], ["Gray", "#949698"], ["Green", "#00A64F"], ["GreenYellow", "#DFE674"], ["JungleGreen", "#00A99A"], ["Lavender", "#F49EC4"], ["LimeGreen", "#8DC73E"], ["Magenta", "#EC008C"], ["Mahogany", "#A9341F"], ["Maroon", "#AF3235"], ["Melon", "#F89E7B"], ["MidnightBlue", "#006795"], ["Mulberry", "#A93C93"], ["NavyBlue", "#006EB8"], ["OliveGreen", "#3C8031"], ["Orange", "#F58137"], ["OrangeRed", "#ED135A"], ["Orchid", "#AF72B0"], ["Peach", "#F7965A"], ["Periwinkle", "#7977B8"], ["PineGreen", "#008B72"], ["Plum", "#92268F"], ["ProcessBlue", "#00B0F0"], ["Purple", "#99479B"], ["RawSienna", "#974006"], ["Red", "#ED1B23"], ["RedOrange", "#F26035"], ["RedViolet", "#A1246B"], ["Rhodamine", "#EF559F"], ["RoyalBlue", "#0071BC"], ["RoyalPurple", "#613F99"], ["RubineRed", "#ED017D"], ["Salmon", "#F69289"], ["SeaGreen", "#3FBC9D"], ["Sepia", "#671800"], ["SkyBlue", "#46C5DD"], ["SpringGreen", "#C6DC67"], ["Tan", "#DA9D76"], ["TealBlue", "#00AEB3"], ["Thistle", "#D883B7"], ["Turquoise", "#00B4CE"], ["Violet", "#58429B"], ["VioletRed", "#EF58A0"], ["White", "#FFFFFF"], ["WildStrawberry", "#EE2967"], ["Yellow", "#FFF200"], ["YellowGreen", "#98CC70"], ["YellowOrange", "#FAA21A"]])
}
, function(e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.isObject = MathJax._.components.global.isObject,
    o.combineConfig = MathJax._.components.global.combineConfig,
    o.combineDefaults = MathJax._.components.global.combineDefaults,
    o.combineWithMathJax = MathJax._.components.global.combineWithMathJax,
    o.MathJax = MathJax._.components.global.MathJax
}
, function(e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.ColorConfiguration = void 0;
    var r = t(5)
      , n = t(6)
      , a = t(0)
      , l = t(1);
    new r.CommandMap("color",{
        color: "Color",
        textcolor: "TextColor",
        definecolor: "DefineColor",
        colorbox: "ColorBox",
        fcolorbox: "FColorBox"
    },a.ColorMethods);
    o.ColorConfiguration = n.Configuration.create("color", {
        handler: {
            macro: ["color"]
        },
        options: {
            color: {
                padding: "5px",
                borderWidth: "2px"
            }
        },
        config: function(e, o) {
            o.parseOptions.packageData.set("color", {
                model: new l.ColorModel
            })
        }
    })
}
, function(e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.AbstractSymbolMap = MathJax._.input.tex.SymbolMap.AbstractSymbolMap,
    o.RegExpMap = MathJax._.input.tex.SymbolMap.RegExpMap,
    o.AbstractParseMap = MathJax._.input.tex.SymbolMap.AbstractParseMap,
    o.CharacterMap = MathJax._.input.tex.SymbolMap.CharacterMap,
    o.DelimiterMap = MathJax._.input.tex.SymbolMap.DelimiterMap,
    o.MacroMap = MathJax._.input.tex.SymbolMap.MacroMap,
    o.CommandMap = MathJax._.input.tex.SymbolMap.CommandMap,
    o.EnvironmentMap = MathJax._.input.tex.SymbolMap.EnvironmentMap
}
, function(e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.Configuration = MathJax._.input.tex.Configuration.Configuration,
    o.ConfigurationHandler = MathJax._.input.tex.Configuration.ConfigurationHandler,
    o.ParserConfiguration = MathJax._.input.tex.Configuration.ParserConfiguration
}
, function(e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.default = MathJax._.input.tex.NodeUtil.default
}
, function(e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.default = MathJax._.input.tex.ParseUtil.default
}
, function(e, o, t) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    o.default = MathJax._.input.tex.TexError.default
}
, function(e, o, t) {
    "use strict";
    t.r(o);
    var r = t(3)
      , n = t(4)
      , a = t(2)
      , l = t(0)
      , i = t(1);
    Object(r.combineWithMathJax)({
        _: {
            input: {
                tex: {
                    color: {
                        ColorConfiguration: n,
                        ColorConstants: a,
                        ColorMethods: l,
                        ColorUtil: i
                    }
                }
            }
        }
    })
}
]);

