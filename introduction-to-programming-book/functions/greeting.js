// greeting.js

// let greetingMessage = 'Good Morning!';
// console.log(greetingMessage);

// let greetingMessage = 'Good Morning';

// function greetPeople() {
//   console.log(greetingMessage);
// }

// function changeGreetingMessage(newMessage) {
//   greetingMessage = newMessage;
// }

// changeGreetingMessage('Good Evening');
// greetPeople();

// function greetPeople() {
//   let greetingMessage = 'Good Morning';
//   console.log(greetingMessage);
// }

// greetPeople();
// console.log(greetingMessage); // raises ReferenceError

function greetPeople(greetingMessage) {
  console.log(greetingMessage);
}

greetPeople('Good Morning'); // parameters act like local variables in functions, 
// which get initialized when we pass back values from arguments in a function invocation