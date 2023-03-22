const functionAnonima = function (nombre, cafe) {
  if (cafe) {
    console.log(`${nombre} quiere un cafe`); // Bryan quiere un cafe
  } else {
    console.log(`${nombre} no quiere un cafe`);
  }
};
functionAnonima("Bryan", true);

// No se utiliza la palabra function pero su funcion es la misma

const arrowFunction = (nombre, cafe) => {
  if (cafe) {
    console.log(`${nombre} quiere un cafe`);
  } else {
    console.log(`${nombre} no quiere un cafe`); // Andres no quiere un cafe
  }
};

arrowFunction("Andres", false);
