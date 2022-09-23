'use strict';

function lowestPriceInCities(input) {
    let output = {};

    for (const item of input) {
        let [town, product, price] = item.split(' | ');
        price = Number(price);

        if (output.hasOwnProperty(product)) {
            let currentPrice = output[product]['price']
            if (currentPrice > price) {
                output[product] = { price, town };
            }
        }
        else {
            output[product] = { price, town }
        }
    }

    for (let [key, value] of Object.entries(output)){
        console.log(`${key} -> ${value.price} (${value.town})`);
    }

}

lowestPriceInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);

