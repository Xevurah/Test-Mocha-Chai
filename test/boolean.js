var expect = require('chai').expect;
describe.only('Boolean test', () => {
    const numero = 2;
    it('the true value is true', () => {
        expect(true).equal(true);
        expect(true).to.be.true;
        expect(1 + 1 > 0).to.be.true;
    });
    it('the false value is false', () => {
        expect(false).equal(false);
        expect(false).to.be.false;
        expect(1 + 1 < 0).to.be.false;
    })
    it('1 is numerical type', () => {
        expect(1).to.be.a('number');
        expect(typeof 1).to.equal('number');
    });
    it('1 is not string type', () => {
        expect(typeof 1 === 'string').to.be.false;
        expect(typeof 1 === 'string').to.equal(false);
    });
    it('1 is not boolean type', () => {
        expect(typeof 1 === 'boolean').to.be.false;
        expect(typeof 1 === 'boolean').to.equal(false);
    });

});

