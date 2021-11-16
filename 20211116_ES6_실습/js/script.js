$(document).ready(function(){


    //#1. 실습 1
    const arr1 = [
        ["img_01.jpg", "동행1"],
        ["img_02.jpg", "동행2"],
        ["img_03.jpg", "동행3"],
        ["img_04.jpg", "동행4"],
    ];
    /*
    for (i in arr1){
        console.log(i);
        $("#ex_01 .frame").append(`
            <div class="box" style="background-image:url(./img/${arr1[i][0]})">
                <div class="dark">
                    <div class="cont">
                        <h4>${arr1[i][1]}</h4>
                        <a href="#">상세 보기</a>
                    </div>
                </div>
            </div>
        `);
    }
    */
    /*
    for (v of arr1){
        console.log(v);
        $("#ex_01 .frame").append(`
            <div class="box" style="background-image:url(./img/${v[0]})">
                <div class="dark">
                    <div class="cont">
                        <h4>${v[1]}</h4>
                        <a href="#">상세 보기</a>
                    </div>
                </div>
            </div>
        `);
    }
    */
    arr1.forEach((v, i) => {
        console.log(v);
        console.log(i);
        $("#ex_01 .frame").append(`
            <div class="box" style="background-image:url(./img/${v[0]})">
                <div class="dark">
                    <div class="cont">
                        <h4>${v[1]}</h4>
                        <a href="#">상세 보기</a>
                    </div>
                </div>
            </div>
        `);
    });





    //#2. 실습2
    const arr2 = [
        "All", "마카롱", "뜨게질", "스케치", "사진찍기", "영어교육", "작곡", "여행", "필라테스"
    ];
    const arr_class = [
        {img:"class_01_01.jpg", category:"마카롱"},
        {img:"class_01_02.jpg", category:"마카롱"},
        {img:"class_01_03.jpg", category:"마카롱"},
        {img:"class_02_01.jpg", category:"뜨게질"},
        {img:"class_02_02.jpg", category:"뜨게질"},
        {img:"class_02_03.jpg", category:"뜨게질"},
        {img:"class_03_01.jpg", category:"스케치"},
        {img:"class_03_02.jpg", category:"스케치"},
        {img:"class_03_03.jpg", category:"스케치"},
        {img:"class_04_01.jpg", category:"사진찍기"},
        {img:"class_04_02.jpg", category:"사진찍기"},
        {img:"class_04_03.jpg", category:"사진찍기"},
        {img:"class_05_01.jpg", category:"영어교육"},
        {img:"class_05_02.jpg", category:"영어교육"},
        {img:"class_05_03.jpg", category:"영어교육"},
        {img:"class_06_01.jpg", category:"작곡"},
        {img:"class_06_02.jpg", category:"작곡"},
        {img:"class_06_03.jpg", category:"작곡"},
        {img:"class_07_01.jpg", category:"여행"},
        {img:"class_07_02.jpg", category:"여행"},
        {img:"class_07_03.jpg", category:"여행"},
        {img:"class_11_01.jpg", category:"필라테스"},
        {img:"class_11_02.jpg", category:"필라테스"},
        {img:"class_11_03.jpg", category:"필라테스"},
    ];

    for (v of arr2){
        $("#ex_02 .frame .sel_btn").append(`
            <li><a href="">${v}</a></li>
        `);
    }

    for (v of arr_class){
        console.log(v);
        $("#ex_02 .frame .cont").append(`
            <div class="box" style="background-image:url(./img/${v.img})"></div>
        `);
    }

     $("#ex_02 .frame .cont .box").addClass("active");

    //All을 제외한 개별 버튼 클릭시
    $("#ex_02 .frame .sel_btn li").not(":eq(0)").click(function(){
        const $cate = $(this).text();  //상단 버튼으로부터 필터를 진행할 수 있는 값을 추출
        console.log($cate);
        $("#ex_02 .frame .sel_btn li").removeClass("active");
        $(this).addClass("active");

        const filterArr = arr_class.filter(function(v){
            //console.log(v);
            //console.log(v.category == $cate);
            return v.category == $cate;
        });
        console.log(filterArr);
        $("#ex_02 .frame .cont").empty();  //버튼을 클릭하는 순간 각 개별 박스를 모두 제거한다(또는 비운다).
        //기존 arr_class 변수로부터 필터링으로 추출한 filterArr에서 존재하는 배열 데이터 만큼만 반복을 하여 박스를 구성한다.
        for(v of filterArr){
            console.log(v);
            $("#ex_02 .frame .cont").append(`
                <div class="box" style="background-image:url(./img/${v.img})"></div>
            `);
        }
        $("#ex_02 .frame .cont .box").addClass("active");
        
        return false;
    });



    //All 버튼 클릭시
      $("#ex_02 .frame .sel_btn li:eq(0)").click(function(){
        $("#ex_02 .frame .cont").empty();

        for(v of arr_class){
            console.log(v);
            $("#ex_02 .frame .cont").append(`
                <div class="box" style="background-image:url(./img/${v.img})"></div>
            `);
        }
        $("#ex_02 .frame .cont .box").addClass("active");

        return false;
    });

    //#실습3============================
    const arr3 = [
        ["ana.png", "ana_view.png", "아나", "새로운 세대를 지키기 위해 수년간의 은둔 생활에서 돌아온 베테랑 오버워치 요원"],
        ["ashe.png", "ashe_view.png", "애쉬", "미국 남서부를 뒤흔들고 있는 악명높은 데드락 갱단의 두목"],
        ["w_ball.png", "w_ball_view.png", "레킹볼", "구르는 로봇을 조종하는 달 출신의 유전자 조작 햄스터"],      
        ["baptiste.png", "baptiste_view.png", "바티스트", "실험적인 치유 장비들로 무장한 최정예 전투 의무병"],   
        ["bastion.png", "bastion_view.png", "바스티온", "자연에 매료되어 전 세계를 모험하지만 인간을 경계하는 변신 로봇"],
        ["brigitte.png", "brigitte_view.png", "브리기테", "도움이 필요한 자들을 위해 모험 떠난 용사"],   
    ];

    for(v of arr3){
        console.log(v);
        $("#ex_03 .frame .sel_btn").append(`
            <li><a href="#" style="background-image:url(./img/ex_03/${v[0]})"></a></li>
        `);
    }

    $("#ex_03 .frame .sel_btn li").click(function(){
        const $index = $(this).index();
        console.log($index);

        $("#ex_03 .cont").fadeIn();
        $("#ex_03 .cont img").attr("src", "./img/ex_03/"+arr3[$index][1]);

        $("#ex_03 .cont h4").text(arr3[$index][2]);
        $("#ex_03 .cont p").text(arr3[$index][3]);

        $("#ex_03 .input_line input").focus();
        return false;
    });


    //클래스 인자를 생성할 때는 이벤트 영역 내부가 아닌 외부에서 위치 시킴으로써 재활용을 목적으로 이벤트의 영역 외부로 데이터 값이 전달되도록 구성
    class Character{
        constructor(name1){
            this.name = name1;  //key와 value 값을 등록한다.
        }
        process(){
            console.log(`${this.name}의 캐리터가 생성되었습니다.`);
            $("#ex_03 .dark").addClass("active");
            $("#ex_03 .popup").addClass("active");
            $("#ex_03 .popup h3 span").text(this.name);
        }
    }


    $("#ex_03 .input_line button").click(function(){
        const input_val = $("#ex_03 .input_line input").val();

        if(input_val.trim() == ""){
            alert("나만의 이름을 작성해 주세요");
            $("#ex_03 .input_line input").focus();
        }else{
            const myName = new Character(input_val);  // 외부에 위치한 클래스 인자를 인스턴스 메모리로 가져오고 사용자가 입력한 값을 전달한다.
            console.log(myName);
            myName.process();  //클래스 인자의 실행을 담당
        }
    });

    $("#ex_03 .dark, #ex_03 .close").click(function(){
        $("#ex_03 .dark").removeClass("active");
        $("#ex_03 .popup").removeClass("active");
        $("#ex_03 .input_line input").val("").focus();  
        //모든 선택과 작성이 종료되면 다음화면으로 접근을 시킨다. 
    });












});