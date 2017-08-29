    var express  = require('express');
    var app = express(); // create our app w/ express
    var mongoose = require('mongoose'); // mongoose for mongodb
    var morgan = require('morgan'); // log requests to the console (express4)
    var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    mongoose.connect('mongodb://localhost:27017/data/db'); // connect to mongoDB database on modulus.io
    app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));// log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));// parse application/x-www-form-urlencoded
    app.use(bodyParser.json());// parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());
    app.listen(8080);
    console.log("server started");
    app.get('*', function(req, res) {
        res.sendfile('./src/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });