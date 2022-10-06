'use strict';

function add(num) {
    let sum = num;

    function innerSum(anotherNum) {
        sum += anotherNum;
        return innerSum;
    }

    innerSum.toString = function () {return sum};
    return innerSum;    
}


console.log(add(1)(6)(-3).toString());