/* Los Sets son una estructura de datos que contiene valores unicos, 
los Sets no permiten elementos duplicados y no guardan los elementos */

const arr = [1, 2, 3, 1, 2, 3];
const arr2 = [...new Set(arr)];
console.log(arr2); // [1, 2, 3]

// Para agregar al set
const setAdd = new Set();
setAdd.add(1);
setAdd.add(2);
setAdd.add(3);

console.log(setAdd); // Set {1, 2, 3}

// Para pasarlo a un array
const set = [1, 2, 3, 1, 2, 3];
const setArr = Array.from(new Set(set));
console.log(setArr); // [1, 2, 3]

// Buscar un valor en el set
const buscar = new Set([1, 2, 3, 1, 2, 3]);
console.log(buscar); // Set {1, 2, 3}
console.log(buscar.has(2)); // true

// Eliminar elemento
const setDelete = new Set([1, 2, 3]);
setDelete.delete(2);
console.log(setDelete); // Set {1, 3}
