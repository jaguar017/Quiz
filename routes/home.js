
const router = require("express").Router();


const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const { database } = require("firebase-admin");

router.use("/users", ensureAuthenticated, require("./user/users"));

router.get("/",(req,res)=> {
    res.render('dashboard')
})

router.get("/login",(req,res)=> {
    res.render('login')
})

module.exports = router;
