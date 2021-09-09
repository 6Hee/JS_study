document.write("<h3>문자객체 : 문자 데이터의 일반적인 또는 특정 정보를 받아옴 + 문자 데이터의 조작</h3>");

var $str = "have a good day";
var $charAt = $str.charAt(7);
console.log("인덱스 번호로 해당하는 문자 찾기 : " + $charAt);


// var $idNumber = ;


var $bad_str = "삐삐삐, 뽀뽀뽀, 뿌뿌뿌";
var search_word = $bad_str.indexOf("뿌뿌뿌");
console.log(search_word);  //10
console.log(typeof search_word); //number
if(search_word < 0){ //찾는 문자가 없음(욕설을 사용하지 않았음)
    console.log("당신의 글은 등록되었습니다.");
}else{
    console.log("고운말 쫌 씁시다~~~");
}


var jump_word_1 = $bad_str.indexOf("삐삐삐", 4);
console.log(jump_word_1); // -1
var jump_word_2 = $bad_str.indexOf("뿌뿌", 4);
console.log(jump_word_2); // 10


var $word = "nice thank you good cheer up";
var $last_word = $word.lastIndexOf("u");
console.log($last_word); //26 : 인덱스 번호는 고정(좌측부터 셈) + 맨 마지막 문장으로부터 찾기 시작
console.log(typeof $last_word); //number


var $hunmin = "우리말은 중국과 달라서...";
var $match_01 = $hunmin.match("호주");
console.log($match_01); //null
if($match_01 != null){
    console.log("당신이 검색한 결과가 존재합니다.");
}else{
    console.log("당신이 검색한 결과가 존재하지 않습니다.");
}


var $match_02 = $hunmin.match("중국");
console.log($match_02); //["중국", index: 5, input: "우리말은 중국과 달라서...", groups: undefined]
if($match_02 != null){ 
    console.log("당신이 검색한 결과가 존재합니다.");
}else{
    console.log("당신이 검색한 결과가 존재하지 않습니다.");
}



//========= replace ================/

var $origin_word = "Special Menu";
var $change_word = $origin_word.replace("Special", "Our");
console.log($change_word);

var buyPrice1 = "5,000";
var change_price1 = Number(buyPrice1.replace(",", ""));
console.log(change_price1); //
console.log(typeof change_price1); //


//문방구에서 샤프 5개(개당 가격이 1,000원)와 스케치북 2개 (개당 가격이 3,000원) 구입했음 총 합을 구하세요. 변수에는 각각 개당 가격을 저장(문자형 데이터)하고 진행한다. [결과] 현재 총 구입금액은 0000원 입니다.

var $sharp = "1,000";
var $sketch = "3,000";
console.log(typeof $sharp); //string

var chSharp = $sharp.replace(",", "");
console.log(typeof chSharp); //string
var chSketch = $sketch.replace(",", "");

var numChSharp = Number(chSharp);
console.log(numChSharp); // 1000(number);
var numChSketch = Number(chSketch);
console.log(numChSharp); // 3000(number);

var total_price = numChSharp * 5 + numChSketch * 2;
console.log(total_price); //11000(number)

//숫자의 세자리마다 쉼표를 붙이기 위한 전 단계 작업을 진행(문자형 데이터로 변환)

var str_total = String(total_price);
console.log(str_total); //string

///============================================//
var $sharp = "1,000";
var $sketch = "3,000";
var chSharp = Number($sharp.replace(",", ""));
var chSketch = Number($sketch.replace(",", ""));

var total_price = chSharp * 5 + chSketch * 2 ;

//============================================//

var $sharp = "1,000";
var $sketch = "3,000";
var total_price = Number($sharp.replace(",", "")) * 5 + Number($sketch.replace(",", "")) * 2 ;
var str_total = String(total_price);
console.log(str_total); //string

//============================================//

var $sharp = "1,000";
var $sketch = "3,000";
var str_price = String(Number($sharp.replace(",", "")) * 5 + Number($sketch.replace(",", "")) * 2);
console.log(str_total); //string

document.write("현재 총 구입금액은" + str_total + "원 입니다.", "<br>");





//2,000,000
var $num = "2,000,000";
var $ch_num = $num.replace(",", "");
console.log($ch_num); // 2000,000
var $chch_num = $ch_num.replace(",","");
console.log($chch_num); //2000000 => 단위에 따라서 이 방식을 진행할 수는 없다.


var $million = "2,000,000"
var $ch_million = $million.replace(/,/gi, "");;
console.log($ch_million); // 2000000

