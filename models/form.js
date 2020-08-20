const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
	formTitle: { 
		type: String, 
		
	 },

	formDescription:{
		type:String,
	
	},

	formCode: {
		 type: String

	},
    question:[
	{
		quizquestion:{
		questiontext: {
			type: String,
			required: true,
			
		},
		options: [
			 {
				 text: {
					 type: String,
					 required: true,
					
				 },
			 },
		],
		correctAns: {
			type: String,
			required: true,	
		},
	}

    }],
	
	formStatus: {
		type: Number,
		default: 0,
	},
});	
 
  

module.exports = mongoose.model("Form", FormSchema);