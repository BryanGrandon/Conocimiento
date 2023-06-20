"use strict";
const obj = {
  get propName() {},
  // Getter, the code executed to get obj.propName
  set propName(value) {},
  // Setter, the code executed to set obj.propName= value
};

const user = {
  name: "John",
  lastName: "Smith",

  get fullName() {
    return `${this.name} ${this.lastName}`;
  },

  set fullName(value) {
    [this.name, this.lastName] = value.split(" ");
  },
};
console.log(user);
console.log(user.fullName);
user.fullName = "Alice Cooper";
console.log(user.fullName);
console.log(user);

// descriptors
const user_2 = {
  name: "John",
  lastName: "Smith",
};
Object.defineProperty(user_2, "fullName", {
  get() {
    return `${this.name} ${this.lastName}`;
  },
  set(value) {
    [this.name, this.lastName] = value.split(" ");
  },
});
console.log(user_2.fullName);
user_2.fullName = "Alice Cooper";
console.log(user_2.fullName);

// Smarter getters and setters
const user_3 = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      console.log("4 characters minimum");
      return;
    }
    this._name = value;
  },
};

user_3.name = "Pedro";
console.log(user_3.name);

user_3.name = "";
