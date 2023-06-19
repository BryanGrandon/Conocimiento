"use strict";
const animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
  console.log(name);
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.eats);

let rabbit2 = new rabbit.constructor("Black Rabbit");
console.log(rabbit2.eats);
