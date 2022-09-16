"use strict";

function exctractSubsetFromArray(inputArray) {
    let result = inputArray.reduce((acc, num) => {

        if (acc.length !== 0) {
            if (acc[acc.length - 1] <= num) {
                acc.push(num);
            }
        } else {
            acc.push(num);
        }
        return acc;
    }, []);

    //console.log(result);
    return result;
}

exctractSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
exctractSubsetFromArray([1, 2, 3, 4]);
exctractSubsetFromArray([20, 3, 3, 3, 3, 2, 15, 6, 1]);
exctractSubsetFromArray([1, 3, 3, 3, 3, 2, 15, 6, 6, 6, 1]);
exctractSubsetFromArray([]);