const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	googleId: {
		type: String,
	},
    name: { 
        type: String,
        required: true,
     },

	email: {
		type: String,
        lowercase: true,
        required: true,
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
	},
	mobileNumber: {
        type: Number,
        required: true,
		match: /^([7-9][0-9]{9})$/g,
	},
	password: { 
        type: String ,
        required: true,
    },
	
	isEmailVerified: { 
        type: Boolean ,
        default:false},
});

module.exports = mongoose.model("User", userSchema);