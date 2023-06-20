"use strict";
// Boolean: logical type
let isTrue = true;
let isFalse = false;

// Boolean values are also the result of comparisons
let isGreater = 4 > 1;
console.log(isGreater); // true

const valuesTendingToTrue = {
  boolean: true,
  object: {},
  array: [],
  string: "string",
  number: 0.1,
  infinite: Infinity,
};
const valuesTendingToFalse = {
  boolean: false,
  null: null,
  undefined: undefined,
  numberZero: 0,
  notANumber: NaN,
  stringEmpty: "",
};

if ([]) {
  console.log("true");
} else {
  console.log("false");
}
