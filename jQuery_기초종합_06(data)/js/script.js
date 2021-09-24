$(document).ready(function(){
    //data() 메서드 : 지정한 문서 내부에 데이터를 보여주지 않으면서 저장시킬 수 있다는 장점(검사창에서 노출 없음)
    //<input type="hidden" value="상품코드">는 검사창에서는 노출되는 형태
    //data() 메서드를 활용한다면 검사창에서 노출이 전혀 없음

    //set 방식 => $(선택자).data("key", "value");
    //get 방식 => var 변수 = $(선택자).data("key");


    $(".store").data({
        "store_name":"더페이스샵", 
        "store_address":"강남역"
    }); //set 방식
    var $store_name = $(".store").data("store_name"); //get 방식
    var $storeAddress = $(".store").data("store_address"); //get 방식
    console.log($store_name);
    console.log($storeAddress);


    $(".store").text(`${$store_name}, ${$storeAddress}`);



    $("#ex_01").data({
        "id":"gtx",
        "name":"train",
        "location":"Seoul"
    });

    var $dataId = $("#ex_01").data("id");
    var $dataName = $("#ex_01").data("name");
    var $dataLocation = $("#ex_01").data("location");

    $("#ex_01").each(function(){
        $(this).find(".data-id").text(`${$dataId}`)
        $(this).find(".data-name").text(`${$dataName}`)
        $(this).find(".data-location").text(`${$dataLocation}`)
    });



    //중간 교육 : removeData()
    $("#edu_02 span").data({
        "name":"홍길동",
        "age":18,
        "location":"경기도"
    });
    var $dataName = $("#edu_02 span").data("name");
    console.log($dataName);
    var $dataAge = $("#edu_02 span").data("age");
    console.log($dataAge);
    var $dataLocation = $("#edu_02 span").data("location");
    console.log($dataLocation);


    $("#edu_02 span").removeData("age");
    var $dataAge = $("#edu_02 span").data("age");
    console.log($dataAge);




    var $title_arr = [
        {$dataSrc:"logo-01.jpg", $dataTitle:"PIXAR"},
        {$dataSrc:"logo-02.jpg", $dataTitle:"DISNEY"},
    ];
    var $p_arr = [
        {$dataSrc:"anmation-01.jpg", $dataTitle:"CAR"},
        {$dataSrc:"anmation-02.jpg", $dataTitle:"Toy Story"},
        {$dataSrc:"anmation-03.jpg", $dataTitle:"Guitar Boy"},
    ];
    var $d_arr = [
        {$dataSrc:"d-ani-01.jpg", $dataTitle:"COW"},
        {$dataSrc:"d-ani-02.jpg", $dataTitle:"Destiny"},
        {$dataSrc:"d-ani-03.jpg", $dataTitle:"Tingker Bell"},
    ];


    //구조화된 영역에서 데이터 및 이미지를 순차적으로 접근하여 구성한다.
    $("#ex_02 .logo li").each(function(i){
        $(this).css("background-image", `url(./img/${$title_arr[i].$dataSrc})`);
        $(this).data("title", $title_arr[i].$dataTitle);
        var $title = $(this).data("title");
        console.log($title);
    });


    $("#ex_02 .animation-p li").each(function(i){
        $(this).css("background-image", `url(./img/${$p_arr[i].$dataSrc})`);
        $(this).data("title", $p_arr[i].$dataTitle);
        var $title = $(this).data("title");
        console.log($title);
    })

    $("#ex_02 .animation-d li").each(function(i){
        $(this).css("background-image", `url(./img/${$d_arr[i].$dataSrc})`);
        $(this).data("title", $d_arr[i].$dataTitle);
        var $title = $(this).data("title");
        console.log($title);
    })


    //상위 항목 클릭시
    $("#ex_02 .logo li").click(function(){
        var $index = $(this).index();
        $("#ex_02 .sub-box ul").removeClass("active");
        $("#ex_02 .sub-box ul").eq($index).addClass("active");


        var $title = $(this).data("title");
        $(".brand").text($title);
        $(".detail").text("000"); //상위 항목 변경시 서브 항목의 초기화시키는 역할을 부여
    });

    //하위 항목 클릭시
    $("#ex_02 .sub-box ul li").click(function(){
        var $sub_title = $(this).data("title");
        $(".detail").text($sub_title);
    });











});