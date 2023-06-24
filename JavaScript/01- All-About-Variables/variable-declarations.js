"use strict";
// To declare variables, we use one of the var, let, or const keywords.

// [var] keyword -> globally-scoped (do not use)

{
  var varKeyword = "var";
}
console.log(varKeyword);

// [let] keyword -> block-scoped

let letKeyword = 15;
{
  let letKeyword = 21;
  console.log(letKeyword);
}
console.log(letKeyword);

// [const] keyword -> block-scoped

const constKeyword = "Bryan";
constKeyword = "Andres"; // Error
