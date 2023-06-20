"use strict";
// More ways to write a number
let billion1 = 1000000000;
let billion2 = 1_000_000_000;
let billion3 = 1e9; // 1 = 1, e9 = 1000000000
console.log(billion3);

// Hexadecimal, binary and octal numbers
const number = {
  hexadecimal: 0xff,
  binary: 0b11111111,
  octal: 0o377,
};
console.log(number);

// Imprecise calculation
console.log(1e500);
console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2);

// isFinite
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(21)); // true

// NaN
let nan = "Not a number" / 2;
console.log(nan);
