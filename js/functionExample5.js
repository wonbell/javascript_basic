// 표준 내장 함수
// const yn = confirm('안녕 반가워');
// if(yn){
//   console.log('ㅇㅇ');

// }else{
//   console.log('ㄴㄴ');
// }

// setTimeout(() => console.log('1초후 실행되었으다'),2000);

// let second = 1; 
// let timer = setInterval(() => {
//   document.write(`<h4>${second}초</h4>`);
//   second++
// }, 1000);

// //10초 후 타이머 제거
// setTimeout(() => {
//   clearTimeout(timer);
// }, 10000);

//숫자만 빼온다
let money = '100원';
money = parseInt(money);
console.log(money + 100);

let result = 1000 / '장원종';
if (isNaN(result)) {
  console.log('음~!!');
}
