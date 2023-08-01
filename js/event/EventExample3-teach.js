
// 디폴트 이벤트 해제
// 기본 이벤트를 비활성화 시킨다, 클릭을 해도 반응 X
let anchors = document.querySelectorAll('a');
anchors.forEach(element => {
  element.addEventListener('click', event => {
    event.preventDefault();
  });
});

