const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer');

describe('mathEnforcer', () => {

    describe('addFive', () => {
        it('Should return undefined if the argument passed in is not a number', () => {
            // Arrange
            let inputNum = 'test';

            // Act
            let result = mathEnforcer.addFive(inputNum);

            // Assert
            expect(result).to.be.undefined;

        });

        it('Should return the correct value when passed in integer number or floating point number', () => {
            // Arrange
            let intNum = 20;
            let floatingNum = 13.2;
            let negativeInt = -50;
            let negativeFloat = -7.8;

            // Act
            let result = mathEnforcer.addFive(intNum);
            let floatingResult = mathEnforcer.addFive(floatingNum);
            let negativeIntResult = mathEnforcer.addFive(negativeInt);
            let negativeFloatResult = mathEnforcer.addFive(negativeFloat);

            // Assert
            expect(result).to.be.equal(25);
            expect(floatingResult).to.be.equal(18.2);
            expect(negativeIntResult).to.be.equal(-45);
            expect(negativeFloatResult).to.be.equal(-2.8);
        });
    });

    describe('subtractTen', () => {
        it('Should return undefined if the argument passed in is not a number', () => {
            // Arrange
            let inputNum = 'test';

            // Act
            let result = mathEnforcer.subtractTen(inputNum);

            // Assert
            expect(result).to.be.undefined;
        });

        it('Return the correct answer when provided integer or floating point numbers', () => {
            // Arrange
            let intNum = 12;
            let floatNum = -4.5;

            // Act
            let intResult = mathEnforcer.subtractTen(intNum);
            let floatResult = mathEnforcer.subtractTen(floatNum);

            // Assert
            expect(intResult).to.be.equal(2);
            expect(floatResult).to.be.equal(-14.5);
        });
    });

    describe('sum', () => {
        it('Should return undefined if any of the arguments is not a number', () => {
            // Arrange
            let firstWrongArg = 'test1';
            let secondWrongArg = [];
            let correctArg = 20;

            // Act
            let firstWrongResult = mathEnforcer.sum(firstWrongArg, correctArg);
            let secondWrongResult = mathEnforcer.sum(correctArg, secondWrongArg);
            let thirdWrongResult = mathEnforcer.sum(firstWrongArg, secondWrongArg);

            // Assert
            expect(firstWrongResult).to.be.undefined;
            expect(secondWrongResult).to.be.undefined;
            expect(thirdWrongResult).to.be.undefined;
        });

        it('Should return the correct sum when provided integer or floating point number or both', () => {
            // Arrange
            let firstIntNum = 10;
            let secondIntnum = 20;

            let firstFloatNum = 2.6;
            let secondFloatNum = -6.4;

            // Act
            let twoIntNumsResult = mathEnforcer.sum(firstIntNum, secondIntnum);
            let twoFloatNumsResult = Number(mathEnforcer.sum(firstFloatNum, secondFloatNum).toFixed(1));
            let floatAndIntNumResult = Number(mathEnforcer.sum(firstIntNum, secondFloatNum).toFixed(1));

            // Assert
            expect(twoIntNumsResult).to.be.equal(30);
            expect(twoFloatNumsResult).to.be.equal(-3.8);
            expect(floatAndIntNumResult).to.be.equal(3.6);
        });
    });
});