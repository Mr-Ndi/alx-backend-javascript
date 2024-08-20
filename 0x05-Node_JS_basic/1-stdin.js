// displaying a welcoming message
console.log('Welcome to Holberton School, what is your name?');
// listening to user input
process.stdin.on('data', (input) => {
  // converting input to string ansd trim the space around
  const name = input.toString().trim();
  console.log('Your name is: ' + name);
});
// handling exit process and displays message
process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit();
});
