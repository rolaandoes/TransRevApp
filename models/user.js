var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var reviews = require('./reviews.js');

var UserSchema = new Schema({
	firstName: {type: String, required: true},
	lastName: String,
	email: {type: String, required: true},
	created: {type: Date, default: Date.now},
	reviews:[reviews.schema]
});

var User = mongoose.model('User', UserSchema);
module.exports = User;