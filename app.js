const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')


const passport = require("passport")
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

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

   
// // Sessions
// app.use(
//     session({
//       secret: 'keyboard cat',
//       resave: false,
//       saveUninitialized: false,
//      store: new MongoStore({ mongooseConnection: mongoose.connection,touchAfter: 24 * 3600 }),
//     })
// )

// // initialize passport
// app.use(passport.initialize());
// app.use(passport.session());


app.use(cors())

//setup routes

  app.use("/", require("./routes"));

  
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

    
		

