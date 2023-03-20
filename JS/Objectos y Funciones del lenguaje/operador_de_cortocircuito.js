// Corto circuito OR

function saludar(nombre) {
  nombre = nombre || "desconocido";
  console.log(`Hola ${nombre}`);
}
saludar(); // Hola desconocido
saludar("Bryan"); // Hola Bryan

// Corto circuito AND

function edad(edad) {
  resultado = edad < 18 && "Menor de edad";
  if (resultado === false) {
    resultado = "Mayor de edad";
  }
  console.log(`Hola ${resultado}`);
}

edad(12); // Hola menor de edad

// Designarlo en la propia variable

function saludar2(nombre = "Desconocido") {
  console.log(`Hola ${nombre}`);
}
saludar2("Bryan");
