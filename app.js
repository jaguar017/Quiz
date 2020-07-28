const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')
const authRoutes = require('./routes/googleauth')
const passport = require("passport")
const cookieSession = require('cookie-session')
require("dotenv").config();
require('./config/passport-setup')



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

app.use(cookieSession({
    name: 'quiz-session',
    keys: ['key1', 'key2']
  }))
   
// initialize passport
app.use(passport.initialize());
app.use(passport.session());


app.use(cors())

//setup routes

app.use('/auth',authRoutes)

app.get('/',(req,res) => {
    res.send('Hello')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

    
		

