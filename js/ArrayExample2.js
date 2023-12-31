//Array 객체의 주요 메소드
let array = [2, 7, 1, 3, 4, 8, 6, 9, 5, 10];

let list = array.slice(2, 5);
console.dir(list);

//9만 삭제됨
let deleteList = array.splice(7, 1);
console.dir(deleteList);

//2 다음에 장원종, 상원종이 추가 된다. 
// array.splice(1,0,'장원종', '상원종');
// console.dir(array);

//검색 메소드 활용
//판별함수
// function findCondition(num){
//   if(num === 7){
//     return true;
//   }
//   return false;
// }

// let findNum=array.find(function(num){
//   return num === 7 ? true:false;
// });

let findNum = array.find(num => num === 7 ? true : false);

console.log(findNum);

//배열에서 짝수목록만 검색
let findNums = array.filter(num => num % 2 === 0 ? true : false);
console.dir(findNums);

//배열 반복(순회)
array.forEach((num, index) => {
  console.log(num, index);
});

//배열 정렬
// array.sort();
array.sort((num1, num2) => {
  // return num1- num2; //오름차순
  return num2 - num1; //내림차순
});
console.log(array);