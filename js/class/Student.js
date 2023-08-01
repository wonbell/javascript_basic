//학생객체 생성을 위한 틀(클래스)
//export를 씀으로써 다른 js 파일에서도 사용할 수 있다
//export
class Student {
  constructor(ssn, name, korean, english, math) {
    //this ={};
    this.ssn = ssn;
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
  }
  //return this;
  //정적(static) 속성 및 메소드 추가
  static schoolName = '이젠초등학교';
  static showSchoolName() {
    console.log(Student.schoolName);
  }

  //생성자 함수(객체)의 메소드를 Student의 포로토 타입 객체에 할당
  getSum() {
    return this.korean + this.english + this.math;
  }

  getAverage() {
    return this.getSum() / 3;
  }
  //object 프로토타입객체의 toString 오버라이딩
  toString() {
    return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAverage()}`;
  }

}

// let student = new Student(10, '박박박', 90, 80, 50);
// console.log(student.toString());

// console.dir(Student);

// //프로토 타입 상속 체인 검증. 둘다 같음
// console.log('name' in student);
// console.log('valueOf' in student);

// //object 프로토타입객체의 메소드 재사용
// console.log(student.hasOwnProperty('name'));
// console.log(student.hasOwnProperty('valueOf'));
// console.log(student.toString());

// Student.showSchoolName();

export {Student}