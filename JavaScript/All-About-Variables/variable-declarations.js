"use strict";

{
  var varKeyword = "do not use";
}
console.log(varKeyword);

let letKeyword = 15;
{
  let letKeyword = 21;
  console.log(letKeyword);
}
console.log(letKeyword);

const constKeyword = "Bryan";
constKeyword = "Andres"; // Error
