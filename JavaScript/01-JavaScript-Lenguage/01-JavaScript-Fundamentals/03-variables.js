"use strict";
// let : Is the modern way of declaring a variable.
// const : Is like let, but the value of the variable cannot be altered.

// A variable is a "box with a name"
let message;
message = "Hello";
// ---
let message2 = "Bye";

// Multiple variables
let user = "Bryan",
  age = 21;

// Change value
user = "Andres";
console.log(user);

// Declare twice
let value = 1;
// let value = 2; // Error

// Variable naming
let userName; // use camelCase
let test123;
let $;
let _;
// let 1a; // Incorrect name
// let my-name; // Incorrect name

// Capitalization
let apple;
let APPLE;

// Reserved names
// let let; // Error
// let return; // Error
// let function; // Error
// Etc...

// Uppercase constants
// For invariable and preset values ("hard-code")
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ---
let color = COLOR_ORANGE;
alert(color); // #FF7F00
