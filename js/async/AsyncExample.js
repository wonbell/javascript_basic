console.log("1 실행");
doTask();

console.log("2 실행");

//대기 하고 있다가 마지막에 나온다. 비동기
function doTask() {
  setTimeout(()=>{
    console.log("doTask 실행");
  },1000);
}
console.log("3 실행");

