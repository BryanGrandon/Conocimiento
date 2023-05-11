/* Generadores en JavaScript son funciones especiales que devuelven en objeto iterator. */

function* iterable() {
  yield "Hola";
  yield "Mundo";
  yield 21;
}

let iterador = iterable();

for (y of iterador) {
  console.log(y);
}

// Pasar los yield a un array

function* iterable() {
  yield "Hola";
  yield "Mundo";
  yield 21;
}

const arr = [...iterable()];
console.log(arr);
