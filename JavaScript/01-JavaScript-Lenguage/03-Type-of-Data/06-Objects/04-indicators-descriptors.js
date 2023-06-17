"use strict";
let user = {
  name: "Bryan",
  lastName: "Moreno",
  toString() {
    return this.name.toUpperCase();
  },
};

// Writable
Object.defineProperty(user, "name", {
  writable: false,
});
// user.name = "Carlos"; // Error
console.log(user.name);

// Enumerable
Object.defineProperty(user, "toString", {
  enumerable: false,
});
for (let key in user) console.log(key);

// Configurable
Object.defineProperty(user, "lastName", {
  configurable: false,
});
user.lastName = "Grandon";
// delete user.lastName; // Error

// Object.defineProperties
const user_2 = {
  name: "Cecilia",
  lastName: "Correa",
};
Object.defineProperties(user_2, {
  name: { value: "Cecilia", writable: false },
  lastName: { value: "Correa", writable: false },
});
// user_2.name = "Margarita"; // Error
console.log(user_2);

// Clone object and properties
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
// clone.name = "Ricardo"; // Error
clone.lastName = "Correa";
// delete clone.lastName // Error
console.log(clone);
