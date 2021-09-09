/*
DOM의 특징
 - html 문서를 로딩하는 과정상 <head> 태그는 <body> 태그보다 먼저 로딩된다.
*/


var $headline = document.getElementById("main_title");
console.log($headline);  
//null ==> 문서가 로딩되기 전에 스크립트가 로딩되었기 때문에 찾을 수 없다.
//<h1 id="main_title">문서객체모델(DOM - Document Object Model)</h1>

//글자색 변경
document.getElementById("main_title").style.color = "#f00";
//문서상에서 아이디명이 main_title인 요소를 선택하여 스타일중에서 컬러값을 #f00(레드계열)로 적용해주세요. ==> 해당하는 선택자의 인라인스타일시트로 적용(우선순위가 1순위)


//인라인 스타일시트 : 태그 내부에 직접 style이라는 속성 내부에 스타일을 선언한 형태
//내부 스타일시트 : HTML 문서 내에서 <style> ~ </style> 태그 내부에 스타일을 선언한 형태
//외부 스타일시트 : HTML 외부에 별도의 문서(예시, style.css)스타일을 선언한 형태


/*동일한 아이디명에 스타일 적용시*/
document.getElementById("same_id").style.background = "#faa";
//자바스크립트에서는 동일한 아이디명이 존재한다면 맨 처음 접근하는 아이디명만 인정한다. 나머지는 무시~~


//선택자의 재활용을 위해 변수에 선택자를 저장한다.
var $box_1 = document.getElementById("same_id");
console.log($box_1);  //div#same_id
$box_1.style.fontSize = "24px"; 
$box_1.style.borderTop = "4px solid #0f0";

//선택자
//[직접선택자(원거리 선택자)]
//1. 아이디 선택자 : document.getElementById("아이디명");
//2. 클래스 선택자 : document.getElementByClassName("클래스명")[인덱스번호];
//3. 태그선택자 : document.getElementByTagName("태그(요소)명")[인덱스번호];
//document.getElementByTagName("body")[0]

//4. 특정명칭을 기반으로 선택. 단 한개만 선택
//document.querySelector(".클래스명 || #아이디명 || 태그명 || css에서 선언가능한 모든 선택자 형식 적용 가능");
//5. 특정명칭을 기반으로 복수의 요소를 선택할 때
//document.querySelectorAll(".클래스명 || #아이디명 || 태그명 || css에서 선언가능한 모든 선택자 형식 적용 가능") ==> 배열형식으로 저장
//최종적으로 ㅂ ㅐ열 데이터를 선택한다면 [인덱스 번호가 필요]


//<아이디 선택자>
document.getElementById("id_txt").style.color = "#fa0";

//<클래스 선택자>
var $class_trip = document.getElementsByClassName("trip");
console.log($class_trip); //HTMLCollection(8) [p.trip, p.trip, p.trip, p.trip, p.trip, p.trip, p.trip, h4.trip] ==> 배열 데이터 : 구체적인 인덱스 번호를 기준으로 선택할 수 있음
console.log($class_trip[2]); //<p class="trip">강릉</p>
$class_trip[2].style.color = "hotpink";

//마지막 인덱스 번호에 폰트 색상을 aqua로 변경하시오.

$class_trip[7].style.color = "aqua";

//"청주"라는 글자의 폰트 크기를 36px로 조정하시오.

$class_trip[3].style.fontSize = "36px";

//스타일에 대한 스펠링과 구문 형식은 반드시 정확하게 지킨다. (자바스크립트에서는 작동이 안됨)

//<태그(요소) 선택자>
var $tag_car = document.getElementsByTagName("h6");
console.log($tag_car); //HTMLCollection(4) [h6.car1, h6.car2, h6.car3, h6.car4]
$tag_car[3].style.color = "blue";

var $body = document.getElementsByTagName("body");
console.log($body); //HTMLCollection [body]
$body[0].style.background = "#ffffaa";



//<querySelector>
var $query_item = document.querySelector("#query_unit .fav_01"); //<p class="fav_01">민트초코</p>
$query_item.style.background = "#0aa";

var $two_item = document.querySelector("#query_unit p:nth-child(2)"); //단 하나만 선택을 할 수 있기 때문에 맨 처음 접근된 선택자만 해당
console.log($two_item); //p.fav_02


var $specify_fav = document.querySelector(".fav_01");
console.log($specify_fav); 


//<querySelectorAll>
var $all_item = document.querySelectorAll("#unitAll p");
console.log($all_item); //NodeList(5) [p, p, p, p, p]

//옐로우라는 글씨의 배경색을 #ff0으로 적용
$all_item[2].style.background = "#ff0";

