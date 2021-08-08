var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var fs = require('fs');


const port = 3000;
app.use(express.static(__dirname + '/public'));
app.listen(port, function() {
    console.log('server on!' + port);
})