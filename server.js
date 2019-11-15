require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// Make a server express
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_HOST

console.log("URI: "+process.env.DB_HOST)

//ROUTERS
var library = require('./routers/library');


app.use('/', library);

// The server will run into of port 9000
app.listen(9000, () => console.log('Express started at http://localhost:9000'));

module.exports = app;