const mongoose = require("mongoose");
const Form = require("./form");

const questionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
	 quizId: { 
         type: mongoose.Schema.Types.ObjectID, 
         ref: "Form" },

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
});

module.exports = mongoose.model("Question", questionSchema);