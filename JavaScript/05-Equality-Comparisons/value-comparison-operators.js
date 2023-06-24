"use strict";

const comparison = (number_1, number_2) => {
  // Operator: ==

  let option_1 = `[==]: ${number_1 == number_2}`;
  console.log(option_1);

  // Operator: ===

  let option_2 = `[===]: ${number_1 === number_2}`;
  console.log(option_2);

  // Operator: Object.is(n1, n2)

  let option_3 = `[Object.is]: "${Object.is(number_1, number_2)}"`;
  console.log(option_3);
};

comparison(21, "21");
// comparison(undefined, undefined);
// comparison(NaN, NaN);
