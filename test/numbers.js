var expect = require('chai').expect;

/**
 * Sum of the elementes that have to be number
 * @param {*} arr List of numbers to sum
 */
function sum(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += Number(i);
    }
    return sum;
}

describe.only('Numbers test', () => {
    const numero = 2;
    it('Return result 0 with an empty array of numbers', () => {
        expect(sum([])).to.equal(0);
    });

    it ('The number is equal', () => {
        expect(sum([1,2,3])).to.equal(6);
    });
    it('The number is greater than 0', () => {
        expect(numero > 0).to.be.true;
        expect(numero < 0).to.be.false;
    })
    it('The sum is number type', () => {
        expect(sum([1,2,3])).to.be.a('number')
        expect(typeof sum([1,2,3])).to.equal('number');
    });
    it('Is not number', () => {
        expect(sum(['hi','world','!'])).to.be.NaN
    });

    it('Check the resultant number with an element in the array of the sum', () => {
        expect(sum([1])).to.equal(1);
    });

    it('Check the number (that is on string format) resultant with an element in the array of the sum', () => {
        expect(sum(['1'])).to.equal(1);
    });

    it('Numerical array with negative numbers', () => {
        expect(sum([1,-2,-3])).to.equal(-4);
    });

    it('Numerical array with negative numbers and strings with numerical value', () => {
        expect(sum([1,'-2','-3'])).to.equal(-4);
    });

});
