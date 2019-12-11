const router = require('express').Router();
const passport = require('passport');
const catchErros = require("../middlewares/catchErrors")
const { isAuth } = require('../middlewares/index');
const {
  signup,
  login,
  getUser,
  logout
} = require('../controllers/auth.controller');

const {
  getMuseums
} = require('../controllers/museum.controller');
/* GET home page */
router.get('/', catchErros(getMuseums));

//Auth
router.post('/signup', signup);
router.post('/login', passport.authenticate('local'), login);
router.get('/profile', getUser);
router.get('/logout', logout);


module.exports = router;
