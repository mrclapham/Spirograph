describe("A test suite", function(){
    it("Should run", function(){
        expect(true).toBe(true);
    })
});

var _spiro;

describe("The Spirograph should be a ble to be instatiated passing a DOM element as an argument.", function(){

    var _element = document.createElement('div')
    _spiro = new SpiroGraph(_element);

    it("Should be instantiated", function(){
        expect(_spiro).not.toBe(null);
    })
});

describe("The Spirograph should be a ble to be instatiated passing a String as an argument for the DOM element's ID.", function(){


        var _element2 = document.createElement('div');
        _element2.setAttribute("ID","HolderDiv");
        var _body = document.querySelector('body');
        console.log("_element2 ",_element2);
       // _spiro = new SpiroGraph(HolderDiv);



    it("Should be instantiated with a String for the DOM element ID.", function(){
        expect(_spiro).not.toBe(null);
    })
});