/*
[정규식 표현]
/,/ : ","의 의미
g : global 전역 검색 - 구성된 모든 것을 선택
i : 영문의 경우 대소문자를 구별하지 않겠다의 의미
*/


var $bad_reply = "뿌뿌뿌, 빠빠빠, 삐삐삐";
var $pure_reply = $bad_reply.replace("삐삐삐", "♥♥♥");
console.log($pure_reply);


//========= substr ================/

var $txt = "UIUX 디자인 퍼블리셔 프론트 엔드 개발";
var $my_sel = $txt.substr(9, 6);
console.log($my_sel);  //"퍼블리셔 프" : 공백문자도 인덱스번호와 마찬가지로 개수에 포함


var $end = $txt.substr(18, 2);
console.log($end);

//휴대폰 번호를 입력했는데 개인정보를 확인하고자 할 때 웹사이트에서는 번호 중에서 맨 뒷자리 4개를 ****로 표기를 해야한다면

var $phoneNumber = "01063660824"; //0106366****
var $final_phoneNumber = $phoneNumber.substr(0, 7);
console.log($final_phoneNumber); //0106366 (string)
console.log($final_phoneNumber + "****");


//01012345678, 010-1234-5678, 010 1234 5678, 010/1234/5678/ +00821012345678, +821012345678

var $phoneNumber = "+00821012345678"; //문자의 개수 : 15개
// var $phoneNumber = "010-1234-5678"; //문자의 개수 : 13개



var $final_phoneNumber = $phoneNumber.substr(0, $phoneNumber.length - 4); //현재 문자 객체가 갖고 있는 모든 글자를 반환(저장) 하겠다는 의미
console.log($final_phoneNumber);
// console.log($final_phoneNumber + "****");


//카드번호 1234-5678-9876-5432  ==> 1234-5678-****-****

var $cardNum = "1234-5678-9876-5432";

var $final_cardNum = $cardNum.substr(0, $cardNum.length - 9);
console.log($final_cardNum + "****-****");



//========= split ================/
var address = "서울시~서초구~서초동";
var $divide = address.split("~");  //특정 문자를 기준으로 각 문자를 배열 데이터로 분리하여 저장하겠다는 의미
console.log($divide); //["서울시", "서초구", "서초동"]
console.log($divide[1]); // string



//========= concat ================/
var $first_str = "빙그레 바나나 우유 ";
var $second_str = "맛있다~!!";
var $total_str = $first_str.concat($second_str);  // +=
console.log($total_str);

$first_str += $second_str;
console.log($first_str);

//상단에서 선언된 $divide의 내용을 문자와 문자의 결합으로 주소를 결합할 수 있음(주소-우편번호로 지정할 수 있는 주소 + 상세 주소)



//========= trim ================/
var $phone_first = "010 ";
var $trimNumber = $phone_first.trim();
console.log($trimNumber);

//검색바에서 "     검색어1" 입력시 : 사용자의 실수에 의해서 건너띄기를 했다면 그 부분은 제외시켜라


document.write("<h3>배열객체 : 필요한 만큼의 데이터 값을 하나의 변수에 저장할 수 있음</h3>");
//배열 데이터와 객체 데이터의 공통점 : 추가 생성이 가능하기 때문에 무한으로 내부 데이터를 담을 수 있음
//배열 데이터와 객체 데이터의 차이점 :
// - 객체 데이터 : key(분리공간의 항목이름)와 value(각 공간마다 담겨진 데이터 또는 함수구문)로 구성되어 있음. "변수명.name"을 호출하면 key가 작성된 순서와 상관없이 해당하는 value값(데이터)을 가져올 수 있음
// - 배열 데이터 : 각 데이터마다 지정된 순서인 인덱스번호가 붙는다. i++라는 증감연산자를 통해서 순차적으로 접근하는 패턴 구성이 원할하다.



var $kakao_arr = ["kakao.jpg", "카카오 스티커", "1,500원", "라이언"];
console.log($kakao_arr[0]);
console.log($kakao_arr[1]);
console.log($kakao_arr[2]);
console.log($kakao_arr[3]);
console.log($kakao_arr[4]); //값이 없음
document.write("<img class='kakao_img' src='./img/"+$kakao_arr[0]+"' >");
document.write("<h3>" + $kakao_arr[1] + "</h3>");
document.write("<p class='price'>"+$kakao_arr[2]+"</p>");
document.write("<p class='seller'>"+$kakao_arr[3]+"</p>");


//배열 데이터를 호출하는 과정에서 맨 좌측으로부터 인덱스번호가 0
//var $kakao_arr = [0번 인덱스 번호의 데이터, 1번 인덱스 번호의 데이터, 2번 인덱스 번호의 데이터, 3번 인덱스 번호의 데이터];

