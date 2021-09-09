$(document).ready(function(){

    const arr1 = [
		["img_01.jpg", "동행1"],
		["img_02.jpg", "동행2"],
		["img_03.jpg", "동행3"],
		["img_04.jpg", "동행4"]
	];
    var $bongdari = "";
    var box = `
            <div class="box">
                <div class="dark">
                    <div class="cont">
                        <h4>동행1</h4>
                        <a href="#">상세보기</a>
                    </div>
                </div>
            </div> 
    
    `;
    for(i = 0; i<arr1.length; i++){
        $bongdari += box;
    }
    $("#ex_01 .frame").html($bongdari);

    $.each($("#ex_01 .frame .box"), function(i){
        console.log(i);
        $(this).css({
            "background-image": "url(./img/"+arr1[i][0]+")",
        })
        $(this).find("h4").text(arr1[i][1]);

    })





});