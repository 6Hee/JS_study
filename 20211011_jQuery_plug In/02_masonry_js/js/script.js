$(document).ready(function(){
    var $arr = [
        ["img_01.jpg", "타이틀-01", "이미지 내용-01", "https://pinterest.com"],
        ["img_02.jpg", "타이틀-02", "이미지 내용-02", "https://pinterest.com"],
        ["img_03.jpg", "타이틀-03", "이미지 내용-03", "https://pinterest.com"],
        ["img_04.jpg", "타이틀-04", "이미지 내용-04", "https://pinterest.com"],
        ["img_05.jpg", "타이틀-05", "이미지 내용-05", "https://pinterest.com"],
        ["img_06.jpg", "타이틀-06", "이미지 내용-06", "https://pinterest.com"],
        ["img_07.jpg", "타이틀-07", "이미지 내용-07", "https://pinterest.com"],
        ["img_08.jpg", "타이틀-08", "이미지 내용-08", "https://pinterest.com"],
        ["img_09.jpg", "타이틀-09", "이미지 내용-09", "https://pinterest.com"],
        ["img_10.jpg", "타이틀-10", "이미지 내용-10", "https://pinterest.com"],
        ["img_11.jpg", "타이틀-11", "이미지 내용-11", "https://pinterest.com"],
        ["img_12.jpg", "타이틀-12", "이미지 내용-12", "https://pinterest.com"],
        ["img_13.jpg", "타이틀-13", "이미지 내용-13", "https://pinterest.com"],
        ["img_14.jpg", "타이틀-14", "이미지 내용-14", "https://pinterest.com"],
        ["img_15.jpg", "타이틀-15", "이미지 내용-15", "https://pinterest.com"],
        ["img_16.jpg", "타이틀-16", "이미지 내용-16", "https://pinterest.com"],
    ];
    for(v of $arr){
        $(".grid").append(`
            <div class="grid_item" style="background-image:url(./img/${v[0]})"><p>${v[1]}</p></div>
        `)
    }
    $(".grid").masonry({
        itemSelector : ".grid_item" // 그리드의 적용 대상
    });


    //3. 각 .grid_item을 클릭시 팝업창 오픈
    $(document).on("click", ".grid_item", function(){
        var $itemIndex = $(this).index();
        
        $(".popup_img").css("background-image", "url(./img/"+$arr[$itemIndex][0]+")");
        $(".title").text($arr[$itemIndex][1]);
        $(".cont").text($arr[$itemIndex][2]);
        $(".link").attr("href", $arr[$itemIndex][3]);

        $(".dark").addClass("active");
        $(".popup").addClass("active");
    });


    $(".dark, .close").click(function(){
        $(".dark").removeClass("active");
        $(".popup").removeClass("active");
    });

});