//배열 데이터를 활용하여 요일 정보를 한글로 표현
var $current = new Date();
var $day = $current.getDay(); // 일 : 0, 월 : 1, ..... 토 : 6  ===> 숫자형 데이터 0 ~ 6 
console.log($day);
var $yoil_arr = ["일", "월", "화", "수", "목", "금", "토"];  // ===> 각 인덱스 번호에 따른 문자형 데이터를 포함한 배열
var $yoil_img = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

document.write("오늘은 "+$yoil_arr[$day]+"요일입니다.", "<br>")
document.write("오늘은 <img src='./img/" + $yoil_img[$day] + ".gif'>", "<br>")


//런닝맨 멤버
var $member = ["유재석", "김종국", "하하", "송지효", "지석진", "양세찬", "전소민"];
document.write("이번 주 물폭탄 당첨자 : " + $member[1], "<br>");
document.write("런닝맨 멤버 : " +$member, "<br>");

var new_guest = "개리";
$member.push(new_guest); //push(새로운 데이터 또는 데이터 값을 갖고 있는 변수명) : 맨 마지막 인덱스에 새로운 데이터 추가 
document.write("런닝맨 멤버 : " +$member, "<br>");

$member.pop();  // 마지막 인덱스 번호를 삭제 (데이터를 삭제한다는 의미는 마지막 인덱스 번호 자체가 없어진다와 동일한 개념)
document.write("런닝맨 멤버 : " +$member, "<br>");

$member.shift(); //shift() : 맨 첫번째에 위치한 0번 인덱스 번호의 데이터를 삭제한다. (각 데이터에 대한 인덱스 번호가 변경 - 주의할 것!)
document.write("런닝맨 멤버 : " +$member, "<br>");

$member.unshift("유재석"); //unshift(새로운 데이터 또는 데이터 값을 갖고 있는 변수명) : 맨 첫번째 인덱스 번호의 이전에 새로운 데이터를 추가(각 데이터에 대한 인덱스 번호가 변경 - 주의할 것!)
document.write("런닝맨 멤버 : " +$member, "<br>");

document.write("현재 런닝맨 멤버 수 : " + $member.length, "<br>"); //반복문에서 배열 데이터 이용시 조건에 대한 역할을 담당함



//배열끼리 합치는 concat() 메서드

document.write("<h4>배열끼리 합치는 concat() 메서드</h4>");
var $chars = ["사과", "포도", "바나나"]
var $nums = [1, 2, 3];
var $numsChars = $nums.concat($chars);
document.write("$nums가 $chars를 합친 결과 값 : " +$numsChars, "<br>");
console.log($numsChars); //[1, 2, 3, "사과", "포도", "바나나"]

var $numsChars = $chars.concat($nums);
document.write("$charss가 $nums를 합친 결과 값 : " +$numsChars, "<br>");
console.log($numsChars); //["사과", "포도", "바나나", 1, 2, 3]

console.log($chars); //["사과", "포도", "바나나"]
console.log($nums); // [1, 2, 3]
//concat() 메서드는 새로운 데이터를 구성하지만 원본 데이터에는 영향을 주지 않는다. 



//배열 안의 데이터끼리 합치는 join() 메서드 : 하나의 문자열(문자형 데이터)로 만듬
document.write("<h4>배열 안의 데이터끼리 합치는 join() 메서드 : 하나의 문자열(문자형 데이터)로 만듬</h4>");

var $hero = ["배트맨", "슈퍼맨", "스파이더맨"];
var $movie = ["슈렉", "장화신은 고양이", "겨울왕국"];

var string1 = $hero.join();
console.log(string1); //배트맨,슈퍼맨,스파이더맨
console.log(typeof string1); //string
document.write("join() 메서드의 구분자가 없는 결과 : " +string1, "<br>");


var string2 = $movie.join("/");
console.log(string2); //슈렉/장화신은 고양이/겨울왕국
console.log(typeof string2); //string
document.write("join() 메서드의 구분자를 넣은 결과 : " +string2, "<br>");


//실습과제 : $hero에서 $movie를 배열끼리 합치고 각 내용을 문자형 데이터로 모두 반환시키되 각 데이터 사이의 공간에 "~" 이라는 문자를 붙여주세요.

var $hero = ["배트맨", "슈퍼맨", "스파이더맨"];
var $movie = ["슈렉", "장화신은 고양이", "겨울왕국"];
var $heroMovie = $hero.concat($movie).join("~");  // "."의 의미는 여러가지를 내포한다.
//메서드1().메서드2() : 메서드 1을 실행하고 그 다음에 메서드2를 실행해라. (체이닝(chain)기법)
console.log($heroMovie); //배트맨~슈퍼맨~스파이더맨~슈렉~장화신은 고양이~겨울왕국
console.log(typeof $heroMovie);  //string


