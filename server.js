require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// crio um servidor express
const app = express();

// aplico configurações para dentro do servidor express, adicionando middlewares (body-parser, morgan, cors)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_HOST//+":"+process.env.DB_PORT;//"mongodb://127.0.0.1:27017"
console.log("URI: "+process.env.DB_HOST)
var people = require('./routers/poeple');

MongoClient.connect(uri, (err, client) => {
	if (err) return console.log(err)

	db = client.db('test')
	
	app.use('/', people);

	// o servidor irá rodar dentro da porta 9000
	app.listen(9000, () => console.log('Express started at http://localhost:9000'));
	
});

module.exports = app;