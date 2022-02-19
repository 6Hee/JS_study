/*#canvas_01*/
const canvas1 = document.getElementById("canvas_01");  //지정된 canvas 태그 영역을 저장
const context1 = canvas1.getContext("2d");  //2D 형태로 드로잉을 할 수 있는 공간을 구성하여 저장 

//canvas의 크기 설정
canvas1.width = window.innerWidth / 2;
canvas1.height = window.innerHeight / 2;

context1.beginPath();  //새로운 선을 시작하겠다고 선언
context1.moveTo(100, 200);  //최초의 좌표로 이동하여 첫 포인트를 찍겠다는 의미
context1.lineTo(300, 400);  //시작 위치인 (100, 200)에서부터 (300, 400)인 위치까지 직선을 긋겠다는 의미
context1.strokeStyle="#ff0000";  //
context1.lineWidth= 10;  //선두께 단위 px
context1.stroke();  //선을 부여하겠다는 메서드


/*#canvas_02*/
const canvas2 = document.getElementById("canvas_02");
const context2 = canvas2.getContext("2d");

//canvas의 크기 설정
canvas2.width = window.innerWidth / 2;
canvas2.height = window.innerHeight / 2;

context2.beginPath();
context2.moveTo(100, 200);
context2.lineTo(300, 100);
context2.lineWidth = 20;
context2.lineCap = "round";  //선의 시작과 마무리에 대한 구성(butt, round, square)
context2.strokeStyle = "#00f";
context2.stroke();


/*#canvas_03 - arc*/
const canvas3 = document.getElementById("canvas_03");
const context3 = canvas3.getContext("2d");

//canvas의 크기 설정
canvas3.width = window.innerWidth / 2;
canvas3.height = window.innerHeight / 2;

//아크선을 드로잉 하기 위한 환경설정
const x3 = canvas3.width / 2;
const y3 = canvas3.height / 2;
const radius3 = 100;
const startAngle3 = 0.75 * Math.PI;  //아크선이 시작되는 각도
const endAngle3 = 1.25 * Math.PI;  //아크선이 종료되는 각도
const counterClockWise3 = false;  //아크선의 회전 방향 : true-반시계방향 / false-시계방향

context3.beginPath();
context3.arc(x3, y3, radius3, startAngle3, endAngle3, counterClockWise3);
//arc(아크선의 중심 X 좌표, 아크선의 중심 Y 좌표, 중심 좌표로부터 반경, 아크선의 시작 각도, 아크선의 종료 각도, 반시계방향 여부)
context3.lineWidth = 20;
context3.strokeStyle = "#aaf";
context3.stroke();



/*#canvas_04 - quadratic curve(2차 곡선)*/
const canvas4 = document.getElementById("canvas_04");
const context4 = canvas4.getContext("2d");

//canvas의 크기 설정
canvas4.width = window.innerWidth / 2;
canvas4.height = window.innerHeight / 2;

//canvas의 드로잉 파트
context4.beginPath();
context4.moveTo(200, 100);
context4.quadraticCurveTo(300, -50, 400, 100);
//quadraticCurveTo(Control Point X 좌표, Control Point Y 좌표, 종료 포인트의 X 좌표, 종료 포인트의 Y 좌표)
context4.lineWidth = 20;
context4.strokeStyle = "yellow";
context4.stroke();


/*#canvas_05 - Bezier curve(베지어 곡선)*/
const canvas5 = document.getElementById("canvas_05");
const context5 = canvas5.getContext("2d");

//canvas의 크기 설정
canvas5.width = window.innerWidth / 2;
canvas5.height = window.innerHeight / 2;

//canvas의 드로잉 파트
context5.beginPath();
context5.moveTo(100, 300);
context5.bezierCurveTo(200, 0, 300, 600, 400, 300);
//bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
context5.lineWidth = 5;
context5.strokeStyle = "#fff";
context5.stroke();


/*#canvas_06 - Bezier curve(베지어 곡선) + quadratice curve(이차곡선)*/
const canvas6 = document.getElementById("canvas_06");
const context6 = canvas6.getContext("2d");

//canvas의 크기 설정
canvas6.width = window.innerWidth / 2;
canvas6.height = window.innerHeight / 2;

context6.beginPath();
context6.moveTo(100, 50);
context6.lineTo(150, 150);
context6.quadraticCurveTo(200, 350, 300, 250);
context6.bezierCurveTo(400,0, 500,400, 600,100);
context6.lineWidth = 5;
context6.strokeStyle = "#05f";
context6.stroke();


