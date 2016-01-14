var SpiroGraph = require("../src/Spirograph")//  = require('../src/Spirograph') //fs.readFileSync('./src/Spirograph.js', "utf-8");

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

describe("The Spirograph should be able to be instatiated passing a DOM element as an argument.", function(){
    var _div = document.createElement('div')
    var _spiro = new SpiroGraph(_div)
    it("Should be instantiated", function(){
        expect(_spiro).not.toBe(null);
    })

    it("Should have a setRaduis", function(){
        expect(_spiro.setRaduis).toBeDefined();
    })
});

describe("Api setters should return the set values.", function(){
    var _spiro, _div;
    beforeEach(function() {
        _div = document.createElement('div');
        _spiro = new SpiroGraph(_div);
    });
    afterEach(function(){
        delete _spiro;
    });

    it("getRaduis should return the same value as setRaduis set.", function(){
        _spiro.setRaduis(240);
        expect(_spiro.getRaduis()).toEqual(240);
    });

    it("getRaduis should return the same value as setRaduis set.", function(){
        _spiro.setRaduis(120);
        expect(_spiro.getRaduis()).toEqual(120);
    });

    it("getRaduis2 should return the same value as setRaduis2 set.", function(){
        _spiro.setRaduis2(240);
        expect(_spiro.getRaduis2()).toEqual(240);
    });

    it("getRaduis2 should return the same value as setRaduis2 set.", function(){
        _spiro.setRaduis2(340);
        expect(_spiro.getRaduis2()).toEqual(340);
    });

    it("getRaduis2 should return the same value as setRaduis2 set.", function(){
        _spiro.setPlaying(true);
        expect(_spiro.getPlaying()).toEqual(true);
    });

    it("getOuterColor should return the same value as setOuterColor set, if set as a String.", function(){
        _spiro.setOuterColor('rgba(255,0,255,1)');
        expect(_spiro.getOuterColor()).toEqual('rgba(255,0,255,1)');
    });

    it("getOuterColor should return an rgba string if setOuterColor is set as an Array.", function(){
        _spiro.setOuterColor([255,0,255,.5]);
        expect(_spiro.getOuterColor()).toEqual('rgba(255,0,255,0.5)');
    });

    it("getOuterColor should return an rgba string if setOuterColor is set as a hex string.", function(){
        _spiro.setOuterColor("#ff0000");
        expect(_spiro.getOuterColor()).toEqual('rgba(255,0,0,1)');
    });
});

describe("The Spirograph should be a ble to be instatiated passing a String as an argument for the DOM element's ID.", function(){
    var _element2 = document.createElement('div');
    _element2.setAttribute('id', 'HolderDiv');
    var _body = document.querySelector('body');
    _body.appendChild(_element2);
    console.log("_element2 ",_element2);
    var _spiro2 = new SpiroGraph("#HolderDiv");

    it("Should be instantiated with a String for the DOM element ID.", function(){
        expect(_element2).not.toBe(null);
        expect( document.querySelector('#HolderDiv')).toBe(_element2);
    })
});

describe("Static functions", function(){
    it("SpiroGraph.checkColourValue should return desired results", function(){
        expect(SpiroGraph.checkColourValue("rgba(255,0,0,1)")).toEqual("rgba(255,0,0,1)");
        expect(SpiroGraph.checkColourValue("#FF0000")).toEqual("rgba(255,0,0,1)");
    });
});
