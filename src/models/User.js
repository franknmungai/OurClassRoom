//  * This file contains all the data models
const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGODB_URL}`, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});
// * defining a model
const userSchema = mongoose.Schema(
	{
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
	},
	{
		timestamps: true
	}
);
const User = mongoose.model('User', userSchema);
module.exports = User;
