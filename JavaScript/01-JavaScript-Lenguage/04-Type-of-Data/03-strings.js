let singleQuotes = "Hello";
let doubleQuotes = "World";

// Concatenation
console.log(singleQuotes + doubleQuotes); // HelloWorld

// Interpolate
let user = "Bryan";
let accentuatedQuotes = `Your name is ${user}`;
console.log(accentuatedQuotes); // Your name is Bryan

let dynamicHtmlGeneration = `<ul>
    <li></li>
    <li></li>
</ul>`;

// Special characters
const stecialCharacters = {
  newLine: ["\n", "\r\n"],
  tabulation: "\t",
};

// length
const length = "Hello world".length;
console.log(length);

// Accessing characters
let str = "Hello";
console.log(str[0]);
console.log(str[str.length - 1]);
console.log(str.at(-1));

// Capitalization change
const textToLowerCase = "Text".toLowerCase();
console.log(textToLowerCase); // text

const textToUpperCase = "Text".toUpperCase();
console.log(textToUpperCase); // TEXT

// Searching for a substring of characters
const text = "User and id";
console.log(text.indexOf("id")); // 9
console.log(text.indexOf("coffee")); // -1

// includes, startsWith, endsWith
console.log("user text".includes("ser"));
console.log("user text".startsWith("use"));
console.log("user text".endsWith("ext"));

// trim
console.log("   spaces  ".trim());
