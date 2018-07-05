//node server
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var as = require("./routes/appservice");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/rest/app/", as);

app.use(express.static(__dirname + "/public")); // use for front end file access

// REST
/*
app.get("/:filename", function(req, resp) {
	var fileName = req.params.filename;
	resp.sendFile(__dirname + "/public/" + fileName + ".html");
});
*/

// started
app.listen(4444);

console.log("server started");