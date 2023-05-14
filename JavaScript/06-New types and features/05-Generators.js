function* iterable() {
  yield "Hola";
  yield "Mundo";
  yield 21;
}

let iterador = iterable();

for (y of iterador) {
  console.log(y);
}

// (yield) pass it to an array

const arr = [...iterable()];
console.log(arr);

// Example

function elevation(valor) {
  setTimeout(() => {
    return console.log({ valor, result: valor * valor });
  }, Math.random() * 1000);
}

function* generator() {
  console.log("Start Generator");
  yield elevation(0);
  yield elevation(1);
  yield elevation(2);
  yield elevation(3);
  yield elevation(4);
  yield elevation(5);
  console.log("Finish Generator");
}

let gen = generator();

for (let y of gen) {
  console.log(y);
}
