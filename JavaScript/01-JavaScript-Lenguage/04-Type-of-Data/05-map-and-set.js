"use strict";
// Map
const map = new Map();

map.set("key", "Value");
const get = map.get("key");
console.log(map); // Map {'key' => 'Value'}

const bryan = { name: "Bryan", age: 21 };
map.set(bryan, "admin");
console.log(map.get(bryan)); // admin

console.log(map.has("key")); // true
console.log(map.delete("key")); // true

console.log(map.size); // 1

map.clear();
console.log(map); // Map { }

// Iteration over Map
const store = new Map([
  ["article_1", 200],
  ["article_2", 300],
  ["article_3", 500],
]);

for (let keys of store.keys()) {
  console.log(keys); // article_1, article_2, article_3
}
for (let values of store.values()) {
  console.log(values); // 200, 300, 500
}
store.forEach((value, key, map) => {
  console.log(`${key}: ${value - 50}`);
});

//  Set
const set = new Set();

set.add(1);
set.add(1);
set.add(2);
set.add(2);

console.log(set); // Set {1, 2}
console.log(set.size); // 2

set.delete(1);
console.log(set.has(1)); // false

set.clear();

const array = [1, 2, 3, 1, 2, 3];
const arraySet = [...new Set(array)];
console.log(arraySet); // [1, 2, 3]
