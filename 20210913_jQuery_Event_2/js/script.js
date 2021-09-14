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



    //focus 이벤트
    $("#user_id").focus(function(){
        $(this).val("홍길동");
    });

    //입력상자에서 빠져나가는 순간 이벤트가 발생
    $("#user_pw").blur(function(){
        var $val_txt = $(this).val();
        console.log($val_txt);
        /*
        if($val_txt.length < 1){
            console.log("비밀번호 안 넣었어요");
        }
        */
        if($val_txt.trim() == ""){
            //console.log("비밀번호 안 넣었어요");
            $(".msg").addClass("active");
            //일정시간(5초)이 지난 후 .msg요소에 존재하는 .active 클래스명을 지운다. -> 레드 주의 사항 박스를 브라우저 상단으로 이동시킴으로써 보이지 않도록 처리
            setTimeout(function(){
                $(".msg").removeClass("active");
            }, 5000);
        }

    });



    //이벤트 우선순위 끌어올리는 방법 : 이벤트 영역을 문서전체로 확대하여 찾아가는 과정을 DOM으로 접근하여 이벤트의 발생을 감지하도록 구성
    $(document).on("click", ".prior_event button", function(){
        
        var $state = $(".prior_event img").hasClass("barbarian"); //true or false
        if($state == false){
            $(".prior_event img").attr("src", "./img/barbarian.png");
            $(".prior_event img").addClass("barbarian");
        }else{
            $(".prior_event img").attr("src", "./img/archer.png");
            $(".prior_event img").removeClass("barbarian");
        }
       
    });
    /*
    $(".prior_event button").click(function(){
        var $state = $(".prior_event img").hasClass("barbarian"); //true or false
        if($state == false){
            $(".prior_event img").attr("src", "./img/barbarian.png");
            $(".prior_event img").addClass("barbarian");
        }else{
            $(".prior_event img").attr("src", "./img/archer.png");
            $(".prior_event img").removeClass("barbarian");
        }
    });
    */
    //일반적인 클릭 이벤트 vs 문서 전체 대상으로 요소를 찾아가는 클릭 이벤트
    //일반적인 클릭 이벤트 : 처음부터 대상만의 범위를 지정하는 방법
    //문서 전체 대상으로 요소를 찾아가는 클릭이벤트 : 문서에서 클릭되기까지를 기다린다. + 지정된 곳에 클릭이 진행되었다면 내부 함수를 실행해라. 일반적인 클릭이벤트보다 큰 범위를 갖고 있음


    //[문서 대상 이벤트의 형식]
    //$(document).on("이벤트명", "선택자", function(){실행문});


    /*
    var $cur_width = $(window).width();
    console.log($cur_width);
    $(".resize_evt p span i").text($cur_width + "px");
    
    
    $(window).resize(function(){
        var $cur_width = $(window).width();
        console.log($cur_width);
        $(".resize_evt p span i").text($cur_width + "px");
    });
    */

    //위와 동일한 내용으로 함수를 활용하여 맨 브라우저 로딩부터 값을 받아오고 리사이즈 이벤트를 통해 새로이 값을 받아오도록 구성

    function resizeEvt(){
        var $cur_width = $(window).width();
        console.log($cur_width);
        $(".resize_evt p span i").text($cur_width + "px");
    }


    resizeEvt(); //브라우저가 로딩(ready 이벤트)이 완료되면 함수문을 1회 호출

    $(window).resize(function(){
        /*
        var $cur_width = $(window).width();
        console.log($cur_width);
        $(".resize_evt p span i").text($cur_width + "px");
        */
       resizeEvt();
    });



    //이미지의 진입 조건 : 현재 이미지가 위치한 곳으로부터 브라우저 높이의 50vh 이전 구간을 통과했을 때 내부로 진입을 시키도록 active 클래스를 부여
    
    $(window).scroll(function(){
        //console.log("스크롤 이벤트 발생");
        var $scroll_top = $(window).scrollTop();
        console.log($scroll_top);

        var $scrollImg = $(".scroll_evt").offset().top;
        console.log("이미지가 브라우저 상단으로부터 떨어진 절대 거리(y축 값)" + $scrollImg);

        var $browser_height = $(window).height();
        console.log($browser_height); //브라우저의 현재 창을 기준으로 높이값을 반환

        var $document_height = $(document).height();
        console.log($document_height);

        var $body_height = $("body").height();
        console.log($body_height);

        if($scroll_top >= $scrollImg - $browser_height){
            $(".scroll_evt").addClass("active");
        }else{
            $(".scroll_evt").removeClass("active");
        }
    });


    $(".total").change(function(){
        console.log("체인지 이벤트 발생")

        var $chk = $(this).is(":checked");
        console.log($chk);

        if($chk == true){
            $(".each").attr({"checked":"checked", "disabled":"disabled"});
        }else{
            $(".each").removeAttr("checked");
            $(".each").removeAttr("disabled");
            $(this).removeAttr("checked");
        }
    });



    
    
    //팝업창의 재활용
    //본 화면 구성


    //#1. 각 공간에 들어갈 데이터를 패턴화 시킴
    //2차 배열의 패턴 ["이미지", "캐릭터 명", "캐릭터 특성"]
    var $cc_arr = [
        ["archer.png", "아처", "아처는 궁수로 이동속도가 빠름"],
        ["barbarian.png", "바바리안", "바바리안은 파워가 강력"],
        ["giant.png", "자이언트", "자이언트는 높은 방어력"],
        ["wizard.png", "마법사", "마법사는 원거리 공격 가능"]
    ];


    var a = `
            <div class="box">
                <div class="cont_img"></div>
                <h3>캐릭터 이름</h3>
            </div>
    `
    for(i = 0; i < $cc_arr.length; i++){
        $("#sec_01 .wrap").append(a);
    }
    

    $.each($("#sec_01 .wrap .box"), function(i){
        $(this).find(".cont_img").css(
            "background-image", "url(./img/"+$cc_arr[i][0]+")"
        );

        $(this).find("h3").text($cc_arr[i][1]);
    });


    //각 이미지를 클릭
    $("#sec_01 .wrap .box").click(function(){
        var $index = $(this).index();
        console.log($index);

        //addClass() 를 통해서 암막과 팝업 각각 불러올 것~!
        
        //addClass() 를 통해서 body에 걸려있는 스크롤바를 움직이지 못하도록 만든다.

        //$index라는 값을 통해서 배열로 접근하여 해당하는 데이터를 지정된 곳에 뿌려준다.
        $(".dark_bg").addClass("active");
        $(".popup").addClass("active");
        $("body").addClass("openPop");


        
        $(".popup").find(".popup_img").css("background-image", "url(./img/"+$cc_arr[$index][0]+")");
        $(".popup").find("h3").text($cc_arr[$index][1]);
        $(".popup").find("p").text($cc_arr[$index][2]);
        

        

        
        

    });


    // 팝업 닫기 (클릭 이벤트) - 선택자를 그룹으로 선언 (.dark_bg, .popup .close)하여 추가 클래스명을 준 것을 모두 제거한다.

    $(".close").click(function(){
        $(".dark_bg").removeClass("active");
        $(".popup").removeClass("active");
        $("body").removeClass("openPop");
    });


});