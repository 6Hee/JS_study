//실습 1
var $today = new Date();
var $year = $today.getFullYear();
var $month = $today.getMonth();
var $day = $today.getDate();
var $yoil = $today.getDay();
var $hour = $today.getHours();
var $min = $today.getMinutes();
var $sec = $today.getSeconds();
var $inner = document.querySelector("#result_01");

switch($today.getDay()){
    case 0: $yoil = "일요일"; break;
    case 1: $yoil = "월요일"; break;
    case 2: $yoil = "화요일"; break;
    case 3: $yoil = "수요일"; break;
    case 4: $yoil = "목요일"; break;
    case 5: $yoil = "금요일"; break;
    case 6: $yoil = "토요일"; break;
}

$inner.innerHTML = "<p>"+$year+"년 "+($month+1)+"월 "+$day+"일 "+$yoil+", "+$hour+" : "+$min+" : "+$sec+" </p><br>"


//실습 2
var $str = "welcome to my home"
var $str_final = $str.replace("home", "homepage");
var $inner2 = document.querySelector("#result_02");

$inner2.innerHTML = "<p>"+ $str_final +"</p>";



//실습 3
var $arr_01 = [
    "kakao_01.jpg",
    "kakao_02.jpg",
    "kakao_03.jpg"
]
var $a = "";
var $inner3 = document.querySelector("#result_03");
for(i=0; i<$arr_01.length; i++){
    $a += "<img src='./img/"+$arr_01[i]+"'>";
    $inner3.innerHTML = $a;
}



//실습 4
var $kakao_01 = [
    "kakao_01.jpg",
    "kakao_02.jpg",
    "kakao_03.jpg"
];
var $kakao_02 = [
    "카카오 소풍",
    "카카오 나들이",
    "카카오 휴가"
];
var $b = "";
var $c = "";
var $inner4 = document.querySelector("#result_04");
for(i=0; i<$arr_01.length; i++){
    $b += "<div class='kakao_bx'><img src='./img/"+$arr_01[i]+"'><span>"+$kakao_02[i]+"</span></div>";
    $inner4.innerHTML = $b;
}



//실습 5
var $inner5 = document.querySelector("#result_05");
var $img_01 = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
];
var i = 0;
var imgbox = `<img src="./img/`+$img_01[i]+`">`
function ex_05(){
    if(i > 8){
        i = 0;
    }
    var imgbox = `<img src="./img/`+$img_01[i]+`">`
    $inner5.innerHTML = "<button onclick='ex_05();'>다음 이미지 보기</button>" +imgbox;
    i++;
}



//실습 6
var $imgChange2 = document.querySelector(".change_img2");
var num = 1;

function ex_06(){
    num++;
    if(num > 3){
        num = 1;
    }
    $imgChange2.setAttribute("src","./img/sub_0"+num+".jpg");
}
