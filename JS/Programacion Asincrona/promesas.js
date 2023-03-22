// Hacer algo asincronico, como una llamada a una API
const hacerLlamadaAPI = () => {
  return { datos: "API" };
};
const promise = new Promise((resolve, reject) => {
  const data = hacerLlamadaAPI();
  if (data) {
    resolve(data); // resuelve la promesa con los datos
  } else {
    reject(Error("Ha ocurrido un error")); // rechaza la promesa
  }
});

promise
  .then((data) => {
    // Hacer algo con los datos resueltos
    console.log("3 - Los datos son:", data);
  })
  .catch((error) => {
    // Manejar el error si la promesa es rechazada'
    console.error(error);
  });

// Trabajar inmediatamente sin asignacion de un nombre
const Suma = (a, b) => {
  return a + b;
};
new Promise(function (resolve, reject) {
  console.log("1- Me ejecuto asincronamente");
  setTimeout(function () {
    const data = Suma(2, 4);
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Ha ociurrido un error"));
    }
  }, 1000);
})
  .then((res) => console.log(`4 - Termina con el valor ${res}`))
  .catch((err) => console.error(err));

console.log("2 - Estoy al final");
