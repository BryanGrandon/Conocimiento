"use strict"; // Make sure "user strict" is at the beginning

// This code works in the modern way

(function () {
  "use strict";

  // Your code
});

// Accidental creation of global variables
let name = "Bryan";
let age = 21;
if (age > 20) {
  nme = "Andres"; // Error
}

// Read-only attributes
const user = {};
Object.defineProperty(user, "name", { value: "Bryan", writable: false });
user.name = "Andres"; // Error

// Non-extendable objects
const user2 = { name: "Andres" };
Object.preventExtensions(user2);
user2.age = 21; // Error
// ---
let nameUser = "Andres";
nameUser.age = 21; // Error

// Duplicate parameters
function greet(name, lastName, name /* Error */) {
  console.log(`Hello ${name}, ${lastName}`);
}
greet("Bryan", "Grandon");

// Not allowed With

// Free functions
const user3 = {
  name: "Bryan",
  greet: function () {
    console.log(`Hello, I'm ${this.name} `);
  },
};
user3.greet();
let greetUser = user3.greet();
greetUser(); // = window.greetUser() / Error
