'use strict';

(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }
        return `${str}${this}`;
    }

    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : `${this}${str}`;
    }

    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        }
        return false;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        } else if (this.length <= n) {
            return this.toString();
        } else if (!this.includes(' ')) {
            return this.substring(0, n - 3) + '...';
        } else {
            let currentStrLength = this.length;
            let tempStr = this;
            while (currentStrLength + 3 > n) {
                tempStr = tempStr.substring(0, tempStr.lastIndexOf(' '));
                currentStrLength = tempStr.length;
                // if (!this.includes(' ')) {
                //     return this.substring(0, n - 3);
                // }
            }
            return tempStr + '...';
        }
    }


    String.format = function (inputString, ...params) {
        let pattern = /({\d+})/g;
        let placeHoldersArr = inputString.match(pattern);
        
        if (params.length === 0) {
            return inputString;
        }
        for (const placeHolder of placeHoldersArr) {
            let extractedNum = Number(placeHolder.replace('{', '').replace('}', ''));
            let placeHolderValue = params[extractedNum];

            if (placeHolderValue !== undefined) {
                inputString = inputString.replace(placeHolder, placeHolderValue);
            }
        }

        return `${inputString}`;
    }
})();

let str = 'quick brown fox jumps over the lazy dog';
str = str.ensureStart('the ');
str = str.ensureStart('the ');
console.log(str);
//str = str.ensureStart('hello ');
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}', 'dog');
console.log(str);
str = String.format('The quick brown fox jumps over the lazy dog')
console.log(str);
