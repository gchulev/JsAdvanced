let {expect} = require('chai');
let {chooseYourCar} = require('./chooseYourCar');

describe('chooseYourCar', () => {
    describe('choosingType', () => {
        it('Should throw an error if year is less than 1900 and more than 2022', () => {
            // Arrange, Act & Assert
            expect(() => chooseYourCar.choosingType('sedan', 'red', 1899)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('sedan', 'red', 2023)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('sedan', 'red', -1500)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('sedan', 'red', 5200)).to.throw('Invalid Year!');
        });

        it('Should return that it meets the requirements', () => {
            // Arrange
            let type = 'Sedan';
            let color = 'blue';

            // Act
            let result1 = chooseYourCar.choosingType(type, color, 2010);
            let result2 = chooseYourCar.choosingType(type, color, 2022);

            // Assert
            expect(result1).to.be.equal('This blue Sedan meets the requirements, that you have.');
            expect(result2).to.be.equal('This blue Sedan meets the requirements, that you have.');
        });

        it('Should return that the car is too old', () => {
            // Arrange
            let type = 'Sedan';
            let color = 'red';

            // Act
            let result1 = chooseYourCar.choosingType(type, color, 2009);
            let result2 = chooseYourCar.choosingType(type, color, 2001);

            // Assert
            expect(result1).to.be.equal('This Sedan is too old for you, especially with that red color.');
            expect(result2).to.be.equal('This Sedan is too old for you, especially with that red color.');
        });

        it('Should throw an error if the type is not "Sedan"', () => {
            // Arrange
            let color = 'red';
            let year = 2020;

            // Act & Assert
            expect(() => chooseYourCar.choosingType('Coupe', color, year)).to.throw('This type of car is not what you are looking for.');
            expect(() => chooseYourCar.choosingType('Hatchback', color, year)).to.throw('This type of car is not what you are looking for.');
        });
    });

    describe('brandName', () => {
        it('Throw an error if the input is invalid', () => {
            // Arrange, Act  & Assert
            expect(() => chooseYourCar.brandName('test', 2)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName([], 2.2)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName([], -1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 4)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw('Invalid Information!');
        });

        it('Should return the correct string output', () => {
            // Arrange
            let brands = ["BMW", "Toyota", "Peugeot"];
            let brandIndex = 1;

            // Act
            let result1 = chooseYourCar.brandName(brands, brandIndex);
            let result2 = chooseYourCar.brandName(brands, 0);
            let result3 = chooseYourCar.brandName(brands, 2);

            // Assert
            expect(result1).to.be.equal('BMW, Peugeot');
            expect(result2).to.be.equal('Toyota, Peugeot');
            expect(result3).to.be.equal('BMW, Toyota');
        });
    });

    describe('carFuelConsumption', () => {
        it('It should throw an error if the input is not numbers', () => {
            // Arrange, Act & Assert
            expect(() => chooseYourCar.carFuelConsumption('test', 20)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(20, true)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(0, 10)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(-1, 10)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(120, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(120, -10)).to.throw('Invalid Information!');
        });

        it('Should return that the car is efficient enough', () => {
            // Arrange
            let carFuelConsumption = 7;
            let carFuelConsumption2 = 5
            let distanceInKilometers = 100;
            let distanceInKilometers2 = 120;

            // Act
            let result1 = chooseYourCar.carFuelConsumption(distanceInKilometers, carFuelConsumption);
            let result2 = chooseYourCar.carFuelConsumption(distanceInKilometers2, carFuelConsumption2);

            // Assert
            expect(result1).to.be.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
            expect(result2).to.be.equal('The car is efficient enough, it burns 4.17 liters/100 km.');
        });

        it('Should return that the car burns too much fuel', () => {
            // Arrange
            let carFuelConsumption = 8;
            let carFuelConsumption2 = 15
            let distanceInKilometers = 100;
            let distanceInKilometers2 = 120;

            // Act
            let result1 = chooseYourCar.carFuelConsumption(distanceInKilometers, carFuelConsumption);
            let result2 = chooseYourCar.carFuelConsumption(distanceInKilometers2, carFuelConsumption2);

            // Assert
            expect(result1).to.be.equal('The car burns too much fuel - 8.00 liters!');
            expect(result2).to.be.equal('The car burns too much fuel - 12.50 liters!');
        })
    });
});