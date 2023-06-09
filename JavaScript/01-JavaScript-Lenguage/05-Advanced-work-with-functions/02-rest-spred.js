"use strict";

// Rest ...
function addition(...args) {
  let variable = 0;
  for (let arg of args) {
    variable += arg;
  }
  return variable;
}
console.log(addition(2, 4, 6, 8)); // 20
console.log(addition(2, -4, 6)); // 4

// Spread ...
let arr = [3, 5, 1];
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); // 5

const arr2 = [1, 2, 3];
console.log([arr, arr2]); // [[3, 5, 1], [1, 2, 3]]
console.log([...arr, ...arr2]); // [3, 5, 1, 1, 2, 3]
