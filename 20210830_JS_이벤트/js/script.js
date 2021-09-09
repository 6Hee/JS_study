var $mouse_img = document.querySelector(".ch_img");

function call_ch1(){
    $mouse_img.setAttribute("src", "./img/tree-2-thumb.jpg");
}

function call_ch2(){
    $mouse_img.setAttribute("src", "./img/tree-1-thumb.jpg");
}




var $showSpace = document.querySelector(".showing");
var openImg = function(){
    $showSpace.innerHTML = "<img src='./img/flower1.jpg'>";
}



//버튼 클릭에 대한 이미지 교체(tree1~tree6)
var ch_img = document.querySelector(".change_img");

var num = 1;
function prev(){
    num--;
    if(num < 1){
        num = 6;
    };
    ch_img.setAttribute("src", "./img/tree-"+ num +".jpg");
};

function next(){
    num++;
    if(num > 6){
        num = 1;
    }
    ch_img.setAttribute("src", "./img/tree-"+ num +".jpg");
}



///게임 캐릭터의 진행
var $hero = {
    name : "영웅",
    level : 1,
    hp : 100
};
var $your_hp = $hero.hp; //게임을 처음 오픈했을 때 캐릭터의 최대 생명력을 저장한다.

var $cur_txt = document.querySelector(".cur_state");

//"이동" 버튼 클릭시마다 -5씩 생명력을 감소
function move(){
    if($hero.hp <= 0){
        $cur_txt.textContent = "당신의 캐릭터는 생명력이 모두 소진되었습니다.";
    }else{
        $hero.hp -= 5;
        console.log($hero.hp)
        //$cur.txt_innerText="현재 나의 캐릭터 생명력은 " +$hero.hp + "가(이) 되었습니다.";
        $cur_txt.textContent = " 현재 나의 캐릭터 생명력은 " +$hero.hp + "가(이) 되었습니다. ";
    }
}

//기존 최대 생명력의 값 초과하면? 안된다.
function add_hp(){
    $hero.hp += 10;
    
    if($hero.hp >= $your_hp){
        $hero.hp = $your_hp;
        $cur_txt.textContent = "당신의 캐릭터는 생명력이 모두 채워졌습니다.";
    }else{
        $cur_txt.textContent = "현재 나의 캐릭터 생명력은 "+ $hero.hp + "가(이) 되었습니다. ";
    }
}

var $mypet = {
    type : "cat",
    name : "얼룩이",
    address : "화성시 어느곳",
    img : "pet.png"
}
var $petBtn = document.querySelector("#pet_btn");
var $petInfo = document.querySelector(".pet_info");
var $petImg = document.querySelector(".pet_img");

$petBtn.onclick = petImport;

function pet(a, b, c, d){
    $petInfo.textContent = "나의 반려동물은 "+a+"이며, 이름은 "+b+"이고, 사는 지역은 "+c+"입니다.";
    $petImg.setAttribute("src", "./img/"+d);
}

function petImport(){
    pet($mypet.type, $mypet.name, $mypet.address, $mypet.img);  
}

//pet($mypet.type, $mypet.name, $mypet.address, $mypet.img);



//addEventListener를 사용하여 이벤트 항목을 진행
var $addEventBtn = document.querySelector(".addEvt");
//문서객체.addEventListener("이벤트선언명", function(){실행문});
$addEventBtn.addEventListener('click', function(){
    console.log("addEventListener에 의한 클릭 이벤트 발생~!");
});

//이벤트의 진행을 할 수 있는 방법
//#1. 태그 내부에 직접 on이벤트명 = "함수호출" 작성하여 스크립트 내부의 함수와 연동하는 방법
//#2. 스크립트 문서 내부에서 문서객체를 선택자로 구성하여 <<선택자.on이벤트명 = 함수호출;>>작성하여 함수와 연동하는 방법
//#3. addEventListener를 통해 이벤트를 발생시키는 방법




//문자열 : replace("바꿀문자", "새문자") / length / split("지정한 문자 또는 공간")
//문자열 : trim() => 앞뒤 공백을 제거한다.

//마우스 무브 이벤트
var $moveSpace = document.querySelector(".moving_space");
var $moveImg = document.querySelector(".moving_space div");

$moveSpace.onmousemove = mouseMove;

function mouseMove(event){
    console.log(event);
}