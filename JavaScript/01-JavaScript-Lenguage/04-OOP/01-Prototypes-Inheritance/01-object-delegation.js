"use strict";
// 1. Literal Objects
const obj = { name: "Bryan" }; // Object.prototype
const array = [1, 2, 3]; // Array.prototype
const isFunction = () => {}; // Function.prototype

// 2. Object.create()
const chef = {
  type: "Basic Kitchen",
  cook: function (dish) {
    console.log(`Cooking ${dish}`);
  },
};
const bryan = Object.create(chef);

// 3. Constructor === Class
function chef_2(type = "Basic Kitchen") {
  this.type = type;
}
chef_2.prototype.cook = function (dish) {
  console.log(`Cooking ${dish}`);
};

const andres = new chef_2();

// class
class chef_3 {
  constructor(type = "Basic Kitchen") {
    this.type = type;
  }
  cook(dish) {
    console.log(`Cooking ${dish}`);
  }
}
const camila = new chef_3();

// 4. __proto__ and setPrototypeOf()
const user = {
  name: "Bryan",
  profession: "Developer",
  type: "Front-end",
};
user.__proto__ = chef;
Object.setPrototypeOf(user, chef);

// =====================================
// New Function of the chef
chef.cut = function (ingretient) {
  console.log(`Cut ${ingretient}`);
};
user.cut("potatoes");

// Is prototype of
console.log(chef.isPrototypeOf(user));

// (This) in Object delegation
chef.greet = function () {
  console.log(`Hello, I am chef specializing in ${this.type}`);
};
user.greet();

// Property Shadowing
console.log(user.type);
console.log(chef.type);
