let num = 4936;
// 4. ones place is 6
let ones = num % 10;
console.log(ones);
// 3. tens place is 3
num = (num - ones) / 10;
let tens = num % 10;
console.log(tens);
// 2. hundreds place is 9
num = (num - tens) / 10;
let hundreds = num % 10;
console.log(hundreds);
// 1. thousands place is 4
num = (num - hundreds) / 10;
let thousands = num;
console.log(thousands);

