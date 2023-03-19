// for

for (let i = 0; i < 10; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8
}

// for in / for of

// Obj

let obj = {
  a: 21,
  b: "Bryan",
};

// for in
for (keys in obj) {
  console.log(keys); // a, b
}

// Array

let array = [21, "Bryan"];

// for in
for (indice in array) {
  console.log(indice); // 0, 1
}
// for of
for (valor of array) {
  console.log(valor); // 21, Bryan
}

// String

let string = "Hola";

// for in
for (indice in string) {
  console.log(indice); // 0, 1, 2, 3
}
// for of
for (valor of string) {
  console.log(valor); // H, o, l, a
}
