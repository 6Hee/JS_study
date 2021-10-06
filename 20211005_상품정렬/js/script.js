$(document).ready(function(){

    //#0. 구성에 대한 스타일 적용
    //#1. 배열 데이터를 구성
    //2차 배열 데이터 = ["이미지", "타이틀", "내용", "가격정보", "날짜", "좋아요 횟수"]
    
    var $pd_arr = [
        ["img1.jpg", "거실 인테리어1", "합리적인 실용주의 인테리어1", "30000", "20211005", "4"],
        ["img2.jpg", "거실 인테리어5", "합리적인 실용주의 인테리어5", "120000", "202110111", "73"],
        ["img3.jpg", "침실 인테리어2", "미니멀리즘 침실 인테리어2", "70000", "20210223", "56"],
        ["img4.jpg", "침실 인테리어3", "모더니즘 침실 인테리어3", "90000", "20210807", "23"],
        ["img5.jpg", "주방 인테리어1", "아르누보 스타일 주방 인테리어1", "80000", "20201231", "105"],
        ["img6.jpg", "거실 인테리어8", "합리적인 실용주의 인테리어8", "140000", "20210328", "97"],
        ["img7.jpg", "서재 인테리어4", "미니멀리즘 인테리어4", "72000", "20210408", "47"],
        ["img8.jpg", "욕실 인테리어3", "포스트모더니즘 인테리어1", "95000", "20210117", "64"],
        ["img9.jpg", "거실 인테리어6", "합리적인 실용주의 인테리어6", "28000", "20210329", "71"],
    ];

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

    //#4. each문으로 순차적 접근 과정에서 데이터를 넣어준다.
    $(".pd_box").each(function(index){
        $(this).find(".pd_photo img").attr("src", "./img/"+$pd_arr[index][0]);
        $(this).find(".pd_title").text($pd_arr[index][1]);
        $(this).find(".pd_text").text($pd_arr[index][2]);
        $(this).find(".pd_price").text($pd_arr[index][3].replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $(this).find(".pd_date").text($pd_arr[index][4]);
        $(this).find(".fav span").text($pd_arr[index][5]);
    });


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


    $(".date_sort").click(function(){
        $pd_arr.sort(function(a, b){
            return a[4] - b[4];
        });

        console.log($pd_arr); //0번 인덱스에 변경된 2차 배열의 4번 인덱스 데이터 : 가장 오래된 날짜를 지칭
        
        $pd_arr.reverse(); // 현재 배열의 데이터를 역순으로 돌린다
        console.log($pd_arr);


        $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "./img/"+$pd_arr[index][0]);
            $(this).find(".pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_price").text($pd_arr[index][3].replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(this).find(".pd_date").text($pd_arr[index][4]);
            $(this).find(".fav span").text($pd_arr[index][5]);
        });
    })






});