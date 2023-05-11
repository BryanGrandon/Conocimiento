// Arithmetic

function aritmetic(value, number1, number2) {
  if (value == "addition") {
    let result = number1 + number2;
    console.log(result);
  } else if (value == "subtraction") {
    let result = number1 - number2;
    console.log(result);
  } else if (value == "division") {
    let result = number1 / number2;
    console.log(result);
  } else if (value == "multiplication") {
    let result = number1 * number2;
    console.log(result);
  } else if (value == "elevation") {
    let result = number1 ** number2;
    console.log(result);
  } else if (value == "rest") {
    let result = number1 % number2;
    console.log(result);
  } else {
    console.log(`"${value}" not valid `);
  }
}
aritmetic("addition", 2, 4);

let number = 10;

let increase = number++;
console.log(number);

let decrement = number--;
console.log(number);

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
// logical(true, false);
// logical(false, true);
// logical(false, false);

// relational

function relational(number1, value, number2) {
  if (value == "==") {
    let result = number1 == number2;
    console.log(result);
  } else if (value == "===") {
    let result = number1 === number2;
    console.log(result);
  } else if (value == "!=") {
    let result = number1 != number2;
    console.log(result);
  } else if (value == "!==") {
    let result = number1 !== number2;
    console.log(result);
  } else if (value == ">") {
    let result = number1 > number2;
    console.log(result);
  } else if (value == ">=") {
    let result = number1 >= number2;
    console.log(result);
  } else if (value == "<") {
    let result = number1 > number2;
    console.log(result);
  } else if (value == "<=") {
    let result = number1 > number2;
    console.log(result);
  } else {
    console.log(`"${value}" not valid `);
  }
}

relational(2, "==", "2");
