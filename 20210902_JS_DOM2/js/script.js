
//DOM에서 요소를 생성하고 지정한 장소의 하위로 위치시키기
//1) 선택자 구성

var $headline = document.querySelector(".createElement_appendChild");

//2) 문서객체를 생성
var $createEl = document.createElement("h1");
console.log($createEl);  //<h1></h1>

//3) 위에서 생성한 태그 조작하기
$createEl.textContent = "새롭게 생성한 문장입니다.";
$createEl.setAttribute("class", "headline1");
$createEl.style.background = "#f00";
$createEl.style.color = "#fff";

console.log($createEl);


//4) 위에서 조립을 모두 종료한 태그를 지정한 장소의 하위 태그의 맨 마지막에 위치시킨다.
$headline.appendChild($createEl);



//실습 : 배열 데이터에 "RED","ORANGE","YELLOW","GREEN","BLUE"를 저장하고 하단의 공간에 차례대로 내부의 자식으로 넣으시오. p태그는 생성하여 넣을 것~! appendChild 이용하여 지정한 공간의 맨 마지막 자식으로 넣는다.
var $color_arr = ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE"];
var $headline2 = document.querySelector(".color_box")
console.log($createEl2);

for(i=0; i<$color_arr.length; i++){
    
    var $createEl2 = document.createElement("p");
    if(i == 0){
        $createEl2.style.cssText = "margin:10px; background-color: RED; display:inline-block;";
        $createEl2.textContent = $color_arr[i];
    }else if(i == 1){
        $createEl2.style.cssText = "margin:10px; background-color: ORANGE; display:inline-block";
        $createEl2.textContent = $color_arr[i];
    }else if(i == 2){
        $createEl2.style.cssText = "margin:10px; background-color: YELLOW; display:inline-block";
        $createEl2.textContent = $color_arr[i];
    }else if(i == 3){
        $createEl2.style.cssText = "margin:10px; background-color: GREEN; display:inline-block";
        $createEl2.textContent = $color_arr[i];
    }else if(i == 4){
        $createEl2.style.cssText = "margin:10px; background-color: BLUE; display:inline-block";
        $createEl2.textContent = $color_arr[i];
    }
    
    $headline2.appendChild($createEl2);
}




//append 와 prepend

var $colorCover2 = document.querySelector(".add_first_last");


$colorCover2.prepend("빨강");//부모를 기준으로 맨 처음 자식을 추가한다.
$colorCover2.append("파랑"); //부모를 기준으로 맨 마지막 자식을 추가한다.




//객체의 이동으로 활용되는 append와 prepend
var $parent = document.querySelector(".move_child");

var $first = document.querySelector(".move_child p:nth-child(1)");
console.log($first); //<p>첫째</p>

$parent.append($first); //첫째의 위치가 부모 기준으로 마지막으로 이동함 => 객체 이동

var $last = document.querySelector(".move_child p:nth-child(4)");
console.log($last); //<p>첫째</p>

//페이지 로딩상의 정렬이 종료된 시점에서 다음을 로딩한다.



//문서 객체 이동시키기 - appendChild() vs append()의 차이
//공통점 : 객체이동이 가능

var c_appendChild = document.querySelector(".compare_appendChild");
var c_appendChild_firstSon = c_appendChild.children[0];
c_appendChild.appendChild(c_appendChild_firstSon);




var c_append = document.querySelector(".compare_append");
var c_append_firstSon = c_append.children[0];
c_appendChild.append(c_append_firstSon);


//차이점
//c_appendChild.appendChild("<span>1-3. 막내 추가</span>");
c_append.append("<span>2-3. 막내 추가</span>")

//appendChild : 직접 문자열을 포함할 수가 없음(변수로 저장된 부분은 적용가능함)
//append : 직접 문자열을 포함할 수는 있음. 단 태그가 포함된 상태라면 태그로써 인정을 받지 못함.

