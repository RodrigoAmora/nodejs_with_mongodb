const mongoose = require('mongoose');
const uri = process.env.DB_HOST
const dbName = process.env.DB_NAME

mongoose.connect(uri+"/"+dbName, {useUnifiedTopology: true,
useNewUrlParser: true,}).then(() => console.log('DB Connected!')).catch(err => {
console.log(Error, err.message);
});


const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

var librarySchema = new mongoose.Schema({
	    name: String,
	    email: String,
	    location :  { type: {type:String}, coordinates: [Number]},
	}, { collection: 'library' }
);

module.exports = { Mongoose: mongoose, LibrarySchema: librarySchema }