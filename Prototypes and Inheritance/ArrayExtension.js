'use strict';

(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        let insideArr = [];
        for (let i = n; i < this.length; i++) {
            insideArr.push(this[i]);
        }
        return insideArr;
    };

    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        
        return result;
    }

    Array.prototype.sum = function () {
        let result = 0;
        result = this.reduce((acc, num) => acc += num);
        return result;
    }

    Array.prototype.average = function () {
        let result = 0;
        result = this.reduce((acc, num) => acc += num ) / this.length;
        return result;
    }

})();


let myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr.last());
console.log(myArr.skip(3));
console.log(myArr.take(3));
console.log(myArr.sum());
console.log(myArr.average());