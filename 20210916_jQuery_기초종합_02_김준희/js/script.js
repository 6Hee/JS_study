$(document).ready(function(){


    //실습 1
    $("#ex_01_title").click(function(){
        $("#ex_01 p").odd().css("background", "#ffaaff");
    });



    //실습 2
    /*
    $("#ex_02").click(function(){

        $("#ex_02_tit").text("전체해제");

        $("p input[id *= item]").attr("checked", "checked");

        if($("#ex_02").is(":checked") == false){


            $("#ex_02_tit").text("전체선택");
            $("p input[id *= item]").attr("checked", false);
        }
    });
    */
    $("#ex_02").click(function(){
        var $chk_state = $(this).is(":checked");
        console.log($chk_state);
        //true : 체크된 상태 //false : 체크가 풀린 상태
        if($chk_state == true){
            //$("input[name*='item_0']").attr("checked", "checked");
            //$("input[name*='item_0']").attr("checked", true);
            $("input[name*='item_0']").prop("checked", true);
            $("#ex_02_tit").text("전체해제");
        }else{
            $("input[name*='item_0']").prop("checked", false);
            $("#ex_02_tit").text("전체선택");
        }
    });


    //실습 3
    /*
    $(".ch_03_frame .ch_03_img").each(function(index){
        console.log(index);

        $(".ch_03_frame .ch_03_img:eq("+index+") span").click(function(){


            $(".ch_03_frame .ch_03_img:eq("+index+")").css("opacity", "0");
        });
    });
    */

    $(".ch_03_frame span").click(function(){
        $(this).closest(".ch_03_img").fadeOut();
    });




    //실습 4//////////////////////////
    /*
    $("#ex_04 .go").click(function(){

        $("#ex_04 .ch_04_01 img").stop().animate({
            "margin-left":"0"
        }, 1500)
    })
    $("#ex_04 .back").click(function(){

        $("#ex_04 .ch_04_01 img").stop().animate({
            "margin-left":"400px"
        }, 1500)
    })
    */
   var $cur_location = 0;
   $("#ex_04 .go").click(function(){
    /*$(".ch_04_01 img").stop().animate({
        "left":($cur_location -= 100) + "px"
    }, 1500);*/
    $(".ch_04_01 img").stop().animate({
        "left":"-=100px"
    }, 1500);
    //[CSS 상에서] 1회 클릭시 left: -100px //2회 클릭시 left: -200px // left -= 100
   });
   $("#ex_04 .back").click(function(){
    /*$(".ch_04_01 img").stop().animate({
        "left":($cur_location += 100) + "px"
    }, 1500);*/
    $(".ch_04_01 img").stop().animate({
        "left":"+=100px"
    }, 1500);
   });




    //실습 5//////////////////////////
    /*
    var a = 0;
    var b = 2;
    $("#ex_05 .tab_btn > div").click(function(){
        var $index = $(this).index();
        console.log($index);

        $("#ex_05 .tab_btn > div").removeClass("activeBtn");
        $(this).addClass("activeBtn");


        $("#ex_05 .tab_box > div").removeClass("activeBox");
        $("#ex_05 .tab_box .tab_0"+($index+1)+"").addClass("activeBox");


        $("#ex_05 .tab_box .tab_0"+($index+1)+"").hide();
        $("#ex_05 .tab_box .activeBox").fadeIn();
    });

    $("#ex_05 .tab_btn #tab_02").click(function(){
        $("#ex_05 .tab_btn .bg-bk").css({
            "left":"unset",
            "right":"0"
        });
    });

    $("#ex_05 .tab_btn #tab_01").click(function(){
        $("#ex_05 .tab_btn .bg-bk").css({
            "left":"0",
            "right":"unset"
        });
    });
    */
   $("#ex_05 .tab_btn div").click(function(){
    var $indexBtn = $(this).index(); //0 | 1

    $("#ex_05 .tab_btn div").removeClass("activeBtn");
    $(this).addClass("activeBtn");

    $(".bg-bk").stop().animate({
        "left": (50 * $indexBtn) + "%"
    }, 500);
   });


    
    //실습 6////////////////////
    $("#ex_06 .title").each(function(i){
        console.log(i);

        $("#ex_06 .title .less").hide();
        $("#ex_06 .title p").hide();

        $("#ex_06 .tit_0"+(i+1)+" .more").click(function(){
            console.log($(this));

            $(this).hide();

            $("#ex_06 .tit_0"+(i+1)+" .less").show();
            $("#ex_06 .tit_0"+(i+1)+" p").slideDown();
        });
        $("#ex_06 .tit_0"+(i+1)+" .less").click(function(){

            $(this).hide();

            $("#ex_06 .tit_0"+(i+1)+" .more").show();
            $("#ex_06 .tit_0"+(i+1)+" p").slideUp();
        });
    });



    //실습 7/////////////////////
    $("#ex_07 .q_box").each(function(i){
        $("#ex_07 .q_box p").hide();

        $("#ex_07 .q_box").eq(i).find("h5").click(function(){
            console.log($(this));

            $("#ex_07 .q_box p").hide();
            $("#ex_07 .q_box").eq(i).find("p").slideDown();
        });
    });



    //실습 8////////////////////////
    $("#ex_08 .per_bar_frame").each(function(j){
        var $per = $(this).attr("data-percent");
        console.log($per);
        console.log(j);

        $("#ex_08 .per_bar_frame .d_0"+(j+1)+"").animate({
            "width": $per
        }, 2000);
        $("#ex_08 .per_bar_frame:eq("+j+") .cur_per").text($per);
        
    });



    //실습 9///////////////////////////
    $("#ex_09 .login-box").hide();

    $("#ex_09 .login_btn a").click(function(){

        $("#ex_09 .login-box").show();
        $("#ex_09 .dark-bg").addClass("active_bg").css("z-index","0");
    });

    $("#ex_09 .cls_btn, .dark-bg").click(function(){

        $("#ex_09 .login-box").hide();
        $("#ex_09 .dark-bg").removeClass("active_bg").css("z-index","-2");
    });



    //실습 10/////////////////////////////
    $("#ex_10 .login-box, .register-box").hide();

    //로그인 버튼 클릭시
    $("#ex_10 .login_btn .op_btn").click(function(){
        $("#ex_10 .login-box").show();
        $("#ex_10 .dark-bg").addClass("active_bg").css("z-index","0");
    });
    //회원가입 버튼 클릭시
    $("#ex_10 .login_btn .rg_btn").click(function(){
        $("#ex_10 .register-box").show();
        $("#ex_10 .dark-bg").addClass("active_bg").css("z-index","0");
    });

    //x 버튼 또는 암막 클릭시 로그인,회원가입 창 닫기
    $("#ex_10 .cls_btn, .dark-bg").click(function(){
        $("#ex_10 .login-box").hide();
        $("#ex_10 .register-box").hide();
        $("#ex_10 .dark-bg").removeClass("active_bg").css("z-index","-2");
    });

    //회원 계정이 없으신가요? -> 회원가입창
    $("#ex_10 .login-box h6").click(function(){
        $("#ex_10 .login-box").hide();
        $("#ex_10 .register-box").show();
    });

    //이미 회원이신가요? -> 로그인창
    $("#ex_10 .register-box h6").click(function(){
        $("#ex_10 .login-box").show();
        $("#ex_10 .register-box").hide();
    });





    //실습 11////////////////////////
    $("#ex_11 .cont-box, .cont-bg, .cont-img, .cont-text").hide();

    $("#ex_11 .img_op .img_op_btn").click(function(){
        $("#ex_11 .cont-box").show(500, function(){
            $("#ex_11 .cont-bg").show(500, function(){
                $("#ex_11 .cont-img").show(500,function(){
                    $("#ex_11 .cont-text").show(500);
                });
            });
        });
    });
    

    

});