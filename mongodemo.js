var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = {name:"Chili's",
  			   address:"6950 Market Pl Dr, Goleta, CA 93117",
  			   coords:{lat:34.42971653461044, lng:-119.87057949509985},
  			   gift:"1 free dessert",
  			   type:"restaurant",
  			   link:"https://www.chilis.com/register"}
;
  dbo.collection("locations").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

// var ObjectId = require('mongodb').ObjectID;

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myquery = { _id: ObjectId("6003eec352ab7b26505a4dab") };
//   dbo.collection("locations").deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });
// });