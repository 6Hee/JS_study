$(document).ready(function(){
    //슬라이드 효과 조건을 세팅
    var coverflowSetting = {
        slideShadow : true,  //슬라이드 그림자 생성 - 3D 효과를 강조하기 위해서 이미지가 회전되었을 때 약간의 흐릿한 효과를 부여할 수 있음
        rotate : 30,  //슬라이드의 회전각을 설정. 값이 커질수록 커지는 작용
        stretch : 10,  //개별 슬라이드의 펼침 현상. 값이 커지면 커질수록 서로 겹침현상이 발생
        depth : 50, //효과에 대한 perspective(진입 또는 진출간에 z 축방향에서 설정된 깊이)에 접근하는 효과를 조정. 값이 커지면 커질수록 멀리서 진입하는 효과를 적용할 수 있음
        modifier : 1 //효과에 대한 배수개념이 적용. 위 효과 설정값들에 곱하여 효과에 대한 강도를 조정할 수 있음 
    }

    //초기값을 세팅(전역변수)
    var $swiper = null;  //애니메이션을 작동하기 위해서는 공간을 비운다.

    function init(){
        //이미지가 전환되는 과정에서 화면밖으로 넘어간 경우, 해당하하는 공간 또는 이미지는 제거 (메모리 상에서 해당하는 공간 또는 이미지를 제거하는 것과 동일한 개념)
        if($swiper != null){
            $swiper.destroy();
        }

        $swiper = new Swiper("#main_slider .swiper-container", {
            effect : 'coverflow',  //swiper js 3D효과 중 하나
            coverflowEffect : coverflowSetting,  //상단에 설정한 세부효과를 적용
            loop : true,  //반복여부 설정
            autoplay : {
                delay : 500,
                disableOnInteraction: false  //스와퍼 작동 후 사용자에 의한 멈춤기능 제거(기본값 true) 
            },
            speed : 2000,  //슬라이드의 대기시간(setInterval)

            //하단 페이저(네비게이터) 설정
            pagination : {
                el : "#main_slider .swiper-pagination",  //슬라이드 페이저가 설치될 공간을 지정
                clickable : true  //기본값은 클릭허용 불가
            },

            //슬라이드 방향키 설정
            navigation : {
                nextEl : "#main_slider .swiper-button-next",
                prevEl : "#main_slider .swiper-button-prev",
            },

            //슬라이드 스크롤바 설정
            scrollbar : {
                el : "#main_slider .swiper-scrollbar"
            },

        });
    }
    init();  //메모리인 함수를 호출하여 swiper가 작동되도록 구성


});