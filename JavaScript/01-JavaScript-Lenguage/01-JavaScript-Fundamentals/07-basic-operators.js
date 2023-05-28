"use strict";

const math = {
  addition: "+",
  subtraction: "-",
  multiplication: "*",
  division: "/",
  rest: "%",
  exponentiation: "**",
};

// Rest
function rest(number1, number2) {
  let result = number1 % number2;
  console.log(`(${number1} % ${number2} = ${result})`);
}
rest(5, 2); // 5 % 2 = 1
rest(8, 3); // 8 % 3 = 2
rest(8, 4); // 8 % 4 = 0

// Exponentiation
function exponentiation(number, exponent) {
  let result = number ** exponent;
  console.log(`(${number} ** ${exponent} = ${result})`);
}
exponentiation(2, 3); // 2 ** 3 = 8
exponentiation(2, 4); // 2 ** 4 = 16
exponentiation(2, 1 / 2); // 2 ** 0.5 = 1.4142135623730951

// String concatenation with binary +
function concatenation(str1, str2, ...str3) {
  let string = str1 + str2;
  str3.forEach((e) => {
    string += e;
  });
  console.log(string);
}
concatenation("my", "string"); // mystring
concatenation(1, "2"); // 12
concatenation("1", 2, 2); // 122
concatenation(2, 2, "1"); // 41

// Modify in place
let value = 2;
value += 5; // 7
value *= 2; // 14
console.log(value);

// Increase / Decrease
let increase = 0;
increase++;
console.log(increase); // 1
console.log(++increase); // 2
// ---
let decrease = 0;
decrease--;
console.log(decrease); // -1
console.log(--decrease); // -2
