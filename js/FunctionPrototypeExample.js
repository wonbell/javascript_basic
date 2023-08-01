// 전역함수 선언
function doTask() {
  // console.log("어떤일을 한다");
  // this는 윈도우와 관련되어있다
  console.dir(this);
  console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
}

//객체 생성
let person = {
  name: '장원종',
  age: 35,
  doTeach: function () {
    console.log("프로그래밍 강의를 한다");
  }
}

//함수 직접 호출
doTask();

//함수 간접 호출
// doTask.call();
doTask.call(person);

//특정 객체에 동적 속성을 추가하는 기능
//this는 특정 객체가 아니라 window
function addAttribute(key, value) {
  this[key] = value;
}
addAttribute('name', '장원종');
addAttribute('age', 35);

console.dir(window);

let user = {};
// 다 똑같다
// addAttribute.call(user, 'name', '장원종');
// addAttribute.call(user, 'age', '35');
// addAttribute.apply(user, ['name', '장원종']);
// addAttribute.apply(user, ['age', '35']);
let addProperty = addAttribute.bind(user);
addProperty('name', '장원종');
addProperty('age', 35);

console.dir(user);

let array = [6, 2, 9, 1];
for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    const element = array[key];
    console.log(value);
  }
}