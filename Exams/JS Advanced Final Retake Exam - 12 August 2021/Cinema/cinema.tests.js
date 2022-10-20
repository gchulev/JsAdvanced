let {expect} = require('chai');
let {cinema} = require('./cinema');

describe('cinema', () => {
    describe('showMovies', () => {
        it('Should show no movies if the input array is empty', () => {
            // Arrange
            let inputArr = [];

            // Act
            let result =  cinema.showMovies(inputArr);

            // Assert
            expect(result).to.be.equal('There are currently no movies to show.');
        });
        
        it('Should display the correct movies', () => {
            // Arrange
            let inputArr = ['King Kong', 'The Tomorrow War', 'Joker'];
            let secondArr = ['Transformers'];

            // Act
            let result = cinema.showMovies(inputArr);
            let secondResult = cinema.showMovies(secondArr);

            // Assert
            expect(result).to.be.equal('King Kong, The Tomorrow War, Joker');
            expect(secondResult).to.be.equal('Transformers');
        });
    });

    describe('ticketPrice', () => {
        it('Should return the correct price', () => {
            // Arrange
            let projectionType = 'Normal';
            let anotherProjectionType = 'Premiere';

            // Act
            let result = cinema.ticketPrice(projectionType);
            let secondResult = cinema.ticketPrice(anotherProjectionType);

            // Assert
            expect(result).to.be.equal(7.50);
            expect(secondResult).to.be.equal(12.00);
        });

        it('Should throw an error if the projection type is wrong', () => {
            // Arrange
            let projection = 'test';

            // Act & Assert
            expect(() => cinema.ticketPrice(projection)).to.throw('Invalid projection type.');
        });
    });

    describe('swapSeatsInHall', () => {
        it('Should return "Unsuccessful change of seats in the hall."', () => {
            // Arrange & Act
            //invalid first number and valid second number
            let result1 = cinema.swapSeatsInHall(true, 15);
            let result2 = cinema.swapSeatsInHall(2.2, 15);
            let result3 = cinema.swapSeatsInHall(0, 15);
            let result4 = cinema.swapSeatsInHall(-2, 15);
            let result5 = cinema.swapSeatsInHall(21, 15);
            //invalide second number and valid first number
            let result6 = cinema.swapSeatsInHall(15, true);
            let result7 = cinema.swapSeatsInHall(15, 2.2);
            let result8 = cinema.swapSeatsInHall(15, 0);
            let result9 = cinema.swapSeatsInHall(15, -2);
            let result10 = cinema.swapSeatsInHall(15, 21);
            //both valid but equal
            let result11 = cinema.swapSeatsInHall(15, 15);
            let result12 = cinema.swapSeatsInHall(15);
            
            //both numbers invalid
            let result13 = cinema.swapSeatsInHall();

            // Assert
            expect(result1).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(result2).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(result3).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(result4).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(result5).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(result6).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(result7).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(result8).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(result9).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(result10).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(result11).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(result12).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(result13).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('Should return "Successful change of seats in the hall."', () => {
            // Arrange & Act
            let result1 = cinema.swapSeatsInHall(2, 19);
            let result2 = cinema.swapSeatsInHall(1, 20);
            let result3 = cinema.swapSeatsInHall(19, 2);
            let result4 = cinema.swapSeatsInHall(20, 1);

            // Assert
            expect(result1).to.be.equal('Successful change of seats in the hall.');
            expect(result2).to.be.equal('Successful change of seats in the hall.');
            expect(result3).to.be.equal('Successful change of seats in the hall.');
            expect(result4).to.be.equal('Successful change of seats in the hall.');
        });
    });
});