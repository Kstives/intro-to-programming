let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

/*
**  $3.99 gets logged because the ! operator negates the sale variable's value
** so the ternary operator in admissionPrice is asking "if sale is not true log
** 5.25, else log 3.99"
*/