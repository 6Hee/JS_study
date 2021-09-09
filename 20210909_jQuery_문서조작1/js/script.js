$(document).ready(function(){




    var $html = $(".html_method h3").html(); //get 방식
    console.log($html);


    $(".html_method h3").html("Your <a href=''>Choice</a>"); //set 방식


    //text_method
    var $text = $(".text_method h3").text(); //get 방식
    console.log($text);
    $(".text_method h3").text("오늘의 <b>추천요리</b>") //set 방식
    //html_method vs text_method : 태그를 태그로써 인정이 되는가 또는 아닌가의 차이점을 갖고 있음


    //attr_method
    $(".average").each(function(index){
        var $capacity = $(this).attr("data-score");
        console.log($capacity);
        $(this).find(".gage_bar").css("width", $capacity + "%");
    })




    //복수의 속성(attribute) 넣기
    /*
    $(".contxt").attr("rel", "cont");
    $(".contxt").attr("data-id", "abc1234");
    */
   $(".contxt").attr({
       "rel":"cont",
       "data-id":"abc1234"
   });



   //removeAttr_method
   $(".removeAttr_method p").removeAttr("rel");
   $(".removeAttr_method p").attr("movie", "변호인");


   //addClass(), removeClass()
   $(".add").click(function(){
       $(".class_method_01 img").addClass("active");
   });

   $(".remove").click(function(){
       $(".class_method_01 img").removeClass("active");
   });


   //두개의 매개체가 각각의 기능을 별도로 갖고 있는경우
   //이동 버튼을 클릭하면 클래스 추가
   //원복 버튼을 클릭하면 클래스 제거

   /*
   $(".both_class button").click(function(){
       console.log($(this));
       $(this).addClass("active");
   });
   $(".both_class button").click(function(){
       $(this).removeClass("active");
   });
   */

   //단순한 적용간에는 toggleClass("클래스명") 적용가능 : 클래스가 존재하면 해당하는 클래스는 제거/클래스가 존재하지 않다면 클래스를 추가
   /*
   $(".both_class button").click(function(){
       $(this).toggleClass("active"); //복합적으로 적용간에는 코딩이 꼬여버리는 단점
   });
   */


   //hasClass("클래스명") - get 방식
   //hasClass("클래스명") : 해당하는 시점상에서 클래스명이 존재하면 true / 클래스명이 존재하지 않다면 false => 조건식으로 분류작업을 후속으로 진행시켜야 함

   $(".both_class button").click(function(){
       //매개체가 하나이기 때문에 내가 어떤 상태인지를 체크(true 또는 false)
       var $active = $(this).hasClass("active");
       console.log($active);
       //false(active라는 클래스가 없다.)
       if($active == false){
           $(this).addClass("active");
       }else{
           $(this).removeClass("active");
       }
   });

   //엘레베이터 버튼 구성하기
   $(".elevator_btn ul li").click(function(){
    var $btn = $(this).hasClass("on");
    if($btn == false){
        $(this).addClass("on");
    }else{
        $(this).removeClass("on");
    }
});



    /*
    //상단메뉴 구성(주메뉴 + 서브메뉴) - 클릭 이벤트
    $("#header nav > ul > li").click(function(){
        $("#header nav > ul > li").removeClass("active"); //전체의 active클래스명을 제거한다.

        $(this).addClass("active"); //사용자가 클릭한 곳만 active클래스명을 부여한다.



        return false; //a태그 내부의 href가 작동되어 새로고침되는 것을 막는다.
    });

    */

    //상단메뉴 구성(주메뉴 + 서브메뉴) - 클릭 이벤트
    $("#header nav > ul > li").click(function(){
        var $active = $(this).hasClass("active");
        if($active == false){ //클릭했을 시점에서 나는 active라는 클래스가 없음
            $("#header nav > ul > li").removeClass("active"); //전체의 active 클래스명을 제거한다.
            $(this).addClass("active"); //사용자가 클릭한 곳만 active 클래스명을 부여한다.
        }else{ //클릭했을 시점에서 나는 active라는 클래스가 있음
            $(this).removeClass("active");
        }
        return false;
    });



    //val_method
    var $input_val = $(".val_method input").val();
    console.log($input_val);
    $(".val_method input").val("이민호"); //입력창은 사후 조정이라는 단계를 거치기 때문에 실질적인 value와 검사창에서의 value가 다름
    console.log($input_val);
    //change라는 이벤트를 통해 그 값을 다시 받아옴




    //prop_method
    var $prop = $(".prop_method img").prop("src");
    console.log($prop); //http://127.0.0.1:5500/img/img_01.png

    var $attr = $(".prop_method img").attr("src");
    console.log($attr); //./img/img_01.png
    
    $(".chk_bx").prop("checked", true); //강제성이 강한편 (내부 속성 중에 checked="checked" 없음에도 불구하고 체크가 된상태로 표현)

    $(".chk_sel").attr("checked", true); //강제성이 약한편(내부 속성 중에 checked="checked"가 있기 때문에 체크가 된 상태로 표현)


















});


//javascript에서는 ...
/*
var $cont = document.querySelector(".contxt");
$cont.setAttribute("rel", "cont");
$cont.setAttribute("data-id", "abc1234");
*/