// function declaration
function functionName(zeroOrMoreArguments) {
  // function body
}

greetPeople();

function greetPeople() {
  console.log("Good Morning!");
}

// function expression
let greetPerson = function () {
  console.log("Good Morning!");
};

greetPerson();

let greetAnimals = function() {
  console.log("Good Morning, Rabbit!");
};

greetAnimals();

// still function expression
(function greetFish() {
  console.log("Good Morning, fish!");
});

// higher-order function expression
function makeGreeter(name) {
  return function greeter() {
    console.log(`Hello ${name}`);
  };
}

// arrow function
let greetCows = () => console.log("Good Morning, Cows!");
greetCows();

// arrow function's implicit returns
let add = (a, b) => a + b;
 // return statement can be omitted if function body only contains a single expression
 let getNumber = (text) => {
   let rlSync = require('readline-sync');
   let input = rlSync.question(text);
   return Number(input);
 }

 let number1 = getNumber("Enter a number: ");
 let number2 = getNumber("Enter another number: ");
 console.log(add(number1, number2));
