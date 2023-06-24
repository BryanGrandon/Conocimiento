"use strict";
/** 64 Available Characters
 *    a - z
 *    A - Z
 *    0 - 9 (do not use at start)
 *    $
 *    _
 */

let a, A, $, _;

/** Read Only Variable
 *    Notation -> SNAKE_CASE.
 *    We know its value before executing the program.
 */

const MAX_CHARACTERS_FOR_NAME = 80;

/** Common Variables
 *    Notation -> camelCase.
 *    boolean -> is, has...
 *    other data type -> nouns with adjectives.
 */

let fullName = "Bryan Grandon";
const hasEighteen = true;

/** Methods and Functions
 *    Notation -> camelCase.
 *    Infinitive verbs.
 *    What action does the function perform?
 */

function createProduct() {}

/** Class and Construction Functions
 *    Notation -> PascalCase.
 *    Usually nouns and adjectives.
 */

class Users {}

function Customers() {}

/** Private Variables
 *    use -> ( _ ) -> _variable
 */

class User {
  constructor(email) {
    this._email = email;
  }

  getEmail() {
    return this._email;
  }
}

const user = new User("test@gmail.com");
user._email = "other@gmail.com"; // bad

/** Omit Parameters
 *    use -> ( _ )
 */

const products = [...new Array(10)].map((_, index) => ({
  id: index,
  name: `Product-${index}`,
}));

/** DOM Elements
 *    use -> ( $ ) -> $variable
 */

const $title = document.title;
