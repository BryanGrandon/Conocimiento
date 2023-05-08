//  IF, ELSE IF , ELSE

let condition = Math.round(Math.random() * 100);
console.log(condition);

if (condition > 0 && condition < 18) {
  console.log(`He or she is underage`);
} else if (condition > 18) {
  console.log(`He or she is of legal age`);
} else {
  console.log(`Number entered is worng`);
}

// TERNARY OPERATOR

let age = condition;

age >= 18
  ? console.log(`He or she is of legal age`)
  : console.log(`He or she is underage`);

//   SWITCH CASE

let options = Math.round(Math.random() * 3);
console.log(options);

switch (options) {
  case 1:
    console.log(`If the option is 1`);
    break;

  case 2:
    console.log(`If the option is 2`);
    break;

  case 3:
    console.log(`If the option is 3`);
    break;

  default:
    console.log(`option default`);
    break;
}
