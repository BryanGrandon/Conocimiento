"use strict";
/** Function Naming
 *    Functions must be short and do exactly one thing.
 *    A name should clearly describe what the function does.
 *
 *    - show  - get  - calc  - create  - check  - etc...
 */

function functionName(parameters) {
  console.log(parameters);
}
functionName();

// Return
function addition(number_1, number_2) {
  return number_1 + number_2;
}
let result = addition(29, 19);
console.log(result);

// Copy a functin to another variable
const sumar = addition;
result = sumar(2, 4);
console.log(result);

// Function expressions
const anonymousFunction = function (coffee = true) {
  if (coffee) console.log("wants a coffee");
  else console.log("doesn't want a coffee");
};
anonymousFunction();
anonymousFunction(false);

// Arrow Function
const arrowFunction = () => {
  console.log("Arrow Function");
};
arrowFunction();
