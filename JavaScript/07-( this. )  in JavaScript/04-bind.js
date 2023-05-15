//  The bind() method is a function that allows you to bind an object to a function

this.name = "Global";

const person = {
  name: "Bryan",
  greet: function () {
    console.log(`Hello ${this.name}`); // Hello Bryan, Hello Global
  },
};
person.greet();

const anotherPerson = {
  greet: person.greet.bind(this),
};
anotherPerson.greet();
