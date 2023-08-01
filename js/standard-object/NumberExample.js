// 소수점 자리수
let x = 88.3434343434.toFixed(2);
console.log(Number.MAX_VALUE);
console.log(x);

//toFixed 뒤 숫자가 소수점 자리수
// x = new Number(x);
// console.log(x.toFixed(3));

//숫자 형변환이 됨
//parseInt를 보통 많이 씀
// new 없이 직접 호출 시 형변환 함수로 동작
let y = 34343;
let result = Number(y);
console.log(result);