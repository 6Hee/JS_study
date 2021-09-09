
var $a = Number(prompt("세 자리 수 이상의 정수를 입력하세요.", "000"));
if($a >= 100){
    if($a % 4 == 0){
        document.write($a + "은(는) 4의 배수입니다.");
    }
    else{
        document.write($a + "은(는) 4의 배수가 아닙니다.");
    }
}else{
    alert("세 자리 수 이상의 정수를 입력해 주세요.");
location.reload();
}



document.write("<hr>"); 





var $c = prompt("학생의 이름을 적으세요.", "");
var $b = Number(prompt("학생의 시험점수를 적으세요", ""));
if($b <= 100 && $b >= 0){
    if($b < 60){
        var $b = "F";
    }else if($b < 65){
        var $b = "D";
    }else if($b < 70){
        var $b = "D＋";
    }else if($b < 75){
        var $b = "C";
    }else if($b < 80){
        var $b = "C＋";
    }else if($b < 85){
        var $b = "B";
    }else if($b < 90){
        var $b = "B＋";
    }else if($b < 95){
        var $b = "A";
    }else if($b <= 100){
        var $b = "A＋";
    }
document.write($c + "의 등급은 " + $b, "<br>");
}



document.write("<hr>"); 



for(i = 1; i <=12; i++){
    document.write(i + ",");
}

document.write("<hr>"); 


for(i = 1; i <=12; i++){
    document.write("<img class='insta' src='./img/instagram-"+ i +".jpg'>");
}


document.write("<hr>"); 


for(i = 0; i <= 7; i++){

    if(i === 1 || i === 3 || i === 5 || i === 7){


        continue;


    }

    document.write("<img class='zoo' src='./img/img"+ i +".jpg'>");

}
