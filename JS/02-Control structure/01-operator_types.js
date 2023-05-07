// Arithmetic

let number1 = 2,
  number2 = 4;

let addition = number1 + number2;
console.log(addition); // 6

let subtraction = number1 - number2;
console.log(subtraction); // -2

let division = number1 / number2;
console.log(division); // 0.5

let multiplication = number1 * number2;
console.log(multiplication); // 8

let elevation = number1 ** number2;
console.log(elevation); // 16

let rest = number1 % number2;
console.log(rest);

let increase = number1++;
console.log(number1); // 3

let decrement = number2--;
console.log(number2); // 3

// logical

let logical = (value1, value2) => {
  // OR
  if (value1 || value2) {
    console.log(`( ${value1} || ${value2} ) = true `);
  } else {
    console.log(`( ${value1} || ${value2} ) = false `);
  }

  // AND
  if (value1 && value2) {
    console.log(`( ${value1} && ${value2} ) = true `);
  } else {
    console.log(`( ${value1} && ${value2} ) = false `);
  }

  // NOT
  if (!value1) {
    console.log(`( !${value1} = true )`);
  } else {
    console.log(`( !${value1} = false )`);
  }
};

logical(true, true);
logical(true, false);
logical(false, true);
logical(false, false);

// relational

let equal = 2 == "2";
console.log(equal); // true

let strictlyTheSame = 2 === "2";
console.log(strictlyTheSame); // false

let unequal = 2 != "2";
console.log(unequal); // false

let strictlyUneven = 2 !== "2";
console.log(strictlyUneven); //true

let greaterThan = 4 > 4;
console.log(greaterThan); // false

let greaterOrEqual = 4 >= 4;
console.log(greaterOrEqual); /// true

let smallerThan = 4 < 4;
console.log(smallerThan); // false

let smallerThanOrEqual = 4 <= 4;
console.log(smallerThanOrEqual); // true
