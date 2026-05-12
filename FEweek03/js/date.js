const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

console.log(`${year}년 ${month}월 ${day}일`);
console.log(`${hours}시 ${minutes}분 ${seconds}초`);