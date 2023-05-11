/* Los Maps son utiles para almacenar y retornar datos de forma rapida y eficiente */

const persona = new Map();

// Agregar valores al Map
persona.set("nombre", "Bryan");
persona.set("edad", 21);
console.log(persona); // Map {'nombre' => 'Bryan', 'edad' => 21}

// Obtener los valores
console.log(persona.get("nombre")); // Bryan

// Comprueba se existe un valor
console.log(persona.has("edad")); // true
console.log(persona.has("rut")); // false

// Eliminar un valor al map
console.log(persona.delete("edad")); // true
console.log(persona.delete("edad")); // false

// Limpia todo el Map
persona.clear();
console.log(persona); // Map { }