/*#canvas_07 - 선 연결 모서리 처리 (lineJoin = "miter" / "round" / "bevel")*/
const canvas7 = document.getElementById("canvas_07");
const context7 = canvas7.getContext("2d");

//canvas의 크기 설정
canvas7.width = window.innerWidth / 2;
canvas7.height = window.innerHeight / 2;

//miter join
context7.beginPath();
context7.moveTo(100, 300);
context7.lineTo(150, 150);
context7.lineTo(200, 300);
context7.lineJoin="miter";
context7.lineWidth=20;
context7.strokeStyle="red";
context7.stroke();

//round join
context7.beginPath();
context7.moveTo(300, 300);
context7.lineTo(350, 150);
context7.lineTo(400, 300);
context7.lineJoin="round";
context7.lineWidth=20;
context7.strokeStyle="red";
context7.stroke();

//bevel join
context7.beginPath();
context7.moveTo(500, 300);
context7.lineTo(550, 150);
context7.lineTo(600, 300);
context7.lineJoin="bevel";
context7.lineWidth=20;
context7.strokeStyle="red";
context7.stroke();


/*#canvas_08 - 대각선 모서리 둥글게 처리*/
const canvas8 = document.getElementById("canvas_08");
const context8 = canvas8.getContext("2d");

//canvas의 크기 설정
canvas8.width = window.innerWidth ;
canvas8.height = window.innerHeight / 2 ;

const rectWidth8 = 400; //전체 가로 길이(모서리가 라운드 처리된 부분은 제외)
const rectHeight8 = 300; //전체 세로 길이(모서리가 라운드 처리된 부분은 제외)
const rectX8 = 200;  //모서리의 좌상단 X 좌표
const rectY8 = 150;  //모서리의 좌상단 Y 좌표
const cornerRadius8 = 50;  //라운드 처리된 부분의 반지름값

context8.beginPath();
/*
context8.moveTo(200, 150);
context8.lineTo(600, 150);
context8.arcTo(650, 150, 650, 200, 50);  
//arcTo(cpx, cpy, epx, epy, radius)
context8.lineTo(650, 500);
context8.lineTo(250, 500);

context8.arcTo(200, 500, 200, 450, 50);
context8.lineTo(200, 150);
*/
context8.moveTo(rectX8, rectY8); // 200, 150
context8.lineTo(rectX8 + rectWidth8, rectY8);
context8.arcTo(rectX8 + rectWidth8 + cornerRadius8, rectY8, rectX8 + rectWidth8 + cornerRadius8, rectY8 + cornerRadius8, cornerRadius8);  
context8.lineTo(rectX8 + rectWidth8 + cornerRadius8, rectY8 + cornerRadius8 + rectHeight8);
context8.lineTo(rectX8 + cornerRadius8, rectY8 + cornerRadius8 + rectHeight8);
context8.arcTo(rectX8, rectY8 + cornerRadius8 + rectHeight8, rectX8, rectY8 + rectHeight8, cornerRadius8);
context8.lineTo(rectX8, rectY8);

context8.closePath();  //끊어진 라인 연결하기

context8.lineWidth=10;
context8.strokeStyle="white";
context8.stroke();


/* canvas_10 - 원형 그리기 */
const canvas10 = document.getElementById("canvas_10");
const context10 = canvas10.getContext("2d");

//canvas의 크기 설정
canvas10.width = window.innerWidth / 2 ;
canvas10.height = window.innerHeight / 2 ;

context10.beginPath();

context10.arc(250, 250, 100, 0, 2*Math.PI, false);
//anticlockwise => false : 시계방향 / true : 반시계방향

//arc(x, y, startAngle, endAngle, anticlockwise);

context10.fillStyle = "green";
context10.fill();




/* canvas_12 자유형태 그리기 */
const canvas12 = document.getElementById("canvas_12");
const context12 = canvas12.getContext("2d");

//canvas의 크기 설정
canvas12.width = window.innerWidth / 2 ;
canvas12.height = window.innerHeight / 2 ;

context12.beginPath();
context12.moveTo(150, 300);
context12.arc(150, 250, 50, 0.5*Math.PI, 1.7*Math.PI, false);

context12.quadraticCurveTo(250, 100, 350, 215);


context12.lineWidth = 6;
context12.strokeStyle = "white";
context12.stroke();