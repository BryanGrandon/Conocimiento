"use trict";

// .toString()
let value = true; // boolean
value = value.toString();
console.log(typeof value); // string

// Number()
let str = "123";
let num = Number(str);
console.log(num);

// Boolean
let number = 1; // "s"
let bool = Boolean(number);
console.log(bool); // true
// --
number = 0; // ""
bool = Boolean(number);
console.log(bool); // false
