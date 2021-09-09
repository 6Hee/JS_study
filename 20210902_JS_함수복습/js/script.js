var $ex_01_img = document.querySelector("#ex_01 img");
//클릭할 대상


var $ex_01_result = document.querySelector("#ex_01 .myName"); //최종결과를 도출할 대상


//일반 함수구문
/*
function imgInfo(){

    var $imgName = $ex_01_img.getAttribute("name");
    $ex_01_result.innerText = $imgName

}
*/

//익명함수구문


var imgInfo = function(){

    var $imgName = $ex_01_img.getAttribute("name");
    $ex_01_result.innerText = $imgName

}

$ex_01_img.onclick = imgInfo;

//이벤트 리스너 : 특정적인 이벤트가 진행되었다면 내부의 연결된 함수를 호출한다.
//직접 이벤트리스너가 함수를 포함하고 있는 방법
//$ex_01_img.addEventListener("click")

//외부의 함수를 호출하는 방법



//ex_02
var $ex_02_img = document.querySelector("#ex_02 img");

var $ex_02_result = document.querySelector("#ex_02 .myName");

//(2-2)일반 함수 구문

var imgInfo_2 = function(){
    var $imgName = $ex_02_img.getAttribute("name"); //치타
    $ex_02_result.textContent = $imgName; //내부의 텍스트요소를 변경하겠다는 의미
}
$ex_02_img.onclick = imgInfo_2; //imgInfo_2라는 정의가 안된 상태면 이벤트는 작동을 하지 않는다.






//이벤트리스너
var $ex_03_img = document.querySelector("#ex_03 img");
var $ex_03_result = document.querySelector("#ex_03 .myName");

$ex_03_img.addEventListener("click", function(){
    var $imgName = $ex_03_img.getAttribute("name");
    $ex_03_result.innerText = $imgName;
})


//직접 이벤트리스너 내부의 함수문에 실행문을 담아서 진행하는 방법
$ex_03_img.addEventListener("click", function(e){
    console.log(e);
    var $imgName = $ex_03_img.getAttribute("name");
    console.log($imgName);
    $ex_03_result.innerText = $imgName;
})



var $input4 = document.querySelector("#ex_04 input"); //리소스(이름)을 받아올 대상
var $btn4 = document.querySelector("#ex_04 button"); //이벤트를 발생시킬 대상
var $span4 = document.querySelector("#ex_04 span"); //이벤트를 통해 받아온 리소스를 최종적으로 표현할 대상 


$btn4.addEventListener("click", function(){
    
    var $name = $input4.value;
    console.log($name);
    $span4.textContent = $name;
    
   //$span4.textContent = $input4.value;

   $input4.value = "";//내부의 value값을 초기화한다. set Type
})


function addVisit(){
    var $name = $input4.value;
    console.log($name);
    $span4.textContent = $name;
    
   //$span4.textContent = $input4.value;

   $input4.value = "";//내부의 value값을 초기화한다. set Type
}

//함수의 재활용
$btn4.addEventListener("click", function(){
    addVisit();
})



$input4.addEventListener("keydown", function(e){
    //console.log("키보드 이벤트 발생~!");
    if(e.keyCode == 13){ //keyCode == 13 > enter값
        var $name = $input4.value;
        console.log($name);
        $span4.textContent = $name;

         //$span4.textContent = $input4.value;

        $input4.value = "";//내부의 value값을 초기화한다. set Type
    }
})




////

var $btn_animal = document.querySelector(".btns button:first-child");
var $btn_history = document.querySelector(".btns button:last-child");

var $cont_animal = document.querySelectorAll(".cont .animal");
var $cont_history = document.querySelectorAll(".cont .history");
console.log($cont_history);

$btn_history.addEventListener("click", function(){
    for(i in $cont_animal){
        $cont_history[i].style.display = "inline"; 
        $cont_animal[i].style.display = "none"; 
    }
}) 
$btn_animal.addEventListener("click", function(){
    for(i in $cont_history){
        $cont_animal[i].style.display = "inline"; 
        $cont_history[i].style.display = "none"; 
    }
}) 
