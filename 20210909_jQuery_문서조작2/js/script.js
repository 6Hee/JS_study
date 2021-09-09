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

});