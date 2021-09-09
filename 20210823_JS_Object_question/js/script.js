//#1. 오늘 0000년 00월 00일 요일 시:분:초 순으로 날짜 객체로부터 받아와서 콘솔창에 출력

//#2. 객체를 선언하여 "첫째 아기 돼지는 움막을 지었고, 둘째 아기 돼지는 나무집을 지었고, 둘째 아기 돼지는 나무집을 지었고, 막내 아기 돼지는 벽돌집을 지었습니다.";
//객체 배열을 활용하여 위 문장을 완성하시오 (첫째 아기 돼지 , 움막, 둘째 아기 돼지, 나무집, 막내 아기돼지, 벽돌집 === > 각 데이터로 구성할 것!)


//#3. 빈 배열 데이터를 만드시오. 순차적으로 배열 데이터 내에 좋아하는 과일 5개를 for문을 활용하여 하나씩 추가해 주시기 바랍니다.
/*
var $fav_arr = [];
var $fruit = ["사과", "오렌지", "바나나", "포도", "자두"];

for문을 반복하는 과정에서 console.log($fav_arr)로 출력하되 하나씩 추가되는 과정을 모두 출력하시오.
*/






var $a = new Date();
var $year = $a.getFullYear(); 
var $month = $a.getMonth() + 1;
var $day = $a.getDate();
var $hours = $a.getHours();
var $min = $a.getMinutes();
var $sec = $a.getSeconds();
var $yoil = $a.getDay();

var $yoil_arr = ["일", "월", "화", "수", "목", "금", "토"];

console.log("오늘 " + $year +"년" + $month + "월" + $day + "일" + $yoil_arr[$yoil] + "요일" +
$hours + "시" + $min + "분" + $sec + "초" );



var $first = ["첫째 아기 돼지", "움막"];
var $second = ["둘째 아기 돼지", "나무집"];
var $last = ["막내 아기 돼지", "벽돌집"]

console.log($first[0] + "는" + $first[1] + "을 지었고,", $second[0] + "는" + $second[1] + "을 지었고,", $last[0] + "는" + $last[1] + "을 지었습니다.")


var $fav_arr = [];
var $fruit = ["수박", "복숭아", "딸기", "감", "멜론"];

for(i = 0; i < $fruit.length; i++){
    $fav_arr.push($fruit[i]);
    console.log($fav_arr);
}


//#4. 다음과 같이 데이터를 변경하시오. (splice 메서드 활용)
//["HTML", "CSS", "JAVASCRIPT", "JQUERY"];  ===>  ["HTML", "WEB", "JAVASCRIPT", "JQUERY"]; 
var $H = ["HTML", "CSS", "JAVASCRIPT", "JQUERY"];
var $T = $H.splice(1, 1, "WEB");
console.log($H);

//#5. 다음과 같이 배열 사이에 새로운 데이터를 넣으세요. (splice 메서드 활용 - 힌트 : 개수는 0개)
//["red", "yellow", "green", "blue"];  ===>  ["red", "orange", "yellow", "green", "blue"];
var $M = ["red", "yellow", "green", "blue"];
var $L = $M.splice(1, 0, "orange");
console.log($M);

//#6. 다음과 같이 배열 데이터를 변경하세요.  (splice 메서드만 활용 - 힌트 : 개수는 0개)
//["korea", "USA", "Brazil", "France"]; ===> ["korea", "Japan", "USA", "Brazil", "France", "China"]
var $C = ["korea", "USA", "Brazil", "France"];
var $S = $C.splice(1,0, "Japan");
var $J = $C.splice(5,0, "China")
console.log($C);


//#7. 다음과 같이 배열 데이터를 추출하시오 (slice 메서드 활용)
//["red", "yellow", "green", "blue"];  ===> ["yellow", "green"]

var $color = ["red", "yellow", "green", "blue"];
var $color_arr = $color.slice(1,3);
console.log($color_arr);

//#8. 다음과 같이 배열 데이터를 추출하시오 (slice 메서드 활용)
//["red", "yellow", "green", "blue"];  ===> ["yellow", "blue"]

var $color2 = ["red", "yellow", "green", "blue"];
var ex_08 = [];
// var $color_splice = $color2.splice(2,1);
// var $color2_arr = $color2.slice(1,3);
// console.log($color2_arr);
console.log($color2.slice(1, 2)); //]["yellow"]
console.log($color2.slice(3, 4)); //]["blue"]

/*
var $c_1 = $color2.slice(1, 2);
var $c_2 = $color2.slice(3, 4);
var ex_08 = ex_08.concat($c_1, $c_2);
console.log(ex_08); //["yellow", "blue"]
*/
for(i = 0; i < $color2.length; i++){  // 0,1,2,3
    if(i % 2 != 0){ // 1, 3
        ex_08.push($color2.slice(i, i+1).join());
    }
}
console.log(ex_08);

//#9. 문자 데이터 "2021-08-23"에서 "20210823"으로 변경하시오. (아래 방법 중에서 선택하여 적용하시오)
//방법1 : split() 메서드 활용하여 join() 메서드 적용하기
//방법2 : replace() 메서드 활용하기

var $this_year = "2021-08-23"
var $year_split = $this_year.split("-");
var $year_join = $year_split.join("");
console.log($year_join);
var $year_replace = $this_year.replace(/-/gi, "");
console.log($year_replace);