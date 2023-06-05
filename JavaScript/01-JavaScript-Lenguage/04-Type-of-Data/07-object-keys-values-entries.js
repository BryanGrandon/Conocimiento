"use strict";

const user = {
  name: "Bryan",
  age: 21,
};

console.log(Object.keys(user)); // ['name', 'age']
for (let value of Object.keys(user)) {
  console.log(value); // name, age
}

console.log(Object.values(user)); // ['Bryan', 21]
for (let value of Object.values(user)) {
  console.log(value); // Bryan, 21
}

console.log(Object.entries(user)); // [['name', 'Bryan'], ['age', 21]]
for (let value of Object.entries(user)) {
  console.log(value); // ['name', 'Bryan'], ['age', 21]
}
