//http://127.0.0.1:5500/sub.html#adidas

//브라우저가 sub.html 페이지로 처음 진입했을 때
var $hash = location.hash;  //URL로부터 #을 포함한 우측의 문구를 가져오기
console.log($hash);
var $hash_txt = $hash.replace("#", ""); //$hash의 문구 중 "#"을 제거한다.
console.log($hash_txt);

//선택자 구성하기
var $main = document.querySelector("main");  //배너 이미지 교체
var $title = document.querySelector("#cont .wrap .title h3");  //페이지의 타이틀 교체
var $contCover = document.querySelector("#cont .wrap .cont");  //내부 이미지를 담을 공간을 선택
var $contGroup = "";  //.cont라는 공간에 넣을 가상의 빈 문자열 데이터(봉다리1)


//hash의 적용--> 브라우저의 url 창이 sub.html로 진입했을 때
var hash_apply = function(){
    if($hash_txt){  //hash라는 문구가 존재한다면
        $main.style.backgroundImage = "url(./img/"+$hash_txt+"_banner.jpg)";
        $title.textContent = $hash_txt;

        $contGroup = "";  //반복문으로 접근하기 전에 기존에 담은 내용들은 모두 비우고 다시 담아라.

        for(i=0; i<4; i++){
            //$contGroup += `<div style="background-image:url(./img/nike_01.jpg)"></div>`;  //샘플
            //$contGroup += `<div style="background-image:url(./img/`+$hash_txt+`_0`+(i+1)+`.jpg)"></div>`;

            //$contGroup += `<div style="background-image:url(./img/`+$hash_txt+`_0`+(i+1)+`.jpg)" onclick="location.href='./detail.html#nike_0'"></div>`;  //샘플
            $contGroup += `<div style="background-image:url(./img/`+$hash_txt+`_0`+(i+1)+`.jpg)" onclick="location.href='./detail.html#`+$hash_txt+`_`+i+`'"></div>`;
        }
        $contCover.innerHTML = $contGroup;

    }else{  //hash라는 문구가 존재한지 않다면 => 메인 페이지로 이동시킨다.
        location.href="./index.html";
    }
}

hash_apply();



//sub.html에서 상단 메뉴 클릭시
var $list = document.querySelectorAll("header nav ul li");
console.log($list);

for(const v of $list){
    console.log(v);  //[li, li, li]
    v.addEventListener("click", function(){
        console.log(v);  
        //v ==> var v 
        /*
        [1회차 반복] var v = <li rel="nike"><a href="#nike">nike</a></li>
        [2회차 반복] var v = <li rel="adidas"><a href="#adidas">adidas</a></li>
        [3회차 반복] var v = <li rel="puma"><a href="#puma">puma</a></li>

        최종적으로는 v = <li rel="puma"><a href="#puma">puma</a></li>
        */
        $hash_txt = v.getAttribute("rel");  //전역변수인 $hash_txt에 값을 클릭한 곳의 rel값으로 저장
        console.log($hash_txt);

        hash_apply();  //함수문을 다시 호출
    });
}

//const 변수명은 var 의 약점(갱신이 된다.)을 보완하고자 ES6라는 문법에서 새롭게 등장한 변수 선언(상수선언 - 변경없음=갱신없음)




