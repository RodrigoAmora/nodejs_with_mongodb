var express = require('express');
var router = express.Router();
var path = require('path');

router.get("/", (req, res) => {
	var db = require("../db");

	var People = db.Mongoose.model('people', db.UserSchema);
	People.find({}).lean().exec(
      function (e, results) {
        res.render('people.ejs', { data: results })
   });
})

router.post('/nearbyPeople', (req, res) => {
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
	
	var People = db.Mongoose.model('people', db.UserSchema);
	People.find(query, (err, results) => {
		if (err) {
			console.log("Error!!!!")
		} else {
			console.log("Found")
			// res.send({ data: results })
			res.render('people.ejs', { data: results })
		}
	})
});

module.exports = router;