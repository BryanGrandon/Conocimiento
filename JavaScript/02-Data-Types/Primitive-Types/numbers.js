"use strict";

// More Ways To Write Number

const numbers = {
  normal: 1000000,
  normal_: 1_000_000,
  abbreviation: 1e6,
  hexadecimal: 0xff,
  binary: 0b11111111,
  octal: 0o377,
};
console.log(numbers);

// Imprecise calculation

console.log(1e500);
console.log(0.1 + 0.2);

// isFinite

console.log(isFinite(Infinity));
console.log(isFinite(21));

// .toFixed()

let number = 1.23456;
console.log(number.toFixed(2)); // 1.23

// NaN

let nan = "Not a number" / 2;
console.log(nan);
