/**
 * Created by SIRMly on 2016/6/24.
 */
$(function () {
    document.ontouchmove = function (e) {
        e.preventDefault();
    };

    document.getElementById("audio-bg").play();
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
       $(".loading").fadeOut(200);
        $(".page1").fadeIn(400);
        setTimeout(page1,6200);
        document.getElementById("audio-bg").play();
        document.getElementById("audio1-1").play();
        document.getElementById("audio1-2").play();

        setTimeout(function (){
            document.getElementById("audio2-1").play();
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                document.getElementById("audio2-1").play();
            })
        }, 8400);
        document.addEventListener("WeixinJSBridgeReady", function () {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                document.getElementById('audio-bg').play();
                document.getElementById('audio1-1').play();
                document.getElementById('audio1-2').play();
            });
        }, false);
    },$("#progress"));
      function page1(){
          document.getElementById("audio1-1").pause();
          document.getElementById("audio1-2").pause();
          var page1_bottleTop = 9, page1_bottleLeft = 28, g_bottle=-12, page1_bottleOpa=0;
          var page1_bottle=setInterval(function () {
                $("#page1-bottle").css({
                    "z-index" : 99,
                    top: page1_bottleTop+"%",
                    left: page1_bottleLeft+"%",
                    opacity: page1_bottleOpa
                });
              page1_bottleOpa+=0.1;
              page1_bottleLeft-=0.1;
              page1_bottleTop+=g_bottle;
              g_bottle++;
              if(page1_bottleTop >= 40){
                  clearInterval(page1_bottle);
              }
          },20);

          $(".page1").stop().delay(200).fadeOut(2000);
          $(".page2").stop().delay(700).fadeIn(400);
          setTimeout(page2Animate,700);
          setTimeout(page2,8000);
      }
    function page2Animate(){
        setTimeout(function(){
            $("#page2-cai").addClass("page2-caiMove");
        },2700)
        setTimeout(function(){
            $("#page2-cai").removeClass("page2-caiMove");
            $("#page2-word1").stop().fadeOut(500);
            $("#page2-yao").stop().fadeIn(500);
        },6200)
        setTimeout(function(){
            $("#page2-bottle").addClass("bottleRotate");
            var myShakeEvent = new Shake({
                threshold: 10
            });
            myShakeEvent.start();
            window.addEventListener('shake', shakeEventDidOccur, false);
            function shakeEventDidOccur() {
                $("#page2-yao").hide();
                var pi_bg_po=5, pi_position=["3%","4%","14%","29%","37%","37%"];
                $("#page2-shuo").show();
                var pipaMove=setInterval(function () {
                    $("#page2-shuo").css({
                        "background-position-y" : pi_bg_po*25+"%",
                        "top" : pi_position[pi_bg_po]
                    });
                    pi_bg_po-=1;
                    if(pi_bg_po < 0){
                        clearInterval(pipaMove)
                    }
                },70);
                setTimeout(function () {
                    $("#page2-cai").addClass("page2-caiMove");
                },100)
                    document.getElementById("audio2-2").play();
                    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                        document.getElementById("audio2-2").play();
                    })
                window.removeEventListener('shake', shakeEventDidOccur, false);
                $("#page2-bottle").removeClass("bottleRotate");
            }
        },6600)
        /*盖*/
        var page2_gai_left= 48, page2_gai_top=55, g_gai=-2;
        setTimeout(function () {
            $("#page2-gai").css("opacity" , "1")
            var page2_gaiMove=setInterval(function () {
                $("#page2-gai").css({
                    left : page2_gai_left +"%",
                    top : page2_gai_top+"%"
                });
                page2_gai_left+=4;
                page2_gai_top+=g_gai;
                g_gai+=2;
                if(page2_gai_left>=80){
                    clearInterval(page2_gaiMove);
                }
            },80)
        },1600)
    }
    function page2(){
        touch.on(".page2","swipeleft", function (){
            $(".page2").fadeOut(400);
            $(".page3").stop().delay(300).fadeIn(400);
            setTimeout(function(){
                page3();
            },6000);
        });
    }

    function page3(){
        touch.on(".page3","swipeleft", function (){
            document.getElementById("page3-audio").src=" ";
            document.getElementById("page3-audio2").src=" ";
            $(".page3").fadeOut(400);
            $(".page4").stop().delay(300).fadeIn(400);
            var audio4 = document.getElementById("audio4"), audio4Time=0;
            audio4.play();
            audio4.addEventListener("ended",function (){
                audio4.play();
                audio4Time++;
                if(audio4Time >= 2){
                    audio4.pause();
                }
            })
        });

    }
        touch.on(".page4","swipeleft", function (){
            document.getElementById("audio4").pause();
            $(".page4").fadeOut(400);
            $(".page5").stop().delay(300).fadeIn(400);
            var page5audio= document.getElementById("page5-audio");
                setTimeout(function (){
                    $(".page5-con").fadeIn(300);
                    page5audio.play();
                    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                        page5audio.play();
                    })
                }, 3500)
        });
        touch.on(".page5","swipeleft", function (){
            document.getElementById("page5-audio").pause();
            $(".page5").fadeOut(400);
            $(".page6").stop().fadeIn(400);
            var page6audio=document.getElementById("page5-audio");
            page6audio.play();
        });
        touch.on(".page6","swipeleft", function (){
            document.getElementById("page5-audio").pause();
            $(".page6").fadeOut(400);
            $(".page7").stop().fadeIn(400)
            var page7audio=document.getElementById("page5-audio");
            page7audio.play();
        });


        touch.on(".page7","swipeleft", function (){
            document.getElementById("page5-audio").pause();
            $(".page7").fadeOut(400);
            $(".page8").stop().fadeIn(400)
            var page8audio=document.getElementById("page5-audio");
            page8audio.play();
        });

        touch.on(".page8","swipeleft", function (){
            $(".page8").fadeOut(400);
            $(".page9").stop().delay(300).fadeIn(400);
        });

    $(".page9-btn1").on("click", function (){
        $(".page9").fadeOut(400);
        $(".page10").css({
            opacity : 1
        });

    });

    /*page3语音*/
    $("#page3-msg-po").addClass("page3-msg-po-move");
    $("#page3-msg").on("click", function () {
        $("#page3-msg-red").hide();
        var page3Audio= document.getElementById("page3-audio");
        page3Audio.play();
        page3Audio.addEventListener("ended", function () {
            $("#page3-msg-po").removeClass("page3-msg-po-move");
        })
        setTimeout(function (){
            document.getElementById("page3-audio2").play();
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                document.getElementById("page3-audio2").play();
            })
        },6500)
    });

    $(".page9-btn3").on("click",function(){
        $(".pageshare").show();
    });
    $(".pageshare").on("click",function(){
        $(this).hide();
    });
    $(".page10-fu").on("click",function(){
        $(this).hide();
    });

    function PreLoadImg(sources,  callback, proEle) {
        var count = 0,
            images = {},
            imgNum = 0;
        for ( src in sources) {
            imgNum++;
        }
        for ( src in sources) {
            images[src] = new Image();
            images[src].onload = function () {
                if (proEle !== undefined) {
                    var progress = ~~((count + 1) * 100 / sources.length);
                    proEle.width(progress+"%");
                }
                if (++count >= imgNum) {
                    setTimeout(function () {
                        callback(images);
                    }, 500);
                }
            };
            images[src].src =sources[src];
        }
    }
});



















