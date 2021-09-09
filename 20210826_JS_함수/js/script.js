//f(x) = x + 1 => x = 1이 적용되었다면
/*
[함수의 구성]
    - 함수구문(개발자가 설정한 메모리) ==> 함수가 호출될 때까지 기다린다.
    - 함수 호출문 ==> 사용자가 어떤 액션(함수 호출)을 취할 때 함수구문을 작동시킬 수 있음 (호출벨을 누르는 액션)

==> 함수 호출 => 대기하고 있던 함수구문 동작을 실행한다.
*/


//[일반적인 함수 - 직접 호출]
//#1. 함수구문을 작성한다. (대기하고 있는 메모리)
function call(){
    console.log("함수문 실행");
}
//#2. 함수 호출문 (함수 구문 내부의 실행문을 돌리기 위한 호출)
call();  //1차 호출문
call();  //2차 호출문

//[익명함수 - 간접호출]
//#1. 함수구문을 작성한다. (대기하고 있는 메모리)
//a = f(x)
var call_who = function(){
    console.log("익명함수 호출");
}
//#2. 함수 호출문 (함수 구문 내부의 실행문을 돌리기 위한 호출)
call_who(); //1차 호출문
call_who(); //2차 호출문
console.log(call_who); //call_who에 대입된 함수구문 지칭한다.
/*
ƒ (){
    console.log("익명함수 호출");
}
*/
console.log(call_who()); //call_who에 대입된 함수를 실행한다.
//캐릭터 구성(객체로 구성 ==> 속성+기능(메서드))
var hero = {
    //속성을 구성한다.
    name: "토마토 재배자",
    device: "호미",
    hp: 100,
    ep: 0,
    //메서드를 구성
    action: function(){
        document.write(this.name + "가 모험을 떠났습니다.", "<br>");
        console.log(this); //{name: "토마토 재배자", device: "호미", hp: 100, ep: 0, action: ƒ} ==> hero와 동일
        //객체 내부에 선언된 this의 의미는 내가 담겨진 상자를 가리킴(this = hero)
    }
}
console.log(hero.name); //토마토 재배자(객체의 속성의 값을 가져온다.)
hero.action; //함수를 호출하겠다는 의미도 아니고, 내부의 값을 가져오지도 못한다.

hero.action(); //객체 내부에 존재하는 action에 대한 함수를 호출하기 때문에 내부의 document.write(this.name + "가 모험을 떠났습니다.", "<br>")를 실행한다. <1차호출>
console.log(hero.action()); //<2차 호출>
console.log(hero.action);
/*
ƒ (){
        document.write(this.name + "가 모험을 떠났습니다.", "<br>");
        console.log(this); //{name: "토마토 재배자", device: "호미", hp: 100, ep: 0, action: ƒ} ==> hero와 동일
        //객체 내부에 선언된 this의 의미는 … 
*/



//[[함수문과 DOM의 결합]]
//#1. 선택자를 구성한다.
var $func_01 = document.querySelector("#func");
console.log($func_01);//outerHTML: "<img id=\"func\" src=\"\" alt=\"\">"

//#2. 함수구문 (진행 순서 2)
function img_src(){
    $func_01.setAttribute("src", "./img/pet.png");
    $func_01.setAttribute("alt", "반려동물");
}

//#3. 함수호출 (진행순서 1)
img_src();



//// 클릭 이벤트 발생에 의한 이미지 변경 ////
var $img_01 = document.querySelector(".img_01");
//일반함수 작성시
// function img_change(){
//     $img_01.setAttribute("src", "./img/girl.png");
// }

//익명함수 작성시
var img_change = function(){
    $img_01.setAttribute("src", "./img/girl.png");
}


////버튼 클릭시마다 화면의 배경색을 변경////
var $body = document.querySelector("body");
console.log($body);

var bgc_arr = ["#faa", "#fb3", "#ffa", "#afa", "#6af"];


var ch_num = 0;
function change_bgc(){ //클릭하는 순간
    console.log("증가되기 이전의 ch_num 값 : " +ch_num);
    //ch_num = 0

    $body.style.backgroundColor = bgc_arr[ch_num];
    ch_num++; //인덱스번호를 1씩 올린다.

    console.log("증가된 이후의 ch_num 값 : " +ch_num);
    //ch_num = 1 -> 2 -> 3 -> 4 -> 5

    if(ch_num == 5){
        ch_num = 0;
    }
}
change_bgc();
//브라우저가 로딩되었을 때 배경색의 0번 인덱스인 #faa가 적용되도록 구성하시오


