$(document).ready(function(){


    $("#ex_01 #name span").text("홍길동");
    $("#ex_01 #age span").text("18");
    $("#ex_01 #location span").text("서울");
    

    var arr_2= [
        ["kakao_01"],
        ["kakao_02"],
        ["kakao_03"],
    ];
    console.log(arr_2);
    $("#ex_02 ul li").each(function(i){
        $(this).css("background-image", "url(./img/"+arr_2[i]+".jpg)");
    });




    var arr_03_01 = [
        ["kakao_01"],
        ["kakao_02"],
        ["kakao_03"],
    ]
    var arr_03_02 = [
        ["카카오 백화점 나들이"],
        ["카카오 입성"],
        ["카카오 휴가"],
    ]

    $("#ex_03 ul li .img").each(function(i){
        $(this).css("background-image", "url(./img/"+arr_03_01[i]+".jpg)");
    });
    $("#ex_03 ul li .title").each(function(i){
        $(this).text(arr_03_02[i]);
    });







    var arr_04 = [
        ["kakao_01", "카카오 백화점 나들이"],
        ["kakao_02", "카카오 입성"],
        ["kakao_03", "카카오 휴가"],
    ]

    $("#ex_04 ul li").each(function(i){
        $(this).find(".img").css("background-image", "url(./img/"+arr_04[i][0]+".jpg)");

        $(this).find(".title").text(arr_04[i][1]);
    });







    /*
    var arr_05 = [
        ["kakao_01", "카카오 백화점 나들이"],
        ["kakao_02", "카카오 입성"],
        ["kakao_03", "카카오 휴가"],
    ]

    for(j = 0; j < 3; j++){
        $("#ex_05 ul").prepend("<li><div class='img'></div><p class='title'></p></li>")
    }

    $("#ex_05 ul li").each(function(i){
        

        $(this).find(".img").css("background-image", "url(./img/"+arr_05[i][0]+".jpg)");

        $(this).find(".title").text(arr_05[i][1]);
    });
    */

    var $kakao_05 = [
        {img:"kakao_01.jpg" , title:"카카오 백화점 나들이"},
        {img:"kakao_02.jpg" , title:"카카오 입성"},
        {img:"kakao_03.jpg" , title:"카카오 휴가"},
    ]
    // 템플릿 리터럴(`` : 백틱)을 활용한 내부 데이터 직접 넣기 with for문
    /*
    for(i = 0; i < $kakao_05.length; i++){
        $("#ex_05 ul").append(`
            <li>
                <div class='img' style="background-image:url(./img/${$kakao_05[i].img})"></div>
                <p class='title'>${$kakao_05[i].title}</p>
            </li>
        `)
    }
    */


    /*
    for(i in $kakao_05){
        console.log(i);  //배열 데이터의 인덱스번호를 반환
        $("#ex_05 ul").append(`
            <li>
                <div class="img" style="background-image:url(./img/${$kakao_05[i].img});"></div>
                <p class="title">${$kakao_05[i].title}</p>
            </li>
        `);
    }
    */


    
    /*
    for(v of $kakao_05){
        console.log(v);
        $("#ex_05 ul").append(
            `
            <li>
                <div class='img' style="background-image:url(./img/${v.img})"></div>
                <p class='title'>${v.title}</p>
            </li>
            `
        )
    }
    */

    $kakao_05.forEach(function(v, i){
        console.log(v); //실제 배열 내부의 데이터
        console.log(i); //배열 데이터의 인덱스 번호
        $("#ex_05 ul").append(`
            <li>
                <div class='img' style="background-image:url(./img/${v.img})"></div>
                <p class='title'>${v.title}</p>
            </li>
        `);
    });
    
    //배열 변수명.forEach(function(배열 데이터의 매개변수 , 배열 인덱스 매개변수){ 실행문 })




    // 템플릿 리터럴 내부에 직접 데이터를 가져올 때는 `${변수명}`
    var bear = "곰인형";
    var buy = `내가 구매한 선물 : ${bear}`;
    console.log(buy);

    var $kakaoPhoto = `내가 고른 이미지 파일 : ${$kakao_05[1].img}`;
    console.log($kakaoPhoto);


    var price1 = 1000;
    var price2 = 2000;
    var total = `장바구니 총액 : ${price1 + price2}`;
    console.log(total);


});