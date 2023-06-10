"use strict";

function sayHi(phrase = undefined) {
  console.log(`${this.name}: ${phrase}`);
}
let user = { name: "Bryan" };
let admin = { name: "Admin" };

// Call
sayHi.call(user);
sayHi.call(user, "Hello");

// Apply
sayHi.apply(admin);
sayHi.apply(admin, ["Hello"]);
