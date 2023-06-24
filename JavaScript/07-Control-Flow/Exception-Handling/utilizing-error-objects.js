"use strict";

/** Types of Errors:
 *  - AggregateError.
 *  - EvalError.
 *  - InternalError.
 *  - RangeError.
 *  - ReferenceError.
 *  - SyntaxError.
 */

try {
  willGiveErrorSometime();
} catch (error) {
  if (error instanceof RangeError) {
    rangeErrorHandler(error);
  } else if (error instanceof ReferenceError) {
    referenceErrorHandle(error);
  } else {
    errorHandler(error);
  }
}
