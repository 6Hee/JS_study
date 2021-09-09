$(document).ready(function(){


      //실습1
      $(".test_01 .txt3")
      .css({
          "color":"red", 
          "font-weight":"bold"
      });
  
      //실습2
      $(".test_02 #select").css({"font-size":"28px", "background":"#ffff00"});
  
  
      //실습3
      $(".test_03 .sience_01, .test_03 .sience_03").css("color", "#00dd00");
  
      //실습4
      $(".test_04 p:eq(1), .test_04 p:eq(3)").css("background", "#aaffff");
  
      //실습5
      $(".test_05 .walk").eq(3).siblings("p").css("color", "#0000ff");
  
  
      //실습6
      console.log($(".test_06 .menu li:eq(2) a").closest(".menu"));
      $(".test_06 .menu li:eq(2) a").closest(".menu").css("background", "#ffff77");
  
  
      //실습7
      $(".test_07 .port").closest(".main_menu").next().css("background", "#aaffff")
      
      .find("span").css("color", "#ff0000");
  
      //실습8
      $(".test_08 :text").css("background", "#ffffaa");
  























});