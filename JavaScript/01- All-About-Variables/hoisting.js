"use strict";
/** Execution Contest in JavaScript
 *  Lexical environment
 *      Creates a space in memory for each variable created with var, in addition to functions and imports
 */

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

/** Temporal Dead Zones
 *      Cannot access "variable" before initialization
 */

let myAge = getAge();
const age = 21;

function getAge() {
  return age; // Error
}

//
let name = name;
