"use strict";
const math = {
  addition: "+",
  subtraction: "-",
  multiplication: "*",
  division: "/",
  exponentiation: "**",
  rest: "%",
};

// Rest
function rest(n1, n2) {
  return `( ${n1} % ${n2} = ${n1 % n2} )`;
}
console.log(rest(6, 2)); // 1

// Modify in place ( (operator)= )
let variable = 2;
variable += 8; // variable = variable + 8;
variable *= 9; // variable = variable * 9;

// Increase
let increase = 0;
console.log(increase++); // 0
console.log(++increase); // 2

// Decrease
let decrease = 0;
console.log(decrease--); // 0
console.log(--decrease); // -2
