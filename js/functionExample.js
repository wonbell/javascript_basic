// 전역변수 선언
let global = "전역변수입니다";


console.log(sum(900, 200)); // 미리 함수가 호이스팅이 되어있기 때문에 맨 위에서도 실행이 가능하다

// 사용자 정의 함수
function sum(x, y) {
  return x + y;
}

function printGugudan() {
  document.write("<table border='1'>");
  for (let i = 2; i <= 9; i++) {
    document.write('<tr>');

    for (let j = 1; j <= 9; j++) {
      document.write(`<td>${i}*${j} = ${i * j}</td>`);
    }

    document.write('</tr>');
  }
  document.write('</table>');
}

function doTask() {
  let some = 100;
  let i = 0;
  for (i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
  //return undefied;
}

//디폴트 파라메터
function sendMessage(message="응 아니야"){
  console.log(message + "를 서버에 전달합니다");
}

//Rest Parameter(비정형인자)
function sum(...nums){
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}

sum(1);
sum(1, 2);
sum(1, 2, 3);
const reslut2 = sum(1, 2, 3, 4);
console.log(reslut2);

sendMessage("장원종은 장원종");
sendMessage();

// 함수 호출
let reslut = sum(5, 7);
console.log(reslut);
printGugudan();

//함수 호출 시, 정의된 매개변수와 전달인자의 개수가 일치하지 않더라도 호출이 가능하다.
reslut = sum(10);
console.log(reslut);

let reslut1 = doTask();
console.log(reslut1);