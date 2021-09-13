$(document).ready(function(){


    //[클릭 이벤트]

    $(".click_evt li").click(function(e){
        /*e.preventDefault(); //방법 2 prevent(방지하다, 막다) / default(초기화) : 초기화(새로고침)되는 것을 막아라 */
        var $txtInfo = $(this).find("a").text();
        console.log($txtInfo);

        $(".click_evt .complete").text($txtInfo);
        //return false; 방법 1
    });


    //[마우스 관련 이벤트]

    /*
    $(".mouse_evt .ch_img").mouseover(function(){
        $(this).addClass("over");
    });
    $(".mouse_evt .ch_img").mouseout(function(){
        $(this).removeClass("over");
    });
    */

    $(".mouse_evt .ch_img").hover(function(){ //mouseenter() 이벤트
        $(this).addClass("over"); //변경
    }, function(){ //mouseleave() 이벤트
        $(this).removeClass("over"); //원복
    });


    $(".hover_menu nav > ul > li > a").hover(function(){
        $(this).siblings().stop().slideDown(); //display:block; 말아내려가듯 보여준다.
    }, function(){
        $(this).siblings().stop().slideUp(); //display:none; 말아올라가듯 감춘다.
    });
    //stop() : 효과 메서드를 한번만 실행시키라는 명령



    $(".mousemove_evt").mousemove(function(e){
        var c_x = e.clientX;
        var c_y = e.clientY;

        console.log(c_x);
        console.log(c_y);

        $(".trace_circle").css({
            "left": c_x + "px",
            "top": c_y + "px",
        });
    });


    $(".mousemove_evt h2").hover(function(){
        $(".trace_circle").addClass("active");
    }, function(){
        $(".trace_circle").removeClass("active");
    });





});