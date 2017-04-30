(function () {
	"use strict";
	
	var express = require('express'),
			bodyParser = require('body-parser'),
			mongoose = require('mongoose'),
			app = express();
	mongoose.Promise = global.Promise;

	app.use(express.static(__dirname));
	app.use(bodyParser.urlencoded({ extended: true }));
	
	mongoose.connect('mongodb://localhost/termproject');
	
	var CharacterSchema = mongoose.Schema({
		"name": String,
		"sex": String,
		"player": String,
        "age": String,
		"height": String,
        "weight": String,
		"xp": String,
		"background": String,
        "class": String,
		"ability": String,
		"language": String,
        "race": String,
		"skills": String,
		"factions": String,
        "alignment": String
	});
	var Character = mongoose.model('Character', CharacterSchema);
	
	app.use(function(req, res, next) {
  	console.log('%s %s', req.method, req.url);
		next();
	});
	
	app.get("/getCharacter", function(req, res) {
		
		Character.find(req.query, function(err, character) {
			if (err) {
				console.log(err);
			} else {
				console.log(character);
				res.json(character);
			}		
		});

	});
	
	app.post("/putCharacter", function(req, res) {
		var newCharacter = new Character(req.body);
		newCharacter.save(function(error, data) {
			if (error) console.log(error); 
		});
	});
	
	app.post("/updateCharacter", function(req, res) {
		var conditions = {"player" : req.body.player};
		var update = {$set : {"name" : req.body.name}};
		Character.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});
	
	app.post("/removeCharacter", function(req, res) {
		var oldCharacter = new Character(req.body);
		oldCharacter.remove(function(error, data) {
			if (error) console.log(error);
		});
	});

	app.listen(3000);
	console.log("Server listening on port 3000."); 

}());
