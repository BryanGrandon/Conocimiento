// Named Function Expression
"use strict";

// The name property
function sayHi() {
  console.log("Hello");
}
console.log(sayHi.name); // sayHi

// The length property
function f1(a) {}
function f2(a, b, c, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 3

// Custom properties
function custom() {
  console.log("Custom");
  custom.counter++;
}
custom.counter = 0;
console.log(custom.counter); // 0
custom();
custom();
console.log(`Called ${custom.counter} times`); // Called 2 times
