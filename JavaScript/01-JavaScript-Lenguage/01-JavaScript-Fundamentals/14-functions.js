"use strict";
let userName = "Bryan"; // External variable

// Function statement
function variable() {
  let userName = "Andres"; // Local variable
  let message = `Hello, ${userName}`;
  console.log(message);
}
variable();
console.log(userName); // Bryan
// console.log(message) // message is not defined

// Parameters
function parameters(name, age) {
  age >= 18 && age < 120
    ? console.log(`${name} is of legal age`)
    : console.log(`${name} is not of legal age`);
}
parameters("Bryan", 21); // Bryan is of legal age

// Predetermined values
function greet(name = "Anonymous") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello Anonymuos
greet("Andres"); // Hello Andres

// Returning a value
function addition(number1, number2) {
  return number1 + number2;
}
let result = addition(2, 4);
console.log(result); // 6

// Function Naming
const functionNaming = {
  show: "showMessage",
  get: "getAge",
  calc: "calcAddition",
  create: "createForm",
  check: "checkPermission",
};

// Functions must be short and do exactly one thing.
// A name should clearly describe what the function does.
