var $nike = [
    ["nike_01.jpg", "nike_title_ad_1", "nike_text_ad_1"],
    ["nike_02.jpg", "nike_title_ad_2", "nike_text_ad_2"],
    ["nike_03.jpg", "nike_title_ad_3", "nike_text_ad_3"],
    ["nike_04.jpg", "nike_title_ad_4", "nike_text_ad_4"],
];
var $adidas = [
    ["adidas_01.jpg", "adidas_title_ad_1", "adidas_text_ad_1"],
    ["adidas_02.jpg", "adidas_title_ad_2", "adidas_text_ad_2"],
    ["adidas_03.jpg", "adidas_title_ad_3", "adidas_text_ad_3"],
    ["adidas_04.jpg", "adidas_title_ad_4", "adidas_text_ad_4"],
];
var $puma = [
    ["puma_01.jpg", "puma_title_ad_1", "puma_text_ad_1"],
    ["puma_02.jpg", "puma_title_ad_2", "puma_text_ad_2"],
    ["puma_03.jpg", "puma_title_ad_3", "puma_text_ad_3"],
    ["puma_04.jpg", "puma_title_ad_4", "puma_text_ad_4"],
];

var $hash = location.hash;
console.log($hash);

var $hash_txt = $hash.replace("#", "");
console.log($hash_txt);

var $divide_arr = $hash_txt.split("_"); //nike_1 ==> ["nike", "1"]

//선택자 구성
var $detailBg = document.querySelector("#cont .ad_img");
var $detailTitle = document.querySelector("#cont h3");
var $detailText = document.querySelector("#cont p");

if($divide_arr[0] == "nike"){
    $detailBg.style.backgroundImage = "url(./img/"+$nike[$divide_arr[1]][0]+")";
    $detailTitle.textContent = $nike[$divide_arr[1]][1];
    $detailText.textContent = $nike[$divide_arr[1]][2];
}
if($divide_arr[0] == "adidas"){
    $detailBg.style.backgroundImage = "url(./img/"+$adidas[$divide_arr[1]][0]+")";
    $detailTitle.textContent = $adidas[$divide_arr[1]][1];
    $detailText.textContent = $adidas[$divide_arr[1]][2];
}
if($divide_arr[0] == "puma"){
    $detailBg.style.backgroundImage = "url(./img/"+$puma[$divide_arr[1]][0]+")";
    $detailTitle.textContent = $puma[$divide_arr[1]][1];
    $detailText.textContent = $puma[$divide_arr[1]][2];
}
