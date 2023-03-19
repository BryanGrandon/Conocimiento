const obj = {
  key: "valor",
  nombre: "Bryan",
  obj2: {
    edad: 21,
  },
};
console.log(obj);
console.log(obj["key"]); // valor
console.log(obj.nombre); // Bryan

let edad = 21;
let nombre = "Bryan";
const obj2 = {
  edad,
  nombre,
};

console.log(obj2);
console.log(obj2.nombre); // Bryan
