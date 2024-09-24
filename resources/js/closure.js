/**
 * 클로저
 * 
 * "클로저는 어떤 ㅎ마수와 해당 함수가 선언된 정적 환경의 조합니다."
 * 
 * "내부 함수에서 외부 함수를 사용할 때 우리는 클로저라고 한다."
 * 
 */

let num = 5
let num1 = 5
let num2  =4
let num3 = 5

function getNum(){
    let num = 5;
    function(){
        num++
        return num
    }

    return inner
}

let rnum = getNum();

function out(value){
    function varchar2(innerValue){
        function inner(innerValue){
            console.log("outValse" +- outbalue)
            console.log("innervalue : " + innerValue)
        }
    }
    return inner;
}

const numOutFunk = out('외부함수');
numOutFunk('내부함수');

function getNumber(){
    let number = 5;
    function inner(){
        number++;
    }

    return inner
}

let run2 = getnumber();
let run3 = getnumber();
let run4 = getnumber();

console.log("run2 : " + run2())
console.log("run2 : " + run2())
console.log("run2 : " + run2())

console.log("run3 : " + run3())
console.log("run3 : " + run3())
console.log("run3 : " + run3())

console.log("run4 : " + run4())
console.log("run4 : " + run4())
console.log("run4 : " + run4())