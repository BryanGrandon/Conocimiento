# All About Variables

## [Variable Declaration](/JavaScript/All-About-Variables/variable-declarations.js)

To declare variables, we use one of the var, let, or const keywords.

```js
// Globally-scoped (do not use)
var nameVar = "var";

// Block-scope
let nameLet = "let";

const nameConst = "const";
const CREATOR_NAME = "Bryan Grandon";
```

## [Hoisting](/JavaScript/All-About-Variables/hoisting.js)

### Lexical environment

- Creates a space in memory for each variable created with var, in addition to functions and imports.

### Temporal Dead Zone

- Cannot access "variables" before initialization.

## [Variable Naming Rules](/JavaScript/All-About-Variables/naming-rules.js)

### 64 Available Characters.

- Lowercase
- Uppercase
- Number (do not use at start)
- Special symbols: `$`, `_`

### Read Only Variable

Using SNAKE_CASE notation.

- We know its value before executing the program

```js
const READ_ONLY = 21;
```

### Common Variables

Using camelCase notation

- Boolean: **is**, **has**
- other data type: Nouns with adjective

```js
let fullName = "Bryan Grandon";
const hasEighteen = true;
```

### Methods and Functions

Using camelCase notation

- Infinitive verbs
- What action does the function perfom?

```js
function createProduct() {}
```

### Class and Construction Function.s

Using PascalCase notation

- Usually nouns and adjectives.

```js
class Users {}
```

### Use at startup ( \_ )

- Private Variables.
- Omit Parameters.

### DOM Elements

- Use at startup ( $ )

```js
const $section = document.createElement("section");
```

## [Variable Scopes](/JavaScript/All-About-Variables/scopes.js)

### Global Scope:

- Variables declared outside of any functions or braces "{}" have globalscope.
- It can be accessd from anywhere within the same JavaScript code.

### Function Scope:

- Variables declared inside a function can only be used inside that same function. Outside of that function, they are not defined.

### Block Scope:

- A block is any part of the JavaScript delimited by "{}".
- Variables declared within a block cannot be accessd outside of that block.
- This Scope is only provided by the (let) and (const) keywords.
