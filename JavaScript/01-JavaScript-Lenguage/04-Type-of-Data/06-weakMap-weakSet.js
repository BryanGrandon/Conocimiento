"use strict";
// WeakMap: keys must be objects
const weakMap = new WeakMap();

let bryan = { name: "Bryan" };
weakMap.set(bryan, "...");

console.log(weakMap.get(bryan)); // ...
weakMap.delete(bryan);
console.log(weakMap.has(bryan)); // false

// WeakSet: keys must be objects
const weakSet = new WeakSet();

const obj_1 = { name: "obj 1" };
const obj_2 = { name: "obj 2" };
const obj_3 = { name: "obj 3" };

weakSet.add(obj_1);
weakSet.add(obj_1);
weakSet.add(obj_2);

console.log(weakSet.has(obj_1)); // true
console.log(weakSet.has(obj_3)); // false
