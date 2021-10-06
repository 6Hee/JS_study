$(document).ready(function(){

    //#0. 구성에 대한 스타일 적용
    //#1. 배열 데이터를 구성
    //2차 배열 데이터 = ["이미지", "타이틀", "내용", "가격정보", "날짜", "좋아요 횟수"]
    
    var $pd_arr = [
        ["img1.jpg", "거실 인테리어1", "합리적인 실용주의 인테리어1", "30000", "20211005", "4"],
        ["img2.jpg", "거실 인테리어5", "합리적인 실용주의 인테리어5", "120000", "20211011", "73"],
        ["img3.jpg", "침실 인테리어2", "미니멀리즘 침실 인테리어2", "70000", "2021022", "56"],
        ["img4.jpg", "침실 인테리어3", "모더니즘 침실 인테리어3", "90000", "20210807", "23"],
        ["img5.jpg", "주방 인테리어1", "아르누보 스타일 주방 인테리어1", "80000", "20201231", "105"],
        ["img6.jpg", "거실 인테리어8", "합리적인 실용주의 인테리어8", "140000", "20210328", "97"],
        ["img7.jpg", "서재 인테리어4", "미니멀리즘 인테리어4", "72000", "20210408", "47"],
        ["img8.jpg", "욕실 인테리어3", "포스트모더니즘 인테리어1", "95000", "20210117", "64"],
        ["img9.jpg", "거실 인테리어6", "합리적인 실용주의 인테리어6", "28000", "20210329", "71"],
        ["img1.jpg", "거실 인테리어1", "합리적인 실용주의 인테리어1", "30000", "20211006", "4"],
        ["img2.jpg", "거실 인테리어5", "합리적인 실용주의 인테리어5", "120000", "20211021", "73"],
        ["img3.jpg", "침실 인테리어2", "미니멀리즘 침실 인테리어2", "70000", "20210923", "56"],
        ["img4.jpg", "침실 인테리어3", "모더니즘 침실 인테리어3", "90000", "20210507", "24"],
        ["img5.jpg", "주방 인테리어1", "아르누보 스타일 주방 인테리어1", "80000", "20201131", "115"],
        ["img6.jpg", "거실 인테리어8", "합리적인 실용주의 인테리어8", "140000", "20210318", "96"],
        ["img7.jpg", "서재 인테리어4", "미니멀리즘 인테리어4", "72000", "20210418", "45"],
        ["img8.jpg", "욕실 인테리어3", "포스트모더니즘 인테리어1", "95000", "20210128", "60"],
        ["img9.jpg", "거실 인테리어6", "합리적인 실용주의 인테리어6", "28000", "20210327", "85"],
    ];


    //#2. 패턴화할 구조를 저장
    var $pd_box = 
    `
        <div class="pd_box">
            <div class="pd_photo">
                <img src="./img/img1.jpg" alt="">
            </div>
            <div class="pd_info">
                <h3 class="pd_title">Title</h3>
                <p class="pd_text">Content</p>
                <div class="pd_etc">
                    <span class="pd_price">가격정보</span>
                    <span class="pd_date">업데이트 날짜</span>
                </div>
                <p class="fav">좋아요&nbsp; <span>50</span></p>
            </div>
        </div>
    `;
    //console.log($pd_box);

    //#3. for문을 활용하여 배열 데이터의 개수만큼 반복문을 돌리면서 HTML의 구조화를 진행
    for(i=0; i<$pd_arr.length; i++){
        $(".pd_frame").append($pd_box);
    }
    //상단의 sort 버튼을 클릭했을 때 인덱스 번호를 추출. 예를 들어 "최신순"이라는 버튼을 클릭했다면 인덱스 번호는 0
    var $btn_index;

    //#4. each문으로 순차적 접근 과정에서 데이터를 넣어준다.
   
    function pd_sort(){

        $(".pd_box").each(function(index){

            $(this).find(".pd_photo img").attr("src", "./img/"+$pd_arr[index][0]);
            $(this).find(".pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_price").text($pd_arr[index][3].replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(this).find(".pd_date").text($pd_arr[index][4]);
            $(this).find(".fav span").text($pd_arr[index][5]);

        

        });
        //console.log(this) //클릭한 곳의 요소가 아닌 최상단의 document ==> ready 이벤트의 주체 ... 함수문 내부에서 사용 불가

        $(".sort_button button").removeClass("active");
        $(".sort_button button").eq($btn_index).addClass("active");

        //4개중 하나의 버튼을 클릭했을 때, 셀렉트 박스의 옵션을 선택하도록 한다.
        $(".sort_sel option").prop("selected", false);
        $(".sort_sel option").eq($btn_index + 1).prop("selected", true);
    };
    pd_sort();


    //sort() : 아스키 코드 상의 작은 수 부터 큰 수 순으로 나열되는 방식
    var $test1 = ["graph", "apple", "cherry"];
    $test1.sort();
    console.log($test1); //['apple', 'cherry', 'graph'] : a(97) ~ z(122) 문자 상에서 첫 글자의 아스키코드상의 값 순으로 나열됨

    var $test2 = ["7200", "10000", "27000"]; //['10000', '27000', '7200'] : 가장 먼저 처음에 배치된 숫자를 비교하여 순서대로 나열됨
    $test2.sort();
    console.log($test2); 

    var $test3 = ["3000", "12000", "5000"];
    $test3.sort(function(a, b){
        return a - b; // 3000 - 12000 => 음수(false)[자리변동 없음]; ... 12000 - 5000 => 양수(true)[자리변동]
    });
    console.log($test3);

    


    //최신순으로 정렬 - 버튼
    $(".date_sort").click(function(){
        $pd_arr.sort(function(a, b){
            //return a[4] - b[4]; 오름차순으로 정렬
            return b[4] - a[4]; //내림차순으로 정렬
        });

        console.log($pd_arr); //0번 인덱스에 변경된 2차 배열의 4번 인덱스 데이터 : 가장 오래된 날짜를 지칭
        
        //$pd_arr.reverse(); // 현재 배열의 데이터를 역순으로 돌린다
        //console.log($pd_arr);

        $btn_index = $(this).index();


        pd_sort(); //배열 데이터의 sort과정이 종료되면 함수문을 호출하여 데이터를 다시 넣어준다.
    });


    //"저가순"으로 정렬 - 버튼
    $(".low_sort").click(function(){
        $pd_arr.sort(function(a, b){
    
            return a[3] - b[3]; 
        });

        $btn_index = $(this).index();
        pd_sort();
    });
    //"고가순"으로 정렬 - 버튼
    $(".high_sort").click(function(){
        $pd_arr.sort(function(a, b){
    
            return b[3] - a[3]; 
        });

        $btn_index = $(this).index();
        pd_sort();
    });
    //"인기순"으로 정렬 - 버튼
    $(".fav_sort").click(function(){
        $pd_arr.sort(function(a, b){
    
            return b[5] - a[5]; 
        });

        $btn_index = $(this).index();
        pd_sort();
    });
    

    //셀렉트 박스의 value 값에 의한 상품 정렬
    $(".sort_sel").change(function(){
        var $sel_val = $(this).val();
        console.log($sel_val);

        if($sel_val == "date"){ //최신순
            $pd_arr.sort(function(a, b){
                
                return b[4] - a[4];
            });
        }else if($sel_val == "high"){ //고가순
            $pd_arr.sort(function(a, b){
    
                return b[3] - a[3]; 
            });
        }else if($sel_val == "low"){ //저가순
            $pd_arr.sort(function(a, b){
    
                return a[3] - b[3]; 
            });
        }else if($sel_val == "fav"){ //인기순
            $pd_arr.sort(function(a, b){
    
                return b[5] - a[5]; 
            });
        }
        pd_sort();



        //한번이라도 사용자가 선택을 하고 나면 선택이라는 셀렉트 박스의 옵션은 선택되지 못하도록 구성
        $(".sort_sel option").eq(0).prop("disabled", true);
        //$(".sort_sel option").eq(0).remove();
        //$(".sort_sel option:contains('선택)").remove(); //"선택"이라는 텍스트를 포함하고 있는 옵션 태그만 선택


        $(".sort_button button").removeClass("active");
        $(".sort_button button[class*='"+$sel_val+"']").addClass("active");

        $(".sort_sel option").prop("selected", false); //셀렉트 박스에서 선택을 모두 해제
        $(".sort_sel option[value='"+$sel_val+"']").prop("selected", true); //선택한 곳의 value 값과 일치하는 곳으로 변경되게끔 설정
    });

    //[CSS 속성선택자]
    //[속성명='속성값'] : 해당 속성명과 속성값만 정확하게 일치하는 요소를 선택
    //[속성명*='속성값'] : 해당 속성명에 속성값을 포함하고 있는 요소를 선택
    //[속성명^='속성값'] : 해당 속성명에 해당 속성값으로 시작하는 요소를 선택
    //[속성명$='속성값'] : 해당 속성명에 해당 속성값으로 종료하는 요소를 선택
    



    ////// 페이지 구성하기 /////
    //#1. 몇개를 하나의 페이저마다 상품을 보여줄 것인가? <ol> 태그 아래에 존재하는 <li>를 상품의 개수에 맞추어서 넣어줌

    var $ea_item = 4; //각 페이지별로 4개의 상품을 보여주겠다고 선언
    //18개의 상품이 존재한다면 (1,2,3,4) / (5,6,7,8) / (9,10,11,12) / (13,14,15,16) / (17, 18)
    function view_default(){
        
    
        if($pd_arr.length % $ea_item == 0){ //전체 상품의 개수는 4의 배수다. 만약, 16개의 상품이 존재한다면
            //li의 개수를 상품의 개별 페이지마다 보여줄 수와 일치

            for(k = 0; k < $pd_arr/$ea_item; k++){ //k<4 ... k = 0 -> 1 -> 2 -> 3
                $(".pager").append("<li>"+(k+1)+"</li>");

            }


        }else{ //전체 상품의 개수는 4의 배수가 아니다.

            for(k = 0; k < $pd_arr.length/$ea_item; k++){ //k<=4.5 ... k = 0 -> 1 -> 2 -> 3 -> 4
                $(".pager").append("<li>"+(k+1)+"</li>");
            }
        }

        //초기 구성(li에 현재 페이지를 알려주는 활성화 상태 + 해당하는 페이지의 내용만 제외하고 모든 것을 감춘다.)

        //인덱스 번호
        /*
        [한 페이지마다 4개씩 보여줄 경우]
        (0, 1, 2, 3)
        (4, 5, 6, 7)
        (8, 9, 10, 11)
        (12, 13, 14, 15)
        (16, 17) 

        [한 페이지마다 8개씩 보여줄 경우]
        (0, 1, 2, 3, 4, 5, 6, 7)
        (8, 9, 10, 11, 12, 13, 14, 15)
        (16, 17)
        */
        $(".pd_box").show();
        $(".pager li").eq(0).addClass("active");
        $(".pd_box").eq($ea_item - 1).nextAll().hide();


    };
    view_default(); //브라우저 로딩후 함수구문 호출하여 초기값을 세팅

    $(".ea_btn").click(function(){
        $ea_item = $(this).attr("rel");
        console.log($ea_item);


        $(".pager").empty();

        $(".ea_btn").removeClass("active");
        $(this).addClass("active");

        view_default(); //개수 보기를 클릭했을 때 함수를 호출한다.
    });


    //페이저를 클릭했을 때 해당하는 페이저로 관련 상품만 보여준다. 인덱스번호에 맞춰서 나타나게 한다.

    /*
    ol>li 0번 인덱스를 클릭시 : 0,1,2,3       0(인덱스번호) * $ea_item  ~  ((0 + 1) * $ea_item) - 1
    ol>li 1번 인덱스를 클릭시 : 4,5,6,7       1(인덱스번호) * $ea_item  ~  ((1 + 1) * $ea_item) - 1
    ol>li 2번 인덱스를 클릭시 : 8,9,10,11     2(인덱스번호) * $ea_item  ~  ((2 + 1) * $ea_item) - 1
    ol>li 3번 인덱스를 클릭시 : 12,13,14,15   3(인덱스번호) * $ea_item  ~  ((3 + 1) * $ea_item) - 1
    */

    $(document).on("click", ".pager li", function(){
        //console.log("클릭 이벤트 발생")

        var $pager_index = $(this).index();
        console.log($pager_index);


        $(".pd_box").show();
        //보여줄 화면
        //각 페이지의 첫번째 인덱스 이전의 모든 형제들은 보이지 않도록 처리
        $(".pd_box").eq($pager_index * $ea_item).prevAll().hide();

        //각 페이지의 마지막 인덱스 이후의 모든 형제들은 보이지 않도록 처리
        $(".pd_box").eq((($pager_index + 1) * $ea_item) - 1).nextAll().hide();

        $(".pager li").removeClass("active");
        $(this).addClass("active");
    });










});