"use strict";
new Function("a", "b", "return a + b");
new Function("a , b", "return a + b");

let functionBody = `
let result = arg1 + arg2;
for (arg of argN){ result += arg };
return result
`;
let addition = new Function("arg1, arg2, ...argN", functionBody);
console.log(addition(1, 2, 3));
