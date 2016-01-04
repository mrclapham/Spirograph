var jsdom = require('mocha-jsdom');
var SpiroGraph//  = require('../src/Spirograph') //fs.readFileSync('./src/Spirograph.js', "utf-8");
var expect = require('chai').expect;
var _body = '<!doctype html><html><body><div id="fixture"></div></body></html>'
var canvas = require('canvas');
// setup the simplest document possible, include the SpiroGraph js file

/**
jsdom.env(_body,
          [],
                  function (err, window) {
                      //console.log("HN Links", SpiroGraph);
                      global.window = window
                      global.document = window.document

                      var _element = window.document.querySelector('#fixture')
                    //  console.log("THE global.document IS : ", global.document)

                      SpiroGraph = require('../src/Spirograph')
                      // _spiro = new SpiroGraph(_element);
                      // console.log(_spiro)
                              var _element2 = document.createElement('div');
                              _element2.setAttribute("ID","HolderDiv");
                              var _body = document.querySelector('body');
                              // console.log("_element2 ",_element2);
                              _spiro = new SpiroGraph(_element2);
                    }
)

**/
describe('mocha tests', function () {

  jsdom()

  it('has document', function () {
    var div = document.createElement('div')
    expect(div.nodeName).eql('DIV')
  })


  it('has window', function () {
    global.window = window
    expect(window).to.not.be.null
  })

  it('canvas may be created', function(){
    var canvas = document.createElement("canvas");
    canvas.className        = "myClass";
    canvas.width            = 200;
    canvas.height           = 300;
    canvas.style.position   = 'absolute';
    canvas.style.top        = '0';
    canvas.style.left       = '0';
    expect(canvas.getContext).to.be.a('function')
  })


  it('spirograph instantiates', function(){
    SpiroGraph = require('../src/Spirograph')
    expect(SpiroGraph).to.be.a('function')
  })



  it('spirograph instantiates', function(){
    global.window = window

    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    SpiroGraph = require('../src/Spirograph')
    var div = document.createElement('div')

    var _spiro = new SpiroGraph(div)
    expect(_spiro).to.not.be.null
  });

  it("rwindow.requestAnimFrame = function", function(){
    global.window = window;
    expect(window.requestAnimationFrame).to.be.a("function");
  })


});




// var _element = document.querySelector('#fixture')
// var _holder = document.createElement('div')
// //console.log("_element ", _element);
// SpiroGraph = require('../src/Spirograph')
// _spiro = new SpiroGraph(_holder);


// get the window object out of the document
// var win = doc.defaultView


// set globals for mocha that make access to document and window feel
// natural in the test environment
// global.document = doc
// global.window = win



describe("A test suite", function(){
    it("Should run", function(){
        expect(true).to.be.true;
    })
});
//



// describe("The Spirograph should be able to be instatiated passing a DOM element as an argument.", function(){
//
//     it("Should be instantiated", function(){
//         expect(_spiro).not.to.be.null;
//     })
//
//
// });
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
