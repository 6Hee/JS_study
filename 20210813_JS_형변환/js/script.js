document.write("<h2>형변환 - 암시적 형변환 / 명시적 형변환</h2>");
document.write("<h2>암시적 형변환 : 자바스크립트 엔진이 자동으로 변환시키는 과정</h2>");


var num1 = 10 + "12";
console.log(num1); // 1012(문자형 데이터)
console.log(typeof num1); // string
// "문자" + 숫자 = 연산 불가 (데이터 타입은 문자형)
// 숫자 + "문자" = 연산 불가 (데이터 타입은 문자형)



var num2_1 = 10 - "12";
console.log(num2_1); // -2
console.log(typeof num2_1); // //number



var num2_2 = "10" - 12;
console.log(num2_2); // -2
console.log(typeof num2_2); // number
//"문자" - 숫자 = 연산됨 (데이터 타입은 숫자형)
//숫자 - "문자" = 연산됨 (데이터 타입은 숫자형)



var num3_1 = 12 + false;
console.log(num3_1); //12
console.log(typeof num3_1); //number



var num3_2 = 12 + true; //true = 1
console.log(num3_2);  //13
console.log(typeof num3_2);  //number



var num3_3 = "12" + false;
console.log(num3_3); // 12false
console.log(typeof num3_3); // string



var num3_4 = "12" + true;
console.log(num3_4); // 12true
console.log(typeof num3_4); // string



var num3_5 = true + 12;
console.log(num3_5); // 13
console.log(typeof num3_5); // number



var num3_6 = 12 - true;
console.log(num3_6); // 11
console.log(typeof num3_6); // number



var num3_7 = "12" - true;
console.log(num3_7); //11
console.log(typeof num3_7); //number


//"문자" + boolean = 연산불가(데이터 타입은 문자형)
//"문자" - boolean = 연산가능(데이터 타입은 숫자형)

//숫자 + boolean = 연산가능(데이터 타입은 숫자형)
//숫자 - boolean = 연산가능(데이터 타입은 숫자형)


//만약, 데이터가 존재한다면 = 1 = (변수에 저장) => $data
//if($data){ ... }






document.write("<h3>명시적 형변환 : 메서드(~해야 한다라는 명령)를 통해서 강제로 형태를 변경하는 것을 말함</h3>");

document.write("<h4>숫자를 문자로 변경</h4>");


var $numToStr = 10000; //숫자형

var $ch_numToStr1 = String($numToStr); // String(숫자형데이터)  --> 문자형 데이터로 변환
//String(변수) 는 문자 객체를 생성하는 내장 메서드이자 내장함수
//String() : 문자 객체의 정의.. 지금부터 문자 객체를 메모리의 한 공간에 담을 거예요.

document.write("$ch_numToStr1의 변환된 데이터의 형태 : " + typeof $ch_numToStr1, "<br>"); //string


var $ch_numToStr2 = toString($numToStr);  //코딩의 구문 중간에 메서드를 설치하면 문자로 변경이 가능
document.write("$ch_numToStr2의 변환된 데이터의 형태 : " +typeof $ch_numToStr2, "<br>"); //string



document.write("<h4>문자를 숫자로 변경</h4>");
var $strToNum = "1234.5678";

//수
var $chNumber_strToNum = Number($strToNum);
document.write($chNumber_strToNum, "<br>"); //1234.5678
document.write("$chNumber_strToNum의 변환된 데이터의 형태 : " +typeof $chNumber_strToNum, "<br>"); //Number


//정수
var $chInt_strToNum = parseInt($strToNum);
document.write($chInt_strToNum, "<br>");  //1234 (소수점 이하 절삭, 반올림 없음)
document.write("$chInt_strToNum의 변환된 데이터의 형태 : " +typeof $chInt_strToNum, "<br>"); //Number


//실수
var $chFloat_strToNum = parseFloat($strToNum);
document.write($chFloat_strToNum, "<br>");  //1234 (소수점 이하 절삭, 반올림 없음)
document.write("$chFloat_strToNum의 변환된 데이터의 형태 : " +typeof $chFloat_strToNum, "<br>"); //Number






var number1 = Number(prompt("첫 번째 숫자를 입력하세요.", ""));
var number2 = Number(prompt("두 번째 숫자를 입력하세요.", ""));
var sum = number1 + number2;
var subtract = number1 - number2;
alert("입력받은 수 : " + number1 + "," + number2 + "\n\nSUM : " + sum + "\nSUBTRACT : " + subtract);


/* JAVA (!= javascript)에서 수에 대한 정의 */
//[정수형 타입]
//byte : -128 ~ 127
//short : -32768 ~ 32767
//int : -21억 ~ 21억
//long : -9해 ~ 9해


//[실수형 타입]







