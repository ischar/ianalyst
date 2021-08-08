var express = require('express');
var app = express();
var http = require('http');

const port = 3000;

var server = app.listen(port, function () {
    console.log("Main Server has started on port : " + port);
});

app.get('/', function (req, res) {
    res.send('Hello nodemon');
});