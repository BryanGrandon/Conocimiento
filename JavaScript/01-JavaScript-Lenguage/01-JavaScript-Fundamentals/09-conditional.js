"use strict";

// if, else if, else
let condition = false;

if (condition) {
  console.log("option 1");
} else if (!condition) {
  console.log("option 2"); // option 2
} else if (condition) {
  console.log("option 3");
} else {
  console.log("last option");
}

// Ternary operator
let age = 19;
let adult = age > 18 ? "true" : "false";
console.log(adult); // true
