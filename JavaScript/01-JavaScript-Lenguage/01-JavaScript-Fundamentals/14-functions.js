"use strict";
// Function statement
let userName = "Bryan"; // External variable
function variable() {
  let userName = "Andres"; // Local variable
  console.log(userName);
}
variable();

// Parameters // Predetermined values // Returning a value
function checkAge(name = "Anonymous", age = 18) {
  return age >= 18 && age < 120
    ? `${name} is of legal age`
    : `${name} is not of legal age`;
}
const userAge = {
  user1: checkAge(),
  user2: checkAge("Bryan", 21),
};
// Copy a functin to another variable
const checkLegalAge = checkAge;
let user3 = checkLegalAge("Andres");

// Function expressions
const anonymousFunction = function (coffee = true) {
  if (coffee) console.log("wants a coffee");
  else console.log("doesn't want a coffee");
};
anonymousFunction();

// Callback functions
function modify(name, callback) {
  let nameUpper = name.toUpperCase();
  callback(nameUpper);
}
modify("Andres", (name) => console.log(`Hello, ${name}`));

function callbackModify(name) {
  console.log(`Hello, ${name}`);
}
modify("bryan", callbackModify);

// Arrow Function
const arrowFunction = () => {
  console.log("Arrow Function");
};
arrowFunction();

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
