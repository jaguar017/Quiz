const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();



//routing
const app = express();

//Database connection
const MONGOURI = process.env.MONGOURI;

mongoose.connect(MONGOURI, {useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true,})
.then(() => console.log("Connected to database"))
.catch((err) => console.log(err));
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',(req,res) => {
    res.send('Hello')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

    
		

