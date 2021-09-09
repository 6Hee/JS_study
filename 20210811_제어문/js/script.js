document.write("<h2>제어문</h2>");
document.write("<h3>조건문 : if(조건식) 문, else 문, else if(조건식)</h3>");


//조건문 if문 : if(조건식){실행문}
//조건문 else문 : else{실행문} ==> if 문을 배제한 상태에서 else문만을 사용할 수는 없음


//만보기
//입력창(prompt(질문내용, 답변의 초기값))

/*
var $walk = prompt("당신은 오늘 몇걸음 걸으셨나요?", "");
console.log($walk);

if($walk >= 10000){
    document.write("축~! 목표달성!", "<br>");
}else{
    document.write("조금만 더 걸으시면 건강해 집니다.", "<br>");
}
*/

//else if문 : if문의 조건에는 만족하지 않으나 또다른 조건에서 분류해야할 때 사용. if문이 먼저 상단에 배치되어야 함
//else if(조건식){실행문}

//구매자의 등급 분류에 따른 할인쿠폰을 발송 : vip(100000원 이상 구매고객), gold(60000원 이상 구매고객), silver(10000원 이상 구매고객), 신규회원(구매이력이 없는 고객)
/*
var $cu_buy = prompt("지난달에 당신이 구매한 총 금액은?", "");
if($cu_buy >= 100000){
    document.write("당신은 VIP 등급입니다. 메일로 30% 쿠폰을 발송하였습니다.", "<br>");

}else if($cu_buy >= 60000){
    document.write("당신은 GOLD 등급입니다. 메일로 20% 쿠폰을 발송하였습니다.", "<br>")
}else if($cu_buy >= 10000){
    document.write("당신은 SILVER 등급입니다. 메일로 10% 쿠폰을 발송하였습니다.", "<br>")
}else{
    document.write("당신은 신규 회원입니다. 메일로 5% 쿠폰을 발송하였습니다.", "<br>")
}
*/
//조건문은 코딩의 로딩 과정상 조건식이 참인 부분이 존재하면 그 아래의 또 다른 조건식(else if문 또는 else문)은 로딩하지 않는다.


//조건식에서 주의 사항 : 위에서부터 로딩하는 과정에서 조건식에 만족한다면 해당하는 실행문만을 실행하고 탈출한다. 예시, 70000값이 들어왔다면, if($cu_buy >= 10000){실행문} 이곳을 진행하고 나머지 모든 식은 "종료된다" 또는 "무시한다."

/*
if($cu_buy >= 10000 && $cu_buy < 600000){
    document.write("당신은 SILVER 등급입니다. 메일로 10% 쿠폰을 발송하였습니다.", "<br>");
}
else if($cu_buy >= 60000 && $cu_buy < 100000){
    document.write("당신은 GOLD 등급입니다. 메일로 20% 쿠폰을 발송하였습니다.", "<br>")
}
else if($cu_buy >= 100000){
    document.write("당신은 VIP 등급입니다. 메일로 30% 쿠폰을 발송하였습니다.", "<br>")
}
else{
    document.write("당신은 신규 회원입니다. 메일로 5% 쿠폰을 발송하였습니다.", "<br>")
}
*/

/*
vip : 100,000원 이상
gold : 60,000원 이상 ~ 100,000원 미만
silver : 10,000원 이상 ~ 60,000원 미만
신규회원 : 10,000원 미만
*/

//계절별 정보에 따른 텍스트 문장을 도출
//봄(3~5월) / 여름(6~8월) / 가을(9~11월) / 겨울(12, 1~2월)
/*
var $season = prompt("현재 월을 입력하세요.", "8");
if($season == 3 || $season == 4 || $season == 5){
    //봄
    document.write("봄", "<br>");
}else if($season == 6 || $season == 7 || $season == 8){
    //여름
    document.write("여름", "<br>");
}else if($season == 9 || $season == 10 || $season == 11){
    //가을
    document.write("가을", "<br>");
}else if($season == 12 || $season == 1 || $season == 2){
    //겨울
    document.write("겨울", "<br>");
}
*/


//11.5를 입력했다면 --> 11월로 변경

/*
var $season = parseInt(prompt("현재월 입력(1~12까지 정수값", "11.5"));

var $season = prompt("현재 월을 입력하세요.", "8");


if($season > 0 && $season < 13){
    if($season >= 3 && $season < 6){
        document.write("봄", "<br>");
    }else if($season >= 6 && $season < 9){
        document.write("여름", "<br>");
    }else if($season >= 9 && $season < 12){
        document.write("가을", "<br>");
    }else{
        document.write("겨울", "<br>");
    }

}else{  //유효성에 대한 예외처리
    alert("입력한 값이 유효하지 않습니다. 다시 작성해 주시기 바랍니다.")
    location.reload();  //현재 URL 기준으로 새로고침 하겠다는 명령
}
*/


