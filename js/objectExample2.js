// 생성자 함수를 이용한 객체 틀
function Dog(name, age, kind) {
  //this = {}; 가 있다고 가정
  // 속성추가
  this.name = name;
  this.age = age;
  this.kind = kind;

  //기능 메소드 추가
  this.cry = function(){
    console.log(`${this.name} 강아지가 웁니다`);
  }
  //return this; 알아서 해준다
}

let dog = new Dog('댕댕이', 8, '발발이');
console.log(dog);
dog.cry();
//자바의 new와는 다르다. new를 씀으로써 첫줄에 추가 하라는 의미
let dog2 = Dog('모인어', 9, '푸들');
console.log(dog2);
dog.cry();

//자바스크립트 표준 객체(생성자 함수)를 사용
let string = new String("장원종입다");
const count = string.length;
console.log(count);

let ssn = "890705-1111111";
let= cha = ssn.charAt(7);
switch (cha) {
  case '1': console.log('남자'); break;
  case '2': console.log('여자'); break;
}

//자바스크립트 표준 내장 객체
let number = new Number(10);
console.log(number);
let bool = new Boolean(true);
console.log(bool);
let today = new Date();
console.log(today.toLocaleString());

// 자바스크립트에서의 배열, 자바의 List, Set, Queue, Stack 기능이 들어가 있는 배열
let array = new Array();
