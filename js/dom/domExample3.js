// 속성 제어하기
let aElement = document.querySelector('a');
let value = aElement.getAttribute('href');
console.log(value);
//주소를 구글로 바뀐다. 인자를 두개준다
aElement.setAttribute('href','https://www.google.com');

//노드 생성 및 연결
// let liE= document.createElement('li');
// let text = document.createTextNode('자지마');
// liE.appendChild(text);
// document.querySelector('ol').appendChild(liE);

document.querySelector('ol').innerHTML = '<b>자지마</b>';
// 콘솔창에 가져오는 법 
console.log(document.querySelector('ol').innerText);

function show() {
  let div = '<div>댓글 내용</div>';
  let article = document.querySelector('article');
  article.innerHTML = div;
}