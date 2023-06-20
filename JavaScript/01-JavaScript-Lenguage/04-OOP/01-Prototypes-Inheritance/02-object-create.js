"use strict";
const person = {
  init: function (name) {
    this.name = name;
    return this;
  },
  greet: function () {
    console.log(`Hello, My name is ${this.name}`);
    return this;
  },
};

const bryan = Object.create(person).init("Bryan").greet();
