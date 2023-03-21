/* Es una funcion que se pasa a otra funcion como un argumento, que luego se invoca dentro 
de la funcion externa para completar algun tipo de rutina o accion.*/

function modify(array, callback) {
  // hacemos algo ...
  array.push("bryan");
  // despues de hacer algo ...
  callback(array);
}

const names = ["catalina", "camila", "ricardo"];

modify(names, function (array) {
  console.log(`He modificado el array y ahora es de ${array.length} elementos`);
});

// Para que sea asincrono

function modify2(array, callback) {
  // hacemos algo ...
  array.push("andres");
  // despues de hacer algo ...
  setTimeout(function () {
    callback(array); // despues de 3s se ejecuta el callback
  }, 3000);
}

modify2(names, function (array) {
  console.log(`He modificado el array y ahora es de ${array.length} elementos`);
});
