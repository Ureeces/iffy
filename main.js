// Your code here!
const colorCombine = require('./color-combinator.js');
const colorDecon = require('./color-deconstructor.js');

const input1 = getInput(0);
const input2 = getInput(1);

let message;

if(!input1){
  message = "You need to enter something for it to work my dude.";
}

else if(!input2) {
  message = colorDecon(input1);
}

else if(input1 && input2) {
  message = colorCombine(input1, input2);
}

console.log(message);


// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