var $even_item = document.querySelectorAll("#unitAll p:nth-child(2n)");
console.log($even_item);
console.log($even_item.length); //2

//반복문 for문을 통해서 배경색을 #aff로 적용한다면

for(i = 0; i < $even_item.length; i++){
    $even_item[i].style.background = "#aff";
}

/* 
[HTMLCollection과 NodeList의 차이]

 - HTMLCollection : 문서상에 작성된 순서에 의해서 나열되는 형태(배열데이터)

 - NodeList : 문서상에 접근하는 순서에 의해서 나열되는 형태(배열데이터)

 ==> 문서의 구성에 따라 차이
*/

var $child = document.querySelector(".parent_selector .child");
console.log($child); //p.child

var $parent = $child.parentNode;
console.log($parent); //div.parent_selector
$parent.style.backgroundColor = "#f90";


//자식 요소 선택(childNodes)
var $parent_01 = document.querySelector(".childNodes_selector");
console.log($parent_01); //ul.childNodes_selector

var $child_node = $parent_01.childNodes;
console.log($child_node); //NodeList(9) [text, li, text, li, text, li, text, li, text]

//text의 데이터는 실제 문서상에는 작성한 내용을 품고있지 않음. 문서상에 존재하는 엔터공간을 포현(빈노드)

//"Portfolio"의 폰트 가중치를 bold로 변경
//"Contact"라는 글자 색상을 #f00으로 변경
$child_node[5].style.fontWeight = "bold";
$child_node[7].style.color = "#f00";

//자식요소선택(children)
var $parent_02 = document.querySelector(".children_selector");
console.log($parent_02); //ul.children_selector
var $children = $parent_02.children;
console.log($children); //HTMLCollection(4) [li, li, li, li]

//"경영소개"에 폰트 크기를 24px로 적용

$children[1].style.fontSize = "24px";


//가장 근접한 조상 찾기 : closest("조상 선택자")
var $grandChild = document.querySelector(".kids");
console.log($grandChild); //a.kids
var $parent_up = $grandChild.parentNode;
console.log($parent_up); //<li><a href="" class="kids">아동의류</a></li>
var $parent_up_up = $parent_up.parentNode;
console.log($parent_up_up); 

var $grandParent = $grandChild.parentNode.parentNode.parentNode;
console.log($grandParent);

//closest()를 사용했을 경우
var $kids = document.querySelector(".kids");
var $ancestor = $kids.closest("ul");
console.log($ancestor);
$ancestor.style.background = "#29e";


//첫째와 막내(넷째) 찾기
var $parent_03 = document.querySelector(".child_group");
console.log($parent_03); //<div class="child_group"><p>첫째</p><p>둘째</p><p>셋째</p><p>넷째</p></div>

var $first = $parent_03.firstChild;
console.log($first); //#text - > 빈노드
var $real_first = $first.nextSibling;
console.log($real_first); //<p>첫째</p>

var $brother = $parent_03.lastChild;
console.log($brother);
var $real_brother = $brother.previousSibling;
console.log($real_brother);


/////////////////////////////////////////

//문서 객체 조작
//속성 조작
var $kid = document.querySelector("#kid");
console.log($kid); //<img id="kid" src="./img/girl.png" alt="소녀 이미지">
var $kid_src = $kid.src;
console.log($kid_src); //http://127.0.0.1:5500/img/girl.png

var $kid_height = $kid.height;
console.log($kid_height);
//"소녀 이미지"라는 글자를 콘솔창에 출력하시오

var $kid_alt = $kid.alt;
console.log($kid_alt); //소녀 이미지

//getAttribute("속성명") => 속성명에 선언된 속성값만을 가져올 수 있음(반드시 변수명이 필요하다)
var $kid_src_get = $kid.getAttribute("src");
console.log($kid_src_get); //./img/girl.png  실제 문서상에서 작성된 속성의 속성값만을 반환
var $kid_alt_get = $kid.getAttribute("alt");
console.log($kid_alt_get);  //소녀 이미지

//setAttribute("속성명", "새로운 속성값")
//renewal(갱신) / create(생성) / delete(삭제)

//기존 속성에 새로운 값으로 변경(기존의 속성값은 사라지고 교체 - renewal(갱신))

$kid.setAttribute("src", "./img/boy.png"); 
$kid.setAttribute("alt", "소년 이미지");


//기존에 없던 속성을 선언하여 속성값을 넣을 수 있음 (create(생성))
// $kid.setAttribute("class","kid_img");

//기존에 존재하는 속성의 속성값을 제거 가능 (delete(삭제))
// $kid.setAttribute("class", "");

//문서내에 내 이름 심기 
$kid.setAttribute("author", "김준희");

