// Nos permite mandar informacion

console.log("Mostrar informacion");
console.info("Mensaje informativo");
console.error("Mensaje de error");
console.warn("Advertencia");
console.clear(); // Limpiar la consola
console.table(); // crear una tabla

// conteo
console.count("Registra las veces que es llamado");
console.countReset("Restaura el contador");

// Agrupacion
console.group(); // crear un grupo
console.groupEnd(); // Restaura el contador

// Temporizador
console.time(); // Inicia un temporizador
console.timeLog(); // Registra el valor de time
console.timeEnd(); // Detiene un temporizador
