var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res) => {
	db.collection('people').find().toArray((err, results) => {
		console.log(results[0].name)
		res.render('people.ejs', { data: results })

	})
});

module.exports = router;