$(document).ready(function(){

    //실습 20
    var $img_val = $(".test_20 img").attr("title");
    console.log($img_val);
    $(".test_20 img").click(function(){
        $(".test_20 p").text($img_val);
    });


    //실습 21
    $(".test_21 button").click(function(){
        $(".test_21 img").attr("src", "./img/kakao_img2.jpg");
    });


    //실습 22
    $(".test_22 .btn_frame .left_add").click(function(){
        $(".test_22 .img_frame").prepend("<img src='./img/wall_img1.jpg'>");
    });
    $(".test_22 .btn_frame .right_add").click(function(){
        $(".test_22 .img_frame").append("<img src='./img/wall_img3.jpg'>");
    });


    //실습 23
    $(".test_23 .btn_frame .before_add").click(function(){
        $(".test_23 .img_frame #kakao").before("<img src='./img/wall_img4.jpg'>");
    });
    $(".test_23 .btn_frame .after_add").click(function(){
        $(".test_23 .img_frame #kakao").after("<img src='./img/wall_img6.jpg'>");
    });


    //실습 24
    $(".test_24 .btn_frame .effect_add").click(function(){
        $(".test_24 .img_frame #band").addClass("effect");
    });
    $(".test_24 .btn_frame .effect_remove").click(function(){
        $(".test_24 .img_frame #band").removeClass("effect");
    });


    //실습 25
    $(".test_25 .btn_frame button").click(function(){
        var $eff = $(".test_25 .img_frame #refresh").hasClass("effect");
        console.log($eff);
        if($eff == false){
            $(".test_25 .img_frame #refresh").addClass("effect")
        }else{
            $(".test_25 .img_frame #refresh").removeClass("effect")
        }
        
    });






});