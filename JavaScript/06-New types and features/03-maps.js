const person = new Map();

// Add values to map
person.set("name", "Bryan");
person.set("age", 21);
console.log(person); // Map {'name' => 'Bryan', 'age' => 21}

// Get the values
console.log(person.get("name")); // Bryan

// Check if a value exists
console.log(person.has("age")); // true
console.log(person.has("gender")); // false

// Remove a value to the map
console.log(person.delete("age")); // true
console.log(person.delete("age")); // false

// Clear the whole map
person.clear();
console.log(person); // Map { }
