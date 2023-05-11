# Control structure

## Aritmetic Operator

| Name           | Symbol | Arithmetic Example | Abbreviation Example |
| -------------- | ------ | ------------------ | -------------------- |
| addition       | +      | n = n + 4          | n += 4               |
| subtraction    | -      | n = n - 4          | n -= 4               |
| division       | /      | n = n / 4          | n /= 4               |
| multiplication | \*     | n = n \* 4         | n \*= 4              |
| elevation      | \*\*   | n = n \*\* 4       | n \*\*= 4            |
| rest           | %      | n = n % 4          | n %= 4               |
| increase       | ++     | n = n + 1          | n++                  |
| decrement      | --     | n = n - 1          | n--                  |

---

## Relational Operator

| Name                  | Symbol |
| --------------------- | ------ |
| equal                 | ==     |
| strictly the same     | ===    |
| unequal               | !=     |
| strictly uneven       | !==    |
| greater than          | >      |
| greater or equal      | >=     |
| smaller than          | <      |
| smaller than or equal | <=     |

---

## Logical Operator

| Name | symbol |
| ---- | ------ |
| OR   | \|\|   |
| AND  | &&     |
| NOT  | !      |

---

## If , Else if , Else

```JavaScript
if (condition){

} else if (condition) {

} else {

}
```

---

## Ternary Operator

```JavaScript
condition
    ? // If true
    : // If false
```

---

## Switch case

```JavaScript
switch () {
    case :
        break;

    case :
        break;

    default:
        break;
}
```

---

## For , For in , For of

```JavaScript
for(let i = 0; i < 5; i++ ){

}
for( in ){

}
for ( of ){

}
```

---

## While

```JavaScript
let condition = true;

while (condition) {

    condition = false
}
```

---

## Error Handling

```JavaScript
try {

} catch {

} finally {

}
```

---

## Destructuring

```JavaScript
//  Array
const array = [];
let [] = array;

//  Object
const object {};
let {} = object
```

---

## Rest Parameter

```JavaScript
// ...element
function addition (a, b, ...c){

}
```

---

## Spread operator

```JavaScript
// Iterable element
const array1 = [],
    array2 = [];

const array3 = [...array1, ...array2]
```

---

## Arrow Function

```JavaScript
const nameArrowFunction = (parameters) => {

}
nameArrowFunction(parameters)
```
