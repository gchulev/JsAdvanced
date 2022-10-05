'use strict';

function solve() {
    let microElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function managementFunc(params) {
        let cmd = params.split(' ')[0];
        let recipe = params.split(' ')[1];
        let quantity = Number(params.split(' ')[2])

        if (cmd === 'restock') {
            return restock(recipe, quantity);
        } else if (cmd === 'prepare') {
            return prepare(recipe, quantity);
        } else if (cmd === 'report') {
            return report();
        }
    }

    function restock(product, quantity) {
        microElements[product] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {

        let recipes = {
            apple: { carbohydrate: 1, flavour: 2 },
            lemonade: { carbohydrate: 10, flavour: 20 },
            burger: { carbohydrate: 5, fat: 7, flavour: 3 },
            eggs: { protein: 5, fat: 1, flavour: 1 },
            turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
        };

        let canBeMade = '';
        switch (recipe) {
            case 'apple':
                canBeMade = canMakeProduct();
                if (canBeMade === 'Success') {
                    microElements['carbohydrate'] -= recipes[recipe].carbohydrate * quantity;
                    microElements['flavour'] -= recipes[recipe].flavour * quantity;
                    return 'Success';
                } else {
                    return canBeMade;
                }
            case 'lemonade':
                canBeMade = canMakeProduct();
                if (canBeMade === 'Success') {
                    microElements['carbohydrate'] -= recipes[recipe].carbohydrate * quantity;
                    microElements['flavour'] -= recipes[recipe].flavour * quantity;
                    return 'Success';
                } else {
                    return canBeMade;
                }
            case 'burger':
                canBeMade = canMakeProduct();
                if (canBeMade === 'Success') {
                    microElements['carbohydrate'] -= recipes[recipe].carbohydrate * quantity;
                    microElements['fat'] -= recipes[recipe].fat * quantity;
                    microElements['flavour'] -= recipes[recipe].flavour * quantity;
                    return 'Success';
                } else {
                    return canBeMade;
                }
            case 'eggs':
                canBeMade = canMakeProduct();
                if (canBeMade === 'Success') {
                    microElements['protein'] -= recipes[recipe].protein * quantity;
                    microElements['fat'] -= recipes[recipe].fat * quantity;
                    microElements['flavour'] -= recipes[recipe].flavour * quantity;
                    return 'Success';
                } else {
                    return canBeMade;
                }
            case 'turkey':
                canBeMade = canMakeProduct();
                if (canBeMade === 'Success') {
                    microElements['protein'] -= recipes[recipe].protein * quantity;
                    microElements['carbohydrate'] -= recipes[recipe].carbohydrate * quantity;
                    microElements['fat'] -= recipes[recipe].fat * quantity;
                    microElements['flavour'] -= recipes[recipe].flavour * quantity;
                    return 'Success';
                } else {
                    return canBeMade;
                }
            default:
                break;
        }
        function canMakeProduct() {
            for (const [item, val] of Object.entries(recipes[recipe])) {
                let neededAmmount = Number(quantity) * val;
                if (microElements[item] < neededAmmount) {
                    return `Error: not enough ${item} in stock`;
                }
            }
            return 'Success';
        }
    }

    function report() {
        let result = '';
        for (const [ingredient, value] of Object.entries(microElements)) {
            result += `${ingredient}=${value} `;
        }
        return result.trimEnd();
    }
}

let manager = solve();
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock protein 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('report'));

console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));