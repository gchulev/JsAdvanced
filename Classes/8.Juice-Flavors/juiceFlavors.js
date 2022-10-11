'use strict';

function solve(input) {
    let leftOverFuiteJuice = new Map();
    let bottles = new Map();

    for (const item of input) {
        let fruitName = item.split(' => ')[0];
        let quantity = Number(item.split(' => ')[1]);

        let bottlesCreated = Math.floor(quantity / 1000);
        let leftOverJuice = quantity % 1000;

        if (bottlesCreated > 0) {
            if (!bottles.has(fruitName)) {
                bottles.set(fruitName, bottlesCreated);
            } else {
                let additonalBottles = bottles.get(fruitName) + bottlesCreated;
                bottles.set(fruitName, additonalBottles);
            }
        }
        if (leftOverJuice > 0) {
            if (!leftOverFuiteJuice.has(fruitName)) {
                leftOverFuiteJuice.set(fruitName, leftOverJuice);
            } else {
                let newJuiceValue = leftOverFuiteJuice.get(fruitName) + leftOverJuice;
                let leftoverBottlesCreated = Math.floor(newJuiceValue / 1000);
                let newLeftOverQuantity = newJuiceValue % 1000;
                leftOverFuiteJuice.set(fruitName, newLeftOverQuantity);

                if (leftoverBottlesCreated > 0) {
                    if (!bottles.has(fruitName)) {

                        bottles.set(fruitName, leftoverBottlesCreated);
                    } else {
                        let newBottlesCount = bottles.get(fruitName) + leftoverBottlesCreated;
                        bottles.set(fruitName, newBottlesCount)
                    }
                }
            }
        }
    }
    for (const [key, value] of bottles) {
        console.log(`${key} => ${value}`);
    }
}

// solve([
//     'Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549'
// ]);

// solve([
//     'Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789'
// ]);

// solve([
//     'Kiwi => 500',
//     'Apple => 500',
//     'Pear => 1000',
//     'Apple => 512',
//     'Kiwi => 499',
//     'Kiwi => 1'
// ]);

// solve([
//     'Test => 500',
//     'Out => 500',
//     'Txt => 1000',
//     'Out => 512',
//     'Test => 499',
//     'Test => 1'
// ])