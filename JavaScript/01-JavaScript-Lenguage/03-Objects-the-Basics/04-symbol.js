"use strict";

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2); // false
console.log(id1.description); // id

// "Hidden" keys
const user = {
  name: "Bryan",
};
let id = Symbol("id");
user[id] = 1;
console.log(user[id]);

// Symbol.keyFor
let sym = Symbol.for("name");
let sym2 = Symbol("id");
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // undefined
