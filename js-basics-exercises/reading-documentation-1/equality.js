// Do == and === differ, and if so, how?

'8' == 8; // returns true
'8' === 8; // returns false

/*
** == and === differ in that == checks to see if the left operand matches loosely the value of the right operand,
** after having converted the values to the same type
** === checks to see if the left operand matches exactly the value and type of the right operand
*/