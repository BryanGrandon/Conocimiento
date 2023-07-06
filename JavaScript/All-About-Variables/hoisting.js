"use strict";
// Lexical environment

isFunction();
function isFunction() {
  console.log("I am Function");
}

import {} from "module";

console.log(varKeyword);
var varKeyword = "I am var";

// Temporal Dead Zones

let myAge = getAge();
const age = 21;

function getAge() {
  return age; // Error
}
