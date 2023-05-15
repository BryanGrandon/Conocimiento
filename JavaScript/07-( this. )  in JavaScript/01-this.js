/* ( this ) in JavaScript is a keyword that refers to the object 
  form which a function is called and is context sensitive */

// Global context //

this.name = "Global";

function print() {
  console.log(this.name); // Global
}
print();

// anonymous function

const obj = {
  name: "obj",
  print: function () {
    console.log(this.name); // obj
  },
};
obj.print();

// arrow function (Not occupy)

const objArrow = {
  name: "obj arrow",
  print: () => {
    console.log(this.name); // Global
  },
};
objArrow.print();
