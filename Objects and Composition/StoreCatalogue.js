'use strict';

function storeCatalogue(input) {
    let catalogue = [];
    let product = {};

    for (const item of input) {
        let [name, price] = item.split(' : ');
        product = { name, price };
        //catalogue.push({product});
        catalogue.push({ name, price });
    }


    catalogue.sort(customSort);

    function customSort(a, b) {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else {
            if (a.name.toLower() > b.name.toLower())
                return 1;
            else if (a.name.toLower() < b.name.toLower()) {
                return -1;
            }
            else {
                return 0;
            }
        }
    }
    let result = {};

    // first group items then print initial for each group
    for (const item of catalogue) {
        let initialLetter = item.name[0].toUpperCase();
        if (!result[initialLetter]) {
            result[initialLetter] = { children: [item] };
        } else {
            result[initialLetter].children.push(item);
        }
    }

    for (const key of Object.keys(result)) {
        console.log(key);
        for (const child of Object.values(result[key])) {
            for (const childValue of child) {
                console.log(`${childValue.name}: ${childValue.price}`);
            }
        }
    }
}


// storeCatalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);

storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);
