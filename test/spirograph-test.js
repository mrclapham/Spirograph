describe("A test suite", function(){
    it("Should run", function(){
        expect(true).toBe(true);
    })
});

var _spiro;
    beforeEach(function(){
        var _element = document.createElement('div')
    _spiro = new SpiroGraph('body');
});
describe("The Spiroggraph should be a ble to be instatiated.", function(){

    it("Should be instantiated", function(){
        expect(_spiro).not.toBe(null);
    })
})

