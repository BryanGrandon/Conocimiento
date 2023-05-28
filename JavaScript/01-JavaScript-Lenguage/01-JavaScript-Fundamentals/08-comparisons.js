"use trict";

const comparisons = {
  greaterThan: ">",
  smallerThan: "<",
  greaterThanOrEqual: ">=",
  lessThanOrEqualTo: "<=",
  equal: "==",
  distinct: "!=",
};
// The comparison operators return a boolean value.

// The result is boolean
console.log(2 > 1); // true
console.log(2 < 1); // false

// String comparison
console.log("Z" > "A"); // true
console.log("Glow" > "Glee"); // true
console.log("Be" > "Bee"); // fasle

// Comparison of different types
console.log("2" > 1); // true
console.log("01" == 1); // true

// Strict equality (===)
console.log(0 == false); // true
console.log(0 === false); // false

// null and undefined
console.log(null == undefined); // true
console.log(null === undefined); // fasle
