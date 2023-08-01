// 강아지 객체 즉시 생성(틀 없이)
// 객체 리터럴 표현식
let dog = {
  name : '멍멍이',
  age : 8,
  kind : '발발이',
  eat : function (){
    //let dog 객체 안에 있는 name을 불러오기 위해서 자바와 같이 this를 쓴다. 
    console.log(this.name + '많이 먹습니다');
  },
  toString : function(){
    return '아악';
  }
};

//자바 스크립에서는 - 같은 문자를 쓰지 못하므로 ['']를 쓰기도 한다
//객체의 속성 검색
console.log(dog.name);
console.log(dog['name']);
console.log(dog.age);
console.log(dog.kind);
dog.eat();

//객체의 속성 변경
dog.name = '댕댕이';
console.log(dog.name);

// 속성 제거
delete dog.age;
console.log(dog.age);

//기능 추가
dog.work = function(){
  console.log('막 뛰어다닙니다');
}
dog.work();

// in 연산자
if('age' in dog){
  console.log(dog.age);
} else{
  console.log('age 속성이 없다');
}

//for in 문
for (const key in dog) {
  console.log(key, dog[key]);
}
// for of 문
let array = [5,3,9,1];
for (const value of array) {
  console.log(value);
}
// 위에 있는 콘솔들을 다 지운다
console.clear();
console.log(dog);
// 객체의 구조를 보기 편하다
console.dir(dog);