const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid")
const Form = require("../models/form");




const router = express.Router();

//Create feedbackform
router.post("/create",async (req, res, next) => {
	
	const form = new Form({
		_id: new mongoose.Types.ObjectId(),
		formTitle: req.body.formTitle,
		formDescription:req.body.formDescription,
		formCode: shortid.generate(),
		question: req.body.question,
		
	});
	form.save()
		.then(async (result) => {
			console.log("created form")
			res.status(200).json({ message: "created form",result });
		})
		.catch((err) => {
			console.log(err)
			res.status(400).json({ error: "err" });
		});

	});


//Edit the form
router.put('/update/:id', async function(req, res)  {
				let form = await Form.findById(req.params.id)
			
				 form.formTitle =  req.body.formTitle
				 form.formDescription = req.body.formDescription
				 form.question = req.body.question
		
				
			
				form.save()
				.then(async (result) => {
					console.log("updated form")
					res.status(200).json({ message: "updated form",result });
				})
				.catch((err) => {
					console.log(err)
					res.status(400).json({ error: "err" });
				});
		
			
			  
			  })

module.exports = router;