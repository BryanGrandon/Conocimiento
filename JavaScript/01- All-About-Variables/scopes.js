"use strict";

/** Global Scope:
 *    - Variables declared outside of any functions or braces "{}" have global scope.
 *    - It can be accessd from anywhere within the same JavaScript code.
 */

let globalScope = true;
{
  console.log(globalScope);
}

/** Function Scope:
 *    - Variables declared inside a function can only be used inside that same function.
 *      Outside of that function, they are not defined.
 */

function scope() {
  let functionScope = true;
  console.log(functionScope);
}
console.log(functionScope); // Error
scope();

/** Block Scope:
 *    - A block is any part of the JavaScript delimited by "{}".
 *    - Variables declared within a block cannot be accessd outside of that block.
 *    - This Scope is only provided by the (let) and (const) keywords.
 */

{
  let blockScope = true;
}
console.log(blockScope); // Error
