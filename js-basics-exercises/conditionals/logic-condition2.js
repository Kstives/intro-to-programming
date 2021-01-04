if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// This will always output 'No...' because the AND operator requires
// both conditions to be true, and this isn't possible with the conditions
// being opposite, true & false