$(document).ready(function(){

    //$(선택자).load("외부 콘텐츠 파일명", function(){실행문});
    //$(선택자).load("외부 콘텐츠 파일명", 콜백함수);
    $("#doc_space").load("./document_01.txt");

    $("#html_space").load("./add.html");



    /* tabbox에서 load를 통한 각각의 이미지 포함한 파일 가져오기 */
    $(".tab_cont").load("./tab0.html");

    $(".tab_box li").click(function(){
        var $btn_index = $(this).index();
        $(".tab_cont").load("./tab"+$btn_index+".html");


        $(".tab_box li").removeClass("active");
        $(this).addClass("active");
        
        return false;
    });












});