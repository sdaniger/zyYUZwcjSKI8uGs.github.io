/*!
 * DomAnimator.js
 *
 * MIT licensed
 * Copyright (C) 2015 Tim Holman, http://tholman.com
 */
;
var DomAnimator = (function() {
    var c = 0;
    var f = [];
    var i = [];
    var o = !!!window.chrome;
    var q = null;
    var e = 500;
    var h = false;
    var j = "\u00A0";

    function p(v, u) {
        for (var t in u) {
            if (!(t in v)) {
                v[t] = u[t]
            }
        }
        return v
    }

    function s(t) {
        if (o) {
            return m(t)
        } else {
            return n(t.join("\n"))
        }
    }

    function r(t) {
        if (o) {
            return m(t.split("\n"))
        } else {
            return n(t)
        }
    }

    function m(u) {
        var t = 0;
        for (t; t < u.length; t++) {
            u[t] = u[t].replace(/ /g, j)
        }
        return u
    }

    function a(t) {
        if (!t) {
            t = e
        }
        if (f.length === 0) {
            console.log("I need frames to animate. You can add them with .addFrame( string )");
            return
        }
        if (h === false) {
            l()
        }
        q = setInterval(function() {
            b()
        }, t)
    }

    function b() {
        var u = f[c];
        if (o) {
            var t = 0;
            for (t; t < i.length; t++) {
                i[t].nodeValue = u[t]
            }
        } else {
            i[0].nodeValue = u
        }
        c = c + 1;
        if (c === f.length) {
            c = 0
        }
    }

    function l() {
        var u = document.head;
        var v = u.parentNode;
        if (o) {
            var t = 0;
            var x = f[0].length;
            for (t; t < x; t++) {
                var w = document.createComment("");
                i.push(w);
                v.insertBefore(w, u)
            }
        } else {
            var w = document.createComment("");
            i.push(w);
            v.insertBefore(w, u)
        }
    }

    function k() {
        clearInterval(q)
    }

    function g(u) {
        if (!u) {
            u = "no frame data"
        }
        var t = typeof(u);
        if (t === "object") {
            f.push(s(u))
        } else {
            if (t === "string") {
                f.push(r(u))
            }
        }
    }

    function n(t) {
        return "\n" + t + "\n"
    }

    function d() {}
    return p(d, {
        addFrame: g,
        animate: a,
        stop: k
    })
});

var domAni1 = new DomAnimator();
domAni.addFrame("喧嘩もしたし　何度も別れようともしたけど
君がいなけりゃつまらない
Don’t stop music　丼 stop 寿司");
domAni.animate(0);

var domAni2 = new DomAnimator();
domAni.addFrame("関サバ　アジ　ホタテ");
domAni.addFrame("ネギトロ　ブリ　穴子");
domAni.addFrame("甘エビ　イカ　コハダ");
domAni.addFrame("カンパチ　タイ　カツオ");
domAni.addFrame("子供はやっぱりタマゴ");
domAni.addFrame("大人のふりしてエンガワ");
domAni.addFrame("サーモン大好きオンナ");
domAni.addFrame("唐揚げ食うなよオトコ");
domAni.animate(2000);

var domAni3 = new DomAnimator();
domAni.addFrame("へいらっしゃい
寿司食べたい　この世の終わりの日は
寿司食べたい　最後の晩餐に
寿司食べたい　特別なあの日には
寿司食べたい　トロ　タコ　ウニ　いくら");
domAni.animate(0);
