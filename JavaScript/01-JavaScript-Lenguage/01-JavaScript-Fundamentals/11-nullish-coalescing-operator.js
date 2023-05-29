"use strict";

// The typical use of ( ?? ) is to provide a default value
let userName;
let user = userName ?? "anonymous";
console.log(user); // anonymous

// Comparison with || ( or )
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

// ( || ) returns the first true value.
// ( ?? ) returns the first defined value.
