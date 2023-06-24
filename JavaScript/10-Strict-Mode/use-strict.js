"use strict";
// The modern mode, "use strict"

/** "use strict";
 *    - Accidental creation of global variables
 *    - Duplicate parameters
 *    - Read-only attributes
 *    - Non-extendable objects
 */

// Read-only attributes

const user = {};
Object.defineProperty(user, "name", { value: "Bryan", writable: false });
user.name = "Andres"; // Error

// Non-extendable objects

const user2 = { name: "Andres" };
Object.preventExtensions(user2);
user2.age = 21; // Error
