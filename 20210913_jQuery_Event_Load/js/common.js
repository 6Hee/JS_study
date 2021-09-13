$(document).ready(function(){
    //외부 파일을 가져왔을 때는 이벤트를 걸기위한 시점이 늦기 때문에 콜백함수를 활용한다. 
    //$("지정 대상의 선택자").load("가져올 외부 파일", 콜백함수) : 지정한 대상의 선택자에 가져올 외부 파일을 넣고 그 이후에 콜백함수 내부의 실행문을 진행시켜라

    $("#header").load("./header.html", function(){
        var $hash = location.hash;
        console.log($hash);  //#sub_1
        var $hash_arr = $hash.split("_");
        console.log($hash_arr); //["#sub", "1"]
    
        if($hash_arr[0] == "#sub"){
            console.log("조건문 통과");
           $("header nav ul li").removeClass("active"); 
           $("header nav ul li").eq(Number($hash_arr[1])).addClass("active"); 
        }
    });
    $("#footer").load("./footer.html");


});
