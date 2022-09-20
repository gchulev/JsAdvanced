'use strict';

function solve(input) {
    let calorieObj = {};
    for (let i = 0; i < input.length; i = i + 2) {
        calorieObj[`${input[i]}`] = Number(input[i+ 1]);
    }

    console.log(calorieObj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);