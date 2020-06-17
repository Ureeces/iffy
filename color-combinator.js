/******************
 * YOUR CODE HERE *
 ******************/


// function colorCombinator(color1, color2) {
//   const firstIsNotAPrimary = color1 !== 'red'
//     && color1 !== 'yellow'
//     && color1 !== 'blue';
//   const secondIsNotAPrimary = color2 !== 'red'
//     && color2 !== 'yellow'
//     && color2 !== 'blue';

//   if (firstIsNotAPrimary || secondIsNotAPrimary) {
//     return 'Sorry, one of those colors is not a primary color!';
//   }

//   let answer = '';
//   if (color1 === 'red' && color2 === 'yellow') {
//     answer = 'orange';
//   }

//   if (color1 === 'red' && color2 === 'blue') {
//     answer = 'purple';
//   }

//   if (color1 === 'yellow' && color2 === 'blue') {
//     answer = 'green';
//   }

//   return 'When you combine ' + color1 + ' and ' + color2 + ', you get ' + answer + '!';
// }

function colorCombinator(color1, color2) {
  let combined;
  const colors = color1 + " "  + color2;

  if(colors.includes("red") && colors.includes("yellow"))
      combined = "orange";

  else if(colors.includes("red") && colors.includes("blue"))
      combined = "purple";

  else if(colors.includes("blue") && colors.includes("yellow"))
      combined = "green";

  else 
      return "Sorry, one of those colors is not a primary color!";

  return "When you combine " + color1 + " and " + color2 + ", you get " + combined + "!";
}

module.exports = colorCombinator;




module.exports = colorCombinator;
