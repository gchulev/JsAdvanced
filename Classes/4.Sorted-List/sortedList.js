'use strict';

class List {
    #collection;

    constructor() {
        this.#collection = [];
        this.size = this.#collection.length;
    }

    add(element) {
        this.#collection.push(element);
        this.#collection.sort((a, b) => a - b);
        this.size++;
        return this.#collection;
    }

    remove(index) {
        if (index < 0 || index > this.#collection.length - 1) {
            throw new Error(`Invalid index ${index}`);
        }

        this.#collection.splice(index, 1);
        this.#collection.sort((a, b) => a - b);
        this.size--;
        return this.#collection;
    }

    get(index) {
        if (index < 0 || index > this.#collection.length - 1) {
            throw new Error(`Invalid index ${index}`);
        }

        return this.#collection[index];
    }
}


let list = new List();
if (list.hasOwnProperty('size')) {
    console.log('true');
} else {
    console.log('false');
}
console.log(list.size);
list.add(5);
list.add(6);
list.add(7);
list.add(3);
list.add(1);
console.log(list);
console.log(list.size);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));