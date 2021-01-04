let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;

console.log(isMoving);

// the console logs true because both conditions of the && AND operator evaluate to true

/*
** Bonus Question: The parentheses are needed, otherwise the && and || operators
** would have conflicted and it would have resulted in a different evaluation.
** Breaking force, acceleration, and speed as the left operand and acceleration as
** the right operand.
*/