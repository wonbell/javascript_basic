//자바 스크립트에선 전역함수 x
//BOM의 구조
console.log(location.href);

// let url = 'http://www.naver.com';
// location.href = url;

function go() {
  let url = 'http://www.naver.com';
  location.href = url;
  // location.assign(url);
  // replace는 히스토리(뒤로가기)에 남지 않는다
  // location.replace(url);
  // location.reload(); 새로 고침
}