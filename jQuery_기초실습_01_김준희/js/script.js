$(document).ready(function(){

    //실습 1
    $("#txt_ch").css({
        "color":"red",
        "font-size":"20px",
    });


    //실습 2
    var $two = $("#txt_02").text();
    console.log($two);
    $("#txt_sel").find("span").text($two);


    //실습 3
    var $thr = `<p id="vo_05">파리</p>`
    $("#ex_03").append($thr);
    $("#ex_03").find("#vo_05").css("color", "red");


    //실습 4
    $("#ex_04").attr("src", "./img/slide1.jpg");


    //실습 5
    var $five = ["image_02.jpg"]
    $("#ex_05").attr("src", "./img/"+$five[0]+"")


    //실습 6
    $("#ex_06").attr("src", "./img/image_02.jpg").animate({
        "margin-left":"200px"
    }, 2000);


    //실습 7
    $("#ex_07 p:eq(2)").addClass("active");


    //실습 8
    var $eight = $("#ex_08 p").last();
    console.log($eight);
    $eight.remove();


    //실습 9
    var $nine = $("#ex_09 p").last();
    console.log($nine);
    $("#ex_09 p:eq(0)").before($nine);


    //실습 10
    var $ten = $("#ex_10").find("input:eq(2)").val("대전");
    console.log($ten.val());


    //실습 11
    $("#ex_11 > li").hover(function(){
        $(this).find("a").addClass("active");
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(this).find("a").removeClass("active");
        $(this).find(".sub").stop().slideUp();
    });


    //실습 12
    var $twv = $("#ex_12 .slider li");
    console.log($twv.length);
    

    var $btn = $("#ex_12 .slide_num li").click(function(){
        var $btn = $(this).index();
        console.log($btn)
        $("#ex_12 .slider li").removeClass("act_img");
        $("#ex_12 .slider li:eq("+$btn+")").addClass("act_img");

        $("#ex_12 .slide_num li").removeClass("act_btn");
        $(this).addClass("act_btn");

    });


    




























});