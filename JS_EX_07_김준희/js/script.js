/*
document.getElementById("fav").style.color = "hotpink";
document.getElementById("fav").style.fontWeight = "bold";
*/


//실습1
document.getElementById("fav").style.cssText = "color:hotpink; font-weight:bold;"


//실습2
document.getElementsByClassName("baskin")[2].style.cssText = "color: chocolate; font-weight: bold; font-size: 24px;"


//실습3

var $test_03 = document.querySelectorAll("img");
console.log($test_03);

var $rtg = ""
for(i = 0; i < $test_03.length; i++){
    document.querySelectorAll("img")[i].style.width = "160px";
    if(i == 1){
        $test_03[i].style.border = "2px solid #ff0000";
    };
};


var $test_04 = document.querySelectorAll("#test_04 img");
console.log($test_04);

$test_04[0].setAttribute("src", "./img/desney_all.jpg");
$test_04[0].style.width = "300px";


var $box = document.querySelector("#test_05");
console.log($box);

var $box_arr = [
    ["kakao_01.gif", "피부관리"],

    ["kakao_02.gif", "첫눈"],

    ["kakao_03.gif", "피치의 봄날"],

    ["kakao_04.gif", "옛~썰"],

    ["kakao_05.gif", "네오의 삐침"]
];
console.log($box_arr);

var $img_box = ""
for(i = 0; i < $box_arr.length; i++){
    $img_box += "<img src='./img/"+ $box_arr[i][0] +"' alt='"+ $box_arr[i][1] +"' style='width:120px;'>";
}
console.log($img_box);

$box.innerHTML = $img_box;