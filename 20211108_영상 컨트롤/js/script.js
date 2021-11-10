const $video = document.querySelectorAll(".box video");
console.log($video);

for(let i = 0; i < $video.length; i++){
    console.log(i);
    $video[i].addEventListener('mouseenter', function(e){
        $video[i].play();
        console.log($video[i]);
    });
    $video[i].addEventListener('mouseleave', function(e){
        $video[i].pause();
    });
}


$(document).ready(function(){
    const movArr = [
        "Beosound_A1_2nd_Gen.mp4",
        "headphone.mp4",
        "speaker.mp4",
        "television.mp4"
    ];

    $("#pop ul li").click(function(){
        //클릭 이벤트가 발생되었을 당시 인덱스 값을 추출. 단 한번만 값이 들어오면서 값은 바뀌지 않는다. (상수)
        //let $index ? 
        const $index = $(this).index();

        $(".popup .video_space").prepend(`<video src="./video/${movArr[$index]}" loop controls autoplay></video>`);

        // $(".popup .video_space video").attr({
        //     "src":"./video/"+movArr[$index],
        //     "autoplay":"autoplay"
        // });
        $(".dark").addClass("active");
        $(".popup").addClass("active");
        return false;
    });

    $(".dark, .close").click(function(){
        $(".dark").removeClass("active");
        $(".popup").removeClass("active");
        $(".popup .video_space video").remove();
        // $(".popup .video_space video").removeAttr("src");
        // $(".popup .video_space video").removeAttr("autoplay");
    });


    function timeout(){
        setTimeout(function(){
            $(".video_space div").fadeOut(500);
        }, 300);
    }


    $(".popup .video_space").click(function(){
        let $play = $(".video_space").hasClass("play");
        if($play == true){
            $(".video_space").removeClass("play");
            $("#playBtn").stop().show();
            $("#pauseBtn").stop().hide();
        }else{
            $(".video_space").addClass("play");
            $("#playBtn").stop().hide();
            $("#pauseBtn").stop().show();
        }
        timeout();
    });

    //처음부터 html문서상에 존재하지 않은 공간에 이벤트를 발생시킬시 
    //$(document).on("이벤트명", "선택자", function(){....실행문....});



});