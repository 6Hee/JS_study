$(document).ready(function(){
    

    var elm = ".box";
    $(elm).each(function(index){
        //개별 섹션마다 마우스 휠 이벤트를 적용시키기 위함
        $(this).on("mousewheel DOMMouseScroll", function(e){
            e.preventDefault();
            console.log(e.originalEvent.wheelDelta);
            console.log(event.wheelDelta);
            console.log(e);
            console.log(e.originalEvent.detail);

            var delta = 0; //마우스 휠을 돌리지 않은 상태를 초기값으로 설정

            if(event.wheelDelta){
                //크롬, 엣지, 사파리, 오페라
                delta = event.wheelDelta / 120;
                //휠을 내렸을 때 : -120
                //휠을 올렸을 때 : 120

                if(window.opera){
                    delta = -delta;
                }


            }else if(e.detail){
                //파이어폭스
                //휠을 내렸을 때 : 3
                //휠을 올렸을 때 : -3
                delta = -e.detail / 3;
                
            }
            //delta 값이 음수일 때는 마우스 휠을 내린 상태 => 현재 브라우저 화면에 존재하는 섹션을 기준으로 우측 화면이 나와야한다.
            //delta 값이 양수일 때는 마우스 휠을 올린 상태 => 현재 브라우저 화면에 존재하는 섹션을 기준으로 좌측 화면이 나와야 한다.
            console.log(delta);

            var moveTo = $(window).scrollLeft(); //각 섹션별로 브라우저로부터 좌측으로부터 이격된 x축 값을 파악하여 저장
            var elmIndex = $(elm).eq(index); //이벤트가 발생한 곳의 객체를 저장

            if(delta < 0){
                try{
                    //우측의 섹션이 존재한다면
                    if($(elmIndex).next() != undefined){
                        moveTo = $(elmIndex).next().offset().left;
                        console.log(moveTo);


                        $(elm).removeClass("active");
                        $(elmIndex).next().addClass("active");

                        var $cur_index = $(".box.active").index();
                        console.log($cur_index);

                        $("header li").removeClass("active");
                        $("header li").eq($cur_index).addClass("active");
                    }
                }catch(e){

                }
            }else{
                try{
                    //좌측의 섹션이 존재한다면
                    if($(elmIndex).prev() != undefined){
                        moveTo = $(elmIndex).prev().offset().left;
                        console.log(moveTo);

                        $(elm).removeClass("active");
                        $(elmIndex).prev().addClass("active");

                        var $cur_index = $(".box.active").index();
                        console.log($cur_index);

                        $("header li").removeClass("active");
                        $("header li").eq($cur_index).addClass("active");
                    }
                }catch(e){

                }
            }
            $("html, body").stop().animate({
                scrollLeft : moveTo + "px"
            }, 500);

        }); //마우스 휠 이벤트 종료



    }); //each문 종료


    //상단 메뉴 클릭시 해당하는 페이지로 이동
    $("header li").click(function(){

        var $index = $(this).index();


        $("header li").removeClass("active");
        $(this).addClass("active");

        $(elm).removeClass("active");
        $(elm).eq($index).addClass("active");

        $("html, body").stop().animate({
            scrollLeft : $(elm).eq($index).offset().left
        }, 1000);

        return false;
    });


    //키보드 이벤트를 통한 제어
    //우방향 : 39 / pageDown : 34
    //좌방향 : 37 / pageUp : 33
    //Home : 36 / End : 35

    var key_num = 0;
    $(document).on("keydown", function(evt){

        key_num = evt.keyCode;

        var $target = $($(elm + ".active")).index();
        console.log($target);


        if(key_num == 39 || key_num == 34){ //우방향

            try{

                if($target == $(elm).length - 1){

                }else{
                    $("html, body").stop().animate({
                        scrollLeft : $(elm).eq($target + 1).offset().left
                    }, 500);
                    $(elm).removeClass("active");
                    $(elm).eq($target + 1).addClass("active");
                    $("header li").removeClass("active");
                    $("header li").eq($target + 1).addClass("active");
                }


            }catch(evt){}

        }else if(key_num == 37 || key_num == 33){ //좌방향

            try{

                if($target == 0){

                }else{
                    $("html, body").stop().animate({
                        scrollLeft : $(elm).eq($target - 1).offset().left
                    }, 500);
                    $(elm).removeClass("active");
                    $(elm).eq($target - 1).addClass("active");
                    $("header li").removeClass("active");
                    $("header li").eq($target - 1).addClass("active");
                }


            }catch(evt){}

        }else if(key_num == 36){ //Home button
            try{
                $("html, body").stop().animate({
                    scrollLeft : $(elm).first().offset().left
                }, 500);
                $(elm).removeClass("active");
                $(elm).first().addClass("active");
                $("header li").removeClass("active");
                $("header li").first().addClass("active");
            }catch(evt){}
        }else if(key_num == 35){ //End button
            try{
                $("html, body").stop().animate({
                    scrollLeft : $(elm).last().offset().left
                }, 500);
                $(elm).removeClass("active");
                $(elm).last().addClass("active");
                $("header li").removeClass("active");
                $("header li").last().addClass("active");
            }catch(evt){}
        }


    }); //키보드 이벤트 끝


    //각 섹션의 위치

    var $sec_0 = $(elm).eq(0).offset().left;
    var $sec_1 = $(elm).eq(1).offset().left;
    var $sec_2 = $(elm).eq(2).offset().left;
    var $sec_3 = $(elm).eq(3).offset().left;
    var $sec_4 = $(elm).eq(4).offset().left;
    var $sec_5 = $(elm).eq(5).offset().left;
    var $sec_6 = $(elm).eq(6).offset().left;


    var arrLeft = [];
    for(i = 0; i < $(elm).length; i++){
        
        arrLeft.push($(elm).eq(i).offset().left);
    }


    //마우스 다운, 업 (좌우 슬라이드)

    var $m_down;
    var $m_up;
    var $m_move;

    function next(){

        var $target = $(elm + ".active").index();
        if($target != $(elm).length - 1){
            $("html, body").stop().animate({
                scrollLeft : arrLeft[$target + 1]
            }, 500, function(){
                $(elm).removeClass("active");
                $(elm).eq($target + 1).addClass("active");
                $("header li").removeClass("active");
                $("header li").eq($target + 1).addClass("active");
            });
        }

    }
    function prev(){

        var $target = $(elm + ".active").index();
        if($target != 0){
            $("html, body").stop().animate({
                scrollLeft : arrLeft[$target - 1]
            }, 500, function(){
                $(elm).removeClass("active");
                $(elm).eq($target - 1).addClass("active");
                $("header li").removeClass("active");
                $("header li").eq($target - 1).addClass("active");
            });
        }

    }


    function mouseMove(evt){
        $m_move = $m_down - $m_up;
        
        if($m_move > 20){
            next();
        }else if($m_move < -20){
            prev();
        }
    }


    $(elm).on("mousedown", function(e){
        console.log(e);
        $m_down = e.pageX;
    });
    $(elm).on("mouseup", function(e){
        console.log(e);
        $m_up = e.pageX;

        mouseMove();
    });


});