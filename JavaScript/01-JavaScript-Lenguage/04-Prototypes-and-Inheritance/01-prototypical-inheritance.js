"use strict";
const animal = {
  eats: true,
  walk() {
    console.log("Animal takes a step");
  },
};

const rabbit = {
  jumps: true,
  __proto__: animal,
};
console.log(rabbit.eats);
rabbit.walk();
rabbit.walk = function () {
  console.log("Rabbit! jump!, jump!");
};
rabbit.walk();

const longEar = {
  earLength: 10,
  __proto__: rabbit,
};
console.log(longEar.eats);

// Loop for...in
console.log(Object.keys(rabbit));
for (let prop in rabbit) {
  console.log(prop);

  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Is ours: ${prop}`);
  } else {
    console.log(`It is inherited: ${prop}`);
  }
}

// set / get
const user = {
  name: "John",
  lastName: "Smith",

  set fullName(value) {
    [this.name, this.lastName] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.lastName}`;
  },
};

const admin = {
  __proto__: user,
  isAdmin: true,
};
console.log(admin.fullName);
admin.fullName = "Alice Cooper";

console.log(admin.fullName);
console.log(user.fullName);
