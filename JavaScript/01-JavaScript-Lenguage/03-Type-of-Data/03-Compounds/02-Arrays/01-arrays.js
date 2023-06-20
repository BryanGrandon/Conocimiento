"use strict";
const array_1 = new Array(); // object constructor
const array_2 = []; // object literal

const array = ["Apple", { name: "Bryan" }, true];

// Array Access
console.log(array[1].name); // Bryan
console.log(array.at(-1)); // true

// Rename or replace
array[0] = "Lemon";
console.log(array[0]); // Lemon

// Elements Number
console.log(array.length); // 3
