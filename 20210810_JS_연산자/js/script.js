document.write("<h2>연산자</h2>");

//#1. 산술연산자 : 무조건 숫자형 데이터만 가능
document.write("<h3>산술연산자</h3>");
var $num_01 = 12;
var $num_02 = 5;

var rst_01 = $num_01 + $num_02;
document.write("더한 값 : " + rst_01, "<br>");

var rst_02 = $num_01 - $num_02;
document.write("뺀 값 : " + rst_02, "<br>");

var rst_03 = $num_01 * $num_02;
document.write("곱한 값 : " + rst_03, "<br>");

var rst_04 = $num_01 / $num_02;
document.write("나눈 값 : " + rst_04, "<br>");

var rst_05 = $num_01 % $num_02;
document.write("나머지값 : " + rst_05, "<br>");
//나머지값은 피연산자 이상의 값을 가져올 수 없다.
/*

    11%5 = 1
    12%5 = 2
    13%5 = 3
    14%5 = 4
    15%5 = 0

*/

//남성(1, 3)인가? 또는 여성(2, 4)인가?
var gender = 1;
document.write(gender % 2, "<br>");
//결과 값이 1이라면 남성/ 결과값이 0이라면 여성 (성별 구분 가능 - 마케팅 차원에서 활요할 부분)


//#2. 문자결합연산자 : 문자형+문자형=문자형 / 문자형+숫자형=문자형
document.write("<h3>문자결합연산자</h3>");
var string_01 = "1200";
var string_02 = "2400";
var number_01 = 1200;

var sum_str = string_01 + string_02;
document.write(sum_str, "<br>");
document.write(typeof sum_str, "<br>"); //string

var sum_multi = string_01 + number_01;
document.write(sum_multi, "<br>");
document.write(typeof sum_multi, "<br>"); //string


var $str_01 = "빙그레";
var $str_02 = "바나나 우유";
var $num_01 = 500;
var $str_03 = "ml ";
var $num_02 = 1;
var $num_03 = 1;
var $str_04 = "개";


var $result = $str_01 + $str_02 + $num_01 + $str_03 + ($num_02 + $num_03) + $str_04;
document.write($result, "<br>");

//() : 우선 결합

//#3. 복합대입연산자
document.write("<h3>복합대입연산자</h3>");
//대입연산자(var 변수명 = 데이터 또는 또다른 변수명)
var $location = "강남역";
var your_location =  $location;
document.write(your_location, "<br>");

//복합대입연산자
var $no_01 = 24;
var $no_02 = 8;

$no_01 += $no_02;  //$no_01 = $no_01 + $no_02 = 24 + 8 ==> 32
document.write($no_01, "<br>"); //32

$no_01 -= $no_02;   //$no_01 = $no_01 - $no_02 = 32 - 8 ==> 24
document.write($no_01, "<br>"); //24

$no_01 *= $no_02;   //$no_01 = $no_01 * $no_02 = 24 * 8 ==> 192
document.write($no_01, "<br>"); //192

$no_01 /= $no_02;
document.write($no_01, "<br>");

$no_01 %= $no_02;
document.write($no_01, "<br>");




//복합대입연산자 중에서 가장 중요한 파트는 문자간의 연속성을 갖고 있는 결합

var $txt = "a";
$txt += "b" //$txt = $txt + "b" = "ab"
console.log($txt);
$txt += "c"; //$txt = $txt + "c" = "ab" + "c" = "abc"
console.log($txt); //abc
$txt += "d"; // $txt = $txt + "d" = "abc" + "d" = "abcd"
console.log($txt); //abcd






//복합대입연산에서 문자간의 결합을 알고 있다면 초기변수명만 선언하지 말 것!
var txt_1;          //데이터와 형태가 정의되지 않은 undefined
txt_1 += "김준희";  //txt_1 = txt_1 + "김준희" = undefined + "김준희"
console.log(txt_1) //undefined김준희


var txt_2 = "";     //데이터의 값은 존재하지 않지만 문자형 데이터임을 정의해줌
txt_2 += "김준희";  //txt_2 = txt_2 + "김준희" = "" + "김준희"
console.log(txt_2); // 김준희






//복합대입연산자를 활용한 테이블 구성하기(<table>~<tr>~<td> : 1행 3열)
var $t = "<table border='1'>";
$t += "<tr>";  //$t = $t + "<tr>" = "<table border='1'>" + "<tr>" ==> "<table border='1'><tr>"
$t += "<td>1</td>"; //<table border='1'><tr><td>1<td>
$t += "<td>2</td>"; //<table border='1'><tr><td>1<td><td>2<td>
$t += "<td>3</td>"; //<table border='1'><tr><td>1<td><td>2<td><td>3<td>
$t += "</tr>";     //<table border='1'><tr><td>1<td><td>2<td><td>3<td></tr>
$t += "</table>";  //<table border='1'><tr><td>1<td><td>2<td><td>3<td></tr></table>

document.write($t);
console.log($t); 




//복합대입연산자를 활용한 상품박스 구성하기
var $pd = ""; //초기 변수명만 선언
$pd += "<div class='frame'>";
$pd += "<div class='box'></div>";
$pd += "<div class='box'></div>";
$pd += "<div class='box'></div>";
$pd += "<div class='box'></div>";
$pd += "</div>";

document.write($pd);