var $result = $heroMovie.split("~");
console.log($result); //["배트맨", "슈퍼맨", "스파이더맨", "슈렉", "장화신은 고양이", "겨울왕국"]


//배열 데이터 내에서 원하는 위치에 요소(데이터)를 추가 / 삭제하는 splice() 메서드

document.write("<h4>배열 데이터 내에서 원하는 위치에 요소(데이터)를 추가 / 삭제하는 splice() 메서드</h4>");

document.write("<h5>인수가 1개인 경우, 배열변수명.splice(인덱스번호) : 배열데이터의 지정한 인덱스 번호부터 마지막 인덱스 번호까지 잘라서 반환. 원본 데이터는 잘려진 상태로 도출(==> 원본 데이터가 변경)</h5>");
var $numbers = [1, 2, 3, 4, 5];
var $oneSplice = $numbers.splice(2);
console.log($oneSplice); //[3, 4, 5]
document.write("splice(인덱스번호) 메서드 적용 후 반환된 배열 : " + $oneSplice, "<br>"); 
console.log($numbers); //[1, 2]
document.write("splice(인덱스번호) 메서드 적용 후 변경된 원본의 배열 : " + $numbers, "<br>"); 


document.write("<h5>인수가 2개인 경우, 배열변수명.splice(인덱스번호, 개수) : 배열데이터의 지정한 인덱스 번호부터 지정한 개수를 잘라서 반환. 원본 데이터는 잘려진 상태로 도출(==> 원본 데이터가 변경))</h5>");
var $study = ["HTML5", "CSS3", "Javascript", "SQL"];
var twoSplice = $study.splice(1, 2);
console.log(twoSplice);
document.write("splice(인덱스번호, 개수) 메서드 적용 후 반환된 배열 : " + twoSplice, "<br>"); 
console.log($study);
document.write("splice(인덱스번호, 개수) 메서드 적용 후 변경된 원본의 배열 : " + $study, "<br>"); 


document.write("<h5>인수가 3개인 경우, 배열변수명.splice(인덱스번호, 개수, 추가 데이터) : 배열데이터의 지정한 인덱스 번호부터 지정한 개수를 잘라서 반환. 원본 데이터에서는 잘려진 데이터의 자리에 추가 데이터가 적용되어 변경(==> 원본 데이터가 변경))</h5>");
var $device = ["iPhone12", "갤럭시21", "v90", "Macbook"];
var $threeSplice = $device.splice(1, 2, "iPad");
console.log($threeSplice); //["갤럭시21", "v90"]
document.write("splice(인덱스번호, 개수, 추가데이터) 메서드 적용 후 반환된 배열 : " + $threeSplice, "<br>"); 
console.log($device);  //["iPhone12", "iPad", "Macbook"]
document.write("splice(인덱스번호, 개수, 추가데이터) 메서드 적용 후 변경된 원본의 배열 : " + $device, "<br>");



//우리반에 학생이 5명이 존재합니다. ("영희", "수현", "하늘", "하나", "덕선")
//두명이 전학을 갔습니다. ("하늘", "하나")
//한 명이 전학을 왔습니다. ("보검") -> 전학을 간 학생의 자리에 앉았습니다.
//최종적으로 변경된 인원을 배열 데이터로 정렬한 후, 전학온 학생의 데이터 값을 배열의 인덱스 번호를 통해서 출력하세요.
//최종 출력 결과는 "보검"

var $attendance = ["영희", "수현", "하늘", "하나", "덕선"]
var $change = $attendance.splice(2, 2, "보검");
console.log($change); //["하늘", "하나"]
console.log($attendance); //["영희", "수현", "보검", "덕선"]
document.write("전학 온 학생 : " + $attendance[2], "<br>"); // 보검


//배열 데이터 = []; //배열 데이터로 선언하겠다는 의미
//배열 데이터 = [인덱스 번호0, 인덱스번호1, 인덱스번호2, .... 인덱스번호n];
//배열 데이터 = ["데이터0", "데이터1", "데이터2"];
//배열 데이터[1] ==> "데이터1"



