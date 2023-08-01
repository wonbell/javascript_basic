// console.clear();

console.dir(Student); // 최상위 객체는 Function 프로토타입 객체
console.dir(student1); // 최상위 객체는 Object 프로토타입 객체

let string = new String("장원종 입니다");
console.dir(string);
console.dir(String);

let array = [5,3,6];
console.dir(array);

// 객체 리터럴 표현식을 이용한 객체 즉시 생성
let person = {
  name : '장원종',
  age : 35,
  doTeach : function(){
    console.log('프로그래밍 강의한다');
  }
};

// let person = new Object();
// person.name = '장원종';
// person.age = 35;
// person.doTeach = function(){
//   console.log('프로그래밍 강의한다');
// }

console.log(person.constructor === Object);
console.dir(person);
console.dir(person.hasOwnProperty('name'));