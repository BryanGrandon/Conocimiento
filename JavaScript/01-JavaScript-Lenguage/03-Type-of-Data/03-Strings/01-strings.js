"use strict";
let string = "Characters"; // 'Characters'

// Concatenation
console.log("Hello" + "World");

// Interpolate
let user = "Bryan";
let backticks = `The user is ${user}`;
console.log(backticks); // The user is Bryan

let dynamicHtmlGeneration = `<ul>
    <li></li>
    <li></li>
</ul>`;

// Special characters
const stecialCharacters = {
  newLine: ["\n", "\r\n"],
  tabulation: "\t",
};
