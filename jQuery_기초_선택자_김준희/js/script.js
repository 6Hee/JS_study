$(document).ready(function(){


    //실습1
    $(".txt3").css({
        "color":"red",
        "font-weight":"bold"
    });


    //실습2
    $("#select").css({
        "font-size":"28px",
        "background":"#ffff00",
    });


    //실습3
    $(".test_03 p:even").css("color", "#00dd00");


    //실습4
    $(".test_04 p").eq(1).css("background", "#aaffff");
    $(".test_04 p").eq(3).css("background", "#aaffff");

    //실습5
    $(".test_05 p").eq(3).prevAll().css("color", "#0000ff");
    $(".test_05 p").eq(3).nextAll().css("color", "#0000ff");

    //실습6
    $(".test_06 li").eq(2).parent().css("background", "#ffff77");
    
    //실습7
    $(".port").closest(".main_menu").next().css("background", "#aaffff");
    $(".port").closest(".main_menu").next().find("span").css("color", "#ff0000");


    //실습8
    $(".test_08 :text").css("background", "#ffffaa");



















})
