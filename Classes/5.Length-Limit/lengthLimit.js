'use strict';

class Stringer {
    #innerString;
    #innerLength;
    constructor(inputString, innerLength) {
        this.#innerString = inputString;
        this.innerLength = Number(innerLength);
    }

    get innerString() {
        return this.#innerString;
    }

    get innerLength() {
        return this.#innerLength;
    }

    set innerLength(value) {
        if (value < 0) {
            this.#innerLength = 0;
        } else {
            this.#innerLength = value;
        }
    }

    increase(inputNum) {
        return this.innerLength += inputNum;
    }

    decrease(inputNum) {
        return this.innerLength -= inputNum;
    }

    toString(){
        if (this.#innerString.length > this.#innerLength) {
            return this.#innerString.substring(0, this.#innerLength) + '...';
        } else if (this.#innerLength === 0) {
            return '...';
        } else {
            return this.#innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
