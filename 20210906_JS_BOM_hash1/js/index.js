/*
var $nike = [
    ["nike_01.jpg", "nike_title_ad_1", "0"],
    ["nike_02.jpg", "nike_title_ad_2", "1"],
    ["nike_03.jpg", "nike_title_ad_3", "2"],
    ["nike_04.jpg", "nike_title_ad_4", "3"],
];
var $adidas = [
    ["adidas_01.jpg", "adidas_title_ad_1", "0"],
    ["adidas_02.jpg", "adidas_title_ad_2", "1"],
    ["adidas_03.jpg", "adidas_title_ad_3", "2"],
    ["adidas_04.jpg", "adidas_title_ad_4", "3"],
];
var $puma = [
    ["puma_01.jpg", "puma_title_ad_1", "0"],
    ["puma_02.jpg", "puma_title_ad_2", "1"],
    ["puma_03.jpg", "puma_title_ad_3", "2"],
    ["puma_04.jpg", "puma_title_ad_4", "3"],
];
*/

//선택자 구성
var $nike_contCover = document.querySelector("#cont_01 .cont");
var $nike_contGroup = "";
    
//랜덤 방식으로 0, 1, 2, 3 두개를 가져온다. (조건, 동일한 숫자는 나오지 않는다.)
var nike_num_arr = [];
var nike_number;
while(nike_num_arr.length < 2){  //배열 데이터의 개수가 0개 또는 1개라면
    nike_number = Math.floor(Math.random() * 4);  //0 ~ 3
    //최소값 0.0001 =(*4)=> 0.0004 =Math.floor=> 0
    //최대값 0.9999 =(*4)=> 3.9996 =Math.floor=> 3

    if(nike_num_arr.indexOf(nike_number) == -1){  //배열 데이터에 값이 일치하는 것이 없다면
        nike_num_arr.push(nike_number);  //배열 데이터에 넣어주세요.
    }
    console.log(nike_num_arr);
    /*
    [0회차 - while문을 진행하기 직전단계] nike_num_arr = []
    [1회차] nike_num_arr = [2]  //0~3 사이의 숫자는 무조건 하나 들어온다  //nike_num_arr.length < 2  ===> 만족
    [2회차] nike_num_arr = [2, (2)]  ==> [2, 2](x) 
    */
}
for(i=0; i<nike_num_arr.length; i++){
    $nike_contGroup += `<div style="background-image:url(./img/nike_0`+(nike_num_arr[i]+1)+`.jpg);" onclick="location.href='./detail.html#nike_`+nike_num_arr[i]+`'"></div>`;
}
$nike_contCover.innerHTML = $nike_contGroup;



//선택자 구성
var $adidas_contCover = document.querySelector("#cont_02 .cont");
var $adidas_contGroup = "";

var adidas_num_arr = [];
var adidas_number;
while(adidas_num_arr.length < 2){  //배열 데이터의 개수가 0개 또는 1개라면
    adidas_number = Math.floor(Math.random() * 4);  //0 ~ 3
    if(adidas_num_arr.indexOf(adidas_number) == -1){  //배열 데이터에 값이 일치하는 것이 없다면
        adidas_num_arr.push(adidas_number);  //배열 데이터에 넣어주세요.
    }
    console.log(adidas_num_arr);
}
for(i=0; i<adidas_num_arr.length; i++){
    $adidas_contGroup += `<div style="background-image:url(./img/adidas_0`+(adidas_num_arr[i]+1)+`.jpg);" onclick="location.href='./detail.html#adidas_`+adidas_num_arr[i]+`'"></div>`;
}
$adidas_contCover.innerHTML = $adidas_contGroup;




//선택자 구성
var $puma_contCover = document.querySelector("#cont_03 .cont");
var $puma_contGroup = "";

var puma_num_arr = [];
var puma_number;
while(puma_num_arr.length < 2){  //배열 데이터의 개수가 0개 또는 1개라면
    puma_number = Math.floor(Math.random() * 4);  //0 ~ 3
    if(puma_num_arr.indexOf(puma_number) == -1){  //배열 데이터에 값이 일치하는 것이 없다면
        puma_num_arr.push(puma_number);  //배열 데이터에 넣어주세요.
    }
    console.log(puma_num_arr);
}
for(i=0; i<puma_num_arr.length; i++){
    $puma_contGroup += `<div style="background-image:url(./img/puma_0`+(puma_num_arr[i]+1)+`.jpg);" onclick="location.href='./detail.html#puma_`+puma_num_arr[i]+`'"></div>`;
}
$puma_contCover.innerHTML = $puma_contGroup;