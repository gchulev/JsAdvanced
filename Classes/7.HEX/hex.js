'use strict';

class Hex {
    constructor(value) {
        this.number = Number(value);
    }

    valueOf() {
        return this.number;
    }

    toString() {
        return '0x' + this.number.toString(16).toLocaleUpperCase();
    }

    plus(input) {
        if (typeof(input) === 'number') {
            return new Hex(this.number + input);
        } else if (typeof(input) === 'object') {
            return new Hex(this.number + input.valueOf());
        } else {
            throw new Error('Input is not a number or Hex object!');
        }
    }

    minus(input) {
        if (typeof(input) === 'number') {
            return new Hex(this.number - input);
        } else if (typeof(input) === 'object') {
            return new Hex(this.number - input.valueOf());
        } else {
            throw new Error('Input is not a number or Hex object!');
        }
    }

    parse(inputString) {
        return parseInt(inputString, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));

