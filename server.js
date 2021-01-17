var express = require('express');
var cors = require('cors');
var request = require('request');

var app = express();
app.use(cors());

app.get('/', function(req, res){
    console.log("hello")
    res.send("hello")
});

app.listen(5000);