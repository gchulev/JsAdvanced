let { expect } = require('chai');
let { flowerShop } = require('./flowerShop');

describe('flowerShop', () => {
    describe('calcPriceOfFlowers', () => {
        it('It should throw an error if the input parameters are not the correct type', () => {
            // Arrange, Act & Assert
            expect(() => flowerShop.calcPriceOfFlowers(20, 30, 40)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('testString', true, 40)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('testString', 30, [])).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(20, '30', false)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(2.5, 'test', 3.8)).to.throw('Invalid input!');
        });

        it('Should return correct output with correct input provided', () => {
            // Arrange
            let flower = 'Tullip';
            let price = 10;
            let quantity = 3;

            // Act
            let result = flowerShop.calcPriceOfFlowers(flower, price, quantity);

            // Assert
            expect(result).to.be.equal('You need $30.00 to buy Tullip!');
        });
    });

    describe('checkFlowersAvailable', () => {
        it('It should return that flowers are sold if no flower found in the array', () => {
            // Arrange
            let flower = 'Tullip';
            let gardenArr = ["Rose", "Lily", "Orchid"];

            // Act
            let result = flowerShop.checkFlowersAvailable(flower, gardenArr);

            // Assert
            expect(result).to.be.equal('The Tullip are sold! You need to purchase more!');
        });

        it('Should return that the flower is available if it is found in the array', () => {
            // Arrange
            let flower = 'Rose';
            let gardenArr = ["Rose", "Lily", "Orchid"];

            // Act
            let result = flowerShop.checkFlowersAvailable(flower, gardenArr);

            // Assert
            expect(result).to.be.equal('The Rose are available!');
        });
    });

    describe('sellFlowers', () => {
        it('Should throw an Error if the input is not the correct type and space is below 0', () => {
            // Arrange, Act & Assert
            expect(() => flowerShop.sellFlowers('test', 20)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers([], 10.5)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['elm1', 'elm2'], -2)).to.throw('Invalid input!');
        });

        it('Should return correct ouptput', () => {
            // Arrange
            let gardenArr = ["Rose", "Lily", "Orchid"];
            let space = 1;

            // Act
            let result = flowerShop.sellFlowers(gardenArr, space);

            // Assert
            expect(result).to.be.equal('Rose / Orchid');
        });
    });
});