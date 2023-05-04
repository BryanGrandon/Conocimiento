const array = [21, true, null, "string"];
console.log(array);

let elemento1 = array[0];
console.log(elemento1); // 21

let elemento4 = array[3];
console.log(elemento4); // string

// PROPIEDADES

const cantidadDeElementos = [1, 2, 3, 4];
console.log(cantidadDeElementos.length); // 4

// METODOS

const agregar = [1, true];
agregar.push(4);
console.log(agregar); // [1, true, 4]

const eliminar = [1, true, 4];
eliminar.pop();
console.log(eliminar); // [1, true]

const porcionCompleta = [1, true, 2, false];
const porcion = porcionCompleta.slice(1, 3);
console.log(porcion); // [true, 2]

const integrar = [1, 3];
integrar.splice(1 /* posicion */, 0 /* elementos */, 2 /* valor */);
console.log(integrar);

const arrayInicialMap = [1, 2, 3];
const arrayFinalMap = arrayInicialMap.map((x) => x + 10);
console.log(arrayFinalMap); // [11, 12, 13]

const filtrarArray = [12, 21, 30, 10];
const filtrado = filtrarArray.filter((x) => x >= 18);
console.log(filtrado); // [21, 30]

const iterarLosElemento = [21, 32];
const iteracion = iterarLosElemento.forEach((e, i) => {
  console.log(`${e} en el indice ${i}`);
});

const comprobacion = [2, 4, 6];
const compruebaUnElemento = comprobacion.some((x) => x > 2);
console.log(comprobacion); // true
const compruebaTodosLosElemtos = comprobacion.every((x) => x > 2);
console.log(compruebaTodosLosElemtos); // false

const muestraElPrimerResultado = [2, 3, 4];
const primerElemento = muestraElPrimerResultado.find((x) => x > 2);
console.log(primerElemento); // 3
const indexDelElemeto = muestraElPrimerResultado.findIndex((x) => x > 2);
console.log(indexDelElemeto); // 1

const descAsce = [2, 4, 1, 3];
const ascendente = descAsce.sort((a, b) => (a > b ? 1 : -1));
console.log(ascendente); // [1,2,3,4]
const descendente = descAsce.sort((a, b) => (a > b ? -1 : 1));
console.log(descendente); // [4,3,2,1]

const invertirArray = [2, 4, 1, 3];
const invertir = invertirArray.reverse();
console.log(invertir); // [3,1,4,2]
