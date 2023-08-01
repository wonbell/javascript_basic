// 여러 학생 목록 관리 객체
// 자바스크립트 명령어 버전
// let ssn = prompt ('학번을 입력하세요');

function StudentRepository() {
  // this = {};
  // this.students = new Array();
  this.students = [];


  // return this;
}

//등록기능
StudentRepository.prototype.addStudent = function (student) {
  this.students.push(student);
}

//전체 리스트 반환
StudentRepository.prototype.getStudents = function () {
  return this.students;
}

// 학번으로 학생 검색
StudentRepository.prototype.findBySsn = function (ssn) {
  // return this.students.find(student => student.ssn === ssn ? true:false);
  return this.students.find(student => student.ssn === ssn || false);
}

// 이름으로 학생 검색
StudentRepository.prototype.findByName = function (name) {
  return this.students.filter(student => student.name === name ? true : false);
}

// 학번으로 삭제
StudentRepository.prototype.removeBySsn = function (ssn) {
  let deleted = false;
  this.students.forEach((student, index) => {
    if (student.ssn === ssn) {
      this.students.splice(index, 1);
      deleted = true;
    }
  });
  return deleted;
}

// 평균의 범위로 검색
StudentRepository.prototype.findByRange = function (start, end) {
  let list = [];
  this.students.forEach(student => {
    if (student.getAverage() >= start && student.getAverage() <= end) {
      list.push(student);
    }
  });
  return list;
}

//정렬하여 전체 검색
StudentRepository.prototype.findAllbySort = function (fn) {
  return this.students.sort(fn);
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

console.log('====================내림차순 정렬======================');
// 평균 내림차순으로 정렬하여 목록 출력
let sortedList = studentRepository.findAllbySort((student1, student2) => student2.getAverage() - student1.getAverage());
sortedList.forEach(student => {
  console.log(student.toString());
});