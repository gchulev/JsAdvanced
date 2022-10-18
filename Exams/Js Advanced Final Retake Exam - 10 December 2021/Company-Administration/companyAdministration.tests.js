let { expect } = require('chai');
let { companyAdministration } = require('./companyAdministration');

describe('companyAdministration', () => {
    describe('hiringEmployee', () => {
        it('Should throw an error if the possition is not equal to "programmer"', () => {
            // Arrange
            let name = 'Frank';
            let position = 'Infrastructure support';
            let experience = 4;

            // Act & Assert
            expect(() => companyAdministration.hiringEmployee(name, position, experience)).to.throw('We are not looking for workers for this position.');
        });

        it('It should return successfully hired if all parameters are correct', () => {
            // Arrange & Act
            let firstResult = companyAdministration.hiringEmployee('Tom', 'Programmer', 3);
            let secondResult = companyAdministration.hiringEmployee('Frank', 'Programmer', 12);

            // Assert
            expect(firstResult).to.be.equal(`Tom was successfully hired for the position Programmer.`);
            expect(secondResult).to.be.equal(`Frank was successfully hired for the position Programmer.`);
        });

        it('Should return not approved for the possition if years of experience are less than 3', () => {
            // Arrange
            let name = 'Tom';
            let position = 'Programmer';
            let yearsExperience = 2;

            // Act
            let result = companyAdministration.hiringEmployee(name, position, yearsExperience);

            // Assert
            expect(result).to.be.equal('Tom is not approved for this position.');
        });
    });

    describe('calculateSalary', () => {
        it('It shold throw an error if hours are not a number or are negative number', () => {
            // Arrange, Act & Assert
            expect(() => companyAdministration.calculateSalary('test')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
        });

        it('Should return the correct value after calculation', () => {
            // Arrange
            let hours = 20;
            let moreHourse = 0;

            // Act
            let result = companyAdministration.calculateSalary(hours);
            let secondResult = companyAdministration.calculateSalary(moreHourse);

            // Assert
            expect(result).to.be.equal(300);
            expect(secondResult).to.be.equal(0);
        });

        it('Should calculate bonus correctly', () => {
            // Arrange
            let hours = 161;

            // Act
            let result = companyAdministration.calculateSalary(hours);

            // Assert
            expect(result).to.be.equal(3415);
        });
    });

    describe('firedEmployee', () => {
        it('Should throw an error if the input is invalid', () => {
            // Arrange, Act & Assert
            expect(() => companyAdministration.firedEmployee('test', 5)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Tom', 'Mark'], 'test')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Tom', 'Mark'], 5.6)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Tom', 'Mark'], -1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Tom', 'Mark'], 2)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Tom', 'Mark'], 3)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee([], 0)).to.throw('Invalid input');
        });

        it('Should return the correct result when provided correct input', () => {
            // Arrange
            let inputArr = ["Petar", "Ivan", "George"];
            let index = 1;

            // Act
            let result = companyAdministration.firedEmployee(inputArr, index);
            let secondResult = companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0);

            // Assert
            expect(result).to.be.equal('Petar, George');
            expect(secondResult).to.be.equal('Ivan, George');
        });
    });
});