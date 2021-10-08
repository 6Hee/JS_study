$(document).ready(function(){

    /*
    $("nav li:eq(0)").click(function(){

    
        $.ajax({
            url : "./coverstory.html",
            success : function(result){
                //console.log(result);
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    $("nav li:eq(1)").click(function(){

    
        $.ajax({
            url : "./character.html",
            success : function(result){
                //console.log(result);
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    $("nav li:eq(2)").click(function(){

    
        $.ajax({
            url : "./snapshots.html",
            success : function(result){
                //console.log(result);
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    $("nav li:eq(3)").click(function(){

    
        $.ajax({
            url : "./epilogue.html",
            success : function(result){
                //console.log(result);
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });
    */


    //클릭한 곳의 인덱스 번호를 추적하여 해당하는 배열 데이터의 페이지 문서 이름을 통해 화면에 노출
    var $url = ["coverstory.html", "character.html", "snapshots.html", "epilogue.html"];
    var $clickIndex;

    //브라우저가 로드되면 coverstory.html을 content라는 공간에 넣겠다.
    $.ajax({
        url : "./"+$url[0],
        success : function(result){
            $("#content").html(result);
        }
    });
    $("nav li").not(":last").click(function(){
        $clickIndex = $(this).index();
        console.log($clickIndex);
        $.ajax({
            url : "./"+$url[$clickIndex],
            success : function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

});