require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

// Make a server express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

// Running the server
app.listen(port, () => console.log('Express started at http://localhost:3000'));

module.exports = app;