"use strict";

/** while (condition){
       statement
    }

 * a loop is created that executes a statement each time the condition evaluates to true.
    The condition is evaluated before the statement is executed.
 */

let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}

i = 0;
while (i <= 6) {
  console.log(i);
  i += 2;
}
