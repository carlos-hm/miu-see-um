const router = require('express').Router();
const passport = require('passport')
const {
  signup,
  login,
  getUser,
  logout
} = require('../controllers/auth.controller');


/* GET home page */
router.get('/', (req, res, next) => {
  res.status(200).json({msg: 'todo chido'})
});

//Auth
router.post('/signup', signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/profile', getUser);
router.get('/logout', logout)

//Museum



module.exports = router;
