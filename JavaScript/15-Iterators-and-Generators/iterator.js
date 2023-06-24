"use strict";

/* The iterator is an object that allows you to loop through a collection and return a value when done */

const iterable = [1, 2, 3, 4, 5];

const iterador = iterable[Symbol.iterator]();

let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
