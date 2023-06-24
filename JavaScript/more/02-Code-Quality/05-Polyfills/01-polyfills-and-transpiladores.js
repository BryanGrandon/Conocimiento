/**
 * Transpiladores

 *  A transpiler is software that translates one source code into another source code.
 *  From modern code to old code.
 */

// Before
height = height ?? 100;

// After
height = height !== undefined && height !== null ? height : 100;

/**
 * Polyfills
 
 *  A script that updates or adds new features is called a "polyfill". 
    It fills in the gaps by adding the missing implementations.
 */

// Before
Math.trunc();

// After
if (!Math.trunc) {
  Math.trunc = function (number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}

/**
 * But don't forget to use transpilers (if you use modern syntax or operators)
   and polyfills (to add features that may be missing). They will make sure the code works.
 */
