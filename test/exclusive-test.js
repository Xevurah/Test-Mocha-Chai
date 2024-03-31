// https://www.chaijs.com/api/bdd/#method_include
var expect = require('chai').expect;

/**
 * By means of the 'only' we will say which tests or which blocks will be executed.
 * In the first case, having "only" along with the describes, it runs
 * ALL Inside Tests
 * In the second case, only the first test is run since it is the one that has
 * "only" along with the "it".
 * 
 * The only() function makes it possible to run only the block or test case when 
 * which we add to it. It is very useful if we have a large number of tests and for some reason 
 * We want to run a part of them or even a single test.
 */

/*describe.only('Case 1 - Only', () => {
    it ('Exclusive Test 1', () => {
        expect( true ).to.equal( true );
        expect( true ).to.be.true;
    });
    it ('Exclusive Test 2', () => {
        expect( true ).to.equal( true );
        expect( true ).to.be.true;
    });
});

describe('Case 2 - Only', () => {
    it.only ('Exclusive Test 1', () => {
        expect( true ).to.equal( true );
        expect( true ).to.be.true;
    });
    it ('Exclusive Test 2', () => {
        expect( true ).to.equal( true );
        expect( true ).to.be.true;
    });
});*/

