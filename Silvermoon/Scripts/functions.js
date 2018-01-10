function initShareButtons() {
    $(".twitter.share-btn")
        .click(function () {
            $(".share-link, .social-share").removeClass("active")
        }),
    FB.init({
        appId: 448962768573495,
        status: !0,
        cookie: !0
    }),
    $(".facebook.share-btn").click(function () {
        var e = $(this),
            t = $("meta[name=description]").length > 0
                ? $("meta[name=description]").attr("content")
                : "",
            i = {
                method: "feed",
                link: e.data("url"),
                name: e.data("name"),
                description: t
            },
            s = e.data("img");
        return "" != s && (i.picture = s),
        FB.ui(i, function () {}),
        $(".share-link, .social-share").removeClass("active"),
        !1
    }),
    $(".gplus.share-btn").click(function () {
        var e = $(this),
            t = "https://plus.google.com/share?url=" + encodeURIComponent(e.data("url"));
        return window.open(t, "gPlusShare", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=5" +
                "00,height=300"),
        $(".share-link, .social-share").removeClass("active"),
        !1
    })
}

function presentFeatures() {
    setTimeout(function () {
        $(".feature")
            .each(function (e) {
                var t = $(this);
                setTimeout(function () {
                    t.addClass("show")
                }, 150 * e)
            }),
        9 >= ie && $("#work").fadeIn(400)
    }, 2e3)
}

function setHomepage() {
    $("body").css({background: "#111"});
    var e = $(window).width(),
        t = $(window).height() / 2,
        i = 2 * t;
    e > 767
        ? ($("#cube").css({
            height: $(window).height(),
            width: $(window).width()
        }), $("#welcome").css({
            "padding-top": $(window).height() / 2 - 140
        }))
        : ($("#cube").css({height: "auto", width: "auto"}), $("#welcome").css({"padding-top": 230})),
    void 0 !== ie
        ? 0 == init_ie_home && ($(".secondary").hide().css({"z-index": 3}), init_ie_home = !0)
        : ($("#container").css({
            transform: "translateZ(-" + t + "px)"
        }), $(".primary").css({
            transform: "translateZ(" + t + "px)"
        }), $(".secondary").css({
            transform: "rotateX(-90deg) translateZ(" + t + "px)"
        })),
    e > 767 && (slides_loader_dispatched || (slides_loader_dispatched = !0, initSlides(), $.ajax({url: "/wp-content/themes/epic/slides.php"}).done(function (e) {
        $(".face.secondary").html(e.slides_and_pagers),
        initSlides();
        var t = e.preload_assets;
        pre = new Preloader({
            assets: t,
            cb: function () {
                slides_ready = !0,
                null !== afterload_cb && afterload_cb()
            }
        }),
        pre.preload()
    })))
}

