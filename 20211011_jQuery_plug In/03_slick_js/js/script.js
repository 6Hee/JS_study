$(document).ready(function(){
    //slick js plugIn을 사용시 스크립트 사용시 주의사항 : 최초 로딩시 본인의 구조가 이미 문서상에 존재해야 함.
    //display:none을 적용한 슬라이드 요소의 경우 slick이라는 플러그인이 감지를 못함
    $("#case_01 .slick_group").slick({
        //vertical : true,
        Infinity : true, //초기 슬라이드의 회전여부(append 및 prepend 방식 써클링 적용) - 기본값 true
        slidesToShow : 1, //현재 화면상에 몇 개의 슬라이드 파트를 보여줄 것인가를 결정 - 기본값 1
        slidesToScroll : 1, //현재 화면상에서 1회마다 전환되는 이미지의 개수 - 기본값 1
        autoplay : true, //자동 슬라이드 여부 결정 - 기본값 false
        autoplaySpeed : 4000, //자동 슬라이드가 진행되는 동안의 대기시간(setInterval)
        speed : 1000, //슬라이드의 전환속도(animate 효과 메서드)
        dots : true, //슬라이드 네비게이터의 존재 유무


        responsive : [
            {
                breakpoint : 1200, //반응형 시점(1200px 미만부터 적용)
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 2
                }
            },
            {
                breakpoint : 768,
                settings : {
                    fade : true, //슬라이드 모드를 페이드 방식으로 적용해라
                    slidesToShow : 1,
                    slidesToScroll : 1,
                    dots : false
                }
            }
        ]

    });



    $("#case_02 .slick_02").slick({
        infinite : true,
        autoplay : true,
        pauseOnHover : true, //마우스 오버시 일시정지
        vertical : true, //수직방향 이동 슬라이드
        slidesToShow : 3,
        slidesToScroll : 1,
        dots : true,
        centerMode : true, //슬라이드 파트에서 중앙 위치를 인식(클래스 .slick-center 추가)
        centerPadding : "0px", //센터에서 간격을 조정
        autoplaySpeed : 4000,
        speed : 1000
    })
});