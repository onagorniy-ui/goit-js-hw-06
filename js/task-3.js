'use strict';

//define class StringBuilder with private field #value and methods
class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padStart(value) {
    this.#value = value + this.#value;
  }

  padEnd(value) {
    this.#value = this.#value + value;
  }

  padBoth(value) {
    this.#value = value + this.#value + value;
  }
}

//do tests
const builder = new StringBuilder('.');
console.log(builder.getValue());
builder.padStart('^');
console.log(builder.getValue());
builder.padEnd('^');
console.log(builder.getValue());
builder.padBoth('=');
console.log(builder.getValue());
