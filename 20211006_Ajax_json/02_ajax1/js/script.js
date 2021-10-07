$(document).ready(function(){


    $("#member").submit(function(){
        var $confirm = $(this).serialize();
        //폼 내부의 요소에 전달할 데이터를 재가공하는 역할을 담당

        console.log($confirm);

        $.ajax({
            url : "member.php", //데이터를 전송 및 요청할 URL 주소
            type : "post", //데이터의 전송방식(get/post)
            data : $confirm, //재가공된 데이터를 전송
            success : function(result){
                $("#user").html(result);
            }
        });


        return false;
    });







});