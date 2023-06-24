"use strict";
// Type Conversions

// - String()

let string = String(123);
console.log(typeof string);

// - Number()

let number = Number("123");
console.log(typeof number);

// - Boolean()

let boolean = Boolean(1);
console.log(typeof boolean);

// Coercion

console.log(1 == "1");
console.log(1 === "1");

console.log(1 + "10");
console.log(1 + "10" / 2);

console.log(1 - "10");
