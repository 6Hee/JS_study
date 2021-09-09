var myName = "김준희";
document.write("안녕하세요. 만나서 반갑습니다. 저는 " + myName + "입니다.",  "<br>");



var thisYear = Number("2021");
document.write("올해의 연도는 " + thisYear + "년 입니다.", "<br>");



var $str_img = "<img src='./img/snoopy_01.png'>";
document.write($str_img, "<br>");


var img_sorce = "snoopy_02.png";
var $str_bg = "<div class='bg_01' style='background-image: url(./img/" + img_sorce + ")'></div>";
document.write($str_bg);
