let nombre = "Bryan";
let edad = 21;

const persona = {
  nombre: nombre,
  edad: edad,
};

console.log(persona); // { nombre: 'Bryan', edad: 21 }

// Literales

const persona2 = {
  nombre,
  edad,
};

console.log(persona2); // { nombre: 'Bryan', edad: 21 }