function initSlides() {
    function e() {
        setHomepage(),
        $(".slide.out").removeClass("out"),
        $(".slide.active .slideLogo").addClass("show"),
        $(".slide.active .asset").addClass("show"),
        $(".slide.active .slideContent")
            .delay(500)
            .slideDown(1e3, function () {
                setTimeout(function () {
                    $(".slide.active h2").addClass("show")
                }, 20),
                setTimeout(function () {
                    $(".slide.active p").addClass("show")
                }, 500),
                setTimeout(function () {
                    $(".slide.active a").addClass("show")
                }, 1e3),
                setTimeout(function () {
                    $(".slide.active li")
                        .each(function (e) {
                            var t = $(this);
                            setTimeout(function () {
                                t.addClass("show")
                            }, 150 * e)
                        }),
                    $(".slide.active .asset2").addClass("show"),
                    $(".slide.active .asset").addClass("active")
                }, 1500),
                setTimeout(function () {
                    $(".page-controls").removeClass("hold")
                }, 2200)
            })
    }

    function t(t) {
        if ($(".page-controls").addClass("hold"), t.hasClass("next-btn"))
            if ($(".pager li.active").next().length > 0)
                var i = $(".pager li.active").next().index();
            else
                var i = 0;
            else if (t.hasClass("prev-btn"))
                if ($(".pager li.active").prev().length > 0)
                    var i = $(".pager li.active").prev().index();
                else
                    var i = 3;
    else
            var i = t.index();
        if ($(".slide.active").addClass("out").removeClass("active"), $(".secondary .slide:eq(" + i + ")").hide().addClass("active"), $(".pager li").removeClass("active"), $(".pager li:eq(" + i + ")").addClass("active"), t.hasClass("trigger"))
            var s = $("header").clone(),
                n = $(".header-logo").clone().html("");
        var a = /safari/i.test(navigator.userAgent.toLowerCase()),
            o = /chrome/i.test(navigator.userAgent.toLowerCase());
        o && (a = !1),
        $(".slide.active").hasClass("light")
            ? ($("#viewport").addClass("light"), t.hasClass("trigger")
                ? secondary_logo = new Logo(n, "#ffffff", a)
                : secondary_logo.animateColor("#ffffff"))
            : ($("#viewport").removeClass("light"), t.hasClass("trigger")
                ? secondary_logo = new Logo(n, "#3a4046", a)
                : secondary_logo.animateColor("#3a4046")),
        t.hasClass("trigger") && (s.find(".header-logo").replaceWith(n), s.prependTo(".face.secondary")),
        $(".slide.out").length > 0
            ? ($(".slide.out h2, .slide.out p, .slide.out a, .slide.out .slideLogo,.slide.out li, " +
                    ".slide.out .asset, .slide.out .asset2").removeClass("show"), $(".slide.out .asset").removeClass("active"), $(".slide.out .slideContent").fadeOut(500), setTimeout(function () {
                $(".slide.active").fadeIn(800)
            }, 1e3), setTimeout(function () {
                e()
            }, 2e3))
            : $(".slide.active").show(),
        immersive = !0
    }
    var i = $(window).height() / 2,
        s = 2 * i;
    $(".pager li, .next-btn,.prev-btn")
        .unbind("click")
        .click(function () {
            return $(".page-controls").hasClass("hold") || $(this).hasClass("active") || t($(this)),
            !1
        }),
    $(".trigger")
        .unbind("click")
        .click(function () {
            if ($(window).width() > 767 && $(window).height() > 600) {
                if ($(".page-controls").hasClass("hold"))
                    return !1;
                if (!slides_ready) {
                    var n = $(this);
                    return afterload_cb = function () {
                        n.trigger("click")
                    },
                    !1
                }
                return t($(this)),
                $(this).addClass("stick"),
                $("html, body").animate({
                    scrollTop: "0"
                }, 200),
                "undefined" != typeof ie
                    ? ($(".feature").each(function (e) {
                        var t = $(this);
                        setTimeout(function () {
                            t.removeClass("show")
                        }, 10 * e)
                    }), $("#welcome").fadeOut(400), setTimeout(function () {
                        $(".secondary")
                            .fadeIn(800, function () {
                                e(),
                                $(".page-controls")
                                    .removeClass("ie-hold")
                                    .addClass("show")
                            })
                    }, 1e3))
                    : setTimeout(function () {
                        $(".feature")
                            .each(function (e) {
                                var t = $(this);
                                setTimeout(function () {
                                    t.addClass("rotate")
                                }, 10 * e)
                            }),
                        setTimeout(function () {
                            $("#container").css({
                                "-webkit-transform": "translateZ(-" + s + "px)",
                                "-ms-transform": "translateZ(-" + s + "px)",
                                transform: "translateZ(-" + s + "px)"
                            })
                        }, 400),
                        setTimeout(function () {
                            $("#cube").addClass("rotate")
                        }, 900),
                        setTimeout(function () {
                            $("#container").css({
                                "-webkit-transform": "translateZ(-" + i + "px)",
                                "-ms-transform": "translateZ(-" + i + "px)",
                                transform: "translateZ(-" + i + "px)"
                            })
                        }, 1500),
                        setTimeout(function () {
                            e(),
                            $(".page-controls").addClass("show")
                        }, 2e3)
                    }, 500),
                setTimeout(function () {
                    $("#work .trigger").hide()
                }, 2e3),
                !1
            }
        })
}