////버튼 클릭시마다 지정한 장소의 이미지 변경하기////
var $func_02 = document.querySelector("#btn_img");
console.log($func_02);

var $init = 2;


function change_img(){
    $func_02.setAttribute("src", "./img/pic-"+ $init +".jpg");

    $init++;
    if($init == 5){
        $init = 1;
    };
};


var $func_03 = document.querySelector("#ch_img");

var $btn_next_prev = 1;
function next(){
    $btn_next_prev++;
    if($btn_next_prev == 5){
        $btn_next_prev = 1;
    };
    $func_03.setAttribute("src", "./img/pic-"+$btn_next_prev+".jpg");
    
};

function prev(){
    $btn_next_prev--;
    if($btn_next_prev < 1){
        $btn_next_prev = 4;
    }
    $func_03.setAttribute("src", "./img/pic-"+$btn_next_prev+".jpg");
};



//매개변수를 이용한 데이터 출력
//매개변수란 함수 외부의 데이터를 전달받아서 함수구문 내부에 위치한 변수가 그 값들을 활용(지역변수)


//전역변수 <-> 지역변수
//트럼프(경제 - 봉쇄 해제) <-> 뉴욕시장(안전 - 언택트)
//국왕(전역변수) -> 영주(o)
//국왕 <- 영주(x)


function fnc(name, region){
    //var name = "마동석" => "김하늘"
    //var region = "인천" => "경기"
    console.log(name);
    console.log(region);
    document.write("저의 이름은 " + name + "이며 사는 곳은 " + region + "입니다.", "<br>");
};
fnc("마동석", "인천"); //1차함수 호출
fnc("김하늘", "경기"); //2차함수 호출



////매개변수를 활용한 회원명단 출력////
var $member = [
    ["홍일동", "h1d", "h1d@naver.com"],
    ["홍이동", "h2d", "h2d@gmail.com"],
    ["홍삼동", "h3d", "h3d@daum.com"],
    ["홍사동", "h4d", "h4d@yahoo.com"],
    ["홍오동", "h5d", "h5d@nate.com"],
    ["홍육동", "h6d", "h6d@naver.com"],
    ["홍칠동", "h7d", "h7d@gmail.com"]
];


//#2. 선택자를 구성
var $memList = document.querySelector("#mem_result");


//#3. 회원 리스트를 모을 빈 케이스를 구성한다.
var $list_case = "";


//#4. 매개변수를 활용하여 테이블 내의 구조를 구성하는 함수 및 함수호출
function resister(name, id, email){
    $list_case +=`
        <tr>
            <td>`+ name +`</td>
            <td>`+ id +`</td>
            <td>`+ email +`</td>
        </tr>
    `;
};
for(i = 0; i < $member.length; i++){
    resister($member[i][0],$member[i][1],$member[i][2]);
};


/*
resister($member[0][0],$member[0][1],$member[0][2]);
resister($member[1][0],$member[1][1],$member[1][2]);
resister($member[2][0],$member[2][1],$member[2][2]);
resister($member[3][0],$member[3][1],$member[3][2]);
resister($member[4][0],$member[4][1],$member[4][2]);
resister($member[5][0],$member[5][1],$member[5][2]);
resister($member[6][0],$member[6][1],$member[6][2]);
*/
//#5. 지정한 선택자 내에 모든 리스트를 하위요소로 구성한다.
$memList.innerHTML = $list_case;



////함수의 내부 호출문에 의해 또 다른 함수를 호출한다////
var $add_space = document.querySelector(".add");
var $bongdari = "";


function add_txt(){
    $bongdari += `<p>네이버(주)는 한국 최대 검색포털 네이버 뿐만 아니라, 전 세계 2억 명이 사용하고 있는 모바일 메신저 라인, 동영상 카메라 스노우, 디지털 만화 서비스 네이버웹툰 등을 서비스하고 있는 글로벌 ICT 기업입니다.</p>`;
    console.log($bongdari);
    $add_space.innerHTML = $bongdari;

    add_txt2(); //함수 내부에서 또다른 함수를 호출 가능함 //콜백함수
}