//네 자리수 이상을 입력(prompt)하여 1차 조건문에서 네자리수 이상을 입력했는지 체크할 것이고, 2차 조건문에서 3의 배수값인지를 체크(모두 if문을 활용할 것!)
//입력한 값의 변수 % 3 == 0 ==> 3의 배수
//<결과> 0000은(는) 3의 배수입니다. || 0000은(는) 3의 배수가 아닙니다.  

/*
var $p_num = parseInt(prompt(" 네 자리수 이상의 정수 값을 입력하세요.", "0000"));

if($p_num > 999){
    if($p_num % 3 == 0){
        document.write($p_num + "은(는) 3의 배수입니다.", "<br>");
    }
    else{
        document.write($p_num + "은(는) 3의 배수가 아닙니다.", "<br>");
    }
}else{
    alert("입력한 값이 유효하지 않습니다. 다시 작성해 주시기 바랍니다.")
    location.reload();
}
*/


/*
document.write("<h3>선택문 : switch case ~ break</h3>");
//지하철 호선 번호에 따른 선택
var $my_subway = prompt("오늘 당신이 타고갈 지하철 호선 번호를 입력하세요. \n(1~4까지 정수값 입력)", "2");
switch($my_subway){
    case "1" : document.write("군청색 1호선을 선택했습니다.", "<br>");
    break;  //메모리 블록 공간으로부터 탈출시키기 위한 도구(아래의 코딩은 로딩하지 않음)
    case "2" : document.write("녹색 2호선을 선택했습니다.", "<br>");
    break;
    case "3" : document.write("주황색 3호선을 선택했습니다.", "<br>");
    break;
    case "4" : document.write("파란색 4호선을 선택했습니다.", "<br>");
    break;
    default : alert("제시된 유효범위를 초과하였습니다. \n다시 작성해 주세요.")
    location.reload();
}
*/


//입력창(prompt("당신이 선택한 세미나 번호를 입력하세요.", ""))을 활용하여
//1을 입력했을 때, design session에 대한 이미지를 출력
//2를 입력했을 때, develop session에 대한 이미지를 출력
//3을 입력했을 때, marketing session에 대한 이미지를 출력
//<img src='' alt=''>
//다른 번호를 입력했을 때 예외처리

/*
var $seminar = prompt("당신이 선택한 세미나 번호를 입력하세요. \n(1~3까지 정수값 입력)", "");
switch($seminar){
    case "1" : document.write("<img src='./img/img_01.png' alt='디자인 세션 이미지'>");
    break;
    case "2" : document.write("<img src='./img/img_02.png' alt='개발 세션 이미지'>");
    break;
    case "3" : document.write("<img src='./img/img_03.png' alt='마케팅 세션 이미지'>");
    break;
    default : alert("제시된 유효범위를 초과하였습니다. \n다시 입력해 주세요.");
    location.reload();
}
*/

document.write("<h3>반복문 : 대상을 반복하여 구현하고자 할 때 사용 (초기값, 조건식, 증감식 + 실행문 : 3+1</h3>");
document.write("<h3>반복문 - while 문</h3>");


//#1. 초기값 -> #2. 조건식에서 현재 변수에 담긴 데이터를 기준으로 검사를 진행(true 일 경우) -> #3. 실행문을 실행 -> #4. 증감식(초기값을 증감시킨다.) -> #5. while 문으로 돌아와서 조건식을 다시 검사(true 일 경우) -> #6. 실행문을 실행 ....
var $i = 1; //$i의 초기값을 선언
while($i <= 10){ //조건식이 만족하면 {} 내부로 진입한다.
    document.write($i, "<br>"); //화면상에 구현될 실행문
    $i++; //증감식 : 조건에 도달할 수 있는 도구로 활용
}
/*
$i = 1 --> (1 <== 10) -->  document.write(1, "<br>"); --> $i = 2;
$i = 2 --> (2 <== 10) -->  document.write(2, "<br>"); --> $i = 3;
$i = 3 --> (3 <== 10) -->  document.write(3, "<br>"); --> $i = 4;

....

$i = 9 --> (9 <== 10) -->  document.write(9, "<br>"); --> $i = 10;
$i = 10 --> (10 <== 10) -->  document.write(10, "<br>"); --> $i = 11;
$i = 11 --> (11 <== 10) -->  반복문을 종료하고 나와라 

*/
//브라우저 화면에 이미지를 반복하여 구현하기 view1.jpg ~ view9.jpg
var $j = 1;
while($j <= 9){
    document.write("<img class='view_img' src='./img/view"+ $j +".jpg'>");
    $j++;

}


