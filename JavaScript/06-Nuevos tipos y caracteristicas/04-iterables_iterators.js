// Iterables

/* En JavaScript, los iterables son objetos que implementan el protocolo iterable, lo que 
significa que tiene un metodo llamado Symbol.iterator que devuelve un objeto $iterador$. */

// Iterator

/* En JavaScript, un $iterador$ es un objeto que permite recorrer una 
coleccion y devolver un valor al terminar */

const iterable = [1, 2, 3, 4, 5];

const iterador = iterable[Symbol.iterator]();

let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
