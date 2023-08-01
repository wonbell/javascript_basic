// 함수를 만드는 세가지 방법
// function name(params) {
  
// }
// let xxxx= function name(params) {
  
// }
//#1. 함수 선언식
//#2. 함수 표현식
//#3. Function 생성자 함수를 이용한 함수 동적 함수 생성

// 스트립 준비단계에서 하는 동작
// function Function(){
 //------
// }
// 자바 스크립트 표준 내장 객체는 function함수에 의해 동적으로 생성된다


//동적으로 만든 함수
let sum = new Function('x', 'y', 'return x+y');
let result = sum(10,20);
console.log(result);

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}