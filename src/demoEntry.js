/**
 * Created by grahamclapham on 13/01/16.
 */
var SpiroGraph = require("./Spirograph.js");
var dat = require('dat-gui');
var _api = {
        radius:300,
        radius2:200,
        radius3:200,
        outerColor: "rgba(255,255,0,1)",
        innerColour: "rgba(0,255,0,1)",
        width: 200,
        height: 200,
        guideThickness: 1,
        };
module.exports = (function(){
    document.addEventListener("DOMContentLoaded", function(){
        var _targ = document.querySelector('#holder');
        var _spiro = new SpiroGraph(_targ);
        document.querySelector("#destroy").addEventListener('click', function(e){
            e.preventDefault();
            console.log("Destroy called");
            _spiro.destroy();
            _spiro = null;
        });
        var gui = new dat.GUI();

        var setWidth= gui.add(_api, "width").min(100).max(600).step(10);
        var setHeight= gui.add(_api, "height").min(100).max(600).step(10);
        var setGuideThickness= gui.add(_api, "guideThickness").min(.5).max(5).step(.5);

        var setRadius = gui.add(_api, "radius").min(5).max(400).step(1);
        var setRadius2 = gui.add(_api, "radius2").min(5).max(400).step(1);
        var setRadius3 = gui.add(_api, "radius3").min(-100).max(400).step(1);
        var setOuterColor = gui.addColor(_api, "outerColor");
        var setInnerColour = gui.addColor(_api, "innerColour");


        setRadius.onChange(function(value) {
            _spiro.setRaduis(value);
        });

        setRadius2.onChange(function(value) {
            _spiro.setRaduis2(value);
        });

        setRadius3.onChange(function(value) {
            _spiro.setRaduis3(value);
        });

        setOuterColor.onChange(function(value) {
            _spiro.setOuterColor(value);
        });

        setInnerColour.onChange(function(value) {
            _spiro.setInnerColour(value);
        });

        setWidth.onChange(function(value) {
            _spiro.setWidth(value);
        });

        setHeight.onChange(function(value) {
            _spiro.setHeight(value);
        });

        setGuideThickness.onChange(function(value) {
            _spiro.setGuideThickness(value);
        });

    });
})();


