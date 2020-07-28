const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

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
        match: /^([7-9][0-9]{9})$/g,
	},
	password: { 
        type: String ,
    },
	
	emailVerified: { 
        type: Boolean ,
        default:false},

    token: {
            type: String,
        },
    passResetKey: { 
        type: String
     },
    passKeyExpires: { 
        type: Number
     },
    verificationKey: { 
            type: String
         },
    verificationKeyExpires: { 
            type: Number 
        },
});

module.exports = mongoose.model("User", userSchema);