document.write("<hr><h4>반복문이 순차적으로 접근하는 과정</h4>");
var $k = 1;
var $txt = ""
while($k <= 5){
    $txt += "<p>" + $k + "</p>";
    console.log($txt);
    $k++;
}

document.write("<hr>");

//반복문을 활용하여 캘린더 이미지를 화면상에 표현하시오(가로 사이즈만 100px 적용) - <img>태그 활용할 것 + alt에 "1월 ~ 12월" 까지 각각 넣을 것


var $calendar = 1;
var bong = "";
while($calendar <= 12){
    bong += "<img class='calendar_width' src='./img/m_"+$calendar+".png' alt='"+$calendar+"월'>";
    $calendar++;
}
document.write(bong);

document.write("<hr>");

//반복문을 활용하여 화면상에 표현하시오. (각 공간의 사이즈 100(가로) 160(세로) - 외부 스타일에 적용) - <div style='background-iamge: ~~'> 태그를 활용 + background-iamge를 인라인 스타일 시트에 적용하여 가져오기. (bgs 와 bgp은 외부 스타일에 적용) + 가로배치(display:inline-block; 을 활용할것) - 오늘 과제


var $rec = 1;
var $ib = "";
while($rec <= 12){
    $ib += "<div class='box' style='background-image: url(../img/m_" + $rec + ".png)'></div>";
    $rec++;
}
document.write($ib);
document.write("<hr>");


document.write("<h3>반복문 - do ~ while 문</h3>");
//#1. 초기값 --> #2. do문에 의해서 강제 실행을 진행 --> #3. 증감식 --> #4. 조건식에서 검사를 진행(true라면 do문으로 이동하여 반복을 진행한다. / false라면 더 이상 do문으로 보내지 말고 반복을 종료한다.(탈출한다.))
var $k = 1; //#1. 초기값
do{
    document.write($k, "<br>"); //#2. do문에 의해 실행되는 실행문
    $k++; //#3. 증감식
}while($k <= 10) //#4. 조건식


/*
[초기값 -- 실행문 -- 증감식 -- 조건식]
$k = 1 --do{}--> document.write(1, "<br>"); --> $k = 2 --> 2 <= 10(true)
$k = 2 --do{}--> document.write(2, "<br>"); --> $k = 3 --> 3 <= 10(true)
....
$k = 9 --do{}--> document.write(9, "<br>"); --> $k = 10 --> 10 <= 10(true)
$k = 10 --do{}--> document.write(10, "<br>"); --> $k = 11 --> 11 <= 10(false - 반복문 종료)
*/

document.write("<h3>반복문 - for 문</h3>");
/*

    for(초기값; 조건식; 증감식){
        실행문;
    }

*/
//#1. 초기값 --> #2. 조건식 --> #3. 실행문 --> #4.증감식
for(var i = 1; i <= 10; i++){
    document.write(i, "<br>");
}
/*
[#1. 초기값 --> #2. 조건식 --> #3. 실행문 --> #4.증감식]
i = 1; --> 1 <= 10(true) --> document.write(1, "<br>"); --> i = 2;
i = 2; --> 2 <= 10(true) --> document.write(2, "<br>"); --> i = 3;
...

i = 9; --> 9 <= 10(true) --> document.write(9, "<br>"); --> i = 10;
i = 10; --> 10 <= 10(true) --> document.write(10, "<br>"); --> i = 11;
i = 11; --> 11 <= 10(false) --> 반복문 종료를 선언 
*/

//상품을 웹에서 배치하는 과정에서 3의 배수마다 신상품을 표현하겠다고 구성 (상품박스는 30개를 표현하는 과정)
for(var i = 1; i <= 30; i++){
    if(i % 3 == 0){ //반복하는 과정상 3의 배수
        document.write("<div class='pd new'>신상품 - " + i + "</div>");
    }else{ //i라는 값이 3의 배수가 아니라면
        document.write("<div class='pd best'>베스트상품 - " + i + "</div>");
    }
}


document.write("<hr>");
//1~40번의 박스를 출력하는 과정에서 3과 4의 배수 공간을 각각 다른 색으로 구현 
//4의 배수이자 3의 배수인 공간에는 노란색(#ff0)
//4의 배수 공간에는 분홍색(#faf)
//3의 배수 공간에는 녹색(#afa)
//각 박스의 구성 조건 : display:inline-block; width: 100px; height: 100px;
//나머지 공간은 회색(#aaa)


