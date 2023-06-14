"use strict";
// || ( or )
const or = (value1, value2) => {
  let result = value1 || value2;
  console.log(`( ${value1} || ${value2} ) = ${result} `);
};
or(true, false); // true
or(false, false); // false

// && ( and )
const and = (value1, value2) => {
  let result = value1 && value2;
  console.log(`( ${value1} || ${value2} ) = ${result} `);
};
and(true, false); // false
and(true, true); // true

// ! ( not )
const not = (value) => {
  let result = !value;
  console.log(`( !${value} ) = ${result} `);
};
not(true); // false
not(false); // true
