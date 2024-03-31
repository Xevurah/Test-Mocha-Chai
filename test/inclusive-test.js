// https://www.chaijs.com/api/bdd/#method_include
var expect = require('chai').expect;

/**
 * Podemos decir que la función skip() se comporta de forma opuesta a only(). 
 * Con skip podemos provocar que, durante una ejecución, no se ejecute un bloque o 
 * incluso un test dentro del mismo. Es muy útil si en algún momento tenemos 
 * un bloque de tests o un solo test que no queremos que se ejecute por algún motivo.
 */

describe.skip('Case 1', () => {
    it ('Test 1', () => {
        expect( true ).to.equal( true );
        expect( true ).to.be.true;
    });
    it ('Test 2', () => {
        expect( true ).to.equal( true );
        expect( true ).to.be.true;
    });
});

describe('Test 2 - Sin Skip', () => {
    it.skip ('Inclusive Test 1 - Skip', () => {
        expect( true ).to.equal( true );
        expect( true ).to.be.true;
    });
    it ('Inclusive Test 2', () => {
        expect( true ).to.equal( true );
        expect( true ).to.be.true;
    });
});

