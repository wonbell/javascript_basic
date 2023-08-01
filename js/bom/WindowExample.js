//자바 스크립트에선 전역함수 x
//BOM의 구조
console.dir(window);

let myWindow = open('../../hello.html', '내창');
if (!myWindow) {
  alert('팝업 해제');
}
// myWindow.close();