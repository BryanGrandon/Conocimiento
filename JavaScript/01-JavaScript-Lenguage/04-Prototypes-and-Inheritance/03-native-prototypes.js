"use strict";
const obj = {};

console.log(obj.__proto__ === Object.prototype);

console.log(obj.toString === obj.__proto__.toString);
console.log(obj.toString === Object.prototype.toString);

console.log(Object.prototype.__proto__); // null

const obj_2 = {
  0: "Hello",
  1: "World",
  length: 2,
};

obj_2.join = Array.prototype.join;
console.log(obj_2.join(","));
