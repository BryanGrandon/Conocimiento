// (...array) permite que un elemento iterable sea expandido.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [arr1, arr2];
console.log(arr3);
// [[1, 2, 3],[4, 5, 6]]

const arr4 = [...arr1, ...arr2];
console.log(arr4); // [1, 2, 3, 4, 5, 6]
