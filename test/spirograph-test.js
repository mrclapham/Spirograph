var jsdom = require('mocha-jsdom');
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

  it("getRaduis should return the same valeu as setRaduis set.", function(){
    _spiro.setRaduis(240);
    expect(_spiro.getRaduis()).toEqual(240);
  });

})



//
// describe("The Spirograph should be a ble to be instatiated passing a String as an argument for the DOM element's ID.", function(){
//
//
//         var _element2 = document.createElement('div');
//         _element2.setAttribute("ID","HolderDiv");
//         var _body = document.querySelector('body');
//         console.log("_element2 ",_element2);
//        // _spiro = new SpiroGraph(HolderDiv);
//
//
//
//     it("Should be instantiated with a String for the DOM element ID.", function(){
//         expect(_spiro).not.toBe(null);
//     })
// });
