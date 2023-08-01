//동적 스타일 적용하기
// let list = document.querySelectorAll('h1');
// list.forEach(element => {
//   element.style.Color = 'white';
//   element.style['backgroundColor'] = 'gray';  
// });



//클래스 name 속성

// let list = document.querySelectorAll('h1');
// list.forEach(element => {
//   element.className = 'head'; 
// });

let list = document.querySelectorAll('h1');
list.forEach(element => {
  // element.classList.add('head');// head를 덮어 쓴다
  // element.classList.remove('head');
  // setInterval(()=>{
  // },1000);
  element.classList.toggle('head'); //넣다 빼었다
});