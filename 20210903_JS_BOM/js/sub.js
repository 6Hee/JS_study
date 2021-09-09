var originHash = location.hash; // .../sub.html#red URL창의 주소 중 #을 기준으로 #을 포함한 우측 문자열을 가져온다.
console.log(originHash); //#red


//문자열에서 무언가를 제거한다면? replace("기존문자", "새문자")
var change_hash = originHash.replace("#", "");
console.log(change_hash);


var $body = document.querySelector("body");
$body.setAttribute("id", change_hash);

//var $title = document.querySelector(".title");
//$title.textContent = change_hash;