// let array = new Array();
let array = [];
array.push(10);
array.push('박박박박박');
array.push(new Student(10, '장원종', 50, 40, 30));
array.push(new Student(11, '송원종', 90, 100, 95));
array.unshift(new Student(12, '전원종', 90, 100, 95));

for (const value of array) {
  console.log(value);
}
console.log(array['0']);
// console.dir(array);

console.log(array.length);

// delete array[0]
array.shift();
// array.pop();
console.dir(array);