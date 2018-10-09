const router = require('express').Router()
const passport = require('passport')

router.get('/', passport.authenticate('google')); 

router.get('/callback',  
  passport.authenticate('google', { failureRedirect: '/', session: true }),
  (req, res) => {
    res.redirect('/')
  }
);

module.exports = router