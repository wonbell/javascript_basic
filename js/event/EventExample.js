// 이벤트 소스에 이벤트 리스너 등록 방법
// function eventListener() {
//   console.log('누르지마시오');
// }


document.querySelector('button').addEventListener('click', (event) => {
  console.dir(event);
  if (event.ctrlKey) {
    event.target.style.backgroundColor = 'gray';
    console.log('누르지마시오');
  }
});

// document.querySelector('button').addEventListener('mouseenter', function (event) {
// this.style.backgroundColor = 'green';
// });

// document.querySelector('button').addEventListener('mouseleave', function (event) {
//   this.style.backgroundColor = '';
// });

document.querySelector('button').addEventListener('mouseenter', event => {
  event.target.style.backgroundColor = 'green';
});

document.querySelector('button').addEventListener('mouseleave', event => {
  event.target.style.backgroundColor = '';
});

function serverSend(message) {
  console.log(message + '를 서버에 전송한다');
}

let input = document.querySelector('[type=text]');
input.addEventListener('keypress', event => {
  // console.log(input.value);
  if (event.keyCode === 13) {
    const message = input.value;
    serverSend(message);
    event.target.value = '';
  }
});

// name속성을 부여하면 search로 바로 접근 가능하다
// console.dir(document.frm.search);

// document.frm.search.addEventListener('change', event => {
//   // console.dir(event.target.options);
//   let options = event.target.options;
//   let selectValue = event.target.options[options.selectedIndex].value;
//   console.log(selectValue);
// });

document.frm.search.addEventListener('change', event => {
  let options = document.querySelectorAll('option');
  options.forEach(function (element) {
    if(element.selected){
      console.log(element.value);
    }    
  });
});
