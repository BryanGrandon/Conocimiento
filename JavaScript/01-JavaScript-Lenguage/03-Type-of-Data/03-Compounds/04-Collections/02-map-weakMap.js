"use strict";
const map = new Map();

map.set("key", "Value");
map.set(0, "Value 0");
map.set(1, "Value 1");

console.log(map.get("key")); // Value
console.log(map.has("key")); // true
map.delete("key");

console.log(map.size);
map.clear();

// WeakMap: keys must be objects
const weakMap = new WeakMap();

let object = { name: "Bryan" };
weakMap.set(object, "...");

console.log(weakMap.get(object)); // ...
weakMap.delete(object);
console.log(weakMap.has(object)); // false
