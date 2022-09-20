'use strict';

function solve(inputMatrix) {

    let numMatrix = inputMatrix.map(elm => elm.split(' ').map(el => Number(el)));

    let diagonalsInfo = checkDiagonalsSums(numMatrix);
    if (diagonalsInfo.mainDiagSum === diagonalsInfo.secondaryDiagSum) {
        setNonDiagToDiagSum(numMatrix);
        console.log(printMatrix(numMatrix));
    } else {
        console.log(printMatrix(numMatrix));
    }

    function checkDiagonalsSums(matrix) {

        let mainDiagCntr = 0;
        let secondaryDiagCntr = matrix.length - 1;
        let mainDiagArray = [];
        let secondaryDiagArray = [];
        let mainDiagIndexes = [];
        let secondaryDiagIndexes = [];

        for (let i = 0; i < matrix.length; i++) {

            mainDiagArray.push(matrix[i][mainDiagCntr]);
            secondaryDiagArray.push(matrix[i][secondaryDiagCntr]);

            mainDiagIndexes.push([i, mainDiagCntr]);
            secondaryDiagIndexes.push([i, secondaryDiagCntr]);

            mainDiagCntr++;
            secondaryDiagCntr--;
        }

        let mainDiagSum = mainDiagArray.reduce((total, currentNum) => total += currentNum);
        let secondaryDiagSum = secondaryDiagArray.reduce((total, currentNum) => total += currentNum);

        return {
            mainDiagSum,
            secondaryDiagSum,
            mainDiagIndexes,
            secondaryDiagIndexes
        };

    }

    function setNonDiagToDiagSum(matrix) {

        for (let r = 0; r < matrix.length; r++) {
            let mainDiagRow = diagonalsInfo.mainDiagIndexes[r][0];
            let mainDiagCol = diagonalsInfo.mainDiagIndexes[r][1];

            let secondaryDiagRow = diagonalsInfo.secondaryDiagIndexes[r][0];
            let secondaryDiagCol = diagonalsInfo.secondaryDiagIndexes[r][1];

            for (let c = 0; c < matrix.length; c++) {

                if (!((r === mainDiagRow && c === mainDiagCol) || (r === secondaryDiagRow && c === secondaryDiagCol))) {
                    matrix[r][c] = diagonalsInfo.mainDiagSum;
                }
            }
        }

        return matrix;
    }

    function printMatrix(matrix) {

        let output = '';
        for (let i = 0; i < matrix.length; i++) {
            output += `${matrix[i].join(' ')}\n`;
        }
        return output;
    }
}

solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

solve([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);