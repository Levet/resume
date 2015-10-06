var app = require('./app')(app);
var http = require('http').Server(app);

http.listen((3005), function(){
    console.log('Server listening on port')
})