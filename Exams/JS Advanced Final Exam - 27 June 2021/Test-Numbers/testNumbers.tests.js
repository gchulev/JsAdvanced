let { expect } = require('chai');
let { testNumbers } = require('./testNumbers');

describe('testNumbers', () => {
    describe('sumNumbers', () => {
        it('Should return "undefined" if any of the inputs is not a number', () => {
            // Arrange & Act
            let result = testNumbers.sumNumbers('test', 2);
            let secondResult = testNumbers.sumNumbers(2, 'test');

            // Assert
            expect(result).to.be.equal(undefined);
            expect(secondResult).to.be.equal(undefined);
        });

        it('Should return the correct output', () => {
            // Arrange & Act
            let result = testNumbers.sumNumbers(10, 5);
            let secondResult = testNumbers.sumNumbers(0, 2);
            let thirdResult = testNumbers.sumNumbers(-2, -6);
            let fourthResult = testNumbers.sumNumbers(-2, 6);

            // Assert
            expect(result).to.be.equal('15.00');
            expect(secondResult).to.be.equal('2.00');
            expect(thirdResult).to.be.equal('-8.00');
            expect(fourthResult).to.be.equal('4.00');
        });
    });

    describe('numberChecker', () => {
        it('Should throw an error if the input is not a number', () => {
            // Arrange, Act & Assert
            expect(() => testNumbers.numberChecker({})).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker('test')).to.throw('The input is not a number!');
        });

        it('Should return even or odd number according to the input', () => {
            // Arrange
            let input1 = 10;
            let input2 = 3;
            let input3 = [];
            let input4 = false;
            let input5 = true;
            let input6 = 2.3;

            // Act
            let result1 = testNumbers.numberChecker(input1);
            let result2 = testNumbers.numberChecker(input2);
            let result3 = testNumbers.numberChecker(input3);
            let result4 = testNumbers.numberChecker(input4);
            let result5 = testNumbers.numberChecker(input5);
            let result6 = testNumbers.numberChecker(input6);

            // Assert
            expect(result1).to.be.equal('The number is even!');
            expect(result2).to.be.equal('The number is odd!');
            expect(result3).to.be.equal('The number is even!');
            expect(result4).to.be.equal('The number is even!');
            expect(result5).to.be.equal('The number is odd!');
            expect(result6).to.be.equal('The number is odd!');
        });
    });

    describe('averageSumArray', () => {
        it('Should return the correct average value', () => {
            // Arrange
            let inputArr = [1, 2, 3, 4, 5, 6];
            let secondInput = [2, 3, 1, 2];

            // Act
            let result = testNumbers.averageSumArray(inputArr);
            let secondResult = testNumbers.averageSumArray(secondInput);

            // Assert
            expect(result).to.be.equal(3.5);
            expect(secondResult).to.be.equal(2);
        });
    });
});