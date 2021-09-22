$(document).ready(function(){




    //실습 00
    var $lengthSlider = $("#ex_00 .slider li").length;
    console.log($lengthSlider);
    $("#ex_00 .total-Num").text($lengthSlider);

    var num = 1;
    $("#ex_00 .slider li").click(function(){
       $("#ex_00 .slider").append(this);
    });




    //실습 01
    setInterval(function(){
        var $first = $("#ex_01 .slider li").first();
        $("#ex_01 .slider").append($first);
    }, 3000);




    //실습 02
    setInterval(function(){
        var $firstImg = $("#ex_02 .slider li").first();
        $("#ex_02 .slider").append($firstImg);
        $("#ex_02 .slider").stop().animate({
            "margin-left":"-100%"
        });
    }, 3000);




    //실습 03
    setInterval(function(){
        var $first_03 = $("#ex_03 .slides li").first();
        console.log($first_03);
        $("#ex_03 .slides").stop().animate({
            "margin-left":"-100%"
        }, 2000, function(){
            $("#ex_03 .slides").append($first_03).css("margin-left", "0%");
        });
    }, 3000);




    //실습 04
    setInterval(function(){
        var $first_04 = $("#ex_04 .slides li").first();

        $("#ex_04 .slides").stop().animate({
            "margin-left":"-100%"
        }, 2000, function(){
            $("#ex_04 .slides").append($first_04).css("margin-left", "0%");
        });
    }, 3000);




    //실습 05
    setInterval(function(){
        var $first_05 = $("#ex_05 .slides li").first();
        var $hover = $("#ex_05").hasClass("hover");
        if($hover == true){

        }else{

            $("#ex_05 .slides").stop().animate({
                "margin-left":"-100%"
            }, 1000, function(){
                $("#ex_05 .slides").append($first_05).css("margin-left", "0%");
            });
        }

    }, 2000);

    $("#ex_05").hover(function(){
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    });




    //실습 06
    setInterval(function(){
        var $first_06 = $("#ex_06 .slides li").first();
        var $btn = $("#ex_06 .play_btn").hasClass("stop");
        if($btn == true){

        }else{

            $("#ex_06 .slides").stop().animate({
                "margin-left":"-100%"
            }, 1000, function(){
                $("#ex_06 .slides").append($first_06).css("margin-left", "0%");
            });
        }

    }, 2000);

    $("#ex_06 .play_btn").click(function(){
        var $btn = $(this).hasClass("stop");

        if($btn == false){
            $(this).addClass("stop");
            $(this).text("PLAY");
        }else{
            $(this).removeClass("stop");
            $(this).text("PAUSE");
        }
    });


    //실습 07
    $(".control_panel .control_button").click(function(){
        var $btnIndex = $(this).index();
        console.log($btnIndex);
        $(".control_panel .control_button").removeClass("active");
        $(this).addClass("active");

        $("#ex_07 .slider_panel").stop().animate({
            "margin-left":"-"+$btnIndex*100 +"%"
        }, 1000);

    });





});