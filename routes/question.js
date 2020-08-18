const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid")
const Form = require("../models/form");
const Question = require("../models/question");



const router = express.Router();

//Add questions in quiz and feedback

router.post("/add", async (req, res, next) => {
	await Form.findById(req.body.quizId)
		.exec()
		.then(async (result1) => {
			new Question({
				_id: new mongoose.Types.ObjectId(),
				quizId: req.body.quizId,
				questiontext: req.body.questiontext,
				options: req.body.options,
				correctAns: req.body.correctAns,
			})
				.save()
				.then((result) => {
					res.status(201).json({
						message: "Added",
					});
				})
				.catch((err) => {
                    console.log(err)
					res.status(400).json({
                        
						message: "some error occurred",
					});
				});
		})
		.catch((err) => {
			res.status(400).json({
				message: "some error occurred123",
			});
		});
});


module.exports = router;