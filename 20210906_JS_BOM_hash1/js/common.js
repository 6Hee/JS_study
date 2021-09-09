var $body = document.querySelector("body");
var $resBtn = document.querySelector(".resBtn");
var $menuBtn = document.querySelector(".resBtn .menuBtn");
var $closeBtn = document.querySelector(".resBtn .closeBtn");
var $nav = document.querySelector("header nav");

$menuBtn.addEventListener("click", function(){
    $body.classList.add("showMenu");
    $nav.classList.add("active");
    $resBtn.classList.add("active");
})

$closeBtn.addEventListener("click", function(){
    $body.classList.remove("showMenu");
    $nav.classList.remove("active");
    $resBtn.classList.remove("active");
})