// let
let blockScope = "Outside";
{
  let blockScope = "Inside";
  console.log(blockScope); // Inside
}
console.log(blockScope); // Outside

// CONST
const CONSTANT = "Value cannot be charged when declared";
CONSTANT = 21; // Assignment to constant variable.
