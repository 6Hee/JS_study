$(document).ready(function(){


    //새로운 요소를 선택자의 이전 형제 자리에 넣겠다는 명령
    //before(), insertBefore()
    $(".siblings_method li:eq(2)").before("<li>회사경영</li>");


    $("<li>회사비전</li>").insertBefore(".siblings_method li:eq(2)");

    //새로운 요소를 선택자의 이전 형제 자리에 넣겠다는 명령 : after(), insertAfter()

    $(".siblings_method li:eq(4)").after("<li>회사상품</li>");
    $("<li>회사 투자 정보</li>").insertAfter(".siblings_method li:eq(4)");



    //마지막 자식을 추가
    $(".childAdd_method").append("<li>고객센터1</li>");
    $("<li>고객센터2</li>").appendTo(".childAdd_method");

    //첫번째 자식을 추가
    $(".childAdd_method").prepend("<li>브랜드1</li>");
    $("<li>브랜드2</li>").prependTo(".childAdd_method");


    //객체이동
    let num = 1;
    $(".addImg").click(function(){
        $(".character_frame").append('<img src="./img/Character_'+num+'.png">');
        num++;
        if(num > 3){
            //$(this).css("display", "none");
            //$(this).prop("disabled", true);
            $(this).attr("disabled", true);
            
        }
    })

    

    $(".next").click(function(){
        $(".ch_img img").first().appendTo(".ch_img");
    });
    $(".prev").click(function(){
        $(".ch_img img").last().prependTo(".ch_img");
    });



    //컨텐츠 페이지 구성하기
    //#0. 패턴 구조에 대한 스타일시트 구성이 최우선(샘플 디자인)

    //#1. 배열 데이터 : 2차 배열 패턴 구성 ["이미지", "타이틀"]
    var $arr = [
        ["kakao_01.jpg", "카카오 소풍"],
        ["kakao_02.jpg", "카카오 나들이"],
        ["kakao_03.jpg", "카카오 휴가"],
    ];


    //#2. 구성 패턴 구조 저장
    var $cont = `
        <div class="kakao_cont">
            <img src="./img/kakao_01.jpg" alt="">
            <p>카카오 소풍</p>
        </div>
    `;

    //#3. 반복문 - 부모를 선택자로 구성하고 append()를 활용하여 자식의 구조를 하나씩 채워나간다. 단 배열 데이터의 개수만큼만..
    for(i=0; i<$arr.length; i++){
        $(".kakao_box").append($cont);
    }


    //#4. each문을 활용하여 각 구조마다 순차적으로 접근하는 과정에서 배열 데이터를 각 요소마다 넣는다.
    $(".kakao_cont").each(function(index){
        $(this).find("img").attr("src", "./img/"+$arr[index][0])
        $(this).find("p").text($arr[index][1]);
    });



    //애니메이션 효과 테스트
    $(".test_animation").animate({
        "margin-left":"200px"
    }, 2000, function(){
        $(".test_animation").css("border", "4px solid red");
    });

    //버튼 클릭에 의한 이미지의 이동(애니메이션 효과)
    var $distance = 0; //맨처음 시작되는 이동거리
    $(".goBtn").click(function(){
        $distance += 100; //$distance = $distance + 100
        /*
        [1회 클릭] $distance = $distance + 100 = 0 + 100 = 100
        [2회 클릭] $distance = $distance + 100 = 100 + 100 = 200
        [3회 클릭] $distance = $distance + 100 = 200 + 100 = 300
        ... 클릭시마다 100씩 올리고 있음
        */

        $(".car_move").animate({
            "margin-left": $distance+"px"
        }, 1000);
    });


    
    $(".backBtn").click(function(){
        $distance -= 100;
        $(".car_move").animate({
            "margin-left": $distance+"px"
        }, 1000);
    });


    //애니메이션의 효과는 메모리를 갖고 가기 때문에 클릭의 횟수를 기억을 하고 있음 1회 클릭 당 1회만 적용된 후에 효과를 중지시키는 역할이 필요 .stop() 메서드를 .animate() 효과 메서드가 시작하기 직전에 넣으면 효과 중지를 적용시킬 수 잇음







    //자동 회전 슬라이드(좌측으로 이동하는 슬라이드)

    setInterval(function(){

        var $hover = $("#slider1").hasClass("hover");
        console.log($hover);
        if($hover == true){ //마우스가 슬라이드 영역으로 진입한 상태(일시정지)
            //아무것도 안한다
        }else{ //마우스가 슬라이드 영역 밖으로 이탈한 상태
            //(재생)

            var $first = $("#slider1 ul li").first();
            $("#slider1 ul").stop().animate({
                "margin-left":"-100%"
            }, 1000, function(){
                $("#slider1 ul").append($first).css("margin-left", "0px"); 
            });
        };




    }, 4000);
    //애니메이션 이동시간보다 setInverval의 시간간격(이미지가 일정시간동안 머물게 만든다)은 무조건 커야한다.

    $("#slider1").hover(function(){
        console.log("마우스 진입")
        $(this).addClass("hover");
    }, function(){
        console.log("마우스 이탈")
        $(this).removeClass("hover");
    });






    //자동 회전 슬라이드(우측으로 이동하는 슬라이드)
    //#1. 마지막 슬라이드 이미지를 맨 처음 자리로 이동을 시킨다.
    var $lastChild = $("#slider2 ul li").last();
    $("#slider2 ul").prepend($lastChild); //최초 위치 변경은 종료된 상태 4, 1, 2, 3


    setInterval(function(){
        
        var $last = $("#slider2 ul li").last();
        console.log($last);
        $("#slider2 ul").stop().animate({
            "margin-left":"0"
        }, 1000, function(){
            $("#slider2 ul").prepend($last).css("margin-left","-100%");
        });

    }, 4000);
 






    //탭박스 공간 : 탭버튼에 의한 이미지 또는 콘텐츠를 하나의 공간에서 변경하면서 보여주는 기능 - 모바일처럼 좁은 공간에서 활용도가 매우 높은 편

    /*신입용*/
    /*
    $(".tab_btn li:nth-child(1) a").css({
        "background":"#333",
        "color":"#fff"
    });
    $(".tab_box").css("display", "none");
    $("tab1").css("display", "flex")


    
    $(".tab_btn li:nth-child(1) a").click(function(){
        $(".tab_btn li:nth-child(1) a").css({
            "background":"#333",
            "color":"#fff"
        });
        $(".tab_btn li:nth-child(2) a").css({
            "background":"transparent",
            "color":"#333"
        });
        $(".tab_btn li:nth-child(3) a").css({
            "background":"transparent",
            "color":"#333"
        });

        $(".tab1").css("display", "flex");
        $(".tab2").css("display", "none");
        $(".tab3").css("display", "none");
        return false;
    });
    $(".tab_btn li:nth-child(2) a").click(function(){
        $(".tab_btn li:nth-child(1) a").css({
            "background":"transparent",
            "color":"#333"
        });
        $(".tab_btn li:nth-child(2) a").css({
            "background":"#333",
            "color":"#fff"
        });
        $(".tab_btn li:nth-child(3) a").css({
            "background":"transparent",
            "color":"#333"
        });

        $(".tab1").css("display", "none");
        $(".tab2").css("display", "flex");
        $(".tab3").css("display", "none");
        return false;
    });
    $(".tab_btn li:nth-child(3) a").click(function(){
        $(".tab_btn li:nth-child(1) a").css({
            "background":"transparent",
            "color":"#333"
        });
        $(".tab_btn li:nth-child(2) a").css({
            "background":"transparent",
            "color":"#333"
        });
        $(".tab_btn li:nth-child(3) a").css({
            "background":"#333",
            "color":"#fff"
        });

        $(".tab1").css("display", "none");
        $(".tab2").css("display", "none");
        $(".tab3").css("display", "flex");
        return false;
    });
    */

    /* 경력용 - 관계 통제*/
    /*
    $(".tab_btn li").click(function(){
        var $rel = $(this).attr("rel");
        console.log($rel);  //tab1 || tab2 || tab1
        //탭버튼 통제
        $(".tab_btn li").removeClass("activeBtn"); //모든 탭버튼의 영역에서 activeBtn 클래스 제거
        $(this).addClass("activeBtn"); //사용자가 클릭한 버튼만 activeBtn 클래스를 추가

        //탭 콘텐츠 통제
        $(".tab_box").removeClass("activeCont"); //모든 탭콘텐츠의 영역에서 activeCont 클래스 명을 제거
        $("."+$rel).addClass("activeCont"); //탭버튼으로부터 가져온 데이터와 포인트를 결합함으로써 클래스명을 만들어서 해당하는 곳에만 activeCont 클래스명을 추가한다.


        return false;
    });
    */


    /* 경력용 - 인덱스를 추출하여 해당하는 인덱싱 파트로 연결 : index() */
    $(".tab_btn li").click(function(){
        var $index = $(this).index();
        console.log($index); 
        //첫번째 li : 인덱스 번호 0
        //두번째 li : 인덱스 번호 1
        //세번째 li : 인덱스 번호 2


        //탭버튼 통제
        $(".tab_btn li").removeClass("activeBtn"); //모든 탭버튼의 영역에서 activeBtn 클래스 제거
        $(this).addClass("activeBtn"); //사용자가 클릭한 버튼만 activeBtn 클래스를 추가


        //탭 콘텐츠 통제
        $(".tab_box").removeClass("activeCont"); //모든 탭콘텐츠의 영역에서 activeCont 클래스 명을 제거
        $(".tab_box").eq($index).addClass("activeCont"); //탭버튼으로부터 추출한 인덱스 번호를 .tab_box의 인덱스와 연결하여 해당하는 박스만 보여준다.

        return false;
    });



    ///////////////////////////////////////////////////////////////////////////////

    //clone() 메서드
    var $clone_el = $(".clone_method p").clone(); //해당 요소를 복제. 객체를 저장하는 개념과는 다른 형태 (원본과 복제본이 존재)
    console.log($clone_el);

    $(".clone_method").append($clone_el);

    var $object_el = $(".clone_method p:eq(0)");
    $(".clone_method").append($object_el);


    //복제 : 기존 요소를 남겨놓고 동일한 요소를 복사한다.
    //객체의 이동 : 기존 요소를 선택한 상태에서 필요한 위치로 이동을 시킨다.


    //empty() 메서드
    $(".empty_method").empty();



    //remove() 메서드
    $(".remove_method").remove();
    

    //replaceWith() /replaceAll() 메서드
    $(".replace_method li").last().replaceWith("<li>유재석</li>");
    $("<li>박명수</li>").replaceAll(".replace_method li:first");



    //감싸주거나 감싼 것을 제거하는 메서드
    $(".wrap_method ul li span").wrap("<a href='' class='link' />");


    $(".wrapAll_method p").wrapAll("<article id='trip' title='여행가방' />");


    $(".wrapInner_method li").wrapInner("<a href='' />");

    
    $(".unwrap_method p").unwrap();









});