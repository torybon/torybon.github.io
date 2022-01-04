/*! highlight.js v9.6.0 | BSD3 License | git.io/hljslicense */
!function (e) {
    var n = "object" == typeof window && window || "object" == typeof self && self;
    "undefined" != typeof exports ? e(exports) : n && (n.hljs = e({}), "function" == typeof define && define.amd && define([], function () {
        return n.hljs
    }))
}(function (e) {
    function n(e) {
        return e.replace(/[&<>]/gm, function (e) {
            return I[e]
        })
    }

    function t(e) {
        return e.nodeName.toLowerCase()
    }

    function r(e, n) {
        var t = e && e.exec(n);
        return t && 0 === t.index
    }

    function a(e) {
        return k.test(e)
    }

    function i(e) {
        var n, t, r, i, o = e.className + " ";
        if (o += e.parentNode ? e.parentNode.className : "", t = B.exec(o)) return R(t[1]) ? t[1] : "no-highlight";
        for (o = o.split(/\s+/), n = 0, r = o.length; r > n; n++) if (i = o[n], a(i) || R(i)) return i
    }

    function o(e, n) {
        var t, r = {};
        for (t in e) r[t] = e[t];
        if (n) for (t in n) r[t] = n[t];
        return r
    }

    function u(e) {
        var n = [];
        return function r(e, a) {
            for (var i = e.firstChild; i; i = i.nextSibling) 3 === i.nodeType ? a += i.nodeValue.length : 1 === i.nodeType && (n.push({
                event: "start",
                offset: a,
                node: i
            }), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({event: "stop", offset: a, node: i}));
            return a
        }(e, 0), n
    }

    function c(e, r, a) {
        function i() {
            return e.length && r.length ? e[0].offset !== r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" === r[0].event ? e : r : e.length ? e : r
        }

        function o(e) {
            function r(e) {
                return " " + e.nodeName + '="' + n(e.value) + '"'
            }

            l += "<" + t(e) + w.map.call(e.attributes, r).join("") + ">"
        }

        function u(e) {
            l += "</" + t(e) + ">"
        }

        function c(e) {
            ("start" === e.event ? o : u)(e.node)
        }

        for (var s = 0, l = "", f = []; e.length || r.length;) {
            var g = i();
            if (l += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g === e) {
                f.reverse().forEach(u);
                do c(g.splice(0, 1)[0]), g = i(); while (g === e && g.length && g[0].offset === s);
                f.reverse().forEach(o)
            } else "start" === g[0].event ? f.push(g[0].node) : f.pop(), c(g.splice(0, 1)[0])
        }
        return l + n(a.substr(s))
    }

    function s(e) {
        function n(e) {
            return e && e.source || e
        }

        function t(t, r) {
            return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
        }

        function r(a, i) {
            if (!a.compiled) {
                if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
                    var u = {}, c = function (n, t) {
                        e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function (e) {
                            var t = e.split("|");
                            u[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                        })
                    };
                    "string" == typeof a.k ? c("keyword", a.k) : E(a.k).forEach(function (e) {
                        c(e, a.k[e])
                    }), a.k = u
                }
                a.lR = t(a.l || /\w+/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = t(a.i)), null == a.r && (a.r = 1), a.c || (a.c = []);
                var s = [];
                a.c.forEach(function (e) {
                    e.v ? e.v.forEach(function (n) {
                        s.push(o(e, n))
                    }) : s.push("self" === e ? a : e)
                }), a.c = s, a.c.forEach(function (e) {
                    r(e, a)
                }), a.starts && r(a.starts, i);
                var l = a.c.map(function (e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([a.tE, a.i]).map(n).filter(Boolean);
                a.t = l.length ? t(l.join("|"), !0) : {
                    exec: function () {
                        return null
                    }
                }
            }
        }

        r(e)
    }

    function l(e, t, a, i) {
        function o(e, n) {
            var t, a;
            for (t = 0, a = n.c.length; a > t; t++) if (r(n.c[t].bR, e)) return n.c[t]
        }

        function u(e, n) {
            if (r(e.eR, n)) {
                for (; e.endsParent && e.parent;) e = e.parent;
                return e
            }
            return e.eW ? u(e.parent, n) : void 0
        }

        function c(e, n) {
            return !a && r(n.iR, e)
        }

        function g(e, n) {
            var t = N.cI ? n[0].toLowerCase() : n[0];
            return e.k.hasOwnProperty(t) && e.k[t]
        }

        function h(e, n, t, r) {
            var a = r ? "" : y.classPrefix, i = '<span class="' + a, o = t ? "" : C;
            return i += e + '">', i + n + o
        }

        function p() {
            var e, t, r, a;
            if (!E.k) return n(B);
            for (a = "", t = 0, E.lR.lastIndex = 0, r = E.lR.exec(B); r;) a += n(B.substr(t, r.index - t)), e = g(E, r), e ? (M += e[1], a += h(e[0], n(r[0]))) : a += n(r[0]), t = E.lR.lastIndex, r = E.lR.exec(B);
            return a + n(B.substr(t))
        }

        function d() {
            var e = "string" == typeof E.sL;
            if (e && !x[E.sL]) return n(B);
            var t = e ? l(E.sL, B, !0, L[E.sL]) : f(B, E.sL.length ? E.sL : void 0);
            return E.r > 0 && (M += t.r), e && (L[E.sL] = t.top), h(t.language, t.value, !1, !0)
        }

        function b() {
            k += null != E.sL ? d() : p(), B = ""
        }

        function v(e) {
            k += e.cN ? h(e.cN, "", !0) : "", E = Object.create(e, {parent: {value: E}})
        }

        function m(e, n) {
            if (B += e, null == n) return b(), 0;
            var t = o(n, E);
            if (t) return t.skip ? B += n : (t.eB && (B += n), b(), t.rB || t.eB || (B = n)), v(t, n), t.rB ? 0 : n.length;
            var r = u(E, n);
            if (r) {
                var a = E;
                a.skip ? B += n : (a.rE || a.eE || (B += n), b(), a.eE && (B = n));
                do E.cN && (k += C), E.skip || (M += E.r), E = E.parent; while (E !== r.parent);
                return r.starts && v(r.starts, ""), a.rE ? 0 : n.length
            }
            if (c(n, E)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (E.cN || "<unnamed>") + '"');
            return B += n, n.length || 1
        }

        var N = R(e);
        if (!N) throw new Error('Unknown language: "' + e + '"');
        s(N);
        var w, E = i || N, L = {}, k = "";
        for (w = E; w !== N; w = w.parent) w.cN && (k = h(w.cN, "", !0) + k);
        var B = "", M = 0;
        try {
            for (var I, j, O = 0; ;) {
                if (E.t.lastIndex = O, I = E.t.exec(t), !I) break;
                j = m(t.substr(O, I.index - O), I[0]), O = I.index + j
            }
            for (m(t.substr(O)), w = E; w.parent; w = w.parent) w.cN && (k += C);
            return {r: M, value: k, language: e, top: E}
        } catch (T) {
            if (T.message && -1 !== T.message.indexOf("Illegal")) return {r: 0, value: n(t)};
            throw T
        }
    }

    function f(e, t) {
        t = t || y.languages || E(x);
        var r = {r: 0, value: n(e)}, a = r;
        return t.filter(R).forEach(function (n) {
            var t = l(n, e, !1);
            t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t)
        }), a.language && (r.second_best = a), r
    }

    function g(e) {
        return y.tabReplace || y.useBR ? e.replace(M, function (e, n) {
            return y.useBR && "\n" === e ? "<br>" : y.tabReplace ? n.replace(/\t/g, y.tabReplace) : void 0
        }) : e
    }

    function h(e, n, t) {
        var r = n ? L[n] : t, a = [e.trim()];
        return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim()
    }

    function p(e) {
        var n, t, r, o, s, p = i(e);
        a(p) || (y.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e, s = n.textContent, r = p ? l(p, s, !0) : f(s), t = u(n), t.length && (o = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), o.innerHTML = r.value, r.value = c(t, u(o), s)), r.value = g(r.value), e.innerHTML = r.value, e.className = h(e.className, p, r.language), e.result = {
            language: r.language,
            re: r.r
        }, r.second_best && (e.second_best = {language: r.second_best.language, re: r.second_best.r}))
    }

    function d(e) {
        y = o(y, e)
    }

    function b() {
        if (!b.called) {
            b.called = !0;
            var e = document.querySelectorAll("pre code");
            w.forEach.call(e, p)
        }
    }

    function v() {
        addEventListener("DOMContentLoaded", b, !1), addEventListener("load", b, !1)
    }

    function m(n, t) {
        var r = x[n] = t(e);
        r.aliases && r.aliases.forEach(function (e) {
            L[e] = n
        })
    }

    function N() {
        return E(x)
    }

    function R(e) {
        return e = (e || "").toLowerCase(), x[e] || x[L[e]]
    }

    var w = [], E = Object.keys, x = {}, L = {}, k = /^(no-?highlight|plain|text)$/i, B = /\blang(?:uage)?-([\w-]+)\b/i,
        M = /((^(<[^>]+>|\t|)+|(?:\n)))/gm, C = "</span>",
        y = {classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0},
        I = {"&": "&amp;", "<": "&lt;", ">": "&gt;"};
    return e.highlight = l, e.highlightAuto = f, e.fixMarkup = g, e.highlightBlock = p, e.configure = d, e.initHighlighting = b, e.initHighlightingOnLoad = v, e.registerLanguage = m, e.listLanguages = N, e.getLanguage = R, e.inherit = o, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, e.ASM = {cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE]}, e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE]
    }, e.PWM = {b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/}, e.C = function (n, t, r) {
        var a = e.inherit({cN: "comment", b: n, e: t, c: []}, r || {});
        return a.c.push(e.PWM), a.c.push({cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0}), a
    }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
        cN: "number",
        b: e.NR,
        r: 0
    }, e.CNM = {cN: "number", b: e.CNR, r: 0}, e.BNM = {cN: "number", b: e.BNR, r: 0}, e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, {b: /\[/, e: /\]/, r: 0, c: [e.BE]}]
    }, e.TM = {cN: "title", b: e.IR, r: 0}, e.UTM = {
        cN: "title",
        b: e.UIR,
        r: 0
    }, e.METHOD_GUARD = {b: "\\.\\s*" + e.UIR, r: 0}, e
});
hljs.registerLanguage("bash", function (e) {
    var t = {cN: "variable", v: [{b: /\$[\w\d#@][\w\d_]*/}, {b: /\$\{(.*?)}/}]},
        s = {cN: "string", b: /"/, e: /"/, c: [e.BE, t, {cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE]}]},
        a = {cN: "string", b: /'/, e: /'/};
    return {
        aliases: ["sh", "zsh"],
        l: /-?[a-z\._]+/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            _: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{cN: "meta", b: /^#![^\n]+sh\s*$/, r: 10}, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {b: /\w[\w\d_]*/})],
            r: 0
        }, e.HCM, s, a, t]
    }
});
hljs.registerLanguage("javascript", function (e) {
    return {
        aliases: ["js", "jsx"],
        k: {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        },
        c: [{cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/}, {
            cN: "meta",
            b: /^#!/,
            e: /$/
        }, e.ASM, e.QSM, {
            cN: "string",
            b: "`",
            e: "`",
            c: [e.BE, {cN: "subst", b: "\\$\\{", e: "\\}"}]
        }, e.CLCM, e.CBCM, {
            cN: "number",
            v: [{b: "\\b(0[bB][01]+)"}, {b: "\\b(0[oO][0-7]+)"}, {b: e.CNR}],
            r: 0
        }, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                b: /</,
                e: /(\/\w+|\w+\/)>/,
                sL: "xml",
                c: [{b: /<\w+\s*\/>/, skip: !0}, {b: /<\w+/, e: /(\/\w+|\w+\/)>/, skip: !0, c: ["self"]}]
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/}), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                c: [e.CLCM, e.CBCM]
            }],
            i: /\[|%/
        }, {b: /\$[(.]/}, e.METHOD_GUARD, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{bK: "extends"}, e.UTM]
        }, {bK: "constructor", e: /\{/, eE: !0}],
        i: /#(?!!)/
    }
});
hljs.registerLanguage("makefile", function (e) {
    var a = {cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE]};
    return {
        aliases: ["mk", "mak"],
        c: [e.HCM, {
            b: /^\w+\s*\W*=/,
            rB: !0,
            r: 0,
            starts: {e: /\s*\W*=/, eE: !0, starts: {e: /$/, r: 0, c: [a]}}
        }, {cN: "section", b: /^[\w]+:\s*$/}, {
            cN: "meta",
            b: /^\.PHONY:/,
            e: /$/,
            k: {"meta-keyword": ".PHONY"},
            l: /[\.\w]+/
        }, {b: /^\t+/, e: /$/, r: 0, c: [e.QSM, a]}]
    }
});
hljs.registerLanguage("less", function (e) {
    var r = "[\\w-]+", t = "(" + r + "|@{" + r + "})", a = [], c = [], s = function (e) {
        return {cN: "string", b: "~?" + e + ".*?" + e}
    }, b = function (e, r, t) {
        return {cN: e, b: r, r: t}
    }, n = {b: "\\(", e: "\\)", c: c, r: 0};
    c.push(e.CLCM, e.CBCM, s("'"), s('"'), e.CSSNM, {
        b: "(url|data-uri)\\(",
        starts: {cN: "string", e: "[\\)\\n]", eE: !0}
    }, b("number", "#[0-9A-Fa-f]+\\b"), n, b("variable", "@@?" + r, 10), b("variable", "@{" + r + "}"), b("built_in", "~?`[^`]*?`"), {
        cN: "attribute",
        b: r + "\\s*:",
        e: ":",
        rB: !0,
        eE: !0
    }, {cN: "meta", b: "!important"});
    var i = c.concat({b: "{", e: "}", c: a}), o = {bK: "when", eW: !0, c: [{bK: "and not"}].concat(c)}, u = {
        b: t + "\\s*:",
        rB: !0,
        e: "[;}]",
        r: 0,
        c: [{cN: "attribute", b: t, e: ":", eE: !0, starts: {eW: !0, i: "[<=$]", r: 0, c: c}}]
    }, l = {
        cN: "keyword",
        b: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts: {e: "[;{}]", rE: !0, c: c, r: 0}
    }, C = {cN: "variable", v: [{b: "@" + r + "\\s*:", r: 15}, {b: "@" + r}], starts: {e: "[;}]", rE: !0, c: i}}, p = {
        v: [{b: "[\\.#:&\\[>]", e: "[;{}]"}, {b: t + "[^;]*{", e: "{"}],
        rB: !0,
        rE: !0,
        i: "[<='$\"]",
        c: [e.CLCM, e.CBCM, o, b("keyword", "all\\b"), b("variable", "@{" + r + "}"), b("selector-tag", t + "%?", 0), b("selector-id", "#" + t), b("selector-class", "\\." + t, 0), b("selector-tag", "&", 0), {
            cN: "selector-attr",
            b: "\\[",
            e: "\\]"
        }, {cN: "selector-pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/}, {b: "\\(", e: "\\)", c: i}, {b: "!important"}]
    };
    return a.push(e.CLCM, e.CBCM, l, C, u, p), {cI: !0, i: "[=>'/<($\"]", c: a}
});
hljs.registerLanguage("json", function (e) {
    var i = {literal: "true false null"}, n = [e.QSM, e.CNM], r = {e: ",", eW: !0, eE: !0, c: n, k: i},
        t = {b: "{", e: "}", c: [{cN: "attr", b: /"/, e: /"/, c: [e.BE], i: "\\n"}, e.inherit(r, {b: /:/})], i: "\\S"},
        c = {b: "\\[", e: "\\]", c: [e.inherit(r)], i: "\\S"};
    return n.splice(n.length, 0, t, c), {c: n, k: i, i: "\\S"}
});
hljs.registerLanguage("xml", function (s) {
    var e = "[A-Za-z0-9\\._:-]+", t = {
        eW: !0,
        i: /</,
        r: 0,
        c: [{cN: "attr", b: e, r: 0}, {
            b: /=\s*/,
            r: 0,
            c: [{cN: "string", endsParent: !0, v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}, {b: /[^\s"'=<>`]+/}]}]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "meta",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{b: "\\[", e: "\\]"}]
        }, s.C("<!--", "-->", {r: 10}), {b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10}, {
            b: /<\?(php)?/,
            e: /\?>/,
            sL: "php",
            c: [{b: "/\\*", e: "\\*/", skip: !0}]
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {name: "style"},
            c: [t],
            starts: {e: "</style>", rE: !0, sL: ["css", "xml"]}
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {name: "script"},
            c: [t],
            starts: {e: "</script>", rE: !0, sL: ["actionscript", "javascript", "handlebars", "xml"]}
        }, {cN: "meta", v: [{b: /<\?xml/, e: /\?>/, r: 10}, {b: /<\?\w+/, e: /\?>/}]}, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{cN: "name", b: /[^\/><\s]+/, r: 0}, t]
        }]
    }
});
hljs.registerLanguage("markdown", function (e) {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{cN: "section", v: [{b: "^#{1,6}", e: "$"}, {b: "^.+?\\n[=-]{2,}$"}]}, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+"}, {cN: "strong", b: "[*_]{2}.+?[*_]{2}"}, {
            cN: "emphasis",
            v: [{b: "\\*.+?\\*"}, {b: "_.+?_", r: 0}]
        }, {cN: "quote", b: "^>\\s+", e: "$"}, {
            cN: "code",
            v: [{b: "^```w*s*$", e: "^```s*$"}, {b: "`.+?`"}, {b: "^( {4}|	)", e: "$", r: 0}]
        }, {b: "^[-\\*]{3,}", e: "$"}, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{cN: "string", b: "\\[", e: "\\]", eB: !0, rE: !0, r: 0}, {
                cN: "link",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {cN: "symbol", b: "\\]\\[", e: "\\]", eB: !0, eE: !0}],
            r: 10
        }, {
            b: /^\[[^\n]+\]:/,
            rB: !0,
            c: [{cN: "symbol", b: /\[/, e: /\]/, eB: !0, eE: !0}, {cN: "link", b: /:\s*/, e: /$/, eB: !0}]
        }]
    }
});
hljs.registerLanguage("python", function (e) {
    var r = {cN: "meta", b: /^(>>>|\.\.\.) /}, b = {
            cN: "string",
            c: [e.BE],
            v: [{b: /(u|b)?r?'''/, e: /'''/, c: [r], r: 10}, {b: /(u|b)?r?"""/, e: /"""/, c: [r], r: 10}, {
                b: /(u|r|ur)'/,
                e: /'/,
                r: 10
            }, {b: /(u|r|ur)"/, e: /"/, r: 10}, {b: /(b|br)'/, e: /'/}, {b: /(b|br)"/, e: /"/}, e.ASM, e.QSM]
        }, a = {cN: "number", r: 0, v: [{b: e.BNR + "[lLjJ]?"}, {b: "\\b(0o[0-7]+)[lLjJ]?"}, {b: e.CNR + "[lLjJ]?"}]},
        l = {cN: "params", b: /\(/, e: /\)/, c: ["self", r, a, b]};
    return {
        aliases: ["py", "gyp"],
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [r, a, b, e.HCM, {
            v: [{cN: "function", bK: "def", r: 10}, {cN: "class", bK: "class"}],
            e: /:/,
            i: /[${=;\n,]/,
            c: [e.UTM, l, {b: /->/, eW: !0, k: "None"}]
        }, {cN: "meta", b: /^[\t ]*@/, e: /$/}, {b: /\b(print|exec)\(/}]
    }
});
hljs.registerLanguage("scss", function (e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*", i = {cN: "variable", b: "(\\$" + t + ")\\b"},
        r = {cN: "number", b: "#[0-9A-Fa-f]+"};
    ({
        cN: "attribute",
        b: "[A-Z\\_\\.\\-]+",
        e: ":",
        eE: !0,
        i: "[^\\s]",
        starts: {eW: !0, eE: !0, c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, {cN: "meta", b: "!important"}]}
    });
    return {
        cI: !0,
        i: "[=/|']",
        c: [e.CLCM, e.CBCM, {cN: "selector-id", b: "\\#[A-Za-z0-9_-]+", r: 0}, {
            cN: "selector-class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {cN: "selector-attr", b: "\\[", e: "\\]", i: "$"}, {
            cN: "selector-tag",
            b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
            r: 0
        }, {b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"}, {b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"}, i, {
            cN: "attribute",
            b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
            i: "[^\\s]"
        }, {b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"}, {
            b: ":",
            e: ";",
            c: [i, r, e.CSSNM, e.QSM, e.ASM, {cN: "meta", b: "!important"}]
        }, {
            b: "@",
            e: "[{;]",
            k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
            c: [i, e.QSM, e.ASM, r, e.CSSNM, {b: "\\s[A-Za-z0-9_.-]+", r: 0}]
        }]
    }
});
hljs.registerLanguage("css", function (e) {
    var c = "[a-zA-Z-][a-zA-Z0-9_-]*", t = {
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                eW: !0,
                eE: !0,
                c: [{
                    b: /[\w-]+\(/,
                    rB: !0,
                    c: [{cN: "built_in", b: /[\w-]+/}, {b: /\(/, e: /\)/, c: [e.ASM, e.QSM]}]
                }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {cN: "number", b: "#[0-9A-Fa-f]+"}, {cN: "meta", b: "!important"}]
            }
        }]
    };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, {cN: "selector-id", b: /#[A-Za-z0-9_-]+/}, {
            cN: "selector-class",
            b: /\.[A-Za-z0-9_-]+/
        }, {cN: "selector-attr", b: /\[/, e: /\]/, i: "$"}, {
            cN: "selector-pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
        }, {b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page"}, {
            b: "@",
            e: "[{;]",
            i: /:/,
            c: [{cN: "keyword", b: /\w+/}, {b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM]}]
        }, {cN: "selector-tag", b: c, r: 0}, {b: "{", e: "}", i: /\S/, c: [e.CBCM, t]}]
    }
});
hljs.registerLanguage("nginx", function (e) {
    var r = {cN: "variable", v: [{b: /\$\d+/}, {b: /\$\{/, e: /}/}, {b: "[\\$\\@]" + e.UIR}]}, b = {
        eW: !0,
        l: "[a-z/_]+",
        k: {literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},
        r: 0,
        i: "=>",
        c: [e.HCM, {cN: "string", c: [e.BE, r], v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}]}, {
            b: "([a-z]+):/",
            e: "\\s",
            eW: !0,
            eE: !0,
            c: [r]
        }, {
            cN: "regexp",
            c: [e.BE, r],
            v: [{b: "\\s\\^", e: "\\s|{|;", rE: !0}, {
                b: "~\\*?\\s+",
                e: "\\s|{|;",
                rE: !0
            }, {b: "\\*(\\.[a-z\\-]+)+"}, {b: "([a-z\\-]+\\.)+\\*"}]
        }, {cN: "number", b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"}, {
            cN: "number",
            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
            r: 0
        }, r]
    };
    return {
        aliases: ["nginxconf"],
        c: [e.HCM, {b: e.UIR + "\\s+{", rB: !0, e: "{", c: [{cN: "section", b: e.UIR}], r: 0}, {
            b: e.UIR + "\\s",
            e: ";|{",
            rB: !0,
            c: [{cN: "attribute", b: e.UIR, starts: b}],
            r: 0
        }],
        i: "[^\\s\\}]"
    }
});
hljs.registerLanguage("stylus", function (e) {
    var t = {cN: "variable", b: "\\$" + e.IR}, o = {cN: "number", b: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"},
        i = ["charset", "css", "debug", "extend", "font-face", "for", "import", "include", "media", "mixin", "page", "warn", "while"],
        r = ["after", "before", "first-letter", "first-line", "active", "first-child", "focus", "hover", "lang", "link", "visited"],
        n = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
        a = "[\\.\\s\\n\\[\\:,]",
        l = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"],
        d = ["\\?", "(\\bReturn\\b)", "(\\bEnd\\b)", "(\\bend\\b)", "(\\bdef\\b)", ";", "#\\s", "\\*\\s", "===\\s", "\\|", "%"];
    return {
        aliases: ["styl"],
        cI: !1,
        k: "if else for in",
        i: "(" + d.join("|") + ")",
        c: [e.QSM, e.ASM, e.CLCM, e.CBCM, o, {
            b: "\\.[a-zA-Z][a-zA-Z0-9_-]*" + a,
            rB: !0,
            c: [{cN: "selector-class", b: "\\.[a-zA-Z][a-zA-Z0-9_-]*"}]
        }, {
            b: "\\#[a-zA-Z][a-zA-Z0-9_-]*" + a,
            rB: !0,
            c: [{cN: "selector-id", b: "\\#[a-zA-Z][a-zA-Z0-9_-]*"}]
        }, {
            b: "\\b(" + n.join("|") + ")" + a,
            rB: !0,
            c: [{cN: "selector-tag", b: "\\b[a-zA-Z][a-zA-Z0-9_-]*"}]
        }, {b: "&?:?:\\b(" + r.join("|") + ")" + a}, {b: "@(" + i.join("|") + ")\\b"}, t, e.CSSNM, e.NM, {
            cN: "function",
            b: "^[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",
            i: "[\\n]",
            rB: !0,
            c: [{cN: "title", b: "\\b[a-zA-Z][a-zA-Z0-9_-]*"}, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [o, t, e.ASM, e.CSSNM, e.NM, e.QSM]
            }]
        }, {
            cN: "attribute",
            b: "\\b(" + l.reverse().join("|") + ")\\b",
            starts: {e: /;|$/, c: [o, t, e.ASM, e.QSM, e.CSSNM, e.NM, e.CBCM], i: /\./, r: 0}
        }]
    }
});