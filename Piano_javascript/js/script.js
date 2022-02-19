function playSoundQ() {
    const audio = new Audio("sounds/key01.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundW() {
    const audio = new Audio("sounds/key02.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundE() {
    const audio = new Audio("sounds/key03.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundR() {
    const audio = new Audio("sounds/key04.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundT() {
    const audio = new Audio("sounds/key05.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundY() {
    const audio = new Audio("sounds/key06.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundU() {
    const audio = new Audio("sounds/key07.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundI() {
    const audio = new Audio("sounds/key08.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundO() {
    const audio = new Audio("sounds/key09.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundP() {
    const audio = new Audio("sounds/key10.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSound_SquareBrackets1() {
    const audio = new Audio("sounds/key11.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSound_SquareBrackets2() {
    const audio = new Audio("sounds/key12.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundA() {
    const audio = new Audio("sounds/key13.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundS() {
    const audio = new Audio("sounds/key14.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundD() {
    const audio = new Audio("sounds/key15.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundF() {
    const audio = new Audio("sounds/key16.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundG() {
    const audio = new Audio("sounds/key17.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundH() {
    const audio = new Audio("sounds/key18.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundJ() {
    const audio = new Audio("sounds/key19.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundK() {
    const audio = new Audio("sounds/key20.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSoundL() {
    const audio = new Audio("sounds/key21.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSound_SemiColon() {
    const audio = new Audio("sounds/key22.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSound_Apostrophe() {
    const audio = new Audio("sounds/key23.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}
function playSound_Enter() {
    const audio = new Audio("sounds/key24.mp3");
    audio.loop = false;
    audio.volume = 0.5;
    audio.play();
}


// DOM
const piano_keys = document.querySelector(".piano").children;

console.log(piano_keys[0]);

function removeClassActive() {
    piano_keys[0].classList.remove("active");
}

document.addEventListener("keydown", e => {
    switch(e.keyCode) {
        case 81: //q
            playSoundQ();
            piano_keys[0].classList.add("active");
            setTimeout(() => piano_keys[0].classList.remove("active"), 200);
            break;
        case 87: //w
            playSoundW();
            piano_keys[1].classList.add("active");
            setTimeout(() => piano_keys[1].classList.remove("active"), 200);
            break;    
        case 69: //e
            playSoundE();
            piano_keys[2].classList.add("active");
            setTimeout(() => piano_keys[2].classList.remove("active"), 200);
            break;  
        case 82: //r
            playSoundR();
            piano_keys[3].classList.add("active");
            setTimeout(() => piano_keys[3].classList.remove("active"), 200);
            break;  
        case 84: //t 
            playSoundT();
            piano_keys[4].classList.add("active");
            setTimeout(() => piano_keys[4].classList.remove("active"), 200);
            break;  
        case 89: //y
            playSoundY();
            piano_keys[5].classList.add("active");
            setTimeout(() => piano_keys[5].classList.remove("active"), 200);
            break;  
        case 85: //u
            playSoundU();
            piano_keys[6].classList.add("active");
            setTimeout(() => piano_keys[6].classList.remove("active"), 200);
            break;  
        case 73: //i
            playSoundI();
            piano_keys[7].classList.add("active");
            setTimeout(() => piano_keys[7].classList.remove("active"), 200);
            break;  
        case 79: //o
            playSoundO();
            piano_keys[8].classList.add("active");
            setTimeout(() => piano_keys[8].classList.remove("active"), 200);
            break;  
        case 80: //p
            playSoundP();
            piano_keys[9].classList.add("active");
            setTimeout(() => piano_keys[9].classList.remove("active"), 200);
            break;  
        case 219: //[
            playSound_SquareBrackets1();
            piano_keys[10].classList.add("active");
            setTimeout(() => piano_keys[10].classList.remove("active"), 200);
            break;  
        case 221: //]
            playSound_SquareBrackets2();
            piano_keys[11].classList.add("active");
            setTimeout(() => piano_keys[11].classList.remove("active"), 200);
            break;  
        case 65: //a
            playSoundA();
            piano_keys[12].classList.add("active");
            setTimeout(() => piano_keys[12].classList.remove("active"), 200);
            break;  
        case 83: //s
            playSoundS();
            piano_keys[13].classList.add("active");
            setTimeout(() => piano_keys[13].classList.remove("active"), 200);
            break;  
        case 68: //d
            playSoundD();
            piano_keys[14].classList.add("active");
            setTimeout(() => piano_keys[14].classList.remove("active"), 200);
            break;  
        case 70: //f
            playSoundF();
            piano_keys[15].classList.add("active");
            setTimeout(() => piano_keys[15].classList.remove("active"), 200);
            break;  
        case 71: //g
            playSoundG();
            piano_keys[16].classList.add("active");
            setTimeout(() => piano_keys[16].classList.remove("active"), 200);
            break;  
        case 72: //h
            playSoundH();
            piano_keys[17].classList.add("active");
            setTimeout(() => piano_keys[17].classList.remove("active"), 200);
            break;  
        case 74: //j
            playSoundJ();
            piano_keys[18].classList.add("active");
            setTimeout(() => piano_keys[18].classList.remove("active"), 200);
            break;  
        case 75: //k
            playSoundK();
            piano_keys[19].classList.add("active");
            setTimeout(() => piano_keys[19].classList.remove("active"), 200);
            break;  
        case 76: //l
            playSoundL();
            piano_keys[20].classList.add("active");
            setTimeout(() => piano_keys[20].classList.remove("active"), 200);
            break;  
        case 186: //;
            playSound_SemiColon();
            piano_keys[21].classList.add("active");
            setTimeout(() => piano_keys[21].classList.remove("active"), 200);
            break;  
        case 222: //'
            playSound_Apostrophe();
            piano_keys[22].classList.add("active");
            setTimeout(() => piano_keys[22].classList.remove("active"), 200);
            break;  
        case 13: //enter
            playSound_Enter();
            piano_keys[23].classList.add("active");
            setTimeout(() => piano_keys[23].classList.remove("active"), 200);
            break;  
    }
    
})