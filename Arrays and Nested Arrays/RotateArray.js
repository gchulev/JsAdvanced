"use strict";

function rotateArray(inputArray, rotationNum) {
    for (let i = 0; i < rotationNum; i++) {
        let currentElement = inputArray.pop();
        inputArray.unshift(currentElement);
    }

    console.log(inputArray.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);