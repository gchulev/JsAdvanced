let {expect} = require('chai');
let {numberOperations} = require('./03. Number Operations_Resources');

describe('numberOperations', () => {
    describe('powNumber', () => {
        it('Should return the correct power of the input', () => {
            // Arrange
            let input1 = 10;
            let input2 = 2.2;

            // Act
            let result1 = numberOperations.powNumber(input1);
            let result2 = numberOperations.powNumber(input2);
            
            // Assert
            expect(result1).to.be.equal(100);
            expect(result2).to.be.equal(4.840000000000001);
        });
    });

    describe('numberChecker', () => {
        it('Should throw an error if the input can not be parsed to number', () => {
            // Arrange, Act & Assert
            expect(() => numberOperations.numberChecker({})).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker('test')).to.throw('The input is not a number!');
        });

        it('Should returnt he correct output', () => {
            // Arrange
            let num1 = 50;
            let num2 = 101;
            let num3 = 0;
            let num4 = -10;
            let num5 = true;
            let num6 = [];
            let num7 = 100;

            // Act
            let result1 = numberOperations.numberChecker(num1);
            let result2 = numberOperations.numberChecker(num2);
            let result3 = numberOperations.numberChecker(num3);
            let result4 = numberOperations.numberChecker(num4);
            let result5 = numberOperations.numberChecker(num5);
            let result6 = numberOperations.numberChecker(num6);
            let result7 = numberOperations.numberChecker(num7);

            // Assert
            expect(result1).to.be.equal('The number is lower than 100!');
            expect(result2).to.be.equal('The number is greater or equal to 100!');
            expect(result3).to.be.equal('The number is lower than 100!');
            expect(result4).to.be.equal('The number is lower than 100!');
            expect(result5).to.be.equal('The number is lower than 100!');
            expect(result6).to.be.equal('The number is lower than 100!');
            expect(result7).to.be.equal('The number is greater or equal to 100!');
        });
    });

    describe('sumArrays', () => {
        it('Should return the correct output', () => {
            // Arrange
            let arr1 = [1, 2, 3, 4, 5];
            let arr2 = [10, 20, 30];
            let arr3 = [1, 2, 3,];
            let arr4 = [10, 20, 30, 40];
            let arr5 = [1, 2, 3, 4, 5];
            let arr6 = [10, 20, 30, 40, 50];
            
            // Act
            let result1 = numberOperations.sumArrays(arr1, arr2);
            let result2 = numberOperations.sumArrays(arr3, arr4);
            let result3 = numberOperations.sumArrays(arr5, arr6);

            // Assert
            expect(result1).to.be.eql([11, 22, 33, 4, 5]);
            expect(result2).to.be.eql([11, 22, 33, 40]);
            expect(result3).to.be.eql([11, 22, 33, 44, 55]);
        });
    });
});