for(var i = 1; i <= 40; i++){
    if(i % 3 && i % 4 == 0){
        document.write("<div class='box tf'>3,4 공통배수</div>");
    }
    else if(i % 4 == 0){
        document.write("<div class='box f'>4의 배수</div>");
    }
    else if(i % 3 == 0){
        document.write("<div class='box t'>3의 배수</div>");
    }else{
        document.write("<div class='box etc'>나머지</div>");
    }
}


document.write("<h3>반복문 - for 문 + break : 반복문을 강제 종료시킨다.</h3>");
for(var i = 1; i <= 10; i++){
    if(i == 7){
        break;
    }
    document.write(i, "<br>"); // 1, 2, 3, 4, 5, 6
}

document.write("<h3>반복문 - for 문 + continue : 반복을 중단하였다가 증감식으로 이동하여 연속적으로 반복을 시키고자 할 때 사용</h3>");
for(var j = 1; j <= 10; j++){
    if(j == 6){
        continue; //반복하는 과정에서 조건식에 만족하였다면 후속에 위치한 실행문을 실행하지 말고 증감식으로 바로 이동하여 반복을 재진행
    }
    document.write(j, "<br>"); //1, 2, 3, ... 9, 10
}

document.write("<h3>중첩 for문 : 1차 for문을 만족한다면 내부 for문을 반복시켜라 -> 내부의 for문이 종료가 되면 다시 외부 for문으로 돌아가서 만족할 때까지 싸이클링 패턴을 구성</h3>");
/*
    for(1차 초기값; 1차 조건식; 1차 증감식){
        1차 실행문 => for(2차 초기값, 2차 조건식, 2차 증감식){2차 실행문}
    }
*/

for(var i = 1; i <= 5; i++){
    document.write("타이틀" + i, "<br>");
    for(var j = 1; j <= 4; j++){
        document.write("내용" + j, "<br>");
    }
}

//중첩 for문 활용한 구조를 구현

var amond = "";
for(var i = 1; i < 4; i++){  //i = 1 -> 2 -> 3
    amond += "<section id='cont_" + i + "'>";
    for(var j = 1; j < 5; j++){
        amond += "<div class='bx'> "+ j + ""

        amond += "</div>"
    }
    amond += "</section>";
}
document.write(amond);


//중첩 for문을 활용하여 테이블을 구성하시오. (3행4열)
//<table border="1"> <tr> <td>
//각 박스 내부에 "0 행 0열" 문자를 넣어서 구분할 것


var $b = "<table border='1'>";
for(var i = 1; i < 4; i++){
    $b += "<tr>"; 
    for(var j = 1; j < 5; j++){
        $b += "<td>" + i + "행" + j + "열</td>";
    }
    $b += "</tr>";
}
$b += "</table>"

console.log($b);
document.write($b);

var $b = "<table border='1'>";
for(var i = 1; i <= 4; i++){
    $b += "<tr>"; 
    for(var j = 1; j <= 7; j++){
        $b += "<td>" + i + "행" + j + "열</td>";
    }
    $b += "</tr>";
}
$b += "</table>"

document.write($b);

//구구단 구성(2단 ~ 9단)
for(i = 2; i <= 9; i++){
    document.write("<h3>"+ i +"단</h3>");
    for(j = 1; j <= 9; j++){
        document.write(i + " x " + j + " = " + (i * j), "<br>");
    }
}

         
// var $gugu = Number(prompt("구구단 몇 단을 생성할까요?", "2"));
// document.write("<h4>선택한 단 " + $gugu + "단</h4>");
// for(var p = 1; p <= 9; p++){
//     document.write($gugu + " × " + p + " = " + $gugu * p, "<br>");
// }


// //

// var g2 = Number(prompt("몇단부터 필요하십니까?", ""));

// for(i = g2; i <= 9; i++){
//     document.write("<h3>"+ i +"단</h3>");
//     for(j = 1; j <= 9; j++){
//         document.write(i + " x " + j + " = " + (i * j), "<br>");
//     }
// }





//while 문의 용도 (데이터가 존재하면 내부의 실행문을 반복할 수도 있음)
//데이터 값이 0이라면 조건식의 입장에서는 false
//데이터 값이 0이 아니라면 조건식 입장에서는 true


//데이터 값이 문자형으로 실존하지 않다("")면 false
//데이터 값이 문자형으로 실제로 존재("데이터 값")한다면 true


var dbNum = "데이터 값";

while(dbNum){


    console.log("while 반복문 실행!");
    break;


}
//while 문은 조건식 내부에 값이 존재하면 그만큼 반복하여 실행을 할 수 있는 구성도 가능