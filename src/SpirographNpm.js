var fs = require('fs');

// Read and eval library
filedata = fs.readFileSync('./src/Spirograph.js','utf8');
eval(filedata);

/* The quadtree.js file defines a class 'QuadTree' which is all we want to export */

exports.SpiroGraph = SpiroGraph