//기존의 배열 데이터를 변경하지 않으면서 요소를 꺼내는 slice() 메서드
document.write("<h4>기존의 배열 데이터를 변경하지 않으면서 요소를 꺼내는 slice() 메서드</h4>");
document.write("<h5>[인수가 1개인 경우, 배열변수명.slice(인덱스번호) : 지정한 배열 인덱스번호의 데이터부터 마지막 데이터까지 꺼낸다. 원본에 저장된 데이터는 변동없음]</h5>");
var $color = ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE"];
var $oneSlice = $color.slice(2);
console.log($oneSlice);  //["YELLOW", "GREEN", "BLUE"]
document.write("slice(인덱스번호) 메서드 적용 후 반환된 배열 : " + $oneSlice, "<br>"); 
console.log($color);  //["RED", "ORANGE", "YELLOW", "GREEN", "BLUE"] 원본유지 !!



document.write("<h5>[인수가 2개인 경우, 배열변수명.slice(인덱스번호1, 인덱스번호2) : 지정한 배열 인덱스번호1번의 데이터부터 인덱스번호2번의 직전 데이터까지 꺼낸다. 원본에 저장된 데이터는 변동없음]</h5>");
var $color = ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE"];
var $twoSlice = $color.slice(2, 4);
console.log($twoSlice);  //["YELLOW", "GREEN"]
document.write("slice(인덱스번호1, 인덱스번호2) 메서드 적용 후 반환된 배열 : " + $twoSlice, "<br>");
console.log($color); // ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE"] 원본유지


//배열 데이터가 여러개의 변수명으로 분리되었다면 ... 쇼핑몰에서 카테고리 리스트
var $img = ["img-01.jpg", "img-02.jpg", "img-03.jpg", "img-04.jpg",];
var $title = ["상품1", "상품2", "상품3", "상품4"];
var $intro = ["소개1", "소개2", "소개3", "소개4"];
var $price = ["가격1", "가격2", "가격3", "가격4"];

//[여러가지 1차 배열 데이터로부터] 사진 및 타이틀과 소개 + 사진의 가격 구성을 한다는 입장에서 작성 (2번이라고 작성된 부분만 선택)
document.write("<img src='./img/"+$img[1]+"' style='width:100px;' >");
document.write("<h4>"+$title[1]+"</h4>");
document.write("<p>"+$intro[1]+"</p>");
document.write("<span>"+$price[1]+"</span>");


//2차 배열 = 배열 내부에 또 다른 형식으로 저장을 하여 활용하는 개념
document.write("<h4>2차 배열 = 배열 내부에 또 다른 형식으로 저장을 하여 활용하는 개념</h4>");
var $product = [
    ["img-01.jpg", "상품1", "소개1", "가격1"],  //1차 배열 입장에서 0번 인덱스
    ["img-02.jpg", "상품2", "소개2", "가격2"],  //1차 배열 입장에서 1번 인덱스 
    ["img-03.jpg", "상품3", "소개3", "가격3"],  //1차 배열 입장에서 2번 인덱스
    ["img-04.jpg", "상품4", "소개4", "가격4"]   //1차 배열 입장에서 3번 인덱스
];

//[2차 배열 데이터로부터] 사진 및 타이틀과 소개 + 사진의 가격 구성을 한다는 입장에서 작성 (2번이라고 작성된 부분만 선택함)
console.log($product[1]);     //["img_02.jpg", "상품2", "소개2", "가격2"]
console.log($product[1][0]);  //img_02.jpg
console.log($product[1][1]);  //상품2
console.log($product[1][2]);  //소개2
console.log($product[1][3]);  //가격2


document.write("<img src='./img/"+ $product[3][0] +"' style='width:100px;' >");
document.write("<h4>"+$product[3][1]+"</h4>");
document.write("<p>"+$product[3][2]+"</p>");
document.write("<span>"+$product[3][3]+"</span>");


var $kor_movie = [
    ["기생충", "송강호"],
    ["남산의 부장들", "이병헌"],
    ["사도", "유아인"]
];

//"이병헌"을 콘솔창에 출력하세요.
console.log($kor_movie[1][1]);

//2차 배열을 접근하는 과정에서 2차 배열의 패턴을 구성하는 것이 매우 중요!!
//2차 배열의 패턴 : [영화제목, 영화주인공]




//2중 배열(객체 배열) : 1차 배열 내부에 각 인덱스 번호마다 객체를 선언한다.
document.write("<h4>2중 배열(객체 배열) : 1차 배열 내부에 각 인덱스 번호마다 객체를 선언한다.</h4>");

//객체 배열의 형식과 호출
//객체
var hero = {
    name : "토마토 재배자",
    device : "호미"
}
console.log(hero.name);  //객체의 호출에 의해 "토마토 재배자" 라는 문자형 데이터를 가져온다.


