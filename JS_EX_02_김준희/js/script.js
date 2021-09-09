/* ======== 실습1 ======== */
document.write("<h3>실습 1</h3>");
var $num_01= 23;
var $num_02= 12;
var total = $num_01 + $num_02;

document.write("최종 합계는 " + total, "입니다.", "<br>");



/* ======== 실습2 ======== */
document.write("<h3>실습 2</h3>");
var $a = 12;
var $b = 5;
var total = $a % $b;

document.write("두 수를 나눈 나머지 값은 " + total, "입니다.", "<br>");



/* ======== 실습3 ======== */
document.write("<h3>실습 3</h3>");
var thisYear = 2021;
++thisYear;

document.write("내년은" +thisYear, "년 입니다.", "<br>");



/* ======== 실습4 ======== */
document.write("<h3>실습 4</h3>");
var gender_01 = (1, 3);
var gender_02 = (2, 4);

var result_01 = (gender_01 % 2 > 0)?"남성":"여성";
var result_02 = (gender_02 % 2 > 0)?"남성":"여성";

document.write(result_01,"<br>");
document.write(result_02,"<br>");



/* ======== 실습5 ======== */
document.write("<h3>실습 5</h3>");

var img="";
img += "<img src='./img/kakao_01.jpg'>";
img += "<img src='./img/kakao_02.jpg'>";
img += "<img src='./img/kakao_03.jpg'>";
img += "<img src='./img/kakao_04.jpg'>";

document.write(img);





//실습 1

document.write("<h2>연산자</h2>");
document.write("<h3>실습1</h3>");
var num_01_01 = 23;
var num_01_02 = 12;
var num_01_sum = num_01_01 + num_01_02;
document.write("최종 합계는 " + num_01_sum + " 입니다.");


document.write("<hr>");


document.write("<h3>실습2</h3>");
var num_02_01 = 12;
var num_02_02 = 5;
var num_02_reminder = num_02_01 % num_02_02;
document.write("두 수를 나눈 나머지 값은 " + num_02_reminder, " 입니다.");


document.write("<hr>");


document.write("<h3>실습3</h3>");
var num_03 = 2021;
++num_03; // 또는 num_03++
document.write("내년은" + num_03 + "년 입니다.");


document.write("<hr>");


document.write("<h3>실습4</h3>");
var idNum = 1;
var userGender = idNum % 2 == 0 ? "여성" : "남성";
//idNum % 2 == 0 결과값이 true라면 콜론을 기준으로 좌측의 내용이 실행된다.
//idNum % 2 == 0 결과값이 false라면 콜론을 기준으로 우측의 내용이 실행된다.

document.write("당신은 " + userGender, " 입니다.");

document.write("<hr>");


