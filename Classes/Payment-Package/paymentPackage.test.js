const { expect } = require('chai');
const { PaymentPackage } = require('./paymentPackage');

describe('PaymentPackage', () => {
    it('Should create object properly', () => {
        // Arrange, Act & Assert
        expect(() => new PaymentPackage('testName', 100)).to.not.throw();
    });

    it('Should throw error if noe elements or one of the arguments is not passed in the constructor', () => {
        // Arrange
        let arg1 = 'TestName';
        let arg2 = 2000;

        // Act & Assert
        expect(() => new PaymentPackage(arg1,)).to.throw();
        expect(() => new PaymentPackage(arg2)).to.throw();
        expect(() => new PaymentPackage()).to.throw();
    });

    it('All object properties should be correct after object creation', () => {
        // Arrange
        let package = new PaymentPackage('TestPackage', 8000);

        // Act
        let resultName = package.name;
        let resultValue = package.value;
        let resultVAT = package.VAT;
        let resultActive = package.active;

        // Assert
        expect(resultName).to.be.equal('TestPackage');
        expect(resultValue).to.be.equal(8000);
        expect(resultVAT).to.be.equal(20);
        expect(resultActive).to.be.equal(true);
    });

    it('Should throw an error if name is empty string, another type or not provided at all', () => {
        // Arrange, Act & Assert
        expect(() => new PaymentPackage(200, 100)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage('', 100)).throw('Name must be a non-empty string');
        expect(() => new PaymentPackage([], 100)).throw('Name must be a non-empty string');
        expect(() => new PaymentPackage()).throw('Name must be a non-empty string');
    });

    it('Should throw an error if "value" is not provided or is less than 0 or the type is not a number', () => {
        // Arrange, Act & Assert
        expect(() => new PaymentPackage('testName')).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('testName', -1)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('testName', [1, 2, 3])).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('testName', 'test')).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('testName', )).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('testName', true)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('testName', Number.NEGATIVE_INFINITY)).to.throw('Value must be a non-negative number');
        
    });


    it('Should throw error if "VAT" is less than 0 or is of different type than number', () => {
        // Arrange
        let package = new PaymentPackage("TestPackage", 200);

        // Act & Assert
        expect(() => package.VAT = -10).to.throw('VAT must be a non-negative number');
        expect(() => package.VAT = 'test').to.throw('VAT must be a non-negative number');
    });

    it('Should throw an error if property "active" is not boolean', () => {
        // Arrange
        let package = new PaymentPackage("TestPackage", 200);

        // Act & Assert
        expect(() => package.active = 20).to.throw('Active status must be a boolean');
    });
});

describe('toString function in "PaymentPackage class"', () => {
    it('Should return proper information about the package', () => {
        // Arrange
        const packages = [
            new PaymentPackage('HR Services', 1500),
            new PaymentPackage('Consultation', 800),
            new PaymentPackage('Partnership Fee', 7000),
        ];

        // Act
        packages[1].active = false;
        let result = packages.join('\n');
        let expectedResult =
`Package: HR Services
- Value (excl. VAT): 1500
- Value (VAT 20%): 1800
Package: Consultation (inactive)
- Value (excl. VAT): 800
- Value (VAT 20%): 960
Package: Partnership Fee
- Value (excl. VAT): 7000
- Value (VAT 20%): 8400`

        // Assert
        expect(result).to.be.equal(expectedResult);
    });
})