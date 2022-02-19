a = 'hi';
console.log(a);

a = false;
console.log(a);

var divElement = document.querySelector('input').value;
console.log(divElement);

console.log(typeof divElement);





const map = new Map([['key1', 'value1'], ['key2', 'value2']]);

map.forEach((val, key) => {
    console.log(val + ',' +key);
});

for(let key of map.keys()){
    console.log("key : " + key);
}




const set = new Set(['apple', 'banana', 'orange']);

set.forEach((val, val2, set) => {
    console.log(val, val2, set);
});

for (const val of set){
    console.log(val);
}

for (const key of set.keys()){
    console.log(key);
}

for (const [key, value] of set.entries()){
    console.log("key" + "=" + key);
    console.log("value" + "=" + value);
}



var arr = [];
arr.push(100); 
arr.push(20);
arr.splice(0, 1, 10);


var arr = [10,20,30];
arr.forEach(function(value, index) {
    console.log('array index: ' + index + ' value: ' + value);
});


var arr1 = [10, 20, 30];
var obj1 = {
    num : 10,
    str : 'hi',
    arr : [],
};

for (var key in arr1){
    console.log(arr[key]);
}

for (var key in obj1){
    console.log(obj1[key]);
}


var arr2 = [10, 20, 30];

for(var num of arr){
    console.log(num);
}
for(var num in arr){
    console.log(num);
}


function fetchDate(data) {
    var receivedData;
    if(data === undefined){
        receivedData = localStorage.getItem('item');
    }
}



var obj2 = {
    num : 10,
    printNum : function(){
        console.log(this.num);
    }
};

obj2.printNum();


function showComment(){
    console.log(this);
};

showComment();


function Developer() {
    console.log(this);
}
var dev = new Developer();






function Person(name) {
    this.name = name;
}

Person.prototype.printName = function(){
    console.log(this.name);
}

var ironMan = new Person("Tony Stark");

ironMan.printName = function(){
    console.log(`I am ${this.name}`);
}

ironMan.printName();




var simpleArray = new Array(1, 2);

simpleArray.push(3);
simpleArray.hasOwnProperty(2);

console.log(simpleArray.hasOwnProperty(2));



var a = 10;

function outer() {
    var b = 20;

    function inner(){
        var c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    inner();

}

outer();
