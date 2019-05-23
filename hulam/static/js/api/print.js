!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.printJS = t() : e.printJS = t()
}(window, function () {
    return function (n) {
        var r = {};

        function o(e) {
            if (r[e]) return r[e].exports;
            var t = r[e] = {i: e, l: !1, exports: {}};
            return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
        }

        return o.m = n, o.c = r, o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
        }, o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, o.t = function (t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var r in t) o.d(n, r, function (e) {
                return t[e]
            }.bind(null, r));
            return n
        }, o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 4)
    }([function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.addWrapper = function (e, t) {
            return '<div style="font-family:' + t.font + " !important; font-size: " + t.font_size + ' !important; width:100%;">' + e + "</div>"
        }, t.capitalizePrint = function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }, t.collectStyles = c, t.loopNodesCollectStyles = function e(t, n) {
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                if (-1 === n.ignoreElements.indexOf(o.getAttribute("id"))) {
                    var i = o.tagName;
                    if ("INPUT" === i || "TEXTAREA" === i || "SELECT" === i) {
                        var a = c(o, n), l = o.parentNode,
                            d = "SELECT" === i ? document.createTextNode(o.options[o.selectedIndex].text) : document.createTextNode(o.value),
                            u = document.createElement("div");
                        u.appendChild(d), u.setAttribute("style", a), l.appendChild(u), l.removeChild(o)
                    } else o.setAttribute("style", c(o, n));
                    var s = o.children;
                    s && s.length && e(s, n)
                } else o.parentNode.removeChild(o)
            }
        }, t.addHeader = function (e, t, n) {
            var r = document.createElement("h1"), o = document.createTextNode(t);
            r.appendChild(o), r.setAttribute("style", n), e.insertBefore(r, e.childNodes[0])
        }, t.cleanUp = function (t) {
            t.showModal && r.default.close();
            t.onLoadingEnd && t.onLoadingEnd();
            (t.showModal || t.onLoadingStart) && window.URL.revokeObjectURL(t.printable);
            if (t.onPrintDialogClose) {
                var n = "mouseover";
                (o.default.isChrome() || o.default.isFirefox()) && (n = "focus");
                window.addEventListener(n, function e() {
                    window.removeEventListener(n, e), t.onPrintDialogClose()
                })
            }
        }, t.isRawHTML = function (e) {
            return new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>").test(e)
        };
        var r = a(n(3)), o = a(n(2));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function c(e, t) {
            var n = document.defaultView || window, r = "", o = n.getComputedStyle(e, "");
            return Object.keys(o).map(function (e) {
                (-1 !== t.targetStyles.indexOf("*") || -1 !== t.targetStyle.indexOf(o[e]) || function (e, t) {
                    for (var n = 0; n < e.length; n++) if ("object" === (void 0 === t ? "undefined" : i(t)) && -1 !== t.indexOf(e[n])) return !0;
                    return !1
                }(t.targetStyles, o[e])) && o.getPropertyValue(o[e]) && (r += o[e] + ":" + o.getPropertyValue(o[e]) + ";")
            }), r += "max-width: " + t.maxWidth + "px !important;" + t.font_size + " !important;"
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, o = n(2), i = (r = o) && r.__esModule ? r : {default: r}, a = n(0);
        var l = {
            send: function (r, e) {
                document.getElementsByTagName("body")[0].appendChild(e);
                var o = document.getElementById(r.frameId);
                o.onload = function () {
                    if ("pdf" !== r.type) {
                        var e = o.contentWindow || o.contentDocument;
                        if (e.document && (e = e.document), e.body.innerHTML = r.htmlData, "pdf" !== r.type && null !== r.style) {
                            var t = document.createElement("style");
                            t.innerHTML = r.style, e.head.appendChild(t)
                        }
                        var n = e.getElementsByTagName("img");
                        0 < n.length ? function (e) {
                            var t = [], n = !0, r = !1, o = void 0;
                            try {
                                for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                                    var l = i.value;
                                    t.push(u(l))
                                }
                            } catch (e) {
                                r = !0, o = e
                            } finally {
                                try {
                                    !n && a.return && a.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                            return Promise.all(t)
                        }(n).then(function () {
                            return d(o, r)
                        }) : d(o, r)
                    } else d(o, r)
                }
            }
        };

        function d(t, n) {
            try {
                if (t.focus(), i.default.isEdge() || i.default.isIE()) try {
                    t.contentWindow.document.execCommand("print", !1, null)
                } catch (e) {
                    t.contentWindow.print()
                } else t.contentWindow.print()
            } catch (e) {
                n.onError(e)
            } finally {
                (0, a.cleanUp)(n)
            }
        }

        function u(n) {
            return new Promise(function (t) {
                !function e() {
                    n && void 0 !== n.naturalWidth && 0 !== n.naturalWidth && n.complete ? t() : setTimeout(e, 500)
                }()
            })
        }

        t.default = l
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = {
            isFirefox: function () {
                return "undefined" != typeof InstallTrigger
            }, isIE: function () {
                return -1 !== navigator.userAgent.indexOf("MSIE") || !!document.documentMode
            }, isEdge: function () {
                return !r.isIE() && !!window.StyleMedia
            }, isChrome: function () {
                return !!(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window).chrome
            }, isSafari: function () {
                return 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || -1 !== navigator.userAgent.toLowerCase().indexOf("safari")
            }
        };
        t.default = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            show: function (e) {
                var t = document.createElement("div");
                t.setAttribute("style", "font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;"), t.setAttribute("id", "printJS-Modal");
                var n = document.createElement("div");
                n.setAttribute("style", "display:table-cell; vertical-align:middle; padding-bottom:100px;");
                var r = document.createElement("div");
                r.setAttribute("class", "printClose"), r.setAttribute("id", "printClose"), n.appendChild(r);
                var o = document.createElement("span");
                o.setAttribute("class", "printSpinner"), n.appendChild(o);
                var i = document.createTextNode(e.modalMessage);
                n.appendChild(i), t.appendChild(n), document.getElementsByTagName("body")[0].appendChild(t), document.getElementById("printClose").addEventListener("click", function () {
                    a.close()
                })
            }, close: function () {
                var e = document.getElementById("printJS-Modal");
                e.parentNode.removeChild(e)
            }
        };
        t.default = a
    }, function (e, t, n) {
        e.exports = n(5)
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), n(6);
        var r, o = n(7);
        var i = ((r = o) && r.__esModule ? r : {default: r}).default.init;
        "undefined" != typeof window && (window.printJS = i), t.default = i
    }, function (e, t, n) {
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, a = r(n(2)), l = r(n(3)), d = r(n(8)), u = r(n(9)), s = r(n(10)), c = r(n(11)), f = r(n(12));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var p = ["pdf", "html", "image", "json", "raw-html"];
        t.default = {
            init: function () {
                var t = {
                    printable: null,
                    fallbackPrintable: null,
                    type: "pdf",
                    header: null,
                    headerStyle: "font-weight: 300;",
                    maxWidth: 800,
                    font: "TimesNewRoman",
                    font_size: "12pt",
                    honorMarginPadding: !0,
                    honorColor: !1,
                    properties: null,
                    gridHeaderStyle: "font-weight: bold; padding: 5px; border: 1px solid #dddddd;",
                    gridStyle: "border: 1px solid lightgray; margin-bottom: -1px;",
                    showModal: !1,
                    onError: function (e) {
                        throw e
                    },
                    onLoadingStart: null,
                    onLoadingEnd: null,
                    onPrintDialogClose: null,
                    onPdfOpen: null,
                    onBrowserIncompatible: function () {
                        return !0
                    },
                    modalMessage: "Retrieving Document...",
                    frameId: "printJS",
                    htmlData: "",
                    documentTitle: "Document",
                    targetStyle: ["clear", "display", "width", "min-width", "height", "min-height", "max-height"],
                    targetStyles: ["border", "box", "break", "text-decoration"],
                    ignoreElements: [],
                    imageStyle: "width:100%;",
                    repeatTableHeader: !0,
                    css: null,
                    style: null,
                    scanStyles: !0,
                    base64: !1
                }, e = arguments[0];
                if (void 0 === e) throw new Error("printJS expects at least 1 attribute.");
                switch (void 0 === e ? "undefined" : i(e)) {
                    case"string":
                        t.printable = encodeURI(e), t.fallbackPrintable = t.printable, t.type = arguments[1] || t.type;
                        break;
                    case"object":
                        for (var n in t.printable = e.printable, t.fallbackPrintable = void 0 !== e.fallbackPrintable ? e.fallbackPrintable : t.printable, t.base64 = void 0 !== e.base64, t) "printable" !== n && "fallbackPrintable" !== n && "base64" !== n && (t[n] = void 0 !== e[n] ? e[n] : t[n]);
                        break;
                    default:
                        throw new Error('Unexpected argument type! Expected "string" or "object", got ' + (void 0 === e ? "undefined" : i(e)))
                }
                if (!t.printable) throw new Error("Missing printable information.");
                if (!t.type || "string" != typeof t.type || -1 === p.indexOf(t.type.toLowerCase())) throw new Error("Invalid print type. Available types are: pdf, html, image and json.");
                t.showModal && l.default.show(t), t.onLoadingStart && t.onLoadingStart();
                var r = document.getElementById(t.frameId);
                r && r.parentNode.removeChild(r);
                var o = void 0;
                switch ((o = document.createElement("iframe")).setAttribute("style", "visibility: hidden; height: 0; width: 0; position: absolute;"), o.setAttribute("id", t.frameId), "pdf" !== t.type && (o.srcdoc = "<html><head><title>" + t.documentTitle + "</title>", null !== t.css && (Array.isArray(t.css) || (t.css = [t.css]), t.css.forEach(function (e) {
                    o.srcdoc += '<link rel="stylesheet" href="' + e + '">'
                })), o.srcdoc += "</head><body></body></html>"), t.type) {
                    case"pdf":
                        if (a.default.isFirefox() || a.default.isEdge() || a.default.isIE()) try {
                            if (console.info("PrintJS currently doesn't support PDF printing in Firefox, Internet Explorer and Edge."), !0 === t.onBrowserIncompatible()) window.open(t.fallbackPrintable, "_blank").focus(), t.onPdfOpen && t.onPdfOpen()
                        } catch (e) {
                            t.onError(e)
                        } finally {
                            t.showModal && l.default.close(), t.onLoadingEnd && t.onLoadingEnd()
                        } else d.default.print(t, o);
                        break;
                    case"image":
                        c.default.print(t, o);
                        break;
                    case"html":
                        u.default.print(t, o);
                        break;
                    case"raw-html":
                        s.default.print(t, o);
                        break;
                    case"json":
                        f.default.print(t, o)
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, o = n(1), i = (r = o) && r.__esModule ? r : {default: r}, a = n(0);

        function l(e, t, n) {
            var r = new window.Blob([n], {type: "application/pdf"});
            r = window.URL.createObjectURL(r), t.setAttribute("src", r), i.default.send(e, t)
        }

        t.default = {
            print: function (e, t) {
                if (e.base64) {
                    var n = Uint8Array.from(atob(e.printable), function (e) {
                        return e.charCodeAt(0)
                    });
                    l(e, t, n)
                } else {
                    e.printable = /^(blob|http)/i.test(e.printable) ? e.printable : window.location.origin + ("/" !== e.printable.charAt(0) ? "/" + e.printable : e.printable);
                    var r = new window.XMLHttpRequest;
                    r.responseType = "arraybuffer", r.addEventListener("load", function () {
                        if (-1 === [200, 201].indexOf(r.status)) return (0, a.cleanUp)(e), void e.onError(r.statusText);
                        l(e, t, r.response)
                    }), r.open("GET", e.printable, !0), r.send()
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, i = n(0), o = n(1), a = (r = o) && r.__esModule ? r : {default: r};
        t.default = {
            print: function (e, t) {
                var n = document.getElementById(e.printable);
                if (!n) return window.console.error("Invalid HTML element id: " + e.printable), !1;
                var r = document.createElement("div");
                if (r.appendChild(n.cloneNode(!0)), r.setAttribute("style", "height:0; overflow:hidden;"), r.setAttribute("id", "printJS-html"), n.parentNode.appendChild(r), r = document.getElementById("printJS-html"), !0 === e.scanStyles) {
                    e.honorMarginPadding && e.targetStyles.push("margin", "padding"), e.honorColor && e.targetStyles.push("color"), r.setAttribute("style", (0, i.collectStyles)(r, e) + "margin:0 !important;");
                    var o = r.children;
                    (0, i.loopNodesCollectStyles)(o, e)
                }
                e.header && (0, i.addHeader)(r, e.header, e.headerStyle), r.parentNode.removeChild(r), e.htmlData = (0, i.addWrapper)(r.innerHTML, e), a.default.send(e, t)
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, o = n(0), i = n(1), a = (r = i) && r.__esModule ? r : {default: r};
        t.default = {
            print: function (e, t) {
                e.htmlData = (0, o.addWrapper)(e.printable, e), a.default.send(e, t)
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, o = n(0), i = n(1), a = (r = i) && r.__esModule ? r : {default: r};
        t.default = {
            print: function (e, t) {
                e.printable.constructor !== Array && (e.printable = [e.printable]);
                var l, d, u, n = document.createElement("div");
                n.setAttribute("style", "width:100%"), (l = n, d = e, u = [], d.printable.forEach(function (e, t) {
                    var n, r, o, i, a = document.createElement("img");
                    a.src = e, u.push((n = l, r = d, o = a, i = t, new Promise(function (t) {
                        o.onload = function () {
                            var e = document.createElement("div");
                            e.setAttribute("style", r.imageStyle), o.setAttribute("style", "width:100%;"), o.setAttribute("id", "printableImage" + i), e.appendChild(o), n.appendChild(e), t()
                        }
                    })))
                }), Promise.all(u)).then(function () {
                    e.header && (0, o.addHeader)(n, e.header, e.headerStyle), e.htmlData = n.outerHTML, a.default.send(e, t)
                })
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, s = n(0), i = n(1), a = (r = i) && r.__esModule ? r : {default: r};
        t.default = {
            print: function (t, e) {
                if ("object" !== o(t.printable)) throw new Error("Invalid javascript data object (JSON).");
                if ("boolean" != typeof t.repeatTableHeader) throw new Error("Invalid value for repeatTableHeader attribute (JSON).");
                if (!t.properties || !Array.isArray(t.properties)) throw new Error("Invalid properties array for your JSON data.");
                t.properties = t.properties.map(function (e) {
                    return {
                        field: "object" === (void 0 === e ? "undefined" : o(e)) ? e.field : e,
                        displayName: "object" === (void 0 === e ? "undefined" : o(e)) ? e.displayName : e,
                        columnSize: "object" === (void 0 === e ? "undefined" : o(e)) && e.columnSize ? e.columnSize + ";" : 100 / t.properties.length + "%;"
                    }
                });
                var n = "";
                t.header && (n += (0, s.isRawHTML)(t.header) ? t.header : '<h1 style="' + t.headerStyle + '">' + t.header + "</h1>"), n += function (e) {
                    var t = e.printable, n = e.properties,
                        r = '<table style="border-collapse: collapse; width: 100%;">';
                    e.repeatTableHeader && (r += "<thead>");
                    r += "<tr>";
                    for (var o = 0; o < n.length; o++) r += '<th style="width:' + n[o].columnSize + ";" + e.gridHeaderStyle + '">' + (0, s.capitalizePrint)(n[o].displayName) + "</th>";
                    r += "</tr>", e.repeatTableHeader && (r += "</thead>");
                    r += "<tbody>";
                    for (var i = 0; i < t.length; i++) {
                        r += "<tr>";
                        for (var a = 0; a < n.length; a++) {
                            var l = t[i], d = n[a].field.split(".");
                            if (1 < d.length) for (var u = 0; u < d.length; u++) l = l[d[u]]; else l = l[n[a].field];
                            r += '<td style="width:' + n[a].columnSize + e.gridStyle + '">' + l + "</td>"
                        }
                        r += "</tr>"
                    }
                    return r += "</tbody></table>"
                }(t), t.htmlData = (0, s.addWrapper)(n, t), a.default.send(t, e)
            }
        }
    }]).default
});