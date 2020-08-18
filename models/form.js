const mongoose = require("mongoose");
const Questions = require("./question");

const FormSchema = new mongoose.Schema({
	formName: { 
		type: String, 
		required: true
	 },

	formCode: {
		 type: String

	},

	formType: { 
		type: String 
	},
	

	formStatus: {
		type: Number,
		default: 0,
  },
 
});

module.exports = mongoose.model("Form", FormSchema);