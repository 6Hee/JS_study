$(document).ready(function(){
    


    var $pd_img = ["product1.jpg", "product2.jpg"];
    $(".thumb_img ul li").each(function(index){

        $(this).css("background-image", "url(./img/"+$pd_img[index]+")");
    });



    $(".thumb_img ul li").click(function(){

        var $index = $(this).index();

        $(".pd_img img").attr("src", "./img/"+$pd_img[$index]);
        $(".thumb_img ul li").removeClass("active");
        $(this).addClass("active");
    });


    //우측 상품 가격 및 수량 제어 구성
    var $price = $(".origin_price span").text();
    console.log("개당 단가가격 : " + $price)
    console.log("개당 단가가격의 데이터 타입 : " + typeof $price)

    var $num_price = Number($price.replace(/,/g, ""));
    console.log($num_price);

    var $num = $(".control_num input").val();
    console.log($num);


    var $num = Number($(".control_num input").val());
    console.log($num);
    var $total_price = 0; //초기 총 상품금액에 대한 숫자형 데이터를 넣을 공간
    var $total_price_result = "";


    function calc_price(){
        $(".control_num input").val($num);
            $total_price = $num_price * $num
            console.log($total_price);

            $total_price_result = $total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            $(".total_price span").text($total_price_result);

            //.mycart 구성

            //#1. 이미지 넣기
            //#1_1. 화면 섬네일 이미지에 의해 변경된 메인 이미지를 가져온다
            var $detail_img = $(".pd_img img").attr("src");
            console.log($detail_img);

            $(".cart_img img").attr("src", $detail_img);
            
            //#1_2. 배열 데이터로부터 0번 인덱스 이미지를 가져온다
            $(".cart_img img").attr("src", "./img/"+$pd_img[0]);

            //#2. 타이틀 가져오기
            var $detail_title = $(".main .title").text();
            $(".cart_info h4").text($detail_title);

            //#3. 총 상품 금액 가져오기
            $(".cart_info p span").text($total_price_result);

            //#4. 추가된 옵션 내용 가져오기
            var $sel_opt_text = $("#opt option:selected").text();
            console.log($sel_opt_text);

            $(".bottom_list p span").text($sel_opt_text);
            
            var $sel_opt_val = $("#opt option:selected").attr("value");
            if($sel_opt_val == "0"){
                $(".bottom_list").hide();
            }else{
                $(".bottom_list").show();
            }
           

    }
    

    //수량박스에서 "－" 버튼 클릭시
    $(".control_num a:first").click(function(){
        if($num < 2){
            //최소 수량인 1이니깐 수량을 감소시키지 않음
            $(".dark").addClass("active");
            $(".limit_pop").addClass("active");
        }else{
            $num--;
            calc_price();
        }
       

        return false;
    });

    //수량박스에서 "＋" 버튼 클릭시
    $(".control_num a:last").click(function(){
        $num++;
        $(".control_num input").val($num);
        
        calc_price();

        return false;
    });


    $("#opt").change(function(){
        $opt_val = $(this).val();
        console.log($opt_val);
    });


    //장바구니라는 버튼 클릭시, .mycart와 암막을 보여준다. + 상품 정보를 모두 가져와서 .mycart 내부에 넣어준다.
    $(".detail_btn li:last").click(function(){
        $(".dark").addClass("active");
        $(".mycart").addClass("active");

        calc_price();

        return false;
    });

    $(".dark, .limit_pop span, .cart_close, .cart_btn li:last").click(function(){
        $(".dark").removeClass("active");
        $(".limit_pop").removeClass("active");
        $(".mycart").removeClass("active");
    });




    //정규식 표현 /\B(?=(\d{3}+(?!\d))/g
    //#1. / ~ / : " ~ "(큰 따옴표)처럼 정규식의 시작과 종료를 표현
    //#2. \B : 공백처리(Blank)
    //#3. ?= : 내부 정규식 실행문을 조합하여 결론을 도출
    //#4. \d : (demension : 숫자 또는 수치) 0 ~ 9 까지의 숫자 데이터만을 지정
    //#5. \d{3} : 좌측으로부터 세자리마다 패턴 구성
    //#6. ?!\d : 숫자 데이터만을 지정 . (!) : 숫자를 세는 과정에서 역순으로 세겠다는 의미. (부정형 전방 탐색 - 역방향으로 셈)

    //(실수의 우측으로부터 첫번째 자리가 숫자 총 10개라면)
    //1000000000 = \d{3} => 100 000 000 0 =?!\d => 1 000 000 000 ="," => 1,000,000,000

    //#7. g : 전역(Global)으로 사용하겠다는 의미
    //최종적으로 역방향에서 세자리마다 끊어놓은 공백을 ","로 대체하라








});