"use strict";
// Our code should be as clean and easy to read as possible.

// Keys
// For a very short code, one line is allowed.

if (n < 0) console.log("option 1");

// Is usually more readable.

if (n < 0) {
  console.log("option 2");
}

// Line size

let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;

// Indentation
// Horizontal indentation: 2 or 4 spaces.
// Vertical indentation: empty lines to divide code into logical blocks.

function checkAge(age) {
  let message = "";
  //                        <--
  if (age >= 18) message = "is legal age";
  else message = "not legal age";
  //                        <--
  return message;
}

// There are three ways to organize the functions

// Option 1

function createElement() {}
// --- All functions
createElement();

//  Option 2

greet();
// The code that uses them
function greet() {}

// Option 3

// Mixed: a function is declared where it is used for the first time.
// ---------------
// Use extension (prettier - Code formatter)
