var expect = require('chai').expect;

describe.only('Arrays test', () => {
    const array = [1, 2, 4, 6, 8];
    // A test
    it ('The array values are equal', () => {
        const resultado = [1, 2, 4, 6, 8];
        expect(String(array)).to.equal('1,2,4,6,8');
        expect(array).to.eql(resultado);
        expect(array).to.deep.equal(resultado);
        expect([1,2,3]).to.have.ordered.members([1,2,3]);
    });
    it('Contains value "2" in the array', () => {
        expect(String(array).indexOf('2,') > -1 ).to.equal(true);
        expect(array).to.include(2);
        expect(array).to.be.an('array').that.includes(2);
        expect([1,2]).to.include(2).not.to.include(56);
    });
    it('Includes all the numbers or some of them', () => {
        // Includes those numbers with duplicity (They don't all have to be there)
        //[1, 2, 4, 6, 8]
        expect(array).to.include.members([1,1,1,4]);
        expect(array).to.include.members([1, 2, 4, 6, 8, 1, 2, 4, 6, 8]);
    });
    it('Contains values regardless of order', () => {
        expect(array).to.have.members([1, 2, 4, 6, 8]);
        expect(array).to.have.members([8, 6, 4, 2, 1]);
        expect(array).to.have.members([2, 1, 4, 6, 8]);
        expect(array).to.have.members([1, 2, 4, 8, 6]);
        expect(array).to.have.members([1, 4, 6, 2, 8]);
    });
    it('It has a length of 5 characters', () => {
        expect(array).to.have.lengthOf(5);
        expect(array.length).to.equal(5);
    });
});
