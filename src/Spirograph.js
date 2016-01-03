// shim layer with setTimeout fallback

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();


var SpiroGraph = function (targ, config){
    this.targ = targ;
    console.log("THE TARG = ", targ);
    if(config){
        this.config = config;
    }
    this.init()
}
// METHODS

SpiroGraph.prototype.getDomElement = function(){
    var _domElement = null;
    console.log("GET DOM ELEMENT this.targ = ", this.targ);

    if(typeof this.targ === 'string'){
        console.log("The target is a String...");
        try{
            _domElement = document.querySelector(this.targ);
           // console.log(" _domElement ", _domElement)
        }catch(err){
            console.log("Error");
        }
    }
    if(typeof this.targ.innerHTML && typeof this.targ.innerHTML === "string"){
        console.log("YES I AM A DOM ELEMENT...");
        _domElement = this.targ;
    }

    return _domElement;
}

SpiroGraph.prototype.init = function(){
    console.log('This targ = ', this.targ);
    var _domElement = this.getDomElement()

    console.log("_domElement ", _domElement)

    this.width = 1000;
    this.height = 1000;
    this.centerX = 500;
    this.centerY = 500;
    this.radius = 430;
    this.radius2 = 201;
    this.radius3 = 54;
    this.angle = 0;
    this._gearRatio1 = 0;
    this.increment = .5;
    this.canvas = this.getDomElement().appendChild(this.makeCanvas(this.width, this.height));
    this.canvasGiudes = this.getDomElement().appendChild(this.makeCanvas(this.width, this.height));
    this.canvasLines = this.getDomElement().appendChild(this.makeCanvas(this.width, this.height, "linesCanv"));
    this.guideThickness = .5;
    this.ctx = this.canvas.getContext("2d");
    this.ctxGuides = this.canvasGiudes.getContext("2d");
    this.ctxLines = this.canvasLines.getContext("2d");
    // colours
    this.mainColor = 'rgba(0,99,255,0.5)';
    this.mainLineThickness = .5;
    this.mainOpacity = 0.5;

    this.innerColour = 'rgba(255,0,255,0.2)';

    this.guideColourOuter = '#FF00FF'
    this.guideColourInner = '#00FFFF'

    this.innerLineThickness = .25;

    this.showEndDots = false;
    this.currentAngle = 0;
    this.innerAngle = 0
    this.anmInterval = null
    // the points
    this._points = [];
    this._points2 = [];
    this._points3 = []
    this._playing = true
    for(var prop in this.config){
        this[prop] = this.config[prop]
    }

    this.drawSpiral(this.ctx , this.centerX, this.centerY, this.radius, .1)
}


SpiroGraph.prototype.makeCanvas = function(width, height, opt_class){
    var canvas = document.createElement("canvas");
    canvas.className        = opt_class ? opt_class : "myClass";
    canvas.width            = width;
    canvas.height           = height;
    canvas.style.position   = 'absolute';
    canvas.style.top        = '0';
    canvas.style.left       = '0';

    return canvas
}

SpiroGraph.prototype.drawCircle = function(ctx,x ,y,r, colour, border ){
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fillStyle = colour;
    ctx.strokeStyle=colour;
    ctx.lineWidth = this.guideThickness;
    !border ? ctx.fill() : ctx.stroke();
}

SpiroGraph.prototype.drawSpiral =  function (ctx, centerX, centerY, radius, angle){
    this.currentAngle = 0;
    var steps = 360/angle;

    this._points = SpiroGraph.circleToXY({x:this.centerX, y:this.centerY}, this.radius,  this.currentAngle);
    this._points2 = SpiroGraph.circleToXY({x:this._points.x, y:this._points.y}, this.radius2,  this.currentAngle);
    this._points3 = SpiroGraph.circleToXY({x:this._points2.x, y:this._points2.y}, this.radius2,  this.currentAngle);

    var _this = this;

    window.requestAnimFrame(function(){
        if(_this.getPlaying() ){
            _this.draw.call(_this)
        }
    })

};

SpiroGraph.prototype.clear = function(ctx){
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.beginPath();

};

SpiroGraph.prototype.clearAll = function(){
    this.clear(this.ctx)
    this.clear(this.ctxGuides)
    this.clear(this.ctxLines)
};

SpiroGraph.prototype.drawGuidePath = function(){
    this.clear(this.ctxGuides)
    //this.ctxGuides.setLineDash([2,6]);
    this.ctxGuides.lineWidth = 0.2;
    this.drawCircle(this.ctxGuides, this.centerX, this.centerY, this.radius , this.guideColourInner, true);
    this.drawCircle(this.ctxGuides, this._points.x, this._points.y, this.radius2 ,  this.guideColourOuter, true);
    //var _tracerCircle = this.drawCircle(this.ctxGuides, this._points3.x, this._points3.y,3, '#00ffff', false);
};

SpiroGraph.prototype.plotPoints =function(){
    this._gearRatio1 = (2 * Math.PI * this.radius-this.radius2) /  (2 * Math.PI * this.radius2);
    this._points = SpiroGraph.circleToXY({x:this.centerX, y:this.centerY}, this.radius-this.radius2, this.currentAngle);
    this._points2 = SpiroGraph.circleToXY({x:this._points.x, y:this._points.y}, this.radius2, this.innerAngle * this._gearRatio1);
    this._points3old = this._points3 ? this._points3 : {x:0, y:0}
    this._points3 = SpiroGraph.circleToXY({x:this._points2.x, y:this._points2.y}, -this.radius3, this.innerAngle * this._gearRatio1);
};

