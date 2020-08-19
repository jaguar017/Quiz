const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid")
const Form = require("../models/form");




const router = express.Router();

//Create feedbackform
router.post("/create",async (req, res, next) => {
	
	const quiz = new Form({
		_id: new mongoose.Types.ObjectId(),
		formTitle: req.body.formTitle,
		formDescription:req.body.formDescription,
		formCode: shortid.generate(),
		question: req.body.question,
		
	});
	quiz.save()
		.then(async (result) => {
			console.log("created form")
			res.status(200).json({ message: "created form",result });
		})
		.catch((err) => {
			console.log(err)
			res.status(400).json({ error: "err" });
		});

	});



module.exports = router;