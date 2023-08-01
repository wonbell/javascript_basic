// 중첩(Helper)함수
function main(){
  console.log("주 기능입니다");

  function helper (num){
    return Math.pow(num, 2);
  }
  let x =10;
  let reslut = helper(x);
  console.log(reslut);

}
main();

// helper();는 호출 불가능