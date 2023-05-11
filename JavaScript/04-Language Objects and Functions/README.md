# Language Objects and Functions

## Object console

```JavaScript
console.log();
console.info();
console.error();
console.warn();
console.clear();
console.table();

console.count();
console.countReset();

console.group();
console.groupEnd();

console.time();
console.timeLog();
console.timeEnd();
```

---

## Object date

```JavaScript
let date = new Date();

// Day of the month
date.getDate();

// Day of the week
date.getDay();

// Month of the year
date.getMonth();

// Year
date.getFullYear();

// Hours
date.getHours();

// Minutes
date.getMinutes();

// Second
date.getSeconds();


// Date String

date.toString();
date.toDateString();
date.toLocaleString();
date.toLocaleDateString();
date.toLocaleTimeString();
```

---

## Object Math

```JavaScript
// Square Root
Math.sqrt(25);

// Cobe Root
Math.cbrt(27);

// Max number
Math.max(3, 4, 5, 6);

// Min number
Math.min(-2, 4, 2, 1);

// Random number
Math.random()*10

// Round out
Math.round(3.6);

// Remove decimal
Math.trunc(3.9);

// PI
Math.PI;

// Square root 1/2
Math.SQRT1_2;

// Square root 2
Math.SQRT2;

// Euler
Math.E;

// Natural logarithm 2
Math.LN2;

// Natural logarithm 10
Math.LN10;

// The base 2 logarithm euler
Math.LOG2E;

// The base 10 logarithm euler
Math.LOG10E;
```

---

## Short Circuit Operator

```JavaScript
// OR
name = name || "Unknown";

// AND
result = age < 18 && "Minor";

// variable
const hello = (name = "unknown") => {}
```

---

## Popup Window

```JavaScript
alert()

confirm()

prompt()
```

---

## regular expressions

```JavaScript
const regularExpressions = (regexp, testText) => {
  const parameter = regexp;
  const text = testText;
  parameter.test(text)
    ? console.log("It is right")
    : console.log("It is incorrect");
};

regularExpressions(/^Che/, "Check the start");

```

| assertion | Quantifiers | Character sets | Groups and Ranks |
| --------- | ----------- | -------------- | ---------------- |
| /^/       | / \*/       | / \d/          | / \| /           |
| /$/       | / +/        | / \D/          | /[a-c]/          |
| / \b/     | / ?/        | / \w/          | /[^a-c]/         |
| /\B/      | / {}/       | /\W/           |                  |
|           | / {,}/      | /\s/           |                  |
|           | /{,} /      | /\S/           |                  |
|           |             | /\n/           |                  |

---

## IIFE

Immediately Invoked Function Expression

```JavaScript
(function () {
    console.log("Hello")
})();

(( d, w ) => {
    console.log("Hello")
})(document, window);
```

---

## Export and Import

```JavaScript
// Export
export default function nameFunction(){};

// Import
import nameFunction from "./export.js"
nameFunction();
```
