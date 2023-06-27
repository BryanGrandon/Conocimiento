"use strict";

class MyClass {
  constructor() {}
  method1() {}
  method2() {}
  method3() {}
}

// Example

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// Use:

let user = new User("Bryan");
user.sayHi();

// Class = Protopyte

console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype));

// Class Expression

let User_2 = class {
  sayHi() {
    console.log("Hello");
  }
};

new User_2().sayHi();

console.log(User_2);
