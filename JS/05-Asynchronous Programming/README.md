# Asynchronous Programming

## Timer

```JavaScript
// setTimeout()
let timer = setTimeout(() => {
    // Run the code once
}1000); // Time 1000ms = 1s

clearTimeout(timer) // -> Finish code

// setInterval()
let timer2 = setInterval(() => {
    // Run the code indefinitely
}1000)

clearInterval(timer2) // -> Finish code
```

---

## Event Loop

```JavaScript
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);

// execution order -> 1, 3, 2
```

### Synchronous:

- The synchronous operation you wait for the result.

### Asynchronous:

- The asynchronous operation does not wait for the result.

---

## Callbaks

```JavaScript
function modify (element, callback){

    callback(element);
}

// Callback is a function that is passed as an argument

modify(array, (element) => {
    console.log(`This element is ${element}`)
})
```

---

## Promises

```JavaScript
const callAnAPI = () => {
  return { datas: "API" };
};
const promise = new Promise((resolve, reject) => {
  const data = callAnAPI();
  if (data) {
    resolve(data);
  } else {
    reject(Error("An error occurred"));
  }
});

promise
  .then((data) => {
    // Use the data
    console.log("the data is:", data);
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });
```

---

## Async and Await

```JavaScript
function promise(value) {
  if (typeof value !== "") {
    return Promise.reject("Text");
  }
  return new Promise((resolve, reject) => {
    resolve({
        value,
        result: value + "Other argument"
    })
  });
}

//  Async
async function asynchronousFunction() {
  try {
    console.log("Start Async Function");

    // Await -> wait for the result
    let obj = await promise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await promise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Finished Async Function");
  } catch (err) {
    console.error(err);
  }
}

asynchronousFunction();
```
