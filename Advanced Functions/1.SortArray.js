'use strict';

function solve(input, arg) {
    switch (arg) {
        case 'asc':
            input.sort((x, y) => x - y);
            return input;
        case 'desc':
            input.sort((x, y) => y - x);
            return input;

        default:
            break;
    }
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));