"use strict";
/** 4 WAYS TO USE PROTOTYPES IN JAVASCRIPT
 *    1. Literal Objects
 *    2. Create()
 *    3. Constructor and class
 *    4. setPrototypeOf() and __proto__
 */

// Prototypes Inheritance = Object delegation
const chef = {
  type: "Basic Kitchen",
  cook: function (dish) {
    console.log(`Cook ${dish}`);
  },
};

const bryan = {
  name: "Bryan",
  age: 20,
  profession: "Developer",
  type: "Front-end",
};

// First Option
bryan.__proto__ = chef;

// Second Option
Object.setPrototypeOf(bryan, chef);

// Add function to the chef
chef.cut = function (ingretient) {
  console.log(`Cut ${ingretient}`);
};
bryan.cut("potatoes");

// Property Shadowing
console.log(bryan.type);
console.log(chef.type);

// Prototype Chain --- 1. Literal Objects
const anotherPerson = { name: "Andres" };
const numbers = [1, 2, 3];
const additionFunction = (a, b) => a + b;
const regexp = /\d+/gi;
const now = new Date();

anotherPerson.toString = function () {
  console.log(this.name);
};

console.log(numbers.toString());
anotherPerson.toString();

// Object.prototype
console.log(Object.prototype === Array.prototype.__proto__);
console.log(Object.prototype === Function.prototype.__proto__);

// Is prototype of
console.log(chef.isPrototypeOf(bryan));

// This
chef.greet = function () {
  console.log(`Hello, I am chef specializing in ${this.type}`);
};
bryan.greet();
