$(document).ready(function(){

    var $swiper = new Swiper("#main_slider .swiper-container", {
        direction : 'horizontal',
        //수평방향 이동 : 'horizontal'(기본값),
        //수직방향 이동 : 'vertical'
        loop : true,
        autoplay : {
            delay : 1000
        },
        speed : 2000,

        //하단 페이저(네비게이터) 설정
        pagination : {
            el : "#main_slider .swiper-pagination", //슬라이드 페이저가 설치될 공간 지정
            clickable : true //기본값은 클릭허용 불가
        },

        //슬라이드 방향키 설정
        navigation : {
            nextEl : "main_slider .swiper-button-next",
            prevEl : "main_slider .swiper-button-prev"
        },

        //슬라이드 스크롤바 설정
        scrollbar : {
            el : "#main_slider .swiper-scrollbar"
        },
        spaceBetween : 0  //각 개별 슬라이드의 간격을 설정 - 정수값으로 통제(예시, 100)

    });
});