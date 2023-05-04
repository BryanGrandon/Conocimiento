// Valores
let positivo = 21;
let negativo = -21; // Con guion(-)
let cero = 0;
let infinito = Infinity;
let decimal = 5.8; // con punto(.)
let nan = NaN;

// NaN (Not a Number)
console.log(21 * "string"); // NaN
console.log(0 / 0); // NaN
console.log(Infinity - Infinity); // NaN

// METODOS

let stringNumeroEntero = "21.5";
console.log(parseInt(stringNumeroEntero)); // 21

let stringNumeroFlotante = "21.5";
console.log(parseFloat(stringNumeroFlotante)); // 21.5

let establecerDecimales = 1.23456789;
console.log(establecerDecimales.toFixed(2)); // 1,23
