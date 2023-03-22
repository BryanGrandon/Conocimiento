try {
  // try -> Se agrega el codigo a evaluar
  console.log("codigo a evaluar");
  errorEnTry;
} catch (error) {
  // catch -> Captura cualquier error surgido en el try
  console.log("Error en try");
  console.log(error);
} finally {
  // finally -> Se ejecutaran al final del try - case
  console.log("Se ejecutara siempre el final");
}

// throw new Error("Mensaje de Error personalizado") -> En try
