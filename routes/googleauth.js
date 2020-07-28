const passport = require("passport")
const router = require('express').Router();


//auth login
router.get('/login', (req,res)=>{
    res.render('login');
});

//logout
router.get('/logout',(req,res)=>{
    //handle with passport
    res.send('logging out')
})
router.get('/failed',(req,res) => {
    res.send('Failed to login')
})
router.get('/good',(req,res) => {
    res.send(`welcome ${req.user.displayName}`)
})

router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/auth/good');
  });

module.exports=router;