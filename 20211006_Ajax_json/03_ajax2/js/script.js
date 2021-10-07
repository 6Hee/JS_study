$(document).ready(function(){

    $.ajax({
        url : "rank.xml", //데이터를 요청할 경로 및 주소
        dataType : "xml", //요청할 데이터의 형식
        success : function(result){
            console.log(result);
            $(result).find("item").each(function(index){
                //console.log(this);
                var singer = $(this).find("j").text();
                console.log(singer);
                var singerList = "<li>"+singer+"</li>";
                $("#wrap ol").append(singerList);
            });
        }


        
    });



});