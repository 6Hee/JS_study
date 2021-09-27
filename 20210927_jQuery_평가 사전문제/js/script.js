$(document).ready(function(){
/*실습 예제 1*/
    var $arr_01 = [
        ["poster_01.jpg", "강철비2: 정상회담", "<남북미 정상회담 중, 북한 내 쿠데타로 세 정상이 납치된다!> 동북아시아의 운명이 핵잠수함에 갇혔다! "],
        ["poster_02.jpg", "반도", "<필사의 사투가 시작된다!> 전대미문의 재난 그 후 4년, 폐허의 땅으로 다시 들어간다! "],
        ["poster_03.jpg", "애니멀 크래커", "<과자를 먹으면, 동물로 변신?> '세상에~! 먹는 순간 동물로 변하는 마법의 과자라니!'"],
        ["poster_04.jpg", "소년시절의 너", "<넌 세상을 지켜, 난 너를 지킬게>        세상에서 기댈 곳 없이 세상에 내몰린 우등생 소녀 ‘첸니엔’과 양아치 소년 ‘베이’."]
    ];


    //#1. 샘플코드를 가져와서 저장할 것
    var $poster = `
        <div class="poster">
            <div class="img"></div>
            <div class="title"></div>
            <div class="context"></div>
        </div>
    `;

    //#2. for문을 활용하여 배열의 개수만큼 샘플코드를 지정된 공간 내부에 반복 적용 구성할 것
    for( i = 0; i < $arr_01.length; i++ ){
        $("#ex_01 .wrap").append($poster);
    }


    //#3. each문 활용하여 이미지 및 텍스트 넣을 것
    $("#ex_01 .wrap .poster").each(function(i){
        console.log(i);
        $(this).find(".img").css("background-image", "url(./img/"+$arr_01[i][0]+")");
        $(this).find(".title").text($arr_01[i][1]);
        $(this).find(".context").text($arr_01[i][2]);
    });

/*실습 예제 2*/
    var $arr_02 = ["pur05_01.png", "pur05_02.png", "pur05_03.png", "pur05_04.png"];

    //#1. .main 공간에 첫번째 이미지 적용하고, 썸네일 이미지 공간인 첫번째 <li> 태그에 클래스 active 추가할 것
    $("#ex_02 .main").css("background-image", "url(./img/"+$arr_02[0]+")");
    

    //#2. each문 활용하여 썸네일 공간에 이미지 넣을 것
    $("#ex_02 .wrap .thumb ul li").each(function(j){
        console.log(j);
        $(this).css("background-image", "url(./img/"+$arr_02[j]+")");
    });

    //#3. 클릭 이벤트 적용하여 썸네일 이미지 클릭시, .main 이미지 공간의 이미지 교체할 것 + 클릭한 곳만  클래스 active 추가할 것
    $("#ex_02 .wrap .thumb ul li").click(function(){
        var $index = $(this).index();
        $("#ex_02 .main").css("background-image", "url(./img/"+$arr_02[$index]+")");
        $("#ex_02 .wrap .thumb ul li").removeClass("active");
        $(this).addClass("active");
    });



/*실습 예제 3*/
    //2차 배열 패턴 ["이미지", "제품 부연설명", "제품 타이틀", "제품 상세설명", "제품 주요 색상"]
    var $arr_03 = [
        ["img1.png", "녹차의 향기를 품은", "그린 글레이즈드 크림 프라푸치노", "가을나무의 계절의 변화를 표현한 음료 글레이즈드의 새로운 프라푸치노 버전으로 녹차 티라미수 느낌의 프라푸치노 음료", "#017143"],
        ["img2.png", "산딸기의 달콤함과 신선함을 담은", "스트로베리 크림 프라푸치노", "산딸기의 톡톡함과 과즙으로 느껴지는 신선함과 생크림의 조화로 달콤함을 느낄 수 있는 프라푸치노 음료", "#c072ba"]
    ];

    //#1. 클릭한 썸네일의 인덱스 번호를 추출하여 저장하고 위에 해당하는 배열의 인덱스에 맞춰 1차 배열로 접근, 해당하는 항목에 각 데이터를 2차 배열로부터 가져와서 적용하시오.
    $("#ex_03 ol li").click(function(){
        var $index = $(this).index();

        $("#ex_03 .main_bg1").css("background-color", $arr_03[$index][4]);
        $("#ex_03 .beverage_img").css("background-image", "url(./img/ex_03_img/"+$arr_03[$index][0]+")");
        $("#ex_03 h3").text($arr_03[$index][1]);
        $("#ex_03 h2").text($arr_03[$index][2]).css("color", $arr_03[$index][4]);
        $("#ex_03 .bar").css("background-color", $arr_03[$index][4])
        $("#ex_03 p").text($arr_03[$index][3]);


        $("#ex_03 ol li").removeClass("active");
        $(this).addClass("active");
    });



/*실습 예제 4*/
    function slideNav(){
        var $rel = $("#ex_04 ul li").eq(1).attr("rel");
        console.log($rel);
        $("#ex_04 ol li").removeClass("active");
        $("#ex_04 ol li").eq($rel).addClass("active");

    }

    //#1. 이전 버튼("<")를 클릭시 이전 이미지가 나올 수 있도록 좌측부터 4, 1, 2, 3 순서로 구성하시오. (브라우저 로딩간에는 첫번째 슬라이드가 나와야 함)
    var last_slide = $("#ex_04 ul li").last();
    $("#ex_04 ul").prepend(last_slide);
    
    slideNav();



    //#2. 각 화살표 클릭시 해당하는 방향으로 이미지를 좌우로 이동시키면서 무한 루프가 될 수 있도록 구성하시오.
    $("#ex_04 .prev").click(function(){
        var $last = $("#ex_04 ul li").last();
        $("#ex_04 ul").stop().animate({
            "margin-left":"0%"
        }, 500, function(){
            $("#ex_04 ul").prepend($last).css("margin-left", "-100%");
            slideNav();
        });

        return false;
    });

    $("#ex_04 .next").click(function(){
        var $first = $("#ex_04 ul li").first();
        $("#ex_04 ul").stop().animate({
            "margin-left":"-200%"
        }, 500, function(){
            $("#ex_04 ul").append($first).css("margin-left", "-100%");
            slideNav();
        });

        return false;
    });

    //#3. 슬라이드가 이동한 후 함수문을 활용하여 ol > li에 active클래스를 제거 또는 부여하여 현재 화면에 보이는 슬라이드 이미지가 어떤 이미지 인지를 rel 값을 통해 연동하시오.



});