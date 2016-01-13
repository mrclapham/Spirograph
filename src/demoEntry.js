/**
 * Created by grahamclapham on 13/01/16.
 */
var SpiroGraph = require("./SpiroGraph");
var dat = require('dat-gui');
var _api = {
        width:100,
        height:100,
        radius:300,
        radius2:200
        };
module.exports = (function(){
    document.addEventListener("DOMContentLoaded", function(){
        var _targ = document.querySelector('#holder');
        var _spiro = new SpiroGraph(_targ);

        var gui = new dat.GUI();
        gui.add(_api, 'width');
        gui.add(_api, 'height', -5);

        var setRadius = gui.add(_api, "radius").min(5).max(400).step(1);
        var setRadius2 = gui.add(_api, "radius2").min(5).max(400).step(1);


        setRadius.onChange(function(value) {
            _spiro.setRaduis(value);
        });

        setRadius2.onChange(function(value) {
            _spiro.setRaduis2(value);
        });
    });
})();


