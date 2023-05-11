function functionName() {
  let name = "Bryan";
  let coffee = true;
  if (coffee) {
    console.log(`${name} wants a coffee`);
  } else {
    console.log(`${name} doesn't want a coffee`);
  }
}
functionName();

const anonymousFunction = function () {
  let name = "Bryan",
    age = 18;
  if (age >= 18) {
    console.log(`${name} is of legal age`);
  } else {
    console.log(`${name} is not of legal age`);
  }
};
anonymousFunction();

function addition(number1, number2) {
  return number1 + number2;
}

let result = addition(2, 4);
console.log(result);
