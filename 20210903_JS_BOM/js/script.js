
//window.open("URL 주소", "새롭게 열릴 윈도우 팝업창의 제목", 새로운 창의 구성 요소를 정의(가로사이즈, 세로사이즈, 모니터의 좌측으로부터 이격 거리, 모니터의 상단으로부터 이격거리))

//외부의 URL을 팝업창으로 불러오기
//window.open("https://www.naver.com", "윈도우 팝업", "width=400, height=300, left=500, top=200");

//내부의 문서를 팝업창으로 불러오기
var popBtn = document.querySelector("#winOpen");

popBtn.addEventListener("click", function(){
    window.open("./index_popup.html", "윈도우 팝업", "width=400, height=400, left=0, top=0")
});



//회원가입시 아이디 중복확인 버튼을 클릭하면 그 결과값을 새로운 윈도우 팝업창에서 보여준다. ("사용가능한 아이디입니다." 또는 "이미 사용중인 아이디입니다.")

//setInterval : 일정시간을 간격으로 함수 내의 실행문을 실행하는 메서드. 함수문(function) + 실행문 + 대기시간
/*
[방법1 - 무조건 실행한다]
setInterval(function(){
    실행문;

}, 대기시간(단위는 밀리세컨드));

[방법2 - 호출시 시작한다]
var $inverval = setInterval(function(){
    실행문;
}, 대기시간(단위는 밀리세컨드));

*/
var $interval1 = document.querySelector(".interval1 span");
//올린 숫자의 결과를 보여줄 대상물
var num1 = 0; //숫자를 올리기 위한 초기값

setInterval(function(){
    num1++;
    $interval1.textContent = num1;
}, 1000);




var $interval2 = document.querySelector(".interval2 span");
var num2 = 10; 
/*
setInterval(function(){
    num2--;
    $interval2.textContent = num2;
}, 1000);
*/


//인터벌을 멈추게 하는 메서드 : clearInterval()
var $interval_countDown = setInterval(function(){
    num2--;
    $interval2.textContent = num2;
    if(num2 < 1){
        clearInterval($interval_countDown);
        $interval2.textContent = "로켓 발사~";
    }
}, 1000);


//이미지 슬라이드(이미지 교체)

var slide = document.querySelector("#imgSlide");
var no = 1;
setInterval(function(){
    no++;
    if(no > 9){
        no = 1;
    }
    slide.style.backgroundImage = "url(./img/land_0"+no+".jpg)";

}, 3000);



//setTimeout : 지정된 시간이 지난 후 한번만 실행하고 종료한다. (함수문 + 실행문 + 시간)

var $body = document.querySelector("body");
setTimeout(function(){
    $body.style.backgroundColor = "#aff";
}, 5000);



//이미지 사이즈 변경
var chBtn = document.querySelector(".change_scale button");
var target_box = document.querySelector(".change_box");

chBtn.addEventListener("click", function(){
    target_box.classList.add("active");//클릭한 후 바로 공간 사이즈 변경
    setTimeout(function(){
        target_box.classList.remove("active"); //5초후 공간 사이즈 원복
    }, 5000);
});

//screen 객체
var $cur_width = document.querySelector(".cur_width span");
var $cur_height = document.querySelector(".cur_height span");
var $cur_availWidth = document.querySelector(".cur_availWidth span");
var $cur_availHeight = document.querySelector(".cur_availHeight span");


var $s_width = screen.width;
var $s_height = screen.height;
var $s_availWidth = screen.availWidth;
var $s_availHeight = screen.availHeight;

$cur_width.textContent = $s_width + "px";
$cur_height.textContent = $s_height + "px";
$cur_availWidth.textContent = $s_availWidth + "px";
$cur_availHeight.textContent = $s_availHeight + "px";



console.log(location.port);
//ftp의 기본 포트번호 21
/sql의 기본 포트번호 8800