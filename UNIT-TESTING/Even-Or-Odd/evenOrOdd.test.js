const {expect} = require('chai');
const {isOddOrEven} = require('./evenOrOdd');

describe('evenOrOdd', () => {
    it('Should return undefined if the input is not a string', () => {
        // Arrange
        let input = 22;
        let secondInput = {name: 'test1', value: 'test2'};

        // Act
        let result = isOddOrEven(input);
        let secondResult = isOddOrEven(secondInput);

        // Assert
        expect(result).to.be.equal(undefined);
        expect(secondResult).to.be.equal(undefined);
    });

    it('Should return even number when provided with string with even length', () => {
        // Arrange
        let input = 'evenstring'

        // Act
        let result = isOddOrEven(input);

        // Assert
        expect(result).to.be.equal('even');
    });

    it('Should return odd number when provided with string with odd length', () => {
        // Arrange
        let input = 'oddstring'

        // Act
        let result = isOddOrEven(input);

        // Assert
        expect(result).to.be.equal('odd');
    });
});