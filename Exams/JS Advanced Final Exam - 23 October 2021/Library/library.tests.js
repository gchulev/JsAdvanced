let { expect } = require('chai');
let { library } = require('./library');

describe("library", () => {
    describe('calcPriceOfBook', () => {
        it('Should throw an error if the input is not valid', () => {
            // Arrange, Act & Assert
            expect(() => library.calcPriceOfBook(true, 20)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('test', [])).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('test', 20.5)).to.throw('Invalid input');
        });

        it('Should return discount if the year is equal or less than 1980', () => {
            // Arrange
            let nameOfBook = 'Test';
            let firstYearTest = 1980;
            let secondYearTest = 1859;

            // Act
            let firstResult = library.calcPriceOfBook(nameOfBook, firstYearTest);
            let secondResult = library.calcPriceOfBook(nameOfBook, secondYearTest);

            // Assert
            expect(firstResult).to.be.equal('Price of Test is 10.00');
            expect(secondResult).to.be.equal('Price of Test is 10.00');
        });

        it('Should return the book price without discount if the book is newer than 1980', () => {
            // Arrange
            let nameOfBook = 'TestBook';
            let year = 2019;

            // Act
            let result = library.calcPriceOfBook(nameOfBook, year);

            // Assert
            expect(result).to.be.equal('Price of TestBook is 20.00');
        });
    });

    describe('findBook', () => {
        it('Should throw an error if the books array is empty', () => {
            // Arrange
            let books = [];
            let desiredBook = 'test';

            // Act & Assert
            expect(() => library.findBook(books, desiredBook)).to.throw("No books currently available");
        });

        it('Should return message that book is found', () => {
            // Arrange
            let books = ["Troy", "Life Style", "Torronto"];
            let desiredBook = 'Torronto';

            // Act
            let result = library.findBook(books, desiredBook);

            // Assert
            expect(result).to.be.equal('We found the book you want.');
        });

        it('Return message that the book is not found', () => {
            // Arrange
            let books = ["Troy", "Life Style", "Torronto"];
            let desiredBook = 'Test';

            // Act
            let result = library.findBook(books, desiredBook);

            // Assert
            expect(result).to.be.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks', () => {
        it('Should throw an error if the input is not an integer or if it is below 0', () => {
            // Arrange, Act & Assert
            expect(() => library.arrangeTheBooks('test')).to.throw("Invalid input");
            expect(() => library.arrangeTheBooks(2.5)).to.throw("Invalid input");
            expect(() => library.arrangeTheBooks(-5)).to.throw("Invalid input");
        });

        it('Should return proper message if there is space to arrange books on shelves', () => {
            // Arrange
            let countBooks = 10;
            let countBooks2 = 40;

            // Act
            let result = library.arrangeTheBooks(countBooks);
            let result2 = library.arrangeTheBooks(countBooks2);

            // Assert
            expect(result).to.be.equal('Great job, the books are arranged.');
            expect(result2).to.be.equal('Great job, the books are arranged.');
        });

        it('Should return that there is insufficient shelfs if there is no space', () => {
            // Arrange
            let countBooks = 41;
            
            // Act
            let result = library.arrangeTheBooks(countBooks);
            
            // Assert
            expect(result).to.be.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});