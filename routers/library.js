var express = require('express');
var router = express.Router();
var path = require('path');

router.get("/", (req, res) => {
	var db = require("../db");

	var Library = db.Mongoose.model('library', db.LibrarySchema);
	Library.find({}).lean().exec(
      function (e, results) {
        res.render('library.ejs', { data: results })
   });
})

router.post('/nearbyLibraries', (req, res) => {
	var db = require("../db");

	var lat = req.body.lat;
	var lng = req.body.lng;

	console.log(req.body)
	var query = {
	    location: {
	      $near: {
	        $geometry: {
	          type: 'Point',
	          coordinates: [lng, lat]
	        },
	        $maxDistance: 3000
	      }
	    }
	}
	
	var Library = db.Mongoose.model('library', db.LibrarySchema);
	Library.find(query, (err, results) => {
		if (err) {
			console.log("Error!!!!")
		} else {
			res.render('library.ejs', { data: results })
		}
	})
});

module.exports = router;