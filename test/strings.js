var expect = require('chai').expect;
describe.only('Strings test', () => {
    const foo = 'bar';
    it ('Is equal to the string value', () => {
        expect(foo).to.equal('bar');
    });
    it('Is string type', () => {
        expect(foo).to.be.a('string')
        expect(typeof foo).to.equal('string');
    });
    it('It haves a lenght of 3 characters', () => {
        expect(foo).to.have.length(3);
        expect(foo.length).to.equal(3);
    });
    it('Find / Includes "ba" in the word', ()=> {
        expect(foo).to.include('ba');
        expect(foo).to.match(/^ba/);
        expect(foo).to.have.string('ba');
    });
    it('Exclude "fa" in the word', ()=> {
        expect(foo).not.to.include('fa');
        expect(foo).not.to.match(/^fa/);
        expect(foo).not.to.have.string('fa');
    });
});

