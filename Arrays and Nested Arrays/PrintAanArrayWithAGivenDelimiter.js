"use strict";

function Solve(paramOne, paramTwo) {
    let arr = paramOne;
    let delmiter = paramTwo;

    let test = arr.join(delmiter);
    console.log(test);
}

Solve(['One', 'Two', 'Three', 'Four', 'Five'], '-');
Solve(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');