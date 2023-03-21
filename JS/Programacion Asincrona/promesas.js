/* Las promesas en Javascript se representan a traves de un , 
y cada promesa estara en un estado concreto: pendiente, 
aceptada o rechazada. Ademas, cada promesa tiene los siguientes
metodos, que podremos utilizar para utilizarla: */

function tipoPromise() {
  if (typeof value !== "number") {
    return Promise.reject(`Error, el valor ingresado`);
  }
  return new Promise((resolve, reject) => {
    resolve({ value, result: value * value }, 0 | (Math.random() * 1000));
  });
}

tipoPromise(3)
  .then((obj) => {
    console.log(`Inicio Promise`);
    console.log(`Promise ${obj.value}, ${obj.result}`);
    return tipoPromise(2);
  })

  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.result}`);
    console.log(`Fin Promise`);
  })

  .catch((err) => console.error(err));
