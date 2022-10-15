let { expect } = require('chai');
let { lookupChar } = require('./char-lookup');


describe('lookUpChar', () => {
    it('Should return undefined if the input type is not a string', () => {
        // Arrange
        let input = 20;

        // Act
        let result = lookupChar(input, 1);

        // Assert
        expect(result).to.be.undefined;
    });

    it('Should return undefined if the index is not an integer', () => {
        // Arrange
        let input = 'teststring';
        let index = 2.3;

        // Act
        let result = lookupChar(input, index);

        // Assert
        expect(result).to.be.undefined;
    });

    it('Should return "Incorrect index" if the input index is lower or higher than the array length', () => {
        // Arrange
        let input = 'testString';
        let index = -2;
        let secondIndex = 30;

        // Act
        let firstResult = lookupChar(input, index);
        let secondResult = lookupChar(input, secondIndex);

        // Assert
        expect(firstResult).to.be.equal('Incorrect index');
        expect(secondResult).to.be.equal('Incorrect index');
    });

    it('should return the correct answer when porvided correct input', () => {
        // Arrange
        let input = 'teststring';
        let index = 4;

        // Act
        let result = lookupChar(input, index);

        // Assert
        expect(result).to.be.equal('s');
    });
})