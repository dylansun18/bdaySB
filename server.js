var express = require('express');
var cors = require('cors');
var request = require('request');

var app = express();
app.use(cors());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.get('/', function(req, res){
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  dbo.collection("locations").find({}).toArray(function(err, result) {
	  	if(err) throw err;
	  	console.log(result);
	  	res.send(result);
	  	db.close();
	  });
	  // dbo.collection("locations").findOne({}, function(err, result) {
	  //   if (err) throw err;
	  //   console.log(result.name);
	  //   res.send(result);
	  //   db.close();
	  // });
	});
});

app.listen(5000);