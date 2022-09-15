"use strict";

function printNthElement(array, step) {

    let result = [];
    for (let i = 0; i < array.length; i = i + step) {
        result.push(array[i]);
    }
    return result
}

printNthElement(['5', '20', '31', '4', '20'], 2);
printNthElement(['dsa', 'asd', 'test', 'tset'], 2);
printNthElement(['1', '2', '3', '4', '5'], 6);