'use strict';

function solve(input) {
    let rows = input[0];
    let cols = input[1];
    let starRow = input[2];
    let starCol = input[3];

    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            matrix[r][c] = Math.max(Math.abs(r - starRow) + 1, Math.abs(c - starCol) + 1);
        }
    }

    let result = '';
    for (let i = 0; i < matrix.length; i++) {
        result += matrix[i].join(' ') + '\n';
    }


    return result.trimEnd();
    //console.log(result.trimEnd());
}

// solve([4, 4, 0, 0]);
solve([5, 5, 2, 2]);
solve([3, 3, 2, 2]);