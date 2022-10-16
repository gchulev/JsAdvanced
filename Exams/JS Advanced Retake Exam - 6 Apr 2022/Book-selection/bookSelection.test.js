let { expect } = require('chai');
let { bookSelection } = require('./bookSelection');

describe('bookSelection', () => {
    describe('isGenreSuitable', () => {
        it('Should return not suitable books result if genre is "Thriller" or "Horror" and age is below or equal to 12', () => {
            // Arrange & Act
            let result = bookSelection.isGenreSuitable('Thriller', 12);
            let secondResult = bookSelection.isGenreSuitable('Horror', 10);

            // Assert
            expect(result).to.be.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(secondResult).to.be.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        });

        it('Should return "books are suitable" if the age is above 12 and genre is not "Thriller" or "Horror"', () => {
            // Arrange & Act
            let result = bookSelection.isGenreSuitable("Action", 20);
            let secondResult = bookSelection.isGenreSuitable('Thriller', 25);
            let thirdResult = bookSelection.isGenreSuitable('Comedy', 12);

            // Assert
            expect(result).to.be.equal(`Those books are suitable`);
            expect(secondResult).to.be.equal(`Those books are suitable`);
            expect(thirdResult).to.be.equal(`Those books are suitable`);
        });
    });

    describe('isItAffordable', () => {
        it('Should throw error if any of the parameters is not a number', () => {
            // Arrange
            let firstParam = 'test';
            let secondParam = 20;

            // Act & Assert
            expect(() => bookSelection.isItAffordable(firstParam, secondParam)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(secondParam, firstParam)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(firstParam, firstParam)).to.throw('Invalid input');
        });

        it('Should return "You don\'t have enough money" if the price is higher than the budget', () => {
            // Arrange
            let budget = 20;
            let price = 60;

            // Act
            let result = bookSelection.isItAffordable(price, budget);
            let secondResult = bookSelection.isItAffordable(1, 0);

            // Assert
            expect(result).to.be.equal("You don't have enough money");
            expect(secondResult).to.be.equal("You don't have enough money");
        });

        it('Should return apprpriate message when price if equal or below the budget', () => {
            // Arrange
            let price = 20;
            let budget = 20;

            // Act
            let result = bookSelection.isItAffordable(price, budget);

            // Assert
            expect(result).to.be.equal('Book bought. You have 0$ left');
        });
    });

    describe('suitableTitles', () => {
        it('Should throw an Error if input parameters are not array and string', () => {
            // Arrange, Act & Assert
            expect(() => bookSelection.suitableTitles(20, 'test')).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles('test', [])).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles(true, {})).to.throw("Invalid input");
        });

        it('Should return the array result properly when title is found', () => {
            // Arrange
            let booksArr = [{ title: "The Da Vinci Code", genre: "Thriller" }];
            let wantedGenre = 'Thriller';

            // Act
            let result = bookSelection.suitableTitles(booksArr, wantedGenre);

            // Assert
            expect(result[0]).to.be.equal("The Da Vinci Code");
        });

        it('Should return the array result properly when title is not found', () => {
            // Arrange
            let booksArr = [{ title: "The Da Vinci Code", genre: "Thriller" }];
            let wantedGenre = 'Horror';

            // Act
            let result = bookSelection.suitableTitles(booksArr, wantedGenre);

            // Assert
            expect(result.length).to.be.equal(0);
        });
    });
});