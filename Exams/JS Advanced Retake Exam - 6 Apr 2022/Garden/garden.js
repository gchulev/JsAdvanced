'use strict';

// class Plant {
//     constructor(plantName, spaceRequired) {
//         this.plantName = plantName;
//         this.spaceRequired = spaceRequired;
//         this.ripe = false;
//         this.quantity = 0;
//     }
// }
class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }


    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }

        let plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0,
        };
        this.spaceAvailable -= spaceRequired;
        this.plants.push(plant);
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        if (!this.plants.some(elm => elm.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        let currentPlant = this.plants.find(p => p.plantName === plantName);
        if (currentPlant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity < 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        currentPlant.ripe = true;
        currentPlant.quantity += quantity;
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let currentPlant = this.plants.find(p => p.plantName === plantName);

        if (currentPlant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (currentPlant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.storage.push(currentPlant);
        this.spaceAvailable += currentPlant.spaceRequired;
        this.plants = this.plants.filter(x => x.plantName !== currentPlant.plantName);

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {

        let storageItems = [];
        this.storage.forEach(elm => storageItems.push(`${elm.plantName} (${elm.quantity})`));

        let plantsOnly = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).reduce((acc, elm) => { acc.push(elm.plantName); return acc }, []);
        let result = `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: ${plantsOnly.join(', ')}\n` +
            `Plants in storage: ${this.storage.length === 0 ? 'The storage is empty.' : storageItems.join(', ')}`;

        return result;
    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
//console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.generateReport());


