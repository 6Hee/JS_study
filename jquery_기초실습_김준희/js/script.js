$(document).ready(function(){

    //예제 9번
    $(".test_09 p").text("텍스트 변경 완료").css({
        "background" : "#aaffaa",
        "margin-bottom" : "4px"
    });


    //예제 10번
    $(".test_10 p").click(function(){
        $(this).slideUp();
    });


    //예제 11번
    $(".test_11 p").hover(function(){
        $(this).addClass("highlight");
    }, function(){
        $(this).removeClass("highlight");
    });


    //예제 15번
    $(".test_15 p").hide();
    $(".test_15 .hide-btn").click(function(){
        $(".test_15 p").hide()
    });
    $(".test_15 .show-btn").click(function(){
        $(".test_15 p").show()
    });


    //예제 16번
    $(".test_16 p").hide();
    $(".test_16 .show-btn").click(function(){
        $(".normal").show();
        $(".very-fast").show(50);
        $(".fast").show(`fast`);
        $(".slow").show(`slow`);
        $(".very-slow").show(2000);
    });
    $(".test_16 .hide-btn").click(function(){
        $(".normal").hide();
        $(".very-fast").hide(50);
        $(".fast").hide(`fast`);
        $(".slow").hide(`slow`);
        $(".very-slow").hide(2000);
    });


    //예제 17번
    $(".test_17 p").hide();
    $(".test_17 .out-btn").click(function(){
        $(".test_17 p").fadeOut();
    });
    $(".test_17 .in-btn").click(function(){
        $(".test_17 p").fadeIn();
    });

    //예제 18번
    $(".test_18 p").hide();
    $(".test_18 .up-btn").click(function(){
        $(".test_18 p").slideUp();
    });
    $(".test_18 .down-btn").click(function(){
        $(".test_18 p").slideDown();
    });
    //예제 19번
    $(".test_19 button").click(function(){
        $(".test_19 p img").animate({"left":"200px"}, 1000)
    });




    //예제 26번
    $(".test_26 .img_frame img").not("img:eq(0)").hide();
    $(".test_26 .btn_frame .fadein_img").click(function(){
        $(".test_26 .img_frame img").fadeIn(1000);
    });





});