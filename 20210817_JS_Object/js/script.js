
//객체(Object)란? 하나의 특징을 갖고 있는 사물

//var yourPhone = new Phone();  //자바스크립트의 입장에서 신조어는 확인이 불가능하기 때문에 정의(Phone가 무엇을 하는지에 대한 코딩)가 반드시 필요하다.

var myPhone = new Object();  //myPhone이라는 저장공간에 객체(다수의 속성들, 다수의 기능)라는 공간을 형성하겠다고 선언


myPhone.name = "iPhone15";
myPhone.color = "Metal Blue";
//사이즈 7인치
myPhone.size = "7인치";

document.write("내가 앞으로 구입할 휴대폰의 이름 : " + myPhone.name, "<br>");
document.write("내가 앞으로 구입할 휴대폰의 컬러 : " + myPhone.color, "<br>");
document.write("내가 앞으로 구입할 휴대폰의 사이즈 : " + myPhone.size, "<br>");


myPhone.name = "갤럭시 25";
document.write("내가 앞으로 구입할 휴대폰의 이름 : " + myPhone.name, "<br>");


var myPhone = {};
myPhone.name = "갤럭시 26";
myPhone.color = "gray";
document.write("내가 앞으로 구입할 휴대폰의 이름 : " + myPhone.name, "<br>");


var myPhone = {
    name : "갤럭시 27",
    color : "gray",
}

document.write("내가 앞으로 구입할 휴대폰의 이름 : " + myPhone.name, "<br>");



var hero = {
    shape : "character.jpg",
    name : "토마토 재배자",
    level : 1,
    device : "호미",
    cloth : "린넨 옷",
    hp : 100,
    ep : 0,

    running : function(){
        return "휘리릭~~~";
    },
    action : function(){
        return "빠숑~~";
    }
    //함수는 f(x) = x + 1;
}


document.write("<img src='./img/"+hero.shape+"' style='height:100px;',>", "<br>");
document.write("나의 게임 캐릭터 이름 : " + hero.name, "<br>");
document.write("현재 나의 레벨 : " + hero.level, "<br>");
document.write("1단계 끝판왕을 " + hero.device + "로 물리쳤습니다.", "<br>");
hero.level++;
document.write("현재 나의 레벨 : " + hero.level, "<br>");

document.write("게임이 시작되었습니다. 나는 "+hero.running()+" 달리고 있습니다.", "<br>");

document.write("나의 캐릭터가 " + hero.device + "로 휘두르는 소리 " + hero.action(), "<br>");

hero.hp += 100;
hero.ep += 50;
document.write("현재 나의 체력 : " + hero.hp, "<br>");
document.write("현재 나의 경험치 : " + hero.ep, "<br>");

//장비를 곡괭이로 교체

hero.device = "곡괭이";
document.write("2단계에서는 새로운 장비 "+hero.device+"로 모험을 떠납니다. ", "<br>");

document.write("<br><hr><br>");


document.write("<h3>날짜 객체</h3>");
var $today = new Date();
//로컬 컴퓨터의 시스템 시간 정보로부터 날짜 정보를 받아오겠다고 선언
//Date() : 새로운 현재 날짜를 포함한 시간 정보를 가져오겠다는 선언
console.log($today); //요일 월 일 연 시간정보 좌표정보

var $cur_year = $today.getFullYear();
document.write($cur_year + "년 ");

var $cur_month = $today.getMonth();
document.write($cur_month + "월");
//1월을 날짜 데이터 값 0, 2월의 날짜 데이터 값 1, ..... , 12월의 날짜 데이터 값 11


var $cur_date = $today.getDate(); //서수개념(첫번째날 , 두번째날 ,.....)
document.write($cur_date + "일");

var $cur_day = $today.getDay();
// document.write($cur_day + "요일");
//일요일 : 0, 월요일 : 1, ...., 토요일 : 6

if($cur_day == 0){
    document.write("일요일");
}else if($cur_day == 1){
    document.write("월요일");
}else if($cur_day == 2){
    document.write("화요일");
}else if($cur_day == 3){
    document.write("수요일");
}else if($cur_day == 4){
    document.write("목요일");
}else if($cur_day == 5){
    document.write("금요일");
}else if($cur_day == 6){
    document.write("토요일");
}

