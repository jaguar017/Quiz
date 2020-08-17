

const Router = require("express").Router();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const { database } = require("firebase-admin");

Router.use("/users", ensureAuthenticated, require("./user/user"));

Router.get("/",(req,res)=> {
    res.render('dashboard')
})

Router.get("/login",(req,res)=> {
    res.render('login')
})

module.exports = Router;
