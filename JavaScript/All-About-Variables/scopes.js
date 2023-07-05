"use strict";

// Global Scope

let globalScope = true;
{
  console.log(globalScope);
}

// Function Scope:

function scope() {
  let functionScope = true;
  console.log(functionScope);
}
console.log(functionScope); // Error
scope();

// Block Scope:

{
  let blockScope = true;
}
console.log(blockScope); // Error
