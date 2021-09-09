var $cat = new Object();

var $cat = {
    name : "모모냥",
    img : "<img src='./img/cat_01.gif'>",
}
document.write("<h2>실습 1</h2>")
document.write("<h3>"+ $cat.name +"</h3>" +$cat.img, "<br>");



document.write("<h2>실습 2</h2>")
var $num_01 = "12,000";
var $num_02 = "24,000";
var $sum = parseInt($num_01) + parseInt($num_02);
console.log(typeof $sum);
document.write("<h3>두 수의 합산 결과 : "+ $sum +"000원</h3>");




document.write("<h2>실습 3</h2>")
var $molang = Math.ceil(Math.random() * 8);
console.log($molang);

if($molang <= 8){
    document.write("<img calss='mol' src='./img/molang"+ $molang +".jpg'>");
}



document.write("<h2>실습 4</h2>")

var $cats = ["cat_icon1.png", "cat_icon2.png", "cat_icon3.png", "cat_icon4.png", "cat_icon5.png", "cat_icon6.png"];
console.log($cats);
console.log(typeof $cats);

for(i = 0; i <= 5; i++){
    document.write("<img class= 'cats_width' src='./img/"+ $cats[i] +"' >");
}