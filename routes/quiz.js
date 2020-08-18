const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid")
const Form = require("../models/form");
const Question = require("../models/question");



const router = express.Router();

//Create the form for quiz and feedback
router.post(
	"/createform",async (req, res, next) => {
		
			const quiz = new Form({
				_id: new mongoose.Types.ObjectId(),
				formName: req.body.formName,
				formType: req.body.formType.toLowerCase(),
                formCode: shortid.generate(),
        
			});
			quiz.save()
				.then(async (result) => {
                    res.send("created")
				})
				.catch((err) => {
					res.status(400).json({ error: "err" });
				});
		
            });

module.exports = router;