var $cur_hours = $today.getHours();  //0~23
document.write($cur_hours + "시");
//17시 - 오후 5시, 21시 - 오후 9시, 오후 12시와 오후 1시 개념
//오전 0~11시 59분까지 오후 12시~ 오후 1시~오후 11시 59분

if($cur_hours >= 12){ //오후 시간대 (오후 12시 / 오후 1시 ~ 오후 11시)
    if($cur_hours < 13){  //오후 12시일 때
        document.write("오후" + $cur_hours + "시");
    }else{ //13시 이상일 때
        document.write("오후 " + ($cur_hours - 12) + "시");
    }
}else{//오전 시간대 (오전 0시 ~ 오전 11시)
    document.write("오전" + $cur_hours + "시");
}


var $cur_min = $today.getMinutes();
document.write($cur_min + "분 ");

var $cur_sec = $today.getSeconds();
document.write($cur_sec + "초 ");

var $cur_millisec = $today.getMilliseconds();
document.write($cur_millisec, "<br>");  //초단위 아래의 소수점 이하 정보만 받아온다.

//1초 = 1000밀리초


var $cur_getTime = $today.getTime();
document.write("1970년 1월 1일 자정으로부터 경과된 시간 정보(밀리세컨드 단위) : " + $cur_getTime, "<br>");


//본인 생일을 기준으로 요일찾기

var $birth = new Date("1996-08-24");
console.log($birth);
var $birth_day = $birth.getDay();
document.write("내가 태어난 날의 요일 데이터 정보 : " + $birth_day, "<br>");


//날짜 객체로부터 월정보를 받아서 계절별 이미지 표현하기
if($cur_month >= 3 && $cur_month <= 5){
    document.write("<img class='season' src='./img/img-m.jpg' alt='봄 이미지' >", "<br>");
}else if($cur_month >= 6 && $cur_month <=8 ){
    document.write("<img class='season' src='./img/img-s.jpg' alt='여름 이미지' >", "<br>");
}else if($cur_month >= 9 && $cur_month <=11 ){
    document.write("<img class='season' src='./img/img-f.jpg' alt='가을 이미지' >", "<br>");
}else{
    document.write("<img class='season' src='./img/img-w.jpg' alt='겨울 이미지' >", "<br>");
}


//만난 날짜 계산하기(현재 날짜로부터 - 최초 만난 날짜)
var now = new Date();
var firstDay = new Date("2001-08-24");
var toNow = now.getTime(); // 1970년 1월 1일으로부터 경과된 시간을 밀리세컨드 단위로 반환

var toFirst = firstDay.getTime(); //1970년 1월 1일으로부터 경과된 시간을 특정 날짜까지만 반환

console.log(toNow);
console.log(toFirst);

var passedTime = toNow - toFirst;
console.log(passedTime);

/*
1일 = 24시간
1시간 = 60분
1분 = 60초
1초 = 1000밀리세컨드
*/

var passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000)); //소수점 이하를 반올림 처리한다.
console.log(passedDate);

document.write("함께 한 날 : " + passedDate + "일", "<br>");


//만난 후 부터 100일 화면에 표현하기(상단 코딩으로부터 이어서)

var future_100 = toFirst + 100 * (24 * 60 * 60 * 1000);
var someday_100 = new Date(future_100); //변수의 내부에 들어올 수 있는 조건은 밀리세컨드 단위
console.log(someday_100); //Sun Dec 02 2001 09:00:00 GMT+0900 (한국 표준시)


var year_100 = someday_100.getFullYear();
var month_100 = someday_100.getMonth() + 1;
var date_100 = someday_100.getDate();


document.write("100일 기념일 날짜 정보 : " + year_100 + "년" + month_100 + "월" + date_100 + "일", "<br>");



document.write("<br><hr><br>");



document.write("<h3>수학객체 : 일반적인 숫자형 데이터로부터 적용할 수 없는 다소 복잡한 결과물을 도출시 사용</h3>")


