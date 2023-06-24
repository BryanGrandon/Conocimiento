"use strict";

// Length

const length = "Hello world".length;
console.log(length);

// Methods

let testText = "User and id";

const accessing = {
  start: testText[0],
  end: testText.at(-1),
};
console.log(accessing);

const search = {
  exists: testText.indexOf("and"),
  notExists: testText.indexOf("coffee"),

  includes: testText.includes("er a"),
  startsWith: testText.startsWith("Use"),
  endsWith: testText.endsWith("d id"),
};
console.log(search);

// To Lowercase and uppercase

const change = (text) => {
  let changeText = `toLowerCase:[${text.toLowerCase()}], toUpperCase:[${text.toUpperCase()}]`;
  console.log(changeText);
};
change("TeXt");

// Trim

console.log("   spaces  ".trim());
