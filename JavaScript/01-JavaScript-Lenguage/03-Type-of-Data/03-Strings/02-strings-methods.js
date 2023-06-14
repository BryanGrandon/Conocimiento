"use strict";
// Length
const length = "Hello world".length;
console.log(length);

// Accessing characters
let str = "Hello";
console.log(str[0]);
console.log(str[str.length - 1] === str.at(-1));

// Capitalization change
const textToLowerCase = "Text".toLowerCase();
console.log(textToLowerCase); // text

const textToUpperCase = "Text".toUpperCase();
console.log(textToUpperCase); // TEXT

// Searching for a substring of characters
const text = "User and id";
console.log(text.indexOf("id")); // 9
console.log(text.indexOf("coffee")); // -1

// Includes, StartsWith, EndsWith
console.log("user text".includes("ser"));
console.log("user text".startsWith("use"));
console.log("user text".endsWith("ext"));

// Trim
console.log("   spaces  ".trim());
