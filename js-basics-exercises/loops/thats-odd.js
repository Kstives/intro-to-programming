// write a while loop that logs all odd natural numbers between 1 and 40

let count = 1;

while (count < 41) { // should be count < 40
  if (count % 2 === 1) {
    console.log(count);
  }
count += 1;
}