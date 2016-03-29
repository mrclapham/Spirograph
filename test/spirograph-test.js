var SpiroGraph = require("../src/Spirograph")//  = require('../src/Spirograph') //fs.readFileSync('./src/Spirograph.js', "utf-8");

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

describe("The Spirograph should be able to be instatiated passing a DOM element as an argument.", function(){
    var _div = document.createElement('div')
    var _spiro = new SpiroGraph(_div);
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

    it("getGuideThickness should return the same value as getGuideThickness set.", function(){
        _spiro.setGuideThickness(5);
        expect(_spiro.getGuideThickness()).toEqual(5);
    });

    it("getOuterColour should return the same value as setOuterColor set, if set as a String.", function(){
        _spiro.setOuterColor('rgba(255,0,255,1)');
        expect(_spiro.getOuterColour()).toEqual('rgba(255,0,255,1)');
    });

    it("getOuterColour should return an rgba string if setOuterColor is set as an Array.", function(){
        _spiro.setOuterColor([255,0,255,.5]);
        expect(_spiro.getOuterColour()).toEqual('rgba(255,0,255,0.5)');
    });

    it("getOuterColour should return an rgba string if setOuterColor is set as a hex string.", function(){
        _spiro.setOuterColor("#ff0000");
        expect(_spiro.getOuterColour()).toEqual('rgba(255,0,0,1)');
    });

    it("getCentre should return an object with an x and y property - x = half with, y = half height.", function(){
        _spiro.setWidth(700);
        _spiro.setHeight(900);
        var _centre = _spiro.getCentre();
        expect(_centre.x).toEqual(700/2);
        expect(_centre.y).toEqual(900/2);

    })

});

describe("The Spirograph should be a ble to be instatiated passing a String as an argument for the DOM element's ID.", function(){
    var _element2 = document.createElement('div');
    _element2.setAttribute('id', 'HolderDiv');
    var _body = document.querySelector('body');
    _body.appendChild(_element2);
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

describe("Resizing should recreate the canvas element.", function(){
    var _element3 = document.createElement('div');
    _element3.setAttribute('id', 'HolderDiv3');
    var _body = document.querySelector('body');
    _body.appendChild(_element3);
    var _spiro3 = new SpiroGraph("#HolderDiv3", {width:100, height:150});

    it("The Spirograph should have had its width and height set be the config oObject passed to it.", function(){
        expect(_spiro3.getWidth()).toEqual(100)
    });

    it("The three canvas Dom elements should be resizable via the API..", function(){
        var _canvasChildren = [].slice.call(_element3.children).filter(function(d,i){
            return d.nodeName.toLowerCase() === 'canvas'
        });
        expect(_canvasChildren.length).toEqual(3);

        _canvasChildren.map(function(dd,ii){
            expect(dd.width).toEqual(100);
        });

        _canvasChildren.map(function(dd,ii){
            expect(dd.height).toEqual(150);
        });

        _spiro3.setWidth(400);
        _spiro3.setHeight(650);

        _canvasChildren.map(function(dd,ii){
            expect(dd.width).toEqual(400);
        });

        _canvasChildren.map(function(dd,ii){
            expect(dd.height).toEqual(650);
        });

    })
});

describe("The destroy method", function(){
    var _destroyDiv = document.createElement('div');
    var _spiroDestroy = new SpiroGraph(_destroyDiv);
    _spiroDestroy.destroy();
    var _canvasChildren = [].slice.call(_destroyDiv.children);

    it("Should have all dom elements removed from the target Div.", function(){
        expect(_canvasChildren.length).toEqual(0)
    });

    it("Instace should not be playing.", function(){
        expect(_spiroDestroy.getPlaying()).toEqual(false)
    });

    it("Instace should destroyed totally be setting it to null.", function(){
        _spiroDestroy = null
        expect(_spiroDestroy).toBeNull();
    })
});


