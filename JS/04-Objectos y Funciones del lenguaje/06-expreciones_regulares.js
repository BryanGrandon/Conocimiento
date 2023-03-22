// Son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadena.

const forma1 = / /;
const forma2 = RegExp();

// Aserciones

const aserciones = (regexp, textoDePrueba) => {
  const text = regexp;
  const texto = textoDePrueba;
  text.test(texto) ? console.log("Es Correcto") : console.log("Es Incorrecto");
};

aserciones(/^Com/, "Comprueba el inicio"); // Es Correcto
aserciones(/final$/, "Comprueba el final"); // Es Correcto
aserciones(/palabra\b/, "Comprueba si la palabra se encuentra"); // Es correcto
aserciones(/frac\B/, "Comprueba si la frace se encuentra"); // Es correcto

// Cuantificadores

const cuantificadores = (regexp, textoDePrueba) => {
  const text = regexp;
  const texto = textoDePrueba;
  text.test(texto) ? console.log("Es Correcto") : console.log("Es Incorrecto");
};

cuantificadores(/a*/, "Espera 0 o mas veces con el elemento");
cuantificadores(/a+/, "Minimo espera 1 o mas veces el elemento");
cuantificadores(/vez?/, "Halla 0 o 1 vez elemento ");
cuantificadores(/a{2}/, "Busca dos aa");
cuantificadores(/a{2,}/, "Busca como minimo dos aaa");
cuantificadores(/a{2,4}/, "Busca como minimo dos aa y como maximo cuatro aaaa");

// Clases de caracteres

const clasesDeCaracteres = (regexp, textoDePrueba) => {
  const text = regexp;
  const texto = textoDePrueba;
  text.test(texto) ? console.log("Es Correcto") : console.log("Es Incorrecto");
};

clasesDeCaracteres(/\d/, "Busca cualquier digito");
clasesDeCaracteres(/\D/, "Busca cualquier caracter que no sea un digito");
clasesDeCaracteres(/\w/, "[A-Za-z0-9]");
clasesDeCaracteres(/\W/, "< > caracteres especiales");
clasesDeCaracteres(/\s/, "Busca un espacio en blanco");
clasesDeCaracteres(/\S/, "Busca que no sea un espacio en blanco");
clasesDeCaracteres(
  /\n/,
  `salto de
linea`
);

// Grupos y Rangos

const gruposRangos = (regexp, textoDePrueba) => {
  const text = regexp;
  const texto = textoDePrueba;
  text.test(texto) ? console.log("Es Correcto") : console.log("Es Incorrecto");
};

gruposRangos(/rojo|verde/, "Si coincide con rojo o verde");
gruposRangos(/[a-c]/, "Indica una cantidad de caracteres a buscar");
gruposRangos(/[^a-c]/, "Excluye una cantidad de caracteres");
