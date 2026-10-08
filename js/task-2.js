'use strict';

//define Storage class with private field #items
class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  //remove item if found in array (using indexOf method)
  removeItem(itemToRemove) {
    const itemIndex = this.#items.indexOf(itemToRemove);
    if (itemIndex !== -1) {
      this.#items.splice(itemIndex, 1);
    }
  }
}

//do tests
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems());
storage.addItem('Droid');
console.log(storage.getItems());
storage.removeItem('Prolonger');
console.log(storage.getItems());
