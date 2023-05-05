// Values
let positive = 21;
let negative = -21;
let zero = 0;
let infinite = Infinity;
let decimal = 5.8;
let nan = NaN;

// NaN (Not a Number)
console.log(21 * "string"); // NaN
console.log(0 / 0); // NaN
console.log(Infinity - Infinity); // NaN

// METHODS

let stringOfNumber = "21.5";

let wholeNumber = parseInt(stringOfNumber);
console.log(wholeNumber);

let floatNumber = parseFloat(stringOfNumber);
console.log(floatNumber); // 21.5

let setDecimals = 1.23456789;
let twoDecimal = setDecimals.toFixed(2);
console.log(twoDecimal);
