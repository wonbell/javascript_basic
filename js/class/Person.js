class Person {

//정적 속성 (static)
static commonAttribute = "공통속성";
//정적 메소드
static commonMethod(){
  console.log("공통 메소드 입니다");
}


  constructor(name, age){
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
  }
  //setter/getter
  get name(){
    return this._name;
  }
  get age(){
    return this._age;
  }

  set name(name){
    //데이터 유효성 검증
    if(name === undefined){
      throw new Error('이름은 반드시 입력해라');
    }
    this._name = name;
  }
  
  set age(age){
    if(age < 10 || age >100){
      throw new Error('나이는 10에서 100사이');
    }
    this._age = age;
  }

  showInfo(){
    console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
  }
}

let person = new Person('장원종', 35);
console.log(person.name);
console.log(person.age);
person.showInfo();

try{
//person.name= undefined;
person.age = 1000;
}catch(e){
  alert(e.message);
}

person.showInfo();

//대문자로 써야한다
console.log(Person.commonAttribute);
Person.commonMethod();