"use strict";
// Lexical environment

// Function

isFunction();
function isFunction() {
  console.log("I am Function");
}

// Import

import {} from "module";

// var

console.log(varKeyword);
var varKeyword = "I am var";

// Temporal Dead Zones

let myAge = getAge();
const age = 21;

function getAge() {
  return age; // Error
}

//
let name = name;
