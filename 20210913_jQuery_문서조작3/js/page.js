$(document).ready(function(){


    $(".pager li").click(function(){
        var $index = $(this).index();
        console.log($index);
        //클릭한 li만 active라는 클래스를 부여한다.
        $(".pager li").removeClass("active");
        $(this).addClass("active");


        //클릭한 li와 연관된 페이지로 이동을 시킨다.
        $("html, body").stop().animate({
            scrollTop : $("#section_part section:eq("+$index+")").offset().top
        }, 1000, function(){
            console.log("콜백 확인");
            /*scrollSection : $(this).find("section:eq("+$index+")").addClass("active")*/
            $("#section_part section").removeClass("active");
            $("#section_part section").eq($index).addClass("active");
        });





    });


    


















});