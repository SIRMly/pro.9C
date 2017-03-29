/**
 * Created by SIRMly on 2016/6/24.
 */
$(function () {
    document.ontouchmove = function (e) {
        e.preventDefault();
    };
    var audioSrcs = [
        "audio/bg.mp3",
        "audio/1-1.mp3",
        "audio/1-2.mp3",
        "audio/2-1.mp3",
        "audio/2-2.mp3",
        "audio/3.mp3",
        "audio/3-2.mp3",
        "audio/4.mp3",
        "audio/5.mp3"
    ];
    //document.getElementById("audio-bg").play();
    document.addEventListener("WeixinJSBridgeReady", function () {
    }, false);
    var bgm,
        audio1_1,
        audio1_2,
        audio2_1,
        audio2_2,
        audio3,
        audio3_2,
        audio4,
        audio5;
    //var bgm = document.getElementById("bgm"),
    //                    audio1_1 = document.getElementById("audio1-1"),
    //                    audio1_2 = document.getElementById("audio1-2"),
    //                    audio2_1 = document.getElementById("audio2-1"),
    //                    audio2_2 = document.getElementById("audio2-2"),
    //                    audio3 = document.getElementById("audio3"),
    //                    audio3_2 = document.getElementById("audio3-2"),
    //                    audio4 = document.getElementById("audio4"),
    //                    audio5 = document.getElementById("audio5");
    PreLoadImg([
        "img/arrow.png",
        "img/bottle-man1.png",
        "img/bottle-man2.png",
        "img/cloud1.png",
        "img/cloud2.png",
        "img/cloud3.png",
        "img/flag1.png",
        "img/flag2.png",
        "img/flag3.png",
        "img/gas1.png",
        "img/gas2.png",
        "img/page1-bottle.png",
        "img/page1-bottle1.png",
        "img/page1-bottle2.png",
        "img/page1-bottle3.png",
        "img/page1-bottle4.png",
        "img/page1-box-back.png",
        "img/page1-box-font.png",
        "img/page1-floor.png",
        "img/page2-bottle0.png",
        "img/page2-bottle1.png",
        "img/page2-bottle2.png",
        "img/page2-cai.png",
        "img/page2-gai.png",
        "img/page2-floor.png",
        "img/page2-word.png",
        "img/page2-word1.png",
        "img/page3-word1.png",
        "img/page3-word2.png",
        "img/page3-word3.png",
        "img/page3-word4.png",
        "img/page3-msg.png",
        "img/page3-msg-bo.png",
        "img/page3-msg-red.png",
        "img/page3-people.png",
        "img/page3-people2.png",
        "img/page4-pic.png",
        "img/page4-word1.png",
        "img/page4-word2.png",
        "img/page4-word3.png",
        "img/page4-word4.png",
        "img/page4-word5.png",
        "img/page4-word6.png",
        "img/page5-add.png",
        "img/page5-bg.png",
        "img/page5-bottle.png",
        "img/page5-que.png",
        "img/page5-word1.png",
        "img/page5-word2.png",
        "img/page5-word3.png",
        "img/page5-word4.png",
        "img/page6-food1-in.png",
        "img/page6-food1-out.png",
        "img/page6-food2-in.png",
        "img/page6-food2-out.png",
        "img/page6-food3-in.png",
        "img/page6-food3-out.png",
        "img/page6-word.png",
        "img/page6-word2.png",
        "img/page6-word3.png",
        "img/page7-food2-in.png",
        "img/page7-food2-out.png",
        "img/page7-food3-in.png",
        "img/page7-food3-out.png",
        "img/page7-word.png",
        "img/page7-word2.png",
        "img/page7-word3.png",
        "img/page8-food2-in.png",
        "img/page8-food2-out.png",
        "img/page8-food3-in.png",
        "img/page8-food3-out.png",
        "img/page8-word.png",
        "img/page8-word2.png",
        "img/page8-word3.png",
        "img/page9-bottle.png",
        "img/page9-btn1.png",
        "img/page9-btn2.png",
        "img/page9-btn3.png",
        "img/page9-cai.png",
        "img/page9-corner.png",
        "img/page9-que.png",
        "img/page9-squ1.png",
        "img/page9-squ2.png",
        "img/page9-squ3.png",
        "img/page10-bg.jpg",
        "img/page10-heart.png",
        "img/page10-p1.png",
        "img/page10-top.png",
        "img/reply-btn.png",
        "img/sun-inner.png",
        "img/sun-out.png",
        "img/sweet1.png",
        "img/sweet2.png"
    ], function () {
        var nowWidth = 91, audioThis;
        for (var i = 0; i < audioSrcs.length; i++) {
            var audio = document.createElement("audio");
            audio.src = audioSrcs[i];
            audio.preload = "auto";
            audio.id = "audio" + i;
            nowWidth++;
            $("#progress").width(nowWidth + "%");
            (function (audioThis) {
                console.log(audioThis);
                document.body.appendChild(audioThis);
            })(audio);
            if (nowWidth === 100) {
                bgm = document.getElementById("audio0"),
                    audio1_1 = document.getElementById("audio1"),
                    audio1_2 = document.getElementById("audio2"),
                    audio2_1 = document.getElementById("audio3"),
                    audio2_2 = document.getElementById("audio4"),
                    audio3 = document.getElementById("audio5"),
                    audio3_2 = document.getElementById("audio6"),
                    audio4 = document.getElementById("audio7"),
                    audio5 = document.getElementById("audio8");
                $(".loading").fadeOut(200, function () {
                    $(".page1").fadeIn(400);
                });
                setTimeout(function () {
                    bgm.play();
                    audio1_1.play();
                    audio1_2.play();
                    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                        bgm.play();
                        audio1_1.play();
                        audio1_2.play();
                    })
                }, 200);
                setTimeout(page1, 6200);
                document.addEventListener("WeixinJSBridgeReady", function () {
                    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                        bgm.play();
                        audio1_1.play();
                        audio1_2.play();
                    });
                }, false);
            }
            ;
        }
    }, $("#progress"));
    function page1() {
        audio1_1.pause();
        audio1_2.pause();
        setTimeout(function () {
            audio2_1.play();
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                audio2_1.play();
            })
        }, 1800);
        var page1_bottleTop = 9, page1_bottleLeft = 28, g_bottle = -12, page1_bottleOpa = 0;
        var page1_bottle = setInterval(function () {
            $("#page1-bottle").css({
                "z-index": 99,
                top: page1_bottleTop + "%",
                left: page1_bottleLeft + "%",
                opacity: page1_bottleOpa
            });
            page1_bottleOpa += 0.1;
            page1_bottleLeft -= 0.1;
            page1_bottleTop += g_bottle;
            g_bottle++;
            if (page1_bottleTop >= 40) {
                clearInterval(page1_bottle);
            }
        }, 20);

        $(".page1").stop().delay(200).fadeOut(2000);
        $(".page2").stop().delay(700).fadeIn(400);
        setTimeout(page2Animate, 700);
        setTimeout(page2, 8000);
    }

    function page2Animate() {
        setTimeout(function () {
            $("#page2-cai").addClass("page2-caiMove");
        }, 2700);
        setTimeout(function () {
            $("#page2-cai").removeClass("page2-caiMove");
            $("#page2-word1").stop().fadeOut(500);
            $("#page2-yao").stop().fadeIn(500);
        }, 6200);
        setTimeout(function () {
            $("#page2-bottle").addClass("bottleRotate");
            var myShakeEvent = new Shake({
                threshold: 10
            });
            myShakeEvent.start();
            window.addEventListener('shake', shakeEventDidOccur, false);
            //window.addEventListener('click', shakeEventDidOccur, false);
            function shakeEventDidOccur() {
                $("#page2-yao").hide();
                $("#page2-bottle").addClass("noRotate");
                var pi_bg_po = 5, pi_position = ["3%", "4%", "14%", "29%", "37%", "37%"];
                $("#page2-shuo").show();
                var pipaMove = setInterval(function () {
                    $("#page2-shuo").css({
                        "background-position-y": pi_bg_po * 25 + "%",
                        "top": pi_position[pi_bg_po]
                    });
                    pi_bg_po -= 1;
                    if (pi_bg_po < 0) {
                        clearInterval(pipaMove)
                    }
                }, 70);
                setTimeout(function () {
                    $("#page2-cai").addClass("page2-caiMove");
                }, 100);
                window.removeEventListener('shake', shakeEventDidOccur, false);
                //window.removeEventListener('click', shakeEventDidOccur, false);
                audio2_2.play();
                WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                    audio2_2.play();
                });
            }
        }, 6600);
        /*盖*/
        var page2_gai_left = 48, page2_gai_top = 55, g_gai = -2;
        setTimeout(function () {
            $("#page2-gai").css("opacity", "1");
            var page2_gaiMove = setInterval(function () {
                $("#page2-gai").css({
                    left: page2_gai_left + "%",
                    top: page2_gai_top + "%"
                });
                page2_gai_left += 4;
                page2_gai_top += g_gai;
                g_gai += 2;
                if (page2_gai_left >= 80) {
                    clearInterval(page2_gaiMove);
                }
            }, 80)
        }, 1600)
    }

    function page2() {
        touch.on(".page2", "swipeleft", function () {
            $(".page2").fadeOut(400);
            $(".page3").stop().delay(300).fadeIn(400);
            setTimeout(function () {
                page3();
            }, 6000);
        });
    }

    function page3() {
        touch.on(".page3", "swipeleft", function () {
            audio3.src = " ";
            audio3_2.src = " ";
            $(".page3").fadeOut(400);
            $(".page4").stop().delay(300).fadeIn(400);
            var audio4Time = 0;
            audio4.play();
            audio4.addEventListener("ended", function () {
                audio4.play();
                audio4Time++;
                if (audio4Time >= 2) {
                    audio4.pause();
                }
            })
        });

    }

    touch.on(".page4", "swipeleft", function () {
        audio4.pause();
        $(".page4").fadeOut(400);
        $(".page5").stop().delay(300).fadeIn(400);
        setTimeout(function () {
            $(".page5-con").fadeIn(300);
            audio5.play();
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                audio5.play();
            })
        }, 3300)
    });
    touch.on(".page5", "swipeleft", function () {
        audio5.pause();
        $(".page5").fadeOut(400);
        $(".page6").stop().fadeIn(400);
        audio5.play();
    });
    touch.on(".page6", "swipeleft", function () {
        audio5.pause();
        $(".page6").fadeOut(400);
        $(".page7").stop().fadeIn(400);
        audio5.play();
    });


    touch.on(".page7", "swipeleft", function () {
        audio5.pause();
        $(".page7").fadeOut(400);
        $(".page8").stop().fadeIn(400);
        audio5.play();
    });

    touch.on(".page8", "swipeleft", function () {
        $(".page8").fadeOut(400);
        $(".page9").stop().delay(300).fadeIn(400);
    });

    $(".page9-btn1").on("click", function () {
        $(".page9").fadeOut(400);
        $(".page10").css({
            opacity: 1
        });

    });

    /*page3语音*/
    $("#page3-msg-po").addClass("page3-msg-po-move");
    $("#page3-msg").on("click", function () {
        $("#page3-msg-red").hide();
        audio3.play();
        audio3.addEventListener("ended", function () {
            $("#page3-msg-po").removeClass("page3-msg-po-move");
        });
        setTimeout(function () {
            audio3_2.play();
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                audio3_2.play();
            })
        }, 6500)
    });

    $(".page9-btn3").on("click", function () {
        $(".pageshare").show();
    });
    $(".pageshare").on("click", function () {
        $(this).hide();
    });
    $(".page10-fu").on("click", function () {
        $(this).hide();
    });

    function PreLoadImg(sources, callback, proEle) {
        var count = 0,
            images = {},
            imgNum = 0;
        for (src in sources) {
            imgNum++;
        }
        for (src in sources) {
            images[src] = new Image();
            images[src].onload = function () {
                if (proEle !== undefined) {
                    var progress = ~~((count + 1) * 100 / sources.length) - 9;
                    proEle.width(progress + "%");
                }
                if (++count >= imgNum) {
                    setTimeout(function () {
                        callback(images);
                    }, 500);
                }
            };
            images[src].src = sources[src];
        }
    }
});



















