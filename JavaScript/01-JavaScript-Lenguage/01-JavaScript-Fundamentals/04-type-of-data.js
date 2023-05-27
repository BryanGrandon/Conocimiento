"use strict";
// A value in JavaScript always belongs to a certain data type.
let message = "Hello"; // string
message = 21; // number

// Number
let n = 123;
n = 12.345;
// Operations: Multiplication, Division, Addtion, Subtraction and else.
// Special numeric values
let infinity = 1 / 0;
let negativeInfinity = -Infinity;
let nan = "Not a number" / 2;

// BigInt
console.log(9007199254740991 + 1); // number:  9007199254740992
console.log(9007199254740991 + 2); // number: 9007199254740992
// The "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// String
let str = "Hello"; // ' '
let backticks = `${str} World`;
backticks = `The resul is ${1 + 34}`;

// Boolean: logical type
let isTrue = true;
let isFalse = false;
// Boolean values are also the result of comparisons
let isGreater = 4 > 1;
console.log(isGreater); // true

// Null
let nothing = null; // Reference to a non-existent object
let empty = null;
let unknownValue = null;

// Undefined
let unassignedValue;
console.log(unassignedValue);
// ---
let age = 100;
age = undefined;
console.log(age);

// Object
const obj = {
  name: "Bryan",
  age: 21,
};
// And more complex entities.

// Symbol
let syl = Symbol();
let syl2 = Symbol();
console.log(syl === syl2); // False

// The typeof operator

console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof undefined);
console.log(typeof Symbol("id"));

console.log(typeof Math);
console.log(typeof function () {});
console.log(typeof null); // object - Error - It is a special value
