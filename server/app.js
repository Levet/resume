module.exports = function(app){


    // Dependencies
    var express = require('express');
    var bodyParser = require('body-parser');
    var methodOverride = require('method-override');
    var path = require('path');
    var app = express();

        // Route Dependencies

            // Get Routes

            var resume = require('./routes/resume')(app);
            var contact = require('./routes/contact')(app);


    // Configuration
    app.set('view engine', 'jade');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(express.static(path.join(__dirname, '../public'))); 

    // Routes
    app.get('/', resume)

    app.post('/contact', contact);
   
    return app;
}