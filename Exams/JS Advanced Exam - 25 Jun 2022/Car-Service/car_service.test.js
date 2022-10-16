let { expect } = require('chai');
let { carService } = require('./03. Car Service_Resources');

describe('carService', () => {
    describe('isItExpensive', () => {
        it('Should return the appropriate message if "issue" is equal to "Engine" or to "Transmission"', () => {
            // Arrange
            let firstActualResult = carService.isItExpensive("Engine");
            let secondActualResult = carService.isItExpensive("Transmission");

            // Act & Assert
            expect(firstActualResult).to.be.equal('The issue with the car is more severe and it will cost more money');
            expect(secondActualResult).to.be.equal('The issue with the car is more severe and it will cost more money');
        });

        it('Should return message: "The overall price will be a bit cheaper" if issue is not equal to "Engine" or "Transmission"', () => {
            // Arrange
            let issue = "Wipers";

            // Act
            let result = carService.isItExpensive(issue);

            // Assert
            expect(result).to.be.equal('The overall price will be a bit cheaper');
        });
    });

    describe('discount', () => {
        it('Should throw an error if any of the input arguments is not number', () => {
            // Arrange
            let firstArg = 'test';
            let secondArg = 20;

            // ACT & Assert
            expect(() => carService.discount(firstArg, secondArg)).to.throw('Invalid input');
            expect(() => carService.discount(secondArg, firstArg)).to.throw('Invalid input');
        });

        it('Should return "You cannot apply a discount" if number of parts <= 2', () => {
            // Arrange
            let totalPrice = 100;
            let firstTest = 2;
            let secondTest = -4;
            let thirdTest = Number.NEGATIVE_INFINITY;

            // Act
            let result = carService.discount(firstTest, totalPrice);
            let secondResult = carService.discount(secondTest, totalPrice);
            let thirdResult = carService.discount(thirdTest, totalPrice);

            // Assert
            expect(result).to.be.equal("You cannot apply a discount");
            expect(secondResult).to.be.equal("You cannot apply a discount");
            expect(thirdResult).to.be.equal("You cannot apply a discount");
        });

        it('Should return "30" after applying 15% discount.', () => {
            // Arrange
            let totalPrice = 200;
            let parts = 5;
            let secondParts = 7;

            // Act
            let result = carService.discount(parts, totalPrice);
            let secondResult = carService.discount(secondParts, totalPrice);

            // Assert
            expect(result).to.be.equal('Discount applied! You saved 30$');
            expect(secondResult).to.be.equal('Discount applied! You saved 30$');
        });

        it('should return "60" after applyng 30% discount', () => {
            // Arrange
            let totalPrice = 200;
            let parts = 8;

            // Act
            let result = carService.discount(parts, totalPrice);

            // Assert
            expect(result).to.be.equal('Discount applied! You saved 60$');
        });
    });

    describe('partsToBuy', () => {
        it('It should throw an Error if passed parameters are not both arrays', () => {
            // Arrange
            let firstParam = 'test';
            let secondParam = [];

            // Act & Assert
            expect(() => carService.partsToBuy(firstParam, secondParam)).to.throw("Invalid input");
            expect(() => carService.partsToBuy(secondParam, firstParam)).to.throw("Invalid input");
        });

        it('Should calculate the total sum properly', () => {
            // Arrange
            let items = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
            let neededParts = ["blowoff valve", "injectors"];

            // Act
            let result = carService.partsToBuy(items, neededParts);

            // Assert
            expect(result).to.be.equal(145);
        });

        it('Should return "0" if needed parts array is empty', () => {
            // Arrange
            let items = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
            let neededParts = [];

            // Act
            let result = carService.partsToBuy(items, neededParts);

            // Assert
            expect(result).to.be.equal(0);
        });
    });
});