//객체 배열의 형식
var $heroes_arr = [
    //1차 배열 기준으로 0번 인덱스번호
    {
        name : "불타는 검",
        job : "블랙나이트",
        device : "목검",
        level : 7
    },
    //1차 배열 기준으로 1번 인덱스번호
    {
        name : "무자비한 도적",
        job : "도적",
        device : "기본 단도",
        level : 3
    },
    //1차 배열 기준으로 2번 인덱스번호
    {
        name : "드래곤 위자드",
        job : "마법사",
        device : "지팡이",
        level : 9
    }
];

console.log($heroes_arr[1]);  //{name: "무자비한 도적", job: "도적", device: "기본 단도", level: 3}
console.log($heroes_arr[1].device);  //기본 단도


var $kor_MovieArr = [
    {
        $movieName : "기생충",
        $heroName : "송강호" 
    },
    {
        $movieName : "남산의 부장들",
        $heroName : "이병헌" 
    },
    {
        $movieName : "집으로",
        $heroName : "유승호" 
    },
];

//유승호 라는 데이터를 콘솔창에 가져오세요.
console.log($kor_MovieArr[2].$heroName);



//배열의 추가
var $fruit_1 = ["사과", "오렌지", "바나나", "배"];
$fruit_1.push("블루베리");
console.log($fruit_1); //["사과", "오렌지", "바나나", "배", "블루베리"]



//객체의 추가
var $fruit_2 = {
    과일1 : "자두",
    과일2 : "포도",
    과일3 : "복숭아"
};
$fruit_2.과일4 = "딸기";  //객체에 "과일4"라는 key 값을 생성한 후 그 데이터(value)로 "딸기"라는 문자형 데이터를 추가하세요.
console.log($fruit_2);  //{과일1: "자두", 과일2: "포도", 과일3: "복숭아", 과일4: "딸기"}




//2차 배열을 활용한 상품 리스트 구현하기
document.write("<h4>배열의 패턴화 적용</h4>")
//2차 배열의 패턴 정의(각 인덱스마다 들어가야할 데이터들을 배치)
//["이미지", "타이틀", "상품 내용", "가격정보"]
var pd_arr = [
    ["shop_01.jpg", "마마스 앤 파파스", "스너그 트레이드 완구 포함", "월 17,400원"],
    ["shop_02.jpg", "알집매트", "알집 꾸러기 소파", "월 7,400원"],
    ["shop_03.jpg", "알집매트", "알집 네오 소파", "월 8,300원"],
    ["shop_04.jpg", "알집매트", "알집 핑크폼소파", "월 9,100원"],
    ["shop_01.jpg", "마마스 앤 파파스", "스너그 트레이드 완구 포함", "월 17,400원"],
    ["shop_02.jpg", "알집매트", "알집 꾸러기 소파", "월 7,400원"],
    ["shop_03.jpg", "알집매트", "알집 네오 소파", "월 8,300원"],
    ["shop_04.jpg", "알집매트", "알집 핑크폼소파", "월 9,100원"],
];

console.log(pd_arr.length); //배열의 개수 8

var bongdari = "";
bongdari += `<section class="pd_cover">`;

for(i = 0; i < pd_arr.length; i++){
    bongdari += `

        <div class="box">
            <img src="./img/`+ pd_arr[i][0] +`" alt="">
            <h3>`+ pd_arr[i][1] +`</h3>
            <p class="cont">`+ pd_arr[i][2] +`</p>
            <p class="price">`+ pd_arr[i][3] +`</p>
        </div>
        
    `;
}

bongdari += '</section>';

document.write(bongdari);



/*
document.write('<section class="pd_cover">');

for(i = 0; i < pd_arr.length; i++){
    document.write('<div class="box red"><img src="./img/'+ pd_arr[i][0] +'" alt=""><h3>'+ pd_arr[i][1]+'</h3><p class="cont">'+ pd_arr[i][2]+'</p><p class="price">'+ pd_arr[i][3]+'</p></div>')
}
document.write('</section>');
*/

/*
for문의 1회차 접근 i = 0 ==> pd_arr[0][0]
for문의 2회차 접근 i = 1 ==> pd_arr[1][0]
for문의 3회차 접근 i = 2 ==> pd_arr[2][0]
for문의 4회차 접근 i = 3 ==> pd_arr[3][0]
*/


/* 
    <section class="pd_cover">

        <div class="box">
            <img src="./img/shop_01.jpg" alt="">
            <h3>상품 타이틀</h3>
            <p class="cont">상품 내용</p>
            <p class="price">상품 가격</p>
        </div>

    </section>
*/