function instaFeed() {
    if ($("#instafeed").length > 0) {
        var e = new Instafeed({
            get: "user",
            userId: 780166812,
            accessToken: "780166812.1677ed0.d44c10cdc9384c20903c3c3033797791",
            limit: 6,
            resolution: "thumbnail",
            success: function (e) {
                for (var t = e.data, i = 0; i < t.length; i++)
                    t[i].images.thumbnail.url = t[i].images.thumbnail.url.replace("/s150x150", "/s320x320")
            }
        });
        e.run()
    }
    if ($("#mini-instagram").length > 0) {
        var t = new Instafeed({
            target: "mini-instagram",
            get: "user",
            userId: 780166812,
            accessToken: "780166812.1677ed0.d44c10cdc9384c20903c3c3033797791",
            limit: 2,
            resolution: "thumbnail",
            success: function (e) {
                for (var t = e.data, i = 0; i < t.length; i++)
                    t[i].images.thumbnail.url = t[i].images.thumbnail.url.replace("/s150x150", "/s320x320")
            }
        });
        t.run()
    }
}

function initTweets() {
    0 != $("#tweet1").length && $.get("/wp-content/themes/epic/library/humaan-tweets/fetch.php", function (e) {
        if (null != e)
            for (var t = 0; t < e.length; t++) {
                var i = e[t],
                    s;
                s = i.retweeted_status
                    ? i.retweeted_status.text
                    : i.text,
                s = s.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, function (e) {
                    return '<a href="' + e + '">' + e + "</a>"
                }),
                s = s.replace(/(@[_a-z0-9]+)/gi, function (e) {
                    return '<a href="https://twitter.com/' + e.substring(1) + '">' + e.substring(0) + "</a>"
                });
                var n = $("<article />"),
                    a = $("<p></p>").html(s),
                    o = $('<a href="http://www.twitter.com/wearehumaan" class="tag icn blog-twitter">find u' +
                            's on twitter</a>');
                n
                    .append(a)
                    .append(o),
                $("#tweet" + (t + 1)).length > 0 && $("#tweet" + (t + 1)).replaceWith(n)
            }
        })
}

function initSmoothScroller() {
    $("a[href*=#]:not([href=#])")
        .click(function () {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                var e = $(this.hash);
                if (e = e.length
                    ? e
                    : $("[name=" + this.hash.slice(1) + "]"), e.length)
                    return $("html,body").animate({
                        scrollTop: e
                            .offset()
                            .top
                    }, 800, "easeInOutQuad", function () {}),
                    !1
            }
        })
}

function caseStudyBudiiSignal() {
    $("#sig-1 .s1")
        .fadeIn(300, function () {
            $(this)
                .next()
                .fadeIn(300, function () {
                    $(this)
                        .next()
                        .fadeIn(300, function () {
                            $("#sig-1 .s1, #sig-1 .s2, #sig-1 .s3")
                                .delay(500)
                                .fadeOut()
                        })
                })
        }),
    $("#sig-2 .s1")
        .delay(2e3)
        .fadeIn(300, function () {
            $(this)
                .next()
                .fadeIn(300, function () {
                    $(this)
                        .next()
                        .fadeIn(300, function () {
                            $("#sig-2 .s1, #sig-2 .s2, #sig-2 .s3")
                                .delay(500)
                                .fadeOut()
                        })
                })
        }),
    $("#sig-3 .s1")
        .delay(4e3)
        .fadeIn(300, function () {
            $(this)
                .next()
                .fadeIn(300, function () {
                    $(this)
                        .next()
                        .fadeIn(300, function () {
                            $("#sig-3 .s1, #sig-3 .s2, #sig-3 .s3")
                                .delay(500)
                                .fadeOut()
                        })
                })
        }),
    setTimeout(function () {
        caseStudyBudiiSignal()
    }, 6e3)
}
var pre = null,
    afterload_cb = null,
    slides_loader_dispatched = !1,
    slides_ready = !1,
    ie,
    reload_timeout = null,
    w_width = 0,
    w_height = 0;
