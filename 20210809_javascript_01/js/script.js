//[외부 스크립트 : html문서와 연동이 필수다]
document.write("외부 스크립트의 연동~!!!", "<br>")
//한 줄 주석처리
/* 
    여러줄 주석처리1
    여러줄 주석처리2
    여러줄 주석처리3
    여러줄 주석처리4
*/
//에러처리 : 정의된 적이 없음

/*
[자바 스크립트의 구성]
c언어 기반인 기초문법 - 모든 컴퓨터 언어에서 대부분 구조가 동일
기초문법 : 변수선언(데이터의 구분), 연산자(산술연산자, 대입연산자, 복합대입연산자, 논리연산자, 문자결합연산자, 증감연산자...), 제어문(조건문, 선택문, 반복문), 데이터 형변환

객체 모델 : 날짜 객체, 숫자 객체, 문자 객체, 배열 객체, 인스턴스 객체
BOM(Browser Object Model) : <html>, <body> 태그 내부에 작성된 문서를 제외한 브라우저의 환경적인 요소의 조정을 선언할 때 사용
DOM(Document Object Model) : <html>, <body> 태그 내부에 작성된 문서에서 필요한 요소를 선언하여 조정할 때 사용
함수 f(x) = x + 1 = ?  => x라는 실존하는 행동 또는 값이 들어온다면 그 결과값을 출력해라(함수 메모리)
이벤트 - 사용자가 직접 무언가를 행동으로 진행했을 때 발생하는 일련의 수행결과를 가리킨다.

ES6에서 파생되는 부분...
*/

//[자바 스크립트를 통한 브라우저에서 제공되는 팝업창 형태]
//#1. 경고창 : 경고 메세지를 제공
//alert("이곳은 경고창입니다."); //개발자 설정해 놓은 기준 범위를 초과하였을 때 화면에 경고창을 띄운다. 예시, "아이디 값이 없습니다."

//#2. 입력창 : 무언가에 대한 정의(요청-request)에 대한 입력(응답-response)을 받고자 할 때 사용
//prompt("당신은 하루에 얼마나 걷나요?", "10000");
//prompt("질문내용,""답변의 초기값(추후에 변경 가능"); 
//prompt 창의 입력후 진행되는 결과값은 변수의 데이터(string)로 존재한다.

//#3. 확인창 : 확인 및 취소라는 버튼 존재
//confirm("정말 회원 탈퇴하실 건가요?");
//confirm 창의 진행 결과값은 true 또는 false라는 개념으로 진행(boolean)

//#4. 변수 => 그릇. 그릇의 내용물은 언제든지 바꿀 수 있음(메모리가 존재)
//변수의 구성 : var 변수명 = 변수값;
document.write("<h3>변수</h3>");

var order = "자장면";
document.write(order, "<br>"); //자장면
order = "팔보채"; //기존 order 변수명(그릇명)에 담긴 내용물을 변경하겠다는 의미.
document.write(order, "<br>"); //팔보채
document.write(order1, "<br>"); //order1이라는 변수(그릇)명은 위에서 선언된 적이 없기 때문에 에러발생!!

var order1 = "짬뽕"; //order1에 "짬뽕"이라는 데이터를 담은 상태
document.write(order1, "<br>"); //짬뽕
var order1 = "유산슬"; //기존의 order1이라는 그릇을 깨고나서 다시 그릇을 만들고 이름을 order1으로 명명한 상태
document.write(order1, "<br>"); //유산슬

//변수의 값을 출력한다는 것은 최종적으로 선언된 값을 출력한다. 출력 시점에 따라 결과물이 달라짐

//게임 캐릭터 이름 만들기
var myhero = "나이트"; //초기에 선언된 변수와 변수값
myhero = "토마토재배자"; //나중에 변수값을 변경(회원정보 수정과 동일)
document.write("나의 캐릭터 이름 : " + myhero, "<br>");


//카톡 채팅창 구성하여 이후에 문장 작성하기 
var msg; //채팅 내용을 담을 수 있는 변수명만 선언(빈 입력창) = > 초기에 변수명만 
msg = "오늘 점심은 뭐먹지?";
document.write("홍길동 : " + msg, "<br>");



//#5. 변수명 선언시 주의사항
//#5-1. 대소문자를 구별하여 작성한다.
var num = 17;
document.write(num, "<br>")  //17

//#5-2. 변수명의 첫 글자는 '$', '_', '영문'만 작성할 수 있음
//var &12 = 12; //문법 에러 발생
//document.write(&12, "<br>");

var $12 = 12;
document.write($12, "<br>");
var _fav = "아이스 아메리카노";
document.write(_fav, "<br>");


//#5-3. 변수명 내(첫글자 제외)에는 '$', '_', '영문','숫자' 포함할 수 있음
var num$32 = 32;
document.write(num$32, "<br>");
var apple_1 = "사과 한 개";
document.write(apple_1, "<br>");
//var orange-1 = "오렌지 박스"; //문법에러 발생!
//document.write(orange-1, "<br>");

var 과일 = "포도";
document.write(과일, "<br>");


//복수의 변수명을 선언하는 것은 불가능?
//var a b = "북어국";  //문법에러 발생
//document.write(a b, "<br>");
var a, b = "북어국";
document.write(a, "<br>"); //undefined
document.write(b, "<br>"); //북어국
//var a, b = "미역국", "북어국";
//document.write(a, "<br>"); 
//document.write(b, "<br>"); 
//복수의 변수를 한번에 선언하고자 할 때는 초기 변수명만 선언하고 나중에 그 테이터들을 각각 담아준다.
var a, b;
a = "미역국";
b = "해장국";
document.write(a, "<br>");
document.write(b, "<br>");

