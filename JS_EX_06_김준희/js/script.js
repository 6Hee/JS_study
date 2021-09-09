//로또 번호 6 + 보너스 1개
//1~46의 숫자
//첫번째 나오는 숫자는 두번째 나오는 숫자의 추첨기에서 제외 .... 1~6번째에 뽑힌 숫자는 마지막 7번째 추첨기번호에서 제외
//전번에 나오는 숫자와 그 다음에 나오는 숫자가 동일하다면 값을 추출 하지 말아라

//n




var $lottoNumber = [];
var i = 0;
while(i < 6){
    document.write("<div class='cont'>")
    var $a = Math.ceil((Math.random() * 46));
    $a += "</div>";

    if($lottoNumber.indexOf($a) == -1){
        
        $lottoNumber.push($a);
        
        i++;

        document.write($a);
        console.log($a);
    }
    
}