$(document).ready(function () {
    function e() {
        $(window).width() < 600
            ? 0 == $(".dropnav").length && ($("#service #intro nav .active").append('<span class="icn drop" />'), $("#service #intro nav").clone().addClass("dropnav").appendTo("#intro"), $(".dropnav .active").remove())
            : $(".dropnav").remove()
    }

    function t() {
        var e,
            t = new google
                .maps
                .LatLng(-31.945601, 115.86157),
            i = {
                zoom: 16,
                center: t,
                scrollwheel: !1,
                scaleControl: !1,
                mapTypeControl: !1,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        e = new google
            .maps
            .Map(document.getElementById("location-map"), i);
        var s = new google
                .maps
                .MarkerImage("/wp-content/themes/epic/img/pin.svg", new google.maps.Size(57.1, 75.8), new google.maps.Point(0, 0), new google.maps.Point(28, 72)),
            n = new google
                .maps
                .Marker({
                    position: new google
                        .maps
                        .LatLng(-31.945601, 115.86157),
                    map: e,
                    icon: s
                });
        google
            .maps
            .event
            .trigger(e, "resize")
    }
    if (ie = function () {
        var e,
            t = -1,
            i = window.navigator.userAgent,
            s = i.indexOf("MSIE "),
            n = i.indexOf("Trident/");
        if (s > 0)
            t = parseInt(i.substring(s + 5, i.indexOf(".", s)), 10);
        else if (n > 0) {
            var a = i.indexOf("rv:");
            t = parseInt(i.substring(a + 3, i.indexOf(".", a)), 10)
        }
        return t > -1
            ? t
            : e
    }(),
    void 0 !== ie && $("#home").length > 0 && $("body").addClass("ie"),
    9 > ie && $("body").prepend('<div id="ienotice">You are using an outdated, unsupported browser. For a better ' +
            'experience, upgrade to <a target="_blank" href="https://www.google.com/chrome/">' +
            'Chrome</a>, <a target="_blank" href="http://www.mozilla.org/en-US/firefox/new/">' +
            'FireFox</a>, <a target="_blank" href="http://www.apple.com/safari/">Safari</a> o' +
            'r a more recent version of <a target="_blank" href="http://windows.microsoft.com' +
            '/en-US/internet-explorer/products/ie/home">Internet Explorer</a>.</div>'),
    w_width = $(window).width(),
    w_height = $(window).height(),
    $("#home").length > 0) {
        if (9 >= ie
            ? $("#work").hide()
            : $("#work").show(), $(window).width() > 767 && $(window).height() > 600)
            var i = $(window).height() / 2 - 140;
        else
            var i = 230;
        $("#welcome").css({
            display: "block",
            opacity: 0,
            "padding-top": i - 30
        }),
        $("#welcome")
            .delay(400)
            .animate({
                opacity: 1,
                "padding-top": i
            }, 800, "easeOutQuad"),
        $("header")
            .delay(1600)
            .fadeIn(600),
        presentFeatures()
    }
    if (!$("#home").length > 0 && $(window).scroll(function () {
        $(window).scrollTop() > 0
            ? $("header,#mob-nav").addClass("stuck")
            : $("header,#mob-nav").removeClass("stuck")
    }), $("#mob-nav").click(function () {
        return $(this).addClass("close"),
        $("body").append('<div class="screen"><div class="inner" /></div><div class="screenW" />'),
        $(window).height() < 440 && ($(".screen").css({position: "absolute"}), $("html, body").animate({
            scrollTop: "0"
        }, 100)),
        setTimeout(function () {
            $(".screen .inner").addClass("active"),
            $(".screenW").addClass("active")
        }, 100),
        $("header nav")
            .first()
            .clone()
            .appendTo(".screen .inner"),
        $(".screen").click(function () {
            $("#mob-nav").removeClass("close"),
            $(".screen .inner").addClass("out"),
            setTimeout(function () {
                $(".screenW").removeClass("active")
            }, 400),
            setTimeout(function () {
                $(".screen,.screenW").remove()
            }, 1e3)
        }),
        $(".screen nav a").click(function (e) {
            e.stopPropagation()
        }),
        !1
    }), $("#service #intro nav a.active").click(function () {
        return $(".dropnav").slideToggle(200, "easeInOutQuad"),
        !1
    }), $("#service").length > 0 && e(), $(window).resize(function () {
        $("#service").length > 0 && e()
    }), $("#service").length > 0 && $(window).width() > 767 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) && $(window).scroll(function () {
        var e = $(window).scrollTop() / 2,
            t = $(window).scrollTop() / 6;
        $("#intro").css({
            height: 570 - e
        }),
        $("#headline").css({
            "margin-top": 200 - t
        })
    }), $("#about").length > 0 && instaFeed(), $("#blog").length > 0 && (instaFeed(), $(window).scroll(function () {
        if ($(".comments").length > 0) {
            var e = $(window).height() + $(window).scrollTop();
            e > $(".comments")
                .offset()
                .top || 600 > e
                ? $(".share-link, .social-share").removeClass("show")
                : $(".share-link, .social-share").addClass("show")
        }
    }), $(".share-link").click(function () {
        $(".share-link,.social-share").toggleClass("active")
    }), $(".facebook.share-btn").length > 0 && initShareButtons()), $("#case-study").length > 0 && ($(window).scroll(function () {
        if ($(window).width() > 767 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            var e = $(window).scrollTop() / 2,
                t = .01 * (100 - 2 * $(window).scrollTop()),
                i = $(window).scrollTop() / 3;
            if ($("#banner").css({backgroundPositionY: e}), $("#banner nav").css({top: e, opacity: t}), $("#project-tags").css({opacity: t}), $("#banner #title").css({
                top: 180 + i
            }), $(".cs-slider").length > 0) {
                var s = $(window).scrollTop() + $(window).height() / 2,
                    n = $(window).scrollTop() + $(window).height() / 2 - $(".cs-slider")
                        .offset()
                        .top;
                s > $(".cs-slider")
                    .offset()
                    .top && s < $(".cs-slider")
                    .offset()
                    .top + $(".cs-slider").height() - 140
                    ? $("#case-study .cs-slider .nav-arrow")
                        .fadeIn(200)
                        .css({top: n})
                    : $("#case-study .cs-slider .nav-arrow").fadeOut(200)
            }
        }
        var a = $(window).height() + $(window).scrollTop();
        a > $("#cta-bar")
            .offset()
            .top || 600 > a
            ? $(".share-link").removeClass("show")
            : $(".share-link").addClass("show")
    }), $(".cycle-slideshow").on("cycle-pager-activated cycle-next cycle-prev", function () {
        var e = $(this)
            .offset()
            .top;
        $("html, body").animate({
            scrollTop: e - 100
        }, 500, "easeInOutExpo")
    }), $(document.documentElement).keyup(function (e) {
        39 == e.keyCode && $(".cycle-slideshow").cycle("next"),
        37 == e.keyCode && $(".cycle-slideshow").cycle("prev")
    })), $("#home").length > 0 && setHomepage(), $(window).resize(function () {
        $("#home").length > 0 && setHomepage()
    }), $("#contact").length > 0 && $("#view-map").click(function () {
        return $("#location-map").slideDown(300, "easeInOutQuad"),
        setTimeout(t, 250),
        $(this).fadeOut(400),
        !1
    }), initTweets(), initSmoothScroller(), $("#content.budii").length > 0) {
        caseStudyBudiiSignal();
        var s = !1;
        $(window).scroll(function () {
            if (!s) {
                var e = $(window).scrollTop() + $(window).height() / 2;
                e > $(".budii-animation-handheld")
                    .offset()
                    .top && (s = !0, $(".budii-animation-handheld").animate({
                    bottom: "36.5%"
                }, 1e3, "easeOutCubic"))
            }
        })
    }
    $("#testimonials .t-slideshow").length > 0 && ($(".testimonials.pagination").html(""), $("#testimonials .t-slideshow").cycle())
});
var init_ie_home = !1,
    immersive = !1;