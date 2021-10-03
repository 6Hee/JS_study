$(document).ready(function(){

    $("#header_part").load("./header.html", function(){
        //console.log("콜백 함수 작동");
        var $hash = location.hash;
        console.log($hash);
        var $numHash = Number($hash.replace("#", ""));
        console.log($numHash);
        $("header nav li").removeClass("active");
        $("header nav li").eq($numHash).addClass("active");
        
    });

    $("#footer_part").load("./footer.html", function(){

        /*
        function resizeEvt(){
            var w_height = $(window).height();
            if(w_height < 830){
                $(".sampleBox").css("min-height", "240px");
                $("#footer_part").removeClass("sticky");
            }else{
                $("#footer_part").addClass("sticky");
            }
        }
        resizeEvt();


        $(window).resize(function(){
            console.log("리사이즈 이벤트");
            resizeEvt();
            
        });
        */


    });



});