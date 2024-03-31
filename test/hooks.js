describe.only('Hooks', () => {
    before(() => console.log('Before ALL ** it excecutes at first ONE TIME!!!'));
    after(() => console.log('After ALL ** it excecutes at last ONE TIME!!!'));
    beforeEach(()=>console.log('Before Each -- it excecutes before all "it"'));
    afterEach(()=>console.log('After Each -- it excecutes after all "it"'));
    it('Test 1', ()=>console.log('TEST 1'));
    it('Test 2', ()=>console.log('TEST 2'));
});