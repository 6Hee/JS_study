document.write("<h2>제어문 - 실습</h2>");

document.write("<h3>실습1</h3>");


var num_01 = parseInt(prompt("세 자리 정수값을 입력하세요.", ""));

    if(num_01 > 99){ //최소값 100일 경우


        if(num_01 % 4 == 0){

            document.write(num_01 + "은(는) 4의 배수 입니다.");

        }else{

            document.write(num_01 + "은(는) 4의 배수가 아닙니다.");

        }


    }else{  //입력한 값이 100 미만인 경우
        alert("입력한 값이 유효하지 않습니다. 다시 입력해 주세요.");
        location.reload();
    }



document.write("<hr>")




document.write("<h3>실습3</h3>");


    for(i = 1; i <=12; i++){

        if(i < 12){

            document.write(i + ",");

        }else{

            document.write(i);

        }

        

    }


document.write("<hr>")


//실습 3-1;


    for(j = 1; j < 12; j++){ //1 ~ 11

        document.write(j + ",");
        
    }
    console.log(j); // j = 12 (기존에 선언된 j의 값인데, 상단의 반복문에 의해서 최종 증감식 결과로 빠져나온 상태)
    //====== 상호간의 j 변수에는 값이 동일하나 기존 값과 새로운 값이라는 차이점 ==========//
    if(j = 12){  // j = 12  ==> true (기존 j라는 변수에 다시 12 라는 데이터 값을 넣은 상태)

        document.write(j);

    }
    //for 문에서 생성된 변수명과 if문에서 사용한 변수명은 별도의 개념



document.write("<hr>")



    for(k = 1; k <= 11; k++){ //1 ~ 11

        document.write(k + ",");
        
    }
    console.log(k); // 12
    if(k == 12){ //k == 12 의 의미는 이전에 선언된 k의 변수에 담긴 내용이 12와 동일하다면이라는 비교연산자

        document.write(k);

    }
    //위의 k라는 변수는 for문의 내부 구성상에서 생성된 변수가 하부의 if문 까지 영향을 미친 상태



document.write("<hr>")



document.write("<h3>실습5</h3>");

var $A = "";
for(i = 0; i <= 7; i++){


    if(i % 2 == 1){  //i의 값이 홀수

        continue;

    }


    $A += "<img class='zoo' src='./img/img"+ i +".jpg'>";


}
document.write($A);