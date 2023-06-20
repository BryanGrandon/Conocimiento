"use strict";
const user = { name: "Bryan" };

// Copy the reference
const admin = user;
admin.name = "Andres";

console.log(user.name); // Andres

// Comparison by reference
const a = {},
  c = {},
  b = a;
console.log(a == b, a === b); // true true
console.log(a == c); // false

// Cloning
function clone(obj) {
  let object = {};
  for (let key in obj) {
    object[key] = obj[key];
  }
  return object;
}
const userClone1 = clone(user);
console.log(userClone1);

const userClone2 = {};
Object.assign(userClone2, user);
console.log(userClone2);
