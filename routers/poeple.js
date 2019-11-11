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

module.exports = router;