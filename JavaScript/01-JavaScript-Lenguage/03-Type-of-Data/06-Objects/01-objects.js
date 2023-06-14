"use strict";
let user_1 = new Object(); // object constructor
let user_2 = {}; // object literal

// Literals and properties
let age = 21;

let user = {
  key: "value",
  name: "Bryan",
  age,
};
console.log(user.key);
console.log(user.age);

// object.keyAdd = value
user.isAdmin = true;

// Delete object.key
delete user.age;

// object["key key"] = value
user["mother name"] = "Cecilia";
delete user["mother name"];

console.log(user);

// Existing property
console.log("age" in user); // false
console.log("name" in user); // true

// For in (loops)
for (let key in user) {
  console.log(key);
  console.log(user[key]);
}
