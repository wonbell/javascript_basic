// 함수 리터럴 표현식, 함수객체, 자바의 객체와 비슷함
// 리터럴 표현식에선 익명으로 이름을 안줘도 된다
let myFunction = function (message){
  console.log(message);
}

function doTask(fn){
  //콜백 함수
  fn();
}

// 함수호출
myFunction('함수 리터럴 표신식 입니다');

doTask(myFunction);