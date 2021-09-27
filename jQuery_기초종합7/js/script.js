$(document).ready(function(){


    //실습 1
    $("#ex_01 .input_box").focus(function(){
        console.log("포커스 이벤트 발생");
        $(this).siblings().text("FOCUS");
    });
    $("#ex_01 .input_box").blur(function(){
        console.log("블러 이벤트 발생");
        $(this).siblings().text("BLUR");
    });




    //실습 2
    $("#ex_02 .submit_form").submit(function(){
        console.log("전송(submit) 이벤트 발생");
        var $val = $("#ex_02 .input_box").val(); //사용자가 입력 박스에 실제로 입력한 값을 저장
        console.log($val);
        //조건식을 구성 : 입력한 내용 한글자라도 없다면(스페이스 바로 실제 유효한 텍스트가 존재하지 않은 상태도 포함) .input_text라는 영역에 텍스트로 "입력값이 필요합니다."라고 넣고 display:block을 선언해주세요. (추가 페이지 이동 없음)
        if($val.trim() == ""){
            $("#ex_02 .input_text").text("입력값이 필요합니다.").show();
            return false; //현재 페이지에서 이동하지 못하도록 구성
        }else{
            //입력값이 존재하여 form 태그 내부의 action에 지정된 서버 프로그램으로 전송을 시킴
        }
    });



    //실습 3
    $("#ex_03 .submit_form").submit(function(){
        var $id = $("#ex_03 .input_box_01").val();
        var $pw = $("#ex_03 .input_box_02").val();

        if($id.trim() != ""){//아이디값이 존재할 때
            console.log("아이디값은 있어요");
            if($pw.trim() != ""){//패스워드 값이 존재할 때
                //서버 프로그램으로 전송 진행
                console.log("패스워드 값도 있어요");
            }else{//패스워드 값이 존재하지 않을 때
                console.log("패스워드 값이 없어요");
                $("#ex_03 .input_text_01").html("").hide();
                $("#ex_03 .input_text_02").html("<b>패스워드</b>를 입력하세요.").show();
                return false;
            }


            
        }else{//아이디값이 존재하지 않을 때
            console.log("아이디값은 없어요");
            $("#ex_03 .input_text_01").html("<b>아이디</b>를 입력하세요.").show();
            return false;
        }

    });




    //실습4. 가상의 회원 아이디와 패스워드가 일치하는 경우
    var $memeber_one = {
        id : "kjh8213",
        pw : 112233
    };

    $("#ex_04 .login").click(function(){
        var $id = $("#loginusername").val();
        var $pw = $("#loginpassword").val();
        if($id == $memeber_one.id && $pw == $memeber_one.pw){
            $("#first").hide();
            $("#second").append("<p class='result_txt'>"+$id+"님의 방문을 환영합니다.</p><br><input type='button' class='logout' value='로그아웃'>");
        }else{
            alert("입력항목을 정확하게 작성해주세요.");
        }
    });



    //실습5
    //change 이벤트 발생시점 : 체크박스에서 변화가 발생하면 그 때 이벤트가 작동됨. 체크의 유무가 먼저 선행 -> change 이벤트가 나중에 진행
    //click이벤트는 클릭했을 때 동시진행

    /*
    $("#ex_05 .img-chk-01").change(function(){
        console.log("체인지 이벤트 발생");
        var $chk = $(this).is(":checked");
        console.log($chk); //true : 이미 체크박스에 체크로 변화된 상태


        if($chk == true){
            $(".img-box-01").css("display", "inline-block");
        }else{
            $(".img-box-01").hide();
        }
    });

    $("#ex_05 .img-chk-02").change(function(){
        console.log("체인지 이벤트 발생");
        var $chk = $(this).is(":checked");
        console.log($chk); //true : 이미 체크박스에 체크로 변화된 상태


        if($chk == true){
            $(".img-box-02").css("display", "inline-block");
        }else{
            $(".img-box-02").hide();
        }
    });
    */


    $("#ex_05 .img-chk ul li").change(function(){
        console.log("체인지 이벤트 발생~~!!");
        $("#ex_05 .img-chk ul li").each(function(index){
            var $chk_ok = $(this).find("input").is(":checked");
            //순차적 접근 과정에서 체크의 유무를 따진다.
            console.log($chk_ok);
            if($chk_ok == true){
                $("#ex_05 .img-group > div").eq(index).css("display", "inline-block");
            }else{
                $("#ex_05 .img-group > div").eq(index).hide();
            }
        });
    });



    //실습6
    $("#ex_06 p button").click(function(){

        $("#ex_06 .img-chk ul li").each(function(i){

            var $check = $(this).find("input").is(":checked");
            console.log($check);
            

            if($check == true){
                $("#ex_06 .img-group > div").eq(i).css("display", "inline-block");
            }else{
                $("#ex_06 .img-group > div").eq(i).hide();
            };
        });

    });
    


    //실습7
    $("#ex_07 p button").click(function(){

        $("#ex_07 .img-chk ul li").each(function(i){

            var $check = $(this).find("input").is(":checked");
            console.log($check);
            

            if($check == true){
                $("#ex_07 .img-group > div").eq(i).css("display", "inline-block");
            }else{
                $("#ex_07 .img-group > div").eq(i).hide();
            };
        });

    });

    $("#ex_07 .reset").click(function(){
        $("#ex_07 .img_group > div").hide();
        $("#ex_07 .img_chk input").prop("checked", false);
    });
 


    //실습8. 클릭 이벤트 + val() 메서드를 활용하여 각 선택 영역에서 value 값을 추출

    var $sel_01 = ""; //여행 지역을 선택한 value값을 저장
    var $sel_02 = ""; //여행 타입을 선택한 value값을 저장
    var $txt_01 = ""; //여행 지역을 선택한 텍스트 문구를 저장
    var $txt_02 = ""; //여행 타입을 선택한 텍스트 문구를 저장

    $("#ex_08 .sel_btn").click(function(){


        $(".category_01 input:checked").each(function(){


            console.log("순차적 반복"); //1회만 접근
            $sel_01 = $(this).val();
            console.log($sel_01); //유럽(eu)|아시아(as)|국내(lo)중 체크된 영역만을 선택하여 value값을 추출
            $txt_01 = $(this).next().text();
            console.log($txt_01);
        });


        $(".category_02 input:checked").each(function(){
            $sel_02 = $(this).val();
            console.log($sel_02); //가족여행(fa)|신혼여행(ho)|자유여행(fr) 중 체크된 영역만을 선택하여 value값을 추출
            $txt_02 = $(this).next().text();
            console.log($txt_02);
        });

        
        //or 검색(넓은 범위 검색 - 결과 타겟을 넓게 도출시)
        /*
        $("#ex_08 .img-box > div").hide();
        $("#ex_08 .img-box > div[data-region*='"+$sel_01+"']").show();
        $("#ex_08 .img-box > div[data-type*='"+$sel_02+"']").show();
        */
        $("#ex_08 .img-box > div").hide();
        $("#ex_08 .img-box > div[data-region*='"+$sel_01+"'][data-type*='"+$sel_02+"']").show();

        $(".img-txt").stop().slideDown(500, function(){
            setTimeout(function(){
                $(".img-txt").slideUp();
            }, 4500)
        }).html("고객님이 선택한 여행지는 <b>"+$txt_01+"</b>이며, 여행타입은 <b>"+$txt_02+"</b>입니다.");


    });

    //실습 8 종료



    //#1. 클릭한 버튼의 속성 중 data-filter의 값을 받아온다
    $("#test_01 .wrap ul li").click(function(){
        var $btnVal = $(this).attr('data-filter');
        console.log($btnVal);


        //#2. .products 하위의 div.item을 모두 숨긴다.
        $("#test_01 .wrap .products .item").hide();



        //#3. .products 하위의 div에서 data-item의 속성값이 data-filter의 값과 일치하는 것만 보여준다. (단, all이라는 값이 data-filter의 값이라면 모두 보여준다. 조건식 추가)
        $("#test_01 .wrap .products .item[data-item*='"+$btnVal+"']").fadeIn();

        if($btnVal == 'all'){
            $("#test_01 .wrap .products .item").fadeIn();
        }



        //#4. 상단의 버튼 모든 영역에서 active를 제거한 후, 클릭한 버튼에만 active 라는 클래스를 부여한다.

        $("#test_01 ul li").removeClass("active");
        $(this).addClass("active");

    });
    
    



});