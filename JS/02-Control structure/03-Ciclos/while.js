let iniciar = true;
while (iniciar) {
  let numero = Math.round(Math.random() * 18);
  console.log(numero); // 5, 17, 18
  if (numero >= 18) {
    console.log("Obligatoriamente mayor"); // Obligatoriamente mayor
    iniciar = false; // Finalizar dando false en la condicion
  }
}
