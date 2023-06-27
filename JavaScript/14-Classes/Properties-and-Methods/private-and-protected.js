"use strict";
/**
 * Protected properties are usually prefixed with the underscore _.
 * Privates should start with #. They are only accessible from inside the class.
 */

class CoffeeMachine {
  #waterAmount = 0;
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value <= 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
    return value;
  }

  set waterAmount(value) {
    this.#waterAmount = this.#fixWaterAmount(value);
  }

  get waterAmount() {
    return this.#waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
}
let machine = new CoffeeMachine(100);

machine.waterAmount = 150;
console.log(machine.waterAmount);

// Read-only

console.log(`Power is ${machine.power}W`);

/** Privada
 *
 *  machine.#waterLimit = 1000; // Error
 *  machine.#fixWaterAmount  // Error
 */
