$(document).ready(function(){


    //실습 1-1번
    var exSpan = $("#ex_01 span");
    console.log(exSpan);
    var plus = 1;
    setInterval(function(){
        plus++;
        exSpan.text(plus);
        if(plus == 100){
            plus = 1;
        }
    }, 200);



    //실습 1-2번
    var plus2 = 1;
    var clearSetInterval = setInterval(function(){
        plus2++;
        $("#ex_02 span").text(plus2);
        if(plus2 == 100){
            $("#ex_02 span").text("100까지 종료되었습니다.");
            clearInterval(clearSetInterval);
        }
    }, 50);
    


    //실습 2번
    $("#rv_02").hover(function(){

        $("#rv_02 img").attr({

            "src":"./img/image_2.jpg",
            "alt":"두번째 이미지"
        });

    }, function(){

        $("#rv_02 img").attr({

            "src" : "./img/image_1.jpg",
            "alt" : "첫번째 이미지"
        });

    })



    //실습 3번
    var arr = [
        ["image_2.jpg", "이미지-02"],
        ["image_3.jpg", "이미지-03"],
    ];

    var imgBox = `<img src="" alt="">`
    
    $("#rv_03 p button").each(function(i){
        
        $("#rv_03 .add_0"+(i+2)+"").click(function(){

            $("#rv_03").append(imgBox).find("img:eq("+(i+1)+")").attr({
    
                "src":"./img/"+arr[i][0]+"",
                "alt":""+arr[i][1]+""
            });
        });
    });




    //실습 4번
    let num = 1;
    $("#rv_04 button").click(function(){
        num++;
        $("#rv_04").append("<img src='./img/image_"+num+".jpg'>")
        if(num > 9){
            $(this).prop("disabled", true);
        }
    });
    
        






    //실습 5번
    let num2 = 1;
    $("#rv_05 button").click(function(){
        num2++;
        $("#rv_05 img").attr({
            "src":"./img/image_"+num2+".jpg",
            "alt":"이미지-0"+num2+""
        });
        if(num2 > 9){
            num2 = 0;
        };
    });







    //실습 6번
    var num3 = 1;
    console.log(imgBox);
    $("#rv_06 .next_btn").click(function(){
        num3++;
        $("#rv_06 img").attr({
            "src":"./img/image_"+num3+".jpg",
            "alt":"이미지-0"+num3+""
        })
        if(num3 > 9){
            num3 = 0;
        }
    });
    $("#rv_06 .prev_btn").click(function(){
        num3--;
        if(num3 < 1){
            num3 = 10;
        }
        $("#rv_06 img").attr({
            "src":"./img/image_"+num3+".jpg"
        })
    });










});