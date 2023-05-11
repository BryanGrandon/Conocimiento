/* Los proxies le permiten modificar, validar o remplazar el comportamiento predeterminado. */

const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  set(obj, prop, valor) {
    obj[prop] = valor;
  },
};

const jon = new Proxy(persona, manejador);
jon.nombre = "Bryan";
jon.apellido = "Grandon";
jon.edad = 21;

console.log(jon); // {nombre: 'Bryan', apellido: 'Grandon', edad: 21}
