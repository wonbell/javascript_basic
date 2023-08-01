// for in 문, 자바는 {]
// 배열 리터럴(선언, 생성, 초기화 동시에)
let array = [3, 2, 1, 5, 6, 3];
for (let i = 0; i < array.length; i++) {
  const num = array[i];
  console.log(num);
}
// 자바의 확장 for문과 같다
for (let i in array) {
  console.log(i, array[i]);
}
// 자바의 향상 for문과 같음
for (const num of array) {
  console.log(num);
}
