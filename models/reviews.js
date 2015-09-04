var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var reviewSchema = new Schema({
	title: String,
	link: String,
	body: String,
	created: {type: Date, default: Date.now}
});

var Review = mongoose.model('Review', reviewSchema);
module.exports = Review;