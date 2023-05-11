/* Sincrono: La respuesta sucede en el presente, una operacion sincrona esperara el resultado.
Asincrono: La respuesta sucede a futuro, una operacion asincrona no esperara el resultado. */

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);

// Orden de ejecucion -> 1, 3, 2

/* Esta forma de ejecucion es util para evitar que un proceso se bloquee y evitar 
que el usuario tenga que esperar a que se complete una tarea antes de poder interactuar */

/* Para lograrla asincronia en JavaScript se puede usar callbacks, promesas y operadores $async$/$await$.
Las APIs del navegador tambien son utiles para lograr la asincronia en JavaScript */
