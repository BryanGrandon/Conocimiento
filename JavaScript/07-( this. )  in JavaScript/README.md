# (this.) in JavaScript

## This

```JavaScript
this.name = "Global";

// Function
function print(){
    console.log(this.name);
}

// Anonymous function
const obj = {
    name: "obj",
    print: function (){
        console.log(this.name);
    }
}

```

---

## Call and Apply

```JavaScript
this.place  = "Global";

function greet (){
    console.log(`${this.place}`);
}

obj = { place: "obj"}

greet.call(obj);
greet.apply(obj);

```

---

## Differences Between Call and Apply

```JavaScript
function greet(greeting, name) {
  console.log(`${greeting} ${name} desde ${this.place}`);
}
const obj = { place: "Obj" };

greet.call(obj, "Hello", "Bryan");
greet.apply(obj, [" Hello", "Andres"])
```

---

## Bind

```JavaScript
this.name = "Global";

const person = {
    name: "Bryan",
    greet: function () {
        console.log(`Hello ${this.name}`)
    },
};

const anotherPerson = {
    greet: person.greet.bind(this),
};
```
