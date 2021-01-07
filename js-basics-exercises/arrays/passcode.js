let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

let passcodeJoined = passcode.join('-');
console.log(passcodeJoined);
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

// joined string with no saparator character
let passcodeCombined = passcode.join('');
console.log(passcodeCombined);