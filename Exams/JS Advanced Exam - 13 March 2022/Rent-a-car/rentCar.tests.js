let { expect } = require('chai');
let { rentCar } = require('./rentCar');

describe('rentCar', () => {
    describe('searchCar', () => {
        it('It should throw error if input parameters are not array and string', () => {
            // Arrange, Act & Assert
            expect(() => rentCar.searchCar([], 20)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar(20, 'BMW')).to.throw('Invalid input!');
        });

        it('No such model error should be thrown if the model does not exist in the input array', () => {
            // Arrange
            let shop = ["Volkswagen", "BMW", "Audi"];
            let model = 'Skoda';

            // Act & Assert
            expect(() => rentCar.searchCar(shop, model)).to.throw('There are no such models in the catalog!');
        });

        it('Return the proper car name if it exists in the input', () => {
            // Arrange
            let shop = ["Volkswagen", "BMW", "Audi"];
            let model = 'BMW';

            // Act
            let result = rentCar.searchCar(shop, model);

            // Assert
            expect(result).to.be.equal('There is 1 car of model BMW in the catalog!');
        });
    });

    describe('calculatePriceOfCar', () => {
        it('Should throw an error if the input parameters are not string and number', () => {
            // Arrange, Act & Assert
            expect(() => rentCar.calculatePriceOfCar(20, 30)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('test', true)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar([], {})).to.throw('Invalid input!');
        });

        it('Should throw an error if searched car is not in the catalogue', () => {
            // Arrange
            let model = 'Skoda';
            let days = 10;

            // Act & Assert
            expect(() => rentCar.calculatePriceOfCar(model, days)).to.throw('No such model in the catalog!');
        });

        it('Should return the proper car if it exists in the catalogue', () => {
            // Arrange
            let model = 'BMW';
            let days = 10;

            // Act
            let result = rentCar.calculatePriceOfCar(model, days);

            // Assert
            expect(result).to.be.equal(`You choose BMW and it will cost $450!`);
        });
    });

    describe('checkBudget', () => {
        it('If any of the input parameters is not an Interger it should throw an error', () => {
            // Arrange, Act & Assert
            expect(() => rentCar.checkBudget('test', 20, 30)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(10, 'test', 30)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(10, 20, 'test')).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget('test','20', '30')).to.throw('Invalid input!');
        });

        it('If budget is bigger or equal to cost, it should return "You rent a car!" message', () => {
            // Arrange
            let costPerDay = 10;
            let days = 20;
            let budget = 500;

            // Act
            let result = rentCar.checkBudget(costPerDay, days, budget);
            let result2 = rentCar.checkBudget(10, 20, 200);

            // Assert
            expect(result).to.be.equal('You rent a car!');
            expect(result2).to.be.equal('You rent a car!');
        });

        it('If budget is less than the total cost "You need a bigger budget!" message should be returned', () => {
            // Arrange
            let costPerDay = 10;
            let days = 20;
            let budget = 150;

            // Act
            let result = rentCar.checkBudget(costPerDay, days, budget);

            // Assert
            expect(result).to.be.equal('You need a bigger budget!');
        });
    });
});