$(document).ready(function(){
    //문서가 준비가 완료되면 내부의 함수문을 실행해라

    $("#tit_start").css("color", "red");
    jQuery(".title").css("font-style", "italic");


    var $arr = ["a", "b", "c"];
    //자바스크립트 영역
    console.log($arr.length);

    //jQuery는 모든 영역이 명령체계로 이루어져 있음
    $("#tit_start").hide();  //해당 항목을 display:none을 적용
    $(".title").show(); //해당 항목을 display:block을 적용

    //css의 명시도 (아이디 100점 클래스 10점 태그 1점)를 완전히 무시하고 로딩 과정상 마지막에 선언된 선택자가 최종 선택자로 명령을 수행하게 됨

    //선택자 파트
    //전체 선택자
    //$("*").css("color", "blue");
    //html문서상에 존재하는 모든 태그는 동일하게 적용


    //클래스 선택자
    $(".color").css("background-color", "#ffa");
    
    //스타일의 나열식 방식
    //$(".yellow").css("color", "#f00");
    //$(".yellow").css("background", "pink");


    //스타일의 체이닝 기법(꼬리에 꼬리를 물면서 스타일을 적용)
    //$(".yellow").css("color", "#f00").css("background", "pink");

    //스타일 그룹핑 기법 css의 스타일 기법을 그대로 가져온다. (객체를 선언한 것과 유사한 방식)
    $(".yellow").css({
        "color":"#f00",
        "background":"pink",
    });


    //아이디 선택자 : 문서상에 단 한개만 존재해야함. 동일한 아이디명이 존재할 때는 맨 처음 접근되는 아이디만 선택으로 적용
    $("#mySel").css("background-color", "#08f");


    //태그 선택자
    //$("h6").css("color", "orange").css("border-left", "4px solid #afa");


    //그룹 선택자(css에서는 선택자1, 선택자2,{스타일 선언})
    $(".fav","#iceCream").css("font-size", "24px"); //작동안됨. jQuery에서는 선택자부분에서 에러가 발생되어야 함에도 불구하고 에러발생이 표시가 안됨(90%가 선택자 문제)
    $(".fav, #iceCream").css("font-weight", "bold");




    //인전관계선택자
    //부모 또는 조상 선택자

    $(".me").parent().css("border", "1px solid #f00");


    //$(".my").parents().css("background", "#aaa"); //기준 선택자를 감싸고 있는 모든 태그에 단계별로 모두 스타일 적용

    $(".my").parents(".parents_selector").css("background", "#aaa"); //기준으로부터 조상을 찾는데 지목한 조상만을 선택



    $(".standard").closest("ul").css("border-left", "5px solid red");
    //closest() 메서드 : 탐색 메서드. 소괄호 내부에는 반드시 지목할 대상을 넣는다.


    $(".children_selector").children().css("background", "#faf"); //자식 전체를 선택

    $(".children_selector").children("h4").css("color", "#fff"); //자식 중에서 특정 자식만을 선택


    $(".find_selector").find("p").css("font-style", "italic");

    var $find_p = $(".find_selector").find("p");
    console.log($find_p);



    //형제 선택자

    $(".favColor").prev().css("background", "#fb0");
    $(".favColor").next().css("background", "#7af");


    $(".favColor").prevAll().css("border-left", "4px solid #f00");
    $(".favColor").nextAll().css("border-left", "4px solid #00f");


    $(".favColor").prevUntil(".p_until").css("color", "red");
    $(".favColor").nextUntil(".n_until").css("color", "blue");


    $(".favColor").siblings().css("border-bottom", "2px dashed green");
    $(".favColor").siblings("#specify").css("font-size", "32px");




    ////탐색 선택자////
    //힙합
    $(".search_selector p:nth-child(2)").css("color", "#f60"); //내가 부모로부터 몇번째 자식인가?

    //힙합
    $(".search_selector p:nth-of-type(1)").css("font-weight", "bold"); //내가 부모로부터 동일한 타입중에 몇번째인가


    //힙합
    $(".search_selector p").first().css("background", "#fc7"); //동일한 타입 중에서 첫번째는 누구인가?
    $(".search_selector p:first").css("font-style", "italic"); //동일한 타입 중에서 첫번째는 누구인가?

    //클래식
    $(".search_selector p").last().css({"background":"#ee3535", "color":"#fff"}); //동일한 타입 중에서 막내는 누구인가?
    $(".search_selector p:last").css("font-size", "28px");//동일한 타입 중에서 막내는 누구인가?


    //0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    //odd : 인덱스 번호에서는 홀수. 순서상으로는 짝수번째
    $(".search_selector p:odd").css("border-left", "4px solid red");


    //even : 인덱스 번호에서는 짝수. 순서상으로는 홀수번째(인덱스 번호 0,2,4,6,8)
    $(".search_selector p:even").css("border-left", "4px solid blue");


    //<<<<<<<<<<<<<<< eq(인덱스번호) : 해당하는 선택자 중에서 지정한 인덱스번호를 기준으로 선택 >>>>>>>>>>/////////////
    //재즈
    $(".search_selector p").eq(4).css("font-style", "italic");
    $(".search_selector p:eq(4)").css("color", "hotpink");


    //lt(인덱스 번호) : 지정한 인덱스 번호보다 작은 인덱스번호를 기준으로 선택(less than)

    $(".search_selector p:lt(2)").css("border-top", "2px dotted blue"); 
    //선택된 요소들은 인덱스 번호 0,1

    //gt(인덱스 번호) : 지정한 인덱스 번호보다 큰 인덱스 번호를 기준으로 선택(great than)

    $(".search_selector p:gt(2)").css("border-top", "2px dotted purple"); 
    //선택된 요소들은 인덱스번호 3~마지막






    //실습
    $(".hero").next().next().css("background", "yellow");
    $(".hero").parents(".house1").children("p").css({"background":"red", "font-size":"32px"});
    $(".hero").parents(".house1").siblings().css({"background":"black","color":"#fff"})

    //중간 실습 1 - 선택자 파트
    /*
    //조건1
    $(".hero").next().next().css("background", "yellow");

    //조건2
    $(".hero").closest("div").prev().css({"background":"red", "font-size":"32px"});
    //console.log($(".hero").closest("div").prev());

    //조건3
    $(".hero").closest("section").find("h6").css({"background":"black", "color":"#fff"});
    */
    $(".hero").next().next().css("background", "yellow")
        
    .closest("div").prev().css({"background":"red", "font-size":"32px"})

    .closest("section").find("h6").css({"background":"black", "color":"#fff"});



    // *= : 포함 / ^= : 시작 / $= : 종료 (연속된 글자)
    //클래스명에 ic가 포함된 해당항목?
    $(".attr_selector p[class*='ic']").css("color","red");
    //클래스명에 ar이 포함된 해당항목? 배경색을 #aff로 적용
    $(".attr_selector p[class*='ar']").css("background-color", "#aff");
    //클래스명에 le로 종료되는 항목을 찾아서 폰트크기를 24px로 적용
    $(".attr_selector p[class$='le']").css("font-size", "24px");




    //입력요소에서 속성선택자
    $(":password").css("background", "#aff");

    var $chk_hobby = $(".form_attr_sel :checked").val();

    console.log($chk_hobby);

    var $sel_opt = $(":selected").val();
    console.log($sel_opt);


    //콘텐츠 탐색 선택자
    $(".contains_selector p:contains('신데렐라')").css("font-size","36px");


    $(".contents_selector ul li a").contents("span").css("color","red");


    $(".has_selector p:has('span')").css("font-weight", "bold");


    //[contents('하위요소') vs has('하위요소')]
    //공통점 : 하위요소를 포함하고 있는 형식은 동일
    //차이점 : 선택자의 주체가 되는 대상이 다름
    // - contents('하위요소') : 지정한 하위요소에 스타일 적용
    // - has('하위요소') : 지정한 하위요소를 포함하고 있는 상위 선택자에 스타일이 적용

    $(".not_selector p").not(":eq(1)").css("color","#08f");


    $(".test_05 p").not(":eq(3)").css("color","red");


    console.log($(".find_selector li").find("span"));
    //복수의 선택이 가능
    //무조건 작성된 순서를 기준으로 인덱스 번호가 할당
    console.log($(".find_selector li").find("span:eq(2)"));
    //li라는 영역 내부의 span 한 장소에 3개가 존재함. 그 중에서 2번 인덱스를 찾겠다는 의미
    console.log($(".find_selector li").find("span").eq(2));
    //li라는 영역 내부의 span을 먼저 찾아감. 배열 데이터로 구성 = .eq(2) => 배열 데이터에서 2번 인덱스를 찾음()


    //특가상품 좌측에 위치한 ♠의 색상을 red로 변경해보세요.
    $(".find_selector li:eq(6)").find("span").css("color", "red");



    $(".current").closest("ul").css("border-left", "4px solid #fa0");


    //is()메서드
    var $checked = $(".total_agree input").is(":checked");
    //체크박스가 체크된 상태라면 true, 체크가 안된 상태면 false
    if($checked == true){
        $(".detail_agree input").attr("checked", "checked");
        //attr("속성명","속성값") ~= setAttribute("속성명", "속성값")
    }


    //each(function(){실행문}) 메서드

    /* each 메서드의 작성 방법1 */
    /*
    $("선택자").each(function(index){
        //순차적으로 접근할 실행문 ...
        index 번호는 0부터 최종 인덱스 번호만큼 순차적으로 하나씩 자동으로 올라간다.
    });
    */

    $(".each_work p").each(function(index){
        console.log(index); //순차적으로 접근하는 과정에서 index = 0 => 1 => 2 (인덱스 번호는 0부터 문서의 선택자 개수만큼 하나씩 올리고 있음)
        //첫번째 p 태그로 접근시 , index = 0
        //두번째 p 태그로 접근시 , index = 1
        //세번째 p 태그로 접근시 , index = 2
        $(this).text(index);
    });
    //마치 배열 데이터로부터 접근 가능한 반복문인 for~in문과 유사
    //this라는 지시 대명사 : 순차적으로 접근하는 개별 p태그를 각각 지정하여 선택

    //[css 상에서 :hover와 유사]
    /**
    [html 문서]
    <nav>
        <ul>
            <li><a href="">메뉴1</a></li>
            <li><a href="">메뉴2</a></li>
            <li><a href="">메뉴3</a></li>
        </ul>
    </nav>
    [CSS 스타일 선언]
    nav ul li a{color:#333;}
    nav ul li:hover a{color:#f00};
    */


    //순차적 접근과정상 각 공간으로 접근되는데 각 공간에서 진행되는 장소 => 이벤트가 발생한 곳

    //마우스 이벤트를 통해 각 공간에 지정된 문자를 콘솔창에 표시(this에 대한 정의)
    $(".this_define div").click(function(){
        console.log("클릭 이벤트 발생");
        console.log(this);
        var $thisText = $(this).text(); //내가 클릭한 곳의 공간으로부터 담져겨있는 텍스트만 가져와서 저장
        console.log($thisText);
    })


    //each문을 활용한 배스킨 라빈슨 아이스크림 리스트(배열 데이터) 구성하기

    var $baskin = ["엄마는 외계인", "아몬드 봉봉", "애플민트", "초콜릿 무스", "슈팅스타", "모카", "체리쥬빌레"]

    $(".each_baskin ul li").each(function(index){
        $(this).text($baskin[index]);
    });



    //#1. 배열을 구성한다.
    //2차 배열 패턴 [이미지, 타이틀]

    var $disney = [
        ["disney_01.jpg", "미키마우스"],
        ["disney_02.jpg", "미니마우스"],
        ["disney_03.jpg", "도널드 덕"],
        ["disney_04.jpg", "데이지"],
    ]


    //#2. 샘플 코드 저장
    var $bongdari = ""; //빈 봉다리 구성
    var $d_cont = `
    <div class="cont">
        <img src="" alt="">
        <h4>이름</h4>
    </div>
    `;

    //#3. 반복문을 통해 위에 저장된 cont라는 박스를 수집한다.
    for(i=0; i<$disney.length; i++){ //$disney.length = 4
        $bongdari += $d_cont;
        console.log($bongdari);
    };
    //innerHTML = 새값 ==> 기존 하위 콘텐츠를 새값으로 갱신
    //html(새값)
    $("#disney").html($bongdari);



    //#4. 각 공간으로 순차적 접근을 한다. + 내부의 장소에 이미지 및 타이틀을 넣는다.
    $("#disney .cont").each(function(i){
        $(this).find("img").attr("src", "./img/"+$disney[i][0])
        $(this).find("h4").text($disney[i][1])
    });

    
    //each() 메서드의 두번째 방법
    //a 태그 내부에 배열 데이터 각각 넣기
    var $menu = ["ABOUT", "PROJECT", "PORTFOLIO"];


    $.each($(".each_method_2 li"), function(index){
        console.log(index);
        $(this).find("a").text($menu[index]);
    })


    $("#myList li").not("li:eq(0)").css("background", "blue");


    $("#myList2 li:eq(2)").css("background", "green");






});

/*
var $each_work = document.querySelector(".each_work");
var $each_work_p = $each_work.children;
console.log($each_work_p); //[p, p, p]
for(i=0; i<$each_work_p.length; i++){
    $each_work_p[i].textContent = i;
}
*/