//번외편 : 변수로 저장된 내용을 appendChild로 진행하면
var $test_txt = "<span>1-4. 막내 아래 막내 추가</span>"
//c_appendChild.appendChild($test_txt); //... 또 실패(이유는 문자열을 가져온 것과 동일하기 때문임 허용되는 대상은 문서 객체만 가능)



var $images = document.querySelector(".img_move .images");


var $prev_button = document.querySelector(".img_move .prev");
var $next_button = document.querySelector(".img_move .next");

$prev_button.addEventListener("click", function(){
    $images.appendChild($images.children[0]);
})

$next_button.addEventListener("click", function(){
    $images.prepend($images.children[6]);
})





//기존에 존재하는 하위의 자식을 제거하는 removeChild()
var $nations = document.querySelector(".removeChild_method");
var $del_list = document.querySelector(".removeChild_method p:nth-child(4)");
console.log($nations);


$nations.removeChild($del_list);



//실습 : 버튼 클릭시, 하나씩 제거되도록 스크립트로 구현하시오.

var $delBtn = document.querySelector(".del_btn");
console.log($delBtn);
var $colorGroup = document.querySelector(".color_group");

$delBtn.addEventListener("click", function(){

    $colorGroup.removeChild($colorGroup.children[$colorGroup.children.length-1]);

});



//To Do List
var $add = document.querySelector("#add"); //버튼
var $total_list = document.querySelector("#todo_list"); //목록에 담을 대상

var key_code = 0;

$add.addEventListener("click", function(){
    addList();
})

var addList = function(){
    console.log("등록하기 버튼 클릭~!");
    //입력한 내용 저장
    var $eachList = document.querySelector("#todo").value;
    console.log($eachList);

    if($eachList.trim() == ""){ //입력한 값이 없거나 또는 스페이스바로 내용을 넣었을 경우, 입력상자 내부의 실제 입력값에 대한 유무를 따진다.


        
        alert("입력창에 할일을 작성해 주세요.")



    }else{
        //1차 자식 구성
        var $createList = document.createElement("div");
        $createList.classList.add("list");

        var $key = key_code;
        key_code++;

        $createList.setAttribute("data-list", $key);


        //2차 자식 구성 - 문단 태그
        var $createPara = document.createElement("p");
        $createPara.textContent = $eachList;

        //2차 자식 구성 - 개별 제거 버튼
        var $createRemoveBtn = document.createElement("span");
        $createRemoveBtn.textContent = "×";
        $createRemoveBtn.classList.add("remove");


        //구성품 조립
        $createList.append($createPara)
        $createList.append($createRemoveBtn);
        console.log($createList);

        //화면상에 조립한 구성품을 뿌려주세요.
        $total_list.append($createList);

        //리스트를 등록 후, 입력창을 비운다.
        document.querySelector("#todo").value = "";

        //각 리스트별의 x버튼 클릭시 함수를 호출
        $createRemoveBtn.addEventListener("click", function(){
            removeList($key);
        });

    }


    $inputBox.focus(); //해당하는 입력창에 포커싱하겠다는 명령
   
};

var removeList = function(i){
    console.log(i); //data-list라는 속성에 저장된 값을 매개변수를 통해서 전달 받아옴
    var $selectList = document.querySelector("div[data-list='"+ i +"']")
    console.log($selectList);


    //$total_list의 전체 리스트 공간으로부터 선택된 리스트를 제거한다.
    $total_list.removeChild($selectList);
}


//입력창 작성 후 엔터(매개변수로 이벤트리스너에서 받아온 이벤트 항목 내의 keyCode 속성값 : 13)을 눌렀을 때, 리스트 항목을 추가해 보세요. --> 상단에 작성된 변수명 addList 에 담긴 함수를 재활용할 것~!!
var $eachList = document.querySelector("#todo");
$eachList.addEventListener("keydown", function(e){
    if(e.keyCode == 13){
        //alert("엔터를 누름");
        addList();
    }
})