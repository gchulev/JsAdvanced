"use strict";

function Solve(inputMatrix) {
    if (inputMatrix.length < 3) {
        return false;
    }else{

        let rowSum = 0;
        let currentCol = 0;
        let result = false;
    
        for (let r = 0; r < inputMatrix.length; r++) {
            rowSum = inputMatrix[r].reduce((acc, num) => acc + num);
    
            for (let row = 0; row < inputMatrix.length; row++) {
    
                for (let c = 0; c < inputMatrix[r].length; c++) {
    
                    currentCol += inputMatrix[c][row];
                }
                if (rowSum === currentCol) {
                    result = true;
                    currentCol = 0;
                } else {
                    result = false;
                    return result;
                }
                if (inputMatrix[r].length === 1) {
                    break;
                }
            }
        }
        return result;
    }
}

let result = Solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

let result1 = Solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);

let result2 = Solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);

let result3 = Solve([
    [1,],
    [1,],
]);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);