"use strict";
// 64 Available Characters

let a, A, $, _;

// Read Only Variable

const MAX_CHARACTERS_FOR_NAME = 80;

// Common Variables

let fullName = "Bryan Grandon";
const hasEighteen = true;

// Methods and Functions

function createProduct() {}

// Class and Construction Functions

class Users {}

function Customers() {}

// Private Variables

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

// Omit Parameters

const products = [...new Array(10)].map((_, index) => ({
  id: index,
  name: `Product-${index}`,
}));

// DOM Elements

const $title = document.title;
