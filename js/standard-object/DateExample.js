let today = new Date();
console.log(today.toString());
console.log(today.toLocaleString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

console.log(today.getTime());

today = Date.now();
today = new Date.setTime(today);
console.log(today.toLocaleString());

