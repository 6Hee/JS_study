$(document).ready(function(){

    //#1. 좌측으로 이동하는 이미지
    setInterval(function(){
        var $first = $(".slider_01 ul li").first();
        $(".slider_01 ul").stop().animate({
            "margin-left":"-100%",
        },1000, function(){
            $(".slider_01 ul").append($first).css("margin-left", "0%");
        });

    },4000);



    //#2. 우측으로 이동하는 이미지 : 브라우저가 로딩되면서부터 1번 이미지 좌측으로 4번 이미지가 존재해야 오른쪽으로 ul을 밀면서 4번 이미지의 진입과정이 보임(최소한 1장 이상의 이미지가 화면 공간인 slider_02의 좌측에 배치되어야 함)

    var $last_slide = $(".slider_02 ul li").last(); //4번 이미지 슬라이드만 해당
    $(".slider_02 ul").prepend($last_slide);

    //#2-2. 슬라이드를 묶은 그룹인 ul을 우측으로 이동시킨다. + setInterval()
    setInterval(function(){
        var $last = $(".slider_02 ul li").last();
        console.log($last); //setInterval이 작동되는 시점에서 객체이동한 결과로 발생되는 첫번째 자식만을 선택하고 있기 때문에 절대 동일한 슬라이드만 지목하지 않음.
        $(".slider_02 ul").stop().animate({
            "margin-left":"0%",
        }, 1000, function(){
            $(".slider_02 ul").prepend($last).css("margin-left", "-100%");
        });
        
    }, 4000);



    //#3. 상방향으로 이동하는 이미지 

    /*
    $(".slider_03 ul").animate({
        "margin-top":"-100%"
    }, 1000);
    */
    //.slider_03에 overflow:hidden; 선언한 상태에서
    /*
    $(".slider_03 ul").animate({
        "margin-top":"-200px"
    }, 1000);
    */
    setInterval(function(){

        var $first = $(".slider_03 ul li").first();
    
        $(".slider_03 ul").stop().animate({
            "top":"-100%"
        }, 1000, function(){
            $(".slider_03 ul").append($first).css("top","0%");
        });

    }, 4000);

    //#4. 하방향으로 이동하는 이미지
    var $last_slide = $(".slider_04 ul li").last();
    $(".slider_04 ul").prepend($last_slide);
    setInterval(function(){

        var $last = $(".slider_04 ul li").last();

        $(".slider_04 ul").stop().animate({
            "top":"0%"
        },1000, function(){
            $(".slider_04 ul").prepend($last).css("top","-100%");
        });
    },4000)



    //#5. 페이드인 이미지 슬라이더

    setInterval(function(){
        
        var $active_index = $(".slider_05 ul li.active").index();
        console.log($active_index); //active라는 클래스명이 존재하는 li의 인덱스 번호를 추출
        $(".slider_05 ul li").removeClass("active");
        if($active_index == 3){ //active라는 클래스명이 3번 인덱스 li에 존재한다면 active라는 클래스명을 넘겨주어야 할 대상은 0번 인덱스 번호를 갖고 있는 li임
    
            $(".slider_05 ul li").eq(0).addClass("active");
        }else{
    
            $(".slider_05 ul li").eq($active_index).next().addClass("active");
        }
    }, 4000);

    

    //#6. 페이드인 이미지 슬라이더(즉시 실행함수 사용)

    var n = 0; //초기 인덱스번호를 설정
    var depth = 2; //최초의 진입되는 슬라이드의 z-index 값

    (function fade(){
        $(".slider_06 li").eq(n).css("z-index", depth++).fadeOut(0);; //z-index값을 올리고 숨겨놓는다
        $(".slider_06 li").eq(n).delay(4000).fadeIn(1000, function(){
            //시간을 지연시켜서 화면상에서는 서서히 나타나도록 구성한다.
            if(n == 3){
                n = 0; //최초인덱스로 돌려준다.
            }else{
                n++ //인덱스 번호를 하나씩 올려준다.
            };
            fade(); //재귀함수
        });
    })();   //즉시 실행 함수




    //[응용 슬라이더]
    //(공통) 헤더 영역
    $("header nav > ul > li").hover(function(){
        $(this).find("ul").stop().slideDown();
    }, function(){
        $(this).find("ul").stop().slideUp();
    });


    //가로 방향으로 이동하는 슬라이드



    //#00. 공용 함수 구성
    function counting(){
        var $cur_page = $("#slider_01 ul li").eq(1).attr("rel");
        console.log($cur_page);
        console.log(typeof $cur_page);
        $("#slider_01 .rel_num").text($cur_page);


        //모니터 화면에 보이는 슬라이드에 .active를 부여 - 타이틀과 버튼이 나오도록 구성 
        $("#slider_01 ul li").removeClass("active");
        $("#slider_01 ul li").eq(1).addClass("active");
        


        //ol>li의 인덱스 번호 0,1,2,3,4
        $("#slider_01 ol li").removeClass("active");
        $("#slider_01 ol li").eq($cur_page - 1).addClass("active");

        /*
        ($cur_page - 1)
        1-1 = 0
        2-1 = 1
        3-1 = 2
        4-1 = 2
        5-1 = 2
        */

        //#7. 슬라이드의 대기시간 진행바를 채우는 구성
            $("#slider_01 .progress_bar").css("width", 0);
            $("#slider_01 .progress_bar").stop().animate({
                "width":"100%"
            }, 3000);
    }


    //1. 자동 슬라이드 기능
    var $last = $("#slider_01 ul li").last();
    $("#slider_01 .slider ul").prepend($last)


    counting();  //브라우저 로딩 후 함수로 접근하는 과정에서 구조가 완성(마지막 이미지를 첫번째 자리로 넣은 상태)된 다음 

    setInterval(function(){
        var $hover = $("#slider_01").hasClass("hover");
        //setInterval() 함수가 4초마다 #slider_01의 태그 내부에 hover라는 클래스명의 존재 유무를 확인

        console.log($hover);
        //true : #slider_01의 공간에 마우스 커서가 올려진 상태(일시정지)
        //false : #slider_01의 공간에 마우스 커서가 이탈한 상태(자동재생)



        //버튼의 재생 및 정지 변경 상태에 따라서 접근
        var $stop = $(".slider_play").hasClass("stop")
        
        //true : 정지상태(화면상 : ▶<span>(재생)</span>)
        //false : 재생상태(화면상 : ■<span>(정지)</span>)

        //[경우의 수]
        /*
        $hover == true, $stop == true => 멈춰야함(if)
        $hover == true, $stop == false => 멈춰야함(if)
        $hover == false, $stop == true => 멈춰야함(if)
        $hover == false, $stop == false => 자동기능 작동(else)
        */

        //1) && : 둘 중에 하나라도 false이면 false
        //2) || : 둘 중에 하나라도 true이면 true



        if($hover == true || $stop == true){
            //일시정지
        }else{
            //자동재생
            var $first = $("#slider_01 ul li").first();

            $("#slider_01 ul").stop().animate({
                "margin-left":"-200%"
            },1000, function(){
                $("#slider_01 ul").append($first).css("margin-left", "-100%");

                

                counting();
            });
        }
    }, 4000);


    //2. 마우스 오버시 자동 슬라이드 기능 일시정지
    //hover 라는 클래스명이 마우스의 슬라이드 영역 내부로 진입여부를 판단
    $("#slider_01").hover(function(){
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    });



    //#3. 버튼에 의해 통제되는 자동 슬라이드의 재생과 정지 기능
    $("#slider_01 .slider_play").click(function(){
        var $state = $(this).hasClass("stop"); //클릭시 검사
        //false : 현재 자동 슬라이드 기능이 작동되고 있는 상태
        //true : 현재 자동 슬라이드 기능이 멈춘 상태
        if($state == false){
            $(this).addClass("stop");
            $(this).html("▶<span>(재생)</span>")
            //시점상 슬라이드를 멈춰야함
        }else{
            $(this).removeClass("stop");
            $(this).html("■<span>(정지)</span>")
            //시점상 슬라이드를 자동으로 돌려야함
        }
    });


    //#4. 화살표 기능 부여(prev : 이전이미지(좌측에 위치한 이미지가 우측으로 이동하면서 나온다) /next : 다음이미지(우측에 위치한 이미지가 좌측으로 이동하면서 나온다.))
    $("#slider_01 .prev").click(function(){
        var $last = $("#slider_01 ul li").last();
        $("#slider_01 ul").stop().animate({
            "margin-left":"0%"
        }, 1000, function(){
            $("#slider_01 ul").prepend($last).css("margin-left","-100%");


            counting()
        });
        return false;
    });


    $("#slider_01 .next").click(function(){
        var $first = $("#slider_01 ul li").first();
        $("#slider_01 ul").stop().animate({
            "margin-left":"-200%"
        }, 1000, function(){
            $("#slider_01 ul").append($first).css("margin-left","-100%");

            counting();
        });
        return false;
    });


    //#5. 전체 페이지 개수 + 현재 페이지 넘버 소환
    var $total = $("#slider_01 ul li").length
    console.log("전체 슬라이드 개수 : " + $total);
    $("#slider_01 .total").text($total);
















    //////////// 페이드 방식 슬라이드 /////////////////
    var $slide = $("#slider_02 .slider ul li");
    console.log($slide);


    //공용 함수구문
    function commonFunc(){
        var $index = $("#slider_02 .slider ul li.show").index();
        console.log("함수구문 접근시 열려있는 페이지의 인덱스 번호 : "+$index);

        $("#slider_02 .rel_num").text($index + 1);


        $("#slider_02 ol li").removeClass("active");
        $("#slider_02 ol li").eq($index).addClass("active");

        $("#slider_02 .progress_bar").css("width", 0);
        $("#slider_02 .progress_bar").stop().animate({
            "width":"100%"
        }, 3000);
    }



    //#1. 자동 슬라이드 기능
    //#1-1 방법 1

    setInterval(function(){
        var $hover = $("#slider_02").hasClass("hover");  
        //true : 마우스가 진입한 상태 -> 일시정지
        //false : 마우스가 이탈한 상태 -> 자동재생

        var $stop = $("#slider_02 .slider_play").hasClass("stop");
        //true : 정지된 상태
        //false : 재생된 상태

        if($hover == true || $stop == true){
            //움직이지마~~!! 일시정지
        }else{
            var $show = $("#slider_02 .slider ul li.show").index(); //0,1,2,3,4
            console.log("현재 슬라이드화면의 인덱스 번호 : " + $show);
            $("#slider_02 .slider ul li").removeClass("show");  //전체 삭제
            if($show == $slide.length - 1){  //$slide.length = 5
                $("#slider_02 .slider ul li").eq(0).addClass("show");
            }else{
                $("#slider_02 .slider ul li").eq($show).next().addClass("show");
            }


            commonFunc();

        }
    }, 4000);

    

    //#1-2 방법 2
    /*
    setInterval(function(){
        var currentSlide = $("#slider_02 .slider ul li.show").index();
        console.log(currentSlide);

        var $hover = $("#slider_02").hasClass("hover");
        if($hover == true){

        }else{
            $slide.removeClass("show"); //전체 li로부터 show라는 클래스명 제거
            currentSlide = (currentSlide + 1) % $slide.length;
            /*
            (0 + 1) % 5 = 1
            (1 + 1) % 5 = 2
            (2 + 1) % 5 = 3
            (3 + 1) % 5 = 4
            (4 + 1) % 5 = 5
            
           console.log(currentSlide);
           $slide.eq(currentSlide).addClass("show");
           /*
           $slide.eq(1).addClass("show");
           $slide.eq(2).addClass("show");
           $slide.eq(3).addClass("show");
           $slide.eq(4).addClass("show");
           $slide.eq(5).addClass("show");
           
        }
    }, 4000);
    */
    //#2. 마우스 오버시 자동 슬라이드 일시정지 기능

    
    
    $("#slider_02").hover(function(){
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    });
    /*
    setInterval(function(){

        var $hover02 = $("#slider_02").hasClass("hover");
        console.log($hover02);
    
        if($hover02 == true){
    
        }else{
            var $show = $("#slider_02 .slider ul li.show").index();
            console.log("현재 슬라이드 화면의 인덱스 번호 : " +$show);
            $("#slider_02 .slider ul li").removeClass("show"); //전체 삭제
        
            if($show == 4){
                 $("#slider_02 .slider ul li").eq(0).addClass("show")
            }else{
                $("#slider_02 .slider ul li").eq($show).next().addClass("show");
            }
        }    
    }, 4000);
    */



    //#3. 재생 / 정지 기능
    $("#slider_02 .slider_play").click(function(){
        var $stop = $(this).hasClass("stop");
        console.log($stop);
        if($stop == false){  //재생 중
            $(this).addClass("stop");
            $(this).html("▶<span>(재생)</span>");
            //위 문구가 적용된다면 정지를 시킴
        }else{  //정지 중
            $(this).removeClass("stop");
            $(this).html("■<span>(정지)</span>");
            //위 문구가 적용된다면 재생을 시킴
        }
    });


    //#4. 이전 버튼(0 -> 4 -> 3 -> 2 -> 1 -> 0 -> 4 ....)과 다음 버튼(0 -> 1 -> 2 -> 3 -> 4 -> 0 ...)
    $("#slider_02 .prev").click(function(){
        var $show = $("#slider_02 .slider ul li.show").index();

        $("#slider_02 .slider ul li").removeClass("show"); //전체 삭제
        if($show == 0){
            $("#slider_02 .slider ul li").eq($slide.length - 1).addClass("show");
        }else{
            $("#slider_02 .slider ul li").eq($show).prev().addClass("show");
        }

        return false;
    });

    $("#slider_02 .next").click(function(){
         var $show = $("#slider_02 .slider ul li.show").index();
         console.log($show);

         $("#slider_02 .slider ul li").removeClass("show");

         if($show == $slide.length - 1){
            $("#slider_02 .slider ul li").eq(0).addClass("show");
         }else{
            $("#slider_02 .slider ul li").eq($show).next().addClass("show");
         }


         commonFunc();

         return false;
    });

    //#5. 전체 페이지 + 해당하는 페이지
    $("#slider_02 .total").text($slide.length);



    //#6. ol > li를 클릭시 해당하는 화면이 나온다.
    $("#slider ol li").click(function(){
        var $index = $(this).index(); //0,1,2,3,4
        $("#slider_02 ol li").removeClass("active");
        $(this).addClass("active");
        $("#slider_02 .slider ul li").removeClass("show");
        $("#slider_02 .slider ul li").eq($index).addClass("show");

        $("#slider_02 .rel_num").text($index + 1);
        $("#slider_02 .progress_bar").css("width", 0);
        $("#slider_02 .progress_bar").stop().animate({
            "width":"100%"
        }, 3000);

    });









});
