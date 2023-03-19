let string = "Valor entre comillas";

let comillasSimples = "Hola"; // Por extencion Prettier
let comillasDobles = "Mundo";
// concatenecion
console.log(comillasSimples + comillasDobles); // HolaMundo

// interpolar
let nombre = "Bryan";
let comillasAcentuadas = `Mi nombre es ${nombre}`;
console.log(comillasAcentuadas); // Mi nombre es Bryan

let generacionDinamicaDeHtml = `<ul>
    <li></li>
    <li></li>
</ul>`;

// PROPIEDADES
let valor = "Hola Mundo";
console.log(valor.length); // 10 -> Cantidad de caracteres

// METODOS
let frase = "Hola MUNdo";

let inicioFinal = "Inicio Final";
console.log(inicioFinal.startsWith("Inicio")); // true
console.log(inicioFinal.endsWith("Final")); // true

let mayusculaMinuscula = "TrAnSfOrMaR";
console.log(mayusculaMinuscula.toUpperCase()); // TRANSFORMAR
console.log(mayusculaMinuscula.toLowerCase()); // transformar

let stringArray = "Hola";
console.log(stringArray.split()); // ['Hola']

let comprobar = "Comprobar Si Esta en string";
console.log(comprobar.includes("Si Esta")); // true

let eliminarEspacios = "   Espacio   ";
console.log(eliminarEspacios.trim()); // Espacio