document.write("<hr>");
//위의 패턴을 하나 더 적용하여, 객체 배열로 데이터를 구성한 후 각 공간에 이미지 및 텍스트를 배치해 주세요.(1행 4열로 구성) 샘플 {$img : "", $title : "", $cont : "", $price : ""}


var $aka = [
    {
        $img : "shop_01.jpg",
        $title : "마마스 앤 파파스",
        $cont : "스너그 트레이드 완구 포함",
        $price : "월 17,400원"
    },
    {
        $img : "shop_02.jpg",
        $title : "알집매트",
        $cont : "알집 꾸러기 소파",
        $price : "월 7,400원"
    },
    {
        $img : "shop_03.jpg",
        $title : "알집매트",
        $cont : "알집 네오 소파",
        $price : "월 8,400원"
    },
    {
        $img : "shop_04.jpg",
        $title : "알집매트",
        $cont : "알집 핑크폼소파",
        $price : "월 9,500원"
    }
]
console.log($aka);

var $vac = "";
$vac += `<section class="pd_cover">`;

for(i = 0; i < $aka.length; i++){
    $vac += `<div class="box">
        <img src="./img/`+ $aka[i].$img +`">
        <h3>`+ $aka[i].$title +`</h3>
        <p class="cont">`+ $aka[i].$cont +`</p>
        <p class="price">`+ $aka[i].$price +`</p>
    </div>`
}

$vac += `</section>`

document.write($vac);



//sort() : 기존의 배열 데이터를 어떤 기준을 갖고 재 정렬하겠다는 의미
document.write("<h4>sort에 대한 기능</h4>");
document.write("<h5>문자형태를 가진 배열은 아스키코드의 기준으로 정렬</h5>");
var $animal = ["monkey", "cat", "dog", "snake", "rabbit", "mouse"];
var $sort_01 = $animal.sort(); //a:97(10진수) ~ z:122(10진수) : 오름차순으로 정렬

console.log($sort_01); //["cat", "dog", "monkey", "mouse", "rabbit", "snake"]


document.write("<h5>숫자형태를 가진 배열은 함수값을 넣어서 오름차순 또는 내림차순으로 정리할 수 있음(Bubble sort)</h5>");
var $price_num = [10000, 5000, 7000, 8000, 3000, 9000, 2000];
var $sort_02 = $price_num.sort(); //숫자의 일부만을 갖고 정렬이 진행됨(사용불가)
console.log($sort_02); //[10000, 2000, 3000, 5000, 7000, 8000, 9000]

var $sort_03 = $price_num.sort(function(a, b){
    // return a - b;  //작은 숫자부터 정렬(최저가, 오래된 순서) 20210819 < 20210820 

    //10000 - 5000 = 5000(양의 정수) =sort() 함수 => 자리교체 발생 [5000, 10000, 7000, 8000, 3000, 9000, 2000]
    //10000 - 7000 = 3000(양의 정수) =sort() 함수 => 자리교체 발생 [5000, 7000, 10000, 8000, 3000, 9000, 2000]


    return b - a; // 큰 숫자부터 정렬



});
console.log($sort_03); //[2000, 3000, 5000, 7000, 8000, 9000, 10000] ... 오름차순(작은 숫자부터 큰 숫자로 정렬)
console.log($sort_03.reverse()); //[10000, 9000, 8000, 7000, 5000, 3000, 2000] ... 내림차순(큰 숫자부터 작은 숫자로 정렬)


document.write("<h5>문자형태(숫자를 포함한 문자형 데이터)를 가진 배열은 함수값을 넣어서 오름차순 또는 내림차순으로 정리할 수 있음(Bubble sort)</h5>");
var $str_price = ["3000", "15000", "4500"]
var $str_sort = $str_price.sort(function(k, m){
    return k - m;
});
console.log($str_sort);  //["3000", "4500", "15000"]

//sort()는 양의 정수로 돌려 받을때만 자리교체가 발생 <-> 음의 정수나 또는 0일 경우에는 자리교체 없음


//indexOf() : 동일한 인물이 초대가 되었다면 현재 값이 배열 데이터 내부에 존재하는지 또는 존재하지 않는지를 체크해주는 부분
var cart = []; //배열 형식을 갖고 있는 빈 배열 데이터
//마트에서 딸기를 담는다는 과정 
cart.push("딸기");
console.log(cart); //["딸기"]
//마트에서 다른 물건들을 카드에 담음
cart.push("바나나");
console.log(cart); // ["딸기", "바나나"]
cart.push("포테토칩");
console.log(cart); // ["딸기", "바나나", "포테토칩"]
cart.push("딸기");
console.log(cart); //["딸기", "바나나", "포테토칩", "딸기"]  ===> 불필요하게 중복된 데이터가 존재



