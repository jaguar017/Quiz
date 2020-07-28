const passport = require("passport")
const router = require('express').Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')


//auth login
router.get('/login',ensureGuest, (req,res)=>{
    res.render('login');
});

//logout
router.get('/logout',(req,res)=>{
    
    req.logout()
    res.redirect('/')
})
router.get('/failed',(req,res) => {
    res.send('Failed to login')
})
router.get('/dashboard',ensureAuth,(req,res) => {
    res.render('dashboard')
})

router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/failed' }),
  function(req, res) {

    res.redirect('/auth/dashboard');
  });

module.exports=router;