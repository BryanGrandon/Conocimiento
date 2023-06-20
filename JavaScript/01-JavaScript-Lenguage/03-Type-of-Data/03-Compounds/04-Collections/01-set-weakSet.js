"use strict";
const set = new Set();

for (let i = 1; i <= 3; i++) {
  set.add(i); // 1, 2, 3
  set.add(i); // 1, 2, 3
}
console.log(set.has(1)); // true
set.delete(1);

const sizeOfTheSet = set.size;
set.clear();

const array = [1, 2, 3, 1, 2, 3];
console.log([...new Set(array)]); // [1, 2, 3]

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

console.log(weakSet);
