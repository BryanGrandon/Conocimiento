"use strict";
let bigInt = 1n;
let normalNumber = 1;

const type = (value) => {
  console.log(typeof value);
};
type(bigInt);
type(normalNumber);

// Max Safe Integer

let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);

// BigInt()

const passToBigInt = (value) => {
  try {
    let bigInt = BigInt(value);
    return bigInt;
  } catch (error) {
    return "Cannot pass to a bigInt";
  }
};

// BigInt only accepts numbers

const numbers = {
  positive: passToBigInt(21),
  negative: passToBigInt(-15),
  hexadecimal: passToBigInt(0xff),
  binary: passToBigInt(0b11111111),
  octal: passToBigInt(0o377),
};
console.log(numbers);

// Numbers that do not accept

let decimal = passToBigInt();
console.log(decimal);

let theInfinity = passToBigInt(Infinity);
console.log(theInfinity);

let nan = passToBigInt(NaN);
console.log(nan);
