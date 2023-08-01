// 템플릿 스트링
let name = '장원종';
let message = `템플릿 스트링 ${name}`;
console.log(message);

// tpeof 연산자
let age = 10;
console.log(typeof age);
console.log(typeof message);

// 특수 숫자 리터럴(키워드)
console.log(10 / 0);
console.log('나는 나입니다' / 10); //NaN이 뜬다

// 논리형
let flag = false;
let flag2 = undefined; //true로 인식함, 0과 빈문자, undefined, null, NaN만 false로 인식함, 문자열은 무조건 true
if (flag2) {
  console.log('참참참참참입니다');
}

//자바스크립트는 자동형변환이 많이 발생한다
console.log(1000 * '10');
console.log('1000' * '10');


