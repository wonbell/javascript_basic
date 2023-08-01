console.dir(window.document.firstChild); //<!DOCTYPE html> 이 나온다
console.dir(window.document.firstElementChild); //html이 나온다
console.dir(window.document.firstElementChild.constructor);

//#1. Dom 트리 계층 구조로 검색
//Node의 공통 속성 3개
console.log(document.firstElementChild.nodeType === Node.ELEMENT_NODE);
console.log(document.firstElementChild.nodeName);
console.log(document.firstElementChild.nodeValue);

//Body 요소 접근
//enter값도 자식으로 여긴다 ex) <head>  <meta charset="UTF-8"> 사이의 엔터도 자식으로 여긴다
console.log(document.firstElementChild.lastElementChild.nodeName);

//#2. get메소드 특정 요서 접근
let pArray = document.getElementsByTagName('p'); //p를 담은 유사배열
//리턴타입은 배열이 아니고 유사배열
console.log(pArray.constructor);
for (const element of pArray) {
  console.log(element.nodeName);
}

let pElemnet = document.getElementById('myP');
console.dir(pElemnet);

let htmlCollection = document.getElementsByClassName('container');
console.dir(htmlCollection);

console.clear();

//#3. CSS 선택자를 이용한 검색. 이 방식으로 많이 쓴다
// console.dir(document.querySelector('p')); // 첫번째 것만 가져온다
// console.dir(document.querySelectorAll('p')); // p가들어간 모든 것을 가져온다
let nodeList = document.querySelectorAll('p');
nodeList.forEach(element =>{
  console.log(element.nodeName);
});

let pEl = document.querySelector('#myP');
console.log(pEl.nodeName);

let textNode = pEl.firstChild
console.log(textNode.nodeName);
console.log(textNode.nodeValue);
// alert(textNode.nodeValue);

console.log(document.querySelector('.container').firstChild.nodeValue);

//가상클래스 선택자 . li에 굳이 class를 주지 않고 쓸 수 있다
console.log(document.querySelector('li:first-child').firstChild.nodeValue);
// console.log(document.querySelector('li:first-child').firstChild.data);
console.log(document.querySelector('li:last-child').firstChild.nodeValue);
console.log('==========================================================');
let list = document.querySelectorAll('li:nth-child(2n+1)');
list.forEach(element =>{
  console.log(element.firstChild.nodeValue);
});