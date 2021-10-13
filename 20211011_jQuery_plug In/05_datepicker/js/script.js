$(document).ready(function(){

    $("#date_01").datepicker({
        dateFormat : 'yy-mm-dd' //또는 'yymmdd' 
        //2021-10-01(또는 20211012)
    });


    $("#date_02").datepicker({
        dateFormat : 'yy년mm월dd일',
        prevText : '이전달',
        nextText : '다음달',
        monthNames : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNamesShort : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNames : ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayNamesShort : ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear : true, //연도 다음에 월을 표기
        yearSuffix : '년', //한글로 연도 이후에 년을 표기
        changeMonth : true, //월을 셀렉트 박스에서 선택가능
        changeYear : true, //연도를 셀렉트 박스에서 선택가능
    });


    //datepicker를 선언하는 순간 모든 항목을 가져온다.
    $.datepicker.setDefaults({
        dateFormat : 'yy년mm월dd일',
        prevText : '이전달',
        nextText : '다음달',
        monthNames : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNamesShort : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNames : ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayNamesShort : ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear : true, //연도 다음에 월을 표기
        yearSuffix : '년', //한글로 연도 이후에 년을 표기
        changeMonth : true, //월을 셀렉트 박스에서 선택가능
        changeYear : true, //연도를 셀렉트 박스에서 선택가능
    });


    $("#date_03_01, #date_03_02").datepicker();


    $("#date_04_01").datepicker({
        dateFormat : 'yy-mm-dd',
        numberOfMonths : [1, 2],
        //minDate : new Date('2021-10-12'),
        //maxDate : new Date('2021-11-11'),
        minDate : 0,  //오늘 날짜부터
        maxDate : 30, //최대 30일까지
        //#date_04_01 공간에서 선택이 종료되면
        onClose : function(){
            $("#date_04_02").datepicker({
                dateFormat : 'yy-mm-dd',
                numberOfMonths : [1, 2],
                minDate : 1,  //내일날짜부터
                maxDate : 31, //최대 31일까지
            });
        }
    });


    //5
    $("#today").text(new Date().toLocaleDateString());
    var startDate, endDate;

    //시작일을 선택하기 위한 구성
    $("#fromDate").datepicker({
        showOn : 'both',  //달력을 표시하는 시간을 양분시키겠다는 의미(#fromDate에서 선언된 값을 #toDate로 값을 연동시키겠다는 의미)
        buttonImage : './img/calendar.png',
        buttonImageOnly : true,  //버튼 영역이 아닌 이미지만 표현시 선택하게끔 구성
        dateFormat : 'yy-mm-dd',
        changeMonth : false,
        changeYear : false,
        minDate : 1,  //선택 가능한 최소 시작날짜를 내일로 지정
        numberOfMonths : [1, 3],  //1행에 3개월치 달력을 보여주겠다는 것을 의미
        //[2, 3] 1행에 3개월 + 2행 3개월 => 향후 6개월치가 보인다.

        //시작일의 datepicker가 닫힐 때, 종료일을 선택할 수 있는 최소 시작일로 지정
        onClose : function(selectedDate){
            $("#toDate").datepicker('option', 'minDate', selectedDate);
            startDate = selectedDate;

            console.log(selectedDate);  //0000-00-00
            console.log($("#toDate").datepicker('option', 'minDate', selectedDate));  //#toDate에 datepicker 설정시 옵션 중 minDate에 현재 시작일로 지정된 날짜를 값을 넣어주겠다는 의미
        }

    });

    $("#toDate").datepicker({
        showOn : 'both',  //달력을 표시하는 시간을 양분시키겠다는 의미(#fromDate에서 선언된 값을 #toDate로 값을 연동시키겠다는 의미)
        buttonImage : './img/calendar.png',
        buttonImageOnly : true,  //버튼 영역이 아닌 이미지만 표현시 선택하게끔 구성
        dateFormat : 'yy-mm-dd',
        changeMonth : false,
        changeYear : false,
    });




    //6. 실제 값을 가져오기
    var $date_arr = [];
    $(".datepicker_01").datepicker({
        dateFormat : 'yymmdd',
        onSelect : function(selectedDate){
            $date_arr.push(selectedDate);
            console.log($date_arr);
            $("[name='targetDate']").val(selectedDate);
        }
    });
});