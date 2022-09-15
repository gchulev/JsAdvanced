"use strict";

function sortNumbers(input) {
    input.sort((x, y) => x - y);

    const resultArr = [];

    while (input.length > 0) {
        let smallestNum = input.shift();
        let biggestNum = input.pop();
        resultArr.push(smallestNum);
        resultArr.push(biggestNum);
    }
    return resultArr;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));