SpiroGraph.prototype.drawSpiro = function(){
// inner circle
    // The dot at the end of the radiating line
    if(!this.showEndDots){
        this.drawCircle(this.ctx, this._points2.x, this._points2.y, 1, '#ff0000', false );
    }else{
        this.ctx.globalCompositeOperation = "source-out";
    }
    // This draws the radiating lines fron the two dots - inner and outer
    this.ctx.moveTo(this._points3.x, this._points3.y);
    // this.ctx.strokeStyle = "rgba(0, 0, 255)";
    this.ctx.lineTo(this._points2.x, this._points2.y);
    this.ctx.strokeStyle = this.innerColour;
    this.ctx.lineWidth = this.innerLineThickness;
    this.ctx.stroke();

    //test circle
    var compositeTypes = [
        'source-over','source-in','source-out','source-atop',
        'destination-over','destination-in','destination-out','destination-atop',
        'lighter','darker','copy','xor'
    ];

    //this.drawCircle(this.ctxLines, this._points3old.x, this._points3old.y, 2 , '#ffff00', true);
    this.ctxLines.fillStyle = "rgba(255, 255, 255, 0)";
    this.ctxLines.strokeStyle = "rgba(255, 0, 255, 0.5)";
    this.ctxLines.lineWidth =this.mainLineThickness ;

    this.ctxLines.lineTo(this._points3.x, this._points3.y);
//    this.ctxLines.setLineWidth(1);
    //globalCompositeOperation prevents the line becoming progressivly darker
    this.ctxLines.globalCompositeOperation = "source-out";
    this.ctxLines.stroke();
    this.currentAngle += this.increment
    this.innerAngle -= this.increment

}

SpiroGraph.prototype.draw = function(){
    var _this = this
    _this.plotPoints();
    _this.drawGuidePath();
    if(_this.getPlaying()){
        _this.drawSpiro()
    }
    window.requestAnimFrame(function(){_this.draw.call(_this)});
};

SpiroGraph.prototype.onRadiiChanged = function(){
    this.clearAll()
};

// STATIC FUNCTIONS

/**
 * Convert degrees to radians
 * @param value
 * @returns {number}
 */
SpiroGraph.toRadians = function(value){
    if(!isNaN(value)){
        return  value * Math.PI/180
    }else{
        throw new Error("Please provide a number value to convert to radians @function toRadians(value). ");
    }
}

/**
 * Converts a radius and angle into x and y positions, relative to the center of a circle.
 * @param radius
 * @param angle
 */
SpiroGraph.circleToXY = function (centre, radius, angle){
    var points = {x:0, y:0};

    if(!isNaN(centre.x) && !isNaN(centre.y) && !isNaN(radius) && !isNaN(angle) ){
        var radians =  SpiroGraph.toRadians(angle);
        points.x = centre.x + (radius * Math.cos(radians));
        points.y = centre.y + (radius * Math.sin(radians));
    }

    return points;
}

SpiroGraph.checkColourValue = function(value){
    // is it an array
    var _retValue = null
    if(value.constructor === Array){
        _retValue = "rgba(";
        for(var item in value){
            _retValue+=String(value[item])+","
        }
        _retValue += ".5 )";
    }

    if( typeof value === 'string'){
        _retValue =  value;
    }

    return _retValue
}

SpiroGraph.prototype.onPlayingChanged = function(){

};

// Methods
/**
 * The overall radius of the whole image.
 * @param value
 */
SpiroGraph.prototype.setRaduis = function(value){
    this.radius = value;
    this.onRadiiChanged();
};
/**
 * The overall radius of the whole image.
 * @returns {number|*}
 */
SpiroGraph.prototype.getRaduis = function(){
    return this.radius;
};

SpiroGraph.prototype.setRaduis2 = function(value){
    this.radius2 = value;
    this.onRadiiChanged();
}
SpiroGraph.prototype.getRaduis2 = function(){
    return this.radius2;
}
//-----------
SpiroGraph.prototype.xsetRaduis3 = function(value){
    this.radius3 = value;
    this.onRadiiChanged();
}
SpiroGraph.prototype.getRaduis3 = function(){
    return this.radius3;
}

SpiroGraph.prototype.setPlaying = function(value){
    this._playing = value;
}
SpiroGraph.prototype.getPlaying = function(){
    return this._playing;
}

SpiroGraph.prototype.setOuterColor = function(value){
    this.mainColor = value;
//TODO: add check for the colour format.
}

/*

 this.mainColor = 'rgba(0,99,255,0.5)';
 this.innerColour = 'rgba(255,0,255,0.2)';
 this.guideColourOuter = '#FF00FF'
 this.guideColourInner = '#00FFFF'

 */
SpiroGraph.prototype.setOuterColor = function(value){
    this.mainColor = SpiroGraph.checkColourValue(value);
//TODO: add check for the colour format.
}

SpiroGraph.prototype.setInnerColour = function(value){
    this.innerColour = SpiroGraph.checkColourValue(value);
    console.log( SpiroGraph.checkColourValue(value) );
//TODO: add check for the colour format.
}

SpiroGraph.prototype.setGuideColourOuter = function(value){
    this.guideColourOuter = SpiroGraph.checkColourValue(value);
//TODO: add check for the colour format.
}


SpiroGraph.prototype.setGuideColourInner = function(value){
    this.guideColourInner = SpiroGraph.checkColourValue(value);
//TODO: add check for the colour format.
}

module.exports = SpiroGraph;
