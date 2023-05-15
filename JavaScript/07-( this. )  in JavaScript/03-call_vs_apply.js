this.place = "Global";

function greet(greeting, name) {
  console.log(`${greeting} ${name} desde ${this.place}`);
}

const obj = { place: "Obj" };

greet.call(obj, "Hello", "Bryan"); // Obj
greet.call(null, "Hello", "Bryan"); // Global
greet.call(this, "Hello", "Bryan"); // Global

greet.apply(obj, ["Bye", "Camila"]); // Obj
greet.apply(null, ["Bye", "Camila"]); // Global
greet.apply(this, ["Bye", "Camila"]); // Global
