'use strict';

function carFactory(requirements) {
    let car = {};
    let engine = {};
    let carriage = {
        type: requirements.carriage,
        color: requirements.color
    };

    let wheelSize = Math.floor(requirements.wheelsize) % 2 == 0 ? requirements.wheelsize - 1 : requirements.wheelsize;

    if (requirements.power <= 90) {
        engine['power'] = 90;
        engine['volume'] = 1800;
    } else if (requirements.power > 90 && requirements.power <= 120) {
        engine['power'] = 120;
        engine['volume'] = 2400
    } else {
        engine['power'] = 200;
        engine['volume'] = 3500;
    }

    car = {
        model: requirements.model,
        engine: engine,
        carriage: carriage,
        wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
    };


    return car;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});