function nombreDeLaFunction() {
  let nombre = "Bryan";
  let cafe = true;
  if (cafe === true) {
    console.log(`${nombre} quiere un cafe`);
  } else {
    console.log(`${nombre} no quiere un cafe`);
  }
}
nombreDeLaFunction();

const functionAnonima = function () {
  let nombre = "Bryan";
  let cafe = true;
  if (cafe === true) {
    console.log(`${nombre} quiere un cafe`);
  } else {
    console.log(`${nombre} no quiere un cafe`);
  }
};
functionAnonima();

function sumaRetun(a, b) {
  return a + b;
}
let resultado = sumaRetun(2, 4);
console.log(resultado);
