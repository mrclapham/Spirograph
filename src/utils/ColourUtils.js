ColourUtils = {
    hexToRgb:function(hex, opacity){
        //TODO: thow an error if an incorrect value is passed
        var h=hex.replace('#', '');
        h =  h.match(new RegExp('(.{'+h.length/3+'})', 'g'));

        for(var i=0; i<h.length; i++)
            h[i] = parseInt(h[i].length==1? h[i]+h[i]:h[i], 16);

        if (typeof opacity != 'undefined') {
            h.push(opacity);
        } else{
            h.push("1")
        }

        return 'rgba('+h.join(',')+')';
    }
};


module.exports = ColourUtils;