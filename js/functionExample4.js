// 콜백함수는 왜 써야 하나?
function calculate(fn, a, b) {
  // 데이터 처리  
  return fn(a, b);
}

let num1 = 300, num2 = 500;

// 호출하는 곳에서 결정한다
let reslut = calculate(function (x, y) {
  return x + y;
}, num1, num2);
console.log(reslut);

//화살표식 , 자바의 람다식
reslut = calculate((x, y) => x + y, num1, num2)
console.log(reslut);


reslut = calculate(function (x, y) {
  return x * y;
}, num1, num2);
console.log(reslut);

reslut = calculate((x, y) => x * y, num1, num2)
console.log(reslut);

//즉시 호출
(function doTask() {
  console.log("나는 즉시 호출");
})();