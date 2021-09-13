$(document).ready(function(){

    var $w_01 = $(".content_calc").width();
    console.log("콘텐트 공간 - 1의 가로 수치 : "+$w_01);
    var $h_01 = $(".content_calc").height();
    console.log("공간1의 세로 수치 : " + $h_01);

    var $w_02 = $(".padding_calc").width();
    console.log("공간2의 가로 수치 : "+ $w_02);
    var $wInner_02 = $(".padding_calc").innerWidth();
    console.log("공간2의 가로 수치(패딩포함) : " + $wInner_02);

    var $w_03 = $(".border_calc").width();
    console.log("공간3의 가로 수치 : "+ $w_03);
    var $wOuter_03 = $(".border_calc").outerWidth();
    console.log("공간3의 가로 수치(패딩+보더 포함) : " + $wOuter_03);

    

    ////////////////////////////////////////////////////////
    //최초 로딩되면서 접근하는 파트
    var $img_w = $(".ch_cover").width();
    console.log($img_w);  //브라우저가 로딩되면서 가로값을 받아온다.
    $(".ch_cover").css("height", $img_w + "px");  //받아온 가로값을 세로값으로 적용

    //브라우저의 가로 또는 세로값이 변동되었을 때(반응형), 이벤트를 발생시킴
    $(window).resize(function(){
        //console.log("브라우저 사이즈 조정");
        var $img_w = $(".ch_cover").width();
        console.log($img_w);
        $(".ch_cover").css("height", $img_w + "px");
    });


    ///위에서 중복되는 구문을 함수로 통합하여 적용되게 구성할 것.
    //브라우저 로딩시 정사각형으로 구성 -> 브라우저의 가로 사이즈가 조정될 때마다 정사각형으로 조정되게 구성한다.


    // position() vs offset()
    var $po_x = $(".position_method .inbox").position().left;
    console.log($po_x); // 60 : .inbox{left:60px;}
    var $po_y = $(".position_method .inbox").position().top;
    console.log($po_y); //40 : .inbox{top:40px;}

    var $off_x = $(".offset_method .inbox").offset().left;
    console.log($off_x); //160 : .offset_method{margin-left:100px;} + offset_method .inbox{left:60px;}

    var $off_y = $(".offset_method .inbox").offset().top;
    console.log($off_y); //??? : 브라우저의 최상단으로부터 떨어진 절대 위치 거리를 가져온다.

    //position()의 수치 : 부모(position:relative)로 부터 떨어진 상대적 위치
    //offset()의 수치 : 브라우저의 좌상단으로부터 떨어진 절대적 위치


    // scrollTop()
    $(window).scroll(function(){
        var $scrollTop_location = $(window).scrollTop();
        console.log($scrollTop_location);
        
    });



});