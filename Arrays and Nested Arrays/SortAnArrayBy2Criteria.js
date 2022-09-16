"use strict";

function Solve(inputArray) {
    inputArray.sort(customCompare);

    //console.log(inputArray.join('\n'));
    return inputArray.join('\n');

    function customCompare(firstString, secondString) {
        if (firstString.length < secondString.length) {
            return -1;
        } else if (firstString.length > secondString.length) {
            return 1;
        } else {
            if (firstString.toLowerCase() < secondString.toLowerCase()) {
                return -1;
            } else if (firstString.toLowerCase() > secondString.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}


Solve(['alpha', 'beta', 'gamma']);
Solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
Solve(['test', 'Deny', 'omen', 'Default']);