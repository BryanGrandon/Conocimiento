// setTimeout ejecuta el codigo 1 vez

let temporizador1 = setTimeout(() => {
  console.log("codigo");
}, 1000); // 1s -> 1000ms

// clearTimeout(temporizador1) -> Finaliza el codigo

// setInterval() -> ejecuta el codigo indefinidamente

let temporizador2 = setInterval(() => {
  console.log("Codigo");
}, 3000);

// clearInterval(temporizador2); -> Finaliza el codigo
