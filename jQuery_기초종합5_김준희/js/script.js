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









});