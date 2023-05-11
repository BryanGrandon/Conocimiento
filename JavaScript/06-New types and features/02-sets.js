/* Sets are a data structure that contains unique value,
Sets do not allow duplicate items and do not save items */

const arr = [1, 2, 3, 1, 2, 3];
const arr2 = [...new Set(arr)];
console.log(arr2); // [1, 2, 3]

// Add to set
const addSet = new Set();
addSet.add(1);
addSet.add(2);
addSet.add(3);

console.log(addSet); // Set {1, 2, 3}

// Pass it to an array
const set = [1, 2, 3, 1, 2, 3];
const setArr = Array.from(new Set(set));
console.log(setArr); // [1, 2, 3]

// Search from a value in set
const lookFor = new Set([1, 2, 3, 1, 2, 3]);
console.log(lookFor); // Set {1, 2, 3}
console.log(lookFor.has(2)); // true

// Delete element
const setDelete = new Set([1, 2, 3]);
setDelete.delete(2);
console.log(setDelete); // Set {1, 3}
