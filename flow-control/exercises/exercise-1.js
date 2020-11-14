false || (true && false); // false
true || (1 + 2); // true 
(1 + 2) || true; // true (but evaluates as 3 because it short-circuits at 1 + 2)
true && (1 + 2); // true (but evaluates as 3 because it finishes evaluating at 1 + 2)
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // true  
/* false, because, although 4 evaluates as true, it is not a boolean but a number and so it does not precisely equal true)
*/
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true


