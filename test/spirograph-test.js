describe("A test suite", function(){
    it("Should run", function(){
        expect(true).toBe(true);
    })
});

var _spiro;
var _element = document.createElement('div')
_spiro = new SpiroGraph(_element);

describe("The Spirograph should be a ble to be instatiated passing a DOM element as an argument.", function(){

    it("Should be instantiated", function(){
        expect(_spiro).not.toBe(null);
    })
});





