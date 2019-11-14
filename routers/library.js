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


module.exports = router;