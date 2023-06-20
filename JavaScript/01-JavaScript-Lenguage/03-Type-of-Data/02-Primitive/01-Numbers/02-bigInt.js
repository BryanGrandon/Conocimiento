"use strict";
const bigInt = {
  normal: 9007199254740991 + 2,
  bigInt: 9007199254740991n + 2n,
};
console.log(bigInt);

// The "n" at the end means it's a BigInt
bigInt.normal = 1234567890123456789012345678901234567890;
bigInt.bigInt = 1234567890123456789012345678901234567890n;

console.log(bigInt.normal);
console.log(bigInt.bigInt);
