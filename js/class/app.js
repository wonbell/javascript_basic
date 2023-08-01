//export한 파일을 import로 불러 온다
import { Student } from "./Student.js";
import { HighStudent } from "./HighStudent.js";

let student = new Student(10, '박박박', 90, 80, 50);
console.log(student.toString());

let highStudent = new Student(10, '최최최', 90, 80, 50, 18);
console.log(highStudent.toString());