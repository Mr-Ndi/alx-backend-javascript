/*
 * displaying a welcoming message
 * listening to user input
 * converting input to string ansd trim the space around
 * handling exit process and displays message
 */

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  console.log('Your name is: ' + name);
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit();
});
