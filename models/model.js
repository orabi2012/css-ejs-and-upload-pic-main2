// Step 3 - this is the code for ./models.js

const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
	name: String,
	desc: String,
	imgUrl: String,
	img:
	{
		data: Buffer,
		contentType: String
	}
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model('Image', imageSchema);
