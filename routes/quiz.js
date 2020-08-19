const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid")
const Quiz = require("../models/quizmodel");




const router = express.Router();

//Create the form for quiz 
router.post("/create",async (req, res, next) => {
	
			const quiz = new Quiz({
				_id: new mongoose.Types.ObjectId(),
				quizTitle: req.body.quizTitle,
				quizSubject:req.body.quizSubject,
				quizDate: req.body.quizDate,
				quizTime: req.body.quizTime,
				quizDuration: req.body.quizDuration,
				quizCode: shortid.generate(),
				question: req.body.question,
				
			});
			quiz.save()
				.then(async (result) => {
					console.log("created quiz")
					res.status(200).json({ message: "created quiz",result });
				})
				.catch((err) => {
					console.log(err)
					res.status(400).json({ error: "err" });
				});
		
            });

module.exports = router;