//#5-4. 변수명에는 예약어를 사용할 수 없음 ==> 첫글자에 $라는 문자를 붙여서 사용한다.(예약어 사용을 피할 수 있는 방법)
var $document = "이곳은 문서공간 객체입니다.";
document.write($document, "<br>");


//#6. 문자형 데이터(string) : 변수의 값에 '데이터'(작은 따옴표) 또는 "데이터"(큰 따옴표)로 감싸진 형태의 데이터를 가리킴
var muhanTop = "유재석";
muhanTop = "박명수";
document.write("무한도전의 1인자" + muhanTop, "<br>");
var thisYear = "2021";
document.write("올해의 연도 : " + thisYear + "년", "<br>");

var nextYear = thisYear + 1;
document.write("내년의 연도 : " + nextYear + "년", "<br>"); //"2021" + 1 =(연산 불가능한 존재) = 20211 

//태그를 포함한 문자형 데이터를 브라우저에 뿌려주기
var $str_title = "<h3 class='title'>카카오 프렌즈</h3>";
document.write($str_title);

var $str_img = "<img src='./img/kakao.gif'>"; //상대 경로에 대한 위치를 반드시 파악할 것!!
document.write($str_img, "<br>")

var img_source = "img_1.jpg"; //파일명
var $str_bg = "<div class='land_01' style='background-image: url(./img/" + img_source + ")'></div>";  //html의 구조
document.write($str_bg);


//#7. 숫자형 데이터 : 연산이 가능한 데이터를 가리킴.
var thisYear = "2021"; //문자형 데이터
var thisYear = Number("2021"); //숫자형 데이터 2021 
//Number() 자바스크립트 내장함수 : 문자형 데이터를 숫자형 데이터로 변환(형변환)
var nextYear = thisYear + 1;
document.write("내년의 연도 : " + nextYear + "년", "<br>");

//수 > 실수 > 정수

//[문자형 데이터를 숫자형 데이터로 변경하는 방법]
//##1. Number("3.14")           문자형 데이터를 숫자형 데이터로 변경
var $no_01 = Number("3.14");
document.write($no_01, "<br>");
//##2. parseFloat("3.14");      문자형 데이터를 실수형 데이터로 변경
var $no_02 = parseFloat("3.14");
document.write($no_02, "<br>");
//##3. parseInt("3.14");        문자형 데이터를 정수형 데이터로 변경
var $no_03 = parseInt("3.54");
document.write($no_03, "<br>");


//#8. 논리형(Boolean) 데이터 : 진실(true) 또는 거짓(false)
var thanNum = 24 < 13;
document.write("두 수의 비교 결과 : " + thanNum, "<br>");

//var 오렌지 = 오렌지1;
//document.write(오렌지, "<br>");
var txt = true;
document.write(txt, "<br>");

//페이스북 가입연령 제한
var kidAge = 12;
var facebookRegister = kidAge > 14;  //12 > 14  ==> false
document.write("당신의 페이스북 가입 가능 여부 : " + facebookRegister, "<br>");


var userId = "";  //회원가입 과정에서 아이디를 작성하지 않은 경우
var bool_id = Boolean(userId);
document.write("회원의 아이디 입력창의 작성 유무 : " + bool_id, "<br>");

//카톡에서 어떠한 입력값도 작성하지 않고 "전송"이라는 버튼을 눌렀을 때 
var bool_01 = Boolean("");
document.write(bool_01, "<br>");

var bool_02 = Boolean("솜사탕");
document.write(bool_02, "<br>");
//Boolean() 내장함수는 내부에 값이 존재하면 true, 없으면 false

//#9-1. undefined : 변수명만 선언하고 어떠한 값도 대입하지 않은 상태
var boul;
document.write(boul, "<br>"); //아직 어떤 데이터를 갖고 있는지를 모름 => undefined
boul = "샐러드";
document.write(boul, "<br>");

//#9-2. null : 처음부터 값이 유효한 값이 아니거나, 또는 값이 없다라고 선언한 상태
var noValue = null;
document.write(noValue, "<br>");


//데이터 값 중에서 큰 따옴표 없이 문자만 값으로 인정받는 데이터들 : true, false, null

console.log("문자형 데이터"); //문자형 데이터는 콘솔창에서 검정색 글씨로 표현
console.log(1000); //숫자형 데이터는 콘솔창에서 파란색 글씨로 표현

//#10. 데이터 타입의 추출
var txtStr = "자바스크립트";
document.write(typeof txtStr, "<br>");  //string(문자형 데이터)

var txtNum = Number("2021");
document.write(typeof txtNum, "<br>"); //number(숫자형 데이터)

var txtBool = false;
document.write(typeof txtBool, "<br>"); //boolean(논리형 데이터)

var txtUndefined;
document.write(typeof txtUndefined, "<br>"); //undefined

var txtNull = null;
document.write(typeof txtNull, "<br>"); //object : 값은 없으나 어떤 형태가 존재한 객체 형태를 띄기 때문에 object로 출력이 됨


//#11. console 창에 어떤 결과값에 대한 기록물을 남기고자 할 때. console.log(변수명)
//#11-1. 데이터 값 확인용

var result = 124 + 100;
console.log(result);

var myPrice = 19000;
var myEach = 3;
var total_price = myPrice + myEach



