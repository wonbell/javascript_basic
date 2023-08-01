// let user = new Object();와 같다
let user = {
  name: '장원종'
};

//동적 개체 변환 자바의 오토박싱과 비슷
// let str = 'xxx'.charAt(0)
// console.log(String.prototype.isPrototypeOf(str));

console.log(user.toString());
console.log(Object.prototype.isPrototypeOf(user));

//object의 static 메소드 활용
//깊은 복사
let user2 = {};
Object.assign(user2, user);
console.dir(user2);

let prototypee = Object.getPrototypeOf(user);
console.dir(prototypee);