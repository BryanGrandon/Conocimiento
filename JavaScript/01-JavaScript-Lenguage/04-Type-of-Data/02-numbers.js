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

// Rounding
const rounding = {
  floor: Math.floor(3.6),
  ceil: Math.ceil(3.1),
  round: Math.round(3.5),
  trunc: Math.trunc(3.5),
};
console.log(rounding);

// Imprecise calculation
console.log(1e500);
console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2);

// parseInt()
const int = parseInt("100.5px");
console.log(int); // 100

// ParseFloat()
const float = parseFloat("100.5px");
console.log(float);

// isFinite
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(21)); // true
