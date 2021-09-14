$(document).ready(function(){

    $(".show_hide .display_img").hide();
    $(".show_hide .show").click(function(){
        //$(".show_hide .display_img").show(); //display:block;
        //$(".show_hide .display_img").show("slow"); //transition 1s~1.5s
        //$(".show_hide .display_img").show("normal"); //0.5~1s
        //$(".show_hide .display_img").show("fast"); //0.5s 미만


        //$(".show_hide .display_img").show(4000); //4초
        $(".show_hide .display_img").show(2000, function(){
            console.log(this);
            $(this).css("border", "5px solid #f00");
        });
    });

    //콜백함수 : 1차 진행이 완료된 후 그 다음에 어떤 다른 진행사항들을 연속적으로 이어서 진행해야할 경우 활용(이미지 슬라이드가 진행된 후에 타이틀 또는 일반적인 콘텐츠가 화면상에 나와야 할 때 사용 가능)

    $(".show_hide .hide").click(function(){
        $(".show_hide .display_img").hide();
    });

    ///////////////////////////////////////
    $(".fade_effect .fadeOut").click(function(){
        $(".fade_img").fadeOut();
    });
    $(".fade_effect .fadeIn").click(function(){
        $(".fade_img").fadeIn();
    });
    
    $(".fade_effect .fadeInOut").click(function(){
        $(".fade_img").fadeIn().fadeOut();
    }); //체이닝기법으로 적용. 사용하지 말것을 추천





    ///////////////////////////////////////
    $(".slide_effect .slideDown").click(function(){
        $(".slide_effect .slide_img").slideDown();
    });
    $(".slide_effect .slideUp").click(function(){
        $(".slide_effect .slide_img").slideUp();
    });


    ///////////////////////////////////////
    $(".origin").click(function(){
        var $active = $(this).hasClass("active");
        if($active == false){
            $(this).addClass("active");
            $(".fs_box ul").slideDown();
        }else{
            $(this).removeClass("active");
            $(".fs_box ul").slideUp();
        }
    });

    $(".ani_box .ball").animate({
        "left":"360px"
    }, 1500, function(){
        $(".ani_box .ball").animate({
            "top":"360px"
        }, 1500, function(){
            $(".ani_box .ball").animate({
                "left":"0px"
            }, 1500, function(){
                $(".ani_box .ball").animate({
                    "top":"0px"
                }, 1500);
            });
        });
    });

});