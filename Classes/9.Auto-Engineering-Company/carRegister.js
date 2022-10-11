'use strict';

function solve(input) {
    let carsBrandCollection = new Map();

    for (const car of input) {
        let carBrand = car.split(' | ')[0];
        let carModel = car.split(' | ')[1];
        let producedCars = Number(car.split(' | ')[2]);

        if (!carsBrandCollection.has(carBrand)) {
            let carsModelCollection = new Map();
            carsModelCollection.set(carModel, producedCars);
            carsBrandCollection.set(carBrand, carsModelCollection);
        } else {
            if (!carsBrandCollection.get(carBrand).has(carModel)) {
                let currentModelCollection = carsBrandCollection.get(carBrand);
                currentModelCollection.set(carModel, producedCars);
            } else {
                let currentCarModelCollection = carsBrandCollection.get(carBrand);
                let newProducedCarsCount = currentCarModelCollection.get(carModel) + producedCars;
                currentCarModelCollection.set(carModel, newProducedCarsCount)
            }
        }
    }

    for (const [carBrand, carModelsColl] of carsBrandCollection) {
        console.log(`${carBrand}`)
        for (const [currentModel, producedCars] of carModelsColl) {
            console.log(`###${currentModel} -> ${producedCars}`);
        }
    }
}

    solve([
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]);