let score = prompt ('점수를 입력하세요', '우 미만 입력금지'); //prompt 함수는 문자열로 받는다
let number = score/10

number = Math.floor(number);

console.log(number);

switch (number) {
  case 10:
  case 9: console.log('수'); break;
  case 8: console.log('우'); break;
  case 7: console.log('미'); break;
  case 6: console.log('양'); break;
  default: console.log('가'); break;
}