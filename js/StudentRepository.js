// 여러 학생 목록 관리 객체
// let ssn = prompt ('학번을 입력하세요');

function StudentRepository() {
  // this = {};
  // this.students = new Array();
  this.students = [];

  //등록기능
  this.addStudent = function (student) {
    this.students.push(student);
  }

  //전체 리스트 반환
  this.getStudents = function () {
    return this.students;
  }

  // 학번으로 학생 검색
  this.findBySsn = function (ssn) {
    for (const student of this.students) {
      if (student.ssn === ssn) {
        return student;
       }
    }
    return null;
  }

  // 이름으로 학생 검색
  this.findByName = function (name) {
    let list = [];
    for (const student of this.students) {
      if (student.name === name) {
        list.push(student);
       }
    }
    return list;
  }

  // 학번으로 삭제
  this.removeBySsn = function (ssn) {   
    for (let i = 0; i <this.students.length; i++) {
      if (this.student[i].ssn===ssn) {
       this.student.splice(i,1); 
       return true;
      }
      
    }
  return false;
  }

  // 평균의 범위로 검색
  this.findByRange = function (start, end){
    let list= [];
    for (const student of this.students) {
      if (student.getAverage() >=start && student.getAverage() <=end) {
        
      }
    }
  }

  // return this;
}



// 임시 테스트
let studentRepository = new StudentRepository();
studentRepository.addStudent(new Student(10, '오오오', 90, 80, 50));
studentRepository.addStudent(new Student(11, '모모모', 80, 70, 50));
studentRepository.addStudent(new Student(12, '호호호', 100, 90, 10));
studentRepository.addStudent(new Student(13, '로로로', 10, 30, 20));
studentRepository.addStudent(new Student(14, '소소소', 50, 60, 80));

let alllist = studentRepository.getStudents();

for (const student of alllist) {
  console.log(student.toString());
}

//학번 검색
console.log(studentRepository.findBySsn(11));
//이름으로 검색
console.log(studentRepository.findByName('로로로'));
//학번으로 삭제
delete studentRepository.removeBySsn(14);

