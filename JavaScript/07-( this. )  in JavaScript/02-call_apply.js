// It is a way of executing a function

let place = "Global";

function greet() {
  console.log(`${this.place}`);
}

const obj = { place: "Obj" };

greet(); // Global
greet.call(obj); // Obj
greet.apply(obj); // Obj
