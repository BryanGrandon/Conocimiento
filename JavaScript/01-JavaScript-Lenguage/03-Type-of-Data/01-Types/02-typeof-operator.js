"use strict";
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof undefined);
console.log(typeof Symbol("id"));

console.log(typeof Math);
console.log(typeof function () {});
console.log(typeof null); // object - Error - It is a special value
