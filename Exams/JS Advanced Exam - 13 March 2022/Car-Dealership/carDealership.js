class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model !== '' && Number.isInteger(horsepower) && horsepower >= 0 && Number.isInteger(price) && price >= 0 && Number.isInteger(mileage) && mileage >= 0) {
            this.availableCars.push({ model, horsepower, price, mileage })
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        } else {
            throw new Error('Invalid input!');
        }
    }

    sellCar(model, desiredMileage) {
        let carFound = this.availableCars.find(c => c.model === model);
        if (carFound === undefined) {
            throw new Error(`${model} was not found!`);
        }
        let priceDiscount = 0;
        if (carFound.mileage > desiredMileage) {
            if ((carFound.mileage - desiredMileage) <= 40000) {
                priceDiscount = 0.05;
            } else if ((carFound.mileage - desiredMileage) > 40000) {
                priceDiscount = 0.1;
            }
        }
        let soldPrice = carFound.price - carFound.price * priceDiscount;

        this.availableCars = this.availableCars.filter(c => c.model !== carFound.model);
        this.soldCars.push({ model: carFound.model, horsepower: carFound.horsepower, soldPrice: soldPrice });

        this.totalIncome += soldPrice;
        return `${carFound.model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return 'There are no available cars';
        }

        let result = `-Available cars:\n`;

        for (const car of this.availableCars) {
            result += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`;
        }

        return result.trimEnd();
    }

    salesReport(criteria) {
        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }

        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n`;

        for (const soldCar of this.soldCars) {
            result += `---${soldCar.model} - ${soldCar.horsepower} HP - ${soldCar.soldPrice.toFixed(2)}$\n`;
        }

        return result.trimEnd();
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