var num_01 = 300000;
var ch_standardNum = num_01.toExponential(1);  //현재 숫자형 데이터를 컴퓨터에서 빠른 로딩으로 진행할 수 있도록 지표기수법으로 구성해주세요. (2)는 소수점 이하의 수를 몇자리까지 보여줄 것인가?


console.log(ch_standardNum); //3.00e+5
console.log(typeof ch_standardNum); //string


var num_02 = 1234.5678;
var ch_fixedNum = num_02.toFixed(3); //소수점 자리수만큼 남기고 이다음 자리에서 반올림하여 결과값을 도출
console.log(ch_fixedNum);
console.log(typeof ch_fixedNum); //string


var num_03 = 1234.5678;
var ch_PrecisionNume = num_03.toPrecision(3); //유효숫자 n개로 보여주고 지표기수법을 적용함
console.log(ch_PrecisionNume);  //1.23e+3
console.log(typeof ch_PrecisionNume); //string


var bxWidth = "30.512px";
document.write(parseInt(bxWidth), "<br>"); //30 ==> 숫자형으로 변환시키는 과정에서 내부 문자들은 배제


var $num_max = Math.max(27, 36, 5, 76);
document.write("나열된 수 중에 가장 큰 값 : " +$num_max, "<br>");
var $num_min = Math.min(27, 36, 5, 76);
document.write("나열된 수 중에 가장 작은 값 : " +$num_max, "<br>");



var $num = 1234.5678;
var $round = Math.round($num);
document.write("숫자를 소수점 첫번째 자리에서 반올림 한 값(정수) : " + $round, "<br>");
//1235


var $ceil = Math.ceil($num);
document.write("숫자를 소수점 첫번째 자리에서 올림 한 값(정수) : " + $ceil, "<br>");
//1235


var $floor = Math.floor($num);
document.write("숫자를 소수점 첫번째 자리에서 내림 한 값(정수) : " + $floor, "<br>");
//1234


var $random = Math.random();
document.write("0~1 사이의 난수를 무작위 방식으로 반환한다." + $random, "<br>");


//1~10 사이의 값을 랜덤방식으로 반환(정수값) - ceil()
var int_01 = Math.ceil(Math.random() * 10);
/*
최소값 : 0.0001 * 10 = 0.001 ==ceil()==> 1
최대값 : 0.9999 * 10 = 9.999 ==ceil()==> 10
*/ 
document.write("ceil() 메서드를 활용한 1~10의 값을 랜덤방식으로 반환 : " + int_01, "<br>");

//1~10 사이의 값을 랜덤방식으로 반환(정수값) - floor()
var int_02 = Math.floor((Math.random() * 10) + 1);
document.write("floor() 메서드를 활용한 1~10의 값을 랜덤방식으로 반환 : " + int_02, "<br>");


// 0.1 ~0.99
//실습1. 1부터 46까지 랜덤방식으로 무작위 추출 (로또번호)
var int_03 = Math.ceil(Math.random() * 46);
document.write("1부터 46까지 랜덤방식으로 무작위 추출" + int_03, "<br>");



//실습2. 11부터 100까지 랜덤방식으로 무작위 추출 (폰트크기 랜덤으로 적용)
var int_04 = Math.ceil((Math.random() * 90) + 10);
document.write("11부터 100까지 랜덤방식으로 무작위 추출" + int_04, "<br>");



//오늘 과제 가위, 바위, 보 게임기의 랜덤방식으로 결과물 표현하기

var $rand = Math.random();
if($rand <= 0.3333333333){
    document.write("<img src='./img/finger_2.png' >");
}else if($rand > 0.333333333 && $rand <= 0.66666666){
    document.write("<img src='./img/finger_0.png' >");
}else{
    document.write("<img src='./img/finger_5.png' >");
}


var $rand_ceil = Math.ceil(Math.random()* 3);
if($ran_ceil == 1){
    document.write("<img src='./img/finger_2.png' >");
}else if($rand_ceil == 2){
    document.write("<img src='./img/finger_0.png' >");
}else{
    document.write("<img src='./img/finger_5.png' >");
}