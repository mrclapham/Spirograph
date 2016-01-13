/**
 * Created by grahamclapham on 13/01/16.
 */
var SpiroGraph = require("./SpiroGraph");
document.addEventListener("DOMContentLoaded", function(){
    alert("Loaded");
});


module.exports = (function(){
    document.addEventListener("DOMContentLoaded", function(){
        var _targ = document.querySelector('#holder');
        var _spiro = new SpiroGraph(_targ);
        alert("Loaded");
    });
})();
