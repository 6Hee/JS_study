$(document).ready(function(){

    var typed = new Typed(".typed" , {
        strings : ["I am Designer", "I am Developer", "안녕하세요"], //브라우저에 띄울 문구
        stringsElement : null, //초기상태 공간 비우기
        typeSpeed : 100, //타이핑 속도
        backSpeed : 100, //backspace 속도
        smartBackspace : true, //동일한 값 또는 문구가 존재할 때 backspace로 제거하지 못하도록 구성 후, 다음 문장을 표현
        startDelay : 1000, //1초 후 타이핑을 통해서 글자가 작성되도록 시간을 지연시킴
        backDelay : 1000, //첫번째 문장을 모두 작성한 후, 1초 후에 backspace가 진행되도록 만듬
        loop : false, //타이핑 문장의 반복여부(true 또는 false)
        showCursor : true,
        cursorChar : ".", //커서의 형태를 지정
    });


});