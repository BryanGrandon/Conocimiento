let string = "Valor entre comillas";

let singleQuotes = "Hello";
let doubleQuotes = "World";

// Concatenation
console.log(singleQuotes + doubleQuotes); // HelloWorld

// Interpolate
let user = "Bryan";
let accentdQuotes = `Your name is ${user}`;
console.log(accentdQuotes); // Your name is Bryan

let dynamicHtmlGeneration = `<ul>
    <li></li>
    <li></li>
</ul>`;

// Properties
let valor = "Hello world";
console.log(valor.length); // 11 -> number of characters

// METHODS

let test = "test text";

const START_TEST = test.startsWith("test");
console.log(START_TEST); // true

const END_TEST = test.endsWith("ext");
console.log(END_TEST); // true

let textTransform = "TrAnSfOrM";

const TEXT_TO_UPPER_CASE = textTransform.toUpperCase();
console.log(TEXT_TO_UPPER_CASE); // TRANSFORM

const TEXT_TO_LOWER_CASE = textTransform.toLowerCase();
console.log(TEXT_TO_LOWER_CASE); // transform

let stringArray = "Hello";
const ARRAY_STRING = stringArray.split();
console.log(ARRAY_STRING); // ['Hello']

let findOut = "Check if it is in the string";
const THIS_IS = findOut.includes("in the st");
console.log(THIS_IS); // true

let RemoveSpaces = "   Spaces   ";
const NO_SPACE = RemoveSpaces.trim();
console.log(NO_SPACE); // Spaces
