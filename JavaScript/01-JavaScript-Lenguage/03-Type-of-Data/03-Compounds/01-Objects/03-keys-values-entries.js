"use strict";
const user = {
  name: "Bryan",
  age: 21,
};

// Keys: ['name', 'age']
for (let value of Object.keys(user)) {
  console.log(value); // name, age
}

// Values: ['Bryan', 21]
for (let value of Object.values(user)) {
  console.log(value); // Bryan, 21
}

// Entries: [['name', 'Bryan'], ['age', 21]]
for (let value of Object.entries(user)) {
  console.log(value); // ['name', 'Bryan'], ['age', 21]
}
