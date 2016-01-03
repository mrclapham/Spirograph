var jsdom = require('jsdom').jsdom;
// setup the simplest document possible
var doc = jsdom('<!doctype html><html><body></body></html>')

// get the window object out of the document
var win = doc.defaultView

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc
global.window = win

var SpiroGraph = require('../src/SpirographNpm'),
    expect = require('chai').expect

console.log(SpiroGraph)

describe("A test suite", function(){
    it("Should run", function(){
        expect(true).to.be.true;
    })
});

describe("Dom test", function(){
    it("window should exist", function(){
        expect(window).to.not.be.null;
    })
});

var _spiro;

describe("The Spirograph should be a ble to be instatiated passing a DOM element as an argument.", function(){

    var _element = document.createElement('div')
    _spiro = new SpiroGraph(_element);

    it("Should be instantiated", function(){
        expect(_spiro).not.to.be.null;
    })
});
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
