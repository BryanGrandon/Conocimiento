"use strict";
let user_1 = new Object(); // object constructor
let user_2 = {}; // object literal

// Literals and properties
let age = 21;
let user = {
  name: "Bryan",
  age,
};

// object.keyAdd = value
user.isAdmin = true;

// Delete object.key
delete user.age;

console.log(user);

// Existing property
console.log("age" in user);
console.log("name" in user);

// Copy the reference
const admin = user;
admin.name = "Andres";
console.log(user.name);

// Cloning
const userClone = {};
Object.assign(userClone, user);
console.log(userClone);

// Object.Keys()
for (let key of Object.keys(user)) {
  console.log(key);
}
// Object.Values()
for (let value of Object.values(user)) {
  console.log(value);
}
// Object.Entries()
for (let entries of Object.entries(user)) {
  console.log(entries);
}
