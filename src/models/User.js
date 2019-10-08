//  * This file contains all the data models
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ourClassRoom', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});
// * defining a model
const userSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
		lowercase: true
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
		lowercase: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true
	},
	phone: {
		type: Number,
		required: false,
		trim: true
	},
	subscribed: {
		type: Boolean,
		required: true,
		default: true
	}
});
const User = mongoose.model('User', userSchema);
module.exports = User;
