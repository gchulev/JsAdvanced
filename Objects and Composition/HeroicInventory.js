'use strict';

function heroicInventory(input) {

    let heroes = [];

    for (let i = 0; i < input.length; i++) {
        let heroName = input[i].split(' / ')[0];
        let heroLevel = input[i].split(' / ')[1];
        let heroItems = input[i].split(' / ')[2];
        heroItems = heroItems ? heroItems.split(', ') : [];
        let hero = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems
        };

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}


heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);


heroicInventory(['Jake / 1000']);
