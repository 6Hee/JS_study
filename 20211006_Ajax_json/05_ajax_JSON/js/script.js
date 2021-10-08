$(document).ready(function(){

    /*
    JSON 데이터의 기본형식 : key와 그에 따른 value로 구성
    {
        "key1" : "value1",
        "key2" : "value2",
        "key3" : "value3"
    }
    ==> 마치 객체를 담고 있는 데이터의 형태와 유사
    ==> 이용사례 : 지하철 도착정보, 버스 정류장에서 원하는 버스의 전 정거장 위치, 잔여백신 정보, 마스크 잔여정보, 주가정보, 교통정보, ... 등 실생활에서 이용되는 각종 정보들을 json 또는 



    */
    var item1 = {
        "company" : "Apple - 애플",
        "model" : "iPhone13",
        "color" : "Blue(블루)"
    };
    function jsonTest_01(){
        console.log(item1.company); //Apple - 애플
        console.log(item1.model); //iPhone13
        console.log(item1.color); //Blue(블루)
    }
    jsonTest_01();

    var item2 = {
        "session" : {
            "sports" : "축구",
            "league" : "프리미어 리그",
            "player" : "손흥민",
            "teams" : ["토트넘", "레버쿠젠", "함부르크"]
        },
        "season" : {
            "season2020" : "올해의 축구 선수상",
            "season2019" : [
                "11월 이달의 선수상", {"베스트 일레븐" : "베스트윙어"},
                "11월 이달의 골" 
            ]
        }
    }


    //"11월 이달의 골"이라는 데이터를 콘솔창에 보여주기
    console.log(item2.season.season2019[2]);
    //"레버쿠젠"
    console.log(item2.session.teams[1])
    //"베스트 윙어"
    console.log(item2.season.season2019[1]["베스트 일레븐"])


    //외부 json 파일과의 연동을 통해 필요한 값을 가져온다.
    //json 파일의 내부 패턴 = {아이디, 이름, 이메일, 성별}
    //$.getJSON("외부 파일 경로 및 파일명", function(data){실행문});

    $.getJSON("./res/ex_01.json", function(data){
        console.log(data);
        for(i in data){
            console.log(i);
            console.log("이름 : " +data[i].name+ " / 이메일 : " +data[i].email);
        }
    })


    //data라는 변수명이 꼭 작성해야하는 것은 아니고 자유롭게 작성가능
    $.getJSON("./res/ex_01.json", function(member){
        console.log(member);
        for(v of member){
            console.log(v);
            console.log("이름 : " +v.name+ " / 이메일 : " +v.email);
        }
    })


    //회원에 대한 sort() : 정렬 기능
    $.getJSON("./res/ex_01.json", function(member){
        var $externalData = member;
        $externalData.sort(function(a, b){
            //return a[2차 배열의 인덱스 번호] - b[2차 배열의 인덱스 번호]
            //객체 배열은 2차 배열의 인덱스 번호 자체가 없음

            if(a.name < b.name){
                return -1; //자리교체 없음(false);
            }
            if(a.name > b.name){
                return 1; //자리교체 있음(true);
            }
            return 0; //자리교체 없음(false);
        });
        console.log($externalData);
    });


    //영화 정보를 일단위로 업데이트 진행
    var today = new Date();
    console.log(today);
    var cur_year = String(today.getFullYear());
    var cur_month = String(today.getMonth() + 1);
    if(cur_month.length < 2){
        cur_month = "0" + cur_month;
    }
    var cur_date = String(today.getDate() - 1);
    if(cur_date.length < 2){
        cur_date = "0" + cur_date;
    }
    var theDay = cur_year +""+ cur_month +""+ cur_date;
    console.log(theDay);


    //영화진흥원에서 제공되는 정보가 어제 날자까지가 최신 데이터 : date정보를 추출하는 과정에서 어제 날짜를 기준으로 변수 저장(YYYYMMDD 형식으로 구조화 함)
    $.getJSON("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt="+theDay, function(data){
        console.log(data);
    });



});