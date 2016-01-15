
var   express = require('express')
    , http = require('http')
    , path = require('path');

var app = express();

app.set('title','BA');
app.use(express.static(path.join(__dirname, 'demo')));

/* serves main page - run webpack to create the files in ./dist */
app.get('/', function (req, res) {
    res.sendFile("index.html", {"root": __dirname});
});

/* process.env.PORT is used in case you want to push to Heroku, for example, here the port will be dynamically allocated */
var port = process.env.PORT || 6090;

http.createServer(app).listen(port, function(){
    console.log('Express server listening on port ' + port);
});