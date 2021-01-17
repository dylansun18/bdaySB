var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = {name:"Kyle's Kitchen",
  			   address:"900 Embarcadero del Mar, Isla Vista, CA 93117",
  			   coords:{lat:34.412986413053574, lng:-119.85688506944356},
  			   gift:"1 ice cream cone",
  			   type:"restaurant",
  			   link:"https://www.kyleskitchen.com/rewards"}
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