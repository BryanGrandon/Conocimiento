"use strict";

/** do {
        statement
    }

    while (condition);

 * Is the same as the while statement except that 
    the condition is evaluated after the statement is executed.
 */

let i = 0;

do {
  console.log(i);
  i++;
} while (i === 3);
