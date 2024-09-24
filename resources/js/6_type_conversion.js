/**
 * 형변환
 * 
 * 1. 명시적
 * 2. 묵시적
 */

let age = 45;

//명시적
let strAge = age.toString();
console.log(typeof strAge)

//묵시적
let tmp = age + "";
console.log(typeof tmp)

/*
    명시적 형변환
*/

console.log((100).toString());
console.log((true).toString());
console.log((Infinity).toString())

//숫자타입으로 변환
console.log(parseInt('0'));
console.log(parseFloat('10.155'));
console.log(+'0')

//boolean
console.log(!!'true')
let isTrue = 'false';



let member = {      //object비교는 무조건 false
    name : "daehan"
}
console.log(member == {name : "daehan"})