//기존 클래스명을 생성한 상태에서 동적인 클래스를 추가하여 이미지가 움직이도록 구성(add(추가))
// $kid.setAttribute("class", "left_go active");

//함수의 형식
// f(x) = x + 1;
var $today = new Date()
var cur_year = $today.getFullYear(); //2021 함수이름인 nextYear()가 호출되기까지 기다린다.
function nextYear(){
    console.log(cur_year + 1);  //2022
}

nextYear();  //x라는 값을 넣을 겁니다. (함수 호출)


//#1. 내가 바꿔야 할 대상을 선택
var $card_01 = document.querySelector("#card_01");
console.log($card_01); //<img id="card_01" src="./img/ace.png" alt="카드 앞면">


var $front_btn = document.querySelector(".front");
var $back_btn = document.querySelector(".back");


$back_btn.style.display = "none";


//함수는 이름을 불러주기 전까지는 계속 기다린다.
function cardFront(){
    console.log("함수 호출~~!!");
    $card_01.setAttribute("src", "./img/ace.png");
    $card_01.setAttribute("alt", "카드 앞면");
    
    $front_btn.style.display = "none";
    $back_btn.style.display = "inline-block";
}
function cardBack(){
    $card_01.setAttribute("src", "./img/card.png");
    $card_01.setAttribute("alt", "카드 뒷면");

    $front_btn.style.display = "inline-block";
    $back_btn.style.display = "none";
}



//팝업창 불러오기

var $dark = document.querySelector(".dark");
console.log($dark);
var $popup = document.querySelector(".popup");
console.log($popup); 

function openPop(){
    /*
    $dark.setAttribute("class", "dark active");
    $popup.setAttribute("class", "popup active");
    */
   $dark.classList.add("active");
   $popup.classList.add("active");
}

function closePop(){
    /*
    $dark.setAttribute("class", "dark");
    $popup.setAttribute("class", "popup");
    */
    $dark.classList.remove("active");
    $popup.classList.remove("active");
}


//add(), remove()

//특정 클래스값 추가
var $add = document.querySelector(".class_add");
console.log($add); //<p class="class_add">클래스 추가</p>
console.log($add.classList);  //DOMTokenList ["class_add", value: "class_add"]
//Token : 승인 가능한 값

$add.classList.add("active");



//특정 클래스값 제거
var $remove = document.querySelector(".class_remove");
console.log($remove);
console.log($remove.classList); //DOMTokenList(2) ["class_remove", "active", value: "class_remove active"]

$remove.classList.remove("active");



 
//햄버거 아이콘에 의한 메뉴 공간 보여주기
//#1. 대상 선정하기(active라는 클래스를 어디에 넣을 것인가? 동적으로 움직이는 구성을 만들어야 할 대상)
var $resMenu = document.querySelector(".res_menu");
console.log($resMenu);
function openMenu(){
    $resMenu.classList.add("active");
}
function closeMenu(){
    $resMenu.classList.remove("active");
}


//하위요소 교체
var $inHTML = document.querySelector(".in_html");
console.log($inHTML);

//innerHTML의 get type : 하위 문서의 내용을 가져온다. (태그의 작성된 구문을 가져올 수 있음)
var $get_HTML = $inHTML.innerHTML;
console.log($get_HTML);


//innerText의 get Type : 하위 문서의 내용을 가져온다. (태그는 가져올 수 없으며 작성된 텍스트만을 가져올 수 있음)
var $get_Text = $inHTML.innerText;
console.log($get_Text);


//innerHTML 의 set Type : 하위 문서 내용을 변경, 생성, 삭제, 추가형식을 진행할 수 있음 (태그 인정)
$inHTML.innerHTML = "<h3>커피 이야기</h3>" //변경
$inHTML.innerHTML = ""; //삭제
$inHTML.innerHTML = "<div class='coffee'></div>"; //생성


//innerText 의 set Type : 하위 문서 내용을 변경, 생성, 삭제, 추가형식을 진행할 수 있음 (태그 인정 없음)
$inHTML.innerText = "<p>포토그래퍼</p>" //태그를 작성한 것 자체로도 넌 그냥 텍스트였어~~


//적용 유효범위로 구분
// innerHTML > innerText


//추가 문장을 보여주고 감추기
var $addReview = document.querySelector(".add_review"); //display:none <==> inline
var $detailBtn = document.querySelector(".detail"); //+더보기 <==> -감추기


function r_more(){
    $addReview.style.display = "inline";
    $detailBtn.innerHTML = "<span class='less' onclick='r_less();'>-감추기</span>";
}

function r_less(){
    $addReview.style.display = "none";
    $detailBtn.innerHTML = "<span class='more' onclick='r_more();'>+더보기</span>";
}






