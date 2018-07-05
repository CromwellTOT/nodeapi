var express = require("express");
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ad = require("./appdao")
var url = "mongodb+srv://admin:ZjAGBVDqkfcamDMx@firstcluster-anzne.gcp.mongodb.net/test?retryWrites=true";
var dbName = "mydb";
ad.collectionName = "nodeapi";

// rest service
router.get("/", function(req, resp) {
	MongoClient.connect(url, function(err, client) {
		var db = client.db(dbName);
		ad.findAll(db, result => {
			resp.json(result);
			client.close();
		});
	});
});

router.post("/", function(req, resp) {
	var data = req.body;

	MongoClient.connect(url, function(err, client) {
		var db = client.db(dbName);
		ad.insert(db, data, function() {
			client.close();
		});
	});
});
/*
router.put("/", function(req, resp) {
	var data = req.body;
	
	MongoClient.connect(url, function(err, client) {
		var db = client.db(dbName);
		ad.update(db, {"id": id}, data, function() {
			resp.end("Trip " + id + ' updated');
			client.close();
		});
	});
});

router.delete("/:id", function(req, resp) {
	var id = req.params.id;

	MongoClient.connect(url, function(err, client) {
		var db = client.db(dbName);
		ad.delete(db, {"id": id}, function() {
			resp.end("Trip " + id + ' deleted');
			client.close();
		});
	});
});
*/
module.exports = router;