//복합 대입연산자를 활용하여 1~10까지 더한 총 값을 산출하시오

var $plus = 1;
$plus += 2;
$plus += 3;
$plus += 4;
$plus += 5;
$plus += 6;
$plus += 7;
$plus += 8;
$plus += 9;
$plus += 10;

console.log($plus);



//#4. 증감연산자 : 증가 연산자(1씩 더한다.) / 감소 연산자(1씩 뺀다.)
document.write("<h3>증감 연산자</h3>");
var $num = 12;
document.write($num, "<br>"); //12
$num++; //$num = $num + 1 = 12 + 1 = 13
document.write($num, "<br>");
++$num; //$num = $num + 1 = 13 + 1 = 14
document.write($num, "<br>");
$num--; //$num = $num - 1 = 14 - 1 = 13
document.write($num, "<br>"); //13
--$num; //$num = $num - 1 = 13 - 1 = 12
document.write($num, "<br>"); //12

//증감연산자 - 선행처리 vs 후행처리 
var $a = 10;
var $b;
$b = ++$a; //선행처리 : 먼저 증가시켜 놓고 $b에 저장
document.write("$a의 결과값 : " +$a, "<br>"); 
document.write("$b의 결과값 : " +$b, "<br>"); 

var $c = 10;
var $d;
$d = $c++; //후행처리 : $c를 증가시키기 전에 $d에 저장을 시킴. 나중에 본인인 $c의 값을 1 증가시키미
document.write("$c의 결과값 : " +$c, "<br>"); 
document.write("$d 결과값 : " +$d, "<br>"); 

/*
[후행처리 단계]
*/

var a = 22;
var a = a++; // = 의 좌측 > 실존메모리 / = 의 우측 temporary 
var b = a--;

document.write(b);

//#5. 비교연산자 : 결과값이 true 또는 false
document.write("<h3>비교연산자</h3>");
var $p = 10;
var $q = 12;
var $r = "10";
var $result_than;
$result_than = $p <= $q;// 10 <= 12 true
document.write($result_than, "<br>");

$result_than = $r <= $q;
document.write($result_than, "<br>"); //true... javascript의 취약점

$result_than = $p == $r;
document.write($result_than, "<br>"); //true
//최종값이 동일한 경우, true로 도출. 브라우저 상에서 값이 차이가 없을 경우 동일하다고 판단

$result_than = $p === $r; // 10 === "10"
document.write($result_than, "<br>"); //false
//보여지는 값이 같더라도 데이터의 형식이 다르면 다른 값으로 판단 (데이터의 형식까지 검토)

/* 
[부등호 사용시 주의사항]
A >= B : A는 B 이상이다. (○)
A => B : Javascript 문법(ECMAScript 2015년 이후 버전 - ES6)상에서 화살표 함수(Arrow Function)의 축약어로 사용 /A라는 매개변수를 대입하고 B라는 값을 돌려달라는 의미(×)

*/


//#6. 논리연산자 : OR 연산자, and 연산자, 부정 연산자=> 결과값이 true 또는 false
document.write("<h3>논리연산자</h3>");
var $s = 10;
var $t = 12;
var $u = 14;
document.write($s > $t || $t < $u, "<br>"); 
//(10 > 12) false || (12 < 14) true = true
//or 검색 - 구글 검색 : 단어가 많으면 많을 수록 검색의 결과는 광범위해짐
//or 연산자는 true를 찾기 시작함

document.write($s > $t && $t < $u, "<br>"); 
//(10 > 12) false && (12 < 14) true = false
//and 검색 - 하나투어 검색 : 단어가 많으면 많을 수록 검색의 결과는 좁혀진다.
//and 연산자는 false를 찾기 시작함 = > 처음부터 확실한 false로 도출되는 데이터는 지양


//부정연산자 (true -> false / false -> true)
var $v = 14;
var $w = $v == 13; //false
document.write("$w의 초기 결과값 : " +$w, "<br>");
document.write("$w의 부정연산 결과값 : " +!($w), "<br>");


//네이버에서 로그인 된 상태가 아니라면 메일이라는 링크버튼을 보여주지 않는다. !($user_id) : 세션 스토리지에서 아이디 값이 존재하지 않다면 



//#7. 삼항조건연산자 : 조건식에 따라서 true 또는 false를 판단하여 지정된 실행문을 선택하여 구현
document.write("<h3>삼항조건연산자</h3>");
var $x = 30;
var $y = 37;
$x > $y ? document.write("조건식의 결과값은 true 입니다.", "<br>") : document.write("조건식의 결과값은 false입니다.", "<br>");
//조건식 ? 실행문1 : 실행문2
//조건식이 참(true)이라면 실행문1을 실행시킨다.
//조건식이 거짓(true)이라면 실행문2을 실행시킨다.

//응용파트 : airbnb의 회원 넘버(id 번호) 호스트(첫번째 자리에 홀수를 부여) / 게스트(첫번째 자리에 짝수를 부여) 구별
var $f_customer = 1;
$f_customer % 2 == 0 ? document.write("게스트", "<br>") : document.write("호스트", "<br>");
//고객에게 할당된 번호가 짝수일 경우, 게스트 UI와 관련한 메뉴를 보여준다.
//고객에게 할당된 번호가 홀수일 경우, 호스트 UI와 관련한 메뉴를 보여준다.


