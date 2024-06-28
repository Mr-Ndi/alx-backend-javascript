import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));

// Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.