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
    //1. 자동 슬라이드 기능
    var $last = $("#slider_01 ul li").last();
    $("#slider_01 .slider ul").prepend($last)

    setInterval(function(){
        var $hover = $("#slider_01").hasClass("hover");
        //setInterval() 함수가 4초마다 #slider_01의 태그 내부에 hover라는 클래스명의 존재 유무를 확인

        console.log($hover);
        //true : #slider_01의 공간에 마우스 커서가 올려진 상태(일시정지)
        //false : #slider_01의 공간에 마우스 커서가 이탈한 상태(자동재생)
        if($hover == true){
            //일시정지
        }else{
            //자동재생
            var $first = $("#slider_01 ul li").first();

            $("#slider_01 ul").stop().animate({
                "margin-left":"-200%"
            },1000, function(){
                $("#slider_01 ul").append($first).css("margin-left", "-100%");
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
    $(".slider_play").click(function(){
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







});
