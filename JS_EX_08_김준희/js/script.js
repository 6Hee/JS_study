//실습 1
var $imgBox1 = document.querySelector("#test_01");

//일반함수 사용시
function testN1(){
    $imgBox1.innerHTML = "<img src='./img/smurfs_img.jpg'>";
}
testN1();
$imgBox1.querySelector("img").style.width = "160px";

//익명함수 사용시
var testN1 = function(){
    $imgBox1.innerHTML = "<img src='./img/smurfs_img.jpg'>";
    $imgBox1.childNodes[0].style.width = "160px";
    console.log($imgBox1.children[0]);
}
testN1();




//실습 2
var $imgBox2 = document.querySelector("#test_02");

function testN2(fileName, altName){
    $imgBox2.innerHTML = "<img src='./img/"+ fileName +"' alt='"+ altName +"'>";
}
testN2("smurf_movie.png", "스머프의 모험")
//$imgBox2.querySelector("img").style.height = "200px";
$imgBox2.children[0].style.height = "200px";



//실습 3
var $imgBox3 = document.querySelector("#test_03");
var $a = "";

function testN3(fileName1, altName1){
    $a += `<img src="./img/`+ fileName1 +`" alt="`+ altName1 +`">`
}
testN3("smurf_movie.png", "스머프의 모험");
$imgBox3.innerHTML = $a;

function testN4(fileName2, altName2){
    $a += `<img src="./img/`+ fileName2 +`" alt="`+ altName2 +`">`
}
testN4("smurf_poster.jpg", "스머프의 귀환");
$imgBox3.innerHTML = $a;
$imgBox3.querySelectorAll("img")[0].style.height = "200px";
$imgBox3.querySelectorAll("img")[1].style.height = "200px";



//실습 4

var $imgBox4 = document.querySelector("#test_04");
var $b = ["smurf_01.png", "똘똘이 스머프"];

function testN5(fileName3, altName3){
    $imgBox4.innerHTML = "<img src='./img/"+ fileName3 +"' alt='"+ altName3 +"'>";
}
testN5($b[0], $b[1]);
$imgBox4.querySelector("img").style.width = "120px";



//실습 5
var $imgBox5 = document.querySelector("#test_05");
var $c = [
    ["smurf_01.png", "똘똘이 스머프"],
    ["smurf_02.png", "익살이 스머프"],
    ["smurf_03.png", "요리사 스머프"],
    ["smurf_04.png", "전사 스머프"],
    ["smurf_05.png", "똑똑이 스머프"],
    ["smurf_06.png", "스머페트"],
    ["smurf_07.png", "마법사 스머프"],
]
var $bongdari = "";

function testN6(img, name){
    
    $bongdari += "<div class='box5'><div class='img_part' style='background-image:url(./img/"+ img +")'></div><h4>"+ name +"</h4></div>"

}
for(i = 0; i < $c.length; i++){
    
    testN6($c[i][0], $c[i][1]);
    
}
$imgBox5.innerHTML = $bongdari;