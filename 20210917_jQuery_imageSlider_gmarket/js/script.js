$(document).ready(function(){


    var $slideImg = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg", "slide5.jpg", "slide6.jpg", "slide7.jpg", "slide8.jpg", "slide9.jpg", "slide10.jpg"];


/*
    var $list = `<li class="slide"><h2>1</h2></li>`;

    for(i in $slideImg){
        $(".slider_space ul").append($list);
    }

*/


    //공용 함수구문

    function commonFunc(){
        var $curSlide = $("#slider .slider_space ul li").eq(2).attr("rel");
        console.log($curSlide);

        $("#slider .rel_num").text($curSlide);
    }





    //#1. 구조를 구성한다. (센터 기준으로 좌측에 슬라이드 이미지가 2장이 존재) css에서 margin-left : -200% ;




    //#1-2. 맨 아래의 2장의 슬라이드를 맨 처음으로 가져다 놓는다. (nextAll() : 기준 선택자로부터 다음에 위치한 모든 형제)
    var $last2Slide = $("#slider .slider_space ul li").eq(7).nextAll();
    //console.log($last2Slide);
    $("#slider .slider_space ul").prepend($last2Slide);





    //#2. 자동 슬라이드 기능 구현
    setInterval(function(){
        var $hover = $("#slider").hasClass("hover");
        //console.log($hover); => false
        var $stop = $("#slider .slider_play").hasClass("stop");
        //console.log($stop); => false



        if($hover == true || $stop == true){
            //일시정지
        }else{

            var $first = $("#slider .slider_space ul li").first();
            //console.log($first);


            $("#slider .slider_space ul").stop().animate({
                "margin-left":"-300%"
            }, 1000, function(){
                $("#slider .slider_space ul").append($first).css("margin-left","-200%");

                commonFunc();

            });
        }



    }, 4000);




    //#3. 마우스오버시 자동 슬라이드의 일시정지 기능 구현
    $("#slider").hover(function(){ 
        //마우스가 영역 내로 진입시 이벤트 발생 : mouseenter 이벤트

        $(this).addClass("hover");
    }, function(){ 
        //마우스가 영역 밖으로 이탈시 이벤트 발생 : mouseleave 이벤트

        $(this).removeClass("hover");
    });


    //#4. 재생 / 정지
    $("#slider .slider_play").click(function(){
        var $state = $(this).hasClass("stop");
        console.log("현재 stop 클래스의 유무 : " + $state)
        //false : 슬라이드 자동재생중
        //true : 슬라이드 정지상태

        if($state == false){

            $(this).addClass("stop");
            $(this).find("img").attr({
                "src" : "./img/play.svg",
                "alt" : "재생"
            });

        }else{

            $(this).removeClass("stop");
            $(this).find("img").attr({
                "src" : "./img/stop.svg",
                "alt" : "정지"
            });

        };
    });


    //#5. 이전 버튼과 다음 버튼(화살표)
    $("#slider .prev").click(function(){
        var $last = $("#slider .slider_space ul li").last();


        $("#slider .slider_space ul").stop().animate({
            "margin-left":"-100%",
        }, 1000, function(){
            $("#slider .slider_space ul").prepend($last).css(
                "margin-left","-200%");
                commonFunc()
        });

        return false;
    });
    $("#slider .next").click(function(){
        var $first = $("#slider .slider_space ul li").first();


        $("#slider .slider_space ul").stop().animate({
            "margin-left":"-300%"
        }, 1000, function(){
            $("#slider .slider_space ul").append($first).css(
                "margin-left","-200%");
                commonFunc()
        });

        return false;
    });

    //#6. 현재 슬라이드 페이지 넘버 표기
    var $totalPage = $("#slider .slider_space ul li").length;
    console.log("전체 슬라이드 개수 : " + $totalPage); // ==> 10개

    $("#slider .total").text($totalPage);



    //#7. 슬라이드 이미지 전체 뷰 ( in 팝업창 )
    $("#slider .slidePop").click(function(){
        $(".dark_bg").addClass("active");
        $(".popup").addClass("active");


        $(".popup_space ul").empty();  //하위 자식 비우기

        for(i in $slideImg){
            console.log(i);  
            $(".popup_space ul").append(`
            <li><a href=""><img src="./img/`+$slideImg[i]+`" alt=""></a></li>
            `);
        }
    });


    $(".popup .close").click(function(){
        $(".dark_bg").removeClass("active");
        $(".popup").removeClass("active");
    });



});