function add_txt2(){
    $bongdari += `<p>네이버는 인공지능, 로보틱스, 모빌리티 등 미래 기술에 대한 지속적인 연구개발을 통해 기술 플랫폼의 변화와 혁신을 추구하며 세계 각국의 수많은 이용자와 다양한 파트너들이 함께 성장할 수 있도록 노력하고 있습니다.</p>`;
    console.log($bongdari);
    $add_space.innerHTML = $bongdari;
}


//#1. 버튼 클릭 => add_txt() 함수문이 작동 => 내부에 위치한 add_txt2(); 함수 호출에 의해서 => add_txt2() 함수문이 작동

//날씨 앱 : 위치정보 = > 지역 = > 날씨객체(new Date() => 내일 날씨, 모래 날씨, 10일까지의 날씨)



//내장함수란, 자바스크립트 엔진에서 이미 지정된 용어를 사용함으로써 각 기능을 적용하여 활용하기 위한 도구

var $question_num_01 = isNaN("12,300");
console.log($question_num_01); 
//원본 데이터 값이 숫자로만 이루어진 것이 아닌 경우 true 


//DB의 원본 데이터를 확인하지 못한 경우, 원본 데이터에 문자가 포함되어 있는지 또는 숫자로만 구성되었는지를 확인하고자 할 때 사용
//통신사로 개인 인증을 받고자 할 때 휴대폰 번호를 넣게 되어 있는데, ["-"를 제외한 숫자만 넣으세요.] 작성이 되어서 유도를 하고는 있으나 사용자 임의로 -라는 문자를 사이에 넣었다면 ==> 검사를 진행(in javascript)


var $question_num_02 = isNaN("12300");
console.log($question_num_02); 
//원본 데이터값이 숫자로만 이루어져있는 경우 false

//전역변수와 지역변수
var a = "장난감"
var a = 10;  //기존의 a라는 변수(메모리 공간)를 제거하고 새롭게 다시 a라는 변수를 만들어서 10이라는 숫자형 데이터를 담는다.
console.log(a);  //10

//하나의 메모리(폴더) 안에서는 동일한 데이터명(파일명)을 동시에 복수로 담을 수가 없음



var $num1 = 400; //전역변수 : 함수문 내/외부에 모두 영향을 줄 수 있음(그릇1)
function num_01(){
    console.log("함수문 내부에서 변수에 대한 데이터 값을 변경 전 : " +$num1); //400
    $num1 = 300; //기존의 변수에 새로운 데이터로 변경
    console.log("함수문 내부에서 변수에 대한 데이터 값을 변경 후 : " +$num1); //300
}
num_01();
console.log("함수를 통과한 이후 변수명 $num1에 담긴 데이터 값 : " +$num1); //300

///////////////////////////////////

var $num2 = 400; //전역변수 : 함수문 내/외부에 모두 영향을 줄 수 있음(그릇1)
function num_02(){
    console.log("함수문 내부에서 변수에 대한 데이터 값을 변경 전 : " +$num2); //underfined
    var $num2 = 300; //지역변수 : 함수문 내부에서만 영향을 줄 수 있음(그릇2)
    console.log("함수문 내부에서 변수에 대한 데이터 값을 변경 후 : " +$num2); //300
}
num_02();
console.log("함수를 통과한 이후 변수명 $num1에 담긴 데이터 값 : " +$num2); //400


//왜 지역변수를 잡았을 때 undefined가 나온 이유
console.log(book); //원래 book이라는 변수를 잡은 적이 한번도 없음
var book = "곰돌이 푸";
console.log(book); 


//택배 상자를 받았을 때, 내부에 또 다른 박스가 있을 때
var $box_name = "꼬깔콘";
function openBox(){
    var $box_name = "마우스";
    console.log($box_name);
}
openBox();
console.log($box_name);



//매개변수는 왜 지역변수일까?
function localName(fruit1, fruit2){
    //var fruit1 = "사과"; 
    //var fruit2 = "포도";
    console.log(fruit1); //"사과"
    console.log(fruit2); //"포도"
}
localName("사과", "포도");
/*
[매개변수가 지역변수이기 때문에 전역공간에 영향을 전혀 줄수가 없다.]
console.log(fruit1);  //not defined
console.log(fruit2);  //not defined
*/


