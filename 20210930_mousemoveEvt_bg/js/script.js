$(document).ready(function(){



    $("#ex_01").mousemove(function(evt){
        var $cur_x = evt.pageX;
        console.log($cur_x);

        $("#ex_01 .cover .verticalLine").css("left", $cur_x);
        $("#ex_01 .cover").css("width", $cur_x);
    })


    $("#ex_02").mousemove(function(evt){
        var cur_x = evt.pageX;
        var cur_y = evt.pageY;

        var bgMoveX = cur_x * -1/5;
        var bgMoveY = cur_y * -1/25;

        $(".bglayer").css("transform", "translate("+bgMoveX+"px, "+bgMoveY+"px)");


        var frontMoveX = cur_x * 1/4;
        var frontMoveY = cur_y * -1/20;

        $(".frontlayer").css("transform", "translate("+frontMoveX+"px, "+frontMoveY+"px)");
    });

});