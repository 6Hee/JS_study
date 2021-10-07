$(document).ready(function(){

    $.ajax({

        url : "list.json",
        dataType : "json",
        success : function(result){
            console.log(result);
            console.log(result.list);

            $(result.list).each(function(a, b){
                console.log(a); // 0, 1, 2
                console.log(b); // 각 인덱스 번호에 따른 실제 데이터로 접근
                console.log(b.t); //실제 데이터 내부의 key(t)의 value 값을 추출
                $("#wrap ul").append("<li>"+b.t+"</li>");
            });
        }

    });
});