//위의 배열 데이터에서 중복 현상을 제거
var cart_arr = ["딸기","바나나", "포테토칩"];
var nextProduct = "토마토";
if(cart_arr.indexOf(nextProduct) == -1){ //cart_arr의 기존 배열 데이터 서 nextProduct에 담긴 데이터가 없다면
    cart_arr.push(nextProduct); //cart_arr에 nextProduct에 담긴 데이터를 담아주세요.
}
console.log(cart_arr); // ["딸기", "바나나", "포테토칩", "토마토"]




var fruits = ["사과", "포도"];
var cart1 = fruits.indexOf("사과");
var cart2 = fruits.indexOf("오렌지"); //일치하는 단어(데이터)가 존재하지 않으면 -1로 반환된다.
var cart3 = fruits.indexOf("포도");  //일치하는 단어(데이터)가 존재하면 배열 데이터의 인덱스 번호를 반환
console.log(cart1); //0
console.log(cart2); //-1  ===> 찾아보았는데 데이터가 없어요~~!!
console.log(cart3); //1

//랜덤으로 숫자를 로또 번호인 1 ~ 46 뽑는데, 동일한 숫자가 도출될 수도 있음
//6, 9, 13, 9, 25, 21

//병원 사이트에서 퀵 메뉴 자바스크립트로 구성하기

//<img src="./img/quick_01_off.png" onmouseover="this.src='./img/quick_01_on.png'" onmouseout="this.src='./img/quick_01_off.png'" alt="">

var quick_arr = ["quick_01", "quick_02", "quick_03", "quick_04", "quick_05", "quick_06", "quick_07", "quick_08", "quick_09", "quick_10", "quick_11", "quick_12", ];


var $quick_icon = "";
$quick_icon += `<div class="wrap">`;

for(i = 0; i < quick_arr.length; i++){
    $quick_icon += `<img src="./img/`+ quick_arr[i] +`_off.png" onmouseover="this.src='./img/`+ quick_arr[i] +`_on.png'" onmouseout="this.src='./img/`+ quick_arr[i] +`_off.png'" alt="">`
}


$quick_icon += `</div>`;
document.write($quick_icon);



//로또번호 1~46 값을 랜덤으로 6개를 뽑는데, 중복되는 사항 없게 만들고, 순서대로 접근
var lotto = [];
var num;
while(lotto.length < 6){
    num = Math.floor(Math.random() * 46) + 1; //1 ~ 46
    //최소값 0.00046
    //최대값 45.9954
    if(lotto.indexOf(num) == -1){
        lotto.push(num);
    }
    console.log(lotto);
}
console.log(lotto);

/*
var lotto_arrange_1 = lotto.sort(); //각 데이터별로 첫번째를 기준으로 정렬
//위 방식으로 선언되는 대표적인 예시 : 알파벳순으로 정렬, 가나다순으로 정렬
*/

//정렬 단계에서 각 데이터별로 접근을 시켜서 비교
var lotto_arrange_2 = lotto.sort(function(a,b){
    return a - b; 
    //(42 - 27) : 양의 정수 => 자리를 바꿔라
    //(27 - 42) : 음의 정수 => 자리를 바꾸지 않는다

    //return 1 => true
    //return - 1 => false
});
console.log(lotto_arrange_2);





/*
() : 소괄호
{} : 중괄호
[] : 대괄호
<> : 각괄호

[HTML에서 괄호의 사용 용도]
() : 사용 안함
{} : 사용 안함
[] : 사용 안함
<> : 태그로 사용

[CSS3에서 괄호의 사용 용도]
() : nth-child(), url(), calc(), rotate(), ...정보를 담기 위한 공간으로 사용
{} : 스타일 선언을 하기 위해서 사용(스타일에 대한 그룹핑 작업이 가능). header{height : 60px;}
[] : div[class*="box"] : 속성을 선택하여 선택자로 구성하기 위해서 사용
<> : div > .img_part 


[자바스크립트에서 괄호의 사용 용도]
() : 연산자에서 사용, write(변수명) : 변수명 안에 담긴 데이터를 작성하라. 명령(메서드)
{} : 객체 선언 / if(조건식){실행문} : 저장공간을 지칭
[] : 배열
<> : 비교연산자


$color.slice(2) : $color의 배열 데이터를 자르겠다는 명령
$color.slice[2] : $color의 객체 데이터 내의 slice라는 key 중에서 value(배열 데이터)안의 2번 인덱스를 찾아가겠다는 의미 



*/