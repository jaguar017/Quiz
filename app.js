const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require('method-override')
const cors = require('cors')



require("dotenv").config();

const app = express();


//set up view engine as ejs
app.set('view engine','ejs');

//Database connection
const MONGOURI = process.env.MONGOURI;

mongoose.connect(MONGOURI, {useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true,})
.then(() => console.log("Connected to database"))
.catch((err) => console.log(err));
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('_method'))


app.use(cors())

//setup routes
app.use("/", require("./routes/home"));
app.use("/users", require("./routes/user"));
app.use("/quiz", require("./routes/quiz"));
app.use("/form", require("./routes/feedbackform"));
  
  // error handler
  app.use((err, req, res, next) => {
    console.log(err.message);
    return res.status(400).send({
      message: err.message,
    });
  });




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

    
		

