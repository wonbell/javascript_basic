let i = 1, reslut = 0;

while (i <= 100) {
  reslut += i;
  i++;
}
console.log(reslut);

reslut = 0;

for (let i = 1; i <= 100; i++) {
  reslut += i;
}

console.log(reslut);

// 동적 구구단 출력

document.write('<h2>for문을 이용한 구구단</h2>');
document.write("<table border='1'>");

for (let i = 2; i <= 9; i++) {
  document.write('<tr>');
  
  for (let j = 1; j <= 9; j++){
    document.write(`<td>${i}*${j} = ${i*j}</td>`);      
  }
  
  document.write('</tr>');
}
document.write('</table>');