/////////////////////////////
//#1. return 문 : 함수문 내부에서 선언된 데이터 값을 전역공간으로 이동을 시키고자 할 때 사용(return 데이터 또는 지역변수명)

var $product = "꼬깔콘";
function boxOpen(){
    var $product = "마우스";
    return $product;
}
var $openedProduct = boxOpen();
console.log("박스를 개봉하여 얻은 최종 물건 : " + $openedProduct);
//#1. boxOpen(); : 함수를 호출
//#2. function boxOpen(); : 함수구문으로 접근하여 내부의 실행문을 진행
//#3. var $product = "마우스"; : 지역변수에 마우스를 담았음
//#4. return $product; : 지역변수에 담긴 데이터를 돌려준다.
//#5. 함수구문으로 돌려받은 데이터("마우스")를 최초로 함수를 호출한 곳(boxOpen())으로 데이터 값을 저장
//#6. "마우스"라는 데이터는 변수 $openedProduct이라는 곳에 대입
//#7. 전역공간이라는 곳에서 콘솔창으로 출력


//계산기를 구성
//가계부의 내용을 갖고 계산 결과를 구성
//조건은 총액은 지역변수를 통해서 계산 결과값만 받아와서 전역공간에 전달
//2차 배열 패턴 [햄버거 개당 가격, 햄버거를 당일 구매한 수량, 콜라 개당 가격, 콜라를 당일 구매한 수량]

var finalTotal = 0;  //한번도 구매하지 않은 가격 상태

var  $price_arr = [
    [2000, 4, 1000, 3],
    [2000, 2, 1000, 2],
    [2000, 3, 1000, 5],
    [2000, 2, 1000, 8],
];


function eachDay(a, aNum, b, bNum){
    console.log(a);
    console.log(aNum);
    console.log(b);
    console.log(bNum);
    var eachSum = a * aNum + b * bNum;
    console.log(eachSum);
    
    return eachSum;

};

for(i = 0; i < $price_arr.length; i++){
    var eachPrice = eachDay($price_arr[i][0],$price_arr[i][1],$price_arr[i][2],$price_arr[i][3]);
    //console.log(eachPrice + "원");

    document.write((i+1) + "일차에 구매한 총 가격 : " + eachPrice + "원", "<br>");

    finalTotal += eachPrice;
};


//n일간 구매한 총 금액
document.write($price_arr.length + "일간 구매한 총 금액 : " + finalTotal + "원", "<br>");



////[##2. return 문] : return만 작성한 상태라면 반복문에서 break 문(반복에서 탈출)과 동일한 역할을 한다. 함수구문 내부에서 더이상 진행하지 말고 탈출해라(return;)////

function mem_list($name, $age, $region){
    document.write("성명 : " + $name, "<br>");
    return; //함수문의 진행 과정상 더이상 그 이하에 작성된 구문은 실행하지 않고 탈출
    document.write("나이 : " + $age, "<br>");
    document.write("지역 : " + $region, "<br>");

}
mem_list("조안나", "29", "서울");
mem_list("이병헌", "50", "경기");


//재귀함수 : 최초로 함수문을 호출한 후, 내부의 함수 호출문에 의해서 반복적으로 함수를 다시 호출하는 방식(반복문처럼 초기값, 증감식, 조건식 + 실행문)
var $k = 0; //초기값
function selfTest(){
    $k++; //증감식
    console.log("재귀함수 : " + $k + "회차");
    if($k >= 10){  //조건식
        return; //함수구문에서 탈출
    }
    selfTest();
}
selfTest();

//재귀함수를 사용하여 배열 데이터 내의 이미지를 모두 화면에 보여주기
var $arr_tree = ["tree-1-thumb.jpg", "tree-2-thumb.jpg", "tree-3-thumb.jpg", "tree-4-thumb.jpg", "tree-5-thumb.jpg", "tree-6-thumb.jpg"];


//재귀함수를 활용하여 document.write()를 활용하여 img 태그로 이미지 출력하시오.


var $n = 0;
function treeImg(){
    document.write("<img src='./img/"+ $arr_tree[$n] +"'>");
    $n++;
    if($n >= 6){
        return;
    }
    treeImg();
}
treeImg();


//즉시 실행 함수 : 메모리 값이 존재하지 않는다. 소괄호 내부를 무조건 실행
(function nowFunc(){
    alert("즉시실행 함수 실행~~!!");
})();