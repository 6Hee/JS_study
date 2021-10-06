$(document).ready(function(){

    /*
    [구조를 코딩하는 방법]
    1. 전역 변수들의 모음
    2. 함수문
    3. 각종 이벤트(change, click, focus, ...) -> 함수문을 호출
    */

    /*
    ① ② ③ ④ ⑤ ⑥ ⑦
    [상세 페이지의 사용자 진행 순서]
    #1. 옵션1번을 선택한다. => 옵션2번을 활성화시킴
    #2. 옵션2번을 선택한다. => 세부옵션 창이 순서대로 나오도록 구성한다. (세부 옵션창의 총 금액이 보이도록 한다.)
    #3-1. 각 세부 옵션창에서 수량을 조정한다.(세부 옵션창의 총 금액이 보이도록 한다. => 총 상품 금액이 변경될 수 있도록 구성한다.)
    #3-2. 잘못 나온 세부옵션창을 제거할 수 있다.(총 상품 금액이 변경될 수 있도록 구성한다.)

    #4. 장바구니 버튼 클릭시, 세부옵션창들에 대한 내용을 보여주어야 한다.
    */

    //

    /*
    [배열 데이터 형식의 리뷰]
    배열 데이터는 여러가지 항목의 데이터를 한꺼번에 담을 수 있음(인덱스 번호로 구분)
    배열 데이터는 내부의 데이터 영역에 추가(push(새로운 데이터):마지막 인덱스에 추가, unshift(새로운 데이터):첫번째 인덱스에 추가) 및 교체($arr[2] = "홍길동")


    배열변수명.indexOf("지정된 데이터") : 검사하고자 하는 배열 데이터에 지정된 데이터가 존재하면 0이상의 양의 정수값을 반환(변수내의 데이터에 대한 인덱스번호를 반환) / 지정된 데이터가 존재하지 않다면 -1로 반환


    일반 데이터(숫자형, 문자형, 논리형)는 하나의 변수에 하나의 데이터만 담는다. 변수명 수정불가
    */
    //배열 데이터
    var $arr = [];  //지금부터 $arr의 변수에 배열 데이터를 담을 것이다.라고 선언
    $arr.push("apple");  //첫번째 실행 : 상단에 선언된 배열 데이터에 마지막 인덱스번호 자리에 추가
    console.log($arr);
    $arr.push("banana"); //두번째 실행 : 상단에 선언된 배열 데이터에 마지막 인덱스번호 자리에 추가
    console.log($arr);
    $arr.push("cherry"); //세번째 실행 : 상단에 선언된 배열 데이터에 마지막 인덱스번호 자리에 추가
    console.log($arr);
    $arr[1] = "orange";  //1번 인덱스의 데이터 변경
    console.log($arr);


    var result_01 = "";
    for(i=0; i<$arr.length; i++){
        result_01 += $arr[i];
        console.log(result_01);
    }


    var $array = ["사과", "오렌지", "바나나"];
    console.log($array.indexOf("오렌지"));  //1 : $array의 "오렌지"라는 데이터가 위치한 인덱스번호를 반환
    console.log($array.indexOf("포도"));  //-1 : $array에서 "포도"라는 데이터는 존재하지 않는다.


    //일반 데이터
    var $a_1 = "apple";
    var $a_2 = "banana";

    var result_02 = "";
    for(i=1; i<=2; i++){
        // result_02 += $a_+i;  //처음부터 존재하지 않은 변수명은 사용할 수 없다.($a_)
        // console.log(result_02);
    }






    var $detail_img = ["img_01.jpg", "img_02.jpg"];
    
    $(".det_thumb li").each(function(index){
        $(this).css("background-image", "url(./img/"+$detail_img[index]+")");
    });

    $(".det_thumb li").mouseover(function(){
        var $index = $(this).index();
        $(".det_img img").attr("src", "./img/"+$detail_img[$index]+"");
        $(".det_thumb li").removeClass("active");
    });
    
    
    var $title = $(".det_title h2").text();

    



    var $str_price = $(".det_price span").text();
    console.log($str_price);  //14,000(string)
    var $num_price = Number($str_price.replace(/,/g, ""));
    console.log($num_price);  //14000(number)

    var $total = 0;  //총 상품금액의 숫자형 데이터 값
    var $final_total = "";  //총 상품금액의 문자형 데이터 값

    var $each_price = 0;  //각 세부 박스의 최종 선택가를 합산할 변수
    var $each_opt1_txt = [];  //선택1의 텍스트 정보(배열 데이터)
    var $each_opt2_txt = [];  //선택2의 텍스트 정보(배열 데이터)
    var $each_calc_price = [];  //각 세부 옵션 박스별로 1개 단위마다 기본값(배열 데이터)
    var $amount = [];  //각 세부 옵션 박스별로 수량(배열 데이터)
    var $each_total_price = [];  //각 세부 옵션 박스별로 최종가(1개 단위마다 기본값 * 각 세부 옵션 박스별로 수량);

    //함수 구문
    function calc_price(){
        //선택이 종료되어 append 방식으로 나오게 된 세부옵션의 최종 결과값을 합산
        $total = 0;  //배열 데이터의 합산 전에 합산 시킬 준비과정이 필요(초기화 : 0)
        for(i=0; i<$each_total_price.length; i++){
            $total += $each_total_price[i];
            console.log($total);
        }
        // [26000]일때, i = 0 / $total += $each_total_price[0] => $total = $total + $each_total_price[0] = 0 + 26000 = 26000
        // [26000, 14000]일때, 
        // i = 0 / $total += $each_total_price[0] => $total = $total + $each_total_price[0] = 26000 + 26000 = 52000(문제 있음 -> 기존에 누적된 값을 제거)
        // i = 1 / $total += $each_total_price[1] => $total = $total + $each_total_price[1] = 52000 + 14000 = 66000(문제 있음)
        
        $final_total = $total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        console.log("총 상품 금액의 문자형 데이터값 : " + $final_total);

        $(".total_price_num span").text($final_total);

        if($total > 0){
            $(".det_button").show();
        }else{
            $(".det_button").hide();
        }
    }

    var $each_box = `
    <li class="my_item">
        <div class="det_count">
            <div class="det_count_tit">
                <p class="opt_01">원두(분쇄없음)</p>
                <p class="opt_02">200g</p>
            </div>
        </div>
        <div class="det_count_bottom">
            <div class="det_count_bx">
                <a class="minus" href="">－</a>
                <input type="text" value="1" readonly>
                <a class="plus" href="">＋</a>
            </div>
            <div class="det_count_price">
                <span class="each_price">14,000</span>원
            </div>
            <a class="item_del" href="">×</a>
        </div>
    </li>
    `;

    //총 상품 금액이 0원이라면, 하단의 버튼(구매하기, 장바구니)을 감춘다.
    $(".det_button").hide();

    //최초로 로딩시 셀렉트 박스에 "-[필수] 옵션선택-"으로 표기하도록 구성한다.
    $("select#crush option:eq(0), select#gram option:eq(0)").prop("selected", true);  //속성을 접근하는 과정상 강제사항으로 구성가능

//①
    //셀렉트 박스의 변경 사항에 대한 진행
    $("#crush").change(function(){
        $("#gram").removeAttr("disabled");
    });

//②
    $("#gram").change(function(){

        var $opt_01 = $("#crush option:selected").text();
        console.log($opt_01);  //선택1 항목의 텍스트를 가져온다.

        var $opt_02 = $("#gram option:selected").text();
        console.log($opt_02);  //선택2 항목의 텍스트를 가져온다.

        //기본 배열 데이터에 동일한 값이 없다면 indexOf(데이터)를 통해 검사하여 -1값이 나온다.

        console.log($each_opt1_txt.indexOf($opt_01));
        console.log($each_opt2_txt.indexOf($opt_02));


        //수정사항 : 두 가지 옵션을 인덱스 번호마다 찾아서 검사를 진행(전수검사)
        /*
        $each_opt1_txt = ["원두", "원두", "원두"]    =그 다음 고른 선택=> 원두
        $each_opt2_txt = ["200g", "500g", "1000g"]  =그 다음 고른 선택=> 200g
        */


        var $optState = "";
        for(i=0; i < $each_opt1_txt.length; i++){
            //두가지 옵선에 대한 텍스정보를 갖고 있는 배열인 $each_opt1.txt와 $each_opt2.txt의 비교를 인덱스 번호별로 검사를 진행

            if($each_opt1_txt[i] == $opt_01 && $each_opt2_txt[i] == $opt_02){
                console.log("선택한 항목은 기존의 배열에 존재한다.");
                $optState = "데이터 있음";
            }else{
                console.log("선택한 항목은 기존의 배열에 존재하지 않는다.");
                $optState = "데이터 없음";
            }
        }

        //indexOf() : 배열 데이터에서 0번 검사를 시작하기 때문에 하나라도 동일한 데이터가 존재한다면 맨 처음으로 나오는 동일한 데이터의 값의 인덱스 번호만을 추출하고 종료됨





        if($optState != "데이터 있음"){
            

      
        
            $(".opt_box").append($each_box);  //세부 박스 전체 프레임에서 각 세부 박스 영역을 마지막 자식으로 넣겠다.

            //var $opt_02_val = Number($("#gram option:selected").val());
            var $opt_02_val = Number($(this).val());
            console.log($opt_02_val);

            $(".opt_box li:last .opt_01").text($opt_01);
            $(".opt_box li:last .opt_02").text($opt_02);

            var $present_price = $num_price + $opt_02_val;  //기본가 + 옵션2 선택가
            console.log(/*"선텍2번이 바뀐 시점의 최초 (기본가 + 옵션가) : " + */$present_price);  //14000 + 0 | 12000 | 23000 (number)


            $each_opt1_txt.push($opt_01); //최종 선택한 선택1의 텍스트를 배열 데이터의 마지막 자리에 넣는다.
            console.log("선택이 종료된 시점에서 선택1의 배열 데이터 : " + $each_opt1_txt);
            
            $each_opt2_txt.push($opt_02); //최종 선택한 선택2의 텍스트를 배열 데이터의 마지막 자리에 넣는다.
            console.log("선택이 종료된 시점에서 선택2의 배열 데이터 : " + $each_opt2_txt);

            $each_calc_price.push($present_price); //최종 선택한 세부 옵션별 최초 옵션가를 배열 데이터의 마지막 자리에 넣는다.
            console.log("선택이 종료된 시점에서 옵션가까지 포함한 배열 데이터 : " + $each_calc_price);

            $amount.push(1); //최종 선택한 세부 옵션별 최초의 수량을 배열 데이터의 마지막 자리에 넣는다.
            console.log("선택이 종료된 시점에서 최초의 수량 : " + $amount);

            $each_total_price.push($present_price); //최종 선택한 옵션가를 배열 데이터의 마지막 자리에 넣는다. (단, 이 변수명의 데이터들은 추후에 최종 금액을 산출하는데 역할을 담당한다. - 수량의 증감에 의해서 진행됨)
            console.log($each_total_price);



            var $result_opt = $present_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            console.log($result_opt); //14,000 | 26,000 | 37,000 (string)

            $(".opt_box li:last .each_price").text($result_opt);

            calc_price();

        }else{
            alert("이미 선택한 옵션입니다.");
        }

        //두번째 박스가 선택되면 선택창들을 최초의 상태로 돌려 놓는다.
        $("select option").prop("selected", false);
        $("select#crush option:eq(0), select#gram option:eq(0)").prop("selected", true);
        $("#gram").prop("disabled", true);

    });  //선택2에 체인지 이벤트 영역


    //브라우저 로딩 과정상 처음부터 존재하는 영역에만 클릭이벤트를 진행 가능(이벤트의 선 로딩 방법)
    /*
    $(".plus").click(function(){
        console.log("클릭 이벤트 발생1");

        return false;
    });
    */


//③ [각 세부박스 수량 조정]

    //최초 브라우저 로딩 과정상에서 존재하지 않더라도 이벤트가 발생했을 때, 문서상에서 기다리다가 찾아감(이벤트의 후 로딩 방법)
    $(document).on("click", ".plus", function(){
        console.log("클릭 이벤트 발생2");
        var $index = $(this).closest("li").index();
        console.log($index); //각 세부옵션 박스의 li의 인덱스 번호를 찾아옴 = 배열 데이터의 수량($amount)에서 해당하는 인덱스 번호와 자리가 일치함
        $amount[$index]++;  //해당하는 수량의 배열 데이터 일치하는 인덱스 번호의 데이터를 하나씩 올린다.
        console.log($amount);

        $(this).siblings("input").val($amount[$index]);  //증가된 각 수량을 표기

        $each_total_price[$index] = $each_calc_price[$index] * $amount[$index];  //수량 변동에 의한 각각의 세부옵션 총액에 변동 값을 대입시키겠다는 구성

        console.log("각 세부옵션별 기본가 : ", $each_calc_price);
        console.log("각 세부옵션별 수량 : ", $amount);
        console.log("각 세부 옵션별 총합 : ", $each_total_price);

        //각 세부 옵션별 총액 정보를 넣어주기 위한 구성
        var $result_price = $each_total_price[$index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $(this).closest("li").find(".each_price").text($result_price);

        calc_price();  //총 상품금액을 계산하기 위한 함수를 호출 (94번 라인의 함수구문으로 호출)

        return false;
    });

    $(document).on("click", ".minus", function(){
        var $index = $(this).closest("li").index();
        console.log($index);

        //상품의 최소수량이 1은 적용되어 있어야 함
        if($amount[$index] < 2){
            //아무것도 하지마~!!
            alert("최소 수량은 1 입니다.");
        }else{
            $amount[$index]--;
            console.log($amount);
            $(this).siblings("input").val($amount[$index]);

            //각 세부 옵션 박스별로 총액을 계산
            $each_total_price[$index] = $each_calc_price[$index] * $amount[$index];
            console.log("변동 수량을 곱한 최종값 : ", $each_total_price);

            //각 세부 옵션별 총액 정보를 넣어주기 위한 구성
            var $result_price = $each_total_price[$index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $(this).closest("li").find(".each_price").text($result_price);

            calc_price();  //총 상품금액을 계산하기 위한 함수를 호출 (94번 라인의 함수구문으로 호출)
        }
        return false;
    });

    //인수가 2개인 경우, 배열변수명.splice(인덱스번호, 개수) : 배열데이터의 지정한 인덱스번호부터 지정한 개수를 잘라서 반환. 원본 데이터는 잘려진 상태로 도출(==> 원본 데이터가 변경)

    $(document).on("click", ".item_del", function(){
        var $del_index = $(this).closest("li").index();
        console.log($del_index);

        console.log("삭제 단계를 진행 전");
        console.log($each_calc_price);
        console.log($amount);
        console.log($each_total_price);
        console.log($each_opt1_txt);
        console.log($each_opt2_txt);


        $each_calc_price.splice($del_index, 1);
        $amount.splice($del_index, 1);
        $each_total_price.splice($del_index, 1);
        $each_opt1_txt.splice($del_index, 1);
        $each_opt2_txt.splice($del_index, 1);
        

        console.log("삭제 단계를 진행 후");
        console.log($each_calc_price);
        console.log($amount);
        console.log($each_total_price);
        console.log($each_opt1_txt);
        console.log($each_opt2_txt);


        $(this).closest("li").remove(); //클릭한 x 버튼의 근접한 상위 li태그를 모두 지운다.






        return false;
    });






    //***********카트 파트 ************/
    var $cart_list = `
        <div class="cart_list">

            <div class="top_list">
                <div class="img_space">
                    <img src="" alt="">
                </div>
                <div class="list_title">
                    <h4>상품 타이틀 상품 타이틀 상품 타이틀 상품 타이틀</h4>
                    <p class="list_total"><span>0000</span>원</p>
                </div>
            </div>
            <ul class="opt_list">

            </ul>

        </div>
    `;

    var $opt_list = `
        <li>
            <div class="opt_title">
                <h5>
                    <span class="opt_title_1">선택 1번 항목</span>
                    <span class="opt_title_2">선택 2번 항목</span>
                </h5>
            </div>
            <div class="opt_price">
                <span>0000</span>원
            </div>
        </li>
    `;


//④
    //"장바구니" 버튼 클릭시
    $(".det_button input:last").click(function(){
        $("#cart_detail").empty(); //하위 요소를 지워라(카트에 리스트가 들어오지 않은 상태로 만들어버림 - 초기상태);

        
        $("#cart_detail").append($cart_list);

        $(".img_space img").attr("src", "./img/"+$detail_img[0]+"");
        $(".list_title h4").text($title);
        $(".list_total span").text($final_total); //총 상품금액 넣기

        //세부 옵션 박스 구성 및 데이터 넣기
        for(i = 0; i < $amount.length; i++){
            $(".opt_list").append($opt_list);
        }
        $(".opt_list li").each(function(index){
            $(this).find(".opt_title_1").text($each_opt1_txt[index]);
            $(this).find(".opt_title_2").text($each_opt2_txt[index]);
            //옵션 창에 가격 정보를 넣는다

            var $cart_opt_price = $each_total_price[index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $(this).find(".opt_price").text($cart_opt_price);
        });

        //옵션창이 많을 경우(3개 이상일 경우) 2개 까지만 보여주고 "더보기"라는 클릭요소를 남기고 나머지는 숨긴다.
        //개수파악 ( $(".opt_list li").length )

        var $opt_list_num = $(".opt_list li").length;
        console.log($opt_list_num);
        if($opt_list_num > 2){
            $(".opt_list li").eq(1).nextAll().hide();
            $(".opt_list li").eq(1).after("<li class='opt_add'><a href=''>더보기</a></li>")
        }




        $(".dark").addClass("active");
        $(".cart_frame").addClass("active");

    });


    //카트 창에서 "더보기"라는 글자를 클릭했을 때 세부 옵션 박스를 추가할 수 있도록 구성

    $(document).on("click", ".opt_add a", function(){
        $(this).closest("li").remove();
        $(".opt_list li").show();

        return false;
    });

    $(".dark, .close_btn, [name='cancel']").click(function(){
        $(".dark").removeClass("active");
        $(".cart_frame").removeClass("active");
    });













    /*#calc_box 각 계산값 구하기*/
    var $basicPrice = [1000, 2000, 3000];
    var $num = [1, 1, 1];
    var $endTotal = [1000, 2000, 3000];
    $(document).on("click", ".plusBtn", function(){
        console.log(this);

        var $index = $(this).closest("li").index();
        console.log($index);  //0 또는 1 또는 2

        $num[$index]++;  //수량 배열 중 클릭한 곳(인덱스 번호를 가져온 곳)의 수량만 하나씩 올린다.
        console.log($num);

        $(this).siblings("input").val($num[$index]);

        $endTotal[$index] = $basicPrice[$index] * $num[$index]; //기본값 * 수량
        console.log($endTotal);
        $(this).closest("li").find(".sum").text($endTotal[$index]);
    });


    /*엄마 심부름 하기*/
    var $initPrice = [1200, 1500];
    var $number = [1, 1];
    var $finPrice = [1200, 1500];
    var $summayPrice = 0;

    function priceT_calc(){
        $summayPrice = 0;  //배열 데이터의 합산 과정상 이전에 처리되었던 합계는 의미가 없음. 기존에 더해진 값의 영향을 받지 않겠다.
        for(v of $finPrice){
            $summayPrice += v;
        }
        $("#ex_01 h2 span").text($summayPrice);
        //만약 초기값을 0으로 시작하지 않았을 경우, [2400, 1500]
        //0번 인덱스의 v값은 2400 + 1번 인덱스의 v 값은 1500 => $summayPrice = 0 + 2400 + 1500 = 3900

        //만약 초기값을 0으로 시작하지 않았을 경우, [3600, 1500]
        //3900 + 0번 인덱스의 v값은 3600 + 1번 인덱스의 v 값은 1500 => $summayPrice = 3900 + 3600 + 1500 = 9000 (총액을 계산하는 과정상 이전 더한값에 영향을 받음)

        //[결과적으로] 합산의 과정 전에 초기값을 0로 추가 구성하는 것이 필요
    }

    $(document).on("click", ".plus_btn", function(){
        var $index = $(this).closest("li").index();
        console.log($index);

        $number[$index]++;
        console.log($number);  //[1, 1] => [2, 1]

        $(this).siblings("input").val($number[$index]);

        $finPrice[$index] = $initPrice[$index] * $number[$index];
        console.log($finPrice);  //[1200, 1500] => [2400, 1500]

        $(this).closest("li").find(".each_sum span").text($finPrice[$index]);

        priceT_calc();

        return false;
    });

    $(document).on("click", ".minus_btn", function(){
        var $index = $(this).closest("li").index();
        if($number[$index] < 2){
            //감소를 시키지 않음
        }else{
            $number[$index]--;
            console.log($number);

            $(this).siblings("input").val($number[$index]);

            $finPrice[$index] = $initPrice[$index] * $number[$index];
            console.log($finPrice);
            $(this).closest("li").find(".each_sum span").text($finPrice[$index]);

            priceT_calc();
        }


        return false;

    });







});