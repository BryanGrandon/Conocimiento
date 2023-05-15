# New types and features

## Symbol

```JavaScript
const ID1 = Symbol();
const ID2 = Symbol();

console.log(ID1 !== ID2); // false
```

---

## Sets

```JavaScript
const array = [1, 2, 3, 1, 2, 3];
const setArray = [... new Set(array)];

const set = new Set(setArray);

// add
set.add(4);

// search
console.log(set.has(2));

// delete
set.delete(2);

```

---

## Maps

```JavaScript
const person = new Map();

// add
person.set('name', 'Bryan');
person.set('age', 21);

// check if a value exists
console.log(person.has('age'));
console.log(person.has('gender'));

// remove
person.delete('age');
console.log(person);

// clear the whole map
person.clear();
console.log(person);
```

---

## Iterator

```JavaScript
const iterable = [1, 2, 3, 4, 5];
const iterador = iterable[Symbol.iterator]();

iterador.next(); // {value: 1, done: false}
iterador.next(); // {value: 2, done: false}
```

---

## Generator

```JavaScript
function* iterable() {
    yield "value 1"
    yield "value 2"
}

let iterador = iterable();

for (y of iterador) {
    console.log(y)
}
```

---

## Proxies

```JavaScript
const person = {
    name: "",
    lastName: "",
    age: 0,
};

const handler = {
    set(obj, prop, value){
        // Validations for elements

        obj[prop] = value
    },
};

const bryan = new Proxy(person, handler);
bryan.name = "Bryan";
bryan.lastName = "Grandon";
bryan.age = 21;
```

---

## Dynamic properties of objects

```JavaScript
const objUser = {
    property: "valor",
    [`id_19`]: "Random value",
}

users = ["jon", "bryan"];
users.forEach((user, index) => (objUser[`id_${index}`] = user));

console.log(objUser);

```
