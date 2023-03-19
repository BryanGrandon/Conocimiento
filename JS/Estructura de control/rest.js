// (...elemento) representa un numero indefinido
function Sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}
console.log(Sumar(1, 2)); // 3
console.log(Sumar(1, 2, 3, 4)); // 10
